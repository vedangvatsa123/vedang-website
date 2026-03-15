"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          veda.ng
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center space-x-2 sm:space-x-4 text-sm font-medium">
            <Link
              href="/writings"
              className="text-foreground transition-colors hover:text-primary px-2 py-1"
            >
              Writings
            </Link>

            {/* Learn Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "learn" ? null : "learn")}
                className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium cursor-pointer"
              >
                Learn
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "learn" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "learn" && (
                <div className="absolute right-0 mt-2 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-[60] animate-in fade-in-0 zoom-in-95">
                  <Link href="/agentic-web" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Agentic Web
                  </Link>
                  <Link href="/vibe-coding" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Vibe Coding
                  </Link>
                  <Link href="/prompt-engineering-101" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Prompt Engineering
                  </Link>
                  <Link href="/web3-101" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Fundamentals of Web3
                  </Link>
                  <Link href="/glossary" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Glossary
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
                className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium cursor-pointer"
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "about" && (
                <div className="absolute right-0 mt-2 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-[60] animate-in fade-in-0 zoom-in-95">
                  <Link href="/profile" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Full Profile
                  </Link>
                  <Link href="/media" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Media & Speaking
                  </Link>
                  <div className="-mx-1 my-1 h-px bg-muted" />
                  <Link href="/seo" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    SEO & Growth
                  </Link>
                  <Link href="/community" onClick={() => setOpenDropdown(null)} className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Content & Community
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Invisible overlay to close dropdown when clicking outside */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-[55]"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
}
