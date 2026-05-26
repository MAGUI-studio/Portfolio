"use client";

import Image from "next/image";
import Link from "next/link";
import { solutions } from "./data";
import { alexandria } from "./fonts";
import { motion } from "./motion";

export function KromaSolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#1E1E1E] px-5 pt-24 pb-12 text-white md:px-8 md:pt-32 md:pb-16 lg:px-10"
    >
      <div className="relative mx-auto max-w-[1560px]">
        <div className="overflow-hidden border-y border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[150px_1fr]"
          >
            <div className="flex items-center border-b border-white/10 px-6 py-5 lg:min-h-[420px] lg:border-r lg:border-b-0 lg:[writing-mode:vertical-rl]">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#FFBC4F] lg:rotate-180">
                solucoes kroma
              </p>
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <h2
                className={`max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl ${alexandria.className} uppercase`}
              >
                Energia sob medida para cada operação.
              </h2>

              <div className="mt-10 grid gap-6 pt-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/64">
                  A Kroma adapta a mesma engenharia solar a três ritmos de
                  consumo: rotina residencial, previsibilidade comercial e
                  potência industrial.
                </p>
                <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 bg-white/5">
                  {["casa", "negocio", "industria"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/48"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex w-full flex-col overflow-hidden border border-white/10 bg-[#2A2A2A]/86"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-black">
                <Image
                  src={item.image}
                  alt={`Sistema solar ${item.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/72 to-transparent p-4 pt-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFBC4F]">
                    {`// 0${index + 1}`}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white">
                    {item.metric}
                  </span>
                </div>
              </div>

              <div className="flex min-h-[340px] flex-grow flex-col justify-between p-6 lg:p-8">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/42">
                    {item.caption}
                  </p>
                  <h3
                    className={`mt-4 text-3xl font-semibold tracking-[-0.04em] text-white ${alexandria.className}`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/62">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-col gap-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-white/72"
                      >
                        <span>{point}</span>
                        <span className="h-1 w-1 bg-[#FFBC4F]" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contato"
                    className="group/link mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFBC4F] transition-colors hover:text-white"
                  >
                    Configurar sistema
                    <span className="transform transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
