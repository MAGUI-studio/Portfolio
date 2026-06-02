import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegImages, sayegNav, sayegWhatsapp } from "./data";

export function SayegFooter() {
  return (
    <footer className="bg-[#202427] text-white">
      <div className="grid gap-10 px-5 py-12 md:grid-cols-[0.58fr_0.42fr] md:px-10 md:py-16 lg:px-14">
        <div>
          <Link href="#inicio" aria-label="Beatriz Sayeg, voltar ao início">
            <Image src={sayegImages.logoWhite} alt="Beatriz Sayeg" width={230} height={85} className="h-auto w-44" />
          </Link>
          <p className="mt-6 text-sm leading-7 text-white/52">Visagismo avançado e micropigmentação personalizada para uma beleza sutil, harmônica e atemporal.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e4c9b9]">Navegação</p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {sayegNav.map((item) => <Link key={item.href} href={item.href} className="w-fit transition-colors hover:text-white">{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e4c9b9]">Contato</p>
            <div className="mt-5 grid gap-3 text-sm text-white/54">
              <p>São Paulo · SP</p>
              <p>Atendimento com hora marcada</p>
              <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 transition-colors hover:text-white">WhatsApp do estúdio <ArrowUpRight size={13} /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-xs text-white/42 md:px-10 lg:px-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Beatriz Sayeg. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Oferecido por <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition-colors hover:text-[#e4c9b9]"><strong>MAGUI</strong><span className="text-[#0094C8]">.</span>studio</Link></span>
            <span aria-hidden="true" className="text-white/20">|</span>
            <Link href="#inicio" className="text-white transition-colors hover:text-[#e4c9b9]">Voltar ao topo ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
