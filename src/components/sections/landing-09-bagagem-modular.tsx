"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AirplaneTilt,
  ArrowRight,
  CompassRose,
  ForkKnife,
  GlobeHemisphereWest,
  MapTrifold,
  MoonStars,
  SealCheck,
  SuitcaseRolling,
  Wine,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  lounge: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=90",
  desert: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=90",
  coast: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=90",
  cabin: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=90",
  dinner: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
  suite: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=90",
  journal: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=90",
  boat: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",
};

const chapters = [
  ["01", "Escuta", "Entendemos ritmo, manias, limites, repertorio e o tipo de silencio que a viagem precisa ter."],
  ["02", "Desenho", "Criamos uma arquitetura de dias com espaco livre, reservas certas e deslocamentos sem friccao."],
  ["03", "Bordo", "Entregamos um dossie claro, contatos ativos e suporte discreto enquanto a familia viaja."],
];

const routes = [
  ["Patagonia privada", "lodge remoto, trilhas leves, chef local e voo sem conexao inutil"],
  ["Douro sem pressa", "vinicolas pequenas, motorista fixo, mesa de produtor e tarde livre"],
  ["Amalfi por agua", "barco no horario certo, hotel discreto e almoco fora do circuito"],
  ["Marrakesh quieto", "riad silencioso, artesaos selecionados e jantar no terraco"],
];

const dossier = [
  "reservas confirmadas com nomes e contatos diretos",
  "mapas offline, tempo real de deslocamento e plano B",
  "documentos, seguros, vistos e informacoes de chegada",
  "preferencias de quarto, mesa, guia, carro e privacidade",
  "curadoria de pausas, nao apenas experiencias",
];

