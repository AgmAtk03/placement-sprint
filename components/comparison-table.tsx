import { comparisonRows } from "@/lib/site";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="border-b border-border bg-secondary/60 text-xs tracking-[0.12em] uppercase">
          <tr>
            <th className="px-4 py-3 font-semibold">Scope</th>
            <th className="px-4 py-3 font-semibold">Campus workshop</th>
            <th className="px-4 py-3 font-semibold">Long course</th>
            <th className="px-4 py-3 font-semibold">This sprint</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-border/70 last:border-0">
              <th className="px-4 py-3 align-top font-medium">{row.label}</th>
              <td className="px-4 py-3 align-top text-muted-foreground">{row.campus}</td>
              <td className="px-4 py-3 align-top text-muted-foreground">{row.course}</td>
              <td className="px-4 py-3 align-top font-medium">{row.sprint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
