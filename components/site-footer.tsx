import Link from "next/link";
import { Logo } from "@/components/logo";
import { contact } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            14-day sprint so CSE/BCA/BBA sem 6–8 look shortlist-ready —
            ATS resume, LinkedIn makeover, 2 mocks, day-by-day apps checklist.
            First 20 Sprint seats ₹3999.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Funnel
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Landing
              </Link>
            </li>
            <li>
              <Link href="/starter" className="hover:underline">
                ₹499 Starter Kit
              </Link>
            </li>
            <li>
              <Link href="/upsell" className="hover:underline">
                Sprint upsell
              </Link>
            </li>
            <li>
              <Link href="/sprint" className="hover:underline">
                Sprint sales page
              </Link>
            </li>
            <li>
              <Link href="/thank-you" className="hover:underline">
                Thank-you / WhatsApp
              </Link>
            </li>
            <li>
              <Link href="/funnel" className="hover:underline">
                Full ladder map
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Demo checkout
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Demo payments on this site are mocked (Stripe / Razorpay
            placeholders). WhatsApp uses a placeholder{" "}
            <a
              href={contact.dmSprint}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              wa.me
            </a>{" "}
            link. No student PII is collected for marketing lists.
          </p>
        </div>
      </div>
      <div className="border-t border-border/80 px-4 py-4 text-center text-xs text-muted-foreground">
        Placement Sprint · Campus placement ladder · DEMO social proof labeled
      </div>
    </footer>
  );
}
