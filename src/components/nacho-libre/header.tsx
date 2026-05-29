"use client";

import { ArrowRight, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  nachoLibreImages,
  nachoLibreNav,
  nachoLibreWhatsapp,
} from "./data";

export function NachoLibreHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="relative z-30 border-b border-[#111111]/18 bg-[#E86A17] text-[#111111]">
      <div className="mx-auto grid max-w-[1540px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8 lg:grid-cols-[0.32fr_0.42fr_0.26fr] lg:px-10 lg:py-5">
        <Link
          href="#inicio"
          aria-label="Ir para o inicio da Nacho Libre"
          className="inline-flex items-center transition hover:opacity-80"
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
          className="hidden justify-self-center border-x border-[#111111]/16 lg:flex"
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
            className="group inline-flex items-center gap-3 bg-white px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white"
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
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-12 place-items-center justify-self-end border border-white/28 bg-white text-[#111111] transition hover:bg-[#111111] hover:text-white lg:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={24} />}
        </button>
      </div>

      <div className={`border-t border-[#111111]/16 lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="grid gap-3 px-5 py-5 md:px-8">
          <nav className="grid gap-2" aria-label="Menu mobile Nacho Libre">
            {nachoLibreNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="grid grid-cols-[1fr_auto] items-center bg-white/12 px-4 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#111111]"
              >
                {item.label}
                <ArrowRight size={15} weight="bold" />
              </Link>
            ))}
          </nav>

          <Link
            href={nachoLibreWhatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-3 bg-white px-6 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#111111]"
          >
            Reservar mesa
            <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </div>
    </header>
  );
}
