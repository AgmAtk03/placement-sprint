export const courseMeta = {
  title: "14-day course outlines",
  promise:
    "Recruiter-ready artifacts in 14 days — not a job offer / package guarantee.",
  refuse:
    "We refuse to promise a job offer, CTC, package, guaranteed interview, or fake alumni. This course ships artifacts and a system. The offer letter is still earned in the room.",
  load: "Student load ≤90 min/day. No hour-long theory dumps.",
  audience: "India CSE / BCA / BBA, sem 6–8",
  prices: "₹4,999 Sprint · ₹7,999 Sprint+",
};

export const navalLocks = [
  "Day 14 = realistic apps, not a forced 20",
  "Day 11 scorecard ≤24h for every Sprint student",
  "Day 10 = coach-assigned sheet only — no LeetCode binge",
  "No soft-skills / mindset day exists. Do not add one.",
];

export const dayRhythm = [
  { block: "Brief", who: "Coach (WhatsApp / Loom ≤5 min)", time: "5 min" },
  { block: "Do the work", who: "Student", time: "45–75 min" },
  { block: "Submit", who: "Student → shared folder / WhatsApp", time: "—" },
  { block: "Review", who: "Coach (async or live)", time: "10–20 min" },
];

export type CourseDay = {
  day: number;
  title: string;
  goal: string;
  studentTime: string;
  studentWork: string[];
  deliverable: string;
  doneWhen: string;
  sprintPlus?: string;
};

