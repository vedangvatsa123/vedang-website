import { BookOpen, Linkedin, Mail, Send, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:px-6">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
          <Link href="/writings" className="hover:text-primary transition-colors">Writings</Link>
          <Link href="/web3-101" className="hover:text-primary transition-colors">Web3 101</Link>
          <Link href="/agentic-web" className="hover:text-primary transition-colors">Agentic Web</Link>
          <Link href="/prompt-engineering-101" className="hover:text-primary transition-colors">Prompt Engineering</Link>
          <Link href="/vibe-coding" className="hover:text-primary transition-colors">Vibe Coding</Link>
          <Link href="/glossary" className="hover:text-primary transition-colors">Glossary</Link>
          <Link href="/profile" className="hover:text-primary transition-colors">Profile</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://x.com/vedangvatsa" aria-label="Twitter" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/vedangvatsa" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.youtube.com/@vedangvatsa" aria-label="YouTube" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en" aria-label="Google Scholar" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <BookOpen className="h-5 w-5" />
          </Link>
          <Link href="https://t.me/vedangvatsa" aria-label="Telegram" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
            <Send className="h-5 w-5" />
          </Link>
          <Link href="mailto:vedangvats@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
