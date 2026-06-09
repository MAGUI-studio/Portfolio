"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { havenImages, havenNav, havenWhatsappHref } from "./data";

export function HavenHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-60">
        <div className="mx-auto flex max-w-440 items-center justify-between px-5 pt-5 md:px-8 lg:px-10 lg:pt-7">
          <Link href="#inicio" aria-label="Ir para o inicio da Haven">
            <Image
              src={havenImages.logoWhite}
              alt="Haven"
              width={124}
              height={34}
              className="h-auto w-24 md:w-28"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-white lg:flex">
            {havenNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition hover:text-[#D6E1D4]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={havenWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D6E1D4] md:inline-flex"
            >
              Agendar
              <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center text-white lg:hidden"
            >
              {isOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-70 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#14283D] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-0 flex flex-col px-5 pb-8 pt-5 text-white transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image
              src={havenImages.logoWhite}
              alt="Haven"
              width={124}
              height={34}
              className="h-auto w-24"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-11 items-center justify-center"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-16 flex-1">
            <nav className="grid gap-5">
              {havenNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/16 pb-5"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-white/56">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block text-4xl leading-none">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href={havenWhatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-between border-t border-white/16 pt-6 text-lg font-semibold"
          >
            Agendar atendimento
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
