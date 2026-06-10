import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { stepImages, stepWhatsappHref } from "./data";
import { StepHoverCard, StepHoverLink, StepReveal } from "./motion";

const heroMetrics = [
  {
    value: "Precisão",
    label: "Diagnóstico técnico antes de qualquer intervenção no par.",
  },
  {
    value: "Conservação",
    label: "Método adequado para preservar forma, textura e acabamento.",
  },
  {
    value: "Resultado",
    label: "Entrega compatível com a percepção de um serviço premium.",
  },
] as const;

export function StepHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#080808] px-5 py-12 text-[#F5F1EA] md:px-8 lg:px-10"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%]">
          <Image
            src={stepImages.background}
            alt=""
            fill
            priority={false}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover opacity-16"
          />

        </div>

        <div
          className="absolute inset-y-0 right-0 hidden w-[56%] overflow-hidden lg:block"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            src={stepImages.hero}
            alt=""
            fill
            priority={false}
            sizes="56vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,8,8,0.72)_0%,rgba(8,8,8,0.14)_38%,rgba(8,8,8,0.4)_100%)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_70%_24%,rgba(214,201,184,0.14),transparent_18%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.94))]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-440 gap-10 lg:min-h-[900px] lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-end">
        <StepReveal className="relative z-10 flex flex-col justify-end pt-18 md:pt-24 lg:min-h-[820px] lg:pb-8 lg:pt-30">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68 backdrop-blur-sm">
              Sneaker care studio
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl leading-[0.84] md:text-7xl lg:text-[108px]">
              Seu sneaker merece tratamento de estúdio, não de lavanderia.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              A STEP transforma cuidado em preservação. Cada par passa por uma
              leitura técnica de material, estrutura e desgaste para receber um
              processo preciso, silencioso e compatível com o seu valor.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <StepHoverLink
                href={stepWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F3EEE7]"
              >
                Solicitar avaliação técnica
                <ArrowUpRight size={16} />
              </StepHoverLink>

              <StepHoverLink
                href="#processo"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/6 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Entender o processo
                <ArrowRight size={16} />
              </StepHoverLink>
            </div>
          </div>

          <StepReveal delay={0.12} className="mt-12 grid gap-3 md:grid-cols-3">
            {heroMetrics.map((metric) => (
              <StepHoverCard key={metric.value}>
                <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F3EEE7]">
                    {metric.value}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/62">
                    {metric.label}
                  </p>
                </article>
              </StepHoverCard>
            ))}
          </StepReveal>
        </StepReveal>

        <div className="relative hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
