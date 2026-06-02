import { Cormorant_Garamond, Manrope } from "next/font/google";

export const sayegDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sayeg-display",
});

export const sayegText = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sayeg-text",
});
