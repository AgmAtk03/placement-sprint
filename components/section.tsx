export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 max-w-3xl font-heading text-3xl tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {lede}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
