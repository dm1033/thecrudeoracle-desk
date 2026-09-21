/** Industry book: spare capacity, breakevens, decline, capital. Sourced. Dated. */

export const INDUSTRY_AS_OF = "18 Sep 2026";

export const INDUSTRY_THESIS =
  "Spare that cannot load is not spare. It is stranded. There are two breakevens on every barrel — the well and the budget — and they are not the same number. Ninety percent of upstream spend since 2019 has been paying the decline tax, not buying growth. Capital is choosing short-cycle shale and Atlantic deepwater over greenfield megaprojects, and downstream over more crude. That is the industry, not the tape.";

export const INDUSTRY_KPIS = [
  {
    k: "World liquids 2026",
    v: "100.7",
    s: "IEA OMR Sep · −5.7 y/y",
  },
  {
    k: "World demand 2026",
    v: "−2.5",
    s: "IEA · diesel & petrochem",
  },
  {
    k: "Effective OPEC+ spare",
    v: "0.22",
    s: "mb/d vs Aug · IEA OMR",
  },
  {
    k: "Gulf still shut in",
    v: ">10",
    s: "mb/d remaining · IEA Aug",
  },
  {
    k: "Stocks since Feb",
    v: "−507",
    s: "mb observed · 2.8 mb/d",
  },
  {
    k: "Natural decline",
    v: "8%",
    s: "if capex stops · IEA fields",
  },
];

/** EIA STEO 9 Sep 2026, forecast completed 3 Sep. Liquids, not crude-only. */
export const STEO_BALANCE = [
  { year: "2024", production: 103.2, consumption: 103.1, brent: 81, opec: 28.4, nonOpec: 74.7 },
  { year: "2025", production: 106.2, consumption: 104.3, brent: 69, opec: 29.3, nonOpec: 76.9 },
  { year: "2026e", production: 100.6, consumption: 102.6, brent: 91, opec: 23.6, nonOpec: 77.0 },
  { year: "2027e", production: 109.9, consumption: 105.0, brent: 74, opec: 29.4, nonOpec: 80.5 },
];

export const STEO_NOTE =
  "EIA STEO 9 Sep 2026. Annual averages. Spot in the $100s is a war print inside a $91 year. The $74 2027 Brent path assumes Middle East flows normalise. This desk does not.";

export type SpareRow = {
  country: string;
  bloc: "OPEC-8" | "exempt" | "non-OPEC";
  jul: number;
  aug: number;
  vsTarget: number | null;
  target: number | null;
  capacity: number | null;
  effSpare: number | null;
};

