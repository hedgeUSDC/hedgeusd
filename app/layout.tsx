import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEDGE USDC | $HEDGE",
  description: "Hedge your risk with USDC pairs. A cinematic memecoin launch built around stability, liquidity, and hedging volatility.",
  openGraph: {
    title: "HEDGE USDC | $HEDGE",
    description: "SOL may dump, but HEDGE stays calm.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
