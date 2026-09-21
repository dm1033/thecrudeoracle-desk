export type DispatchIssue = {
  slug: string;
  date: string;
  title: string;
  kicker: string;
  dek: string;
  minutes: number;
  tags: string[];
  sections: { h: string; p: string }[];
  closer: string;
};

export const SUBSTACK_TITLE = "The Crude Oracle";
export const SUBSTACK_KICKER = "Substack";

export const DISPATCH_PITCH =
  "The Crude Oracle on Substack. Spare, fiscal floors, continent cash, and the jobs that follow the barrels. Public sources. First person. No hedge language. No buy tickets.";

export const DISPATCH_ISSUES: DispatchIssue[] = [
  {
    slug: "the-gap-filled",
    date: "2026-09-18",
    title: "The gap filled. The strait did not.",
    kicker: "Tape",
    dek: "Friday delayed tape: WTI $95.3, Brent $98.3. I called $96–98 the fill zone on 10 Sep. It filled. Hormuz is still the premium.",
    minutes: 6,
    tags: ["tape", "Hormuz", "spare"],
    sections: [
      {
        h: "What printed",
        p: "Friday delayed tape: WTI $95.3 (−6.5%), Brent $98.3 (−6.3%). Thursday's settle was $101.91 / $104.82. The $100 handle did not survive the session. On 10 Sep I treated $96–98 as the first fill zone after the gap-up. We are in it. This is giving back the Yanbu panic in one print, not a Hormuz reopening. A $6 down day inside a war-premium market is a fill. It is not $70.",
      },
      {
        h: "Logistics is not the strait",
        p: "Saudi extra barrels to Asia via ship-to-ship off Sohar. Half of East-West capacity 'in days', full in six weeks — a repair story. Yanbu loadings were the spike. STS is a bypass footnote. It does not reopen Hormuz. IEA 2025 still stands: ~20 mb/d, a quarter of seaborne oil, 34% of seaborne crude, still priced as contested water. The tape faded the logistics headline. It did not fade the strait.",
      },
      {
        h: "Products sold with crude",
        p: "Heating oil −8% on the session, so this is risk-off in the complex, not a crack unwind. The structural tell is unchanged: HO still +118% year-on-year on the public tape. US retail diesel still north of $6. India's petroleum exports +46% Apr–Aug. A running-refinery world that just had a risk-off Friday.",
      },
      {
        h: "The budget did not get cheaper",
        p: "No ministerial word. Spare is still a Riyadh option that cannot clear the strait. Fiscal floors in the Kingdom sit $80–96 nameplate. At $95 Brent with Aug volumes of 5.97 vs ~9 typical, the budget is tighter, not looser. A washout does not make them volunteer a $70 tape.",
      },
      {
        h: "Inventories",
        p: "EIA WPSR 16 Sep, week ending 11 Sep: commercial crude 423.4 mb (−0.6), 1% above the five-year, +1.9% yoy. SPR 285.0. The August 25.8 mb four-week build is the ghost that capped $109. Friday's fill does not need a new inventory story. Next print: Wednesday 23 Sep 10:30 ET.",
      },
    ],
    closer:
      "I called $96–98 the fill zone on 10 Sep. It filled. I am not buying 'repair = peace' and I am not panic-selling a war-premium market at the first fill. Base case now: $92–102 WTI until the next EIA or a new Gulf headline. Size smaller. Oman STS is logistics. The strait is the market.",
  },
  {
    slug: "cat-iii-is-a-gulf-ticket",
    date: "2026-09-18",
    title: "Your CAT III already paid for the ticket.",
    kicker: "Earn $$$",
    dek: "Temporary works, civils, HV and HSE people already do the work the Gulf and the FPSO yards advertise. They just advertise it in another language. Rewrite the nouns. Take the cheque.",
    minutes: 8,
    tags: ["jobs", "transfer", "Gulf", "pay"],
    sections: [
      {
        h: "The market is hiring construction. It will not say so.",
        p: "Aramco, ADNOC, QatarEnergy, Exxon Guyana, Woodside LNG — the 2026 cheque is brownfield, hook-up, commissioning, shutdowns and facilities power. That is temporary works, civils, HV and site management with a hydrocarbon hat. The boards do not say 'TW coordinator'. They say construction manager, HUC, SIMOPS, access. Same physics. Their nouns.",
      },
      {
        h: "What the public pay books actually print",
        p: "BLS OEWS May 2025: US petroleum engineer median $131,800, 90th $208,000+. Rigzone 2025: Permian median base $154,000; GoM offshore engineers $148,000. OneSource 2026: US drilling engineer senior $160–220k+. Rigzone Sep 2025: UK North Sea drilling engineer total cash £55–170k; Norway NOK 800k–2.2m; North Sea petroleum contractor senior $900–1,200/day. ARAM Aug 2026 Gulf guide: senior petroleum AED 25–42k a month, manager band AED 30–45k+, often tax-free. I do not invent a number. Those are the envelopes.",
      },
      {
        h: "How the skill actually transfers",
        p: "A CAT III check is independent verification. A piling mat is a heavy-lift pad. A CITB trainer who has signed RAMS for a live lift is closer to SIMOPS than a graduate with a clean NEBOSH and no mud. HV from 11kV to 400kV is facilities power on an FPSO and an LNG train. CDM is not HAZOP — translate it, do not throw it away. The people who fail the screen wrote 'temporary works coordinator' into an ADNOC construction-manager advert.",
      },
      {
        h: "Where the hiring is, this cycle",
        p: "Gulf: construction, commissioning, electrical, HSE — fiscal floors in the Kingdom sit $80–96 nameplate; they hire to keep the budget. Guyana / Suriname: FPSO phases, SURF, HUC. Brazil pre-salt: the same, with local content. US onshore: short-cycle completions and facilities. North Sea: brownfield, decommissioning, integrity, day-rate contractors. Australia: LNG shutdowns, not crude. Trading hubs if you can name a grade and a choke without looking it up.",
      },
      {
        h: "The CV is the choke",
        p: "Recruiters search their language. If your first page still says 'principal contractor' and 'compensation event', you are invisible to an EPC house that asked for SIMOPS and change. Construct CV reviews construction and energy documents against the advert you are actually chasing — 2-page, ATS, recruiter summary, keyword alignment, no invented titles. That is the whole product. Use it before you fire 40 applications into a black hole.",
      },
    ],
    closer:
      "The barrels decide the jobs. This desk already maps the barrels. Jobs maps the transfer. Earn the day-rate in their nouns, not yours. Then get the CV read by someone who has done the work the page describes.",
  },
  {
    slug: "this-is-the-substack",
    date: "2026-09-18",
    title: "This is the Crude Oracle Substack.",
    kicker: "Masthead",
    dek: "A free oil-industry letter. Tape, spare, continent cash, and the jobs that follow the barrels. Same desk. Same voice. RSS if you read in a reader.",
    minutes: 4,
    tags: ["substack", "method", "jobs"],
    sections: [
      {
        h: "What this is",
        p: "The Crude Oracle is already a desk: delayed tape, IEA/EIA/OPEC prints, continent reserves and revenue, producer books, cracks, chokes. Dispatch is the letter. First person. Public sources. No hedge language. No buy tickets. If you already open the briefing before the EIA, this is that voice on the desk every day, and on the list when we wire mail.",
      },
      {
        h: "What you get",
        p: "The fill and the strait. Fiscal floors versus well breakevens. Where capital actually sits this cycle — short-cycle shale, Atlantic deepwater, Gulf downstream — and the jobs that follow it. When a CAT III is a Gulf ticket. When a CV still says 'principal contractor' into an ADNOC construction-manager advert.",
      },
      {
        h: "Jobs and the cheque",
        p: "Earn $$$ is not a slogan. BLS, Rigzone, Robert Half, OneSource, ARAM Gulf — public ranges. Temporary works, civils, HV and HSE already do the work. Rewrite the nouns. Search Rigzone, Oil and Gas Job Search, Energy Jobline, NES, LinkedIn in their language. Then get the page read on Construct CV before you fire forty applications into a black hole.",
      },
    ],
    closer:
      "Subscribe on this desk. RSS at /feed.xml if you want a reader. Construct CV if the page has to survive an ATS. The barrels decide the jobs. This letter maps both.",
  },
  {
    slug: "fiscal-floors-hire",
    date: "2026-09-17",
    title: "Fiscal floors hire. Spare does not.",
    kicker: "Method",
    dek: "A ministry that needs $90 oil does not mothball the construction gate. Read the budget, then read the board. That is the hiring map.",
    minutes: 5,
    tags: ["fiscal", "jobs", "method"],
    sections: [
      {
        h: "Two breakevens, two labour markets",
        p: "The well can make money at $40 and the ministry can still need $90. That is not a contradiction. It is why Riyadh hires construction when the tape is $95 and does not volunteer a $70 print. Effective OPEC+ spare vs August is 0.22 mb/d. Nameplate gap is not spare if it cannot load. It is also not a hiring freeze. The people who keep East-West, Shaybah and the downstream running are a budget line, not a spare-capacity line.",
      },
      {
        h: "Follow the capital, not the press release",
        p: "IEA World Energy Investment 2025: upstream ~$570bn, about 90% of it the decline tax. Capital is short-cycle shale, Atlantic deepwater, Gulf downstream. That is completions in the Permian, SURF and HUC in Guyana and the pre-salt, brownfield and shutdowns in the Gulf and the North Sea. If your CV still points at a new oil-sands mine, you are writing to a cycle that is not writing back.",
      },
      {
        h: "How this desk uses it",
        p: "Continent atlas for the stock and the cash. Industry book for spare, decline and the two breakevens. Jobs for the transfer and the board search in their language. Dispatch for the daily read. Construct CV when the page has to survive an ATS. Public sources. No order tickets. No invented day-rates.",
      },
    ],
    closer:
      "If a house cannot name the stream, it does not belong on the watchlist. If a CV cannot name the basin and the noun they advertised, it does not belong on the board. Same rule.",
  },
];

export function issueBySlug(slug: string) {
  return DISPATCH_ISSUES.find((i) => i.slug === slug);
}
