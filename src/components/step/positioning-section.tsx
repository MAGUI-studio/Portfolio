import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { stepPillars, stepServices } from "./data";

export function StepPositioningSection() {
  return (
    <section
      id="posicionamento"
      className="bg-[#F8F8F8] px-5 py-20 text-[#0A0A0A] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="rounded-[32px] bg-[#0A0A0A] p-8 text-white md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46">
            O que é a STEP
          </p>
          <h2 className="mt-6 text-4xl leading-[0.95] md:text-6xl">
            A STEP não é uma lavanderia.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/68">
            A STEP é um estúdio técnico de manutenção de sneakers. A marca
            nasceu para atender pessoas que enxergam seus tênis como peças de
            valor financeiro, emocional ou cultural.
          </p>
          <div className="mt-10 h-px bg-white/10" />
          <p className="mt-10 text-sm uppercase tracking-[0.22em] text-white/44">
            Precisão. Conservação. Processo. Engenharia aplicada. Resultado.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-3">
            {stepPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[28px] border border-[#0A0A0A]/10 bg-white p-6"
              >
                <span className="inline-flex rounded-full bg-[#D9D9D9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]">
                  STEP
                </span>
                <h3 className="mt-6 text-2xl leading-tight">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#2B2B2B]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[28px] border border-[#0A0A0A]/10 bg-[linear-gradient(135deg,#FFFFFF,#EFEFEF)] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.48fr_0.52fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]/58">
                  Frente de atuação
                </p>
                <h3 className="mt-4 text-3xl leading-tight md:text-4xl">
                  Cuidado para uso, acervo e restauração visual.
                </h3>
              </div>

              <div className="grid gap-3">
                {stepServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-[20px] border border-[#0A0A0A]/8 bg-[#F8F8F8] px-4 py-4"
                  >
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-[#0A0A0A]" />
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
