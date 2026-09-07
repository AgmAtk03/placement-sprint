"use client";

import { useSearchParams } from "next/navigation";
import { MockPay } from "@/components/mock-pay";

export function CheckoutClient() {
  const sku = useSearchParams().get("sku") ?? "";
  return <MockPay sku={sku} />;
}
