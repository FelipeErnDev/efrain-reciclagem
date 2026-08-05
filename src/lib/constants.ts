export const SITE = {
  name: "Efrain",
  fullName: "Lucas Efrain Branco ME",
  brandName: "Efrain Reciclagem",
  tagline: "Compra e venda de materiais reciclados",
  description:
    "Somos uma empresa especializada em reciclagem e gestão de resíduos, comprometida com a preservação do meio ambiente e o desenvolvimento sustentável. Atuamos com responsabilidade, eficiência e transparência no Alto Vale.",
  whatsapp: "5547988353434",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento.",
  email: "efrain.branco@hotmail.com",
  phone: "(47) 98835-3434",
  phones: ["(47) 98835-3434", "(47) 99960-0477", "(47) 98845-5704"],
  address: "Estrada da Madeira, 1500 — Barragem, Rio do Sul / SC",
  city: "Rio do Sul",
  state: "SC",
  serviceArea: "Alto Vale",
  hours: "Segunda a sexta, 07:30–12:00 e 13:00–17:00",
  attendance: {
    inPerson: true,
    homeVisit: true,
    online: true,
  },
  social: {
    instagram: "https://www.instagram.com/",
  },
  googleReviews: "#",
  domain: "reciclagemefrain",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre-nos", label: "Sobre nós" },
  { href: "/materiais", label: "Materiais" },
  { href: "/sucatas", label: "Sucatas" },
  { href: "/contato", label: "Contato" },
] as const;

export const EXCLUDED_MATERIALS =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

export const DIFFERENTIALS = [
  "Compromisso com a preservação do meio ambiente.",
  "Coleta rápida, organizada e segura.",
  "Destinação correta dos materiais recicláveis.",
  "Atendimento ágil e personalizado.",
  "Transparência em todo o processo de reciclagem.",
  "Equipe qualificada e equipamentos modernos.",
  "Parcerias com empresas e comunidades para incentivar a reciclagem.",
  "Contribuição para a economia circular e redução de resíduos.",
] as const;

export const ABOUT_TEXT =
  "Somos uma empresa especializada em reciclagem e gestão de resíduos, comprometida com a preservação do meio ambiente e o desenvolvimento sustentável. Atuamos com responsabilidade, eficiência e transparência, oferecendo soluções seguras para a coleta, separação e destinação correta de materiais recicláveis. Nosso objetivo é contribuir para a economia circular, reduzindo impactos ambientais e gerando valor para clientes, parceiros e para a sociedade.";

export const ABOUT_LICENSES =
  "Contamos com todas as licenças exigidas para este tipo de serviço junto aos órgãos competentes.";

export function whatsappUrl(message: string = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
