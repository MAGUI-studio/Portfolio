import { Montserrat, Poppins } from "next/font/google";

export const havenDisplay = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-haven-display",
});

export const havenText = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-haven-text",
});
