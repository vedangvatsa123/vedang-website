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
          width: 1200,
          height: 630,
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
    title: 'Vedang Vatsa - Founder of Hashtag Web3, AI & Web3 Thought Leader',
    description:
      'Vedang Vatsa: Founder of Hashtag Web3 (100k+ professionals), Fellow of Royal Society of Arts. Thought leader in AI, blockchain, decentralized economies, and community building.',
    url: '/',
  },
  writings: {
    title: 'Essays & Research Papers on AI & Web3',
    description:
      'Explore Vedang Vatsa\'s latest essays and peer-reviewed research papers on AI, blockchain, stablecoins, and the future of decentralized technology.',
    url: '/writings',
  },
  web3101: {
    title: 'Web3 Fundamentals & Blockchain Ecosystem Explained - Free Course',
    description:
      'Master the blockchain ecosystem and Web3 fundamentals. Free, self-paced course covering blockchain, cryptocurrencies, smart contracts, dApps, NFTs, DAOs, and decentralized systems.',
    url: '/web3-101',
  },
  promptEngineering: {
    title: 'Prompt Engineering 101 - Master AI Interactions',
    description:
      'Learn how to craft effective prompts for AI models. Master the fundamentals of prompt engineering to unlock the full potential of modern AI assistants.',
    url: '/prompt-engineering-101',
  },
  community: {
    title: 'Community Building & Content Strategy',
    description:
      'Discover strategies for building engaged communities and creating high-impact content. Learn from Vedang Vatsa\'s experience scaling Hashtag Web3 to 100k+ members.',
    url: '/community',
  },
  profile: {
    title: 'Vedang Vatsa - Founder, Speaker, Researcher',
    description:
      'Full profile of Vedang Vatsa. Learn about his background, achievements, speaking engagements, and contributions to Web3 and AI communities.',
    url: '/profile',
  },
  media: {
    title: 'Speaking Engagements, Interviews & Media Mentions',
    description:
      'Vedang Vatsa\'s appearances at major conferences, podcasts, publications, and media mentions. Featured in TechCrunch, Forbes, Crypto Briefing, and more.',
    url: '/media',
  },
  agenticWeb: {
    title: 'The Agentic Web - AI Agents & Autonomous Systems',
    description:
      'Explore the future of autonomous AI agents on the web. Understand how agentic systems will transform the internet and digital economy.',
    url: '/agentic-web',
  },
  vibeCoding: {
    title: 'Vibe Coding - Engineering Intuition & Creativity',
    description:
      'Discover the art of vibe coding: combining technical excellence with creative intuition. A guide to engineering with purpose and human-centered design.',
    url: '/vibe-coding',
  },
  guides: {
    title: 'Web3 & Crypto Guides - Market Making, Tokenomics, Taxation',
    description:
      'Expert guides on market making in cryptocurrency, token economics, taxation of digital assets, influencer outreach, and blockchain ecosystem dynamics.',
    url: '/guides',
  },
  seo: {
    title: 'SEO & Growth Marketing Specialist | Vedang Vatsa',
    description:
      'Data-driven growth leader with 8+ years of experience scaling organic acquisition for Web3, FinTech, and mobile products. Expert in SEO, ASO, and community-led growth.',
    url: '/seo',
  },
};
