import { BookOpen, Instagram, Linkedin, Mail, Send, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="https://x.com/vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.youtube.com/@vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <BookOpen className="h-5 w-5" />
          </Link>
          <Link href="https://t.me/vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Send className="h-5 w-5" />
          </Link>
          <Link href="mailto:vedangvats@gmail.com" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
