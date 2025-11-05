import { BookOpen, Instagram, Linkedin, Mail, Send, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <BookOpen className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Send className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
