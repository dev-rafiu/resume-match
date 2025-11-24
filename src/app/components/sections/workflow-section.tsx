import { workflowSteps } from "@/lib/constants";
import { ResultsSnapshot } from "./results-snapshot";

export function WorkflowSection() {
  return (
    <section id="workflow" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-3xl border border-border bg-surface p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Workflow
        </p>

        <h2 className="text-3xl font-semibold text-accent">
          A calm, three-step tailoring flow
        </h2>

        <ol className="space-y-6">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <span className="mt-1 flex size-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-lg font-semibold text-accent">
                  {step.title}
                </p>
                <p className="text-sm text-muted">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <ResultsSnapshot />
    </section>
  );
}
