/** Last official print from each canonical book. Dated. Sourced. */

export const DESK_AS_OF = "18 Sep 2026";

export type SourcePrint = {
  id: string;
  source: string;
  last: string;
  asOf: string;
  headline: string;
  body: string;
  next: string;
  url: string;
  cadence: string;
};

export const PRINTS: SourcePrint[] = [
  {
    id: "tape",
    source: "CME / ICE delayed",
    last: "18 Sep 2026",
    asOf: "Friday Asia / early NY",
    headline: "WTI $95. The $100 handle gave way.",
    body: "Delayed Friday marks: WTI ~$95.3 (−6.5%), Brent ~$98.3. Thursday settle $101.91 / $104.82. HO sold with crude. The Sep 10 gap filled. Not for execution.",
    next: "Continuous (delayed)",
    url: "https://www.cmegroup.com/",
    cadence: "intraday",
  },
  {
    id: "eia-wpsr",
    source: "EIA WPSR",
    last: "16 Sep 2026",
    asOf: "Week ending 11 Sep",
    headline: "Commercial crude 423.4 mb (−0.6).",
    body: "Ex-SPR crude 423.4 mb, −0.6 wow, +1.9% yoy, 1% above the five-year. SPR 285.0 (−0.4 wow, −29.8% yoy). Total petroleum 1.536 bn (+2.2 mb wow, −151.9 yoy).",
    next: "Wed 23 Sep 10:30 ET",
    url: "https://www.eia.gov/petroleum/supply/weekly/",
    cadence: "weekly",
  },
  {
    id: "baker-hughes",
    source: "Baker Hughes",
    last: "11 Sep 2026",
    asOf: "Week of 11 Sep",
    headline: "US total 591. Oil 450.",
    body: "Total rotary 591 (+3 wow). Oil 450 (+1). Gas 132 (+2). Misc 9. YoY total was 539. Activity with a lag — not a same-week shale forecast.",
    next: "Fri 18 Sep 13:00 ET",
    url: "https://rigcount.bakerhughes.com/",
    cadence: "weekly",
  },
  {
    id: "iea-omr",
    source: "IEA OMR",
    last: "Sep 2026",
    asOf: "September report",
    headline: "World supply 100.7 mb/d. Spare 0.22.",
    body: "Supply −5.7 y/y and −1.3 vs the August book. Gulf recovery deferred to 2027. Effective OPEC+ spare vs August 0.22 mb/d. Nameplate gap is not spare if it cannot load.",
    next: "October OMR (public extracts)",
    url: "https://www.iea.org/reports/oil-market-report-september-2026",
    cadence: "monthly",
  },
  {
    id: "eia-steo",
    source: "EIA STEO",
    last: "9 Sep 2026",
    asOf: "Forecast completed 3 Sep",
    headline: "2026 Brent path $91. Spot is the war print.",
    body: "Liquids 2026: 100.6 prod vs 102.6 cons. 2027: 109.9 / 105.0 and Brent $74 if the Gulf normalises. This desk does not take the $74 path while Hormuz is contested.",
    next: "Oct, second Tuesday",
    url: "https://www.eia.gov/outlooks/steo/",
    cadence: "monthly",
  },
  {
    id: "dallas-fed",
    source: "Dallas Fed",
    last: "Q1 2026",
    asOf: "March survey",
    headline: "New-well $66. Operating $43.",
    body: "All-respondent new-well $66. Delaware $63. Permian $67. Midland $69. Existing-well operating $43 (large firms ~$32). The number that turns the rig count.",
    next: "Quarterly breakeven special",
    url: "https://www.dallasfed.org/research/surveys/des",
    cadence: "quarterly",
  },
  {
    id: "opec-asb",
    source: "OPEC ASB 2026",
    last: "ASB 2026",
    asOf: "End-2025 reserves",
    headline: "1,572 bn bbl official crude.",
    body: "Venezuela 303.7, Saudi 267.2, Iran 208.6. Canada excludes oil sands on purpose. That is a definition, not a rounding error.",
    next: "ASB 2027",
    url: "https://www.opec.org/",
    cadence: "annual",
  },
  {
    id: "cftc-cot",
    source: "CFTC COT",
    last: "12 Sep 2026 file",
    asOf: "As-of Tuesday, published Friday",
    headline: "Crowd-risk, not a signal.",
    body: "Managed-money length in CL after a gap-up week. Today's 15:30 ET print is the next crowd snapshot. I fade positioning as gospel.",
    next: "Fri 18 Sep 15:30 ET",
    url: "https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",
    cadence: "weekly",
  },
];

export const TODAY_PRINTS = PRINTS.slice(0, 4);