/** IEA Oil Market Report, September 2026. Public table, mb/d. */
export const SPARE: SpareRow[] = [
  { country: "Saudi Arabia", bloc: "OPEC-8", jul: 8.24, aug: 5.97, vsTarget: -4.45, target: 10.42, capacity: 12.11, effSpare: null },
  { country: "Iraq", bloc: "OPEC-8", jul: 2.88, aug: 3.86, vsTarget: -0.55, target: 4.4, capacity: 4.87, effSpare: null },
  { country: "Kuwait", bloc: "OPEC-8", jul: 1.8, aug: 2.04, vsTarget: -0.62, target: 2.66, capacity: 2.88, effSpare: null },
  { country: "Nigeria", bloc: "OPEC-8", jul: 1.51, aug: 1.51, vsTarget: 0.01, target: 1.5, capacity: 1.45, effSpare: 0 },
  { country: "Algeria", bloc: "OPEC-8", jul: 0.97, aug: 0.98, vsTarget: -0.02, target: 1.0, capacity: 1.0, effSpare: 0.02 },
  { country: "Congo", bloc: "OPEC-8", jul: 0.29, aug: 0.26, vsTarget: -0.01, target: 0.28, capacity: 0.27, effSpare: 0 },
  { country: "Gabon", bloc: "OPEC-8", jul: 0.2, aug: 0.19, vsTarget: 0.01, target: 0.18, capacity: 0.22, effSpare: 0.03 },
  { country: "Eq. Guinea", bloc: "OPEC-8", jul: 0.04, aug: 0.04, vsTarget: -0.03, target: 0.07, capacity: 0.05, effSpare: 0.01 },
  { country: "Iran", bloc: "exempt", jul: 2.72, aug: 2.16, vsTarget: null, target: null, capacity: 3.8, effSpare: null },
  { country: "Libya", bloc: "exempt", jul: 1.35, aug: 1.4, vsTarget: null, target: 1.34, capacity: 1.34, effSpare: 0 },
  { country: "Venezuela", bloc: "exempt", jul: 1.12, aug: 1.16, vsTarget: null, target: 1.12, capacity: 1.12, effSpare: 0 },
  { country: "Russia", bloc: "non-OPEC", jul: 8.56, aug: 8.36, vsTarget: -1.53, target: 9.89, capacity: 9.3, effSpare: null },
  { country: "Kazakhstan", bloc: "non-OPEC", jul: 1.55, aug: 1.9, vsTarget: 0.28, target: 1.62, capacity: 1.83, effSpare: 0 },
  { country: "Azerbaijan", bloc: "non-OPEC", jul: 0.44, aug: 0.4, vsTarget: -0.15, target: 0.55, capacity: 0.44, effSpare: 0.04 },
  { country: "Mexico", bloc: "non-OPEC", jul: 1.4, aug: 1.39, vsTarget: null, target: 1.5, capacity: 1.5, effSpare: 0.11 },
  { country: "Oman", bloc: "non-OPEC", jul: 0.83, aug: 0.87, vsTarget: 0.03, target: 0.84, capacity: 0.9, effSpare: null },
  { country: "Others (Bahrain, Brunei, Malaysia, Sudans)", bloc: "non-OPEC", jul: 0.67, aug: 0.63, vsTarget: -0.24, target: 0.87, capacity: 0.86, effSpare: null },
];

export const SPARE_TOTALS = {
  opec8Aug: 14.85,
  opec8Capacity: 22.84,
  opec8EffSpare: 0.07,
  opecAug: 19.56,
  opecPlusAug: 33.11,
  opecPlusCapacity: 43.93,
  opecPlusEffSpare: 0.22,
  gulfShutIn: 10,
  gulfExportsAug: 13,
  eiaShutInAug: 6.7,
  eiaShutIn4q: 5.7,
};

export const SPARE_NOTE =
  "IEA OMR September 2026 public table. Capacity = reachable in 90 days and sustainable. Effective spare excludes shut-in Iranian and Russian crude and barrels that cannot actually be produced and loaded. Saudi nameplate gap (12.11 − 5.97 = 6.14) is not 6 mb/d of spare — most of it cannot clear Hormuz. UAE is not in the IEA OPEC-8 extract this month; treat ADNOC as Hormuz-constrained, not as a spare line. EIA STEO counts 6.7 mb/d crude shut-ins in August, 5.7 mb/d assumed in 4Q26. IEA counts more than 10 mb/d of Gulf output still shut. Different books, same direction.";

export type TechBe = {
  name: string;
  region: string;
  kind: "lifting" | "new-well" | "operating" | "full-cycle" | "greenfield";
  low: number;
  high: number;
  mid: number;
  note: string;
  source: string;
};

