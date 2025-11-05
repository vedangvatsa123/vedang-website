import { ProfileCard } from '@/components/profile-card';
import { PublicationsList } from '@/components/publications-list';
import { EssaysList } from '@/components/essays-list';
import { Footer } from '@/components/footer';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-7xl">
            Vedang
          </h1>
          <p className="mt-2 text-lg text-muted-foreground md:text-xl">
            Computational Linguist & AI Researcher
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto space-y-16 px-4 md:space-y-24 md:px-6">
          <ProfileCard
            name="Vedang"
            title="Computational Linguist & AI Researcher"
            bio="I am a passionate researcher exploring the intersections of language, cognition, and artificial intelligence. My work focuses on developing more natural and intuitive ways for humans to interact with complex systems."
            socialLinks={socialLinks}
          />
          <PublicationsList />
          <EssaysList />
        </div>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
}
