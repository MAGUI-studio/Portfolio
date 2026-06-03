import { Onest, Sora } from "next/font/google";

export const powervetDisplay = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-powervet-display",
});

export const powervetText = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-powervet-text",
});
