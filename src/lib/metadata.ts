import { Metadata } from 'next';

interface MetadataParams {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: 'website' | 'article';
}

export function generateMetadata(params: MetadataParams): Metadata {
  const {
    title,
    description,
    url,
    ogImage = '/images/icon.png',
    ogImageAlt = 'Vedang Vatsa',
    type = 'website',
  } = params;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: ogImage,
          width: ogImage === '/images/icon.png' ? 256 : 1200,
          height: ogImage === '/images/icon.png' ? 256 : 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export const pageMetadata = {
  home: {
    title: 'Vedang Vatsa - AI & Web3 Founder',
    description:
      'Vedang Vatsa is founder of Hashtag Web3 (100k+ professionals), Fellow of Royal Society of Arts, and thought leader in AI, blockchain, and decentralized systems.',
    url: '/',
  },
  writings: {
    title: 'Essays on AI & Web3',
    description:
      'Essays and research papers on AI agents, blockchain systems, stablecoins, and decentralized economies by Vedang Vatsa.',
    url: '/writings',
  },
  web3101: {
    title: 'Web3 101 - Blockchain Fundamentals Course',
    description:
      'Free course on blockchain, cryptocurrencies, smart contracts, dApps, NFTs, DAOs, and decentralized systems.',
    url: '/web3-101',
  },
  promptEngineering: {
    title: 'Prompt Engineering 101 - AI Course',
    description:
      'Master prompt engineering fundamentals. Learn to craft effective prompts for LLMs and AI assistants.',
    url: '/prompt-engineering-101',
  },
  community: {
    title: 'Community Building Guide',
    description:
      'Strategies for building engaged communities. Lessons from scaling Hashtag Web3 to 100k+ members.',
    url: '/community',
  },
  profile: {
    title: 'Vedang Vatsa - Founder & AI Researcher',
    description:
      'Profile of Vedang Vatsa: founder of Hashtag Web3, speaker, researcher, and thought leader in AI and Web3.',
    url: '/profile',
  },
  media: {
    title: 'Speaking Engagements & Media',
    description:
      'Speaking engagements, interviews, and media mentions. Featured in TechCrunch, Forbes, Crypto Briefing.',
    url: '/media',
  },
  agenticWeb: {
    title: 'The Agentic Web - AI Agents Course',
    description:
      'Learn about autonomous AI agents and agentic systems transforming the web and digital economy.',
    url: '/agentic-web',
  },
  vibeCoding: {
    title: 'Vibe Coding - Intuitive Engineering',
    description:
      'The art of combining technical excellence with creative intuition in software engineering and design.',
    url: '/vibe-coding',
  },
  seo: {
    title: 'Growth Marketing & SEO Expertise',
    description:
      'Data-driven growth strategies for Web3, FinTech, and mobile. Expert in SEO, ASO, and community-led growth.',
    url: '/seo',
  },
  glossary: {
    title: 'AI & Web3 Glossary',
    description:
      'Comprehensive glossary of AI and Web3 terms: blockchain, smart contracts, LLMs, AGI, DeFi, and more.',
    url: '/glossary',
  },
};
