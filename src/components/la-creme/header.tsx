"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, List, ShoppingBag, X } from "@phosphor-icons/react";
import { images, nav, whatsapp } from "./data";
import { logoFont } from "./fonts";
import { ease, motion } from "./motion";

export function LaCremeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    firstLinkRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="relative z-30 border-b border-[#2b1714]/10 bg-[#fff8ef]">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-5 px-5 py-5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10 lg:py-6">
        <div className="hidden max-w-xs text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9d2d40] lg:block">
          atelier aberto de terça a sábado / retiradas com hora marcada
        </div>

        <a
          href="#inicio"
          onClick={closeMenu}
          className="justify-self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-4 lg:justify-self-center"
        >
          <span
            className={`${logoFont.className} text-4xl leading-none tracking-[-0.08em] text-[#2b1714] sm:text-5xl`}
          >
            La Crème
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
          <a
            href="https://www.instagram.com/"
            className="rounded-full border border-[#2b1714]/14 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2b1714] transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          >
            Instagram
          </a>
          <a
            href={whatsapp}
            className="inline-flex items-center gap-3 rounded-full bg-[#2b1714] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(43,23,20,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          >
            Encomendar
            <ShoppingBag size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          ref={buttonRef}
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="group inline-flex size-12 items-center justify-center rounded-full border border-[#2b1714]/12 bg-white text-[#2b1714] shadow-[0_14px_34px_rgba(43,23,20,0.08)] transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 lg:hidden"
        >
          <motion.span
            key={isMenuOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -18, scale: 0.82 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.22, ease }}
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <List size={24} aria-hidden="true" />
            )}
          </motion.span>
        </button>
      </div>

      <div className="hidden border-t border-[#2b1714]/10 bg-white/58 lg:block">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-6 overflow-x-auto px-5 py-3 md:px-8 lg:px-10">
          <nav className="flex min-w-max items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b1714]">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition duration-300 hover:text-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="hidden min-w-max items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9d2d40] md:flex">
            <span className="size-1.5 rounded-full bg-[#25d366]" />
            agenda da semana aberta
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id={menuId}
            className="border-t border-[#2b1714]/10 px-5 pb-5 md:px-8 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.34, ease }}
          >
            <motion.div
              className="mx-auto mt-2 max-w-[1540px] overflow-hidden rounded-[30px] border border-[#2b1714]/10 bg-white shadow-[0_24px_70px_rgba(43,23,20,0.12)]"
              initial={{ y: -18, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.98 }}
              transition={{ duration: 0.34, ease }}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={images.torta_frutas_vermelhas}
                  alt="Torta artesanal La Crème"
                  fill
                  quality={72}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b1714]/82 via-[#2b1714]/38 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffd8df]">
                    menu la crème
                  </p>
                  <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    Encomendas, vitrine e doces da semana.
                  </p>
                </div>
              </div>

              <nav className="grid p-3" aria-label="Menu principal mobile">
                {nav.map((item, index) => (
                  <a
                    key={item.label}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-[22px] px-4 py-4 text-[#2b1714] transition duration-300 hover:bg-[#fff1f3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9d2d40]">
                        0{index + 1}
                      </span>
                      <span className="text-lg font-semibold tracking-[-0.03em]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="text-[#9d2d40] transition duration-300 group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </nav>

              <div className="grid gap-3 border-t border-[#2b1714]/10 bg-[#fff8ef] p-4">
                <a
                  href={whatsapp}
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2b1714] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
                >
                  Pedir no WhatsApp
                  <ShoppingBag size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-full border border-[#2b1714]/12 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#2b1714] transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
