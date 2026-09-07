import type { Metadata } from "next";
import { Check, FileText, GraduationCap, Link2, ListChecks, Video } from "lucide-react";
import { ComparisonTable } from "@/components/comparison-table";
import { Cta } from "@/components/cta";
import { ExampleProof } from "@/components/example-proof";
import { FaqSection } from "@/components/faq-section";
import { PricingLadder } from "@/components/pricing-ladder";
import { Section } from "@/components/section";
import { Shell } from "@/components/shell";
import { StickyCta } from "@/components/sticky-cta";
import {
  brand,
  contact,
  dayPlan,
  forWhom,
  formatInr,
  heroBullets,
  notForWhom,
  parentNote,
  seats,
  skus,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Your placement season starts in 14 days",
  description: brand.tagline,
};

const icons = [FileText, Link2, Video, ListChecks, GraduationCap];

export default function HomePage() {
  return (
    <Shell sticky={<StickyCta />}>
      <div className="paper-grid grain relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="stamp inline-flex rounded-md px-3 py-1 text-[0.65rem] font-semibold text-primary">
              CSE · BCA · BBA · Sem 6–8
            </p>
            <h1 className="mt-5 font-heading text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-[3.35rem]">
              {brand.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              {brand.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Cta href="/checkout?sku=sprint-intro">
                Hard CTA · claim intro Sprint
              </Cta>
              <Cta href="/course" variant="outline">
                See the 14-day course
              </Cta>
              <Cta href="/starter" variant="outline">
                Soft CTA · ₹499 Starter Kit
              </Cta>
              <Cta href={contact.dmSprint} variant="whatsapp" external>
                DM SPRINT
              </Cta>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {seats.introLeft} of {seats.introCap} intro seats left on this
              page · 1 resume revision · Zoom + WhatsApp
            </p>
          </div>
          <aside className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-[0_20px_60px_oklch(0.5_0.15_42/0.12)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              The 14-day stack
            </p>
            <ul className="mt-4 space-y-4">
              {heroBullets.map((item, i) => {
                const Icon = icons[i] ?? Check;
                return (
                  <li key={item.title} className="flex gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="font-semibold">{item.title}</span>
                      <span className="mt-0.5 block text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 rounded-xl bg-ink px-4 py-3 text-sm text-paper">
              Sprint+ at {formatInr(skus.sprintPlus.price)}: deeper mocks
              (HR+tech/behaviour) · application review · priority doubt window ·
              faster feedback.
            </p>
          </aside>
        </div>
      </div>

      <Section
        eyebrow="Who this is for"
        title="If drives are this term and the resume still looks like first year, you’re late — unless you sprint."
        lede={brand.cityNote}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-xl">Buy this if…</h3>
            <ul className="mt-4 space-y-3">
              {forWhom.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-6">
            <h3 className="font-heading text-xl">Skip this if…</h3>
            <ul className="mt-4 space-y-3">
              {notForWhom.map((line) => (
                <li key={line} className="text-sm leading-6 text-muted-foreground">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="plan"
        eyebrow="Mechanism"
        title="Four moves. Fourteen days. Season on."
        lede="Not a 6-month ‘career academy’. A sprint with a start clock."
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {dayPlan.map((d) => (
            <li
              key={d.days}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {d.days}
              </p>
              <h3 className="mt-2 font-heading text-xl">{d.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d.body}</p>
            </li>
          ))}
        </ol>
        <Cta href="/course" variant="outline" className="mt-6">
          Open Days 1–14
        </Cta>
      </Section>

      <Section
        eyebrow="Why not TPO / why not ₹80k"
        title="Campus workshop vs long course vs this sprint"
      >
        <ComparisonTable />
      </Section>

      <Section
        eyebrow="Proof (labeled DEMO)"
        title="What ‘shortlist-ready’ looks like when the files change."
        lede="No fake alumni logos. No stolen LinkedIn screenshots. These are DEMO aliases — composites that show the kind of shift the sprint is built for."
      >
        <ExampleProof />
      </Section>

      <Section
        id="pricing"
        eyebrow="Value ladder"
        title="₹499 Starter Kit. ₹3999 intro Sprint. ₹7999 Sprint+ OTO."
      >
        <PricingLadder />
      </Section>

      <Section eyebrow="Parents" title={parentNote.title} lede={parentNote.body}>
        <Cta href={contact.parent} variant="outline" external>
          WhatsApp as a parent
        </Cta>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="The questions people ask before they DM SPRINT."
      >
        <FaqSection />
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl bg-ink p-6 text-paper sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-2xl text-balance">
            Stop waiting for TPO mail. Start the 14 days.
          </p>
          <Cta
            href="/checkout?sku=sprint-intro"
            className="bg-saffron text-ink hover:bg-saffron/90"
          >
            Claim {formatInr(skus.sprintIntro.price)} seat
          </Cta>
        </div>
      </Section>
    </Shell>
  );
}
