import { HavenBrandSection } from "@/components/haven/brand-section";
import { HavenFaqSection } from "@/components/haven/faq-section";
import { HavenFooter } from "@/components/haven/footer";
import { havenDisplay, havenText } from "@/components/haven/fonts";
import { HavenHeader } from "@/components/haven/header";
import { HavenHeroSection } from "@/components/haven/hero-section";
import { HavenMarqueeSection } from "@/components/haven/marquee-section";
import { HavenServicesSection } from "@/components/haven/services-section";
import { HavenTeamSection } from "@/components/haven/team-section";
import { HavenTestimonialsSection } from "@/components/haven/testimonials-section";
import { HavenVisitSection } from "@/components/haven/visit-section";

export default function HavenLanding() {
  return (
    <main
      className={`${havenDisplay.variable} ${havenText.variable} overflow-x-clip bg-[#F8F6F2] text-[#1F3545] [font-family:var(--font-haven-text)] [&_h1]:[font-family:var(--font-haven-display)] [&_h2]:[font-family:var(--font-haven-display)] [&_h3]:[font-family:var(--font-haven-display)]`}
    >
      <HavenHeader />
      <HavenHeroSection />
      <HavenMarqueeSection />
      <HavenBrandSection />
      <HavenTeamSection />
      <HavenServicesSection />
      <HavenTestimonialsSection />
      <HavenFaqSection />
      <HavenVisitSection />
      <HavenFooter />
    </main>
  );
}
