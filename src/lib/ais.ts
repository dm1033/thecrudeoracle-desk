import { createServerFn } from "@tanstack/react-start";
import {
  CHOKE_BOXES,
  OIL_PORTS,
  TANKER_AIS_TYPES,
  inBox,
  portByLocode,
  type OilPort,
} from "@/data/ais-ports";

const VF = "https://api.vesselfinder.com";
const MT = "https://services.marinetraffic.com/api";
const CACHE_MS = 15 * 60 * 1000;
const PACE_MS = 12_000;
const VF_LIMIT = 8;

export type AisFix = {
  source: "vesselfinder" | "marinetraffic";
  name: string;
  imo: string;
  mmsi: string;
  lat: number | null;
  lon: number | null;
  speed: number | null;
  course: number | null;
  destination: string;
  eta: string;
  draught: number | null;
  typeName: string;
  timestamp: string;
  choke: string;
};

export type PortEvent = {
  imo: string;
  mmsi: string;
  locode: string;
  port: string;
  country: string;
  event: string;
  timestamp: string;
};

export type AisSnapshot = {
  ok: boolean;
  locode: string;
  port: string;
  country: string;
  why: string;
  fetchedAt: string;
  cached: boolean;
  arrivals: AisFix[];
  calls: PortEvent[];
  chokeHits: { choke: string; name: string; note: string; vessels: AisFix[] }[];
  mtScanned: number;
  errors: { provider: "vesselfinder" | "marinetraffic"; message: string }[];
  keys: { vesselfinder: boolean; marinetraffic: boolean };
  note: string;
};

type CacheEntry = { at: number; snap: AisSnapshot };

const portCache = new Map<string, CacheEntry>();
let mtCache: { at: number; scanned: number; vessels: AisFix[]; error?: string } | null = null;
let lastPaidAt = 0;

function keys() {
  const vf = (process.env.VESSELFINDER_USERKEY || process.env.VESSELFINDER_API_KEY || "").trim();
  const mt = (process.env.MARINETRAFFIC_API_KEY || "").trim();
  return { vf, mt, flags: { vesselfinder: Boolean(vf), marinetraffic: Boolean(mt) } };
}

function scrub(text: string, secrets: string[]) {
  let out = text;
  for (const secret of secrets) {
    if (secret.length > 4) out = out.split(secret).join("••••");
  }
  return out.replace(/userkey=[^&\s]+/gi, "userkey=••••").slice(0, 280);
}

function num(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() && Number.isFinite(Number(v))) return Number(v);
  return null;
}

function str(v: unknown): string {
  if (v == null) return "";
  return String(v).trim();
}

async function getJson(url: string, secrets: string[]) {
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "CrudeOracleDesk/1.0" },
    signal: AbortSignal.timeout(12000),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(scrub(`${res.status} ${text}`, secrets));
  }
  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new Error(scrub(text || "Not JSON", secrets));
  }
}

function vfError(body: unknown): string | null {
  if (body && typeof body === "object" && "error" in body) {
    const err = (body as { error?: unknown }).error;
    if (typeof err === "string" && err) return err;
  }
  return null;
}

