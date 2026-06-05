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
      className="relative overflow-hidden bg-[#F0F0F0] py-24 text-[#090706] md:py-32"
    >
      <div className="relative mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9B7430]">
              Especialidades
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Simbolo, escala e impacto.
            </h2>
          </div>

          <div className="max-w-3xl lg:ml-auto">
            <p className="text-xl leading-9 text-[#090706]/66 md:text-3xl md:leading-[1.22]">
              Nao trabalhamos por estilos isolados. Trabalhamos por narrativa,
              composicao e simbolos da tradicao japonesa, com acabamento autoral
              para cada anatomia.
            </p>

            <Link
              href={dragonTattooBudgetWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-3 bg-[#D6A858] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#090706] transition hover:bg-[#C7953C]"
            >
              Pedir orcamento do projeto
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.54fr_0.46fr]">
          <div className="dragon-photo-wrap relative h-[560px] overflow-hidden bg-[#090706] md:h-[720px]">
            <Image
              src={dragonTattooImages.oniBack}
              alt="Stephanie Souza tatuando mascara Oni nas costas"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="dragon-photo object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#090706]/72 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 grid gap-5 border-t border-[#F4F0E8]/16 bg-[#090706]/86 p-6 text-[#F4F0E8] backdrop-blur md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                  Large scale work
                </p>
                <p className="mt-4 max-w-xl text-2xl font-black uppercase leading-tight md:text-3xl">
                  Pecas grandes pedem leitura limpa, sombra precisa e tempo.
                </p>
              </div>
              <div className="border-t border-[#F4F0E8]/14 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D6A858]">
                  Foco
                </p>
                <p className="mt-2 text-sm leading-6 text-[#F4F0E8]/62">
                  Fechamentos de costas, braco, perna e peito.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="bg-[#090706] p-6 text-[#F4F0E8] md:p-8">
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
              <div className="dragon-photo-wrap relative h-[300px] overflow-hidden bg-[#090706]">
                <Image
                  src={dragonTattooImages.gallery03}
                  alt="Detalhe tecnico de tatuagem oriental"
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="dragon-photo object-cover"
                />
              </div>

              <div className="border border-[#090706]/16 p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                  Direcao artistica
                </p>
                <p className="mt-5 text-2xl font-black uppercase leading-tight">
                  Um projeto por vez, sem desenho reciclado.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#090706]/58">
                  A composicao final nasce da sua historia, da area do corpo e
                  da linguagem oriental mais adequada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid border-t border-l border-[#090706]/16 md:grid-cols-2 lg:grid-cols-4">
          {projectFormats.map(([title, text]) => (
            <article
              key={title}
              className="border-r border-b border-[#090706]/16 bg-[#F0F0F0] p-7 md:p-8"
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
