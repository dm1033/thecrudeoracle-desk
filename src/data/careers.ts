export const CV_REVIEW_URL = "https://linkedinconstructioncvprofile.com/";
export const CV_REVIEW_NAME = "Construct CV";
export const CV_REWRITE_URL = "https://www.temporaryworksconsulting.com/cv-covering-letter.html";
export const CV_REWRITE_NAME = "CEng rewrite";

export const CAREER_AS_OF = "18 Sep 2026";

export type JobRegion = {
  id: string;
  name: string;
  where: string;
  hiring: string;
  hubs: { name: string; url: string }[];
};

export type PayBand = {
  id: string;
  role: string;
  region: string;
  band: string;
  note: string;
  source: string;
  sourceUrl: string;
};

export type Transfer = {
  id: string;
  from: string;
  blurb: string;
  targets: string[];
  rewrite: string[];
  why: string;
};

export type RoleBook = {
  id: string;
  title: string;
  discipline: string;
  regions: string[];
  query: string;
  payId?: string;
  why: string;
  transferFrom: string[];
};

export type EarnRow = {
  from: string;
  to: string;
  cheque: string;
  note: string;
  transferId: string;
  basin: string;
};

export const JOB_REGIONS: JobRegion[] = [
  {
    id: "gulf",
    name: "Gulf / Middle East",
    where: "United Arab Emirates",
    hiring: "Aramco, ADNOC, QatarEnergy and the EPC houses are still the cash. Tax-free packages, construction and commissioning more than exploration. Fiscal floors in the Kingdom sit $80–96 nameplate — they hire to keep the budget, not to dump barrels.",
    hubs: [
      { name: "Saudi Aramco", url: "https://www.aramco.com/en/careers" },
      { name: "ADNOC", url: "https://www.adnoc.ae/en/careers" },
      { name: "QatarEnergy", url: "https://www.qatarenergy.qa/en/careers" },
      { name: "NES Fircroft Gulf", url: "https://www.nesfircroft.com/jobs" },
    ],
  },
  {
    id: "permian",
    name: "US onshore",
    where: "Houston, TX",
    hiring: "Short-cycle shale. Completions, facilities, production, HSE. Permian still pays a basin premium. Dallas Fed new-well ~$66 is the well; the payroll is the people who keep the pad moving.",
    hubs: [
      { name: "ExxonMobil", url: "https://jobs.exxonmobil.com/" },
      { name: "Chevron", url: "https://careers.chevron.com/" },
      { name: "ConocoPhillips", url: "https://www.conocophillips.com/careers/" },
      { name: "EOG", url: "https://www.eogresources.com/careers" },
    ],
  },
  {
    id: "gom",
    name: "US Gulf of Mexico",
    where: "Houston, TX",
    hiring: "Deepwater, subsea, completions, brownfield. GoM engineers sit above the national petroleum median. Hook-up and commissioning language travels from any heavy civils book.",
    hubs: [
      { name: "SLB", url: "https://careers.slb.com/" },
      { name: "Halliburton", url: "https://jobs.halliburton.com/" },
      { name: "Baker Hughes", url: "https://careers.bakerhughes.com/" },
      { name: "TechnipFMC", url: "https://www.technipfmc.com/en/careers/" },
    ],
  },
  {
    id: "northsea",
    name: "UK / Norway North Sea",
    where: "Aberdeen, United Kingdom",
    hiring: "Brownfield, decommissioning, drilling, integrity. Dated Brent is still set here. Contractors still price in day-rates. Norway pays more; the UKCS is a tax regime with remaining barrels.",
    hubs: [
      { name: "Equinor", url: "https://www.equinor.com/careers" },
      { name: "Harbour Energy", url: "https://www.harbourenergy.com/careers/" },
      { name: "Wood", url: "https://www.woodplc.com/careers" },
      { name: "Aker Solutions", url: "https://www.akersolutions.com/careers/" },
    ],
  },
  {
    id: "guyana",
    name: "Guyana / Suriname",
    where: "Georgetown, Guyana",
    hiring: "FPSO phases, SURF, construction, commissioning. Exxon, Hess (now CVX), CNOOC. Capital can read — it came here. Civils and temporary works people who can talk SIMOPS get through the door.",
    hubs: [
      { name: "ExxonMobil", url: "https://jobs.exxonmobil.com/" },
      { name: "Chevron", url: "https://careers.chevron.com/" },
      { name: "SBM Offshore", url: "https://www.sbmoffshore.com/careers" },
      { name: "McDermott", url: "https://careers.mcdermott.com/" },
    ],
  },
  {
    id: "brazil",
    name: "Brazil pre-salt",
    where: "Rio de Janeiro, Brazil",
    hiring: "FPSOs, SURF, local content. Petrobras plus the IOCs. Construction and commissioning, not a Permian pad.",
    hubs: [
      { name: "Petrobras", url: "https://www.petrobras.com.br/en/careers" },
      { name: "Equinor", url: "https://www.equinor.com/careers" },
      { name: "TotalEnergies", url: "https://totalenergies.com/careers" },
      { name: "TechnipFMC", url: "https://www.technipfmc.com/en/careers/" },
    ],
  },
  {
    id: "westafrica",
    name: "West Africa",
    where: "Lagos, Nigeria",
    hiring: "GoG PSC construction, FPSO, hook-up. Shell, TTE, Eni, XOM, CVX. Not onshore fiscal risk if you are on the water. Security and rotation are the offer.",
    hubs: [
      { name: "Shell", url: "https://www.shell.com/careers.html" },
      { name: "TotalEnergies", url: "https://totalenergies.com/careers" },
      { name: "Eni", url: "https://www.eni.com/en-IT/careers.html" },
      { name: "Saipem", url: "https://www.saipem.com/en/careers" },
    ],
  },
  {
    id: "oceania",
    name: "Australia / PNG LNG",
    where: "Perth, Australia",
    hiring: "LNG, not crude. Woodside, Santos, Chevron slice of Gorgon. Shutdown, brownfield, electrical, mechanical. FIFO is the lifestyle; the package is the point.",
    hubs: [
      { name: "Woodside", url: "https://www.woodside.com/careers" },
      { name: "Santos", url: "https://www.santos.com/careers/" },
      { name: "Chevron Australia", url: "https://careers.chevron.com/" },
      { name: "Worley", url: "https://www.worley.com/careers" },
    ],
  },
  {
    id: "trading",
    name: "Trading hubs",
    where: "Houston, TX",
    hiring: "Houston, London, Singapore, Geneva. Physical before paper. If you cannot name a grade, a choke and a crack, you are not a trader yet.",
    hubs: [
      { name: "BP", url: "https://www.bp.com/en/global/corporate/careers.html" },
      { name: "Shell", url: "https://www.shell.com/careers.html" },
      { name: "Vitol", url: "https://www.vitol.com/careers/" },
      { name: "Trafigura", url: "https://www.trafigura.com/careers/" },
    ],
  },
];

