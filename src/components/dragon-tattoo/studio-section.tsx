"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { dragonTattooImages, dragonTattooWhatsapp, values } from "./data";

const studioPhotos = [
  { src: dragonTattooImages.reception, alt: "Recepção do estúdio" },
  { src: dragonTattooImages.serviceArea, alt: "Área de atendimento" },
  { src: dragonTattooImages.facade, alt: "Fachada do estúdio" },
];

export function DragonTattooStudioSection() {
  return (
    <section
      id="estudio"
      className="bg-[#F0F0F0] px-5 py-24 text-[#080706] md:px-10 md:py-32 lg:px-14"
    >
        <div className="grid gap-10 border-b border-[#080706]/12 pb-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#9B7430]">
              O estúdio
            </p>

            <h2 className="mt-6 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-8xl lg:text-[7rem]">
              Silêncio,
              <br />
              técnica
              <br />
              e pele
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-[#080706]/60 md:text-xl md:leading-9">
              Um espaço reservado para sessões longas, decisões precisas e
              projetos orientais que exigem concentração do primeiro traço ao
              último fechamento.
            </p>

            <Link
              href={dragonTattooWhatsapp}
              className="mt-8 inline-flex items-center gap-3 bg-[#080706] px-7 py-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#F4F0E8] transition hover:bg-[#D6B36A] hover:text-[#080706]"
            >
              Agendar visita
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.26fr_0.48fr_0.26fr]">
          <div className="grid gap-4">
            <div className="border border-[#080706]/12 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                Atendimento
              </p>
              <p className="mt-5 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                Com hora marcada
              </p>
            </div>

            <div className="relative h-[360px] overflow-hidden md:h-[520px] lg:h-[620px]">
              <Image
                src={studioPhotos[0].src}
                alt={studioPhotos[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 26vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden md:h-[760px]">
            <Image
              src={studioPhotos[1].src}
              alt={studioPhotos[1].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-6 md:max-w-md md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B7430]">
                Dragon Tattoo
              </p>

              <p className="mt-4 text-xl font-bold leading-tight text-[#080706] md:text-2xl">
                Ambiente preparado para manter foco, conforto e controle em
                cada sessão.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative h-[360px] overflow-hidden md:h-[520px] lg:h-[620px]">
              <Image
                src={studioPhotos[2].src}
                alt={studioPhotos[2].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 26vw"
                className="object-cover"
              />
            </div>

            <div className="border border-[#080706]/12 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                Experiência
              </p>
              <p className="mt-5 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                Reservada e imersiva
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#080706]/12 pt-8">
          {values.map((value) => (
            <span
              key={value}
              className="bg-[#080706] px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#F4F0E8]"
            >
              {value}
            </span>
          ))}
        </div>

    </section>
  );
}