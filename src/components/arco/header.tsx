"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, MapPin, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { arcoImages, arcoNav, arcoWhatsapp } from "./data";

export function ArcoHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="relative z-40 w-full bg-white px-5 pt-4 text-[#123A5C] md:px-8 md:pt-5 lg:px-10">
      <div className="mx-auto max-w-440 border-b border-[#1F5687]/14">
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
        className={`fixed inset-0 z-40 bg-[#071C2D]/82 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacao"
        aria-hidden={!isOpen}
        className={`fixed inset-x-4 top-5 z-50 mx-auto max-w-xl transition-all duration-300 md:inset-x-8 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100dvh-2.5rem)] overflow-y-auto rounded-lg bg-[#123A5C] text-white shadow-[0_32px_110px_rgba(0,0,0,0.42)]">
          <div className="flex items-center justify-between border-b border-white/14 p-5">
            <Image
              src={arcoImages.logoWhite}
              alt="ARCO Odontologia"
              width={170}
              height={52}
              className="h-auto w-30"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-white/18 p-2.5 text-white transition-colors hover:bg-white/10"
            >
              <X size={22} />
            </button>
          </div>

          <div className="border-b border-white/14 px-5 py-6">
            <p className="text-xs font-bold uppercase text-[#B8D9EA]">
              Navegacao
            </p>
            <p className="mt-3 max-w-sm text-base leading-7 text-white/66">
              Cuidado proximo, diagnostico digital e um plano feito para voce.
            </p>
          </div>

          <nav className="grid">
            {arcoNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-white/12 px-5 py-5 transition-colors hover:bg-white/8"
              >
                <span className="text-xl font-semibold">{item.label}</span>
                <span className="text-xs font-bold text-[#B8D9EA]">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="grid gap-3 p-5">
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
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/8"
            >
              Conhecer a ARCO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
