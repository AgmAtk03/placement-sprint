import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "whatsapp";
  className?: string;
  external?: boolean;
};

export function Cta({
  href,
  children,
  variant = "default",
  className,
  external,
}: CtaProps) {
  const styles =
    variant === "whatsapp"
      ? cn(
          buttonVariants({ variant: "default" }),
          "h-12 rounded-xl bg-whatsapp px-5 text-base font-semibold text-white hover:bg-whatsapp/90"
        )
      : cn(
          buttonVariants({
            variant: variant === "default" ? "default" : variant,
          }),
          "h-12 rounded-xl px-5 text-base font-semibold"
        );

  const extra = cn(styles, "inline-flex w-full sm:w-auto", className);

  if (external) {
    return (
      <a href={href} className={extra} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={extra}>
      {children}
    </Link>
  );
}
