"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Buildings,
  Check,
  FileText,
  Gavel,
  Handshake,
  LockKey,
  MagnifyingGlass,
  Scales,
  ShieldCheck,
  Signature,
  Warning,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=90",
  board: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90",
  desk: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1500&q=90",
  city: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=90",
  library: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1500&q=90",
  meeting: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const docket = [
  ["Contrato crítico", "Cláusulas de saída, SLA, multa, reajuste e responsabilidade."],
  ["Sócios", "Quóruns, poderes, vesting, lock-up, não competição e deadlock."],
  ["Disputa", "Prova, tese, custo, risco reputacional e plano de negociação."],
  ["Governança", "Políticas de aprovação, alçadas, atas e rotina documental."],
];

const agenda = [
  ["00", "Receber contexto", "Operação, pessoas, documentos, urgência e impacto comercial."],
  ["24", "Separar risco real", "O que é jurídico, o que é negociação e o que é ruído interno."],
  ["48", "Entregar mapa", "Caminhos possíveis, trade-offs, documentos e próximo movimento."],
];

const practices = [
  { icon: FileText, title: "Contratos", text: "Minutas que viram ferramenta de gestão, não arquivo esquecido." },
  { icon: Handshake, title: "Societário", text: "Regras de convivência, saída e decisão entre sócios." },
  { icon: Gavel, title: "Disputas", text: "Estratégia antes da peça, com prova e objetivo de negócio." },
  { icon: ShieldCheck, title: "Risco", text: "Prevenção, alçadas e governança para crescer com menos susto." },
];

function Button({
  children,
  href = "#contato",
  inverse = false,
}: {
  children: string;
  href?: string;
  inverse?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center gap-3 px-5 py-4 text-sm font-medium transition-transform duration-300 hover:-translate-y-1",
        inverse ? "bg-[#f6efe3] text-[#101010]" : "bg-[#101010] text-[#f6efe3]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </a>
  );
}

