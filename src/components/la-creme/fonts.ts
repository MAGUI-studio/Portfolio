import { Onest, Playwrite_US_Modern } from "next/font/google";

export const logoFont = Playwrite_US_Modern({
  display: "swap",
  weight: "400",
});

export const maguiFont = Onest({
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});
