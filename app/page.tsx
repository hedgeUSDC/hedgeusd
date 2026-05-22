"use client";

import Image from "next/image";
import { Copy, ExternalLink } from "lucide-react";

const contract = "2YCcaBPWtUo3z1ViFCHTaMKcC88sAFRbuJdQZmfbpump";
const pumpUrl = `https://pump.fun/coin/${contract}`;
const dexUrl = "https://dexscreener.com/solana/8g2dvgjntt8gck67jdcbtmfc32vhntu3jakwvuqzmiw9";
const twitterUrl = "https://x.com/hedgeUSDC";
const communityUrl = "https://x.com/i/communities/2039234377243148746";
const jupiterUrl = `https://jup.ag/tokens/${contract}`;

const assets = {
  hero: { src: "/hedge-assets/hero_banner.png", width: 964, height: 432, alt: "HEDGE USDC hero banner" },
  trading: { src: "/hedge-assets/trading_room.png", width: 572, height: 432, alt: "HEDGE trading room" },
  works: { src: "/hedge-assets/how_it_works.png", width: 483, height: 332, alt: "How HEDGE USDC works" },
  tokenomics: { src: "/hedge-assets/tokenomics.png", width: 481, height: 332, alt: "HEDGE tokenomics" },
  gallery: { src: "/hedge-assets/meme_gallery.png", width: 572, height: 332, alt: "HEDGE meme gallery" },
  buy: { src: "/hedge-assets/how_to_buy.png", width: 483, height: 400, alt: "How to buy HEDGE" },
  one: { src: "/hedge-assets/one_hedge.png", width: 481, height: 400, alt: "One HEDGE many possibilities" },
  join: { src: "/hedge-assets/join_movement.png", width: 572, height: 400, alt: "Join the HEDGE movement" }
};

type Asset = (typeof assets)[keyof typeof assets];

function copyContract() {
  navigator.clipboard?.writeText(contract);
}

function ImagePanel({
  asset,
  priority = false,
  className = "",
  children
}: {
  asset: Asset;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden rounded-[8px] border border-[#142338] bg-[#02050c] ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes="(max-width: 900px) 100vw, 50vw"
        className="block h-auto w-full"
      />
      {children}
    </section>
  );
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
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border px-4 py-3 text-xs font-black uppercase tracking-wide transition sm:text-sm ${
        variant === "blue"
          ? "border-cyan/60 bg-usdc text-white shadow-glow hover:bg-cyan hover:text-ink"
          : "border-cyan/35 bg-black/65 text-white hover:border-cyan hover:bg-cyan/15"
      }`}
    >
      {children}
      <ExternalLink size={15} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="noise" />
      <div className="mx-auto max-w-[1536px] space-y-2 p-2">
        <div className="grid items-start gap-2 lg:grid-cols-[1.685fr_1fr]">
          <ImagePanel asset={assets.hero} priority>
            <div className="absolute bottom-[11.5%] left-[4.5%] flex flex-wrap gap-3">
              <Cta href={pumpUrl}>Buy $HEDGE</Cta>
              <Cta href={jupiterUrl}>Buy on Jupiter</Cta>
              <Cta href={communityUrl} variant="dark">Join community</Cta>
            </div>
          </ImagePanel>

          <ImagePanel asset={assets.trading} />
        </div>

        <div className="grid items-start gap-2 lg:grid-cols-[0.844fr_0.84fr_1fr]">
          <ImagePanel asset={assets.works} />
          <ImagePanel asset={assets.tokenomics} />
          <ImagePanel asset={assets.gallery} />
        </div>

        <div className="grid items-start gap-2 lg:grid-cols-[0.844fr_0.84fr_1fr]">
          <ImagePanel asset={assets.buy}>
            <a
              href={pumpUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Buy HEDGE on PumpFun"
              className="absolute left-[17%] top-[30%] h-[10%] w-[66%] rounded-[10px] transition hover:bg-cyan/10"
            />
          </ImagePanel>

          <ImagePanel asset={assets.one} />

          <section className="relative overflow-hidden rounded-[8px] border border-[#142338] bg-[#05101d]">
            <Image
              src={assets.join.src}
              alt={assets.join.alt}
              width={assets.join.width}
              height={assets.join.height}
              sizes="(max-width: 900px) 100vw, 33vw"
              className="block h-auto w-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#05101d_0%,#05101d_55%,rgba(5,16,29,0.35)_74%,rgba(5,16,29,0)_100%)]" />
            <div className="absolute inset-y-0 left-0 z-10 flex w-[58%] flex-col justify-center px-5 sm:px-8">
              <h2 className="font-display text-2xl font-black uppercase leading-none text-white sm:text-4xl">
                Join the movement
              </h2>
              <div className="mt-5 grid gap-3">
                <Cta href={twitterUrl} variant="dark">X / Twitter</Cta>
                <Cta href={communityUrl} variant="dark">X Community</Cta>
                <Cta href={pumpUrl} variant="dark">PumpFun</Cta>
                <Cta href={jupiterUrl} variant="dark">Jupiter</Cta>
                <Cta href={dexUrl} variant="dark">DexScreener</Cta>
              </div>
            </div>
          </section>
        </div>

        <footer className="grid gap-4 rounded-[8px] border border-[#142338] bg-[#02050c] px-5 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white/70 sm:grid-cols-[1fr_1fr_1.2fr_0.7fr]">
          <p className="font-display text-xl font-black tracking-normal text-usdc">HEDGE USDC</p>
          <p>Hedge your risk with USDC pairs.</p>
          <button onClick={copyContract} className="flex min-w-0 items-center gap-2 text-left transition hover:text-cyan">
            <Copy size={15} className="shrink-0" />
            <span className="truncate">{contract}</span>
          </button>
          <p className="text-left text-usdc sm:text-right">2026</p>
        </footer>
      </div>
    </main>
  );
}
