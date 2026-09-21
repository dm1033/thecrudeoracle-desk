import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Method</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">The Crude Oracle</h1>
      <p className="mt-5 text-base leading-relaxed text-muted">
        A free oil-industry desk. Punchy. First person. No hedge language. Built for traders,
        operators, NOCs and investors who open a screen before the EIA print and after a Hormuz
        headline. Not a magazine. A book.
      </p>
      <h2 className="mt-10 font-display text-2xl">What I will not do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
        <li>Tell you to buy or sell a security or a contract.</li>
        <li>Label delayed Yahoo/CME/ICE marks as live licensed data.</li>
        <li>Blend OPEC conventional reserves with Canadian oil sands without a footnote.</li>
        <li>Paste paid wire copy. Public sources, own words.</li>
        <li>Mix a lifting cost with a new-well breakeven with a fiscal breakeven. Three different numbers.</li>
        <li>Call a nameplate gap “spare” when the barrels cannot load.</li>
      </ul>
      <h2 className="mt-10 font-display text-2xl">Books on this desk</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Reserves: OPEC Annual Statistical Bulletin 2026, Table 3.1 (end-2025). Production: EIA
        International Energy Statistics, January 2026, crude plus condensate. Tape: delayed public
        futures. Hormuz seaborne share: IEA 2025 (19.87 mb/d oil). Saudi 2025 oil-export revenue:
        GaStat via public reporting. R/P is a ratio against those two books, not a remaining-life
        forecast.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Industry book: IEA Oil Market Report September 2026 (spare, loadings, 2026–27 liquids path,
        Americas Quintet), EIA STEO 9 September 2026 (balance and Brent path), Dallas Fed Energy
        Survey Q1 2026 (US new-well and operating breakevens), IEA field-decline study (observed vs
        natural), IEA World Energy Investment 2025 (upstream $570bn). Fiscal breakevens are
        IMF/Oxford/public ranges at nameplate volumes — war loadings are a different budget. Linear
        surplus/deficit on the fiscal slider is a desk model, not a ministry.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Every producer country has its own book: stock, flow, R/P, capital, revenue stream, listed
        expressions. Oceania is its own atlas card — LNG, not crude. Antarctica is a treaty.
        Canonical prints (EIA WPSR, IEA OMR, Baker Hughes, Dallas Fed, OPEC ASB) sit on the sources
        register with last print and next window, resourced every desk day.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Jobs: public pay books only — BLS OEWS May 2025, Rigzone salary notes Sep 2025 and the 2025
        survey, Robert Half Energy 2026, OneSource 2026, ARAM Gulf guide Aug 2026. Board links leave
        this desk (Rigzone, Oil and Gas Job Search, Energy Jobline, NES Fircroft, LinkedIn, Indeed, company
        careers). Transfer language is desk method, not a vacancy. Construct CV is a separate review
        service at linkedinconstructioncvprofile.com. CEng rewrite at temporaryworksconsulting.com/cv-covering-letter.html.
        Dispatch is the Crude Oracle Substack on this desk — RSS at /feed.xml, same voice as the briefing, no buy tickets.
      </p>
      <h2 className="mt-10 font-display text-2xl">Disclaimer</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Commentary and research for information only. Not investment advice, not a solicitation,
        not a recommendation. Energy markets can gap. Leveraged products can go to zero. You can
        lose more than you put in. Past prints do not predict the next one. Capital at risk.
      </p>
    </article>
  );
}
