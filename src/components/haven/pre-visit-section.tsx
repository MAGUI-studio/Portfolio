import Link from "next/link";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";

import { havenWhatsappHref } from "./data";
import { HavenReveal } from "./motion";

export function HavenPreVisitSection() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-16 text-[#14283D] md:px-8 md:py-20 lg:px-10">
      <HavenReveal className="grid gap-7 border-t border-[#14283D]/10 pt-8 xl:grid-cols-[0.64fr_0.36fr] xl:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
            Próximo passo
          </p>
          <h2 className="mt-6 text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Conheça a Haven com calma.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#14283D]/68">
            Antes do primeiro atendimento, você pode agendar uma visita,
            entender como funciona o espaço e conversar com a equipe sobre o
            que faz mais sentido para a sua família.
          </p>
        </div>

        <div className="flex xl:justify-end">
          <Link
            href={havenWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#14283D] transition duration-300 hover:translate-x-0.5"
          >
            Agendar uma visita antes do atendimento
            <ArrowDownRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
        </div>
      </HavenReveal>
    </section>
  );
}
