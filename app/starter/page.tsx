import type { Metadata } from "next";
import { OrderForm } from "@/components/order-form";
import { Shell } from "@/components/shell";
import { StickyCta } from "@/components/sticky-cta";
import { formatInr, skus, starterIncludes } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "₹499 Placement Starter Kit",
  description: skus.starter.blurb,
};

export default function StarterPage() {
  return (
    <Shell
      sticky={
        <StickyCta
          price={skus.starter.price}
          label="Starter Kit · tripwire"
          href="#order"
          secondaryHref="/checkout?sku=sprint-intro"
          secondaryLabel="skip to intro Sprint"
        />
      }
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Tripwire · ₹499
          </p>
          <h1 className="mt-3 font-heading text-4xl tracking-tight text-balance md:text-5xl">
            Placement Starter Kit — scorecard, LinkedIn 15-min fix, first-10 map.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {skus.starter.blurb} Soft yes. After you pay, we&apos;ll show you
            the 14-day Sprint (intro {formatInr(skus.sprintIntro.price)}) — one
            time, on the next page.
          </p>
          <ul className="mt-6 space-y-3">
            {starterIncludes.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6">
                <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm leading-6">
            This is the front of the ladder: Free → ₹499 → ₹3999/₹4999 Sprint →
            ₹7999 Sprint+. You are on step two.
          </p>
        </div>
        <div id="order">
          <p className="mb-3 text-sm font-semibold">
            Total starts at {formatInr(skus.starter.price)}. Optional bump{" "}
            {formatInr(skus.bump.price)}.
          </p>
          <OrderForm />
        </div>
      </div>
    </Shell>
  );
}
