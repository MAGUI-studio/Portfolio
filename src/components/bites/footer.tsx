import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  InstagramLogo,
  MapPin,
  ShoppingBagOpen,
} from "@phosphor-icons/react/ssr";
import { bitesImages, bitesNav, bitesWhatsapp } from "./data";
import { bitesHeading, bitesText } from "./fonts";

const productLinks = [
  ["#linha", "Mini coxinha"],
  ["#linha", "Bolinha de queijo"],
  [bitesWhatsapp, "Cento de salgados"],
  [bitesWhatsapp, "Combos para dividir"],
] as const;

const serviceItems = [
  {
    icon: ShoppingBagOpen,
    title: "Pedidos no balcão e delivery",
    text: "Salgados quentes para rotina, reunião, evento ou vontade de agora.",
  },
  {
    icon: Clock,
    title: "Produção padronizada",
    text: "Textura, recheio e crocância pensados para repetir a experiência.",
  },
  {
    icon: MapPin,
    title: "Marca pronta para escala",
    text: "Fachada, embalagem e atendimento com presença de fast casual.",
  },
] as const;

export function BitesFooter() {
  return (
    <footer className={`${bitesText.className} bg-[#030401] text-[#F0F0F0]`}>
      <div className="px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <Link href="#inicio" aria-label="Voltar para o início da Bites" className="inline-flex">
              <Image src={bitesImages.logo} alt="Bites" width={180} height={64} className="h-20 w-auto" />
            </Link>
            <h2
              className={`${bitesHeading.className} mt-8 max-w-2xl text-6xl font-extrabold leading-[0.86] tracking-[-0.05em]`}
            >
              Crocância, sabor e desejo em cada mordida.
            </h2>
          </div>

          <div className="grid gap-6 lg:justify-items-end lg:text-right">
            <p className="max-w-xl text-lg leading-8 text-white/62">
              Bites transforma salgados clássicos em uma experiência moderna,
              conveniente e memorável, sem perder a vontade de comfort food.
            </p>
            <Link
              href={bitesWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center justify-center gap-3 text-white bg-[#FB5F00] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] transition"
            >
              Montar pedido
              <ArrowRight
                size={17}
                weight="bold"
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-2 xl:grid-cols-[0.95fr_0.75fr_0.75fr_1.05fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FB5F00]">
              experiência
            </p>
            <div className="mt-5 grid gap-4">
              {serviceItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="grid size-10 place-items-center rounded-full bg-white/[0.06] text-[#FB5F00]">
                    <Icon size={18} weight="bold" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/48">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FB5F00]">
              navegar
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {bitesNav.map(([label, href]) => (
                <Link key={href} href={href} className="w-fit transition hover:text-[#FB5F00]">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FB5F00]">
              cardápio
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {productLinks.map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-fit transition hover:text-[#FB5F00]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#FB5F00]">
              atendimento
            </p>
            <div className="mt-5 grid gap-4 text-sm text-white/54">
              <p className="leading-6">
                Pedidos para consumo imediato, combos para compartilhar e
                produção para pequenos eventos.
              </p>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2 transition hover:text-[#FB5F00]"
              >
                <InstagramLogo size={17} weight="bold" />
                Instagram
                <ArrowUpRight
                  size={13}
                  weight="bold"
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/44 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bites. Mini salgados, grandes momentos.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-[#FB5F00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030401]"
              >
                <strong className="font-black">MAGUI</strong>
                <span className="text-[#0094C8]">.</span>
                <span>studio</span>
              </Link>
            </span>
            <span aria-hidden="true" className="text-white/20">
              |
            </span>
            <Link
              href="#inicio"
              className="inline-flex cursor-pointer items-center gap-1 text-white transition hover:text-[#FB5F00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030401]"
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
