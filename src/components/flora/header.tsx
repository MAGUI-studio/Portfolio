"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { floraImages, floraNav, floraWhatsappHref } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

export function FloraHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-60 w-full px-5 pt-5 text-white md:px-8 md:pt-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4"
        >
          <Link href="#inicio" aria-label="Ir para o início da Flora">
            <Image
              src={floraImages.logoWhite}
              alt="Flora"
              width={142}
              height={42}
              className="h-auto w-24 drop-shadow-[0_12px_22px_rgba(0,0,0,0.28)] md:w-28"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {floraNav.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.24, ease }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-[0.08em] text-white/82 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.24, ease }}
              className="hidden lg:block"
            >
              <Link
                href={floraWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/16"
              >
                Falar com a Flora
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <motion.button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md lg:hidden"
            >
              {isOpen ? <X size={22} /> : <List size={22} />}
            </motion.button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="fixed inset-0 z-70 bg-[#1F2418]/88 px-5 pb-6 pt-5 text-[#F4F0E8] backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="flex h-full flex-col rounded-[34px] bg-[linear-gradient(180deg,rgba(58,64,44,0.98),rgba(31,36,24,0.98))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
            >
              <div className="flex items-center justify-between pb-5">
                <Image
                  src={floraImages.logoWhite}
                  alt="Flora"
                  width={142}
                  height={42}
                  className="h-auto w-24"
                />

                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-8 grid gap-3">
                {floraNav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.28, delay: index * 0.04, ease }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-[26px] bg-white/8 px-5 py-4 backdrop-blur-sm"
                    >
                      <div>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                          0{index + 1}
                        </span>
                        <span className="mt-2 block text-2xl leading-none text-[#F4F0E8]">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="text-white/46" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto rounded-[30px] bg-[linear-gradient(180deg,rgba(244,240,232,0.14),rgba(244,240,232,0.04))] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  Garden center premium
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  Plantas, vasos e composições naturais para transformar a casa
                  em um ambiente mais vivo e acolhedor.
                </p>
                <Link
                  href={floraWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4F0E8] px-5 py-3 text-sm font-semibold text-[#3A402C]"
                >
                  Solicitar atendimento
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
