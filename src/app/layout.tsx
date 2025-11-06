

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const VEDANG_VATSA_URL = 'https://veda.ng';

export const metadata: Metadata = {
  metadataBase: new URL(VEDANG_VATSA_URL),
  title: {
    default: 'Vedang Vatsa',
    template: '%s | Vedang Vatsa',
  },
  description:
    'Personal website of Vedang Vatsa, Founder of Hashtag Web3, a 100,000+ member community of AI & Web3 professionals.',
  openGraph: {
    title: 'Vedang Vatsa',
    description: 'Personal website of Vedang Vatsa, Founder of Hashtag Web3, a 100,000+ member community of AI & Web3 professionals.',
    url: VEDANG_VATSA_URL,
    siteName: 'Vedang Vatsa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${VEDANG_VATSA_URL}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Vedang Vatsa',
      },
    ]
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
    images: [`${VEDANG_VATSA_URL}/icon.png`],
  },
  alternates: {
    canonical: VEDANG_VATSA_URL,
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
