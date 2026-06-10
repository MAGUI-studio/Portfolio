import Image from "next/image";

import { stepMaterials, stepProcess } from "./data";

export function StepProcessSection() {
  return (
    <section
      id="processo"
      className="bg-[#ECECEC] px-5 py-20 text-[#0A0A0A] md:px-8 md:py-24 lg:px-10"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[0.44fr_0.56fr] md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]/56">
              Processo técnico
            </p>
            <h2 className="mt-5 text-4xl leading-[0.95] md:text-6xl">
              Um fluxo desenhado para preservar, não apenas aparentar limpeza.
            </h2>
          </div>
          <p className="text-base leading-8 text-[#2B2B2B]">
            Cada etapa existe para reduzir risco, respeitar material e devolver
            um resultado consistente. O processo é controlado, sequencial e
            ajustado para o tipo de sneaker que entra no estúdio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stepProcess.map((step) => (
            <article
              key={step.id}
              className="overflow-hidden rounded-[30px] border border-[#0A0A0A]/10 bg-white"
            >
              <figure className="relative aspect-[1/1.08]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B2B2B]/52">
                  Etapa {step.id}
                </span>
                <h3 className="mt-4 text-2xl leading-tight">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#2B2B2B]">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[30px] bg-[#0A0A0A] p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/46">
                Materiais e acabamentos
              </p>
              <h3 className="mt-5 text-3xl leading-tight md:text-4xl">
                Método específico para cada construção.
              </h3>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {stepMaterials.map((material) => (
                <div
                  key={material}
                  className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/74"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
