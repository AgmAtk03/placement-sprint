"use client";

import { useSearchParams } from "next/navigation";
import { ThankYouBody } from "@/components/thank-you-body";

export function ThankYouClient() {
  const sku = useSearchParams().get("sku") ?? undefined;
  return <ThankYouBody sku={sku} />;
}
