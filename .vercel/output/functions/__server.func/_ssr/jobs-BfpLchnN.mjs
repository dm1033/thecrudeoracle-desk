import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight, r as Search } from "../_libs/lucide-react.mjs";
import { B as payFor, F as JOB_BOARDS, I as JOB_REGIONS, L as PAY_BANDS, P as EARN_ROWS, R as ROLE_BOOK, V as searchRoles, f as Route$12, k as CAREER_AS_OF, z as TRANSFERS } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { t as CvReviewCta } from "./cv-review-cta-Jwe1x4_H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-BfpLchnN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function JobsPage() {
	const tape = Route$12.useLoaderData();
	const search = Route$12.useSearch();
	const navigate = useNavigate({ from: "/jobs" });
	const q = search.q ?? "";
	const regionId = search.basin ?? "all";
	const transferId = search.from ?? "all";
	function patch(next) {
		navigate({
			search: (prev) => {
				const merged = {
					...prev,
					...next
				};
				return {
					q: merged.q || void 0,
					basin: !merged.basin || merged.basin === "all" ? void 0 : merged.basin,
					from: !merged.from || merged.from === "all" ? void 0 : merged.from
				};
			},
			replace: true
		});
	}
	const region = JOB_REGIONS.find((r) => r.id === regionId);
	const transfer = TRANSFERS.find((t) => t.id === transferId);
	const roles = (0, import_react.useMemo)(() => searchRoles(q, regionId, transferId), [
		q,
		regionId,
		transferId
	]);
	const query = (q.trim() || transfer?.targets[0] || roles[0]?.query || "brownfield construction manager SIMOPS").trim();
	const where = region?.where ?? "Houston, TX";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
			quotes: tape.quotes,
			note: tape.note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: [
						"Jobs · ",
						CAREER_AS_OF,
						" · Earn $$$"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl",
					children: "The barrels decide the jobs. Rewrite the nouns. Take the cheque."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-muted",
					children: "Oil-industry search in their language, not yours. Temporary works, civils, HV and HSE already do this work. Rigzone, Oil and Gas Job Search, Energy Jobline, NES, LinkedIn, Indeed — opened on the translated query. Pay from public books. CV review on Construct CV."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvReviewCta, { compact: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 rounded-xl border border-border bg-surface p-4 sm:p-5",
					onSubmit: (e) => e.preventDefault(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "job-q",
							children: "Role or skill"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 lg:flex-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 flex-1 items-center gap-2 rounded-md border border-border bg-bg px-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "job-q",
										value: q,
										onChange: (e) => patch({ q: e.target.value }),
										placeholder: "Brownfield, HUC, drilling, SIMOPS, petroleum…",
										className: "h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-subtle",
										suppressHydrationWarning: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Basin",
									value: regionId,
									onChange: (e) => patch({ basin: e.target.value }),
									className: "h-11 rounded-md border border-border bg-bg px-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All basins"
									}), JOB_REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: r.id,
										children: r.name
									}, r.id))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Your background",
									value: transferId,
									onChange: (e) => patch({ from: e.target.value }),
									className: "h-11 rounded-md border border-border bg-bg px-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "Your background"
									}), TRANSFERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t.id,
										children: t.from
									}, t.id))]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-mono text-[11px] uppercase tracking-wider text-subtle",
							children: ["Search launches · ", query]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: JOB_BOARDS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: b.search(query, where),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-11 items-center gap-1.5 rounded-md border border-border px-3 text-sm hover:border-primary/40",
								children: [b.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted" })]
							}, b.id))
						})
					]
				}),
				transfer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-wider text-muted",
							children: "Transfer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: transfer.from
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
							children: transfer.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm leading-relaxed",
							children: transfer.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2 sm:grid-cols-2",
							children: transfer.rewrite.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs leading-relaxed",
								children: line
							}, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: transfer.targets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => patch({ q: t }),
								className: "h-10 rounded-sm border border-border px-3 text-sm text-muted hover:text-fg",
								children: t
							}, t))
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3",
					children: TRANSFERS.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => patch({ from: t.id }),
						className: "rounded-xl border border-border bg-surface p-4 text-left hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: "Transfer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-xl",
								children: t.from
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
								children: t.blurb
							})
						]
					}, t.id))
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
						children: "Earn $$$ · skill transfer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "You already do the work. They advertise it in another language."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Public pay books, not offers. Pick your background. The search rewrites the query. Then open the boards."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-xl border border-border bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[640px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: "You wrote"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: "They advertise"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: "Cheque"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: " "
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: EARN_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 align-top",
										children: row.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 align-top",
										children: row.to
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 align-top font-mono text-xs tabular-nums",
										children: row.cheque
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 align-top",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "text-sm text-muted hover:text-fg",
											onClick: () => patch({
												from: row.transferId,
												basin: row.basin,
												q: row.to
											}),
											children: "Search"
										})
									})
								]
							}, row.transferId)) })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: "Role book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-1 font-display text-2xl sm:text-3xl",
					children: [roles.length, " roles · search the boards, do not wait on a feed."]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden font-mono text-[11px] uppercase tracking-wider text-subtle sm:block",
					children: [ROLE_BOOK.length, " on the desk"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3",
				children: roles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-border bg-surface p-5 text-sm text-muted",
					children: "Nothing on that cut. Clear the basin or the background, or search a noun they actually advertise — brownfield, HUC, SIMOPS, drilling."
				}) : roles.map((r) => {
					const pay = payFor(r.payId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: r.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "muted",
									children: r.discipline
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.why
							}),
							pay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-sm tabular-nums",
								children: [
									pay.band,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"· ",
											pay.region,
											" · ",
											pay.source
										]
									})
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: JOB_BOARDS.slice(0, 4).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: b.search(r.query, where),
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-10 items-center gap-1 rounded-sm border border-border px-3 text-sm text-muted hover:text-fg",
									children: [b.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								}, b.id))
							})
						]
					}, r.id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-wider text-muted",
						children: "Earn $$$"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl",
						children: "Public pay books. Not an offer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: "BLS, Rigzone, Robert Half 2026, OneSource 2026, ARAM Gulf Aug 2026. Ranges, not tickets. Basin premiums and tax treatment sit on top. I do not invent a day-rate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 md:grid-cols-2",
						children: PAY_BANDS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-bg p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg",
										children: p.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "muted",
										children: p.region
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-mono text-sm tabular-nums",
									children: p.band
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: p.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-flex items-center gap-1 text-sm text-muted hover:text-fg",
									children: [p.source, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})
							]
						}, p.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: "Hiring map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl sm:text-3xl",
					children: "Follow the capital, then the board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 lg:grid-cols-3",
					children: JOB_REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.hiring
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: r.hubs.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: h.url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-10 items-center rounded-sm border border-border px-3 text-sm text-muted hover:text-fg",
									children: h.name
								}, h.url))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-4 text-sm text-muted hover:text-fg",
								onClick: () => patch({ basin: r.id }),
								children: "Search this basin"
							})
						]
					}, r.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvReviewCta, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs leading-relaxed text-subtle",
					children: [
						"Not a recruitment agency. Board links leave this desk. Pay bands are public ranges, not offers. Construct CV is a separate review service. Read the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "underline decoration-border underline-offset-2 hover:text-fg",
							children: "method"
						}),
						"."
					]
				})]
			})
		})
	] });
}
//#endregion
export { JobsPage as component };