async function vesselFinderPort(locode: string, userkey: string) {
  const secrets = [userkey];
  const arrivalsUrl = new URL(`${VF}/expectedarrivals`);
  arrivalsUrl.searchParams.set("userkey", userkey);
  arrivalsUrl.searchParams.set("locode", locode);
  arrivalsUrl.searchParams.set("interval", "720");
  arrivalsUrl.searchParams.set("limit", String(VF_LIMIT));
  arrivalsUrl.searchParams.set("aistype", TANKER_AIS_TYPES);
  arrivalsUrl.searchParams.set("format", "json");
  arrivalsUrl.searchParams.set("errormode", "409");

  const callsUrl = new URL(`${VF}/portcalls`);
  callsUrl.searchParams.set("userkey", userkey);
  callsUrl.searchParams.set("locode", locode);
  callsUrl.searchParams.set("interval", "1440");
  callsUrl.searchParams.set("limit", String(VF_LIMIT));
  callsUrl.searchParams.set("format", "json");
  callsUrl.searchParams.set("errormode", "409");

  const [arrivalsBody, callsBody] = await Promise.all([
    getJson(arrivalsUrl.toString(), secrets),
    getJson(callsUrl.toString(), secrets),
  ]);

  const arrivalErr = vfError(arrivalsBody);
  const callErr = vfError(callsBody);
  if (arrivalErr) throw new Error(scrub(arrivalErr, secrets));

  const arrivals: AisFix[] = [];
  if (Array.isArray(arrivalsBody)) {
    for (const row of arrivalsBody) {
      const ais = (row as { AIS?: Record<string, unknown> }).AIS ?? {};
      const lat = num(ais.LATITUDE);
      const lon = num(ais.LONGITUDE);
      const choke = CHOKE_BOXES.find((b) => lat != null && lon != null && inBox(lat, lon, b))?.slug ?? "";
      arrivals.push({
        source: "vesselfinder",
        name: str(ais.NAME) || "Unnamed",
        imo: str(ais.IMO),
        mmsi: str(ais.MMSI),
        lat,
        lon,
        speed: num(ais.SPEED),
        course: num(ais.COURSE),
        destination: str(ais.DESTINATION),
        eta: str(ais.ETA) || str(ais.ETA_AIS),
        draught: num(ais.DRAUGHT),
        typeName: `AIS ${str(ais.TYPE) || "tanker"}`,
        timestamp: str(ais.TIMESTAMP),
        choke,
      });
    }
  }

  const calls: PortEvent[] = [];
  if (!callErr && Array.isArray(callsBody)) {
    for (const row of callsBody) {
      const pc = (row as { PORTCALL?: Record<string, unknown> }).PORTCALL ?? {};
      calls.push({
        imo: str(pc.IMO),
        mmsi: str(pc.MMSI),
        locode: str(pc.LOCODE) || locode,
        port: str(pc.PORT),
        country: str(pc.COUNTRY),
        event: str(pc.EVENT),
        timestamp: str(pc.TIMESTAMP),
      });
    }
  }

  return { arrivals, calls, callNote: callErr ? scrub(callErr, secrets) : "" };
}

async function marineTrafficTankers(apiKey: string): Promise<{ scanned: number; vessels: AisFix[] }> {
  if (mtCache && Date.now() - mtCache.at < CACHE_MS && !mtCache.error) {
    return { scanned: mtCache.scanned, vessels: mtCache.vessels };
  }
  const secrets = [apiKey];
  const url = new URL(`${MT}/exportvessels/${encodeURIComponent(apiKey)}`);
  url.searchParams.set("v", "9");
  url.searchParams.set("timespan", "60");
  url.searchParams.set("vesseltypeid", "8");
  url.searchParams.set("limit", "1000");
  url.searchParams.set("protocol", "jsono");

  const body = await getJson(url.toString(), secrets);
  const data = (body as { DATA?: unknown }).DATA;
  if (!Array.isArray(data)) {
    throw new Error("MarineTraffic returned no DATA array.");
  }

  const vessels: AisFix[] = [];
  for (const row of data) {
    const r = row as Record<string, unknown>;
    const lat = num(r.LAT);
    const lon = num(r.LON);
    if (lat == null || lon == null) continue;
    const box = CHOKE_BOXES.find((b) => inBox(lat, lon, b));
    if (!box) continue;
    const summary = str(r.AIS_TYPE_SUMMARY);
    if (summary && !/tanker/i.test(summary) && !/tanker/i.test(str(r.TYPE_NAME))) continue;
    vessels.push({
      source: "marinetraffic",
      name: str(r.SHIPNAME) || "Unnamed",
      imo: str(r.IMO),
      mmsi: str(r.MMSI),
      lat,
      lon,
      speed: num(r.SPEED),
      course: num(r.COURSE),
      destination: str(r.DESTINATION),
      eta: str(r.ETA),
      draught: num(r.DRAUGHT),
      typeName: str(r.TYPE_NAME) || summary || "Tanker",
      timestamp: str(r.TIMESTAMP),
      choke: box.slug,
    });
    if (vessels.length >= 60) break;
  }

  mtCache = { at: Date.now(), scanned: data.length, vessels };
  return { scanned: data.length, vessels };
}

function chokeGroups(vessels: AisFix[]) {
  return CHOKE_BOXES.map((box) => ({
    choke: box.slug,
    name: box.name,
    note: box.note,
    vessels: vessels.filter((v) => v.choke === box.slug),
  })).filter((g) => g.vessels.length > 0);
}

