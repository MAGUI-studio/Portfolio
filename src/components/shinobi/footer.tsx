import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { shinobiBrand, shinobiWhatsappHref } from "./data";

const shinobiFooterNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sabores", href: "#sabores" },
  { label: "Pedido", href: "#pedido" },
  { label: "Manifesto", href: "#manifesto" },
];

export function ShinobiFooter() {
  return (
    <footer className="bg-[#050302] px-5 py-16 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1540px] border-t border-white/12 pt-12">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_0.2fr_0.22fr]">
          <div>
            <Link
              href="#inicio"
              aria-label="Voltar para o inicio do SHINOBI"
              className="inline-flex items-center gap-4 transition hover:opacity-80"
            >
              <Image
                src={shinobiBrand.logo}
                alt="SHINOBI"
                width={220}
                height={64}
                className="h-auto w-80 object-contain object-left"
              />
            </Link>

            <h2 className="mt-10 max-w-3xl text-5xl font-black uppercase leading-[0.9] [font-family:var(--font-shinobi-display)]">
              Energia não é barulho.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/56">
              SHINOBI é presença, ritmo e foco. Uma marca feita para quem entra
              no modo silencioso antes de acelerar.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#5D9601] [font-family:var(--font-shinobi-display)]">
              navegar
            </p>
            <nav className="mt-6 grid gap-4 text-sm text-white/52">
              {shinobiFooterNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit border-b border-transparent pb-1 transition hover:border-[#5D9601] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#5D9601] [font-family:var(--font-shinobi-display)]">
              contato
            </p>
            <div className="mt-6 grid gap-4 text-sm text-white/52">
              <Link
                href={shinobiWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3 border border-[#5D9601] bg-[#5D9601] px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition [font-family:var(--font-shinobi-display)] hover:bg-transparent hover:text-[#5D9601]"
              >
                Atendimento
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <p>Distribuicao, eventos e varejo.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/12 pt-6 text-xs text-white/44 md:flex-row md:items-center md:justify-between">
          <p>SHINOBI Energia. Identidade noturna e foco absoluto.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition duration-300 hover:text-[#5D9601] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D9601] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050302]"
              >
                <strong className="font-black">MAGUI</strong>
                <span className="text-[#5D9601]">.</span>
                <span>studio</span>
              </Link>
            </span>

            <span aria-hidden="true" className="text-white/20">
              |
            </span>

            <Link
              href="#inicio"
              className="inline-flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#5D9601] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D9601] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050302]"
            >
              Voltar ao topo
              <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
