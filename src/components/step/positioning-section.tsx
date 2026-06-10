import Link from "next/link";
import {
  ArrowRight,
  Crosshair,
  Medal,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

import { stepPillars, stepServices } from "./data";

const pillarIcons = [Crosshair, ShieldCheck, Medal] as const;

export function StepPositioningSection() {
  return (
    <section
      id="posicionamento"
      className="bg-[#FAFAFA] px-5 py-20 text-[#0A0A0A] md:px-8 md:py-24 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-440 gap-6 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start">
        <div className="xl:sticky xl:top-24">
          <div className="rounded-[32px] bg-[#0A0A0A] p-8 text-white shadow-[0_24px_70px_rgba(10,10,10,0.08)] md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46">
              O que é a STEP
            </p>
            <h2 className="mt-6 max-w-xl text-4xl leading-[0.95] md:text-6xl">
              A STEP não é uma lavanderia.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/68">
              A STEP é um estúdio técnico de manutenção de sneakers. A marca
              nasceu para atender pessoas que enxergam seus tênis como peças de
              valor financeiro, emocional ou cultural.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Precisão",
                "Conservação",
                "Processo",
                "Resultado",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/56"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stepPillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Crosshair;

              return (
                <article
                  key={pillar.title}
                  className="group relative min-h-[280px] overflow-hidden rounded-[28px] border border-[#0A0A0A]/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0A0A0A,rgba(10,10,10,0.14))]" />
                  <div className="absolute -right-6 top-5 text-[#0A0A0A]/6 transition-colors duration-300 group-hover:text-[#0A0A0A]/10">
                    <Icon size={112} weight="thin" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <span className="inline-flex w-fit rounded-full border border-[#0A0A0A]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/62">
                      Pilar {index + 1}
                    </span>
                    <h3 className="mt-6 max-w-[16rem] text-2xl leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-[17rem] text-sm leading-7 text-[#2B2B2B]">
                      {pillar.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="rounded-[28px] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start">
              <div className="max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]/58">
                  Frente de atuação
                </p>
                <h3 className="mt-4 text-3xl leading-tight md:text-4xl">
                  Cuidado para uso, acervo e restauração visual.
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#2B2B2B]/82">
                  A experiência da STEP é desenhada para transmitir critério,
                  segurança e domínio técnico em cada etapa do serviço.
                </p>
              </div>

              <div className="grid gap-3">
                {stepServices.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-start gap-4 rounded-[20px] border border-[#0A0A0A]/8 bg-[#F8F8F8] px-4 py-4 md:px-5"
                  >
                    <span className="inline-flex min-w-8 justify-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B2B2B]/46">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[#2B2B2B]">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#resultado"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#0A0A0A] transition hover:text-[#2B2B2B]"
            >
              Ver transformação de antes e depois
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
