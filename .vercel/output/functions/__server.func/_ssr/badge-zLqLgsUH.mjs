import { U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as cn } from "./router-DtQWY0v1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-zLqLgsUH.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ children, tone = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider", {
			neutral: "text-primary border-border",
			up: "text-up border-up/30",
			down: "text-down border-down/30",
			warn: "text-warn border-warn/30",
			muted: "text-muted border-border"
		}[tone], className),
		children
	});
}
//#endregion
export { Badge as t };
