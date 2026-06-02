"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

import { links, nav } from "./data";
import { syncopate } from "./fonts";

export function VittaHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 md:px-10">
      <div className="mx-auto grid max-w-400 grid-cols-[auto_1fr_auto] items-center gap-4 text-white">
        <Link
          href="#inicio"
          aria-label="Ir para o início da VITTA"
          className={`${syncopate.className} text-2xl font-bold tracking-[0.22em] transition-colors duration-300 hover:text-[#D7A98B] md:text-3xl`}
        >
          VITTA
        </Link>

        <div className="hidden justify-center lg:flex">
          <nav className="flex items-center gap-8 border-b border-white/12 px-8 py-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/56 backdrop-blur-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors duration-300 hover:text-[#D7A98B]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden justify-end lg:flex">
          <Link
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-white/14 bg-white/[0.06] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#D7A98B] hover:bg-[#D7A98B] hover:text-[#161616]"
          >
            Avaliação
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="justify-self-end border border-white/14 bg-white/[0.06] px-4 py-3 text-white backdrop-blur-xl transition-colors hover:border-[#D7A98B] hover:bg-[#D7A98B] hover:text-[#161616] lg:hidden"
        >
          {isOpen ? <X size={24} /> : <List size={25} />}
        </button>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-[#161616]/72 p-3 backdrop-blur-md transition-all duration-500 ease-out lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`relative flex min-h-full flex-col overflow-hidden bg-[#161616] text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out ${
            isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-[0.98] opacity-0"
          }`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(215,169,139,0.18),transparent_32%),linear-gradient(145deg,rgba(39,54,45,0.78),rgba(10,10,10,0.96)_58%)]" />
            <div className="relative flex items-center justify-between p-6">
              <Link href="#inicio" onClick={closeMenu} className={`${syncopate.className} text-3xl font-bold tracking-[0.22em]`}>
                VITTA
              </Link>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
                className="border border-white/14 bg-white/[0.06] p-4 transition-colors hover:border-[#D7A98B] hover:bg-[#D7A98B] hover:text-[#161616]"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="relative grid flex-1 content-center px-6">
              {nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={{ transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms" }}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-white/10 py-7 transition-all duration-500 last:border-b ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className={`${syncopate.className} text-sm font-light text-[#D7A98B]`}>0{index + 1}</span>
                  <span className="text-4xl font-light tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#D7A98B]">
                    {item.label}
                  </span>
                  <ArrowUpRight size={23} className="text-white/42 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D7A98B]" />
                </Link>
              ))}
            </nav>

            <div
              className={`relative grid gap-5 p-6 transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100 delay-[360ms]" : "translate-y-4 opacity-0"
              }`}
            >
              <p className="max-w-md text-base leading-7 text-white/52">
                Saúde da pele, protocolos personalizados e produtos indicados para a rotina real.
              </p>
              <Link
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="group inline-flex items-center justify-center gap-3 bg-[#D7A98B] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#161616]"
              >
                Agendar avaliação
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
        </div>
      </div>
    </header>
  );
}
