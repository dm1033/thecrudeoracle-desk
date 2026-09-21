//#region node_modules/.nitro/vite/services/ssr/assets/calendar-B72FkF9n.js
var CALENDAR = [
	{
		when: "Fri 18 Sep 13:00 ET",
		name: "Baker Hughes rig count",
		why: "Last print 11 Sep: US total 591, oil 450. Activity with a lag.",
		source: "Baker Hughes"
	},
	{
		when: "Fri 18 Sep 15:30 ET",
		name: "CFTC Commitments of Traders",
		why: "Managed-money length in CL. Crowd-risk after a gap-up week, not gospel.",
		source: "CFTC"
	},
	{
		when: "Wed 23 Sep 10:30 ET",
		name: "EIA Weekly Petroleum Status Report",
		why: "Last: commercial crude 423.4 mb (−0.6), SPR 285. Cushing vs five-year.",
		source: "EIA"
	},
	{
		when: "Tue ~16:30 ET",
		name: "API weekly stocks",
		why: "The leak before the official print. Fade or fade-not Wednesday.",
		source: "API"
	},
	{
		when: "Oct, 2nd Tuesday",
		name: "EIA Short-Term Energy Outlook",
		why: "Last 9 Sep: 2026 Brent path $91, 2027 $74 if the Gulf normalises. Desk does not take $74.",
		source: "EIA STEO"
	},
	{
		when: "October",
		name: "IEA Oil Market Report (public pages)",
		why: "Sep book: world supply 100.7, effective OPEC+ spare 0.22, recovery deferred to 2027.",
		source: "IEA"
	},
	{
		when: "~13th monthly",
		name: "OPEC Monthly Oil Market Report",
		why: "Demand, tankers, OPEC+ supply tables. Always read against IEA.",
		source: "OPEC"
	},
	{
		when: "Quarterly",
		name: "Dallas Fed Energy Survey",
		why: "Q1 2026: new-well $66, operating $43. The rig-count tell.",
		source: "Dallas Fed"
	},
	{
		when: "Contract",
		name: "CL / BZ expiry & roll",
		why: "USO and BNO bleed here. Know the roll or don't own the ETF.",
		source: "CME / ICE"
	}
];
var INSTRUMENTS = [
	{
		name: "WTI futures (CL)",
		home: "NYMEX/CME",
		unit: "1,000 bbl",
		note: "US logistics. Cushing is the physical tell."
	},
	{
		name: "Mini WTI (MCL)",
		home: "NYMEX",
		unit: "100 bbl",
		note: "Same beast, smaller teeth."
	},
	{
		name: "Brent futures (BZ / CO)",
		home: "ICE",
		unit: "1,000 bbl",
		note: "The world marker. 80% of traded crude."
	},
	{
		name: "RBOB gasoline (RB)",
		home: "NYMEX",
		unit: "42,000 gal",
		note: "US driving season and the crack."
	},
	{
		name: "Heating oil / ULSD (HO)",
		home: "NYMEX",
		unit: "42,000 gal",
		note: "The 2026 scream. Diesel, not home heating, is the trade."
	},
	{
		name: "Henry Hub (NG)",
		home: "NYMEX",
		unit: "10,000 MMBtu",
		note: "A different market. Do not pair-trade it with CL blindly."
	},
	{
		name: "Brent–WTI spread",
		home: "ICE/CME",
		unit: "1,000 bbl",
		note: "Export arb, Cushing, and transatlantic freight."
	},
	{
		name: "Crack spreads",
		home: "NYMEX",
		unit: "3-2-1 etc.",
		note: "Refiner book. Long HO/RB, short CL."
	},
	{
		name: "Energy equities",
		home: "NYSE/LSE",
		unit: "shares",
		note: "Torque plus capital discipline. Not a barrel."
	},
	{
		name: "Oil ETFs (USO, BNO)",
		home: "ARCA",
		unit: "shares",
		note: "Futures in a wrapper. Contango is the fee they don't print."
	}
];
//#endregion
export { INSTRUMENTS as n, CALENDAR as t };
