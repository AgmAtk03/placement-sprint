import { Cta } from "@/components/cta";
import { formatInr, seats, skus } from "@/lib/site";

export function StickyCta({
  price = skus.sprintIntro.price,
  label = `Intro Sprint · ${seats.introLeft} of ${seats.introCap} left`,
  href = "/checkout?sku=sprint-intro",
  secondaryHref = "/starter",
  secondaryLabel = "or start at ₹499",
}: {
  price?: number;
  label?: string;
  href?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_oklch(0.24_0.04_252/0.08)] md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{label}</p>
          <p className="text-xs text-muted-foreground">
            {formatInr(price)} · then {formatInr(skus.sprint.price)}
          </p>
        </div>
        <Cta href={href} className="h-11 min-w-[44%] shrink-0 px-3 text-sm">
          Claim seat
        </Cta>
      </div>
      <p className="mt-1.5 text-center text-[11px] text-muted-foreground">
        <a href={secondaryHref} className="underline-offset-2 hover:underline">
          {secondaryLabel}
        </a>
      </p>
    </div>
  );
}
