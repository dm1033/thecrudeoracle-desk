/** What the desk will actually call. A contract is not a feed. */

export type FeedStatus = "live" | "pull" | "book" | "dark";
export type FeedDomain = "Physical" | "Paper" | "Balances" | "Upstream" | "Water" | "News";

export type Feed = {
  id: string;
  domain: FeedDomain;
  name: string;
  provider: string;
  method: string;
  cadence: string;
  status: FeedStatus;
  usedFor: string;
  href: string;
  note: string;
};

export const STACK_RULE =
  "Physical VWAP is deals. Futures are a book. Agency balances are monthly. AIS is a position. I do not mix them, and I do not invent a print I have not licensed.";

export const FEEDS: Feed[] = [
  {
    id: "argus-dated",
    domain: "Physical",
    name: "Argus North Sea Dated",
    provider: "Argus Media",
    method: "Argus Direct",
    cadence: "Daily assessment",
    status: "dark",
    usedFor: "Light-sweet physical marker",
    href: "/trade",
    note: "Dated is the physical basket, including WTI Midland. Not on this desk until the contract is.",
  },
  {
    id: "argus-hou",
    domain: "Physical",
    name: "Argus WTI Houston / Midland",
    provider: "Argus Media",
    method: "PA0033586 · PA0033587",
    cadence: "Daily assessment",
    status: "dark",
    usedFor: "USGC and Permian prompt",
    href: "/trade",
    note: "Differentials to NYMEX, not the NYMEX print. Codes named. Prices not invented.",
  },
  {
    id: "argus-asci",
    domain: "Physical",
    name: "Argus Sour Crude Index",
    provider: "Argus Media",
    method: "Argus Direct",
    cadence: "Daily assessment",
    status: "dark",
    usedFor: "Mars, SGC, complex-refinery intake",
    href: "/trade",
    note: "Sour Gulf is not WTI. ASCI stays dark without the feed.",
  },
  {
    id: "argus-acmt",
    domain: "Physical",
    name: "Argus Crude Market Ticker",
    provider: "Argus Media",
    method: "Hourly bid-ask",
    cadence: "07:00–16:00 CT",
    status: "dark",
    usedFor: "Intraday Houston and Midland liquidity",
    href: "/trade",
    note: "An hourly physical window. Not a futures tick.",
  },
  {
    id: "cme-cl",
    domain: "Paper",
    name: "NYMEX light sweet (CL)",
    provider: "CME Group",
    method: "WebSocket top-of-book",
    cadence: "Tick",
    status: "dark",
    usedFor: "Paper liquidity, settlement",
    href: "/trade",
    note: "The licensed socket is not connected. The desk shows a delayed public mark instead.",
  },
  {
    id: "cme-cvol",
    domain: "Paper",
    name: "CME CVOL",
    provider: "CME Group",
    method: "REST",
    cadence: "Session",
    status: "dark",
    usedFor: "30-day implied vol",
    href: "/trade",
    note: "Vol is a surface. I will not print a number I do not have.",
  },
  {
    id: "ice-brent",
    domain: "Paper",
    name: "ICE Brent (B)",
    provider: "ICE",
    method: "ICE Data API",
    cadence: "Tick",
    status: "dark",
    usedFor: "The seaborne financial marker",
    href: "/trade",
    note: "ICE Connect is a contract. Delayed Brent on the tape is not ICE.",
  },
  {
    id: "delayed-tape",
    domain: "Paper",
    name: "Delayed CL, Brent, RBOB, ULSD",
    provider: "Public futures marks",
    method: "Server fetch, labelled delayed",
    cadence: "On page load",
    status: "live",
    usedFor: "Structure, crack sketch, not execution",
    href: "/trade",
    note: "The only price feed that is actually on. Delayed. Not a ticket.",
  },
  {
    id: "eia",
    domain: "Balances",
    name: "EIA WPSR and STEO",
    provider: "U.S. EIA",
    method: "Published tables on the desk",
    cadence: "Weekly / monthly",
    status: "book",
    usedFor: "Stocks, runs, balance",
    href: "/flows",
    note: "API v2 wants a free key and a route. Until then the desk carries the last cited print, not a silent scrape.",
  },
  {
    id: "opec",
    domain: "Balances",
    name: "OPEC MOMR",
    provider: "OPEC",
    method: "Monthly tables, secondary sources",
    cadence: "Monthly",
    status: "book",
    usedFor: "Demand, OPEC production, OECD stocks",
    href: "/flows",
    note: "Read against IEA. Never instead of it.",
  },
  {
    id: "iea",
    domain: "Balances",
    name: "IEA Oil Market Report",
    provider: "IEA",
    method: "Monthly public comparison",
    cadence: "Monthly",
    status: "book",
    usedFor: "Supply, spare, demand, margins",
    href: "/flows",
    note: "The balance the industry argues with. Already on the industry book.",
  },
  {
    id: "jodi",
    domain: "Balances",
    name: "JODI-Oil",
    provider: "JODI",
    method: "Country submissions",
    cadence: "Monthly",
    status: "dark",
    usedFor: "Reported history, not a forecast",
    href: "/sources",
    note: "Point-in-time revisions matter. Not ingested. I will not backfill a JODI table from memory.",
  },
  {
    id: "baker",
    domain: "Upstream",
    name: "Baker Hughes rig count",
    provider: "Baker Hughes",
    method: "Weekly / monthly release, cited",
    cadence: "Friday noon CT · monthly international",
    status: "book",
    usedFor: "Leading activity, not next month's barrels",
    href: "/signals",
    note: "A rig is not a barrel. The count is cited when the desk has the print. No live basin API.",
  },
  {
    id: "nod",
    domain: "Upstream",
    name: "Norwegian Offshore Directorate",
    provider: "NOD / SODIR",
    method: "FactPages open data",
    cadence: "Daily files",
    status: "dark",
    usedFor: "NCS wells, discoveries, licences",
    href: "/continents",
    note: "The shelf has an open book. This desk has not wired FactMaps. Johan Sverdrup stays a grade, not a live wellbore.",
  },
  {
    id: "vf",
    domain: "Water",
    name: "VesselFinder AIS",
    provider: "VesselFinder",
    method: "expectedarrivals · portcalls",
    cadence: "On pull, 15 min cache",
    status: "pull",
    usedFor: "Tanker types 80–89 into oil ports",
    href: "/ais",
    note: "Key-gated. 5 credits a hull on expected arrivals. Cap 8.",
  },
  {
    id: "mt",
    domain: "Water",
    name: "MarineTraffic AIS",
    provider: "MarineTraffic / Kpler",
    method: "exportvessels v9, type 8",
    cadence: "On pull, 60 min window",
    status: "pull",
    usedFor: "Tankers inside the choke boxes",
    href: "/ais",
    note: "Positions, not cargo. A dot in Hormuz is not a loading.",
  },
  {
    id: "kpler",
    domain: "Water",
    name: "Kpler maritime",
    provider: "Kpler",
    method: "AIS network + cargo layer",
    cadence: "Streaming",
    status: "dark",
    usedFor: "Fleet, port calls, dark-fleet flags",
    href: "/ais",
    note: "1.2 billion messages a day is their claim. It is not this desk's feed.",
  },
  {
    id: "vortexa",
    domain: "Water",
    name: "Vortexa cargo flows",
    provider: "Vortexa",
    method: "Grade-level flows API",
    cadence: "Daily",
    status: "dark",
    usedFor: "Cargo, floating storage, choke transits",
    href: "/ais",
    note: "AIS says where the hull is. Vortexa says what is in it. The second book is dark.",
  },
  {
    id: "signal",
    domain: "Water",
    name: "Signal Ocean freight",
    provider: "Signal Ocean",
    method: "Freight, tonnage, vessel state",
    cadence: "Daily",
    status: "dark",
    usedFor: "VLCC / Suezmax / Aframax, arb maths",
    href: "/trade",
    note: "No freight, no arb call. I will not invent $/ton.",
  },
  {
    id: "briefing",
    domain: "News",
    name: "Desk briefing and signals",
    provider: "The Crude Oracle",
    method: "Editorial, sourced",
    cadence: "When the desk prints",
    status: "book",
    usedFor: "What changed, and the tell",
    href: "/briefing",
    note: "Written. Not a scraped Reuters firehose and not a sentiment score.",
  },
  {
    id: "nlp",
    domain: "News",
    name: "Headline sentiment",
    provider: "Not wired",
    method: "Would be NER + a score",
    cadence: "—",
    status: "dark",
    usedFor: "Catalyst next to the tick",
    href: "/signals",
    note: "A −1 to +1 score without a model is fiction. Dark on purpose.",
  },
];

