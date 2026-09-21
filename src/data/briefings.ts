export type Briefing = {
  date: string;
  headline: string;
  call: "long" | "short" | "range" | "long-products";
  oil: string;
  gas: string;
  supply: string;
  demand: string;
  opec: string;
  inventory: string;
  geo: string;
  equities: string;
  uk: string;
  chart: string;
  bottom: string;
  sources: { name: string; url: string }[];
};

export const BRIEFINGS: Briefing[] = [
  {
    date: "2026-09-18",
    headline: "The gap filled. The strait did not.",
    call: "range",
    oil: "Friday delayed tape: WTI $95.3 (−6.5%), Brent $98.3 (−6.3%). Thursday's settle was $101.91 / $104.82. The $100 handle did not survive the session. On 10 Sep I treated $96–98 as the first fill zone after the gap-up. We are in it. This is giving back the Yanbu panic in one print, not a Hormuz reopening. A $6 down day inside a war-premium market is a fill. It is not $70.",
    gas: "Henry Hub ~$2.92, bid a touch. Still a storage book. Still not crude. Do not pair-trade it with CL because both screens went red.",
    supply: "Saudi extra barrels to Asia via ship-to-ship off Sohar. Half of East-West capacity 'in days', full in six weeks — a repair story. Yanbu loadings were the spike. STS is a bypass footnote. It does not reopen Hormuz. IEA 2025 still stands: ~20 mb/d, a quarter of seaborne oil, 34% of seaborne crude, still priced as contested water. The tape faded the logistics headline. It did not fade the strait.",
    demand: "Products sold with crude today — heating oil −8% on the session — so this is risk-off in the complex, not a crack unwind. The structural tell is unchanged: HO still +118% year-on-year on the public tape. US retail diesel still north of $6. India's petroleum exports +46% Apr–Aug. A running-refinery world that just had a risk-off Friday.",
    opec: "No ministerial word. Spare is still a Riyadh option that cannot clear the strait. Fiscal floors in the Kingdom sit $80–96 nameplate. At $95 Brent with Aug volumes of 5.97 vs ~9 typical, the budget is tighter, not looser. A washout does not make them volunteer a $70 tape.",
    inventory: "EIA WPSR 16 Sep, week ending 11 Sep: commercial crude 423.4 mb (−0.6), 1% above the five-year, +1.9% yoy. SPR 285.0 (−0.4 wow, −29.8% yoy). The August 25.8 mb four-week build is the ghost that capped $109. Friday's fill does not need a new inventory story. Next print: Wednesday 23 Sep 10:30 ET.",
    geo: "Saudi and the Houthis exchanged strikes Thursday. The war front widened; the front month collapsed. That is the tell — logistics headlines cut the crude panic harder than the strikes put it back. Trump weighing Iran strikes ahead of Gulf leaders in New York next week is a tail. Size it. Hormuz remains the premium. The premium just got cheaper.",
    equities: "Beta did what beta does on a −6% crude day. Refiners and tankers still own the structural dislocation; they will not look like it on the close. Watchlist, not a buy list. Baker Hughes 13:00 ET and CFTC 15:30 ET are today's activity and crowding prints — lagging, useful, not gospel.",
    uk: "Dated Brent is still set in the North Sea even as Forties fades. A $98 handle is still a UK pump-price story. Equinor remains the listed Norway. Harbour and Ithaca remain fiscal options.",
    chart: "Three sessions of unwind became a gap-fill. Brent–WTI ~$3. HO sold with CL — not a product squeeze day. Backwardation vs contango is the regime tell. A $100 magnet that fails on Friday has to prove itself again. $92–96 is the next shelf I respect. $102–104 is where the repair headline already lived.",
    bottom:
      "I called $96–98 the fill zone on 10 Sep. It filled. I am not buying 'repair = peace' and I am not panic-selling a war-premium market at the first fill. Base case now: $92–102 WTI until the next EIA or a new Gulf headline. Size smaller. Long the product tightness only if the crack holds this washout — today it did not. Oman STS is logistics. The strait is the market. Physical differentials over television. BH and COT this afternoon.",
    sources: [
      { name: "Delayed CME/ICE marks via public quote tape", url: "https://www.cmegroup.com/" },
      { name: "Reuters / CNBC session wraps 18 Sep 2026", url: "https://www.cnbc.com/2026/09/18/oil-prices-today-brent-wti-saudi-arabia-houthi.html" },
      { name: "EIA WPSR 16 Sep (week ending 11 Sep)", url: "https://www.eia.gov/petroleum/supply/weekly/" },
      { name: "IEA OMR September 2026", url: "https://www.iea.org/reports/oil-market-report-september-2026" },
      { name: "IEA Hormuz seaborne share", url: "https://www.iea.org/" },
      { name: "Baker Hughes rig count 11 Sep", url: "https://rigcount.bakerhughes.com/" },
    ],
  },

  {
    date: "2026-09-17",
    headline: "I don't fade a $100 handle on a pipeline press release.",
    call: "range",
    oil: "WTI ~$100.9, Brent ~$103.6 as of the Thursday morning tape — down ~1.5–2.1% after Wednesday's $3 washout. The market is giving back the panic, not the structure. Prompt still lives above $100. That is a different regime from the $60s of late 2025.",
    gas: "Henry Hub ~$2.92, bid a touch. That is not confirmation. US gas is a storage-and-power book. Do not use it to validate crude.",
    supply: "Saudi signalling it can restore about half of the damaged East-West pipeline in days and full operations in six weeks. That is a bypass story. It is not a Hormuz reopening. Iran still tolls the strait. IEA 2025: ~20 mb/d, a quarter of seaborne oil, still priced as contested water.",
    demand: "Products are the tell. Heating oil is up triple-digits year-on-year. US retail diesel is north of $6. India's petroleum exports jumped 46% Apr–Aug as Singapore, Tanzania and South Africa took barrels the UAE and US didn't. That is a running-refinery world, not a demand collapse.",
    opec: "No new ministerial word that changes the tape. Spare capacity is still a Riyadh option. Fiscal breakevens in the Kingdom sit near $100 on the public decks. They will not dump barrels into a $90 print to prove a point.",
    inventory: "Last EIA WPSR was Wednesday. The August 25.8 mb four-week US crude build is the ghost in the machine — it capped the melt-up, it did not kill $100. Cushing vs five-year is still the WTI structure tell. Next print: 16 Sep already done; next is 23 Sep.",
    geo: "Hormuz remains the premium. Russia-Ukraine strikes on Russian refineries keep pulling product yield out of the market. Pipeline repair headlines cut the crude panic. They do not put diesel back into the Baltic.",
    equities: "Watch the crack, not the speech. USGC refiners (MPC, VLO, PSX) own product tightness. Tanker owners own rerouting. Integrated majors own the $100 deck. Watchlist, not a buy list.",
    uk: "UKCS is a tax regime with a few remaining barrels. Harbour and Ithaca are fiscal options. Dated Brent is still set in the North Sea even as Forties volumes fade. That is Britain's real leverage.",
    chart: "Brent–WTI around $2.7. Not a blowout. Products vs crude is the dislocation. HO ripping while CL mean-reverts is a refinery-outage regime.",
    bottom:
      "Base case: $98–108 WTI until Hormuz actually de-escalates or a new supply shock hits. I am not buying the 'repair = peace' headline. I am not chasing $108 either after a $3 down day. Range, upside skew, long the product tightness against crude if you have the instruments. The East-West pipe is a Saudi logistics footnote. The strait is the market.",
    sources: [
      { name: "Delayed CME/ICE marks via public quote tape", url: "https://www.cmegroup.com/" },
      { name: "Trading Economics / session prints 17 Sep 2026", url: "https://tradingeconomics.com/commodity/brent-crude-oil" },
      { name: "IEA Hormuz seaborne share", url: "https://www.iea.org/" },
      { name: "EIA WPSR", url: "https://www.eia.gov/petroleum/supply/weekly/" },
      { name: "India petroleum exports, Sep 17 2026", url: "https://www.cnbctv18.com/" },
    ],
  },
  {
    date: "2026-09-16",
    headline: "Three dollars off. The premium blinked. The strait did not.",
    call: "range",
    oil: "Brent settled $105.83, WTI $102.43 — a 2.7–3.2% drop after Monday–Tuesday's spike. Both still closed the week in a $100 world.",
    gas: "Hub soft-to-steady. Irrelevant to the crude impulse.",
    supply: "Repair chatter on Saudi infrastructure started to filter. The market treated it as spare-capacity returning. That is a category error until barrels actually load.",
    demand: "No demand data today that changes the call. Products still bid.",
    opec: "Silence. Silence with $100 oil is policy.",
    inventory: "EIA Wednesday print in the rear-view. August's 25.8 mb four-week crude build remains the bear argument.",
    geo: "Hormuz contested. Russian refineries still a target set.",
    equities: "Energy gave back the spike. That is what beta does.",
    uk: "Sterling oil names track Brent. No UK policy print.",
    chart: "Tuesday high on Brent near $109.45. Wednesday/Thursday fade. Classic headline mean-revert inside a higher regime.",
    bottom: "A down day in a bull tape is not a regime change. Wait for the next inventory print and for physical differentials, not for television.",
    sources: [
      { name: "ICE/CME session", url: "https://www.ice.com/oil" },
      { name: "EIA WPSR", url: "https://www.eia.gov/petroleum/supply/weekly/" },
    ],
  },
  {
    date: "2026-09-15",
    headline: "Brent tagged $109. The product complex is screaming.",
    call: "long-products",
    oil: "WTI $105.83 (+4.4%), Brent $108.75. The spike is geopolitical plus products. Do not pretend it is a demand surprise.",
    gas: "Hub not the story.",
    supply: "Gulf infrastructure risk plus Russian product yield destruction.",
    demand: "Implied product demand is inelastic at these cracks. That is the squeeze.",
    opec: "No meeting. The option is already in the spare-capacity number.",
    inventory: "US crude is not tight enough to justify $109 alone. Products are.",
    geo: "This is a war-risk tape. Size it like one.",
    equities: "Refiners and tankers over E&P on the day.",
    uk: "Pump prices will become politics. They always do.",
    chart: "Heating oil +116% YoY. That is the chart. Crude is the lagging twin.",
    bottom: "If you only own crude into a product squeeze, you own the wrong contract.",
    sources: [
      { name: "CME product complex", url: "https://www.cmegroup.com/" },
      { name: "Session prints", url: "https://www.ice.com/oil" },
    ],
  },
  {
    date: "2026-09-10",
    headline: "+6% is not a trend. It is a gap. Respect the gap.",
    call: "long",
    oil: "WTI $102.48 (+6.7%), Brent $107.63. The market repriced chokepoint risk in a session.",
    gas: "Unchanged thesis.",
    supply: "Infrastructure damage and strait risk. East-West pipeline in the headlines.",
    demand: "Unchanged. This print is supply-risk.",
    opec: "Kingdom barrels are the backstop. That is why the rest of OPEC does not need to speak.",
    inventory: "Ignored, correctly, for one session.",
    geo: "Gap-up on war-risk. Gaps get filled or they become floors. I treat $96–98 as the first fill zone, $100 as the new magnet.",
    equities: "Beta ripped. That is not alpha.",
    uk: "Brent strength is a UK petrol-price story within a week.",
    chart: "Single-day range 100.19–109.68 on Brent. That is a trader's market, not an investor's afternoon.",
    bottom: "Add on dips toward $100. Do not chase $109. The premium is real. The tick is not your friend.",
    sources: [{ name: "ICE Brent session 10 Sep 2026", url: "https://www.ice.com/oil" }],
  },
];

export const TODAY = BRIEFINGS[0];
