"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, ExternalLink, ShieldCheck, Waves, Zap } from "lucide-react";

const contract = "2YCcaBPWtUo3z1ViFCHTaMKcC88sAFRbuJdQZmfbpump";
const pumpUrl = `https://pump.fun/coin/${contract}`;
const dexUrl = "https://dexscreener.com/solana/8g2dvgjntt8gck67jdcbtmfc32vhntu3jakwvuqzmiw9";
const twitterUrl = "https://x.com/hedgeUSDC";
const communityUrl = "https://coincommunities.org/communities/2YCcaBPWtUo3z1ViFCHTaMKcC88sAFRbuJdQZmfbpump";
const jupiterUrl = `https://jup.ag/tokens/${contract}`;

const assets = {
  hero: { src: "/hedge-assets/hero_banner.png", width: 964, height: 432, alt: "HEDGE USDC hero banner" },
  trading: { src: "/hedge-assets/trading-room-v2.png", width: 1672, height: 941, alt: "HEDGE trading room" },
  works: { src: "/hedge-assets/how-it-works-v2.png", width: 1672, height: 941, alt: "How HEDGE USDC works" },
  tokenomics: { src: "/hedge-assets/tokenomics-v2.png", width: 1717, height: 916, alt: "HEDGE tokenomics" },
  gallery: { src: "/hedge-assets/meme-gallery-v2.png", width: 1672, height: 941, alt: "HEDGE meme gallery" },
  buy: { src: "/hedge-assets/how-to-buy-v2.png", width: 1672, height: 941, alt: "How to buy HEDGE" },
  one: { src: "/hedge-assets/one-hedge-v2.png", width: 1672, height: 941, alt: "One HEDGE many possibilities" },
  join: { src: "/hedge-assets/join-movement-v2.png", width: 1672, height: 941, alt: "Join the HEDGE movement" }
};

type Asset = (typeof assets)[keyof typeof assets];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

function copyContract() {
  navigator.clipboard?.writeText(contract);
}

