export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="">
          © {new Date().getFullYear()} ResumeMatch. Crafted in Ghana for global
          teams.
        </p>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            Product roadmap
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Changelog
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
