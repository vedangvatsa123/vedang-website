import { EssaysList } from '@/components/essays-list';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Writings',
    description: 'A collection of essays by Vedang Vatsa on AI, Web3, and the future of technology.',
};

export default function WritingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

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
