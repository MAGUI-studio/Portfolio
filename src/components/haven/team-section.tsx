import Image from "next/image";

import { havenImages } from "./data";
import { HavenImageReveal, HavenReveal } from "./motion";

export function HavenTeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 text-[#14283D] md:py-28">
      <div className="grid gap-12 xl:grid-cols-2 xl:items-center">
        <HavenImageReveal className="relative w-full overflow-hidden rounded-r-full bg-[#D8E1D6] transition-transform duration-500 hover:-translate-y-1">
          <Image
            src={havenImages.equipe}
            alt="Equipe da Haven reunida"
            width={1600}
            height={1200}
            sizes="(min-width: 1280px) 34vw, 100vw"
            className="aspect-[1.02] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </HavenImageReveal>

        <div className="grid gap-8 justify-center">
          <HavenReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
              Equipe
            </p>
            <h2 className="mt-7 max-w-2xl text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              Gente preparada para acolher.
            </h2>
          </HavenReveal>

          <HavenReveal delay={0.08}>
            <p className="max-w-lg text-base leading-8 text-[#14283D]/68">
              Somos uma equipe preparada para compreender diferentes
              necessidades sensoriais e comportamentais, conduzindo cada
              atendimento com mais respeito, clareza e presença.
            </p>
          </HavenReveal>
        </div>
      </div>

      <div className="grid gap-12 xl:grid-cols-2 xl:items-center">
        <div className="grid gap-8 justify-center">
          <HavenReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
              Ambiente
            </p>
            <h2 className="mt-7 max-w-2xl text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              Um espaço pensado para acalmar.
            </h2>
          </HavenReveal>

          <HavenReveal delay={0.08}>
            <p className="max-w-lg text-base leading-8 text-[#14283D]/68">
              A Haven foi desenhada para transmitir conforto desde a chegada,
              com uma atmosfera mais tranquila, menos excesso visual e um
              ambiente que ajuda famílias, crianças, adolescentes e adultos a se
              sentirem mais seguros.
            </p>
          </HavenReveal>
        </div>

        <HavenImageReveal className="relative w-full overflow-hidden rounded-l-full bg-[#D8E1D6] transition-transform duration-500 hover:-translate-y-1">
          <Image
            src={havenImages.fachada}
            alt="Fachada da Haven"
            width={1600}
            height={1200}
            sizes="(min-width: 1280px) 34vw, 100vw"
            className="aspect-[1.02] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </HavenImageReveal>
      </div>
    </section>
  );
}
