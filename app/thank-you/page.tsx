import type { Metadata } from "next";
import { Suspense } from "react";
import { Shell } from "@/components/shell";
import { ThankYouClient } from "@/app/thank-you/thank-you-client";

export const metadata: Metadata = {
  title: "You're in — WhatsApp next",
  description: "Onboarding for Placement Sprint. DM SPRINT. Start in 48 hours.",
};

export default function ThankYouPage() {
  return (
    <Shell>
      <Suspense fallback={<p className="px-4 py-16 text-muted-foreground">Loading…</p>}>
        <ThankYouClient />
      </Suspense>
    </Shell>
  );
}
