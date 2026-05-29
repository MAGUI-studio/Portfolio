import Link from "next/link";
import { NachoLibreFooter } from "@/components/nacho-libre/footer";
import { nachoDisplay, nachoText } from "@/components/nacho-libre/fonts";
import { NachoLibreHeader } from "@/components/nacho-libre/header";
import {
  NachoLibreExperienceSection,
  NachoLibreHeroSection,
  NachoLibreMarqueeSection,
  NachoLibreMenuSection,
  NachoLibreOrderingSection,
  NachoLibrePageStyles,
  NachoLibreVisitSection,
} from "@/components/nacho-libre/landing-sections";
import { NachoMotionProvider } from "@/components/nacho-libre/motion";

export default function Landing02NachoLibre() {
  return (
    <NachoMotionProvider>
      <main
        className={`${nachoDisplay.variable} ${nachoText.variable} nacho-page overflow-hidden bg-[#111111] text-[#F0F0F0] [font-family:var(--font-nacho-text)]`}
      >
        <Link
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#F0F0F0] focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:text-[#111111]"
        >
          Pular para conteudo
        </Link>

        <NachoLibrePageStyles />
        <NachoLibreHeader />
        <NachoLibreHeroSection />
        <NachoLibreMarqueeSection />
        <NachoLibreMenuSection />
        <NachoLibreExperienceSection />
        <NachoLibreOrderingSection />
        <NachoLibreVisitSection />
        <NachoLibreFooter />
      </main>
    </NachoMotionProvider>
  );
}