export const PAY_BANDS: PayBand[] = [
  {
    id: "us-pe-bls",
    role: "Petroleum engineer (US, all)",
    region: "United States",
    band: "$131,800 median · $208,000+ 90th",
    note: "BLS OEWS May 2025, SOC 17-2171. National. Basin premiums sit on top.",
    source: "BLS OEWS May 2025",
    sourceUrl: "https://www.bls.gov/oes/",
  },
  {
    id: "us-pe-rh",
    role: "Petroleum engineer, 5–10 yrs",
    region: "United States",
    band: "$118,000 – $195,000",
    note: "Robert Half Energy Salary Guide 2026, mid-to-senior.",
    source: "Robert Half Energy 2026",
    sourceUrl: "https://www.roberthalf.com/",
  },
  {
    id: "permian-pe",
    role: "Petroleum engineer, Permian",
    region: "US onshore",
    band: "$154,000 median base",
    note: "Rigzone 2025 survey, Permian vs $131,800 national. GoM offshore engineers averaged $148,000 in the same survey.",
    source: "Rigzone Annual Salary Survey 2025",
    sourceUrl: "https://www.rigzone.com/",
  },
  {
    id: "us-drilling",
    role: "Drilling engineer",
    region: "United States",
    band: "Entry $90–115k · mid $115–160k · senior $160–220k+",
    note: "OneSource 2026 Oil & Gas Salary Guide. Completions sit a step under drilling at the senior end.",
    source: "OneSource 2026",
    sourceUrl: "https://www.onesourcepros.com/onesource-2026-oil-gas-salary-guide-pay-by-role-region/",
  },
  {
    id: "uk-drilling",
    role: "Drilling engineer, UK North Sea",
    region: "UK / Norway North Sea",
    band: "£55–80k entry · £80–125k mid · £115–170k senior (total cash)",
    note: "Rigzone Sep 2025. Total cash = base + typical offshore/field allowances + typical bonus. Norway sector NOK 800k–2.2m.",
    source: "Rigzone Sep 2025",
    sourceUrl: "https://www.rigzone.com/insights/salary-1/how-much-do-north-sea-drilling-engineers-earn-per-year-15",
  },
  {
    id: "ns-pe-staff",
    role: "Petroleum engineer, North Sea staff",
    region: "UK / Norway North Sea",
    band: "Mid $95–145k · senior $135–200k base (USD)",
    note: "Rigzone Sep 2025, onshore staff supporting UKCS/NCS. Contractors: senior $900–1,200/day.",
    source: "Rigzone Sep 2025",
    sourceUrl: "https://www.rigzone.com/insights/salary-1/what-is-the-salary-range-for-a-petroleum-engineer-in-the-north-sea-5",
  },
  {
    id: "uae-pe",
    role: "Senior petroleum engineer, UAE",
    region: "Gulf / Middle East",
    band: "AED 25,000–42,000 / month",
    note: "ARAM Oil & Gas Consultants, Aug 2026 Gulf guide. Drilling engineer median AED 28,000, reported up to 45,000. Manager band AED 30,000–45,000+.",
    source: "ARAM Gulf salary guide Aug 2026",
    sourceUrl: "https://www.aramoilandgas.com/blog/oil-gas-salary-guide-2026-what-engineers-earn-across-uae-saudi-arabia-qatar-oman",
  },
  {
    id: "uae-mgr",
    role: "Engineering / construction manager, Gulf",
    region: "Gulf / Middle East",
    band: "AED 30,000–45,000+ / month",
    note: "ARAM 2026 indicative manager band. Construction management is named as a high-earning Gulf specialism. Packages are often tax-free; housing and transport sit on top.",
    source: "ARAM Gulf salary guide Aug 2026",
    sourceUrl: "https://www.aramoilandgas.com/blog/oil-gas-salary-guide-2026-what-engineers-earn-across-uae-saudi-arabia-qatar-oman",
  },
  {
    id: "subsea",
    role: "Subsea engineer",
    region: "US Gulf of Mexico",
    band: "$130,000 – $175,000 · 90th $200,000+",
    note: "ConstructionPlacements 2026 onshore vs offshore comparison. Drilling superintendent offshore $180–250k.",
    source: "ConstructionPlacements 2026",
    sourceUrl: "https://www.constructionplacements.com/oil-and-gas-engineer-salary-onshore-vs-offshore/",
  },
];

