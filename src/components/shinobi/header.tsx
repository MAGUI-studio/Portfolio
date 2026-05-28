"use client";

import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { shinobiBrand, shinobiWhatsappHref } from "./data";

const shinobiHeaderNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sabores", href: "#sabores" },
  { label: "Pedido", href: "#pedido" },
];

export function ShinobiHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-6 text-white md:px-10">
      <div className="mx-auto grid max-w-[1540px] grid-cols-[auto_1fr_auto] items-center gap-5">
        <Link
          href="#inicio"
          aria-label="Ir para o inicio do SHINOBI"
          className="inline-flex items-center gap-4 transition hover:opacity-80"
        >
          <Image
            src={shinobiBrand.logo}
            alt="SHINOBI"
            priority
            width={188}
            height={56}
            className="h-12 w-40 object-contain object-left md:h-14 md:w-48"
          />
        </Link>

        <nav className="hidden justify-self-center text-[10px] font-black uppercase tracking-[0.22em] text-white/52 [font-family:var(--font-shinobi-display)] lg:flex">
          {shinobiHeaderNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-l border-white/14 px-5 py-2 transition first:border-l-0 hover:text-[#5D9601]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={shinobiWhatsappHref}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-3 border border-[#5D9601] bg-[#5D9601] px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition [font-family:var(--font-shinobi-display)] hover:-translate-y-0.5 hover:bg-transparent hover:text-[#5D9601] lg:inline-flex"
        >
          Pedir agora
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-12 place-items-center justify-self-end border border-white/18 bg-black text-white transition hover:border-[#5D9601] hover:text-[#5D9601] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={24} />}
        </button>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-black transition duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col bg-[#050302] text-white">
          <div className="flex items-center justify-between border-b border-white/12 p-5">
            <Link
              href="#inicio"
              aria-label="Ir para o inicio do SHINOBI"
              onClick={closeMenu}
              className="inline-flex items-center gap-3"
            >
              <Image
                src={shinobiBrand.icon}
                alt=""
                width={46}
                height={46}
                className="size-11 object-contain"
              />
              <Image
                src={shinobiBrand.logo}
                alt="SHINOBI"
                width={160}
                height={48}
                className="h-11 w-40 object-contain object-left"
              />
            </Link>

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="grid size-12 place-items-center border border-white/18 bg-black text-white transition hover:border-[#5D9601] hover:text-[#5D9601]"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="grid flex-1 content-center px-5">
            {shinobiHeaderNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-white/12 py-7 last:border-b"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#5D9601] [font-family:var(--font-shinobi-display)]">
                  0{index + 1}
                </span>
                <span className="text-4xl font-black uppercase leading-none transition [font-family:var(--font-shinobi-display)] group-hover:text-[#5D9601]">
                  {item.label}
                </span>
                <ArrowUpRight
                  size={22}
                  weight="bold"
                  className="text-white/36 transition group-hover:text-[#5D9601]"
                />
              </Link>
            ))}
          </nav>

          <div className="grid gap-4 border-t border-white/12 p-5">
            <p className="text-sm leading-7 text-white/56">
              Energia escura, presenca fria e foco para atravessar a noite.
            </p>
            <Link
              href={shinobiWhatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-3 bg-[#5D9601] px-6 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-white [font-family:var(--font-shinobi-display)]"
            >
              Pedir no WhatsApp
              <ArrowUpRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
