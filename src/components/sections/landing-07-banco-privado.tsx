"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChartLineUp,
  Drop,
  Eye,
  FlowerLotus,
  Heartbeat,
  Needle,
  ShieldCheck,
  Sparkle,
  UserFocus,
  WaveSine,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=90",
  skin: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1500&q=90",
  clinic: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=90",
  serum: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1400&q=90",
  face: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1400&q=90",
  room: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1500&q=90",
  portrait: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1300&q=90",
  texture: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1400&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const protocol = [
  ["Leitura facial", "Proporção, expressão, textura, flacidez, histórico e rotina de pele."],
  ["Plano em fases", "O que tratar agora, o que esperar e como manter sem exagero."],
  ["Registro clínico", "Fotos, evolução, resposta da pele e ajustes documentados."],
  ["Manutenção", "Agenda de retorno para preservar naturalidade e segurança."],
];

const treatments = [
  { icon: Needle, title: "Injetáveis sutis", text: "Contorno, relaxamento e hidratação sem apagar expressão." },
  { icon: Drop, title: "Pele e textura", text: "Bioestimulação, lasers, peelings e rotina de barreira." },
  { icon: FlowerLotus, title: "Corpo", text: "Protocolos combinados para firmeza, contorno e qualidade de pele." },
  { icon: Heartbeat, title: "Longevidade", text: "Plano de manutenção para envelhecer com coerência." },
];

const months = [
  ["Mês 01", "Diagnóstico, fotos, rotina de pele e primeira intervenção conservadora."],
  ["Mês 02", "Resposta tecidual, ajuste de textura e estímulo gradual."],
  ["Mês 04", "Contorno, firmeza e refinamento de pontos de sombra."],
  ["Mês 06", "Manutenção, comparação clínica e plano de continuidade."],
];

function CTA({
  children,
  href = "#agenda",
  light = false,
}: {
  children: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1",
        light ? "bg-[#fffaf5] text-[#2a2420]" : "bg-[#2a2420] text-[#fffaf5]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </a>
  );
}

