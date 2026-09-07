import { Badge } from "@/components/ui/badge";
import { exampleProof } from "@/lib/site";

export function ExampleProof() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {exampleProof.map((item) => (
        <figure
          key={item.label}
          className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <Badge variant="outline" className="h-auto w-fit rounded-md py-1">
            DEMO alias — not a real student
          </Badge>
          <blockquote className="mt-3 flex-1 text-[0.95rem] leading-7 text-foreground">
            “{item.quote}”
          </blockquote>
          <figcaption className="mt-4 text-xs leading-5 text-muted-foreground">
            <span className="font-semibold text-foreground">{item.label}</span>
            <br />
            {item.meta}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
