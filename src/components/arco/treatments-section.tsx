import Image from "next/image";
import { BracketsCurly, Sparkle, Tooth } from "@phosphor-icons/react/dist/ssr";

import { arcoImages, treatments } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const featureCards = [
  {
    icon: Sparkle,
    title: "Clareamento dental",
    text: "Protocolos seguros para iluminar o sorriso com orientação profissional.",
    image: arcoImages.whitening,
    alt: "Procedimento de clareamento dental na ARCO",
  },
  {
    icon: BracketsCurly,
    title: "Ortodontia e alinhamento",
    text: "Tratamentos para alinhar o sorriso com previsibilidade e acompanhamento contínuo.",
    image: arcoImages.bracesCare,
    alt: "Troca de borrachinhas durante tratamento ortodôntico",
  },
  {
    icon: Tooth,
    title: "Prevenção e restauração",
    text: "Limpezas, restaurações e reabilitações para preservar a saúde e a função dos dentes.",
    image: arcoImages.cleaning,
    alt: "Limpeza odontológica de rotina na ARCO",
  },
];

const treatmentCategories = [
  "Alinhamento",
  "Estetica",
  "Cirurgia",
  "Estetica",
  "Funcao",
  "Prevencao",
  "Saude",
  "Tecnologia",
];

export function ArcoTreatmentsSection() {
  return (
    <section
      id="tratamentos"
      className="bg-[#F8FCFE]  px-5 py-20 text-[#123A5C] md:px-10 md:py-28 lg:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>Nossos tratamentos</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Cuidado completo para a saúde, a estética e a função do sorriso.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-[#4A6477]">
            Tratamentos conduzidos com diagnóstico preciso, planejamento
            individualizado e acompanhamento próximo em cada etapa do cuidado.
            Tudo para que você alcance resultados seguros, duradouros e
            alinhados aos seus objetivos.
          </p>

          <div className="mt-7">
            <ActionLink>Quero avaliar meu sorriso</ActionLink>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {featureCards.map(({ icon: Icon, title, text, image, alt }) => (
          <article
            key={title}
            className="group overflow-hidden rounded-lg border border-[#1F5687]/10 bg-[#F8FCFE]"
          >
            <div className="relative h-72">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative isolate min-h-60 overflow-hidden p-7">
              <Icon
                size={176}
                weight="thin"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-9 -right-8 -z-10 text-[#1F5687]/8 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-105"
              />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 max-w-sm leading-7 text-[#4A6477]">{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-lg border border-[#1F5687]/10 lg:grid lg:grid-cols-[0.3fr_0.7fr]">
        <div className="flex flex-col justify-between bg-[#123A5C] p-7 text-white md:p-10">
          <div>
            <p className="text-xs font-bold uppercase text-[#B8D9EA]">
              Visao integrada
            </p>
            <p className="mt-5 text-5xl font-semibold leading-none md:text-6xl">
              08
            </p>
            <h3 className="mt-5 max-w-xs text-3xl font-semibold leading-tight">
              possibilidades para um cuidado completo.
            </h3>
          </div>
          <p className="mt-14 max-w-sm text-sm leading-7 text-white/62">
            Cada indicacao parte de um diagnostico individual. O plano combina
            apenas o que faz sentido para a sua saude, funcao e sorriso.
          </p>
        </div>

        <div className="grid bg-[#1F5687]/10 md:grid-cols-2 md:gap-px">
          {treatments.map((treatment, index) => (
            <article
              key={treatment}
              className="group flex min-h-40 flex-col justify-between border-b border-[#1F5687]/10 bg-white p-6 transition-colors duration-300 hover:bg-[#EAF5FB] md:border-b-0 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold text-[#1F5687]/54">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-[#1F5687]/14 px-3 py-1.5 text-[10px] font-bold uppercase text-[#1F5687]">
                  {treatmentCategories[index]}
                </span>
              </div>
              <h3 className="mt-10 max-w-sm text-xl font-semibold leading-7 transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                {treatment}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
