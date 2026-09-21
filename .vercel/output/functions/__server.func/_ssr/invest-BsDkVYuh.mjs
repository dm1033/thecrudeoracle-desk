import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BOOKS, p as Route$13, v as ETFS, y as WATCHLIST } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invest-BsDkVYuh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InvestPage() {
	const tape = Route$13.useLoaderData();
	const [book, setBook] = (0, import_react.useState)("All");
	const names = (0, import_react.useMemo)(() => book === "All" ? WATCHLIST : WATCHLIST.filter((n) => n.book === book), [book]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "Invest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl tracking-tight",
				children: "Watchlist, not a recommendation. Revenue streams, not slogans."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "I monitor names that map onto the barrels and the cash: shale FCF, pre-salt dividends, LNG tolls, midstream pipes, tanker tonne-miles, USGC cracks, UKCS tax. I do not tell you to buy them. If a house cannot name the stream, it does not belong on this desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-2 overflow-x-auto pb-2",
				children: ["All", ...BOOKS].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setBook(b),
					className: book === b ? "h-10 shrink-0 rounded-sm bg-primary px-3 text-sm text-primary-fg" : "h-10 shrink-0 rounded-sm border border-border px-3 text-sm text-muted",
					children: b
				}, b))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: names.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl",
								children: [
									n.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-sm text-muted",
										children: [
											n.ticker,
											" · ",
											n.venue
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "muted",
								children: n.book
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: n.theme
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid gap-3 text-sm sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "Stream"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: n.stream })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "Catalyst"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: n.catalyst })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "Risk"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: n.risk })] })
							]
						})
					]
				}, n.ticker))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Wrappers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "ETFs are a roll yield in a suit. USO is not a barrel of Cushing crude."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: ETFS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm",
							children: e.ticker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg",
							children: e.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: e.tracks
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: e.risk
						})
					]
				}, e.ticker))
			})
		]
	})] });
}
//#endregion
export { InvestPage as component };
