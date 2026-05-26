"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { images, nav } from "./data";
import { KromaWordmark } from "./brand";
import { alexandria } from "./fonts";
import { ease, motion } from "./motion";

const whatsappHref =
  "https://wa.me/5500000000000?text=Quero%20falar%20com%20um%20especialista%20da%20Kroma";

export function KromaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 p-5 text-white md:p-7 lg:p-8">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="#inicio"
            aria-label="Kroma, voltar ao inicio"
            onClick={() => setMenuOpen(false)}
            className="group inline-flex items-center gap-4"
          >
            <KromaWordmark className="text-3xl text-white md:text-[34px]" />
            <span className="hidden h-px w-10 bg-white/24 transition duration-300 group-hover:bg-[#FFBC4F] md:block" />
            <span className="hidden text-[9px] font-black uppercase tracking-[0.26em] text-white/58 md:block">
              energia solar
            </span>
          </Link>

          <nav
            aria-label="Navegacao principal"
            className="hidden items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/70 lg:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-3 transition duration-300 hover:text-[#FFBC4F]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/78 transition duration-300 hover:text-[#FFBC4F] sm:inline-flex"
            >
              Falar com especialista
              <span className="grid size-9 place-items-center border border-white/20 text-white transition duration-300 group-hover:border-[#FFBC4F] group-hover:text-[#FFBC4F]">
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="group grid size-11 place-items-center border border-white/24 text-white transition duration-300 hover:border-[#FFBC4F] hover:text-[#FFBC4F] lg:hidden"
            >
              <span className="grid w-5 gap-1.5">
                <span
                  className={`h-0.5 bg-current transition duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease }}
            className="fixed inset-0 z-[80] overflow-y-auto text-white lg:hidden"
          >
            <Image
              src={images.hero}
              alt="Paineis solares ao fundo do menu Kroma"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.92)_0%,rgba(30,30,30,0.74)_48%,rgba(30,30,30,0.96)_100%)]" />

            <div className="relative z-10 flex min-h-dvh flex-col justify-between p-5 md:p-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, ease }}
                  className="flex items-center justify-between gap-5"
                >
                  <Link
                    href="#inicio"
                    aria-label="Kroma, voltar ao inicio"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3"
                  >
                    <KromaWordmark className="text-3xl text-white" />
                    <span className="h-px w-10 bg-[#FFBC4F]" />
                  </Link>

                  <button
                    type="button"
                    aria-label="Fechar menu"
                    onClick={() => setMenuOpen(false)}
                    className="grid size-12 shrink-0 place-items-center border border-white/20 text-white transition duration-300 hover:border-[#FFBC4F] hover:text-[#FFBC4F]"
                  >
                    <span className="relative grid size-5 place-items-center">
                      <span className="absolute h-0.5 w-6 rotate-45 bg-current" />
                      <span className="absolute h-0.5 w-6 -rotate-45 bg-current" />
                    </span>
                  </button>
                </motion.div>

                <div className="mt-12 grid border-t border-white/12">
                  {nav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.42,
                        delay: index * 0.05,
                        ease,
                      }}
                      className="border-b border-white/12"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-6"
                      >
                        <span
                          className={`text-4xl font-semibold leading-none text-white md:text-6xl ${alexandria.className}`}
                        >
                          {item.label}
                        </span>
                        <span className="grid size-11 place-items-center border border-white/16 text-white/66 transition duration-300 group-hover:border-[#FFBC4F] group-hover:text-[#FFBC4F]">
                          <ArrowRight
                            size={18}
                            weight="bold"
                            className="transition duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.18, ease }}
                className="grid gap-4 border-t border-white/12 pt-6"
              >
                <p className="max-w-xl text-sm leading-7 text-white/62">
                  Engenharia, equipamentos, homologação e monitoramento para
                  transformar sol em infraestrutura operacional.
                </p>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-3 bg-[#FFBC4F] p-5 text-sm font-black uppercase tracking-[0.16em] text-[#1E1E1E]"
                >
                  Dimensionar sistema
                  <ArrowRight size={17} weight="bold" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