export const TRANSFERS: Transfer[] = [
  {
    id: "tw",
    from: "Temporary works / scaffold / falsework",
    blurb: "If you have signed a design check, you already do brownfield construction. The Gulf and the FPSO yards pay you to say SIMOPS instead of TWCTC.",
    targets: ["Brownfield construction manager", "Site construction superintendent", "Hook-up & commissioning", "Access / scaffold superintendent"],
    rewrite: [
      "temporary works → construction aids, falsework, access, load-out, heavy lift",
      "CAT I/II/III check → independent verification, design assurance, structural integrity",
      "BS 5975 → SIMOPS, permit to work, brownfield interface",
      "scaffold / TG20 → access, shutdown scaffold, rope-access interface",
    ],
    why: "Shutdowns, hook-up and brownfield live on temporary works. Operators do not advertise 'TW coordinator'. They advertise construction manager, HUC, and access. Same physics. Their nouns.",
  },
  {
    id: "civils",
    from: "Civil / structural / site engineering",
    blurb: "Piled mats, pipe racks, tank farms, LNG civils, module load-out. You have already built the kit. Write the basin and the code they use.",
    targets: ["Civil construction engineer", "Structural integrity", "LNG civils", "Module / load-out engineer"],
    rewrite: [
      "piling mat / BRE 470 → heavy-lift foundation, crane pad, SPMT route",
      "RC / steel frames → pipe rack, piperack, module support, blast-resistant design",
      "CDM principal designer → construction management, interface, brownfield",
      "Eurocodes → AISC / API / project spec — name the code they asked for",
    ],
    why: "Guyana, pre-salt and LNG trains are civils projects with a hydrocarbon hat. The ticket is the project list, not a petroleum degree.",
  },
  {
    id: "pm",
    from: "Construction / project management",
    blurb: "NEC, programmes, subcontract packages, cost. EPC houses hire this every cycle. Write SIMOPS, shutdown, hook-up, not 'site manager'.",
    targets: ["Construction manager", "Project controls", "EPC package manager", "Shutdown / turnaround manager"],
    rewrite: [
      "NEC / JCT → EPC, reimbursable, LSTK, variation / change",
      "programme / P6 → shutdown window, critical path, first oil / first gas",
      "principal contractor → construction management, SIMOPS, PTW integration",
      "package → discipline package, SURF, topsides, pipelines",
    ],
    why: "ARAM's 2026 Gulf guide puts construction management in the high-earning specialisms. The market pays for people who have run a live site next to a live plant.",
  },
  {
    id: "hv",
    from: "HV / electrical / substations",
    blurb: "11kV–400kV is facilities power. LNG, upstream and midstream all buy it. Write substations, MCCs, brownfield electrical, not 'DNO contestable'.",
    targets: ["Electrical construction", "Facilities power", "Brownfield electrical", "Commissioning electrical"],
    rewrite: [
      "DNO / IDNO → facilities electrical, plant power, island generation",
      "11kV–400kV → HV, substations, GIS, transformers, MCCs",
      "PTW / SAP → permit to work, LOTO, SIMOPS",
      "OHL / cable → interconnect, export cable, infield power",
    ],
    why: "Every FPSO, LNG train and gathering station is an electrical project. The shortage is people who have commissioned HV next to live kit.",
  },
  {
    id: "hse",
    from: "HSE / ISO 45001 / CDM / training",
    blurb: "CDM and ISO 45001 are not HAZOP. Translate. Process safety, SIMOPS, PTW, COMAH/SEVESO if you have it. CITB trainer maps to competence, not to a classroom.",
    targets: ["HSE advisor", "Process safety", "SIMOPS lead", "Competence / training lead"],
    rewrite: [
      "CDM → construction HSE, principal designer interface, brownfield",
      "ISO 45001 → HSEMS, audit, incident, leading indicators",
      "NEBOSH / IOSH → still list them; add process-safety language if you have it",
      "CITB trainer → competence assurance, IWCF-adjacent only if true",
    ],
    why: "Operators hire HSE who have stood on a live site. A trainer who has signed RAMS for heavy lifts is closer to SIMOPS than a graduate with a NEBOSH diploma and no mud on the boots.",
  },
  {
    id: "qs",
    from: "QS / commercial / project controls",
    blurb: "Variations, earned value, NEC compensation events. EPC reimbursable is the same sport. Write change, package, and first-oil — not 'final account'.",
    targets: ["Contracts engineer", "Quantity surveyor (O&G)", "Commercial manager", "Project controls"],
    rewrite: [
      "compensation event → change, variation, trend, EAC",
      "BoQ → MTO, quantities, discipline package",
      "final account → close-out, claims, recovery",
      "P6 / cost → controls, S-curve, shutdown window",
    ],
    why: "The $570bn upstream cheque is mostly a decline tax. Controls people who can see a window slip are hired. Slogans are not.",
  },
  {
    id: "mech",
    from: "Mechanical / piping / commissioning",
    blurb: "If you have turned a valve on a live plant, you are already in. Completions, pre-commissioning, punch-list, RFSU. That is the language.",
    targets: ["Mechanical completion", "Piping superintendent", "Commissioning engineer", "Rotating equipment"],
    rewrite: [
      "snagging → punch-list, MC, RFSU, first fill",
      "plant install → brownfield tie-in, hot work, SIMOPS",
      "commissioning → pre-commissioning, energisation, first hydrocarbons",
    ],
    why: "Hook-up and commissioning is where civils people become oil people. The yard does not care what your last job title said.",
  },
  {
    id: "wells",
    from: "Drilling / wells / completions",
    blurb: "You are already on the book. The cheque follows the basin: Permian premium, GoM deepwater, North Sea day-rate, Gulf tax-free.",
    targets: ["Drilling engineer", "Completions engineer", "Wells superintendent", "Company man"],
    rewrite: [
      "Keep the nouns. Add the basin and the hole size.",
      "Staff vs contractor is a pay decision, not a status one. North Sea senior contractor $900–1,200/day.",
    ],
    why: "OneSource 2026 still has drilling at the top of the US engineering stack. Completions rides with it. Do not undersell a well-control ticket.",
  },
  {
    id: "trade",
    from: "Markets / trading / risk",
    blurb: "If you can read a crack, a choke and a fiscal floor, you are closer to a physical desk than a CFA with no barrels.",
    targets: ["Physical crude analyst", "Products / cracks", "Risk / middle office", "Business development (NOC)"],
    rewrite: [
      "price → grade, differential, freight, time-spread",
      "forecast → inventory, spare, decline, fiscal floor",
      "alpha → named stream, named choke, named print",
    ],
    why: "This desk does not hire. The trading houses do. They hire people who can name Hormuz throughput and a 3-2-1 without looking it up.",
  },
];

