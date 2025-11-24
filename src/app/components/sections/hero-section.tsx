import { industries } from "@/lib/constants";
import { Scorecard } from "./scorecard";

export function HeroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
      <div className="space-y-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          AI Tailoring Platform
          <span className="size-2 rounded-full bg-[#21a67a]" />
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-snug tracking-tight text-accent sm:text-5xl">
            Tailor every resume to the job in minutes, not hours.
          </h1>
          <p className="text-lg text-muted sm:text-xl">
            ResumeMatch analyzes your resume, reads the job description, and
            streams edits that align experience to the role—without recycled
            templates or noisy gradients.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="cursor-pointer rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#161a27]">
            Create a tailored resume
          </button>

          <button className="cursor-pointer rounded-full border border-border px-6 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent">
            Watch demo (2 min)
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {industries.map((industry) => (
            <span key={industry} className="text-muted">
              {industry}
            </span>
          ))}
        </div>
      </div>
      <Scorecard />
    </section>
  );
}
