import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { pageMetadata, generateMetadata } from '@/lib/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.glossary.title,
  description: pageMetadata.glossary.description,
  url: pageMetadata.glossary.url,
});

const glossaryTerms = [
  // AI Terms
  {
    term: "Artificial General Intelligence (AGI)",
    category: "AI",
    definition: "AI that matches or exceeds human-level performance across any intellectual task. Unlike narrow AI (which excels at specific tasks), AGI can learn, reason, and apply knowledge across domains without retraining."
  },
  {
    term: "Large Language Model (LLM)",
    category: "AI",
    definition: "Neural networks trained on massive text datasets to predict and generate human-like text. Examples: GPT-4, Claude, Gemini. Scale determines capability—billions of parameters enable reasoning, coding, and multi-step tasks."
  },
  {
    term: "Prompt Engineering",
    category: "AI",
    definition: "Crafting inputs to AI systems to produce desired outputs. Effective prompts specify context, format, constraints, and examples. Required for working with LLMs."
  },
  {
    term: "Fine-Tuning",
    category: "AI",
    definition: "Training a pre-trained model on a specific dataset to specialize its behavior. Cheaper than training from scratch. Used to adapt general models for domain-specific tasks."
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    category: "AI",
    definition: "Technique where an LLM queries external knowledge bases before generating responses. Reduces hallucination, adds real-time data access, separates knowledge from model weights."
  },
  {
    term: "Hallucination",
    category: "AI",
    definition: "When an AI generates plausible-sounding but false information. Caused by pattern matching without true understanding. Major challenge in deploying LLMs for factual tasks."
  },
  {
    term: "Alignment",
    category: "AI",
    definition: "Making AI systems pursue goals compatible with human values. The alignment problem: specifying what we want when our values conflict and change with context."
  },
  {
    term: "Constitutional AI",
    category: "AI",
    definition: "Training approach where AI evaluates its own outputs against a set of principles. Self-critique and revision loop. Developed by Anthropic to improve harmlessness without human feedback loops."
  },
  {
    term: "Zero-Shot Learning",
    category: "AI",
    definition: "AI performing tasks it wasn't explicitly trained for, using only natural language instructions. Emergent capability of large models. Example: GPT-4 translating languages it rarely saw in training."
  },
  {
    term: "Reinforcement Learning from Human Feedback (RLHF)",
    category: "AI",
    definition: "Training technique where humans rank model outputs, and the model learns to maximize human preferences. Used to align LLMs with helpfulness and harmlessness goals."
  },
  {
    term: "Transformer",
    category: "AI",
    definition: "Neural network architecture using attention mechanisms to process sequential data. Replaced RNNs and LSTMs. Foundation of modern LLMs. Introduced in 'Attention Is All You Need' (2017)."
  },
  {
    term: "Token",
    category: "AI",
    definition: "Smallest unit of text an LLM processes. Roughly 0.75 words in English. Models have context windows measured in tokens (e.g., 128k tokens = ~96k words). Token limits constrain conversation length."
  },
  {
    term: "Embeddings",
    category: "AI",
    definition: "Vector representations of text, images, or other data in high-dimensional space. Semantically similar items cluster together. Enable similarity search, classification, and retrieval systems."
  },
  {
    term: "Agent",
    category: "AI",
    definition: "AI system that perceives its environment, makes decisions, and takes actions to achieve goals. Autonomous operation. Can use tools, access APIs, execute code. Next evolution beyond chatbots."
  },
  {
    term: "Multimodal AI",
    category: "AI",
    definition: "Models that process multiple data types—text, images, audio, video. Examples: GPT-4V (vision), Gemini (native multimodal). Supports tasks requiring combined understanding."
  },

  // Web3 Terms
  {
    term: "Blockchain",
    category: "Web3",
    definition: "Distributed ledger maintained by a network of nodes. Each block contains transactions and cryptographic hash of the previous block. Immutable, transparent, decentralized. Bitcoin and Ethereum are blockchains."
  },
  {
    term: "Smart Contract",
    category: "Web3",
    definition: "Self-executing code deployed on a blockchain. Automatically enforces agreements when conditions are met. No intermediaries. Foundation of DeFi, NFTs, DAOs. Ethereum made them programmable."
  },
  {
    term: "Decentralized Finance (DeFi)",
    category: "Web3",
    definition: "Financial services (lending, trading, insurance) built on blockchain without traditional intermediaries. Smart contracts replace banks. Permissionless, composable, transparent. Total value locked exceeds $50B."
  },
  {
    term: "Non-Fungible Token (NFT)",
    category: "Web3",
    definition: "Unique cryptographic token representing ownership of a specific digital or physical asset. Unlike cryptocurrencies (fungible), each NFT is distinct. Use cases: art, collectibles, credentials, property rights."
  },
  {
    term: "Decentralized Autonomous Organization (DAO)",
    category: "Web3",
    definition: "Organization governed by smart contracts and token holders rather than traditional hierarchy. Proposals, voting, and execution happen on-chain. Coordinates resources without central authority."
  },
  {
    term: "Consensus Mechanism",
    category: "Web3",
    definition: "Protocol for nodes to agree on the state of a blockchain. Proof of Work (Bitcoin) uses computational power. Proof of Stake (Ethereum) uses token ownership. Determines security and energy efficiency."
  },
  {
    term: "Gas Fees",
    category: "Web3",
    definition: "Transaction fees paid to validators for executing operations on a blockchain. Measured in gas units. Price fluctuates with network demand. High fees during congestion—major UX challenge."
  },
  {
    term: "Layer 2",
    category: "Web3",
    definition: "Secondary blockchain built on top of Layer 1 (e.g., Ethereum) to improve scalability. Processes transactions off-chain, settles periodically on mainnet. Examples: Arbitrum, Optimism, Base."
  },
  {
    term: "Wallet",
    category: "Web3",
    definition: "Software for storing private keys and interacting with blockchains. Custodial (exchange holds keys) vs. non-custodial (you control keys). Examples: MetaMask, Coinbase Wallet, Phantom."
  },
  {
    term: "Token",
    category: "Web3",
    definition: "Digital asset on a blockchain. Fungible tokens (ERC-20) are interchangeable currency. Non-fungible tokens (ERC-721) are unique items. Governance tokens grant voting rights. Utility tokens access services."
  },
  {
    term: "Stablecoin",
    category: "Web3",
    definition: "Cryptocurrency pegged to stable assets like USD. USDC and USDT are fiat-backed. DAI is crypto-collateralized. Reduces volatility for on-chain payments and DeFi without price risk."
  },
  {
    term: "Bridge",
    category: "Web3",
    definition: "Protocol for transferring assets between different blockchains. Lock tokens on Chain A, mint equivalent on Chain B. Security risks: bridges are frequent attack vectors. Supports cross-chain DeFi."
  },
  {
    term: "Oracle",
    category: "Web3",
    definition: "Service providing external data to smart contracts. Blockchains can't access off-chain information directly. Chainlink is the largest oracle network. Required for DeFi pricing, weather data, sports results."
  },
  {
    term: "Validator",
    category: "Web3",
    definition: "Node that proposes and verifies new blocks on a Proof of Stake blockchain. Stakes tokens as collateral. Earns rewards for honest behavior, loses stake for malicious actions. Secures the network."
  },
  {
    term: "Liquid Staking",
    category: "Web3",
    definition: "Staking tokens while maintaining liquidity through derivative tokens. Stake ETH, receive stETH (tradeable). Earn staking yield and use stETH in DeFi. Lido pioneered this model."
  },

  // Tech Terms
  {
    term: "API (Application Programming Interface)",
    category: "Tech",
    definition: "Interface for software to communicate with other software. REST APIs use HTTP requests. GraphQL queries specific data. gRPC uses protocol buffers. Abstracts complexity for integration."
  },
  {
    term: "Microservices",
    category: "Tech",
    definition: "Architecture pattern where applications are built as independent, loosely coupled services. Each service handles one business function. Scales well, but harder to operate."
  },
  {
    term: "Kubernetes",
    category: "Tech",
    definition: "Container orchestration platform for deploying, scaling, and managing containerized applications. Automates deployment, load balancing, self-healing. Industry standard for cloud-native apps."
  },
  {
    term: "Serverless",
    category: "Tech",
    definition: "Cloud execution model where providers manage infrastructure. Write functions, provider handles scaling. Pay per execution, not idle time. AWS Lambda, Vercel Functions, Cloudflare Workers."
  },
  {
    term: "CI/CD",
    category: "Tech",
    definition: "Continuous Integration and Continuous Deployment. Automated testing and deployment pipeline. Code commits trigger builds, tests run automatically, passing builds deploy to production. Accelerates iteration."
  },
  {
    term: "Edge Computing",
    category: "Tech",
    definition: "Processing data near the source (edge) rather than centralized cloud. Reduces latency, bandwidth costs. CDNs, IoT devices, 5G networks support edge deployment. Required for real-time applications."
  },
  {
    term: "Zero-Knowledge Proof",
    category: "Tech",
    definition: "Cryptographic method to prove knowledge of information without revealing the information itself. Privacy-preserving verification. Used in zk-rollups, private transactions, identity systems."
  },
  {
    term: "Merkle Tree",
    category: "Tech",
    definition: "Data structure for efficiently verifying integrity of large datasets. Hash leaf nodes, combine hashes up the tree. Bitcoin and Ethereum use Merkle trees. Lets light clients verify transactions."
  },
  {
    term: "Sharding",
    category: "Tech",
    definition: "Database partitioning technique where data is split across multiple machines. Each shard handles subset of data. Improves scalability. Ethereum's roadmap includes sharding for throughput."
  },
  {
    term: "IPFS (InterPlanetary File System)",
    category: "Tech",
    definition: "Peer-to-peer protocol for storing and sharing files. Content-addressed (hash-based), not location-addressed (URL-based). Decentralized alternative to HTTP. Used for NFT metadata, censorship-resistant storage."
  },
  {
    term: "WebAssembly (Wasm)",
    category: "Tech",
    definition: "Binary instruction format for stack-based virtual machine. Compile C++, Rust, Go to run in browsers at near-native speed. Supports high-performance web apps. Used in games, video editing, blockchain clients."
  },
  {
    term: "GraphQL",
    category: "Tech",
    definition: "Query language for APIs. Clients specify exactly what data they need. Reduces over-fetching and under-fetching. Single endpoint, strongly typed schema. Alternative to REST. Developed by Facebook."
  },
  {
    term: "Docker",
    category: "Tech",
    definition: "Platform for packaging applications and dependencies into containers. Containers are lightweight, portable, consistent across environments. Foundation of modern DevOps. Works with Kubernetes for orchestration."
  },
  {
    term: "Message Queue",
    category: "Tech",
    definition: "Asynchronous communication pattern where services send messages to a queue for later processing. Decouples producers and consumers. RabbitMQ, Kafka, AWS SQS. Supports scalable event-driven architectures."
  },
  {
    term: "Rate Limiting",
    category: "Tech",
    definition: "Controlling the number of requests a client can make to a service in a time period. Prevents abuse, ensures fair resource allocation. Token bucket and sliding window are common algorithms."
  },
];

const categories = ["AI", "Web3", "Tech"];

export default function GlossaryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="text-center pt-16 pb-12 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Reference Guide
            </Badge>
            <h1 className="text-5xl font-semibold tracking-tight text-primary">
              Glossary
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Definitions of AI, Web3, and technical terms. Clear explanations without jargon.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-primary">{category}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {glossaryTerms
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card key={item.term} className="hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.term}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.definition}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
