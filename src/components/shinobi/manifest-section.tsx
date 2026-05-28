"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";

export function ShinobiManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden text-white py-24 lg:py-32"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .btn-manifesto-fill::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: #ffffff;
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(0 100% 0 0);
          z-index: 0;
        }
        .btn-manifesto-fill:hover::before {
          clip-path: inset(0 0 0 0);
        }
      `,
        }}
      />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shinobi/samurai.png"
          alt="Shinobi Ritual Atmosphere"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-5 md:px-8 lg:px-10 flex flex-col gap-28">
        <div className="lg:sticky lg:top-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 [font-family:var(--font-shinobi-display)]">
            nosso manifesto
          </p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight leading-[0.9] [font-family:var(--font-shinobi-display)] sm:text-5xl md:text-6xl">
            Energia não é barulho. <br />
            <span className="text-neutral-500">Energia é silêncio.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-300 md:text-base">
            Diferente dos energéticos comuns que causam euforia desordenada e
            pressa, SHINOBI foi desenvolvido para o estado de presença. É a
            mente fria, o reflexo rápido e a energia constante para quem opera
            em alto nível.
          </p>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-2xl font-extrabold uppercase tracking-tight [font-family:var(--font-shinobi-display)] sm:text-3xl">
              Entre para o clã.
            </h4>
            <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
              Descubra onde garantir seu suprimento exclusivo através de
              distribuidores oficiais ou atendimento direto.
            </p>
          </div>

          <a
            href="https://wa.me/5500000000000?text=Oi%2C%20SHINOBI.%20Quero%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-manifesto-fill group relative inline-flex w-full md:w-auto items-center justify-center border border-white bg-transparent px-10 py-5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 [font-family:var(--font-shinobi-display)] hover:text-black shrink-0"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Encontrar Distribuidor
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
