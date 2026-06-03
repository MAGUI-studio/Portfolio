import { FlowEquipmentSection } from "@/components/flow/equipment-section";
import { FlowExperienceSection } from "@/components/flow/experience-section";
import { FlowFooter } from "@/components/flow/footer";
import { flowDisplay, flowText } from "@/components/flow/fonts";
import { FlowHeader } from "@/components/flow/header";
import { FlowHeroSection } from "@/components/flow/hero-section";
import { FlowLifeSection } from "@/components/flow/life-section";
import { FlowMethodSection } from "@/components/flow/method-section";
import { FlowReefSection } from "@/components/flow/reef-section";

export default function FlowLanding() {
  return (
    <main
      className={`${flowDisplay.variable} ${flowText.variable} overflow-x-clip bg-white text-[#061421] [font-family:var(--font-flow-text)] [&_h1]:[font-family:var(--font-flow-display)] [&_h2]:[font-family:var(--font-flow-display)] [&_h3]:[font-family:var(--font-flow-display)]`}
    >
      <FlowHeader />
      <FlowHeroSection />
      <FlowReefSection />
      <FlowEquipmentSection />
      <FlowLifeSection />
      <FlowExperienceSection />
      <FlowMethodSection />
      <FlowFooter />
    </main>
  );
}
