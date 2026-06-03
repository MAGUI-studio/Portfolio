export type ShinobiFlavor = {
  accent: string;
  description: string;
  final: string;
  fundo: string;
  lata: string;
  name: string;
  profile: string;
  rotulo: string;
  slug: string;
};

export const shinobiBrand = {
  logo: "/images/shinobi/logo.webp",
  icon: "/images/shinobi/logo_icon.webp",
};

export const shinobiWhatsappHref =
  "https://wa.me/5500000000000?text=Oi%2C%20SHINOBI.%20Quero%20fazer%20um%20pedido.";

export const shinobiNav = [
  { label: "Sabores", href: "#sabores" },
  { label: "Pedido", href: "#pedido" },
];

export const shinobiFlavors: ShinobiFlavor[] = [
  {
    slug: "maca-verde",
    name: "Maçã Verde",
    profile: "Cítrico e preciso",
    description: "Ataque fresco, crocante e limpo para manter a mente afiada.",
    accent: "#73b82b",
    fundo: "/images/shinobi/bebidas/maca-verde/fundo.webp",
    lata: "/images/shinobi/bebidas/maca-verde/lata.webp",
    final: "/images/shinobi/bebidas/maca-verde/final.webp",
    rotulo: "/images/shinobi/bebidas/maca-verde/rotulo.webp",
  },
  {
    slug: "morango",
    name: "Morango",
    profile: "Frutado e direto",
    description:
      "Perfil vermelho, intenso e fácil de beber sem perder atitude.",
    accent: "#e73543",
    fundo: "/images/shinobi/bebidas/morango/fundo.webp",
    lata: "/images/shinobi/bebidas/morango/lata.webp",
    final: "/images/shinobi/bebidas/morango/final.webp",
    rotulo: "/images/shinobi/bebidas/morango/rotulo.webp",
  },
  {
    slug: "abacaxi",
    name: "Abacaxi",
    profile: "Tropical e elétrico",
    description:
      "Acidez brilhante, final doce e uma assinatura que corta o calor.",
    accent: "#d99d18",
    fundo: "/images/shinobi/bebidas/abacaxi/fundo.webp",
    lata: "/images/shinobi/bebidas/abacaxi/lata.webp",
    final: "/images/shinobi/bebidas/abacaxi/final.webp",
    rotulo: "/images/shinobi/bebidas/abacaxi/rotulo.webp",
  },
  {
    slug: "acai",
    name: "Açaí",
    profile: "Denso e noturno",
    description:
      "Fruta escura, corpo cheio e presença forte para viradas longas.",
    accent: "#a733ca",
    fundo: "/images/shinobi/bebidas/acai/fundo.webp",
    lata: "/images/shinobi/bebidas/acai/lata.webp",
    final: "/images/shinobi/bebidas/acai/final.webp",
    rotulo: "/images/shinobi/bebidas/acai/rotulo.webp",
  },

  {
    slug: "melancia",
    name: "Melancia",
    profile: "Gelado e explosivo",
    description: "Doce suculento, refrescância alta e energia de fim de tarde.",
    accent: "#db2028",
    fundo: "/images/shinobi/bebidas/melancia/fundo.webp",
    lata: "/images/shinobi/bebidas/melancia/lata.webp",
    final: "/images/shinobi/bebidas/melancia/final.webp",
    rotulo: "/images/shinobi/bebidas/melancia/rotulo.webp",
  },
  {
    slug: "pessego",
    name: "Pêssego",
    profile: "Maciez com impacto",
    description: "Aroma macio, fruta madura e um golpe final mais aveludado.",
    accent: "#e57418",
    fundo: "/images/shinobi/bebidas/pessego/fundo.webp",
    lata: "/images/shinobi/bebidas/pessego/lata.webp",
    final: "/images/shinobi/bebidas/pessego/final.webp",
    rotulo: "/images/shinobi/bebidas/pessego/rotulo.webp",
  },
];

export const shinobiSignals = [
  ["Energia", "Ritmo alto para treino, estudo, game e noite."],
  ["Foco", "Presença marcante para entrar em modo missão."],
  [
    "Resistência",
    "Bebida gelada, carbonatada e pronta para acompanhar o corre.",
  ],
  ["Sabor", "Fruta evidente para o energético não virar ruído genérico."],
];

export const shinobiOccasions = [
  {
    title: "Treino noturno",
    text: "Uma lata gelada antes da sessão em que o corpo precisa responder rápido.",
  },
  {
    title: "Game e streaming",
    text: "Presença de marca para setup, arena, live e maratona competitiva.",
  },
  {
    title: "Estrada e festival",
    text: "Consumo frio, rápido e visualmente forte em rotas, conveniências e eventos.",
  },
];

export const shinobiTrade = [
  "Seis sabores com cor própria no freezer",
  "Lata 269 ml para compra impulsiva",
  "Identidade forte para ponto de venda",
  "Campanha pronta para redes sociais e ativações",
];

export const shinobiRitual = [
  "Resfrie até a lata suar.",
  "Abra no momento de virada.",
  "Escolha o sabor pela missão do dia.",
];
