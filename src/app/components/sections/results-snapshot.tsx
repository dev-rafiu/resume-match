export function ResultsSnapshot() {
  return (
    <div
      id="stories"
      className="space-y-6 rounded-3xl border border-border bg-surface p-8"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Results snapshot
        </p>

        <h3 className="text-2xl font-semibold text-accent">
          Product marketer, Lagos
        </h3>

        <p className="text-sm text-muted">
          &ldquo;ResumeMatch translated my fintech experience for a climate-tech
          role without losing my voice. Three interviews booked in one
          week.&rdquo;
        </p>
      </div>

      <div className="rounded-2xl border border-dashed border-border p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Before
        </p>

        <p className="mt-2 text-sm text-muted">
          Generic bullet points and no measurable impact. Missing keywords like
          &ldquo;lifecycle campaigns&rdquo; and &ldquo;retention
          experiments.&rdquo;
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          After
        </p>

        <p className="mt-2 text-sm text-accent">
          &ldquo;Scaled lifecycle experiments for 3.2M users, improving
          retention by 14%. Built cross-functional rituals with product, design,
          and data science.&rdquo;
        </p>
      </div>

      <div className="rounded-2xl bg-foreground p-5 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-white">Outcome</p>
        <p className="mt-3 text-3xl font-semibold">Offer accepted · $118k</p>
        <p className="mt-2 text-sm text-white/80">
          Remote · Climate fintech · Series B
        </p>
      </div>
    </div>
  );
}
