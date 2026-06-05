export const dragonTattooImages = {
  gallery01: "/images/dragon-tattoo/01-tatuagens-realizadas-no-estudio.webp",
  gallery02: "/images/dragon-tattoo/02-tatuagens-realizadas-no-estudio.webp",
  gallery03: "/images/dragon-tattoo/03-tatuagens-realizadas-no-estudio.webp",
  gallery04: "/images/dragon-tattoo/04-tatuagens-realizadas-no-estudio.webp",
  gallery05: "/images/dragon-tattoo/05-tatuagens-realizadas-no-estudio.webp",
  serviceArea: "/images/dragon-tattoo/area-de-atendimento.webp",
  facade: "/images/dragon-tattoo/fachada-estudio.webp",
  hero: "/images/dragon-tattoo/hero-fundadores-da-dragon-tattoo-mateus-silva-e-stephanie-souza.webp",
  heroImage: "/images/dragon-tattoo/hero-image.webp",
  iconBlack: "/images/dragon-tattoo/icon-black.webp",
  iconWhite: "/images/dragon-tattoo/icon-white.webp",
  logoBlack: "/images/dragon-tattoo/logo-black.webp",
  logoWhite: "/images/dragon-tattoo/logo-white.webp",
  decal:
    "/images/dragon-tattoo/mateus-silva-aplicando-decalque-na-coxa-de-uma-mulher.webp",
  dragonBack:
    "/images/dragon-tattoo/mateus-silva-tatuando-um-dragao-nas-costas-de-uma-cliente.webp",
  reception: "/images/dragon-tattoo/recepcao-estudio.webp",
  oniBack:
    "/images/dragon-tattoo/stephanie-souza-tatuando-mascara-de-oni-nas-costas-de-um-homem.webp",
  cover: "/images/dragon-tattoo/project-cover.webp",
};

export const dragonTattooPhoneNumber = "5500000000000";

export function createDragonTattooWhatsappHref(message: string) {
  return `https://wa.me/${dragonTattooPhoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export const dragonTattooWhatsappMessage =
  "Olá, Dragon Tattoo. Quero um orçamento para uma tatuagem oriental personalizada.";

export const dragonTattooScheduleMessage =
  "Olá, Dragon Tattoo. Quero marcar um horário para conversar sobre minha tatuagem.";

export const dragonTattooVisitMessage =
  "Olá, Dragon Tattoo. Quero agendar uma visita ao estúdio.";

export const dragonTattooBudgetWhatsapp = createDragonTattooWhatsappHref(
  dragonTattooWhatsappMessage,
);

export const dragonTattooScheduleWhatsapp = createDragonTattooWhatsappHref(
  dragonTattooScheduleMessage,
);

export const dragonTattooVisitWhatsapp = createDragonTattooWhatsappHref(
  dragonTattooVisitMessage,
);

export const dragonTattooWhatsapp = dragonTattooBudgetWhatsapp;

export const dragonTattooNav = [
  { label: "Método", href: "#metodo" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Contato", href: "#contato" },
];

export const specialties = [
  "Tatuagens japonesas tradicionais",
  "Tatuagens orientais",
  "Dragões orientais",
  "Máscaras Oni",
  "Samurais e gueixas",
  "Carpas Koi e tigres japoneses",
  "Serpentes orientais",
  "Fechamentos de grandes áreas",
];

export const projectFormats = [
  [
    "Fechamento de costas",
    "Composições amplas, narrativas e planejadas para impacto total.",
  ],
  [
    "Fechamento de braços",
    "Fluxo anatômico para mangas orientais com leitura em movimento.",
  ],
  [
    "Fechamento de pernas",
    "Projetos integrados que equilibram força, ritmo e detalhe.",
  ],
  ["Peitorais", "Peças frontais com presença, simetria e simbolismo pessoal."],
];

export const values = [
  "Excelência artística",
  "Respeito à tradição oriental",
  "Atendimento personalizado",
  "Compromisso com a qualidade",
  "Evolução constante",
  "Transparência e confiança",
];
