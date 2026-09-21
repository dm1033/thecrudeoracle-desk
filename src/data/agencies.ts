/** Three books. One market. Do not pick a favourite and call it truth. */

export const AGENCY_AS_OF = "Sep 2026 public extracts";

export const AGENCY_THESIS =
  "IEA is the pessimist on 2026 supply. EIA is the US official path. OPEC is the producer house. They agree on the shape — 2026 is tight, 2027 is a recovery bet — and they disagree on the size of the hole. I print all three. You decide which loading assumption you are underwriting.";

export type AgencyYear = {
  book: "IEA" | "EIA" | "OPEC";
  report: string;
  y2026Supply: string;
  y2026Demand: string;
  y2026Balance: string;
  y2027Supply: string;
  y2027Demand: string;
  brent2026: string;
  brent2027: string;
  tell: string;
};

export const AGENCY_BOOKS: AgencyYear[] = [
  {
    book: "IEA",
    report: "OMR Sep 2026",
    y2026Supply: "100.7 (−5.7)",
    y2026Demand: "−2.5 y/y",
    y2026Balance: "Shortage. Recovery deferred.",
    y2027Supply: "+8.0 rebound",
    y2027Demand: "+2.6 rebound",
    brent2026: "Dated held ~$100s into Sep",
    brent2027: "Lives or dies on Gulf loadings",
    tell: "Americas Quintet +1.4 then +1.0. Gulf exports Aug ~13 mb/d, half pre-war. Stocks −507 mb since Feb. Effective OPEC+ spare 0.22.",
  },
  {
    book: "EIA",
    report: "STEO 9 Sep 2026",
    y2026Supply: "100.6",
    y2026Demand: "102.6",
    y2026Balance: "−2.0 mb/d",
    y2027Supply: "109.9",
    y2027Demand: "105.0",
    brent2026: "$91 year / ~$90 2H26",
    brent2027: "$74 year — assumes normalisation",
    tell: "OPEC liquids 29.3 → 23.6 → 29.4. Shut-ins 6.7 mb/d in Aug, 5.7 in 4Q26. US crude 13.8 then 14.3. Desk does not take $74 if Hormuz stays contested.",
  },
  {
    book: "OPEC",
    report: "MOMR (Aug 2026 public comparison)",
    y2026Supply: "Non-OPEC growth still the house line",
    y2026Demand: "+0.6 (Aug path)",
    y2026Balance: "The optimistic book",
    y2027Supply: "Call on OPEC+ is the residual",
    y2027Demand: "+2.2 (Aug path)",
    brent2026: "Not an official price path",
    brent2027: "Not an official price path",
    tell: "Always read against IEA, never instead of it. Sep MOMR is a mid-month print. I do not paste the PDF.",
  },
];

export const AGENCY_NOTE =
  "IEA OMR 11 Sep 2026 public pages; EIA STEO release 9 Sep (forecast completed 3 Sep); OPEC MOMR demand deltas from the Aug 2026 public comparison. Liquids, not crude-only, except where a table says crude. Spot in the $100s is a war print inside EIA's $91 year.";

export const QUINTET = {
  name: "Americas Quintet",
  members: "United States, Canada, Brazil, Guyana, Argentina",
  y2026: "+1.4 mb/d",
  y2027: "+1.0 mb/d",
  note: "The only non-OPEC+ growth IEA will sign in 2026. Short-cycle shale plus Atlantic deepwater. That is the elastic barrel.",
  source: "IEA OMR Sep 2026",
};
