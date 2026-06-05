import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import {
  dragonTattooImages,
  dragonTattooScheduleWhatsapp,
  dragonTattooVisitWhatsapp,
  values,
} from "./data";

const studioPhotos = [
  { src: dragonTattooImages.reception, alt: "Recepcao do estudio Dragon Tattoo" },
  { src: dragonTattooImages.serviceArea, alt: "Area de atendimento Dragon Tattoo" },
  { src: dragonTattooImages.facade, alt: "Fachada do estudio Dragon Tattoo" },
];

const studioFacts = [
  ["Atendimento", "Com hora marcada"],
  ["Ambiente", "Reservado e imersivo"],
  ["Foco", "Projetos autorais"],
];

export function DragonTattooStudioSection() {
  return (
    <section
      id="estudio"
      className="relative overflow-hidden bg-[#090706] py-24 text-[#F4F0E8] md:py-32"
    >
      <div className="mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 border-b border-[#F4F0E8]/12 pb-14 lg:grid-cols-[0.54fr_0.46fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#D6A858]">
              O estudio
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Silencio, tecnica e pele.
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-[#F4F0E8]/64 md:text-xl md:leading-9">
              Um espaco reservado para sessoes longas, decisoes precisas e
              projetos orientais que exigem concentracao do primeiro traco ao
              ultimo fechamento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={dragonTattooVisitWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#080706] transition hover:bg-white"
              >
                Agendar visita
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
                className="group inline-flex items-center justify-center gap-3 border border-[#F4F0E8]/18 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] transition hover:border-[#F4F0E8] hover:text-white"
              >
                Marcar horario
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.28fr_0.44fr_0.28fr]">
          <div className="grid gap-5">
            <div className="border border-[#F4F0E8]/12 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                Chegada
              </p>
              <p className="mt-5 text-2xl font-black uppercase leading-tight">
                Conversa, referencia e direcao.
              </p>
            </div>

            <div className="dragon-photo-wrap relative h-[360px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] md:h-[520px] lg:h-[620px]">
              <Image
                src={studioPhotos[0].src}
                alt={studioPhotos[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="dragon-photo object-cover"
              />
            </div>
          </div>

          <div className="dragon-photo-wrap relative h-[560px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] md:h-[760px]">
            <Image
              src={studioPhotos[1].src}
              alt={studioPhotos[1].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="dragon-photo object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 grid gap-5 border-t border-[#F4F0E8]/14 bg-[#120E0B]/88 p-6 backdrop-blur md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                  Dragon Tattoo
                </p>

                <p className="mt-4 max-w-xl text-xl font-black uppercase leading-tight md:text-2xl">
                  Ambiente preparado para manter foco, conforto e controle em
                  cada sessao.
                </p>
              </div>

              <div className="grid grid-cols-3 border-t border-[#F4F0E8]/12 pt-5 md:w-64 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                {studioFacts.map(([label, value]) => (
                  <div key={label} className="pr-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D6A858]">
                      {label}
                    </p>
                    <p className="mt-2 text-xs font-bold leading-5 text-[#F4F0E8]/62">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="dragon-photo-wrap relative h-[360px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] md:h-[520px] lg:h-[620px]">
              <Image
                src={studioPhotos[2].src}
                alt={studioPhotos[2].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="dragon-photo object-cover"
              />
            </div>

            <div className="border border-[#F4F0E8]/12 bg-[#F4F0E8]/6 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                Experiencia
              </p>
              <p className="mt-5 text-2xl font-black uppercase leading-tight">
                Reservada, imersiva e sem pressa.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#F4F0E8]/12 pt-8">
          {values.map((value) => (
            <span
              key={value}
              className="border border-[#F4F0E8]/12 bg-[#F4F0E8]/6 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#F4F0E8]/70"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
