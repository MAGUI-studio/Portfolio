"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Barcode,
  BookOpenText,
  BracketsCurly,
  ChartLineUp,
  CheckCircle,
  CursorClick,
  Fingerprint,
  Folders,
  Megaphone,
  PenNib,
  Sparkle,
  Strategy,
  Target,
} from "@phosphor-icons/react";
import { HeroButton, HeroEyebrow, HeroImage } from "@/components/sections/hero-shared";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  board: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=90",
  wall: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1500&q=90",
  desk: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=90",
  packaging: "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=1500&q=90",
  laptop: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=90",
  campaign: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1500&q=90",
  typography: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90",
};

const audit = [
  ["Nome", "A marca é lembrada ou precisa ser explicada toda vez?"],
  ["Oferta", "O que vocês vendem cabe em uma frase sem ficar menor?"],
  ["Percepção", "O preço parece coerente com o que o visual promete?"],
  ["Sistema", "A equipe consegue criar peças sem destruir a identidade?"],
  ["Digital", "O site conduz a decisão ou só mostra uma vitrine bonita?"],
];

const sprints = [
  {
    icon: Target,
    title: "Nitidez estratégica",
    text: "Posicionamento, promessa, público, argumento comercial e território verbal.",
  },
  {
    icon: Fingerprint,
    title: "Identidade proprietária",
    text: "Logo, paleta, tipografia, direção de arte e sistema visual sem enfeite vazio.",
  },
  {
    icon: CursorClick,
    title: "Presença que vende",
    text: "Site, apresentação, landing pages e materiais de aquisição com narrativa consistente.",
  },
];

const deliverables = [
  "Diagnóstico de percepção e concorrência",
  "Plataforma verbal da marca",
  "Identidade visual completa",
  "Direção fotográfica e motion guidelines",
  "Design system para campanhas e site",
  "Apresentação comercial editável",
  "Landing page de campanha",
  "Manual rápido para equipe interna",
];

const timeline = [
  ["01", "Imersão", "Entrevistas, auditoria visual, análise de concorrência e leitura da oferta atual."],
  ["02", "Direção", "Território verbal, tese da marca, mensagens-chave e arquitetura de argumentos."],
  ["03", "Sistema", "Identidade, grids, componentes, motion, biblioteca visual e regras de uso."],
  ["04", "Lançamento", "Site, apresentação, campanha inicial e handoff para o time comercial."],
];

const packages = [
  ["Reposicionamento", "Para empresas que já vendem bem, mas parecem menores do que são."],
  ["Marca + site", "Para uma presença nova, com narrativa, identidade e página de conversão."],
  ["Sistema de campanha", "Para times que precisam lançar ofertas sem perder consistência."],
];

function CTA({
  children,
  href = "#contato",
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
        "group inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1",
        light ? "bg-white text-black" : "bg-black text-white",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </a>
  );
}

