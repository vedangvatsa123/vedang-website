
'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import * as React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          veda.ng
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center space-x-2 sm:space-x-4 text-sm font-medium">
            <Link href="/writings" className="text-foreground transition-colors hover:text-primary px-2 py-1">
              Writings
            </Link>
            <Link href="/profile" className="text-foreground transition-colors hover:text-primary px-2 py-1">
              Profile
            </Link>
            <Link href="/media" className="text-foreground transition-colors hover:text-primary px-2 py-1">
              Media
            </Link>
            <Link href="/seo" className="text-foreground transition-colors hover:text-primary px-2 py-1">
              SEO
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

    