export const EARN_ROWS: EarnRow[] = [
  {
    from: "Temporary works / scaffold",
    to: "Brownfield construction manager",
    cheque: "AED 30–45k+ / month",
    note: "Gulf, often tax-free. Same physics, their nouns.",
    transferId: "tw",
    basin: "gulf",
  },
  {
    from: "Civil / structural",
    to: "Hook-up & commissioning",
    cheque: "$130–175k SURF / HUC",
    note: "Guyana, pre-salt, GoM. Your civils book is the ticket.",
    transferId: "civils",
    basin: "guyana",
  },
  {
    from: "Construction / PM",
    to: "Shutdown / turnaround manager",
    cheque: "AED 30–45k+ / month",
    note: "ARAM names construction management as a Gulf high-earner.",
    transferId: "pm",
    basin: "gulf",
  },
  {
    from: "HV / electrical",
    to: "Facilities power",
    cheque: "Gulf + LNG packages",
    note: "11kV–400kV is plant power. FPSO and LNG both buy it.",
    transferId: "hv",
    basin: "oceania",
  },
  {
    from: "HSE / CDM / ISO 45001",
    to: "HSE advisor / SIMOPS",
    cheque: "Staff + rotation",
    note: "CDM is not HAZOP. Translate. Live-site mud still counts.",
    transferId: "hse",
    basin: "northsea",
  },
  {
    from: "Drilling / wells",
    to: "Drilling engineer",
    cheque: "US senior $160–220k · NS $900–1,200/day",
    note: "You are already on the book. Basin decides the cheque.",
    transferId: "wells",
    basin: "permian",
  },
];

