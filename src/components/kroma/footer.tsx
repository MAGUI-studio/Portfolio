import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/ssr";
import { nav } from "./data";
import { BrandLockup } from "./brand";

const contactLinks = [
  {
    label: "contato@kromaenergia.com",
    href: "mailto:contato@kromaenergia.com",
    icon: EnvelopeSimple,
  },
  {
    label: "São Paulo, SP",
    href: "https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C%20SP",
    icon: MapPin,
  },
  {
    label: "Segunda a sexta, 9h às 18h",
    href: "#contato",
    icon: Clock,
  },
];

const serviceLinks = [
  ["#solucoes", "Energia residencial"],
  ["#solucoes", "Energia comercial"],
  ["#solucoes", "Projetos industriais"],
  ["#monitoramento", "Monitoramento solar"],
];

export function KromaFooter() {
  return (
    <footer
      className="-mt-px bg-[#1E1E1E] text-white"
    >
      <div className="grid gap-10 border-t border-white/10 p-7 md:grid-cols-[0.38fr_0.62fr] md:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-10">
          <BrandLockup light />
          <p className="max-w-md text-sm leading-7 text-white/54">
            Sistemas fotovoltaicos para residências, empresas e operações
            industriais que tratam energia como infraestrutura de crescimento.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFBC4F]">
              navegação
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/58">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="kroma-link-underline w-fit transition duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFBC4F]">
              soluções
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/58">
              {serviceLinks.map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="kroma-link-underline w-fit transition duration-300 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFBC4F]">
              contato
            </p>
            <div className="mt-6 grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 text-sm text-white/58 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        size={18}
                        weight="duotone"
                        className="text-white/36 transition duration-300 group-hover:text-[#FFBC4F]"
                      />
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-40 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-white/10 p-5 text-xs text-white/48 md:flex-row md:items-center md:justify-between md:p-7 lg:p-8">
        <p>
          © {new Date().getFullYear()} Kroma Energia Solar. Todos os direitos
          reservados.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span>
            Oferecido por{" "}
            <Link
              href="https://magui.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition duration-300 hover:text-[#FFBC4F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1E1E]"
            >
              <strong className="font-black">MAGUI</strong>
              <span className="text-[#0094C8]">.</span>
              <span>studio</span>
            </Link>
          </span>

          <span aria-hidden="true" className="text-white/25">
            |
          </span>

          <Link
            href="#inicio"
            className="kroma-link-underline inline-flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#FFBC4F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1E1E]"
          >
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