function Cta({
  href,
  children,
  variant = "blue"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "blue" | "dark";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-black uppercase tracking-wide transition ${
        variant === "blue"
          ? "border-cyan/60 bg-usdc text-white shadow-glow hover:bg-cyan hover:text-ink"
          : "border-cyan/35 bg-black/55 text-white hover:border-cyan hover:bg-cyan/15"
      }`}
    >
      {children}
      <ExternalLink size={16} />
    </a>
  );
}

function AssetImage({ asset, priority = false }: { asset: Asset; priority?: boolean }) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes="(max-width: 900px) 100vw, 50vw"
      className="h-auto w-full rounded-[8px] border border-cyan/15 shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
    />
  );
}

function Section({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section {...reveal} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </motion.section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.32em] text-cyan">{children}</p>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="noise" />

      <div className="border-b border-white/10 bg-black px-3 py-2">
        <div className="mx-auto max-w-7xl rounded-[6px] border border-dashed border-white/70 bg-[#05070c] p-1 shadow-[0_0_22px_rgba(255,255,255,0.22),0_0_34px_rgba(39,117,202,0.18)]">
          <div className="flex flex-col gap-3 rounded-[4px] border border-white/25 px-3 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-white/85 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <div className="flex min-w-0 items-center gap-3">
              <span className="text-white/60">Contract:</span>
              <span className="truncate text-white">{contract}</span>
            </div>
            <button
              onClick={copyContract}
              className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/70 px-4 py-2 text-xs text-white transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              <Copy size={17} />
              Copy
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-cyan/15 bg-black/82 px-3 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="font-display text-2xl font-black uppercase tracking-tight text-white">
            HEDGE <span className="text-usdc">USDC</span>
          </a>
          <div className="flex flex-wrap gap-2">
            <Cta href={pumpUrl}>PumpFun</Cta>
            <Cta href={jupiterUrl}>Jupiter</Cta>
            <Cta href={dexUrl} variant="dark">DexScreener</Cta>
            <Cta href={communityUrl} variant="dark">Community</Cta>
          </div>
        </div>
      </header>

      <div className="overflow-hidden border-b border-cyan/15 bg-usdc/10 py-2">
        <div className="ticker-tape flex w-[200%] gap-8 whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] text-cyan/90">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index}>USDC pairs are the new meta - hedge volatility - trade $HEDGE</span>
          ))}
        </div>
      </div>

      <Section className="grid min-h-[78vh] items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <Eyebrow>PumpFun USDC Pair Meta</Eyebrow>
          <h1 className="mt-5 font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
            HEDGE
            <span className="block text-usdc blue-text-glow">USDC</span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-tight text-white/92">
            Hedge your risk with USDC pairs.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-steel">
            A cinematic memecoin built around the cleanest narrative on PumpFun: USDC-paired trading, calmer curve psychology, and a hedgehog who does not flinch when SOL gets dramatic.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href={pumpUrl}>Buy $HEDGE</Cta>
            <Cta href={jupiterUrl}>Buy on Jupiter</Cta>
            <Cta href={communityUrl} variant="dark">Join Community</Cta>
          </div>
        </div>
        <AssetImage asset={assets.hero} priority />
      </Section>

      <Section className="grid items-center gap-10 lg:grid-cols-[1fr_0.86fr]">
        <AssetImage asset={assets.trading} />
        <div>
          <Eyebrow>Market Mood</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
            SOL may dump. <span className="text-usdc">HEDGE stays chill.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            The joke is simple, but the positioning is sharp: traders get a meme that speaks to stability, liquidity, and less direct exposure to SOL price swings.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["USDC pair", "Same curve", "Less SOL beta"].map((item) => (
              <div key={item} className="rounded-[8px] border border-cyan/20 bg-cyan/10 p-4 text-sm font-black uppercase text-cyan">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Mechanics</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">How the HEDGE thesis works.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Keep the meme velocity, reduce the SOL volatility story, and make the buying path obvious. The image below stays intact, then the real buttons live below it.
          </p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <AssetImage asset={assets.works} />
          <div className="grid gap-4">
            {[
              ["USDC paired", "The core narrative: a cleaner quote asset for the curve."],
              ["Less SOL exposure", "The meme can move without every trader staring at SOL candles."],
              ["Same mechanics", "Familiar PumpFun flow, fresher market story."],
              ["Stronger community", "A simple mascot and a repeatable Twitter-native joke."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display text-xl font-black uppercase text-white">{title}</h3>
                <p className="mt-2 leading-7 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Tokenomics</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">Simple enough to meme. Clean enough to share.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            No complicated pitch deck energy. HEDGE is community driven, liquidity focused, and built to own the USDC-pair conversation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-black uppercase text-cyan">Community driven</span>
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-black uppercase text-cyan">Liquidity focused</span>
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-black uppercase text-cyan">Meme powered</span>
          </div>
        </div>
        <AssetImage asset={assets.tokenomics} />
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AssetImage asset={assets.one} />
          <div>
            <Eyebrow>Brand Energy</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">One hedgehog. Many timeline formats.</h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              This is the part that makes a memecoin travel: a mascot people can remix, a one-line thesis people remember, and visuals that look like they came from a real launch.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Meme Gallery</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">HEDGE in every market condition.</h2>
        </div>
        <AssetImage asset={assets.gallery} />
      </Section>

      <Section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>How To Buy</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">The path is obvious now.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            The graphic explains the flow. The buttons below are the actual click targets, cleanly separated from the artwork.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Cta href={pumpUrl}>Buy on PumpFun</Cta>
            <Cta href={jupiterUrl}>Buy on Jupiter</Cta>
            <Cta href={dexUrl} variant="dark">View DexScreener</Cta>
            <Cta href={communityUrl} variant="dark">Join Community</Cta>
          </div>
        </div>
        <AssetImage asset={assets.buy} />
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Community</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl">Join the movement.</h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            Follow the official account, join the X community, watch the chart, and keep the memes calm while the market does market things.
          </p>
        </div>
        <div className="relative">
          <AssetImage asset={assets.join} />
          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            <Cta href={twitterUrl} variant="dark">X / Twitter</Cta>
            <Cta href={communityUrl} variant="dark">X Community</Cta>
            <Cta href={pumpUrl}>PumpFun</Cta>
            <Cta href={jupiterUrl}>Jupiter</Cta>
            <Cta href={dexUrl} variant="dark">DexScreener</Cta>
          </div>
        </div>
      </Section>

      <footer className="mx-auto grid max-w-7xl gap-4 border-t border-[#142338] px-4 py-8 text-xs font-bold uppercase tracking-[0.22em] text-white/70 sm:grid-cols-[1fr_1fr_1.2fr_0.7fr] sm:px-6 lg:px-8">
        <p className="font-display text-xl font-black tracking-normal text-usdc">HEDGE USDC</p>
        <p>Hedge your risk with USDC pairs.</p>
        <button onClick={copyContract} className="flex min-w-0 items-center gap-2 text-left transition hover:text-cyan">
          <Copy size={15} className="shrink-0" />
          <span className="truncate">{contract}</span>
        </button>
        <p className="text-left text-usdc sm:text-right">2026</p>
      </footer>
    </main>
  );
}
