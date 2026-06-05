import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { dragonTattooBudgetWhatsapp, dragonTattooImages } from "./data";

const methodItems = [
  {
    number: "01",
    title: "Briefing visual",
    desc: "Referencias, regiao do corpo, escala e intencao da peca sao definidos antes do desenho.",
  },
  {
    number: "02",
    title: "Fluxo anatomico",
    desc: "A composicao acompanha musculo, movimento e a leitura natural da pele em repouso ou acao.",
  },
  {
    number: "03",
    title: "Prova de decalque",
    desc: "O encaixe e testado no corpo para ajustar proporcao, respiro, impacto visual e continuidade.",
  },
  {
    number: "04",
    title: "Sessao por etapas",
    desc: "Linha, contraste, sombra e fechamento sao trabalhados com controle tecnico e consistencia.",
  },
];

export function DragonTattooStorySection() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[#090706] py-24 text-[#F4F0E8] md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D6A858]/70 to-transparent" />

      <div className="mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#D6A858]">
              Metodo Dragon
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              A tatuagem nasce antes da agulha.
            </h2>
          </div>

          <p className="max-w-3xl text-xl leading-9 text-[#F4F0E8]/66 md:text-3xl md:leading-[1.22] lg:ml-auto">
            O oriental exige ritmo, narrativa e respeito ao corpo. Cada linha e
            planejada para a peca continuar forte quando vista de perto, em
            movimento e a distancia.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          <div className="flex flex-col justify-between border-y border-[#F4F0E8]/12">
            <div>
              {methodItems.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-[#F4F0E8]/12 py-7 md:grid-cols-[72px_1fr] last:border-b-0"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.26em] text-[#D6A858]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black uppercase leading-none md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#F4F0E8]/56">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-[#F4F0E8]/12 py-7">
              <Link
                href={dragonTattooBudgetWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#080706] transition hover:bg-white"
              >
                Conversar sobre meu desenho
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[0.64fr_0.36fr]">
            <div className="dragon-photo-wrap relative h-[520px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] md:h-[720px]">
              <Image
                src={dragonTattooImages.dragonBack}
                alt="Mateus Silva tatuando um dragao oriental nas costas"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="dragon-photo object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#090706]/78 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-md border-t border-r border-[#F4F0E8]/14 bg-[#090706]/84 p-6 backdrop-blur md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                  Anatomy first
                </p>
                <p className="mt-4 text-xl font-black uppercase leading-tight md:text-2xl">
                  Composicao feita para respirar junto com a musculatura.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="dragon-photo-wrap relative h-[300px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] md:h-[420px]">
                <Image
                  src={dragonTattooImages.decal}
                  alt="Aplicacao de decalque para tatuagem oriental"
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className="dragon-photo object-cover"
                />
              </div>

              <div className="border border-[#F4F0E8]/14 bg-[#F4F0E8]/6 p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                  Padrao Dragon
                </p>
                <p className="mt-5 text-lg leading-8 text-[#F4F0E8]/72">
                  Nao e sobre preencher espaco. E sobre construir uma peca com
                  presenca, leitura e permanencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
