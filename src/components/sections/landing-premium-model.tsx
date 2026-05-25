"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Icon, Sparkle } from "@phosphor-icons/react";

type Point = {
  title: string;
  text: string;
};

type Stat = {
  label: string;
  value: string;
};

export type PremiumLandingModelProps = {
  accent: string;
  background: string;
  dark: string;
  eyebrow: string;
  icon: Icon;
  index: string;
  name: string;
  nav: string[];
  promise: string;
  secondary: string;
  stats: Stat[];
  text: string;
  tone: string;
  tracks: Point[];
};

const imageSrc = "/utils/placeholder.svg";
const ease = [0.22, 1, 0.36, 1] as const;

function CTA({ accent, children, href = "#contato" }: { accent: string; children: string; href?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center justify-center gap-3 bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#2a2a2a]"
      style={{ boxShadow: `inset 0 -3px 0 ${accent}` }}
    >
      {children}
      <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

function Kicker({ accent, children }: { accent: string; children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: accent }}>
      {children}
    </p>
  );
}

export default function PremiumLandingModel({
  accent,
  background,
  dark,
  eyebrow,
  icon: ModelIcon,
  index,
  name,
  nav,
  promise,
  secondary,
  stats,
  text,
  tone,
  tracks,
}: PremiumLandingModelProps) {
  const first = tracks.slice(0, 3);
  const middle = tracks.slice(3, 6);
  const last = tracks.slice(6, 10);

  return (
    <main className="overflow-hidden" style={{ background, color: dark }}>
      <header className="px-5 py-5 md:px-9">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-4 border-b border-black/10 pb-5 lg:grid-cols-[0.32fr_0.42fr_0.26fr] lg:items-center"
        >
          <a href="#inicio" className="group flex items-center gap-4">
            <span className="grid size-12 place-items-center text-white transition duration-300 group-hover:-translate-y-0.5" style={{ background: dark }}>
              <ModelIcon size={23} />
            </span>
            <span>
              <strong className="block text-xl leading-none tracking-[-0.04em]">{name}</strong>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-black/45">{tone}</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-black/58">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition duration-300 hover:text-black">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex lg:justify-end">
            <CTA accent={accent}>Solicitar conversa</CTA>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-5 pb-24 pt-12 md:px-9 lg:pb-32 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, ease }}>
            <Kicker accent={accent}>{eyebrow}</Kicker>
            <h1 className="mt-8 text-[64px] font-semibold leading-[0.84] tracking-[-0.075em] md:text-[132px] lg:text-[154px]">
              {promise}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.1, ease }}
            className="grid gap-8"
          >
            <p className="text-xl leading-9 text-black/62 md:text-2xl md:leading-10">{text}</p>
            <div className="flex flex-wrap gap-3">
              <CTA accent={accent} href="#metodo">Conhecer metodo</CTA>
              <a href="#prova" className="inline-flex items-center justify-center border border-black/15 px-6 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                Ver evidencias
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
          className="mt-16 grid gap-5 lg:grid-cols-[0.68fr_0.32fr]"
        >
          <figure className="relative overflow-hidden">
            <Image src={imageSrc} width={1800} height={1040} alt={`${name} imagem principal`} className="h-[560px] w-full object-cover" priority />
            <figcaption className="absolute bottom-5 left-5 right-5 grid gap-4 bg-white/88 p-5 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
              <span className="text-lg font-semibold tracking-[-0.04em]">{secondary}</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-black/45">modelo {index}</span>
            </figcaption>
          </figure>

          <div className="grid gap-5">
            {stats.map((stat, statIndex) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.56, delay: statIndex * 0.06, ease }}
                className="bg-white p-6"
              >
                <p className="text-5xl font-semibold leading-none tracking-[-0.07em]">{stat.value}</p>
                <p className="mt-4 text-sm leading-6 text-black/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="metodo" className="grid gap-10 px-5 py-24 md:px-9 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <Kicker accent={accent}>metodo</Kicker>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Uma landing institucional com narrativa, prova e acao clara.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {first.map((item, itemIndex) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: itemIndex * 0.06, ease }}
              className="border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1"
            >
              <span className="text-sm font-semibold" style={{ color: accent }}>0{itemIndex + 1}</span>
              <h3 className="mt-9 text-2xl font-semibold tracking-[-0.05em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/58">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-9">
        <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="bg-[#111111] p-8 text-white md:p-12">
            <Sparkle size={36} style={{ color: accent }} />
            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Clareza antes de ornamentacao.
            </h2>
            <p className="mt-8 text-lg leading-8 text-white/62">
              Cada bloco evita o visual generico e organiza argumentos reais: contexto, valor, processo, autoridade e convite.
            </p>
          </div>
          <Image src={imageSrc} width={1400} height={960} alt={`${name} composicao editorial`} className="h-[620px] w-full object-cover" />
        </div>
      </section>

      <section id="prova" className="px-5 py-24 md:px-9">
        <div className="grid border-y border-black/10 lg:grid-cols-4">
          {last.map((item, itemIndex) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: itemIndex * 0.05, ease }}
              className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r"
            >
              <CheckCircle size={24} style={{ color: accent }} />
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/58">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-9">
        <div className="grid gap-8 lg:grid-cols-[0.25fr_0.5fr_0.25fr]">
          <div className="border-t border-black/15 pt-6">
            <Kicker accent={accent}>arquitetura</Kicker>
            <p className="mt-7 text-lg leading-8 text-black/58">Sistema de conteudo para vender criterio, nao volume.</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.74, ease }}
            className="text-6xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-8xl"
          >
            O leitor entende o valor antes de encontrar o formulario.
          </motion.h2>
          <div className="grid gap-4">
            {middle.map((item) => (
              <div key={item.title} className="bg-white p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-9">
        <div className="grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((offset) => (
            <motion.figure
              key={offset}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.64, delay: offset * 0.08, ease }}
              className="overflow-hidden bg-white"
            >
              <Image src={imageSrc} width={900} height={760} alt={`${name} detalhe ${offset + 1}`} className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.03]" />
              <figcaption className="p-6 text-sm leading-7 text-black/58">
                Bloco visual com respiro editorial, ideal para produto, ambiente, equipe, processo ou evidencia tecnica.
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-9">
        <div className="grid gap-5 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="border border-black/10 bg-white p-8 md:p-12">
            <Kicker accent={accent}>jornada</Kicker>
            <div className="mt-10 grid gap-6">
              {["Diagnostico", "Desenho", "Validacao", "Conversao"].map((step, stepIndex) => (
                <div key={step} className="grid gap-5 border-b border-black/10 pb-6 md:grid-cols-[0.14fr_0.86fr]">
                  <span className="text-sm text-black/42">0{stepIndex + 1}</span>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em]">{step}</h3>
                    <p className="mt-2 text-sm leading-7 text-black/58">
                      Texto contextual em portugues para explicar a etapa com sobriedade, ritmo e foco comercial.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid content-between gap-5 p-8 text-white md:p-12" style={{ background: dark }}>
            <ModelIcon size={42} style={{ color: accent }} />
            <p className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em]">
              Secoes pensadas para autoridade, nao para encher pagina.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 pb-10 pt-24 md:px-9">
        <div className="grid gap-10 bg-[#111111] p-8 text-white md:p-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
          <div>
            <Kicker accent={accent}>contato</Kicker>
            <h2 className="mt-8 text-6xl font-semibold leading-[0.88] tracking-[-0.07em] md:text-8xl">
              Vamos transformar este ramo em uma landing memoravel.
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-lg leading-8 text-white/62">
              Modelo completo com hero, narrativa, prova, processo, blocos visuais, jornada e chamada final.
            </p>
            <CTA accent={accent}>Iniciar projeto</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
