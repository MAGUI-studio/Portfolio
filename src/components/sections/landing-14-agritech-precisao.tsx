"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChartLineUp,
  Check,
  CloudSun,
  Compass,
  Crop,
  Database,
  Drop,
  Gauge,
  MapTrifold,
  Plant,
  Broadcast,
  Scan,
  Tractor,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  hero:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  aerial:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  field:
    "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  tractor:
    "https://images.unsplash.com/photo-1605336270956-311c80d5a0d6?auto=format&fit=crop&fm=jpg&q=82&w=1500",
};

const nav = [
  { label: "Mapa", href: "#mapa" },
  { label: "Camadas", href: "#camadas" },
  { label: "Prescricao", href: "#prescricao" },
  { label: "Safra", href: "#safra" },
  { label: "Contato", href: "#contato" },
];

const indicators = [
  { value: "3cm", label: "resolucao para leitura de falha, vigor e variabilidade" },
  { value: "12", label: "camadas de dados combinadas por talhao" },
  { value: "30d", label: "ciclo de revisao para ajuste fino do manejo" },
];

const layers = [
  { icon: Broadcast, title: "Imagem recorrente", text: "NDVI, falhas, estresse e variabilidade entram em uma leitura visual simples para equipe de campo." },
  { icon: Drop, title: "Agua e solo", text: "Umidade, textura, compactacao e fertilidade ajudam a priorizar onde intervir primeiro." },
  { icon: CloudSun, title: "Janela climatica", text: "Risco operacional, chuva, vento e temperatura viram recomendacao para aplicacao e manejo." },
  { icon: Tractor, title: "Maquina conectada", text: "Arquivos de taxa variavel e mapas de operacao se encaixam no parque existente." },
];

const prescriptions = [
  ["01", "Diagnosticar", "Historico, produtividade, solo e imagem definem zonas de manejo por talhao."],
  ["02", "Priorizar", "O sistema separa urgencia agronomica de ruido visual para focar recurso onde ha retorno."],
  ["03", "Prescrever", "Mapas acionaveis para fertilidade, irrigacao, defensivo, replantio ou colheita."],
  ["04", "Comparar", "Resultado, custo por hectare e decisão tomada ficam registrados para a proxima safra."],
];

const cards = [
  { label: "Vigor baixo", value: "14.8 ha", tone: "bg-[#f5c86a]" },
  { label: "Deficit hidrico", value: "22%", tone: "bg-[#74c7d3]" },
  { label: "Aplicacao variavel", value: "R$ 184/ha", tone: "bg-[#c9e86b]" },
];

const outputs = [
  "Mapa de zonas de manejo por talhao",
  "Alertas de anomalia com prioridade agronomica",
  "Arquivo de prescricao para taxa variavel",
  "Resumo executivo de custo, risco e retorno",
];

const credits = [
  { name: "Ivan Bandura", url: "https://unsplash.com/photos/green-grass-field-during-daytime-7UuY8s6xF8U" },
  { name: "No one cares", url: "https://unsplash.com/photos/green-field-near-mountain-under-white-clouds-rDEOVtE7vOs" },
  { name: "Dan Meyers", url: "https://unsplash.com/photos/green-field-under-blue-sky-i2z8q8uJZFI" },
  { name: "John Deere", url: "https://unsplash.com/photos/green-tractor-on-brown-field-during-daytime-nF9G4ED0i4A" },
];

