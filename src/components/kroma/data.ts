import {
  CalendarCheck,
  ChartLineUp,
  CompassTool,
  Gauge,
  Lightning,
  SolarPanel,
  TrendUp,
} from "@phosphor-icons/react/ssr";

export const images = {
  hero: "/images/kroma/painel.webp",
  industrial: "/images/kroma/industrial.webp",
  residential: "/images/kroma/residencial.webp",
  business: "/images/kroma/empresarial.webp",
  panels: "/images/kroma/paineis_sol.webp",
};

export const productImages = [
  "/images/kroma/painel.webp",
  "/images/kroma/inversor.webp",
  "/images/kroma/estruturas.webp",
  "/images/kroma/bateria.webp",
  "/images/kroma/monitoramento.webp",
];

export const whatsappHref =
  "https://wa.me/5500000000000?text=Quero%20falar%20com%20um%20especialista%20da%20Kroma";

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Processo", href: "#processo" },
  { label: "Monitoramento", href: "#monitoramento" },
  { label: "Contato", href: "#contato" },
];

export const proof = [
  {
    value: "12 a 72 kWp",
    label: "energia KROMA para casas e negócios em crescimento",
  },
  {
    value: "100 kWp+",
    label: "força solar para empresas, galpões e indústrias",
  },
  { value: "25 anos", label: "performance projetada para atravessar ciclos" },
  {
    value: "24/7",
    label: "geração acompanhada para manter o futuro em movimento",
  },
];

export const solutions = [
  {
    title: "Residencial",
    image: images.residential,
    text: "A energia que move o futuro começa em casa: menos dependência da rede, mais controle da conta e preparo para uma rotina elétrica sustentável.",
    metric: "12 a 72 kWp",
    caption:
      "casas, sobrados, condomínios e propriedades com consumo crescente",
    points: [
      "telhado ou solo",
      "inversor string ou microinversor",
      "opção com bateria",
    ],
  },
  {
    title: "Comercial",
    image: images.business,
    text: "Para negócios que buscam transformar a energia em vantagem competitiva, com retorno claro e operação previsível.",
    metric: "redução previsível",
    caption:
      "lojas, clínicas, escritórios, mercados e pequenos centros operacionais",
    points: [
      "análise de consumo",
      "financiamento solar",
      "homologação inclusa",
    ],
  },
  {
    title: "Industrial",
    image: images.industrial,
    text: "A força da KROMA aplicada a plantas produtivas: engenharia, segurança e energia própria para sustentar o crescimento.",
    metric: "100 kWp+",
    caption: "galpões, plantas produtivas, centros logísticos e áreas de solo",
    points: ["estudo de demanda", "projeto executivo", "operação assistida"],
  },
];

export const products = [
  {
    icon: SolarPanel,
    title: "Painéis fotovoltaicos",
    text: "Módulos de alta eficiência para transformar a área disponível em geração confiável, com rigorosos critérios de performance e garantia.",
  },
  {
    icon: Lightning,
    title: "Inversores e proteções",
    text: "O centro de comando da energia KROMA: conversão, proteção e arquitetura elétrica perfeitamente preparada para expansões.",
  },
  {
    icon: CompassTool,
    title: "Estruturas de fixação",
    text: "Base técnica para telhado, solo ou carport, calculada para resistir a intempéries, preservar o imóvel e facilitar a manutenção.",
  },
  {
    icon: Gauge,
    title: "Baterias e backup",
    text: "Reserva estratégica para cargas críticas, horários de ponta e autonomia total onde a continuidade operacional é parte do futuro.",
  },
  {
    icon: ChartLineUp,
    title: "Monitoramento",
    text: "O sistema não fica invisível após a entrega: dados de geração, desvios e economia aparecem de forma clara e acompanhável.",
  },
];

