import type { ComponentType } from "react";
import Landing01FlagshipPhone from "@/components/sections/landing-01-flagship-phone";
import Landing02NachoLibre from "@/components/sections/nacho-libre";
import Landing03CosmeticoEssencial from "@/components/sections/vitta";
import Landing04HotelRefugio from "@/components/sections/landing-04-hotel-refugio";
import Landing05Pulse from "@/components/sections/pulse";
import Landing06CafeAtelier from "@/components/sections/landing-06-cafe-atelier";
import Landing07BancoPrivado from "@/components/sections/landing-07-banco-privado";
import Landing08ResidenciaAutoral from "@/components/sections/landing-08-residencia-autoral";
import Landing09BagagemModular from "@/components/sections/landing-09-bagagem-modular";
import Landing10ViagemPrivada from "@/components/sections/landing-10-viagem-privada";
import Landing11EnergiaSolarIndustrial from "@/components/sections/kroma";
import Landing12EducacaoExecutiva from "@/components/sections/landing-12-educacao-executiva";
import Landing13LogisticaFria from "@/components/sections/landing-13-logistica-fria";
import Landing14AgritechPrecisao from "@/components/sections/landing-14-agritech-precisao";
import Landing15Ciberseguranca from "@/components/sections/landing-15-ciberseguranca";
import Landing16ConfeitariaLaCreme from "@/components/sections/la-creme";
import Landing17ModaCircular from "@/components/sections/landing-17-moda-circular";
import Landing18VinhoAltitude from "@/components/sections/landing-18-vinho-altitude";
import Landing19LaboratorioFarmaceutico from "@/components/sections/landing-19-laboratorio-farmaceutico";
import Landing20InfraestruturaPortuaria from "@/components/sections/landing-20-infraestrutura-portuaria";
import Landing21Shinobi from "@/components/sections/shinobi";

export type SectionEntry = {
  aliases?: string[];
  category: string;
  cardImage?: string;
  component: ComponentType;
  description: string;
  goal: string;
  index: string;
  industry: string;
  projectType: string;
  slug: string;
  tags: string[];
  title: string;
  visible: boolean;
};

