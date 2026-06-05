import { Fraunces, Geist, JetBrains_Mono, Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

// CJK fonts are large — disable preload so Next doesn't error on missing
// subsets and doesn't ship megabytes up front; they load on demand via swap.
export const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "600"],
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});

export const notoSansTC = Noto_Sans_TC({
  weight: ["400", "500"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});
