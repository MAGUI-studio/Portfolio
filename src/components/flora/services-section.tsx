import Image from "next/image";

import {
  floraImages,
  floraServiceHighlights,
  floraServices,
  floraWhatsappHref,
} from "./data";
import {
  FloraHoverCard,
  FloraHoverLink,
  FloraImageReveal,
  FloraReveal,
} from "./motion";

export function FloraServicesSection() {
  return (
    <section
      id="servicos"
      className="overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#3A402C] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-end">
        <FloraReveal className="grid gap-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70835B]">
            Serviços
          </p>
          <h2 className="text-5xl leading-[0.92] md:text-7xl">
            A Flora não entrega só plantas. Entrega direção.
          </h2>
          <p className="text-base leading-8 text-[#5A4A3D]/84 md:text-lg">
            Cada escolha pode partir de um ambiente, de uma intenção ou de uma
            ocasião. A Flora ajuda a transformar isso em uma composição mais
            clara, bonita e coerente com a casa.
          </p>
          <FloraHoverLink
            href={floraWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-full border border-[#EAEAEA] bg-white px-5 py-3 text-sm font-semibold text-[#24301C] transition-colors hover:bg-[#FDFDFD]"
          >
            Falar sobre meu ambiente
          </FloraHoverLink>
        </FloraReveal>

        <FloraImageReveal>
          <article className="grid overflow-hidden rounded-[40px] border border-[#EAEAEA] bg-white shadow-[0_18px_44px_rgba(58,64,44,0.04)] md:grid-cols-[0.52fr_0.48fr]">
            <figure className="relative min-h-[360px] overflow-hidden">
              <Image
                src={floraImages.pots}
                alt="Vasos e composições disponíveis na Flora"
                fill
                sizes="(min-width: 1280px) 34vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="grid content-between gap-8 px-6 py-6 md:px-7 md:py-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#70835B]">
                  Curadoria aplicada
                </p>
                <p className="mt-4 text-3xl leading-tight">
                  Vasos, espécies e presença visual pensados em conjunto.
                </p>
              </div>
              <div className="grid gap-3">
                {floraServiceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-[#EFEFEF] bg-white px-4 py-3 text-sm leading-6 text-[#5A4A3D]/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </FloraImageReveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {floraServices.map((item, index) => (
          <FloraImageReveal key={item.title} delay={index * 0.06}>
            <FloraHoverCard className="h-full">
              <article className="grid h-full gap-4 rounded-[32px] border border-[#EAEAEA] bg-white px-6 py-6 shadow-[0_14px_34px_rgba(58,64,44,0.035)]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#70835B]">
                  0{index + 1}
                </span>
                <h3 className="text-3xl leading-tight">{item.title}</h3>
                <p className="text-sm leading-7 text-[#5A4A3D]/84">
                  {item.text}
                </p>
              </article>
            </FloraHoverCard>
          </FloraImageReveal>
        ))}
      </div>
    </section>
  );
}
