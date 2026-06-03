"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";

import { powervetImages, powervetNav, powervetWhatsapp } from "./data";

export function PowervetHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 md:px-10 lg:px-14">
      <div className="flex w-full items-center justify-between gap-5 pb-5 text-white">
        <Link href="#inicio" aria-label="Ir para o início da POWERVET">
          <Image src={powervetImages.logoLight} alt="POWERVET" width={190} height={26} className="h-auto w-40 md:w-47" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {powervetNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72 transition-colors duration-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={powervetWhatsapp}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2 border border-white/24 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-[#021C00] lg:inline-flex"
        >
          WhatsApp
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="border border-white/24 p-2.5 text-white transition-colors hover:bg-white hover:text-[#021C00] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={23} />}
        </button>
      </div>

      <div className={`fixed inset-0 z-50 bg-[#021C00] px-5 py-5 text-white transition duration-500 lg:hidden ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}>
        <div className="flex items-center justify-between border-b border-white/16 pb-5">
          <Image src={powervetImages.logoLight} alt="POWERVET" width={180} height={24} className="h-auto w-40" />
          <button type="button" aria-label="Fechar menu" onClick={() => setIsOpen(false)} className="border border-white/24 p-2.5">
            <X size={23} />
          </button>
        </div>
        <nav className="grid pt-14">
          {powervetNav.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="group flex items-center justify-between border-b border-white/14 py-6">
              <span className="text-2xl font-semibold">{item.label}</span>
              <span className="text-xs tracking-[0.2em] text-[#DDD6C8]">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <Link href={powervetWhatsapp} target="_blank" rel="noreferrer" className="mt-14 inline-flex w-full items-center justify-center gap-2 bg-[#F4F1EB] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#021C00]">
          Falar no WhatsApp <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
