import { EssaysList } from '@/components/essays-list';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export default function WritingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
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

      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 text-3xl font-semibold tracking-tight">Writings</h1>
          <EssaysList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
