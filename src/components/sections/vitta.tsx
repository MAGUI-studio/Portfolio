import { VittaAnimationStyles } from "../vitta/animation-styles";
import { VittaFooter } from "../vitta/footer";
import { VittaHeader } from "../vitta/header";
import { VittaHeroSection } from "../vitta/hero-section";
import { VittaPrinciplesSection } from "../vitta/principles-section";
import { VittaProductsSection } from "../vitta/products-section";
import { VittaProtocolsSection } from "../vitta/protocols-section";
import { VittaSkinHealthSection } from "../vitta/skin-health-section";
import { inter } from "../vitta/fonts";

export default function Landing03CosmeticoEssencial() {
  return (
    <main
      className={`${inter.className} overflow-x-clip bg-[#161616] text-white`}
    >
      <VittaAnimationStyles />
      <div className="relative">
        <VittaHeader />
        <VittaHeroSection />
      </div>

      <VittaSkinHealthSection />

      <div className="pt-32 pb-20">
        <VittaProtocolsSection />
      </div>

      <VittaPrinciplesSection />
      <VittaProductsSection />
      <VittaFooter />
    </main>
  );
}
