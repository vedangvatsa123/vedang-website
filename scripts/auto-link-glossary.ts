import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');

// Glossary terms with their slug mapping and display label
const GLOSSARY_TERMS: Record<string, { slug: string; label: string }> = {
  'AGI': { slug: 'agi', label: 'AGI' },
  'LLM': { slug: 'llm', label: 'LLM' },
  'Large Language Model': { slug: 'llm', label: 'Large Language Model' },
  'Alignment': { slug: 'alignment', label: 'AI Alignment' },
  'Transformer': { slug: 'transformer', label: 'Transformer' },
  'Embeddings': { slug: 'embeddings', label: 'Embeddings' },
  'RLHF': { slug: 'rlhf', label: 'RLHF' },
  'AI Agent': { slug: 'agent', label: 'AI Agent' },
  'RAG': { slug: 'rag', label: 'RAG' },
  'Constitutional AI': { slug: 'constitutional-ai', label: 'Constitutional AI' },
  'Smart Contract': { slug: 'smart-contract', label: 'Smart Contract' },
  'DAO': { slug: 'dao', label: 'DAO' },
  'Zero-Knowledge Proof': { slug: 'zero-knowledge-proof', label: 'Zero-Knowledge Proof' },
  'API': { slug: 'api', label: 'API' },
  'Blockchain': { slug: 'blockchain', label: 'Blockchain' },
  'Oracle': { slug: 'oracle', label: 'Oracle' },
  'Multimodal AI': { slug: 'multimodal-ai', label: 'Multimodal AI' },
  'DeFi': { slug: 'defi', label: 'DeFi' },
  'IPFS': { slug: 'ipfs', label: 'IPFS' },
  'Merkle Tree': { slug: 'merkle-tree', label: 'Merkle Tree' },
  'Wallet': { slug: 'wallet', label: 'Wallet' },
  'WebAssembly': { slug: 'webassembly', label: 'WebAssembly' },
  'Edge Computing': { slug: 'edge-computing', label: 'Edge Computing' },
  'Consensus Mechanism': { slug: 'consensus-mechanism', label: 'Consensus Mechanism' },
};

function autoLinkGlossary(content: string): string {
  let result = content;
  
  // Sort by length (longest first) to avoid partial replacements
  const sortedTerms = Object.keys(GLOSSARY_TERMS).sort((a, b) => b.length - a.length);
  
  sortedTerms.forEach(term => {
    const { slug, label } = GLOSSARY_TERMS[term];
    
    // Create regex to find the term (case-insensitive, word boundaries)
    // But avoid matching if already in a link or code block
    const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b(?!.*?\\]|.*?\`)`, 'gi');
    
    result = result.replace(regex, (match) => {
      // Skip if already part of a markdown link
      if (result.includes(`[${match}]`)) {
        return match;
      }
      return `[${match}](/glossary/${slug})`;
    });
  });
  
  return result;
}

function processEssay(filePath: string): void {
  try {
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(markdown);
    
    const linkedContent = autoLinkGlossary(content);
    
    // Reconstruct the file with updated content
    const updatedMarkdown = matter.stringify(linkedContent, frontmatter);
    
    fs.writeFileSync(filePath, updatedMarkdown, 'utf-8');
    console.log(`✓ Linked: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error);
  }
}

async function main() {
  if (!fs.existsSync(essaysDirectory)) {
    console.error(`Essays directory not found: ${essaysDirectory}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(essaysDirectory).filter(f => f.endsWith('.mdx'));
  
  console.log(`Found ${files.length} essays. Auto-linking glossary terms...\n`);
  
  files.forEach(file => {
    const filePath = path.join(essaysDirectory, file);
    processEssay(filePath);
  });
  
  console.log(`\n✓ Auto-linking complete! All essays have glossary terms linked inline.`);
  console.log(`\nNext steps:`);
  console.log(`1. Review the changes: git diff src/content/essays/`);
  console.log(`2. If happy: git add src/content/essays/ && git commit -m "feat: auto-link glossary terms in essays"`);
  console.log(`3. If issues: git checkout src/content/essays/ to revert`);
}

main().catch(console.error);
