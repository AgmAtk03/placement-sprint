export const WHATSAPP_NUMBER = "919876543210";

export const whatsappUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const brand = {
  name: "Placement Sprint",
  headline: "Your placement season starts in 14 days — not “someday.”",
  sub: "CSE/BCA/BBA sem 6–8 — resume, LinkedIn, 2 mocks, applications checklist. First 20 at ₹3999.",
  tagline: "Your placement season starts in 14 days — not “someday.”",
  cityNote: "CSE/BCA/BBA sem 6–8. Parents who pay. Students who want shortlists this term.",
};

export const contact = {
  whatsapp: whatsappUrl("Hi, I want SPRINT"),
  dmSprint: whatsappUrl("SPRINT"),
  starter: whatsappUrl("Hi, I want the ₹499 Placement Starter Kit"),
  parent: whatsappUrl("Hi, parent here. I want Placement Sprint for my child."),
};

export const seats = {
  introCap: 20,
  introTaken: 7,
  introLeft: 13,
};

export const heroBullets = [
  {
    title: "ATS resume",
    detail: "Rewrite that survives filters and a 30-second TPO glance. One revision on Sprint.",
  },
  {
    title: "LinkedIn makeover",
    detail: "Headline, About, experience — so a senior can actually forward you.",
  },
  {
    title: "2 mocks",
    detail: "Live Zoom. You freeze once here, not in the real PPT.",
  },
  {
    title: "Day-by-day apps checklist",
    detail: "Applications as a calendar, not ‘I’ll apply after internals’.",
  },
  {
    title: "Built for sem 6–8",
    detail: "CSE / BCA / BBA. Drives this term. Not a first-year PDF club.",
  },
];

export const skus = {
  starter: {
    id: "starter",
    name: "Placement Starter Kit",
    price: 499,
    blurb:
      "Resume scorecard + LinkedIn 15-min fix + first-10 applications map. The ₹499 tripwire that starts the season.",
  },
  bump: {
    id: "bump",
    name: "ATS keyword vault + parent briefing",
    price: 199,
    blurb:
      "Role keywords that beat campus-resume filters, plus a one-pager so parents stop asking ‘what is this ₹499’.",
  },
  sprintIntro: {
    id: "sprint-intro",
    name: "14-day Placement Sprint — intro",
    price: 3999,
    regularPrice: 4999,
    blurb: "First 20 Sprint seats at ₹3999. Then ₹4999.",
  },
  sprint: {
    id: "sprint",
    name: "14-day Placement Sprint",
    price: 4999,
    blurb:
      "ATS resume + LinkedIn makeover + 2 mocks + day-by-day apps checklist. Start ≤48h. Done in 14 days.",
  },
  sprintPlus: {
    id: "sprint-plus",
    name: "Sprint+",
    price: 7999,
    blurb:
      "Deeper mocks (HR + tech/behaviour) · application review · priority doubt window · faster feedback.",
  },
} as const;

export type SkuId =
  | "starter"
  | "starter-bump"
  | "sprint"
  | "sprint-intro"
  | "sprint-plus";

export const skuCatalog: Record<
  SkuId,
  {
    name: string;
    price: number;
    next: "upsell" | "upsell-plus" | "thank-you";
    summary: string;
  }
> = {
  starter: {
    name: "Placement Starter Kit",
    price: 499,
    next: "upsell",
    summary: "Resume scorecard + LinkedIn 15-min fix + first-10 applications map.",
  },
  "starter-bump": {
    name: "Starter Kit + ATS vault",
    price: 698,
    next: "upsell",
    summary: "Scorecard, 15-min LinkedIn fix, first-10 map, ATS keywords, parent briefing.",
  },
  "sprint-intro": {
    name: "14-day Placement Sprint (intro)",
    price: 3999,
    next: "upsell-plus",
    summary:
      "First-20 price. ATS resume, LinkedIn makeover, 2 mocks, day-by-day apps checklist. 1 resume revision.",
  },
  sprint: {
    name: "14-day Placement Sprint",
    price: 4999,
    next: "upsell-plus",
    summary:
      "ATS resume, LinkedIn makeover, 2 mocks, day-by-day apps checklist. 1 resume revision.",
  },
  "sprint-plus": {
    name: "Sprint+",
    price: 7999,
    next: "thank-you",
    summary:
      "Deeper mocks (HR+tech/behaviour), application review, priority doubt window, faster feedback.",
  },
};