export const process = [
  [
    "01",
    "Consumo e ambição",
    "Entendemos quanto você consome hoje e qual futuro essa energia precisa mover: seja em uma residência, empresa ou indústria.",
  ],
  [
    "02",
    "Projeto de geração",
    "Simulamos a potência ideal, equipamentos necessários, perdas, sombreamento, retorno sobre o investimento e possibilidades reais de expansão.",
  ],
  [
    "03",
    "Proposta transparente",
    "Você recebe premissas detalhadas, estimativa de payback, garantias, escopo, cronograma e um comparativo técnico entre as configurações.",
  ],
  [
    "04",
    "Homologação",
    "Cuidamos de toda a documentação técnica, aprovações de engenharia e interface direta com a concessionária de energia local.",
  ],
  [
    "05",
    "Instalação KROMA",
    "Nossa equipe altamente especializada instala painéis, inversores, estruturas e proteções seguindo um padrão técnico rigoroso.",
  ],
  [
    "06",
    "Sistema em movimento",
    "Realizamos o comissionamento, orientamos sobre o uso do aplicativo e acompanhamos de perto a performance para manter a promessa de entrega viva.",
  ],
];

export const packages = [
  {
    name: "Casa Eficiente",
    tag: "residencial",
    detail:
      "Para famílias que desejam energia própria, previsibilidade financeira e uma residência totalmente preparada para o futuro elétrico.",
    includes: [
      "módulos solares",
      "inversor adequado",
      "homologação",
      "aplicativo de geração",
    ],
  },
  {
    name: "Empresa Previsível",
    tag: "comercial",
    detail:
      "Para negócios que precisam reduzir custos fixos, mitigar oscilações tarifas e chancelar seu compromisso com a sustentabilidade.",
    includes: [
      "projeto financeiro",
      "obra executada por etapas",
      "relatório mensal de desempenho",
      "linhas de financiamento customizadas",
    ],
  },
  {
    name: "Planta KROMA",
    tag: "industrial",
    detail:
      "Para indústrias que tratam a energia como infraestrutura estratégica de crescimento, produtividade e competitividade de mercado.",
    includes: [
      "estudo aprofundado de demanda",
      "projeto executivo completo",
      "comissionamento técnico",
      "SLA dedicado de suporte",
    ],
  },
];

export const monitoring = [
  {
    icon: ChartLineUp,
    title: "Geração em tempo real",
    text: "Monitore a energia KROMA trabalhando diariamente, mensalmente e anualmente, com comparativos precisos em relação à curva estimada.",
  },
  {
    icon: CalendarCheck,
    title: "Rotina preventiva",
    text: "Inspeções periódicas, limpeza programada, testes elétricos e análises de alarmes garantem que a geração opere sempre em sua capacidade máxima.",
  },
  {
    icon: TrendUp,
    title: "Expansão planejada",
    text: "Quando a sua demanda de consumo crescer, a nossa arquitetura nativa orientará a ampliação de potência sem perder o investimento já realizado.",
  },
];

export const faqs = [
  {
    question: "A KROMA vende apenas os equipamentos?",
    answer:
      "Sim, realizamos a venda. No entanto, nossa recomendação principal é o ecossistema completo: painéis, inversores, estruturas, proteções, homologação e suporte integrado. Dessa forma, garantimos que o sistema opere com máxima coerência técnica.",
  },
  {
    question: "O sistema atende tanto residências quanto indústrias?",
    answer:
      "Atende perfeitamente a ambos, mas a engenharia do projeto muda significativamente. O cenário residencial prioriza harmonia estética e simplicidade operacional. Já o ambiente industrial exige análise rigorosa de demanda, conformidades de segurança, cronogramas de obra complexos e governança sobre o retorno financeiro.",
  },
  {
    question: "É possível realizar o financiamento do projeto?",
    answer:
      "Sim. A KROMA estrutura diferentes cenários de investimento para que você possa comparar com clareza as vantagens do pagamento à vista, linhas de financiamento solar e estratégias de expansão por fases.",
  },
  {
    question: "Após a finalização da instalação, quem acompanha o sistema?",
    answer:
      "O cliente possui monitoramento total através de nosso aplicativo, enquanto a KROMA acompanha desvios operacionais relevantes, emite alertas de manutenção e fornece relatórios técnicos detalhados de acordo com o nível de suporte contratado.",
  },
];

export const credits = [
  {
    name: "Unsplash",
    url: "https://unsplash.com/s/photos/solar-panels",
  },
  {
    name: "Pexels / Roman Odintsov",
    url: "https://www.pexels.com/video/aerial-footage-of-a-solar-panels-7038597/",
  },
];
