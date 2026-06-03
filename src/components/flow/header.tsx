"use client";

import { ArrowRight, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { flowImages, flowNav } from "./data";

export function FlowHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 text-[#061421] md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1540px]">
        <div className="flex items-center justify-between">
          <Link
            href="#inicio"
            onClick={closeMenu}
            aria-label="FLOW, voltar ao inicio"
            className="inline-flex min-h-12 items-center px-3"
          >
            <Image src={flowImages.logoDark} alt="FLOW" width={154} height={44} priority className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 text-[11px] font-extrabold uppercase tracking-[0] text-[#061421]/58 lg:flex">
            {flowNav.map((item) => (
              <Link key={item.href} href={item.href} className="px-4 py-4 transition hover:bg-[#061421] hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#metodo"
            className="hidden min-h-12 items-center bg-[#061421] px-5 text-[11px] font-extrabold uppercase tracking-[0] text-white transition hover:bg-[#061421]/88 lg:inline-flex"
          >
            Consultoria
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-controls="flow-mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex min-h-12 items-center gap-3 border border-[#061421]/14 px-4 text-xs font-extrabold uppercase text-[#061421] transition hover:bg-[#061421] hover:text-white lg:hidden"
          >
            Menu
            {isOpen ? <X size={21} /> : <List size={22} />}
          </button>
        </div>

        {isOpen ? (
          <div id="flow-mobile-menu" className="mt-3 border border-[#061421]/12 bg-white shadow-[0_24px_80px_rgba(6,20,33,0.16)] lg:hidden">
            <div className="border-b border-[#061421]/10 px-5 py-5">
              <p className="text-[11px] font-extrabold uppercase text-[#061421]/48">Navegacao FLOW</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#061421]/64">
                Aquários marinhos premium, vivos selecionados e orientação técnica.
              </p>
            </div>

            <nav className="grid">
              {flowNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-[#061421]/10 px-5 py-5 text-lg font-bold text-[#061421] transition hover:bg-[#061421] hover:text-white"
                >
                  <span className="flex items-center gap-4">
                    <span className="w-7 text-xs font-extrabold opacity-40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                  <ArrowRight size={18} weight="bold" className="transition group-hover:translate-x-1" />
                </Link>
              ))}
            </nav>

            <div className="grid gap-2 p-3 sm:grid-cols-2">
              <Link
                onClick={closeMenu}
                href="#metodo"
                className="flex items-center justify-center bg-[#061421] px-5 py-5 text-xs font-extrabold uppercase text-white"
              >
                Consultoria
              </Link>
              <Link
                href="#vivos"
                onClick={closeMenu}
                className="flex items-center justify-center border border-[#061421]/14 px-5 py-5 text-xs font-extrabold uppercase text-[#061421]"
              >
                Ver espécies
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
