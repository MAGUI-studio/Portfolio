"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChartLineUp,
  Check,
  CompassTool,
  Factory,
  FileText,
  Gauge,
  Lightning,
  MapPinArea,
  ShieldCheck,
  SolarPanel,
  TrendUp,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  hero:
    "https://images.unsplash.com/photo-1745187794292-ba0014281746?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  roof:
    "https://images.unsplash.com/photo-1745321633881-d2d2218911bd?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  structure:
    "https://images.unsplash.com/photo-1745162451436-2593789f3c94?auto=format&fit=crop&fm=jpg&q=82&w=1400",
  panels:
    "https://images.unsplash.com/photo-1658298775754-5839ffd434cc?auto=format&fit=crop&fm=jpg&q=82&w=1600",
};

const nav = ["Diagnostico", "Plano", "Obra", "Performance", "Contato"];

const metrics = [
  { value: "1.84 MWp", label: "potencial tecnico validado em primeira leitura" },
  { value: "42 meses", label: "payback conservador com premissas abertas" },
  { value: "78%", label: "compensacao estimada no perfil atual de consumo" },
  { value: "0 parada", label: "implantacao faseada para planta em operacao" },
];

const diagnosis = [
  {
    icon: Gauge,
    title: "Carga antes de potencia",
    text: "Cruzamos faturas, demanda contratada, horario de ponta, sazonalidade e expansao prevista para dimensionar o sistema certo.",
  },
  {
    icon: MapPinArea,
    title: "Area com criterio tecnico",
    text: "Cobertura, solo, sombra, acesso, estrutura, seguranca e rotas de manutencao entram no estudo antes da proposta comercial.",
  },
  {
    icon: ShieldCheck,
    title: "Risco explicitado",
    text: "Conexao, protecao, homologacao, geracao esperada e sensibilidade financeira aparecem em linguagem executiva, sem caixa-preta.",
  },
];

const method = [
  ["01", "Auditoria energetica", "Contas, contratos, demanda, ponta e curva operacional viram uma linha-base confiavel."],
  ["02", "Levantamento de campo", "Area util, estrutura, sombreamento, acesso, drenagem e seguranca sao verificados com checklist tecnico."],
  ["03", "Cenario financeiro", "Capex, financiamento, locacao, opex, degradacao, risco regulatorio e retorno sao comparados lado a lado."],
  ["04", "Engenharia executiva", "Diagrama, protecoes, inversores, memoria de calculo e interfaces com manutencao saem antes da mobilizacao."],
  ["05", "Obra assistida", "Cronograma por zonas, janelas de acesso e rituais de seguranca reduzem interferencia na rotina industrial."],
  ["06", "Performance mensal", "Geracao, economia, disponibilidade, alertas e recomendacoes chegam em relatorio de decisao."],
];

const operations = [
  { icon: ChartLineUp, title: "Economia rastreavel", text: "Toda promessa vira indicador: geracao, compensacao, desvio, disponibilidade e economia liquida por ciclo." },
  { icon: CalendarCheck, title: "Rotina de manutencao", text: "Planos de limpeza, inspecao termografica, revisao eletrica e chamados com responsaveis definidos." },
  { icon: TrendUp, title: "Expansao sem retrabalho", text: "O desenho considera crescimento de carga, novos turnos e futuras etapas de investimento." },
];

const deliverables = [
  "Relatorio executivo para aprovacao da diretoria",
  "Mapa de riscos tecnico, financeiro e regulatorio",
  "Cronograma de implantacao por zona da planta",
  "Modelo de acompanhamento mensal de performance",
];

const credits = [
  { name: "Rafael Moreno", url: "https://unsplash.com/photos/solar-panels-cover-a-factory-roof-0koGZEQQ48Q" },
  { name: "Ben Issac", url: "https://unsplash.com/photos/solar-panels-cover-a-large-industrial-buildings-roof-NEIfsHMjHSQ" },
  { name: "Hasnan Monir", url: "https://unsplash.com/photos/solar-panels-are-installed-on-a-steel-framed-roof-ykHcpAhHcDQ" },
  { name: "Soren H", url: "https://unsplash.com/photos/solar-panels-on-a-roof-omfN1pW-n2Y" },
];