export default function Landing07BancoPrivado() {
  return (
    <main className="overflow-hidden bg-[#f5eee7] text-[#2a2420]">
      <header className="px-6 py-7 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-4 md:grid-cols-[0.32fr_0.38fr_0.3fr]"
        >
          <a href="#inicio" className="relative overflow-hidden rounded-[999px] bg-[#2a2420] px-6 py-5 text-[#fffaf5]">
            <span className="flex items-center justify-between">
              <span className="text-3xl font-semibold">Aura</span>
              <Sparkle size={22} />
            </span>
          </a>
          <nav className="grid grid-cols-2 gap-2 rounded-full bg-[#fffaf5] p-2 text-sm shadow-[0_18px_60px_rgba(54,40,30,0.08)] md:grid-cols-4">
            {[
              ["Método", "#metodo"],
              ["Protocolos", "#protocolos"],
              ["Evolução", "#evolucao"],
              ["Agenda", "#agenda"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-3 text-center transition-colors duration-300 hover:bg-[#eadfd4]">
                {label}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-full bg-[#e2d2c4] p-2 pl-5">
            <span className="text-sm text-[#6b5d53]">Consulta de 60 minutos</span>
            <CTA>Agendar</CTA>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-24 pt-12 md:px-10 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            <p className="inline-flex items-center gap-3 rounded-full bg-[#fffaf5] px-5 py-3 text-sm text-[#7a685c] shadow-[0_16px_55px_rgba(54,40,30,0.07)]">
              <UserFocus size={18} />
              Clínica de estética avançada
            </p>
            <h1 className="mt-10 text-[72px] font-semibold leading-[0.86] md:text-[142px] lg:text-[178px]">
              Naturalidade com método.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="grid gap-8"
          >
            <p className="text-2xl leading-10 text-[#66584e]">
              Planos faciais e corporais com diagnóstico clínico, sequência inteligente e resultados que parecem descanso,
              não intervenção.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTA>Começar avaliação</CTA>
              <CTA href="#metodo" light>
                Ver método
              </CTA>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-[0.26fr_0.48fr_0.26fr]">
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="overflow-hidden rounded-[999px_999px_30px_30px]"
          >
            <Image src={images.skin} width={900} height={1200} alt="Tratamento facial com toque delicado" className="h-[560px] w-full object-cover" />
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.24, ease }}
            className="relative overflow-hidden rounded-[42px]"
          >
            <Image src={images.hero} width={1600} height={1200} alt="Paciente em protocolo de estética facial" className="h-[700px] w-full object-cover" priority />
            <figcaption className="absolute bottom-6 left-6 right-6 rounded-[32px] bg-[#fffaf5]/92 p-6 backdrop-blur">
              <p className="text-sm text-[#7a685c]">Plano Aura</p>
              <p className="mt-2 text-3xl font-semibold leading-tight">Diagnóstico, protocolo e manutenção em uma única jornada.</p>
            </figcaption>
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="grid content-between rounded-[34px] bg-[#2a2420] p-8 text-[#fffaf5]"
          >
            <Eye size={34} />
            <div>
              <p className="text-5xl font-semibold leading-none">6 meses</p>
              <p className="mt-5 text-lg leading-8 text-[#dfd4cb]">para evoluir pele, contorno e expressão com calma clínica.</p>
              <div className="mt-8">
                <CTA light>Ver plano</CTA>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="metodo" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="grid gap-8 md:grid-cols-[0.54fr_0.46fr] md:items-end"
        >
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">A indicação muda quando o rosto é lido como conjunto.</h2>
          <div className="grid gap-6">
            <p className="text-xl leading-9 text-[#66584e]">
              Expressão, pele, idade, histórico, rotina e desejo precisam entrar na mesma conversa antes de qualquer
              procedimento.
            </p>
            <CTA>Agendar diagnóstico completo</CTA>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[34px] bg-[#d2c2b4]">
          {protocol.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease }}
              className="grid gap-5 bg-[#fffaf5] p-6 transition-colors duration-300 hover:bg-[#eadfd4] md:grid-cols-[0.14fr_0.3fr_0.56fr]"
            >
              <span className="text-[#8a7668]">0{index + 1}</span>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="text-lg leading-8 text-[#66584e]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="protocolos" className="px-6 py-24 md:px-10">
        <div className="grid gap-5 md:grid-cols-4">
          {treatments.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.62, delay: index * 0.07, ease }}
              whileHover={{ y: -8 }}
              className="rounded-[38px] bg-[#fffaf5] p-8 shadow-[0_18px_70px_rgba(54,40,30,0.06)]"
            >
              <Icon size={35} />
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#66584e]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-px bg-[#2a2420] md:grid-cols-[0.58fr_0.42fr]">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image src={images.clinic} width={1600} height={1050} alt="Clínica estética clara e premium" className="h-[680px] w-full object-cover" />
        </motion.figure>
        <div className="grid content-between bg-[#2a2420] p-8 text-[#fffaf5] md:p-12">
          <WaveSine size={42} />
          <div className="mt-24">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">Melhorar sem trocar de rosto.</h2>
            <p className="mt-8 text-xl leading-9 text-[#dfd4cb]">
              O objetivo não é parecer outra pessoa. É recuperar textura, contorno e descanso sem perder expressão.
            </p>
            <div className="mt-10">
              <CTA light>Conversar sobre naturalidade</CTA>
            </div>
          </div>
        </div>
      </section>

      <section id="evolucao" className="px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <ChartLineUp size={42} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Evolução em fases, não em sustos.</h2>
          </motion.div>
          <div className="grid gap-5">
            {months.map(([month, text], index) => (
              <motion.article
                key={month}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.58, delay: index * 0.06, ease }}
                className="grid gap-5 rounded-[30px] bg-[#fffaf5] p-6 md:grid-cols-[0.24fr_0.76fr]"
              >
                <h3 className="text-3xl font-semibold">{month}</h3>
                <p className="text-lg leading-8 text-[#66584e]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="rounded-[42px] bg-[#fffaf5] p-8 shadow-[0_20px_80px_rgba(54,40,30,0.07)] md:p-12"
        >
          <ShieldCheck size={42} />
          <blockquote className="mt-20 text-5xl font-semibold leading-tight md:text-7xl">
            “Nada parecia empurrado. O plano tinha critério, tempo e explicação.”
          </blockquote>
          <p className="mt-10 text-lg text-[#7a685c]">Camila Ferraz · plano facial de seis meses</p>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="overflow-hidden rounded-[42px]"
        >
          <Image src={images.face} width={1500} height={1000} alt="Rosto com acabamento natural e pele iluminada" className="h-[620px] w-full object-cover" />
        </motion.figure>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[46px]"
        >
          <Image src={images.room} width={1800} height={1050} alt="Spa e sala de protocolo estético" className="h-[650px] w-full object-cover" />
          <div className="absolute inset-x-6 bottom-6 grid gap-6 rounded-[36px] bg-[#fffaf5]/92 p-7 backdrop-blur md:grid-cols-[0.58fr_0.42fr] md:items-end">
            <div>
              <Sparkle size={32} />
              <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Consulta longa. Plano curto. Manutenção possível.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#66584e]">
                A melhor estética é a que cabe na vida real: agenda, orçamento, recuperação e desejo.
              </p>
              <div className="mt-6">
                <CTA>Solicitar avaliação</CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-5 md:grid-cols-[0.5fr_0.25fr_0.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[38px] bg-[#2a2420] p-8 text-[#fffaf5] md:p-10"
          >
            <CalendarCheck size={38} />
            <h2 className="mt-16 text-6xl font-semibold leading-none md:text-8xl">Formatos de entrada.</h2>
          </motion.div>
          {[
            ["Avaliação facial", "Para quem quer entender prioridades antes de decidir."],
            ["Plano 180 dias", "Para textura, contorno e manutenção com acompanhamento."],
          ].map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.08, ease }}
              className="grid content-between rounded-[38px] bg-[#fffaf5] p-7"
            >
              <div>
                <h3 className="text-4xl font-semibold">{title}</h3>
                <p className="mt-8 text-lg leading-8 text-[#66584e]">{text}</p>
              </div>
              <div className="mt-10">
                <CTA>Agendar formato</CTA>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="agenda" className="px-6 pb-24 pt-10 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[46px] bg-[#dfd0c1] p-8 md:p-14"
        >
          <Image src={images.serum} width={1400} height={1000} alt="Sérum e textura de cuidado de pele" className="absolute right-0 top-0 hidden h-full w-[40%] object-cover opacity-80 lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-sm text-[#7a685c]">
                <CalendarCheck size={18} />
                Avaliação inicial
              </p>
              <h2 className="mt-8 text-6xl font-semibold leading-none md:text-9xl">Comece por uma leitura honesta.</h2>
            </div>
            <div className="rounded-[32px] bg-[#fffaf5]/94 p-7 backdrop-blur">
              <p className="text-xl leading-9 text-[#66584e]">
                Conte sua principal queixa, tratamentos anteriores e disponibilidade. A equipe retorna com horários e
                orientações para a consulta.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA>Marcar consulta</CTA>
                <CTA href="mailto:agenda@auraestetica.com" light>
                  Enviar e-mail
                </CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-8 pt-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[46px] bg-[#2a2420] p-7 text-[#fffaf5] md:p-10"
        >
          <div className="absolute -right-20 -top-20 hidden size-72 rounded-full border border-white/10 md:block" />
          <div className="relative grid gap-12 lg:grid-cols-[0.48fr_0.24fr_0.28fr]">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-[#dfd4cb]">
                <Sparkle size={17} />
                Aura Estética Avançada
              </p>
              <h2 className="mt-10 text-6xl font-semibold leading-none md:text-8xl">
                Melhorar sem apagar o que torna você reconhecível.
              </h2>
            </div>
            <div className="grid content-between gap-8">
              <div className="grid gap-3 text-[#dfd4cb]">
                <a className="transition-colors hover:text-white" href="#metodo">Método</a>
                <a className="transition-colors hover:text-white" href="#protocolos">Protocolos</a>
                <a className="transition-colors hover:text-white" href="#evolucao">Evolução</a>
                <a className="transition-colors hover:text-white" href="#agenda">Agenda</a>
              </div>
              <p className="text-sm leading-7 text-[#cfc1b7]">Face, pele, corpo e longevidade estética com consulta criteriosa.</p>
            </div>
            <div className="rounded-[32px] bg-[#fffaf5] p-6 text-[#2a2420]">
              <p className="text-sm text-[#7a685c]">Atendimento com hora marcada</p>
              <p className="mt-5 text-3xl font-semibold leading-tight">agenda@auraestetica.com</p>
              <p className="mt-7 leading-7 text-[#66584e]">Jardins · São Paulo · consulta inicial de 60 minutos.</p>
              <div className="mt-8">
                <CTA>Agendar avaliação</CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