export const TECHNICAL_BREAKEVENS: TechBe[] = [
  { name: "Guyana producing (lifting)", region: "South America", kind: "lifting", low: 20, high: 25, mid: 22, note: "Stabroek producing FPSOs. Cost of supply, not PSC full-cycle.", source: "Operator/bank compilations 2026" },
  { name: "Middle East onshore new", region: "Middle East", kind: "full-cycle", low: 24, high: 30, mid: 27, note: "Rystad: cheapest new conventional barrel on earth.", source: "Rystad cost-of-supply" },
  { name: "Guyana Stabroek full-cycle", region: "South America", kind: "full-cycle", low: 25, high: 36, mid: 30, note: "PSA + FPSO. Still a top-quartile barrel.", source: "Public PSC / bank range" },
  { name: "Brazil pre-salt / Petrobras", region: "South America", kind: "full-cycle", low: 25, high: 35, mid: 28, note: "Búzios sub-$35. Portfolio often cited ~$25–28.", source: "Petrobras plan materials" },
  { name: "Offshore shelf (global)", region: "Global", kind: "full-cycle", low: 34, high: 40, mid: 37, note: "Rystad global average.", source: "Rystad" },
  { name: "Deepwater (global)", region: "Global", kind: "full-cycle", low: 40, high: 46, mid: 43, note: "Rystad. GoM and Atlantic still clear this.", source: "Rystad" },
  { name: "US existing wells (operating)", region: "North America", kind: "operating", low: 32, high: 47, mid: 43, note: "Dallas Fed Q1 2026. Permian ~$39. Large firms ~$32.", source: "Dallas Fed Energy Survey Q1 2026" },
  { name: "Canada oil sands — sustaining", region: "North America", kind: "operating", low: 40, high: 43, mid: 42, note: "Big-5 sustaining + dividend. They keep running. They do not sanction mines.", source: "BMO / producer decks 2026" },
  { name: "North American shale (Rystad)", region: "North America", kind: "full-cycle", low: 40, high: 50, mid: 45, note: "Rystad global shale average. Older than the Fed survey; keep both.", source: "Rystad" },
  { name: "Venezuela Orinoco operating", region: "South America", kind: "operating", low: 42, high: 56, mid: 49, note: "Existing upgraders. Greenfield is another $80.", source: "Industry compilations 2026" },
  { name: "Canada oil sands average new", region: "North America", kind: "full-cycle", low: 50, high: 75, mid: 57, note: "Rystad oil-sands average. New mines $80+.", source: "Rystad" },
  { name: "Eagle Ford new-well", region: "North America", kind: "new-well", low: 61, high: 65, mid: 63, note: "Price to profitably drill a new well.", source: "Dallas Fed Q1 2026" },
  { name: "Delaware new-well", region: "North America", kind: "new-well", low: 62, high: 64, mid: 63, note: "Best US shale sub-basin in the Fed survey.", source: "Dallas Fed Q1 2026" },
  { name: "US shale new-well (all)", region: "North America", kind: "new-well", low: 62, high: 70, mid: 66, note: "All respondents. The number that turns the rig count.", source: "Dallas Fed Q1 2026" },
  { name: "Permian new-well (all)", region: "North America", kind: "new-well", low: 65, high: 70, mid: 67, note: "Midland higher than Delaware. Inventory mix is drifting worse.", source: "Dallas Fed Q1 2026" },
  { name: "Midland new-well", region: "North America", kind: "new-well", low: 66, high: 70, mid: 69, note: "$68.57 in the Fed print.", source: "Dallas Fed Q1 2026" },
  { name: "Canada new oil-sands mine", region: "North America", kind: "greenfield", low: 80, high: 90, mid: 85, note: "Does not get sanctioned at $70. That is the point.", source: "Producer / bank range" },
  { name: "Venezuela Orinoco refurbished", region: "South America", kind: "greenfield", low: 70, high: 80, mid: 80, note: "Capital, diluent, upgraders, politics. Not a 2026 FID.", source: "Industry compilations" },
];

export const TECH_BE_NOTE =
  "Do not mix these. Lifting cost is not a new-well breakeven. A new-well breakeven is not a fiscal breakeven. Dallas Fed Q1 2026 (March survey) is the cleanest US print: new-well $66, operating $43. Rystad global averages sit lower because they mix sunk fields with shale. I print both.";

export type FiscalRow = {
  country: string;
  beLow: number;
  beHigh: number;
  beMid: number;
  netNameplate: number;
  typicalProd: number;
  augProd: number;
  note: string;
  source: string;
};

