import { Sora, Inter } from "next/font/google";

export const cazetvDisplay = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-cazetv-display",
});

export const cazetvText = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cazetv-text",
});
