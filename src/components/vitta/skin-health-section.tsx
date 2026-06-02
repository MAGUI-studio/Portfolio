import Image from "next/image";
import { images, skinPillars } from "./data";
import { syncopate } from "./fonts";
import { VittaMarqueeSection } from "./marquee-section";

export function VittaSkinHealthSection() {
  return (
    <section
      id="pele"
      className="relative bg-[#161616] pt-32 pb-40 text-white selection:bg-[#D7A98B]/30 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-400 px-6 md:px-12 text-center">
        <div className="vitta-reveal max-w-360 mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D7A98B]">
            {"// investigação clínica / pilares de saúde"}
          </p>
          <h2
            className={`${syncopate.className} mt-8 text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl md:text-6xl text-white`}
          >
            Nenhum protocolo começa sem antes decodificar sua pele.
          </h2>
          <p className="mt-10 max-w-6xl mx-auto text-base leading-relaxed text-white/60 font-light md:text-lg md:leading-relaxed">
            Na VITTA, recusamos protocolos genéricos que tratam apenas a queixa
            superficial. Nossa abordagem começa com o mapeamento profundo das
            disfunções celulares e da barreira cutânea. Só direcionamos
            tecnologias e injetáveis após estruturar os 6 pilares de
            estabilidade que são o único caminho para preservar a firmeza, a
            vitalidade e a máxima longevidade da sua pele.
          </p>
        </div>
      </div>

      <div className="mt-24 relative">
        <div className="relative w-full aspect-21/9 md:aspect-32/14 bg-[#161616] overflow-hidden group/canvas">
          <Image
            src={images.team}
            fill
            alt="Corpo clínico VITTA — Especialistas em saúde e alta performance cutânea"
            className="object-cover object-top saturate-[0.95] contrast-[1.02] transition-transform duration-[6s] ease-out group-hover/canvas:scale-[1.01]"
            sizes="100vw"
            priority
          />

          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#161616] to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#161616] to-transparent opacity-60 pointer-events-none" />

          <div className="hidden md:block absolute bottom-6 left-6 md:bottom-10 md:left-12 z-20 max-w-70 md:max-w-xs bg-black/25 backdrop-blur-md border border-white/10 p-5 md:p-6 transition-colors duration-500 hover:border-white/20">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D7A98B] block mb-2">
              {"// direção técnica"}
            </span>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light">
              Ciência e sensibilidade conduzidas por um corpo clínico focado na
              preservação da sua identidade biológica.
            </p>
          </div>
        </div>
        <VittaMarqueeSection />
      </div>

      <div className="mx-auto w-full max-w-400 px-6 md:px-12 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {skinPillars.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="group/pilar flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 transition-colors duration-500 group-hover/pilar:border-[#D7A98B]/20">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-[#D7A98B]">
                    0{index + 1}.
                  </span>
                  <h3
                    className={`${syncopate.className} text-sm font-light tracking-tight text-white/90 group-hover/pilar:text-white lg:text-base`}
                  >
                    {title}
                  </h3>
                </div>

                <div className="text-white/20 transition-all duration-500 group-hover/pilar:text-[#D7A98B]">
                  <Icon size={16} weight="light" />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/50 font-light transition-colors duration-500 group-hover/pilar:text-white/70">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
