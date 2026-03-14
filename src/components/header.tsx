"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import * as React from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleOutsideClick = () => {
      setOpenDropdown(null);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleDropdownClick = (e: React.MouseEvent, dropdown: string) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border/50">
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

            <div className="relative">
              <button
                type="button"
                onClick={(e) => handleDropdownClick(e, "learn")}
                className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium outline-none"
              >
                Learn <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === "learn" && (
                <div
                  className="absolute left-0 mt-2 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-0 zoom-in-95"
                  onClick={(e) => setOpenDropdown(null)}
                >
                  <Link
                    href="/agentic-web"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Agentic Web
                  </Link>
                  <Link
                    href="/vibe-coding"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Vibe Coding
                  </Link>
                  <Link
                    href="/prompt-engineering-101"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Prompt Engineering
                  </Link>
                  <Link
                    href="/web3-101"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Fundamentals of Web3
                  </Link>
                  <Link
                    href="/guides"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Guides
                  </Link>
                  <Link
                    href="/glossary"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Glossary
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={(e) => handleDropdownClick(e, "about")}
                className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium outline-none"
              >
                About <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === "about" && (
                <div
                  className="absolute left-0 mt-2 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-0 zoom-in-95"
                  onClick={(e) => setOpenDropdown(null)}
                >
                  <Link
                    href="/profile"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Full Profile
                  </Link>
                  <Link
                    href="/media"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Media & Speaking
                  </Link>
                  <div className="-mx-1 my-1 h-px bg-muted" />
                  <Link
                    href="/seo"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    SEO & Growth
                  </Link>
                  <Link
                    href="/community"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Content & Community
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