export default function Landing11EnergiaSolarIndustrial() {
  return (
    <main className="overflow-hidden bg-[#f3f7f2] text-[#0b1511]">
      <header className="relative z-30 border-b border-white/10 bg-[#0b1511] px-5 py-5 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-[#d7ff4f] text-[#0b1511] transition duration-300 group-hover:rotate-6">
              <SolarPanel size={23} weight="duotone" />
            </span>
            <span>
              <strong className="block text-lg font-semibold">Norte Solar</strong>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-white/62">industrial energy office</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 border border-white/12 bg-white/8 p-1 text-[10px] uppercase tracking-[0.22em] text-white/72 backdrop-blur md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-3 transition duration-300 hover:bg-white hover:text-[#0b1511]">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-[#0b1511] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d7ff4f] sm:inline-flex"
          >
            Agendar leitura
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[980px] text-white md:min-h-screen">
        <Image
          src={images.hero}
          alt="Vista aerea de telhado industrial coberto por paineis solares"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,9,0.94)_0%,rgba(5,12,9,0.68)_44%,rgba(5,12,9,0.15)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,9,0.2),rgba(5,12,9,0.86))]" />

        <div className="relative z-10 mx-auto flex min-h-[980px] max-w-[1500px] flex-col justify-end px-5 pb-8 pt-20 md:min-h-screen md:px-8 md:pb-10 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease }}
            className="max-w-5xl"
          >
            <p className="inline-flex items-center gap-3 bg-[#d7ff4f] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0b1511]">
              <Factory size={17} weight="bold" />
              Energia solar para industria com governanca
            </p>
            <h1 className="mt-8 max-w-4xl text-6xl font-semibold leading-[0.95] md:text-8xl lg:text-[118px]">
              Reduza energia como quem decide CAPEX.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74 md:text-xl md:leading-9">
              Estudo, engenharia e operacao para plantas industriais que precisam de retorno claro, risco mapeado e
              implantacao sem atropelar a rotina produtiva.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-3 bg-[#d7ff4f] px-7 py-5 text-sm font-semibold text-[#0b1511] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Solicitar diagnostico
                <ArrowRight size={17} />
              </a>
              <a
                href="#plano"
                className="inline-flex items-center justify-center gap-3 border border-white/24 bg-white/8 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0b1511]"
              >
                Ver metodo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease }}
            className="mt-16 grid border-y border-white/14 bg-white/8 backdrop-blur md:grid-cols-4"
          >
            {metrics.map((item) => (
              <div key={item.label} className="border-white/14 p-5 md:border-r md:p-7 last:md:border-r-0">
                <p className="text-4xl font-semibold leading-none text-white">{item.value}</p>
                <p className="mt-4 text-sm leading-6 text-white/58">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="diagnostico" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3c6a5b]">diagnostico</p>
            <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
              A placa e a ultima peca do projeto.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#33443d]/72">
              Antes de falar em potencia instalada, organizamos a decisao: consumo, area, conexao, seguranca, retorno e
              impacto operacional no mesmo mapa.
            </p>
          </div>

          <div className="grid gap-5">
            {diagnosis.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.26 }}
                  transition={{ duration: 0.52, delay: index * 0.06, ease }}
                  className="group grid gap-8 border border-[#0b1511]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0b1511]/30 md:grid-cols-[86px_1fr] md:p-8"
                >
                  <div className="flex items-center justify-between md:block">
                    <span className="grid size-16 place-items-center bg-[#0b1511] text-[#d7ff4f]">
                      <Icon size={30} />
                    </span>
                    <span className="text-xs font-semibold text-[#0b1511]/30 md:mt-20 md:block">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold md:text-4xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#33443d]/70">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="plano" className="bg-[#0b1511] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.54fr_0.46fr] lg:items-stretch">
          <div className="relative min-h-[640px] overflow-hidden">
            <Image
              src={images.roof}
              alt="Telhado industrial com linhas extensas de paineis solares"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0b1511]/18" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 bg-[#d7ff4f] p-5 text-[#0b1511] md:grid-cols-[0.4fr_0.6fr] md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em]">matriz de decisao</p>
              <p className="text-sm leading-7">
                Um documento para comparar investimento, risco, operacao e retorno antes de assinar contrato.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-14">
            <div>
              <div className="inline-flex size-16 items-center justify-center border border-white/16 text-[#d7ff4f]">
                <CompassTool size={34} />
              </div>
              <h2 className="mt-10 text-5xl font-semibold leading-none md:text-7xl">
                Engenharia que conversa com financeiro.
              </h2>
              <p className="mt-8 text-lg leading-8 text-white/64">
                A proposta deixa de ser um PDF comercial e vira uma decisao estruturada: cenarios, premissas,
                responsabilidades, interferencias de planta e criterio de aceite.
              </p>
            </div>

            <div className="grid gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-4 border border-white/12 p-4">
                  <span className="grid size-8 shrink-0 place-items-center bg-white text-[#0b1511]">
                    <Check size={16} weight="bold" />
                  </span>
                  <p className="text-sm leading-6 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="obra" className="px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 md:grid-cols-[0.48fr_0.52fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3c6a5b]">metodo</p>
              <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
                Seis passos. Nenhuma decisao no escuro.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#33443d]/72">
              O processo foi desenhado para reduzir incerteza tecnica e preservar a operacao da planta enquanto a nova
              infraestrutura entra em campo.
            </p>
          </div>

          <div className="mt-16 grid gap-0 border-y border-[#0b1511]/12">
            {method.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.45, delay: index * 0.035, ease }}
                className="grid gap-5 border-b border-[#0b1511]/12 py-7 last:border-b-0 md:grid-cols-[0.14fr_0.34fr_0.52fr] md:items-center"
              >
                <span className="text-sm font-semibold text-[#3c6a5b]">{number}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-base leading-8 text-[#33443d]/70">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="bg-[#d7ff4f] p-7 md:p-10">
            <FileText size={42} />
            <h2 className="mt-28 text-4xl font-semibold leading-tight md:text-6xl">
              Um estudo para aprovar investimento, nao para decorar reuniao.
            </h2>
          </div>

          <div className="relative min-h-[560px] overflow-hidden">
            <Image
              src={images.structure}
              alt="Estrutura metalica com paineis solares integrada ao edificio"
              fill
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,21,17,0.68),rgba(11,21,17,0.05))]" />
            <div className="absolute left-6 top-6 max-w-sm bg-white p-6 text-[#0b1511] md:left-8 md:top-8 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#3c6a5b]">visao de dono</p>
              <p className="mt-8 text-3xl font-semibold leading-tight">
                Premissas abertas, riscos nomeados e recomendacao objetiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="performance" className="bg-white px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3c6a5b]">
              <Lightning size={16} weight="bold" />
              performance continua
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-none md:text-7xl">
              A economia precisa continuar aparecendo no extrato.
            </h2>
          </div>

          <div className="grid gap-5">
            {operations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  className="grid gap-6 border border-[#0b1511]/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0b1511]/30 md:grid-cols-[78px_1fr] md:p-8"
                >
                  <span className="grid size-16 place-items-center bg-[#0b1511] text-[#d7ff4f]">
                    <Icon size={30} />
                  </span>
                  <div>
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[#33443d]/70">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="relative min-h-[760px] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <Image
          src={images.panels}
          alt="Paineis solares em detalhe sob luz natural"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1511]/72" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7ff4f]">proxima decisao</p>
            <h2 className="mt-6 max-w-5xl text-6xl font-semibold leading-[0.96] md:text-8xl lg:text-[104px]">
              Abra a conversa com dados, nao com promessa.
            </h2>
          </div>

          <div className="bg-[#d7ff4f] p-7 text-[#0b1511] md:p-9">
            <p className="text-lg leading-8">
              Envie uma conta de energia, area disponivel e objetivo de investimento. Em troca, voce recebe uma leitura
              inicial de potencial, riscos e caminho recomendado.
            </p>
            <a
              href="mailto:contato@nortesolar.example"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#0b1511] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#20372f]"
            >
              Solicitar diagnostico
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1511] px-5 py-14 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.34fr_0.28fr_0.2fr_0.18fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center bg-[#d7ff4f] text-[#0b1511]">
                <SolarPanel size={23} weight="duotone" />
              </span>
              <div>
                <p className="text-xl font-semibold">Norte Solar</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/44">energia industrial</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-7 text-white/54">
              Consultoria, engenharia e operacao para empresas que tratam energia como infraestrutura estrategica.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d7ff4f]">escritorio</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58">
              <p>Projetos em SP, PR, MG e SC</p>
              <p>contato@nortesolar.example</p>
              <p>Segunda a sexta, 9h as 18h</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d7ff4f]">atalhos</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition duration-300 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d7ff4f]">imagens</p>
            <div className="mt-5 grid gap-3 text-sm text-white/58">
              {credits.map((credit) => (
                <a key={credit.name} href={credit.url} className="transition duration-300 hover:text-white">
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
