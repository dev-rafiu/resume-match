import { metrics } from "@/lib/constants";

export function Scorecard() {
  return (
    <div className="space-y-4 rounded-3xl border border-border bg-surface p-8 shadow-[0px_25px_60px_rgba(17,19,33,0.07)]">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        Scorecard
        <span>Live preview</span>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-dashed border-border p-4">
          <p className="text-sm text-muted">Role focus</p>
          <p className="text-lg font-semibold text-accent">
            Senior Product Designer
          </p>
          <p className="text-xs text-muted">Arc & Co. · Berlin · Hybrid</p>
        </div>

        <div className="space-y-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-baseline justify-between rounded-2xl bg-accent-soft px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {metric.label}
              </p>
              <p className="text-2xl font-semibold text-accent">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border p-4">
          <p className="text-sm font-semibold text-accent">
            What to update next
          </p>

          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>• Quantify your payment experiments (conversion impact)</li>
            <li>• Mention Figma component audits for enterprise clients</li>
            <li>• Add AI co-pilot work to showcase tooling fluency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
