import { featureHighlights } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section id="features" className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <header className="">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Feature set
          </p>
          <h2 className="text-3xl font-semibold text-accent">
            Purpose-built for job seekers
          </h2>
        </header>

        <p className="max-w-xl text-base text-muted">
          Every block is intentionally minimal—no cluttered gradients, only the
          signals you need to align experience with opportunity.
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {featureHighlights.map((feature) => (
          <li
            key={feature.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-6"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {feature.detail}
              </p>
              <h3 className="text-xl font-semibold text-accent">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
            <div className="mt-6 text-sm font-semibold text-accent">
              See how it works →
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
