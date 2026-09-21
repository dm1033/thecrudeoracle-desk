/** Where the cheque is going. And where it is not. */

export const CAPEX_AS_OF = "IEA WEI 2025/26 · IEA decline study · WoodMac 2026 upstream";

export const CAPEX_THESIS =
  "Ninety percent of upstream spend is the decline tax, not a growth story. Boards are buying short-cycle optionality and downstream integration. They are not buying new oil-sands mines or Orinoco upgraders. That is the industry, not the tape.";

export const CAPEX_KPIS = [
  { k: "Upstream O&G 2025", v: "$570bn", s: "IEA WEI · first y/y drop since Covid" },
  { k: "Oil / gas split", v: "$420 / $145bn", s: "Oil took the cut. Gas held." },
  { k: "Decline tax", v: "~90%", s: "IEA field study · offsetting losses" },
  { k: "Lost if capex = 0", v: "5.5 mb/d", s: "Each year · Brazil + Norway" },
];

export const CAPEX_RULES = [
  {
    title: "Short-cycle over megaprojects",
    body: "US light tight oil answers in months. Greenfield mines and frontier conventional answer in years. In a $70–110 tape, boards buy optionality. Permian, Bakken, Eagle Ford and selective GoM still clear. New oil-sands mines do not.",
  },
  {
    title: "Integration over more crude",
    body: "Gulf NOCs are moving the cheque into gas, petrochemicals and overseas refining. Capture the crack. Hedge the OSP. Qatar's North Field LNG is the cleanest expression. Saudi nameplate 12.0–12.5 with 1.5–2.0 spare is a policy cushion, not a growth plan.",
  },
  {
    title: "Atlantic deepwater over extra-heavy",
    body: "Guyana lifting $20–25. Pre-salt $25–35. Orinoco needs upgraders, diluent and a political settlement. Capital skipped the Belt. It went to Stabroek and Santos.",
  },
  {
    title: "Pay the decline tax or shrink",
    body: "Observed conventional decline 5.6%. Natural 8% if you stop writing cheques — about 5.5 mb/d a year. Europe 9.7%, deepwater 10.3%, shale 35% in year one without pads. Middle East 1.8% is why Riyadh still sets the long-term floor.",
  },
];

export type CapexRegion = {
  slug: string;
  name: string;
  cycle: "short" | "long" | "sustaining" | "downstream";
  direction: string;
  going: string;
  notGoing: string;
  rp: string;
};

export const CAPEX_REGIONS: CapexRegion[] = [
  {
    slug: "north-america",
    name: "North America",
    cycle: "short",
    direction: "Elastic. The swing of last resort outside Riyadh.",
    going: "Short-cycle shale (Permian, Bakken, Eagle Ford) and selective GoM. Midstream tolls get paid either way. Oil-sands sustaining + dividend, not greenfield mines.",
    notGoing: "New oil-sands mines at $80–90 full-cycle. Those do not get sanctioned at $70.",
    rp: "US R/P ~10–16 years. High-velocity. Continuously converting resource into proved.",
  },
  {
    slug: "middle-east",
    name: "Middle East",
    cycle: "downstream",
    direction: "Low-cost stock. Downstream pivot. Spare is a loading problem in 2026.",
    going: "Gas, petrochemicals, overseas refining. Qatar North Field LNG. Aramco/ADNOC chemicals. Bypass pipes (East-West, ADCOP) as logistics, not growth.",
    notGoing: "Aggressive upstream crude expansion. Capacity is already 12.11 Saudi. The constraint is Hormuz, not rigs.",
    rp: "R/P >50 years on the conventional giants. Saudi 267, Iran 208, Iraq 140, UAE 120, Kuwait 101.5.",
  },
  {
    slug: "south-america",
    name: "South America",
    cycle: "short",
    direction: "Resource vs capital. The stock is Venezuela. The cash is Brazil and Guyana.",
    going: "Pre-salt FPSOs, Stabroek phases, production-sharing. Listed door: PBR, XOM, CVX.",
    notGoing: "Orinoco extra-heavy until upgraders, diluent and politics work. 303 bn bbl is a geological event, not a 2026 FID.",
    rp: "Venezuela R/P is a joke against 0.8–1.2 mb/d actual. Guyana is a volume story.",
  },
  {
    slug: "eurasia",
    name: "Eurasia",
    cycle: "sustaining",
    direction: "Mature basins. The cheque keeps Russia from declining. Products are the 2026 tell.",
    going: "Sustaining capex, Tengiz expansion, CPC reliability. Shadow-fleet freight is a trade, not a capex cycle.",
    notGoing: "Greenfield megaprojects that miss a hurdle when Urals is discounted and plants are hit.",
    rp: "Russia ~58–80 bn OPEC, higher on BP/Eni. Decline is the risk, not geology.",
  },
  {
    slug: "europe",
    name: "Europe",
    cycle: "sustaining",
    direction: "Highest observed decline on earth (9.7%). Tax and decommissioning.",
    going: "NCS sustaining, GPFG recycling, ARA tanks when the curve allows. Dated Brent rent.",
    notGoing: "UKCS growth. Harbour and Ithaca are fiscal options, not volume.",
    rp: "Tiny stock. The power is the marker, not the barrels.",
  },
  {
    slug: "africa",
    name: "Africa",
    cycle: "long",
    direction: "Light-sweet with political beta. IOC deepwater over onshore fiscal risk.",
    going: "GoG PSC (Shell, TTE, Eni, XOM, CVX). Namibia / Uganda are 2027–30 options.",
    notGoing: "Onshore fiscal states without a security story. Libya is a switch, not a budget you scale.",
    rp: "Libya 48 bn with a 0.5–1.4 mb/d binary. Nigeria is production minus theft.",
  },
  {
    slug: "asia-pacific",
    name: "Asia-Pacific",
    cycle: "downstream",
    direction: "The bid. Refining shifted East of Suez. Crude growth is not the story.",
    going: "Complex refining and chemicals, Chinese NOC lifting to floor the import bill.",
    notGoing: "A crude-growth FID cycle. China drills to not import more, not to export.",
    rp: "Mature PSC. Crude growth is not the story. Oceania's LNG is next door.",
  },
  {
    slug: "oceania",
    name: "Oceania",
    cycle: "downstream",
    direction: "LNG first. Crude a rounding error. Antarctica is a treaty.",
    going: "Australian LNG (Woodside, Santos, Gorgon/Wheatstone). PNG LNG. Condensate as a side-stream.",
    notGoing: "A crude-growth FID. Antarctic barrels.",
    rp: "Tiny oil stock. Gas is the book. JKM, not WTI.",
  },
];

export const CAPEX_SOURCES = [
  { name: "IEA World Energy Investment 2025", url: "https://www.iea.org/reports/world-energy-investment-2025" },
  { name: "IEA field decline rates", url: "https://www.iea.org/reports/the-implications-of-oil-and-gas-field-decline-rates" },
  { name: "Wood Mackenzie 2026 upstream outlook", url: "https://www.woodmac.com/" },
];
