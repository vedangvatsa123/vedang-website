import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'Vedang Vatsa',
    template: '%s | Vedang Vatsa',
  },
  description:
    'Personal website of Vedang Vatsa, Founder of Hashtag Web3, a 100,000+ member community of AI & Web3 professionals.',
  openGraph: {
    title: 'Vedang Vatsa',
    description: 'Personal website of Vedang Vatsa, Founder of Hashtag Web3, a 100,000+ member community of AI & Web3 professionals.',
    url: 'https://veda.ng',
    siteName: 'Vedang Vatsa',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Vedang Vatsa',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head />
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
