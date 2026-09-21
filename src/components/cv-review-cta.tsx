import { ArrowUpRight } from "lucide-react";
import {
  CV_REVIEW_NAME,
  CV_REVIEW_URL,
  CV_REWRITE_NAME,
  CV_REWRITE_URL,
} from "@/data/careers";

export function CvReviewCta({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        <a
          href={CV_REVIEW_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
        >
          CV review · {CV_REVIEW_NAME}
          <ArrowUpRight className="size-4" />
        </a>
        <a
          href={CV_REWRITE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
        >
          {CV_REWRITE_NAME}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <aside className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">CV review</p>
      <h2 className="mt-2 font-display text-2xl">Get the page read properly.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        {CV_REVIEW_NAME} reviews construction and energy CVs against the advert you are actually
        chasing — 2-page rewrite, ATS version, recruiter summary, keyword alignment. Written by
        someone who has done the jobs the page describes. No invented titles.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={CV_REVIEW_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
        >
          Open {CV_REVIEW_NAME}
          <ArrowUpRight className="size-4" />
        </a>
        <a
          href={CV_REWRITE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm"
        >
          {CV_REWRITE_NAME} · CEng MICE
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </aside>
  );
}
