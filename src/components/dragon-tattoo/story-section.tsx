"use client";

import Image from "next/image";

import { dragonTattooImages } from "./data";

const methodItems = [
  {
    number: "01",
    title: "Briefing visual",
    desc: "Referências, região do corpo, escala e intenção da peça são definidos antes do desenho.",
  },
  {
    number: "02",
    title: "Estudo de fluxo",
    desc: "A composição é pensada para acompanhar músculo, movimento e leitura natural da pele.",
  },
  {
    number: "03",
    title: "Prova de decalque",
    desc: "O encaixe é testado no corpo para ajustar proporção, respiro e impacto visual.",
  },
  {
    number: "04",
    title: "Execução por etapas",
    desc: "Linha, contraste, sombra e fechamento são trabalhados com controle técnico e consistência.",
  },
];

export function DragonTattooStorySection() {
  return (
    <section
      id="estudio"
      className="relative overflow-hidden bg-[#F0F0F0] text-[#080706]"
    >
      <div className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#9B7430]">
              O método Dragon
            </p>

            <h2 className="mt-6 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-8xl lg:text-[7rem]">
              Da ideia
              <br />
              ao corpo
            </h2>
          </div>

          <p className="max-w-3xl text-2xl leading-10 text-[#080706]/64 md:text-4xl md:leading-[1.15]">
            A tatuagem oriental precisa nascer junto da anatomia. Cada decisão
            de desenho, escala e contraste existe para a peça funcionar na pele.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative min-h-[620px] overflow-hidden bg-[#080706]">
            <Image
              src={dragonTattooImages.dragonBack}
              alt="Tatuagem oriental nas costas"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute left-5 top-5 bg-[#F0F0F0] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#080706] md:left-8 md:top-8">
              Anatomy first
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative min-h-[280px] overflow-hidden bg-[#080706]">
              <Image
                src={dragonTattooImages.decal}
                alt="Aplicação de decalque para tatuagem oriental"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#080706]/16" />
            </div>

            <div className="bg-[#080706] p-7 text-[#F4F0E8] md:p-10">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#D6B36A]">
                Padrão Dragon
              </p>

              <p className="mt-5 text-xl leading-9 text-[#F4F0E8]/70 md:text-2xl">
                Não é sobre preencher espaço. É sobre construir uma peça com
                presença, leitura e permanência.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid border-t border-[#080706]/14 lg:grid-cols-4">
          {methodItems.map((item) => (
            <article
              key={item.number}
              className="group border-b border-[#080706]/14 py-8 lg:border-r lg:px-7 last:lg:border-r-0"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9B7430]">
                {item.number}
              </span>

              <h3 className="mt-14 text-3xl font-black uppercase leading-none tracking-[-0.04em] md:text-4xl">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#080706]/56">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}