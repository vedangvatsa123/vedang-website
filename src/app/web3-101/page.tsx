
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Globe, Layers, ShieldCheck, Wallet, Puzzle, Star } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Fundamentals of Web3 | A Free Course on the Decentralized Internet',
    description: 'A free, self-paced course on the fundamentals of Web3. Learn about blockchain, cryptocurrencies, NFTs, DAOs, and how they are building the next generation of the internet.',
    alternates: {
      canonical: '/web3-101',
    },
};

const faqItems = [
  {
    question: "Is Web3 just about cryptocurrencies like Bitcoin?",
    answer: "No. Cryptocurrencies are a key part of Web3 as they provide economic incentives, but Web3 is a much broader concept. It encompasses decentralized applications (dApps), digital ownership (NFTs), decentralized governance (DAOs), and a more user-centric internet."
  },
  {
    question: "Do I need to be a developer to use Web3?",
    answer: "Not at all. While developers are needed to build Web3 applications, anyone can use them. Using Web3 is as simple as getting a digital wallet (like MetaMask) and interacting with dApps, just like you use a browser to visit websites today. This course will show you how to get started."
  },
  {
    question: "Is Web3 secure? What are the risks?",
    answer: "Web3's decentralization can make it very secure, as there's no single point of failure. However, the responsibility for security shifts more to the user. You are in control of your own assets, which means you must protect your wallet's private keys. Scams and smart contract bugs are real risks, so it's crucial to be cautious and educated."
  },
  {
    question: "What is a 'DAO'?",
    answer: "A DAO is a 'Decentralized Autonomous Organization.' Think of it as an internet-native organization where the rules are encoded in smart contracts on a blockchain. Decisions are made by members, often through voting with tokens, rather than by a central authority like a CEO."
  },
  {
    question: "Are NFTs just overpriced JPEGs?",
    answer: "While some high-profile NFT sales have created that impression, the technology is about much more than digital art. An NFT (Non-Fungible Token) is a unique digital certificate of ownership for any asset, digital or physical. This can include art, music, event tickets, in-game items, property deeds, or even your digital identity."
  },
  {
    question: "How is Web3 different from Web2 (the current internet)?",
    answer: "In Web2, large tech companies control the platforms and your data (think Facebook, Google, Twitter). In Web3, users have more control over their data and digital assets through decentralized networks. It's a shift from a platform-centric internet to a user-centric one."
  },
];


