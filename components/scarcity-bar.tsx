import Link from "next/link";
import { seats, skus, formatInr } from "@/lib/site";

export function ScarcityBar() {
  return (
    <div className="bg-ink px-3 py-2 text-center text-[11px] leading-4 font-medium tracking-wide text-paper sm:text-xs">
      First {seats.introCap} Sprint seats{" "}
      <span className="text-gold">{formatInr(skus.sprintIntro.price)}</span>
      {" · "}
      then {formatInr(skus.sprint.price)}
      {" · "}
      <span className="text-saffron">{seats.introLeft} intro seats left on this page</span>
      {" · "}
      <Link href="/checkout?sku=sprint-intro" className="underline underline-offset-2">
        Claim yours
      </Link>
    </div>
  );
}
