import { Manrope, Space_Grotesk } from "next/font/google";

export const flowDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-flow-display",
});

export const flowText = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-flow-text",
});
