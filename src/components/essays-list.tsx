import Link from 'next/link';
import { Separator } from './ui/separator';

const essays = [
  {
    title: 'The AI Agent Economy',
    summary:
      "AI agents can now buy and sell things without human help, creating new market patterns that old economic theories can't explain. This article looks at how major platform developments are changing device-to-device economics and what new patterns suggest for market fairness and economic stability.",
    url: '#',
  },
  {
    title: 'From Attention to Intention, The Next Evolution of the Web',
    summary:
      'For two decades, the internet has run on capturing attention. Now, a new model is emerging where autonomous agents act on our intentions, creating a more efficient and purpose-driven web. This piece explores that profound shift.',
    url: '#',
  },
  {
    title: 'An Internet of Lies and How We Can Fix It',
    summary:
      "AI tools like Sora can create video that looks perfectly real. This blurs the line between fact and fiction, creating a huge trust problem. The solution isn't just better hardware, it's a new system of verification, and blockchain could be the answer.",
    url: '#',
  },
  {
    title: "Tracing Blockchain's Decade Long Journey from Hype to Maturity",
    summary:
      'Blockchain has traveled from a niche concept to a globally recognized technology. This piece traces its evolution, examining the dramatic hype cycles of public interest and the steadier, more telling growth of the developer community that builds it.',
    url: '#',
  },
  {
    title: 'A Deep Dive Into the Heartbeat of the Blockchain Developer Ecosystem',
    summary:
      "The true measure of a technology's health isn't just its market cap, but the vibrancy of its developer community. This piece dives into the data on blockchain developers, analyzing their growth, productivity, and what the recent contraction means for the ecosystem.",
    url: '#',
  },
  {
    title: 'Decoding the Blockchain Ecosystem and What Data Tells Us About Its Future',
    summary:
      'Public hype and professional development in blockchain often move at different speeds. This piece decodes the data, exploring the lag between these trends, the influence of cross-project developers, and what it all means for investors and practitioners.',
    url: '#',
  },
];

export function EssaysList() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-6">
        {essays.map((essay, index) => (
          <div key={index}>
            <Link href={essay.url} className="group grid grid-cols-1 md:grid-cols-3 md:gap-8">
              <h3 className="text-lg font-medium text-primary-foreground transition-colors group-hover:text-primary md:col-span-1">
                {essay.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:mt-0 md:col-span-2">{essay.summary}</p>
            </Link>
            {index < essays.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
    </div>
  );
}
