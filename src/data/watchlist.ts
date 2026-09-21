export type Name = {
  name: string;
  ticker: string;
  venue: string;
  book: string;
  region: string;
  theme: string;
  catalyst: string;
  risk: string;
  stream: string;
};

export const WATCHLIST: Name[] = [
  { name: "Exxon Mobil", ticker: "XOM", venue: "NYSE", book: "Integrated", region: "North America", theme: "Permian + Guyana. The cleanest US major at a $100 deck.", catalyst: "Guyana FPSO ramp; buyback pace.", risk: "Service inflation; political windfall talk.", stream: "Shale FCF + PSC profit oil" },
  { name: "Chevron", ticker: "CVX", venue: "NYSE", book: "Integrated", region: "North America", theme: "Tengiz + Permian + Hess/Guyana combination.", catalyst: "Tengiz expansion; Guyana integration.", risk: "Execution on the Hess book; Kazakhstan pipe risk.", stream: "CPC Blend + Permian" },
  { name: "Shell", ticker: "SHEL", venue: "LSE/NYSE", book: "Integrated", region: "Europe", theme: "LNG + deepwater + trading house.", catalyst: "LNG utilisation; buybacks; UK tax.", risk: "European fiscal; LNG oversupply later-decade.", stream: "LNG + trading" },
  { name: "BP", ticker: "BP", venue: "LSE/NYSE", book: "Integrated", region: "Europe", theme: "Higher-beta major. Azerbaijan + oil-price torque.", catalyst: "ACG/Shah Deniz; capital-frame reset.", risk: "UKCS fiscal; strategy whiplash.", stream: "BTC + buybacks" },
  { name: "TotalEnergies", ticker: "TTE", venue: "EPA/NYSE", book: "Integrated", region: "Europe", theme: "Africa and LNG. Best listed OECD door into GoG and Middle East gas.", catalyst: "Mozambique/Papua LNG; Africa liquids.", risk: "Project delays; Sahel/GoG security.", stream: "PSC + LNG" },
  { name: "Equinor", ticker: "EQNR", venue: "OSE/NYSE", book: "NOC-listed", region: "Europe", theme: "Norway in one line. GPFG is the state's; EQNR is the operator.", catalyst: "NCS production; gas to Europe.", risk: "Tax; Johan Sverdrup decline profile.", stream: "NCS petroleum tax chain" },
  { name: "Petrobras", ticker: "PBR", venue: "NYSE/B3", book: "NOC-listed", region: "South America", theme: "Pre-salt cash machine. Dividend is the product.", catalyst: "Búzios/Mero ramps; dividend policy.", risk: "Brasilia. Always Brasilia.", stream: "Santos Basin lifting" },
  { name: "Saudi Aramco", ticker: "2222.SR", venue: "Tadawul", book: "NOC-listed", region: "Middle East", theme: "The spare-capacity company. Dividend is policy.", catalyst: "OSP; PIF funding; chemicals.", risk: "Kingdom fiscal; index inclusion flows.", stream: "Arab Light exports + PIF" },
  { name: "ConocoPhillips", ticker: "COP", venue: "NYSE", book: "E&P", region: "North America", theme: "Shale plus Alaska plus a real balance sheet.", catalyst: "Permian productivity; distribution framework.", risk: "WTI; inventory-quality debate.", stream: "Shale FCF" },
  { name: "EOG Resources", ticker: "EOG", venue: "NYSE", book: "E&P", region: "North America", theme: "Premium rock, premium FCF conversion.", catalyst: "Well costs; special dividends.", risk: "US onshore activity fade.", stream: "Permian / Eagle Ford" },
  { name: "Canadian Natural", ticker: "CNQ", venue: "TSX/NYSE", book: "Oil sands", region: "North America", theme: "Long-duration oil-sands torque to WCS.", catalyst: "TMX utilisation; WCS differential.", risk: "Carbon policy; differential blowouts.", stream: "Alberta royalties + WCS" },
  { name: "Cheniere", ticker: "LNG", venue: "NYSE", book: "LNG", region: "North America", theme: "Contracted US liquefaction. Toll plus merchant option.", catalyst: "Train FIDs; SPA recontracting.", risk: "Global LNG glut; construction.", stream: "Henry Hub to JKM/TTF" },
  { name: "Enterprise Products", ticker: "EPD", venue: "NYSE", book: "Midstream", region: "North America", theme: "Fee-based NGL and crude pipes. Income book.", catalyst: "Permian takeaway; coverage ratio.", risk: "Volume, not price — until volumes fall.", stream: "Midstream tolls" },
  { name: "Schlumberger", ticker: "SLB", venue: "NYSE", book: "Services", region: "Global", theme: "International and offshore capex, not US frac.", catalyst: "MENA awards; margin.", risk: "NOC budget cuts if $80 returns.", stream: "Upstream capex cycle" },
  { name: "Baker Hughes", ticker: "BKR", venue: "NYSE", book: "Services", region: "Global", theme: "Gas turbines and LNG kit. The AI-power adjacency.", catalyst: "LNG orders; turbine backlog.", risk: "Cycle; execution.", stream: "Equipment + services" },
  { name: "Frontline", ticker: "FRO", venue: "NYSE/OSE", book: "Tankers", region: "Global", theme: "VLCC spot. Rerouting is the thesis.", catalyst: "Cape rates; fleet orderbook.", risk: "Rate collapse if Hormuz premium dies.", stream: "Tonne-miles" },
  { name: "Marathon Petroleum", ticker: "MPC", venue: "NYSE", book: "Refining", region: "North America", theme: "USGC cracks. Owns the product squeeze.", catalyst: "Crack capture; turnarounds.", risk: "Margin normalisation.", stream: "USGC product exports" },
  { name: "Valero", ticker: "VLO", venue: "NYSE", book: "Refining", region: "North America", theme: "Complex coking. Heavy-sour option.", catalyst: "Maya/Merey diffs; diesel.", risk: "Demand destruction at the pump.", stream: "Cracks" },
  { name: "Woodside", ticker: "WDS", venue: "ASX/NYSE", book: "LNG", region: "Oceania", theme: "Australian LNG plus US growth option.", catalyst: "JKM; project FIDs.", risk: "Cost overruns; gas price.", stream: "LNG" },
  { name: "Harbour Energy", ticker: "HBR", venue: "LSE", book: "UKCS", region: "Europe", theme: "Listed UKCS. A tax-regime option, not a volume story.", catalyst: "UK fiscal; Wintershall integration.", risk: "Windfall tax; decom.", stream: "North Sea late-life" },
];

export const ETFS = [
  { ticker: "USO", name: "United States Oil Fund", tracks: "Near-WTI futures", risk: "Contango bleed. Not a barrel." },
  { ticker: "BNO", name: "United States Brent Oil Fund", tracks: "Near-Brent futures", risk: "Same structure tax as USO." },
  { ticker: "XLE", name: "Energy Select Sector SPDR", tracks: "US energy equities", risk: "Beta to oil, not 1:1." },
  { ticker: "XOP", name: "SPDR S&P Oil & Gas E&P", tracks: "US E&P equal-ish", risk: "High torque, high drawdown." },
  { ticker: "AMLP", name: "Alerian MLP ETF", tracks: "US midstream MLPs", risk: "K-1 replaced; still rate-sensitive." },
  { ticker: "UNG", name: "US Natural Gas Fund", tracks: "Henry Hub futures", risk: "Worse roll than USO. Don't." },
];

export const BOOKS = [
  "Integrated",
  "E&P",
  "NOC-listed",
  "Oil sands",
  "LNG",
  "Midstream",
  "Services",
  "Tankers",
  "Refining",
  "UKCS",
] as const;
