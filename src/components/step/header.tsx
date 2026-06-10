"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { stepImages, stepNav, stepWhatsappHref } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

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
      <header className="absolute inset-x-0 top-0 z-60 pt-5 text-white md:px-8 md:pt-7 px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto flex w-full max-w-400 items-center justify-between rounded-[28px]"
        >
          <Link href="#inicio" aria-label="Ir para o início da STEP">
            <Image
              src={stepImages.logoWhite}
              alt="STEP"
              width={148}
              height={42}
              className="h-auto w-24 md:w-28"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {stepNav.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.24, ease }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-[0.08em] text-white/70 transition-colors hover:text-white"
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
                href={stepWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F3EEE7]"
              >
                Solicitar avaliação
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <motion.button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white backdrop-blur-sm xl:hidden"
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
            className="fixed inset-0 z-70 bg-[#050505]/96 px-5 pb-6 pt-5 text-white"
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="mx-auto flex h-full max-w-440 flex-col rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(20,20,20,0.98),rgba(10,10,10,0.98))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
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
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/6"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-8 grid gap-3">
                {stepNav.map((item, index) => (
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
                      className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/4 px-5 py-4"
                    >
                      <div>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                          0{index + 1}
                        </span>
                        <span className="mt-2 block text-2xl leading-none text-white">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="text-white/46" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  Atendimento técnico
                </p>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  Solicite uma avaliação individual para manutenção,
                  higienização, restauração ou conservação do seu sneaker.
                </p>
                <Link
                  href={stepWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A]"
                >
                  Falar com a STEP
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
