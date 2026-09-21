import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as allCountryBooks, nt as REGIONS, r as Route$1 } from "./router-DtQWY0v1.mjs";
import { n as formatKbpd, t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { a as rOverPYears } from "./reserves-CXPzMe0c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producers.index-DnEcM_gr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProducersIndex() {
	const tape = Route$1.useLoaderData();
	const [region, setRegion] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("reserves");
	const books = (0, import_react.useMemo)(() => {
		return [...region === "all" ? allCountryBooks() : allCountryBooks().filter((c) => c.region.slug === region)].sort((a, b) => {
			if (sort === "name") return a.name.localeCompare(b.name);
			if (sort === "production") return b.producer.productionKbpd - a.producer.productionKbpd;
			return b.producer.reservesBn - a.producer.reservesBn;
		});
	}, [region, sort]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Producers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl tracking-tight",
				children: "Every country on the atlas. The stock, the flow, the cheque."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "Continents are the map. Countries are the trade. Each book names the reserves, the barrels, the revenue stream and where the capital actually goes — or does not."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion("all"),
					className: chip(region === "all"),
					children: "All"
				}), REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion(r.slug),
					className: chip(region === r.slug),
					children: r.name
				}, r.slug))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					"reserves",
					"production",
					"name"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSort(k),
					className: chip(sort === k),
					children: k === "reserves" ? "Stock" : k === "production" ? "Flow" : "A–Z"
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-xl border border-border",
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
								children: "Region"
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
								children: "R/P"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "NOC / book"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: books.map((c) => {
						const rp = rOverPYears(c.producer.reservesBn, c.producer.productionKbpd);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/producers/$slug",
											params: { slug: c.slug },
											className: "font-medium hover:text-primary",
											children: c.name
										}),
										" ",
										c.producer.opec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "muted",
											children: "OPEC"
										}) : c.producer.opecPlus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "muted",
											children: "OPEC+"
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted",
									children: c.region.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: c.producer.reservesBn.toFixed(2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: c.producer.productionKbpd.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono tabular-nums",
									children: rp ? `${rp.toFixed(0)} yr` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted",
									children: c.producer.noc ?? "—"
								})
							]
						}, c.slug);
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-subtle",
				children: [
					books.length,
					" books. Reserves OPEC ASB 2026 (end-2025). Production EIA January 2026 crude + condensate. R/P against this book's flow. ",
					formatKbpd(books.reduce((s, c) => s + c.producer.productionKbpd, 0)),
					" shown."
				]
			})
		]
	})] });
}
function chip(on) {
	return on ? "h-10 shrink-0 rounded-sm bg-primary px-3 text-sm text-primary-fg" : "h-10 shrink-0 rounded-sm border border-border px-3 text-sm text-muted";
}
//#endregion
export { ProducersIndex as component };
