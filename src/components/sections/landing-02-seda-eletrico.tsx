"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bank,
  Briefcase,
  ChartLineUp,
  CheckCircle,
  CirclesFour,
  FileText,
  Fingerprint,
  Key,
  LockKey,
  Scales,
  ShieldCheck,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  boardroom: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=90",
  papers: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1500&q=90",
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=90",
  meeting: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=90",
  desk: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1500&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const mandates = [
  {
    icon: ChartLineUp,
    title: "Mapa de liquidez",
    text: "Organizamos caixa, compromissos e oportunidades para a família decidir sem urgência artificial.",
  },
  {
    icon: Scales,
    title: "Governança familiar",
    text: "Criamos ritos de decisão, papéis claros e documentação para reduzir ruído entre gerações.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção patrimonial",
    text: "Avaliamos riscos, estruturas societárias e exposição com discrição e leitura jurídica integrada.",
  },
];

const timeline = [
  ["Semana 01", "Inventário patrimonial", "Ativos, passivos, contratos, imóveis, empresas e documentos entram em uma visão única."],
  ["Semana 03", "Tese de preservação", "Definimos liquidez mínima, exposição aceitável e prioridades de sucessão."],
  ["Semana 06", "Comitê de família", "A decisão passa a ter pauta, critérios, responsáveis e registro."],
  ["Recorrente", "Acompanhamento reservado", "Atualização trimestral, cenários, alertas e execução com parceiros especialistas."],
];

const dossier = [
  "Holdings e participação societária",
  "Imóveis urbanos, rurais e internacionais",
  "Carteiras financeiras e liquidez",
  "Seguros, garantias e contingências",
  "Contratos relevantes e poderes",
  "Sucessão, doações e testamentos",
];

