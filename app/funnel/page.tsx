import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Shell } from "@/components/shell";
import { formatInr, seats, skus } from "@/lib/site";

export const metadata: Metadata = {
  title: "Funnel map",
  description: "DotCom Secrets value ladder for Placement Sprint.",
};

const steps = [
  {
    href: "/",
    kicker: "Traffic",
    title: "Squeeze landing",
    body: "Big promise: placement season starts in 14 days. Soft CTA ₹499. Hard CTA intro Sprint. DEMO social proof.",
  },
  {
    href: "/starter",
    kicker: "Tripwire",
    title: `₹499 ${skus.starter.name}`,
    body: "Order form + optional bump. Mock Razorpay / Stripe. This is the low-ticket yes.",
  },
  {
    href: "/upsell",
    kicker: "OTO 1",
    title: `Sprint intro ${formatInr(skus.sprintIntro.price)}`,
    body: `First ${seats.introCap} seats at intro, then ${formatInr(skus.sprint.price)}. Decline = kit only.`,
  },
  {
    href: "/sprint",
    kicker: "Cold sales",
    title: "Long-form Sprint page",
    body: "Same core SKU for ads / seniors / parents who skipped the tripwire.",
  },
  {
    href: "/upsell-plus",
    kicker: "OTO 2",
    title: `Sprint+ ${formatInr(skus.sprintPlus.price)}`,
    body: "Deeper mocks (HR+tech/behaviour), application review, priority doubt window, faster feedback. Shown after Sprint checkout. One time.",
  },
  {
    href: "/thank-you",
    kicker: "Delivery",
    title: "Thank-you → WhatsApp",
    body: "DM SPRINT. Resume + LinkedIn + roles. Start ≤48h. Done in 14 days.",
  },
];

export default function FunnelPage() {
  return (
    <Shell scarcity={false}>
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Value ladder
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-tight">
          Free → ₹499 → ₹3999/₹4999 Sprint → ₹7999 Sprint+ → WhatsApp
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Classic DotCom Secrets stack for Indian campus traffic. Every box is
          a live page. Checkout is mocked. wa.me is a placeholder.
        </p>

        <ol className="mt-10 space-y-4">
          {steps.map((step, i) => (
            <li key={step.href}>
              <Link
                href={step.href}
                className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {i + 1}. {step.kicker}
                </p>
                <h2 className="mt-1 font-heading text-2xl">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.body}
                </p>
              </Link>
              {i < steps.length - 1 ? (
                <p className="py-1 text-center text-xs text-muted-foreground">
                  ↓
                </p>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-secondary/60 p-5 font-mono text-xs leading-6 overflow-x-auto">
          {`Traffic
  → /                 squeeze landing
  → /course           14-day outlines (product, not a sell step)
  → /starter          ₹499 tripwire + bump
  → /checkout?sku=starter
  → /upsell           Sprint OTO (₹3999 intro / ₹4999)
  → /checkout?sku=sprint-intro
  → /upsell-plus      Sprint+ OTO ₹7999
  → /thank-you        WhatsApp delivery
Cold ads skip to /sprint`}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Cta href="/">Open landing</Cta>
          <Cta href="/course" variant="outline">
            14-day course
          </Cta>
          <Cta href="/starter" variant="outline">
            Start at ₹499
          </Cta>
        </div>
      </div>
    </Shell>
  );
}
