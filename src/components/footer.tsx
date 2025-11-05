import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CurrentYear } from '@/components/current-year';

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
}

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="mt-16 bg-primary py-8 text-primary-foreground md:mt-24">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <p className="text-sm">
          &copy; <CurrentYear /> Vedang. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-2 md:mt-0">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
