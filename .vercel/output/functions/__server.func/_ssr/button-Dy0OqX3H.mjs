import { U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { Y as cn } from "./router-DtQWY0v1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Dy0OqX3H.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-opacity duration-150 disabled:opacity-40 disabled:pointer-events-none select-none", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:opacity-90",
			ghost: "bg-transparent text-fg border border-border hover:bg-elevated",
			quiet: "bg-transparent text-muted hover:text-fg"
		},
		size: {
			md: "h-11 px-4 text-sm rounded-md",
			sm: "h-9 px-3 text-sm rounded-sm",
			lg: "h-12 px-5 text-sm rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
