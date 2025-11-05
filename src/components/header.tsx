import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
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
            <Link href="#" className="text-foreground transition-colors hover:text-primary">
              Media
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