export const sprintIncludes = [
  {
    title: "ATS resume",
    detail:
      "We throw out ‘hardworking team player’ and write the resume that survives ATS + a 30-second TPO glance. One revision.",
  },
  {
    title: "LinkedIn makeover",
    detail:
      "Headline, About, experience, featured — so seniors and recruiters can actually forward you. You paste. We don’t hijack the account.",
  },
  {
    title: "2 mocks",
    detail:
      "Live Zoom. One HR / ‘tell me about yourself’. One role round. Notes after each so the next PPT doesn’t feel like a surprise test.",
  },
  {
    title: "Day-by-day apps checklist",
    detail:
      "Applications as a fortnight calendar — not ‘apply somewhere’. You tick them. Season starts.",
  },
];

export const sprintPlusIncludes = [
  {
    title: "Deeper mocks (HR + tech/behaviour)",
    detail:
      "Beyond the two Sprint mocks: a harder HR round and a tech/behaviour round that actually probes.",
  },
  {
    title: "Application review",
    detail:
      "We mark the first-10 map before you hit submit — JD fit, bullets, what to cut.",
  },
  {
    title: "Priority doubt window",
    detail:
      "Doubts jump the queue on WhatsApp inside the 14-day window. Not a forever retainer.",
  },
  {
    title: "Faster feedback",
    detail:
      "Drafts and mock notes come back quicker so the 14 days don’t stall on ‘waiting for comments’.",
  },
];

export const starterIncludes = [
  "Resume scorecard — what’s weak, what to cut, what to quantify",
  "LinkedIn 15-min fix — headline + About you can paste tonight",
  "First-10 applications map — ten roles, day-by-day, not a mood board",
];

export const dayPlan = [
  {
    days: "Hour 0–48",
    title: "Season starts",
    body: "Pay. DM SPRINT. Send resume + LinkedIn + target companies. We lock your 14-day window. No 3-week ‘onboarding LMS’.",
  },
  {
    days: "Day 2–5",
    title: "ATS resume + LinkedIn makeover",
    body: "Resume rewrite in. LinkedIn copy in. One resume revision. You show up to the drive looking like you meant it.",
  },
  {
    days: "Day 6–10",
    title: "2 mocks",
    body: "Two Zoom interviews. We kill the campus-script answers. Sprint+ goes deeper: HR + tech/behaviour.",
  },
  {
    days: "Day 11–14",
    title: "Day-by-day apps checklist",
    body: "You send. Sprint+ reviews before submit. Season is live — not ‘someday’.",
  },
];

export const forWhom = [
  "CSE / BCA / BBA, sem 6–8 — drives are this term, internships are thin, parents are asking ‘what is the scene’.",
  "Your resume still lists NSS, MS Office, and ‘team player’. You know it. Recruiters know it.",
  "You want off-campus product / startup shots AND the TCS–Infosys safety net — not a TED talk about ‘passion’.",
  "Someone (maybe you, maybe a parent) will pay ₹3999–₹7999 this week if the plan is stupidly clear.",
];

export const notForWhom = [
  "Semester 1–3 tourists collecting PDFs. Come back when a drive has a date.",
  "Anyone who will not pick up a Zoom mock. This is not a recorded course you can ignore.",
  "People hunting a legal ‘job guarantee certificate’. We sell a 14-day sprint that makes you look ready — the offer letter is still earned in the room.",
];

