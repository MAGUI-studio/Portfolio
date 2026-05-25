"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Compass,
  DoorOpen,
  Feather,
  HouseLine,
  Leaf,
  MapTrifold,
  PenNib,
  Ruler,
  Sparkle,
  SunHorizon,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  atrium: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90",
  living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
  stairs: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1400&q=90",
  stone: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
  pool: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
  table: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90",
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  ["01", "Sol antes da forma", "A implantação nasce do caminho do sol, da privacidade e da ventilação natural."],
  ["02", "Rotina como programa", "Cada ambiente é desenhado a partir de hábitos reais, não de uma lista genérica de cômodos."],
  ["03", "Matéria com permanência", "Pedra, madeira, concreto e vidro entram quando melhoram o uso e envelhecem bem."],
];

const projects = [
  ["Casa Litoral Norte", "Vazios generosos, sombra profunda e sala aberta para o jardim.", images.pool],
  ["Casa Jardim Interno", "Um pátio central organiza circulação, luz e silêncio.", images.atrium],
  ["Casa Serra Clara", "Madeira, pedra e grandes aberturas para dias mais lentos.", images.living],
];

const process = [
  ["Escuta", "Entendemos terreno, família, orçamento, rotina e o que precisa ficar mais simples."],
  ["Partido", "Criamos o conceito espacial, volumetria, fluxos e relação com luz natural."],
  ["Executivo", "Detalhamos arquitetura, interiores, marcenaria, luminotécnica e compatibilização."],
  ["Obra", "Acompanhamos decisões críticas para proteger intenção, prazo e acabamento."],
];

const services = [
  {
    icon: HouseLine,
    title: "Arquitetura",
    text: "Projeto completo para casas novas, reformas amplas e residências de campo.",
  },
  {
    icon: PenNib,
    title: "Interiores",
    text: "Marcenaria, materiais, iluminação, mobiliário e atmosfera alinhados ao projeto.",
  },
  {
    icon: Feather,
    title: "Acompanhamento",
    text: "Apoio em obra para decisões críticas, acabamentos e leitura de execução.",
  },
];

