import { StepFooter } from "@/components/step/footer";
import { stepDisplay, stepText } from "@/components/step/fonts";
import { StepHeader } from "@/components/step/header";
import { StepHeroSection } from "@/components/step/hero-section";
import { StepMarqueeSection } from "@/components/step/marquee-section";
import { StepPositioningSection } from "@/components/step/positioning-section";
import { StepProcessSection } from "@/components/step/process-section";
import { StepStudioSection } from "@/components/step/studio-section";
import { StepTransformationSection } from "@/components/step/transformation-section";

export default function StepLanding() {
  return (
    <main
      className={`${stepDisplay.variable} ${stepText.variable} overflow-x-clip bg-[#F8F8F8] text-[#0A0A0A] [font-family:var(--font-step-text)] [&_h1]:[font-family:var(--font-step-display)] [&_h2]:[font-family:var(--font-step-display)] [&_h3]:[font-family:var(--font-step-display)]`}
    >
      <StepHeader />
      <StepHeroSection />
      <StepPositioningSection />
      <StepMarqueeSection />
      <StepProcessSection />
      <StepTransformationSection />
      <StepStudioSection />
      <StepFooter />
    </main>
  );
}
