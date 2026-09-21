import { U as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Rss, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { $ as DISPATCH_PITCH, Q as DISPATCH_ISSUES, a as Route$3, et as SUBSTACK_TITLE } from "./router-DtQWY0v1.mjs";
import { t as TapeBar } from "./tape-bar-BpydzyWE.mjs";
import { t as Badge } from "./badge-zLqLgsUH.mjs";
import { t as CvReviewCta } from "./cv-review-cta-Jwe1x4_H.mjs";
import { t as DispatchSubscribe } from "./dispatch-subscribe-CKYPsiL9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dispatch.index-V93xHHXB.js
var import_jsx_runtime = require_jsx_runtime();
function DispatchIndex() {
	const tape = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapeBar, {
			quotes: tape.quotes,
			note: tape.note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: [SUBSTACK_TITLE, " · Substack"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Dispatch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted",
					children: DISPATCH_PITCH
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/feed.xml",
						className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, { className: "size-4" }), "RSS"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/jobs",
						className: "inline-flex h-11 items-center rounded-md border border-border px-3 text-sm",
						children: "Jobs · Earn $$$"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DispatchSubscribe, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-wider text-muted",
					children: "Issues"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3",
					children: DISPATCH_ISSUES.map((issue) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dispatch/$slug",
						params: { slug: issue.slug },
						className: "rounded-xl border border-border bg-bg p-5 hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "muted",
									children: issue.kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] uppercase tracking-wider text-subtle",
									children: [
										issue.date,
										" · ",
										issue.minutes,
										" min"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl",
								children: issue.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: issue.dek
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 inline-flex items-center gap-2 text-sm text-muted",
								children: ["Read the issue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, issue.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvReviewCta, {})
		})
	] });
}
//#endregion
export { DispatchIndex as component };
