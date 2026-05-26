"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
import { productImages, products } from "./data";
import { alexandria } from "./fonts";

const ease = [0.22, 1, 0.36, 1] as const;

const productTags = [
  ["captação", "alta eficiência", "garantia"],
  ["conversão", "proteção", "expansão"],
  ["estrutura", "vento", "manutenção"],
  ["backup", "autonomia", "cargas críticas"],
  ["dados", "alertas", "performance"],
  ["homologação", "ART", "pós-venda"],
];

export default function EcoSystemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? products.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === products.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-[#1E1E1E] px-5 pt-10 pb-24 text-white md:px-8 md:pt-12 md:pb-32 lg:px-10"
    >
      <div className="relative mx-auto max-w-[1560px]">
        {/* ================= CABEÇALHO DA SEÇÃO ================= */}
        <div className="border-y border-white/10 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-16 bg-[#FFBC4F]" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#FFBC4F]">
                    ecossistema kroma
                  </p>
                </div>

                <h2
                  className={`mt-8 max-w-6xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl ${alexandria.className} uppercase`}
                >
                  Cinco tecnologias, uma só arquitetura.
                </h2>
              </div>

              <div className="border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
                <p className="text-lg leading-8 text-white/62">
                  Do painel ao monitoramento, cada componente entra no projeto
                  com função clara, compatibilidade técnica e margem de
                  expansão.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= GRID DO ECOSSISTEMA ================= */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden bg-[#2A2A2A]/86 lg:grid-cols-[0.58fr_0.42fr]">
          {/* PAINEL VISUAL (ESQUERDA) */}
          <div className="group relative min-h-[450px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={productImages[activeIndex]}
                  alt={`Equipamento Kroma: ${activeProduct.title}`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Badge Técnico de Index flutuando na imagem */}
            <div className="absolute left-6 top-6 border border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-[#FFBC4F] backdrop-blur-md">
              SYSTEM // 0{activeIndex + 1}
            </div>

            {/* Controles Geométricos de Navegação (Menu Inferior Esquerdo) */}
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-1.5">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Produto anterior"
                className="grid size-11 place-items-center border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-[#FFBC4F] hover:text-[#2A2A2A] hover:border-[#FFBC4F]"
              >
                <ArrowLeft size={16} weight="bold" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Proximo produto"
                className="grid size-11 place-items-center border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-[#FFBC4F] hover:text-[#2A2A2A] hover:border-[#FFBC4F]"
              >
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>

          {/* PAINEL DE CONTROLE / MENU SELECIONÁVEL (DIREITA) */}
          <aside className="flex flex-col justify-between divide-y divide-white/10 bg-[#242424] text-white">
            <div className="flex w-full flex-col divide-y divide-white/10">
              {products.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div key={item.title} className="w-full">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-expanded={isActive}
                      aria-controls={`kroma-product-panel-${index}`}
                      className={`w-full text-left px-6 py-6 md:px-8 transition-all duration-300 flex items-center justify-between gap-4 ${
                        isActive
                          ? "bg-[#FFBC4F] text-[#2A2A2A]"
                          : "bg-transparent text-white hover:bg-white/6"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <span
                          className={`font-mono text-xs tracking-wider ${
                            isActive
                              ? "text-[#2A2A2A] font-bold"
                              : "text-white/40"
                          }`}
                        >
                          0{index + 1}.
                        </span>
                        <span
                          className={`text-lg font-semibold tracking-[-0.02em] md:text-xl ${alexandria.className}`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <Icon
                        size={20}
                        weight={isActive ? "duotone" : "regular"}
                        className={
                          isActive
                            ? "text-[#2A2A2A]"
                            : "text-white/40 transition-colors group-hover:text-white"
                        }
                      />
                    </button>

                    {/* Sanfona Controlada: Abre o texto e as tags abaixo do botão ativo */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`kroma-product-panel-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden bg-[#1E1E1E] text-white/80"
                        >
                          <div className="px-6 pb-8 pt-2 md:px-8 pl-12 md:pl-14 flex flex-col gap-5">
                            <p className="text-sm leading-relaxed text-white/70 max-w-md">
                              {item.text}
                            </p>

                            {/* Renderização das tags injetadas no próprio fluxo de leitura */}
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {productTags[index].map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-white/80"
                                >
                                  <Check
                                    size={10}
                                    className="text-[#FFBC4F]"
                                    weight="bold"
                                  />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
