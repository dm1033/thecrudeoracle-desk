export type Signal = {
  id: string;
  title: string;
  stance: "bull" | "bear" | "neutral" | "risk";
  confidence: "high" | "medium" | "low";
  evidence: string;
  contrary: string;
  next: string;
};

export const SIGNALS: Signal[] = [
  {
    id: "hormuz",
    title: "Hormuz risk premium",
    stance: "risk",
    confidence: "high",
    evidence: "IEA 2025: ~20 mb/d, ~25% of seaborne oil, ~34% of crude trade through the strait. Iran still tolls traffic. East-West pipe is a partial Saudi bypass, not a substitute.",
    contrary: "A US-Iran ceasefire that actually holds and insured fixtures normalising would bleed $8–15 out of the front.",
    next: "Fixtures, war-risk insurance quotes, and whether Saudi East-West volumes actually load.",
  },
  {
    id: "products",
    title: "Product yield destruction",
    stance: "bull",
    confidence: "high",
    evidence: "Heating oil still +118% YoY on the public tape and sold ~8% with crude on Friday. Structural squeeze, risk-off session. India's product export surge still says plants that can run, ran.",
    contrary: "A warm winter and a ceasefire that brings Russian diesel back would crush HO faster than CL.",
    next: "HO/CL crack, ARA gasoil, EIA product stocks Wednesday.",
  },
  {
    id: "fiscal",
    title: "Gulf fiscal floors",
    stance: "bull",
    confidence: "medium",
    evidence: "Saudi fiscal breakeven $80–96 nameplate (IMF/Oxford/GS, PIF pushes toward $100). UAE $50–65. At Aug output of 5.97 vs ~9 mb/d typical, Riyadh's budget needs a much higher price. Kingdom will not volunteer a $70 tape.",
    contrary: "A forced unwind of remaining OPEC+ cuts to defend share into non-OPEC growth.",
    next: "OPEC MOMR compliance tables; Aramco OSP; PIF funding news.",
  },
  {
    id: "us-stocks",
    title: "US crude stocks overhang",
    stance: "bear",
    confidence: "medium",
    evidence: "EIA 16 Sep: commercial crude 423.4 mb (−0.6), 1% above the five-year. The August four-week +25.8 mb build is why $109 could not hold. A one-week 0.6 draw does not kill that ghost. Next print 23 Sep.",
    contrary: "Export rebound and a hurricane-season run cut would reverse it in two prints.",
    next: "EIA WPSR 23 Sep. Cushing vs five-year.",
  },
  {
    id: "guyana-presalt",
    title: "Atlantic growth barrels",
    stance: "neutral",
    confidence: "high",
    evidence: "Guyana 0.90 mb/d, Brazil 3.95 mb/d. Real barrels, real growth. They cap the super-cycle, they do not cap a war premium.",
    contrary: "A Stabroek political shock or a Santos FPSO slip would tighten 2027 more than 2026.",
    next: "FPSO start-ups; Petrobras guidance; Exxon Guyana updates.",
  },
  {
    id: "shale",
    title: "US shale as swing",
    stance: "neutral",
    confidence: "medium",
    evidence: "US 13.25 mb/d. Short-cycle. At $100 they drill. At $70 they don't. Baker Hughes Friday is the activity pulse, with a lag.",
    contrary: "Productivity stalls or DUC exhaustion would make shale a slower swing than the textbooks.",
    next: "BH land rigs today 13:00 ET; EIA DPR; well costs in 3Q prints.",
  },
  {
    id: "curve",
    title: "Curve and the gap fill",
    stance: "neutral",
    confidence: "medium",
    evidence: "The $100 handle failed on Friday. WTI $95.3, Brent $98.3. That is the 10 Sep gap filling into the $96–98 zone I flagged. A magnet that breaks has to prove itself again.",
    contrary: "A bounce that reclaims $100 with fixtures still ugly puts the premium back on in a session.",
    next: "CL1-CL6 spread; whether $92–96 holds; Dated vs ICE.",
  },
  {
    id: "positioning",
    title: "Managed-money crowding",
    stance: "risk",
    confidence: "low",
    evidence: "After a gap-up week, CTAs and specs are long. COT is Friday-as-of-Tuesday. I treat it as crowd-risk, not a signal.",
    contrary: "A washout that resets specs while physical stays tight is a gift.",
    next: "CFTC COT today 15:30 ET.",
  },
];

export const DESK_VIEW = {
  stance: "Gap fill in play. Do not confuse a $6 down day with a Hormuz reopening. Size smaller.",
  horizon: "2–8 weeks",
  band: "WTI $92–102  ·  Brent $95–106",
  invalidation: "A real Hormuz reopening with insured fixtures AND two fat EIA crude builds. Or a new Gulf shutdown that puts $109 back on.",
};
