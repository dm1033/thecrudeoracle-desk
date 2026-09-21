import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createServerFn } from "./ssr.mjs";
import { n as TODAY } from "./briefings-qBbegnq6.mjs";
import { h as SIGNALS, i as DESK_VIEW } from "./signals-Di7Yp9Gv.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { P as EARN_ROWS, Q as DISPATCH_ISSUES, S as DESK_AS_OF, X as createSsrRpc, Y as cn, at as WORLD_RESERVES_BN, b as DESK_SOURCES, g as Route$20, it as WORLD_PROD_KBPD, nt as REGIONS, w as TODAY_PRINTS } from "./router-DtQWY0v1.mjs";
import { i as formatPrice, n as formatKbpd, r as formatPct, t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis } from "../_libs/recharts+[...].mjs";
import { t as Button } from "./button-Dy0OqX3H.mjs";
import { t as CALENDAR } from "./calendar-B72FkF9n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKMu9VYz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var askOracle = createServerFn({ method: "POST" }).validator((input) => {
	const prompt = (input?.prompt ?? "").toString().slice(0, 800).trim();
	if (prompt.length < 8) throw new Error("Ask a real question.");
	return { prompt };
}).handler(createSsrRpc("f8084f9931420a75252bce4421d0ceec8d6630fe81e25f8b41b42fff747738a2"));
function AskOracle() {
	const [prompt, setPrompt] = (0, import_react.useState)("");
	const [text, setText] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onAsk(e) {
		e.preventDefault();
		setBusy(true);
		setError("");
		setText("");
		try {
			const res = await askOracle({ data: { prompt } });
			if (res.ok) setText(res.text);
			else setError(res.error);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Desk is dark.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Ask the desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl",
				children: "The Oracle answers in the open."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "One question. Public sources. No order tickets. I will not tell you to buy."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onAsk,
				className: "mt-4 flex flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "oracle-q",
						children: "Question"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "oracle-q",
						value: prompt,
						onChange: (e) => setPrompt(e.target.value),
						placeholder: "Does the East-West repair kill the Hormuz premium?",
						className: "h-12 flex-1 rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-subtle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: busy || prompt.trim().length < 8,
						className: "h-12 sm:w-36",
						children: busy ? "Thinking" : "Ask"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-down",
				children: error
			}) : null,
			text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 whitespace-pre-wrap border-t border-border pt-4 text-sm leading-relaxed text-fg",
				children: text
			}) : null
		]
	});
}
function PriceChart({ series }) {
	const data = series.filter((p) => p.wti != null || p.brent != null).map((p) => ({
		...p,
		label: new Date(p.t).toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short"
		})
	}));
	if (data.length < 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border border-border bg-surface px-4 py-10 text-center text-sm text-muted",
		children: "Chart series unavailable. The tape still stands."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 w-full rounded-xl border border-border bg-surface p-3 sm:h-80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
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
						dataKey: "label",
						tick: {
							fill: "#9a9186",
							fontSize: 11,
							fontFamily: "IBM Plex Mono"
						},
						tickLine: false,
						axisLine: false,
						minTickGap: 28
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: ["auto", "auto"],
						tick: {
							fill: "#9a9186",
							fontSize: 11,
							fontFamily: "IBM Plex Mono"
						},
						tickLine: false,
						axisLine: false,
						width: 42
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "#141210",
							border: "1px solid #2c2722",
							borderRadius: 10,
							color: "#f2ebe3",
							fontFamily: "IBM Plex Sans",
							fontSize: 12
						},
						formatter: (value, name) => [typeof value === "number" ? `$${value.toFixed(2)}` : "—", name === "wti" ? "WTI" : "Brent"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "brent",
						stroke: "#d8d0c4",
						strokeWidth: 1.6,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "wti",
						stroke: "#7dba9a",
						strokeWidth: 1.6,
						dot: false
					})
				]
			})
		})
	});
}
function PrintsBoard({ prints = TODAY_PRINTS, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: compact ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-3 md:grid-cols-2",
		children: prints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-border bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
					children: [
						p.source,
						" · ",
						p.last
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-lg leading-snug",
					children: p.headline
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: p.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-[11px] uppercase tracking-wider text-subtle",
					children: ["Next ", p.next]
				})
			]
		}, p.id))
	});
}
function Home() {
	const tape = Route$20.useLoaderData();
	const wti = tape.quotes.find((q) => q.label === "WTI");
	const brent = tape.quotes.find((q) => q.label === "Brent");
	const spread = wti && brent ? brent.price - wti.price : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
			quotes: tape.quotes,
			note: tape.note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10 lg:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: [
						"Desk · ",
						TODAY.date,
						" · ",
						tape.dataType,
						" tape"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl",
					children: TODAY.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
					children: DESK_VIEW.stance
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: DESK_VIEW.band
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: DESK_VIEW.horizon
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/briefing",
							className: "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
							children: ["Today's briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/flows",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
							children: "Industry book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/continents",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
							children: "Continent atlas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/producers",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
							children: "Country books"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/jobs",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
							children: "Jobs · Earn $$$"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dispatch",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
							children: "Dispatch"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "WTI",
							value: wti ? `$${formatPrice(wti.price)}` : "—",
							delta: wti?.changePct
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Brent",
							value: brent ? `$${formatPrice(brent.price)}` : "—",
							delta: brent?.changePct
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Brent–WTI",
							value: spread != null ? `$${formatPrice(spread)}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "World proved",
							value: `${WORLD_RESERVES_BN.toFixed(0)} bn`,
							hint: "OPEC ASB 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Production",
							value: formatKbpd(WORLD_PROD_KBPD),
							hint: "EIA Jan 2026"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] uppercase tracking-wider text-muted",
							children: ["Today's books · ", DESK_AS_OF]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl sm:text-3xl",
							children: "What the canonical sources actually printed."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sources",
							className: "hidden text-sm text-muted hover:text-fg sm:inline",
							children: "Register"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: "EIA, IEA, OPEC, Baker Hughes, Dallas Fed — last print, next window. Delayed tape is delayed. I do not paste Bloomberg."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintsBoard, { compact: true })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "WTI and Brent, six months"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
					children: "Bone Brent · Sage WTI"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, { series: tape.series })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Atlas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "Every continent. The stock and the cash."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/continents",
						className: "hidden text-sm text-muted hover:text-fg sm:inline",
						children: "Open atlas"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/continents/$slug",
						params: { slug: r.slug },
						className: "rounded-xl border border-border bg-bg p-4 transition-colors duration-150 hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-muted",
								children: [
									r.net,
									" · ",
									r.cycle
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
								children: r.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-mono text-xs tabular-nums text-subtle",
								children: [
									r.reservesBn.toFixed(0),
									" bn · ",
									formatKbpd(r.productionKbpd)
								]
							})
						]
					}, r.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Industry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "Spare is not spare if it cannot load."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/flows",
						className: "hidden text-sm text-muted hover:text-fg sm:inline",
						children: "Open the book"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Effective OPEC+ spare 0.22 mb/d. Dallas Fed new-well $66. Natural decline 8% if the cheque stops. Two breakevens on every barrel — the well and the budget. Built for the people who actually move oil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/flows",
							className: "rounded-xl border border-border bg-surface p-4 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: "Capacity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl",
									children: "IEA spare table"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Saudi 5.97 vs 12.11. The gap is stranded, not spare."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/flows",
							className: "rounded-xl border border-border bg-surface p-4 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: "Breakeven"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl",
									children: "Well vs ministry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Guyana $22 lifting. Permian new-well $67. Saudi fiscal ~$90."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/flows",
							className: "rounded-xl border border-border bg-surface p-4 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: "Decline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl",
									children: "5.5 mb/d a year"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Europe 9.7%. Middle East 1.8%. Shale 35% in year one without pads."
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "For the floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "Built for people who move oil."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/trade",
								className: "rounded-xl border border-border bg-bg p-5 hover:border-primary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
										children: "Traders"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl",
										children: "Tape, crack, grades, chokes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "3-2-1 and HO crack on delayed marks. Export assays. Hormuz throughput vs bypass. Wednesday EIA."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/flows",
								className: "rounded-xl border border-border bg-bg p-5 hover:border-primary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
										children: "Operators / NOCs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl",
										children: "Spare, decline, capex, fiscal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "Effective spare 0.22. Natural decline 8%. $570bn upstream, 90% of it the decline tax. Two breakevens."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/invest",
								className: "rounded-xl border border-border bg-bg p-5 hover:border-primary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
										children: "Investors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl",
										children: "Streams, not slogans"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "Watchlist mapped to barrels and cash. Continent revenue. No buy tickets. Name the stream or leave."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/jobs",
								className: "rounded-xl border border-border bg-bg p-5 hover:border-primary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
										children: "People · Earn $$$"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl",
										children: "Jobs, transfer, CV review"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "TW and civils already do this work. Rewrite the nouns. Search Rigzone in their language."
									})
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Earn $$$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "How the skill transfers. Then the cheque."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/jobs",
						className: "hidden text-sm text-muted hover:text-fg sm:inline",
						children: "Open jobs"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Public pay books. Not offers. Pick a background, rewrite the nouns, search the boards. CV review on Construct CV."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: EARN_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/jobs",
						search: {
							from: row.transferId,
							basin: row.basin,
							q: row.to
						},
						className: "rounded-xl border border-border bg-surface p-4 hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: row.from
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl",
								children: row.to
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs tabular-nums",
								children: row.cheque
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: row.note
							})
						]
					}, row.transferId))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Crude Oracle view"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "Eight tells. One desk."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: SIGNALS.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/signals",
							className: "rounded-xl border border-border bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: s.stance === "bull" ? "up" : s.stance === "bear" ? "down" : s.stance === "risk" ? "warn" : "muted",
									children: s.stance
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm leading-relaxed text-muted",
								children: s.evidence
							})]
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/signals",
						className: "mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-fg",
						children: ["Full signal board ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Cadence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: "What prints this week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-border rounded-xl border border-border bg-surface",
						children: CALENDAR.slice(0, 5).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: e.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									children: e.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: e.why
								})
							]
						}, e.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-subtle",
						children: [DESK_SOURCES.length, " canonical sources on the register. Public first. Delayed quotes labelled delayed."]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dispatch",
					className: "rounded-xl border border-border bg-surface p-5 hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-wider text-muted",
							children: "The Crude Oracle Substack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: DISPATCH_ISSUES[0]?.title ?? "Dispatch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: DISPATCH_ISSUES[0]?.dek ?? "First-person issues on this desk."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://linkedinconstructioncvprofile.com/",
					target: "_blank",
					rel: "noreferrer",
					className: "rounded-xl border border-border bg-surface p-5 hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-wider text-muted",
							children: "CV review · Construct CV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: "Get the page read properly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Construction and energy CVs against the advert you are actually chasing. Then search the boards in their nouns."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskOracle, {})]
		})
	] });
}
function Stat({ label, value, delta, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-subtle",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-lg tabular-nums",
				children: value
			}),
			typeof delta === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-mono text-xs tabular-nums", delta > 0 ? "text-up" : delta < 0 ? "text-down" : "text-muted"),
				children: formatPct(delta)
			}) : null
		]
	});
}
//#endregion
export { Home as component };
