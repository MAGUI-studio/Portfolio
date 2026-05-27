import { Inter, Syncopate } from "next/font/google";

export const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
