export const havenImages = {
  equipe: "/images/haven/equipe-da-haven.webp",
  atendimentos: "/images/haven/equipe-realizando-atendimento.webp",
  fachada: "/images/haven/fachada.webp",
  hero: "/images/haven/imagem-hero-familia-feliz.webp",
  procedimentoMenina:
    "/images/haven/funcionaria-explicando-procedimento-para-mae-de-menina-autista.webp",
  procedimentoMenino:
    "/images/haven/funcionario-explicando-procedimento-para-mae-de-menino-autista.webp",
  procedimentoAdolescente:
    "/images/haven/funcionario-explicando-procedimento-para-mae-e-filho-adolescente.webp",
  footer:
    "/images/haven/imagem-footer-funcionaria-conversando-com-crianca.webp",
  localizacao: "/images/haven/localizacao-da-haven.webp",
  logoWhite: "/images/haven/logo-branco.webp",
  logoBlack: "/images/haven/logo-preto.webp",
  simbolo: "/images/haven/simbolo-autismo.webp",
  testemunhoAdriana: "/images/haven/testemunho-adriana-santos.webp",
  testemunhoMarcele: "/images/haven/testemunho-marcele-silva.webp",
  testemunhoRodrigo: "/images/haven/testemunho-rodrigo-gomes.webp",
};

export const havenWhatsappNumber = "5500000000000";

export const havenWhatsappMessage =
  "Oi, Haven. Quero saber mais sobre os atendimentos e como funciona o cuidado no seu ritmo.";

export const havenWhatsappHref = `https://wa.me/${havenWhatsappNumber}?text=${encodeURIComponent(
  havenWhatsappMessage,
)}`;

export const havenNav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Visita", href: "#visita" },
];

export const havenHighlights = [
  "Cortes masculinos, femininos e infantis",
  "Atendimento especializado para pessoas autistas",
  "Acolhimento para outras neurodivergências",
  "Adaptação sensorial durante os procedimentos",
  "Atendimento individualizado e sem pressa",
  "Preparação prévia para crianças e adolescentes",
];

export const havenValues = [
  {
    title: "Respeito",
    text: "Cada pessoa possui necessidades, limites e formas únicas de se comunicar.",
  },
  {
    title: "Empatia",
    text: "Compreender antes de agir, com atenção real ao que cada cliente precisa.",
  },
  {
    title: "Inclusão",
    text: "Criar um espaço acessível para crianças, adolescentes e adultos.",
  },
  {
    title: "Paciência",
    text: "O tempo de cada pessoa deve ser respeitado em todas as etapas.",
  },
  {
    title: "Acolhimento",
    text: "Fazer com que clientes e famílias se sintam seguros desde o primeiro contato.",
  },
  {
    title: "Humanização",
    text: "O cuidado com a pessoa vem antes do procedimento.",
  },
];

export const havenJourney = [
  {
    step: "01",
    title: "Explicação prévia",
    text: "A profissional apresenta o atendimento para a mãe e a criança, criando previsibilidade antes do corte, com mais calma e clareza.",
    image: havenImages.procedimentoMenina,
    alt: "Funcionária da Haven explicando o procedimento para mãe de menina autista",
  },
  {
    step: "02",
    title: "Alinhamento com a família",
    text: "A equipe explica o que vai acontecer, escuta as preocupações da mãe e ajusta o atendimento para reduzir tensão e excesso sensorial.",
    image: havenImages.procedimentoMenino,
    alt: "Funcionário da Haven explicando o procedimento para mãe de menino autista",
  },
  {
    step: "03",
    title: "Conversa com adolescentes",
    text: "A comunicação também respeita a autonomia de adolescentes, envolvendo a família sem tirar o protagonismo de quem será atendido.",
    image: havenImages.procedimentoAdolescente,
    alt: "Funcionário da Haven explicando o procedimento para mãe e filho adolescente",
  },
];

export const havenTestimonials = [
  {
    name: "Adriana Santos",
    role: "Mãe",
    quote:
      "Pela primeira vez, meu filho conseguiu passar pelo corte com tranquilidade. Tudo foi explicado com calma e respeito.",
    image: havenImages.testemunhoAdriana,
  },
  {
    name: "Marcele Silva",
    role: "Mãe",
    quote:
      "A Haven entende que cada pessoa tem um tempo. Isso muda completamente a experiência da família.",
    image: havenImages.testemunhoMarcele,
  },
  {
    name: "Rodrigo Gomes",
    role: "Pai",
    quote:
      "Não é só sobre cortar o cabelo. É sobre chegar, ser recebido com cuidado e sair com mais confiança.",
    image: havenImages.testemunhoRodrigo,
  },
];

export const havenStats = [
  { value: "Baixa", label: "sobrecarga sensorial no ambiente" },
  { value: "1:1", label: "atendimento individualizado" },
  { value: "Todas", label: "as idades acolhidas com respeito" },
];
