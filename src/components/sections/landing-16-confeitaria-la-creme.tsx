"use client";

import Link from "next/link";
import { LaCremeFooter } from "@/components/la-creme/footer";
import { LaCremeHeader } from "@/components/la-creme/header";
import {
  LaCremeAtelierSection,
  LaCremeClosingSections,
  LaCremeCookiesSection,
  LaCremeHeroSection,
  LaCremeMarqueeSection,
  LaCremeOrdersSection,
  LaCremePageStyles,
  LaCremeProcessVideoSection,
  LaCremeProductsSection,
  LaCremeShowcaseSection,
  LaCremeTastingSection,
} from "@/components/la-creme/landing-sections";
import { LaCremeMotionProvider } from "@/components/la-creme/motion";

export default function Landing16ConfeitariaLaCreme() {
  return (
    <LaCremeMotionProvider>
      <main className="overflow-hidden bg-[#F3F3F3] text-[#2b1714]">
        <Link
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#2b1714] focus:shadow-[0_18px_48px_rgba(43,23,20,0.18)]"
        >
          Pular para conteúdo
        </Link>

        <LaCremePageStyles />
        <LaCremeHeader />
        <LaCremeHeroSection />
        <LaCremeMarqueeSection />
        <LaCremeShowcaseSection />
        <LaCremeProductsSection />
        <LaCremeProcessVideoSection />
        <LaCremeTastingSection />
        <LaCremeAtelierSection />
        <LaCremeOrdersSection />
        <LaCremeCookiesSection />
        <LaCremeClosingSections />
        <LaCremeFooter />
      </main>
    </LaCremeMotionProvider>
  );
}
