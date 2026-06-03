"use client";

import { ArrowRight, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  nachoLibreImages,
  nachoLibreNav,
  nachoLibreWhatsapp,
} from "./data";

export function NachoLibreHeader() {
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

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 bg-transparent text-[#111111]">
        <div className="mx-auto max-w-400 grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8 lg:grid-cols-[0.32fr_0.42fr_0.26fr] lg:px-10 lg:py-5">
          <Link
            href="#inicio"
            aria-label="Ir para o inicio da Nacho Libre"
            className="inline-flex items-center transition hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src={nachoLibreImages.logoWhite}
              alt="Nacho Libre"
              width={176}
              height={68}
              priority
              className="h-12 w-40 object-contain object-left"
            />
          </Link>

          <nav
            className="hidden justify-self-center lg:flex"
            aria-label="Menu principal Nacho Libre"
          >
            {nachoLibreNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white/82 transition hover:bg-white hover:text-[#111111]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end lg:flex">
            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-white px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#E86A17] hover:text-white"
            >
              Reservar
              <ArrowRight
                size={15}
                weight="bold"
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="nacho-libre-mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
            className={`grid size-12 place-items-center justify-self-end border transition lg:hidden ${
              isOpen
                ? "border-[#E86A17] bg-[#E86A17] text-white"
                : "border-white/28 bg-white text-[#111111] hover:bg-[#111111] hover:text-white"
            }`}
          >
            {isOpen ? <X size={23} /> : <List size={24} />}
          </button>
        </div>
      </header>

      <div
        id="nacho-libre-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile Nacho Libre"
        aria-hidden={!isOpen}
        onClick={closeMenu}
        className={`fixed inset-0 z-50 bg-[#111111]/88 px-4 py-4 text-white backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`ml-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-md flex-col overflow-hidden border border-white/12 bg-[#16120f] shadow-2xl shadow-black/50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-6"
          }`}
        >
          <div className="relative border-b border-white/12 bg-[#E86A17] px-5 py-5 text-[#111111]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(255,255,255,0.25)_16px_17px)] opacity-30" />
            <div className="relative flex items-center justify-between gap-4">
              <Image
                src={nachoLibreImages.logoBlack}
                alt="Nacho Libre"
                width={176}
                height={68}
                className="h-12 w-40 object-contain object-left"
              />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
                className="grid size-11 shrink-0 place-items-center border border-[#111111]/20 bg-[#111111] text-white transition hover:bg-white hover:text-[#111111]"
              >
                <X size={22} weight="bold" />
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between px-5 py-6">
            <nav className="grid gap-3" aria-label="Menu mobile Nacho Libre">
              {nachoLibreNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-white/10 bg-white/[0.04] px-4 py-5 text-left transition hover:border-[#E86A17] hover:bg-[#E86A17] hover:text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
                >
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-[#E86A17] transition group-hover:text-[#111111]/70">
                    0{index + 1}
                  </span>
                  <span className="text-2xl font-black uppercase leading-none tracking-[0.02em]">
                    {item.label}
                  </span>
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/12 pt-5">
              <p className="max-w-xs text-sm font-semibold leading-6 text-white/62">
                Mesa cheia, bar aceso e comida mexicana sem economizar no
                sabor.
              </p>
              <Link
                href={nachoLibreWhatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-[#E86A17] px-6 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
              >
                Reservar mesa
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
