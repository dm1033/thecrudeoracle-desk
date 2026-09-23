import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CHOKE_BOXES, OIL_PORTS } from "@/data/ais-ports";
import { getAisMeta, pullAis, type AisFix, type AisSnapshot } from "@/lib/ais";

export const Route = createFileRoute("/ais")({
  loader: () => getAisMeta(),
  component: AisPage,
});

function AisPage() {
  const meta = Route.useLoaderData();
  const [locode, setLocode] = useState(OIL_PORTS[0]?.locode ?? "AEFJR");
  const [snap, setSnap] = useState<AisSnapshot | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const port = OIL_PORTS.find((p) => p.locode === locode) ?? OIL_PORTS[0];
  const box = CHOKE_BOXES.find((b) => b.slug === port?.choke);
  const dots = snap
    ? [
        ...snap.arrivals.filter((v) => v.lat != null && v.lon != null),
        ...(snap.chokeHits.find((g) => g.choke === port?.choke)?.vessels ?? []),
      ]
    : [];

  async function pull() {
    setBusy(true);
    setError("");
    try {
      const res = await pullAis({ data: { locode } });
      setSnap(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Feed failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
        AIS · VesselFinder · MarineTraffic · paid feeds
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
        Tankers on the water. Not barrels in the tank.
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
        I pull VesselFinder expected arrivals and port calls for one oil port, and MarineTraffic
        tanker positions that sit inside the choke boxes. A dot is a transponder. It is not a
        loading, not spare, and not a buy.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Badge tone={meta.keys.vesselfinder ? "neutral" : "muted"}>
          VesselFinder {meta.keys.vesselfinder ? "key on" : "key off"}
        </Badge>
        <Badge tone={meta.keys.marinetraffic ? "neutral" : "muted"}>
          MarineTraffic {meta.keys.marinetraffic ? "key on" : "key off"}
        </Badge>
        <Badge tone="muted">Cap 8 arrivals · 15 min cache · no auto-burn</Badge>
      </div>

      {!meta.keys.vesselfinder && !meta.keys.marinetraffic ? (
        <p className="mt-6 max-w-3xl rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
          Both keys are off on this server. I will not draw fake ships. Set{" "}
          <span className="font-mono text-fg">VESSELFINDER_USERKEY</span> and{" "}
          <span className="font-mono text-fg">MARINETRAFFIC_API_KEY</span> in the host environment,
          then pull. Docs:{" "}
          <a className="underline" href={meta.docs.vesselfinder}>
            VesselFinder
          </a>
          {" · "}
          <a className="underline" href={meta.docs.marinetraffic}>
            MarineTraffic AIS
          </a>
          .
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div>
          <label htmlFor="oil-port" className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            Oil port
          </label>
          <select
            id="oil-port"
            value={locode}
            onChange={(e) => setLocode(e.target.value)}
            className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
          >
            {OIL_PORTS.map((p) => (
              <option key={p.locode} value={p.locode}>
                {p.name} · {p.locode}
              </option>
            ))}
          </select>
          <p className="mt-3 text-sm leading-relaxed text-muted">{port?.why}</p>
          <Button className="mt-4 w-full" type="button" onClick={pull} disabled={busy}>
            {busy ? "Pulling…" : `Pull ${port?.name ?? "port"}`}
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-subtle">
            One click spends credits. VesselFinder expected-arrival AIS is 5 credits a hull. I cache
            the port for 15 minutes and refuse a second paid pull inside 12 seconds.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-3">
          <div className="flex items-baseline justify-between gap-3 px-1 pb-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {box ? box.name : "No box"} · {box?.note ?? "This port is a door, not a strait."}
            </p>
            <p className="font-mono text-[11px] text-subtle">{dots.length} plotted</p>
          </div>
          <ChokePlot box={box} dots={dots} />
        </div>
      </div>

      {error ? <p className="mt-4 text-sm text-down">{error}</p> : null}

      {snap ? (
        <div className="mt-8 space-y-8">
          <p className="text-sm leading-relaxed text-muted">
            {snap.port}, {snap.country} · {snap.cached ? "cached" : "fresh"} ·{" "}
            {new Date(snap.fetchedAt).toUTCString()}
            {snap.mtScanned ? ` · MarineTraffic scanned ${snap.mtScanned} rows, kept choke hits only` : ""}
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-subtle">{snap.note}</p>

          {snap.errors.length ? (
            <ul className="space-y-1 text-sm text-warn">
              {snap.errors.map((e) => (
                <li key={`${e.provider}-${e.message}`}>
                  {e.provider}: {e.message}
                </li>
              ))}
            </ul>
          ) : null}

          <section>
            <h2 className="font-display text-2xl">Expected tankers · VesselFinder</h2>
            <p className="mt-1 text-sm text-muted">AIS types 80–89. Next 12 hours. Destination is what the ship typed.</p>
            <FixTable rows={snap.arrivals} empty="No tanker arrivals in the window, or the key is dark." />
          </section>

          <section>
            <h2 className="font-display text-2xl">Port calls · last 24h</h2>
            <p className="mt-1 text-sm text-muted">
              VesselFinder port-call feed is not type-filtered. Read the event. Do not call it a VLCC count.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Port calls</caption>
                <thead className="bg-elevated font-mono text-[11px] uppercase tracking-wider text-subtle">
                  <tr>
                    <th className="px-3 py-2 font-medium" scope="col">Event</th>
                    <th className="px-3 py-2 font-medium" scope="col">IMO</th>
                    <th className="px-3 py-2 font-medium" scope="col">MMSI</th>
                    <th className="px-3 py-2 font-medium" scope="col">Port</th>
                    <th className="px-3 py-2 font-medium" scope="col">When (UTC)</th>
                  </tr>
                </thead>
                <tbody>
                  {snap.calls.length === 0 ? (
                    <tr>
                      <td className="px-3 py-4 text-muted" colSpan={5}>
                        No calls returned.
                      </td>
                    </tr>
                  ) : (
                    snap.calls.map((c, i) => (
                      <tr key={`${c.imo}-${c.timestamp}-${i}`} className="border-t border-border">
                        <td className="px-3 py-2">{c.event || "—"}</td>
                        <td className="px-3 py-2 font-mono tabular-nums">{c.imo || "—"}</td>
                        <td className="px-3 py-2 font-mono tabular-nums">{c.mmsi || "—"}</td>
                        <td className="px-3 py-2">
                          {c.port || "—"}
                          {c.country ? `, ${c.country}` : ""}
                        </td>
                        <td className="px-3 py-2 font-mono text-xs">{c.timestamp || "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl">Choke boxes · MarineTraffic</h2>
            <p className="mt-1 text-sm text-muted">
              Tanker class inside the boxes only. The rest of the page of 1,000 is discarded.
            </p>
            {snap.chokeHits.length === 0 ? (
              <p className="mt-4 text-sm text-muted">No choke hits on this pull.</p>
            ) : (
              snap.chokeHits.map((g) => (
                <div key={g.choke} className="mt-5">
                  <h3 className="font-display text-xl">
                    {g.name} <span className="font-mono text-sm text-muted">{g.vessels.length}</span>
                  </h3>
                  <p className="text-sm text-muted">{g.note}</p>
                  <FixTable rows={g.vessels} empty="Empty box." />
                </div>
              ))
            )}
          </section>
        </div>
      ) : null}
    </article>
  );
}

function FixTable({ rows, empty }: { rows: AisFix[]; empty: string }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[760px] text-left text-sm">
        <caption className="sr-only">AIS positions</caption>
        <thead className="bg-elevated font-mono text-[11px] uppercase tracking-wider text-subtle">
          <tr>
            <th className="px-3 py-2 font-medium" scope="col">Ship</th>
            <th className="px-3 py-2 font-medium" scope="col">Type</th>
            <th className="px-3 py-2 font-medium" scope="col">IMO</th>
            <th className="px-3 py-2 font-medium" scope="col">Spd</th>
            <th className="px-3 py-2 font-medium" scope="col">Dest</th>
            <th className="px-3 py-2 font-medium" scope="col">Position</th>
            <th className="px-3 py-2 font-medium" scope="col">Stamp</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="px-3 py-4 text-muted" colSpan={7}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={`${r.source}-${r.imo}-${r.mmsi}-${i}`} className="border-t border-border">
                <td className="px-3 py-2">{r.name}</td>
                <td className="px-3 py-2 text-muted">{r.typeName}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{r.imo || "—"}</td>
                <td className="px-3 py-2 font-mono tabular-nums">{r.speed ?? "—"}</td>
                <td className="px-3 py-2">{r.destination || "—"}</td>
                <td className="px-3 py-2 font-mono text-xs tabular-nums">
                  {r.lat != null && r.lon != null ? `${r.lat.toFixed(3)}, ${r.lon.toFixed(3)}` : "—"}
                </td>
                <td className="px-3 py-2 font-mono text-xs">{r.timestamp || "—"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function ChokePlot({
  box,
  dots,
}: {
  box: (typeof CHOKE_BOXES)[number] | undefined;
  dots: AisFix[];
}) {
  const w = 640;
  const h = 360;
  if (!box) {
    return (
      <div className="flex h-56 items-center justify-center text-sm text-muted">
        This port has no choke box. The table still stands.
      </div>
    );
  }
  const pad = 16;
  const xOf = (lon: number) => pad + ((lon - box.minLon) / (box.maxLon - box.minLon)) * (w - pad * 2);
  const yOf = (lat: number) => pad + ((box.maxLat - lat) / (box.maxLat - box.minLat)) * (h - pad * 2);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label={`${box.name} AIS plot`}>
      <rect width={w} height={h} fill="#100e0c" rx="8" />
      {[0.25, 0.5, 0.75].map((t) => (
        <g key={t}>
          <line x1={pad} x2={w - pad} y1={pad + t * (h - pad * 2)} y2={pad + t * (h - pad * 2)} stroke="#2c2722" />
          <line y1={pad} y2={h - pad} x1={pad + t * (w - pad * 2)} x2={pad + t * (w - pad * 2)} stroke="#2c2722" />
        </g>
      ))}
      <text x={pad} y={h - 6} fill="#6e675f" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        {box.minLon.toFixed(1)}°
      </text>
      <text x={w - pad - 36} y={h - 6} fill="#6e675f" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        {box.maxLon.toFixed(1)}°
      </text>
      <text x={pad} y={14} fill="#6e675f" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        {box.maxLat.toFixed(1)}°N
      </text>
      {dots.map((d, i) =>
        d.lat != null && d.lon != null ? (
          <circle
            key={`${d.imo}-${i}`}
            cx={xOf(d.lon)}
            cy={yOf(d.lat)}
            r={d.source === "marinetraffic" ? 4.5 : 5.5}
            fill={d.source === "marinetraffic" ? "#c4a574" : "#7dba9a"}
          >
            <title>{`${d.name} ${d.speed ?? ""} kn ${d.destination}`}</title>
          </circle>
        ) : null,
      )}
    </svg>
  );
}
