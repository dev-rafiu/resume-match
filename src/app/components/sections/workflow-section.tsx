import { steps } from "@/lib/constants";

export function WorkflowSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-muted">Three simple steps to a tailored resume</p>
      </div>

      <ol className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="space-y-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-lg font-semibold text-accent">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-accent">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