/** Fiscal breakeven = budget-balance Brent at nameplate export volumes. Ranges, not a single IMF cell. */
export const FISCAL: FiscalRow[] = [
  { country: "Qatar", beLow: 40, beHigh: 50, beMid: 45, netNameplate: 0.6, typicalProd: 1.3, augProd: 1.3, note: "LNG is the budget. Oil fiscal is a sideshow. North Field is the capex.", source: "Public GCC compilations 2026" },
  { country: "UAE", beLow: 50, beHigh: 65, beMid: 60, netNameplate: 2.8, typicalProd: 4.0, augProd: 4.0, note: "Allianz/IMF-style ~$65. Non-oil GDP is the real buffer.", source: "Allianz Trade Nov 2025 / IMF-style" },
  { country: "Kuwait", beLow: 43, beHigh: 55, beMid: 50, netNameplate: 2.0, typicalProd: 2.6, augProd: 2.04, note: "Low production cost, Future Generations Fund.", source: "IMF-style 2026 compilations" },
  { country: "Oman", beLow: 56, beHigh: 85, beMid: 70, netNameplate: 0.8, typicalProd: 1.0, augProd: 0.87, note: "Wide range. Tight to capacity.", source: "IMF / GCC scorecards 2026" },
  { country: "Iraq", beLow: 70, beHigh: 80, beMid: 73, netNameplate: 3.3, typicalProd: 4.4, augProd: 3.86, note: "Budget oil. Basrah loadings are the state.", source: "Public fiscal compilations 2026" },
  { country: "Saudi Arabia", beLow: 80, beHigh: 96, beMid: 90, netNameplate: 5.5, typicalProd: 9.0, augProd: 5.97, note: "IMF/Oxford ~$80–85 budget; GS $90–96 including PIF. Off-budget Vision spend pushes it toward $100. Nameplate, not Aug volumes.", source: "IMF / Oxford / Goldman 2026" },
  { country: "Iran", beLow: 120, beHigh: 140, beMid: 133, netNameplate: 1.2, typicalProd: 3.4, augProd: 2.16, note: "Sanctions fiscal, not a Gulf peer. Treat as political, not a budget model.", source: "Public models 2026" },
];

export const FISCAL_NOTE =
  "Fiscal surplus ≈ (Brent − mid breakeven) × net exports × 365 / 1000, in $bn. Linear, crude-only, no gas credit except Qatar's structural LNG. Nameplate volumes are a 2025 world. At Aug 2026 Saudi output of 5.97 vs ~9 mb/d typical, the same budget needs a much higher price — which is why Riyadh can print a 'surplus' on paper and a −4.8% GDP print in Q2. Toggle the volumes.";

export function fiscalGapBn(price: number, row: FiscalRow, warVolumes: boolean) {
  const scale = warVolumes ? row.augProd / row.typicalProd : 1;
  const net = row.netNameplate * scale;
  return ((price - row.beMid) * net * 365) / 1000;
}

export type DeclineRow = {
  name: string;
  observedPct: number;
  note: string;
};

export const DECLINE: DeclineRow[] = [
  { name: "Middle East (observed post-peak)", observedPct: 1.8, note: "Supergiant onshore. Slowest book on earth." },
  { name: "OPEC conventional", observedPct: 2.9, note: "The cartel is also a geology club." },
  { name: "Supergiant fields", observedPct: 2.7, note: "Ghawar-class. Pressure and scale." },
  { name: "Onshore conventional", observedPct: 4.2, note: "Global onshore average." },
  { name: "All conventional (observed)", observedPct: 5.6, note: "IEA, ~15,000 fields. Up from ~4.5% in the 1990s." },
  { name: "Asia-Pacific", observedPct: 5.9, note: "Mature, mixed offshore." },
  { name: "Eurasia", observedPct: 6.5, note: "Russia needs the sustaining cheque every year." },
  { name: "Non-OPEC conventional", observedPct: 7.6, note: "The expensive half of the world." },
  { name: "South America", observedPct: 7.7, note: "Pre-salt is the exception, not the average." },
  { name: "Africa", observedPct: 8.1, note: "Smaller fields, political downtime." },
  { name: "North America conventional", observedPct: 8.3, note: "Not shale. Shale is worse." },
  { name: "Natural decline if capex = 0", observedPct: 8.0, note: "Global oil, next decade, ~5.5 mb/d lost each year." },
  { name: "Shallow offshore", observedPct: 8.5, note: "North Sea lives here." },
  { name: "Europe", observedPct: 9.7, note: "Highest regional observed. UKCS / NCS." },
  { name: "Deep / ultradeep offshore", observedPct: 10.3, note: "Fast and expensive to offset." },
  { name: "Small fields", observedPct: 11.6, note: "The long tail of the industry." },
];

