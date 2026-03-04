export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // AI Terms
  {
    term: "Artificial General Intelligence (AGI)",
    slug: "agi",
    definition: "AI that matches or exceeds human-level performance across any intellectual task. Unlike narrow AI (which excels at specific tasks), AGI can learn, reason, and apply knowledge across domains without retraining.",
    relatedTerms: ["alignment", "superintelligence"]
  },
  {
    term: "Large Language Model (LLM)",
    slug: "llm",
    definition: "Neural networks trained on massive text datasets to predict and generate human-like text. Examples: GPT-4, Claude, Gemini. Scale determines capability—billions of parameters enable reasoning, coding, and multi-step tasks.",
    relatedTerms: ["transformer", "token", "fine-tuning"]
  },
  {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    definition: "Crafting inputs to AI systems to produce desired outputs. Effective prompts specify context, format, constraints, and examples. Required for working with LLMs.",
    relatedTerms: ["llm", "zero-shot-learning"]
  },
  {
    term: "Fine-Tuning",
    slug: "fine-tuning",
    definition: "Training a pre-trained model on a specific dataset to specialize its behavior. Cheaper than training from scratch. Used to adapt general models for domain-specific tasks.",
    relatedTerms: ["llm", "rlhf"]
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    slug: "rag",
    definition: "Technique where an LLM queries external knowledge bases before generating responses. Reduces hallucination, adds real-time data access, separates knowledge from model weights.",
    relatedTerms: ["llm", "hallucination", "embeddings"]
  },
  {
    term: "Hallucination",
    slug: "hallucination",
    definition: "When an AI generates plausible-sounding but false information. Caused by pattern matching without true understanding. Major challenge in deploying LLMs for factual tasks.",
    relatedTerms: ["llm", "rag"]
  },
  {
    term: "Alignment",
    slug: "alignment",
    definition: "Making AI systems pursue goals compatible with human values. The alignment problem: specifying what we want when our values conflict and change with context.",
    relatedTerms: ["agi", "constitutional-ai", "rlhf"]
  },
  {
    term: "Constitutional AI",
    slug: "constitutional-ai",
    definition: "Training approach where AI evaluates its own outputs against a set of principles. Self-critique and revision loop. Developed by Anthropic to improve harmlessness without human feedback loops.",
    relatedTerms: ["alignment", "rlhf"]
  },
  {
    term: "Zero-Shot Learning",
    slug: "zero-shot-learning",
    definition: "AI performing tasks it wasn't explicitly trained for, using only natural language instructions. Emergent capability of large models. Example: GPT-4 translating languages it rarely saw in training.",
    relatedTerms: ["llm", "prompt-engineering"]
  },
  {
    term: "Reinforcement Learning from Human Feedback (RLHF)",
    slug: "rlhf",
    definition: "Training technique where humans rank model outputs, and the model learns to maximize human preferences. Used to align LLMs with helpfulness and harmlessness goals.",
    relatedTerms: ["alignment", "fine-tuning"]
  },
  {
    term: "Transformer",
    slug: "transformer",
    definition: "Neural network architecture using attention mechanisms to process sequential data. Replaced RNNs and LSTMs. Foundation of modern LLMs. Introduced in 'Attention Is All You Need' (2017).",
    relatedTerms: ["llm", "token"]
  },
  {
    term: "Token",
    slug: "token",
    definition: "Smallest unit of text an LLM processes. Roughly 0.75 words in English. Models have context windows measured in tokens (e.g., 128k tokens = ~96k words). Token limits constrain conversation length.",
    relatedTerms: ["llm", "transformer"]
  },
  {
    term: "Embeddings",
    slug: "embeddings",
    definition: "Vector representations of text, images, or other data in high-dimensional space. Semantically similar items cluster together. Enable similarity search, classification, and retrieval systems.",
    relatedTerms: ["rag", "llm"]
  },
  {
    term: "Agent",
    slug: "agent",
    definition: "AI system that perceives its environment, makes decisions, and takes actions to achieve goals. Autonomous operation. Can use tools, access APIs, execute code. Next evolution beyond chatbots.",
    relatedTerms: ["agi", "llm"]
  },
  {
    term: "Multimodal AI",
    slug: "multimodal-ai",
    definition: "Models that process multiple data types—text, images, audio, video. Examples: GPT-4V (vision), Gemini (native multimodal). Supports tasks requiring combined understanding.",
    relatedTerms: ["llm", "transformer"]
  },

  // Web3 Terms
  {
    term: "Blockchain",
    slug: "blockchain",
    definition: "Distributed ledger maintained by a network of nodes. Each block contains transactions and cryptographic hash of the previous block. Immutable, transparent, decentralized. Bitcoin and Ethereum are blockchains.",
    relatedTerms: ["smart-contract", "consensus-mechanism", "validator"]
  },
  {
    term: "Smart Contract",
    slug: "smart-contract",
    definition: "Self-executing code deployed on a blockchain. Automatically enforces agreements when conditions are met. No intermediaries. Foundation of DeFi, NFTs, DAOs. Ethereum made them programmable.",
    relatedTerms: ["blockchain", "defi", "dao"]
  },
  {
    term: "Decentralized Finance (DeFi)",
    slug: "defi",
    definition: "Financial services (lending, trading, insurance) built on blockchain without traditional intermediaries. Smart contracts replace banks. Permissionless, composable, transparent. Total value locked exceeds $50B.",
    relatedTerms: ["smart-contract", "stablecoin", "oracle"]
  },
  {
    term: "Non-Fungible Token (NFT)",
    slug: "nft",
    definition: "Unique cryptographic token representing ownership of a specific digital or physical asset. Unlike cryptocurrencies (fungible), each NFT is distinct. Use cases: art, collectibles, credentials, property rights.",
    relatedTerms: ["blockchain", "smart-contract"]
  },
  {
    term: "Decentralized Autonomous Organization (DAO)",
    slug: "dao",
    definition: "Organization governed by smart contracts and token holders rather than traditional hierarchy. Proposals, voting, and execution happen on-chain. Coordinates resources without central authority.",
    relatedTerms: ["smart-contract", "blockchain", "governance-token"]
  },
  {
    term: "Consensus Mechanism",
    slug: "consensus-mechanism",
    definition: "Protocol for nodes to agree on the state of a blockchain. Proof of Work (Bitcoin) uses computational power. Proof of Stake (Ethereum) uses token ownership. Determines security and energy efficiency.",
    relatedTerms: ["blockchain", "validator"]
  },
  {
    term: "Gas Fees",
    slug: "gas-fees",
    definition: "Transaction fees paid to validators for executing operations on a blockchain. Measured in gas units. Price fluctuates with network demand. High fees during congestion—major UX challenge.",
    relatedTerms: ["blockchain", "validator", "layer-2"]
  },
  {
    term: "Layer 2",
    slug: "layer-2",
    definition: "Secondary blockchain built on top of Layer 1 (e.g., Ethereum) to improve scalability. Processes transactions off-chain, settles periodically on mainnet. Examples: Arbitrum, Optimism, Base.",
    relatedTerms: ["blockchain", "gas-fees", "bridge"]
  },
  {
    term: "Wallet",
    slug: "wallet",
    definition: "Software for storing private keys and interacting with blockchains. Custodial (exchange holds keys) vs. non-custodial (you control keys). Examples: MetaMask, Coinbase Wallet, Phantom.",
    relatedTerms: ["blockchain", "private-key"]
  },
  {
    term: "Governance Token",
    slug: "governance-token",
    definition: "Digital asset on a blockchain. Fungible tokens (ERC-20) are interchangeable currency. Non-fungible tokens (ERC-721) are unique items. Governance tokens grant voting rights. Utility tokens access services.",
    relatedTerms: ["dao", "blockchain", "nft"]
  },
  {
    term: "Stablecoin",
    slug: "stablecoin",
    definition: "Cryptocurrency pegged to stable assets like USD. USDC and USDT are fiat-backed. DAI is crypto-collateralized. Reduces volatility for on-chain payments and DeFi without price risk.",
    relatedTerms: ["defi", "blockchain"]
  },
  {
    term: "Bridge",
    slug: "bridge",
    definition: "Protocol for transferring assets between different blockchains. Lock tokens on Chain A, mint equivalent on Chain B. Security risks: bridges are frequent attack vectors. Supports cross-chain DeFi.",
    relatedTerms: ["blockchain", "layer-2", "defi"]
  },
  {
    term: "Oracle",
    slug: "oracle",
    definition: "Service providing external data to smart contracts. Blockchains can't access off-chain information directly. Chainlink is the largest oracle network. Required for DeFi pricing, weather data, sports results.",
    relatedTerms: ["smart-contract", "defi"]
  },
  {
    term: "Validator",
    slug: "validator",
    definition: "Node that proposes and verifies new blocks on a Proof of Stake blockchain. Stakes tokens as collateral. Earns rewards for honest behavior, loses stake for malicious actions. Secures the network.",
    relatedTerms: ["consensus-mechanism", "blockchain", "liquid-staking"]
  },
  {
    term: "Liquid Staking",
    slug: "liquid-staking",
    definition: "Staking tokens while maintaining liquidity through derivative tokens. Stake ETH, receive stETH (tradeable). Earn staking yield and use stETH in DeFi. Lido pioneered this model.",
    relatedTerms: ["validator", "defi", "stablecoin"]
  },

  // Tech Terms
  {
    term: "API (Application Programming Interface)",
    slug: "api",
    definition: "Interface for software to communicate with other software. REST APIs use HTTP requests. GraphQL queries specific data. gRPC uses protocol buffers. Abstracts complexity for integration.",
    relatedTerms: ["graphql", "microservices"]
  },
  {
    term: "Microservices",
    slug: "microservices",
    definition: "Architecture pattern where applications are built as independent, loosely coupled services. Each service handles one business function. Scales well, but harder to operate.",
    relatedTerms: ["api", "kubernetes", "docker"]
  },
  {
    term: "Kubernetes",
    slug: "kubernetes",
    definition: "Container orchestration platform for deploying, scaling, and managing containerized applications. Automates deployment, load balancing, self-healing. Industry standard for cloud-native apps.",
    relatedTerms: ["docker", "microservices"]
  },
  {
    term: "Serverless",
    slug: "serverless",
    definition: "Cloud execution model where providers manage infrastructure. Write functions, provider handles scaling. Pay per execution, not idle time. AWS Lambda, Vercel Functions, Cloudflare Workers.",
    relatedTerms: ["api", "edge-computing"]
  },
  {
    term: "CI/CD",
    slug: "cicd",
    definition: "Continuous Integration and Continuous Deployment. Automated testing and deployment pipeline. Code commits trigger builds, tests run automatically, passing builds deploy to production. Accelerates iteration.",
    relatedTerms: ["docker", "kubernetes"]
  },
  {
    term: "Edge Computing",
    slug: "edge-computing",
    definition: "Processing data near the source (edge) rather than centralized cloud. Reduces latency, bandwidth costs. CDNs, IoT devices, 5G networks support edge deployment. Required for real-time applications.",
    relatedTerms: ["serverless", "api"]
  },
  {
    term: "Zero-Knowledge Proof",
    slug: "zero-knowledge-proof",
    definition: "Cryptographic method to prove knowledge of information without revealing the information itself. Privacy-preserving verification. Used in zk-rollups, private transactions, identity systems.",
    relatedTerms: ["blockchain", "bridge"]
  },
  {
    term: "Merkle Tree",
    slug: "merkle-tree",
    definition: "Data structure for efficiently verifying integrity of large datasets. Hash leaf nodes, combine hashes up the tree. Bitcoin and Ethereum use Merkle trees. Lets light clients verify transactions.",
    relatedTerms: ["blockchain"]
  },
  {
    term: "Sharding",
    slug: "sharding",
    definition: "Database partitioning technique where data is split across multiple machines. Each shard handles subset of data. Improves scalability. Ethereum's roadmap includes sharding for throughput.",
    relatedTerms: ["blockchain", "layer-2"]
  },
  {
    term: "IPFS (InterPlanetary File System)",
    slug: "ipfs",
    definition: "Peer-to-peer protocol for storing and sharing files. Content-addressed (hash-based), not location-addressed (URL-based). Decentralized alternative to HTTP. Used for NFT metadata, censorship-resistant storage.",
    relatedTerms: ["nft", "blockchain"]
  },
  {
    term: "WebAssembly (Wasm)",
    slug: "webassembly",
    definition: "Binary instruction format for stack-based virtual machine. Compile C++, Rust, Go to run in browsers at near-native speed. Supports high-performance web apps. Used in games, video editing, blockchain clients.",
    relatedTerms: ["api"]
  },
  {
    term: "GraphQL",
    slug: "graphql",
    definition: "Query language for APIs. Clients specify exactly what data they need. Reduces over-fetching and under-fetching. Single endpoint, strongly typed schema. Alternative to REST. Developed by Facebook.",
    relatedTerms: ["api", "microservices"]
  },
  {
    term: "Docker",
    slug: "docker",
    definition: "Platform for packaging applications and dependencies into containers. Containers are lightweight, portable, consistent across environments. Foundation of modern DevOps. Works with Kubernetes for orchestration.",
    relatedTerms: ["kubernetes", "microservices", "cicd"]
  },
  {
    term: "Message Queue",
    slug: "message-queue",
    definition: "Asynchronous communication pattern where services send messages to a queue for later processing. Decouples producers and consumers. RabbitMQ, Kafka, AWS SQS. Supports scalable event-driven architectures.",
    relatedTerms: ["microservices", "api"]
  },
  {
    term: "Rate Limiting",
    slug: "rate-limiting",
    definition: "Controlling the number of requests a client can make to a service in a time period. Prevents abuse, ensures fair resource allocation. Token bucket and sliding window are common algorithms.",
    relatedTerms: ["api"]
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

export function getAllTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
}
