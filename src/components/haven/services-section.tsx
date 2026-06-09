import Image from "next/image";

import { havenJourney } from "./data";
import { HavenImageReveal, HavenReveal } from "./motion";

export function HavenServicesSection() {
  return (
    <section
      id="atendimentos"
      className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-28 lg:px-10"
    >
      <div className="grid gap-5 xl:grid-cols-[0.24fr_0.76fr]">
        <HavenReveal className="flex flex-col justify-between gap-8 bg-[#14283D] p-6 text-white transition-transform duration-300 hover:-translate-y-1 md:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/68">
              Atendimentos
            </p>
            <h3 className="mt-5 max-w-xs text-4xl leading-[0.9] tracking-tight md:text-5xl">
              Tudo mais claro.
            </h3>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/76">
            Explicamos o processo, ouvimos a família e ajustamos a experiência
            para reduzir tensão desde a chegada.
          </p>
        </HavenReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {havenJourney.map((item, index) => (
            <HavenImageReveal
              key={item.title}
              delay={index * 0.06}
              className="overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 24vw, 100vw"
                className="aspect-[0.88] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="p-5">
                <h3 className="text-2xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#14283D]/68">
                  {item.text}
                </p>
              </div>
            </HavenImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