function CTA({
  children,
  href = "#briefing",
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
        invert ? "bg-[#f8f3ea] text-[#171717] hover:bg-white" : "bg-[#171717] text-[#f8f3ea] hover:bg-[#2a2a2a]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </motion.a>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-[#777069]">{children}</p>;
}

export default function Landing09BagagemModular() {
  return (
    <main className="overflow-hidden bg-[#f8f3ea] text-[#171717]">
      <header className="px-6 pb-8 pt-7 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-7 border-b border-[#d8d0c4] pb-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <a href="#inicio" className="group flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-[#171717] text-[#f8f3ea] transition-transform duration-300 group-hover:rotate-12">
              <CompassRose size={24} />
            </span>
            <span>
              <span className="block font-serif text-3xl leading-none">Norte Prive</span>
              <span className="block text-xs uppercase tracking-widest text-[#777069]">travel office privado</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#5f5952]">
            {[
              ["Metodo", "#metodo"],
              ["Rotas", "#rotas"],
              ["Dossie", "#dossie"],
              ["Briefing", "#briefing"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="transition-colors duration-300 hover:text-[#171717]">
                {label}
              </a>
            ))}
          </nav>

          <CTA>Agendar briefing</CTA>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-24 pt-12 md:px-12 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-[0.52fr_0.48fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="pt-8"
          >
            <Eyebrow>viagens sob medida para poucos passageiros</Eyebrow>
            <h1 className="mt-8 font-serif text-[84px] leading-[0.82] tracking-tight md:text-[168px]">
              Nenhum dia deveria parecer comprado pronto.
            </h1>
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.46fr_0.54fr]">
              <CTA>Desenhar minha viagem</CTA>
              <p className="text-xl leading-9 text-[#5f5952]">
                Planejamos jornadas privadas para familias, casais e pequenos grupos que querem curadoria, silencio
                operacional e uma agenda com espaco para mudar de ideia.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="relative pt-10"
          >
            <div className="absolute left-8 top-0 z-10 rotate-[-4deg] bg-[#171717] px-7 py-4 text-sm uppercase tracking-widest text-[#f8f3ea]">
              45 dias antes
            </div>
            <Image
              src={images.lounge}
              width={1500}
              height={1800}
              alt="Lounge silencioso de hotel de luxo"
              className="h-[760px] w-full rounded-t-full object-cover"
              priority
            />
            <div className="absolute bottom-8 right-8 grid w-[270px] gap-4 bg-[#f8f3ea] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
              <SuitcaseRolling size={28} />
              <p className="text-2xl font-semibold leading-tight">Roteiro vivo, suporte humano e reservas sem teatro.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="flex flex-col justify-between gap-12 border-t border-[#171717] pt-8">
            <Eyebrow>manifesto</Eyebrow>
            <p className="text-2xl leading-10 text-[#5f5952]">
              Luxo nao e colocar mais coisas no calendario. E saber exatamente o que pode sair dele.
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="font-serif text-[58px] leading-[0.94] tracking-tight md:text-[112px]"
          >
            A viagem boa parece inevitavel depois que acontece. Antes disso, ela e desenho, corte e decisao.
          </motion.p>
        </div>
      </section>

      <section id="metodo" className="px-6 py-28 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative">
            <Image
              src={images.journal}
              width={1400}
              height={1700}
              alt="Caderno com mapas e notas de viagem"
              className="h-[720px] w-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease }}
              className="absolute bottom-10 left-10 right-10 bg-[#171717] p-8 text-[#f8f3ea]"
            >
              <MapTrifold size={34} />
              <p className="mt-10 font-serif text-5xl leading-none">Cada roteiro nasce como uma planta baixa.</p>
            </motion.div>
          </div>

          <div className="grid content-center gap-9">
            {chapters.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                className="grid gap-8 border-t border-[#cfc6b8] pt-8 md:grid-cols-[0.18fr_0.82fr]"
              >
                <p className="font-serif text-7xl leading-none text-[#b5aa9a]">{number}</p>
                <div>
                  <h2 className="font-serif text-7xl leading-none">{title}</h2>
                  <p className="mt-5 text-xl leading-9 text-[#5f5952]">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="rotas" className="px-6 py-28 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.31fr_0.69fr]">
          <div className="flex flex-col justify-between gap-12 bg-[#171717] p-10 text-[#f8f3ea]">
            <GlobeHemisphereWest size={42} />
            <div>
              <h2 className="font-serif text-7xl leading-none">Rotas que nao cabem em catalogo.</h2>
              <p className="mt-8 text-xl leading-9 text-[#d7cdbf]">
                O destino e apenas o territorio. O projeto esta no jeito de atravessar.
              </p>
            </div>
            <CTA invert>Solicitar rota</CTA>
          </div>

          <div className="grid gap-8">
            {routes.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease }}
                className="group grid gap-6 border-b border-[#cfc6b8] pb-8 transition-colors duration-300 hover:border-[#171717] md:grid-cols-[0.3fr_0.7fr]"
              >
                <p className="font-serif text-5xl leading-none">{title}</p>
                <p className="text-xl leading-9 text-[#5f5952] transition-transform duration-300 group-hover:translate-x-3">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.5fr_0.22fr_0.28fr]">
          <motion.figure
            initial={{ opacity: 0, clipPath: "inset(10% 0 10% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <Image src={images.coast} width={1600} height={1100} alt="Canal europeu ao fim da tarde" className="h-[620px] w-full object-cover" />
          </motion.figure>
          <div className="flex flex-col justify-end gap-8 bg-[#e5dccf] p-8">
            <Wine size={36} />
            <p className="font-serif text-5xl leading-none">Mesa pequena. Lugar certo. Dia sem pressa.</p>
          </div>
          <div className="grid gap-8">
            <Image src={images.dinner} width={900} height={720} alt="Mesa reservada em restaurante" className="h-[296px] w-full object-cover" />
            <Image src={images.boat} width={900} height={720} alt="Barco privado em agua clara" className="h-[296px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <Eyebrow>anti pacote</Eyebrow>
            <h2 className="mt-8 font-serif text-[64px] leading-[0.9] tracking-tight md:text-[128px]">
              Nao vendemos uma semana bonita. Tiramos atrito da semana inteira.
            </h2>
          </div>
          <div className="grid content-end gap-8">
            {[
              "voos escolhidos pela energia do dia seguinte",
              "hotel escolhido pelo quarto, nao pela marca",
              "guia que aparece pouco e resolve muito",
              "janelas livres protegidas no roteiro",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                className="flex gap-6 border-t border-[#cfc6b8] pt-6"
              >
                <span className="text-sm text-[#777069]">0{index + 1}</span>
                <p className="text-2xl leading-9">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="dossie" className="px-6 py-28 md:px-12">
        <div className="relative bg-[#171717] px-8 py-16 text-[#f8f3ea] md:px-14 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <SealCheck size={42} />
              <h2 className="mt-10 font-serif text-7xl leading-none md:text-9xl">Dossie de bordo.</h2>
              <p className="mt-8 text-xl leading-9 text-[#d7cdbf]">
                O viajante recebe um material limpo, legivel e util. Nada de PDF decorativo que ninguem consulta.
              </p>
            </div>
            <div className="grid gap-5">
              {dossier.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.05, ease }}
                  className="grid grid-cols-[auto_1fr] gap-7 border-b border-white/16 pb-5"
                >
                  <span className="text-[#9b9184]">0{index + 1}</span>
                  <span className="text-2xl leading-9">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.28fr_0.44fr_0.28fr]">
          <div className="flex flex-col justify-between gap-12 border-y border-[#cfc6b8] py-10">
            <MoonStars size={40} />
            <p className="font-serif text-6xl leading-none">Dormir bem tambem e roteiro.</p>
          </div>
          <Image src={images.suite} width={1300} height={1500} alt="Suite silenciosa de hotel" className="h-[720px] w-full rounded-b-full object-cover" />
          <div className="flex flex-col justify-end gap-8 border-y border-[#cfc6b8] py-10">
            <p className="text-2xl leading-9 text-[#5f5952]">
              Vista, ruido, andar, acesso, luz da manha e distancia do elevador entram na decisao antes da reserva.
            </p>
            <CTA>Definir preferencias</CTA>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease }}
            className="bg-[#e5dccf] p-10 md:p-14"
          >
            <ForkKnife size={40} />
            <blockquote className="mt-24 font-serif text-6xl leading-tight md:text-8xl">
              &ldquo;Parecia uma viagem nossa, nao uma versao premium de roteiro pronto.&rdquo;
            </blockquote>
            <p className="mt-10 text-lg text-[#5f5952]">Daniela Rezende, viagem em familia para Portugal</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["34", "rotas proprietarias em curadoria"],
              ["2-6", "viajantes por projeto"],
              ["24h", "suporte nos deslocamentos principais"],
            ].map(([number, label]) => (
              <div key={label} className="flex flex-col justify-between border-l border-[#cfc6b8] py-8 pl-8">
                <p className="font-serif text-8xl leading-none">{number}</p>
                <p className="mt-20 text-xl leading-8 text-[#5f5952]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="briefing" className="px-6 pb-28 pt-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden bg-[#171717] p-10 text-[#f8f3ea] md:p-16"
        >
          <AirplaneTilt className="absolute right-10 top-10 text-white/12" size={180} />
          <div className="relative grid gap-16 lg:grid-cols-[0.6fr_0.4fr]">
            <div>
              <Eyebrow>primeira conversa</Eyebrow>
              <h2 className="mt-8 font-serif text-[66px] leading-[0.9] tracking-tight md:text-[132px]">
                Traga datas, pessoas, desejos e o que voce nao quer repetir.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-9">
              <p className="text-2xl leading-10 text-[#d7cdbf]">
                Saia do briefing com um caminho inicial: estilo de viagem, investimento provavel, prazos e nivel de
                operacao necessario.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTA invert>Iniciar planejamento</CTA>
                <CTA href="mailto:roteiros@norteprive.com" invert>
                  roteiros@norteprive.com
                </CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-10 md:px-12">
        <div className="grid gap-10 border-t border-[#171717] pt-10 lg:grid-cols-[0.5fr_0.25fr_0.25fr]">
          <div>
            <SuitcaseRolling size={34} />
            <p className="mt-8 font-serif text-7xl leading-none">Norte Prive</p>
          </div>
          <p className="text-lg leading-8 text-[#5f5952]">
            Curadoria, planejamento e operacao de viagens privadas para pequenos grupos.
          </p>
          <p className="text-lg leading-8 text-[#5f5952] lg:text-right">
            Brasil, Europa e Americas
            <br />
            roteiros@norteprive.com
          </p>
        </div>
      </footer>
    </main>
  );
}
