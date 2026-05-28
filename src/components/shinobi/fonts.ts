import { Montserrat, Rajdhani } from "next/font/google";

export const shinobiDisplay = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-shinobi-display",
});

export const shinobiText = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-shinobi-text",
});
