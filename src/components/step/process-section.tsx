import Image from "next/image";

import { stepMaterials, stepProcess } from "./data";

export function StepProcessSection() {
  return (
    <section
      id="processo"
      className="bg-[#FAFAFA] px-5 py-20 text-black md:px-8 md:py-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-440">
        <div className="grid gap-6 md:grid-cols-[0.44fr_0.56fr] md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/52">
              Processo técnico
            </p>
            <h2 className="mt-5 text-4xl leading-[0.95] md:text-6xl">
              Um fluxo desenhado para preservar, não apenas aparentar limpeza.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/76">
            Cada etapa existe para reduzir risco, respeitar material e devolver
            um resultado consistente. O processo é controlado, sequencial e
            ajustado para o tipo de sneaker que entra no estúdio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stepProcess.map((step) => (
            <article
              key={step.id}
              className="group overflow-hidden rounded-[30px] bg-[#F3F3F3] shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <figure className="relative aspect-[1/1.08] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </figure>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Etapa {step.id}
                </span>
                <h3 className="mt-5 text-2xl leading-tight">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/72">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[34px] bg-black shadow-[0_22px_60px_rgba(0,0,0,0.12)]">
          <div className="grid gap-0 md:grid-cols-[0.4fr_0.6fr]">
            <div className="bg-black px-8 py-8 text-white md:px-10 md:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                Materiais e acabamentos
              </p>
              <h3 className="mt-5 text-3xl leading-tight md:text-4xl">
                Método específico para cada construção.
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
                O tratamento muda conforme superfície, pigmento, porosidade e
                desgaste para preservar o máximo possível de estrutura e
                acabamento.
              </p>
            </div>

            <div className="grid gap-[1px] bg-white/10 p-[1px] md:grid-cols-2">
              {stepMaterials.map((material, index) => (
                <div
                  key={material}
                  className="flex min-h-32 flex-col justify-between bg-[#111111] px-5 py-5 text-white md:px-6"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/34">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-sm leading-7 text-white/78">
                    {material}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
