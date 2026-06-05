import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import {
  dragonTattooBudgetWhatsapp,
  dragonTattooScheduleWhatsapp,
} from "./data";

const planningPoints = [
  {
    title: "Simbolo",
    text: "Dragao, Oni, Koi, samurai, flores ou ondas precisam ter intencao. O desenho parte do significado, nao do excesso.",
  },
  {
    title: "Corpo",
    text: "A area escolhida muda ritmo, escala e leitura. Costas, braco, perna e peito pedem composicoes diferentes.",
  },
  {
    title: "Tempo",
    text: "Projetos grandes sao construidos por etapas, com desenho, decalque, linha, sombra e acabamento planejados.",
  },
];

export function DragonTattooPlanningSection() {
  return (
    <section className="bg-[#F0F0F0] py-24 text-[#090706] md:py-32">
      <div className="mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 border-y border-[#090706]/14 py-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#9B7430]">
              Antes do desenho
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Uma peca forte comeca com criterio.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-xl leading-9 text-[#090706]/64 md:text-3xl md:leading-[1.2]">
              O melhor projeto nao nasce de uma imagem pronta. Ele nasce da
              conversa certa: o que voce quer carregar, onde a peca vive no
              corpo e quanto impacto ela precisa ter.
            </p>
          </div>
        </div>

        <div className="grid border-b border-[#090706]/14 lg:grid-cols-3">
          {planningPoints.map((item, index) => (
            <article
              key={item.title}
              className="border-t border-[#090706]/14 py-8 lg:border-r lg:px-8 last:lg:border-r-0"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.26em] text-[#9B7430]">
                0{index + 1}
              </span>

              <h3 className="mt-10 text-3xl font-black uppercase leading-none md:text-4xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#090706]/58 md:text-base md:leading-8">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-3xl text-lg leading-8 text-[#090706]/62">
            Se voce ainda nao sabe exatamente o desenho, tudo bem. A primeira
            conversa serve para transformar referencia, historia e area do corpo
            em uma direcao visual possivel.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={dragonTattooBudgetWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#D6A858] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#090706] transition hover:bg-[#C7953C]"
            >
              Enviar referencia
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
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#090706] transition hover:text-[#9B7430]"
            >
              Marcar conversa
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
