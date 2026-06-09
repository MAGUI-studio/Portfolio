import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";

import { havenImages, havenWhatsappHref } from "./data";
import { HavenImageReveal, HavenReveal } from "./motion";

export function HavenVisitSection() {
  return (
    <section
      id="visita"
      className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-28 lg:px-10"
    >
      <Image
        src={havenImages.footer}
        alt="Funcionaria da Haven conversando com uma crianca"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#14283D]/56" />

      <div className="relative grid gap-10 xl:grid-cols-[0.56fr_0.44fr] xl:items-end">
        <HavenReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/68">
            Visita
          </p>
          <h2 className="mt-7 max-w-xl text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Agende uma visita e conheca a HAVEN
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/76">
            Conheca o espaco, fale com a equipe e entenda como o atendimento
            pode ser adaptado para sua familia.
          </p>
          <Link
            href={havenWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#14283D] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1F446A]"
          >
            Agendar visita
            <ArrowUpRight size={16} />
          </Link>
        </HavenReveal>

        <HavenImageReveal className="justify-self-end">
          <div className="max-w-sm overflow-hidden rounded-[2rem] bg-white text-[#14283D] shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1">
            <Image
              src={havenImages.localizacao}
              alt="Localizacao da Haven"
              width={1200}
              height={860}
              sizes="(min-width: 1280px) 22vw, 100vw"
              className="aspect-[1.12] w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-3 text-[#14283D]">
                <MapPin size={18} weight="fill" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Localizacao
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#14283D]/68">
                Um espaco pensado para transmitir conforto desde a chegada, com
                uma atmosfera mais calma e acolhedora para toda a familia.
              </p>
            </div>
          </div>
        </HavenImageReveal>
      </div>
    </section>
  );
}
