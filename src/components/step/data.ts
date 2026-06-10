export const stepWhatsappNumber = "5500000000000";

export const stepWhatsappMessage =
  "Oi, STEP. Quero solicitar uma avaliação técnica para o meu sneaker.";

export const stepWhatsappHref = `https://wa.me/${stepWhatsappNumber}?text=${encodeURIComponent(
  stepWhatsappMessage,
)}`;

export const stepImages = {
  background: "/images/step/bg-image.png",
  logoBlack: "/images/step/logo-black.webp",
  logoWhite: "/images/step/logo-white.webp",
  hero: "/images/step/hero-par-de-tenis-jordan.webp",
  studio: "/images/step/ambiente-da-step.webp",
  before: "/images/step/tenis-antes-da-limpeza.webp",
  after: "/images/step/tenis-depois-da-limpeza.webp",
  handoff:
    "/images/step/funcionario-entregando-caixa-com-servico-finalizado-para-o-cliente.webp",
  processDeep:
    "/images/step/primeiro-passo-do-processo-de-limpeza-limpeza-profunda.webp",
  processDetail:
    "/images/step/segundo-passo-do-processo-de-limpeza-limpeza-detalhada.webp",
  processDelivery:
    "/images/step/terceiro-passo-do-processo-de-limpeza-entrega.webp",
} as const;

export const stepNav = [
  { href: "#posicionamento", label: "Posicionamento" },
  { href: "#processo", label: "Processo" },
  { href: "#resultado", label: "Resultado" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#contato", label: "Contato" },
] as const;

export const stepMetrics = [
  { value: "01", label: "estúdio técnico dedicado a sneaker care premium" },
  {
    value: "03",
    label: "frentes centrais: manutenção, higienização e restauração",
  },
  {
    value: "100%",
    label: "processo pensado para preservar material, forma e valor",
  },
] as const;

export const stepPillars = [
  {
    title: "Precisão em vez de improviso",
    text: "Cada tênis entra em uma rotina técnica definida pelo material, pelo acabamento e pelo nível de intervenção necessário.",
  },
  {
    title: "Conservação como prioridade",
    text: "A STEP cuida para devolver limpeza, leitura visual e estrutura sem sacrificar cola, costura, espuma ou textura.",
  },
  {
    title: "Resultado com critério",
    text: "O objetivo não é mascarar. É restaurar o melhor estado possível com transparência sobre limite, risco e expectativa.",
  },
] as const;

export const stepServices = [
  "Higienização técnica para uso recorrente",
  "Manutenção preventiva para sneakers de coleção",
  "Restauração visual para pares com desgaste evidente",
  "Conservação focada em materiais sensíveis e acabamentos especiais",
] as const;

export const stepProcess = [
  {
    id: "01",
    title: "Diagnóstico e limpeza profunda",
    text: "O par é analisado antes de qualquer ação. Tipo de sujeira, desgaste, cola, camurça, couro, mesh e partes estruturais definem o tratamento.",
    image: stepImages.processDeep,
    alt: "Primeira etapa técnica de limpeza profunda em sneaker da STEP",
  },
  {
    id: "02",
    title: "Limpeza detalhada por material",
    text: "A execução respeita composição, pigmento e acabamento. Cada superfície recebe método, produto e fricção adequados para evitar dano visual ou estrutural.",
    image: stepImages.processDetail,
    alt: "Segunda etapa do processo da STEP com limpeza detalhada do sneaker",
  },
  {
    id: "03",
    title: "Finalização, conservação e entrega",
    text: "O tênis sai revisado, estabilizado e pronto para retornar ao uso ou ao acervo com apresentação premium e orientação de conservação.",
    image: stepImages.processDelivery,
    alt: "Etapa final de entrega do sneaker após serviço da STEP",
  },
] as const;

export const stepMaterials = [
  "Couro liso e couro premium",
  "Camurça, nobuck e materiais porosos",
  "Mesh, espuma e construções mistas",
  "Solados claros, detalhes pintados e áreas de atrito",
] as const;
