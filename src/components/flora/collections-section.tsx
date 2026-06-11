import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { floraCollections } from "./data";
import {
  FloraHoverCard,
  FloraHoverLink,
  FloraImageReveal,
  FloraReveal,
} from "./motion";

export function FloraCollectionsSection() {
  const [featured, secondary, tertiary, quaternary] = floraCollections;

  return (
    <section
      id="colecao"
      className="overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#3A402C] md:px-8 md:py-24 lg:px-10"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <FloraReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70835B]">
            Coleções
          </p>
          <h2 className="mt-5 text-5xl leading-[0.92] md:text-8xl">
            Um acervo vivo pensado como parte da arquitetura do ambiente.
          </h2>
        </FloraReveal>

        <FloraReveal delay={0.06}>
          <p className="text-base leading-8 text-[#5A4A3D]/86 md:text-lg">
            A Flora reúne espécies ornamentais, tropicais, suculentas, plantas
            de coleção, vasos e acessórios em uma curadoria pensada para
            interiores contemporâneos, composições naturais e experiências de
            bem-estar.
          </p>
        </FloraReveal>
      </div>

      <div className="mt-12 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <FloraImageReveal>
          <FloraHoverCard className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[40px] bg-[#D8D3C8] text-[#F4F0E8] shadow-[0_24px_70px_rgba(58,64,44,0.1)]">
              <figure className="relative h-full">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  sizes="(min-width: 1280px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </figure>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,16,0.08),rgba(20,24,16,0.66))]" />
              <div className="absolute inset-x-0 bottom-0 grid gap-5 p-6 md:p-8">
                <span className="w-fit rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                  Destaque da curadoria
                </span>
                <div className="grid gap-4 lg:grid-cols-[0.56fr_0.44fr] lg:items-end">
                  <div>
                    <h3 className="text-4xl leading-[0.95] md:text-6xl">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-white/78 lg:w-[88%]">
                      {featured.text}
                    </p>
                  </div>
                  <FloraHoverLink
                    href="#ambientes"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-white"
                  >
                    Ver como a Flora compõe ambientes
                    <ArrowRight size={15} />
                  </FloraHoverLink>
                </div>
              </div>
            </article>
          </FloraHoverCard>
        </FloraImageReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
          {[secondary, tertiary, quaternary].map((item, index) => (
            <FloraImageReveal key={item.title} delay={index * 0.06}>
              <FloraHoverCard className="h-full">
                <article className="group grid h-full overflow-hidden rounded-[34px] bg-white shadow-[0_20px_60px_rgba(58,64,44,0.08)] md:grid-cols-[0.48fr_0.52fr] xl:grid-cols-[0.42fr_0.58fr]">
                  <figure className="relative min-h-[280px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 26vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </figure>
                  <div className="flex flex-1 flex-col justify-between px-6 py-6">
                    <div>
                      <h3 className="text-3xl leading-tight text-[#3A402C]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#5A4A3D]/84">
                        {item.text}
                      </p>
                    </div>
                    <FloraHoverLink
                      href="#cultivo"
                      className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#3A402C]"
                    >
                      Descobrir a experiência
                      <ArrowRight size={15} />
                    </FloraHoverLink>
                  </div>
                </article>
              </FloraHoverCard>
            </FloraImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