export default function Landing02SedaEletrico() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const folioX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const folioY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const stampX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const stampY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <main
      className="overflow-hidden bg-[#f3efe6] text-[#171713]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <header className="px-6 pt-7 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-4 md:grid-cols-[0.34fr_0.66fr]"
        >
          <a
            href="#inicio"
            className="group relative overflow-hidden bg-[#263325] p-6 text-[#fbf8f1] transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="absolute right-5 top-5 grid size-11 place-items-center bg-[#fbf8f1]/12 transition-transform duration-500 group-hover:rotate-45">
              <Bank size={20} weight="duotone" />
            </span>
            <span className="block text-xs text-[#d7d1c6]">Family office independente</span>
            <span className="mt-10 block text-5xl font-semibold leading-none md:text-6xl">Atto</span>
            <span className="mt-2 block text-xl text-[#d7d1c6]">Patrimônio</span>
          </a>

          <div className="grid gap-4">
            <div className="grid gap-4 bg-[#fbf8f1] p-4 shadow-[0_18px_70px_rgba(44,38,28,0.07)] md:grid-cols-[1fr_auto] md:items-center">
              <p className="text-sm leading-7 text-[#6c675c]">
                Mesa privada para governança, liquidez e sucessão de famílias empresárias.
              </p>
              <a
                href="#acesso"
                className="group inline-flex items-center justify-center gap-3 bg-[#171713] px-5 py-4 text-sm text-[#fbf8f1] transition-transform duration-300 hover:-translate-y-1"
              >
                Solicitar acesso
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
              </a>
            </div>

            <nav className="grid gap-px bg-[#d8cdbb] text-sm md:grid-cols-4">
              {[
                ["01", "Mandato", "#mandato"],
                ["02", "Método", "#metodo"],
                ["03", "Dossiê", "#dossie"],
                ["04", "Acesso", "#acesso"],
              ].map(([number, label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-[#f3efe6] px-4 py-4 transition-colors duration-300 hover:bg-[#e8dfcf]"
                >
                  <span className="text-xs text-[#9a907f]">{number}</span>
                  <span className="font-medium">{label}</span>
                  <span className="h-px w-8 origin-left scale-x-50 bg-[#777061] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-28 pt-14 md:px-10 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-[0.56fr_0.44fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            <p className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbf8f1] px-4 py-3 text-sm text-[#6c675c] shadow-[0_16px_50px_rgba(44,38,28,0.07)]">
              <Fingerprint size={18} />
              Consultoria patrimonial confidencial
            </p>
            <h1 className="mt-10 text-[66px] font-semibold leading-[0.88] md:text-[134px] lg:text-[168px]">
              Clareza antes da decisão.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="grid gap-8"
          >
            <p className="text-2xl leading-10 text-[#575247]">
              A Atto organiza patrimônio, risco, liquidez e sucessão para famílias empresárias que precisam decidir com
              menos ruído e mais contexto.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="#acesso"
                className="group inline-flex items-center justify-center gap-3 rounded-[8px] bg-[#171713] px-6 py-4 text-[#fbf8f1] transition-transform duration-300 hover:-translate-y-1"
              >
                Solicitar diagnóstico
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#fbf8f1] px-6 py-4 text-[#171713] shadow-[0_16px_55px_rgba(44,38,28,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                Ver método
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-18 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="grid gap-6">
            <motion.div
              style={{ x: stampX, y: stampY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="rounded-[12px] bg-[#263325] p-7 text-[#fbf8f1]"
            >
              <LockKey size={34} />
              <p className="mt-16 text-5xl font-semibold leading-none">132</p>
              <p className="mt-4 leading-7 text-[#d7d1c6]">núcleos familiares atendidos com governança reservada.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease }}
              className="rounded-[12px] bg-[#fbf8f1] p-7 shadow-[0_22px_70px_rgba(44,38,28,0.08)]"
            >
              <p className="text-sm text-[#777061]">Ritual de decisão</p>
              <p className="mt-9 text-3xl font-semibold leading-tight">
                Comitê curto, pauta objetiva, ata clara e próximo passo definido.
              </p>
            </motion.div>
          </div>

          <motion.figure
            style={{ x: folioX, y: folioY }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="relative overflow-hidden rounded-[14px] bg-[#d9d0c0] p-3"
          >
            <Image
              src={images.hero}
              width={1800}
              height={1120}
              alt="Escritório institucional com mesa de reunião reservada"
              className="h-[620px] w-full rounded-[10px] object-cover"
              priority
            />
            <figcaption className="absolute bottom-8 left-8 right-8 grid gap-4 rounded-[10px] bg-[#fbf8f1]/90 p-5 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm text-[#777061]">Painel consolidado</p>
                <p className="mt-1 text-2xl font-semibold">Liquidez, sucessão e risco em uma única leitura.</p>
              </div>
              <Key size={30} />
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section id="mandato" className="px-6 py-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="grid gap-7 md:grid-cols-[0.58fr_0.42fr] md:items-end"
        >
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">Não vendemos produto. Construímos critério.</h2>
          <p className="text-xl leading-9 text-[#575247]">
            O mandato começa pela leitura do conjunto: família, empresas, imóveis, caixa, contratos, apetite de risco e
            horizonte de sucessão.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {mandates.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="rounded-[12px] bg-[#fbf8f1] p-7 shadow-[0_18px_70px_rgba(44,38,28,0.07)]"
            >
              <Icon size={34} />
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#575247]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(7% 0 7% 0 round 14px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 14px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[14px]"
        >
          <Image
            src={images.boardroom}
            width={1800}
            height={1050}
            alt="Reunião executiva em sala reservada"
            className="h-[650px] w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 grid gap-5 rounded-[12px] bg-[#fbf8f1]/92 p-6 backdrop-blur md:grid-cols-[0.35fr_0.65fr] md:p-8">
            <p className="text-sm text-[#777061]">Tese Atto</p>
            <p className="text-3xl font-semibold leading-tight md:text-5xl">
              Patrimônio grande não precisa de mais relatórios. Precisa de decisões melhores, em menos mesas.
            </p>
          </div>
        </motion.figure>
      </section>

      <section id="metodo" className="grid gap-16 px-6 py-28 md:px-10 lg:grid-cols-[0.36fr_0.64fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.75, ease }}
          className="self-start"
        >
          <p className="inline-flex items-center gap-3 text-sm text-[#777061]">
            <CirclesFour size={18} />
            Método de trabalho
          </p>
          <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">
            A decisão ganha trilho.
          </h2>
        </motion.div>

        <div className="grid gap-5">
          {timeline.map(([period, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.07, ease }}
              className="grid gap-6 rounded-[12px] bg-[#e8dfcf] p-6 md:grid-cols-[0.2fr_0.3fr_0.5fr] md:p-8"
            >
              <span className="text-sm text-[#777061]">{period}</span>
              <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
              <p className="text-lg leading-8 text-[#575247]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="dossie" className="px-6 py-28 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.75, ease }}
            className="rounded-[14px] bg-[#fbf8f1] p-7 shadow-[0_22px_80px_rgba(44,38,28,0.08)] md:p-10"
          >
            <FileText size={38} />
            <h2 className="mt-20 text-6xl font-semibold leading-none md:text-8xl">Dossiê vivo, não pasta morta.</h2>
            <p className="mt-8 text-xl leading-9 text-[#575247]">
              A documentação fica legível, atualizada e pronta para conversas com advogados, contadores, gestores e
              membros da família.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {dossier.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05, ease }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[10px] bg-[#fbf8f1] p-5 shadow-[0_12px_45px_rgba(44,38,28,0.05)]"
              >
                <span className="text-sm text-[#9a907f]">0{index + 1}</span>
                <span className="text-xl font-semibold">{item}</span>
                <CheckCircle className="text-[#6f7f58] transition-transform duration-300 group-hover:scale-110" size={22} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 px-6 py-28 md:px-10 lg:grid-cols-[0.56fr_0.44fr]">
        <motion.figure
          initial={{ opacity: 0, rotate: -1.4, y: 32 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[14px]"
        >
          <Image
            src={images.papers}
            width={1500}
            height={1200}
            alt="Documentos financeiros organizados em mesa"
            className="h-[690px] w-full object-cover"
          />
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, rotate: 1.4, y: 32 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="grid content-between rounded-[14px] bg-[#263325] p-8 text-[#fbf8f1] md:p-12"
        >
          <Briefcase size={40} />
          <blockquote className="mt-24 text-5xl font-semibold leading-tight md:text-7xl">
            “Saímos de muitos relatórios soltos para uma visão real do que precisava ser decidido.”
          </blockquote>
          <p className="mt-10 text-lg text-[#d7d1c6]">Henrique Prado · grupo familiar industrial</p>
        </motion.div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.5fr_0.25fr_0.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[14px] bg-[#fbf8f1] p-8 shadow-[0_22px_80px_rgba(44,38,28,0.08)]"
          >
            <p className="text-sm text-[#777061]">Monitoramento contínuo</p>
            <h2 className="mt-10 text-6xl font-semibold leading-none md:text-8xl">O patrimônio muda. O mapa também.</h2>
          </motion.div>
          {[
            ["Trimestral", "Revisão de liquidez, riscos e decisões pendentes."],
            ["Sob demanda", "Cenários para venda, compra, sucessão ou reorganização."],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.08, ease }}
              className="rounded-[14px] bg-[#e8dfcf] p-7"
            >
              <p className="text-4xl font-semibold">{title}</p>
              <p className="mt-8 text-lg leading-8 text-[#575247]">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 px-6 py-28 md:px-10 lg:grid-cols-[0.43fr_0.57fr]">
        <div className="grid gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="overflow-hidden rounded-[14px]"
          >
            <Image
              src={images.building}
              width={1300}
              height={950}
              alt="Edifício corporativo visto de baixo"
              className="h-[390px] w-full object-cover"
            />
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="overflow-hidden rounded-[14px]"
          >
            <Image
              src={images.meeting}
              width={1300}
              height={950}
              alt="Reunião de estratégia em mesa executiva"
              className="h-[390px] w-full object-cover"
            />
          </motion.figure>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="rounded-[14px] bg-[#fbf8f1] p-8 shadow-[0_22px_80px_rgba(44,38,28,0.08)] md:p-12"
        >
          <ShieldCheck size={42} />
          <h2 className="mt-20 text-6xl font-semibold leading-none md:text-8xl">Discrição também é processo.</h2>
          <p className="mt-8 text-xl leading-9 text-[#575247]">
            Controle de acesso, versionamento, pauta objetiva e registro de decisões reduzem exposição e preservam
            confiança entre família e assessores.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["Sigilo", "Rastreio", "Contexto"].map((item) => (
              <span key={item} className="rounded-[8px] bg-[#f3efe6] px-4 py-4 text-center text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="acesso" className="px-6 pb-24 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[16px] bg-[#ded3c1] p-8 md:p-14"
        >
          <Image
            src={images.desk}
            width={1500}
            height={1000}
            alt="Mesa executiva com documentos de estratégia"
            className="absolute right-0 top-0 hidden h-full w-[44%] object-cover opacity-80 lg:block"
          />
          <div className="relative grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-sm text-[#6c675c]">
                <LockKey size={18} />
                Conversa reservada
              </p>
              <h2 className="mt-8 text-6xl font-semibold leading-none md:text-9xl">
                Comece pela fotografia do conjunto.
              </h2>
            </div>
            <div className="rounded-[12px] bg-[#fbf8f1]/94 p-7 backdrop-blur">
              <p className="text-xl leading-9 text-[#575247]">
                Conte a complexidade patrimonial, os envolvidos e o momento da família. A primeira reunião define escopo,
                confidencialidade e próximos documentos necessários.
              </p>
              <a
                href="mailto:reservado@attopatrimonio.com"
                className="group mt-10 inline-flex items-center gap-4 rounded-[8px] bg-[#263325] px-6 py-4 text-[#fbf8f1] transition-transform duration-300 hover:-translate-y-1"
              >
                Solicitar reunião
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
          className="relative overflow-hidden rounded-[16px] bg-[#171713] p-6 text-[#fbf8f1] md:p-10"
        >
          <div className="absolute right-8 top-8 hidden h-52 w-52 rounded-[50%] border border-white/10 md:block" />
          <div className="relative grid gap-12 lg:grid-cols-[0.48fr_0.24fr_0.28fr]">
            <div>
              <p className="inline-flex items-center gap-3 rounded-[8px] bg-white/10 px-4 py-2 text-sm text-[#d7d1c6]">
                <Bank size={17} />
                Atto Patrimônio
              </p>
              <h2 className="mt-10 text-6xl font-semibold leading-none md:text-8xl">
                Decidir bem também é preservar.
              </h2>
            </div>

            <div className="grid content-between gap-8">
              <div className="grid gap-3 text-[#d7d1c6]">
                <a className="transition-colors hover:text-white" href="#mandato">
                  Mandato
                </a>
                <a className="transition-colors hover:text-white" href="#metodo">
                  Método
                </a>
                <a className="transition-colors hover:text-white" href="#dossie">
                  Dossiê
                </a>
                <a className="transition-colors hover:text-white" href="#acesso">
                  Acesso reservado
                </a>
              </div>
              <p className="text-sm leading-7 text-[#b9b1a4]">
                Consultoria independente para famílias empresárias, holdings e núcleos patrimoniais complexos.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#fbf8f1] p-6 text-[#171713]">
              <p className="text-sm text-[#777061]">Canal reservado</p>
              <p className="mt-5 text-3xl font-semibold leading-tight">reservado@attopatrimonio.com</p>
              <p className="mt-8 leading-7 text-[#575247]">São Paulo · reuniões presenciais ou por sala segura.</p>
            </div>
          </div>

          <div className="relative mt-14 grid gap-4 border-t border-white/10 pt-6 text-sm text-[#b9b1a4] md:grid-cols-[1fr_auto]">
            <span>© Atto Patrimônio. Governança, liquidez e sucessão com confidencialidade.</span>
            <span>Independente · reservado · sem conflito de produto</span>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
