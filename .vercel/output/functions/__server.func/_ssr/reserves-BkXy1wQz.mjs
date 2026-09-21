import { U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$10 } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { a as rOverPYears, i as WORLD_RESERVES_OPEC, n as OPEC_RESERVES, r as SOURCE_SPLIT, t as OPEC_MEMBERS_SHARE_NOTE } from "./reserves-CXPzMe0c.mjs";
import { c as ResponsiveContainer, i as XAxis, l as Tooltip, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reserves-BkXy1wQz.js
var import_jsx_runtime = require_jsx_runtime();
function ReservesPage() {
	const tape = Route$10.useLoaderData();
	const top = OPEC_RESERVES.slice(0, 12).map((r) => ({
		name: r.country.replace("United Arab Emirates", "UAE").replace("United States", "US"),
		bn: r.bn
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Stock"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl tracking-tight",
				children: [WORLD_RESERVES_OPEC.toFixed(1), " billion barrels. Official. End-2025."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: [OPEC_MEMBERS_SHARE_NOTE, " Venezuela is a museum. Saudi Arabia is a tap. The US is a machine. Canada's real number is the oil sands — OPEC leaves them out on purpose."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-72 rounded-xl border border-border bg-surface p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: top,
						layout: "vertical",
						margin: {
							top: 8,
							right: 16,
							left: 8,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								tick: {
									fill: "#9a9186",
									fontSize: 11
								},
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								type: "category",
								dataKey: "name",
								width: 88,
								tick: {
									fill: "#f2ebe3",
									fontSize: 11
								},
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "#141210",
									border: "1px solid #2c2722",
									borderRadius: 10,
									color: "#f2ebe3"
								},
								formatter: (v) => [`${v} bn bbl`, "Proved"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "bn",
								fill: "#d8d0c4",
								radius: [
									0,
									4,
									4,
									0
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Where the books disagree"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-3",
				children: SOURCE_SPLIT.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-mono text-sm tabular-nums",
							children: [
								"OPEC ",
								s.opec,
								" · broader ",
								s.broader
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: s.source
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Top 25 proved crude — OPEC ASB 2026"
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
								children: "#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Country"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Bn bbl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "kb/d"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "R/P years"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Book"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: OPEC_RESERVES.map((r) => {
						const rp = rOverPYears(r.bn, r.productionKbpd);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-subtle",
									children: r.rank
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									children: [
										r.country,
										" ",
										r.opec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "muted",
											children: "OPEC"
										}) : null,
										r.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-subtle",
											children: r.note
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: r.bn.toFixed(2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: r.productionKbpd.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: rp ? rp.toFixed(0) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted",
									children: r.region
								})
							]
						}, r.country);
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-subtle",
				children: "R/P uses EIA January 2026 production against OPEC end-2025 reserves. It is a ratio, not a forecast. Venezuela's centuries are a warning, not an endowment."
			})
		]
	})] });
}
//#endregion
export { ReservesPage as component };
