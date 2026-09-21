export type Quote = {
  symbol: string;
  label: string;
  price: number;
  previous: number;
  change: number;
  changePct: number;
  unit: string;
  updated: string;
  dataType: "delayed" | "desk";
};

export type Tape = {
  quotes: Quote[];
  series: { t: number; wti: number | null; brent: number | null }[];
  fetchedAt: string;
  dataType: "delayed" | "desk";
  note: string;
};

export const DESK_FALLBACK: Tape = {
  quotes: [
    { symbol: "CL=F", label: "WTI", price: 100.87, previous: 102.43, change: -1.56, changePct: -1.52, unit: "$/bbl", updated: "2026-09-17T15:12:00Z", dataType: "desk" },
    { symbol: "BZ=F", label: "Brent", price: 103.59, previous: 105.83, change: -2.24, changePct: -2.12, unit: "$/bbl", updated: "2026-09-17T15:12:00Z", dataType: "desk" },
    { symbol: "NG=F", label: "Henry Hub", price: 2.916, previous: 2.891, change: 0.025, changePct: 0.86, unit: "$/MMBtu", updated: "2026-09-17T15:12:00Z", dataType: "desk" },
    { symbol: "RB=F", label: "RBOB", price: 3.44, previous: 3.483, change: -0.043, changePct: -1.24, unit: "$/gal", updated: "2026-09-17T14:50:00Z", dataType: "desk" },
    { symbol: "HO=F", label: "ULSD", price: 5.06, previous: 5.242, change: -0.182, changePct: -3.47, unit: "$/gal", updated: "2026-09-17T14:50:00Z", dataType: "desk" },
    { symbol: "USO", label: "USO", price: 78.4, previous: 79.6, change: -1.2, changePct: -1.51, unit: "$", updated: "2026-09-17T14:50:00Z", dataType: "desk" },
    { symbol: "XLE", label: "XLE", price: 98.2, previous: 99.1, change: -0.9, changePct: -0.91, unit: "$", updated: "2026-09-17T14:50:00Z", dataType: "desk" },
  ],
  series: [],
  fetchedAt: "2026-09-17T15:12:00Z",
  dataType: "desk",
  note: "Desk marks, 17 Sep 2026 session. Live delayed feed unavailable.",
};

export const TAPE_SYMBOLS: { symbol: string; label: string; unit: string }[] = [
  { symbol: "CL=F", label: "WTI", unit: "$/bbl" },
  { symbol: "BZ=F", label: "Brent", unit: "$/bbl" },
  { symbol: "NG=F", label: "Henry Hub", unit: "$/MMBtu" },
  { symbol: "RB=F", label: "RBOB", unit: "$/gal" },
  { symbol: "HO=F", label: "ULSD", unit: "$/gal" },
  { symbol: "USO", label: "USO", unit: "$" },
  { symbol: "XLE", label: "XLE", unit: "$" },
];