export const SHALE_DECLINE = [
  { year: "Year 1, no new drilling", pct: 35 },
  { year: "Year 2", pct: 18 },
  { year: "Then annual", pct: 12 },
];

export const DECLINE_NOTE =
  "IEA, The Implications of Oil and Gas Field Decline Rates (2025, still the live book in 2026). Observed = with sustaining capex. Natural = if you stop writing cheques. Global oil would fall ~8% a year, about 5.5 mb/d — more than Brazil plus Norway, every year. Nearly 90% of annual upstream investment since 2019 has been dedicated to offsetting declines rather than meeting demand growth. Upstream 2025 ≈ $570bn.";

export type RegionPath = {
  slug: string;
  name: string;
  y2026: string;
  y2027: string;
  driver: string;
  capital: string;
};

export const REGION_PATHS: RegionPath[] = [
  {
    slug: "middle-east",
    name: "Middle East",
    y2026: "Contraction. OPEC liquids 29.3 → 23.6 mb/d (EIA). IEA: recovery deferred to 2027. Gulf exports Aug ~13 mb/d, half of pre-war.",
    y2027: "EIA OPEC liquids back to 29.4. IEA +8 mb/d world rebound lives or dies here.",
    driver: "Hormuz loadings, not geology. Saudi capacity 12.11, Aug output 5.97.",
    capital: "Not more crude. Gas, petrochemicals, overseas refining. Qatar's cheque is North Field LNG. Spare is a Riyadh option only when tankers can sail.",
  },
  {
    slug: "north-america",
    name: "North America",
    y2026: "The elastic barrel. Americas Quintet (US, Canada, Brazil, Guyana, Argentina) +1.4 mb/d — the only reliable non-OPEC+ growth IEA will sign.",
    y2027: "Quintet still adding ~1.0 mb/d. Shale answers in months. Oil sands do not.",
    driver: "Dallas Fed new-well $66. Below that, the rig count dies with a lag. Above $80 they drill.",
    capital: "Short-cycle Permian / Bakken / Eagle Ford and selective GoM. Oil sands are long-life sustaining capex, not greenfield mines. Midstream gets paid either way.",
  },
  {
    slug: "south-america",
    name: "South America",
    y2026: "Guyana and Brazil are inside the Quintet. Venezuela's 303 bn bbl still do not trade as 303 bn bbl of supply.",
    y2027: "FPSO phases still the growth stack. Orinoco remains an option on politics and upgraders.",
    driver: "Lifting $20–35 in Stabroek and pre-salt. That is where the FID money went.",
    capital: "Deepwater over extra-heavy. Petrobras dividends, Exxon Guyana PSC, CNOOC slice. PDVSA does not clear a Western investment committee.",
  },
  {
    slug: "eurasia",
    name: "Eurasia",
    y2026: "Russian crude still finds a home. Product yield does not. Ukrainian strikes on refineries are a middle-distillate event, not a crude event.",
    y2027: "Sustaining capex or decline. IEA Eurasia observed 6.5%. CPC is a single-point failure for Kazakhstan.",
    driver: "Urals discount, ESPO vs Dubai, Baltic product loadings.",
    capital: "Mature-field money. High decline if the cheque stops. Tengiz and ACG are the listed IOC expressions.",
  },
  {
    slug: "europe",
    name: "Europe",
    y2026: "Importer. Producer only in Norway. UKCS 0.57 mb/d and falling.",
    y2027: "Observed decline 9.7% — the worst regional print in the IEA field study. Dated Brent still prices the world.",
    driver: "The marker, ARA tanks, diesel cracks. Not the barrels.",
    capital: "Sustaining and decommissioning. Equinor / GPFG is the recycling machine. Harbour and Ithaca are tax-regime options.",
  },
  {
    slug: "africa",
    name: "Africa",
    y2026: "Light-sweet Atlantic barrels with political beta. Libya is a switch. Nigeria is production minus theft.",
    y2027: "Namibia / Uganda are 2027–30 options, not a 2026 tape-mover. Observed decline 8.1%.",
    driver: "Port openings, force majeure, dated-linked West African grades.",
    capital: "IOC deepwater PSC, not onshore fiscal risk. Sonangol decline plus tiebacks. East African first oil is a project list, not a forecast.",
  },
  {
    slug: "asia-pacific",
    name: "Asia-Pacific",
    y2026: "Demand continent. IEA: petrochemical feedstocks and diesel are the pain. India product exports ripped because plants that can run, ran.",
    y2027: "China drills to floor the import bid, not to replace it. Refining stays East of Suez.",
    driver: "Dubai / Oman / Murban. Malacca is the quiet choke. Hormuz is the loud one — for inbound barrels.",
    capital: "Complex refining and chemicals, Chinese NOC lifting. Australian LNG lives on the Oceania card.",
  },
  {
    slug: "oceania",
    name: "Oceania",
    y2026: "LNG first. Crude a rounding error. JKM is the tape, Cossack is the side-stream.",
    y2027: "Scarborough / Browse timelines. Not an oil-supply forecast.",
    driver: "Asian gas contracts, domestic reservation politics, condensate yield on the trains.",
    capital: "LNG. Woodside, Santos, Gorgon/Wheatstone. Antarctica is a treaty, not a FID.",
  },
];

