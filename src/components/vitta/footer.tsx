import Link from "next/link";
import { ArrowUpRight, Clock, EnvelopeSimple, MapPin } from "@phosphor-icons/react/ssr";

import { brand, links, nav } from "./data";
import { syncopate } from "./fonts";

const contactLinks = [
  {
    label: brand.email,
    href: `mailto:${brand.email}`,
    icon: EnvelopeSimple,
  },
  {
    label: brand.address,
    href: links.location,
    icon: MapPin,
  },
  {
    label: "Segunda a sexta, 9h às 19h",
    href: "#agenda",
    icon: Clock,
  },
];

export function VittaFooter() {
  return (
    <footer id="agenda" className="relative -mt-px overflow-hidden bg-[#27362D] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative grid gap-12 px-6 py-14 md:px-12 lg:grid-cols-[0.34fr_0.66fr] lg:py-16">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Link
              href="#inicio"
              aria-label="Ir para o início da VITTA"
              className={`${syncopate.className} inline-flex text-3xl font-bold tracking-[0.22em] text-white transition-colors duration-300 hover:text-[#D7A98B]`}
            >
              VITTA
            </Link>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/48">
              Clínica de estética focada em saúde da pele, protocolos personalizados e rotina orientada.
            </p>
          </div>

          <Link
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-[#D7A98B] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#0A0A0A] transition-colors duration-300 hover:bg-white"
          >
            Agendar avaliação
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-10 border-l-0 border-white/10 md:grid-cols-3 lg:border-l lg:pl-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#D7A98B]">navegação</p>
            <div className="mt-7 grid gap-3 text-sm text-white/52">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="w-fit transition-colors duration-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#D7A98B]">protocolos</p>
            <div className="mt-7 grid gap-3 text-sm text-white/52">
              {["Barreira cutânea", "Textura e poros", "Manchas", "Firmeza", "Natural lift"].map((item) => (
                <Link key={item} href="#protocolos" className="w-fit transition-colors duration-300 hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#D7A98B]">contato</p>
            <div className="mt-7 grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 text-sm text-white/52 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} weight="duotone" className="text-white/28 transition duration-300 group-hover:text-[#D7A98B]" />
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-35 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-xs text-white/44 md:flex-row md:items-center md:justify-between md:px-12">
        <p>© {new Date().getFullYear()} VITTA. Estética clínica e saúde da pele.</p>

        <div className="flex flex-wrap items-center gap-3">
          <span>
            Oferecido por{" "}
            <Link
              href="https://magui.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition duration-300 hover:text-[#D7A98B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#27362D]"
            >
              <strong className="font-black">MAGUI</strong>
              <span className="text-[#D7A98B]">.</span>
              <span>studio</span>
            </Link>
          </span>

          <span aria-hidden="true" className="text-white/20">
            |
          </span>

          <Link
            href="#inicio"
            className="inline-flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#D7A98B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#27362D]"
          >
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
