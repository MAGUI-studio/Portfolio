import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { havenWhatsappHref, havenImages } from "./data";
import { HavenReveal } from "./motion";

export function HavenHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-12 pt-32 text-white md:px-8 md:pb-16 md:pt-38 lg:px-10 lg:pb-20 lg:pt-44"
    >
      <Image
        src={havenImages.hero}
        alt="Familia em um momento tranquilo de cuidado na Haven"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#16282C]/38" />

      <div className="relative">
        <div className="grid gap-16 lg:grid-cols-[0.18fr_0.58fr_0.24fr] lg:items-end">
          <HavenReveal className="hidden lg:flex lg:h-full lg:items-end">
            <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/68">
              Espaco especializado em cuidado pessoal
            </p>
          </HavenReveal>

          <div>
            <HavenReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
                Salao e barbearia inclusivos
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl leading-[0.84] tracking-tight md:text-7xl lg:text-[98px]">
                Cortes com
                <br />
                mais calma.
              </h1>
            </HavenReveal>

            <HavenReveal delay={0.08} className="mt-8 max-w-xl">
              <p className="text-lg leading-8 text-white/78 md:text-xl">
                Um espaco especializado em cortes de cabelo e cuidados pessoais
                para pessoas autistas e neurodivergentes, com acolhimento,
                previsibilidade e respeito.
              </p>
            </HavenReveal>

            <HavenReveal delay={0.14} className="mt-10 flex flex-wrap gap-3">
              <Link
                href={havenWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-[#14283D] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1F446A]"
              >
                Agendar atendimento
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="#atendimentos"
                className="inline-flex items-center gap-3 border border-white/18 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Como funciona
              </Link>
            </HavenReveal>
          </div>

          <HavenReveal
            delay={0.2}
            className="grid gap-5 border-t border-white/16 pt-5 lg:border-t-0 lg:pt-0"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/54">
                Haven
              </p>
              <p className="mt-3 text-2xl leading-tight">
                Um salao pensado para que esse momento seja mais leve para toda a familia.
              </p>
            </div>
            <div className="grid gap-3 text-sm leading-6 text-white/66">
              <p>Sem pressa.</p>
              <p>Sem excesso.</p>
              <p>Sem julgamento.</p>
            </div>
          </HavenReveal>
        </div>

        <HavenReveal delay={0.24} className="mt-16 flex justify-end">
          <Link
            href="#sobre"
            className="inline-flex items-center gap-3 text-sm font-medium text-white/72 transition duration-300 hover:translate-y-0.5 hover:text-white"
          >
            Explorar a pagina
            <ArrowDown size={16} />
          </Link>
        </HavenReveal>
      </div>
    </section>
  );
}
