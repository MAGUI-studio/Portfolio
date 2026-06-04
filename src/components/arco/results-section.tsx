import Image from "next/image";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const cases = [
  {
    title: "Alinhamento do sorriso",
    text: "Evolucao de apinhamento com uso de aparelho e acompanhamento ortodontico.",
    image: arcoImages.alignmentBeforeAfter,
    alt: "Antes e atual de caso de apinhamento com uso de aparelho",
  },
  {
    title: "Clareamento dental",
    text: "Conduta profissional para recuperar luminosidade e deixar o sorriso mais leve.",
    image: arcoImages.whiteningBeforeAfter,
    alt: "Antes e atual de dentes amarelados apos clareamento dental",
  },
];

export function ArcoResultsSection() {
  return (
    <section id="resultados" className="bg-white px-5 py-20 text-[#123A5C] md:px-10 md:py-28 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
        <div>
          <Eyebrow>Resultados acompanhados</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Transformacoes visiveis, conduzidas com criterio.
          </h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-[#4A6477]">
          Os resultados acontecem melhor quando o plano e compreendido. A ARCO
          acompanha cada etapa para que estetica, saude e funcao caminhem
          juntas.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {cases.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-lg border border-[#1F5687]/10 bg-[#F8FCFE]">
            <div className="relative h-[360px] md:h-[470px]">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="grid gap-5 p-7 md:grid-cols-[0.42fr_0.58fr]">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="leading-7 text-[#4A6477]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="rounded-lg bg-[#1F5687] p-7 text-white md:p-10">
          <Sparkle size={34} />
          <h3 className="mt-16 text-4xl font-semibold leading-tight">
            O proximo sorriso pode comecar por uma conversa honesta.
          </h3>
          <div className="mt-8">
            <ActionLink light>Falar com a ARCO</ActionLink>
          </div>
        </div>
        <figure className="relative min-h-[430px] overflow-hidden rounded-lg bg-[#D7EAF5]">
          <Image
            src={arcoImages.whitening}
            alt="Dentista realizando clareamento dental"
            fill
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 flex items-center gap-3 rounded-lg bg-white/92 px-4 py-3 text-sm font-bold text-[#123A5C] backdrop-blur">
            Planejamento personalizado <ArrowRight size={16} />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
