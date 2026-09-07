import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { Shell } from "@/components/shell";
import {
  formatInr,
  seats,
  skus,
  sprintIncludes,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "One-time offer: 14-day Sprint",
  description:
    "After the ₹499 kit — claim intro Sprint at ₹3,999 before it becomes ₹4,999.",
};

export default function UpsellPage() {
  return (
    <Shell headerTone="minimal" scarcity sticky={null}>
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          One-time offer · not shown again at this price on purpose
        </p>
        <h1 className="mt-4 text-center font-heading text-4xl tracking-tight text-balance md:text-5xl">
          Wait. Don&apos;t walk into placement season with only a template.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          You just grabbed the ₹499 Placement Starter Kit: scorecard, LinkedIn
          15-min fix, first-10 map. The Sprint is the season: ATS resume,
          LinkedIn makeover, 2 mocks, day-by-day apps checklist — start in 48
          hours, done in 14 days. First {seats.introCap} seats{" "}
          <strong className="text-foreground">
            {formatInr(skus.sprintIntro.price)}
          </strong>{" "}
          (regular {formatInr(skus.sprint.price)}). {seats.introLeft} left on
          this page.
        </p>

        <div className="mt-8 rounded-2xl border-2 border-primary bg-card p-6">
          <p className="text-sm font-semibold text-primary">
            Yes — upgrade to the 14-day Placement Sprint
          </p>
          <p className="mt-2 font-heading text-3xl">
            {formatInr(skus.sprintIntro.price)}{" "}
            <span className="text-lg text-muted-foreground line-through">
              {formatInr(skus.sprint.price)}
            </span>
          </p>
          <ul className="mt-4 space-y-2">
            {sprintIncludes.map((item) => (
              <li key={item.title} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>
                  <strong>{item.title}.</strong> {item.detail}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Cta href="/checkout?sku=sprint-intro" className="w-full">
              Yes — I want intro Sprint at {formatInr(skus.sprintIntro.price)}
            </Cta>
            <Cta href="/checkout?sku=sprint-plus" variant="secondary" className="w-full">
              Even stronger: Sprint+ {formatInr(skus.sprintPlus.price)}
            </Cta>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sprint+ OTO: {skus.sprintPlus.blurb}
          </p>
        </div>

        <p className="mt-8 text-center text-sm">
          <a
            href="/thank-you?sku=starter"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            No thanks — I&apos;ll stay on the ₹499 kit while intro seats fill.
          </a>
        </p>
      </div>
    </Shell>
  );
}
