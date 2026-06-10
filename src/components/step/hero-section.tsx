import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { stepMetrics, stepWhatsappHref, stepImages } from "./data";

export function StepHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0A0A0A] px-5 pb-10 pt-28 text-white md:px-8 md:pb-12 md:pt-32 lg:px-10 lg:pt-36"
    >
      <div className="absolute inset-0">
        <Image
          src={stepImages.background}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_75%_15%,rgba(179,179,179,0.14),transparent_18%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative grid w-full gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <div className="pb-6">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
            Sneaker care studio
          </span>

          <h1 className="mt-8 text-5xl leading-[0.9] md:text-7xl lg:text-[96px]">
            Manutenção técnica para sneakers de valor.
          </h1>

          <p className="mt-8 text-base leading-8 text-white/68 md:text-lg">
            A STEP transforma cuidado em preservação. Mais do que limpar, o
            estúdio atua com método, critério e leitura técnica para conservar
            materiais, estrutura e presença visual de cada par.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#D9D9D9]"
            >
              Solicitar avaliação técnica
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#processo"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/6"
            >
              Entender o processo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <figure className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
            <div className="relative aspect-[1.05/1] min-h-[420px]">
              <Image
                src={stepImages.hero}
                alt="Par de Air Jordan branco higienizado pela STEP em ambiente sofisticado"
                fill
                preload
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.88))] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
                Processo com critério
              </p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Seu tênis não entra em uma lavagem genérica. Ele entra em uma
                rotina técnica de preservação.
              </p>
            </div>
          </figure>

          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stepMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[24px] border border-white/10 bg-white/4 p-5"
              >
                <p className="text-3xl font-semibold text-[#F8F8F8]">
                  {metric.value}
                </p>
                <p className="mt-8 text-sm leading-6 text-white/62">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
