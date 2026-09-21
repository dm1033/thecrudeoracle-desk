import { REGIONS, type Producer, type Region } from "@/data/continents";
import { producerSlug } from "@/lib/slug";

export type CountryBook = {
  slug: string;
  name: string;
  region: Region;
  producer: Producer;
  thesis: string;
  capital: string;
  revenue: string;
  trade: string;
  risk: string;
};

const NOTES: Record<
  string,
  { thesis: string; capital: string; revenue: string; trade: string; risk: string }
> = {
  "Saudi Arabia": {
    thesis:
      "The swing, not the museum. 267 bn bbl and a tap that still sets the long-term floor. IEA Aug 5.97 vs 12.11 nameplate is a loading problem, not a geology problem. Fiscal breakeven lives $80–96 nameplate and nearer $100 once PIF is honest. $100 oil funds Vision. It does not create spare barrels overnight.",
    capital:
      "Not more crude. Gas, chemicals, overseas refining. East-West is a bypass pipe, not a growth FID. Spare is a Riyadh option only when tankers can sail Hormuz.",
    revenue:
      "Sovereign crude exports (~$214bn GaStat 2025), PIF recycling, Aramco/SABIC chemicals. OSP vs Oman/Dubai. The second-order bid is petrodollars into risk assets.",
    trade:
      "Arab Light is the flag. Price East of Suez off Dubai/Oman. The East-West repair is a logistics footnote. The strait is the market.",
    risk: "Hormuz. Yanbu. Fiscal overstretch if volumes stay at 6 instead of 9. A forced share-defence dump would be the contrary, not the base case.",
  },
  Iran: {
    thesis:
      "208 bn bbl of geology trapped in a sanctions and war book. Production is policy. IEA Aug 2.16 vs 3.8 capacity. Exempt from OPEC+ targets and still the toll-keeper on Hormuz.",
    capital: "Domestic sustaining. No Western FID. The listed way to be wrong about Iran is to model it like a Gulf peer.",
    revenue: "Sanctioned offtake, domestic refining, a fiscal model that does not belong next to UAE on a spreadsheet.",
    trade: "Iran Heavy is a political barrel. Treat the assay as geology and the volume as policy.",
    risk: "Strait escalation, further export compression, or a deal that dumps barrels. Binary. Size it like an option.",
  },
  Iraq: {
    thesis:
      "Budget oil. 140 bn bbl, 4.4 mb/d on a good month, Basrah loadings are the state. Fiscal breakeven clustered ~$73. IEA Aug 3.86 vs 4.87 capacity — the gap is security and logistics, not a spare-capacity story you can call Monday.",
    capital: "Upstream sustaining and southern export reliability. Not a shale pad. Not a Vision 2030 chemicals pivot.",
    revenue: "SOMO term, oil ~85–95% of goods exports. 2025 goods exports ~$93bn. The budget is the barrel.",
    trade: "Basrah Medium into Asia and USGC cokers. Loadings are the tell, not speeches in Baghdad.",
    risk: "Southern export outages, Kirkuk politics, OPEC+ compensation cuts.",
  },
  UAE: {
    thesis:
      "The listed hybrid. Murban on ICE. Fiscal quality far better than Riyadh. ADNOC is a chemicals and trading house that also pumps 4 mb/d. 120 bn bbl, R/P measured in decades.",
    capital: "Downstream, LNG, chemicals, ADCOP as logistics. Not aggressive crude expansion. Hormuz-constrained, not spare.",
    revenue: "Murban OSP, ADIA recycling, LNG. Non-oil GDP is the real buffer. Allianz/IMF-style fiscal ~$50–65.",
    trade: "Murban is the Asian listed barrel. Long UAE fiscal quality vs high-breakeven budgets if you must express the Gulf in equities.",
    risk: "Hormuz. A Murban contract is not a Hormuz hedge.",
  },
  Kuwait: {
    thesis: "101.5 bn bbl, sour and steady. Future Generations Fund is the second cheque. IEA Aug 2.04 vs 2.88 capacity.",
    capital: "Sustaining. Not a growth story. KPC exports and KIA recycling.",
    revenue: "Kuwait Export grade, KIA. Fiscal ~$43–55. Low lifting, high stock.",
    trade: "KPC OSP into Asia. Treat as a fund with a well, not a well with a fund.",
    risk: "Hormuz. Political downtime. Spare that cannot load.",
  },
  Qatar: {
    thesis:
      "Oil is the cousin. LNG is the business. North Field expansion is the capex event of the decade in gas. 25 bn bbl crude is real and beside the point.",
    capital: "North Field LNG. That is the cheque. Crude expansion is not.",
    revenue: "LNG contracts, condensate, a fiscal oil number around $45 that is a sideshow. QIA recycles the surplus.",
    trade: "Do not pair-trade Qatari crude with WTI. JKM and the North Field timeline are the book.",
    risk: "Hormuz for LNG too — IEA: Qatar/UAE LNG also transits. A strait event is a gas event here.",
  },
  Oman: {
    thesis: "The sour benchmark East of Suez, with Dubai. 1.0 mb/d, OPEC+. In 2026 Sohar STS became a Saudi bypass footnote.",
    capital: "Mature PDO / OQ sustaining. Tight to capacity.",
    revenue: "Oman sour, China term. Fiscal wide $56–85.",
    trade: "Price Oman. Watch Sohar STS as a Saudi logistics tell, not as Omani growth.",
    risk: "Decline, fiscal tightness, being used as a wartime loading workaround.",
  },
  "United States": {
    thesis:
      "The flow continent's engine. 13.25 mb/d crude + condensate. R/P ~10–16 years because it converts resource into proved every quarter. Short-cycle elasticity is the point. At $100 they drill. At $70 they don't. Dallas Fed new-well $66 is the rig-count switch.",
    capital:
      "Permian, Bakken, Eagle Ford pads and selective GoM. Midstream tolls either way. Not new oil-sands mines — those are Canada.",
    revenue: "Shale FCF and buybacks, product exports, NGL. This is a cash-return industry at $80+ WTI, not a ministry.",
    trade: "WTI is a logistics contract. Cushing every Wednesday. US is a net petroleum exporter. That is a structural fact.",
    risk: "Productivity stall, DUC exhaustion, a $60 tape that kills the rig count with a lag. Baker Hughes Friday.",
  },
  Canada: {
    thesis:
      "Oil sands are the stock OPEC refuses to count — ~163–170 bn on EI/OGJ, 5.08 conventional on ASB. 5.06 mb/d. Long-life, capital-intensive, TMX turned a stranded barrel into a traded one.",
    capital: "Sustaining + dividend. New mines $80–90 full-cycle do not get sanctioned at $70. That is the point.",
    revenue: "WCS vs WTI, Alberta Crown royalties, upgrading. CNQ/SU/IMO are the listed door.",
    trade: "WCS-WTI is the Canada trade. Pipe capacity is the catalyst, not OPEC.",
    risk: "Differential blowouts, policy, a mine that never FIDs. Sustaining barrels keep running.",
  },
  Mexico: {
    thesis: "The decline curve in North America. Maya is still a USGC barrel. Pemex is a fiscal transfer, not a growth NOC. OPEC+.",
    capital: "Sustaining and debt service. Not a shale replica.",
    revenue: "Maya heavy, Pemex fiscal. The USGC still wants it.",
    trade: "Maya vs WTI/Brent. Treat as a heavy-sour offtake, not a production beat.",
    risk: "Cantarell-class decline, fiscal raid, outages.",
  },
  Venezuela: {
    thesis:
      "The largest proved crude stock on earth — 303.7 bn bbl — and a trading non-event until upgraders, diluent and politics work. ~0.8–1.2 mb/d actual. R/P is a joke against that flow. IEA 'spare' 0 at 1.16 vs 1.12 'capacity'.",
    capital: "Not going. Orinoco refurbished ~$80. Existing upgraders $42–56 operating. Western committees do not FID this in 2026.",
    revenue: "Merey blend, sanctions JVs, optionality on a political settlement. Not a budget you can model.",
    trade: "USGC cokers are the natural home. Treat 303 bn as a geological event, not a 2026 supply stack.",
    risk: "Sanctions, upgrader failure, a deal that actually dumps extra-heavy. Size the option, do not size the stock.",
  },
  Brazil: {
    thesis:
      "Pre-salt is the cash machine of the Atlantic. 3.95 mb/d, Búzios/Tupi among the highest-margin barrels outside the Gulf. Inside IEA's Americas Quintet. Listed door: Petrobras.",
    capital: "FPSO phases, production-sharing. Full-cycle $25–35. This is where the FID money went — not Orinoco.",
    revenue: "Lifting + dividends. A barrel plus a cheque, not an ETF slogan.",
    trade: "Tupi/Búzios into China, Europe, USGC. Treat PBR as dividend + barrel.",
    risk: "FPSO slip, domestic politics, a dividend raid. Geology is not the risk.",
  },
  Guyana: {
    thesis:
      "The only true growth story in the Atlantic Basin. ~0.90 mb/d and climbing. Stabroek PSC. Lifting $20–25, full-cycle $25–36. Volume story, not a reserve museum.",
    capital: "FPSO phases. Exxon, Hess (now CVX), CNOOC, Government of Guyana. Capital can read — it came here.",
    revenue: "Royalty + profit oil. The state's take is the development story.",
    trade: "Liza, Dated-linked, Europe + Asia. Watch Essequibo as a risk premium, not a base-case shut-in.",
    risk: "Political shock, FPSO delay, a border event. Still a 2026 volume, not a 2027 hope.",
  },
  Argentina: {
    thesis: "Vaca Muerta is gas-weighted with oil optionality. Inside the Quintet on IEA's growth list. YPF is the listed door.",
    capital: "Shale pads, not extra-heavy. Tight to macro and FX, not to geology.",
    revenue: "Medanito/Escalante, domestic fiscal, an oil option on a gas play.",
    trade: "Small in barrels, large in local gravity. Not a tape-mover alone.",
    risk: "FX, policy, offtake. Geology is the least of it.",
  },
  Colombia: {
    thesis: "Andean heavy. Ecopetrol. Castilla/Vasconia into USGC cokers. Small stock, real fiscal.",
    capital: "Mature. Not a growth FID cycle.",
    revenue: "Heavy exports, budget oil.",
    trade: "USGC cokers want it when Maya/Merey wobble.",
    risk: "Decline, security, fiscal take.",
  },
  Ecuador: {
    thesis: "Oriente/Napo. Fiscal oil. 8.3 bn bbl, 0.48 mb/d. A budget, not a basin thesis.",
    capital: "Sustaining.",
    revenue: "Budget oil, heavy differentials.",
    trade: "Pacific heavy into Asia/USGC.",
    risk: "Politics, pipeline outages.",
  },
  Libya: {
    thesis:
      "48.4 bn bbl with a switch. Production is a political binary around 0.5–1.4 mb/d. Highest-beta OPEC barrel. IEA spare 0 at 1.40 vs 1.34 'capacity' — the capacity number is a joke against the stock.",
    capital: "Ports, not pads. IOC offtake when the lights stay on.",
    revenue: "NOC offtake, Es Sider/Sharara. Budget oil when the ports are open.",
    trade: "Size it like an option. Dated Brent-linked light-sweet into Europe.",
    risk: "Force majeure, east vs Tripoli, a sudden 0.8 mb/d add or subtract.",
  },
  Nigeria: {
    thesis:
      "Theft, force majeure and deepwater. 37 bn bbl. The real number is production minus theft minus turnaround. Bonny Light still substitutes for lost Russian product yield when Europe needs sweet.",
    capital: "GoG PSC (Shell, TTE, Eni, XOM, CVX). Not onshore fiscal risk.",
    revenue: "NNPC offtake, equity crude, Dated-linked OSPs.",
    trade: "Bonny, Qua Iboe, Forcados. Light-sweet Atlantic.",
    risk: "Theft, bunkering, outages, a quota that is a fiction against actual loadings.",
  },
  Algeria: {
    thesis: "Gas first, oil second. Saharan Blend is ultra-light. Pipeline gas to Europe is the strategic book.",
    capital: "Sonatrach sustaining, gas more than crude.",
    revenue: "Oil + pipeline gas. A European energy security name more than an OPEC crude name.",
    trade: "Saharan Blend into the Med. Do not ignore the gas.",
    risk: "Mature fields, policy, European demand for the pipe.",
  },
  Angola: {
    thesis: "Decline curve with FPSO optionality. Cabinda/Girassol. China offtake still matters.",
    capital: "Tiebacks, not greenfield. Sonangol + IOC deepwater.",
    revenue: "FPSO barrels, Dated-linked.",
    trade: "West African sweet into China and Europe.",
    risk: "Natural decline 8% club. Miss a tieback, lose a cargo.",
  },
  Egypt: {
    thesis: "Suez Blend is small. Suez transit is not. This is a chokepoint state more than a producer.",
    capital: "Gas more than crude. EGPC/EGAS.",
    revenue: "Transit fees, modest crude, LNG optionality when the plants run.",
    trade: "SUMED / Suez. The barrel that does not sail here pays the Cape.",
    risk: "Red Sea security, transit volumes, domestic gas shortage.",
  },
  Norway: {
    thesis:
      "The last petrostate in the OECD West. 1.99 mb/d. 78% marginal petroleum tax. GPFG is the world's largest oil-revenue recycling machine. Johan Sverdrup is the flag.",
    capital: "NCS sustaining. Observed Europe decline 9.7% — you write the cheque or you shrink.",
    revenue: "Petroleum tax + SDFI + Equinor. The fund is the second-order bid into global assets.",
    trade: "Equinor is the listed Norway. Dated Brent is still set with North Sea cargoes even as volumes fade.",
    risk: "Decline, tax regime, a political turn against new NCS. The marker outlives the barrels.",
  },
  "United Kingdom": {
    thesis: "UKCS is a fiscal and decommissioning story with 0.57 mb/d left. Britain's real leverage is Dated Brent, not Forties volumes.",
    capital: "Late-life and decom. Harbour/Ithaca are tax-regime options, not volume.",
    revenue: "Windfall tax, remaining barrels, a petrol-price political problem when Brent is $100.",
    trade: "You do not need North Sea barrels to need the North Sea marker.",
    risk: "Tax, decommissioning overruns, a marker that someday migrates. Not this year.",
  },
  Denmark: {
    thesis: "Late-life North Sea. Rounding error with a decom bill.",
    capital: "Exit, not growth.",
    revenue: "Late-life barrels.",
    trade: "Not a tape-mover.",
    risk: "Decom.",
  },
  Russia: {
    thesis:
      "Produces like a Gulf state, reserves like a mid-tier depending on the book (OPEC 80 bn, BP/Eni nearer 108). 10.03 mb/d. The barrel finds a home. The discount is the trade. Product yield is the 2026 tell — strikes pull diesel out while crude still sails.",
    capital: "Sustaining or decline. IEA Eurasia observed 6.5%. Greenfield that misses a hurdle when Urals is discounted does not FID.",
    revenue: "Seaborne Urals/ESPO, shadow-fleet freight, a refined-product export machine that Ukrainian strikes keep hitting.",
    trade: "Do not fade Russian crude availability. Fade the product yield when plants are hit. ESPO vs Oman/Dubai is the Pacific barrel.",
    risk: "Tighter enforcement, more plant hits, a peace that dumps barrels. Crude and products are different books.",
  },
  Kazakhstan: {
    thesis: "CPC Blend is light, sweet, and a single-pipe risk. 1.28 mb/d. Tengiz expansion is the capex event. Over target in the IEA August table.",
    capital: "Tengiz, CPC reliability. Listed door: CVX/XOM in Tengiz.",
    revenue: "CPC Blend, production-sharing, a pipe rent.",
    trade: "CPC is a single-point failure. That is a real option premium.",
    risk: "CPC outage, Black Sea weather, Russian transit politics.",
  },
  Azerbaijan: {
    thesis: "BTC is the pipe. Shah Deniz is the gas. Azeri Light is the crude. BP in ACG is the listed expression.",
    capital: "Sustaining ACG, gas more than crude growth.",
    revenue: "BTC offtake, Shah Deniz.",
    trade: "Pipes, not wells, set the risk.",
    risk: "Corridor politics, mature ACG decline.",
  },
  Turkmenistan: {
    thesis: "Gas first. Oil is a rounding error. China pipe is the strategic fact.",
    capital: "Gas.",
    revenue: "Gas contracts.",
    trade: "Not a crude tape-mover.",
    risk: "China offtake, isolation.",
  },
  China: {
    thesis:
      "Fifth-largest producer and a gigantic importer. 4.42 mb/d does not change the import bid. It floors it. Daqing is mature. The cheque is the inbound book — Murban, Dubai, ESPO — and the GRM on the east coast.",
    capital: "Domestic upstream to not import more, plus overseas lifting (CNOOC). Complex refining East of Suez.",
    revenue: "NOC lifting, refining, a strategic stockpile. CNOOC is the listed barrel (0386.HK / CEO).",
    trade: "Dubai/Oman/Murban are the markers. WTI is a cousin. Malacca is the quiet choke.",
    risk: "Demand miss, SPR release, a property-led industrial fade. Still the bid.",
  },
  India: {
    thesis:
      "A refining state more than a producing one. 0.56 mb/d crude, a product-export powerhouse — petroleum exports +46% Apr–Aug 2026, Singapore the top destination. When plants can run, India runs them for export.",
    capital: "GRM, not upstream growth. Reliance / IOC / private export kits.",
    revenue: "Product exports, GRM, a subsidy bill when retail is capped.",
    trade: "Diesel and fuel oil, not a crude bull by itself. Watch Singapore offtake.",
    risk: "Crack collapse, policy on exports, a demand shock at home.",
  },
  Malaysia: {
    thesis: "Tapis is the light-sweet regional marker. Petronas is a trading house. LNG matters more than the crude stock.",
    capital: "Mature PSC + LNG.",
    revenue: "Tapis, LNG, Petronas offtake.",
    trade: "Regional sweet. Not a growth FID cycle.",
    risk: "Decline, LNG contract mix.",
  },
  Indonesia: {
    thesis: "Mature PSC. Minas/Duri. OPEC alumnus, not a 2026 spare story.",
    capital: "Sustaining, gas more than crude.",
    revenue: "ICP barrels, domestic subsidy.",
    trade: "Asia offtake. Decline is the path.",
    risk: "Mature fields, domestic demand eating exports.",
  },
  Vietnam: {
    thesis: "Bach Ho, offshore, modest. A regional barrel, not a tape-mover.",
    capital: "Offshore sustaining.",
    revenue: "Domestic + modest export.",
    trade: "Regional.",
    risk: "Decline, South China Sea politics.",
  },
  Australia: {
    thesis:
      "Oceania's cheque is LNG, not Cossack. 1.80 bn bbl crude, ~0.39 mb/d. Woodside, Santos, Gorgon/Wheatstone. Condensate is a side-stream on a JKM contract.",
    capital: "LNG. Browse/Scarborough timelines. Not a crude-growth FID.",
    revenue: "JKM-linked LNG, PRRT, condensate. Australia is not a petrostate fiscal on oil.",
    trade: "Do not pair-trade Cossack with WTI and call it Australia. The book is JKM and Asian contracts.",
    risk: "JKM, capex inflation, a domestic gas politics fight. Crude is the rounding error.",
  },
  Brunei: {
    thesis: "Champion grade, LNG, a small absolute barrel with a long history.",
    capital: "Mature.",
    revenue: "LNG + crude offtake.",
    trade: "Regional.",
    risk: "Decline.",
  },
  "Papua New Guinea": {
    thesis: "Gas first (PNG LNG). Crude a small condensate/oil side-stream. Not a 2026 tape-mover.",
    capital: "LNG sustaining and expansion debates.",
    revenue: "LNG contracts more than cargoes of crude.",
    trade: "Treat as a gas name.",
    risk: "Above-ground, project execution.",
  },
  "New Zealand": {
    thesis:
      "Not a barrel. A rounding error with a decommissioning conversation. On the atlas so nobody pretends Oceania is empty — or full.",
    capital: "Exit.",
    revenue: "Negligible crude.",
    trade: "None that moves this desk.",
    risk: "Policy, decom.",
  },
  Gabon: {
    thesis: "Mature OPEC. Rabi. Small, real, declining.",
    capital: "Sustaining.",
    revenue: "Offtake.",
    trade: "West African.",
    risk: "Decline, OPEC maths.",
  },
  Congo: {
    thesis: "Offshore OPEC. Djeno. Small.",
    capital: "Offshore sustaining.",
    revenue: "Offtake.",
    trade: "Atlantic.",
    risk: "Decline, quota.",
  },
};

const FALLBACK = {
  thesis: "On the atlas because the barrels are real. Read the region book for spare, decline and the cheque.",
  capital: "See the continent capital card.",
  revenue: "NOC offtake, fiscal oil, or listed equity — named on the producer row.",
  trade: "Express it through the region's grades and chokepoints, not a slogan.",
  risk: "Decline, policy, offtake. Size to liquidity.",
};

export function allCountryBooks(): CountryBook[] {
  return REGIONS.flatMap((region) =>
    region.producers.map((producer) => {
      const note = NOTES[producer.name] ?? FALLBACK;
      return {
        slug: producerSlug(producer.name),
        name: producer.name,
        region,
        producer,
        ...note,
      };
    }),
  );
}

export function countryBySlug(slug: string) {
  return allCountryBooks().find((c) => c.slug === slug);
}

export function countriesInRegion(regionSlug: string) {
  return allCountryBooks().filter((c) => c.region.slug === regionSlug);
}
