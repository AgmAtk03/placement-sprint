import { cn } from "cn";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-md border-2 border-primary/70 bg-primary text-[0.65rem] font-semibold tracking-[0.12em] text-primary-foreground"
      >
        14
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[1.05rem] font-semibold tracking-tight text-ink">
          Placement Sprint
        </span>
        {!compact ? (
          <span className="mt-0.5 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
            Campus · 14 days · WhatsApp
          </span>
        ) : null}
      </span>
    </span>
  );
}
