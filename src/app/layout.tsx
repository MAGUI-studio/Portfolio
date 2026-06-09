import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { buildDefaultMetadata, getRequestSiteUrl } from "@/lib/seo";
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

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestSiteUrl();
  return buildDefaultMetadata(baseUrl);
}

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
