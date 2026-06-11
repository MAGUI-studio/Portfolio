import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { floraHeroBadges, floraImages, floraWhatsappHref } from "./data";
import { FloraHoverLink, FloraImageReveal, FloraReveal } from "./motion";

export function FloraHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-12 pt-28 text-[#F4F0E8] md:px-8 md:pb-16 md:pt-32 xl:px-10 xl:pb-20 xl:pt-36"
    >
      <div className="absolute inset-0">
        <Image
          src={floraImages.hero}
          alt="Interior da loja Flora com atmosfera de estufa contemporânea"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,29,20,0.9)_0%,rgba(25,29,20,0.62)_42%,rgba(25,29,20,0.34)_70%,rgba(25,29,20,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,240,232,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.36))]" />

      <div className="relative grid min-h-[560px] items-start py-10 md:min-h-[620px] md:py-14">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <FloraReveal>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4F0E8]/78 backdrop-blur-md">
              Garden center premium
            </span>

            <h1 className="mt-8 text-6xl leading-[0.84] md:text-8xl xl:text-[118px]">
              Cultive beleza
              <br />
              todos os dias.
            </h1>

            <p className="mt-8 text-base leading-8 text-[#F4F0E8]/78 md:text-xl xl:w-[78%]">
              A Flora é um garden center contemporâneo criado para aproximar as
              pessoas da natureza através de plantas, ambientes vivos e
              experiências de cultivo. Um espaço premium para quem deseja trazer
              mais vida, sofisticação e bem-estar para dentro de casa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <FloraHoverLink
                href={floraWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4F0E8] px-6 py-4 text-sm font-semibold text-[#24301C] transition-colors hover:bg-white"
              >
                Solicitar atendimento
                <ArrowUpRight size={16} />
              </FloraHoverLink>

              <FloraHoverLink
                href="#colecao"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4 text-sm font-semibold text-[#F4F0E8] backdrop-blur-md transition-colors hover:bg-white/16"
              >
                Explorar coleções
                <ArrowRight size={16} />
              </FloraHoverLink>
            </div>
          </FloraReveal>

          <FloraImageReveal className="xl:justify-self-end">
            <div className="grid gap-4 md:grid-cols-[0.58fr_0.42fr] xl:w-[680px]">
              <div className="rounded-[34px] bg-[linear-gradient(180deg,rgba(244,240,232,0.18),rgba(244,240,232,0.08))] p-6 backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4F0E8]/56">
                  Estufa moderna
                </p>
                <p className="mt-4 text-3xl leading-tight md:text-[40px]">
                  Plantas que transformam ambientes.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#F4F0E8]/72">
                  Curadoria de espécies, vasos e composições para interiores mais
                  naturais, sofisticados e vivos.
                </p>
              </div>

              <div className="grid gap-3">
                {floraHeroBadges.map((item) => (
                  <div
                    key={item}
                    className="rounded-[28px] bg-black/18 px-5 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F0E8]/76 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FloraImageReveal>
        </div>
      </div>
    </section>
  );
}
