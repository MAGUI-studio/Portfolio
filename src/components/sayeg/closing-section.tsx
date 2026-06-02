import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";
import { SayegReveal } from "./motion";

export function SayegClosingSection() {
  return (
    <section id="agendamento" className="relative overflow-hidden bg-[#202427] px-5 pb-20 pt-32 text-white [clip-path:polygon(0_4rem,100%_0,100%_100%,0_100%)] md:px-10 md:pb-28 md:pt-40 md:[clip-path:polygon(0_6rem,100%_0,100%_100%,0_100%)] lg:px-14 lg:pb-36 lg:pt-44">
      <div className="relative grid overflow-hidden lg:grid-cols-[0.16fr_0.84fr]">
        <div className="hidden bg-white/[0.035] p-7 text-white lg:flex lg:flex-col lg:justify-between">
          <span
            className={`${sayegDisplay.className} text-5xl italic text-white/82`}
          >
            BS
          </span>
          <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-bold uppercase tracking-[0.38em] text-white/52">
            Beleza com identidade
          </p>
        </div>
        <SayegReveal className="relative overflow-hidden px-6 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <p
            className={`${sayegDisplay.className} absolute -right-5 -top-14 select-none text-[220px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] md:text-[280px]`}
          >
            BS
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e4c9b9]">
            Consulta personalizada
          </p>
          <h2
            className={`${sayegDisplay.className} relative mt-8 text-6xl font-medium leading-[0.88] tracking-[-0.055em] text-white md:text-8xl lg:text-[108px]`}
          >
            Sua beleza não precisa mudar. Precisa ser{" "}
            <em className="font-normal text-[#e4c9b9]">revelada.</em>
          </h2>
          <div className="relative mt-8 flex flex-wrap items-center gap-6 pt-7">
            <p className="text-base leading-8 text-white/62">
              Descubra um cuidado desenhado exclusivamente para você.
            </p>
            <Link
              href={sayegWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-b border-white/72 pb-1 text-[11px] font-medium tracking-wide text-white transition-colors duration-300 hover:border-[#e4c9b9] hover:text-[#e4c9b9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e4c9b9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#202427]"
            >
              Falar com o estúdio <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </SayegReveal>
      </div>
    </section>
  );
}
