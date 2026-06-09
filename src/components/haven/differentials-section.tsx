import { Heart, HandHeart, MoonStars, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

import { HavenReveal } from "./motion";

const differentials = [
  {
    title: "Mais previsibilidade",
    text: "Explicamos antes, combinamos o ritmo e deixamos a família entender como o atendimento vai acontecer.",
    icon: ShieldCheck,
  },
  {
    title: "Mais respeito ao tempo",
    text: "Não forçamos etapas. A experiência se adapta ao momento, aos limites e ao conforto de cada pessoa.",
    icon: MoonStars,
  },
  {
    title: "Mais adaptação sensorial",
    text: "Luz, toque, sons e abordagem são conduzidos com mais atenção para reduzir sobrecarga.",
    icon: Heart,
  },
  {
    title: "Mais acolhimento da família",
    text: "Pais, mães e responsáveis participam do processo com clareza e segurança desde o primeiro contato.",
    icon: HandHeart,
  },
];

export function HavenDifferentialsSection() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-28 lg:px-10">
      <div className="grid gap-6 xl:grid-cols-[0.28fr_0.72fr]">
        <HavenReveal className="rounded-[2rem] bg-[#14283D] px-6 py-8 text-white md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/62">
            Diferenciais
          </p>
          <h2 className="mt-6 text-5xl leading-[0.9] tracking-tight md:text-7xl">
            O que muda aqui.
          </h2>
          <p className="mt-6 text-sm leading-7 text-white/76">
            A Haven não tenta encaixar todo mundo no mesmo atendimento. O nosso
            trabalho parte da pessoa, não do procedimento.
          </p>
        </HavenReveal>

        <div className="grid gap-4">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <HavenReveal
                key={item.title}
                delay={index * 0.05}
                className="grid gap-5 rounded-[2rem] border border-[#14283D]/10 bg-white px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,40,61,0.08)] md:grid-cols-[0.18fr_0.82fr] md:items-start md:px-6"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#EAF0F6] text-[#14283D]">
                    <Icon size={22} weight="fill" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#14283D]/34 md:hidden">
                    Diferencial
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-[0.42fr_0.58fr] md:items-start">
                  <h3 className="text-3xl leading-none">{item.title}</h3>
                  <p className="text-sm leading-7 text-[#14283D]/68">
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
