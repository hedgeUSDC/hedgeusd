import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        navy: "#07111f",
        usdc: "#2775ca",
        cyan: "#67d7ff",
        mint: "#72f7c5",
        steel: "#8da2bf"
      },
      boxShadow: {
        glow: "0 0 40px rgba(39, 117, 202, 0.45)",
        "glow-soft": "0 0 75px rgba(103, 215, 255, 0.18)"
      },
      backgroundImage: {
        "radial-usdc": "radial-gradient(circle at 50% 0%, rgba(39,117,202,0.42), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
