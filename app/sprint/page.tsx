import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ComparisonTable } from "@/components/comparison-table";
import { Cta } from "@/components/cta";
import { ExampleProof } from "@/components/example-proof";
import { FaqSection } from "@/components/faq-section";
import { Section } from "@/components/section";
import { Shell } from "@/components/shell";
import { StickyCta } from "@/components/sticky-cta";
import {
  contact,
  dayPlan,
  forWhom,
  formatInr,
  parentNote,
  seats,
  skus,
  sprintIncludes,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "14-day Placement Sprint (long-form)",
  description:
    "The full Sprint sales page. First 20 seats at ₹3999. ATS resume, LinkedIn, 2 mocks, apps checklist.",
};

export default function SprintSalesPage() {
  return (
    <Shell sticky={<StickyCta />}>
      <article className="paper-grid grain">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="stamp inline-flex rounded-md px-3 py-1 text-[0.65rem] font-semibold text-primary">
            Cold traffic · VSL-style sales letter
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
            Your placement season starts in 14 days — not “someday.”
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground">
            CSE/BCA/BBA sem 6–8 — resume, LinkedIn, 2 mocks, applications
            checklist. First 20 at ₹3999.
          </p>
          <p className="mt-4 text-lg leading-8">
            That is how people miss shortlists. Not because they are stupid —
            because they never pick a start date. Placement Sprint is the start
            date: ATS resume, LinkedIn makeover, 2 mocks, day-by-day apps
            checklist. WhatsApp + Zoom. On in 48 hours. Done in 14 days.
          </p>
          <p className="mt-4 text-lg leading-8">
            First {seats.introCap} seats are{" "}
            <strong>{formatInr(skus.sprintIntro.price)}</strong>. Then{" "}
            {formatInr(skus.sprint.price)}. {seats.introLeft} intro seats
            showing on this page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href="/checkout?sku=sprint-intro">
              Claim intro Sprint {formatInr(skus.sprintIntro.price)}
            </Cta>
            <Cta href={contact.dmSprint} variant="whatsapp" external>
              DM SPRINT
            </Cta>
          </div>
        </div>
      </article>

      <Section
        eyebrow="The ugly part"
        title="Everyone in your class has the same PDF."
        lede="Same TPO template. Same ‘led a team of 4 in a college fest’. Same LinkedIn that a senior will not forward. Same freeze on ‘tell me about yourself’."
      >
        <div className="prose-campus max-w-3xl space-y-4">
          <p>
            Off-campus is worse. Product companies skim 200 resumes before
            breakfast. Service-company drives still filter on keywords and a
            20-second glance. If you look like every other sixth-sem student,
            you do not get the shortlist. You get “we’ll get back.”
          </p>
          <p>
            A six-month course will still be on module 3 when the PPT is this
            Thursday. You do not need another syllabus. You need the artefacts
            that make you look ready — this fortnight.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="The offer"
        title="What ₹3,999 (then ₹4,999) actually buys"
      >
        <div className="grid gap-4">
          {sprintIncludes.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading text-xl">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          One resume revision. Delivery on WhatsApp and Zoom. Sprint+ (
          {formatInr(skus.sprintPlus.price)}): {skus.sprintPlus.blurb} You will
          see it as a one-time offer after checkout.
        </p>
      </Section>

      <Section eyebrow="14-day clock" title="Hour 0 to day 14">
        <ol className="grid gap-4 sm:grid-cols-2">
          {dayPlan.map((d) => (
            <li
              key={d.days}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {d.days}
              </p>
              <h3 className="mt-2 font-heading text-xl">{d.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {d.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Stack" title="Why this beats ‘I’ll do it myself this Sunday’">
        <ComparisonTable />
      </Section>

      <Section
        eyebrow="DEMO aliases"
        title="Shortlist-ready is a look. These are labeled DEMO — not fake alumni logos."
      >
        <ExampleProof />
      </Section>

      <Section eyebrow="Who it’s for" title="If this is your semester, this is your week.">
        <ul className="max-w-3xl space-y-3">
          {forWhom.map((line) => (
            <li key={line} className="flex gap-2 text-[0.95rem] leading-7">
              <Check className="mt-1 size-4 shrink-0 text-forest" />
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Parents" title={parentNote.title} lede={parentNote.body}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Cta href="/checkout?sku=sprint-intro">Pay intro Sprint</Cta>
          <Cta href={contact.parent} variant="outline" external>
            WhatsApp as a parent
          </Cta>
        </div>
      </Section>

      <Section eyebrow="Price" title="First 20 at ₹3,999. Then the dream costs ₹4,999.">
        <div className="rounded-2xl border-2 border-primary bg-card p-6 md:p-8">
          <p className="text-sm font-semibold text-primary">
            {seats.introLeft} of {seats.introCap} intro seats left
          </p>
          <p className="mt-2 font-heading text-4xl">
            {formatInr(skus.sprintIntro.price)}{" "}
            <span className="text-xl text-muted-foreground line-through">
              {formatInr(skus.sprint.price)}
            </span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Same sprint after seat 20 — just more expensive. Soft door:{" "}
            <a href="/starter" className="underline underline-offset-2">
              ₹499 Starter Kit
            </a>
            . Hard door: claim the intro seat. WhatsApp if you want a human
            before you pay.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Cta href="/checkout?sku=sprint-intro">Yes — start my 14 days</Cta>
            <Cta href="/starter" variant="outline">
              I only want ₹499 for now
            </Cta>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Ask it. Then pick a door.">
        <FaqSection />
        <div className="mt-10 rounded-2xl bg-ink p-6 text-paper">
          <h2 className="font-heading text-3xl text-balance">
            Placement season is a date. Put it on the calendar.
          </h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Cta
              href="/checkout?sku=sprint-intro"
              className="bg-saffron text-ink hover:bg-saffron/90"
            >
              Claim {formatInr(skus.sprintIntro.price)}
            </Cta>
            <Cta href={contact.dmSprint} variant="whatsapp" external>
              DM SPRINT
            </Cta>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