export const sections: SectionEntry[] = [
  {
    index: "01",
    slug: "nacho-libre",
    aliases: ["landing-02-nacho-libre"],
    title: "Nacho Libre",
    description:
      "Restaurante mexicano moderno com tacos, burritos, nachos, drinks, rodizio e autoatendimento.",
    category: "Landing Pages",
    cardImage: "/images/nacho-libre/project-cover.png",
    industry: "Gastronomia",
    projectType: "Restaurante mexicano",
    goal: "Transformar cardapio, atendimento e atmosfera em uma experiencia digital vibrante.",
    tags: ["Cardapio", "Pedidos", "Experiencia de marca"],
    visible: true,
    component: Landing02NachoLibre,
  },
  {
    index: "02",
    slug: "vitta",
    aliases: ["landing-03-cosmetico-essencial"],
    title: "VITTA",
    description:
      "Clinica de estetica focada em saude da pele, protocolos personalizados e acompanhamento.",
    category: "Landing Pages",
    cardImage: "/images/vitta/project-cover.png",
    industry: "Saude",
    projectType: "Clinica de pele e estetica",
    goal: "Comunicar confianca, cuidado e protocolos personalizados para consultas de alto valor.",
    tags: ["Clinica", "Tratamentos", "Autoridade"],
    visible: true,
    component: Landing03CosmeticoEssencial,
  },
  {
    index: "03",
    slug: "pulse",
    aliases: ["landing-05-pulse"],
    title: "Pulse",
    description:
      "Marca premium de roupas fitness para homens e mulheres com tecnologia, performance e estilo.",
    category: "Landing Pages",
    cardImage: "/images/pulse/project-cover.png",
    industry: "Moda",
    projectType: "Marca esportiva premium",
    goal: "Apresentar colecoes, tecnologia textil e compra assistida com visual editorial.",
    tags: ["Lookbook", "E-commerce", "Performance"],
    visible: true,
    component: Landing05Pulse,
  },
  {
    index: "04",
    slug: "kroma",
    aliases: ["landing-11-energia-solar-industrial"],
    title: "Kroma",
    description:
      "Paineis solares, inversores, baterias e projetos completos para uso residencial, comercial e industrial.",
    category: "Landing Pages",
    cardImage: "/images/kroma/project-cover.png",
    industry: "Tecnologia",
    projectType: "Solucoes solares",
    goal: "Explicar projetos completos de energia solar para residencias, empresas e industrias.",
    tags: ["Energia solar", "B2B", "Sustentabilidade"],
    visible: true,
    component: Landing11EnergiaSolarIndustrial,
  },
  {
    index: "05",
    slug: "la-creme",
    aliases: ["landing-16-confeitaria-la-creme"],
    title: "La Creme",
    description:
      "Confeitaria artesanal com vitrine sazonal, encomendas e doces autorais.",
    category: "Landing Pages",
    cardImage: "/images/lacreme/project-cover.png",
    industry: "Gastronomia",
    projectType: "Confeitaria artesanal",
    goal: "Valorizar vitrine, encomendas e doces autorais com apelo sensorial.",
    tags: ["Confeitaria", "Encomendas", "Produtos autorais"],
    visible: true,
    component: Landing16ConfeitariaLaCreme,
  },
  {
    index: "06",
    slug: "shinobi",
    aliases: ["landing-21-shinobi"],
    title: "SHINOBI",
    description:
      "Energetico dark com hero interativa, sabores coloridos e narrativa completa de marca.",
    category: "Landing Pages",
    cardImage: "/images/shinobi/project-cover.png",
 industry: "Gastronomia",
    projectType: "Energetico",
    goal: "Construir universo de marca, sabores e compra direta para um publico jovem.",
    tags: ["Lancamento", "Produto", "Marca conceitual"],
    visible: true,
    component: Landing21Shinobi,
  },
  {
    index: "07",
    slug: "orla-arquitetura",
    aliases: ["landing-01-flagship-phone"],
    title: "Orla Arquitetura",
    description:
      "Escritorio de arquitetura residencial com 10 secoes completas.",
    category: "Landing Pages",
    industry: "Arquitetura",
    projectType: "Escritorio residencial",
    goal: "Apresentar portfolio, processo e assinatura estetica para projetos autorais.",
    tags: ["Portfolio", "Alto padrao", "Servicos"],
    visible: false,
    component: Landing01FlagshipPhone,
  },
  {
    index: "08",
    slug: "serra-alta",
    aliases: ["landing-04-hotel-refugio"],
    title: "Serra Alta",
    description:
      "Hotel boutique com narrativa de hospitalidade e atmosfera de refugio.",
    category: "Landing Pages",
    industry: "Hotelaria",
    projectType: "Hotel boutique",
    goal: "Traduzir hospedagem, conforto e destino em uma experiencia de reserva aspiracional.",
    tags: ["Hospitalidade", "Reservas", "Destino"],
    visible: false,
    component: Landing04HotelRefugio,
  },
  {
    index: "09",
    slug: "brasa-studio",
    aliases: ["landing-06-cafe-atelier"],
    title: "Brasa Studio",
    description: "Estudio de branding com posicionamento, processo e casos.",
    category: "Landing Pages",
    industry: "Criativo",
    projectType: "Estudio de branding",
    goal: "Organizar posicionamento, servicos e casos para conquistar marcas em crescimento.",
    tags: ["Branding", "Processo", "Cases"],
    visible: false,
    component: Landing06CafeAtelier,
  },
  {
    index: "10",
    slug: "aura-estetica",
    aliases: ["landing-07-banco-privado"],
    title: "Aura Estetica",
    description: "Clinica de estetica avancada com protocolos, jornada e FAQ.",
    category: "Landing Pages",
    industry: "Saude",
    projectType: "Clinica de estetica",
    goal: "Gerar percepcao premium e esclarecer tratamentos antes do agendamento.",
    tags: ["Estetica", "FAQ", "Agendamento"],
    visible: false,
    component: Landing07BancoPrivado,
  },
  {
    index: "11",
    slug: "atlas-living",
    aliases: ["landing-08-residencia-autoral"],
    title: "Atlas Living",
    description:
      "Incorporadora de alto padrao com produto, processo e lancamento.",
    category: "Landing Pages",
    industry: "Imobiliario",
    projectType: "Incorporadora",
    goal: "Apresentar lancamento, diferenciais e jornada de compra para alto padrao.",
    tags: ["Lancamento", "Empreendimento", "Alto padrao"],
    visible: false,
    component: Landing08ResidenciaAutoral,
  },
  {
    index: "12",
    slug: "norte-prive",
    aliases: ["landing-09-bagagem-modular"],
    title: "Norte Prive",
    description:
      "Agencia de viagens privadas com curadoria e operacao completa.",
    category: "Landing Pages",
    industry: "Turismo",
    projectType: "Viagens privadas",
    goal: "Transmitir curadoria, seguranca e exclusividade para viagens sob medida.",
    tags: ["Viagens", "Luxo", "Curadoria"],
    visible: false,
    component: Landing09BagagemModular,
  },
  {
    index: "13",
    slug: "vector-advisory",
    aliases: ["landing-10-viagem-privada"],
    title: "Vector Advisory",
    description:
      "Consultoria de tecnologia empresarial com processo e implementacao.",
    category: "Landing Pages",
    industry: "Tecnologia",
    projectType: "Consultoria empresarial",
    goal: "Explicar metodologia, implementacao e impacto para decisores B2B.",
    tags: ["B2B", "Consultoria", "Implementacao"],
    visible: false,
    component: Landing10ViagemPrivada,
  },
  {
    index: "14",
    slug: "prisma-fellows",
    aliases: ["landing-12-educacao-executiva"],
    title: "Prisma Fellows",
    description:
      "Educacao executiva para liderancas seniores e programas aplicados.",
    category: "Landing Pages",
    industry: "Educacao",
    projectType: "Educacao executiva",
    goal: "Apresentar programas, autoridade academica e aplicacao pratica para liderancas.",
    tags: ["Cursos", "Lideranca", "B2B"],
    visible: false,
    component: Landing12EducacaoExecutiva,
  },
  {
    index: "15",
    slug: "nivela-cold",
    aliases: ["landing-13-logistica-fria"],
    title: "Nivela Cold",
    description:
      "Logistica fria com rastreabilidade, SLA e operacao controlada.",
    category: "Landing Pages",
    industry: "Logistica",
    projectType: "Logistica fria",
    goal: "Comunicar controle operacional, rastreabilidade e confianca para cargas sensiveis.",
    tags: ["SLA", "Rastreabilidade", "Operacao"],
    visible: false,
    component: Landing13LogisticaFria,
  },
  {
    index: "16",
    slug: "terrametria",
    aliases: ["landing-14-agritech-precisao"],
    title: "TerraMetria",
    description: "Agritech de precisao para fazendas orientadas por dados.",
    category: "Landing Pages",
    industry: "Agronegocio",
    projectType: "Agritech",
    goal: "Mostrar inteligencia de dados, previsibilidade e ganho produtivo no campo.",
    tags: ["Dados", "Produtividade", "SaaS"],
    visible: false,
    component: Landing14AgritechPrecisao,
  },
  {
    index: "17",
    slug: "cifrasec",
    aliases: ["landing-15-ciberseguranca"],
    title: "CifraSec",
    description:
      "Ciberseguranca corporativa com governanca, resposta e monitoramento.",
    category: "Landing Pages",
    industry: "Tecnologia",
    projectType: "Ciberseguranca",
    goal: "Traduzir protecao, governanca e resposta para times executivos.",
    tags: ["Seguranca", "Governanca", "Monitoramento"],
    visible: false,
    component: Landing15Ciberseguranca,
  },
  {
    index: "18",
    slug: "reforma-atelier",
    aliases: ["landing-17-moda-circular"],
    title: "Reforma Atelier",
    description: "Moda circular premium para curadoria, reparo e redesign.",
    category: "Landing Pages",
    industry: "Moda",
    projectType: "Moda circular",
    goal: "Elevar reparo, redesign e curadoria como servico de moda premium.",
    tags: ["Circularidade", "Atelier", "Sustentabilidade"],
    visible: false,
    component: Landing17ModaCircular,
  },
  {
    index: "19",
    slug: "cume-vinhos",
    aliases: ["landing-18-vinho-altitude"],
    title: "Cume Vinhos",
    description:
      "Vinicola boutique de altitude com portfolio, visitas e clube.",
    category: "Landing Pages",
    industry: "Bebidas",
    projectType: "Vinicola boutique",
    goal: "Apresentar origem, portfolio e clube de vinhos com narrativa sensorial.",
    tags: ["Vinhos", "Clube", "Experiencia"],
    visible: false,
    component: Landing18VinhoAltitude,
  },
  {
    index: "20",
    slug: "novera-labs",
    aliases: ["landing-19-laboratorio-farmaceutico"],
    title: "Novera Labs",
    description: "Laboratorio farmaceutico com P&D, qualidade e transferencia.",
    category: "Landing Pages",
    industry: "Saude",
    projectType: "Laboratorio farmaceutico",
    goal: "Comunicar pesquisa, qualidade e transferencia tecnologica com rigor institucional.",
    tags: ["P&D", "Qualidade", "Industria"],
    visible: false,
    component: Landing19LaboratorioFarmaceutico,
  },
  {
    index: "21",
    slug: "doca-norte",
    aliases: ["landing-20-infraestrutura-portuaria"],
    title: "Doca Norte",
    description:
      "Infraestrutura portuaria com torre de controle e previsibilidade.",
    category: "Landing Pages",
    industry: "Infraestrutura",
    projectType: "Operacao portuaria",
    goal: "Mostrar previsibilidade, controle e capacidade operacional para grandes cargas.",
    tags: ["Operacao", "Portos", "Controle"],
    visible: false,
    component: Landing20InfraestruturaPortuaria,
  },
];

export const visibleSections = sections.filter((section) => section.visible);

export const sectionMap = Object.fromEntries(
  sections.flatMap((section) => [
    [section.slug, section],
    ...(section.aliases ?? []).map((alias) => [alias, section]),
  ]),
) as Record<string, SectionEntry>;
