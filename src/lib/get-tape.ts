import { createServerFn } from "@tanstack/react-start";
import { DESK_FALLBACK, TAPE_SYMBOLS, type Quote, type Tape } from "./tape";

type YahooChart = {
  chart?: {
    result?: {
      timestamp?: number[];
      meta?: {
        regularMarketPrice?: number;
        previousClose?: number;
        chartPreviousClose?: number;
        regularMarketTime?: number;
      };
      indicators?: { quote?: { close?: (number | null)[] }[] };
    }[];
  };
};

async function fetchChart(symbol: string, range: string, interval: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "CrudeOracleDesk/1.0" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`yahoo ${symbol} ${res.status}`);
  return (await res.json()) as YahooChart;
}

function quoteFrom(symbol: string, label: string, unit: string, json: YahooChart): Quote | null {
  const result = json.chart?.result?.[0];
  const meta = result?.meta;
  const price = meta?.regularMarketPrice;
  if (typeof price !== "number") return null;
  const closes = (result?.indicators?.quote?.[0]?.close ?? []).filter((c): c is number => typeof c === "number");
  const sessionPrev = meta?.previousClose;
  const seriesPrev = closes.length >= 2 ? closes[closes.length - 2] : closes[closes.length - 1];
  const previous = typeof sessionPrev === "number" ? sessionPrev : (seriesPrev ?? price);
  const change = price - previous;
  const changePct = previous ? (change / previous) * 100 : 0;
  const ts = meta?.regularMarketTime ? new Date(meta.regularMarketTime * 1000).toISOString() : new Date().toISOString();
  return { symbol, label, price, previous, change, changePct, unit, updated: ts, dataType: "delayed" };
}

export const getTape = createServerFn({ method: "GET" }).handler(async (): Promise<Tape> => {
  try {
    const [wtiHist, brentHist, quotePack] = await Promise.all([
      fetchChart("CL=F", "6mo", "1d"),
      fetchChart("BZ=F", "6mo", "1d"),
      Promise.all(TAPE_SYMBOLS.map(async (s) => ({ s, json: await fetchChart(s.symbol, "5d", "1d") }))),
    ]);

    const quotes = quotePack
      .map(({ s, json }) => quoteFrom(s.symbol, s.label, s.unit, json))
      .filter((q): q is Quote => Boolean(q));
    if (quotes.length < 2) return DESK_FALLBACK;

    const wtiTs = wtiHist.chart?.result?.[0]?.timestamp ?? [];
    const wtiClose = wtiHist.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
    const brentTs = brentHist.chart?.result?.[0]?.timestamp ?? [];
    const brentClose = brentHist.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
    const brentMap = new Map<string, number | null>();
    brentTs.forEach((t, i) => {
      brentMap.set(new Date(t * 1000).toISOString().slice(0, 10), brentClose[i] ?? null);
    });
    const series = wtiTs.map((t, i) => {
      const day = new Date(t * 1000).toISOString().slice(0, 10);
      return { t: t * 1000, wti: wtiClose[i] ?? null, brent: brentMap.get(day) ?? null };
    });

    return {
      quotes,
      series,
      fetchedAt: new Date().toISOString(),
      dataType: "delayed",
      note: "Delayed public futures/ETF marks. Not a licensed real-time feed. Not for execution.",
    };
  } catch {
    return DESK_FALLBACK;
  }
});
