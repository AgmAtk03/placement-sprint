"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqSection({
  items = faqs,
}: {
  items?: { q: string; a: string }[];
}) {
  return (
    <Accordion className="rounded-2xl border border-border bg-card px-4">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`faq-${i}`}>
          <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.95rem] leading-7 text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
