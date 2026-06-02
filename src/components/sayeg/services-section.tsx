import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegServices, sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";

export function SayegServicesSection() {
  return (
    <section id="especialidades" className="relative bg-[#fafafa] px-5 pb-28 pt-20 md:px-10 md:pb-36 md:pt-28 lg:px-14 lg:pb-44 lg:pt-36">
      <div>
        <div className="grid gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8d594d]">Especialidades</p>
            <h2 className={`${sayegDisplay.className} mt-6 text-6xl font-medium leading-[0.9] tracking-tighter text-[#262323] md:text-8xl lg:text-[112px]`}>Precisão que parece natural.</h2>
          </div>
          <p className="text-base leading-8 text-[#262323]/65 lg:justify-self-end">
            Cada procedimento é desenhado individualmente para que a técnica permaneça imperceptível e o resultado revele apenas a sua melhor expressão.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-5 lg:gap-7">
          {sayegServices.map((service, index) => (
            <article key={service.number} className={`group ${index === 1 ? "md:pt-14" : index === 2 ? "md:pt-7" : ""}`}>
              <div className="relative aspect-[1.16] overflow-hidden bg-[#dedede]">
                <Image src={service.image} alt={service.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              </div>
              <div className="relative z-10 -mt-7 ml-4 bg-[#fafafa] p-5 md:ml-3 md:p-4 lg:ml-5 lg:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className={`${sayegDisplay.className} text-5xl italic text-[#8d594d]`}>{service.number}</span>
                  <p className="pt-2 text-right text-[9px] font-bold uppercase leading-4 tracking-[0.22em] text-[#8d594d]">{service.label}</p>
                </div>
                <h3 className={`${sayegDisplay.className} mt-4 text-5xl leading-[0.9] tracking-tighte text-[#262323] lg:text-6xl`}>{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#262323]/64">{service.text}</p>
                <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#673d35] transition-colors hover:text-[#262323]">Explorar tratamento <ArrowUpRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-16 bg-[#202427] [clip-path:polygon(0_100%,100%_0,100%_100%)] md:h-24" />
    </section>
  );
}
