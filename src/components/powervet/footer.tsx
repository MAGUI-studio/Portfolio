import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { ArrowUpRight, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";

import { powervetImages, powervetNav, powervetWhatsapp } from "./data";
import { ActionLink, Eyebrow } from "./ui";

export function PowervetFooter() {
  return (
    <footer className="bg-[#021C00] text-white">
      <section className="relative overflow-hidden px-5 py-22 md:px-10 lg:px-14">
        <Image src={powervetImages.cover} alt="" fill sizes="100vw" className="object-cover opacity-18" />
        <div className="absolute inset-0 bg-[#021C00]/76" />
        <div className="relative grid w-full gap-9 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div><Eyebrow light>Atendimento especializado</Eyebrow><h2 className="mt-5 text-6xl font-semibold tracking-[-0.08em] md:text-8xl lg:text-[108px]">Seu animal precisa de atendimento?</h2><p className="mt-5 text-base leading-7 text-white/62 md:w-[48%]">Não espere o quadro piorar. Converse com a equipe e agende uma avaliação.</p></div>
          <div className="lg:justify-self-end"><ActionLink light>Falar com a POWERVET</ActionLink></div>
        </div>
      </section>
      <div className="border-t border-white/14 px-5 py-12 md:px-10 lg:px-14">
        <div className="grid w-full gap-10 lg:grid-cols-[0.42fr_0.2fr_0.38fr]">
          <div><Image src={powervetImages.logoLight} alt="POWERVET" width={210} height={29} className="h-auto w-48" /><p className="mt-5 text-sm leading-7 text-white/52 md:w-[70%]">Medicina veterinária especializada em animais silvestres e exóticos.</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#DDD6C8]">Navegação</p><div className="mt-5 grid gap-3 text-sm text-white/58">{powervetNav.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-white">{item.label}</Link>)}</div></div>
          <div className="grid gap-4 text-sm text-white/62 md:grid-cols-2">
            <div className="flex gap-3"><MapPin size={20} weight="thin" className="text-[#DDD6C8]" /><span>Atendimento em clínica especializada<br />Consulte nossa localização</span></div>
            <div className="flex gap-3"><Clock size={20} weight="thin" className="text-[#DDD6C8]" /><span>Segunda a sexta, 8h às 19h<br />Plantão sob consulta</span></div>
            <Link href={powervetWhatsapp} target="_blank" rel="noreferrer" className="group mt-2 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[#DDD6C8]">WhatsApp para atendimento <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/14 px-5 py-5 text-xs text-white/46 md:px-10 lg:px-14">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} POWERVET.</p><div className="flex flex-wrap items-center gap-3"><span>Oferecido por <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[#DDD6C8]"><strong>MAGUI</strong><span className="text-[#DDD6C8]">.</span>studio</Link></span><span className="text-white/20">|</span><ScrollTopLink className="text-white transition-colors hover:text-[#DDD6C8]">Voltar ao topo ↑</ScrollTopLink></div></div>
      </div>
    </footer>
  );
}