function emptySnap(port: OilPort, flags: AisSnapshot["keys"], message: string): AisSnapshot {
  return {
    ok: false,
    locode: port.locode,
    port: port.name,
    country: port.country,
    why: port.why,
    fetchedAt: new Date().toISOString(),
    cached: false,
    arrivals: [],
    calls: [],
    chokeHits: [],
    mtScanned: 0,
    errors: message ? [{ provider: "vesselfinder", message }] : [],
    keys: flags,
    note: "AIS is a position. It is not a barrel, a loading, or spare capacity.",
  };
}

export const getAisMeta = createServerFn({ method: "GET" }).handler(async () => {
  const { flags } = keys();
  const cached = [...portCache.entries()].map(([locode, entry]) => ({
    locode,
    port: entry.snap.port,
    fetchedAt: entry.snap.fetchedAt,
    arrivals: entry.snap.arrivals.length,
    calls: entry.snap.calls.length,
  }));
  return {
    ports: OIL_PORTS,
    boxes: CHOKE_BOXES,
    keys: flags,
    cached,
    docs: {
      vesselfinder: "https://api.vesselfinder.com/docs/",
      marinetraffic: "https://servicedocs.marinetraffic.com/tag/AIS-API/",
    },
  };
});

export const pullAis = createServerFn({ method: "POST" })
  .validator((input: { locode?: string }) => {
    const locode = (input?.locode ?? "AEFJR").toString().trim().toUpperCase();
    if (!/^[A-Z]{5}$/.test(locode)) throw new Error("Port code must be a UN/LOCODE.");
    const port = portByLocode(locode);
    if (!port) throw new Error("That port is not on the oil book.");
    return { locode };
  })
  .handler(async ({ data }): Promise<AisSnapshot> => {
    const port = portByLocode(data.locode)!;
    const { vf, mt, flags } = keys();
    const hit = portCache.get(port.locode);
    if (hit && Date.now() - hit.at < CACHE_MS) {
      return { ...hit.snap, cached: true, keys: flags };
    }

    if (!vf && !mt) {
      return emptySnap(
        port,
        flags,
        "Both feeds are dark. Set VESSELFINDER_USERKEY and MARINETRAFFIC_API_KEY on the server. I will not invent positions.",
      );
    }

    const now = Date.now();
    if (now - lastPaidAt < PACE_MS) {
      if (hit) return { ...hit.snap, cached: true, keys: flags };
      return emptySnap(port, flags, "Pacing the paid feeds. Twelve seconds between pulls. Credits are not free.");
    }
    lastPaidAt = now;

    const errors: AisSnapshot["errors"] = [];
    let arrivals: AisFix[] = [];
    let calls: PortEvent[] = [];
    if (vf) {
      try {
        const vfRes = await vesselFinderPort(port.locode, vf);
        arrivals = vfRes.arrivals;
        calls = vfRes.calls;
        if (vfRes.callNote) errors.push({ provider: "vesselfinder", message: `Port calls: ${vfRes.callNote}` });
      } catch (err) {
        errors.push({
          provider: "vesselfinder",
          message: err instanceof Error ? err.message : "VesselFinder failed.",
        });
      }
    } else {
      errors.push({
        provider: "vesselfinder",
        message: "VESSELFINDER_USERKEY is not set. Expected arrivals and port calls stay dark.",
      });
    }

    let mtScanned = 0;
    let mtVessels: AisFix[] = [];
    if (mt) {
      try {
        const mtRes = await marineTrafficTankers(mt);
        mtScanned = mtRes.scanned;
        mtVessels = mtRes.vessels;
      } catch (err) {
        errors.push({
          provider: "marinetraffic",
          message: err instanceof Error ? err.message : "MarineTraffic failed.",
        });
      }
    } else {
      errors.push({
        provider: "marinetraffic",
        message: "MARINETRAFFIC_API_KEY is not set. Choke-box positions stay dark.",
      });
    }

    const snap: AisSnapshot = {
      ok: arrivals.length > 0 || calls.length > 0 || mtVessels.length > 0,
      locode: port.locode,
      port: port.name,
      country: port.country,
      why: port.why,
      fetchedAt: new Date().toISOString(),
      cached: false,
      arrivals,
      calls,
      chokeHits: chokeGroups(mtVessels),
      mtScanned,
      errors,
      keys: flags,
      note: "VesselFinder: tanker AIS types 80–89 expected in the next 12 hours, cap 8, plus 24h port calls (all types the port feed returns). MarineTraffic: tanker class in the choke boxes, last 60 minutes, one page, cached 15 minutes. A position is not a barrel.",
    };
    portCache.set(port.locode, { at: Date.now(), snap });
    return snap;
  });
