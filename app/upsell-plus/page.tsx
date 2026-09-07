import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { Shell } from "@/components/shell";
import { formatInr, skus, sprintPlusIncludes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sprint+ one-time offer",
  description:
    "Deeper mocks, application review, priority doubt window, faster feedback. ₹7,999.",
};

export default function UpsellPlusPage() {
  return (
    <Shell headerTone="minimal">
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Last upsell · Sprint+ · {formatInr(skus.sprintPlus.price)}
        </p>
        <h1 className="mt-4 text-center font-heading text-4xl tracking-tight text-balance">
          Sprint+ — deeper mocks, application review, priority doubts, faster feedback.
        </h1>
        <p className="mt-4 text-center text-lg leading-8 text-muted-foreground">
          You&apos;re in the 14-day Sprint. ATS resume, LinkedIn makeover, 2
          mocks, day-by-day apps checklist — locked. Sprint+ is the OTO if you
          want the interview probed harder and the applications marked before
          you submit.
        </p>
        <div className="mt-8 rounded-2xl border-2 border-primary bg-card p-6">
          <h2 className="font-heading text-2xl">₹7999 · shown once</h2>
          <ul className="mt-4 space-y-3">
            {sprintPlusIncludes.map((item) => (
              <li key={item.title} className="flex gap-2 text-sm leading-6">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>
                  <strong>{item.title}.</strong> {item.detail}
                </span>
              </li>
            ))}
          </ul>
          <Cta href="/checkout?sku=sprint-plus" className="mt-6 w-full">
            Yes — add Sprint+ {formatInr(skus.sprintPlus.price)}
          </Cta>
        </div>
        <p className="mt-8 text-center text-sm">
          <a
            href="/thank-you?sku=sprint-intro"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            No thanks — two mocks and the checklist are enough.
          </a>
        </p>
      </div>
    </Shell>
  );
}
