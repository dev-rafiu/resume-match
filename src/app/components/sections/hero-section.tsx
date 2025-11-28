import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-3xl space-y-10 text-center md:text-left">
      <div className="space-y-6">
        <div className="bg-surface text-muted inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
          <span className="size-2 rounded-full bg-[#21a67a]" />
          AI-Powered Resume Tailoring
        </div>

        <h1 className="text-accent text-center text-5xl leading-[1.1] font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Tailor your resume to every job in {""}
          <span className="text-[#21a67a]">minutes</span>
        </h1>

        <p className="text-muted mx-auto max-w-2xl text-center text-lg leading-relaxed sm:text-xl">
          Upload your resume and job description. Get AI-powered recommendations
          to optimize your resume for each application.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/signup"
          className="w-full cursor-pointer rounded-full bg-[#21a67a] px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#1a8a5e] sm:w-auto"
        >
          Get started
        </Link>

        <Link
          href="#workflow"
          className="border-border bg-surface text-accent hover:border-accent hover:bg-surface w-full cursor-pointer rounded-full border px-8 py-3 text-center text-base font-semibold transition-colors sm:w-auto"
        >
          See how it works
        </Link>
      </div>
    </section>
  )
}
