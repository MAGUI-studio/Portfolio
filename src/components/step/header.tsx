"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { stepNav, stepWhatsappHref, stepImages } from "./data";

export function StepHeader() {
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
        <div className="mx-auto flex w-full max-w-440 items-center justify-between px-5 pt-5 md:px-8 lg:px-10 lg:pt-7">
          <Link href="#inicio" aria-label="Ir para o início da STEP">
            <Image
              src={stepImages.logoWhite}
              alt="STEP"
              width={148}
              height={42}
              className="h-auto w-24 md:w-28"
            />
          </Link>

          <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/82 backdrop-blur lg:flex">
            {stepNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/14 bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#D9D9D9] md:inline-flex"
            >
              Solicitar avaliação
              <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white backdrop-blur lg:hidden"
            >
              {isOpen ? <X size={22} /> : <List size={22} />}
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
          className={`absolute inset-0 bg-[#0A0A0A] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-0 flex flex-col px-5 pb-8 pt-5 text-white transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image
              src={stepImages.logoWhite}
              alt="STEP"
              width={148}
              height={42}
              className="h-auto w-24"
            />
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-16 grid gap-5">
            {stepNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-5"
              >
                <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  0{index + 1}
                </span>
                <span className="mt-2 block text-4xl leading-none">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href={stepWhatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-auto inline-flex items-center justify-between border-t border-white/10 pt-6 text-lg font-semibold"
          >
            Solicitar avaliação técnica
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
