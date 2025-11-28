import { SignupForm } from "@/app/components/forms/signup-form";

export const metadata = {
  title: "Sign up | ResumeMatch",
  description: "Create a new ResumeMatch account",
};

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-accent">Create an account</h1>
        <p className="text-muted">
          Get started with ResumeMatch and tailor your resume to every job
        </p>
      </div>

      <SignupForm />
    </div>
  );
}

