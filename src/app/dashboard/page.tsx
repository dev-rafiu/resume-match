import { redirect } from "next/navigation";

export default function DashboardPage() {
  // TODO: Add authentication check
  // const session = await getSession();
  // if (!session) redirect("/login");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-accent">Dashboard</h1>
        <p className="mt-2 text-muted">
          Manage your tailored resumes and track your applications
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-muted">No resumes yet. Create your first tailored resume!</p>
      </div>
    </div>
  );
}

