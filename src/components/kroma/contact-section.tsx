import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { images, whatsappHref } from "./data";
import { alexandria } from "./fonts";

export function KromaContactSection() {
  return (
    <section
      id="contato"
      className="relative min-h-[820px] overflow-hidden bg-[#1E1E1E] text-white"
    >
      <Image
        src={images.panels}
        alt="Paineis solares sob luz do sol"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.18)_0%,rgba(30,30,30,0.54)_48%,#1E1E1E_100%)]" />

      <div className="relative z-10 flex min-h-[820px] flex-col justify-end p-5 pb-24 md:p-8 md:pb-28 lg:p-10 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FFBC4F]">
              vamos dimensionar
            </p>
            <h2
              className={`mt-7 text-6xl font-semibold leading-[0.92] md:text-8xl lg:text-[112px] ${alexandria.className} uppercase`}
            >
              Coloque a Kroma para mover o seu futuro.
            </h2>
          </div>

          <div
            className="border border-white/12 bg-[#1E1E1E]/42 p-7 text-white backdrop-blur-xl md:p-9"
          >
            <p className="mt-10 text-xl leading-9 text-white/78">
              Envie sua conta de energia e o tipo de imóvel. A Kroma retorna com
              uma leitura inicial de potência, economia estimada e o caminho
              mais inteligente para gerar sua própria energia.
            </p>
            <div className="mt-9 grid gap-3">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FFBC4F] p-5 text-sm font-bold text-[#2A2A2A] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Chamar no WhatsApp
                <ArrowRight size={17} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
