
import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://veda.ng'),
  title: {
    default: 'Vedang Vatsa',
    template: '%s | Vedang Vatsa',
  },
  description:
    "Official website of Vedang Vatsa, a thought leader in AI and Web3, and the founder of Hashtag Web3, a global community of over 100,000 professionals.",
  openGraph: {
    title: 'Vedang Vatsa',
    description: 'Personal website of Vedang Vatsa, Founder of Hashtag Web3, a 100,000+ member community of AI & Web3 professionals.',
    url: '/',
    siteName: 'Vedang Vatsa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/icon.png',
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
    images: ['/images/icon.png'],
  },
  alternates: {
    canonical: '/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vedang Vatsa',
  url: 'https://veda.ng',
  logo: 'https://veda.ng/images/icon.png',
  sameAs: [
    'https://linkedin.com/in/vedangvatsa',
    'https://www.instagram.com/vedangvatsa',
    'https://www.youtube.com/@vedangvatsa',
    'https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en',
    'https://x.com/vedangvatsa',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="alternate" type="application/json" href="/deeprank.json" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
