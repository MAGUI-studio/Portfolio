import { SayegAboutSection } from "../sayeg/about-section";
import { SayegClosingSection } from "../sayeg/closing-section";
import { SayegFooter } from "../sayeg/footer";
import { sayegDisplay, sayegText } from "../sayeg/fonts";
import { SayegHeader } from "../sayeg/header";
import { SayegHeroSection } from "../sayeg/hero-section";
import { SayegMethodSection } from "../sayeg/method-section";
import { SayegServicesSection } from "../sayeg/services-section";
import { SayegStudioSection } from "../sayeg/studio-section";

export default function SayegLanding() {
  return (
    <main className={`${sayegText.className} ${sayegText.variable} ${sayegDisplay.variable} overflow-hidden bg-[#fafafa]! text-[#262323]`}>
      <div className="relative">
        <SayegHeader />
        <SayegHeroSection />
      </div>
      <SayegAboutSection />
      <SayegServicesSection />
      <SayegMethodSection />
      <SayegStudioSection />
      <SayegClosingSection />
      <SayegFooter />
    </main>
  );
}
