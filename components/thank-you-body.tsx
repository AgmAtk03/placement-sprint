"use client";

import { useSyncExternalStore } from "react";
import { readLead } from "@/components/order-form";
import { Cta } from "@/components/cta";
import { contact, formatInr, skuCatalog, type SkuId } from "@/lib/site";

function isSku(value: string | undefined): value is SkuId {
  return !!value && value in skuCatalog;
}

function subscribe() {
  return () => {};
}

function getLeadName() {
  const lead = readLead();
  return lead?.name?.split(" ")[0] ?? null;
}

export function ThankYouBody({ sku }: { sku?: string }) {
  const name = useSyncExternalStore(subscribe, getLeadName, () => null);
  const item = isSku(sku) ? skuCatalog[sku] : null;
  const isSprint = sku === "sprint" || sku === "sprint-intro" || sku === "sprint-plus";
  const wa = isSprint ? contact.dmSprint : contact.starter;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        You&apos;re in · WhatsApp is the campus
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-tight text-balance">
        {name ? `${name}, ` : ""}placement season has a start date now.
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        {item ? (
          <>
            Demo checkout captured <strong className="text-foreground">{item.name}</strong>{" "}
            at {formatInr(item.price)}. No real card was charged. The steps below are
            exactly what happens after a live Razorpay / Stripe payment.
          </>
        ) : (
          <>
            Open WhatsApp anyway. Send <strong className="text-foreground">SPRINT</strong>{" "}
            or ask for the Starter Kit so we know which door you walked through.
          </>
        )}
      </p>

      <ol className="mt-8 space-y-4">
        {(isSprint
          ? [
              "Tap WhatsApp. Message SPRINT (or SPRINT+).",
              "Send: resume PDF, LinkedIn URL, 3–5 dream / backup companies, course + semester.",
              "We reply inside the 48-hour start window and lock your 14 days.",
              "Resume + LinkedIn land. Two mocks on Zoom. Ten applications ticked. Season is live — not ‘someday’.",
            ]
          : [
              "Tap WhatsApp. Ask for the ₹499 Placement Starter Kit.",
              "Get the resume scorecard, LinkedIn 15-min fix, and first-10 applications map the same evening.",
              "If you bounced the upsell, you can still claim intro Sprint (first 20 at ₹3,999) from the sales page.",
              "Kit is the spark. Sprint is the season.",
            ]
        ).map((step, i) => (
          <li key={step} className="flex gap-3 text-[0.95rem] leading-7">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Cta href={wa} variant="whatsapp" external>
          DM on WhatsApp
        </Cta>
        <Cta href="/sprint" variant="outline">
          See the 14-day Sprint
        </Cta>
      </div>
    </div>
  );
}
