import { LoginForm } from "@/app/components/forms/login-form";

export const metadata = {
  title: "Sign in | ResumeMatch",
  description: "Sign in to your ResumeMatch account",
};

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-accent">Welcome back</h1>
        <p className="text-muted">
          Sign in to your account to continue tailoring your resume
        </p>
      </div>

      <LoginForm />
    </div>
  );
}

