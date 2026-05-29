import { PulseCartProvider } from "@/components/pulse/cart";
import { PulseCartDrawer } from "@/components/pulse/cart-drawer";
import { PulseFooter } from "@/components/pulse/footer";
import { pulseDisplay, pulseText } from "@/components/pulse/fonts";
import { PulseHeader } from "@/components/pulse/header";
import {
  PulseCollectionSection,
  PulseFitGuideSection,
  PulseHeroSection,
  PulsePageStyles,
  PulseTechnologySection,
} from "@/components/pulse/landing-sections";
import { PulseMotionProvider } from "@/components/pulse/motion";
import { PulseToast } from "@/components/pulse/toast";

export default function Landing05Pulse() {
  return (
    <PulseMotionProvider>
      <PulseCartProvider>
        <main
          className={`${pulseDisplay.variable} ${pulseText.variable} pulse-page overflow-hidden bg-[#0B0B0B] text-white [font-family:var(--font-pulse-text)]`}
        >
          <PulsePageStyles />
          <PulseHeader />
          <PulseCartDrawer />
          <PulseToast />
          <PulseHeroSection />
          <PulseCollectionSection />
          <PulseFitGuideSection />
          <PulseTechnologySection />
          <PulseFooter />
        </main>
      </PulseCartProvider>
    </PulseMotionProvider>
  );
}
