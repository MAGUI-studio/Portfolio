"use client";

import { ArrowUpRight, Bag, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePulseCart } from "./cart";
import { pulseImages, pulseNav, pulseWhatsapp } from "./data";

export function PulseHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, openCart } = usePulseCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/95 text-white backdrop-blur-md selection:bg-[#F97316] selection:text-black">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <Link href="#inicio" aria-label="Pulse Home" className="relative z-50 flex items-center">
          <Image
            src={pulseImages.logo_text}
            alt="Pulse"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-32 h-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação Pulse">
          {pulseNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={pulseWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#F97316] hover:bg-[#F97316] hover:text-black"
          >
            Garantir Peças
            <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            aria-label="Abrir carrinho"
            onClick={openCart}
            className="relative inline-grid size-11 place-items-center border border-white/10 bg-white/5 text-white transition hover:border-[#F97316] hover:text-[#F97316]"
          >
            <Bag size={18} weight="bold" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-[#F97316] text-[10px] font-black text-black">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="relative z-50 flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Abrir carrinho"
            onClick={openCart}
            className="relative p-2 text-white transition-colors hover:text-[#F97316]"
          >
            <Bag size={22} weight="bold" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#F97316] text-[10px] font-black text-black">
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-white transition-colors hover:text-[#F97316]"
          >
            {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#0A0A0A] px-6 pb-7 pt-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid gap-1 border-t border-white/8 pt-5">
          {pulseNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-b border-white/8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition-colors hover:text-[#F97316]"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          ))}
        </div>

        <div className="pt-5">
          <Link
            href={pulseWhatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center bg-white py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#F97316]"
          >
            Falar com Consultor
          </Link>
        </div>
      </div>

    </header>
  );
}
