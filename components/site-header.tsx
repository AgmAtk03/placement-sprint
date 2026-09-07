"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Cta } from "@/components/cta";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contact } from "@/lib/site";

const links = [
  { href: "/", label: "Offer" },
  { href: "/sprint", label: "14-day Sprint" },
  { href: "/starter", label: "₹499 Starter Kit" },
  { href: "/funnel", label: "How the funnel works" },
];

export function SiteHeader({
  tone = "full",
}: {
  tone?: "full" | "minimal";
}) {
  if (tone === "minimal") {
    return (
      <header className="border-b border-border/70 bg-paper/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
          <Link href="/" aria-label="Placement Sprint home">
            <Logo compact />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" aria-label="Placement Sprint home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={contact.dmSprint}
            className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DM SPRINT
          </a>
          <Cta href="/starter" className="h-10 px-4 text-sm">
            Get ₹499 Kit
          </Cta>
        </div>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="bg-paper">
            <SheetHeader>
              <SheetTitle>
                <Logo compact />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-2 py-3 text-base font-medium hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={contact.dmSprint}
                className="rounded-lg px-2 py-3 text-base font-medium text-forest"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp · DM SPRINT
              </a>
              <Link
                href="/starter"
                className="mt-2 rounded-xl bg-primary px-3 py-3 text-center font-semibold text-primary-foreground"
              >
                Get the ₹499 Starter Kit
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
