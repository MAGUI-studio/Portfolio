import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { havenImages } from "./data";
import { HavenReveal } from "./motion";

const trustItems = [
  "Atendimento com hora marcada",
  "Baixa sobrecarga sensorial",
  "Crianças, adolescentes e adultos",
  "Família pode acompanhar",
];

export function HavenTrustSection() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-8 text-[#14283D] md:px-8 md:py-10 lg:px-10">
      <div className="grid gap-6 xl:grid-cols-[0.24fr_0.76fr] xl:items-center">
        <HavenReveal className="flex items-center gap-4">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/10">
            <Image
              src={havenImages.simbolo}
              alt="Símbolo da Haven"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </span>
          <div className="grid gap-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
              Confiança
            </p>
            <p className="text-sm leading-6 text-[#14283D]/68">
              Sinais rápidos para entender a proposta logo no primeiro olhar.
            </p>
          </div>
        </HavenReveal>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <HavenReveal
              key={item}
              delay={index * 0.05}
              className="flex items-center gap-3 rounded-[1.5rem] border border-[#14283D]/10 bg-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#14283D]/18"
            >
              <CheckCircle size={18} weight="fill" className="shrink-0 text-[#C9D8EA]" />
              <p className="text-sm font-medium leading-6 text-[#14283D]/82">{item}</p>
            </HavenReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