export const ROLE_BOOK: RoleBook[] = [
  {
    id: "cm-gulf",
    title: "Brownfield construction manager",
    discipline: "Construction",
    regions: ["gulf", "northsea", "oceania", "guyana"],
    query: "brownfield construction manager SIMOPS",
    payId: "uae-mgr",
    why: "The job TW people actually get. Live plant, live construction, permit to work.",
    transferFrom: ["tw", "pm", "civils"],
  },
  {
    id: "huc",
    title: "Hook-up and commissioning",
    discipline: "Commissioning",
    regions: ["guyana", "brazil", "westafrica", "gom", "gulf"],
    query: "hook-up commissioning HUC FPSO",
    why: "FPSO phases in Guyana, pre-salt and West Africa. Civils and mechanical people who have punched out a plant.",
    transferFrom: ["mech", "civils", "tw", "hv"],
  },
  {
    id: "civil-lng",
    title: "LNG / tank / civils engineer",
    discipline: "Civils",
    regions: ["oceania", "gulf", "westafrica"],
    query: "LNG civil engineer tank farm piperack",
    why: "Oceania is LNG, not crude. Tanks, racks, pads, load-out. Your civils book is the ticket.",
    transferFrom: ["civils", "tw"],
  },
  {
    id: "elec",
    title: "Electrical construction / facilities power",
    discipline: "Electrical",
    regions: ["gulf", "oceania", "permian", "guyana"],
    query: "electrical construction HV substation oil gas",
    why: "HV people who have commissioned next to live kit. LNG and upstream both buy this.",
    transferFrom: ["hv"],
  },
  {
    id: "hse-adv",
    title: "HSE advisor / SIMOPS",
    discipline: "HSE",
    regions: ["gulf", "northsea", "permian", "gom"],
    query: "HSE advisor SIMOPS brownfield oil gas",
    why: "CDM and ISO 45001 get you in the room. Process safety language gets you the offer.",
    transferFrom: ["hse", "tw", "pm"],
  },
  {
    id: "controls",
    title: "Project controls / contracts",
    discipline: "Commercial",
    regions: ["gulf", "guyana", "northsea", "oceania"],
    query: "project controls contracts engineer oil and gas",
    why: "EPC reimbursable and shutdown windows. QS people who can see a slip.",
    transferFrom: ["qs", "pm"],
  },
  {
    id: "drill",
    title: "Drilling engineer",
    discipline: "Wells",
    regions: ["permian", "gom", "northsea", "gulf"],
    query: "drilling engineer",
    payId: "us-drilling",
    why: "Top of the US engineering stack in OneSource 2026. Basin and rotation decide the cheque.",
    transferFrom: ["wells"],
  },
  {
    id: "comp",
    title: "Completions engineer",
    discipline: "Wells",
    regions: ["permian", "gom", "gulf"],
    query: "completions engineer",
    payId: "us-pe-rh",
    why: "Rides with drilling. Permian and GoM still bid for it.",
    transferFrom: ["wells"],
  },
  {
    id: "pe",
    title: "Petroleum / production engineer",
    discipline: "Subsurface",
    regions: ["permian", "gom", "gulf", "northsea"],
    query: "petroleum engineer production",
    payId: "us-pe-bls",
    why: "BLS median $131,800. Permian median base $154,000. UAE senior AED 25–42k/month.",
    transferFrom: ["wells"],
  },
  {
    id: "subsea",
    title: "Subsea / SURF",
    discipline: "Subsea",
    regions: ["gom", "guyana", "brazil", "westafrica", "northsea"],
    query: "subsea engineer SURF",
    payId: "subsea",
    why: "Atlantic deepwater is where the long-cycle cheque still clears. $130–175k, 90th $200k+.",
    transferFrom: ["mech", "civils"],
  },
  {
    id: "turnaround",
    title: "Shutdown / turnaround manager",
    discipline: "Construction",
    regions: ["gulf", "northsea", "oceania", "permian"],
    query: "shutdown turnaround manager refinery LNG",
    payId: "uae-mgr",
    why: "The product tightness on this desk is a turnaround story. Plants that run, hire people who can stop them safely.",
    transferFrom: ["pm", "tw", "hse"],
  },
  {
    id: "scaffold",
    title: "Access / scaffold superintendent",
    discipline: "Access",
    regions: ["gulf", "northsea", "oceania"],
    query: "scaffolding superintendent offshore shutdown access",
    why: "Do not write 'scaffolder' into a Gulf advert. Write access, shutdown, SIMOPS. Same trade, their nouns.",
    transferFrom: ["tw"],
  },
  {
    id: "trader",
    title: "Physical crude / products analyst",
    discipline: "Trading",
    regions: ["trading"],
    query: "crude oil analyst physical trading",
    why: "Houston, London, Singapore. Name the grade and the choke or do not apply.",
    transferFrom: ["trade"],
  },
];

