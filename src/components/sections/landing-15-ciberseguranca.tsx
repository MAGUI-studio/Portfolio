"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Check,
  CloudCheck,
  Database,
  Eye,
  Fingerprint,
  LockKey,
  ShieldCheck,
  Siren,
  TerminalWindow,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  hero:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  server:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&fm=jpg&q=82&w=2200",
  code:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&fm=jpg&q=82&w=2000",
  desk:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&fm=jpg&q=82&w=2200",
};

const nav = [
  { label: "Superficie", href: "#superficie" },
  { label: "Rotina", href: "#rotina" },
  { label: "Incidente", href: "#incidente" },
  { label: "Contato", href: "#contato" },
];

const routines = [
  "MFA sem excecao permanente",
  "Backups testados",
  "Acesso privilegiado revisado",
  "Terceiros classificados",
  "Playbook simulado",
  "Logs com contexto",
];

const incidentSteps = [
  ["00:00", "Declarar", "Abrir sala, nomear donos e classificar impacto."],
  ["00:15", "Conter", "Isolar conta, endpoint, regra ou fornecedor afetado."],
  ["01:00", "Evidenciar", "Preservar linha do tempo, escopo e causa provavel."],
  ["04:00", "Comunicar", "Diretoria, juridico e operacao recebem a mesma verdade em linguagens diferentes."],
];

const credits = [
  { name: "Markus Spiske", url: "https://unsplash.com/photos/turned-on-monitoring-screen-iar-afB0QQw" },
  { name: "Taylor Vick", url: "https://unsplash.com/photos/black-server-rack-6MrXwZNTfCk" },
  { name: "Florian Olivo", url: "https://unsplash.com/photos/4hbJ-eymZ1o" },
  { name: "Christina @ wocintechchat.com", url: "https://unsplash.com/photos/person-using-macbook-pro-Hcfwew744z4" },
];

