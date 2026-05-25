"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Books,
  CalendarBlank,
  ChalkboardTeacher,
  Check,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Handshake,
  SealCheck,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  hero:
    "https://images.unsplash.com/photo-1758518729759-f580dc06770f?auto=format&fit=crop&fm=jpg&q=82&w=2200",
  mentoring:
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&fm=jpg&q=82&w=1600",
  workshop:
    "https://images.unsplash.com/photo-1758691736843-90f58dce465e?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  audience:
    "https://images.unsplash.com/photo-1768448808550-3148cce53a19?auto=format&fit=crop&fm=jpg&q=82&w=1300",
  board:
    "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&fm=jpg&q=82&w=1500",
};

const nav = [
  { label: "Programa", href: "#programa" },
  { label: "Metodo", href: "#metodo" },
  { label: "Agenda", href: "#agenda" },
  { label: "Prova", href: "#prova" },
  { label: "Contato", href: "#contato" },
];

const stats = [
  { value: "18", label: "executivos por turma para preservar profundidade" },
  { value: "3", label: "imersoes presenciais com preparacao guiada" },
  { value: "1:1", label: "devolutiva individual com mentor senior" },
];

const pillars = [
  {
    icon: Compass,
    title: "Agenda real",
    text: "O programa parte das decisoes abertas do participante: crescimento, pessoas, produto, mercado e narrativa executiva.",
  },
  {
    icon: ChalkboardTeacher,
    title: "Casos vivos",
    text: "Nada de aula decorativa. Cada encontro usa dilemas de empresas em movimento para treinar julgamento e repertorio.",
  },
  {
    icon: Handshake,
    title: "Sala curada",
    text: "Turmas menores, senioridade compativel e mediacao ativa para conversa franca entre pares.",
  },
];

const curriculum = [
  ["Modulo 01", "Leitura de contexto", "Como sintetizar mercado, pressao interna e risco antes de escolher uma direcao."],
  ["Modulo 02", "Decisao e trade-off", "Ferramentas para comparar alternativas quando tempo, dados e politica nunca estao perfeitos."],
  ["Modulo 03", "Narrativa executiva", "Como defender uma tese com clareza para conselho, diretoria, time e parceiros."],
  ["Modulo 04", "Ritual de aplicacao", "Plano de segunda-feira, compromissos de execucao e checkpoints apos a imersao."],
];

const agenda = [
  { day: "Dia 01", title: "Diagnostico de lideranca", detail: "Mapeamento de pressao, contexto e decisoes que nao podem esperar." },
  { day: "Dia 02", title: "Laboratorio de casos", detail: "Discussao em grupos pequenos com dilemas reais e provocacao de mentores." },
  { day: "Dia 03", title: "Mesa de decisao", detail: "Apresentacao da tese individual, feedback e plano de aplicacao." },
];

const outcomes = [
  "Mapa de prioridades para os proximos 90 dias",
  "Modelo de narrativa para decisoes complexas",
  "Checklist de trade-offs e riscos de execucao",
  "Mentoria individual com recomendacao objetiva",
  "Rede qualificada de pares para troca continua",
];

const credits = [
  { name: "Vitaly Gariev", url: "https://unsplash.com/photos/business-people-meeting-in-a-modern-office-lobby-ordRm3twjOg" },
  { name: "Christina @ wocintechchat.com", url: "https://unsplash.com/photos/two-women-sitting-beside-table-and-talking-LQ1t-8Ms5PY" },
  { name: "Vitaly Gariev", url: "https://unsplash.com/photos/diverse-team-collaborating-on-sticky-notes-Imk2h0pyOvo" },
  { name: "blue sky", url: "https://unsplash.com/photos/audience-attentively-listening-during-a-presentation-zgV0oyQJf-o" },
  { name: "Jo Szczepanska", url: "https://unsplash.com/photos/sticky-notes-on-corkboard-5aiRb5f464A" },
];

