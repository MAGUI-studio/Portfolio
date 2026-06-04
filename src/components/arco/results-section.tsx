import Image from "next/image";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const cases = [
  {
    title: "Alinhamento do sorriso",
    text: "Transformação gradual da posição dos dentes para proporcionar mais equilíbrio, conforto e confiança ao sorrir.",
    image: arcoImages.alignmentBeforeAfter,
    alt: "Antes e depois de tratamento ortodôntico para correção de apinhamento dental",
  },
  {
    title: "Clareamento dental",
    text: "Recuperação da luminosidade natural dos dentes com um protocolo seguro e supervisionado.",
    image: arcoImages.whiteningBeforeAfter,
    alt: "Antes e depois de clareamento dental realizado na ARCO",
  },
];

export function ArcoResultsSection() {
  return (
    <section
      id="resultados"
      className="bg-[#F8FCFE] px-5 py-20 text-[#123A5C] md:px-10 md:py-28 lg:px-14"
    >
      <div className="flex flex-col gap-5">
        <div>
          <Eyebrow>Resultados acompanhados</Eyebrow>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Mudanças que refletem cuidado, planejamento e confiança.
          </h2>
        </div>

        <p className="text-lg leading-8 text-[#4A6477]">
          Cada resultado é construído ao longo de uma jornada planejada, com
          acompanhamento próximo e decisões tomadas com segurança em cada etapa
          do tratamento.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {cases.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-lg border border-[#1F5687]/10 bg-[#F8FCFE]"
          >
            <div className="relative h-90 md:h-130">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
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
