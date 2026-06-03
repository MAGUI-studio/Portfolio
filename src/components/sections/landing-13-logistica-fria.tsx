"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRinging,
  Check,
  ClipboardText,
  Clock,
  Gauge,
  MapPin,
  Package,
  Pulse,
  SealCheck,
  ShieldCheck,
  Snowflake,
  ThermometerCold,
  Truck,
  Warehouse,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  hero:
    "https://images.unsplash.com/photo-1721937127582-ed331de95a04?auto=format&fit=crop&fm=jpg&q=82&w=2200",
  dock:
    "https://images.unsplash.com/photo-1758789667762-56175fe4601c?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  pallets:
    "https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&fm=jpg&q=82&w=1400",
  warehouse:
    "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?auto=format&fit=crop&fm=jpg&q=82&w=1800",
};

const nav = [
  { label: "Telemetry", href: "#telemetry" },
  { label: "Chain", href: "#chain" },
  { label: "SLA", href: "#sla" },
  { label: "Evidence", href: "#evidence" },
  { label: "Contact", href: "#contact" },
];

const liveStats = [
  { value: "-18.4C", label: "current hold", tone: "text-[#a7f6ff]" },
  { value: "99.2%", label: "route visibility", tone: "text-white" },
  { value: "07", label: "active alerts", tone: "text-[#ffcc66]" },
];

const telemetry = [
  { label: "Sensor A12", value: "-18.4C", status: "stable" },
  { label: "Dock gate", value: "06m", status: "open" },
  { label: "Humidity", value: "41%", status: "normal" },
  { label: "Battery", value: "82%", status: "online" },
];

const chainSteps = [
  { icon: Warehouse, title: "Cold dock", detail: "Pre-cooling, staging and loading window." },
  { icon: Package, title: "Protected load", detail: "Packaging, seals, labels and sensor pairing." },
  { icon: Truck, title: "Controlled route", detail: "Live status, route events and exception playbooks." },
  { icon: SealCheck, title: "Proof delivery", detail: "Temperature curve, arrival status and acceptance record." },
];

const serviceLanes = [
  { title: "Pharma", temp: "2-8C", text: "Strict documentation, excursion alerts and priority response." },
  { title: "Frozen food", temp: "-18C", text: "High-volume routing with dock discipline and delivery windows." },
  { title: "Lab samples", temp: "15-25C", text: "Controlled ambient logistics with low tolerance to variation." },
];

const evidence = [
  "Curva termica por trecho e por remessa",
  "Log de abertura de porta, doca e parada",
  "Comprovante de coleta, transferencia e entrega",
  "Relatorio de desvio com causa e tratativa",
];

const credits = [
  { name: "Ashley", url: "https://unsplash.com/photos/a-warehouse-filled-with-lots-of-boxes-and-pallets-28b8xlTT5t4" },
  { name: "Theo Marjoram", url: "https://unsplash.com/photos/modern-industrial-building-exterior-with-loading-docks-V2GZeHNwP5w" },
  { name: "Theo Laflamme", url: "https://unsplash.com/photos/warehouse-loading-dock-with-stacked-wooden-pallets-EkhNNwpYuB4" },
  { name: "AFINIS Group", url: "https://unsplash.com/photos/a-large-warehouse-filled-with-lots-of-pallets-OnbSOhz0oig" },
];

