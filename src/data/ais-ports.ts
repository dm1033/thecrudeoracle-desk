/** Oil doors the desk will actually query. A port is not a barrel. */

export type OilPort = {
  locode: string;
  name: string;
  country: string;
  choke: string;
  why: string;
};

export type ChokeBox = {
  slug: string;
  name: string;
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
  note: string;
};

/** ITU AIS types 80–89 are tankers. Cargo is 70–79. Do not mix them. */
export const TANKER_AIS_TYPES = "80,81,82,83,84,89";

export const OIL_PORTS: OilPort[] = [
  {
    locode: "AEFJR",
    name: "Fujairah",
    country: "UAE",
    choke: "hormuz",
    why: "The bypass. STS and storage outside the strait. Not a Ras Tanura loading.",
  },
  {
    locode: "SARTA",
    name: "Ras Tanura",
    country: "Saudi Arabia",
    choke: "hormuz",
    why: "Saudi crude door on the Gulf.",
  },
  {
    locode: "KWMEA",
    name: "Mina Al Ahmadi",
    country: "Kuwait",
    choke: "hormuz",
    why: "Kuwait export terminal.",
  },
  {
    locode: "QARLF",
    name: "Ras Laffan",
    country: "Qatar",
    choke: "hormuz",
    why: "LNG and condensate. Not crude spare.",
  },
  {
    locode: "SAYNB",
    name: "Yanbu",
    country: "Saudi Arabia",
    choke: "bab",
    why: "Red Sea workaround. East-West barrels only if the pipe runs.",
  },
  {
    locode: "SAJED",
    name: "Jeddah",
    country: "Saudi Arabia",
    choke: "bab",
    why: "Red Sea products more than crude.",
  },
  {
    locode: "EGSUZ",
    name: "Suez",
    country: "Egypt",
    choke: "suez",
    why: "Canal mouth. A transit is not a loading.",
  },
  {
    locode: "SGSIN",
    name: "Singapore",
    country: "Singapore",
    choke: "malacca",
    why: "Storage, bunkers, blending. A position, not a well.",
  },
  {
    locode: "NLRTM",
    name: "Rotterdam",
    country: "Netherlands",
    choke: "ara",
    why: "ARA. Europe's product sink.",
  },
  {
    locode: "USHOU",
    name: "Houston",
    country: "United States",
    choke: "usgc",
    why: "USGC export and refinery complex.",
  },
  {
    locode: "USCRP",
    name: "Corpus Christi",
    country: "United States",
    choke: "usgc",
    why: "The shale export dock.",
  },
  {
    locode: "RUNVS",
    name: "Novorossiysk",
    country: "Russia",
    choke: "bosphorus",
    why: "CPC and Russian Black Sea. Weather and politics.",
  },
  {
    locode: "ZACPT",
    name: "Cape Town",
    country: "South Africa",
    choke: "cape",
    why: "Bunker stop on the reroute. Not the flow.",
  },
  {
    locode: "INSIK",
    name: "Sikka",
    country: "India",
    choke: "malacca",
    why: "Jamnagar's door. A refinery, not a choke.",
  },
  {
    locode: "CNTAO",
    name: "Qingdao",
    country: "China",
    choke: "malacca",
    why: "China crude import tell.",
  },
  {
    locode: "NGBON",
    name: "Bonny",
    country: "Nigeria",
    choke: "waf",
    why: "Nigerian loadings. Force majeure lives here.",
  },
  {
    locode: "AOLAD",
    name: "Luanda",
    country: "Angola",
    choke: "waf",
    why: "West Africa. Atlantic Basin, Dated Brent grades.",
  },
];

export const CHOKE_BOXES: ChokeBox[] = [
  {
    slug: "hormuz",
    name: "Hormuz",
    minLat: 25.8,
    maxLat: 27.2,
    minLon: 55.9,
    maxLon: 57.4,
    note: "The market. A dot here is not a loading.",
  },
  {
    slug: "bab",
    name: "Bab el-Mandeb",
    minLat: 12.35,
    maxLat: 13.05,
    minLon: 42.95,
    maxLon: 43.65,
    note: "Red Sea door.",
  },
  {
    slug: "suez",
    name: "Suez",
    minLat: 29.85,
    maxLat: 31.28,
    minLon: 32.22,
    maxLon: 32.68,
    note: "Canal. Transit rent, not spare.",
  },
  {
    slug: "malacca",
    name: "Malacca",
    minLat: 1.05,
    maxLat: 5.9,
    minLon: 98.4,
    maxLon: 103.9,
    note: "Asia inbound. The quiet choke.",
  },
  {
    slug: "cape",
    name: "Cape",
    minLat: -35.3,
    maxLat: -33.5,
    minLon: 17.5,
    maxLon: 19.3,
    note: "The overflow valve. A bill, not a strait.",
  },
  {
    slug: "bosphorus",
    name: "Turkish Straits",
    minLat: 40.95,
    maxLat: 41.28,
    minLon: 28.85,
    maxLon: 29.2,
    note: "CPC and Black Sea.",
  },
  {
    slug: "usgc",
    name: "US Gulf",
    minLat: 27.3,
    maxLat: 29.9,
    minLon: -95.5,
    maxLon: -88.8,
    note: "Houston to the export docks.",
  },
];

export function portByLocode(locode: string) {
  return OIL_PORTS.find((p) => p.locode === locode.toUpperCase());
}

export function inBox(
  lat: number,
  lon: number,
  box: ChokeBox,
): boolean {
  return lat >= box.minLat && lat <= box.maxLat && lon >= box.minLon && lon <= box.maxLon;
}
