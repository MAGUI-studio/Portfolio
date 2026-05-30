import {
  BitesBrandSection,
  BitesDeliverySection,
  BitesExperienceSection,
  BitesFooter,
  BitesHeader,
  BitesHeroSection,
  BitesMarqueeSection,
  BitesPageStyles,
  BitesProductSection,
} from "@/components/bites/landing-sections";
import { bitesHeading, bitesText } from "@/components/bites/fonts";

export default function BitesLanding() {
  return (
    <main
      className={`${bitesHeading.variable} ${bitesText.variable} ${bitesText.className} relative overflow-hidden bg-[#030401]`}
    >
      <BitesPageStyles />
      <BitesHeader />
      <BitesHeroSection />
      <BitesMarqueeSection />
      <BitesProductSection />
      <BitesDeliverySection />
      <BitesBrandSection />
      <BitesExperienceSection />
      <BitesFooter />
    </main>
  );
}
