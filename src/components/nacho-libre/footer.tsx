import { ArrowRight, InstagramLogo, MapPin } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import {
  nachoLibreAddress,
  nachoLibreImages,
  nachoLibreNav,
  nachoLibreWhatsapp,
} from "./data";

const footerMenu = [
  ["#menu", "Tacos"],
  ["#menu", "Burritos"],
  ["#menu", "Nachos"],
  ["#menu", "Drinks"],
  ["#rodizio", "Experiencia"],
  ["#pedido", "Pedido"],
];

export function NachoLibreFooter() {
  return (
    <footer className="overflow-hidden bg-[#111111] text-[#F0F0F0]">
      <div className="mx-auto max-w-[1540px] px-5 py-12 md:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 border-y border-[#F0F0F0]/12 py-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
          <div>
            <Link
              href="#inicio"
              aria-label="Voltar para o inicio da Nacho Libre"
              className="inline-flex transition hover:opacity-80"
            >
              <Image
                src={nachoLibreImages.logoWhite}
                alt="Nacho Libre"
                width={260}
                height={102}
                className="h-auto w-40 object-contain object-left md:w-52"
              />
            </Link>
            <p className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.82] tracking-[0] md:text-7xl lg:text-8xl">
              comida quente, mesa cheia, noite livre.
            </p>
          </div>

          <div className="grid gap-5 lg:justify-items-end lg:text-right">
            <p className="max-w-xl text-lg font-semibold leading-8 text-[#F0F0F0]/66">
              Tacos, burritos, nachos, drinks e sobremesa em uma casa feita para
              chegar com fome e ficar sem pressa.
            </p>
            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center justify-center gap-4 bg-[#E86A17] px-7 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#111111] transition-colors hover:bg-[#F0F0F0]"
            >
              reservar mesa
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-3 lg:grid-cols-[0.9fr_0.7fr_1.1fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E86A17]">
              navegar
            </p>
            <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-black uppercase tracking-[0.14em] text-[#F0F0F0]/60">
              {nachoLibreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#E86A17]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E86A17]">
              menu
            </p>
            <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-black uppercase tracking-[0.14em] text-[#F0F0F0]/60">
              {footerMenu.map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="transition hover:text-[#E86A17]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid gap-5 md:col-span-3 lg:col-span-1 lg:justify-items-end lg:text-right">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E86A17]">
              contato
            </p>
            <p className="flex max-w-xl gap-3 text-base font-semibold leading-7 text-[#F0F0F0]/66 lg:justify-end">
              <MapPin size={20} weight="duotone" className="mt-1 shrink-0 text-[#E86A17]" />
              {nachoLibreAddress}
            </p>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#F0F0F0]/70 transition hover:text-[#E86A17]"
            >
              <InstagramLogo size={18} weight="bold" />
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#E86A17] px-5 py-5 text-[#111111] md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col gap-4 text-xs font-black uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nacho Libre</p>

          <div className="flex flex-wrap items-center gap-4">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#F0F0F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E86A17]"
              >
                <strong className="font-black">MAGUI</strong>
                <span className="text-[#0094C8]">.</span>
                <span>studio</span>
              </Link>
            </span>
            <span aria-hidden="true" className="text-[#111111]/35">
              |
            </span>
            <ScrollTopLink
              className="inline-flex items-center gap-2 transition hover:text-[#F0F0F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E86A17]"
            >
              Voltar ao topo
              <span aria-hidden="true">↑</span>
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
