//#region node_modules/.nitro/vite/services/ssr/assets/reserves-CXPzMe0c.js
/** OPEC ASB 2026 Table 3.1, end-2025, billion barrels. Canada excludes oil sands. */
var OPEC_RESERVES = [
	{
		rank: 1,
		country: "Venezuela",
		region: "South America",
		bn: 303.701,
		opec: true,
		productionKbpd: 805
	},
	{
		rank: 2,
		country: "Saudi Arabia",
		region: "Middle East",
		bn: 267.2,
		opec: true,
		productionKbpd: 10110
	},
	{
		rank: 3,
		country: "Iran",
		region: "Middle East",
		bn: 208.6,
		opec: true,
		productionKbpd: 4030
	},
	{
		rank: 4,
		country: "Iraq",
		region: "Middle East",
		bn: 140,
		opec: true,
		productionKbpd: 4391
	},
	{
		rank: 5,
		country: "United Arab Emirates",
		region: "Middle East",
		bn: 120,
		opec: true,
		productionKbpd: 4010
	},
	{
		rank: 6,
		country: "Kuwait",
		region: "Middle East",
		bn: 101.5,
		opec: true,
		productionKbpd: 2660
	},
	{
		rank: 7,
		country: "Russia",
		region: "Eurasia",
		bn: 80,
		opec: false,
		productionKbpd: 10027
	},
	{
		rank: 8,
		country: "Libya",
		region: "Africa",
		bn: 48.363,
		opec: true,
		productionKbpd: 1398
	},
	{
		rank: 9,
		country: "United States",
		region: "North America",
		bn: 41.909,
		note: "OPEC conventional. EIA/OGJ print higher.",
		opec: false,
		productionKbpd: 13246
	},
	{
		rank: 10,
		country: "Nigeria",
		region: "Africa",
		bn: 37.01,
		opec: true,
		productionKbpd: 1548
	},
	{
		rank: 11,
		country: "China",
		region: "Asia-Pacific",
		bn: 34.472,
		opec: false,
		productionKbpd: 4420
	},
	{
		rank: 12,
		country: "Kazakhstan",
		region: "Eurasia",
		bn: 30,
		opec: false,
		productionKbpd: 1280
	},
	{
		rank: 13,
		country: "Qatar",
		region: "Middle East",
		bn: 25.244,
		opec: false,
		productionKbpd: 1275
	},
	{
		rank: 14,
		country: "Brazil",
		region: "South America",
		bn: 16.841,
		opec: false,
		productionKbpd: 3953
	},
	{
		rank: 15,
		country: "Algeria",
		region: "Africa",
		bn: 12.2,
		opec: true,
		productionKbpd: 1170
	},
	{
		rank: 16,
		country: "Ecuador",
		region: "South America",
		bn: 8.273,
		opec: false,
		productionKbpd: 480
	},
	{
		rank: 17,
		country: "Azerbaijan",
		region: "Eurasia",
		bn: 7,
		opec: false,
		productionKbpd: 620
	},
	{
		rank: 18,
		country: "Norway",
		region: "Europe",
		bn: 5.919,
		opec: false,
		productionKbpd: 1994
	},
	{
		rank: 19,
		country: "Mexico",
		region: "North America",
		bn: 5.136,
		opec: false,
		productionKbpd: 1745
	},
	{
		rank: 20,
		country: "Canada",
		region: "North America",
		bn: 5.08,
		note: "OPEC conventional only. Oil sands ~163–170 bn (EI/OGJ).",
		opec: false,
		productionKbpd: 5059
	},
	{
		rank: 21,
		country: "India",
		region: "Asia-Pacific",
		bn: 4.995,
		opec: false,
		productionKbpd: 564
	},
	{
		rank: 22,
		country: "Oman",
		region: "Middle East",
		bn: 4.825,
		opec: false,
		productionKbpd: 1024
	},
	{
		rank: 23,
		country: "Vietnam",
		region: "Asia-Pacific",
		bn: 4.4,
		opec: false,
		productionKbpd: 310
	},
	{
		rank: 24,
		country: "Egypt",
		region: "Africa",
		bn: 3.3,
		opec: false,
		productionKbpd: 560
	},
	{
		rank: 25,
		country: "Argentina",
		region: "South America",
		bn: 3.093,
		opec: false,
		productionKbpd: 873
	}
];
var WORLD_RESERVES_OPEC = 1572.459;
var OPEC_MEMBERS_SHARE_NOTE = "OPEC members hold the bulk of proved crude in the ASB table. Venezuela + Saudi + Iran = 779.5 bn bbl, 49.6% of the official world total.";
function rOverPYears(bn, kbpd) {
	if (kbpd <= 0) return null;
	const annual = kbpd * 365 / 1e3;
	return bn * 1e3 / annual;
}
var SOURCE_SPLIT = [
	{
		label: "Canada, including oil sands",
		opec: 5.08,
		broader: 170,
		source: "OPEC ASB vs EI / OGJ / Worldometer compilations"
	},
	{
		label: "United States proved",
		opec: 41.9,
		broader: 83.7,
		source: "OPEC ASB vs Worldometer/EIA-style compilations of tight oil"
	},
	{
		label: "Russia",
		opec: 80,
		broader: 107.8,
		source: "OPEC ASB vs BP/Eni Statistical Review family"
	}
];
//#endregion
export { rOverPYears as a, WORLD_RESERVES_OPEC as i, OPEC_RESERVES as n, SOURCE_SPLIT as r, OPEC_MEMBERS_SHARE_NOTE as t };
