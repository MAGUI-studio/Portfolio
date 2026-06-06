import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import {
  dragonTattooBudgetWhatsapp,
  dragonTattooImages,
  projectFormats,
  specialties,
} from "./data";

export function DragonTattooSpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="relative -mt-12 overflow-hidden bg-[#ffffff] pt-32 pb-32 text-[#090706] [clip-path:polygon(-1px_4rem,101%_0,101%_calc(100%_-_4rem),-1px_100%)] md:pt-36 md:pb-36"
    >
      <div className="relative mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9B7430]">
              Especialidades
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Símbolo, escala e impacto.
            </h2>
          </div>

          <div className="max-w-3xl lg:ml-auto">
            <p className="text-xl leading-9 md:text-3xl md:leading-[1.22]">
              Não trabalhamos por estilos isolados. Trabalhamos por narrativa,
              composição e símbolos da tradição japonesa, com acabamento autoral
              para cada anatomia.
            </p>

            <Link
              href={dragonTattooBudgetWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-3 bg-[#D6A858] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#090706] transition hover:bg-[#C7953C]"
            >
              Pedir orçamento do projeto
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.54fr_0.46fr]">
          <div className="dragon-photo-wrap relative h-140 overflow-hidden bg-[#090706] md:h-193">
            <Image
              src={dragonTattooImages.oniBack}
              alt="Stephanie Souza tatuando máscara Oni nas costas"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="dragon-photo object-cover"
            />
          </div>

          <div className="grid gap-5">
            <div className="bg-[#090706] p-6 text-[#F4F0E8] flex  items-center justify-center">
              <div className="grid gap-2 md:grid-cols-2">
                {specialties.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[38px_1fr] items-start border-b border-[#F4F0E8]/12 py-4"
                  >
                    <span className="text-[10px] font-black tracking-[0.18em] text-[#D6A858]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold uppercase leading-6 text-[#F4F0E8]/76">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="dragon-photo-wrap relative h-full overflow-hidden bg-[#090706]">
                <Image
                  src={dragonTattooImages.gallery05}
                  alt="Detalhe técnico de tatuagem oriental"
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="dragon-photo object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                  Direção artística
                </p>
                <p className="mt-5 text-2xl font-black uppercase leading-tight">
                  Um projeto por vez, sem desenho reciclado.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#090706]/58">
                  A composição final nasce da sua história, da área do corpo e
                  da linguagem oriental mais adequada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid  md:grid-cols-2 lg:grid-cols-4">
          {projectFormats.map(([title, text]) => (
            <article
              key={title}
              className="p-8 text-center"
            >
              <h3 className="text-2xl font-black uppercase leading-none md:text-3xl">
                {title}
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#090706]/60 md:text-base md:leading-8">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