export default function Web3CoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">

        <section className="text-center pt-16 pb-12 bg-gradient-to-b from-background to-secondary/30">
             <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Badge variant="secondary" className="animate-pulse">
                    <Star className="w-3 h-3 mr-1.5" />
                    A Free, Self-Paced Course
                </Badge>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-primary">
                    Fundamentals of Web3
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the next evolution of the internet. This course will demystify Web3, blockchain, and decentralization, giving you the foundational knowledge to understand and navigate the new digital frontier.
                </p>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <Badge variant="outline">By: Vedang Vatsa</Badge>
                    <Badge variant="outline">Prerequisite: An open mind</Badge>
                </div>
            </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16 space-y-12">
            
            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Globe className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 1</CardDescription>
                            <CardTitle className="text-2xl">The Vision of Web3: A New Internet</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                     <p className="text-muted-foreground">This module introduces the core idea behind Web3. We'll trace the internet's evolution from a read-only platform (Web1) to a read-write, corporate-controlled platform (Web2), and finally to the emerging read-write-own paradigm of Web3.</p>
                    <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">What is Web3?</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Web3 is the vision for the next generation of the internet, built on the principles of decentralization, user ownership, and transparency. Unlike the current internet (Web2), where large corporations own the platforms and control user data, Web3 is built on decentralized networks like blockchain. This fundamental shift allows users to own their data, digital assets, and identity.</p>
                                <p>In simple terms: Web1 was read-only. Web2 is read-write, but platforms own your content. Web3 is read-write-own.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">The Role of Blockchain</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Blockchain is the foundational technology that makes Web3 possible. It's a distributed, immutable digital ledger. Let's break that down:</p>
                                <ul className="my-6">
                                    <li><strong>Distributed:</strong> Instead of being stored on a single company's server, the ledger is copied and spread across a network of thousands of computers worldwide. This makes it incredibly resilient and censorship-resistant.</li>
                                    <li><strong>Immutable:</strong> Once a transaction (or 'block') is added to the chain, it cannot be altered or deleted. This creates a trustworthy and transparent record of events.</li>
                                </ul>
                                <p>This technology acts as a global, neutral source of truth, allowing people who don't know or trust each other to coordinate and transact securely without needing a middleman like a bank or a tech company.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Layers className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 2</CardDescription>
                            <CardTitle className="text-2xl">Core Concepts of Decentralization</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">This module dives into the key building blocks of Web3. Understanding these concepts is essential to grasping how the decentralized internet functions.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Cryptocurrencies & Digital Assets</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Cryptocurrencies like Bitcoin (BTC) and Ether (ETH) are the native currencies of blockchain networks. They serve two main purposes:</p>
                                <ul>
                                    <li><strong>Medium of Exchange:</strong> They can be used to pay for goods, services, and transaction fees on the network.</li>
                                    <li><strong>Economic Incentive:</strong> They reward participants (like miners or validators) who contribute to securing and maintaining the network. This eliminates the need for a central company to manage the system.</li>
                                </ul>
                                <p>Beyond currency, blockchain can represent any digital asset, from stocks and bonds to art and music.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">Smart Contracts: Programmable Logic</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>A smart contract is a self-executing contract with the terms of the agreement directly written into code. It runs on the blockchain and automatically executes when certain conditions are met. They are a core component of Web3.</p>
                                 <ul>
                                    <li><strong>Automation:</strong> They automate complex processes without needing intermediaries. For example, a smart contract could automatically release payment to a freelancer once a project is marked as complete.</li>
                                    <li><strong>Transparency:</strong> The code is visible to everyone on the blockchain, ensuring all parties understand the rules.</li>
                                    <li><strong>Trustless:</strong> Because the code is immutable and runs automatically, you can trust the outcome without having to trust the other party.</li>
                                </ul>
                                <p>Smart contracts are what transform blockchain from a simple ledger into a global, programmable computer.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Puzzle className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 3</CardDescription>
                            <CardTitle className="text-2xl">The Web3 Ecosystem</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                 <CardContent className="p-6">
                     <p className="text-muted-foreground">With the core concepts in place, we can now explore the exciting applications and organizations being built on this new foundation.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">dApps: Decentralized Applications</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>A dApp is a decentralized application. While it might look and feel like a regular app or website, its backend logic is powered by smart contracts running on a blockchain network.</p>
                                <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4">
                                  Examples include decentralized finance (DeFi) platforms for lending and borrowing without a bank, social media platforms where users own their data, and games where in-game items are ownable NFTs.
                                </blockquote>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">NFTs: True Digital Ownership</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>An NFT, or Non-Fungible Token, is a unique digital token on a blockchain that represents ownership of an asset. "Non-fungible" means it's one-of-a-kind and cannot be replaced with another identical token (unlike a dollar bill, which is fungible).</p>
                                <p>NFTs can represent ownership of:</p>
                                 <ul>
                                    <li>Digital art and collectibles</li>
                                    <li>Music and media files</li>
                                    <li>In-game items and virtual land</li>
                                    <li>Event tickets and memberships</li>
                                    <li>Real-world assets like real estate</li>
                                </ul>
                                <p>For the first time, NFTs make it possible to prove ownership and scarcity of digital items, giving creators and users new economic models.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">DAOs: Internet-Native Organizations</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>A DAO, or Decentralized Autonomous Organization, is an organization run by code and controlled by its members. Instead of a traditional hierarchy with a CEO and board of directors, the rules of a DAO are encoded in smart contracts. Decisions are typically made through proposals and voting by members who hold the DAO's governance tokens.</p>
                                <p>DAOs are used to manage DeFi protocols, govern creator communities, fund projects, and even purchase real-world assets.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Wallet className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 4</CardDescription>
                            <CardTitle className="text-2xl">Getting Started with Web3</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">Ready to dive in? This module covers the practical first steps to begin your journey into the world of Web3.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                         <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Your Web3 Passport: The Digital Wallet</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>A digital wallet is your primary tool for interacting with the Web3 world. It's an application that lets you store and manage your cryptocurrencies and NFTs. More importantly, it acts as your digital identity, allowing you to log in to dApps without needing a username or password.</p>
                                <ul>
                                    <li><strong>Non-Custodial:</strong> You, and only you, have control over your assets. This is achieved through a "private key" or "seed phrase"—a secret 12 or 24-word password. <strong>You must protect this phrase; losing it means losing access to your assets forever.</strong></li>
                                    <li><strong>Popular Wallets:</strong> The most common wallets are browser extensions like <Link href="https://metamask.io/" target="_blank" rel="noopener noreferrer">MetaMask</Link> or mobile apps like <Link href="https://www.rainbow.me/" target="_blank" rel="noopener noreferrer">Rainbow</Link>.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">Onramps: From Fiat to Crypto</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>To use most dApps, you'll need some cryptocurrency to pay for transaction fees (known as "gas"). The process of converting traditional money (like USD or EUR) into cryptocurrency is called an "onramp."</p>
                                <p>The most common onramps are centralized exchanges like <Link href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">Coinbase</Link> or <Link href="https://www.binance.com/" target="_blank" rel="noopener noreferrer">Binance</Link>. You can link your bank account, purchase crypto, and then transfer it to your personal digital wallet.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <ShieldCheck className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 5</CardDescription>
                            <CardTitle className="text-2xl">The Future of Web3 and its Challenges</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                 <CardContent className="p-6">
                     <p className="text-muted-foreground">Web3 is still a nascent and evolving space. This final module looks at the exciting possibilities and the significant hurdles that lie ahead.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">The Promise of a User-Centric Internet</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>The potential of Web3 is immense. It promises a more equitable internet where creators are better compensated, users have sovereignty over their data, and communities can organize and fund themselves without relying on traditional institutions. It could reshape industries from finance and gaming to social media and governance.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">Challenges on the Horizon</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                               <p>Despite the promise, Web3 faces significant challenges:</p>
                               <ul>
                                    <li><strong>Scalability:</strong> Decentralized networks are often slower and more expensive to use than centralized systems. Solutions like Layer 2s are being developed to address this.</li>
                                    <li><strong>User Experience (UX):</strong> Interacting with Web3 can be complex for beginners. Wallets, gas fees, and seed phrases create friction that needs to be abstracted away for mass adoption.</li>
                                    <li><strong>Regulation:</strong> Governments around the world are still figuring out how to regulate cryptocurrencies and decentralized networks, creating uncertainty.</li>
                                    <li><strong>Security:</strong> While the blockchain itself is secure, users are vulnerable to scams and hacks. Education is the best defense.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <section id="faq" className="py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Some common questions about Web3, answered.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full grid md:grid-cols-2 gap-x-8">
                       {faqItems.map((item, index) => (
                         <AccordionItem key={index} value={`faq-${index + 1}`}>
                            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                       ))}
                    </Accordion>
                </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
