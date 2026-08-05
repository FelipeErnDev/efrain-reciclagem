export type Material = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  gallery?: string[];
};

export const materials: Material[] = [
  {
    id: "papel-papelao",
    slug: "papel-papelao",
    title: "Papel e Papelão",
    shortTitle: "Papelão",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compramos e destinamos papel e papelão recicláveis com coleta organizada.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "plasticos",
    slug: "plasticos",
    title: "Plásticos",
    shortTitle: "Plástico",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compra e venda de materiais plásticos recicláveis com destinação correta.",
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "metais",
    slug: "metais",
    title: "Metais",
    shortTitle: "Metais",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adquirimos metais recicláveis com transparência e cotação ágil.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aluminio",
    slug: "aluminio",
    title: "Alumínio",
    shortTitle: "Alumínio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Latas, perfil e sucata de alumínio com valorização justa.",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cobre",
    slug: "cobre",
    title: "Cobre",
    shortTitle: "Cobre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fios, canos e sucata de cobre com avaliação transparente.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "eletronicos",
    slug: "eletronicos",
    title: "Eletrônicos",
    shortTitle: "Eletrônicos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Coleta e destinação responsável de resíduos eletrônicos recicláveis.",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80",
  },
];

export type ScrapItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  gallery?: string[];
};

export const scrapItems: ScrapItem[] = [
  {
    id: "papel-branco",
    slug: "papel-branco",
    title: "Papel Branco",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation. Compramos papel branco reciclável com coleta ágil e destinação correta.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    category: "papel-papelao",
  },
  {
    id: "papelao-ondulado",
    slug: "papelao-ondulado",
    title: "Papelão Ondulado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate. Avaliamos e coletamos papelão ondulado com transparência.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    category: "papel-papelao",
  },
  {
    id: "pet",
    slug: "garrafas-pet",
    title: "Garrafas PET",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident. Compra e destinação de garrafas PET recicláveis.",
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
    category: "plasticos",
  },
  {
    id: "ferro",
    slug: "sucata-de-ferro",
    title: "Sucata de Ferro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Compramos sucata de ferro com cotação justa e coleta organizada.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    category: "metais",
  },
  {
    id: "latas-aluminio",
    slug: "latas-de-aluminio",
    title: "Latas de Alumínio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollit anim id est laborum. Adquirimos latas de alumínio com valorização e destinação responsável.",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
    category: "aluminio",
  },
  {
    id: "fios-cobre",
    slug: "fios-de-cobre",
    title: "Fios de Cobre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pariatur. Excepteur sint occaecat. Compra de fios de cobre com avaliação transparente.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    category: "cobre",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=700&q=80",
    alt: "Materiais recicláveis",
  },
  {
    src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=700&q=80",
    alt: "Plásticos recicláveis",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80",
    alt: "Metais recicláveis",
  },
  {
    src: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=80",
    alt: "Cobre reciclável",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80",
    alt: "Coleta de materiais",
  },
  {
    src: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80",
    alt: "Resíduos eletrônicos",
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((item) => item.slug === slug);
}

export function getScrapBySlug(slug: string) {
  return scrapItems.find((item) => item.slug === slug);
}

export function getMaterialGallery(item: Material | ScrapItem) {
  const extras = item.gallery?.length
    ? item.gallery
    : galleryImages.map((g) => g.src).slice(0, 4);

  const urls = [item.image, ...extras.filter((src) => src !== item.image)];
  return urls.slice(0, 5).map((src, i) => ({
    src,
    alt: `${item.title} — foto ${i + 1}`,
  }));
}
