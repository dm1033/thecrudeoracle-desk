import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as REGION_INDUSTRY } from "./signals-Di7Yp9Gv.mjs";
import { nt as REGIONS, rt as RESERVES_AS_OF, s as Route$5, tt as PROD_AS_OF } from "./router-DtQWY0v1.mjs";
import { n as formatKbpd, t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { a as rOverPYears } from "./reserves-CXPzMe0c.mjs";
import { c as ResponsiveContainer, i as XAxis, l as Tooltip, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/continents.index-B_bVbzjd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContinentsPage() {
	const tape = Route$5.useLoaderData();
	const chart = REGIONS.map((r) => ({
		name: r.name.replace("Asia-Pacific", "Asia-Pac"),
		production: Math.round(r.productionKbpd / 10) / 100,
		reserves: Math.round(r.reservesBn)
	}));
	const [left, setLeft] = (0, import_react.useState)(REGIONS[0].slug);
	const [right, setRight] = (0, import_react.useState)(REGIONS[1].slug);
	const a = (0, import_react.useMemo)(() => REGIONS.find((r) => r.slug === left) ?? REGIONS[0], [left]);
	const b = (0, import_react.useMemo)(() => REGIONS.find((r) => r.slug === right) ?? REGIONS[1], [right]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Atlas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl tracking-tight",
				children: "Knowledge of each continent. The reserves and the revenue streams."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "Oil is not evenly poured. The Middle East holds the stock. North America holds the flow. South America holds a museum in Venezuela and a cash machine in the pre-salt. Europe holds the benchmark. Asia holds the bid. Oceania holds LNG. I split the Middle East and Eurasia out of “Asia” because putting Ghawar in a bucket with Daqing is how people get the market wrong."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
				children: [
					"Spare, technical breakeven, fiscal breakeven and decline sit on the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/flows",
						className: "underline decoration-border underline-offset-4 hover:text-fg",
						children: "industry book"
					}),
					". Every country has a",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/producers",
						className: "underline decoration-border underline-offset-4 hover:text-fg",
						children: "producer page"
					}),
					". Antarctica is a treaty, not a barrel."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-subtle",
				children: [
					"Reserves: ",
					RESERVES_AS_OF,
					". Production: ",
					PROD_AS_OF,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-64 rounded-xl border border-border bg-surface p-3 sm:h-72",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: chart,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
								tick: {
									fill: "#9a9186",
									fontSize: 11
								},
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
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
								formatter: (v, n) => [n === "production" ? `${v} mb/d` : `${v} bn bbl`, n === "production" ? "Production" : "Reserves"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "production",
								fill: "#d8d0c4",
								radius: [
									4,
									4,
									0,
									0
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-[11px] uppercase tracking-wider text-subtle",
				children: "Production mb/d by petroleum region — the flow, not the stock"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Compare two books"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "The meeting question. Stock vs flow vs decline vs the well."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: "Left"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: left,
								onChange: (e) => setLeft(e.target.value),
								className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm",
								children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r.slug,
									children: r.name
								}, r.slug))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: "Right"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: right,
								onChange: (e) => setRight(e.target.value),
								className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm",
								children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r.slug,
									children: r.name
								}, r.slug))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {
						a,
						b
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4",
				children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/continents/$slug",
					params: { slug: r.slug },
					className: "grid gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-150 hover:border-primary/40 sm:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-muted",
								children: [
									r.continent,
									" · ",
									r.net,
									" · ",
									r.cycle
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.kicker
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-3 sm:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: "Reserves"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-mono text-lg tabular-nums",
								children: [r.reservesBn.toFixed(0), " bn"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-xs text-subtle",
								children: [r.reservesShare.toFixed(1), "% of OPEC world"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: "Production"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono text-lg tabular-nums",
								children: formatKbpd(r.productionKbpd)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-xs text-subtle",
								children: [r.productionShare.toFixed(1), "% of EIA world"]
							})
						] })]
					})]
				}, r.slug))
			})
		]
	})] });
}
function Compare({ a, b }) {
	const ia = REGION_INDUSTRY[a.slug];
	const ib = REGION_INDUSTRY[b.slug];
	const rows = [
		{
			k: "Reserves",
			av: `${a.reservesBn.toFixed(1)} bn`,
			bv: `${b.reservesBn.toFixed(1)} bn`
		},
		{
			k: "Production",
			av: formatKbpd(a.productionKbpd),
			bv: formatKbpd(b.productionKbpd)
		},
		{
			k: "R/P",
			av: rp(a),
			bv: rp(b)
		},
		{
			k: "Net",
			av: a.net,
			bv: b.net
		},
		{
			k: "Capital cycle",
			av: a.cycle,
			bv: b.cycle
		},
		{
			k: "Decline (IEA observed)",
			av: ia ? `${ia.observedDeclinePct}%` : "—",
			bv: ib ? `${ib.observedDeclinePct}%` : "—"
		},
		{
			k: "Technical BE",
			av: ia?.technicalBe ?? "—",
			bv: ib?.technicalBe ?? "—"
		},
		{
			k: "Fiscal BE",
			av: ia?.fiscalBe ?? "—",
			bv: ib?.fiscalBe ?? "—"
		},
		{
			k: "Spare",
			av: ia?.spare ?? "—",
			bv: ib?.spare ?? "—"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 overflow-x-auto rounded-xl border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[560px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-elevated font-mono text-[11px] uppercase tracking-wider text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: " "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: a.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: b.name
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-border align-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-subtle",
						children: r.k
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3",
						children: r.av
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3",
						children: r.bv
					})
				]
			}, r.k)) })]
		})
	});
}
function rp(r) {
	const n = rOverPYears(r.reservesBn, r.productionKbpd);
	return n ? `${n.toFixed(0)} yr` : "—";
}
//#endregion
export { ContinentsPage as component };