export default function Landing01FlagshipPhone() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const heroImageX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const heroImageY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const smallImageX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const smallImageY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <main
      className="overflow-hidden bg-[#f7f2e9] text-[#24211c]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <header className="grid gap-5 px-6 py-7 md:grid-cols-[1fr_1.4fr_1fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="col-span-full grid gap-4 rounded-[34px] bg-white/82 p-3 shadow-[0_24px_90px_rgba(60,48,34,0.08)] backdrop-blur md:grid-cols-[0.86fr_1.24fr_0.9fr] md:items-center"
        >
          <a href="#inicio" className="group grid grid-cols-[auto_1fr] items-center gap-4 rounded-[26px] bg-[#f7f2e9] p-3">
            <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-[#24211c] text-[#f7f2e9]">
              <span className="absolute inset-2 rounded-full border border-[#f7f2e9]/30 transition-transform duration-500 group-hover:scale-125" />
              <span className="relative text-sm font-semibold">OA</span>
            </span>
            <span>
              <span className="block text-lg font-semibold leading-none">Orla Arquitetura</span>
              <span className="mt-1 block text-xs text-[#8b8173]">residências autorais</span>
            </span>
          </a>

          <nav className="grid grid-cols-2 gap-2 text-sm text-[#71685d] md:flex md:items-center md:justify-center md:gap-2">
            {[
              ["Método", "#método"],
              ["Projetos", "#projetos"],
              ["Materiais", "#materiais"],
              ["Contato", "#contato"],
            ].map(([item, href]) => (
              <a
                key={item}
                href={href}
                className="group relative overflow-hidden rounded-full px-4 py-3 text-center transition-colors duration-300 hover:text-[#24211c]"
              >
                <span className="absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 bg-[#c5b8a6] transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">{item}</span>
              </a>
            ))}
          </nav>

          <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
            <div className="hidden rounded-[24px] bg-[#efe7da] px-4 py-3 text-right text-xs leading-5 text-[#766f63] lg:block">
              Projetos em São Paulo, litoral e campo.
            </div>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#24211c] px-5 py-4 text-sm text-[#f7f2e9] transition-transform duration-300 hover:-translate-y-1"
            >
              Abrir briefing
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </a>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="relative px-6 pb-28 pt-12 md:px-10 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="relative z-10 grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end"
        >
          <div>
            <p className="mb-8 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm text-[#766f63] shadow-[0_16px_50px_rgba(60,48,34,0.07)]">
              <SunHorizon size={17} />
              Arquitetura residencial autoral
            </p>
            <h1 className="text-[72px] font-semibold leading-[0.88] md:text-[138px] lg:text-[174px]">
              Casas para viver devagar.
            </h1>
          </div>

          <div className="grid gap-7 pb-2">
            <p className="text-2xl leading-9 text-[#5f594f] md:text-3xl md:leading-10">
              Projetos completos para residências de alto padrão, da leitura do terreno ao último detalhe de obra.
            </p>
            <a
              href="#projetos"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#24211c] px-6 py-4 text-[#f7f2e9] transition-transform duration-300 hover:-translate-y-1"
            >
              Conhecer projetos
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </a>
          </div>
        </motion.div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-[0.68fr_0.32fr]">
          <motion.figure
            style={{ x: heroImageX, y: heroImageY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative overflow-hidden rounded-[36px]"
          >
            <Image
              src={images.hero}
              width={1800}
              height={1180}
              alt="Sala ampla de casa contemporânea com jardim"
              className="h-[520px] w-full object-cover md:h-[720px]"
              priority
            />
            <figcaption className="absolute bottom-6 left-6 rounded-full bg-[#f7f2e9]/88 px-5 py-3 text-sm backdrop-blur">
              São Paulo · litoral · campo
            </figcaption>
          </motion.figure>

          <div className="grid gap-5">
            <motion.figure
              style={{ x: smallImageX, y: smallImageY }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="overflow-hidden rounded-[30px]"
            >
              <Image
                src={images.atrium}
                width={900}
                height={980}
                alt="Pátio interno iluminado em residência"
                className="h-[360px] w-full object-cover md:h-[470px]"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease }}
              className="rounded-[30px] bg-white p-7 shadow-[0_22px_70px_rgba(60,48,34,0.08)]"
            >
              <Compass size={30} />
              <p className="mt-9 text-4xl font-semibold leading-none">28 casas</p>
              <p className="mt-4 leading-7 text-[#766f63]">Projetadas com acompanhamento próximo de conceito, executivo e obra.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="método" className="px-6 py-28 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.38fr_0.62fr]">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease }}>
            <p className="text-sm text-[#766f63]">Nosso ponto de partida</p>
            <h2 className="mt-6 text-6xl font-semibold leading-none md:text-8xl">
              O terreno dita o tom.
            </h2>
          </motion.div>

          <div className="grid gap-10">
            {pillars.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                className="grid gap-5 border-t border-[#d8cdbd] pt-8 md:grid-cols-[0.16fr_0.34fr_0.5fr]"
              >
                <span className="text-[#9b8f7d]">{number}</span>
                <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
                <p className="text-lg leading-8 text-[#6f675b]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0 round 32px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 32px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[32px]"
        >
          <Image
            src={images.living}
            width={1800}
            height={980}
            alt="Interior de residência com pé-direito alto e mobiliário claro"
            className="h-[640px] w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 grid gap-5 rounded-[28px] bg-[#f7f2e9]/90 p-6 backdrop-blur md:grid-cols-[0.42fr_0.58fr] md:p-8">
            <p className="text-sm text-[#766f63]">Manifesto</p>
            <p className="text-3xl font-semibold leading-tight md:text-5xl">
              A melhor casa não tenta impressionar o tempo inteiro. Ela melhora o dia sem chamar atenção para si.
            </p>
          </div>
        </motion.figure>
      </section>

      <section id="projetos" className="px-6 py-28 md:px-10">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="grid gap-6 md:grid-cols-[0.55fr_0.45fr] md:items-end">
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">Projetos recentes</h2>
          <p className="text-xl leading-9 text-[#6f675b]">
            Cada residência parte de uma tensão diferente: privacidade urbana, vista aberta, rotina com crianças, descanso de fim de semana ou obra em lote estreito.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {projects.map(([title, text, src], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.75, delay: index * 0.06, ease }}
              className="group grid gap-7 rounded-[34px] bg-white p-4 shadow-[0_24px_80px_rgba(60,48,34,0.08)] md:grid-cols-[0.54fr_0.46fr] md:items-center md:p-6"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-[28px]">
                  <Image
                    src={src}
                    width={1500}
                    height={980}
                    alt={`Projeto residencial ${title}`}
                    className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 md:p-10">
                <span className="text-sm text-[#9b8f7d]">0{index + 1}</span>
                <h3 className="mt-8 text-5xl font-semibold leading-none md:text-7xl">{title}</h3>
                <p className="mt-7 text-xl leading-9 text-[#6f675b]">{text}</p>
                <motion.a href="#contato" whileHover={{ x: 8 }} className="mt-10 inline-flex items-center gap-3 text-sm font-semibold">
                  Solicitar estudo parecido
                  <ArrowRight size={17} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="materiais" className="grid gap-16 px-6 py-28 md:px-10 lg:grid-cols-[0.46fr_0.54fr]">
        <div className="grid content-between gap-12">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <p className="inline-flex items-center gap-3 text-sm text-[#766f63]">
              <Leaf size={18} />
              Matéria e permanência
            </p>
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Nada entra só para decorar.</h2>
          </motion.div>
          <div className="grid gap-4">
            {["Pedra com textura natural", "Madeira quente e silenciosa", "Vidro para enquadrar paisagem", "Luz indireta em vez de excesso"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className="flex items-center justify-between rounded-full bg-white px-6 py-4 text-lg shadow-[0_14px_50px_rgba(60,48,34,0.06)]"
              >
                {item}
                <Sparkle size={18} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[38px]"
        >
          <Image
            src={images.stone}
            width={1500}
            height={1300}
            alt="Cozinha contemporânea com pedra natural e madeira"
            className="h-[720px] w-full object-cover"
          />
        </motion.figure>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <MapTrifold size={38} />
            <h2 className="mt-7 text-5xl font-semibold leading-none md:text-7xl">Processo claro, sem pressa falsa.</h2>
          </motion.div>

          <div className="relative grid gap-6">
            {process.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease }}
                className="grid gap-5 rounded-[28px] bg-[#efe7da] p-6 md:grid-cols-[0.25fr_0.75fr] md:p-8"
              >
                <div>
                  <span className="text-sm text-[#9b8f7d]">0{index + 1}</span>
                  <h3 className="mt-6 text-3xl font-semibold">{title}</h3>
                </div>
                <p className="text-xl leading-9 text-[#6f675b]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 px-6 py-28 md:px-10 lg:grid-cols-[0.5fr_0.5fr]">
        <motion.figure
          initial={{ opacity: 0, rotate: -1.8, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[36px]"
        >
          <Image
            src={images.stairs}
            width={1300}
            height={1500}
            alt="Escada escultural em casa contemporânea"
            className="h-[680px] w-full object-cover"
          />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0, rotate: 1.8, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="grid content-between rounded-[36px] bg-white p-8 shadow-[0_24px_80px_rgba(60,48,34,0.08)] md:p-12"
        >
          <Ruler size={40} />
          <blockquote className="mt-20 text-5xl font-semibold leading-tight md:text-7xl">
            “A casa ficou sofisticada sem virar vitrine. A gente reconhece nossa rotina em cada decisão.”
          </blockquote>
          <p className="mt-10 text-lg text-[#766f63]">Marina e André · Casa Jardim Interno</p>
        </motion.div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="rounded-[32px] bg-white p-8 shadow-[0_18px_70px_rgba(60,48,34,0.07)]"
            >
              <Icon size={36} />
              <h3 className="mt-16 text-4xl font-semibold">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#6f675b]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 pb-24 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[42px] bg-[#e7dccb] p-8 md:p-14"
        >
          <Image
            src={images.table}
            width={1500}
            height={900}
            alt="Mesa de jantar em residência clara e minimalista"
            className="absolute right-0 top-0 hidden h-full w-[44%] object-cover opacity-75 lg:block"
          />
          <div className="relative grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-sm text-[#766f63]">
                <DoorOpen size={18} />
                Próxima casa
              </p>
              <h2 className="mt-8 text-6xl font-semibold leading-none md:text-9xl">
                Vamos desenhar com calma.
              </h2>
            </div>
            <div className="rounded-[30px] bg-[#f7f2e9]/92 p-7 backdrop-blur">
              <p className="text-xl leading-9 text-[#5f594f]">
                Envie localização do terreno, momento da obra e o que você espera da casa. Retornamos com uma primeira leitura de caminho, prazo e escopo.
              </p>
              <a
                href="mailto:contato@orlaarquitetura.com"
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#24211c] px-6 py-4 text-[#f7f2e9] transition-transform duration-300 hover:-translate-y-1"
              >
                Enviar briefing
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-8 pt-10 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[42px] bg-[#24211c] p-6 text-[#f7f2e9] md:p-10"
        >
          <div className="absolute -right-20 -top-24 hidden size-72 rounded-full border border-[#f7f2e9]/10 md:block" />
          <div className="absolute bottom-10 right-10 hidden h-44 w-44 rounded-[38px] border border-[#f7f2e9]/10 md:block" />
          <div className="relative grid gap-12 lg:grid-cols-[0.5fr_0.22fr_0.28fr]">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-[#f7f2e9]/10 px-4 py-2 text-sm text-[#d9cfbf]">
                <Compass size={17} />
                Orla Arquitetura · desde 2016
              </p>
              <h2 className="mt-10 text-6xl font-semibold leading-none md:text-8xl">
                Uma casa boa continua bonita quando ninguém está olhando.
              </h2>
            </div>

            <div className="grid content-between gap-8">
              <div className="grid gap-3 text-[#d9cfbf]">
                <a className="transition-colors hover:text-white" href="#método">
                  Método
                </a>
                <a className="transition-colors hover:text-white" href="#projetos">
                  Projetos
                </a>
                <a className="transition-colors hover:text-white" href="#materiais">
                  Materiais
                </a>
                <a className="transition-colors hover:text-white" href="#contato">
                  Contato
                </a>
              </div>
              <p className="text-sm leading-7 text-[#b9ad9c]">
                Arquitetura residencial, interiores integrados e acompanhamento de obra para cidade, praia e campo.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] bg-[#f7f2e9] p-6 text-[#24211c]">
                <p className="text-sm text-[#766f63]">Próximo passo</p>
                <p className="mt-5 text-3xl font-semibold leading-tight">Envie o terreno, a rotina e o momento da obra.</p>
                <a
                  href="mailto:contato@orlaarquitetura.com"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#24211c] px-5 py-3 text-sm text-[#f7f2e9]"
                >
                  contato@orlaarquitetura.com
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-[#d9cfbf]">
                <span className="rounded-full bg-white/10 px-3 py-3">São Paulo</span>
                <span className="rounded-full bg-white/10 px-3 py-3">Litoral</span>
                <span className="rounded-full bg-white/10 px-3 py-3">Campo</span>
              </div>
            </div>
          </div>

          <div className="relative mt-14 grid gap-4 border-t border-white/10 pt-6 text-sm text-[#b9ad9c] md:grid-cols-[1fr_auto]">
            <span>© Orla Arquitetura. Residências autorais com desenho, luz e permanência.</span>
            <span>Instagram · Pinterest · ArchDaily</span>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