function CTA({ children, href = "#contact", light = false }: { children: string; href?: string; light?: boolean }) {
  return (
    <a
      href={href}
      className={
        light
          ? "group inline-flex items-center justify-center gap-3 bg-[#d6fbff] px-7 py-5 text-sm font-semibold text-[#061118] transition duration-300 hover:-translate-y-1 hover:bg-white"
          : "group inline-flex items-center justify-center gap-3 bg-[#061118] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0e7991]"
      }
    >
      {children}
      <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function TempCurve() {
  const bars = [44, 39, 46, 41, 37, 43, 35, 32, 38, 34, 36, 31];

  return (
    <div className="mt-8">
      <div className="flex items-end gap-2 border-b border-white/14 pb-4">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="block flex-1 bg-[#d6fbff]"
            style={{ height: `${height * 2}px`, opacity: index === 6 ? 1 : 0.32 + index * 0.035 }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] uppercase text-white/38">
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
      </div>
    </div>
  );
}

export default function Landing13LogisticaFria() {
  return (
    <main className="overflow-hidden bg-[#eaf4f6] text-[#061118]">
      <header className="relative z-30 border-b border-white/10 bg-[#061118] px-5 py-5 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-5">
          <a href="#start" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-[#d6fbff] text-[#061118] transition duration-300 group-hover:-translate-y-0.5">
              <ThermometerCold size={24} weight="duotone" />
            </span>
            <span>
              <strong className="block text-lg font-semibold">Nivela Cold</strong>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/42">live cold chain ops</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 border border-white/10 bg-white/5 p-1 text-[10px] uppercase tracking-[0.18em] text-white/56 backdrop-blur md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-3 transition duration-300 hover:bg-[#d6fbff] hover:text-[#061118]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-[#061118] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6fbff] sm:inline-flex"
          >
            Route audit
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="start" className="relative bg-[#061118] px-5 py-8 text-white md:px-8 md:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(214,251,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(214,251,255,0.06)_1px,transparent_1px)] bg-[size:84px_84px]" />
        <div className="relative mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.55fr_0.45fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease }}
            className="relative min-h-[860px] overflow-hidden border border-white/10 p-7 md:p-10 lg:p-12"
          >
            <Image
              src={images.hero}
              alt="Corredor de armazem com empilhadeira e carga armazenada"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,24,0.98)_0%,rgba(6,17,24,0.78)_58%,rgba(6,17,24,0.28)_100%)]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between">
              <div>
                <p className="inline-flex items-center gap-3 bg-[#d6fbff] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#061118]">
                  <Snowflake size={17} weight="bold" />
                  Cold chain command center
                </p>

                <h1 className="mt-16 max-w-4xl text-6xl font-semibold leading-[0.92] md:text-8xl lg:text-[116px]">
                  Every degree has a timestamp.
                </h1>
              </div>

              <div>
                <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
                  <p className="text-lg leading-9 text-white/68 md:text-xl md:leading-10">
                    Operacao frigorificada para cargas sensiveis com telemetria, resposta a excecao e evidencia
                    pronta para auditoria.
                  </p>
                  <div className="grid gap-3">
                    <CTA light>Audit my route</CTA>
                    <a
                      href="#telemetry"
                      className="inline-flex items-center justify-center border border-white/18 bg-white/5 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#061118]"
                    >
                      View telemetry
                    </a>
                  </div>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-3">
                  {liveStats.map((item) => (
                    <div key={item.label} className="border border-white/12 bg-white/6 p-5 backdrop-blur">
                      <p className={`text-4xl font-semibold ${item.tone}`}>{item.value}</p>
                      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/42">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="grid gap-6"
          >
            <div className="border border-[#d6fbff]/20 bg-[#0a1a23] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.28)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6fbff]/64">shipment br-482</p>
                  <h2 className="mt-4 text-4xl font-semibold">Frozen load active</h2>
                </div>
                <span className="grid size-14 place-items-center bg-[#d6fbff] text-[#061118]">
                  <Pulse size={28} weight="bold" />
                </span>
              </div>

              <TempCurve />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {telemetry.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/36">{item.label}</p>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <strong className="text-3xl font-semibold text-[#d6fbff]">{item.value}</strong>
                      <span className="text-xs text-white/46">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.45fr_0.55fr]">
              <div className="bg-[#d6fbff] p-6 text-[#061118] md:p-8">
                <Gauge size={34} />
                <p className="mt-20 text-4xl font-semibold leading-tight">18 min dock exposure limit.</p>
              </div>
              <div className="relative min-h-[360px] overflow-hidden">
                <Image
                  src={images.dock}
                  alt="Centro logistico com docas de carga"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6fbff]/64">exception queue</p>
              <div className="mt-6 grid gap-3">
                {["Door open 06m", "Route delay 14m", "Sensor B low battery"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between gap-4 border border-white/10 p-4">
                    <span className="text-sm text-white/70">{item}</span>
                    <span className={index === 0 ? "text-sm text-[#ffcc66]" : "text-sm text-[#d6fbff]/70"}>live</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="telemetry" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0e7991]">telemetry layer</p>
              <h2 className="mt-7 text-5xl font-semibold leading-none md:text-7xl">
                A cadeia fria vista como sistema vivo.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#314950]/72">
              Temperatura, porta, doca, bateria, rota e aceite deixam de ser dados soltos. A torre transforma leitura em
              decisão operacional, com prioridade e responsavel.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.34fr_0.33fr_0.33fr]">
            <div className="bg-[#061118] p-8 text-white">
              <BellRinging size={38} className="text-[#d6fbff]" />
              <p className="mt-24 text-5xl font-semibold leading-none">07</p>
              <p className="mt-5 text-sm leading-7 text-white/58">alertas ativos filtrados por criticidade, rota e impacto no SLA.</p>
            </div>
            <div className="relative min-h-[480px] overflow-hidden lg:row-span-2">
              <Image
                src={images.warehouse}
                alt="Armazem industrial com empilhadeira e prateleiras"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0e7991]">warehouse sensor mesh</p>
                <p className="mt-5 text-2xl font-semibold">Dock, corridor and truck data in the same timeline.</p>
              </div>
            </div>
            <div className="bg-white p-8">
              <Clock size={38} className="text-[#0e7991]" />
              <p className="mt-24 text-5xl font-semibold leading-none">4h</p>
              <p className="mt-5 text-sm leading-7 text-[#314950]/68">janela de resposta para ocorrencias criticas em rotas prioritarias.</p>
            </div>
            <div className="bg-[#0e7991] p-8 text-white">
              <ClipboardText size={38} />
              <p className="mt-24 text-5xl font-semibold leading-none">100%</p>
              <p className="mt-5 text-sm leading-7 text-white/68">eventos com horario, responsavel e evidencia anexada.</p>
            </div>
            <div className="bg-[#d6fbff] p-8">
              <MapPin size={38} />
              <p className="mt-24 text-5xl font-semibold leading-none">12</p>
              <p className="mt-5 text-sm leading-7 text-[#314950]/72">pontos de risco mapeados entre coleta, transbordo e entrega.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chain" className="bg-[#061118] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6fbff]">chain map</p>
              <h2 className="mt-7 text-5xl font-semibold leading-none md:text-7xl">
                O risco esta entre uma etapa e outra.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/62">
              Cada handoff tem temperatura, tempo, documento e responsavel. A Nivela Cold desenha a rota como protocolo,
              nao como deslocamento.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-4">
            {chainSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.48, delay: index * 0.06, ease }}
                  className="relative min-h-[380px] border border-white/12 p-7"
                >
                  <div className="absolute left-0 top-12 hidden h-px w-full bg-[#d6fbff]/22 lg:block" />
                  <span className="relative z-10 grid size-16 place-items-center bg-[#d6fbff] text-[#061118]">
                    <Icon size={30} />
                  </span>
                  <span className="mt-16 block text-[11px] uppercase tracking-[0.22em] text-white/34">phase 0{index + 1}</span>
                  <h3 className="mt-5 text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">{item.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sla" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="bg-white p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0e7991]">SLA matrix</p>
            <h2 className="mt-8 text-5xl font-semibold leading-none md:text-6xl">
              Faixa termica muda o desenho da operacao.
            </h2>
            <p className="mt-8 text-lg leading-8 text-[#314950]/72">
              O SLA e definido por produto, risco e tolerancia. Assim a operacao nao trata vacina, pescado e amostra de
              laboratorio como se fossem a mesma carga.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceLanes.map((item) => (
              <article key={item.title} className="group overflow-hidden bg-[#061118] text-white">
                <div className="p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/38">{item.title}</p>
                  <p className="mt-16 text-6xl font-semibold text-[#d6fbff]">{item.temp}</p>
                  <p className="mt-8 text-sm leading-7 text-white/60">{item.text}</p>
                </div>
                <div className="h-2 bg-[#d6fbff] transition duration-300 group-hover:bg-[#ffcc66]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="bg-white px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.58fr_0.42fr]">
          <figure className="relative min-h-[640px] overflow-hidden">
            <Image
              src={images.pallets}
              alt="Doca de armazem com pallets empilhados"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,24,0.62),rgba(6,17,24,0.08))]" />
            <div className="absolute bottom-6 left-6 max-w-sm bg-[#d6fbff] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0e7991]">audit trail</p>
              <p className="mt-8 text-3xl font-semibold leading-tight">Toda excecao vira evidencia, nao historia contada depois.</p>
            </div>
          </figure>

          <div className="grid content-between gap-10 bg-[#0e7991] p-8 text-white md:p-10">
            <ShieldCheck size={44} />
            <div>
              <h2 className="text-5xl font-semibold leading-none md:text-6xl">
                Documento operacional pronto para cliente, qualidade e auditoria.
              </h2>
              <div className="mt-10 grid gap-3">
                {evidence.map((item) => (
                  <div key={item} className="flex items-center gap-4 border border-white/18 p-4">
                    <span className="grid size-8 shrink-0 place-items-center bg-white text-[#0e7991]">
                      <Check size={16} weight="bold" />
                    </span>
                    <p className="text-sm leading-6 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#061118] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6fbff]">route design</p>
            <h2 className="mt-8 text-6xl font-semibold leading-[0.96] md:text-8xl lg:text-[104px]">
              Antes da carga sair, a excecao ja precisa ter plano.
            </h2>
          </div>

          <div className="bg-[#d6fbff] p-8 text-[#061118] md:p-9">
            <Truck size={40} />
            <p className="mt-12 text-lg leading-8">
              Envie origem, destino, produto, faixa termica e janela. A equipe retorna com desenho operacional, riscos,
              evidencias e SLA recomendado.
            </p>
            <div className="mt-8">
              <CTA href="mailto:operacao@nivelacold.example">Cotar cadeia fria</CTA>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061118] px-5 pb-14 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.34fr_0.24fr_0.18fr_0.24fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center bg-[#d6fbff] text-[#061118]">
                <ThermometerCold size={24} weight="duotone" />
              </span>
              <div>
                <p className="text-xl font-semibold">Nivela Cold</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">logistica fria</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/54">
              Operacao frigorificada com telemetria, rastreabilidade e resposta para cargas sensiveis.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6fbff]">contact</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58">
              <p>operacao@nivelacold.example</p>
              <p>Rotas dedicadas e recorrentes</p>
              <p>Monitoramento 24/7</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6fbff]">nav</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="transition duration-300 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6fbff]">images</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
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
