import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

export const dragonTattooDisplay = Outfit({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-dragon-display",
});

export const dragonTattooText = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dragon-text",
});