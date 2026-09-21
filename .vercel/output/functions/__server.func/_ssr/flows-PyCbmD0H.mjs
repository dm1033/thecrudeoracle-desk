import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as fiscalGapBn, S as TECH_BE_NOTE, _ as SPARE_NOTE, a as FISCAL, b as STEO_NOTE, c as INDUSTRY_KPIS, d as OTHER_CONTINENTS, g as SPARE, l as INDUSTRY_SOURCES, m as SHALE_DECLINE, n as DECLINE, o as FISCAL_NOTE, p as REGION_PATHS, r as DECLINE_NOTE, s as INDUSTRY_AS_OF, t as CAPITAL_RULES, u as INDUSTRY_THESIS, v as SPARE_TOTALS, x as TECHNICAL_BREAKEVENS, y as STEO_BALANCE } from "./signals-Di7Yp9Gv.mjs";
import { G as AGENCY_BOOKS, H as CAPEX_KPIS, K as AGENCY_NOTE, O as CHOKEPOINTS, U as CAPEX_REGIONS, W as CAPEX_THESIS, Y as cn, m as Route$14, q as QUINTET } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, u as Legend } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flows-PyCbmD0H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var JUMP = [
	{
		href: "#balance",
		label: "Balance"
	},
	{
		href: "#spare",
		label: "Spare"
	},
	{
		href: "#chokes",
		label: "Chokes"
	},
	{
		href: "#wells",
		label: "Wells"
	},
	{
		href: "#fiscal",
		label: "Fiscal"
	},
	{
		href: "#decline",
		label: "Decline"
	},
	{
		href: "#capital",
		label: "Capital"
	}
];
function FlowsPage() {
	const tape = Route$14.useLoaderData();
	const [bloc, setBloc] = (0, import_react.useState)("all");
	const [brent, setBrent] = (0, import_react.useState)(100);
	const [war, setWar] = (0, import_react.useState)(false);
	const spareRows = (0, import_react.useMemo)(() => bloc === "all" ? SPARE : SPARE.filter((r) => r.bloc === bloc), [bloc]);
	const stack = (0, import_react.useMemo)(() => [...TECHNICAL_BREAKEVENS].sort((a, b) => a.mid - b.mid), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: [
					"Industry book · ",
					INDUSTRY_AS_OF,
					" · public IEA / EIA / Dallas Fed / OPEC"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl",
				children: "Spare, breakeven, decline. The four numbers the industry actually runs on."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-3xl text-base leading-relaxed text-muted",
				children: INDUSTRY_THESIS
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 lg:grid-cols-6",
				children: INDUSTRY_KPIS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
							children: k.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-lg tabular-nums",
							children: k.v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: k.s
						})
					]
				}, k.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-8 flex gap-2 overflow-x-auto pb-1",
				"aria-label": "Industry sections",
				children: JUMP.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: j.href,
					className: "inline-flex h-11 shrink-0 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg",
					children: j.label
				}, j.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "balance",
				className: "mt-14 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Balance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "2026 is a shortage year. 2027 is a recovery bet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: STEO_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 h-72 rounded-xl border border-border bg-surface p-3 sm:h-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: STEO_BALANCE,
								margin: {
									top: 8,
									right: 8,
									left: 0,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "rgba(242,235,227,0.06)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "year",
										tick: {
											fill: "#9a9186",
											fontSize: 11
										},
										tickLine: false,
										axisLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										domain: [98, 112],
										tick: {
											fill: "#9a9186",
											fontSize: 11
										},
										tickLine: false,
										axisLine: false,
										width: 36
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "#141210",
											border: "1px solid #2c2722",
											borderRadius: 10,
											color: "#f2ebe3"
										},
										formatter: (v, n) => [`${v} mb/d`, n === "production" ? "Production" : "Consumption"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "production",
										name: "Production",
										stroke: "#d8d0c4",
										strokeWidth: 2,
										dot: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "consumption",
										name: "Consumption",
										stroke: "#7dba9a",
										strokeWidth: 2,
										dot: false
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface font-mono text-[11px] uppercase tracking-wider text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Year"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Liquids prod"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Consumption"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Balance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "OPEC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Non-OPEC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Brent STEO"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: STEO_BALANCE.map((r) => {
								const bal = +(r.production - r.consumption).toFixed(1);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3",
											children: r.year
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.production.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.consumption.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: cn("px-4 py-3 font-mono tabular-nums", bal < 0 ? "text-down" : "text-up"),
											children: [bal > 0 ? "+" : "", bal]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.opec.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.nonOpec.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: ["$", r.brent]
										})
									]
								}, r.year);
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [
							"IEA OMR Sep: world supply 100.7 mb/d in 2026 (−5.7), rebound +8 mb/d in 2027. Demand −2.5 then +2.6. Americas Quintet ",
							QUINTET.y2026,
							" then ",
							QUINTET.y2027,
							". Stocks −507 mb since February."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 font-display text-2xl",
						children: "IEA. EIA. OPEC. Three books."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted",
						children: AGENCY_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 lg:grid-cols-3",
						children: AGENCY_BOOKS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-muted",
									children: a.report
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 font-display text-2xl",
									children: a.book
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-3 grid grid-cols-2 gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-subtle",
											children: "2026 supply"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-mono text-xs",
											children: a.y2026Supply
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-subtle",
											children: "2026 demand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-mono text-xs",
											children: a.y2026Demand
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-subtle",
											children: "2027 supply"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-mono text-xs",
											children: a.y2027Supply
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-subtle",
											children: "2027 demand"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 font-mono text-xs",
											children: a.y2027Demand
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: a.brent2026
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: a.brent2027
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed",
									children: a.tell
								})
							]
						}, a.book))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-xl border border-border px-4 py-3 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-fg",
								children: [QUINTET.name, "."]
							}),
							" ",
							QUINTET.members,
							". ",
							QUINTET.y2026,
							" in 2026,",
							" ",
							QUINTET.y2027,
							" in 2027. ",
							QUINTET.note
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "spare",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Spare capacity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "Nameplate gap is not spare. Effective spare is 0.22 mb/d."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: SPARE_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "OPEC+ Aug crude",
								v: `${SPARE_TOTALS.opecPlusAug}`,
								s: "mb/d IEA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "OPEC+ capacity",
								v: `${SPARE_TOTALS.opecPlusCapacity}`,
								s: "90-day sustainable"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "Effective spare",
								v: `${SPARE_TOTALS.opecPlusEffSpare}`,
								s: "the usable number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "Saudi Aug / capacity",
								v: "5.97 / 12.11",
								s: "not 6 mb/d of spare"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-2 overflow-x-auto pb-1",
						children: [
							"all",
							"OPEC-8",
							"exempt",
							"non-OPEC"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setBloc(b),
							className: bloc === b ? "h-11 shrink-0 rounded-md bg-primary px-3 text-sm text-primary-fg" : "h-11 shrink-0 rounded-md border border-border px-3 text-sm text-muted",
							children: b === "all" ? "All OPEC+" : b
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[720px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface font-mono text-[11px] uppercase tracking-wider text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Country"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Jul"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Aug"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "vs target"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Capacity"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Nameplate gap"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Eff. spare"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: spareRows.map((r) => {
								const gap = r.capacity != null ? +(r.capacity - r.aug).toFixed(2) : null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-4 py-3",
											children: [
												r.country,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													tone: "muted",
													children: r.bloc
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.jul.toFixed(2)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.aug.toFixed(2)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.vsTarget == null ? "—" : r.vsTarget.toFixed(2)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.capacity == null ? "—" : r.capacity.toFixed(2)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums text-muted",
											children: gap == null ? "—" : gap.toFixed(2)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 font-mono tabular-nums",
											children: r.effSpare == null ? "—" : r.effSpare.toFixed(2)
										})
									]
								}, r.country);
							}) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "chokes",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Chokepoints"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "A headline is not a choke. Throughput is."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: "Hormuz is 20 mb/d in peacetime and the market in 2026. Malacca is the quiet door into Asia. CPC is a single pipe. Cushing is a tank farm that prices WTI. I print the typical volume, the 2026 loading, and the bypass that does not actually replace it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: CHOKEPOINTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm tabular-nums text-muted",
										children: c.typicalMbd > 0 ? `${c.typicalMbd} ${c.unit}` : c.unit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: c.share
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed",
									children: c.now
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "Bypass · "
									}), c.bypass]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: [
										c.who,
										" · ",
										c.source
									]
								})
							]
						}, c.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "wells",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Technical breakevens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "The well. Not the ministry. Cost of supply, stacked."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: TECH_BE_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-2",
						children: stack.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-border bg-surface px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg",
										children: b.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-sm tabular-nums",
										children: [
											"$",
											b.low,
											"–",
											b.high,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted",
												children: [" · mid $", b.mid]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 overflow-hidden rounded-full bg-elevated",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary",
										style: { width: `${Math.min(100, b.mid / 90 * 100)}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: b.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: [
										b.kind,
										" · ",
										b.region,
										" · ",
										b.source
									]
								})
							]
						}, b.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "fiscal",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Fiscal breakevens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "The budget. This is the number that starts wars of words at OPEC."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: FISCAL_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "brent",
									className: "font-mono text-[11px] uppercase tracking-wider text-muted",
									children: "Brent assumption"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-3xl tabular-nums",
									children: ["$", brent]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setWar((v) => !v),
									className: war ? "h-11 rounded-md bg-primary px-4 text-sm text-primary-fg" : "h-11 rounded-md border border-border px-4 text-sm",
									children: war ? "Aug 2026 volumes" : "Nameplate volumes"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "brent",
								type: "range",
								min: 40,
								max: 150,
								step: 1,
								value: brent,
								onChange: (e) => setBrent(Number(e.target.value)),
								className: "mt-4 w-full accent-primary caret-transparent",
								style: { caretColor: "transparent" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex justify-between font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$90 Saudi mid" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$150" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-subtle",
								children: war ? "War volumes: Saudi scaled from 9.0 to 5.97 mb/d. The same budget now needs a much higher price. That is the 2026 Gulf print." : "Nameplate: a 2025 export world. Do not run 2024 budgets on 2026 loadings."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3",
						children: FISCAL.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiscalCard, {
							row,
							price: brent,
							war
						}, row.country))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "decline",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Decline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "Stop writing cheques and the world loses 5.5 mb/d a year."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: DECLINE_NOTE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						children: SHALE_DECLINE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: s.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-2xl tabular-nums",
									children: [s.pct, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle",
									children: "Shale, no new drilling · IEA"
								})
							]
						}, s.year))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[520px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface font-mono text-[11px] uppercase tracking-wider text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Book"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Observed % / yr"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Read it as"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: DECLINE.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: d.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono tabular-nums",
										children: d.observedPct.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted",
										children: d.note
									})
								]
							}, d.name)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "capital",
				className: "mt-16 scroll-mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Capital & continents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl",
						children: "Where the money is going. And where it is not."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
						children: CAPEX_THESIS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4",
						children: CAPEX_KPIS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: k.k
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-lg tabular-nums",
									children: k.v
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle",
									children: k.s
								})
							]
						}, k.k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 lg:grid-cols-2",
						children: CAPITAL_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.body
							})]
						}, r.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4",
						children: CAPEX_REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/continents/$slug",
							params: { slug: r.slug },
							className: "rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-muted",
									children: [
										r.cycle,
										" cycle · ",
										r.direction
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-3 grid gap-3 text-sm sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-subtle",
										children: "Capital going"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 leading-relaxed",
										children: r.going
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-subtle",
										children: "Not going"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 leading-relaxed",
										children: r.notGoing
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: r.rp
								})
							]
						}, r.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4",
						children: REGION_PATHS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/continents/$slug",
							params: { slug: r.slug },
							className: "rounded-xl border border-border p-5 transition-colors duration-150 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-muted",
									children: "2026–27 path"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-3 grid gap-3 text-sm sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-subtle",
										children: "2026"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 leading-relaxed",
										children: r.y2026
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-subtle",
										children: "2027"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 leading-relaxed",
										children: r.y2027
									})] })]
								})
							]
						}, r.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: OTHER_CONTINENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: c.body
							})]
						}, c.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-xs leading-relaxed text-subtle",
				children: [
					"Sources: ",
					INDUSTRY_SOURCES.map((s) => s.name).join(" · "),
					". Public pages only. I do not paste paid IEA PDF tables or wire copy. Linear fiscal gaps are a desk model, not an MoF. Capacity that cannot load is stranded."
				]
			})
		]
	})] });
}
function Mini({ k, v, s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-mono text-lg tabular-nums",
				children: v
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-xs text-subtle",
				children: s
			})
		]
	});
}
function FiscalCard({ row, price, war }) {
	const gap = fiscalGapBn(price, row, war);
	const scale = war ? row.augProd / row.typicalProd : 1;
	const net = row.netNameplate * scale;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: row.country
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("font-mono text-lg tabular-nums", gap >= 0 ? "text-up" : "text-down"),
					children: [
						gap >= 0 ? "+" : "",
						"$",
						gap.toFixed(0),
						"bn"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-xs text-muted",
				children: [
					"BE $",
					row.beLow,
					"–",
					row.beHigh,
					" (mid $",
					row.beMid,
					") · net ",
					net.toFixed(2),
					" mb/d"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: row.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[11px] uppercase tracking-wider text-subtle",
				children: row.source
			})
		]
	});
}
//#endregion
export { FlowsPage as component };
