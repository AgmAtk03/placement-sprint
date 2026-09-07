import Link from "next/link";
import { Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { Badge } from "@/components/ui/badge";
import {
  formatInr,
  seats,
  skus,
  sprintIncludes,
  sprintPlusIncludes,
  starterIncludes,
} from "@/lib/site";

export function PricingLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="flex flex-col rounded-2xl border border-border bg-card p-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Tripwire · start tonight
        </p>
        <h3 className="mt-2 font-heading text-2xl">{skus.starter.name}</h3>
        <p className="mt-1 text-3xl font-semibold tracking-tight">
          {formatInr(skus.starter.price)}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {skus.starter.blurb}
        </p>
        <ul className="mt-4 flex-1 space-y-2 text-sm">
          {starterIncludes.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-forest" />
              {item}
            </li>
          ))}
        </ul>
        <Cta href="/starter" variant="outline" className="mt-6">
          Soft start · ₹499
        </Cta>
      </article>

      <article className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-6 shadow-[0_12px_40px_oklch(0.5_0.15_42/0.14)]">
        <Badge className="absolute -top-2.5 left-5 rounded-md">
          First {seats.introCap} seats {formatInr(skus.sprintIntro.price)}
        </Badge>
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          Core SKU · placement season
        </p>
        <h3 className="mt-2 font-heading text-2xl">14-day Sprint</h3>
        <p className="mt-1 text-3xl font-semibold tracking-tight">
          {formatInr(skus.sprintIntro.price)}
          <span className="ml-2 text-lg font-normal text-muted-foreground line-through">
            {formatInr(skus.sprint.price)}
          </span>
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {skus.sprint.blurb} {seats.introLeft} intro seats showing on this page.
        </p>
        <ul className="mt-4 flex-1 space-y-2 text-sm">
          {sprintIncludes.map((item) => (
            <li key={item.title} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-forest" />
              {item.title}
            </li>
          ))}
        </ul>
        <Cta href="/checkout?sku=sprint-intro" className="mt-6">
          Claim intro Sprint
        </Cta>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          After {seats.introCap} seats, price is {formatInr(skus.sprint.price)}.{" "}
          <Link href="/sprint" className="underline-offset-2 hover:underline">
            Read the long-form
          </Link>
        </p>
      </article>

      <article className="flex flex-col rounded-2xl border border-border bg-card p-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          OTO · deeper season
        </p>
        <h3 className="mt-2 font-heading text-2xl">{skus.sprintPlus.name}</h3>
        <p className="mt-1 text-3xl font-semibold tracking-tight">
          {formatInr(skus.sprintPlus.price)}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {skus.sprintPlus.blurb}
        </p>
        <ul className="mt-4 flex-1 space-y-2 text-sm">
          <li className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-forest" />
            Everything in Sprint
          </li>
          {sprintPlusIncludes.map((item) => (
            <li key={item.title} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-forest" />
              {item.title}
            </li>
          ))}
        </ul>
        <Cta href="/checkout?sku=sprint-plus" variant="secondary" className="mt-6">
          Upgrade to Sprint+
        </Cta>
      </article>
    </div>
  );
}
