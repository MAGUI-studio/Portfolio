import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";

import { floraImages, floraWhatsappHref } from "./data";
import { FloraImageReveal, FloraReveal } from "./motion";

export function FloraLocationSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-28 lg:px-10">
      <Image
        src={floraImages.attendant}
        alt="Atendimento da Flora no garden center"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,29,20,0.9)_0%,rgba(25,29,20,0.62)_42%,rgba(25,29,20,0.34)_70%,rgba(25,29,20,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,240,232,0.16),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.36))]" />

      <div className="relative grid gap-10 xl:grid-cols-[0.58fr_0.42fr] xl:items-end">
        <FloraReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/68">
            Visita
          </p>
          <h2 className="mt-7 text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl xl:w-[86%]">
            Agende sua visita e descubra a Flora de perto.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/78 md:text-lg xl:w-[72%]">
            O mapa já reúne as informações necessárias para a visita. Se quiser,
            a equipe da Flora também pode orientar o melhor horário e a
            experiência mais adequada para o seu ambiente.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={floraWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#F4F0E8] px-6 py-4 text-sm font-semibold text-[#24301C] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Solicitar atendimento
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="#inicio"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/16"
            >
              Voltar ao início
            </Link>
          </div>
        </FloraReveal>

        <FloraImageReveal className="justify-self-end">
          <div className="w-full overflow-hidden rounded-[2rem] bg-[#FAFAFA] text-[#24301C] shadow-[0_24px_80px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 xl:w-[28rem]">
            <Image
              src={floraImages.map}
              alt="Mapa com as informações de visita da Flora"
              width={1200}
              height={860}
              sizes="(min-width: 1280px) 26vw, 100vw"
              className="w-full object-cover"
            />
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 text-[#24301C]">
                <MapPin size={18} weight="fill" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Localização
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#24301C]/68">
                Um ponto de encontro pensado para transformar a escolha das
                plantas em uma experiência mais calma, inspiradora e sensorial.
              </p>
            </div>
          </div>
        </FloraImageReveal>
      </div>
    </section>
  );
}
