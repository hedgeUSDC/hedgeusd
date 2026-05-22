"use client";

import Image from "next/image";
import { Copy, ExternalLink } from "lucide-react";

const contract = "2YCcaBPWtUo3z1ViFCHTaMKcC88sAFRbuJdQZmfbpump";
const pumpUrl = `https://pump.fun/coin/${contract}`;
const dexUrl = "https://dexscreener.com/solana/8g2dvgjntt8gck67jdcbtmfc32vhntu3jakwvuqzmiw9";
const twitterUrl = "https://x.com/hedgeUSDC";
const communityUrl = "https://x.com/i/communities/2039234377243148746";

const assets = {
  hero: "/hedge-assets/hero_banner.png",
  trading: "/hedge-assets/trading_room.png",
  works: "/hedge-assets/how_it_works.png",
  tokenomics: "/hedge-assets/tokenomics.png",
  gallery: "/hedge-assets/meme_gallery.png",
  buy: "/hedge-assets/how_to_buy.png",
  one: "/hedge-assets/one_hedge.png",
  join: "/hedge-assets/join_movement.png"
};

function copyContract() {
  navigator.clipboard?.writeText(contract);
}

function ImagePanel({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  children
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden border border-[#111927] bg-black ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 50vw"
        className={`object-cover ${imgClassName}`}
      />
      {children}
    </section>
  );
}

function LinkButton({
  href,
  children,
  dark = false
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] border px-4 py-3 text-sm font-black uppercase transition ${
        dark
          ? "border-cyan/45 bg-black/55 text-white hover:bg-cyan/15"
          : "border-cyan/50 bg-usdc text-white shadow-glow hover:bg-cyan hover:text-ink"
      }`}
    >
      {children}
      <ExternalLink size={16} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="noise" />
      <div className="mx-auto max-w-[1536px] p-1 sm:p-2">
        <div className="grid gap-1 sm:gap-2 lg:grid-cols-[1.78fr_1fr]">
          <ImagePanel
            src={assets.hero}
            alt="HEDGE USDC hero banner"
            priority
            className="h-[430px] sm:h-[560px] lg:h-[430px]"
          >
            <div className="absolute bottom-[12%] left-[4.4%] flex flex-wrap gap-3">
              <LinkButton href={pumpUrl}>Buy $HEDGE</LinkButton>
              <LinkButton href={communityUrl} dark>Join community</LinkButton>
            </div>
          </ImagePanel>

          <ImagePanel
            src={assets.trading}
            alt="HEDGE trading room"
            className="h-[430px]"
          />
        </div>

        <div className="mt-1 grid gap-1 sm:mt-2 sm:gap-2 lg:grid-cols-[0.82fr_1fr_1.05fr]">
          <ImagePanel src={assets.works} alt="How HEDGE USDC works" className="h-[230px]" />
          <ImagePanel src={assets.tokenomics} alt="HEDGE tokenomics" className="h-[230px]" />
          <ImagePanel src={assets.gallery} alt="HEDGE meme gallery" className="h-[230px]" />
        </div>

        <div className="mt-1 grid gap-1 sm:mt-2 sm:gap-2 lg:grid-cols-[0.82fr_1.08fr_0.95fr]">
          <ImagePanel src={assets.buy} alt="How to buy HEDGE" className="h-[285px]">
            <a
              href={pumpUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Buy HEDGE on PumpFun"
              className="absolute bottom-[15%] left-[18%] h-[15%] w-[64%] rounded-[10px] transition hover:bg-cyan/10"
            />
          </ImagePanel>

          <ImagePanel src={assets.one} alt="One HEDGE many possibilities" className="h-[285px]" />

          <ImagePanel
            src={assets.join}
            alt="Join the HEDGE movement"
            className="h-[285px]"
            imgClassName="object-[72%_50%]"
          >
            <div className="absolute inset-y-0 left-0 w-[45%] bg-[#05101d]" />
            <div className="absolute left-7 top-7 z-10 sm:left-10 sm:top-9">
              <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-4xl">
                Join the movement
              </h2>
              <div className="mt-6 grid gap-3 text-sm font-bold">
                <LinkButton href={twitterUrl} dark>X / Twitter</LinkButton>
                <LinkButton href={communityUrl} dark>X Community</LinkButton>
                <LinkButton href={pumpUrl} dark>PumpFun</LinkButton>
                <LinkButton href={dexUrl} dark>DexScreener</LinkButton>
              </div>
            </div>
          </ImagePanel>
        </div>

        <footer className="mt-1 grid gap-4 border border-[#111927] bg-[#02050c] px-5 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white/70 sm:mt-2 sm:grid-cols-[1fr_1fr_1.2fr_0.7fr]">
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
