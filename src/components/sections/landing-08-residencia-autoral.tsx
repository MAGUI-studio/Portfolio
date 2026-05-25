"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Buildings,
  Compass,
  DoorOpen,
  DownloadSimple,
  Eye,
  FilePdf,
  HouseLine,
  MapPin,
  Ruler,
  SealCheck,
  SketchLogo,
  TreeStructure,
} from "@phosphor-icons/react";

const images = {
  tower: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1700&q=90",
  exterior: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1700&q=90",
  lobby: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90",
  living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90",
  kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=90",
  stair: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1500&q=90",
  street: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1500&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const units = [
  ["Tipo A", "178 m²", "3 suítes", "Nascente", "2 vagas"],
  ["Tipo B", "214 m²", "3 suítes + office", "Jardim", "3 vagas"],
  ["Garden", "248 m²", "3 suítes", "Terraço", "3 vagas"],
  ["Penthouse", "312 m²", "4 suítes", "Duplex", "4 vagas"],
];

const floor = [
  ["Estar", "col-span-7 row-span-3", "Varanda integrada, jantar para oito e paredes livres para arte."],
  ["Cozinha", "col-span-5 row-span-2", "Ilha, despensa e circulação independente de serviço."],
  ["Master", "col-span-4 row-span-3", "Banho com luz natural e closet linear sem corredores longos."],
  ["Suítes", "col-span-4 row-span-2", "Dois dormitórios flexíveis para família, hóspedes ou trabalho."],
  ["Serviço", "col-span-4 row-span-2", "Lavanderia ventilada e dependência reversível."],
];

const surroundings = [
  ["03", "padaria, mercado e farmácia"],
  ["06", "parque, escola e clube"],
  ["08", "galerias, cafés e restaurantes"],
  ["12", "eixo Faria Lima e acesso ao centro"],
];

function CTA({
  children,
  href = "#book",
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
        light ? "bg-[#fffaf1] text-[#263022]" : "bg-[#263022] text-[#fffaf1]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </a>
  );
}

export default function Landing08ResidenciaAutoral() {
  return (
    <main className="overflow-hidden bg-[#f2eadc] text-[#263022]">
      <header className="px-6 py-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col gap-5 rounded-[34px] bg-[#fffaf1] p-4 shadow-[0_22px_80px_rgba(50,38,26,0.08)] md:flex-row md:items-center md:justify-between"
        >
          <a href="#inicio" className="group flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-[#263022] text-[#fffaf1] transition-transform duration-300 group-hover:rotate-12">
              <Buildings size={24} />
            </span>
            <span>
              <span className="block text-2xl font-semibold leading-none">Atlas Living</span>
              <span className="mt-1 block text-sm text-[#736a5d]">Horizonte 301 · Jardins</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-2 text-sm">
            {[
              ["Brochure", "#brochure"],
              ["Plantas", "#plantas"],
              ["Entorno", "#entorno"],
              ["Book", "#book"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full bg-[#f2eadc] px-4 py-3 transition-colors duration-300 hover:bg-[#dfd0bd]">
                {label}
              </a>
            ))}
          </nav>
          <CTA>Receber book</CTA>
        </motion.div>
      </header>

      <section id="inicio" className="relative px-6 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="absolute left-8 top-28 hidden text-[13vw] font-semibold leading-none text-[#263022]/[0.035] lg:block">
          301
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease }}
            className="grid content-between rounded-[38px] bg-[#263022] p-8 text-[#fffaf1] md:p-10"
          >
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-[#d8ccba]">
                <MapPin size={17} />
                Pré-lançamento reservado
              </p>
              <h1 className="mt-14 text-[68px] font-semibold leading-[0.86] md:text-[118px]">
                Horizonte 301.
              </h1>
            </div>
            <div className="mt-20">
              <p className="text-2xl leading-10 text-[#d8ccba]">
                Um residencial de baixa densidade para quem compra planta, endereço e permanência antes de comprar
                espetáculo.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTA light>Solicitar apresentação</CTA>
                <CTA href="#plantas" light>
                  Ver plantas
                </CTA>
              </div>
            </div>
          </motion.aside>

          <div className="grid gap-5 md:grid-cols-[0.56fr_0.44fr]">
            <motion.figure
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="relative overflow-hidden rounded-[42px]"
            >
              <Image src={images.tower} width={1300} height={1500} alt="Fachada residencial contemporânea" className="h-[760px] w-full object-cover" priority />
              <figcaption className="absolute bottom-5 left-5 right-5 rounded-[30px] bg-[#fffaf1]/92 p-5 backdrop-blur">
                <p className="text-sm text-[#736a5d]">24 unidades · 2 por andar</p>
                <p className="mt-1 text-2xl font-semibold">Plantas de 178 a 312 m².</p>
              </figcaption>
            </motion.figure>
            <div className="grid gap-5">
              <motion.figure
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
                className="overflow-hidden rounded-[34px]"
              >
                <Image src={images.lobby} width={900} height={900} alt="Lobby residencial com jardim" className="h-[360px] w-full object-cover" />
              </motion.figure>
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.26, ease }}
                className="grid content-between rounded-[34px] bg-[#d9cab8] p-8"
              >
                <Compass size={34} />
                <div>
                  <p className="text-5xl font-semibold leading-none">2028</p>
                  <p className="mt-5 text-lg leading-8 text-[#62594d]">entrega prevista, com apresentação individual de unidades.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="brochure" className="px-6 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[34px] bg-[#fffaf1] p-8"
          >
            <FilePdf size={42} />
            <h2 className="mt-16 text-5xl font-semibold leading-none">Ficha de lançamento</h2>
            <p className="mt-7 text-lg leading-8 text-[#62594d]">
              Uma leitura objetiva do produto antes da visita comercial.
            </p>
            <div className="mt-8">
              <CTA>Baixar resumo</CTA>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["24", "unidades"],
              ["178-312", "m² privativos"],
              ["2", "por andar"],
              ["4", "tipologias"],
            ].map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className="rounded-[34px] bg-[#fffaf1] p-7"
              >
                <p className="text-6xl font-semibold leading-none">{number}</p>
                <p className="mt-6 text-lg text-[#62594d]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="grid gap-7 lg:grid-cols-[0.58fr_0.42fr]">
          <motion.figure
            initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0 round 40px)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 40px)" }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.9, ease }}
            className="overflow-hidden rounded-[40px]"
          >
            <Image src={images.exterior} width={1600} height={1000} alt="Residência contemporânea com fachada clara" className="h-[620px] w-full object-cover" />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="grid content-between rounded-[40px] bg-[#263022] p-8 text-[#fffaf1] md:p-12"
          >
            <TreeStructure size={42} />
            <div className="mt-24">
              <h2 className="text-6xl font-semibold leading-none md:text-8xl">Térreo que parece casa.</h2>
              <p className="mt-8 text-xl leading-9 text-[#d8ccba]">
                Jardim, marquise baixa, banco de espera e lobby compacto para a chegada não parecer hotel.
              </p>
              <div className="mt-10">
                <CTA light>Ver implantação</CTA>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="plantas" className="px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <HouseLine size={42} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">A planta explicada por rotina.</h2>
            <p className="mt-8 text-xl leading-9 text-[#62594d]">
              O desenho abaixo transforma metragem em uso: onde chega, onde convive, onde guarda, onde descansa.
            </p>
            <div className="mt-10">
              <CTA>Receber plantas em PDF</CTA>
            </div>
          </div>
          <div className="grid min-h-[680px] grid-cols-12 grid-rows-7 gap-2 rounded-[34px] bg-[#263022] p-2">
            {floor.map(([title, span, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                className={`${span} rounded-[24px] bg-[#fffaf1] p-5 transition-colors duration-300 hover:bg-[#d9cab8]`}
              >
                <span className="text-sm text-[#736a5d]">0{index + 1}</span>
                <h3 className="mt-6 text-3xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#62594d]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-[38px] bg-[#c8b9a5]">
          <div className="grid bg-[#263022] p-6 text-[#fffaf1] md:grid-cols-[0.32fr_0.68fr]">
            <Ruler size={38} />
            <h2 className="text-5xl font-semibold leading-none md:text-7xl">Régua de unidades</h2>
          </div>
          {units.map(([type, area, rooms, position, parking], index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease }}
              className="grid gap-4 bg-[#fffaf1] p-5 text-lg md:grid-cols-[0.18fr_0.2fr_0.24fr_0.2fr_0.18fr]"
            >
              <strong>{type}</strong>
              <span>{area}</span>
              <span>{rooms}</span>
              <span>{position}</span>
              <span>{parking}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-px bg-[#263022] md:grid-cols-[0.5fr_0.5fr]">
        <div className="grid gap-px bg-[#263022]">
          <Image src={images.living} width={1400} height={900} alt="Living amplo de apartamento" className="h-[390px] w-full object-cover" />
          <Image src={images.kitchen} width={1400} height={900} alt="Cozinha integrada em apartamento" className="h-[390px] w-full object-cover" />
        </div>
        <div className="grid content-between bg-[#263022] p-8 text-[#fffaf1] md:p-12">
          <Eye size={42} />
          <div className="mt-24">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">Imagens para comparar decisão.</h2>
            <p className="mt-8 text-xl leading-9 text-[#d8ccba]">
              O book mostra sala, cozinha, varanda, suíte e térreo por uso, não só por render bonito.
            </p>
            <div className="mt-10">
              <CTA light>Ver galeria completa</CTA>
            </div>
          </div>
        </div>
      </section>

      <section id="entorno" className="px-6 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[38px] bg-[#d9cab8] p-8 md:p-12"
          >
            <Compass size={42} />
            <h2 className="mt-16 text-6xl font-semibold leading-none md:text-8xl">Mapa de rotina, não mapa turístico.</h2>
            <p className="mt-8 text-xl leading-9 text-[#62594d]">
              O endereço foi lido por tempo de deslocamento para o que sustenta a semana.
            </p>
          </motion.div>
          <div className="relative min-h-[600px] overflow-hidden rounded-[38px] bg-[#fffaf1] p-8">
            <Image src={images.street} width={1200} height={900} alt="Entorno urbano e arquitetura" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="relative grid h-full content-between gap-8">
              <div className="grid place-items-center">
                <div className="grid size-44 place-items-center rounded-full bg-[#263022] text-center text-[#fffaf1]">
                  <div>
                    <MapPin className="ml-[58px]" size={28} />
                    <p className="mt-3 text-xl font-semibold">Horizonte 301</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {surroundings.map(([time, text], index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease }}
                    className="rounded-full bg-[#fffaf1]/90 px-5 py-4 backdrop-blur"
                  >
                    <strong>{time} min</strong>
                    <span className="ml-3 text-[#62594d]">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <SealCheck size={42} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">O que chega no book.</h2>
          </div>
          <div className="grid gap-4">
            {[
              "Caderno de plantas com opções por tipologia",
              "Memorial de materiais e especificações",
              "Faixas de investimento e fluxo preliminar",
              "Mapa de entorno e posição solar",
              "Agenda de apresentações reservadas",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-full bg-[#fffaf1] px-6 py-5"
              >
                <span className="text-[#736a5d]">0{index + 1}</span>
                <span className="text-xl font-semibold">{item}</span>
                <DownloadSimple size={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#263022] md:grid-cols-[0.42fr_0.58fr]">
        <div className="bg-[#263022] p-8 text-[#fffaf1] md:p-12">
          <DoorOpen size={42} />
          <blockquote className="mt-20 text-5xl font-semibold leading-tight md:text-7xl">
            “A apresentação parecia uma visita técnica, não uma promessa de campanha.”
          </blockquote>
          <p className="mt-10 text-lg text-[#d8ccba]">Cliente proprietário · lançamento anterior Atlas</p>
          <div className="mt-10">
            <CTA light>Conhecer histórico Atlas</CTA>
          </div>
        </div>
        <Image src={images.lobby} width={1500} height={1000} alt="Lobby residencial com jardim" className="h-[620px] w-full object-cover" />
      </section>

      <section id="book" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[46px] bg-[#d9cab8] p-8 md:p-14"
        >
          <SketchLogo size={42} />
          <div className="grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <h2 className="mt-16 text-6xl font-semibold leading-none md:text-9xl">Receba o book reservado.</h2>
            </div>
            <div className="self-end rounded-[34px] bg-[#fffaf1]/92 p-7">
              <p className="text-xl leading-9 text-[#62594d]">
                Informe o perfil de unidade, prazo de compra e melhor horário para contato. A equipe retorna com material
                e agenda de apresentação.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA>Solicitar book</CTA>
                <CTA href="mailto:vendas@atlasliving.com" light>
                  vendas@atlasliving.com
                </CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-8 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-[38px] bg-[#263022] text-[#fffaf1] md:grid-cols-[0.46fr_0.27fr_0.27fr]">
          <div className="bg-[#263022] p-8 md:p-10">
            <Buildings size={34} />
            <p className="mt-10 text-7xl font-semibold leading-none">Atlas Living</p>
            <p className="mt-8 text-xl leading-9 text-[#d8ccba]">Horizonte 301 · residencial de baixa densidade nos Jardins.</p>
          </div>
          <div className="bg-white/5 p-8 text-[#d8ccba] md:p-10">
            24 unidades<br />
            178 a 312 m²<br />
            2 por andar<br />
            entrega 2028
          </div>
          <div className="bg-white/5 p-8 text-[#d8ccba] md:p-10 md:text-right">
            Apresentações reservadas<br />
            vendas@atlasliving.com<br />
            São Paulo · Brasil
          </div>
        </div>
      </footer>
    </main>
  );
}
