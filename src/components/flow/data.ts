export const flowImages = {
  aquariumInterior: "/images/flow/aquario-exposto-no-interior-da-loja.webp",
  coralArea: "/images/flow/area-de-corais-raros-separados-por-frag-plugs.webp",
  clownfishPurchase: "/images/flow/casal-efetuando-compra-de-peixe-palhaco-e-anemona.webp",
  facade: "/images/flow/fachada-da-loja.webp",
  familyClownfish: "/images/flow/familia-comprando-casal-de-peixes-palhaco.webp",
  familyGuidance: "/images/flow/familia-recebendo-instrucoes-na-compra-de-aquario-marinho.webp",
  hero: "/images/flow/hero-casal-admirando-aquario-de-peixes-palhaco.webp",
  interior: "/images/flow/interior-da-loja.webp",
  logoDark: "/images/flow/logo-dark.webp",
  logoLight: "/images/flow/logo-light.webp",
  fishWall: "/images/flow/parede-de-aquarios-com-peixes-disponiveis-para-venda.webp",
  rareFishWall: "/images/flow/parede-de-aquarios-de-peixes-e-especies-raras.webp",
  products: "/images/flow/produtos-disponiveis-para-venda.webp",
} as const;

export const flowWhatsappNumber = "5500000000000";

export const flowWhatsappMessage =
  "Oi, FLOW. Quero orientação para montar ou evoluir meu aquário marinho.";

export const flowNav = [
  { label: "Reefs", href: "#reefs" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Vivos", href: "#vivos" },
  { label: "Loja", href: "#loja" },
  { label: "Método", href: "#metodo" },
] as const;

export const flowCategories = [
  "Aquários marinhos",
  "Iluminação reef",
  "Bombas e circulação",
  "Skimmers e filtragem",
  "Corais selecionados",
  "Peixes ornamentais",
] as const;

export const flowSystems = [
  {
    title: "Nano reef guiado",
    text: "Primeiros litros com escolha correta de rochas, substrato, sal, circulação e rotina de estabilidade.",
    metric: "40L+",
  },
  {
    title: "Reef misto premium",
    text: "Sistema equilibrado para peixes, corais moles, LPS e upgrades graduais sem improviso.",
    metric: "120L+",
  },
  {
    title: "SPS e alta demanda",
    text: "Parametros finos, luz intensa, dosagem, redundância e leitura técnica para reefs exigentes.",
    metric: "300L+",
  },
] as const;

export const flowMethod = [
  ["01", "Leitura do objetivo", "Tamanho, rotina, espécies desejadas e nivel de experiência definem a arquitetura do reef."],
  ["02", "Curadoria técnica", "Equipamentos, vivos e insumos entram em uma lista coerente, sem compra duplicada ou subdimensionada."],
  ["03", "Montagem assistida", "Orientação para ciclagem, estabilidade biológica, primeiros habitantes e evolução segura."],
  ["04", "Acompanhamento", "Testes, ajustes, reposição e manutenção ajudam o sistema a amadurecer com previsibilidade."],
] as const;

export const flowExperience = [
  {
    title: "Fachada viva",
    text: "Uma entrada transparente, iluminada e pensada para colocar o reef no centro da experiência.",
    image: flowImages.facade,
    alt: "Fachada da loja FLOW com aquários marinhos visiveis pela vitrine",
  },
  {
    title: "Interior tecnico",
    text: "Prateleiras, displays e aquários organizados para comparação clara entre equipamentos e vivos.",
    image: flowImages.interior,
    alt: "Interior da loja FLOW com aquários e produtos para reef",
  },
  {
    title: "Compra orientada",
    text: "Atendimento próximo para escolher espécies, equipamentos e insumos com critério.",
    image: flowImages.clownfishPurchase,
    alt: "Casal recebendo compra de peixe palhaco e anemona na FLOW",
  },
  {
    title: "Primeiro habitante",
    text: "Familias e reef keepers encontram espécies ornamentais com suporte para introdução segura.",
    image: flowImages.familyClownfish,
    alt: "Familia comprando casal de peixes palhaco na FLOW",
  },
] as const;
