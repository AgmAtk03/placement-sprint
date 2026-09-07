"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseDays } from "@/lib/course";

export function CourseDays() {
  const [open, setOpen] = useState<string[]>(["day-1"]);

  function jump(day: number) {
    const id = `day-${day}`;
    setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <div className="space-y-3">
      <nav aria-label="Jump to day" className="flex gap-2 overflow-x-auto pb-2">
        {courseDays.map((d) => (
          <button
            key={d.day}
            type="button"
            onClick={() => jump(d.day)}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card text-xs font-semibold hover:border-primary hover:text-primary"
            aria-label={`Open day ${d.day}`}
          >
            {d.day}
          </button>
        ))}
      </nav>
      <Accordion
        multiple
        value={open}
        onValueChange={(next) => setOpen(next)}
        className="rounded-2xl border border-border bg-card px-3 sm:px-4"
      >
        {courseDays.map((d) => (
          <AccordionItem
            key={d.day}
            id={`day-${d.day}`}
            value={`day-${d.day}`}
            className="scroll-mt-24"
          >
            <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline">
              <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="shrink-0 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  Day {d.day}
                </span>
                <span className="font-heading text-lg leading-snug">{d.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-5 text-[0.95rem] leading-7">
              <p>
                <span className="font-semibold text-foreground">Goal. </span>
                <span className="text-muted-foreground">{d.goal}</span>
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  Student work ({d.studentTime})
                </p>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-muted-foreground">
                  {d.studentWork.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              </div>
              <p>
                <span className="font-semibold text-foreground">Deliverable. </span>
                <span className="text-muted-foreground">{d.deliverable}</span>
              </p>
              <p>
                <span className="font-semibold text-foreground">Done when. </span>
                <span className="text-muted-foreground">{d.doneWhen}</span>
              </p>
              {d.sprintPlus ? (
                <p className="rounded-xl border border-dashed border-primary/40 bg-primary/5 px-3 py-2">
                  <span className="font-semibold text-primary">Sprint+. </span>
                  {d.sprintPlus}
                </p>
              ) : null}
              {d.day === 10 ? (
                <p className="rounded-xl border border-border bg-secondary/50 px-3 py-2 text-sm">
                  Hard rule: no soft-skills / mindset day exists in this course
                  — do not add one.
                </p>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
