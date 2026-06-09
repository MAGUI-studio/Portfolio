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
  "Acolhimento para outras neurodivergencias",
  "Adaptacao sensorial durante os procedimentos",
  "Atendimento individualizado e sem pressa",
  "Preparacao previa para criancas e adolescentes",
];

export const havenValues = [
  {
    title: "Respeito",
    text: "Cada pessoa possui necessidades, limites e formas unicas de se comunicar.",
  },
  {
    title: "Empatia",
    text: "Compreender antes de agir, com atencao real ao que cada cliente precisa.",
  },
  {
    title: "Inclusao",
    text: "Criar um espaco acessivel para criancas, adolescentes e adultos.",
  },
  {
    title: "Paciencia",
    text: "O tempo de cada pessoa deve ser respeitado em todas as etapas.",
  },
  {
    title: "Acolhimento",
    text: "Fazer com que clientes e familias se sintam seguros desde o primeiro contato.",
  },
  {
    title: "Humanizacao",
    text: "O cuidado com a pessoa vem antes do procedimento.",
  },
];

export const havenJourney = [
  {
    step: "01",
    title: "Explicacao previa",
    text: "A profissional apresenta o atendimento para a mae e a crianca, criando previsibilidade antes do corte com mais calma e clareza.",
    image: havenImages.procedimentoMenina,
    alt: "Funcionaria da Haven explicando o procedimento para mae de menina autista",
  },
  {
    step: "02",
    title: "Alinhamento com a familia",
    text: "A equipe explica o que vai acontecer, escuta preocupacoes da mae e ajusta o atendimento para reduzir tensao e excesso sensorial.",
    image: havenImages.procedimentoMenino,
    alt: "Funcionario da Haven explicando o procedimento para mae de menino autista",
  },
  {
    step: "03",
    title: "Conversa com adolescentes",
    text: "A comunicacao tambem respeita a autonomia de adolescentes, envolvendo a familia sem tirar o protagonismo de quem sera atendido.",
    image: havenImages.procedimentoAdolescente,
    alt: "Funcionario da Haven explicando o procedimento para mae e filho adolescente",
  },
];

export const havenTestimonials = [
  {
    name: "Adriana Santos",
    role: "Mae",
    quote:
      "Pela primeira vez, meu filho conseguiu passar pelo corte com tranquilidade. Tudo foi explicado com calma e respeito.",
    image: havenImages.testemunhoAdriana,
  },
  {
    name: "Marcele Silva",
    role: "Mae",
    quote:
      "A Haven entende que cada pessoa tem um tempo. Isso muda completamente a experiencia da familia.",
    image: havenImages.testemunhoMarcele,
  },
  {
    name: "Rodrigo Gomes",
    role: "Pai",
    quote:
      "Nao e so sobre cortar o cabelo. E sobre chegar, ser recebido com cuidado e sair com mais confianca.",
    image: havenImages.testemunhoRodrigo,
  },
];

export const havenStats = [
  { value: "Baixa", label: "sobrecarga sensorial no ambiente" },
  { value: "1:1", label: "atendimento individualizado" },
  { value: "Todas", label: "as idades acolhidas com respeito" },
];
