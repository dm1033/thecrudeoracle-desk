import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as SUBSTACK_TITLE } from "./router-DtQWY0v1.mjs";
import { t as Button } from "./button-Dy0OqX3H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dispatch-subscribe-CKYPsiL9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "crude-oracle-dispatch";
function DispatchSubscribe() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			setSaved(localStorage.getItem(KEY));
		} catch {
			setSaved(null);
		}
	}, []);
	function onSubmit(e) {
		e.preventDefault();
		const next = email.trim().toLowerCase();
		if (!next.includes("@") || next.length < 6) return;
		try {
			localStorage.setItem(KEY, next);
		} catch {}
		setSaved(next);
		setEmail("");
	}
	if (saved) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: [SUBSTACK_TITLE, " Substack"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl",
				children: "You are on the desk list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: [
					saved,
					" — issues live on this desk. Same voice as the briefing. RSS at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/feed.xml",
						className: "underline decoration-border underline-offset-2 hover:text-fg",
						children: "/feed.xml"
					}),
					". No buy tickets."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-sm text-muted hover:text-fg",
				onClick: () => {
					try {
						localStorage.removeItem(KEY);
					} catch {}
					setSaved(null);
				},
				children: "Use a different address"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: [SUBSTACK_TITLE, " Substack"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl",
				children: "Spare, cash, jobs. In your inbox when we wire it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "Issues run on this desk now. Leave an address and you are on the list. Public sources only. RSS if you read in a reader."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "dispatch-email",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "dispatch-email",
						type: "email",
						required: true,
						autoComplete: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@desk.com",
						className: "h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none placeholder:text-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Subscribe"
					})
				]
			})
		]
	});
}
//#endregion
export { DispatchSubscribe as t };
