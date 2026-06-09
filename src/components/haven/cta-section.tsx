import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { havenWhatsappHref } from "./data";
import { HavenReveal } from "./motion";

export function HavenCtaSection() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-20 text-white md:px-8 md:py-24 lg:px-10">
      <HavenReveal className="grid gap-8 rounded-[2.25rem] border border-[#14283D]/10 bg-[#14283D] px-6 py-10 md:px-8 md:py-12 xl:grid-cols-[0.7fr_0.3fr] xl:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/58">
            Acolhimento real
          </p>
          <h2 className="mt-6 text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Nem todo corte precisa ser difícil.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/76">
            Quando existe escuta, previsibilidade e respeito ao tempo de cada
            pessoa, o cuidado pessoal pode deixar de ser uma tensão e se tornar
            um momento mais leve para toda a família.
          </p>
        </div>

        <div className="flex xl:justify-end">
          <Link
            href={havenWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#14283D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#DCE7F2]"
          >
            Agendar um horário
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </HavenReveal>
    </section>
  );
}
