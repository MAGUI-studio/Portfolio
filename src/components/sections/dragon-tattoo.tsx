import { DragonTattooAnimationStyles } from "../dragon-tattoo/animation-styles";
import { DragonTattooFooter } from "../dragon-tattoo/footer";
import { dragonTattooDisplay, dragonTattooText } from "../dragon-tattoo/fonts";
import { DragonTattooGallerySection } from "../dragon-tattoo/gallery-section";
import { DragonTattooHeroSection } from "../dragon-tattoo/hero-section";
import { DragonTattooSpecialtiesSection } from "../dragon-tattoo/specialties-section";
import { DragonTattooStorySection } from "../dragon-tattoo/story-section";
import { DragonTattooStudioSection } from "../dragon-tattoo/studio-section";

export default function DragonTattooLanding() {
  return (
    <main
      className={`${dragonTattooText.className} ${dragonTattooText.variable} ${dragonTattooDisplay.variable} overflow-x-hidden bg-[#0D0D0D] text-[#F4F1EA] antialiased selection:bg-[#F4F1EA] selection:text-[#0D0D0D] [&_h1]:font-(family-name:--font-dragon-display) [&_h2]:font-(family-name:--font-dragon-display) [&_h3]:font-(family-name:--font-dragon-display)`}
    >
      <DragonTattooAnimationStyles />
      <DragonTattooHeroSection />
      <DragonTattooStorySection />
      <DragonTattooSpecialtiesSection />
      <DragonTattooGallerySection />
      <DragonTattooStudioSection />
      <DragonTattooFooter />
    </main>
  );
}
