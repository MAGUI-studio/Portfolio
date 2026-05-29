import type { ComponentType } from "react";
import Landing01FlagshipPhone from "@/components/sections/landing-01-flagship-phone";
import Landing02NachoLibre from "@/components/sections/landing-02-nacho-libre";
import Landing03CosmeticoEssencial from "@/components/sections/landing-03-cosmetico-essencial";
import Landing04HotelRefugio from "@/components/sections/landing-04-hotel-refugio";
import Landing05HeadphonesSignature from "@/components/sections/landing-05-headphones-signature";
import Landing06CafeAtelier from "@/components/sections/landing-06-cafe-atelier";
import Landing07BancoPrivado from "@/components/sections/landing-07-banco-privado";
import Landing08ResidenciaAutoral from "@/components/sections/landing-08-residencia-autoral";
import Landing09BagagemModular from "@/components/sections/landing-09-bagagem-modular";
import Landing10ViagemPrivada from "@/components/sections/landing-10-viagem-privada";
import Landing11EnergiaSolarIndustrial from "@/components/sections/landing-11-energia-solar-industrial";
import Landing12EducacaoExecutiva from "@/components/sections/landing-12-educacao-executiva";
import Landing13LogisticaFria from "@/components/sections/landing-13-logistica-fria";
import Landing14AgritechPrecisao from "@/components/sections/landing-14-agritech-precisao";
import Landing15Ciberseguranca from "@/components/sections/landing-15-ciberseguranca";
import Landing16ConfeitariaLaCreme from "@/components/sections/landing-16-confeitaria-la-creme";
import Landing17ModaCircular from "@/components/sections/landing-17-moda-circular";
import Landing18VinhoAltitude from "@/components/sections/landing-18-vinho-altitude";
import Landing19LaboratorioFarmaceutico from "@/components/sections/landing-19-laboratorio-farmaceutico";
import Landing20InfraestruturaPortuaria from "@/components/sections/landing-20-infraestrutura-portuaria";
import Landing21Shinobi from "@/components/sections/landing-21-shinobi";

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
  { index: "02", slug: "landing-02-nacho-libre", title: "Nacho Libre", description: "Restaurante mexicano moderno com tacos, burritos, nachos, drinks, rodizio e autoatendimento.", category: "Landing Pages", mode: "landing completa + motion", component: Landing02NachoLibre },
  { index: "03", slug: "landing-03-cosmetico-essencial", title: "VITTA", description: "Clinica de estetica focada em saude da pele, protocolos personalizados e acompanhamento.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing03CosmeticoEssencial },
  { index: "04", slug: "landing-04-hotel-refugio", title: "Serra Alta", description: "Hotel boutique com narrativa de hospitalidade e atmosfera de refúgio.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing04HotelRefugio },
  { index: "05", slug: "landing-05-headphones-signature", title: "Nexo Juridico", description: "Escritorio juridico empresarial com estrutura completa de landing.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing05HeadphonesSignature },
  { index: "06", slug: "landing-06-cafe-atelier", title: "Brasa Studio", description: "Estudio de branding com posicionamento, processo e casos.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing06CafeAtelier },
  { index: "07", slug: "landing-07-banco-privado", title: "Aura Estetica", description: "Clinica de estetica avancada com protocolos, jornada e FAQ.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing07BancoPrivado },
  { index: "08", slug: "landing-08-residencia-autoral", title: "Atlas Living", description: "Incorporadora de alto padrao com produto, processo e lancamento.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing08ResidenciaAutoral },
  { index: "09", slug: "landing-09-bagagem-modular", title: "Norte Prive", description: "Agencia de viagens privadas com curadoria e operacao completa.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing09BagagemModular },
  { index: "10", slug: "landing-10-viagem-privada", title: "Vector Advisory", description: "Consultoria de tecnologia empresarial com processo e implementacao.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing10ViagemPrivada },
  { index: "11", slug: "landing-11-energia-solar-industrial", title: "Kroma", description: "Paineis solares, inversores, baterias e projetos completos para uso residencial, comercial e industrial.", category: "Landing Pages", mode: "landing completa + motion", component: Landing11EnergiaSolarIndustrial },
  { index: "12", slug: "landing-12-educacao-executiva", title: "Prisma Fellows", description: "Educacao executiva para liderancas seniores e programas aplicados.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing12EducacaoExecutiva },
  { index: "13", slug: "landing-13-logistica-fria", title: "Nivela Cold", description: "Logistica fria com rastreabilidade, SLA e operacao controlada.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing13LogisticaFria },
  { index: "14", slug: "landing-14-agritech-precisao", title: "TerraMetria", description: "Agritech de precisao para fazendas orientadas por dados.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing14AgritechPrecisao },
  { index: "15", slug: "landing-15-ciberseguranca", title: "CifraSec", description: "Ciberseguranca corporativa com governanca, resposta e monitoramento.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing15Ciberseguranca },
  { index: "16", slug: "landing-16-confeitaria-la-creme", title: "La Crème", description: "Confeitaria artesanal com vitrine sazonal, encomendas e doces autorais.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing16ConfeitariaLaCreme },
  { index: "17", slug: "landing-17-moda-circular", title: "Reforma Atelier", description: "Moda circular premium para curadoria, reparo e redesign.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing17ModaCircular },
  { index: "18", slug: "landing-18-vinho-altitude", title: "Cume Vinhos", description: "Vinicola boutique de altitude com portfolio, visitas e clube.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing18VinhoAltitude },
  { index: "19", slug: "landing-19-laboratorio-farmaceutico", title: "Novera Labs", description: "Laboratorio farmaceutico com P&D, qualidade e transferencia.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing19LaboratorioFarmaceutico },
  { index: "20", slug: "landing-20-infraestrutura-portuaria", title: "Doca Norte", description: "Infraestrutura portuaria com torre de controle e previsibilidade.", category: "Landing Pages", mode: "10 secoes + motion", component: Landing20InfraestruturaPortuaria },
  { index: "21", slug: "landing-21-shinobi", title: "SHINOBI", description: "Energetico dark com hero interativa, sabores coloridos e narrativa completa de marca.", category: "Landing Pages", mode: "landing completa + motion", component: Landing21Shinobi },
];

export const sectionMap = Object.fromEntries(
  sections.map((section) => [section.slug, section]),
) as Record<string, SectionEntry>;

export const sectionCategories = [
  { label: "Landing Pages", description: "Vinte e uma landings completas, cada uma com uma direcao visual propria e motion aplicado.", count: 21 },
] as const;