export const REGION_INDUSTRY: Record<
  string,
  { observedDeclinePct: number; technicalBe: string; fiscalBe: string; spare: string }
> = {
  "middle-east": {
    observedDeclinePct: 1.8,
    technicalBe: "Onshore new ~$27 (Rystad). Cheapest new barrel on earth.",
    fiscalBe: "Saudi $80–96 nameplate (IMF/Oxford/GS). UAE $50–65. Qatar ~$45 on LNG. Iraq ~$73. War volumes blow these out.",
    spare: "Saudi capacity 12.11, Aug 5.97. Kuwait 2.88 vs 2.04. Iraq 4.87 vs 3.86. Effective OPEC-8 spare 0.07 — the rest cannot load.",
  },
  "north-america": {
    observedDeclinePct: 8.3,
    technicalBe: "Dallas Fed Q1 2026: new-well $66, operating $43, Delaware $63, Permian $67. Oil sands sustaining ~$42, new mine $80+.",
    fiscalBe: "Not a petrostate fiscal story. US is a corporate cash-return story at $80+ WTI. Alberta royalties ride WCS.",
    spare: "No OPEC spare. The spare is the Permian DUC + rig response, with a lag. Baker Hughes Friday.",
  },
  "south-america": {
    observedDeclinePct: 7.7,
    technicalBe: "Guyana lifting $20–25, full-cycle $25–36. Pre-salt $25–35. Orinoco operating $42–56, refurbished ~$80.",
    fiscalBe: "Guyana PSC rent. Brazil dividends. Venezuela is a sanctions and upgrader option, not a budget you can model.",
    spare: "Venezuela IEA spare 0 at 1.16 mb/d vs 1.12 'capacity' — the capacity number is a joke against 303 bn bbl of stock.",
  },
  africa: {
    observedDeclinePct: 8.1,
    technicalBe: "Deepwater GoG in the global $43 deepwater bucket. Light-sweet quality is the premium, not the well cost.",
    fiscalBe: "Budget oil states. Libya is a political binary around 0.5–1.4 mb/d. Nigeria's real number is production minus theft.",
    spare: "Libya IEA spare 0. Nigeria at capacity. The swing is ports, not wells.",
  },
  europe: {
    observedDeclinePct: 9.7,
    technicalBe: "Highest unit cost in the OECD West. North Sea full-cycle sits with the expensive tail — you do not drill this at $50.",
    fiscalBe: "Norway 78% petroleum tax + GPFG. UK windfall tax / decommissioning. Importer bills are the political risk.",
    spare: "None that moves the tape. Norway is the last petrostate in the OECD West.",
  },
  eurasia: {
    observedDeclinePct: 6.5,
    technicalBe: "Mature conventional. Sustaining capex is the business. Tengiz expansion is the capex event, not a shale pad.",
    fiscalBe: "Russia runs on Urals discounts and a product-export machine that strikes keep hitting. Not a Gulf IMF cell.",
    spare: "Russia capacity 9.3 vs Aug 8.36. Kazakhstan 1.83 vs 1.90 (over target). CPC is the spare-risk, not the well.",
  },
  "asia-pacific": {
    observedDeclinePct: 5.9,
    technicalBe: "Mature PSC barrels. Australian economics moved to Oceania — they are JKM, not Cossack.",
    fiscalBe: "Importers. The 'fiscal' is the GRM and the subsidy bill, not an OSP.",
    spare: "None. This continent is the bid.",
  },
  oceania: {
    observedDeclinePct: 5.9,
    technicalBe: "NW Shelf / Browse economics are JKM, not Cossack condensate.",
    fiscalBe: "Australia is not a petrostate on oil. PRRT exists. The cheque is LNG.",
    spare: "None. This is an LNG exporter and a crude rounding error. Antarctica is a treaty.",
  },
};

