import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <header className="mb-8 flex items-center justify-between border-b border-border pb-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-white">
              RM
            </div>
            <span className="text-lg font-semibold">ResumeMatch</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/new"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#161a27]"
            >
              New Resume
            </Link>
            {/* TODO: Add logout button when auth is implemented */}
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}

