import type { ComponentType } from "react";
import Landing02NachoLibre from "@/components/sections/nacho-libre";
import Landing03CosmeticoEssencial from "@/components/sections/vitta";
import Landing05Pulse from "@/components/sections/pulse";
import FlowLanding from "@/components/sections/flow";
import BitesLanding from "@/components/sections/bites";
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
import SayegLanding from "@/components/sections/sayeg";
import PowervetLanding from "@/components/sections/powervet";
import ArcoLanding from "@/components/sections/arco";
import DragonTattooLanding from "@/components/sections/dragon-tattoo";
import HavenLanding from "@/components/sections/haven";

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
      "Restaurante mexicano moderno com tacos, burritos, nachos, drinks, rodízio e autoatendimento.",
    category: "Landing Pages",
    cardImage: "/images/nacho-libre/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Restaurante mexicano",
    goal: "Transformar cardápio, atendimento e atmosfera em uma experiência digital vibrante.",
    tags: ["Cardápio", "Pedidos", "Experiência de marca"],
    visible: true,
    component: Landing02NachoLibre,
  },
  {
    index: "02",
    slug: "vitta",
    aliases: ["landing-03-cosmetico-essencial"],
    title: "VITTA",
    description:
      "Clínica de estética focada em saúde da pele, protocolos personalizados e acompanhamento.",
    category: "Landing Pages",
    cardImage: "/images/vitta/project-cover.webp",
    industry: "Saúde",
    projectType: "Clínica de pele e estética",
    goal: "Comunicar confiança, cuidado e protocolos personalizados para consultas de alto valor.",
    tags: ["Clínica", "Tratamentos", "Autoridade"],
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
    cardImage: "/images/pulse/project-cover.webp",
    industry: "Serviços",
    projectType: "Marca esportiva premium",
    goal: "Apresentar coleções, tecnologia têxtil e compra assistida com visual editorial.",
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
      "Painéis solares, inversores, baterias e projetos completos para uso residencial, comercial e industrial.",
    category: "Landing Pages",
    cardImage: "/images/kroma/project-cover.webp",
    industry: "Serviços",
    projectType: "Soluções solares",
    goal: "Explicar projetos completos de energia solar para residências, empresas e indústrias.",
    tags: ["Energia solar", "B2B", "Sustentabilidade"],
    visible: true,
    component: Landing11EnergiaSolarIndustrial,
  },
  {
    index: "05",
    slug: "la-creme",
    aliases: ["landing-16-confeitaria-la-creme"],
    title: "La Crème",
    description:
      "Confeitaria artesanal com vitrine sazonal, encomendas e doces autorais.",
    category: "Landing Pages",
    cardImage: "/images/lacreme/project-cover.webp",
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
      "Energético dark com hero interativa, sabores coloridos e narrativa completa de marca.",
    category: "Landing Pages",
    cardImage: "/images/shinobi/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Energético",
    goal: "Construir universo de marca, sabores e compra direta para um público jovem.",
    tags: ["Lançamento", "Produto", "Marca conceitual"],
    visible: true,
    component: Landing21Shinobi,
  },
  {
    index: "07",
    slug: "bites",
    aliases: ["landing-10-viagem-privada", "vector-advisory"],
    title: "BITES",
    description:
      "Comfort food premium com salgados clássicos, visual apetitoso e conveniência delivery-first.",
    category: "Landing Pages",
    cardImage: "/images/bites/project-cover.webp",
    industry: "Gastronomia",
    projectType: "Salgados premium",
    goal: "Transformar clássicos fritos em uma experiência moderna, crocante e desejável.",
    tags: ["Comfort food", "Delivery", "Marca premium"],
    visible: true,
    component: BitesLanding,
  },
  {
    index: "08",
    slug: "sayeg-beauty-studio",
    aliases: ["landing-01-flagship-phone"],
    title: "Beatriz Sayeg",
    description:
      "Visagismo avançado e micropigmentação personalizada com posicionamento de luxo.",
    category: "Landing Pages",
    cardImage: "/images/sayeg/project-cover.webp",
    industry: "Saúde",
    projectType: "Especialista em visagismo",
    goal: "Apresentar autoridade, especialidades e atendimento personalizado para gerar agendamentos.",
    tags: ["Visagismo", "Micropigmentação", "Marca pessoal"],
    visible: true,
    component: SayegLanding,
  },
  {
    index: "09",
    slug: "powervet",
    title: "POWERVET",
    description:
      "Clínica veterinária premium especializada em animais silvestres e exóticos.",
    category: "Landing Pages",
    cardImage: "/images/powervet/project-cover.webp",
    industry: "Saúde",
    projectType: "Clínica veterinária especializada",
    goal: "Transmitir autoridade médica, acolhimento e estrutura para gerar agendamentos.",
    tags: ["Veterinária", "Animais exóticos", "Agendamento"],
    visible: true,
    component: PowervetLanding,
  },
  {
    index: "10",
    slug: "flow",
    title: "FLOW",
    description:
      "Aquarismo marinho premium com equipamentos, corais, peixes ornamentais e orientação técnica.",
    category: "Landing Pages",
    cardImage: "/images/flow/project-cover.webp",
    industry: "Serviços",
    projectType: "Loja de aquarismo marinho",
    goal: "Apresentar tecnologia, vida marinha e consultoria para montagem e evolução de reefs.",
    tags: ["Aquarismo marinho", "Reef", "Corais"],
    visible: true,
    component: FlowLanding,
  },
  {
    index: "11",
    slug: "arco-odontologia",
    aliases: ["aura-estetica", "landing-07-banco-privado"],
    title: "ARCO",
    description:
      "Clinica odontologica moderna com diagnostico digital, cuidado humano e tratamentos personalizados.",
    category: "Landing Pages",
    cardImage: "/images/arco/project-cover.webp",
    industry: "Saúde",
    projectType: "Clinica odontologica",
    goal: "Comunicar cuidado humano, tecnologia e tratamentos odontologicos para gerar agendamentos.",
    tags: ["Odontologia", "Sorriso", "Agendamento"],
    visible: true,
    component: ArcoLanding,
  },
  {
    index: "12",
    slug: "dragon-tattoo",
    aliases: ["atlas-living", "landing-08-residencia-autoral"],
    title: "Dragon Tattoo",
    description:
      "Estudio premium especializado em tatuagens orientais e japonesas autorais.",
    category: "Landing Pages",
    cardImage: "/images/dragon-tattoo/project-cover.webp",
    industry: "Arte e tatuagem",
    projectType: "Estudio de tatuagem oriental",
    goal: "Comunicar exclusividade, tradicao oriental e excelencia tecnica para gerar consultas qualificadas.",
    tags: ["Tatuagem oriental", "Arte japonesa", "Projetos autorais"],
    visible: true,
    component: DragonTattooLanding,
  },
  {
    index: "13",
    slug: "haven",
    title: "HAVEN",
    description:
      "Espaco especializado em cortes de cabelo e cuidados pessoais para pessoas autistas e neurodivergentes.",
    category: "Landing Pages",
    cardImage: "/images/haven/project-cover.webp",
    industry: "Cuidados pessoais",
    projectType: "Espaco inclusivo de beleza",
    goal: "Comunicar acolhimento, previsibilidade e atendimento humanizado para gerar confianca e agendamentos.",
    tags: ["Inclusao", "Autismo", "Atendimento humanizado"],
    visible: true,
    component: HavenLanding,
  },
  {
    index: "14",
    slug: "prisma-fellows",
    aliases: ["landing-12-educacao-executiva"],
    title: "Prisma Fellows",
    description:
      "Educação executiva para lideranças seniores e programas aplicados.",
    category: "Landing Pages",
    industry: "Educação",
    projectType: "Educação executiva",
    goal: "Apresentar programas, autoridade acadêmica e aplicação prática para lideranças.",
    tags: ["Cursos", "Liderança", "B2B"],
    visible: false,
    component: Landing12EducacaoExecutiva,
  },
  {
    index: "15",
    slug: "nivela-cold",
    aliases: ["landing-13-logistica-fria"],
    title: "Nivela Cold",
    description:
      "Logística fria com rastreabilidade, SLA e operação controlada.",
    category: "Landing Pages",
    industry: "Logística",
    projectType: "Logística fria",
    goal: "Comunicar controle operacional, rastreabilidade e confiança para cargas sensíveis.",
    tags: ["SLA", "Rastreabilidade", "Operação"],
    visible: false,
    component: Landing13LogisticaFria,
  },
  {
    index: "16",
    slug: "terrametria",
    aliases: ["landing-14-agritech-precisão"],
    title: "TerraMetria",
    description: "Agritech de precisão para fazendas orientadas por dados.",
    category: "Landing Pages",
    industry: "Agronegócio",
    projectType: "Agritech",
    goal: "Mostrar inteligência de dados, previsibilidade e ganho produtivo no campo.",
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
      "Cibersegurança corporativa com governança, resposta e monitoramento.",
    category: "Landing Pages",
    industry: "Tecnologia",
    projectType: "Cibersegurança",
    goal: "Traduzir proteção, governança e resposta para times executivos.",
    tags: ["Segurança", "Governança", "Monitoramento"],
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
    goal: "Elevar reparo, redesign e curadoria como serviço de moda premium.",
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
      "Vinícola boutique de altitude com portfólio, visitas e clube.",
    category: "Landing Pages",
    industry: "Bebidas",
    projectType: "Vinícola boutique",
    goal: "Apresentar origem, portfólio e clube de vinhos com narrativa sensorial.",
    tags: ["Vinhos", "Clube", "Experiência"],
    visible: false,
    component: Landing18VinhoAltitude,
  },
  {
    index: "20",
    slug: "novera-labs",
    aliases: ["landing-19-laboratorio-farmaceutico"],
    title: "Novera Labs",
    description: "Laboratório farmacêutico com P&D, qualidade e transferência.",
    category: "Landing Pages",
    industry: "Saúde",
    projectType: "Laboratório farmacêutico",
    goal: "Comunicar pesquisa, qualidade e transferência tecnológica com rigor institucional.",
    tags: ["P&D", "Qualidade", "Indústria"],
    visible: false,
    component: Landing19LaboratorioFarmaceutico,
  },
  {
    index: "21",
    slug: "doca-norte",
    aliases: ["landing-20-infraestrutura-portuaria"],
    title: "Doca Norte",
    description:
      "Infraestrutura portuária com torre de controle e previsibilidade.",
    category: "Landing Pages",
    industry: "Infraestrutura",
    projectType: "Operação portuária",
    goal: "Mostrar previsibilidade, controle e capacidade operacional para grandes cargas.",
    tags: ["Operação", "Portos", "Controle"],
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