export const CAPITAL_RULES = [
  {
    title: "Short-cycle over megaprojects",
    body: "Permian pads answer in months. Greenfield mines and frontier conventional answer in years. In a $70–110 tape, boards buy optionality. That is why US shale and Atlantic infill still clear FID and why new oil-sands mines do not.",
  },
  {
    title: "Integration over more crude",
    body: "Gulf NOCs are spending the cheque on gas, chemicals and overseas refining. Capture the crack. Hedge the OSP. Qatar's North Field is the cleanest expression of this pivot.",
  },
  {
    title: "Atlantic deepwater over extra-heavy",
    body: "Guyana and Brazil pre-salt lift in the $20s–30s. Orinoco needs upgraders, diluent and a political settlement. Capital can read. It went south of the Caribbean, not into the Belt.",
  },
  {
    title: "Pay the decline tax or shrink",
    body: "Stop writing sustaining cheques and the world loses ~5.5 mb/d every year. Europe at 9.7% observed, deepwater at 10.3%, shale at 35% in year one. The Middle East at 1.8% is why Riyadh still sets the long-term floor.",
  },
];

export const INDUSTRY_SOURCES = [
  { name: "IEA Oil Market Report, September 2026", url: "https://www.iea.org/reports/oil-market-report-september-2026" },
  { name: "EIA Short-Term Energy Outlook, 9 Sep 2026", url: "https://www.eia.gov/outlooks/steo/" },
  { name: "IEA, Implications of Oil and Gas Field Decline Rates", url: "https://www.iea.org/reports/the-implications-of-oil-and-gas-field-decline-rates" },
  { name: "Dallas Fed Energy Survey, Q1 2026", url: "https://www.dallasfed.org/research/surveys/des" },
  { name: "OPEC Annual Statistical Bulletin 2026", url: "https://www.opec.org/" },
  { name: "EIA International Energy Statistics", url: "https://www.eia.gov/international/data/world" },
  { name: "IEA Strait of Hormuz", url: "https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz" },
  { name: "IEA World Energy Investment 2025", url: "https://www.iea.org/reports/world-energy-investment-2025" },
];

export const OTHER_CONTINENTS = [
  {
    name: "Antarctica",
    body: "No commercial production. Antarctic Treaty. Not a reserve, not a forecast, not a trade. Anyone pitching Antarctic barrels is selling a story, not a cargo. Oceania is on its own atlas card.",
  },
];
