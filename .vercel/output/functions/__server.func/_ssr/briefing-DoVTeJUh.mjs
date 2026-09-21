import { U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BRIEFINGS } from "./briefings-qBbegnq6.mjs";
import { h as Route$18 } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/briefing-DoVTeJUh.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		key: "oil",
		label: "Oil"
	},
	{
		key: "gas",
		label: "Gas"
	},
	{
		key: "supply",
		label: "Supply"
	},
	{
		key: "demand",
		label: "Demand"
	},
	{
		key: "opec",
		label: "OPEC+"
	},
	{
		key: "inventory",
		label: "Inventories"
	},
	{
		key: "geo",
		label: "Geopolitics"
	},
	{
		key: "equities",
		label: "Equities"
	},
	{
		key: "uk",
		label: "UK / North Sea"
	},
	{
		key: "chart",
		label: "The chart"
	}
];
function BriefingPage() {
	const tape = Route$18.useLoaderData();
	const [today, ...rest] = BRIEFINGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
			quotes: tape.quotes,
			note: tape.note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: ["Daily briefing · ", today.date]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl tracking-tight",
					children: today.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: today.call
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: "editorial on public sources"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed",
					children: today.bottom
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted",
						children: today[s.key]
					})] }, s.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-xs text-subtle",
					children: ["Sources: ", today.sources.map((s) => s.name).join(" · ")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"Same voice on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dispatch",
							className: "text-fg underline decoration-border underline-offset-2",
							children: "Dispatch"
						}),
						", the Crude Oracle Substack on this desk."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Archive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4",
					children: rest.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
								children: b.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-xl",
								children: b.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: b.bottom
							})
						]
					}, b.date))
				})]
			})
		})
	] });
}
//#endregion
export { BriefingPage as component };
