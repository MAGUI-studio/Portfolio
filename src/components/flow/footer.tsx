import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { flowImages, flowNav } from "./data";

export function FlowFooter() {
  return (
    <footer className="bg-[#061421] text-white">
      <div className="mx-auto grid max-w-[1540px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.48fr_0.24fr_0.28fr] lg:px-10 lg:py-18">
        <div>
          <Image src={flowImages.logoLight} alt="FLOW" width={180} height={52} className="h-10 w-auto" />
          <p className="mt-6 max-w-xl text-3xl font-bold leading-[1.05]">
            Aquarismo marinho premium para quem busca técnica, vida e oceano em equilíbrio.
          </p>
        </div>

        <nav className="grid gap-3 text-sm text-white/58">
          <p className="mb-2 text-xs font-extrabold uppercase text-white/52">Navegacao</p>
          {flowNav.map((item) => (
            <Link key={item.href} href={item.href} className="w-fit transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm leading-7 text-white/58">
          <p className="text-xs font-extrabold uppercase text-white/52">Loja técnica</p>
          <p className="mt-5">Aquários, corais, peixes ornamentais, equipamentos, insumos e orientação especializada para reefs.</p>
          <Link href="https://wa.me/5500000000000?text=Oi%2C%20FLOW.%20Quero%20orientacao%20para%20montar%20ou%20evoluir%20meu%20aquario%20marinho." target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex border border-white px-5 py-4 text-xs font-extrabold uppercase text-white transition hover:bg-white hover:text-[#061421]">
            Atendimento WhatsApp
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-xs text-white/46 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} FLOW Aquarismo Marinho Premium.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-white/70">
                <strong>MAGUI</strong>
                <span className="text-white/70">.</span>studio
              </Link>
            </span>
            <span aria-hidden="true" className="text-white/20">|</span>
            <ScrollTopLink className="text-white transition hover:text-white/70">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
