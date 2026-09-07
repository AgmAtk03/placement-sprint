import { Cta } from "@/components/cta";
import { Shell } from "@/components/shell";

export default function NotFound() {
  return (
    <Shell>
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="font-heading text-4xl">That page missed the shortlist.</h1>
        <p className="mt-3 text-muted-foreground">
          Back to the funnel. Season still starts in 14 days.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Cta href="/">Landing</Cta>
          <Cta href="/funnel" variant="outline">
            Funnel map
          </Cta>
        </div>
      </div>
    </Shell>
  );
}