export default function Landing06CafeAtelier() {
  return (
    <main className="bg-white text-[var(--ink)]">
      <header className="px-6 py-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-px bg-black md:grid-cols-[0.26fr_0.48fr_0.26fr]"
        >
          <a href="#inicio" className="group bg-white p-5">
            <span className="flex items-center justify-between">
              <span className="text-3xl font-semibold text-[var(--ink-strong)]">Brasa</span>
              <span className="grid size-11 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-12">
                <ArrowUpRight size={18} />
              </span>
            </span>
            <p className="mt-10 text-sm leading-6 text-[var(--muted-strong)]">
              Branding para empresas que precisam recuperar nitidez.
            </p>
          </a>

          <nav className="grid grid-cols-2 gap-px bg-black md:grid-cols-4">
            {[
              ["01", "Método", "#metodo"],
              ["02", "Sprints", "#sprints"],
              ["03", "Cases", "#cases"],
              ["04", "Contato", "#contato"],
            ].map(([number, label, href]) => (
              <a key={label} href={href} className="group bg-white p-5 transition-colors duration-300 hover:bg-[#f1f1f1]">
                <span className="text-xs text-[#777777]">{number}</span>
                <span className="mt-8 block text-xl font-semibold">{label}</span>
                <span className="mt-4 block h-px w-9 bg-black transition-transform duration-300 group-hover:translate-x-3" />
              </a>
            ))}
          </nav>

          <div className="grid bg-black p-5 text-white">
            <p className="text-sm leading-6 text-white/62">Projetos sob agenda para marcas que precisam vender com mais clareza.</p>
            <div className="mt-8 self-end">
              <CTA light>Solicitar apresentação</CTA>
            </div>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 py-16 md:px-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="space-y-8">
          <HeroEyebrow>Estúdio de branding</HeroEyebrow>
          <h1 className="text-6xl font-semibold leading-none text-[var(--ink-strong)] md:text-8xl">
            Marcas que ficam nítidas antes de ficarem bonitas.
          </h1>
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <HeroButton>Solicitar apresentação</HeroButton>
            <p className="text-xl leading-9 text-[var(--muted-strong)]">
              Estratégia, identidade e presença digital para empresas que já cresceram mais do que sua própria imagem.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-4 px-6 md:grid-cols-[0.25fr_0.5fr_0.25fr] md:px-10">
        {[13, 16, 17].map((variant, index) => (
          <motion.div key={variant} whileHover={{ y: -8 }} className="overflow-hidden rounded-lg">
            <HeroImage
              alt={`Campanha Brasa ${index + 1}`}
              variant={variant}
              className={`${index === 1 ? "h-[680px]" : "h-[420px]"} w-full object-cover`}
            />
          </motion.div>
        ))}
      </section>

      <section className="grid gap-px bg-black/10 md:grid-cols-4">
        {["Estratégia", "Identidade", "Sistema", "Site"].map((item, index) => (
          <div key={item} className="bg-white p-7">
            <p className="text-sm text-[var(--muted-strong)]">0{index + 1}</p>
            <p className="mt-8 text-3xl font-semibold text-[var(--ink-strong)]">{item}</p>
          </div>
        ))}
      </section>

      <section id="metodo" className="px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.43fr_0.57fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="self-start"
          >
            <p className="text-sm uppercase text-[#6b6b6b]">Diagnóstico</p>
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">O problema quase nunca é o logo.</h2>
            <p className="mt-8 text-xl leading-9 text-[#5f5f5f]">
              Normalmente a marca perdeu nitidez em uma dessas cinco camadas. A gente começa achando o ponto exato antes
              de desenhar qualquer coisa.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA>Solicitar auditoria</CTA>
              <CTA href="#sprints" light>
                Ver sprints
              </CTA>
            </div>
          </motion.div>

          <div className="grid gap-px bg-black">
            {audit.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease }}
                className="group grid gap-6 bg-white p-6 transition-colors duration-300 hover:bg-[#f1f1f1] md:grid-cols-[0.12fr_0.28fr_0.6fr]"
              >
                <span className="text-sm text-[#777777]">0{index + 1}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-lg leading-8 text-[#606060]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-black md:grid-cols-[0.58fr_0.42fr]">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="bg-black"
        >
          <Image src={images.board} width={1500} height={1050} alt="Equipe em workshop de marca" className="h-[680px] w-full object-cover" />
        </motion.figure>
        <div className="grid content-between bg-black p-8 text-white md:p-12">
          <BookOpenText size={42} />
          <div className="mt-24">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">A frase vem antes do grid.</h2>
            <p className="mt-8 text-xl leading-9 text-white/64">
              Se a equipe não sabe dizer por que a marca é diferente, o visual vira maquiagem cara.
            </p>
            <div className="mt-10">
              <CTA light>Agendar workshop</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="grid gap-8 md:grid-cols-[0.5fr_0.5fr] md:items-end"
        >
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">Da reunião confusa para um sistema que todos usam.</h2>
          <p className="text-xl leading-9 text-[#606060]">
            O projeto não termina em PDF bonito. Ele precisa chegar em vendas, atendimento, site, campanhas e apresentação
            comercial sem perder força.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-px bg-black md:grid-cols-4">
          {timeline.map(([number, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease }}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <span className="text-sm text-current/50">{number}</span>
              <h3 className="mt-24 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-current/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="sprints" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="grid gap-8 md:grid-cols-[0.55fr_0.45fr] md:items-end"
        >
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">Três sprints, uma marca pronta para uso.</h2>
          <div className="grid gap-6">
            <p className="text-xl leading-9 text-[#606060]">
              O processo é curto o suficiente para manter foco e profundo o suficiente para mudar percepção, discurso e
              vendas.
            </p>
            <CTA>Receber escopo</CTA>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {sprints.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="bg-[#f3f3f3] p-8"
            >
              <Icon size={36} />
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#606060]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-px bg-black md:grid-cols-[0.42fr_0.58fr]">
        <div className="grid content-between bg-[#f2f2f2] p-8 md:p-12">
          <Strategy size={42} />
          <div className="mt-24">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">O que muda depois do projeto?</h2>
            <p className="mt-8 text-xl leading-9 text-[#606060]">
              A equipe para de improvisar discurso. O comercial tem argumento. O marketing tem sistema. A diretoria tem
              uma marca que acompanha o preço.
            </p>
            <div className="mt-10">
              <CTA>Quero esse diagnóstico</CTA>
            </div>
          </div>
        </div>
        <Image src={images.campaign} width={1500} height={1000} alt="Planejamento de campanha e estratégia de marca" className="h-[680px] w-full object-cover" />
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="bg-[#f3f3f3] p-8 md:p-12"
          >
            <Barcode size={42} />
            <h2 className="mt-20 text-6xl font-semibold leading-none md:text-8xl">
              Sistema que aguenta lançamento, campanha e improviso.
            </h2>
            <p className="mt-8 text-xl leading-9 text-[#606060]">
              Entregamos uma biblioteca para a marca não depender de uma única peça perfeita.
            </p>
            <div className="mt-10">
              <CTA>Ver entregáveis</CTA>
            </div>
          </motion.div>

          <div className="grid gap-px bg-black">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04, ease }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-5 bg-white p-5"
              >
                <span className="text-sm text-[#777777]">0{index + 1}</span>
                <span className="text-xl font-semibold">{item}</span>
                <CheckCircle size={22} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-black md:grid-cols-[0.5fr_0.5fr]">
        <div className="grid gap-px bg-black">
          <Image src={images.wall} width={1200} height={800} alt="Parede com referências visuais de marca" className="h-[360px] w-full object-cover" />
          <Image src={images.packaging} width={1200} height={800} alt="Produto com identidade visual minimalista" className="h-[360px] w-full object-cover" />
        </div>
        <motion.div
          id="cases"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="bg-white p-8 md:p-12"
        >
          <Megaphone size={42} />
          <p className="mt-24 text-sm uppercase text-[#666666]">Case</p>
          <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">
            Uma rede premium de saúde saiu do “sofisticado genérico”.
          </h2>
          <p className="mt-8 text-xl leading-9 text-[#606060]">
            Reposicionamento, site e apresentação comercial transformaram um serviço técnico em uma marca fácil de
            defender em reunião.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTA>Quero um estudo</CTA>
            <CTA href="#contato" light>
              Ver processo
            </CTA>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-px bg-black md:grid-cols-[0.28fr_0.24fr_0.24fr_0.24fr]">
          <div className="bg-black p-8 text-white md:p-10">
            <ChartLineUp size={38} />
            <h2 className="mt-16 text-5xl font-semibold leading-none">Projetos que entram no negócio.</h2>
          </div>
          {[
            ["Reposicionamento", "Para empresas que cresceram, mas ainda se apresentam como pequenas."],
            ["Lançamento", "Para novas ofertas que precisam nascer com narrativa e sistema."],
            ["Maturidade", "Para times que já têm marca, mas perderam consistência no uso."],
          ].map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
              className="bg-white p-8"
            >
              <span className="text-sm text-[#777777]">0{index + 1}</span>
              <h3 className="mt-16 text-3xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#606060]">{text}</p>
              <div className="mt-8">
                <CTA>Discutir formato</CTA>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-px bg-black md:grid-cols-[0.55fr_0.45fr]">
        <Image src={images.typography} width={1500} height={1000} alt="Estúdio criativo com referências de identidade" className="h-[650px] w-full object-cover" />
        <div className="grid content-between bg-black p-8 text-white md:p-12">
          <Folders size={42} />
          <div className="mt-24">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">Handoff que a equipe realmente usa.</h2>
            <p className="mt-8 text-xl leading-9 text-white/62">
              Guias curtos, arquivos organizados, componentes editáveis e exemplos reais para vendas, conteúdo e tráfego.
            </p>
            <div className="mt-10">
              <CTA light>Ver pacote de handoff</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="bg-black p-8 text-white md:p-12"
          >
            <PenNib size={42} />
            <blockquote className="mt-20 text-5xl font-semibold leading-tight md:text-7xl">
              “A Brasa reorganizou a forma como a equipe inteira explicava a marca. O visual veio forte porque o discurso
              finalmente estava claro.”
            </blockquote>
            <p className="mt-10 text-lg text-white/60">Marina K., diretora de marketing</p>
          </motion.div>

          <div className="grid gap-px bg-black">
            {[
              ["18", "projetos selecionados por ano"],
              ["6", "diretores envolvidos no processo"],
              ["16", "semanas do diagnóstico ao site"],
            ].map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className="bg-[#f3f3f3] p-7"
              >
                <p className="text-7xl font-semibold leading-none">{number}</p>
                <p className="mt-5 text-lg leading-8 text-[#606060]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="bg-[#f3f3f3] p-8"
            >
              <span className="text-sm text-[#777777]">Formato 0{index + 1}</span>
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#606060]">{text}</p>
              <div className="mt-10">
                <CTA>Solicitar proposta</CTA>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 pb-24 pt-10 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="grid gap-px bg-black lg:grid-cols-[0.52fr_0.48fr]"
        >
          <div className="relative overflow-hidden bg-[#f1f1f1] p-8 md:p-12">
            <Image src={images.laptop} width={1200} height={900} alt="Site de marca em notebook" className="absolute bottom-0 right-0 hidden h-[52%] w-[48%] object-cover lg:block" />
            <Sparkle size={42} />
            <h2 className="mt-20 text-6xl font-semibold leading-none md:text-9xl">
              Vamos descobrir onde sua marca perdeu nitidez.
            </h2>
          </div>
          <div className="grid content-between bg-black p-8 text-white md:p-12">
            <div>
              <p className="text-sm text-white/55">Apresentação inicial</p>
              <p className="mt-6 text-3xl font-semibold leading-tight">
                Conte o momento da empresa, o que mudou no negócio e onde a marca começou a parecer pequena.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <CTA light>Solicitar apresentação</CTA>
              <CTA href="mailto:projetos@brasa.studio" light>
                projetos@brasa.studio
              </CTA>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="grid gap-px bg-black text-white md:grid-cols-[0.42fr_0.28fr_0.3fr]">
        <div className="bg-black p-8 md:p-10">
          <BracketsCurly size={34} />
          <p className="mt-10 text-7xl font-semibold leading-none md:text-8xl">Brasa</p>
          <p className="mt-8 text-xl leading-9 text-white/58">
            Estratégia, identidade e presença digital para marcas que precisam ficar impossíveis de confundir.
          </p>
        </div>
        <div className="bg-[#101010] p-8 text-white/58 md:p-10">
          <p className="text-white">Mapa</p>
          <div className="mt-8 grid gap-3">
            <a className="transition-colors hover:text-white" href="#metodo">Método</a>
            <a className="transition-colors hover:text-white" href="#sprints">Sprints</a>
            <a className="transition-colors hover:text-white" href="#cases">Cases</a>
            <a className="transition-colors hover:text-white" href="#contato">Contato</a>
          </div>
        </div>
        <div className="grid content-between bg-[#101010] p-8 text-white/58 md:p-10 md:text-right">
          <div>
            <p className="text-white">Projetos sob agenda</p>
            <p className="mt-5">São Paulo · remoto para Brasil e Europa</p>
            <p className="mt-5">projetos@brasa.studio</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 md:justify-end">
            <CTA light>Solicitar apresentação</CTA>
            <span className="inline-flex items-center px-5 py-4 text-sm text-white/50">Instagram · Behance</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