export const courseDays: CourseDay[] = [
  {
    day: 1,
    title: "Role lock (not “open to anything”)",
    goal: "One target role + why + constraints. Kill spray-and-pray identity.",
    studentTime: "≤75 min",
    studentWork: [
      "Pick one role title you’d accept in the next 90 days (e.g. Junior SDE, Data Analyst Intern, Business Analyst, Frontend Intern).",
      "Write 5 bullets: skills you already have that map to that role.",
      "List constraints: city / WFH / stipend min / start date.",
      "Fill Role Brief v0 template (coach provides).",
    ],
    deliverable: "Role Brief v0 (1 page).",
    doneWhen:
      "Role title is specific enough that a stranger could Google 10 matching JD titles.",
    sprintPlus:
      "Same day — coach suggests 2 alternate role titles if first is too crowded for their skill level.",
  },
  {
    day: 2,
    title: "Company map (10 targets)",
    goal: "10 companies/roles that fit Day 1 brief. Quality > quantity.",
    studentTime: "≤75 min",
    studentWork: [
      "Find 10 concrete targets (campus drive OR off-campus posting OR LinkedIn job).",
      "For each: company · role title · link · 3 keywords from JD · why you fit in one line.",
      "Rank top 5 “apply first.”",
    ],
    deliverable: "Company Map (table, 10 rows).",
    doneWhen: "Every row has a live link + 3 JD keywords.",
    sprintPlus: "Coach marks which 5 will get Day 13–14 application-review support.",
  },
  {
    day: 3,
    title: "Resume autopsy + outline",
    goal: "Destroy the novel. Build a one-page skeleton for the role.",
    studentTime: "≤90 min",
    studentWork: [
      "Paste current resume. Self-score with Resume Scorecard (clarity / impact / role-match / ATS / honesty) 1–5 each.",
      "Cut everything that doesn’t serve Day 1 role.",
      "Draft section order: Header · Education · Projects/Experience · Skills · (optional Certs if role-relevant).",
      "List 3–5 projects/experiences that will get impact bullets tomorrow.",
    ],
    deliverable: "Resume Outline + filled scorecard.",
    doneWhen: "Outline fits one page in principle; ≤5 project/experience slots.",
  },
  {
    day: 4,
    title: "Resume v1 (impact bullets)",
    goal: "Resume v1 — every bullet is action + context + result (or concrete output).",
    studentTime: "≤90 min",
    studentWork: [
      "Write bullets using: Verb + what you built/did + tool/stack + result/output.",
      "Quantify where honest (users, %, time saved, lines only if meaningful). Never invent metrics.",
      "Skills = stack for the role, not 40 buzzwords.",
      "Export Resume_v1.pdf (one page).",
    ],
    deliverable: "Resume_v1.pdf",
    doneWhen: "Coach can skim and state the candidate’s role fit in ≤60 seconds.",
  },
  {
    day: 5,
    title: "Resume v2 (final for Sprint)",
    goal: "One revision pass → final Sprint resume (unless Sprint+ later tweaks).",
    studentTime: "≤60 min",
    studentWork: [
      "Apply coach Day 4 notes.",
      "Peer skim optional: send to 1 friend — “what job am I going for?”",
      "Export Resume_FINAL.pdf + plain-text version for portals.",
    ],
    deliverable: "Resume_FINAL.pdf",
    doneWhen:
      "Stranger skim test passes (coach or peer names the target role correctly).",
    sprintPlus: "Optional later JD-tailored variant for top 3 companies (Day 13).",
  },
  {
    day: 6,
    title: "LinkedIn foundation",
    goal: "Profile stops saying only “Student at…”",
    studentTime: "≤75 min",
    studentWork: [
      "Photo rules: clear face, plain background, no group selfies.",
      "Headline formula: {Role aim} | {1–2 proof skills/stack} | {Degree/College short}.",
      "About: 4–6 short lines — who you are, what you’re building toward, proof, CTA (open to roles / internship).",
      "Custom URL if possible.",
    ],
    deliverable: "LinkedIn draft (screenshot or doc with sections).",
    doneWhen: "Headline states a role + proof skill.",
  },
  {
    day: 7,
    title: "LinkedIn match + featured",
    goal: "LinkedIn matches resume; Featured shows one project.",
    studentTime: "≤75 min",
    studentWork: [
      "Experience/Education aligned with Resume_FINAL (same titles, dates, story).",
      "Featured: 1 project (GitHub / Notion / Drive demo / Canva case).",
      "Skills: pin top 5 for the role.",
      "Turn on Open to Work (students: visible to recruiters only if preferred).",
    ],
    deliverable: "Live LinkedIn URL + LinkedIn Checklist signed off.",
    doneWhen: "Coach opens URL and sees role-fit in 10 seconds.",
  },
  {
    day: 8,
    title: "STAR bank (stories 1–4)",
    goal: "Interview machine starts — 4 scored stories.",
    studentTime: "≤90 min",
    studentWork: [
      "Write 4 STAR stories (Situation, Task, Action, Result) from projects/college/internship.",
      "Themes: teamwork conflict · hard problem · deadline · leadership/initiative.",
      "Keep each story ≤90 seconds spoken.",
    ],
    deliverable: "STAR Bank partial (4/8).",
    doneWhen: "Each story has a clear Result line.",
  },
  {
    day: 9,
    title: "STAR bank (stories 5–8) + “Tell me about yourself”",
    goal: "Complete 8 STARs + 45-second intro script.",
    studentTime: "≤90 min",
    studentWork: [
      "Add 4 more STARs: failure/learn · disagreement · achievement · “why this role.”",
      "Write Tell me about yourself in 45–60 seconds: present (student + stack) · past proof · future (role) · close.",
      "Record once on phone (private). Listen back.",
    ],
    deliverable: "STAR Bank complete (8) + Intro script + optional voice note.",
    doneWhen: "Student can say intro without reading.",
  },
  {
    day: 10,
    title: "Role drill (tech or case)",
    goal: "One coach-assigned drill matched to stream — not a LeetCode/YouTube binge.",
    studentTime: "≤90 min",
    studentWork: [
      "Work only the coach-assigned drill sheet for their role. No self-directed problem binge.",
      "CSE / BCA sheet (coach picks one track): 4–6 problems (arrays/hash/strings) or explain one project end-to-end (architecture, tradeoffs). Time-box.",
      "BBA sheet: One mini-case (market entry / metrics / customer problem) + structured answer.",
    ],
    deliverable: "Coach-assigned drill sheet completed + notes.",
    doneWhen: "Coach scores that sheet ≥ “pass with notes” (not blank).",
    sprintPlus: "Deeper drill pack (extra assigned set); review before Mock 1.",
  },
  {
    day: 11,
    title: "Mock Interview 1 + scorecard",
    goal: "First real pressure. Hurt on purpose. Written scorecard.",
    studentTime: "30–40 min live + ≤30 min rewrite",
    studentWork: [
      "Format: 30–40 min live (Zoom/Meet) or structured async video if timezone forces it. Prefer live.",
      "Sections: Intro · 2 behavioral STARs · 1 role drill question · “Any questions for us?”",
      "Be on time, Resume_FINAL + LinkedIn open.",
      "After: rewrite 2 weakest answers same day (≤30 min).",
      "Coach sends written Mock Scorecard ≤24h for every Sprint student (same as Sprint+).",
    ],
    deliverable: "Mock 1 recording (optional) + Mock 1 Scorecard + 2 rewritten answers.",
    doneWhen: "Scorecard sent and student acknowledged 2 fixes.",
  },
  {
    day: 12,
    title: "Mock Interview 2 + scorecard",
    goal: "Second mock shows improvement. Exit behavioral readiness.",
    studentTime: "Same length as Mock 1",
    studentWork: [
      "Same length; harder follow-ups on Day 11 weak spots. Mix HR + role.",
      "Rehearse fixed answers 20 min before.",
      "Post-mock: update STAR bank with better Result lines.",
    ],
    deliverable: "Mock 2 Scorecard + updated STAR bank.",
    doneWhen:
      "At least 2 score dimensions improved vs Mock 1 or clear written plan for remaining gaps.",
    sprintPlus:
      "Track pick at kickoff: either +2 extra mocks across days 11–14 OR 1 extra mock + 1 project/app review — must be scheduled, not theoretical.",
  },
  {
    day: 13,
    title: "Applications system (batch 1)",
    goal: "Targeted apps, not 80 silent applies.",
    studentTime: "≤90 min",
    studentWork: [
      "Open Apps Tracker (20 slots).",
      "Submit 10 applications from Company Map (tailor 3 bullets or keywords per JD — honest only).",
      "Log: date · portal · resume version · status · follow-up date.",
    ],
    deliverable: "Tracker with 10 logged apps.",
    doneWhen: "10 real submits logged with links/screenshots if possible.",
    sprintPlus: "Written feedback on up to 5 apps before submit (async).",
  },
  {
    day: 14,
    title: "Applications batch 2 + exit review",
    goal: "Finish targeted apps from Company Map (cap 20) · follow-up scripts · exit scorecard. Do not force spam applies.",
    studentTime: "≤90 min",
    studentWork: [
      "Submit remaining apps from Company Map until every realistic target is logged (hard cap 20). If fewer open drives/postings exist, stop — do not invent junk applies.",
      "Copy follow-up scripts (LinkedIn + email) into tracker.",
      "Self-fill Exit Scorecard: resume · LinkedIn · mocks · apps · confidence (1–5) + “what’s still missing.”",
    ],
    deliverable:
      "Tracker filled for every realistic Company Map target (cap 20) · follow-up scripts · Exit Scorecard · coach exit note.",
    doneWhen:
      "Tracker complete for realistic targets (coach-signed if < 20) and exit review archived (student + coach).",
    sprintPlus:
      "Start 7-day post-sprint async Q&A window (text). No extra live calls unless sold separately.",
  },
];

