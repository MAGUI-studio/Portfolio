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
  logo: "/images/shinobi/logo.png",
  icon: "/images/shinobi/logo_icon.png",
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
    name: "Maca Verde",
    profile: "Citrico e preciso",
    description: "Ataque fresco, crocante e limpo para manter a mente afiada.",
    accent: "#73b82b",
    fundo: "/images/shinobi/bebidas/maca-verde/fundo.png",
    lata: "/images/shinobi/bebidas/maca-verde/lata.png",
    final: "/images/shinobi/bebidas/maca-verde/final.png",
    rotulo: "/images/shinobi/bebidas/maca-verde/rotulo.png",
  },
  {
    slug: "morango",
    name: "Morango",
    profile: "Frutado e direto",
    description:
      "Perfil vermelho, intenso e facil de beber sem perder atitude.",
    accent: "#e73543",
    fundo: "/images/shinobi/bebidas/morango/fundo.png",
    lata: "/images/shinobi/bebidas/morango/lata.png",
    final: "/images/shinobi/bebidas/morango/final.png",
    rotulo: "/images/shinobi/bebidas/morango/rotulo.png",
  },
  {
    slug: "abacaxi",
    name: "Abacaxi",
    profile: "Tropical e eletrico",
    description:
      "Acidez brilhante, final doce e uma assinatura que corta o calor.",
    accent: "#d99d18",
    fundo: "/images/shinobi/bebidas/abacaxi/fundo.png",
    lata: "/images/shinobi/bebidas/abacaxi/lata.png",
    final: "/images/shinobi/bebidas/abacaxi/final.png",
    rotulo: "/images/shinobi/bebidas/abacaxi/rotulo.png",
  },
  {
    slug: "acai",
    name: "Acai",
    profile: "Denso e noturno",
    description:
      "Fruta escura, corpo cheio e presenca forte para viradas longas.",
    accent: "#a733ca",
    fundo: "/images/shinobi/bebidas/acai/fundo.png",
    lata: "/images/shinobi/bebidas/acai/lata.png",
    final: "/images/shinobi/bebidas/acai/final.png",
    rotulo: "/images/shinobi/bebidas/acai/rotulo.png",
  },

  {
    slug: "melancia",
    name: "Melancia",
    profile: "Gelado e explosivo",
    description: "Doce suculento, refrescancia alta e energia de fim de tarde.",
    accent: "#db2028",
    fundo: "/images/shinobi/bebidas/melancia/fundo.png",
    lata: "/images/shinobi/bebidas/melancia/lata.png",
    final: "/images/shinobi/bebidas/melancia/final.png",
    rotulo: "/images/shinobi/bebidas/melancia/rotulo.png",
  },
  {
    slug: "pessego",
    name: "Pessego",
    profile: "Maciez com impacto",
    description: "Aroma macio, fruta madura e um golpe final mais aveludado.",
    accent: "#e57418",
    fundo: "/images/shinobi/bebidas/pessego/fundo.png",
    lata: "/images/shinobi/bebidas/pessego/lata.png",
    final: "/images/shinobi/bebidas/pessego/final.png",
    rotulo: "/images/shinobi/bebidas/pessego/rotulo.png",
  },
];

export const shinobiSignals = [
  ["Energia", "Ritmo alto para treino, estudo, game e noite."],
  ["Foco", "Presenca marcante para entrar em modo missao."],
  [
    "Resistencia",
    "Bebida gelada, carbonatada e pronta para acompanhar o corre.",
  ],
  ["Sabor", "Fruta evidente para o energetico nao virar ruido generico."],
];

export const shinobiOccasions = [
  {
    title: "Treino noturno",
    text: "Uma lata gelada antes da sessao em que o corpo precisa responder rapido.",
  },
  {
    title: "Game e streaming",
    text: "Presenca de marca para setup, arena, live e maratona competitiva.",
  },
  {
    title: "Estrada e festival",
    text: "Consumo frio, rapido e visualmente forte em rotas, conveniencias e eventos.",
  },
];

export const shinobiTrade = [
  "Seis sabores com cor propria no freezer",
  "Lata 269 ml para compra impulsiva",
  "Identidade forte para ponto de venda",
  "Campanha pronta para redes sociais e ativacoes",
];

export const shinobiRitual = [
  "Resfrie ate a lata suar.",
  "Abra no momento de virada.",
  "Escolha o sabor pela missao do dia.",
];
