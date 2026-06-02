import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegImages, sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";

export function SayegStudioSection() {
  return (
    <section id="espaco" className="relative bg-[#fafafa] px-5 pb-32 pt-20 md:px-10 md:pb-40 md:pt-28 lg:px-14 lg:pb-44 lg:pt-36">
      <div>
        <div className="grid gap-8 pt-5 lg:grid-cols-12">
          <div className="pb-2 lg:col-span-4 lg:pt-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8d594d]">O estúdio</p>
            <h2 className={`${sayegDisplay.className} mt-6 text-6xl font-medium leading-[0.9] tracking-tighter text-[#262323] md:text-8xl lg:text-[110px]`}>Calma em cada detalhe.</h2>
            <p className="mt-7 text-base leading-8 text-[#262323]/65">Um ambiente reservado para que cada atendimento aconteça sem pressa. Da recepção ao procedimento, o espaço traduz discrição, conforto e cuidado integral.</p>
            <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#673d35] transition-colors hover:text-[#35231f]">
              Agendar uma visita <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="relative lg:col-span-8">
            <Image src={sayegImages.studio} alt="Consultório de Beatriz Sayeg" width={1672} height={941} className="h-97.5 w-full object-cover md:h-135" />
            <p className="absolute -bottom-5 left-5 bg-[#fafafa] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#8d594d] md:left-10">01 · Consultório privativo</p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="relative md:col-span-7">
            <Image src={sayegImages.reception} alt="Recepção do estúdio Beatriz Sayeg" width={1672} height={941} className="h-82.5 w-full object-cover md:h-115" />
            <p className="absolute -bottom-5 right-5 bg-[#fafafa] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#8d594d]">02 · Recepção reservada</p>
          </div>
          <div className="border-l border-[#262323]/14 pl-6 md:col-span-4 md:col-start-9 md:pb-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8d594d]">Atendimento particular</p>
            <p className={`${sayegDisplay.className} mt-10 text-5xl leading-[0.95] tracking-[-0.04em] text-[#262323] md:text-7xl`}>Uma pausa para cuidar de si com intenção.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