function CTA({ children, href = "#contato", tone = "dark" }: { children: string; href?: string; tone?: "dark" | "light" }) {
  return (
    <a
      href={href}
      className={
        tone === "dark"
          ? "group inline-flex items-center justify-center gap-3 bg-[#111111] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b5162d]"
          : "group inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-1 hover:bg-[#d7ff4f]"
      }
    >
      {children}
      <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default function Landing12EducacaoExecutiva() {
  return (
    <main className="overflow-hidden bg-[#f5f7f4] text-[#111111]">
      <header className="relative z-30 border-b border-[#111111]/10 bg-[#f5f7f4] px-5 py-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-[#111111] text-white transition duration-300 group-hover:-translate-y-0.5">
              <GraduationCap size={24} weight="duotone" />
            </span>
            <span>
              <strong className="block text-lg font-semibold">Prisma Fellows</strong>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-[#111111]/48">executive education</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 border border-[#111111]/10 bg-white p-1 text-[10px] uppercase tracking-[0.22em] text-[#111111]/58 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-3 transition duration-300 hover:bg-[#111111] hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden items-center gap-3 bg-[#b5162d] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#111111] sm:inline-flex"
          >
            Entrar na lista
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[1080px] overflow-hidden px-5 py-10 text-white md:px-8 md:py-14 lg:px-10">
        <Image
          src={images.hero}
          alt="Executivos reunidos em lobby moderno para discussao estrategica"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.9)_0%,rgba(12,12,12,0.62)_46%,rgba(12,12,12,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.08),rgba(12,12,12,0.82))]" />

        <div className="relative z-10 mx-auto min-h-[960px] max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease }}
            className="pt-12 md:pt-16"
          >
            <p className="inline-flex items-center gap-3 bg-[#d7ff4f] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111111]">
              <Books size={17} weight="bold" />
              Formacao executiva presencial
            </p>

            <h1 className="mt-16 max-w-5xl text-6xl font-semibold leading-[0.92] md:text-8xl lg:text-[128px]">
              Decidir melhor tambem se treina.
            </h1>

            <div className="mt-20 max-w-2xl">
              <p className="text-lg leading-9 text-white/72 md:text-xl md:leading-10">
                Um programa compacto para liderancas seniores praticarem julgamento, narrativa e trade-offs em uma sala
                curada, com casos vivos e mentoria aplicada.
              </p>
              <div className="mt-12 flex max-w-[380px] flex-col gap-4">
                <CTA tone="light">Solicitar convite</CTA>
                <a
                  href="#programa"
                  className="inline-flex items-center justify-center border border-white/24 bg-white/8 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#111111]"
                >
                  Ver programa
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.74, delay: 0.12, ease }}
            className="mt-32 grid max-w-[1280px] gap-6 border border-white/14 bg-[#111111]/42 p-6 backdrop-blur-md md:grid-cols-[1.12fr_1fr_1fr_1fr] md:p-8 lg:ml-auto"
          >
            <div className="bg-[#b5162d] p-7 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">cohort 2026</p>
              <p className="mt-16 text-3xl font-semibold leading-tight">Sao Paulo, turma presencial.</p>
            </div>

            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/14 bg-white/8 p-7 md:p-8">
                <p className="text-5xl font-semibold leading-none text-[#d7ff4f]">{stat.value}</p>
                <p className="mt-12 text-sm leading-7 text-white/62">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="programa" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b5162d]">programa</p>
            <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
              Uma sala para pensar com precisao.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#3d4541]/72">
              O desenho troca volume por curadoria: menos participantes, mais contexto, mais friccao boa e mais
              compromisso com aplicacao.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  className="group flex min-h-[420px] flex-col justify-between border border-[#111111]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b5162d]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center bg-[#f5f7f4] text-[#b5162d]">
                      <Icon size={28} />
                    </span>
                    <span className="text-xs font-semibold text-[#111111]/26">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[#3d4541]/68">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#111111] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7ff4f]">metodo</p>
              <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
                Teoria entra somente quando destrava decisao.
              </h2>
            </div>
            <figure className="relative min-h-[420px] overflow-hidden">
              <Image
                src={images.mentoring}
                alt="Mentoria executiva individual em ambiente corporativo"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="grid gap-0 border-y border-white/14">
            {curriculum.map(([module, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.46, delay: index * 0.045, ease }}
                className="grid gap-5 border-b border-white/14 py-8 last:border-b-0 md:grid-cols-[0.2fr_0.32fr_0.48fr] md:items-center"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7ff4f]">{module}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-white/62">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.64fr_0.36fr]">
          <figure className="relative min-h-[620px] overflow-hidden">
            <Image
              src={images.workshop}
              alt="Equipe executiva trabalhando com notas adesivas em quadro de estrategia"
              fill
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-md bg-[#d7ff4f] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">laboratorio de decisao</p>
              <p className="mt-6 text-3xl font-semibold leading-tight">
                Cada participante sai com uma tese, nao com uma pasta esquecida.
              </p>
            </div>
          </figure>

          <div className="grid content-between gap-12 bg-white p-8 md:p-10">
            <FileText size={42} className="text-[#b5162d]" />
            <div>
              <h2 className="text-5xl font-semibold leading-none md:text-6xl">
                O material e curto porque o trabalho e profundo.
              </h2>
              <p className="mt-7 text-lg leading-8 text-[#3d4541]/72">
                Leituras preparatorias, templates de decisao, perguntas de mentoria e um plano de aplicacao tornam a
                experiencia usavel fora da sala.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 md:grid-cols-[0.45fr_0.55fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b5162d]">agenda</p>
              <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
                Tres encontros para mudar a semana seguinte.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#3d4541]/72">
              A jornada combina preparacao individual, imersao presencial, discussao de casos e mentoria aplicada sem
              dispersar a agenda de quem lidera.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {agenda.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                className="bg-[#111111] p-7 text-white"
              >
                <div className="flex items-center justify-between">
                  <CalendarBlank size={30} className="text-[#d7ff4f]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">{item.day}</span>
                </div>
                <h3 className="mt-20 text-3xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/62">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="prova" className="bg-white px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.38fr_0.62fr]">
          <figure className="relative min-h-[620px] overflow-hidden">
            <Image
              src={images.audience}
              alt="Participantes acompanhando apresentacao em evento de desenvolvimento executivo"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="grid content-between gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b5162d]">entregaveis</p>
              <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
                Aprendizado medido pelo que muda na operacao.
              </h2>
            </div>

            <div className="grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-center gap-4 border border-[#111111]/10 p-5">
                  <span className="grid size-8 shrink-0 place-items-center bg-[#b5162d] text-white">
                    <Check size={16} weight="bold" />
                  </span>
                  <p className="text-base leading-7 text-[#3d4541]/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.32fr_0.36fr_0.32fr]">
          <div className="bg-[#b5162d] p-8 text-white md:p-10">
            <Clock size={40} />
            <p className="mt-28 text-4xl font-semibold leading-tight">12 horas presenciais, preparacao antes e mentoria depois.</p>
          </div>
          <figure className="relative min-h-[560px] overflow-hidden">
            <Image
              src={images.board}
              alt="Quadro de planejamento com notas adesivas em workshop"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </figure>
          <div className="bg-[#111111] p-8 text-white md:p-10">
            <SealCheck size={40} className="text-[#d7ff4f]" />
            <p className="mt-28 text-4xl font-semibold leading-tight">Turma aprovada por perfil, desafio e momento de carreira.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 pb-10 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 bg-[#111111] p-8 text-white md:p-12 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7ff4f]">proxima turma</p>
            <h2 className="mt-8 text-6xl font-semibold leading-[0.9] md:text-8xl">
              Entre na lista antes de abrir inscricoes.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/64">
              Conte seu desafio atual, senioridade e disponibilidade. A equipe retorna com formato, criterios de entrada
              e proximas datas.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <CTA href="mailto:admissoes@prismafellows.example" tone="light">
                Solicitar conversa
              </CTA>
              <a href="#agenda" className="inline-flex justify-center border border-white/18 px-7 py-5 text-sm font-semibold transition duration-300 hover:bg-white hover:text-[#111111]">
                Revisar agenda
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f5f7f4] px-5 py-14 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 border-t border-[#111111]/10 pt-10 lg:grid-cols-[0.34fr_0.24fr_0.2fr_0.22fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center bg-[#111111] text-white">
                <GraduationCap size={24} weight="duotone" />
              </span>
              <div>
                <p className="text-xl font-semibold">Prisma Fellows</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/44">educacao executiva</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-7 text-[#3d4541]/66">
              Programas compactos para liderancas que precisam decidir, alinhar e comunicar com mais criterio.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b5162d]">contato</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[#3d4541]/66">
              <p>admissoes@prismafellows.example</p>
              <p>Sao Paulo, Brasil</p>
              <p>Turmas trimestrais</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b5162d]">atalhos</p>
            <div className="mt-5 grid gap-3 text-sm text-[#3d4541]/66">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="transition duration-300 hover:text-[#111111]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b5162d]">imagens</p>
            <div className="mt-5 grid gap-3 text-sm text-[#3d4541]/66">
              {credits.map((credit, index) => (
                <a key={`${credit.name}-${index}`} href={credit.url} className="transition duration-300 hover:text-[#111111]">
                  Unsplash / {credit.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