function CTA({ children, href = "#contato" }: { children: string; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 bg-[#f6ff00] px-8 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#050507] transition duration-300 hover:-translate-y-1 hover:bg-white"
    >
      {children}
      <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default function Landing15Ciberseguranca() {
  return (
    <main className="overflow-hidden bg-[#050507] text-white">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <header className="relative z-30 border-b border-white/10 bg-[#050507] px-5 py-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-5">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-[#f6ff00] text-[#050507]">
              <ShieldCheck size={24} weight="duotone" />
            </span>
            <span>
              <strong className="block text-xl font-semibold tracking-[-0.04em]">CifraSec</strong>
              <span className="block text-[10px] uppercase tracking-[0.26em] text-white/42">security readiness</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-white/50 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition duration-300 hover:text-[#f6ff00]">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6ff00] underline underline-offset-8 transition duration-300 hover:text-white">
            Agendar diagnostico
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[980px] px-5 py-10 md:px-8 md:py-14 lg:px-10">
        <Image
          src={images.hero}
          alt="Tela com codigo e interface de seguranca"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.96)_0%,rgba(5,5,7,0.78)_48%,rgba(5,5,7,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(5,5,7,1))]" />

        <div className="relative z-10 mx-auto flex min-h-[860px] max-w-[1600px] flex-col justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.78, ease }}>
            <p className="inline-flex items-center gap-3 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f6ff00] backdrop-blur">
              <TerminalWindow size={17} weight="bold" />
              corporate cyber resilience
            </p>

            <h1 className="mt-16 max-w-6xl text-6xl font-semibold leading-[0.88] tracking-[-0.075em] md:text-8xl lg:text-[142px]">
              A empresa segura nao e a que nunca falha.
              <span className="block text-[#f6ff00]">E a que sabe conter.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.74, delay: 0.12, ease }}
            className="max-w-5xl"
          >
            <div className="h-px bg-white/18" />
            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-xl leading-10 text-white/68">
                Governanca, monitoramento e resposta a incidente para proteger dados, continuidade e reputacao sem
                transformar seguranca em teatro de ferramenta.
              </p>
              <CTA>Comecar diagnostico</CTA>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="superficie" className="relative px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f6ff00]">superficie de ataque</p>
              <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                O risco nao mora no painel. Mora nas permissoes, excecoes e atalhos.
              </h2>
            </div>

            <div className="max-w-md pt-2">
              <p className="text-lg leading-9 text-white/60">
                A CifraSec le ativos, acessos, fornecedores, nuvem e continuidade como uma unica cadeia de impacto.
              </p>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-12">
            {[
              { icon: Fingerprint, title: "Identidade", text: "Contas legadas, privilegios e MFA deixam de ser detalhe tecnico." },
              { icon: Eye, title: "Exposicao", text: "Servicos publicados ganham dono, criticidade e prazo de saneamento." },
              { icon: CloudCheck, title: "Continuidade", text: "Backup so conta quando retorno, tempo e dependencia foram testados." },
              { icon: Database, title: "Dados", text: "Permissoes, classificacao e evidencia reduzem vazamento silencioso." },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease }}
                  className="flex flex-col border-t border-white/14 pt-8 md:flex-row md:items-start md:gap-12"
                >
                  <span className="text-7xl font-semibold leading-none text-white/16 md:w-56">0{index + 1}</span>
                  <div className="mt-8 flex-1 md:mt-0">
                    <div className="flex items-center gap-5">
                      <Icon size={34} className="text-[#f6ff00]" />
                      <h3 className="text-4xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                    </div>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative min-h-[820px] overflow-hidden px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <Image src={images.server} alt="Corredor de servidores em data center" fill sizes="100vw" className="object-cover opacity-48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.92),rgba(5,5,7,0.4))]" />
        <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-24">
          <p className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
            O alerta util ja chega com ativo, dono, impacto e proxima acao.
          </p>

          <div className="flex flex-col gap-5 text-[11px] uppercase tracking-[0.22em] text-white/48 md:flex-row md:flex-wrap">
            {["evento", "contexto", "prioridade", "contenção", "evidência", "comunicação"].map((item) => (
              <span key={item} className="border-b border-white/20 pb-3">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="rotina" className="bg-[#f6ff00] py-10 text-[#050507]">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10 whitespace-nowrap px-5 text-5xl font-semibold uppercase tracking-[-0.04em] md:text-7xl">
          {[...routines, ...routines].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
              {item}
              <span className="size-3 bg-[#050507]" />
            </span>
          ))}
        </div>
      </section>

      <section id="incidente" className="px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
              Nao se cria resposta no meio do ataque.
            </h2>
            <Siren size={72} className="text-[#f6ff00]" />
          </div>

          <div className="mt-24 border-l border-white/16">
            {incidentSteps.map(([time, title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
                className="relative flex flex-col gap-6 border-b border-white/12 py-10 pl-10 md:flex-row md:items-start md:gap-16"
              >
                <span className="absolute -left-[5px] top-12 size-2 bg-[#f6ff00]" />
                <p className="text-5xl font-semibold text-[#f6ff00] md:w-64">{time}</p>
                <div>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-50">
          <Image src={images.code} alt="Codigo em tela escura" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050507_0%,#050507_50%,rgba(5,5,7,0.72)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <LockKey size={56} className="text-[#f6ff00]" />
          <h2 className="mt-12 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Controle bom e aquele que continua funcionando depois da reuniao.
          </h2>
          <div className="mt-16 flex max-w-3xl flex-col gap-5">
            {routines.slice(0, 4).map((item) => (
              <div key={item} className="flex items-center gap-5 border-t border-white/14 pt-5">
                <Check size={20} weight="bold" className="text-[#f6ff00]" />
                <p className="text-lg text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative min-h-[780px] px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <Image src={images.desk} alt="Pessoa usando notebook em ambiente de trabalho" fill sizes="100vw" className="object-cover opacity-42" />
        <div className="absolute inset-0 bg-[#050507]/78" />
        <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Bug size={54} className="text-[#f6ff00]" />
            <h2 className="mt-12 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[108px]">
              Descubra onde a empresa falha antes que o incidente mostre.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg leading-9 text-white/66">
              Envie dominio, ambiente critico e principal preocupacao. A CifraSec retorna com escopo e proximos passos
              do diagnostico.
            </p>
            <div className="mt-10">
              <CTA href="mailto:risco@cifrasec.example">Agendar diagnostico</CTA>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050507] px-5 py-14 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center bg-[#f6ff00] text-[#050507]">
                <ShieldCheck size={24} weight="duotone" />
              </span>
              <div>
                <p className="text-xl font-semibold">CifraSec</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">security readiness</p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/54">
              Governanca, monitoramento e resposta para empresas que precisam proteger continuidade, dados e reputacao.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/58">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f6ff00]">contato</p>
            <p>risco@cifrasec.example</p>
            <p>Diagnostico em 72h</p>
            <p>SOC e resposta 24/7</p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/58">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f6ff00]">mapa</p>
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition duration-300 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f6ff00]">imagens</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/58">
              {credits.map((credit) => (
                <a key={credit.url} href={credit.url} className="transition duration-300 hover:text-white">
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
