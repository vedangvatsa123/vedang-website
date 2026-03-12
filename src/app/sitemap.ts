
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://veda.ng';

// Stable fallback date for content without explicit dates
const CONTENT_FALLBACK_DATE = new Date('2025-01-01');

// Glossary term slugs (from src/lib/glossary.ts)
const GLOSSARY_SLUGS = [
  'agi', 'llm', 'prompt-engineering', 'fine-tuning', 'rag', 'hallucination',
  'alignment', 'constitutional-ai', 'zero-shot-learning', 'rlhf', 'transformer',
  'token', 'embeddings', 'agent', 'multimodal-ai', 'blockchain', 'smart-contract',
  'defi', 'nft', 'dao', 'consensus-mechanism', 'gas-fees', 'layer-2', 'wallet',
  'governance-token', 'stablecoin', 'bridge', 'oracle', 'validator', 'liquid-staking',
  'api', 'microservices', 'kubernetes', 'serverless', 'cicd', 'edge-computing',
  'zero-knowledge-proof', 'merkle-tree', 'sharding', 'ipfs', 'webassembly',
  'graphql', 'docker', 'message-queue', 'rate-limiting',
  'context-window', 'temperature', 'inference', 'chain-of-thought', 'reasoning-model',
  'mcp', 'vector-database', 'model-distillation', 'tokenization', 'amm',
  'seed-phrase', 'mev', 'depin', 'restaking', 'airdrop', 'tokenomics',
  'attention-mechanism', 'quantization', 'agentic-loop', 'synthetic-data',
  'prompt-injection', 'mixture-of-experts', 'grounding', 'liquidity-pool',
  'yield-farming', 'flash-loan', 'layer-1', 'proof-of-work', 'proof-of-stake',
  'cold-wallet', 'wrapped-token', 'cdn', 'websocket', 'oauth', 'load-balancer',
  'monorepo',
];

function getEssayRoutes(): MetadataRoute.Sitemap {
  const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  try {
    const essayFiles = fs.readdirSync(essaysDirectory);
    return essayFiles
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(essaysDirectory, file);
        let lastModified = CONTENT_FALLBACK_DATE;
        try {
          const raw = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(raw);
          if (data.lastUpdated) lastModified = new Date(data.lastUpdated);
          else if (data.date) lastModified = new Date(data.date);
        } catch {
          // use fallback
        }
        return {
          url: `${BASE_URL}/${slug}`,
          lastModified,
        };
      });
  } catch (error) {
    console.error('Could not read essays directory for sitemap:', error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/writings`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/glossary`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/profile`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/media`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/community`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/seo`, lastModified: new Date('2025-03-01') },
    { url: `${BASE_URL}/vibe-coding`, lastModified: new Date('2025-01-01') },
    { url: `${BASE_URL}/prompt-engineering-101`, lastModified: new Date('2025-01-01') },
    { url: `${BASE_URL}/web3-101`, lastModified: new Date('2025-01-01') },
    { url: `${BASE_URL}/agentic-web`, lastModified: new Date('2025-01-01') },
  ];

  const glossaryRoutes: MetadataRoute.Sitemap = GLOSSARY_SLUGS.map(slug => ({
    url: `${BASE_URL}/glossary/${slug}`,
    lastModified: CONTENT_FALLBACK_DATE,
  }));

  const essayRoutes = getEssayRoutes();

  const allRoutes = [...staticPages, ...glossaryRoutes, ...essayRoutes];

  // Deduplicate by URL
  const seen = new Set<string>();
  return allRoutes.filter(route => {
    if (seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  });
}
