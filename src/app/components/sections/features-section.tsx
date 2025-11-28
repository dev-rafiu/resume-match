import { features } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
          Everything you need
        </h2>
        <p className="mt-4 text-muted">
          Simple, powerful tools to make your resume stand out
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="mb-2 text-xl font-semibold text-accent">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
