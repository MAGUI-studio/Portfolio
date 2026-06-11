export const floraWhatsappNumber = "5500000000000";

export const floraWhatsappMessage =
  "Oi, Flora. Quero conhecer as plantas e soluções para transformar meus ambientes.";

export const floraWhatsappHref = `https://wa.me/${floraWhatsappNumber}?text=${encodeURIComponent(
  floraWhatsappMessage,
)}`;

export const floraImages = {
  logoGreen: "/images/flora/logo-green.webp",
  logoWhite: "/images/flora/logo-white.webp",
  hero: "/images/flora/hero-image-interior-da-loja.webp",
  interior: "/images/flora/interior-da-loja-flora.webp",
  attendant: "/images/flora/funcionario-atendendo-cliente.webp",
  map: "/images/flora/mapa.webp",
  caretaker: "/images/flora/funcionario-cuidando-das-plantas.webp",
  packaging: "/images/flora/embalagem-flora.webp",
  pots: "/images/flora/sessao-de-vasos-para-venda.webp",
  raphis: "/images/flora/palmeira-raphis.webp",
  carnivores: "/images/flora/plantas-carnivoras.webp",
  fern: "/images/flora/samambaia.webp",
  succulents: "/images/flora/suculentas.webp",
  testimonial01: "/images/flora/depoimento-01.webp",
  testimonial02: "/images/flora/depoimento-02.webp",
  testimonial03: "/images/flora/depoimento-03.webp",
} as const;

export const floraNav = [
  { href: "#colecao", label: "Coleções" },
  { href: "#ambientes", label: "Ambientes" },
  { href: "#cultivo", label: "Cultivo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

export const floraHeroBadges = [
  "Arquitetura verde",
  "Plantas de coleção",
  "Decoração natural",
] as const;

export const floraCollections = [
  {
    title: "Folhagens esculturais",
    text: "Espécies que transformam salas, halls e escritórios em ambientes vivos e sofisticados.",
    image: floraImages.raphis,
    alt: "Palmeira raphis em destaque no garden center Flora",
  },
  {
    title: "Espécies tropicais",
    text: "Plantas marcantes para quem quer criar presença botânica com elegância contemporânea.",
    image: floraImages.fern,
    alt: "Samambaia exuberante da coleção da Flora",
  },
  {
    title: "Coleções compactas",
    text: "Suculentas e espécies especiais para composições delicadas em mesas, estantes e aparadores.",
    image: floraImages.succulents,
    alt: "Seleção de suculentas na Flora",
  },
  {
    title: "Curiosidades botânicas",
    text: "Plantas singulares para quem valoriza raridade, presença visual e personalidade.",
    image: floraImages.carnivores,
    alt: "Plantas carnívoras em exposição na Flora",
  },
] as const;

export const floraExperiencePoints = [
  "Mais próximo de uma boutique de decoração do que de uma floricultura convencional.",
  "Curadoria de vasos, acessórios e espécies para compor ambientes internos com naturalidade.",
  "Atendimento pensado para orientar escolha, composição e continuidade do cultivo em casa.",
] as const;

export const floraCultivationSteps = [
  {
    title: "Curadoria de espécies",
    text: "Seleção de plantas ornamentais, tropicais e de coleção com leitura de estilo, luminosidade e rotina do ambiente.",
  },
  {
    title: "Composição do ambiente",
    text: "Vasos, alturas, volumes e texturas são pensados para transformar a planta em parte da arquitetura do espaço.",
  },
  {
    title: "Continuidade do cuidado",
    text: "A experiência segue com orientação de cultivo, manutenção e escolhas que sustentam bem-estar no dia a dia.",
  },
] as const;

export const floraServices = [
  {
    title: "Curadoria para interiores",
    text: "Indicações pensadas para luz, rotina, escala do ambiente e estilo de decoração.",
  },
  {
    title: "Composição com vasos e alturas",
    text: "Combinações que equilibram textura, presença visual e leitura arquitetônica do espaço.",
  },
  {
    title: "Apoio para presentes e ocasiões",
    text: "Sugestões com mais intenção estética para quem quer presentear com naturalidade e elegância.",
  },
] as const;

export const floraServiceHighlights = [
  "Espécies ornamentais e tropicais",
  "Vasos, suportes e acabamentos",
  "Soluções para apartamentos e casas",
  "Leitura de ambiente com olhar decorativo",
] as const;

export const floraProcessSteps = [
  {
    eyebrow: "01",
    title: "Você apresenta o ambiente",
    text: "A equipe entende o espaço, a luminosidade, a rotina e a intenção estética da escolha.",
  },
  {
    eyebrow: "02",
    title: "A Flora orienta a composição",
    text: "Espécies, vasos e proporções são sugeridos para criar uma solução mais segura e harmônica.",
  },
  {
    eyebrow: "03",
    title: "Você leva uma escolha mais clara",
    text: "O resultado é uma compra com mais confiança, coerência visual e continuidade no cuidado.",
  },
] as const;

export const floraAudiences = [
  "Apartamentos que precisam de vida sem perder sofisticação.",
  "Casas que pedem composições naturais e presença botânica.",
  "Escritórios, recepções e ambientes de trabalho mais acolhedores.",
  "Arquitetos e designers que buscam curadoria vegetal para seus projetos.",
] as const;

export const floraDifferentials = [
  "Curadoria refinada em vez de escolha genérica.",
  "Atendimento próximo, com orientação real de composição.",
  "Leitura de decoração, proporção e atmosfera.",
  "Experiência de compra mais calma, sensorial e inspiradora.",
] as const;

export const floraTestimonials = [
  {
    name: "Marina A.",
    role: "Cliente Flora",
    quote:
      "A Flora não me vendeu só plantas. Me ajudou a construir um apartamento mais vivo, elegante e acolhedor.",
    image: floraImages.testimonial01,
  },
  {
    name: "Eduardo R.",
    role: "Arquiteto parceiro",
    quote:
      "A curadoria é impecável. Tudo parece pensado para dialogar com interiores contemporâneos, não apenas para preencher espaços.",
    image: floraImages.testimonial02,
  },
  {
    name: "Luciana M.",
    role: "Cliente Flora",
    quote:
      "Entrar na loja é como entrar em uma estufa moderna. A experiência inspira e dá vontade de levar mais natureza para casa.",
    image: floraImages.testimonial03,
  },
] as const;
