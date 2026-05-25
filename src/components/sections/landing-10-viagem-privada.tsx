"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BracketsCurly,
  Buildings,
  ChartLineUp,
  Cpu,
  Database,
  FlowArrow,
  Gauge,
  ShieldCheck,
  Strategy,
  UsersThree,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  room: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=90",
  board: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1700&q=90",
  desk: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
  factory: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1700&q=90",
  meeting: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
  server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
  notes: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=90",
};

const signals = [
  ["estoque sem leitura unica", "compras decide por planilha, venda decide por urgencia"],
  ["time operando no improviso", "processos criticos dependem de memoria individual"],
  ["dados sem dono claro", "indicadores existem, mas ninguem confia no numero final"],
  ["sistema caro, adocao baixa", "a ferramenta entrou antes da rotina estar madura"],
];

const pillars = [
  ["01", "Mapa operacional", "fluxos, gargalos, sistemas, donos e decisoes que realmente movem a empresa"],
  ["02", "Arquitetura de dados", "fontes, cadastros, integracoes e indicadores que precisam falar a mesma lingua"],
  ["03", "Sprint de implantacao", "mudancas pequenas o bastante para serem adotadas e fortes o bastante para destravar"],
  ["04", "Ritual de gestao", "rotinas, paineis, cadencia e governanca para a tecnologia virar comportamento"],
];

const stack = [
  "ERP e financeiro",
  "CRM e atendimento",
  "BI executivo",
  "automacoes internas",
  "cadastros mestres",
  "integracoes legadas",
  "governanca de acesso",
  "documentacao viva",
];

function CTA({
  children,
  href = "#diagnostico",
  invert = false,
}: {
  children: string;
  href?: string;
  invert?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-colors duration-300",
        invert ? "bg-[#f4f1ea] text-[#111111] hover:bg-white" : "bg-[#111111] text-[#f4f1ea] hover:bg-[#2b2b2b]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </motion.a>
  );
}

function Label({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={["text-xs font-semibold uppercase tracking-widest", light ? "text-white/48" : "text-[#77736b]"].join(" ")}>
      {children}
    </p>
  );
}

