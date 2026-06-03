export const sayegImages = {
  cover: "/images/sayeg/beatriz-sayeg-cover.png",
  profile: "/images/sayeg/beatriz-sayeg-profile.png",
  studio: "/images/sayeg/consultorio.png",
  lips: "/images/sayeg/labio.png",
  logoBlack: "/images/sayeg/logo-black.png",
  logoWhite: "/images/sayeg/logo-white.png",
  reception: "/images/sayeg/recepcao.png",
  brows: "/images/sayeg/sobrancelha.png",
  visagism: "/images/sayeg/visagismo.png",
};

export const sayegWhatsappNumber = "5500000000000";

export const sayegWhatsappMessage =
  "Olá, Beatriz. Gostaria de agendar uma avaliação personalizada.";

export const sayegWhatsapp = `https://wa.me/${sayegWhatsappNumber}?text=${encodeURIComponent(
  sayegWhatsappMessage,
)}`;

export const sayegNav = [
  { label: "Beatriz", href: "#beatriz" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Método", href: "#metodo" },
  { label: "Espaço", href: "#espaco" },
];

export const sayegServices = [
  {
    image: sayegImages.brows,
    number: "01",
    label: "Micropigmentação de sobrancelhas",
    title: "Nanoblading ultrafino",
    text: "Fios delicados e estrategicamente posicionados recompõem densidade e definição com leveza. Cada traço acompanha o crescimento natural e respeita o desenho exclusivo de cada mulher.",
  },
  {
    image: sayegImages.lips,
    number: "02",
    label: "Micropigmentação labial",
    title: "Cor e contorno sutis",
    text: "Uma revitalização personalizada para devolver uniformidade, viço e equilíbrio aos lábios. A escolha de pigmentos considera o subtom de pele, o contraste e o resultado desejado.",
  },
  {
    image: sayegImages.visagism,
    number: "03",
    label: "Visagismo avançado",
    title: "Arquitetura do olhar",
    text: "Um estudo morfológico preciso para compreender proporções, assimetrias e expressões antes de qualquer intervenção. O desenho valoriza o rosto sem impor uma nova identidade.",
  },
];

export const sayegMethod = [
  {
    number: "01",
    title: "Escuta individual",
    text: "A consulta começa pela leitura da sua rotina, referências e expectativas. Naturalidade também é entender o que não precisa ser modificado.",
  },
  {
    number: "02",
    title: "Estudo morfológico",
    text: "Estrutura óssea, proporções, musculatura, simetrias e tom de pele orientam um planejamento feito para o seu rosto.",
  },
  {
    number: "03",
    title: "Execução precisa",
    text: "Técnica, pigmentos e intensidade são definidos com critério para um resultado delicado, elegante e coerente com a proposta.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "As orientações pós-procedimento e a revisão asseguram uma cicatrização tranquila e o refinamento cuidadoso do resultado.",
  },
];
