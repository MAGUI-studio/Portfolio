import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { stepWhatsappHref, stepImages } from "./data";
import { BeforeAfterSlider } from "./before-after-slider";

export function StepTransformationSection() {
  return (
    <section
      id="resultado"
      className="bg-[#0A0A0A] px-5 py-20 text-white md:px-8 md:py-24 lg:px-10"
    >
      <div className="w-full">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
              Antes e depois
            </p>
            <h2 className="mt-5 text-4xl leading-[0.95] md:text-6xl">
              Resultado que devolve leitura, forma e presença.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/68">
            A diferença entre um tênis lavado e um tênis tratado está no que
            volta a aparecer: volume, contraste, textura e acabamento. A STEP
            trabalha para recuperar percepção de cuidado sem descaracterizar o
            par.
          </p>
        </div>

        <div className="mt-12">
          <BeforeAfterSlider
            beforeImage={stepImages.before}
            beforeAlt="Sneaker antes do processo técnico da STEP com sujeira intensa"
            afterImage={stepImages.after}
            afterAlt="Sneaker após o processo da STEP com visual restaurado"
          />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.44fr_0.56fr]">
          <figure className="relative overflow-hidden rounded-[32px] border border-white/10">
            <div className="relative aspect-[1.04/1] min-h-[420px]">
              <Image
                src={stepImages.handoff}
                alt="Funcionário da STEP entregando caixa com sneaker finalizado ao cliente"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="rounded-[32px] bg-[linear-gradient(135deg,#1A1A1A,#101010)] p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
              Entrega final
            </p>
            <h3 className="mt-5 text-3xl leading-tight md:text-5xl">
              Seu sneaker volta com cara de item preservado, não de item
              improvisado.
            </h3>
            <p className="mt-6 text-base leading-8 text-white/68">
              A apresentação importa porque faz parte da experiência premium. A
              entrega fecha o ciclo com revisão, orientação e sensação de
              cuidado especializado.
            </p>
            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#D9D9D9]"
            >
              Solicitar análise do meu par
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
