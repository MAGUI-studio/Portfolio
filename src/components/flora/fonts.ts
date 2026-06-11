import { Cormorant_Garamond, Manrope } from "next/font/google";

export const floraDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-flora-display",
});

export const floraText = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-flora-text",
});
