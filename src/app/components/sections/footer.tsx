export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="flex flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ResumeMatch. All rights reserved.</p>


        <div className="flex gap-6">
          <a
            href="#"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>

          <a
            href="#"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