function CTA({ children, href = "#contato", light = false }: { children: string; href?: string; light?: boolean }) {
  return (
    <a
      href={href}
      className={
        light
          ? "group inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-semibold text-[#18230d] transition duration-300 hover:-translate-y-1 hover:bg-[#dff36d]"
          : "group inline-flex items-center justify-center gap-3 bg-[#18230d] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#526f1f]"
      }
    >
      {children}
      <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function FieldMap() {
  return (
    <div className="relative h-full min-h-[540px] overflow-hidden bg-[#18230d]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,243,109,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(223,243,109,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-[8%] top-[12%] h-[32%] w-[42%] rotate-[-8deg] border border-[#dff36d]/60 bg-[#dff36d]/18" />
      <div className="absolute right-[12%] top-[18%] h-[26%] w-[30%] rotate-[7deg] border border-[#74c7d3]/70 bg-[#74c7d3]/18" />
      <div className="absolute bottom-[12%] left-[18%] h-[34%] w-[58%] rotate-[3deg] border border-[#f5c86a]/70 bg-[#f5c86a]/16" />
      <div className="absolute left-[24%] top-[34%] size-4 rounded-full bg-[#dff36d] shadow-[0_0_0_12px_rgba(223,243,109,0.14)]" />
      <div className="absolute right-[28%] top-[48%] size-4 rounded-full bg-[#74c7d3] shadow-[0_0_0_12px_rgba(116,199,211,0.14)]" />
      <div className="absolute bottom-[26%] left-[44%] size-4 rounded-full bg-[#f5c86a] shadow-[0_0_0_12px_rgba(245,200,106,0.14)]" />
      <div className="absolute bottom-6 left-6 right-6 bg-white p-5 text-[#18230d]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526f1f]">talhao 07 / soja</p>
        <p className="mt-5 text-3xl font-semibold leading-tight">3 zonas de manejo detectadas antes da aplicacao.</p>
      </div>
    </div>
  );
}

export default function Landing14AgritechPrecisao() {
  return (
    <main className="overflow-hidden bg-[#f1f3e8] text-[#18230d]">
      <header className="relative z-30 border-b border-[#18230d]/10 bg-[#f1f3e8] px-5 py-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-5">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-[#18230d] text-[#dff36d] transition duration-300 group-hover:-translate-y-0.5">
              <Plant size={24} weight="duotone" />
            </span>
            <span>
              <strong className="block text-lg font-semibold">TerraMetria</strong>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#18230d]/48">precision agronomy</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 border border-[#18230d]/10 bg-white p-1 text-[10px] uppercase tracking-[0.18em] text-[#18230d]/58 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-3 transition duration-300 hover:bg-[#18230d] hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden items-center gap-3 bg-[#526f1f] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#18230d] sm:inline-flex"
          >
            Mapear fazenda
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="inicio" className="px-5 py-10 md:px-8 md:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.57fr_0.43fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease }}
            className="relative min-h-[860px] overflow-hidden p-7 text-white md:p-10 lg:p-12"
          >
            <Image
              src={images.hero}
              alt="Campo agricola visto ao nivel do horizonte"
              fill
              priority
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,35,13,0.92),rgba(24,35,13,0.54),rgba(24,35,13,0.18))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,35,13,0.1),rgba(24,35,13,0.84))]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-between">
              <div>
                <p className="inline-flex items-center gap-3 bg-[#dff36d] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#18230d]">
                  <Broadcast size={17} weight="bold" />
                  Dados de campo para decisão por talhao
                </p>
                <h1 className="mt-16 max-w-5xl text-6xl font-semibold leading-[0.92] md:text-8xl lg:text-[116px]">
                  A fazenda precisa enxergar antes de agir.
                </h1>
              </div>

              <div>
                <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
                  <p className="text-lg leading-9 text-white/72 md:text-xl md:leading-10">
                    Sensoriamento, mapas e recomendacoes agronomicas para reduzir desperdicio, antecipar risco e operar
                    talhao por talhao.
                  </p>
                  <div className="grid gap-3">
                    <CTA light>Solicitar mapa piloto</CTA>
                    <a
                      href="#mapa"
                      className="inline-flex items-center justify-center border border-white/24 bg-white/8 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#18230d]"
                    >
                      Ver leitura
                    </a>
                  </div>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-3">
                  {indicators.map((item) => (
                    <div key={item.label} className="border border-white/16 bg-[#18230d]/58 p-6 backdrop-blur">
                      <p className="text-5xl font-semibold leading-none text-[#dff36d]">{item.value}</p>
                      <p className="mt-8 text-sm leading-7 text-white/62">{item.label}</p>
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
            <FieldMap />

            <div className="grid gap-6 md:grid-cols-3">
              {cards.map((card) => (
                <div key={card.label} className={`${card.tone} p-6 text-[#18230d]`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">{card.label}</p>
                  <p className="mt-12 text-4xl font-semibold">{card.value}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="mapa" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526f1f]">mapa vivo</p>
            <h2 className="mt-7 text-5xl font-semibold leading-none md:text-7xl">
              O talhao deixa de ser uma media.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#46523a]/72">
              A leitura combina imagem, solo, clima, operacao e historico para separar variabilidade real de ruido
              visual.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {layers.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  className="min-h-[320px] bg-white p-8 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center bg-[#f1f3e8] text-[#526f1f]">
                      <Icon size={28} />
                    </span>
                    <span className="text-xs font-semibold text-[#18230d]/26">0{index + 1}</span>
                  </div>
                  <h3 className="mt-20 text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#46523a]/68">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="camadas" className="bg-[#18230d] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.6fr_0.4fr]">
          <figure className="relative min-h-[680px] overflow-hidden">
            <Image
              src={images.aerial}
              alt="Plantacao vista de cima com textura de lavoura"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#18230d]/28" />
            <div className="absolute left-6 top-6 bg-white p-6 text-[#18230d]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526f1f]">layer stack</p>
              <p className="mt-8 text-4xl font-semibold leading-none">12 camadas</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 bg-[#18230d]/74 p-5 backdrop-blur md:grid-cols-3">
              {["NDVI", "Solo", "Clima"].map((item) => (
                <div key={item} className="border border-white/14 p-4">
                  <p className="text-2xl font-semibold text-[#dff36d]">{item}</p>
                  <p className="mt-3 text-xs leading-5 text-white/56">camada sincronizada</p>
                </div>
              ))}
            </div>
          </figure>

          <div className="grid content-between gap-12 bg-[#dff36d] p-8 text-[#18230d] md:p-10">
            <Database size={42} />
            <div>
              <h2 className="text-5xl font-semibold leading-none md:text-6xl">
                O mapa e bonito. A recomendacao precisa pagar a conta.
              </h2>
              <p className="mt-8 text-lg leading-8 text-[#18230d]/72">
                Cada camada entra com uma pergunta: onde aplicar, onde esperar, onde investigar e onde reduzir custo sem
                perder produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prescricao" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526f1f]">prescricao variavel</p>
              <h2 className="mt-7 text-5xl font-semibold leading-none md:text-7xl">
                Da anomalia para a acao de campo.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#46523a]/72">
              A TerraMetria transforma leitura técnica em arquivo de operacao, plano de manejo e indicador de retorno.
            </p>
          </div>

          <div className="mt-16 grid gap-0 border-y border-[#18230d]/12">
            {prescriptions.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease }}
                className="grid gap-5 border-b border-[#18230d]/12 py-8 last:border-b-0 md:grid-cols-[0.14fr_0.34fr_0.52fr] md:items-center"
              >
                <span className="text-sm font-semibold text-[#526f1f]">{number}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-base leading-8 text-[#46523a]/70">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="safra" className="bg-white px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="grid content-between gap-14 bg-[#526f1f] p-8 text-white md:p-10">
            <ChartLineUp size={42} />
            <div>
              <h2 className="text-5xl font-semibold leading-none md:text-6xl">
                A proxima safra começa com memoria da anterior.
              </h2>
              <div className="mt-10 grid gap-3">
                {outputs.map((item) => (
                  <div key={item} className="flex items-center gap-4 border border-white/18 p-4">
                    <span className="grid size-8 shrink-0 place-items-center bg-white text-[#526f1f]">
                      <Check size={16} weight="bold" />
                    </span>
                    <p className="text-sm leading-6 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <figure className="relative min-h-[640px] overflow-hidden">
            <Image
              src={images.field}
              alt="Campo agricola em linhas sob luz natural"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-sm bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#526f1f]">caderno de safra</p>
              <p className="mt-8 text-3xl font-semibold leading-tight">Decisao, custo e resultado no mesmo historico.</p>
            </div>
          </figure>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-6 md:grid-cols-4">
          {[
            { icon: MapTrifold, title: "Zonas", text: "Agrupe variabilidade em unidades de manejo acionaveis." },
            { icon: Gauge, title: "Prioridade", text: "Separe alerta urgente de observação para proxima visita." },
            { icon: Scan, title: "Campo", text: "Direcione equipe, amostra e maquina para o ponto certo." },
            { icon: Crop, title: "Retorno", text: "Compare decisão, custo e produtividade por talhao." },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.48, delay: index * 0.05, ease }}
                className="bg-white p-7"
              >
                <Icon size={34} className="text-[#526f1f]" />
                <h3 className="mt-20 text-3xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#46523a]/68">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="contato" className="relative min-h-[760px] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <Image
          src={images.tractor}
          alt="Trator operando em area agricola"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#18230d]/76" />

        <div className="relative z-10 mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff36d]">mapa piloto</p>
            <h2 className="mt-8 text-6xl font-semibold leading-[0.96] md:text-8xl lg:text-[104px]">
              Comece pelo talhao que mais incomoda.
            </h2>
          </div>

          <div className="bg-[#dff36d] p-8 text-[#18230d] md:p-9">
            <Compass size={40} />
            <p className="mt-12 text-lg leading-8">
              Envie cultura, area, historico e principal duvida agronomica. A equipe retorna com escopo de leitura,
              camadas recomendadas e calendario de acompanhamento.
            </p>
            <div className="mt-8">
              <CTA href="mailto:campo@terrametria.example">Solicitar mapa piloto</CTA>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#18230d] px-5 py-14 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[0.34fr_0.24fr_0.18fr_0.24fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center bg-[#dff36d] text-[#18230d]">
                <Plant size={24} weight="duotone" />
              </span>
              <div>
                <p className="text-xl font-semibold">TerraMetria</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/42">agritech de precisão</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/54">
              Sensoriamento, mapas e recomendacoes agronomicas para propriedades que decidem talhao por talhao.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff36d]">contato</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58">
              <p>campo@terrametria.example</p>
              <p>Mapas piloto e safra completa</p>
              <p>Integração com maquinas</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff36d]">atalhos</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="transition duration-300 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff36d]">imagens</p>
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
