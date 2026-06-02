"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { sayegImages, sayegNav, sayegWhatsapp } from "./data";
import { sayegDisplay } from "./fonts";

export function SayegHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 px-5 py-5 md:px-10 md:py-7 lg:px-14">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center border-y border-[#262323]/12 py-4">
          <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-[9px] font-bold uppercase tracking-[0.22em] text-[#262323]/64 lg:flex">
            {sayegNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[#8d594d]">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="#inicio" aria-label="Beatriz Sayeg, voltar ao início" className="justify-self-center transition-opacity hover:opacity-65">
            <Image src={sayegImages.logoBlack} alt="Beatriz Sayeg" width={190} height={70} priority className="h-auto w-36 md:w-44" />
          </Link>

          <div className="flex items-center justify-end gap-4">
            <p className="hidden text-right text-[9px] font-bold uppercase leading-4 tracking-[0.22em] text-[#262323]/48 sm:block">
              Atendimento particular<br />São Paulo · SP
            </p>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="grid size-11 place-items-center border border-[#262323]/16 text-[#262323] transition-colors hover:bg-[#262323] hover:text-white lg:hidden"
            >
              {menuOpen ? <X size={21} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[90] grid bg-[#f0f0f0] px-5 py-5 transition-all duration-500 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className={`flex flex-col transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}>
          <div className="flex items-center justify-between border-b border-[#262323]/12 pb-5">
            <Image src={sayegImages.logoBlack} alt="Beatriz Sayeg" width={190} height={70} className="h-auto w-40" />
            <button type="button" aria-label="Fechar menu" onClick={closeMenu} className="grid size-11 place-items-center border border-[#35231f]/16 text-[#35231f]">
              <X size={22} />
            </button>
          </div>

          <nav className="grid flex-1 content-center">
            {sayegNav.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="group flex items-center justify-between border-b border-[#35231f]/12 py-6">
              <span className={`${sayegDisplay.className} text-5xl text-[#262323]`}>{item.label}</span>
                <span className="text-xs tracking-[0.2em] text-[#8d594d]">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-[#35231f]/12 pt-6">
            <p className="mb-5 text-sm leading-7 text-[#262323]/65">
              Visagismo avançado e micropigmentação personalizada para resultados sutis e atemporais.
            </p>
            <Link href={sayegWhatsapp} target="_blank" rel="noreferrer" onClick={closeMenu} className="flex items-center justify-center gap-3 bg-[#673d35] px-5 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Agendar avaliação
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
