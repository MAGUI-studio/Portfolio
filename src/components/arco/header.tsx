"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, MapPin, X } from "@phosphor-icons/react";
import { useState } from "react";

import { arcoImages, arcoNav, arcoWhatsapp } from "./data";

export function ArcoHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 w-full bg-white px-5 pt-4 text-[#123A5C] md:px-8 md:pt-5 lg:px-10">
      <div className="relative z-60 mx-auto max-w-440 border-b border-[#1F5687]/14">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 pb-4 md:pb-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-3 text-xs font-bold uppercase text-[#1F5687] lg:flex">
            <MapPin size={18} />
            <span>Odontologia em escuta ativa</span>
          </div>

          <Link
            href="#inicio"
            aria-label="Ir para o inicio da ARCO"
            className="justify-self-start lg:justify-self-center"
          >
            <Image
              src={arcoImages.logoBlue}
              alt="ARCO Odontologia"
              width={170}
              height={52}
              className="h-auto w-30 md:w-36"
              priority
            />
          </Link>

          <div className="flex items-center justify-end gap-3">
            <Link
              href={arcoWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-lg bg-[#1F5687] px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16456F] md:inline-flex"
            >
              Agendar
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-bold uppercase transition-colors lg:hidden ${
                isOpen
                  ? "border-[#123A5C] bg-[#123A5C] text-white"
                  : "border-[#1F5687]/18 text-[#1F5687] hover:bg-[#EAF5FB]"
              }`}
            >
              <span>{isOpen ? "Fechar" : "Menu"}</span>
              {isOpen ? <X size={23} /> : <List size={23} />}
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-between border-t border-[#1F5687]/10 py-3 lg:flex">
          <nav className="flex items-center gap-2">
            {arcoNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-[#EAF5FB]"
              >
                <span className="text-xs font-bold text-[#1F5687]/58 transition-colors group-hover:text-[#1F5687]">
                  0{index + 1}
                </span>
                <span className="text-sm font-bold text-[#123A5C]/74 transition-colors group-hover:text-[#123A5C]">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <p className="max-w-xs text-right text-xs font-semibold leading-5 text-[#4A6477]">
            Diagnostico digital, explicacoes claras e acompanhamento proximo.
          </p>
        </div>

      </div>

      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-[#123A5C]/22 transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`absolute inset-x-0 top-full z-50 px-5 pt-3 transition-all duration-300 md:px-8 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-440 overflow-hidden rounded-lg bg-[#123A5C] text-white shadow-[0_28px_80px_rgba(18,58,92,0.28)]">
          <div className="border-b border-white/14 p-5">
            <p className="text-xs font-bold uppercase text-[#B8D9EA]">
              Navegacao
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/62">
              Cuidado proximo, diagnostico digital e um plano feito para voce.
            </p>
          </div>

          <nav className="grid grid-cols-2">
            {arcoNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group border-b border-r border-white/12 p-5 transition-colors hover:bg-white/8"
              >
                <span className="text-xs font-bold text-[#B8D9EA]">
                  0{index + 1}
                </span>
                <span className="mt-5 block text-lg font-semibold">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto]">
            <Link
              href={arcoWhatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-bold text-[#123A5C]"
            >
              Agendar avaliacao <ArrowUpRight size={17} />
            </Link>
            <Link
              href="#clinica"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-4 text-sm font-bold text-white"
            >
              Conhecer a ARCO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
