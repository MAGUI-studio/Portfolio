import { FloraCollectionsSection } from "@/components/flora/collections-section";
import { FloraCultivationSection } from "@/components/flora/cultivation-section";
import { FloraExperienceSection } from "@/components/flora/experience-section";
import { FloraFooter } from "@/components/flora/footer";
import { floraDisplay, floraText } from "@/components/flora/fonts";
import { FloraHeader } from "@/components/flora/header";
import { FloraHeroSection } from "@/components/flora/hero-section";
import { FloraLocationSection } from "@/components/flora/location-section";
import { FloraMarqueeSection } from "@/components/flora/marquee-section";
import { FloraTestimonialsSection } from "@/components/flora/testimonials-section";

export default function FloraLanding() {
  return (
    <main
      className={`${floraDisplay.variable} ${floraText.variable} overflow-x-clip bg-[#FAFAFA] text-[#3A402C] [font-family:var(--font-flora-text)] [&_h1]:[font-family:var(--font-flora-display)] [&_h2]:[font-family:var(--font-flora-display)] [&_h3]:[font-family:var(--font-flora-display)]`}
    >
      <FloraHeader />
      <FloraHeroSection />
      <FloraMarqueeSection />
      <FloraCollectionsSection />
      <FloraCultivationSection />
      <FloraExperienceSection />
      <FloraTestimonialsSection />
      <FloraLocationSection />
      <FloraFooter />
    </main>
  );
}
