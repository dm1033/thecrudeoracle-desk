import { U as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { A as CV_REVIEW_NAME, M as CV_REWRITE_NAME, N as CV_REWRITE_URL, j as CV_REVIEW_URL } from "./router-DtQWY0v1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-review-cta-Jwe1x4_H.js
var import_jsx_runtime = require_jsx_runtime();
function CvReviewCta({ compact = false }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CV_REVIEW_URL,
			target: "_blank",
			rel: "noreferrer",
			className: "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
			children: [
				"CV review · ",
				CV_REVIEW_NAME,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CV_REWRITE_URL,
			target: "_blank",
			rel: "noreferrer",
			className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
			children: [CV_REWRITE_NAME, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wider text-muted",
				children: "CV review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl",
				children: "Get the page read properly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
				children: [CV_REVIEW_NAME, " reviews construction and energy CVs against the advert you are actually chasing — 2-page rewrite, ATS version, recruiter summary, keyword alignment. Written by someone who has done the jobs the page describes. No invented titles."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CV_REVIEW_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
					children: [
						"Open ",
						CV_REVIEW_NAME,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CV_REWRITE_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm",
					children: [
						CV_REWRITE_NAME,
						" · CEng MICE",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					]
				})]
			})
		]
	});
}
//#endregion
export { CvReviewCta as t };
