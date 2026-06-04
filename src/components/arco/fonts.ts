import { Manrope, Sora } from "next/font/google";

export const arcoDisplay = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-arco-display",
});

export const arcoText = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arco-text",
});
