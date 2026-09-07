import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "@/app/checkout/checkout-client";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "Checkout (demo)",
  description: "Mock Razorpay / Stripe checkout for Placement Sprint.",
};

export default function CheckoutPage() {
  return (
    <Shell headerTone="minimal" scarcity>
      <div className="mx-auto max-w-lg px-4 py-12">
        <Suspense fallback={<p className="text-muted-foreground">Loading demo checkout…</p>}>
          <CheckoutClient />
        </Suspense>
      </div>
    </Shell>
  );
}
