"use client";

import Image from "next/image";

import { dragonTattooImages, projectFormats, specialties } from "./data";

export function DragonTattooSpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="bg-[#F0F0F0] py-24 text-[#080706] md:py-32"
    >
      <div className="px-5 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#9B7430]">
              Especialidades
            </p>

            <h2 className="mt-6 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-8xl lg:text-[7rem]">
              Linguagem
              <br />
              Oriental
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#080706]/58">
              Não trabalhamos por estilos isolados. Trabalhamos por narrativa,
              composição e símbolos da tradição japonesa.
            </p>

            <div className="mt-12 flex max-w-2xl flex-wrap gap-3">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="border border-[#080706]/12 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#080706]/78 transition hover:border-[#9B7430] hover:text-[#9B7430]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[0.64fr_0.36fr] md:items-end">
            <div className="relative h-[640px] overflow-hidden md:h-[780px]">
              <Image
                src={dragonTattooImages.oniBack}
                alt="Máscara de Oni em projeto oriental"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-center"
              />

              <div className="absolute bottom-0 left-0 bg-[#F0F0F0] p-6 md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B7430]">
                  Dragon Tattoo
                </p>

                <p className="mt-4 max-w-sm text-xl font-black leading-tight md:text-2xl">
                  Grandes composições construídas para acompanhar o corpo.
                </p>
              </div>
            </div>

            <div className="relative h-[640px] overflow-hidden md:h-[780px]">
              <Image
                src={dragonTattooImages.gallery03}
                alt="Detalhe técnico de tatuagem oriental"
                fill
                sizes="(max-width: 768px) 100vw, 24vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-t border-l border-[#080706]/10 md:grid-cols-2 lg:grid-cols-4">
          {projectFormats.map(([title, text]) => (
            <article
              key={title}
              className="min-h-[260px] border-r border-b border-[#080706]/10 p-7 md:p-9"
            >
              <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-4xl">
                {title}
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#080706]/58 md:text-base md:leading-8">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}