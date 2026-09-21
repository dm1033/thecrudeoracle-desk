import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as GRADE_NOTE, T as GRADES, Y as cn, c as Route$6 } from "./router-DtQWY0v1.mjs";
import { i as formatPrice, t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { n as INSTRUMENTS, t as CALENDAR } from "./calendar-B72FkF9n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trade-BDa6jree.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function crack321(cl, rb, ho) {
	return 28 * rb + 14 * ho - cl;
}
function TradePage() {
	const tape = Route$6.useLoaderData();
	const wti = tape.quotes.find((q) => q.label === "WTI")?.price ?? 100.87;
	const rbMark = tape.quotes.find((q) => q.label === "RBOB")?.price ?? 3.44;
	const hoMark = tape.quotes.find((q) => q.label === "ULSD")?.price ?? 5.06;
	const [barrels, setBarrels] = (0, import_react.useState)(1e3);
	const [px, setPx] = (0, import_react.useState)(wti);
	const [cl, setCl] = (0, import_react.useState)(wti);
	const [rb, setRb] = (0, import_react.useState)(rbMark);
	const [ho, setHo] = (0, import_react.useState)(hoMark);
	const notion = (0, import_react.useMemo)(() => barrels * px, [barrels, px]);
	const crack = (0, import_react.useMemo)(() => crack321(cl, rb, ho), [
		cl,
		rb,
		ho
	]);
	const dieselCrack = (0, import_react.useMemo)(() => ho * 42 - cl, [ho, cl]);
	const gasCrack = (0, import_react.useMemo)(() => rb * 42 - cl, [rb, cl]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Trade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl tracking-tight",
				children: "Own the contract you mean. Futures are not ETFs. ETFs are not barrels."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "Six billion virtual barrels trade against a hundred million physical ones. I care about the physical. I use the virtual. Delayed marks on this desk are not for execution."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Barrel calculator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Notional at the mark. CL is $10 per $0.01 per 1,000 bbl."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-4 block text-xs uppercase tracking-wider text-subtle",
							htmlFor: "bbl",
							children: "Barrels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "bbl",
							type: "number",
							min: 1,
							value: barrels,
							onChange: (e) => setBarrels(Number(e.target.value) || 0),
							className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 font-mono"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-3 block text-xs uppercase tracking-wider text-subtle",
							htmlFor: "px",
							children: "$/bbl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "px",
							type: "number",
							step: "0.01",
							value: px,
							onChange: (e) => setPx(Number(e.target.value) || 0),
							className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-3 font-mono"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid grid-cols-2 gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Notional"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-mono text-lg tabular-nums",
								children: ["$", formatPrice(notion, 0)]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "$0.01 move"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-lg tabular-nums",
									children: ["$", formatPrice(barrels * .01, 0)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-xs text-subtle",
									children: "per $0.01 move · $10 per 1,000 bbl"
								})
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "3-2-1 crack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Two gasoline, one distillate, three crude. 28×RBOB + 14×HO − CL. Delayed tape, not a screen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs uppercase tracking-wider text-subtle",
									htmlFor: "cl",
									children: ["CL $/bbl", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "cl",
										type: "number",
										step: "0.01",
										value: cl,
										onChange: (e) => setCl(Number(e.target.value) || 0),
										className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs uppercase tracking-wider text-subtle",
									htmlFor: "rb",
									children: ["RB $/gal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "rb",
										type: "number",
										step: "0.001",
										value: rb,
										onChange: (e) => setRb(Number(e.target.value) || 0),
										className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs uppercase tracking-wider text-subtle",
									htmlFor: "ho",
									children: ["HO $/gal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "ho",
										type: "number",
										step: "0.001",
										value: ho,
										onChange: (e) => setHo(Number(e.target.value) || 0),
										className: "mt-1 h-11 w-full rounded-md border border-border bg-elevated px-2 font-mono text-sm text-fg"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid grid-cols-3 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "3-2-1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: cn("font-mono text-lg tabular-nums", crack >= 0 ? "text-up" : "text-down"),
									children: ["$", formatPrice(crack)]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "HO crack"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-lg tabular-nums",
									children: ["$", formatPrice(dieselCrack)]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "RB crack"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-lg tabular-nums",
									children: ["$", formatPrice(gasCrack)]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-subtle",
							children: "HO × 42 − CL is the diesel scream in $/bbl. In 2026 that is the book, not the 3-2-1 average."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Calendar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-border rounded-xl border border-border bg-surface",
				children: CALENDAR.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 px-4 py-3 sm:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-subtle sm:col-span-3",
						children: e.when
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: e.why
						})]
					})]
				}, e.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Instruments"
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
								children: "Contract"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Unit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Desk note"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: INSTRUMENTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: i.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: i.home
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-muted",
								children: i.unit
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: i.note
							})
						]
					}, i.name)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Export grades"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm text-muted",
				children: GRADE_NOTE
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
								children: "Grade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Region"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "API"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "S %"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Marker"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Home"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: GRADES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: g.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: g.country
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: g.api.toFixed(1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: g.sulphurPct.toFixed(2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: g.marker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: g.home
							})
						]
					}, g.name)) })]
				})
			})
		]
	})] });
}
//#endregion
export { TradePage as component };
