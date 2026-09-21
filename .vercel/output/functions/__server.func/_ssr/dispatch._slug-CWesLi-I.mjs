import { i as __toESM } from "../_runtime.mjs";
import { H as require_react, U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowLeft } from "../_libs/lucide-react.mjs";
import { et as SUBSTACK_TITLE, i as Route$2 } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { t as CvReviewCta } from "./cv-review-cta-Jwe1x4_H.mjs";
import { t as DispatchSubscribe } from "./dispatch-subscribe-CKYPsiL9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dispatch._slug-CWesLi-I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShareIssue({ title, path }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [href, setHref] = (0, import_react.useState)(path);
	(0, import_react.useEffect)(() => {
		const url = new URL(path, window.location.origin).toString();
		setHref(url);
	}, [path]);
	const tweet = `https://x.com/intent/tweet?text=${encodeURIComponent(`${title} — The Crude Oracle`)}&url=${encodeURIComponent(href)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: tweet,
			target: "_blank",
			rel: "noreferrer",
			className: "inline-flex h-11 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg",
			children: "Share on X"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "inline-flex h-11 items-center rounded-md border border-border px-3 text-sm text-muted hover:text-fg",
			onClick: async () => {
				try {
					await navigator.clipboard.writeText(href);
					setCopied(true);
					window.setTimeout(() => setCopied(false), 1600);
				} catch {
					setCopied(false);
				}
			},
			children: copied ? "Copied" : "Copy link"
		})]
	});
}
function DispatchIssuePage() {
	const { issue, tape } = Route$2.useLoaderData();
	const showCv = issue.tags.includes("jobs") || issue.tags.includes("transfer") || issue.tags.includes("substack");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
		quotes: tape.quotes,
		note: tape.note
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dispatch",
				className: "inline-flex items-center gap-2 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Substack"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-mono text-[11px] uppercase tracking-wider text-muted",
				children: [
					SUBSTACK_TITLE,
					" Substack · ",
					issue.date,
					" · ",
					issue.minutes,
					" min"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "neutral",
					children: issue.kicker
				}), issue.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "muted",
					children: t
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl tracking-tight",
				children: issue.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: issue.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareIssue, {
					title: issue.title,
					path: `/dispatch/${issue.slug}`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8",
				children: issue.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: s.h
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed text-muted",
					children: s.p
				})] }, s.h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-base leading-relaxed",
				children: issue.closer
			}),
			showCv ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvReviewCta, {})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DispatchSubscribe, {})
			})
		]
	})] });
}
//#endregion
export { DispatchIssuePage as component };
