import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, L as redirect, U as require_jsx_runtime, V as notFound, _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as FISCAL, h as SIGNALS, x as TECHNICAL_BREAKEVENS } from "./signals-Di7Yp9Gv.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Menu, n as TriangleAlert, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/continents-Dc2eGXQd.js
var WORLD_RESERVES_BN = 1572.459;
var WORLD_PROD_KBPD = 84533;
var RESERVES_AS_OF = "End-2025 (OPEC ASB 2026, Table 3.1)";
var PROD_AS_OF = "January 2026 (EIA, crude + condensate)";
var REGIONS = [
	{
		slug: "middle-east",
		name: "Middle East",
		continent: "Asia",
		kicker: "The swing. 55% of proved crude. Hormuz still prices the tape.",
		thesis: "This is not a continent, it is the market. Saudi, Iran, Iraq, UAE, Kuwait and Qatar sit on 867 billion barrels — 55% of the OPEC world total. Production is the swing, not the stock. Spare capacity is concentrated in Riyadh. Fiscal breakevens now live in the high double-digits; $100 oil funds Vision 2030, it does not create spare barrels overnight.",
		reservesBn: 867.4,
		reservesShare: 55.2,
		productionKbpd: 27900,
		productionShare: 33,
		net: "exporter",
		cycle: "downstream",
		chokepoints: [
			"Strait of Hormuz",
			"Bab el-Mandeb",
			"East-West Pipeline",
			"Sumed / Suez"
		],
		grades: [
			"Arab Light",
			"Murban",
			"Basrah Medium",
			"Kuwait Export",
			"Iran Heavy",
			"Qatar Marine"
		],
		streams: [
			{
				name: "Sovereign crude exports",
				who: "Saudi Aramco, ADNOC, KPC, SOMO, NIOC, QP",
				how: "FOB term + spot, OSP differentials vs Oman/Dubai and Dated Brent",
				scale: "Saudi oil export receipts ~$214bn in 2025 (GaStat). OPEC crude export revenue was $455bn EIA STEO path for 2025."
			},
			{
				name: "Sovereign wealth recycling",
				who: "PIF, ADIA, KIA, QIA",
				how: "Hydrocarbon surplus into global equity, infrastructure, and domestic giga-projects",
				scale: "The investment bid is a second-order oil bull: petrodollars recycle into risk assets, not just budgets."
			},
			{
				name: "NOC downstream & chemicals",
				who: "Aramco, ADNOC, SABIC, Borouge",
				how: "Integrated refining, chemicals, and bunkering — capture the crack, not just the barrel",
				scale: "Murban on ICE made UAE crude a listed benchmark. Refining is a hedge against crude OSP volatility."
			},
			{
				name: "Fiscal take / OPEC+ policy option",
				who: "Finance ministries",
				how: "Production quotas, OSPs, and voluntary cuts are the real options book",
				scale: "Saudi fiscal breakeven clustered near $100/bbl on public IMF-style decks. UAE far lower."
			}
		],
		producers: [
			{
				name: "Saudi Arabia",
				reservesBn: 267.2,
				productionKbpd: 10110,
				opec: true,
				noc: "Aramco",
				fiscalUsdBn: 214,
				fiscalNote: "2025 oil export revenue (GaStat)",
				grades: ["Arab Light", "Arab Extra Light"],
				streams: [
					"Exports",
					"PIF",
					"chemicals"
				]
			},
			{
				name: "Iran",
				reservesBn: 208.6,
				productionKbpd: 4030,
				opec: true,
				noc: "NIOC",
				grades: ["Iran Heavy", "Forozan"],
				streams: ["Sanctions-constrained exports", "domestic refining"]
			},
			{
				name: "Iraq",
				reservesBn: 140,
				productionKbpd: 4391,
				opec: true,
				noc: "SOMO / Basra Oil",
				fiscalUsdBn: 93,
				fiscalNote: "2025 goods exports, oil ~85–95%",
				grades: ["Basrah Medium", "Kirkuk"],
				streams: ["SOMO term", "budget oil"]
			},
			{
				name: "UAE",
				reservesBn: 120,
				productionKbpd: 4010,
				opec: true,
				noc: "ADNOC",
				grades: [
					"Murban",
					"Upper Zakum",
					"Das"
				],
				streams: [
					"Murban ICE",
					"ADIA",
					"LNG"
				]
			},
			{
				name: "Kuwait",
				reservesBn: 101.5,
				productionKbpd: 2660,
				opec: true,
				noc: "KPC",
				grades: ["Kuwait Export"],
				streams: ["KPC exports", "KIA"]
			},
			{
				name: "Qatar",
				reservesBn: 25.244,
				productionKbpd: 1275,
				noc: "QatarEnergy",
				grades: ["Qatar Marine", "Al Shaheen"],
				streams: ["LNG (the real business)", "condensate"]
			},
			{
				name: "Oman",
				reservesBn: 4.825,
				productionKbpd: 1024,
				opecPlus: true,
				noc: "PDO / OQ",
				grades: ["Oman"],
				streams: ["Oman sour benchmark", "China term"]
			}
		],
		trade: [
			"Hormuz is not a headline, it is a 20 mb/d seaborne fact (IEA 2025). 34% of seaborne crude trade.",
			"East-West pipeline is the Saudi bypass. Half-capacity restores in days; full in six weeks is a repair story, not a peace story.",
			"Price Dubai/Oman for East of Suez. Price Dated Brent for West. Murban is the listed hybrid.",
			"Long UAE/Qatar fiscal quality, short high-breakeven budgets, if you must express the region in equities."
		],
		sources: [
			{
				name: "OPEC ASB 2026",
				url: "https://www.opec.org/"
			},
			{
				name: "EIA production (Jan 2026)",
				url: "https://www.eia.gov/international/data/world"
			},
			{
				name: "IEA Hormuz note (2025)",
				url: "https://www.iea.org/"
			},
			{
				name: "EIA OPEC Revenues Fact Sheet",
				url: "https://www.eia.gov/international/content/analysis/special_topics/OPEC_Revenues_Fact_Sheet/"
			}
		]
	},
	{
		slug: "north-america",
		name: "North America",
		continent: "North America",
		kicker: "The flow continent. US pumps the most. Canada sits on the oil sands.",
		thesis: "North America is a production machine, not a reserve museum. The US is the world's largest crude-and-condensate producer at 13.2 mb/d. Canada is a top-five producer once oil sands are counted as the EI Review counts them — 170 billion barrels, not OPEC's 5 billion conventional. Mexico is the decline curve. The revenue stack is shale cash returns, Alberta royalties, Pemex fiscal transfer, and a midstream toll-road that gets paid whether WTI is $70 or $110.",
		reservesBn: 52.1,
		reservesShare: 3.3,
		productionKbpd: 20050,
		productionShare: 23.7,
		net: "exporter",
		cycle: "short",
		chokepoints: [
			"Cushing, Oklahoma",
			"Houston Ship Channel",
			"Keystone / TMX",
			"Panama Canal (products/LNG)"
		],
		grades: [
			"WTI Midland",
			"WTI Cushing",
			"WCS",
			"MARS",
			"Maya"
		],
		streams: [
			{
				name: "Shale free-cash-flow & buybacks",
				who: "XOM, CVX, COP, EOG, FANG, Permian privates",
				how: "Short-cycle wells, variable dividends, inventory depth",
				scale: "US production 13.25 mb/d (EIA Jan 2026). This is a cash-return industry at $80+ WTI."
			},
			{
				name: "Oil-sands royalties & differentials",
				who: "CNQ, SU, IMO, Alberta Crown",
				how: "WCS vs WTI, TMX takeaway, upgrading",
				scale: "Canada 5.06 mb/d. Oil sands are the stock; TMX is the pipe that turned a stranded barrel into a traded one."
			},
			{
				name: "Midstream tolls",
				who: "EPD, ET, KMI, WMB, TRP, ENB",
				how: "Fee-based pipelines, NGL fractionation, export terminals",
				scale: "The closest thing energy has to a utility. Volume over price."
			},
			{
				name: "USGC refining & product exports",
				who: "MPC, VLO, PSX, DINO",
				how: "Crack spreads, diesel/gasoline exports to LatAm and Europe",
				scale: "When crude risk premium dies and products stay tight, this is the book."
			}
		],
		producers: [
			{
				name: "United States",
				reservesBn: 41.909,
				reservesNote: "OPEC ASB conventional; EIA/OGJ higher once tight oil proved is counted",
				productionKbpd: 13246,
				noc: "Independents + majors",
				grades: [
					"WTI",
					"WTS",
					"MARS"
				],
				streams: [
					"Shale FCF",
					"product exports",
					"NGL"
				]
			},
			{
				name: "Canada",
				reservesBn: 5.08,
				reservesNote: "OPEC conventional only. EI/OGJ ~163–170 bn including oil sands",
				productionKbpd: 5059,
				noc: "Producers + Crown royalties",
				grades: [
					"WCS",
					"SYN",
					"MSB"
				],
				streams: [
					"Oil sands",
					"TMX",
					"Alberta royalties"
				]
			},
			{
				name: "Mexico",
				reservesBn: 5.136,
				productionKbpd: 1745,
				opecPlus: true,
				noc: "Pemex",
				grades: ["Maya", "Isthmus"],
				streams: ["Pemex fiscal", "Maya heavy"]
			}
		],
		trade: [
			"WTI is a logistics contract. Watch Cushing stocks every Wednesday.",
			"US is a net petroleum exporter. That is a structural fact, not a slogan.",
			"WCS-WTI is the Canada trade. Pipe capacity is the catalyst, not OPEC.",
			"Henry Hub at ~$3 does not confirm the crude bull. Gas is a different book."
		],
		sources: [
			{
				name: "EIA (Jan 2026 production)",
				url: "https://www.eia.gov/"
			},
			{
				name: "OPEC ASB 2026",
				url: "https://www.opec.org/"
			},
			{
				name: "Energy Institute Statistical Review",
				url: "https://www.energyinst.org/statistical-review"
			}
		]
	},
	{
		slug: "south-america",
		name: "South America",
		continent: "South America",
		kicker: "Biggest stock on earth. Worst conversion of stock into cash — except Guyana.",
		thesis: "Venezuela holds 303.7 billion barrels. That is a geological event, not a trading one, until upgraders, diluent and politics work. Brazil's pre-salt is the cash machine. Guyana is the only true growth story in the Atlantic Basin — almost 0.9 mb/d and climbing. Argentina's Vaca Muerta is gas-weighted with oil optionality. The revenue map is FPSOs, production-sharing, and a heavy-sour barrel the USGC still wants.",
		reservesBn: 348.1,
		reservesShare: 22.1,
		productionKbpd: 7600,
		productionShare: 9,
		net: "exporter",
		cycle: "short",
		chokepoints: [
			"Essequibo / Stabroek",
			"Santos Basin",
			"Panama Canal",
			"USGC heavy-sour capacity"
		],
		grades: [
			"Merey",
			"Tupi / Búzios",
			"Liza",
			"Castilla",
			"Oriente"
		],
		streams: [
			{
				name: "Pre-salt FPSO cash",
				who: "Petrobras, Shell, Equinor, TotalEnergies, CNOOC",
				how: "Production-sharing + lifting in Santos and Campos",
				scale: "Brazil 3.95 mb/d. Búzios/Tupi are among the highest-margin barrels outside the Gulf."
			},
			{
				name: "Guyana production sharing",
				who: "Exxon, Hess (now CVX), CNOOC, Government of Guyana",
				how: "Stabroek PSC, FPSO phases, royalty + profit oil",
				scale: "0.90 mb/d and the fastest-growing supply stack in the Americas."
			},
			{
				name: "Orinoco extra-heavy",
				who: "PDVSA + JV partners (opening, sanctions-bound)",
				how: "Upgraders, diluent, Merey blend",
				scale: "303.7 bn bbl proved. ~0.8–1.1 mb/d actual. R/P is a joke until the plants run."
			},
			{
				name: "Andean heavy and fiscal oil",
				who: "Ecopetrol, Petroecuador, YPF",
				how: "Budget oil, heavy differentials vs Maya/WTI",
				scale: "Colombia, Ecuador, Argentina are small in barrels and large in local fiscal gravity."
			}
		],
		producers: [
			{
				name: "Venezuela",
				reservesBn: 303.701,
				productionKbpd: 805,
				opec: true,
				noc: "PDVSA",
				grades: ["Merey", "Hamaca"],
				streams: ["Orinoco", "sanctions JVs"]
			},
			{
				name: "Brazil",
				reservesBn: 16.841,
				productionKbpd: 3953,
				opecPlus: true,
				noc: "Petrobras",
				grades: [
					"Tupi",
					"Búzios",
					"Lula"
				],
				streams: ["Pre-salt", "dividends"]
			},
			{
				name: "Guyana",
				reservesBn: 11,
				reservesNote: "Worldometer / public compilations; not in OPEC 41-country table",
				productionKbpd: 895,
				noc: "Stabroek JV",
				grades: ["Liza"],
				streams: ["PSC profit oil"]
			},
			{
				name: "Ecuador",
				reservesBn: 8.273,
				productionKbpd: 480,
				grades: ["Oriente", "Napo"],
				streams: ["Fiscal oil"]
			},
			{
				name: "Argentina",
				reservesBn: 3.093,
				productionKbpd: 873,
				noc: "YPF",
				grades: ["Medanito", "Escalante"],
				streams: ["Vaca Muerta"]
			},
			{
				name: "Colombia",
				reservesBn: 2.035,
				productionKbpd: 746,
				noc: "Ecopetrol",
				grades: ["Castilla", "Vasconia"],
				streams: ["Heavy exports"]
			}
		],
		trade: [
			"Guyana is a volume story. Venezuela is an option on politics and upgraders.",
			"USGC cokers are the natural home for Merey, Maya and Castilla.",
			"Petrobras is the cleanest listed expression of pre-salt. Treat it as a dividend + barrel, not an ETF.",
			"Watch Essequibo noise as a risk premium, not a base-case shut-in."
		],
		sources: [{
			name: "OPEC ASB 2026",
			url: "https://www.opec.org/"
		}, {
			name: "EIA production (Jan 2026)",
			url: "https://www.eia.gov/"
		}]
	},
	{
		slug: "africa",
		name: "Africa",
		continent: "Africa",
		kicker: "Light-sweet Atlantic barrels, fiscal states, and a Libya option.",
		thesis: "Africa is not one market. Libya is a reserve giant with a switch that can add or subtract a million barrels on politics. Nigeria is a theft, force-majeure and deepwater story. Algeria is gas first, oil second. Angola is a decline curve with FPSO optionality. The Atlantic Basin still prices Nigerian and Angolan grades off Dated Brent. The revenue stack is NOC offtake, IOC production-sharing, and a tanker book that loves West African loadings when Suez is ugly.",
		reservesBn: 108.3,
		reservesShare: 6.9,
		productionKbpd: 7200,
		productionShare: 8.5,
		net: "exporter",
		cycle: "long",
		chokepoints: [
			"Libyan ports",
			"Bonny / Forcados",
			"Cape of Good Hope rerouting",
			"Suez / SUMED"
		],
		grades: [
			"Bonny Light",
			"Qua Iboe",
			"Saharan Blend",
			"Cabinda",
			"Es Sider"
		],
		streams: [
			{
				name: "Light-sweet term offtake",
				who: "NNPC, Sonangol, NOC Libya, Sonatrach",
				how: "Dated Brent-linked OSPs, equity crude, production-sharing",
				scale: "Nigeria 1.55, Libya 1.40, Algeria 1.17, Angola 0.95 mb/d (EIA Jan 2026)."
			},
			{
				name: "Deepwater IOC share",
				who: "Shell, TotalEnergies, Eni, Exxon, Chevron, Equinor",
				how: "PSC / concession barrels in GoG and East Africa",
				scale: "The listed way to own African barrels without owning the fiscal risk outright."
			},
			{
				name: "Libya swing option",
				who: "NOC, Tripoli vs east",
				how: "Port openings, force majeure, OPEC exemption politics",
				scale: "48.4 bn bbl. Production is a political binary around 0.5–1.4 mb/d."
			},
			{
				name: "New East African barrels",
				who: "Uganda / Tanzania pipeline, Namibia orange basin",
				how: "Project FIDs, first oil, exploration",
				scale: "Not yet a tape-mover. A 2027–30 supply option."
			}
		],
		producers: [
			{
				name: "Libya",
				reservesBn: 48.363,
				productionKbpd: 1398,
				opec: true,
				noc: "NOC",
				grades: ["Es Sider", "Sharara"],
				streams: ["NOC offtake", "swing risk"]
			},
			{
				name: "Nigeria",
				reservesBn: 37.01,
				productionKbpd: 1548,
				opec: true,
				noc: "NNPC",
				grades: [
					"Bonny Light",
					"Qua Iboe",
					"Forcados"
				],
				streams: ["Deepwater", "theft losses"]
			},
			{
				name: "Algeria",
				reservesBn: 12.2,
				productionKbpd: 1170,
				opec: true,
				noc: "Sonatrach",
				grades: ["Saharan Blend"],
				streams: ["Oil + pipeline gas to Europe"]
			},
			{
				name: "Angola",
				reservesBn: 2.55,
				productionKbpd: 954,
				noc: "Sonangol",
				grades: ["Cabinda", "Girassol"],
				streams: ["FPSO decline + tiebacks"]
			},
			{
				name: "Egypt",
				reservesBn: 3.3,
				productionKbpd: 560,
				noc: "EGPC / EGAS",
				grades: ["Suez Blend"],
				streams: ["Suez transit + gas"]
			},
			{
				name: "Congo",
				reservesBn: 1.811,
				productionKbpd: 260,
				opec: true,
				grades: ["Djeno"],
				streams: ["Offshore"]
			},
			{
				name: "Gabon",
				reservesBn: 2,
				productionKbpd: 220,
				opec: true,
				grades: ["Rabi"],
				streams: ["Mature onshore/offshore"]
			}
		],
		trade: [
			"West African sweet still substitutes for Russian Urals in Europe when politics demand it.",
			"Libya is the highest-beta OPEC barrel. Size it like an option.",
			"Nigeria's real number is production minus theft minus turnaround.",
			"Cape rerouting pays tanker owners and punishes diesel cracks on delay."
		],
		sources: [{
			name: "OPEC ASB 2026",
			url: "https://www.opec.org/"
		}, {
			name: "EIA production (Jan 2026)",
			url: "https://www.eia.gov/"
		}]
	},
	{
		slug: "europe",
		name: "Europe",
		continent: "Europe",
		kicker: "A tax-and-import continent. Norway is the last petrostate in the OECD West.",
		thesis: "Europe consumes. Norway produces. The UKCS is a fiscal and decommissioning story with 0.57 mb/d left. The North Sea still sets Dated Brent, which still prices most of the world's seaborne oil. That is Europe's real power in this market — the benchmark, not the barrels. Revenue is GPFG inflows, UK petroleum tax, and a massive import bill that shows up in diesel, not in equities.",
		reservesBn: 7.6,
		reservesShare: .5,
		productionKbpd: 3100,
		productionShare: 3.7,
		net: "importer",
		cycle: "sustaining",
		chokepoints: [
			"Norwegian Continental Shelf",
			"North Sea pipeline system",
			"Rotterdam ARA",
			"Turkish Straits"
		],
		grades: [
			"Brent/Forties/Oseberg/Ekofisk (BFOE)",
			"Johan Sverdrup",
			"Forties"
		],
		streams: [
			{
				name: "Norwegian petroleum tax + GPFG",
				who: "Equinor, Aker BP, Vår, Ministry of Finance",
				how: "78% marginal petroleum tax, SDFI, fund inflows",
				scale: "Norway 1.99 mb/d. The fund is the world's largest oil-revenue recycling machine."
			},
			{
				name: "Dated Brent benchmark rent",
				who: "ICE, Platts/Argus assessments, North Sea majors",
				how: "BFOE cargoes set the global marker even as volumes shrink",
				scale: "ICE: Brent prices ~80% of globally traded crude. Volume is not the point. The marker is."
			},
			{
				name: "ARA refining & storage",
				who: "Rotterdam, Antwerp, Amsterdam independent tanks",
				how: "Cracks, blending, contango storage",
				scale: "When the curve goes into contango, ARA tanks become a trade. When it is backwardated, they don't."
			},
			{
				name: "UKCS late-life",
				who: "Harbour, Ithaca, bp, Shell, NSTA",
				how: "Windfall tax, decommissioning, remaining barrels",
				scale: "UK 0.57 mb/d. This is an equity-optionality and tax-regime trade, not a volume trade."
			}
		],
		producers: [
			{
				name: "Norway",
				reservesBn: 5.919,
				productionKbpd: 1994,
				noc: "Equinor + SDFI",
				grades: [
					"Johan Sverdrup",
					"Oseberg",
					"Ekofisk"
				],
				streams: ["GPFG", "pipeline gas"]
			},
			{
				name: "United Kingdom",
				reservesBn: 1.3,
				productionKbpd: 565,
				grades: ["Forties", "Brent blend remnants"],
				streams: ["UKCS tax", "decom"]
			},
			{
				name: "Denmark",
				reservesBn: .333,
				productionKbpd: 70,
				grades: ["Danish North Sea"],
				streams: ["Late-life"]
			}
		],
		trade: [
			"You do not need North Sea barrels to need the North Sea marker.",
			"Equinor is the listed Norway. Harbour/Ithaca are the listed UKCS tax option.",
			"European diesel is the demand tell. Watch ARA gasoil, not speeches.",
			"Import bills are a political risk for refining margins and windfall taxes."
		],
		sources: [
			{
				name: "OPEC ASB 2026",
				url: "https://www.opec.org/"
			},
			{
				name: "EIA production (Jan 2026)",
				url: "https://www.eia.gov/"
			},
			{
				name: "ICE Brent complex",
				url: "https://www.ice.com/oil"
			},
			{
				name: "NSTA",
				url: "https://www.nstauthority.co.uk/"
			}
		]
	},
	{
		slug: "eurasia",
		name: "Eurasia",
		continent: "Europe / Asia",
		kicker: "Russia is still a 10 mb/d fact. The Caspian is the pipe.",
		thesis: "Russia produces like a Gulf state and reserves like a mid-tier one depending on who you believe (OPEC 80 bn, BP/Eni closer to 108). Kazakhstan and Azerbaijan are pipeline geopolitics: CPC and BTC. The revenue stack is Urals discounts, shadow-fleet freight, CPC Blend, and a refined-product export machine that Ukrainian strikes keep hitting. Products tightness is the Eurasia tell in 2026, not crude barrels.",
		reservesBn: 118.6,
		reservesShare: 7.5,
		productionKbpd: 12200,
		productionShare: 14.4,
		net: "exporter",
		cycle: "sustaining",
		chokepoints: [
			"CPC pipeline",
			"BTC",
			"Druzhba",
			"Baltic / Pacific ports",
			"Turkish Straits"
		],
		grades: [
			"Urals",
			"ESPO",
			"Sokol",
			"CPC Blend",
			"Azeri BTC"
		],
		streams: [
			{
				name: "Seaborne Urals / ESPO",
				who: "Rosneft, Lukoil, Gazprom Neft, traders",
				how: "Discount to Dated, shadow fleet, India/China offtake",
				scale: "Russia 10.03 mb/d (EIA Jan 2026). The barrel finds a home. The discount is the trade."
			},
			{
				name: "Caspian pipeline rent",
				who: "NCOC, Tengizchevroil, SOCAR, BP ACG",
				how: "CPC Blend, BTC, Shah Deniz gas",
				scale: "Kazakhstan 1.28 mb/d, Azerbaijan ~0.7. Pipes, not wells, set the risk."
			},
			{
				name: "Refined-product exports",
				who: "Russian refineries",
				how: "Diesel and fuel oil out of Baltic/Black Sea",
				scale: "Strikes on refineries in 2026 are why heating oil can rip while crude mean-reverts."
			}
		],
		producers: [
			{
				name: "Russia",
				reservesBn: 80,
				reservesNote: "OPEC ASB; BP/Eni nearer 108 bn",
				productionKbpd: 10027,
				opecPlus: true,
				noc: "Rosneft / Gazprom Neft",
				grades: ["Urals", "ESPO"],
				streams: [
					"Seaborne crude",
					"products",
					"pipeline gas"
				]
			},
			{
				name: "Kazakhstan",
				reservesBn: 30,
				productionKbpd: 1280,
				opecPlus: true,
				noc: "KazMunayGas",
				grades: ["CPC Blend", "Tengiz"],
				streams: ["CPC", "Tengiz expansion"]
			},
			{
				name: "Azerbaijan",
				reservesBn: 7,
				productionKbpd: 620,
				noc: "SOCAR",
				grades: ["Azeri BTC"],
				streams: ["BTC", "Shah Deniz"]
			},
			{
				name: "Turkmenistan",
				reservesBn: .6,
				productionKbpd: 230,
				grades: ["Turkmen blend"],
				streams: ["Gas first"]
			}
		],
		trade: [
			"Do not fade Russian crude availability. Fade the product yield when plants are hit.",
			"CPC is a single-point failure for Kazakhstan. That is a real option premium.",
			"ESPO vs Oman/Dubai is the Pacific Russian barrel.",
			"Listed expressions: CVX/XOM in Tengiz, BP in ACG, EQNR/others in Caspian gas."
		],
		sources: [{
			name: "OPEC ASB 2026",
			url: "https://www.opec.org/"
		}, {
			name: "EIA production (Jan 2026)",
			url: "https://www.eia.gov/"
		}]
	},
	{
		slug: "asia-pacific",
		name: "Asia-Pacific",
		continent: "Asia / Oceania",
		kicker: "The demand continent. China drills. India refines. Japan and Korea pay. Oceania is next door, on its own card.",
		thesis: "Asia-Pacific is where barrels go to die in a cracker or a car. China is the fifth-largest producer and a gigantic importer. India has turned into a refined-product export powerhouse — petroleum exports +46% Apr–Aug 2026, with Singapore now the top destination. Malaysia and Indonesia are mature. Australia's LNG cheque lives on the Oceania page — putting Gorgon in a bucket with Daqing is how people mix a demand bid with a gas contract. The revenue stack is Chinese NOC lifting, Indian GRM, and a freight book that lives or dies on the Malacca and South China Sea.",
		reservesBn: 48.9,
		reservesShare: 3.1,
		productionKbpd: 6410,
		productionShare: 7.6,
		net: "importer",
		cycle: "demand",
		chokepoints: [
			"Strait of Malacca",
			"South China Sea",
			"Lombok",
			"Hormuz (for inbound)"
		],
		grades: [
			"Daqing",
			"Minas",
			"Tapis",
			"Cossack",
			"Murban inbound"
		],
		streams: [
			{
				name: "Import refining margins",
				who: "Sinopec, PetroChina, Reliance, IOC, TOP, refiners KR/JP",
				how: "GRM on inbound Murban/Dubai/ESPOs, product export",
				scale: "India petroleum exports +46% Apr–Aug 2026 (Crisil/CNBC). Singapore $4.3bn in Q2 alone."
			},
			{
				name: "Chinese domestic upstream",
				who: "PetroChina, CNOOC, Sinopec",
				how: "Mature onshore + Bohai/South China Sea",
				scale: "China 4.42 mb/d. It does not change the import bid. It floors it."
			},
			{
				name: "East-of-Suez cracks",
				who: "Singapore, Korea, Japan, India export kits",
				how: "Complex refining on inbound Murban/Dubai/ESPO, product export east and west",
				scale: "The demand continent's second cheque. Cracks, not wells."
			},
			{
				name: "National oil companies offtake",
				who: "Petronas, Pertamina, PTT",
				how: "Equity crude, domestic subsidy, regional trading books",
				scale: "Mature barrels, real trading houses."
			}
		],
		producers: [
			{
				name: "China",
				reservesBn: 34.472,
				productionKbpd: 4420,
				noc: "CNPC / Sinopec / CNOOC",
				grades: ["Daqing", "Shengli"],
				streams: ["Domestic upstream", "import book"]
			},
			{
				name: "India",
				reservesBn: 4.995,
				productionKbpd: 564,
				noc: "ONGC / Reliance refining",
				grades: ["Mumbai High"],
				streams: ["Product exports", "GRM"]
			},
			{
				name: "Malaysia",
				reservesBn: 2.7,
				productionKbpd: 520,
				noc: "Petronas",
				grades: ["Tapis"],
				streams: ["LNG + Tapis"]
			},
			{
				name: "Indonesia",
				reservesBn: 2.287,
				productionKbpd: 610,
				grades: ["Minas", "Duri"],
				streams: ["Mature PSC"]
			},
			{
				name: "Vietnam",
				reservesBn: 4.4,
				productionKbpd: 310,
				grades: ["Bach Ho"],
				streams: ["Offshore"]
			},
			{
				name: "Brunei",
				reservesBn: 1.1,
				productionKbpd: 90,
				grades: ["Champion"],
				streams: ["LNG"]
			}
		],
		trade: [
			"Dubai/Oman and Murban are the Asian crude markers. WTI is a cousin.",
			"India's product export surge is a diesel-and-fuel-oil story, not a crude bull by itself.",
			"CNOOC is the listed Chinese barrel. 0386.HK / CEO.",
			"Malacca is the quiet chokepoint. Hormuz is the loud one.",
			"Australia's LNG lives on the Oceania card. Do not mix JKM with Daqing."
		],
		sources: [
			{
				name: "OPEC ASB 2026",
				url: "https://www.opec.org/"
			},
			{
				name: "EIA production (Jan 2026)",
				url: "https://www.eia.gov/"
			},
			{
				name: "India petroleum exports (Sep 2026)",
				url: "https://www.cnbctv18.com/"
			}
		]
	},
	{
		slug: "oceania",
		name: "Oceania",
		continent: "Oceania",
		kicker: "LNG is the cheque. Crude is a rounding error. Antarctica is a treaty.",
		thesis: "Oceania is a gas continent that happens to load some condensate. Australia's 1.80 bn bbl of crude and ~0.39 mb/d do not move the oil tape. Woodside, Santos and the Chevron Gorgon/Wheatstone kit are JKM contracts with a crude side-stream. Papua New Guinea is PNG LNG. New Zealand is a decommissioning conversation. Anyone pitching Antarctic barrels is selling a story — the Treaty is not a reserve report.",
		reservesBn: 2,
		reservesShare: .1,
		productionKbpd: 430,
		productionShare: .5,
		net: "mixed",
		cycle: "downstream",
		chokepoints: [
			"NW Shelf loadings",
			"Torres Strait",
			"Asian LNG terminals"
		],
		grades: ["Cossack", "NW Shelf condensate"],
		streams: [
			{
				name: "Australian LNG",
				who: "Woodside, Santos, Chevron Gorgon/Wheatstone",
				how: "JKM-linked long-term contracts, spot residual, condensate side-stream",
				scale: "The real cheque. Crude ~0.39 mb/d is a rounding error against Asian gas demand."
			},
			{
				name: "PRRT and domestic gas politics",
				who: "Commonwealth, WA domestic gas reservation",
				how: "Petroleum resource rent tax, reservation policy, state royalties",
				scale: "Australia is not a petrostate fiscal on oil. The fight is gas to Asia vs gas at home."
			},
			{
				name: "PNG LNG",
				who: "Exxon, Santos, JX, Papua New Guinea",
				how: "Project LNG, condensate",
				scale: "A gas name. Crude is the cousin. Above-ground risk is the premium."
			}
		],
		producers: [
			{
				name: "Australia",
				reservesBn: 1.803,
				productionKbpd: 390,
				noc: "Woodside / Santos",
				grades: ["Cossack", "NW Shelf"],
				streams: ["LNG", "condensate"]
			},
			{
				name: "Papua New Guinea",
				reservesBn: .16,
				reservesNote: "Public compilations, small; gas is the book",
				productionKbpd: 32,
				grades: ["Kutubu / condensate"],
				streams: ["PNG LNG"]
			},
			{
				name: "New Zealand",
				reservesBn: .03,
				productionKbpd: 8,
				grades: ["Maui remnants"],
				streams: ["Late-life / decom"]
			}
		],
		trade: [
			"Do not pair-trade Cossack with WTI and call it Australia. The book is JKM.",
			"Condensate follows the LNG train, not the oil committee.",
			"Antarctica: no commercial production. Treaty. Not a forecast.",
			"Listed doors: WDS, STO, CVX slice of Gorgon."
		],
		sources: [
			{
				name: "OPEC ASB 2026",
				url: "https://www.opec.org/"
			},
			{
				name: "EIA production (Jan 2026)",
				url: "https://www.eia.gov/"
			},
			{
				name: "Energy Institute Statistical Review",
				url: "https://www.energyinst.org/statistical-review"
			}
		]
	}
];
function regionBySlug(slug) {
	return REGIONS.find((r) => r.slug === slug);
}
REGIONS.map((r) => ({
	slug: r.slug,
	name: r.name,
	kicker: r.kicker,
	reservesBn: r.reservesBn,
	productionKbpd: r.productionKbpd,
	net: r.net
}));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/dispatch-N_O992tf.js
var SUBSTACK_TITLE = "The Crude Oracle";
var DISPATCH_PITCH = "The Crude Oracle on Substack. Spare, fiscal floors, continent cash, and the jobs that follow the barrels. Public sources. First person. No hedge language. No buy tickets.";
var DISPATCH_ISSUES = [
	{
		slug: "the-gap-filled",
		date: "2026-09-18",
		title: "The gap filled. The strait did not.",
		kicker: "Tape",
		dek: "Friday delayed tape: WTI $95.3, Brent $98.3. I called $96–98 the fill zone on 10 Sep. It filled. Hormuz is still the premium.",
		minutes: 6,
		tags: [
			"tape",
			"Hormuz",
			"spare"
		],
		sections: [
			{
				h: "What printed",
				p: "Friday delayed tape: WTI $95.3 (−6.5%), Brent $98.3 (−6.3%). Thursday's settle was $101.91 / $104.82. The $100 handle did not survive the session. On 10 Sep I treated $96–98 as the first fill zone after the gap-up. We are in it. This is giving back the Yanbu panic in one print, not a Hormuz reopening. A $6 down day inside a war-premium market is a fill. It is not $70."
			},
			{
				h: "Logistics is not the strait",
				p: "Saudi extra barrels to Asia via ship-to-ship off Sohar. Half of East-West capacity 'in days', full in six weeks — a repair story. Yanbu loadings were the spike. STS is a bypass footnote. It does not reopen Hormuz. IEA 2025 still stands: ~20 mb/d, a quarter of seaborne oil, 34% of seaborne crude, still priced as contested water. The tape faded the logistics headline. It did not fade the strait."
			},
			{
				h: "Products sold with crude",
				p: "Heating oil −8% on the session, so this is risk-off in the complex, not a crack unwind. The structural tell is unchanged: HO still +118% year-on-year on the public tape. US retail diesel still north of $6. India's petroleum exports +46% Apr–Aug. A running-refinery world that just had a risk-off Friday."
			},
			{
				h: "The budget did not get cheaper",
				p: "No ministerial word. Spare is still a Riyadh option that cannot clear the strait. Fiscal floors in the Kingdom sit $80–96 nameplate. At $95 Brent with Aug volumes of 5.97 vs ~9 typical, the budget is tighter, not looser. A washout does not make them volunteer a $70 tape."
			},
			{
				h: "Inventories",
				p: "EIA WPSR 16 Sep, week ending 11 Sep: commercial crude 423.4 mb (−0.6), 1% above the five-year, +1.9% yoy. SPR 285.0. The August 25.8 mb four-week build is the ghost that capped $109. Friday's fill does not need a new inventory story. Next print: Wednesday 23 Sep 10:30 ET."
			}
		],
		closer: "I called $96–98 the fill zone on 10 Sep. It filled. I am not buying 'repair = peace' and I am not panic-selling a war-premium market at the first fill. Base case now: $92–102 WTI until the next EIA or a new Gulf headline. Size smaller. Oman STS is logistics. The strait is the market."
	},
	{
		slug: "cat-iii-is-a-gulf-ticket",
		date: "2026-09-18",
		title: "Your CAT III already paid for the ticket.",
		kicker: "Earn $$$",
		dek: "Temporary works, civils, HV and HSE people already do the work the Gulf and the FPSO yards advertise. They just advertise it in another language. Rewrite the nouns. Take the cheque.",
		minutes: 8,
		tags: [
			"jobs",
			"transfer",
			"Gulf",
			"pay"
		],
		sections: [
			{
				h: "The market is hiring construction. It will not say so.",
				p: "Aramco, ADNOC, QatarEnergy, Exxon Guyana, Woodside LNG — the 2026 cheque is brownfield, hook-up, commissioning, shutdowns and facilities power. That is temporary works, civils, HV and site management with a hydrocarbon hat. The boards do not say 'TW coordinator'. They say construction manager, HUC, SIMOPS, access. Same physics. Their nouns."
			},
			{
				h: "What the public pay books actually print",
				p: "BLS OEWS May 2025: US petroleum engineer median $131,800, 90th $208,000+. Rigzone 2025: Permian median base $154,000; GoM offshore engineers $148,000. OneSource 2026: US drilling engineer senior $160–220k+. Rigzone Sep 2025: UK North Sea drilling engineer total cash £55–170k; Norway NOK 800k–2.2m; North Sea petroleum contractor senior $900–1,200/day. ARAM Aug 2026 Gulf guide: senior petroleum AED 25–42k a month, manager band AED 30–45k+, often tax-free. I do not invent a number. Those are the envelopes."
			},
			{
				h: "How the skill actually transfers",
				p: "A CAT III check is independent verification. A piling mat is a heavy-lift pad. A CITB trainer who has signed RAMS for a live lift is closer to SIMOPS than a graduate with a clean NEBOSH and no mud. HV from 11kV to 400kV is facilities power on an FPSO and an LNG train. CDM is not HAZOP — translate it, do not throw it away. The people who fail the screen wrote 'temporary works coordinator' into an ADNOC construction-manager advert."
			},
			{
				h: "Where the hiring is, this cycle",
				p: "Gulf: construction, commissioning, electrical, HSE — fiscal floors in the Kingdom sit $80–96 nameplate; they hire to keep the budget. Guyana / Suriname: FPSO phases, SURF, HUC. Brazil pre-salt: the same, with local content. US onshore: short-cycle completions and facilities. North Sea: brownfield, decommissioning, integrity, day-rate contractors. Australia: LNG shutdowns, not crude. Trading hubs if you can name a grade and a choke without looking it up."
			},
			{
				h: "The CV is the choke",
				p: "Recruiters search their language. If your first page still says 'principal contractor' and 'compensation event', you are invisible to an EPC house that asked for SIMOPS and change. Construct CV reviews construction and energy documents against the advert you are actually chasing — 2-page, ATS, recruiter summary, keyword alignment, no invented titles. That is the whole product. Use it before you fire 40 applications into a black hole."
			}
		],
		closer: "The barrels decide the jobs. This desk already maps the barrels. Jobs maps the transfer. Earn the day-rate in their nouns, not yours. Then get the CV read by someone who has done the work the page describes."
	},
	{
		slug: "this-is-the-substack",
		date: "2026-09-18",
		title: "This is the Crude Oracle Substack.",
		kicker: "Masthead",
		dek: "A free oil-industry letter. Tape, spare, continent cash, and the jobs that follow the barrels. Same desk. Same voice. RSS if you read in a reader.",
		minutes: 4,
		tags: [
			"substack",
			"method",
			"jobs"
		],
		sections: [
			{
				h: "What this is",
				p: "The Crude Oracle is already a desk: delayed tape, IEA/EIA/OPEC prints, continent reserves and revenue, producer books, cracks, chokes. Dispatch is the letter. First person. Public sources. No hedge language. No buy tickets. If you already open the briefing before the EIA, this is that voice on the desk every day, and on the list when we wire mail."
			},
			{
				h: "What you get",
				p: "The fill and the strait. Fiscal floors versus well breakevens. Where capital actually sits this cycle — short-cycle shale, Atlantic deepwater, Gulf downstream — and the jobs that follow it. When a CAT III is a Gulf ticket. When a CV still says 'principal contractor' into an ADNOC construction-manager advert."
			},
			{
				h: "Jobs and the cheque",
				p: "Earn $$$ is not a slogan. BLS, Rigzone, Robert Half, OneSource, ARAM Gulf — public ranges. Temporary works, civils, HV and HSE already do the work. Rewrite the nouns. Search Rigzone, Oil and Gas Job Search, Energy Jobline, NES, LinkedIn in their language. Then get the page read on Construct CV before you fire forty applications into a black hole."
			}
		],
		closer: "Subscribe on this desk. RSS at /feed.xml if you want a reader. Construct CV if the page has to survive an ATS. The barrels decide the jobs. This letter maps both."
	},
	{
		slug: "fiscal-floors-hire",
		date: "2026-09-17",
		title: "Fiscal floors hire. Spare does not.",
		kicker: "Method",
		dek: "A ministry that needs $90 oil does not mothball the construction gate. Read the budget, then read the board. That is the hiring map.",
		minutes: 5,
		tags: [
			"fiscal",
			"jobs",
			"method"
		],
		sections: [
			{
				h: "Two breakevens, two labour markets",
				p: "The well can make money at $40 and the ministry can still need $90. That is not a contradiction. It is why Riyadh hires construction when the tape is $95 and does not volunteer a $70 print. Effective OPEC+ spare vs August is 0.22 mb/d. Nameplate gap is not spare if it cannot load. It is also not a hiring freeze. The people who keep East-West, Shaybah and the downstream running are a budget line, not a spare-capacity line."
			},
			{
				h: "Follow the capital, not the press release",
				p: "IEA World Energy Investment 2025: upstream ~$570bn, about 90% of it the decline tax. Capital is short-cycle shale, Atlantic deepwater, Gulf downstream. That is completions in the Permian, SURF and HUC in Guyana and the pre-salt, brownfield and shutdowns in the Gulf and the North Sea. If your CV still points at a new oil-sands mine, you are writing to a cycle that is not writing back."
			},
			{
				h: "How this desk uses it",
				p: "Continent atlas for the stock and the cash. Industry book for spare, decline and the two breakevens. Jobs for the transfer and the board search in their language. Dispatch for the daily read. Construct CV when the page has to survive an ATS. Public sources. No order tickets. No invented day-rates."
			}
		],
		closer: "If a house cannot name the stream, it does not belong on the watchlist. If a CV cannot name the basin and the noun they advertised, it does not belong on the board. Same rule."
	}
];
function issueBySlug(slug) {
	return DISPATCH_ISSUES.find((i) => i.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/slug-A19gW8to.js
function producerSlug(name) {
	const aliases = {
		UAE: "uae",
		"United Arab Emirates": "uae",
		UK: "united-kingdom",
		"Eq. Guinea": "equatorial-guinea",
		Congo: "congo"
	};
	if (aliases[name]) return aliases[name];
	return name.toLowerCase().replace(/\./g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/get-tape-Bm7Zi90V.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getTape = createServerFn({ method: "GET" }).handler(createSsrRpc("69afe8597ea691f38d2399e26f579faa61dd8f0ef2f1ce052fdf878be9cd926d"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/producers-BQUXBuAx.js
var NOTES = {
	"Saudi Arabia": {
		thesis: "The swing, not the museum. 267 bn bbl and a tap that still sets the long-term floor. IEA Aug 5.97 vs 12.11 nameplate is a loading problem, not a geology problem. Fiscal breakeven lives $80–96 nameplate and nearer $100 once PIF is honest. $100 oil funds Vision. It does not create spare barrels overnight.",
		capital: "Not more crude. Gas, chemicals, overseas refining. East-West is a bypass pipe, not a growth FID. Spare is a Riyadh option only when tankers can sail Hormuz.",
		revenue: "Sovereign crude exports (~$214bn GaStat 2025), PIF recycling, Aramco/SABIC chemicals. OSP vs Oman/Dubai. The second-order bid is petrodollars into risk assets.",
		trade: "Arab Light is the flag. Price East of Suez off Dubai/Oman. The East-West repair is a logistics footnote. The strait is the market.",
		risk: "Hormuz. Yanbu. Fiscal overstretch if volumes stay at 6 instead of 9. A forced share-defence dump would be the contrary, not the base case."
	},
	Iran: {
		thesis: "208 bn bbl of geology trapped in a sanctions and war book. Production is policy. IEA Aug 2.16 vs 3.8 capacity. Exempt from OPEC+ targets and still the toll-keeper on Hormuz.",
		capital: "Domestic sustaining. No Western FID. The listed way to be wrong about Iran is to model it like a Gulf peer.",
		revenue: "Sanctioned offtake, domestic refining, a fiscal model that does not belong next to UAE on a spreadsheet.",
		trade: "Iran Heavy is a political barrel. Treat the assay as geology and the volume as policy.",
		risk: "Strait escalation, further export compression, or a deal that dumps barrels. Binary. Size it like an option."
	},
	Iraq: {
		thesis: "Budget oil. 140 bn bbl, 4.4 mb/d on a good month, Basrah loadings are the state. Fiscal breakeven clustered ~$73. IEA Aug 3.86 vs 4.87 capacity — the gap is security and logistics, not a spare-capacity story you can call Monday.",
		capital: "Upstream sustaining and southern export reliability. Not a shale pad. Not a Vision 2030 chemicals pivot.",
		revenue: "SOMO term, oil ~85–95% of goods exports. 2025 goods exports ~$93bn. The budget is the barrel.",
		trade: "Basrah Medium into Asia and USGC cokers. Loadings are the tell, not speeches in Baghdad.",
		risk: "Southern export outages, Kirkuk politics, OPEC+ compensation cuts."
	},
	UAE: {
		thesis: "The listed hybrid. Murban on ICE. Fiscal quality far better than Riyadh. ADNOC is a chemicals and trading house that also pumps 4 mb/d. 120 bn bbl, R/P measured in decades.",
		capital: "Downstream, LNG, chemicals, ADCOP as logistics. Not aggressive crude expansion. Hormuz-constrained, not spare.",
		revenue: "Murban OSP, ADIA recycling, LNG. Non-oil GDP is the real buffer. Allianz/IMF-style fiscal ~$50–65.",
		trade: "Murban is the Asian listed barrel. Long UAE fiscal quality vs high-breakeven budgets if you must express the Gulf in equities.",
		risk: "Hormuz. A Murban contract is not a Hormuz hedge."
	},
	Kuwait: {
		thesis: "101.5 bn bbl, sour and steady. Future Generations Fund is the second cheque. IEA Aug 2.04 vs 2.88 capacity.",
		capital: "Sustaining. Not a growth story. KPC exports and KIA recycling.",
		revenue: "Kuwait Export grade, KIA. Fiscal ~$43–55. Low lifting, high stock.",
		trade: "KPC OSP into Asia. Treat as a fund with a well, not a well with a fund.",
		risk: "Hormuz. Political downtime. Spare that cannot load."
	},
	Qatar: {
		thesis: "Oil is the cousin. LNG is the business. North Field expansion is the capex event of the decade in gas. 25 bn bbl crude is real and beside the point.",
		capital: "North Field LNG. That is the cheque. Crude expansion is not.",
		revenue: "LNG contracts, condensate, a fiscal oil number around $45 that is a sideshow. QIA recycles the surplus.",
		trade: "Do not pair-trade Qatari crude with WTI. JKM and the North Field timeline are the book.",
		risk: "Hormuz for LNG too — IEA: Qatar/UAE LNG also transits. A strait event is a gas event here."
	},
	Oman: {
		thesis: "The sour benchmark East of Suez, with Dubai. 1.0 mb/d, OPEC+. In 2026 Sohar STS became a Saudi bypass footnote.",
		capital: "Mature PDO / OQ sustaining. Tight to capacity.",
		revenue: "Oman sour, China term. Fiscal wide $56–85.",
		trade: "Price Oman. Watch Sohar STS as a Saudi logistics tell, not as Omani growth.",
		risk: "Decline, fiscal tightness, being used as a wartime loading workaround."
	},
	"United States": {
		thesis: "The flow continent's engine. 13.25 mb/d crude + condensate. R/P ~10–16 years because it converts resource into proved every quarter. Short-cycle elasticity is the point. At $100 they drill. At $70 they don't. Dallas Fed new-well $66 is the rig-count switch.",
		capital: "Permian, Bakken, Eagle Ford pads and selective GoM. Midstream tolls either way. Not new oil-sands mines — those are Canada.",
		revenue: "Shale FCF and buybacks, product exports, NGL. This is a cash-return industry at $80+ WTI, not a ministry.",
		trade: "WTI is a logistics contract. Cushing every Wednesday. US is a net petroleum exporter. That is a structural fact.",
		risk: "Productivity stall, DUC exhaustion, a $60 tape that kills the rig count with a lag. Baker Hughes Friday."
	},
	Canada: {
		thesis: "Oil sands are the stock OPEC refuses to count — ~163–170 bn on EI/OGJ, 5.08 conventional on ASB. 5.06 mb/d. Long-life, capital-intensive, TMX turned a stranded barrel into a traded one.",
		capital: "Sustaining + dividend. New mines $80–90 full-cycle do not get sanctioned at $70. That is the point.",
		revenue: "WCS vs WTI, Alberta Crown royalties, upgrading. CNQ/SU/IMO are the listed door.",
		trade: "WCS-WTI is the Canada trade. Pipe capacity is the catalyst, not OPEC.",
		risk: "Differential blowouts, policy, a mine that never FIDs. Sustaining barrels keep running."
	},
	Mexico: {
		thesis: "The decline curve in North America. Maya is still a USGC barrel. Pemex is a fiscal transfer, not a growth NOC. OPEC+.",
		capital: "Sustaining and debt service. Not a shale replica.",
		revenue: "Maya heavy, Pemex fiscal. The USGC still wants it.",
		trade: "Maya vs WTI/Brent. Treat as a heavy-sour offtake, not a production beat.",
		risk: "Cantarell-class decline, fiscal raid, outages."
	},
	Venezuela: {
		thesis: "The largest proved crude stock on earth — 303.7 bn bbl — and a trading non-event until upgraders, diluent and politics work. ~0.8–1.2 mb/d actual. R/P is a joke against that flow. IEA 'spare' 0 at 1.16 vs 1.12 'capacity'.",
		capital: "Not going. Orinoco refurbished ~$80. Existing upgraders $42–56 operating. Western committees do not FID this in 2026.",
		revenue: "Merey blend, sanctions JVs, optionality on a political settlement. Not a budget you can model.",
		trade: "USGC cokers are the natural home. Treat 303 bn as a geological event, not a 2026 supply stack.",
		risk: "Sanctions, upgrader failure, a deal that actually dumps extra-heavy. Size the option, do not size the stock."
	},
	Brazil: {
		thesis: "Pre-salt is the cash machine of the Atlantic. 3.95 mb/d, Búzios/Tupi among the highest-margin barrels outside the Gulf. Inside IEA's Americas Quintet. Listed door: Petrobras.",
		capital: "FPSO phases, production-sharing. Full-cycle $25–35. This is where the FID money went — not Orinoco.",
		revenue: "Lifting + dividends. A barrel plus a cheque, not an ETF slogan.",
		trade: "Tupi/Búzios into China, Europe, USGC. Treat PBR as dividend + barrel.",
		risk: "FPSO slip, domestic politics, a dividend raid. Geology is not the risk."
	},
	Guyana: {
		thesis: "The only true growth story in the Atlantic Basin. ~0.90 mb/d and climbing. Stabroek PSC. Lifting $20–25, full-cycle $25–36. Volume story, not a reserve museum.",
		capital: "FPSO phases. Exxon, Hess (now CVX), CNOOC, Government of Guyana. Capital can read — it came here.",
		revenue: "Royalty + profit oil. The state's take is the development story.",
		trade: "Liza, Dated-linked, Europe + Asia. Watch Essequibo as a risk premium, not a base-case shut-in.",
		risk: "Political shock, FPSO delay, a border event. Still a 2026 volume, not a 2027 hope."
	},
	Argentina: {
		thesis: "Vaca Muerta is gas-weighted with oil optionality. Inside the Quintet on IEA's growth list. YPF is the listed door.",
		capital: "Shale pads, not extra-heavy. Tight to macro and FX, not to geology.",
		revenue: "Medanito/Escalante, domestic fiscal, an oil option on a gas play.",
		trade: "Small in barrels, large in local gravity. Not a tape-mover alone.",
		risk: "FX, policy, offtake. Geology is the least of it."
	},
	Colombia: {
		thesis: "Andean heavy. Ecopetrol. Castilla/Vasconia into USGC cokers. Small stock, real fiscal.",
		capital: "Mature. Not a growth FID cycle.",
		revenue: "Heavy exports, budget oil.",
		trade: "USGC cokers want it when Maya/Merey wobble.",
		risk: "Decline, security, fiscal take."
	},
	Ecuador: {
		thesis: "Oriente/Napo. Fiscal oil. 8.3 bn bbl, 0.48 mb/d. A budget, not a basin thesis.",
		capital: "Sustaining.",
		revenue: "Budget oil, heavy differentials.",
		trade: "Pacific heavy into Asia/USGC.",
		risk: "Politics, pipeline outages."
	},
	Libya: {
		thesis: "48.4 bn bbl with a switch. Production is a political binary around 0.5–1.4 mb/d. Highest-beta OPEC barrel. IEA spare 0 at 1.40 vs 1.34 'capacity' — the capacity number is a joke against the stock.",
		capital: "Ports, not pads. IOC offtake when the lights stay on.",
		revenue: "NOC offtake, Es Sider/Sharara. Budget oil when the ports are open.",
		trade: "Size it like an option. Dated Brent-linked light-sweet into Europe.",
		risk: "Force majeure, east vs Tripoli, a sudden 0.8 mb/d add or subtract."
	},
	Nigeria: {
		thesis: "Theft, force majeure and deepwater. 37 bn bbl. The real number is production minus theft minus turnaround. Bonny Light still substitutes for lost Russian product yield when Europe needs sweet.",
		capital: "GoG PSC (Shell, TTE, Eni, XOM, CVX). Not onshore fiscal risk.",
		revenue: "NNPC offtake, equity crude, Dated-linked OSPs.",
		trade: "Bonny, Qua Iboe, Forcados. Light-sweet Atlantic.",
		risk: "Theft, bunkering, outages, a quota that is a fiction against actual loadings."
	},
	Algeria: {
		thesis: "Gas first, oil second. Saharan Blend is ultra-light. Pipeline gas to Europe is the strategic book.",
		capital: "Sonatrach sustaining, gas more than crude.",
		revenue: "Oil + pipeline gas. A European energy security name more than an OPEC crude name.",
		trade: "Saharan Blend into the Med. Do not ignore the gas.",
		risk: "Mature fields, policy, European demand for the pipe."
	},
	Angola: {
		thesis: "Decline curve with FPSO optionality. Cabinda/Girassol. China offtake still matters.",
		capital: "Tiebacks, not greenfield. Sonangol + IOC deepwater.",
		revenue: "FPSO barrels, Dated-linked.",
		trade: "West African sweet into China and Europe.",
		risk: "Natural decline 8% club. Miss a tieback, lose a cargo."
	},
	Egypt: {
		thesis: "Suez Blend is small. Suez transit is not. This is a chokepoint state more than a producer.",
		capital: "Gas more than crude. EGPC/EGAS.",
		revenue: "Transit fees, modest crude, LNG optionality when the plants run.",
		trade: "SUMED / Suez. The barrel that does not sail here pays the Cape.",
		risk: "Red Sea security, transit volumes, domestic gas shortage."
	},
	Norway: {
		thesis: "The last petrostate in the OECD West. 1.99 mb/d. 78% marginal petroleum tax. GPFG is the world's largest oil-revenue recycling machine. Johan Sverdrup is the flag.",
		capital: "NCS sustaining. Observed Europe decline 9.7% — you write the cheque or you shrink.",
		revenue: "Petroleum tax + SDFI + Equinor. The fund is the second-order bid into global assets.",
		trade: "Equinor is the listed Norway. Dated Brent is still set with North Sea cargoes even as volumes fade.",
		risk: "Decline, tax regime, a political turn against new NCS. The marker outlives the barrels."
	},
	"United Kingdom": {
		thesis: "UKCS is a fiscal and decommissioning story with 0.57 mb/d left. Britain's real leverage is Dated Brent, not Forties volumes.",
		capital: "Late-life and decom. Harbour/Ithaca are tax-regime options, not volume.",
		revenue: "Windfall tax, remaining barrels, a petrol-price political problem when Brent is $100.",
		trade: "You do not need North Sea barrels to need the North Sea marker.",
		risk: "Tax, decommissioning overruns, a marker that someday migrates. Not this year."
	},
	Denmark: {
		thesis: "Late-life North Sea. Rounding error with a decom bill.",
		capital: "Exit, not growth.",
		revenue: "Late-life barrels.",
		trade: "Not a tape-mover.",
		risk: "Decom."
	},
	Russia: {
		thesis: "Produces like a Gulf state, reserves like a mid-tier depending on the book (OPEC 80 bn, BP/Eni nearer 108). 10.03 mb/d. The barrel finds a home. The discount is the trade. Product yield is the 2026 tell — strikes pull diesel out while crude still sails.",
		capital: "Sustaining or decline. IEA Eurasia observed 6.5%. Greenfield that misses a hurdle when Urals is discounted does not FID.",
		revenue: "Seaborne Urals/ESPO, shadow-fleet freight, a refined-product export machine that Ukrainian strikes keep hitting.",
		trade: "Do not fade Russian crude availability. Fade the product yield when plants are hit. ESPO vs Oman/Dubai is the Pacific barrel.",
		risk: "Tighter enforcement, more plant hits, a peace that dumps barrels. Crude and products are different books."
	},
	Kazakhstan: {
		thesis: "CPC Blend is light, sweet, and a single-pipe risk. 1.28 mb/d. Tengiz expansion is the capex event. Over target in the IEA August table.",
		capital: "Tengiz, CPC reliability. Listed door: CVX/XOM in Tengiz.",
		revenue: "CPC Blend, production-sharing, a pipe rent.",
		trade: "CPC is a single-point failure. That is a real option premium.",
		risk: "CPC outage, Black Sea weather, Russian transit politics."
	},
	Azerbaijan: {
		thesis: "BTC is the pipe. Shah Deniz is the gas. Azeri Light is the crude. BP in ACG is the listed expression.",
		capital: "Sustaining ACG, gas more than crude growth.",
		revenue: "BTC offtake, Shah Deniz.",
		trade: "Pipes, not wells, set the risk.",
		risk: "Corridor politics, mature ACG decline."
	},
	Turkmenistan: {
		thesis: "Gas first. Oil is a rounding error. China pipe is the strategic fact.",
		capital: "Gas.",
		revenue: "Gas contracts.",
		trade: "Not a crude tape-mover.",
		risk: "China offtake, isolation."
	},
	China: {
		thesis: "Fifth-largest producer and a gigantic importer. 4.42 mb/d does not change the import bid. It floors it. Daqing is mature. The cheque is the inbound book — Murban, Dubai, ESPO — and the GRM on the east coast.",
		capital: "Domestic upstream to not import more, plus overseas lifting (CNOOC). Complex refining East of Suez.",
		revenue: "NOC lifting, refining, a strategic stockpile. CNOOC is the listed barrel (0386.HK / CEO).",
		trade: "Dubai/Oman/Murban are the markers. WTI is a cousin. Malacca is the quiet choke.",
		risk: "Demand miss, SPR release, a property-led industrial fade. Still the bid."
	},
	India: {
		thesis: "A refining state more than a producing one. 0.56 mb/d crude, a product-export powerhouse — petroleum exports +46% Apr–Aug 2026, Singapore the top destination. When plants can run, India runs them for export.",
		capital: "GRM, not upstream growth. Reliance / IOC / private export kits.",
		revenue: "Product exports, GRM, a subsidy bill when retail is capped.",
		trade: "Diesel and fuel oil, not a crude bull by itself. Watch Singapore offtake.",
		risk: "Crack collapse, policy on exports, a demand shock at home."
	},
	Malaysia: {
		thesis: "Tapis is the light-sweet regional marker. Petronas is a trading house. LNG matters more than the crude stock.",
		capital: "Mature PSC + LNG.",
		revenue: "Tapis, LNG, Petronas offtake.",
		trade: "Regional sweet. Not a growth FID cycle.",
		risk: "Decline, LNG contract mix."
	},
	Indonesia: {
		thesis: "Mature PSC. Minas/Duri. OPEC alumnus, not a 2026 spare story.",
		capital: "Sustaining, gas more than crude.",
		revenue: "ICP barrels, domestic subsidy.",
		trade: "Asia offtake. Decline is the path.",
		risk: "Mature fields, domestic demand eating exports."
	},
	Vietnam: {
		thesis: "Bach Ho, offshore, modest. A regional barrel, not a tape-mover.",
		capital: "Offshore sustaining.",
		revenue: "Domestic + modest export.",
		trade: "Regional.",
		risk: "Decline, South China Sea politics."
	},
	Australia: {
		thesis: "Oceania's cheque is LNG, not Cossack. 1.80 bn bbl crude, ~0.39 mb/d. Woodside, Santos, Gorgon/Wheatstone. Condensate is a side-stream on a JKM contract.",
		capital: "LNG. Browse/Scarborough timelines. Not a crude-growth FID.",
		revenue: "JKM-linked LNG, PRRT, condensate. Australia is not a petrostate fiscal on oil.",
		trade: "Do not pair-trade Cossack with WTI and call it Australia. The book is JKM and Asian contracts.",
		risk: "JKM, capex inflation, a domestic gas politics fight. Crude is the rounding error."
	},
	Brunei: {
		thesis: "Champion grade, LNG, a small absolute barrel with a long history.",
		capital: "Mature.",
		revenue: "LNG + crude offtake.",
		trade: "Regional.",
		risk: "Decline."
	},
	"Papua New Guinea": {
		thesis: "Gas first (PNG LNG). Crude a small condensate/oil side-stream. Not a 2026 tape-mover.",
		capital: "LNG sustaining and expansion debates.",
		revenue: "LNG contracts more than cargoes of crude.",
		trade: "Treat as a gas name.",
		risk: "Above-ground, project execution."
	},
	"New Zealand": {
		thesis: "Not a barrel. A rounding error with a decommissioning conversation. On the atlas so nobody pretends Oceania is empty — or full.",
		capital: "Exit.",
		revenue: "Negligible crude.",
		trade: "None that moves this desk.",
		risk: "Policy, decom."
	},
	Gabon: {
		thesis: "Mature OPEC. Rabi. Small, real, declining.",
		capital: "Sustaining.",
		revenue: "Offtake.",
		trade: "West African.",
		risk: "Decline, OPEC maths."
	},
	Congo: {
		thesis: "Offshore OPEC. Djeno. Small.",
		capital: "Offshore sustaining.",
		revenue: "Offtake.",
		trade: "Atlantic.",
		risk: "Decline, quota."
	}
};
var FALLBACK = {
	thesis: "On the atlas because the barrels are real. Read the region book for spare, decline and the cheque.",
	capital: "See the continent capital card.",
	revenue: "NOC offtake, fiscal oil, or listed equity — named on the producer row.",
	trade: "Express it through the region's grades and chokepoints, not a slogan.",
	risk: "Decline, policy, offtake. Size to liquidity."
};
function allCountryBooks() {
	return REGIONS.flatMap((region) => region.producers.map((producer) => {
		const note = NOTES[producer.name] ?? FALLBACK;
		return {
			slug: producerSlug(producer.name),
			name: producer.name,
			region,
			producer,
			...note
		};
	}));
}
function countryBySlug(slug) {
	return allCountryBooks().find((c) => c.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DtQWY0v1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var AGENCY_BOOKS = [
	{
		book: "IEA",
		report: "OMR Sep 2026",
		y2026Supply: "100.7 (−5.7)",
		y2026Demand: "−2.5 y/y",
		y2026Balance: "Shortage. Recovery deferred.",
		y2027Supply: "+8.0 rebound",
		y2027Demand: "+2.6 rebound",
		brent2026: "Dated held ~$100s into Sep",
		brent2027: "Lives or dies on Gulf loadings",
		tell: "Americas Quintet +1.4 then +1.0. Gulf exports Aug ~13 mb/d, half pre-war. Stocks −507 mb since Feb. Effective OPEC+ spare 0.22."
	},
	{
		book: "EIA",
		report: "STEO 9 Sep 2026",
		y2026Supply: "100.6",
		y2026Demand: "102.6",
		y2026Balance: "−2.0 mb/d",
		y2027Supply: "109.9",
		y2027Demand: "105.0",
		brent2026: "$91 year / ~$90 2H26",
		brent2027: "$74 year — assumes normalisation",
		tell: "OPEC liquids 29.3 → 23.6 → 29.4. Shut-ins 6.7 mb/d in Aug, 5.7 in 4Q26. US crude 13.8 then 14.3. Desk does not take $74 if Hormuz stays contested."
	},
	{
		book: "OPEC",
		report: "MOMR (Aug 2026 public comparison)",
		y2026Supply: "Non-OPEC growth still the house line",
		y2026Demand: "+0.6 (Aug path)",
		y2026Balance: "The optimistic book",
		y2027Supply: "Call on OPEC+ is the residual",
		y2027Demand: "+2.2 (Aug path)",
		brent2026: "Not an official price path",
		brent2027: "Not an official price path",
		tell: "Always read against IEA, never instead of it. Sep MOMR is a mid-month print. I do not paste the PDF."
	}
];
var AGENCY_NOTE = "IEA OMR 11 Sep 2026 public pages; EIA STEO release 9 Sep (forecast completed 3 Sep); OPEC MOMR demand deltas from the Aug 2026 public comparison. Liquids, not crude-only, except where a table says crude. Spot in the $100s is a war print inside EIA's $91 year.";
var QUINTET = {
	name: "Americas Quintet",
	members: "United States, Canada, Brazil, Guyana, Argentina",
	y2026: "+1.4 mb/d",
	y2027: "+1.0 mb/d",
	note: "The only non-OPEC+ growth IEA will sign in 2026. Short-cycle shale plus Atlantic deepwater. That is the elastic barrel.",
	source: "IEA OMR Sep 2026"
};
var CAPEX_THESIS = "Ninety percent of upstream spend is the decline tax, not a growth story. Boards are buying short-cycle optionality and downstream integration. They are not buying new oil-sands mines or Orinoco upgraders. That is the industry, not the tape.";
var CAPEX_KPIS = [
	{
		k: "Upstream O&G 2025",
		v: "$570bn",
		s: "IEA WEI · first y/y drop since Covid"
	},
	{
		k: "Oil / gas split",
		v: "$420 / $145bn",
		s: "Oil took the cut. Gas held."
	},
	{
		k: "Decline tax",
		v: "~90%",
		s: "IEA field study · offsetting losses"
	},
	{
		k: "Lost if capex = 0",
		v: "5.5 mb/d",
		s: "Each year · Brazil + Norway"
	}
];
var CAPEX_RULES = [
	{
		title: "Short-cycle over megaprojects",
		body: "US light tight oil answers in months. Greenfield mines and frontier conventional answer in years. In a $70–110 tape, boards buy optionality. Permian, Bakken, Eagle Ford and selective GoM still clear. New oil-sands mines do not."
	},
	{
		title: "Integration over more crude",
		body: "Gulf NOCs are moving the cheque into gas, petrochemicals and overseas refining. Capture the crack. Hedge the OSP. Qatar's North Field LNG is the cleanest expression. Saudi nameplate 12.0–12.5 with 1.5–2.0 spare is a policy cushion, not a growth plan."
	},
	{
		title: "Atlantic deepwater over extra-heavy",
		body: "Guyana lifting $20–25. Pre-salt $25–35. Orinoco needs upgraders, diluent and a political settlement. Capital skipped the Belt. It went to Stabroek and Santos."
	},
	{
		title: "Pay the decline tax or shrink",
		body: "Observed conventional decline 5.6%. Natural 8% if you stop writing cheques — about 5.5 mb/d a year. Europe 9.7%, deepwater 10.3%, shale 35% in year one without pads. Middle East 1.8% is why Riyadh still sets the long-term floor."
	}
];
var CAPEX_REGIONS = [
	{
		slug: "north-america",
		name: "North America",
		cycle: "short",
		direction: "Elastic. The swing of last resort outside Riyadh.",
		going: "Short-cycle shale (Permian, Bakken, Eagle Ford) and selective GoM. Midstream tolls get paid either way. Oil-sands sustaining + dividend, not greenfield mines.",
		notGoing: "New oil-sands mines at $80–90 full-cycle. Those do not get sanctioned at $70.",
		rp: "US R/P ~10–16 years. High-velocity. Continuously converting resource into proved."
	},
	{
		slug: "middle-east",
		name: "Middle East",
		cycle: "downstream",
		direction: "Low-cost stock. Downstream pivot. Spare is a loading problem in 2026.",
		going: "Gas, petrochemicals, overseas refining. Qatar North Field LNG. Aramco/ADNOC chemicals. Bypass pipes (East-West, ADCOP) as logistics, not growth.",
		notGoing: "Aggressive upstream crude expansion. Capacity is already 12.11 Saudi. The constraint is Hormuz, not rigs.",
		rp: "R/P >50 years on the conventional giants. Saudi 267, Iran 208, Iraq 140, UAE 120, Kuwait 101.5."
	},
	{
		slug: "south-america",
		name: "South America",
		cycle: "short",
		direction: "Resource vs capital. The stock is Venezuela. The cash is Brazil and Guyana.",
		going: "Pre-salt FPSOs, Stabroek phases, production-sharing. Listed door: PBR, XOM, CVX.",
		notGoing: "Orinoco extra-heavy until upgraders, diluent and politics work. 303 bn bbl is a geological event, not a 2026 FID.",
		rp: "Venezuela R/P is a joke against 0.8–1.2 mb/d actual. Guyana is a volume story."
	},
	{
		slug: "eurasia",
		name: "Eurasia",
		cycle: "sustaining",
		direction: "Mature basins. The cheque keeps Russia from declining. Products are the 2026 tell.",
		going: "Sustaining capex, Tengiz expansion, CPC reliability. Shadow-fleet freight is a trade, not a capex cycle.",
		notGoing: "Greenfield megaprojects that miss a hurdle when Urals is discounted and plants are hit.",
		rp: "Russia ~58–80 bn OPEC, higher on BP/Eni. Decline is the risk, not geology."
	},
	{
		slug: "europe",
		name: "Europe",
		cycle: "sustaining",
		direction: "Highest observed decline on earth (9.7%). Tax and decommissioning.",
		going: "NCS sustaining, GPFG recycling, ARA tanks when the curve allows. Dated Brent rent.",
		notGoing: "UKCS growth. Harbour and Ithaca are fiscal options, not volume.",
		rp: "Tiny stock. The power is the marker, not the barrels."
	},
	{
		slug: "africa",
		name: "Africa",
		cycle: "long",
		direction: "Light-sweet with political beta. IOC deepwater over onshore fiscal risk.",
		going: "GoG PSC (Shell, TTE, Eni, XOM, CVX). Namibia / Uganda are 2027–30 options.",
		notGoing: "Onshore fiscal states without a security story. Libya is a switch, not a budget you scale.",
		rp: "Libya 48 bn with a 0.5–1.4 mb/d binary. Nigeria is production minus theft."
	},
	{
		slug: "asia-pacific",
		name: "Asia-Pacific",
		cycle: "downstream",
		direction: "The bid. Refining shifted East of Suez. Crude growth is not the story.",
		going: "Complex refining and chemicals, Chinese NOC lifting to floor the import bill.",
		notGoing: "A crude-growth FID cycle. China drills to not import more, not to export.",
		rp: "Mature PSC. Crude growth is not the story. Oceania's LNG is next door."
	},
	{
		slug: "oceania",
		name: "Oceania",
		cycle: "downstream",
		direction: "LNG first. Crude a rounding error. Antarctica is a treaty.",
		going: "Australian LNG (Woodside, Santos, Gorgon/Wheatstone). PNG LNG. Condensate as a side-stream.",
		notGoing: "A crude-growth FID. Antarctic barrels.",
		rp: "Tiny oil stock. Gas is the book. JKM, not WTI."
	}
];
var CV_REVIEW_URL = "https://linkedinconstructioncvprofile.com/";
var CV_REVIEW_NAME = "Construct CV";
var CV_REWRITE_URL = "https://www.temporaryworksconsulting.com/cv-covering-letter.html";
var CV_REWRITE_NAME = "CEng rewrite";
var CAREER_AS_OF = "18 Sep 2026";
var JOB_REGIONS = [
	{
		id: "gulf",
		name: "Gulf / Middle East",
		where: "United Arab Emirates",
		hiring: "Aramco, ADNOC, QatarEnergy and the EPC houses are still the cash. Tax-free packages, construction and commissioning more than exploration. Fiscal floors in the Kingdom sit $80–96 nameplate — they hire to keep the budget, not to dump barrels.",
		hubs: [
			{
				name: "Saudi Aramco",
				url: "https://www.aramco.com/en/careers"
			},
			{
				name: "ADNOC",
				url: "https://www.adnoc.ae/en/careers"
			},
			{
				name: "QatarEnergy",
				url: "https://www.qatarenergy.qa/en/careers"
			},
			{
				name: "NES Fircroft Gulf",
				url: "https://www.nesfircroft.com/jobs"
			}
		]
	},
	{
		id: "permian",
		name: "US onshore",
		where: "Houston, TX",
		hiring: "Short-cycle shale. Completions, facilities, production, HSE. Permian still pays a basin premium. Dallas Fed new-well ~$66 is the well; the payroll is the people who keep the pad moving.",
		hubs: [
			{
				name: "ExxonMobil",
				url: "https://jobs.exxonmobil.com/"
			},
			{
				name: "Chevron",
				url: "https://careers.chevron.com/"
			},
			{
				name: "ConocoPhillips",
				url: "https://www.conocophillips.com/careers/"
			},
			{
				name: "EOG",
				url: "https://www.eogresources.com/careers"
			}
		]
	},
	{
		id: "gom",
		name: "US Gulf of Mexico",
		where: "Houston, TX",
		hiring: "Deepwater, subsea, completions, brownfield. GoM engineers sit above the national petroleum median. Hook-up and commissioning language travels from any heavy civils book.",
		hubs: [
			{
				name: "SLB",
				url: "https://careers.slb.com/"
			},
			{
				name: "Halliburton",
				url: "https://jobs.halliburton.com/"
			},
			{
				name: "Baker Hughes",
				url: "https://careers.bakerhughes.com/"
			},
			{
				name: "TechnipFMC",
				url: "https://www.technipfmc.com/en/careers/"
			}
		]
	},
	{
		id: "northsea",
		name: "UK / Norway North Sea",
		where: "Aberdeen, United Kingdom",
		hiring: "Brownfield, decommissioning, drilling, integrity. Dated Brent is still set here. Contractors still price in day-rates. Norway pays more; the UKCS is a tax regime with remaining barrels.",
		hubs: [
			{
				name: "Equinor",
				url: "https://www.equinor.com/careers"
			},
			{
				name: "Harbour Energy",
				url: "https://www.harbourenergy.com/careers/"
			},
			{
				name: "Wood",
				url: "https://www.woodplc.com/careers"
			},
			{
				name: "Aker Solutions",
				url: "https://www.akersolutions.com/careers/"
			}
		]
	},
	{
		id: "guyana",
		name: "Guyana / Suriname",
		where: "Georgetown, Guyana",
		hiring: "FPSO phases, SURF, construction, commissioning. Exxon, Hess (now CVX), CNOOC. Capital can read — it came here. Civils and temporary works people who can talk SIMOPS get through the door.",
		hubs: [
			{
				name: "ExxonMobil",
				url: "https://jobs.exxonmobil.com/"
			},
			{
				name: "Chevron",
				url: "https://careers.chevron.com/"
			},
			{
				name: "SBM Offshore",
				url: "https://www.sbmoffshore.com/careers"
			},
			{
				name: "McDermott",
				url: "https://careers.mcdermott.com/"
			}
		]
	},
	{
		id: "brazil",
		name: "Brazil pre-salt",
		where: "Rio de Janeiro, Brazil",
		hiring: "FPSOs, SURF, local content. Petrobras plus the IOCs. Construction and commissioning, not a Permian pad.",
		hubs: [
			{
				name: "Petrobras",
				url: "https://www.petrobras.com.br/en/careers"
			},
			{
				name: "Equinor",
				url: "https://www.equinor.com/careers"
			},
			{
				name: "TotalEnergies",
				url: "https://totalenergies.com/careers"
			},
			{
				name: "TechnipFMC",
				url: "https://www.technipfmc.com/en/careers/"
			}
		]
	},
	{
		id: "westafrica",
		name: "West Africa",
		where: "Lagos, Nigeria",
		hiring: "GoG PSC construction, FPSO, hook-up. Shell, TTE, Eni, XOM, CVX. Not onshore fiscal risk if you are on the water. Security and rotation are the offer.",
		hubs: [
			{
				name: "Shell",
				url: "https://www.shell.com/careers.html"
			},
			{
				name: "TotalEnergies",
				url: "https://totalenergies.com/careers"
			},
			{
				name: "Eni",
				url: "https://www.eni.com/en-IT/careers.html"
			},
			{
				name: "Saipem",
				url: "https://www.saipem.com/en/careers"
			}
		]
	},
	{
		id: "oceania",
		name: "Australia / PNG LNG",
		where: "Perth, Australia",
		hiring: "LNG, not crude. Woodside, Santos, Chevron slice of Gorgon. Shutdown, brownfield, electrical, mechanical. FIFO is the lifestyle; the package is the point.",
		hubs: [
			{
				name: "Woodside",
				url: "https://www.woodside.com/careers"
			},
			{
				name: "Santos",
				url: "https://www.santos.com/careers/"
			},
			{
				name: "Chevron Australia",
				url: "https://careers.chevron.com/"
			},
			{
				name: "Worley",
				url: "https://www.worley.com/careers"
			}
		]
	},
	{
		id: "trading",
		name: "Trading hubs",
		where: "Houston, TX",
		hiring: "Houston, London, Singapore, Geneva. Physical before paper. If you cannot name a grade, a choke and a crack, you are not a trader yet.",
		hubs: [
			{
				name: "BP",
				url: "https://www.bp.com/en/global/corporate/careers.html"
			},
			{
				name: "Shell",
				url: "https://www.shell.com/careers.html"
			},
			{
				name: "Vitol",
				url: "https://www.vitol.com/careers/"
			},
			{
				name: "Trafigura",
				url: "https://www.trafigura.com/careers/"
			}
		]
	}
];
var PAY_BANDS = [
	{
		id: "us-pe-bls",
		role: "Petroleum engineer (US, all)",
		region: "United States",
		band: "$131,800 median · $208,000+ 90th",
		note: "BLS OEWS May 2025, SOC 17-2171. National. Basin premiums sit on top.",
		source: "BLS OEWS May 2025",
		sourceUrl: "https://www.bls.gov/oes/"
	},
	{
		id: "us-pe-rh",
		role: "Petroleum engineer, 5–10 yrs",
		region: "United States",
		band: "$118,000 – $195,000",
		note: "Robert Half Energy Salary Guide 2026, mid-to-senior.",
		source: "Robert Half Energy 2026",
		sourceUrl: "https://www.roberthalf.com/"
	},
	{
		id: "permian-pe",
		role: "Petroleum engineer, Permian",
		region: "US onshore",
		band: "$154,000 median base",
		note: "Rigzone 2025 survey, Permian vs $131,800 national. GoM offshore engineers averaged $148,000 in the same survey.",
		source: "Rigzone Annual Salary Survey 2025",
		sourceUrl: "https://www.rigzone.com/"
	},
	{
		id: "us-drilling",
		role: "Drilling engineer",
		region: "United States",
		band: "Entry $90–115k · mid $115–160k · senior $160–220k+",
		note: "OneSource 2026 Oil & Gas Salary Guide. Completions sit a step under drilling at the senior end.",
		source: "OneSource 2026",
		sourceUrl: "https://www.onesourcepros.com/onesource-2026-oil-gas-salary-guide-pay-by-role-region/"
	},
	{
		id: "uk-drilling",
		role: "Drilling engineer, UK North Sea",
		region: "UK / Norway North Sea",
		band: "£55–80k entry · £80–125k mid · £115–170k senior (total cash)",
		note: "Rigzone Sep 2025. Total cash = base + typical offshore/field allowances + typical bonus. Norway sector NOK 800k–2.2m.",
		source: "Rigzone Sep 2025",
		sourceUrl: "https://www.rigzone.com/insights/salary-1/how-much-do-north-sea-drilling-engineers-earn-per-year-15"
	},
	{
		id: "ns-pe-staff",
		role: "Petroleum engineer, North Sea staff",
		region: "UK / Norway North Sea",
		band: "Mid $95–145k · senior $135–200k base (USD)",
		note: "Rigzone Sep 2025, onshore staff supporting UKCS/NCS. Contractors: senior $900–1,200/day.",
		source: "Rigzone Sep 2025",
		sourceUrl: "https://www.rigzone.com/insights/salary-1/what-is-the-salary-range-for-a-petroleum-engineer-in-the-north-sea-5"
	},
	{
		id: "uae-pe",
		role: "Senior petroleum engineer, UAE",
		region: "Gulf / Middle East",
		band: "AED 25,000–42,000 / month",
		note: "ARAM Oil & Gas Consultants, Aug 2026 Gulf guide. Drilling engineer median AED 28,000, reported up to 45,000. Manager band AED 30,000–45,000+.",
		source: "ARAM Gulf salary guide Aug 2026",
		sourceUrl: "https://www.aramoilandgas.com/blog/oil-gas-salary-guide-2026-what-engineers-earn-across-uae-saudi-arabia-qatar-oman"
	},
	{
		id: "uae-mgr",
		role: "Engineering / construction manager, Gulf",
		region: "Gulf / Middle East",
		band: "AED 30,000–45,000+ / month",
		note: "ARAM 2026 indicative manager band. Construction management is named as a high-earning Gulf specialism. Packages are often tax-free; housing and transport sit on top.",
		source: "ARAM Gulf salary guide Aug 2026",
		sourceUrl: "https://www.aramoilandgas.com/blog/oil-gas-salary-guide-2026-what-engineers-earn-across-uae-saudi-arabia-qatar-oman"
	},
	{
		id: "subsea",
		role: "Subsea engineer",
		region: "US Gulf of Mexico",
		band: "$130,000 – $175,000 · 90th $200,000+",
		note: "ConstructionPlacements 2026 onshore vs offshore comparison. Drilling superintendent offshore $180–250k.",
		source: "ConstructionPlacements 2026",
		sourceUrl: "https://www.constructionplacements.com/oil-and-gas-engineer-salary-onshore-vs-offshore/"
	}
];
var TRANSFERS = [
	{
		id: "tw",
		from: "Temporary works / scaffold / falsework",
		blurb: "If you have signed a design check, you already do brownfield construction. The Gulf and the FPSO yards pay you to say SIMOPS instead of TWCTC.",
		targets: [
			"Brownfield construction manager",
			"Site construction superintendent",
			"Hook-up & commissioning",
			"Access / scaffold superintendent"
		],
		rewrite: [
			"temporary works → construction aids, falsework, access, load-out, heavy lift",
			"CAT I/II/III check → independent verification, design assurance, structural integrity",
			"BS 5975 → SIMOPS, permit to work, brownfield interface",
			"scaffold / TG20 → access, shutdown scaffold, rope-access interface"
		],
		why: "Shutdowns, hook-up and brownfield live on temporary works. Operators do not advertise 'TW coordinator'. They advertise construction manager, HUC, and access. Same physics. Their nouns."
	},
	{
		id: "civils",
		from: "Civil / structural / site engineering",
		blurb: "Piled mats, pipe racks, tank farms, LNG civils, module load-out. You have already built the kit. Write the basin and the code they use.",
		targets: [
			"Civil construction engineer",
			"Structural integrity",
			"LNG civils",
			"Module / load-out engineer"
		],
		rewrite: [
			"piling mat / BRE 470 → heavy-lift foundation, crane pad, SPMT route",
			"RC / steel frames → pipe rack, piperack, module support, blast-resistant design",
			"CDM principal designer → construction management, interface, brownfield",
			"Eurocodes → AISC / API / project spec — name the code they asked for"
		],
		why: "Guyana, pre-salt and LNG trains are civils projects with a hydrocarbon hat. The ticket is the project list, not a petroleum degree."
	},
	{
		id: "pm",
		from: "Construction / project management",
		blurb: "NEC, programmes, subcontract packages, cost. EPC houses hire this every cycle. Write SIMOPS, shutdown, hook-up, not 'site manager'.",
		targets: [
			"Construction manager",
			"Project controls",
			"EPC package manager",
			"Shutdown / turnaround manager"
		],
		rewrite: [
			"NEC / JCT → EPC, reimbursable, LSTK, variation / change",
			"programme / P6 → shutdown window, critical path, first oil / first gas",
			"principal contractor → construction management, SIMOPS, PTW integration",
			"package → discipline package, SURF, topsides, pipelines"
		],
		why: "ARAM's 2026 Gulf guide puts construction management in the high-earning specialisms. The market pays for people who have run a live site next to a live plant."
	},
	{
		id: "hv",
		from: "HV / electrical / substations",
		blurb: "11kV–400kV is facilities power. LNG, upstream and midstream all buy it. Write substations, MCCs, brownfield electrical, not 'DNO contestable'.",
		targets: [
			"Electrical construction",
			"Facilities power",
			"Brownfield electrical",
			"Commissioning electrical"
		],
		rewrite: [
			"DNO / IDNO → facilities electrical, plant power, island generation",
			"11kV–400kV → HV, substations, GIS, transformers, MCCs",
			"PTW / SAP → permit to work, LOTO, SIMOPS",
			"OHL / cable → interconnect, export cable, infield power"
		],
		why: "Every FPSO, LNG train and gathering station is an electrical project. The shortage is people who have commissioned HV next to live kit."
	},
	{
		id: "hse",
		from: "HSE / ISO 45001 / CDM / training",
		blurb: "CDM and ISO 45001 are not HAZOP. Translate. Process safety, SIMOPS, PTW, COMAH/SEVESO if you have it. CITB trainer maps to competence, not to a classroom.",
		targets: [
			"HSE advisor",
			"Process safety",
			"SIMOPS lead",
			"Competence / training lead"
		],
		rewrite: [
			"CDM → construction HSE, principal designer interface, brownfield",
			"ISO 45001 → HSEMS, audit, incident, leading indicators",
			"NEBOSH / IOSH → still list them; add process-safety language if you have it",
			"CITB trainer → competence assurance, IWCF-adjacent only if true"
		],
		why: "Operators hire HSE who have stood on a live site. A trainer who has signed RAMS for heavy lifts is closer to SIMOPS than a graduate with a NEBOSH diploma and no mud on the boots."
	},
	{
		id: "qs",
		from: "QS / commercial / project controls",
		blurb: "Variations, earned value, NEC compensation events. EPC reimbursable is the same sport. Write change, package, and first-oil — not 'final account'.",
		targets: [
			"Contracts engineer",
			"Quantity surveyor (O&G)",
			"Commercial manager",
			"Project controls"
		],
		rewrite: [
			"compensation event → change, variation, trend, EAC",
			"BoQ → MTO, quantities, discipline package",
			"final account → close-out, claims, recovery",
			"P6 / cost → controls, S-curve, shutdown window"
		],
		why: "The $570bn upstream cheque is mostly a decline tax. Controls people who can see a window slip are hired. Slogans are not."
	},
	{
		id: "mech",
		from: "Mechanical / piping / commissioning",
		blurb: "If you have turned a valve on a live plant, you are already in. Completions, pre-commissioning, punch-list, RFSU. That is the language.",
		targets: [
			"Mechanical completion",
			"Piping superintendent",
			"Commissioning engineer",
			"Rotating equipment"
		],
		rewrite: [
			"snagging → punch-list, MC, RFSU, first fill",
			"plant install → brownfield tie-in, hot work, SIMOPS",
			"commissioning → pre-commissioning, energisation, first hydrocarbons"
		],
		why: "Hook-up and commissioning is where civils people become oil people. The yard does not care what your last job title said."
	},
	{
		id: "wells",
		from: "Drilling / wells / completions",
		blurb: "You are already on the book. The cheque follows the basin: Permian premium, GoM deepwater, North Sea day-rate, Gulf tax-free.",
		targets: [
			"Drilling engineer",
			"Completions engineer",
			"Wells superintendent",
			"Company man"
		],
		rewrite: ["Keep the nouns. Add the basin and the hole size.", "Staff vs contractor is a pay decision, not a status one. North Sea senior contractor $900–1,200/day."],
		why: "OneSource 2026 still has drilling at the top of the US engineering stack. Completions rides with it. Do not undersell a well-control ticket."
	},
	{
		id: "trade",
		from: "Markets / trading / risk",
		blurb: "If you can read a crack, a choke and a fiscal floor, you are closer to a physical desk than a CFA with no barrels.",
		targets: [
			"Physical crude analyst",
			"Products / cracks",
			"Risk / middle office",
			"Business development (NOC)"
		],
		rewrite: [
			"price → grade, differential, freight, time-spread",
			"forecast → inventory, spare, decline, fiscal floor",
			"alpha → named stream, named choke, named print"
		],
		why: "This desk does not hire. The trading houses do. They hire people who can name Hormuz throughput and a 3-2-1 without looking it up."
	}
];
var EARN_ROWS = [
	{
		from: "Temporary works / scaffold",
		to: "Brownfield construction manager",
		cheque: "AED 30–45k+ / month",
		note: "Gulf, often tax-free. Same physics, their nouns.",
		transferId: "tw",
		basin: "gulf"
	},
	{
		from: "Civil / structural",
		to: "Hook-up & commissioning",
		cheque: "$130–175k SURF / HUC",
		note: "Guyana, pre-salt, GoM. Your civils book is the ticket.",
		transferId: "civils",
		basin: "guyana"
	},
	{
		from: "Construction / PM",
		to: "Shutdown / turnaround manager",
		cheque: "AED 30–45k+ / month",
		note: "ARAM names construction management as a Gulf high-earner.",
		transferId: "pm",
		basin: "gulf"
	},
	{
		from: "HV / electrical",
		to: "Facilities power",
		cheque: "Gulf + LNG packages",
		note: "11kV–400kV is plant power. FPSO and LNG both buy it.",
		transferId: "hv",
		basin: "oceania"
	},
	{
		from: "HSE / CDM / ISO 45001",
		to: "HSE advisor / SIMOPS",
		cheque: "Staff + rotation",
		note: "CDM is not HAZOP. Translate. Live-site mud still counts.",
		transferId: "hse",
		basin: "northsea"
	},
	{
		from: "Drilling / wells",
		to: "Drilling engineer",
		cheque: "US senior $160–220k · NS $900–1,200/day",
		note: "You are already on the book. Basin decides the cheque.",
		transferId: "wells",
		basin: "permian"
	}
];
var ROLE_BOOK = [
	{
		id: "cm-gulf",
		title: "Brownfield construction manager",
		discipline: "Construction",
		regions: [
			"gulf",
			"northsea",
			"oceania",
			"guyana"
		],
		query: "brownfield construction manager SIMOPS",
		payId: "uae-mgr",
		why: "The job TW people actually get. Live plant, live construction, permit to work.",
		transferFrom: [
			"tw",
			"pm",
			"civils"
		]
	},
	{
		id: "huc",
		title: "Hook-up and commissioning",
		discipline: "Commissioning",
		regions: [
			"guyana",
			"brazil",
			"westafrica",
			"gom",
			"gulf"
		],
		query: "hook-up commissioning HUC FPSO",
		why: "FPSO phases in Guyana, pre-salt and West Africa. Civils and mechanical people who have punched out a plant.",
		transferFrom: [
			"mech",
			"civils",
			"tw",
			"hv"
		]
	},
	{
		id: "civil-lng",
		title: "LNG / tank / civils engineer",
		discipline: "Civils",
		regions: [
			"oceania",
			"gulf",
			"westafrica"
		],
		query: "LNG civil engineer tank farm piperack",
		why: "Oceania is LNG, not crude. Tanks, racks, pads, load-out. Your civils book is the ticket.",
		transferFrom: ["civils", "tw"]
	},
	{
		id: "elec",
		title: "Electrical construction / facilities power",
		discipline: "Electrical",
		regions: [
			"gulf",
			"oceania",
			"permian",
			"guyana"
		],
		query: "electrical construction HV substation oil gas",
		why: "HV people who have commissioned next to live kit. LNG and upstream both buy this.",
		transferFrom: ["hv"]
	},
	{
		id: "hse-adv",
		title: "HSE advisor / SIMOPS",
		discipline: "HSE",
		regions: [
			"gulf",
			"northsea",
			"permian",
			"gom"
		],
		query: "HSE advisor SIMOPS brownfield oil gas",
		why: "CDM and ISO 45001 get you in the room. Process safety language gets you the offer.",
		transferFrom: [
			"hse",
			"tw",
			"pm"
		]
	},
	{
		id: "controls",
		title: "Project controls / contracts",
		discipline: "Commercial",
		regions: [
			"gulf",
			"guyana",
			"northsea",
			"oceania"
		],
		query: "project controls contracts engineer oil and gas",
		why: "EPC reimbursable and shutdown windows. QS people who can see a slip.",
		transferFrom: ["qs", "pm"]
	},
	{
		id: "drill",
		title: "Drilling engineer",
		discipline: "Wells",
		regions: [
			"permian",
			"gom",
			"northsea",
			"gulf"
		],
		query: "drilling engineer",
		payId: "us-drilling",
		why: "Top of the US engineering stack in OneSource 2026. Basin and rotation decide the cheque.",
		transferFrom: ["wells"]
	},
	{
		id: "comp",
		title: "Completions engineer",
		discipline: "Wells",
		regions: [
			"permian",
			"gom",
			"gulf"
		],
		query: "completions engineer",
		payId: "us-pe-rh",
		why: "Rides with drilling. Permian and GoM still bid for it.",
		transferFrom: ["wells"]
	},
	{
		id: "pe",
		title: "Petroleum / production engineer",
		discipline: "Subsurface",
		regions: [
			"permian",
			"gom",
			"gulf",
			"northsea"
		],
		query: "petroleum engineer production",
		payId: "us-pe-bls",
		why: "BLS median $131,800. Permian median base $154,000. UAE senior AED 25–42k/month.",
		transferFrom: ["wells"]
	},
	{
		id: "subsea",
		title: "Subsea / SURF",
		discipline: "Subsea",
		regions: [
			"gom",
			"guyana",
			"brazil",
			"westafrica",
			"northsea"
		],
		query: "subsea engineer SURF",
		payId: "subsea",
		why: "Atlantic deepwater is where the long-cycle cheque still clears. $130–175k, 90th $200k+.",
		transferFrom: ["mech", "civils"]
	},
	{
		id: "turnaround",
		title: "Shutdown / turnaround manager",
		discipline: "Construction",
		regions: [
			"gulf",
			"northsea",
			"oceania",
			"permian"
		],
		query: "shutdown turnaround manager refinery LNG",
		payId: "uae-mgr",
		why: "The product tightness on this desk is a turnaround story. Plants that run, hire people who can stop them safely.",
		transferFrom: [
			"pm",
			"tw",
			"hse"
		]
	},
	{
		id: "scaffold",
		title: "Access / scaffold superintendent",
		discipline: "Access",
		regions: [
			"gulf",
			"northsea",
			"oceania"
		],
		query: "scaffolding superintendent offshore shutdown access",
		why: "Do not write 'scaffolder' into a Gulf advert. Write access, shutdown, SIMOPS. Same trade, their nouns.",
		transferFrom: ["tw"]
	},
	{
		id: "trader",
		title: "Physical crude / products analyst",
		discipline: "Trading",
		regions: ["trading"],
		query: "crude oil analyst physical trading",
		why: "Houston, London, Singapore. Name the grade and the choke or do not apply.",
		transferFrom: ["trade"]
	}
];
var JOB_BOARDS = [
	{
		id: "rigzone",
		name: "Rigzone",
		blurb: "The oil-industry board. Start here.",
		search: (q, _where) => `https://www.rigzone.com/oil/jobs/search/?keyword=${encodeURIComponent(q)}`
	},
	{
		id: "ogjs",
		name: "Oil and Gas Job Search",
		blurb: "Global. Strong on Gulf and contractor.",
		search: (q, _where) => `https://www.oilandgasjobsearch.com/jobs?q=${encodeURIComponent(q)}`
	},
	{
		id: "ejl",
		name: "Energy Jobline",
		blurb: "Energy-wide. Useful for LNG and power-adjacent.",
		search: (q, _where) => `https://www.energyjobline.com/jobs?keywords=${encodeURIComponent(q)}`
	},
	{
		id: "nes",
		name: "NES Fircroft",
		blurb: "The contractor house. Gulf and North Sea.",
		search: (q, _where) => `https://www.nesfircroft.com/jobs?Keywords=${encodeURIComponent(q)}`
	},
	{
		id: "linkedin",
		name: "LinkedIn",
		blurb: "Where the recruiters actually search. Keywords matter.",
		search: (q, where = "Houston, TX") => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(q)}&location=${encodeURIComponent(where)}`
	},
	{
		id: "indeed",
		name: "Indeed",
		blurb: "Volume. Filter hard.",
		search: (q, where = "Houston, TX") => `https://www.indeed.com/jobs?q=${encodeURIComponent(q)}&l=${encodeURIComponent(where)}`
	}
];
function payFor(id) {
	return PAY_BANDS.find((p) => p.id === id);
}
function searchRoles(q, regionId, transferId) {
	const needle = q.trim().toLowerCase();
	return ROLE_BOOK.filter((r) => {
		if (regionId !== "all" && !r.regions.includes(regionId)) return false;
		if (transferId !== "all" && !r.transferFrom.includes(transferId)) return false;
		if (!needle) return true;
		const hay = `${r.title} ${r.discipline} ${r.query} ${r.why}`.toLowerCase();
		return hay.includes(needle) || needle.split(/\s+/).every((w) => w.length < 2 || hay.includes(w));
	});
}
var CHOKEPOINTS = [
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
		url: "https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz"
	},
	{
		name: "Bab el-Mandeb",
		slug: "bab",
		region: "Africa / Middle East",
		typicalMbd: 6,
		unit: "mb/d oil, peacetime",
		share: "Red Sea door. Europe and the Med feel it first.",
		now: "Second choke of 2026. Houthi and Red Sea risk kept Cape tonne-miles bid. Yanbu loadings are the Saudi workaround, not a substitute for Suez.",
		bypass: "Cape of Good Hope. Pays tanker owners. Punishes diesel on delay.",
		who: "Saudi Red Sea, Egypt, European product imports.",
		source: "IEA OMR Sep 2026 · industry AIS compilations",
		url: "https://www.iea.org/reports/oil-market-report-september-2026"
	},
	{
		name: "Suez / SUMED",
		slug: "suez",
		region: "Africa / Europe",
		typicalMbd: 5,
		unit: "mb/d oil, peacetime",
		share: "The Europe–Asia pipe-and-canal pair.",
		now: "Contested with Bab. SUMED is the crude bypass of the canal itself. Products still like the water.",
		bypass: "Cape, or SUMED if the pipe is the constraint and not the Red Sea.",
		who: "Egypt transit rent. European refiners. Asian offtake the other way.",
		source: "IEA oil security · EIA chokepoints",
		url: "https://www.eia.gov/todayinenergy/"
	},
	{
		name: "Strait of Malacca",
		slug: "malacca",
		region: "Asia-Pacific",
		typicalMbd: 16,
		unit: "mb/d oil inbound, peacetime",
		share: "The quiet choke. Hormuz is the loud one — for inbound Asian barrels.",
		now: "Still the door into Singapore, China and Japan. Lombok is the alternative, not a replacement.",
		bypass: "Lombok / Sunda. Longer. Dearer.",
		who: "China, India, Japan, Korea, Singapore refining.",
		source: "EIA World Oil Transit Chokepoints",
		url: "https://www.eia.gov/international/analysis/"
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
		url: "https://www.iea.org/reports/oil-market-report-september-2026"
	},
	{
		name: "Turkish Straits",
		slug: "bosphorus",
		region: "Eurasia / Europe",
		typicalMbd: 3,
		unit: "mb/d oil, peacetime",
		share: "CPC Blend, Azeri, some Russian Black Sea.",
		now: "A single-point political and navigational risk for Kazakhstan. CPC is the tell, not Istanbul traffic TV.",
		bypass: "None that is cheap. BTC is a different pipe.",
		who: "NCOC, Tengizchevroil, SOCAR, BP ACG, Mediterranean refiners.",
		source: "CPC / industry loadings",
		url: "https://www.iea.org/"
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
		url: "https://www.iea.org/reports/oil-market-report-september-2026"
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
		url: "https://www.eia.gov/petroleum/supply/weekly/"
	}
];
var GRADES = [
	{
		name: "Arab Light",
		region: "Middle East",
		country: "Saudi Arabia",
		api: 32.8,
		sulphurPct: 1.9,
		marker: "Oman/Dubai OSP",
		home: "East of Suez",
		note: "The Kingdom's flag. Spare lives or dies on this grade loading."
	},
	{
		name: "Murban",
		region: "Middle East",
		country: "UAE",
		api: 40,
		sulphurPct: .8,
		marker: "ICE Murban",
		home: "Asia + listed hybrid",
		note: "The listed UAE barrel. ADNOC's answer to Dated."
	},
	{
		name: "Basrah Medium",
		region: "Middle East",
		country: "Iraq",
		api: 30,
		sulphurPct: 2.6,
		marker: "SOMO OSP vs Oman/Dubai",
		home: "Asia + USGC cokers",
		note: "Budget oil. Loadings are the Iraqi state."
	},
	{
		name: "Kuwait Export",
		region: "Middle East",
		country: "Kuwait",
		api: 31,
		sulphurPct: 2.5,
		marker: "KPC OSP",
		home: "Asia",
		note: "Sour, steady, Future Generations Fund."
	},
	{
		name: "Iran Heavy",
		region: "Middle East",
		country: "Iran",
		api: 29,
		sulphurPct: 2.3,
		marker: "Sanctioned / unofficial",
		home: "Asia (constrained)",
		note: "A political barrel. Treat the assay as geology, the volume as policy."
	},
	{
		name: "Qatar Marine",
		region: "Middle East",
		country: "Qatar",
		api: 36,
		sulphurPct: 1.5,
		marker: "QatarEnergy",
		home: "Asia",
		note: "Condensate and LNG are the real cheque. Crude is the cousin."
	},
	{
		name: "Oman",
		region: "Middle East",
		country: "Oman",
		api: 33.3,
		sulphurPct: 1.1,
		marker: "Oman sour (DME)",
		home: "China term",
		note: "The sour benchmark East of Suez, with Dubai."
	},
	{
		name: "WTI Midland",
		region: "North America",
		country: "United States",
		api: 42,
		sulphurPct: .2,
		marker: "CME WTI",
		home: "USGC export",
		note: "The shale barrel that became an export grade."
	},
	{
		name: "WTI Cushing",
		region: "North America",
		country: "United States",
		api: 40,
		sulphurPct: .3,
		marker: "CL",
		home: "Midcon logistics",
		note: "The contract, not the geology."
	},
	{
		name: "WCS",
		region: "North America",
		country: "Canada",
		api: 20.5,
		sulphurPct: 3.5,
		marker: "WCS vs WTI",
		home: "USGC cokers + TMX",
		note: "Pipe capacity is the trade. TMX turned a stranded barrel into a traded one."
	},
	{
		name: "Maya",
		region: "North America",
		country: "Mexico",
		api: 22,
		sulphurPct: 3.3,
		marker: "Maya vs WTI/Brent",
		home: "USGC",
		note: "Pemex fiscal heavy. The USGC still wants it."
	},
	{
		name: "MARS",
		region: "North America",
		country: "United States",
		api: 29,
		sulphurPct: 2,
		marker: "MARS vs WTI",
		home: "USGC",
		note: "GoM sour. Selective deepwater, not shale."
	},
	{
		name: "Merey",
		region: "South America",
		country: "Venezuela",
		api: 16,
		sulphurPct: 2.5,
		marker: "Merey vs Maya",
		home: "USGC / Asia (sanctions-bound)",
		note: "Orinoco extra-heavy. Diluent and upgraders, or it does not move."
	},
	{
		name: "Liza",
		region: "South America",
		country: "Guyana",
		api: 32,
		sulphurPct: .5,
		marker: "Dated-linked",
		home: "Europe + Asia",
		note: "The growth grade of the Atlantic Basin. PSC profit oil."
	},
	{
		name: "Tupi / Búzios",
		region: "South America",
		country: "Brazil",
		api: 29,
		sulphurPct: .7,
		marker: "Dated / Ice Brent",
		home: "China + Europe + USGC",
		note: "Pre-salt cash. High-margin, not a heavy-sour dump."
	},
	{
		name: "Bonny Light",
		region: "Africa",
		country: "Nigeria",
		api: 35,
		sulphurPct: .14,
		marker: "Dated Brent",
		home: "Europe + Asia",
		note: "Light-sweet Atlantic. Production minus theft is the real number."
	},
	{
		name: "Saharan Blend",
		region: "Africa",
		country: "Algeria",
		api: 45,
		sulphurPct: .1,
		marker: "Dated Brent",
		home: "Med / Europe",
		note: "Ultra-light. Gas is still Sonatrach's bigger book."
	},
	{
		name: "Es Sider",
		region: "Africa",
		country: "Libya",
		api: 37,
		sulphurPct: .4,
		marker: "Dated Brent",
		home: "Europe",
		note: "The swing grade. Ports on, ports off."
	},
	{
		name: "Cabinda",
		region: "Africa",
		country: "Angola",
		api: 32,
		sulphurPct: .13,
		marker: "Dated Brent",
		home: "China + Europe",
		note: "FPSO decline plus tiebacks."
	},
	{
		name: "Brent / BFOE",
		region: "Europe",
		country: "UK / Norway",
		api: 37.5,
		sulphurPct: .4,
		marker: "Dated Brent / ICE",
		home: "The world marker",
		note: "Prices ~80% of globally traded crude. Volume is not the point. The marker is."
	},
	{
		name: "Johan Sverdrup",
		region: "Europe",
		country: "Norway",
		api: 28,
		sulphurPct: .7,
		marker: "Dated-linked",
		home: "NWE",
		note: "The last OECD West petrostate's flagship."
	},
	{
		name: "Urals",
		region: "Eurasia",
		country: "Russia",
		api: 31,
		sulphurPct: 1.4,
		marker: "Dated minus discount",
		home: "India + China + Med",
		note: "The barrel finds a home. The discount is the trade."
	},
	{
		name: "ESPO",
		region: "Eurasia",
		country: "Russia",
		api: 35,
		sulphurPct: .5,
		marker: "Oman/Dubai",
		home: "Pacific",
		note: "The Pacific Russian barrel."
	},
	{
		name: "CPC Blend",
		region: "Eurasia",
		country: "Kazakhstan",
		api: 47,
		sulphurPct: .5,
		marker: "Dated-linked",
		home: "Med",
		note: "Light, sweet, one-pipe risk."
	},
	{
		name: "Azeri BTC",
		region: "Eurasia",
		country: "Azerbaijan",
		api: 36.5,
		sulphurPct: .15,
		marker: "Dated-linked",
		home: "Med / Asia",
		note: "BTC is the pipe. Shah Deniz is the gas."
	},
	{
		name: "Tapis",
		region: "Asia-Pacific",
		country: "Malaysia",
		api: 46,
		sulphurPct: .03,
		marker: "Tapis / Dated",
		home: "Asia",
		note: "Light-sweet regional marker. Petronas."
	},
	{
		name: "Minas",
		region: "Asia-Pacific",
		country: "Indonesia",
		api: 35,
		sulphurPct: .1,
		marker: "ICP",
		home: "Asia",
		note: "Mature PSC. Duri is the heavy twin."
	},
	{
		name: "Daqing",
		region: "Asia-Pacific",
		country: "China",
		api: 33,
		sulphurPct: .1,
		marker: "Domestic",
		home: "China",
		note: "Does not change the import bid. It floors it."
	},
	{
		name: "Cossack / NW Shelf",
		region: "Oceania",
		country: "Australia",
		api: 47,
		sulphurPct: .04,
		marker: "Dated / Tapis",
		home: "Asia",
		note: "Condensate side-stream on an LNG contract. Do not pair-trade it with WTI."
	}
];
var GRADE_NOTE = "Typical published assays, rounded. Nomination quality varies by cargo. Differentials move; the API and sulphur do not, unless the blend does. Sour USGC cokers want Maya, Merey, Castilla, Basrah. Complex Asian plants want Murban and ESPO. Light-sweet Atlantic still substitutes for lost Russian product yield.";
function gradesByRegion(region) {
	return GRADES.filter((g) => g.region === region);
}
/** Last official print from each canonical book. Dated. Sourced. */
var DESK_AS_OF = "18 Sep 2026";
var PRINTS = [
	{
		id: "tape",
		source: "CME / ICE delayed",
		last: "18 Sep 2026",
		asOf: "Friday Asia / early NY",
		headline: "WTI $95. The $100 handle gave way.",
		body: "Delayed Friday marks: WTI ~$95.3 (−6.5%), Brent ~$98.3. Thursday settle $101.91 / $104.82. HO sold with crude. The Sep 10 gap filled. Not for execution.",
		next: "Continuous (delayed)",
		url: "https://www.cmegroup.com/",
		cadence: "intraday"
	},
	{
		id: "eia-wpsr",
		source: "EIA WPSR",
		last: "16 Sep 2026",
		asOf: "Week ending 11 Sep",
		headline: "Commercial crude 423.4 mb (−0.6).",
		body: "Ex-SPR crude 423.4 mb, −0.6 wow, +1.9% yoy, 1% above the five-year. SPR 285.0 (−0.4 wow, −29.8% yoy). Total petroleum 1.536 bn (+2.2 mb wow, −151.9 yoy).",
		next: "Wed 23 Sep 10:30 ET",
		url: "https://www.eia.gov/petroleum/supply/weekly/",
		cadence: "weekly"
	},
	{
		id: "baker-hughes",
		source: "Baker Hughes",
		last: "11 Sep 2026",
		asOf: "Week of 11 Sep",
		headline: "US total 591. Oil 450.",
		body: "Total rotary 591 (+3 wow). Oil 450 (+1). Gas 132 (+2). Misc 9. YoY total was 539. Activity with a lag — not a same-week shale forecast.",
		next: "Fri 18 Sep 13:00 ET",
		url: "https://rigcount.bakerhughes.com/",
		cadence: "weekly"
	},
	{
		id: "iea-omr",
		source: "IEA OMR",
		last: "Sep 2026",
		asOf: "September report",
		headline: "World supply 100.7 mb/d. Spare 0.22.",
		body: "Supply −5.7 y/y and −1.3 vs the August book. Gulf recovery deferred to 2027. Effective OPEC+ spare vs August 0.22 mb/d. Nameplate gap is not spare if it cannot load.",
		next: "October OMR (public extracts)",
		url: "https://www.iea.org/reports/oil-market-report-september-2026",
		cadence: "monthly"
	},
	{
		id: "eia-steo",
		source: "EIA STEO",
		last: "9 Sep 2026",
		asOf: "Forecast completed 3 Sep",
		headline: "2026 Brent path $91. Spot is the war print.",
		body: "Liquids 2026: 100.6 prod vs 102.6 cons. 2027: 109.9 / 105.0 and Brent $74 if the Gulf normalises. This desk does not take the $74 path while Hormuz is contested.",
		next: "Oct, second Tuesday",
		url: "https://www.eia.gov/outlooks/steo/",
		cadence: "monthly"
	},
	{
		id: "dallas-fed",
		source: "Dallas Fed",
		last: "Q1 2026",
		asOf: "March survey",
		headline: "New-well $66. Operating $43.",
		body: "All-respondent new-well $66. Delaware $63. Permian $67. Midland $69. Existing-well operating $43 (large firms ~$32). The number that turns the rig count.",
		next: "Quarterly breakeven special",
		url: "https://www.dallasfed.org/research/surveys/des",
		cadence: "quarterly"
	},
	{
		id: "opec-asb",
		source: "OPEC ASB 2026",
		last: "ASB 2026",
		asOf: "End-2025 reserves",
		headline: "1,572 bn bbl official crude.",
		body: "Venezuela 303.7, Saudi 267.2, Iran 208.6. Canada excludes oil sands on purpose. That is a definition, not a rounding error.",
		next: "ASB 2027",
		url: "https://www.opec.org/",
		cadence: "annual"
	},
	{
		id: "cftc-cot",
		source: "CFTC COT",
		last: "12 Sep 2026 file",
		asOf: "As-of Tuesday, published Friday",
		headline: "Crowd-risk, not a signal.",
		body: "Managed-money length in CL after a gap-up week. Today's 15:30 ET print is the next crowd snapshot. I fade positioning as gospel.",
		next: "Fri 18 Sep 15:30 ET",
		url: "https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",
		cadence: "weekly"
	}
];
var TODAY_PRINTS = PRINTS.slice(0, 4);
var DESK_SOURCES = [
	{
		id: "eia-wpsr",
		name: "EIA Weekly Petroleum Status Report",
		short: "EIA WPSR",
		owner: "U.S. Energy Information Administration",
		cadence: "weekly",
		nextWindow: "Wednesday 10:30 ET",
		why: "The single most-watched inventory print on the planet. Cushing, products, imports, refinery runs.",
		url: "https://www.eia.gov/petroleum/supply/weekly/",
		usedFor: [
			"inventories",
			"WTI structure",
			"runs"
		],
		license: "public"
	},
	{
		id: "eia-steo",
		name: "EIA Short-Term Energy Outlook",
		short: "EIA STEO",
		owner: "U.S. Energy Information Administration",
		cadence: "monthly",
		nextWindow: "Second Tuesday of the month",
		why: "Official U.S. 12–18 month balance, OPEC revenues, and price paths.",
		url: "https://www.eia.gov/outlooks/steo/",
		usedFor: [
			"balance",
			"OPEC export revenue",
			"forecasts",
			"shut-ins"
		],
		license: "public"
	},
	{
		id: "eia-intl",
		name: "EIA International Energy Statistics",
		short: "EIA Intl",
		owner: "U.S. Energy Information Administration",
		cadence: "monthly",
		nextWindow: "Monthly production tables",
		why: "Country production (crude + condensate). The production table on this desk is EIA January 2026.",
		url: "https://www.eia.gov/international/data/world",
		usedFor: ["production", "continent flows"],
		license: "public"
	},
	{
		id: "opec-asb",
		name: "OPEC Annual Statistical Bulletin 2026",
		short: "OPEC ASB",
		owner: "OPEC Secretariat",
		cadence: "annual",
		nextWindow: "ASB 2026 (end-2025 reserves)",
		why: "Official proved crude reserves by country. Venezuela, Saudi, Iran sit here. Canada excludes oil sands.",
		url: "https://www.opec.org/opec_web/en/publications/202.htm",
		usedFor: ["reserves", "OPEC share"],
		license: "public"
	},
	{
		id: "opec-momr",
		name: "OPEC Monthly Oil Market Report",
		short: "OPEC MOMR",
		owner: "OPEC Secretariat",
		cadence: "monthly",
		nextWindow: "Around the 13th of each month",
		why: "OPEC's demand, supply and tanker view. Always read against IEA, never instead of it.",
		url: "https://www.opec.org/opec_web/en/publications/338.htm",
		usedFor: [
			"demand",
			"OPEC+ compliance",
			"tankers"
		],
		license: "public"
	},
	{
		id: "iea-omr",
		name: "IEA Oil Market Report",
		short: "IEA OMR",
		owner: "International Energy Agency",
		cadence: "monthly",
		nextWindow: "Mid-month (public extracts)",
		why: "OECD demand and stocks. Public pages only — I do not paste the paid PDF. Sep 2026: world supply 100.7 mb/d, effective OPEC+ spare 0.22, Gulf still >10 mb/d shut in.",
		url: "https://www.iea.org/topics/oil-market-report",
		usedFor: [
			"OECD stocks",
			"demand",
			"spare capacity",
			"Hormuz seaborne share",
			"Americas Quintet"
		],
		license: "public-summary"
	},
	{
		id: "ei-stat",
		name: "Energy Institute Statistical Review of World Energy",
		short: "EI Review",
		owner: "Energy Institute (ex-BP Review)",
		cadence: "annual",
		nextWindow: "June edition",
		why: "The long series. Oil sands in Canada, R/P ratios, regional consumption.",
		url: "https://www.energyinst.org/statistical-review",
		usedFor: [
			"oil sands",
			"long history",
			"R/P"
		],
		license: "public"
	},
	{
		id: "baker-hughes",
		name: "Baker Hughes Rig Count",
		short: "BH Rigs",
		owner: "Baker Hughes",
		cadence: "weekly",
		nextWindow: "Friday 13:00 ET",
		why: "US and international rotary rigs. A lagging but clean activity pulse.",
		url: "https://rigcount.bakerhughes.com/",
		usedFor: ["US shale activity", "international drilling"],
		license: "public"
	},
	{
		id: "cftc-cot",
		name: "CFTC Commitments of Traders",
		short: "CFTC COT",
		owner: "U.S. CFTC",
		cadence: "weekly",
		nextWindow: "Friday 15:30 ET (as-of Tuesday)",
		why: "Managed-money length in WTI. Crowd-risk, not a trading signal.",
		url: "https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",
		usedFor: ["positioning", "crowding"],
		license: "public"
	},
	{
		id: "cme",
		name: "CME WTI / NYMEX complex",
		short: "CME",
		owner: "CME Group",
		cadence: "intraday",
		nextWindow: "Sun 18:00–Fri 17:00 ET (1h break)",
		why: "CL, MCL, HO, RB. Contract specs, expiries, volume. Quotes on this desk are delayed.",
		url: "https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.html",
		usedFor: [
			"WTI",
			"products",
			"curve"
		],
		license: "delayed-quote"
	},
	{
		id: "ice",
		name: "ICE Brent complex",
		short: "ICE",
		owner: "Intercontinental Exchange",
		cadence: "intraday",
		nextWindow: "Near-24h Sun–Fri",
		why: "Brent, Dated-linked, gasoil, Dubai. Prices ~80% of globally traded crude.",
		url: "https://www.ice.com/oil",
		usedFor: [
			"Brent",
			"gasoil",
			"Dated"
		],
		license: "delayed-quote"
	},
	{
		id: "dallas-fed",
		name: "Dallas Fed Energy Survey",
		short: "Dallas Fed",
		owner: "Federal Reserve Bank of Dallas",
		cadence: "monthly",
		nextWindow: "Quarterly breakeven special; monthly activity",
		why: "The cleanest US shale breakeven print. Q1 2026: new-well $66, operating $43, Delaware $63, Permian $67.",
		url: "https://www.dallasfed.org/research/surveys/des",
		usedFor: ["shale breakevens", "US activity"],
		license: "public"
	},
	{
		id: "iea-decline",
		name: "IEA field decline rates",
		short: "IEA Decline",
		owner: "International Energy Agency",
		cadence: "annual",
		nextWindow: "Special report (2025 book, live in 2026)",
		why: "~15,000 fields. Observed conventional 5.6%. Natural 8% if capex stops. Middle East 1.8%, Europe 9.7%.",
		url: "https://www.iea.org/reports/the-implications-of-oil-and-gas-field-decline-rates",
		usedFor: [
			"decline",
			"sustaining capex",
			"continent paths"
		],
		license: "public"
	},
	{
		id: "iea-hormuz",
		name: "IEA Strait of Hormuz",
		short: "IEA Hormuz",
		owner: "International Energy Agency",
		cadence: "event",
		nextWindow: "Updated with OMR",
		why: "19.87 mb/d oil in 2025, 25% of seaborne oil, 34% of seaborne crude, 80% to Asia. Bypass 3.5–5.5 mb/d. The 2026 market.",
		url: "https://www.iea.org/about/oil-security-and-emergency-response/strait-of-hormuz",
		usedFor: [
			"chokepoints",
			"seaborne crude",
			"LNG Qatar/UAE"
		],
		license: "public"
	},
	{
		id: "iea-wei",
		name: "IEA World Energy Investment",
		short: "IEA WEI",
		owner: "International Energy Agency",
		cadence: "annual",
		nextWindow: "Spring edition",
		why: "Upstream oil and gas ~$570bn in 2025. Oil $420bn, gas $145bn. The capex book.",
		url: "https://www.iea.org/reports/world-energy-investment-2025",
		usedFor: ["capex", "capital allocation"],
		license: "public"
	},
	{
		id: "ogj",
		name: "Oil & Gas Journal reserves",
		short: "OGJ",
		owner: "Endeavor Business Media",
		cadence: "annual",
		nextWindow: "Year-start survey",
		why: "Independent reserves table. Puts Canada oil sands and a higher US proved number on the map.",
		url: "https://www.ogj.com/",
		usedFor: ["reserves cross-check"],
		license: "public-summary"
	},
	{
		id: "nsta",
		name: "NSTA / North Sea Transition Authority",
		short: "NSTA",
		owner: "UK NSTA",
		cadence: "event",
		nextWindow: "Production and licensing updates",
		why: "UKCS barrels, decommissioning and licensing. The North Sea is a fiscal story now.",
		url: "https://www.nstauthority.co.uk/",
		usedFor: ["UKCS", "North Sea"],
		license: "public"
	},
	{
		id: "filings",
		name: "SEC / RNS / company reports",
		short: "Filings",
		owner: "Issuers",
		cadence: "event",
		nextWindow: "Results season and RNS",
		why: "Capex, buybacks, hedge books, reserves reports. Primary source for the watchlist.",
		url: "https://www.sec.gov/edgar",
		usedFor: [
			"watchlist",
			"NOCs",
			"majors"
		],
		license: "public"
	},
	{
		id: "bls-oes",
		name: "BLS Occupational Employment and Wage Statistics",
		short: "BLS OEWS",
		owner: "U.S. Bureau of Labor Statistics",
		cadence: "annual",
		nextWindow: "OEWS release",
		why: "US petroleum engineer median and percentiles. The national pay book, not a basin premium.",
		url: "https://www.bls.gov/oes/",
		usedFor: ["jobs", "pay"],
		license: "public"
	},
	{
		id: "rigzone-pay",
		name: "Rigzone salary notes and annual survey",
		short: "Rigzone pay",
		owner: "Rigzone",
		cadence: "annual",
		nextWindow: "Survey / notes",
		why: "North Sea drilling and petroleum envelopes, Permian vs national median, GoM offshore.",
		url: "https://www.rigzone.com/",
		usedFor: [
			"jobs",
			"pay",
			"North Sea"
		],
		license: "public-summary"
	}
];
var SOURCE_RULE = "No number on this desk without a source, a timestamp and an honest data type. Delayed quotes are delayed. OPEC reserves are OPEC reserves. Canada oil sands are not smuggled into the OPEC table.";
var WATCHLIST = [
	{
		name: "Exxon Mobil",
		ticker: "XOM",
		venue: "NYSE",
		book: "Integrated",
		region: "North America",
		theme: "Permian + Guyana. The cleanest US major at a $100 deck.",
		catalyst: "Guyana FPSO ramp; buyback pace.",
		risk: "Service inflation; political windfall talk.",
		stream: "Shale FCF + PSC profit oil"
	},
	{
		name: "Chevron",
		ticker: "CVX",
		venue: "NYSE",
		book: "Integrated",
		region: "North America",
		theme: "Tengiz + Permian + Hess/Guyana combination.",
		catalyst: "Tengiz expansion; Guyana integration.",
		risk: "Execution on the Hess book; Kazakhstan pipe risk.",
		stream: "CPC Blend + Permian"
	},
	{
		name: "Shell",
		ticker: "SHEL",
		venue: "LSE/NYSE",
		book: "Integrated",
		region: "Europe",
		theme: "LNG + deepwater + trading house.",
		catalyst: "LNG utilisation; buybacks; UK tax.",
		risk: "European fiscal; LNG oversupply later-decade.",
		stream: "LNG + trading"
	},
	{
		name: "BP",
		ticker: "BP",
		venue: "LSE/NYSE",
		book: "Integrated",
		region: "Europe",
		theme: "Higher-beta major. Azerbaijan + oil-price torque.",
		catalyst: "ACG/Shah Deniz; capital-frame reset.",
		risk: "UKCS fiscal; strategy whiplash.",
		stream: "BTC + buybacks"
	},
	{
		name: "TotalEnergies",
		ticker: "TTE",
		venue: "EPA/NYSE",
		book: "Integrated",
		region: "Europe",
		theme: "Africa and LNG. Best listed OECD door into GoG and Middle East gas.",
		catalyst: "Mozambique/Papua LNG; Africa liquids.",
		risk: "Project delays; Sahel/GoG security.",
		stream: "PSC + LNG"
	},
	{
		name: "Equinor",
		ticker: "EQNR",
		venue: "OSE/NYSE",
		book: "NOC-listed",
		region: "Europe",
		theme: "Norway in one line. GPFG is the state's; EQNR is the operator.",
		catalyst: "NCS production; gas to Europe.",
		risk: "Tax; Johan Sverdrup decline profile.",
		stream: "NCS petroleum tax chain"
	},
	{
		name: "Petrobras",
		ticker: "PBR",
		venue: "NYSE/B3",
		book: "NOC-listed",
		region: "South America",
		theme: "Pre-salt cash machine. Dividend is the product.",
		catalyst: "Búzios/Mero ramps; dividend policy.",
		risk: "Brasilia. Always Brasilia.",
		stream: "Santos Basin lifting"
	},
	{
		name: "Saudi Aramco",
		ticker: "2222.SR",
		venue: "Tadawul",
		book: "NOC-listed",
		region: "Middle East",
		theme: "The spare-capacity company. Dividend is policy.",
		catalyst: "OSP; PIF funding; chemicals.",
		risk: "Kingdom fiscal; index inclusion flows.",
		stream: "Arab Light exports + PIF"
	},
	{
		name: "ConocoPhillips",
		ticker: "COP",
		venue: "NYSE",
		book: "E&P",
		region: "North America",
		theme: "Shale plus Alaska plus a real balance sheet.",
		catalyst: "Permian productivity; distribution framework.",
		risk: "WTI; inventory-quality debate.",
		stream: "Shale FCF"
	},
	{
		name: "EOG Resources",
		ticker: "EOG",
		venue: "NYSE",
		book: "E&P",
		region: "North America",
		theme: "Premium rock, premium FCF conversion.",
		catalyst: "Well costs; special dividends.",
		risk: "US onshore activity fade.",
		stream: "Permian / Eagle Ford"
	},
	{
		name: "Canadian Natural",
		ticker: "CNQ",
		venue: "TSX/NYSE",
		book: "Oil sands",
		region: "North America",
		theme: "Long-duration oil-sands torque to WCS.",
		catalyst: "TMX utilisation; WCS differential.",
		risk: "Carbon policy; differential blowouts.",
		stream: "Alberta royalties + WCS"
	},
	{
		name: "Cheniere",
		ticker: "LNG",
		venue: "NYSE",
		book: "LNG",
		region: "North America",
		theme: "Contracted US liquefaction. Toll plus merchant option.",
		catalyst: "Train FIDs; SPA recontracting.",
		risk: "Global LNG glut; construction.",
		stream: "Henry Hub to JKM/TTF"
	},
	{
		name: "Enterprise Products",
		ticker: "EPD",
		venue: "NYSE",
		book: "Midstream",
		region: "North America",
		theme: "Fee-based NGL and crude pipes. Income book.",
		catalyst: "Permian takeaway; coverage ratio.",
		risk: "Volume, not price — until volumes fall.",
		stream: "Midstream tolls"
	},
	{
		name: "Schlumberger",
		ticker: "SLB",
		venue: "NYSE",
		book: "Services",
		region: "Global",
		theme: "International and offshore capex, not US frac.",
		catalyst: "MENA awards; margin.",
		risk: "NOC budget cuts if $80 returns.",
		stream: "Upstream capex cycle"
	},
	{
		name: "Baker Hughes",
		ticker: "BKR",
		venue: "NYSE",
		book: "Services",
		region: "Global",
		theme: "Gas turbines and LNG kit. The AI-power adjacency.",
		catalyst: "LNG orders; turbine backlog.",
		risk: "Cycle; execution.",
		stream: "Equipment + services"
	},
	{
		name: "Frontline",
		ticker: "FRO",
		venue: "NYSE/OSE",
		book: "Tankers",
		region: "Global",
		theme: "VLCC spot. Rerouting is the thesis.",
		catalyst: "Cape rates; fleet orderbook.",
		risk: "Rate collapse if Hormuz premium dies.",
		stream: "Tonne-miles"
	},
	{
		name: "Marathon Petroleum",
		ticker: "MPC",
		venue: "NYSE",
		book: "Refining",
		region: "North America",
		theme: "USGC cracks. Owns the product squeeze.",
		catalyst: "Crack capture; turnarounds.",
		risk: "Margin normalisation.",
		stream: "USGC product exports"
	},
	{
		name: "Valero",
		ticker: "VLO",
		venue: "NYSE",
		book: "Refining",
		region: "North America",
		theme: "Complex coking. Heavy-sour option.",
		catalyst: "Maya/Merey diffs; diesel.",
		risk: "Demand destruction at the pump.",
		stream: "Cracks"
	},
	{
		name: "Woodside",
		ticker: "WDS",
		venue: "ASX/NYSE",
		book: "LNG",
		region: "Oceania",
		theme: "Australian LNG plus US growth option.",
		catalyst: "JKM; project FIDs.",
		risk: "Cost overruns; gas price.",
		stream: "LNG"
	},
	{
		name: "Harbour Energy",
		ticker: "HBR",
		venue: "LSE",
		book: "UKCS",
		region: "Europe",
		theme: "Listed UKCS. A tax-regime option, not a volume story.",
		catalyst: "UK fiscal; Wintershall integration.",
		risk: "Windfall tax; decom.",
		stream: "North Sea late-life"
	}
];
var ETFS = [
	{
		ticker: "USO",
		name: "United States Oil Fund",
		tracks: "Near-WTI futures",
		risk: "Contango bleed. Not a barrel."
	},
	{
		ticker: "BNO",
		name: "United States Brent Oil Fund",
		tracks: "Near-Brent futures",
		risk: "Same structure tax as USO."
	},
	{
		ticker: "XLE",
		name: "Energy Select Sector SPDR",
		tracks: "US energy equities",
		risk: "Beta to oil, not 1:1."
	},
	{
		ticker: "XOP",
		name: "SPDR S&P Oil & Gas E&P",
		tracks: "US E&P equal-ish",
		risk: "High torque, high drawdown."
	},
	{
		ticker: "AMLP",
		name: "Alerian MLP ETF",
		tracks: "US midstream MLPs",
		risk: "K-1 replaced; still rate-sensitive."
	},
	{
		ticker: "UNG",
		name: "US Natural Gas Fund",
		tracks: "Henry Hub futures",
		risk: "Worse roll than USO. Don't."
	}
];
var BOOKS = [
	"Integrated",
	"E&P",
	"NOC-listed",
	"Oil sands",
	"LNG",
	"Midstream",
	"Services",
	"Tankers",
	"Refining",
	"UKCS"
];
var DESK_INDEX = [
	...REGIONS.map((r) => ({
		id: `region-${r.slug}`,
		kind: "region",
		title: r.name,
		blurb: `${r.kicker} ${r.reservesBn.toFixed(0)} bn · ${(r.productionKbpd / 1e3).toFixed(1)} mb/d`,
		href: `/continents/${r.slug}`
	})),
	...REGIONS.flatMap((r) => r.producers.map((p) => ({
		id: `prod-${r.slug}-${p.name}`,
		kind: "producer",
		title: p.name,
		blurb: `${r.name} · ${p.reservesBn.toFixed(1)} bn · ${p.productionKbpd.toLocaleString()} kb/d · ${p.noc ?? "independents"}`,
		href: `/producers/${producerSlug(p.name)}`
	}))),
	...GRADES.map((g) => ({
		id: `grade-${g.name}`,
		kind: "grade",
		title: g.name,
		blurb: `${g.country} · ${g.api}° API · ${g.sulphurPct}% S · ${g.marker}`,
		href: "/trade"
	})),
	...CHOKEPOINTS.map((c) => ({
		id: `choke-${c.slug}`,
		kind: "choke",
		title: c.name,
		blurb: `${c.typicalMbd ? `${c.typicalMbd} ${c.unit}` : c.unit} · ${c.share}`,
		href: "/flows#chokes"
	})),
	...TECHNICAL_BREAKEVENS.map((b) => ({
		id: `be-${b.name}`,
		kind: "breakeven",
		title: b.name,
		blurb: `Technical ${b.kind} · $${b.low}–${b.high} (mid $${b.mid}) · ${b.source}`,
		href: "/flows#wells"
	})),
	...FISCAL.map((f) => ({
		id: `fiscal-${f.country}`,
		kind: "breakeven",
		title: `${f.country} fiscal`,
		blurb: `Budget BE $${f.beLow}–${f.beHigh} (mid $${f.beMid}) · ${f.note}`,
		href: "/flows#fiscal"
	})),
	...CAPEX_REGIONS.map((c) => ({
		id: `capex-${c.slug}`,
		kind: "book",
		title: `${c.name} capital`,
		blurb: c.going,
		href: `/continents/${c.slug}`
	})),
	...CAPEX_RULES.map((r) => ({
		id: `rule-${r.title}`,
		kind: "book",
		title: r.title,
		blurb: r.body,
		href: "/flows#capital"
	})),
	...AGENCY_BOOKS.map((a) => ({
		id: `agency-${a.book}`,
		kind: "book",
		title: `${a.book} ${a.report}`,
		blurb: `2026 supply ${a.y2026Supply} · demand ${a.y2026Demand} · ${a.tell}`,
		href: "/flows#balance"
	})),
	...PRINTS.map((p) => ({
		id: `print-${p.id}`,
		kind: "source",
		title: `${p.source} last print`,
		blurb: `${p.headline} ${p.body}`,
		href: "/sources"
	})),
	...DESK_SOURCES.map((s) => ({
		id: `src-${s.id}`,
		kind: "source",
		title: s.short,
		blurb: `${s.name} · ${s.why}`,
		href: "/sources"
	})),
	...SIGNALS.map((s) => ({
		id: `sig-${s.id}`,
		kind: "signal",
		title: s.title,
		blurb: s.evidence,
		href: "/signals"
	})),
	...WATCHLIST.map((n) => ({
		id: `name-${n.ticker}`,
		kind: "name",
		title: `${n.name} ${n.ticker}`,
		blurb: `${n.book} · ${n.stream} · ${n.theme}`,
		href: "/invest"
	})),
	{
		id: "tool-crack",
		kind: "book",
		title: "3-2-1 crack",
		blurb: "Two gasoline, one distillate, three crude. The refiner book.",
		href: "/trade"
	},
	{
		id: "tool-spare",
		kind: "book",
		title: "Effective spare capacity",
		blurb: "OPEC+ 0.22 mb/d vs Aug. Nameplate gap is not spare if it cannot load.",
		href: "/flows#spare"
	},
	...ROLE_BOOK.map((r) => ({
		id: `job-${r.id}`,
		kind: "job",
		title: r.title,
		blurb: `${r.discipline} · ${r.why}`,
		href: "/jobs"
	})),
	...TRANSFERS.map((t) => ({
		id: `xfer-${t.id}`,
		kind: "job",
		title: t.from,
		blurb: t.blurb,
		href: `/jobs?from=${t.id}`
	})),
	...JOB_REGIONS.map((r) => ({
		id: `hire-${r.id}`,
		kind: "job",
		title: `${r.name} hiring`,
		blurb: r.hiring,
		href: `/jobs?basin=${r.id}`
	})),
	{
		id: "cv-review",
		kind: "job",
		title: "CV review",
		blurb: "Construct CV — construction and energy CVs that get read properly.",
		href: CV_REVIEW_URL
	},
	...DISPATCH_ISSUES.map((i) => ({
		id: `disp-${i.slug}`,
		kind: "dispatch",
		title: i.title,
		blurb: i.dek,
		href: `/dispatch/${i.slug}`
	}))
];
function searchDesk(q, limit = 12) {
	const needle = q.trim().toLowerCase();
	if (needle.length < 2) return [];
	return DESK_INDEX.map((hit) => {
		const hay = `${hit.title} ${hit.blurb} ${hit.kind}`.toLowerCase();
		let score = 0;
		if (hit.title.toLowerCase().startsWith(needle)) score += 8;
		else if (hit.title.toLowerCase().includes(needle)) score += 5;
		if (hay.includes(needle)) score += 2;
		needle.split(/\s+/).forEach((w) => {
			if (w.length > 1 && hay.includes(w)) score += 1;
		});
		return {
			hit,
			score
		};
	}).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.hit);
}
var KIND = {
	region: "Atlas",
	producer: "Producer",
	grade: "Grade",
	choke: "Choke",
	breakeven: "Breakeven",
	source: "Source",
	signal: "Signal",
	name: "Watch",
	book: "Book",
	job: "Jobs",
	dispatch: "Substack"
};
function DeskSearch() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const hits = (0, import_react.useMemo)(() => searchDesk(q), [q]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen(true);
			}
			if (e.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		if (open) {
			setQ("");
			requestAnimationFrame(() => inputRef.current?.focus());
		}
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-3 text-sm text-muted hover:text-fg",
		"aria-label": "Search the desk",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "hidden rounded-sm border border-border px-1.5 font-mono text-[11px] text-subtle lg:inline",
				children: "⌘K"
			})
		]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Search the desk",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-[12vh] w-full max-w-xl px-4",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-surface shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Grade, job, basin, choke, briefing…",
							className: "h-12 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-subtle",
							"aria-label": "Query"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center text-muted",
							"aria-label": "Close search",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-[50vh] overflow-y-auto p-2",
					children: q.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-4 text-sm text-muted",
						children: "Type two letters. Atlas, jobs, transfer, dispatch, grades, chokes."
					}) : hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-4 text-sm text-muted",
						children: "Nothing on the desk matches that."
					}) : hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: h.href,
						onClick: () => setOpen(false),
						className: "block rounded-md px-3 py-3 hover:bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-fg",
								children: h.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: KIND[h.kind] ?? h.kind
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted",
							children: h.blurb
						})]
					}) }, h.id))
				})]
			})
		})
	}) : null] });
}
var NAV = [
	{
		to: "/",
		label: "Desk"
	},
	{
		to: "/continents",
		label: "Continents"
	},
	{
		to: "/producers",
		label: "Producers"
	},
	{
		to: "/flows",
		label: "Industry"
	},
	{
		to: "/reserves",
		label: "Reserves"
	},
	{
		to: "/trade",
		label: "Trade"
	},
	{
		to: "/invest",
		label: "Invest"
	},
	{
		to: "/jobs",
		label: "Jobs"
	},
	{
		to: "/signals",
		label: "Signals"
	},
	{
		to: "/briefing",
		label: "Briefing"
	},
	{
		to: "/dispatch",
		label: "Substack"
	},
	{
		to: "/sources",
		label: "Sources"
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg",
				children: "Skip to desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-14 items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-7 items-center justify-center rounded-sm border border-border bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "size-4 text-primary",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "currentColor",
										d: "M12 2c.6 4 4 7.2 4 11a4 4 0 1 1-8 0c0-3.8 3.4-7 4-11Z"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg leading-none tracking-tight",
								children: "The Crude Oracle"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskSearch, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden flex-wrap items-center gap-1 border-t border-border py-1.5 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-sm px-2 py-1.5 text-[13px] transition-colors duration-150", active ? "text-fg" : "text-muted hover:text-fg"),
								children: item.label
							}, item.to);
						})
					})]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border px-4 py-3 lg:hidden",
					"aria-label": "Mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-1",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-11 items-center text-sm text-fg",
							onClick: () => setOpen(false),
							children: item.label
						}, item.to))
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base text-fg",
							children: "The Crude Oracle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-4 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/jobs",
									className: "hover:text-fg",
									children: "Jobs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dispatch",
									className: "hover:text-fg",
									children: "Substack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://linkedinconstructioncvprofile.com/",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-fg",
									children: "CV review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-fg",
									children: "Method"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-xs leading-relaxed text-subtle",
						children: "Built for the oil industry. Market commentary for information only. Not investment advice. Capital at risk. Delayed quotes are delayed. OPEC reserves are OPEC reserves. Canada oil sands are not smuggled into the OPEC table. Every figure carries a source."
					})]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-B6XBo_8w.css";