export default function Landing10ViagemPrivada() {
  return (
    <main className="overflow-hidden bg-[#f4f1ea] text-[#111111]">
      <header className="px-6 py-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="grid gap-6 border-b border-[#d9d2c5] pb-8 lg:grid-cols-[0.24fr_0.48fr_0.28fr] lg:items-center"
        >
          <a href="#inicio" className="flex items-center gap-4">
            <span className="grid size-14 place-items-center bg-[#111111] text-[#f4f1ea]">
              <BracketsCurly size={24} />
            </span>
            <span>
              <strong className="block text-2xl leading-none">Vector</strong>
              <span className="block text-xs uppercase tracking-widest text-[#77736b]">operating advisory</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#5f5a52]">
            {[
              ["Diagnostico", "#diagnostico"],
              ["Sistema", "#sistema"],
              ["Sprints", "#sprints"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="transition-colors duration-300 hover:text-[#111111]">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex lg:justify-end">
            <CTA>Mapear operacao</CTA>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-24 pt-14 md:px-12 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.62fr_0.38fr]">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, ease }}>
            <Label>consultoria para empresas em crescimento</Label>
            <h1 className="mt-8 text-[74px] font-semibold leading-[0.82] tracking-tight md:text-[156px]">
              A operacao precisa parar de depender de herois.
            </h1>
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
              <CTA>Agendar diagnostico</CTA>
              <p className="text-xl leading-9 text-[#5f5a52]">
                A Vector redesenha processos, dados e sistemas para empresas que cresceram rapido demais e agora precisam
                transformar esforco em rotina previsivel.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="relative"
          >
            <Image
              src={images.room}
              width={1300}
              height={1600}
              alt="Equipe analisando operacao em sala de reuniao"
              className="h-[720px] w-full object-cover grayscale"
              priority
            />
            <div className="absolute -bottom-10 left-8 right-8 bg-[#111111] p-8 text-[#f4f1ea] shadow-[0_28px_80px_rgba(0,0,0,0.2)]">
              <Gauge size={34} />
              <p className="mt-8 text-4xl font-semibold leading-none">Processo, dado e decisao no mesmo desenho.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="border-t border-[#111111] pt-8">
            <Label>o sintoma</Label>
            <p className="mt-12 text-2xl leading-10 text-[#5f5a52]">
              O problema raramente e falta de software. Quase sempre e falta de arquitetura para decidir.
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="text-[58px] font-semibold leading-[0.9] tracking-tight md:text-[118px]"
          >
            Quando tudo e urgente, ninguem sabe mais o que e importante.
          </motion.h2>
        </div>
      </section>

      <section id="diagnostico" className="px-6 py-28 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="relative">
            <Image src={images.board} width={1400} height={1200} alt="Workshop de diagnostico operacional" className="h-[680px] w-full object-cover grayscale" />
            <div className="absolute bottom-8 left-8 right-8 bg-[#f4f1ea] p-8">
              <Strategy size={36} />
              <p className="mt-8 text-5xl font-semibold leading-none">Diagnostico antes de ferramenta.</p>
            </div>
          </div>
          <div className="grid content-center gap-7">
            {signals.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease }}
                className="grid gap-6 border-b border-[#d1c8b9] pb-7 md:grid-cols-[0.18fr_0.82fr]"
              >
                <span className="text-sm text-[#77736b]">0{index + 1}</span>
                <div>
                  <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
                  <p className="mt-3 text-lg leading-8 text-[#5f5a52]">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="sistema" className="px-6 py-28 md:px-12">
        <div className="bg-[#111111] p-8 text-[#f4f1ea] md:p-14">
          <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <Cpu size={44} />
              <h2 className="mt-10 text-7xl font-semibold leading-none tracking-tight md:text-9xl">Sistema operacional da empresa.</h2>
              <p className="mt-8 text-xl leading-9 text-white/62">
                Nao criamos uma lista de projetos. Criamos uma ordem de funcionamento para a operacao.
              </p>
              <div className="mt-10">
                <CTA invert>Ver abordagem</CTA>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pillars.map(([number, title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.58, delay: index * 0.06, ease }}
                  className="border-t border-white/16 pt-6"
                >
                  <p className="text-sm text-white/38">{number}</p>
                  <h3 className="mt-12 text-4xl font-semibold leading-none">{title}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/58">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.25fr_0.25fr]">
          <Image src={images.factory} width={1500} height={1000} alt="Operacao industrial monitorada" className="h-[560px] w-full object-cover grayscale" />
          <div className="flex flex-col justify-between bg-[#e6ded1] p-9">
            <Database size={38} />
            <p className="text-5xl font-semibold leading-none">Dado util nasce perto da rotina.</p>
          </div>
          <div className="flex flex-col justify-end gap-8 border-y border-[#d1c8b9] py-9">
            <p className="text-xl leading-9 text-[#5f5a52]">
              Estoque, atendimento, vendas, financeiro e operacao precisam deixar de disputar versoes da verdade.
            </p>
            <CTA>Organizar dados</CTA>
          </div>
        </div>
      </section>

      <section id="sprints" className="px-6 py-28 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="flex flex-col justify-between gap-12 border-t border-[#111111] pt-8">
            <Label>sprints de implantacao</Label>
            <p className="text-2xl leading-10 text-[#5f5a52]">
              Mudanca boa nao entra como evento. Entra como ritmo, medicao e ajuste semanal.
            </p>
          </div>
          <div className="grid gap-10">
            {["semana 01: mapa e friccoes", "semana 02: prototipo operacional", "semana 03: rotina piloto", "semana 04: adocao e governanca"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className="grid gap-7 border-b border-[#d1c8b9] pb-9 md:grid-cols-[0.2fr_0.8fr]"
              >
                <p className="text-6xl font-semibold leading-none text-[#b9afa0]">0{index + 1}</p>
                <p className="text-4xl font-semibold leading-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="relative overflow-hidden bg-[#ded5c7] p-8 md:p-14">
          <FlowArrow className="absolute right-8 top-8 text-[#111111]/10" size={220} />
          <div className="relative grid gap-16 lg:grid-cols-[0.52fr_0.48fr]">
            <div>
              <Label>fluxo de decisao</Label>
              <h2 className="mt-8 text-7xl font-semibold leading-none tracking-tight md:text-[118px]">Da planilha solta ao painel que muda reuniao.</h2>
            </div>
            <div className="grid content-end gap-8">
              <p className="text-2xl leading-10 text-[#5f5a52]">
                O objetivo nao e ter dashboards bonitos. E fazer reunioes mais curtas, decisoes mais claras e menos
                retrabalho depois.
              </p>
              <CTA>Desenhar painel</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-8">
            <Image src={images.server} width={1200} height={760} alt="Infraestrutura de dados empresarial" className="h-[340px] w-full object-cover grayscale" />
            <Image src={images.desk} width={1200} height={760} alt="Escritorio de operacao empresarial" className="h-[340px] w-full object-cover grayscale" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {stack.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.035, ease }}
                className="flex items-end border-t border-[#d1c8b9] pt-6"
              >
                <p className="text-2xl font-semibold leading-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease }}
            className="bg-[#111111] p-10 text-[#f4f1ea] md:p-14"
          >
            <UsersThree size={42} />
            <blockquote className="mt-24 text-6xl font-semibold leading-tight tracking-tight md:text-8xl">
              &ldquo;A Vector colocou ordem sem vender uma revolucao que o time nao conseguiria sustentar.&rdquo;
            </blockquote>
            <p className="mt-10 text-lg text-white/55">Marina Campos, diretora de operacoes</p>
          </motion.div>
          <div className="grid gap-8">
            {[
              ["17", "rotinas redesenhadas em uma operacao nacional"],
              ["31%", "menos retrabalho no fechamento gerencial"],
              ["4", "semanas para o primeiro piloto adotado"],
            ].map(([number, label]) => (
              <div key={label} className="border-l border-[#d1c8b9] py-8 pl-8">
                <p className="text-8xl font-semibold leading-none">{number}</p>
                <p className="mt-8 text-xl leading-8 text-[#5f5a52]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <ShieldCheck size={42} />
            <h2 className="mt-8 text-6xl font-semibold leading-none tracking-tight">O que nao fazemos.</h2>
          </div>
          <div className="grid gap-7">
            {[
              "nao indicamos sistema antes de entender a operacao",
              "nao criamos dashboard que ninguem usa na reuniao",
              "nao empilhamos automacao em cima de processo quebrado",
              "nao prometemos transformacao sem dono interno definido",
            ].map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                className="border-b border-[#d1c8b9] pb-7 text-4xl font-semibold leading-tight"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <Image src={images.meeting} width={1400} height={1100} alt="Reuniao executiva de alinhamento" className="h-[620px] w-full object-cover grayscale" />
          <div className="flex flex-col justify-between gap-12 border-y border-[#111111] py-10">
            <Buildings size={42} />
            <div>
              <Label>para quem faz sentido</Label>
              <h2 className="mt-8 text-7xl font-semibold leading-none tracking-tight md:text-9xl">
                Empresas que ja cresceram, mas ainda operam como se fossem pequenas.
              </h2>
            </div>
            <CTA>Conversar com a Vector</CTA>
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 pb-28 pt-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.82, ease }}
          className="relative overflow-hidden bg-[#111111] p-10 text-[#f4f1ea] md:p-16"
        >
          <ChartLineUp className="absolute right-10 top-10 text-white/10" size={190} />
          <div className="relative grid gap-16 lg:grid-cols-[0.62fr_0.38fr]">
            <div>
              <Label light>diagnostico inicial</Label>
              <h2 className="mt-8 text-[66px] font-semibold leading-[0.9] tracking-tight md:text-[132px]">
                Traga a operacao como ela esta. A gente organiza o caminho.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-9">
              <p className="text-2xl leading-10 text-white/62">
                A primeira conversa mapeia urgencias, sistemas atuais, capacidade do time e o melhor primeiro sprint.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTA invert>Agendar diagnostico</CTA>
                <CTA href="mailto:diagnostico@vectoradvisory.com" invert>
                  diagnostico@vectoradvisory.com
                </CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-10 md:px-12">
        <div className="grid gap-10 border-t border-[#111111] pt-10 lg:grid-cols-[0.44fr_0.28fr_0.28fr]">
          <div>
            <BracketsCurly size={34} />
            <p className="mt-8 text-7xl font-semibold leading-none tracking-tight">Vector</p>
          </div>
          <p className="text-lg leading-8 text-[#5f5a52]">
            Consultoria de processos, dados e implantacao para operacoes em escala.
          </p>
          <p className="text-lg leading-8 text-[#5f5a52] lg:text-right">
            Sao Paulo e remoto
            <br />
            diagnostico@vectoradvisory.com
          </p>
        </div>
      </footer>
    </main>
  );
}
