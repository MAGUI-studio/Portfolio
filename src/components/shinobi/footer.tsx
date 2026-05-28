"use client";

import Image from "next/image";
import { shinobiBrand, shinobiNav } from "./data";
import Link from "next/link";

export function ShinobiFooter() {
  return (
    <footer className="bg-black px-5 pb-12 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1540px] border-t border-neutral-900 pt-16">
        
        {/* Grid Principal */}
        <div className="grid gap-12 lg:grid-cols-[0.52fr_0.22fr_0.26fr]">
          
          {/* Coluna da Marca */}
          <div>
            <div className="relative h-16 w-64 max-w-full opacity-90">
              <Image 
                src={shinobiBrand.logo} 
                alt="SHINOBI" 
                fill 
                sizes="256px" 
                className="object-contain object-left" 
              />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
              Energético de identidade noturna, sabores frutados e impacto visual 
              desenhado para freezer, evento e cultura digital.
            </p>
          </div>

          {/* Coluna Navegação */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
              navegação
            </p>
            <div className="mt-6 grid gap-3 text-xs font-bold uppercase tracking-wider text-neutral-400">
              {shinobiNav.map((item) => (
                <Link
                  key={item.href} 
                  href={item.href} 
                  className="w-fit transition-transform duration-300 hover:text-white hover:translate-x-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna Comercial */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
              comercial
            </p>
            <div className="mt-6 grid gap-3 text-xs text-neutral-400">
              <Link 
                href="mailto:comercial@shinobi.example" 
                className="w-fit font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:text-neutral-400"
              >
                comercial@shinobi.example
              </Link>
              <div className="mt-2 space-y-1 text-neutral-500">
                <p>Distribuição e ativações</p>
                <p>Freezer, evento e varejo</p>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior / Créditos */}
        <div className="mt-16 flex flex-col gap-6 border-t border-neutral-900 pt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>SHINOBI Energia. Identidade noturna e sabores frutados.</p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-500">
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-white transition-colors duration-300 hover:text-neutral-400 [font-family:var(--font-shinobi-display)]"
              >
                MAGUI.studio
              </Link>
            </span>

            <span aria-hidden="true" className="text-neutral-800">
              /
            </span>

            <Link
              href="#inicio"
              className="inline-flex cursor-pointer items-center gap-1 text-white transition-colors duration-300 hover:text-neutral-400"
            >
              Voltar ao topo ↑
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}