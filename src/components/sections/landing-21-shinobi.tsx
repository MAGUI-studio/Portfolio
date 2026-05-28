import { ShinobiFlavorsSection } from "@/components/shinobi/flavors-section";
import { ShinobiFooter } from "@/components/shinobi/footer";
import { ShinobiHeader } from "@/components/shinobi/header";
import { ShinobiHeroBannerSection } from "@/components/shinobi/hero-banner-section";
import { ShinobiMarqueeSection } from "@/components/shinobi/marquee-section";
import { ShinobiOrderSection } from "@/components/shinobi/order-section";

export default function Landing21Shinobi() {
  return (
    <main className="overflow-x-hidden bg-[#0A0A0A] text-white">
      <div className="relative">
        <ShinobiHeader />
        <ShinobiHeroBannerSection />
      </div>
      <ShinobiMarqueeSection />
      <ShinobiFlavorsSection />
      <ShinobiOrderSection />
      <ShinobiFooter />
    </main>
  );
}