export default function Landing05HeadphonesSignature() {
  return (
    <main className="overflow-hidden bg-[#f6efe3] text-[#101010]">
      <header className="grid gap-px bg-[#101010] md:grid-cols-[0.22fr_0.56fr_0.22fr]">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease }}
          className="bg-[#101010] p-6 text-[#f6efe3]"
        >
          <Scales size={30} />
          <span className="mt-12 block text-4xl font-semibold leading-none">Nexo</span>
          <span className="mt-2 block text-sm text-white/52">jurídico empresarial</span>
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
          className="grid grid-cols-2 gap-px bg-[#101010] md:grid-cols-4"
        >
          {[
            ["01", "Dossiê", "#dossie"],
            ["02", "Risco", "#risco"],
            ["03", "Método", "#metodo"],
            ["04", "Contato", "#contato"],
          ].map(([number, label, href]) => (
            <a key={label} href={href} className="group bg-[#f6efe3] p-5 transition-colors duration-300 hover:bg-[#ded2be]">
              <span className="text-xs text-[#756b5d]">{number}</span>
              <span className="mt-8 block text-xl font-semibold">{label}</span>
              <span className="mt-4 block h-px w-10 bg-[#101010] transition-transform duration-300 group-hover:translate-x-3" />
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
          className="grid bg-[#c8b89f] p-5"
        >
          <p className="text-sm leading-6">Mesa reservada para decisões com contrato, sócios ou disputa na linha.</p>
          <div className="mt-8">
            <Button>Enviar caso</Button>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="grid gap-px bg-[#101010] md:grid-cols-[0.58fr_0.42fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="bg-[#f6efe3] px-6 py-20 md:px-10 md:py-28"
        >
          <p className="inline-flex items-center gap-3 bg-[#101010] px-4 py-3 text-sm text-[#f6efe3]">
            <Warning size={18} />
            Direito empresarial sem teatro
          </p>
          <h1 className="mt-12 text-[70px] font-semibold leading-[0.82] md:text-[144px] lg:text-[190px]">
            Antes de assinar, veja o tabuleiro.
          </h1>
          <div className="mt-12 grid gap-5 md:grid-cols-[0.45fr_0.55fr]">
            <Button>Agendar leitura de risco</Button>
            <p className="text-xl leading-9 text-[#595144]">
              Para empresas que precisam decidir rápido, sem transformar contrato em surpresa, sócio em crise ou disputa
              em incêndio.
            </p>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.95, delay: 0.16, ease }}
          className="relative bg-[#101010]"
        >
          <Image
            src={images.hero}
            width={1500}
            height={1500}
            alt="Livros jurídicos e ambiente de escritório empresarial"
            className="h-[760px] w-full object-cover grayscale"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 grid gap-px bg-[#101010] md:grid-cols-3">
            {["Contrato", "Sócios", "Disputa"].map((item) => (
              <span key={item} className="bg-[#f6efe3]/92 p-4 text-sm backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </motion.figure>
      </section>

      <section id="dossie" className="grid gap-px bg-[#101010] md:grid-cols-[0.32fr_0.68fr]">
        <div className="bg-[#101010] p-6 text-[#f6efe3] md:p-10">
          <Briefcase size={36} />
          <h2 className="mt-16 text-6xl font-semibold leading-none md:text-8xl">Dossiê de decisão.</h2>
          <p className="mt-8 text-lg leading-8 text-white/58">
            Uma página para separar urgência, risco, alçada e próximo movimento.
          </p>
          <div className="mt-10">
            <Button inverse>Montar dossiê</Button>
          </div>
        </div>

        <div className="grid gap-px bg-[#101010]">
          {docket.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease }}
              className="grid gap-5 bg-[#f6efe3] p-6 transition-colors duration-300 hover:bg-[#ded2be] md:grid-cols-[0.12fr_0.32fr_0.56fr]"
            >
              <span className="text-[#756b5d]">0{index + 1}</span>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="text-lg leading-8 text-[#595144]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]"
        >
          <figure className="relative overflow-hidden">
            <Image src={images.board} width={1300} height={1100} alt="Executivos reunidos em mesa de decisão" className="h-[620px] w-full object-cover" />
            <figcaption className="absolute left-0 top-0 bg-[#101010] p-5 text-[#f6efe3]">
              Mesa de crise
            </figcaption>
          </figure>
          <div className="grid content-between bg-[#ded2be] p-8 md:p-12">
            <MagnifyingGlass size={42} />
            <div className="mt-20">
              <h2 className="text-6xl font-semibold leading-none md:text-8xl">O contrato é só a evidência mais visível.</h2>
              <p className="mt-8 text-xl leading-9 text-[#595144]">
                Muitas vezes o problema real está em incentivo, alçada, informação desalinhada ou falta de saída.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button>Revisar contrato</Button>
                <Button href="#metodo" inverse>Ver método</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="risco" className="grid gap-px bg-[#101010] md:grid-cols-4">
        {practices.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease }}
            className="group bg-[#f6efe3] p-7 transition-colors duration-300 hover:bg-[#101010] hover:text-[#f6efe3] md:p-9"
          >
            <Icon size={34} />
            <h3 className="mt-24 text-4xl font-semibold leading-tight">{title}</h3>
            <p className="mt-5 text-lg leading-8 text-current/65">{text}</p>
            <span className="mt-10 inline-flex items-center gap-3 text-sm">
              Solicitar frente
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </span>
          </motion.article>
        ))}
      </section>

      <section id="metodo" className="px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="bg-[#101010] p-8 text-[#f6efe3] md:p-12"
          >
            <Signature size={42} />
            <h2 className="mt-20 text-6xl font-semibold leading-none md:text-8xl">48 horas para trocar ansiedade por mapa.</h2>
            <p className="mt-8 text-xl leading-9 text-white/58">
              Em decisões sensíveis, a primeira entrega não é uma minuta. É clareza sobre caminho.
            </p>
            <div className="mt-10">
              <Button inverse>Começar diagnóstico</Button>
            </div>
          </motion.div>

          <div className="grid gap-px bg-[#101010]">
            {agenda.map(([hour, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.58, delay: index * 0.08, ease }}
                className="grid gap-5 bg-[#f6efe3] p-6 md:grid-cols-[0.18fr_0.3fr_0.52fr]"
              >
                <span className="text-5xl font-semibold">{hour}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-lg leading-8 text-[#595144]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#101010] md:grid-cols-[0.55fr_0.45fr]">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="bg-[#101010]"
        >
          <Image src={images.desk} width={1500} height={1200} alt="Documentos e contrato em mesa jurídica" className="h-[700px] w-full object-cover" />
        </motion.figure>
        <div className="grid content-between bg-[#f6efe3] p-8 md:p-12">
          <FileText size={42} />
          <div className="mt-20">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">Minuta boa antecipa conversa difícil.</h2>
            <p className="mt-8 text-xl leading-9 text-[#595144]">
              Saída, inadimplemento, confidencialidade, governança e responsabilidade precisam estar claros antes do
              desgaste.
            </p>
            <div className="mt-10">
              <Button>Enviar minuta</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <Buildings size={42} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Casos tratados como confidenciais.</h2>
          </motion.div>
          <div className="grid gap-px bg-[#101010]">
            {[
              "Acordo de sócios para grupo com quatro unidades operacionais",
              "Revisão de contratos B2B com receita recorrente nacional",
              "Estratégia de disputa preservando relacionamento comercial",
              "Reorganização societária antes de captação",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-5 bg-[#f6efe3] p-5 transition-colors duration-300 hover:bg-[#ded2be]"
              >
                <span className="text-[#756b5d]">0{index + 1}</span>
                <span className="text-xl font-semibold">{item}</span>
                <Check size={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#101010] md:grid-cols-[0.42fr_0.58fr]">
        <div className="bg-[#101010] p-8 text-[#f6efe3] md:p-12">
          <ShieldCheck size={42} />
          <blockquote className="mt-20 text-5xl font-semibold leading-tight md:text-7xl">
            “A sensação foi parar de apagar incêndio e começar a decidir com estrutura.”
          </blockquote>
          <p className="mt-10 text-lg text-white/52">Fabiana Couto · diretora executiva</p>
          <div className="mt-10">
            <Button inverse>Quero essa clareza</Button>
          </div>
        </div>
        <Image src={images.meeting} width={1500} height={1000} alt="Executivos alinhando decisão estratégica" className="h-[620px] w-full object-cover" />
      </section>

      <section id="contato" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="grid gap-px bg-[#101010] lg:grid-cols-[0.52fr_0.48fr]"
        >
          <div className="bg-[#ded2be] p-8 md:p-12">
            <LockKey size={42} />
            <h2 className="mt-20 text-6xl font-semibold leading-none md:text-9xl">Traga o problema cru.</h2>
            <p className="mt-8 text-xl leading-9 text-[#595144]">
              Não precisa chegar com tese pronta. Envie contrato, contexto, prazo e quem decide.
            </p>
          </div>
          <div className="grid content-between bg-[#101010] p-8 text-[#f6efe3] md:p-12">
            <div className="grid gap-4">
              <span className="text-sm text-white/52">Canal reservado</span>
              <p className="text-4xl font-semibold leading-tight">contato@nexojuridico.com</p>
              <p className="text-lg leading-8 text-white/58">São Paulo · reuniões presenciais ou sala segura.</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button inverse>Agendar reunião</Button>
              <Button href="mailto:contato@nexojuridico.com" inverse>Enviar e-mail</Button>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="grid gap-px bg-[#101010] text-[#f6efe3] md:grid-cols-[0.5fr_0.25fr_0.25fr]">
        <div className="bg-[#101010] p-7 md:p-10">
          <Scales size={30} />
          <h2 className="mt-10 text-5xl font-semibold leading-none md:text-7xl">Nexo Jurídico</h2>
        </div>
        <div className="bg-[#181818] p-7 text-white/58 md:p-10">
          Contratos<br />
          Societário<br />
          Disputas<br />
          Governança
        </div>
        <div className="bg-[#181818] p-7 text-white/58 md:p-10 md:text-right">
          Atendimento reservado<br />
          São Paulo<br />
          LinkedIn · Privacidade
        </div>
      </footer>
    </main>
  );
}