export const skuCompare = {
  sprint: {
    name: "Sprint",
    price: "₹4,999",
    ships: [
      "14-day outlined course (Days 1–14)",
      "Role brief + 10-row company map",
      "Resume outline → v1 → FINAL (one revision pass)",
      "LinkedIn foundation + featured checklist",
      "STAR bank (8) + intro script",
      "Coach-assigned Day 10 drill (no binge)",
      "2 scored mocks (Day 11 + 12); scorecard ≤24h",
      "Apps tracker: 10 logged apps then realistic remaining (cap 20, not forced)",
      "Exit review — artifacts + system, not a job",
    ],
  },
  sprintPlus: {
    name: "Sprint+",
    price: "₹7,999",
    ships: [
      "Everything in Sprint",
      "Day 1: 2 alternate role titles if first is crowded",
      "Day 2: coach marks which 5 get Day 13–14 app-review support",
      "Day 5 / 13: optional JD-tailored resume variant for top 3 companies",
      "Day 10: deeper assigned drill pack; review before Mock 1",
      "Day 12 kickoff pick: +2 extra mocks across days 11–14 OR 1 extra mock + 1 project/app review (calendared)",
      "Day 13: written feedback on up to 5 apps before submit",
      "Day 14: 7-day post-sprint async Q&A (text)",
    ],
  },
};

export const starterKitNote = {
  title: "₹499 Starter Kit (not the 14-day course)",
  items: [
    "Resume Scorecard (self)",
    "LinkedIn 15-minute fix list",
    "First-10 applications map",
  ],
  upgrade: "Upgrade path to Sprint if they want mocks + human review.",
};

export const fileChecklist = [
  "Role_Brief.pdf",
  "Company_Map.md",
  "Resume_v1.pdf / Resume_FINAL.pdf",
  "LinkedIn_URL.txt + checklist",
  "STAR_Bank.md",
  "Intro_Script.md",
  "Drill_Day10.md",
  "Mock1_Scorecard.md / Mock2_Scorecard.md",
  "Apps_Tracker.csv",
  "Exit_Scorecard.md",
];
