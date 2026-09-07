"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Cta } from "@/components/cta";
import { Button } from "@/components/ui/button";
import { formatInr, skuCatalog, type SkuId } from "@/lib/site";

function isSku(value: string): value is SkuId {
  return value in skuCatalog;
}

export function MockPay({ sku }: { sku: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState<null | "razorpay" | "stripe">(null);

  if (!isSku(sku)) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-card p-6">
        <h1 className="font-heading text-2xl">Unknown offer</h1>
        <p className="mt-2 text-muted-foreground">
          That checkout link is missing a valid SKU. Pick an offer and try again.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Cta href="/starter" variant="outline">
            ₹499 Starter Kit
          </Cta>
          <Cta href="/checkout?sku=sprint-intro">Intro Sprint ₹3,999</Cta>
        </div>
      </div>
    );
  }

  const item = skuCatalog[sku];

  async function pay(method: "razorpay" | "stripe") {
    setBusy(method);
    await new Promise((r) => setTimeout(r, 700));
    const next =
      item.next === "upsell"
        ? `/upsell?from=${sku}`
        : item.next === "upsell-plus"
          ? `/upsell-plus?from=${sku}`
          : `/thank-you?sku=${sku}`;
    router.push(next);
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="rounded-lg bg-secondary px-3 py-2 text-sm">
        Demo checkout. No card is charged. Razorpay and Stripe are placeholders
        until you connect live keys.
      </p>
      <h1 className="mt-5 font-heading text-3xl tracking-tight">Pay {formatInr(item.price)}</h1>
      <p className="mt-2 text-muted-foreground">{item.name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>

      <div className="mt-6 grid gap-3">
        <Button
          className="h-12 rounded-xl text-base font-semibold"
          onClick={() => pay("razorpay")}
          disabled={busy !== null}
        >
          {busy === "razorpay" ? "Opening Razorpay…" : "Pay with Razorpay (demo)"}
        </Button>
        <Button
          variant="outline"
          className="h-12 rounded-xl text-base font-semibold"
          onClick={() => pay("stripe")}
          disabled={busy !== null}
        >
          {busy === "stripe" ? "Opening Stripe…" : "Pay with Stripe (demo)"}
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        After a successful demo payment, the ₹499 kit opens the Sprint OTO.
        Sprint buyers see Sprint+ once. Then WhatsApp onboarding.
      </p>
    </div>
  );
}
