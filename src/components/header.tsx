
'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium outline-none">
                Courses <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                 <DropdownMenuItem asChild>
                  <Link href="/courses/vibe-coding-101">Vibe Coding 101</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses/vibe-coding">Vibe Coding</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground transition-colors hover:text-primary px-2 py-1 text-sm font-medium outline-none">
                Profile <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Full Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/seo">SEO & Growth</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/community">Content & Community</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/media" className="text-foreground transition-colors hover:text-primary px-2 py-1">
              Media
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
