import { ChatCircleText, DoorOpen, Scissors, Sparkle } from "@phosphor-icons/react/dist/ssr";

import { HavenReveal } from "./motion";

const firstVisitItems = [
  {
    title: "Chegada",
    text: "Recebemos a família com mais calma, sem pressa para iniciar nada antes de gerar segurança.",
    icon: DoorOpen,
  },
  {
    title: "Escuta",
    text: "Conversamos sobre sensibilidades, rotina, limites e o que pode ajudar aquele momento a fluir melhor.",
    icon: ChatCircleText,
  },
  {
    title: "Adaptação",
    text: "Ajustamos o ambiente, a abordagem e o ritmo para reduzir desconforto e excesso sensorial.",
    icon: Sparkle,
  },
  {
    title: "Cuidado",
    text: "Quando a pessoa se sente pronta, conduzimos o atendimento com mais previsibilidade e respeito.",
    icon: Scissors,
  },
];

export function HavenFirstVisitSection() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-28 lg:px-10">
      <div className="grid gap-10 xl:grid-cols-2 xl:items-start">
        <HavenReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
            Primeira visita
          </p>
          <h2 className="mt-7 text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Tudo começa com acolhimento.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#14283D]/68">
            Antes de qualquer corte, criamos um primeiro contato mais leve,
            claro e respeitoso para que a experiência faça sentido para a
            pessoa atendida e para a família.
          </p>
        </HavenReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {firstVisitItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <HavenReveal
                key={item.title}
                delay={index * 0.06}
                className="grid gap-6 rounded-[2rem] border border-[#14283D]/10 bg-white px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,40,61,0.08)] md:px-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#14283D] text-white">
                    <Icon size={22} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#14283D]/36">
                    {`0${index + 1}`}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl leading-none">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#14283D]/68">
                    {item.text}
                  </p>
                </div>
              </HavenReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
