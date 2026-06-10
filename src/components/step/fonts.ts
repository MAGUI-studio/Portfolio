import { Manrope, Sora } from "next/font/google";

export const stepDisplay = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-step-display",
});

export const stepText = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-step-text",
});
