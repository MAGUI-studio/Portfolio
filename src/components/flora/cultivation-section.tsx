import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { floraCultivationSteps, floraImages, floraWhatsappHref } from "./data";
import {
  FloraHoverCard,
  FloraHoverLink,
  FloraImageReveal,
  FloraReveal,
} from "./motion";

export function FloraCultivationSection() {
  return (
    <section
      id="cultivo"
      className="relative flex flex-col justify-center overflow-hidden bg-[#20261A] px-5 py-20 text-[#F4F0E8] md:px-8 md:py-32 lg:px-10"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={floraImages.caretaker}
          alt="Profissional cuidando das plantas na Flora"
          fill
          priority
          className="object-cover object-top brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,29,20,0.9)_0%,rgba(25,29,20,0.62)_42%,rgba(25,29,20,0.34)_70%,rgba(25,29,20,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,240,232,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.36))]" />
      </div>

      <div className="relative z-10">
        <FloraReveal className="grid max-w-2xl gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
            Cultivo e composição
          </p>
          <h2 className="text-5xl leading-[0.92] md:text-7xl">
            A planta certa muda o espaço inteiro.
          </h2>
          <p className="text-base leading-8 text-white/70 md:text-lg">
            A Flora orienta a escolha das espécies, dos vasos e da composição do
            ambiente para que o verde faça sentido dentro da rotina, da luz e da
            linguagem da casa.
          </p>
          <FloraHoverLink
            href={floraWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#F4F0E8]"
          >
            Solicitar curadoria personalizada
            <ArrowUpRight size={16} />
          </FloraHoverLink>
        </FloraReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {floraCultivationSteps.map((item, index) => (
            <FloraImageReveal key={item.title} delay={index * 0.06}>
              <FloraHoverCard className="h-full">
                <article className="grid h-full gap-5 rounded-[32px] bg-white/10 px-6 py-6 backdrop-blur-md">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/38">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl leading-tight text-[#F4F0E8]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/68">{item.text}</p>
                </article>
              </FloraHoverCard>
            </FloraImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
