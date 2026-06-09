import Image from "next/image";

import { havenImages } from "./data";
import { HavenReveal } from "./motion";

export function HavenBrandSection() {
  return (
    <section
      id="sobre"
      className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-32 lg:px-10"
    >
      <div className="grid gap-14 xl:grid-cols-[0.32fr_0.68fr]">
        <HavenReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
            Sobre
          </p>
          <div className="mt-6">
            <Image
              src={havenImages.simbolo}
              alt="Simbolo da Haven"
              width={42}
              height={42}
              className="h-10 w-10"
            />
          </div>
          <h2 className="mt-7 max-w-sm text-5xl leading-[0.9] tracking-tight md:text-7xl">
            O que e a Haven.
          </h2>
        </HavenReveal>

        <div className="grid gap-8">
          <HavenReveal
            delay={0.06}
            className="grid gap-7 text-base leading-8 text-[#14283D]/70 md:grid-cols-2"
          >
            <p>
              A Haven e um espaco especializado em cortes de cabelo e cuidados
              pessoais para pessoas autistas e neurodivergentes. Mais do que um
              salao ou barbearia, fomos criados para acolher cada pessoa com mais
              previsibilidade, respeito e calma.
            </p>
            <p>
              Partimos da compreensao de que esse momento pode ser dificil para
              muitas familias. Por isso, cada detalhe do atendimento foi pensado
              para transformar o cuidado pessoal em uma experiencia mais segura,
              leve e positiva.
            </p>
          </HavenReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <HavenReveal
              delay={0.1}
              className="border-t border-[#14283D]/12 pt-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl">Como atendemos</h3>
              <p className="mt-4 text-sm leading-7 text-[#14283D]/66">
                Trabalhamos com atendimento individualizado, escuta ativa e
                adaptacao ao ritmo de cada pessoa.
              </p>
            </HavenReveal>

            <HavenReveal
              delay={0.14}
              className="border-t border-[#14283D]/12 pt-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl">Como trabalhamos</h3>
              <p className="mt-4 text-sm leading-7 text-[#14283D]/66">
                Conduzimos tudo com comunicacao clara, preparacao previa e um
                ambiente com menor sobrecarga sensorial.
              </p>
            </HavenReveal>

            <HavenReveal
              delay={0.18}
              className="border-t border-[#14283D]/12 pt-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl">No que acreditamos</h3>
              <p className="mt-4 text-sm leading-7 text-[#14283D]/66">
                Acreditamos que o cuidado com a pessoa vem antes do procedimento,
                sempre com empatia, paciencia e acolhimento.
              </p>
            </HavenReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
