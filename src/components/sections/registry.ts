import type { ComponentType } from "react";
import Landing01FlagshipPhone from "@/components/sections/landing-01-flagship-phone";
import Landing02SedaEletrico from "@/components/sections/landing-02-seda-eletrico";
import Landing03CosmeticoEssencial from "@/components/sections/landing-03-cosmetico-essencial";
import Landing04HotelRefugio from "@/components/sections/landing-04-hotel-refugio";
import Landing05HeadphonesSignature from "@/components/sections/landing-05-headphones-signature";
import Landing06CafeAtelier from "@/components/sections/landing-06-cafe-atelier";
import Landing07BancoPrivado from "@/components/sections/landing-07-banco-privado";
import Landing08ResidenciaAutoral from "@/components/sections/landing-08-residencia-autoral";
import Landing09BagagemModular from "@/components/sections/landing-09-bagagem-modular";
import Landing10ViagemPrivada from "@/components/sections/landing-10-viagem-privada";

export type SectionEntry = {
  category: string;
  component: ComponentType;
  description: string;
  index: string;
  mode: string;
  slug: string;
  title: string;
};

export const sections: SectionEntry[] = [
  { index: "01", slug: "landing-01-flagship-phone", title: "Orla Arquitetura", description: "Escritorio de arquitetura residencial com 10 secoes completas.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing01FlagshipPhone },
  { index: "02", slug: "landing-02-seda-eletrico", title: "Atto Patrimonio", description: "Consultoria patrimonial com linguagem institucional e fluxo completo.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing02SedaEletrico },
  { index: "03", slug: "landing-03-cosmetico-essencial", title: "Clara Odontologia", description: "Clinica odontologica premium com servicos, metodo e prova social.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing03CosmeticoEssencial },
  { index: "04", slug: "landing-04-hotel-refugio", title: "Serra Alta", description: "Hotel boutique com narrativa de hospitalidade e atmosfera de refúgio.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing04HotelRefugio },
  { index: "05", slug: "landing-05-headphones-signature", title: "Nexo Juridico", description: "Escritorio juridico empresarial com estrutura completa de landing.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing05HeadphonesSignature },
  { index: "06", slug: "landing-06-cafe-atelier", title: "Brasa Studio", description: "Estudio de branding com posicionamento, processo e casos.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing06CafeAtelier },
  { index: "07", slug: "landing-07-banco-privado", title: "Aura Estetica", description: "Clinica de estetica avancada com protocolos, jornada e FAQ.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing07BancoPrivado },
  { index: "08", slug: "landing-08-residencia-autoral", title: "Atlas Living", description: "Incorporadora de alto padrao com produto, processo e lancamento.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing08ResidenciaAutoral },
  { index: "09", slug: "landing-09-bagagem-modular", title: "Norte Prive", description: "Agencia de viagens privadas com curadoria e operacao completa.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing09BagagemModular },
  { index: "10", slug: "landing-10-viagem-privada", title: "Vector Advisory", description: "Consultoria de tecnologia empresarial com processo e implementacao.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing10ViagemPrivada },
];

export const sectionMap = Object.fromEntries(
  sections.map((section) => [section.slug, section]),
) as Record<string, SectionEntry>;

export const sectionCategories = [
  { label: "Landing Pages", description: "Dez landings corporativas completas, cada uma com pelo menos 10 secoes e animacoes discretas.", count: 10 },
] as const;
