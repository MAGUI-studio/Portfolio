import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { stepWhatsappHref, stepImages } from "./data";
import { BeforeAfterSlider } from "./before-after-slider";

export function StepTransformationSection() {
  return (
    <section
      id="resultado"
      className="relative overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#0A0A0A] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid w-full gap-5 lg:grid-cols-[0.38fr_0.62fr]">
        <aside className="flex min-h-[680px] flex-col justify-between rounded-[40px] bg-[#0A0A0A] p-8 text-white md:p-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Resultado STEP
            </p>

            <h3 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
              O resultado final também faz parte da experiência.
            </h3>
          </div>

          <div>
            <p className="text-base leading-8 text-white/62">
              A STEP não entrega só um tênis limpo. Entrega contraste,
              estrutura, acabamento e uma experiência premium do processo à
              embalagem.
            </p>

            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition hover:bg-white/80"
            >
              Solicitar análise
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </aside>

        <div className="grid gap-5">
          <div className="rounded-[40px] bg-[#0A0A0A] p-3">
            <div className="overflow-hidden rounded-[32px]">
              <BeforeAfterSlider
                beforeImage={stepImages.after}
                beforeAlt="Sneaker antes do processo técnico da STEP com sujeira intensa"
                afterImage={stepImages.before}
                afterAlt="Sneaker após o processo da STEP com visual restaurado"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[0.55fr_0.45fr]">
            <div className="rounded-[36px] bg-white p-7 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/35">
                Entrega final
              </p>

              <h3 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Seu sneaker retorna com a atenção que merece.
              </h3>

              <p className="mt-6 text-base leading-8 text-black/58">
                O par volta revisado, orientado e apresentado como parte de uma
                experiência premium — não apenas como mais uma lavagem.
              </p>
            </div>

            <figure className="relative overflow-hidden rounded-[36px] bg-[#0A0A0A] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image
                  src={stepImages.handoff}
                  alt="Funcionário da STEP entregando caixa com sneaker finalizado ao cliente"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
