import { KromaContactSection } from "../kroma/contact-section";
import EcoSystemSection from "../kroma/ecosystemSection";
import { KromaFooter } from "../kroma/footer";
import { KromaHeader } from "../kroma/header";
import { KromaHeroSection } from "../kroma/hero-section";
import { KromaIndustrialSection } from "../kroma/industrial-section";
import { KromaMarqueeSection } from "../kroma/marquee-section";
import { KromaMonitoringSection } from "../kroma/monitoring-section";
import { KromaProcessSection } from "../kroma/process-section";
import { KromaSolutionsSection } from "../kroma/solutions-section";

export default function Landing11EnergiaSolarIndustrial() {
  return (
    <main className="overflow-hidden bg-[#f7f3e8] text-[#2A2A2A]">
      <div className="relative">
        <KromaHeader />
        <KromaHeroSection />
      </div>
      <KromaMarqueeSection />
      <KromaSolutionsSection />
      <EcoSystemSection />
      <KromaProcessSection />
      <KromaIndustrialSection />
      <KromaMonitoringSection />
      <KromaContactSection />
      <KromaFooter />
    </main>
  );
}