export const DOMAINS: FeedDomain[] = ["Physical", "Paper", "Balances", "Upstream", "Water", "News"];

export const STATUS_LABEL: Record<FeedStatus, string> = {
  live: "Live",
  pull: "On pull",
  book: "On the book",
  dark: "Dark",
};

/** The sentence the brief cuts off on. Each step is a different book. */
export type ChainStep = {
  id: string;
  k: string;
  title: string;
  body: string;
  status: FeedStatus;
  href: string;
};

export const GULF_CHAIN: ChainStep[] = [
  {
    id: "rigs",
    k: "01",
    title: "Permian rigs",
    body: "Baker Hughes is a Friday print, not a barrel. The working lag to Permian light-sweet is three to six months. I will not turn a rig into a volume.",
    status: "book",
    href: "/signals",
  },
  {
    id: "move",
    k: "02",
    title: "Toward the coast",
    body: "When that crude exists, it moves to the Gulf. This desk has no pipeline nomination and no export program. The path is named. The barrels are not.",
    status: "dark",
    href: "/flows",
  },
  {
    id: "term",
    k: "03",
    title: "MEH, Enterprise, Plains",
    body: "Argus WTI Houston PA0033586 and Midland PA0033587 are differentials to the NYMEX settle at those terminals. Codes on the book. Assessments dark.",
    status: "dark",
    href: "/trade",
  },
  {
    id: "sea",
    k: "04",
    title: "Houston and Corpus",
    body: "Those ports are on the AIS pull. A hull is not a cargo. Vortexa grade flows and Signal freight stay dark, so the export window is not called open.",
    status: "pull",
    href: "/ais",
  },
];
