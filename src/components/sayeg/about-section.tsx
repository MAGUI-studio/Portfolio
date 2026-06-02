import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegImages, sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";
import { SayegBackdropWord, SayegReveal } from "./motion";

export function SayegAboutSection() {
  return (
    <section id="beatriz" className="relative overflow-hidden bg-[#fafafa] px-5 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
      <SayegBackdropWord className="pointer-events-none absolute left-[-2vw] top-10 z-0 hidden select-none xl:block">
        <span className={`${sayegDisplay.className} block text-[240px] font-bold leading-none tracking-tighter text-[#f0f0f0] 2xl:text-[280px]`}>
          SAYEG
        </span>
      </SayegBackdropWord>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.54fr_0.46fr] lg:gap-24">
        <SayegReveal className="grid grid-cols-[0.16fr_0.84fr] items-end">
          <p className="[writing-mode:vertical-rl] rotate-180 pb-5 text-[9px] font-bold uppercase tracking-[0.34em] text-[#8d594d]">Especialista · fundadora · técnica</p>
          <figure className="relative">
            <div className="overflow-hidden bg-[#e4e4e4]">
              <Image src={sayegImages.cover} alt="Beatriz Sayeg, especialista em visagismo avançado" width={1254} height={1254} className="aspect-[0.9] w-full object-cover" />
            </div>
            <figcaption className="absolute -bottom-6 -right-4 w-[74%]  bg-[#fafafa] p-5 md:-right-8">
              <p className={`${sayegDisplay.className} text-3xl italic leading-none text-[#673d35]`}>“Sofisticação é respeitar a essência.”</p>
            </figcaption>
          </figure>
        </SayegReveal>

        <SayegReveal delay={0.08} className="self-end pb-8">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#8d594d]">Sobre Beatriz</p>
          <h2 className={`${sayegDisplay.className} mt-7 text-6xl font-medium leading-[0.92] tracking-[-0.045em] text-[#262323] md:text-8xl lg:text-[108px]`}>
            O detalhe certo transforma sem <em className="font-normal text-[#8d594d]">exagerar.</em>
          </h2>
          <div className="mt-9 grid gap-6  pt-7 text-base leading-8 text-[#262323]/66 md:grid-cols-2">
            <p>Reconhecida por traduzir elegância e discrição em resultados milimétricos, Beatriz construiu uma assinatura própria no mercado de beleza de luxo.</p>
            <p>Longe de fórmulas prontas, seu trabalho nasce de um estudo profundo do rosto para revelar uma beleza coerente, harmônica e atemporal.</p>
          </div>
          <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" className="group mt-9 inline-flex items-center gap-3 border-b border-[#673d35]/70 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#673d35] transition-colors hover:border-[#35231f] hover:text-[#35231f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8d594d] focus-visible:ring-offset-4">
            Conversar com o estúdio
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </SayegReveal>
      </div>
    </section>
  );
}
