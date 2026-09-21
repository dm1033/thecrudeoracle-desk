import { U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as cn } from "./router-DtQWY0v1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tape-bar-BpydzyWE.js
var import_jsx_runtime = require_jsx_runtime();
function formatPrice(n, digits = 2) {
	return n.toLocaleString("en-US", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
}
function formatPct(n, digits = 2) {
	return `${n > 0 ? "+" : ""}${n.toFixed(digits)}%`;
}
function formatKbpd(n) {
	if (n >= 1e3) return `${(n / 1e3).toFixed(2)} mb/d`;
	return `${n.toLocaleString("en-US")} kb/d`;
}
function TapeBar({ quotes, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center px-2 sm:px-4",
			children: quotes.map((q) => {
				const up = q.change > 0;
				const down = q.change < 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-[7.5rem] items-baseline gap-2 px-2 py-2 sm:min-w-32 sm:px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-wider text-muted",
							children: q.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm tabular-nums",
							children: formatPrice(q.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("font-mono text-[11px] tabular-nums", up && "text-up", down && "text-down", !up && !down && "text-muted"),
							children: formatPct(q.changePct)
						})
					]
				}, q.symbol);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto max-w-6xl px-4 pb-2 font-mono text-[10px] uppercase tracking-wider text-subtle",
			children: note
		})]
	});
}
//#endregion
export { formatPrice as i, formatKbpd as n, formatPct as r, TapeBar as t };
