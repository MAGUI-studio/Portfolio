import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magui.studio"),
  title: "MAGUI.studio | Landing pages premium para marcas digitais",
  description:
    "Portfolio de landing pages autorais criadas pela MAGUI.studio, com direcao visual, design responsivo e desenvolvimento web focado em conversao.",
  openGraph: {
    title: "MAGUI.studio | Landing pages premium para marcas digitais",
    description:
      "Explore projetos de landing pages autorais com identidade visual, experiencia responsiva e desenvolvimento web de alto padrao.",
    siteName: "MAGUI.studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="w-full max-w-440 mx-auto">{children}</body>
    </html>
  );
}
