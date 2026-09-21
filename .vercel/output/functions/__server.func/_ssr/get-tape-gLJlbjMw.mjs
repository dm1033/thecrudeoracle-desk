import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-tape-gLJlbjMw.js
var DESK_FALLBACK = {
	quotes: [
		{
			symbol: "CL=F",
			label: "WTI",
			price: 100.87,
			previous: 102.43,
			change: -1.56,
			changePct: -1.52,
			unit: "$/bbl",
			updated: "2026-09-17T15:12:00Z",
			dataType: "desk"
		},
		{
			symbol: "BZ=F",
			label: "Brent",
			price: 103.59,
			previous: 105.83,
			change: -2.24,
			changePct: -2.12,
			unit: "$/bbl",
			updated: "2026-09-17T15:12:00Z",
			dataType: "desk"
		},
		{
			symbol: "NG=F",
			label: "Henry Hub",
			price: 2.916,
			previous: 2.891,
			change: .025,
			changePct: .86,
			unit: "$/MMBtu",
			updated: "2026-09-17T15:12:00Z",
			dataType: "desk"
		},
		{
			symbol: "RB=F",
			label: "RBOB",
			price: 3.44,
			previous: 3.483,
			change: -.043,
			changePct: -1.24,
			unit: "$/gal",
			updated: "2026-09-17T14:50:00Z",
			dataType: "desk"
		},
		{
			symbol: "HO=F",
			label: "ULSD",
			price: 5.06,
			previous: 5.242,
			change: -.182,
			changePct: -3.47,
			unit: "$/gal",
			updated: "2026-09-17T14:50:00Z",
			dataType: "desk"
		},
		{
			symbol: "USO",
			label: "USO",
			price: 78.4,
			previous: 79.6,
			change: -1.2,
			changePct: -1.51,
			unit: "$",
			updated: "2026-09-17T14:50:00Z",
			dataType: "desk"
		},
		{
			symbol: "XLE",
			label: "XLE",
			price: 98.2,
			previous: 99.1,
			change: -.9,
			changePct: -.91,
			unit: "$",
			updated: "2026-09-17T14:50:00Z",
			dataType: "desk"
		}
	],
	series: [],
	fetchedAt: "2026-09-17T15:12:00Z",
	dataType: "desk",
	note: "Desk marks, 17 Sep 2026 session. Live delayed feed unavailable."
};
var TAPE_SYMBOLS = [
	{
		symbol: "CL=F",
		label: "WTI",
		unit: "$/bbl"
	},
	{
		symbol: "BZ=F",
		label: "Brent",
		unit: "$/bbl"
	},
	{
		symbol: "NG=F",
		label: "Henry Hub",
		unit: "$/MMBtu"
	},
	{
		symbol: "RB=F",
		label: "RBOB",
		unit: "$/gal"
	},
	{
		symbol: "HO=F",
		label: "ULSD",
		unit: "$/gal"
	},
	{
		symbol: "USO",
		label: "USO",
		unit: "$"
	},
	{
		symbol: "XLE",
		label: "XLE",
		unit: "$"
	}
];
async function fetchChart(symbol, range, interval) {
	const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}`;
	const res = await fetch(url, {
		headers: { "User-Agent": "CrudeOracleDesk/1.0" },
		signal: AbortSignal.timeout(8e3)
	});
	if (!res.ok) throw new Error(`yahoo ${symbol} ${res.status}`);
	return await res.json();
}
function quoteFrom(symbol, label, unit, json) {
	const result = json.chart?.result?.[0];
	const meta = result?.meta;
	const price = meta?.regularMarketPrice;
	if (typeof price !== "number") return null;
	const closes = (result?.indicators?.quote?.[0]?.close ?? []).filter((c) => typeof c === "number");
	const sessionPrev = meta?.previousClose;
	const seriesPrev = closes.length >= 2 ? closes[closes.length - 2] : closes[closes.length - 1];
	const previous = typeof sessionPrev === "number" ? sessionPrev : seriesPrev ?? price;
	const change = price - previous;
	return {
		symbol,
		label,
		price,
		previous,
		change,
		changePct: previous ? change / previous * 100 : 0,
		unit,
		updated: meta?.regularMarketTime ? (/* @__PURE__ */ new Date(meta.regularMarketTime * 1e3)).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		dataType: "delayed"
	};
}
var getTape_createServerFn_handler = createServerRpc({
	id: "69afe8597ea691f38d2399e26f579faa61dd8f0ef2f1ce052fdf878be9cd926d",
	name: "getTape",
	filename: "src/lib/get-tape.ts"
}, (opts) => getTape.__executeServer(opts));
var getTape = createServerFn({ method: "GET" }).handler(getTape_createServerFn_handler, async () => {
	try {
		const [wtiHist, brentHist, quotePack] = await Promise.all([
			fetchChart("CL=F", "6mo", "1d"),
			fetchChart("BZ=F", "6mo", "1d"),
			Promise.all(TAPE_SYMBOLS.map(async (s) => ({
				s,
				json: await fetchChart(s.symbol, "5d", "1d")
			})))
		]);
		const quotes = quotePack.map(({ s, json }) => quoteFrom(s.symbol, s.label, s.unit, json)).filter((q) => Boolean(q));
		if (quotes.length < 2) return DESK_FALLBACK;
		const wtiTs = wtiHist.chart?.result?.[0]?.timestamp ?? [];
		const wtiClose = wtiHist.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
		const brentTs = brentHist.chart?.result?.[0]?.timestamp ?? [];
		const brentClose = brentHist.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
		const brentMap = /* @__PURE__ */ new Map();
		brentTs.forEach((t, i) => {
			brentMap.set((/* @__PURE__ */ new Date(t * 1e3)).toISOString().slice(0, 10), brentClose[i] ?? null);
		});
		return {
			quotes,
			series: wtiTs.map((t, i) => {
				const day = (/* @__PURE__ */ new Date(t * 1e3)).toISOString().slice(0, 10);
				return {
					t: t * 1e3,
					wti: wtiClose[i] ?? null,
					brent: brentMap.get(day) ?? null
				};
			}),
			fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
			dataType: "delayed",
			note: "Delayed public futures/ETF marks. Not a licensed real-time feed. Not for execution."
		};
	} catch {
		return DESK_FALLBACK;
	}
});
//#endregion
export { getTape_createServerFn_handler };
