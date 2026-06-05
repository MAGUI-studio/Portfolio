"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

import {
  dragonTattooBudgetWhatsapp,
  dragonTattooImages,
  dragonTattooNav,
  dragonTattooScheduleWhatsapp,
} from "./data";

export function DragonTattooHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 px-4 py-4 text-[#F4F0E8] md:px-8 md:py-6 lg:px-12">
        <div className="mx-auto grid max-w-[1720px] grid-cols-[auto_1fr_auto] items-center">
          <Link
            href="#inicio"
            aria-label="Dragon Tattoo, voltar ao inicio"
            className="flex h-[68px] items-center px-4 transition-opacity hover:opacity-75 md:h-[78px] md:px-6"
            onClick={closeMenu}
          >
            <Image
              src={dragonTattooImages.logoWhite}
              alt="Dragon Tattoo"
              width={744}
              height={405}
              loading="eager"
              className="h-auto w-32 md:w-40"
            />
          </Link>

          <nav
            aria-label="Navegacao principal Dragon Tattoo"
            className="hidden h-full items-center justify-center gap-1 lg:flex"
          >
            {dragonTattooNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-full items-center px-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#F4F0E8]/62 transition hover:text-[#F4F0E8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex h-full items-center justify-end">
            <Link
              href={dragonTattooBudgetWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden h-[68px] items-center gap-3 px-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#F4F0E8]/78 transition hover:text-[#F4F0E8] md:h-[78px] xl:inline-flex"
            >
              Orcamento
              <ArrowUpRight size={14} weight="bold" />
            </Link>

            <Link
              href={dragonTattooScheduleWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden h-[68px] items-center gap-3 px-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#F4F0E8] transition hover:text-white md:h-[78px] lg:inline-flex"
            >
              Agendar
              <ArrowUpRight size={14} weight="bold" />
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="dragon-tattoo-mobile-menu"
              onClick={() => setIsOpen((current) => !current)}
              className="grid h-[68px] w-[68px] place-items-center text-[#F4F0E8] transition hover:text-white md:h-[78px] md:w-[78px] lg:hidden"
            >
              {isOpen ? <X size={25} /> : <List size={26} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="dragon-tattoo-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu Dragon Tattoo"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[90] overflow-hidden bg-[#070604] text-[#F4F0E8] transition duration-500 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="absolute inset-0 opacity-35">
          <Image
            src={dragonTattooImages.serviceArea}
            alt=""
            fill
            sizes="(min-width: 1024px) 0vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#070604]/88" />

        <div className="relative flex h-full flex-col px-5 py-5">
          <div className="flex items-center justify-between pb-5">
            <Image
              src={dragonTattooImages.logoWhite}
              alt="Dragon Tattoo"
              width={744}
              height={405}
              className="h-auto w-36"
            />

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="grid size-12 place-items-center transition hover:bg-[#F4F0E8] hover:text-[#080706]"
            >
              <X size={24} />
            </button>
          </div>

          <nav
            aria-label="Menu mobile Dragon Tattoo"
            className="grid flex-1 content-center py-10"
          >
            {dragonTattooNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between py-6 transition hover:text-[#F4F0E8]/72"
              >
                <span className="text-4xl font-black uppercase leading-none sm:text-5xl">
                  {item.label}
                </span>
                <span className="text-[10px] font-black tracking-[0.22em] text-[#D6A858]">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="grid gap-3 pt-5 sm:grid-cols-2">
            <Link
              href={dragonTattooBudgetWhatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#080706] transition hover:bg-white"
            >
              Pedir orcamento
              <ArrowUpRight size={15} weight="bold" />
            </Link>

            <Link
              href={dragonTattooScheduleWhatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-3 px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] transition hover:text-white"
            >
              Marcar horario
              <ArrowUpRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
