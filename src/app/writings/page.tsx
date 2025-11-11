
import { EssaysList } from '@/components/essays-list';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Writings',
    description: 'A collection of essays by Vedang Vatsa on AI, Web3, and the future of technology.',
    alternates: {
      canonical: '/writings',
    },
};

export default function WritingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">Featured Essay</h1>
            <div className="rounded-lg border bg-card p-6">
              <Link href="/the-intuitive-singularity" className="group">
                <h2 className="text-2xl font-semibold text-primary transition-colors group-hover:text-primary/80">
                  The Intuitive Singularity: When AI Develops Superhuman Instinct
                </h2>
                <p className="mt-2 text-muted-foreground">
                  The next frontier of machine intelligence may not be raw computational power, but the emergence of a synthetic intuition that operates beyond human comprehension. This singularity would be driven not by logic, but by a 'gut feeling' that redefines the nature of discovery and existence itself.
                </p>
                <span className="mt-4 inline-block font-medium text-primary group-hover:underline">Read more &rarr;</span>
              </Link>
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-semibold tracking-tight">All Essays</h2>
          <EssaysList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

    
