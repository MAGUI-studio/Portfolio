import { ShinobiFlavorsSection } from "@/components/shinobi/flavors-section";
import { ShinobiFooter } from "@/components/shinobi/footer";
import { shinobiDisplay, shinobiText } from "@/components/shinobi/fonts";
import { ShinobiHeader } from "@/components/shinobi/header";
import { ShinobiHeroBannerSection } from "@/components/shinobi/hero-banner-section";
import { ShinobiMarqueeSection } from "@/components/shinobi/marquee-section";
import { ShinobiOrderSection } from "@/components/shinobi/order-section";
import { ShinobiManifestoSection } from "../shinobi/manifest-section";

export default function Landing21Shinobi() {
  return (
    <main
      className={`${shinobiDisplay.variable} ${shinobiText.variable} overflow-x-hidden bg-[#0A0A0A] text-white [font-family:var(--font-shinobi-text)]`}
    >
      <div className="relative">
        <ShinobiHeader />
        <ShinobiHeroBannerSection />
      </div>
      <ShinobiMarqueeSection />
      <ShinobiFlavorsSection />
      <ShinobiOrderSection />
      <ShinobiManifestoSection />
      <ShinobiFooter />
    </main>
  );
}
