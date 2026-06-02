import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegMethod, sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";
import { SayegReveal } from "./motion";

export function SayegMethodSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-[#202427] px-5 pb-32 pt-20 text-white md:px-10 md:pb-40 md:pt-28 lg:px-14 lg:pb-44 lg:pt-36">
      <div className="mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_minmax(0,0.65fr)]">
          <SayegReveal className="lg:pr-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e4c9b9]">Método autoral</p>
            <h2 className={`${sayegDisplay.className} mt-6 text-6xl font-medium leading-[0.9] tracking-tighter md:text-8xl lg:text-[108px]`}>Nada é padronizado. Tudo é pensado.</h2>
            <p className="mt-8 text-base leading-8 text-white/64">Uma experiência de autocuidado exclusiva, conduzida com tempo, atenção e o rigor técnico que a naturalidade exige.</p>
            <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-3 border-b border-white/70 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#e4c9b9] hover:text-[#e4c9b9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e4c9b9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#202427]">
              Agendar avaliação <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </SayegReveal>

          <div className="grid min-w-0 gap-px  md:grid-cols-2">
            {sayegMethod.map((step) => (
              <SayegReveal key={step.number} delay={Number(step.number) * 0.05}>
              <article className="group relative min-h-82.5 overflow-hidden p-6 transition-colors duration-500 hover:bg-white/[0.035] md:p-8">
                <span className={`${sayegDisplay.className} absolute right-5 -top-8 text-[148px] italic leading-none text-white/4.5 transition-colors group-hover:text-white/8`}>{step.number}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e4c9b9]">Etapa {step.number}</p>
                <div className="absolute bottom-7 left-6 right-6 md:bottom-8 md:left-8 md:right-2">
                  <h3 className={`${sayegDisplay.className} text-5xl leading-[0.9]`}>{step.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">{step.text}</p>
                </div>
              </article>
              </SayegReveal>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-x-2 -bottom-px h-16 bg-[#fafafa] [clip-path:polygon(0_100%,100%_36%,100%_100%)] md:h-24" />
    </section>
  );
}
