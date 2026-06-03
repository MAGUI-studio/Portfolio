import { PowervetAnimationStyles } from "../powervet/animation-styles";
import { PowervetFaqSection } from "../powervet/faq-section";
import { PowervetFooter } from "../powervet/footer";
import { powervetDisplay, powervetText } from "../powervet/fonts";
import { PowervetHeader } from "../powervet/header";
import { PowervetHeroSection } from "../powervet/hero-section";
import { PowervetSpeciesSection } from "../powervet/species-section";
import { PowervetStructureSection } from "../powervet/structure-section";
import { PowervetTeamServicesSection } from "../powervet/team-services-section";
import { WhatsappButton } from "../whatsapp-button";
import {
  powervetWhatsappMessage,
  powervetWhatsappNumber,
} from "../powervet/data";

export default function PowervetLanding() {
  return (
    <main
      className={`${powervetText.className} ${powervetText.variable} ${powervetDisplay.variable} overflow-x-clip bg-[#F4F1EB] text-[#021C00] [&_h1]:font-[family-name:var(--font-powervet-display)] [&_h2]:font-[family-name:var(--font-powervet-display)] [&_h3]:font-[family-name:var(--font-powervet-display)]`}
    >
      <PowervetAnimationStyles />
      <div className="relative">
        <PowervetHeader />
        <PowervetHeroSection />
      </div>
      <PowervetSpeciesSection />
      <PowervetStructureSection />
      <PowervetTeamServicesSection />
      <PowervetFaqSection />
      <PowervetFooter />
      <WhatsappButton
        phoneNumber={powervetWhatsappNumber}
        message={powervetWhatsappMessage}
      />
    </main>
  );
}
