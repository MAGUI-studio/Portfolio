import { ArcoAnimationStyles } from "../arco/animation-styles";
import { ArcoCareSection } from "../arco/care-section";
import { ArcoExperienceSection } from "../arco/experience-section";
import { ArcoFooter } from "../arco/footer";
import { arcoDisplay, arcoText } from "../arco/fonts";
import { ArcoHeader } from "../arco/header";
import { ArcoHeroSection } from "../arco/hero-section";
import { ArcoResultsSection } from "../arco/results-section";
import { ArcoTestimonialsSection } from "../arco/testimonials-section";
import { ArcoTreatmentsSection } from "../arco/treatments-section";

export default function ArcoLanding() {
  return (
    <main
      className={`${arcoText.className} ${arcoText.variable} ${arcoDisplay.variable} overflow-x-clip bg-white text-[#123A5C] antialiased selection:bg-[#1F5687] selection:text-white [&_h1]:font-(family-name:--font-arco-display) [&_h2]:font-(family-name:--font-arco-display) [&_h3]:font-(family-name:--font-arco-display)`}
    >
      <ArcoAnimationStyles />
      <ArcoHeader />
      <ArcoHeroSection />
      <ArcoCareSection />
      <ArcoTreatmentsSection />
      <ArcoExperienceSection />
      <ArcoResultsSection />
      <ArcoTestimonialsSection />
      <ArcoFooter />
    </main>
  );
}
