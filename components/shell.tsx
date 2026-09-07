import { ScarcityBar } from "@/components/scarcity-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function Shell({
  children,
  headerTone = "full",
  sticky,
  scarcity = true,
}: {
  children: React.ReactNode;
  headerTone?: "full" | "minimal";
  sticky?: React.ReactNode;
  scarcity?: boolean;
}) {
  return (
    <>
      {scarcity ? <ScarcityBar /> : null}
      <SiteHeader tone={headerTone} />
      <main className="flex-1 pb-28 md:pb-8">{children}</main>
      {headerTone === "full" ? <SiteFooter /> : null}
      {sticky}
    </>
  );
}
