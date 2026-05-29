import { Onest, Sora } from "next/font/google";

export const pulseDisplay = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "block",
  variable: "--font-pulse-display",
});

export const pulseText = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "block",
  variable: "--font-pulse-text",
});
