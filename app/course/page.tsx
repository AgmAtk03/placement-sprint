import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CourseDays } from "@/components/course-days";
import { Cta } from "@/components/cta";
import { Shell } from "@/components/shell";
import { StickyCta } from "@/components/sticky-cta";
import {
  courseMeta,
  dayRhythm,
  fileChecklist,
  navalLocks,
  skuCompare,
  starterKitNote,
} from "@/lib/course";
import { contact, formatInr, skus } from "@/lib/site";

export const metadata: Metadata = {
  title: "14-day course outlines",
  description:
    "Days 1–14 of Placement Sprint. Recruiter-ready artifacts — not a job offer, CTC, or guaranteed interview.",
};

export default function CoursePage() {
  return (
    <Shell sticky={<StickyCta />}>
      <div className="paper-grid grain">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="stamp inline-flex rounded-md px-3 py-1 text-[0.65rem] font-semibold text-primary">
            Product substance · {courseMeta.audience}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
            {courseMeta.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {courseMeta.promise} {courseMeta.load} Price this earns:{" "}
            {courseMeta.prices}.
          </p>
          <div
            role="alert"
            className="mt-6 rounded-2xl border-2 border-primary bg-card px-4 py-4 text-[0.95rem] leading-7"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Refuse to promise
            </p>
            <p className="mt-2">{courseMeta.refuse}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Cta href="/checkout?sku=sprint-intro">Claim intro Sprint</Cta>
            <Cta href="/starter" variant="outline">
              ₹499 Starter Kit
            </Cta>
            <Cta href={contact.dmSprint} variant="whatsapp" external>
              DM SPRINT
            </Cta>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Naval locks
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight">
          Four rules that stay in the product.
        </h2>
        <ul className="mt-5 space-y-3">
          {navalLocks.map((line) => (
            <li key={line} className="flex gap-2 text-[0.95rem] leading-7">
              <Check className="mt-1 size-4 shrink-0 text-forest" />
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">{courseMeta.load}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <h2 className="font-heading text-3xl tracking-tight">How to run each day</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Day is complete only when that day’s Done criteria are checked.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="border-b border-border bg-secondary/60 text-xs tracking-[0.12em] uppercase">
              <tr>
                <th className="px-4 py-3 font-semibold">Block</th>
                <th className="px-4 py-3 font-semibold">Who</th>
                <th className="px-4 py-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              {dayRhythm.map((row) => (
                <tr key={row.block} className="border-b border-border/70 last:border-0">
                  <th className="px-4 py-3 align-top font-medium">{row.block}</th>
                  <td className="px-4 py-3 align-top text-muted-foreground">{row.who}</td>
                  <td className="px-4 py-3 align-top">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="days" className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-heading text-3xl tracking-tight">Days 1–14</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Goal, student work, deliverable, done-when. Sprint+ deltas where the
          outline names them.
        </p>
        <div className="mt-5">
          <CourseDays />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-heading text-3xl tracking-tight">
          Sprint ₹4,999 vs Sprint+ ₹7,999
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Same 14-day outline. Sprint+ adds calendared extra contact — not a
          second course.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[skuCompare.sprint, skuCompare.sprintPlus].map((col) => (
            <article
              key={col.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {col.name}
              </p>
              <p className="mt-1 font-heading text-2xl">{col.price}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-6">
                {col.ships.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-5">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Tripwire
          </p>
          <h3 className="mt-2 font-heading text-xl">{starterKitNote.title}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {starterKitNote.items.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">{starterKitNote.upgrade}</p>
          <Cta href="/starter" variant="outline" className="mt-4">
            See the ₹499 kit
          </Cta>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-heading text-3xl tracking-tight">Student folder</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Files the 14 days produce. Demo aliases only in marketing (A. Sharma
          etc.). No real PII blast.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {fileChecklist.map((file) => (
            <li
              key={file}
              className="rounded-xl border border-border bg-card px-3 py-2 font-mono text-xs"
            >
              {file}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Coach ships Sprint only with 2 scored mocks in 14 days. Sprint+ only
          if extra contact is calendared at kickoff. Cohort capped to mock
          capacity.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Cta href="/checkout?sku=sprint-intro">
            Start Sprint {formatInr(skus.sprintIntro.price)}
          </Cta>
          <Cta href="/sprint" variant="outline">
            Long-form sales page
          </Cta>
        </div>
      </section>
    </Shell>
  );
}
