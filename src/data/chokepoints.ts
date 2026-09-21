/** Seaborne facts. A headline is not a chokepoint. */

export const CHOKE_AS_OF = "IEA 2025 seaborne base · Sep 2026 war loadings";

export type Chokepoint = {
  name: string;
  slug: string;
  region: string;
  typicalMbd: number;
  unit: string;
  share: string;
  now: string;
  bypass: string;
  who: string;
  source: string;
  url: string;
};

export const CHOKEPOINTS: Chokepoint[] = [
  {
    name: "Strait of Hormuz",
    slug: "hormuz",
    region: "Middle East",
    typicalMbd: 19.87,
    unit: "mb/d oil (2025)",
    share: "25% of seaborne oil · 34% of seaborne crude · 80% of that to Asia",
    now: "The market. Gulf exports Aug 2026 ~13 mb/d, nearly half pre-war. Product and LPG still ~60% below February. Diesel/gasoil net exports 390 kb/d, a quarter of peacetime. IEA: >10 mb/d of Gulf output still shut in.",
    bypass: "Saudi East-West (Petroline) + UAE ADCOP to Fujairah: 3.5–5.5 mb/d available. Cannot replace 20. East-West half-restore in days is a repair story, not a peace story.",
    who: "Saudi, Iraq, Iran, UAE, Kuwait, Qatar. China, India, Japan on the bid.",
    source: "IEA Hormuz note 2025 · IEA OMR Sep 2026",
    url: "https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz",
  },
  {
    name: "Bab el-Mandeb",
    slug: "bab",
    region: "Africa / Middle East",
    typicalMbd: 6.0,
    unit: "mb/d oil, peacetime",
    share: "Red Sea door. Europe and the Med feel it first.",
    now: "Second choke of 2026. Houthi and Red Sea risk kept Cape tonne-miles bid. Yanbu loadings are the Saudi workaround, not a substitute for Suez.",
    bypass: "Cape of Good Hope. Pays tanker owners. Punishes diesel on delay.",
    who: "Saudi Red Sea, Egypt, European product imports.",
    source: "IEA OMR Sep 2026 · industry AIS compilations",
    url: "https://www.iea.org/reports/oil-market-report-september-2026",
  },
  {
    name: "Suez / SUMED",
    slug: "suez",
    region: "Africa / Europe",
    typicalMbd: 5.0,
    unit: "mb/d oil, peacetime",
    share: "The Europe–Asia pipe-and-canal pair.",
    now: "Contested with Bab. SUMED is the crude bypass of the canal itself. Products still like the water.",
    bypass: "Cape, or SUMED if the pipe is the constraint and not the Red Sea.",
    who: "Egypt transit rent. European refiners. Asian offtake the other way.",
    source: "IEA oil security · EIA chokepoints",
    url: "https://www.eia.gov/todayinenergy/",
  },
  {
    name: "Strait of Malacca",
    slug: "malacca",
    region: "Asia-Pacific",
    typicalMbd: 16.0,
    unit: "mb/d oil inbound, peacetime",
    share: "The quiet choke. Hormuz is the loud one — for inbound Asian barrels.",
    now: "Still the door into Singapore, China and Japan. Lombok is the alternative, not a replacement.",
    bypass: "Lombok / Sunda. Longer. Dearer.",
    who: "China, India, Japan, Korea, Singapore refining.",
    source: "EIA World Oil Transit Chokepoints",
    url: "https://www.eia.gov/international/analysis/",
  },
  {
    name: "Cape of Good Hope",
    slug: "cape",
    region: "Africa",
    typicalMbd: 0,
    unit: "mb/d (reroute, not a peacetime choke)",
    share: "The overflow valve. Not a strait. A bill.",
    now: "2026 tonne-mile story. When Hormuz and Bab are ugly, VLCCs go south. That is Frontline, not Ghawar.",
    bypass: "It is the bypass.",
    who: "Tanker owners. Diesel cracks on delay. South African bunkering.",
    source: "IEA OMR · AIS tanker counts",
    url: "https://www.iea.org/reports/oil-market-report-september-2026",
  },
  {
    name: "Turkish Straits",
    slug: "bosphorus",
    region: "Eurasia / Europe",
    typicalMbd: 3.0,
    unit: "mb/d oil, peacetime",
    share: "CPC Blend, Azeri, some Russian Black Sea.",
    now: "A single-point political and navigational risk for Kazakhstan. CPC is the tell, not Istanbul traffic TV.",
    bypass: "None that is cheap. BTC is a different pipe.",
    who: "NCOC, Tengizchevroil, SOCAR, BP ACG, Mediterranean refiners.",
    source: "CPC / industry loadings",
    url: "https://www.iea.org/",
  },
  {
    name: "CPC pipeline",
    slug: "cpc",
    region: "Eurasia",
    typicalMbd: 1.5,
    unit: "mb/d",
    share: "Kazakhstan's seaborne door. One pipe, one weather, one politics.",
    now: "IEA Aug Kazakhstan 1.90 vs 1.62 target — over, when it runs. Outages are a real option premium.",
    bypass: "BTC in part. Rail is a rounding error.",
    who: "CVX, XOM, Eni, Shell, KazMunayGas.",
    source: "IEA OMR Sep 2026",
    url: "https://www.iea.org/reports/oil-market-report-september-2026",
  },
  {
    name: "Cushing, Oklahoma",
    slug: "cushing",
    region: "North America",
    typicalMbd: 0,
    unit: "mb working storage, not a flow choke",
    share: "WTI is a logistics contract. Cushing stocks every Wednesday are the physical tell.",
    now: "The US inventory ghost that capped $109. Watch vs five-year, not vs a speech.",
    bypass: "Houston Ship Channel, Nederland, TMX, export docks. Pipe capacity is the Canada trade.",
    who: "CL specs, US shale, WCS differentials.",
    source: "EIA WPSR",
    url: "https://www.eia.gov/petroleum/supply/weekly/",
  },
];

export function chokesByRegion(region: string) {
  return CHOKEPOINTS.filter((c) => c.region.includes(region) || region.includes(c.region.split(" / ")[0]));
}