export const JOB_BOARDS = [
  {
    id: "rigzone",
    name: "Rigzone",
    blurb: "The oil-industry board. Start here.",
    search: (q: string, _where?: string) => `https://www.rigzone.com/oil/jobs/search/?keyword=${encodeURIComponent(q)}`,
  },
  {
    id: "ogjs",
    name: "Oil and Gas Job Search",
    blurb: "Global. Strong on Gulf and contractor.",
    search: (q: string, _where?: string) => `https://www.oilandgasjobsearch.com/jobs?q=${encodeURIComponent(q)}`,
  },
  {
    id: "ejl",
    name: "Energy Jobline",
    blurb: "Energy-wide. Useful for LNG and power-adjacent.",
    search: (q: string, _where?: string) => `https://www.energyjobline.com/jobs?keywords=${encodeURIComponent(q)}`,
  },
  {
    id: "nes",
    name: "NES Fircroft",
    blurb: "The contractor house. Gulf and North Sea.",
    search: (q: string, _where?: string) => `https://www.nesfircroft.com/jobs?Keywords=${encodeURIComponent(q)}`,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    blurb: "Where the recruiters actually search. Keywords matter.",
    search: (q: string, where = "Houston, TX") =>
      `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(q)}&location=${encodeURIComponent(where)}`,
  },
  {
    id: "indeed",
    name: "Indeed",
    blurb: "Volume. Filter hard.",
    search: (q: string, where = "Houston, TX") =>
      `https://www.indeed.com/jobs?q=${encodeURIComponent(q)}&l=${encodeURIComponent(where)}`,
  },
] as const;

export function payFor(id?: string) {
  return PAY_BANDS.find((p) => p.id === id);
}

export function searchRoles(q: string, regionId: string, transferId: string): RoleBook[] {
  const needle = q.trim().toLowerCase();
  return ROLE_BOOK.filter((r) => {
    if (regionId !== "all" && !r.regions.includes(regionId)) return false;
    if (transferId !== "all" && !r.transferFrom.includes(transferId)) return false;
    if (!needle) return true;
    const hay = `${r.title} ${r.discipline} ${r.query} ${r.why}`.toLowerCase();
    return hay.includes(needle) || needle.split(/\s+/).every((w) => w.length < 2 || hay.includes(w));
  });
}