var APP_NAME = "The Crude Oracle";
var Route$21 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Oil industry desk: spare capacity, well and fiscal breakevens, decline, continent reserves and revenue streams. Public EIA, OPEC, IEA, Dallas Fed."
			},
			{
				name: "theme-color",
				content: "#0b0a09"
			}
		],
		links: [
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: "The Crude Oracle",
				href: "/feed.xml"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
			}
		]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl",
				children: "That page is dry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "No barrels here. Back to the desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm text-primary-fg",
				children: "Desk"
			})
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$19 = () => import("./routes-BKMu9VYz.mjs");
var Route$20 = createFileRoute("/")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./about-BR8aZNRW.mjs");
var Route$19 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./briefing-DoVTeJUh.mjs");
var Route$18 = createFileRoute("/briefing")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./continents-zog-8TDp.mjs");
var Route$17 = createFileRoute("/continents")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./dispatch-CpxS_IWe.mjs");
var Route$16 = createFileRoute("/dispatch")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
function xml(s) {
	return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function renderDispatchRss(origin) {
	const items = DISPATCH_ISSUES.map((issue) => {
		const url = `${origin}/dispatch/${issue.slug}`;
		[...issue.sections.map((s) => `${s.h}: ${s.p}`), issue.closer].join(" ");
		return `    <item>
      <title>${xml(issue.title)}</title>
      <link>${xml(url)}</link>
      <guid isPermaLink="true">${xml(url)}</guid>
      <pubDate>${(/* @__PURE__ */ new Date(`${issue.date}T12:00:00Z`)).toUTCString()}</pubDate>
      <description>${xml(issue.dek)}</description>
    </item>`;
	}).join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(SUBSTACK_TITLE)}</title>
    <link>${xml(`${origin}/dispatch`)}</link>
    <description>${xml(DISPATCH_PITCH)}</description>
    <language>en-gb</language>
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
    <atom:link href="${xml(`${origin}/feed.xml`)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}
var Route$15 = createFileRoute("/feed.xml")({ server: { handlers: { GET: ({ request }) => {
	const origin = new URL(request.url).origin;
	return new Response(renderDispatchRss(origin), { headers: {
		"content-type": "application/rss+xml; charset=utf-8",
		"cache-control": "public, max-age=300"
	} });
} } } });
var $$splitComponentImporter$14 = () => import("./flows-PyCbmD0H.mjs");
var Route$14 = createFileRoute("/flows")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./invest-BsDkVYuh.mjs");
var Route$13 = createFileRoute("/invest")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./jobs-BfpLchnN.mjs");
var Route$12 = createFileRoute("/jobs")({
	validateSearch: (raw) => ({
		q: typeof raw.q === "string" ? raw.q : void 0,
		basin: typeof raw.basin === "string" ? raw.basin : void 0,
		from: typeof raw.from === "string" ? raw.from : void 0
	}),
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./producers-DWlTWfQF.mjs");
var Route$11 = createFileRoute("/producers")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./reserves-BkXy1wQz.mjs");
var Route$10 = createFileRoute("/reserves")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./signals-CTLt-R7n.mjs");
var Route$9 = createFileRoute("/signals")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./sources-DJr9KFz5.mjs");
var Route$8 = createFileRoute("/sources")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./substack-A5RW9UQT.mjs");
var Route$7 = createFileRoute("/substack")({
	beforeLoad: () => {
		throw redirect({ to: "/dispatch" });
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./trade-BDa6jree.mjs");
var Route$6 = createFileRoute("/trade")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./continents.index-B_bVbzjd.mjs");
var Route$5 = createFileRoute("/continents/")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./continents._slug-CmcfUTzi.mjs");
var Route$4 = createFileRoute("/continents/$slug")({
	loader: async ({ params }) => {
		const region = regionBySlug(params.slug);
		if (!region) throw notFound();
		return {
			region,
			tape: await getTape()
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./dispatch.index-V93xHHXB.mjs");
var Route$3 = createFileRoute("/dispatch/")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dispatch._slug-CWesLi-I.mjs");
var Route$2 = createFileRoute("/dispatch/$slug")({
	loader: async ({ params }) => {
		const issue = issueBySlug(params.slug);
		if (!issue) throw notFound();
		return {
			issue,
			tape: await getTape()
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./producers.index-DnEcM_gr.mjs");
var Route$1 = createFileRoute("/producers/")({
	loader: () => getTape(),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./producers._slug-KNXZjy1i.mjs");
var Route = createFileRoute("/producers/$slug")({
	loader: async ({ params }) => {
		const book = countryBySlug(params.slug);
		if (!book) throw notFound();
		return {
			book,
			tape: await getTape()
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$21
});
var AboutRoute = Route$19.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$21
});
var BriefingRoute = Route$18.update({
	id: "/briefing",
	path: "/briefing",
	getParentRoute: () => Route$21
});
var ContinentsRoute = Route$17.update({
	id: "/continents",
	path: "/continents",
	getParentRoute: () => Route$21
});
var DispatchRoute = Route$16.update({
	id: "/dispatch",
	path: "/dispatch",
	getParentRoute: () => Route$21
});
var FeedDotxmlRoute = Route$15.update({
	id: "/feed.xml",
	path: "/feed.xml",
	getParentRoute: () => Route$21
});
var FlowsRoute = Route$14.update({
	id: "/flows",
	path: "/flows",
	getParentRoute: () => Route$21
});
var InvestRoute = Route$13.update({
	id: "/invest",
	path: "/invest",
	getParentRoute: () => Route$21
});
var JobsRoute = Route$12.update({
	id: "/jobs",
	path: "/jobs",
	getParentRoute: () => Route$21
});
var ProducersRoute = Route$11.update({
	id: "/producers",
	path: "/producers",
	getParentRoute: () => Route$21
});
var ReservesRoute = Route$10.update({
	id: "/reserves",
	path: "/reserves",
	getParentRoute: () => Route$21
});
var SignalsRoute = Route$9.update({
	id: "/signals",
	path: "/signals",
	getParentRoute: () => Route$21
});
var SourcesRoute = Route$8.update({
	id: "/sources",
	path: "/sources",
	getParentRoute: () => Route$21
});
var SubstackRoute = Route$7.update({
	id: "/substack",
	path: "/substack",
	getParentRoute: () => Route$21
});
var TradeRoute = Route$6.update({
	id: "/trade",
	path: "/trade",
	getParentRoute: () => Route$21
});
var ContinentsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => ContinentsRoute
});
var ContinentsSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ContinentsRoute
});
var DispatchIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => DispatchRoute
});
var DispatchSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => DispatchRoute
});
var ProducersIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProducersRoute
});
var ProducersSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProducersRoute
});
var ContinentsRouteChildren = {
	ContinentsSlugRoute,
	ContinentsIndexRoute
};
var ContinentsRouteWithChildren = ContinentsRoute._addFileChildren(ContinentsRouteChildren);
var DispatchRouteChildren = {
	DispatchSlugRoute,
	DispatchIndexRoute
};
var DispatchRouteWithChildren = DispatchRoute._addFileChildren(DispatchRouteChildren);
var ProducersRouteChildren = {
	ProducersSlugRoute,
	ProducersIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BriefingRoute,
	ContinentsRoute: ContinentsRouteWithChildren,
	DispatchRoute: DispatchRouteWithChildren,
	FeedDotxmlRoute,
	FlowsRoute,
	InvestRoute,
	JobsRoute,
	ProducersRoute: ProducersRoute._addFileChildren(ProducersRouteChildren),
	ReservesRoute,
	SignalsRoute,
	SourcesRoute,
	SubstackRoute,
	TradeRoute
};
var routeTree = Route$21._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { DISPATCH_PITCH as $, CV_REVIEW_NAME as A, payFor as B, PRINTS as C, gradesByRegion as D, GRADE_NOTE as E, JOB_BOARDS as F, AGENCY_BOOKS as G, CAPEX_KPIS as H, JOB_REGIONS as I, allCountryBooks as J, AGENCY_NOTE as K, PAY_BANDS as L, CV_REWRITE_NAME as M, CV_REWRITE_URL as N, CHOKEPOINTS as O, EARN_ROWS as P, DISPATCH_ISSUES as Q, ROLE_BOOK as R, DESK_AS_OF as S, GRADES as T, CAPEX_REGIONS as U, searchRoles as V, CAPEX_THESIS as W, createSsrRpc as X, cn as Y, producerSlug as Z, BOOKS as _, Route$3 as a, WORLD_RESERVES_BN as at, DESK_SOURCES as b, Route$6 as c, Route$10 as d, SUBSTACK_TITLE as et, Route$12 as f, Route$20 as g, Route$18 as h, Route$2 as i, WORLD_PROD_KBPD as it, CV_REVIEW_URL as j, CAREER_AS_OF as k, Route$8 as l, Route$14 as m, Route as n, REGIONS as nt, Route$4 as o, Route$13 as p, QUINTET as q, Route$1 as r, RESERVES_AS_OF as rt, Route$5 as s, router_exports as t, PROD_AS_OF as tt, Route$9 as u, ETFS as v, TODAY_PRINTS as w, SOURCE_RULE as x, WATCHLIST as y, TRANSFERS as z };
