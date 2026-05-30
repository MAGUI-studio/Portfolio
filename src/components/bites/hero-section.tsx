import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { bitesImages, bitesWhatsapp } from "./data";
import { bitesHeading } from "./fonts";
import { BitesButton } from "./ui";

export function BitesHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#030401] px-4 pb-5 pt-24 text-[#F0F0F0] md:px-8"
    >
      <div className="relative min-h-[780px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#030401]">
        <Image
          src={bitesImages.hero}
          alt="Equipe Bites entregando caixa de mini salgados"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />

        <div className="relative z-10 flex min-h-[780px] flex-col justify-end p-5 pt-28 md:p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#FB5F00] px-4 py-2 text-xs font-black uppercase text-[#030401]">
              Comfort food premium
            </span>
            <span className="rounded-full border border-white/16 bg-[#030401]/56 px-4 py-2 text-xs font-bold uppercase text-white/74 backdrop-blur-md">
              Feito para dar vontade
            </span>
          </div>

          <div className="mt-16 max-w-7xl">
            <h1
              className={`${bitesHeading.className} mt-6 text-6xl font-extrabold leading-[0.86] text-[#F0F0F0] md:text-8xl lg:text-[10rem]`}
            >
              O salgado que rouba a cena.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Coxinha, bolinha de queijo e outros clássicos preparados com sabor,
              crocância e apresentação que ficam na memória.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BitesButton href="#linha">Ver cardápio</BitesButton>
              <Link
                href={bitesWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-extrabold uppercase text-white/82 transition hover:text-[#FB5F00]"
              >
                Pedir agora
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
