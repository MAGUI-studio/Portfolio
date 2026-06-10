import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { stepWhatsappHref, stepImages } from "./data";

export function StepStudioSection() {
  return (
    <section
      id="estudio"
      className="bg-[#F8F8F8] px-5 py-20 text-[#0A0A0A] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid w-full gap-5 lg:grid-cols-[0.56fr_0.44fr]">
        <figure className="relative overflow-hidden rounded-[34px] border border-[#0A0A0A]/10 bg-[#111111]">
          <div className="relative aspect-[1.2/1] min-h-[420px]">
            <Image
              src={stepImages.studio}
              alt="Ambiente técnico da STEP com bancada em inox e organização premium"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div
          id="contato"
          className="rounded-[34px] p-8 md:p-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]/58">
            Estúdio e contato
          </p>
          <h2 className="mt-5 text-4xl leading-[0.95] md:text-6xl">
            Especialistas cuidando do que tem valor para você.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#2B2B2B]">
            A linguagem da STEP é intencional: escura, precisa, silenciosa e
            premium. Tudo comunica que o seu tênis será tratado com método.
          </p>

          <div className="mt-10 grid gap-3">
            <div className="rounded-[22px] bg-[#F1F1F1] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]/58">
                Atendimento
              </p>
              <p className="mt-3 text-sm leading-7 text-[#2B2B2B]">
                Avaliação técnica individual para manutenção, higienização,
                restauração e conservação de sneakers premium.
              </p>
            </div>
            <div className="rounded-[22px] bg-[#F1F1F1] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]/58">
                Posicionamento
              </p>
              <p className="mt-3 text-sm leading-7 text-[#2B2B2B]">
                Uma marca técnica, moderna, minimalista e confiante. Menos
                clichê street. Mais precisão de estúdio especializado.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0A0A0A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2B2B2B]"
            >
              Falar com a STEP
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#inicio"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0A0A0A]/12 px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#F3F3F3]"
            >
              Rever apresentação
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
