"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function Header() {
  return (
    <header className="md:border-b flex flex-wrap items-center gap-4 border-b-0 border-border pb-6">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-foreground text-sm font-semibold tracking-tight text-white">
          RM
        </div>

        <p className="text-base font-semibold">ResumeMatch</p>
      </div>

      <nav className="ml-auto hidden gap-6 text-sm text-muted md:flex">
        <Link
          href="#features"
          className="transition-colors hover:text-foreground"
        >
          Features
        </Link>


        <Link
          href="#workflow"
          className="transition-colors hover:text-foreground"
        >
          Workflow
        </Link>

        
        <Link
          href="#stories"
          className="transition-colors hover:text-foreground"
        >
          Stories
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-end gap-3 text-sm md:flex-initial">
        <div className="hidden gap-3 md:flex">
          <Link
            href="/login"
            className="cursor-pointer rounded-full border border-border px-4 py-2 font-medium text-foreground transition-colors hover:border-foreground"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="cursor-pointer rounded-full bg-[#21a67a] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a8a5e]"
          >
            Get started
          </Link>
        </div>

        {/* mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-surface focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-full sm:w-[400px]">
            <SheetHeader className="sr-only">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col space-y-4 mt-10">
              <Link
                href="#features"
                className="text-base font-medium text-foreground transition-colors hover:text-muted"
              >
                Features
              </Link>

              <Link
                href="#workflow"
                className="text-base font-medium text-foreground transition-colors hover:text-muted"
              >
                Workflow
              </Link>

              <Link
                href="#stories"
                className="text-base font-medium text-foreground transition-colors hover:text-muted"
              >
                Stories
              </Link>

              <div className="flex flex-col gap-3 pt-6">
                <Link
                  href="/login"
                  className="w-full rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  Sign in
                </Link>

                <Link
                  href="/signup"
                  className="w-full rounded-full bg-[#21a67a] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#1a8a5e]"
                >
                  Get started
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
