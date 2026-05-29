import { Bree_Serif, Onest } from "next/font/google";

export const nachoDisplay = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "block",
  variable: "--font-nacho-display",
});

export const nachoText = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "block",
  variable: "--font-nacho-text",
});