
'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          veda.ng
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="/writings" className="text-foreground transition-colors hover:text-primary">
              Writings
            </Link>
            <Link href="/profile" className="text-foreground transition-colors hover:text-primary">
              Profile
            </Link>
            <Link href="/media" className="text-foreground transition-colors hover:text-primary">
              Media
            </Link>
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link
                    href="/writings"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Writings
                  </Link>
                  <Link
                    href="/profile"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/media"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Media
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