export const faqs = [
  {
    q: "Will this get me placed / a 12 LPA package?",
    a: "We don’t print offer letters. We make you shortlist-ready in 14 days: ATS resume, LinkedIn makeover, 2 mocks, day-by-day apps checklist. Students who look ready get more callbacks than students who ‘will update the resume after Holi’. That’s the bet.",
  },
  {
    q: "Why ₹3999 then ₹4999?",
    a: "First 20 Sprint seats are ₹3999 so we fill the first cohort fast. Seat 21 onwards is ₹4999. Same sprint. Same 14 days. The intro window is the only discount — there isn’t a secret coupon after that.",
  },
  {
    q: "What’s in the ₹499 Placement Starter Kit?",
    a: "Resume scorecard + LinkedIn 15-min fix + first-10 applications map. It’s the tripwire: cheap, useful, and the front door to the Sprint. After checkout you will see the one-time Sprint offer.",
  },
  {
    q: "Sprint vs Sprint+?",
    a: "Sprint (₹3999 intro / ₹4999) is the core: ATS resume + LinkedIn makeover + 2 mocks + day-by-day apps checklist. Sprint+ is ₹7999: deeper mocks (HR+tech/behaviour), application review, priority doubt window, faster feedback.",
  },
  {
    q: "I am BBA. Is this only for CSE?",
    a: "No. Analyst, ops, sales, marketing, intern-to-PPO — we rewrite and mock for the roles you name. Don’t buy this if you want a fake ‘SDE at FAANG’ story you can’t defend.",
  },
  {
    q: "Parents: why not the ₹80,000 6-month course?",
    a: "Because your child has drives in weeks, not a gap year. This is 14 days of specific work on WhatsApp and Zoom. Intro Sprint is ₹3999 for the first 20 seats. If they won’t join a mock, don’t pay.",
  },
  {
    q: "When do you start?",
    a: "Within 48 hours of payment + your resume pack on WhatsApp. Done in 14 days. 1 resume revision. Miss a mock once and we reschedule inside the window.",
  },
  {
    q: "Refunds?",
    a: "Write within 24 hours if we haven’t started the rewrite — full refund. After the first draft, you’re paying for work. This website’s Razorpay/Stripe buttons are demo placeholders and will not charge a real card.",
  },
  {
    q: "Do you scrape my college or sell student data?",
    a: "No. You send the resume. We rewrite. Demo forms stay in your browser. No scraping. No real student PII.",
  },
];

export const exampleProof = [
  {
    label: "DEMO · A. Sharma, CSE sem 7",
    quote:
      "Went from 11 fluff bullets to 6 bullets a recruiter can skim. First mock was a disaster. Second mock sounded like someone who had actually done the project. Callbacks started the week applications went out.",
    meta: "DEMO alias only. Not a real student. Not a CTC screenshot.",
  },
  {
    label: "DEMO · R. Patel, BCA sem 8",
    quote:
      "LinkedIn used to say ‘Student seeking opportunities’. After the 15-min-style makeover, a senior actually forwarded the profile. First-10 map meant 10 applications in 4 days instead of waiting for TPO mail.",
    meta: "DEMO alias only. Illustrative placement-readiness story — not a verified offer letter.",
  },
  {
    label: "DEMO · P. Iyer, parent of BBA sem 6",
    quote:
      "I wasn’t buying a course. I wanted the resume scored, LinkedIn fixed, and two interviews practised before the campus drive. We took intro Sprint at ₹3999. Sprint+ for deeper mocks. Season felt like it had a start date.",
    meta: "DEMO alias only. Parent-angle placeholder. Not a real testimonial.",
  },
];

export const parentNote = {
  title: "Parents: this is the week, not ‘after they figure it out’",
  body: "Placement season does not wait for a 6-month LMS. First 20 Sprint seats are ₹3999 (then ₹4999). In 14 days they get an ATS resume, LinkedIn makeover, 2 live mocks, and a day-by-day applications checklist. Sprint+ at ₹7999 adds deeper mocks, application review, priority doubts, faster feedback. You are buying a start date for the season — not a visa, not a guaranteed CTC.",
};

export const comparisonRows = [
  {
    label: "Resume",
    campus: "TPO template, everyone identical",
    course: "Week 4 of 24",
    sprint: "ATS rewrite in days 2–5 for YOUR roles",
  },
  {
    label: "LinkedIn",
    campus: "Ignored",
    course: "Optional PDF",
    sprint: "Makeover they can paste tonight",
  },
  {
    label: "Mocks",
    campus: "One crowded GD",
    course: "Recorded ‘confidence’ module",
    sprint: "2 live Zoom (Sprint+: HR + tech/behaviour)",
  },
  {
    label: "Applications",
    campus: "‘Apply more beta’",
    course: "Job portal login",
    sprint: "Day-by-day checklist this fortnight",
  },
  {
    label: "Speed",
    campus: "One afternoon",
    course: "6–12 months",
    sprint: "Start ≤48h · done in 14 days",
  },
  {
    label: "Price",
    campus: "Free and forgettable",
    course: "₹40k–₹80k",
    sprint: "₹3999 intro / ₹4999 / Sprint+ ₹7999",
  },
];

export function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
