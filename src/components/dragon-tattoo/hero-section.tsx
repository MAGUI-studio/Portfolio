import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import {
  dragonTattooBudgetWhatsapp,
  dragonTattooImages,
  dragonTattooScheduleWhatsapp,
} from "./data";

const heroSignals = [
  ["01", "Oriental autoral"],
  ["02", "Grandes fechamentos"],
  ["03", "Fluxo anatomico"],
];

export function DragonTattooHeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#070604] text-[#F4F0E8]"
    >
      <div className="absolute inset-0">
        <Image
          src={dragonTattooImages.heroImage}
          alt="Mateus Silva e Stephanie Souza no estudio Dragon Tattoo"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[56%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#070604] via-[#070604]/70 to-[#070604]/12" />
        <div className="absolute inset-0 bg-linear-to-t from-[#070604] via-transparent to-[#070604]/54" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1720px] px-5 pt-32 pb-14 md:px-10 md:pt-36 md:pb-16 lg:px-14 lg:pt-38">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.28fr)]">
          <div className="dragon-fade max-w-6xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-14 bg-[#F4F0E8]/45" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                Japanese tattoo studio
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] sm:text-6xl md:text-7xl lg:text-[5.9rem] xl:text-[6.5rem] 2xl:text-[7.3rem]">
              Oriental levado a serio.
            </h1>

            <div className="mt-8 max-w-3xl border-l border-[#D6A858] pl-5 md:mt-10 md:pl-7">
              <p className="text-base leading-8 text-[#F4F0E8]/74 md:text-xl md:leading-9">
                Tatuagens orientais autorais com dragoes, samurais, mascaras
                Oni, serpentes, flores e ondas, criadas para acompanhar o corpo
                com presenca, equilibrio e permanencia.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={dragonTattooBudgetWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#080706] transition hover:bg-white"
              >
                Pedir orcamento
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href={dragonTattooScheduleWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-[#F4F0E8]/22 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] transition hover:border-[#F4F0E8] hover:text-white"
              >
                Marcar horario
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 px-2 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#F4F0E8]/70 transition hover:text-[#D6A858]"
              >
                Ver portfolio
                <ArrowDown size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="dragon-fade dragon-fade-delay hidden self-end lg:block">
            <div className="border-l border-[#F4F0E8]/14 pl-8">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                Studio code
              </p>
              <p className="mt-5 text-2xl font-black uppercase leading-none">
                Desenho primeiro. Pele sempre.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#F4F0E8]/62">
                Cada projeto nasce de uma conversa sobre simbolo, escala,
                anatomia e tempo de execucao.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid border-y border-[#F4F0E8]/12 md:grid-cols-3 lg:max-w-5xl">
          {heroSignals.map(([number, label]) => (
            <div
              key={number}
              className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-[#F4F0E8]/12 py-5 md:border-b-0 md:border-r md:px-5 last:md:border-r-0"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D6A858]">
                {number}
              </span>
              <span className="text-sm font-black uppercase tracking-[0.12em] text-[#F4F0E8]/78">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
