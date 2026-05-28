"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { shinobiBrand, shinobiNav, shinobiWhatsappHref } from "./data";

export function ShinobiHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-8 text-white md:px-10">
      <div className="mx-auto grid max-w-[1500px] grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link
          href="#inicio"
          aria-label="Ir para o inicio do SHINOBI"
          className="shrink-0 transition duration-300 hover:opacity-75"
        >
          <div className="flex items-center gap-5">
            <Image
              src={shinobiBrand.icon}
              alt="SHINOBI"
              priority
              width={208}
              height={56}
              className="h-18 w-fit object-contain object-left"
            />
            <Image
              src={shinobiBrand.logo}
              alt="SHINOBI"
              priority
              width={0}
              height={0}
              sizes="100vw"
              className="h-18 w-fit object-contain object-left"
            />
          </div>
        </Link>

        <div className="hidden justify-center lg:flex">
          <nav className="flex items-center gap-2 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/58 [font-family:var(--font-shinobi-display)]">
            {shinobiNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 transition duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden justify-end lg:flex">
          <Link
            href={shinobiWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-white/14 bg-white px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 [font-family:var(--font-shinobi-display)] hover:-translate-y-0.5 hover:border-[#F4261C] hover:bg-[#F4261C] hover:text-white"
          >
            Pedir agora
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="justify-self-end border border-white/14 bg-black/20 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition hover:border-[#F4261C] hover:bg-[#F4261C] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <List size={24} />}
        </button>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-[#050302]/78 p-3 backdrop-blur-md transition duration-500 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`relative flex min-h-full flex-col overflow-hidden bg-[#070403] text-white shadow-[0_30px_120px_rgba(0,0,0,0.55)] transition duration-500 ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-[0.98] opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(244,38,28,0.2),transparent_30%),linear-gradient(145deg,rgba(244,38,28,0.12),rgba(5,3,2,0.96)_52%)]" />

          <div className="relative flex items-center justify-between p-6">
            <Link
              href="#inicio"
              aria-label="Ir para o inicio do SHINOBI"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src={shinobiBrand.logo}
                alt="SHINOBI"
                width={192}
                height={56}
                className="h-14 w-48 object-contain object-left"
              />
            </Link>

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="border border-white/14 bg-white/[0.06] p-4 transition hover:border-[#F4261C] hover:bg-[#F4261C]"
            >
              <X size={25} />
            </button>
          </div>

          <nav className="relative grid flex-1 content-center px-6">
            {shinobiNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms",
                }}
                className={`group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-white/10 py-7 transition duration-500 last:border-b ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F4261C] [font-family:var(--font-shinobi-display)]">
                  0{index + 1}
                </span>
                <span className="text-4xl font-black uppercase transition [font-family:var(--font-shinobi-display)] group-hover:text-[#F4261C]">
                  {item.label}
                </span>
                <ArrowUpRight
                  size={22}
                  weight="bold"
                  className="text-white/36 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F4261C]"
                />
              </Link>
            ))}
          </nav>

          <div
            className={`relative grid gap-5 p-6 transition duration-500 ${
              isOpen
                ? "translate-y-0 opacity-100 delay-[340ms]"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="max-w-md text-sm leading-7 text-white/58">
              Energia escura, sabor intenso e uma lata pronta para entrar no
              modo foco.
            </p>
            <Link
              href={shinobiWhatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-5 text-[11px] font-black uppercase tracking-[0.22em] text-black transition [font-family:var(--font-shinobi-display)] hover:bg-[#F4261C] hover:text-white"
            >
              Pedir no WhatsApp
              <ArrowUpRight
                size={15}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
