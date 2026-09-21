import { U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as fiscalGapBn, a as FISCAL, f as REGION_INDUSTRY } from "./signals-Di7Yp9Gv.mjs";
import { T as GRADES, U as CAPEX_REGIONS, n as Route, y as WATCHLIST } from "./router-DtQWY0v1.mjs";
import { i as formatPrice, n as formatKbpd, t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { a as rOverPYears } from "./reserves-CXPzMe0c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producers._slug-KNXZjy1i.js
var import_jsx_runtime = require_jsx_runtime();
function ProducerPage() {
	const { book, tape } = Route.useLoaderData();
	const { producer, region } = book;
	const rp = rOverPYears(producer.reservesBn, producer.productionKbpd);
	const industry = REGION_INDUSTRY[region.slug];
	const capex = CAPEX_REGIONS.find((p) => p.slug === region.slug);
	const fiscal = FISCAL.find((f) => f.country === producer.name || producer.name === "UAE" && f.country === "UAE");
	const brent = tape.quotes.find((q) => q.label === "Brent")?.price ?? 104;
	const gap = fiscal ? fiscalGapBn(brent, fiscal, true) : null;
	const grades = GRADES.filter((g) => g.country === producer.name || producer.grades.some((pg) => g.name === pg || g.name.startsWith(pg) || pg.startsWith(g.name)));
	const country = producer.name.toLowerCase();
	const nocBits = (producer.noc ?? "").toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3 && ![
		"independents",
		"majors",
		"producers",
		"listed"
	].includes(w));
	const names = WATCHLIST.filter((n) => {
		if (`${n.name} ${n.theme} ${n.stream}`.toLowerCase().includes(country)) return true;
		return nocBits.some((w) => n.name.toLowerCase().includes(w));
	}).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/producers",
						className: "hover:text-fg",
						children: "Producers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/continents/$slug",
						params: { slug: region.slug },
						className: "hover:text-fg",
						children: region.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight",
				children: producer.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					producer.opec ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: "OPEC"
					}) : producer.opecPlus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: "OPEC+"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: "non-OPEC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: region.cycle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: region.net
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-3xl text-base leading-relaxed",
				children: book.thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "Reserves",
						v: `${producer.reservesBn.toFixed(2)} bn`,
						s: producer.reservesNote ?? "OPEC ASB 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "Production",
						v: formatKbpd(producer.productionKbpd),
						s: "EIA Jan 2026 C+C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "R/P",
						v: rp ? `${rp.toFixed(0)} yr` : "—",
						s: "Against this book's flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						k: "NOC / book",
						v: producer.noc ?? "Independents",
						s: producer.grades.join(" · ")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-3 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Where the cheque goes",
						body: book.capital,
						extra: capex?.going
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Revenue stream",
						body: book.revenue,
						extra: producer.streams.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "How I trade it",
						body: book.trade
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "What breaks it",
						body: book.risk,
						extra: industry?.spare
					})
				]
			}),
			fiscal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Fiscal at the tape"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: fiscal.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								k: "Budget BE",
								v: `$${fiscal.beLow}–${fiscal.beHigh}`,
								s: `mid $${fiscal.beMid}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								k: "Aug volumes",
								v: `${fiscal.augProd} mb/d`,
								s: "IEA Aug 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								k: "Nameplate net",
								v: `${fiscal.netNameplate} mb/d`,
								s: "Export-style"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								k: `Gap @ $${formatPrice(brent, 0)} Brent`,
								v: gap == null ? "—" : `${gap >= 0 ? "+" : ""}$${formatPrice(gap, 0)}bn`,
								s: "War volumes · crude-only linear"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-subtle",
						children: "Linear, crude-only. Not a ministry model. Toggle lives on the industry book."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: ["No IMF-style oil fiscal cell for this name. ", industry?.fiscalBe ?? "Read the region book."]
			}),
			grades.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Export grades"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: grades.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: g.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-xs text-muted",
							children: [
								g.api.toFixed(1),
								"° API · ",
								g.sulphurPct.toFixed(2),
								"% S · ",
								g.marker
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: g.note
						})
					]
				}, g.name))
			})] }) : null,
			names.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 font-display text-2xl",
					children: "Listed expressions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Watchlist, not a recommendation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3",
					children: names.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg",
							children: [
								n.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm text-muted",
									children: n.ticker
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: n.stream
						})]
					}, n.ticker))
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-xs text-subtle",
				children: [
					"Region ",
					region.name,
					" · cycle ",
					region.cycle,
					" · ",
					region.sources.map((s) => s.name).join(" · ")
				]
			})
		]
	})] });
}
function Kpi({ k, v, s }) {
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
function Block({ title, body, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: body
			}),
			extra ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: extra
			}) : null
		]
	});
}
//#endregion
export { ProducerPage as component };
