const asset = (file: string) => `/materials/${file}`;

export type Material = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  gallery?: string[];
};

export type ScrapItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  gallery?: string[];
};

const CAT = {
  papelao: asset("papelao.jpg"),
  misto: asset("misto.jpg"),
  "papel-branco": asset("papel-branco.jpg"),
  "pp-colorido": asset("pp-colorido.jpg"),
  "pp-branco": asset("pp-branco.jpg"),
  "pead-colorido": asset("pead-colorido.jpg"),
  "plastico-cristal": asset("plastico-cristal.jpg"),
  "plastico-mole-colorido": asset("plastico-mole-colorido.jpg"),
  pet: asset("pet.jpg"),
  pvc: asset("pvc.jpg"),
  latinha: asset("latinha.jpg"),
  aluminio: asset("aluminio.jpg"),
  ferro: asset("ferro.jpg"),
  metal: asset("metal.jpg"),
  cobre: asset("cobre.jpg"),
} as const;

export const materials: Material[] = [
  {
    id: "papelao",
    slug: "papelao",
    title: "Papelão",
    shortTitle: "Papelão",
    description:
      "Caixas de papelão de mercado e transportadoras, eletrodomésticos e encomendas, papelão ondulado, chapas limpas e secas e tubos de papelão.",
    image: CAT.papelao,
  },
  {
    id: "misto",
    slug: "misto",
    title: "Misto",
    shortTitle: "Misto",
    description:
      "Folhas de caderno usadas, jornais, revistas, folhetos, envelopes sem plástico, sulfite colorido, catálogos, listas telefônicas antigas e papel de presente sem brilho metálico.",
    image: CAT.misto,
  },
  {
    id: "papel-branco",
    slug: "papel-branco",
    title: "Papel Branco",
    shortTitle: "Papel Branco",
    description:
      "Sulfite branco A4, papel de impressora e fotocópia, formulários contínuos, rascunhos e documentos, envelopes brancos sem janela plástica, aparas de gráfica, cadernos com folhas brancas e papel timbrado.",
    image: CAT["papel-branco"],
  },
  {
    id: "pp-colorido",
    slug: "pp-colorido",
    title: "PP Colorido",
    shortTitle: "PP Colorido",
    description:
      "Copos e tampas de iogurte, baldes e bacias coloridas, caixas e peças plásticas domésticas, tampas de garrafa e peças plásticas automotivas leves.",
    image: CAT["pp-colorido"],
  },
  {
    id: "pp-branco",
    slug: "pp-branco",
    title: "PP Branco",
    shortTitle: "PP Branco",
    description:
      "Potes de margarina, copos de iogurte, tampas de embalagens, baldes e bacias, caixas e peças plásticas brancas (PP nº 5) e embalagens de alimentos industriais claras.",
    image: CAT["pp-branco"],
  },
  {
    id: "pead-colorido",
    slug: "pead-colorido",
    title: "PEAD Colorido",
    shortTitle: "PEAD Colorido",
    description:
      "Garrafas de produtos de limpeza, frascos de detergente e amaciante, galões, baldes e bacias, embalagens de higiene mais rígidas e contentores plásticos resistentes.",
    image: CAT["pead-colorido"],
  },
  {
    id: "plastico-cristal",
    slug: "plastico-cristal",
    title: "Plástico Cristal",
    shortTitle: "Plástico Cristal",
    description:
      "Plástico bolha, filme stretch, sacos plásticos transparentes grossos, plástico transparente de eletrodomésticos e móveis e embalagens transparentes com pouca ou nenhuma impressão.",
    image: CAT["plastico-cristal"],
  },
  {
    id: "plastico-mole-colorido",
    slug: "plastico-mole-colorido",
    title: "Plástico Mole Colorido",
    shortTitle: "Plástico Mole",
    description:
      "Sacolas de supermercado, sacos de lixo, embalagens de alimentos e ração, embalagens flexíveis de limpeza, filmes plásticos coloridos ou impressos e sacolas de lojas.",
    image: CAT["plastico-mole-colorido"],
  },
  {
    id: "pet",
    slug: "pet",
    title: "PET",
    shortTitle: "PET",
    description:
      "Garrafas de refrigerante, água mineral, suco, isotônicos, óleo de cozinha e embalagens transparentes identificadas com o símbolo PET (nº 1).",
    image: CAT.pet,
  },
  {
    id: "pvc",
    slug: "pvc",
    title: "PVC",
    shortTitle: "PVC",
    description:
      "Tubos e conexões de encanamento, calhas e forros, perfis de portas e janelas, mangueiras, cortinas e embalagens rígidas identificadas com o símbolo 3 (PVC).",
    image: CAT.pvc,
  },
  {
    id: "latinha",
    slug: "latinha",
    title: "Latinha",
    shortTitle: "Latinha",
    description:
      "Latas de refrigerante, cerveja, energético, água com gás e outras bebidas em embalagem de alumínio.",
    image: CAT.latinha,
  },
  {
    id: "aluminio",
    slug: "aluminio",
    title: "Alumínio",
    shortTitle: "Alumínio",
    description:
      "Panelas, assadeiras e formas, molduras e perfis, cabos e peças, tampas e sucata de alumínio limpo.",
    image: CAT.aluminio,
  },
  {
    id: "ferro",
    slug: "ferro",
    title: "Ferro",
    shortTitle: "Ferro",
    description:
      "Estruturas de ferro, ferragens e sucata de construção, parafusos, pregos e porcas, ferramentas velhas, partes de eletrodomésticos, chapas e sucata de aço, motores e peças automotivas.",
    image: CAT.ferro,
  },
  {
    id: "metal",
    slug: "metal",
    title: "Metal",
    shortTitle: "Metal",
    description:
      "Peças de máquinas, ferragens variadas, objetos metálicos pequenos, restos de construção, utensílios sem identificação clara e sucata de oficinas mecânicas.",
    image: CAT.metal,
  },
  {
    id: "cobre",
    slug: "cobre",
    title: "Cobre",
    shortTitle: "Cobre",
    description:
      "Fios elétricos descascados, cabos de energia e extensão, tubos de cobre, bobinas e enrolamentos de motores, sucata de eletrônicos com cobre e peças de cobre maciço.",
    image: CAT.cobre,
  },
];

function scraps(
  category: keyof typeof CAT,
  items: { slug: string; title: string; description: string }[],
): ScrapItem[] {
  return items.map((item) => ({
    id: item.slug,
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: CAT[category],
    category,
  }));
}

export const scrapItems: ScrapItem[] = [
  ...scraps("papelao", [
    {
      slug: "caixas-de-papelao-de-mercado",
      title: "Caixas de papelão de mercado e transportadoras",
      description:
        "Caixas de papelão provenientes de mercados e transportadoras.",
    },
    {
      slug: "caixas-de-eletrodomesticos",
      title: "Caixas de eletrodomésticos",
      description: "Caixas de papelão de eletrodomésticos.",
    },
    {
      slug: "caixas-de-encomendas",
      title: "Caixas de encomendas",
      description: "Caixas de papelão de encomendas.",
    },
    {
      slug: "papelao-ondulado",
      title: "Papelão ondulado",
      description: 'Papelão ondulado (com as "ondinhas" no meio).',
    },
    {
      slug: "chapas-de-papelao",
      title: "Chapas de papelão limpas e secas",
      description: "Chapas de papelão limpas e secas.",
    },
    {
      slug: "tubos-de-papelao",
      title: "Tubos de papelão",
      description: "Tubos de papelão (conforme avaliação da recicladora).",
    },
  ]),
  ...scraps("misto", [
    {
      slug: "folhas-de-caderno-usadas",
      title: "Folhas de caderno usadas",
      description: "Folhas de caderno usadas.",
    },
    { slug: "jornais", title: "Jornais", description: "Jornais." },
    { slug: "revistas", title: "Revistas", description: "Revistas." },
    {
      slug: "folhetos-e-panfletos",
      title: "Folhetos e panfletos",
      description: "Folhetos e panfletos.",
    },
    {
      slug: "envelopes-sem-plastico",
      title: "Envelopes sem plástico",
      description: "Envelopes sem plástico.",
    },
    {
      slug: "papel-sulfite-colorido",
      title: "Papel sulfite colorido",
      description: "Papel sulfite colorido.",
    },
    { slug: "catalogos", title: "Catálogos", description: "Catálogos." },
    {
      slug: "listas-telefonicas-antigas",
      title: "Listas telefônicas antigas",
      description: "Listas telefônicas antigas.",
    },
    {
      slug: "papel-de-presente",
      title: "Papel de presente sem brilho metálico",
      description: "Papel de presente sem brilho metálico.",
    },
  ]),
  ...scraps("papel-branco", [
    {
      slug: "folhas-de-sulfite-branco-a4",
      title: "Folhas de sulfite branco A4",
      description: "Folhas de sulfite branco (A4).",
    },
    {
      slug: "papel-de-impressora-e-fotocopia",
      title: "Papel de impressora e fotocópia",
      description: "Papel de impressora e fotocópia.",
    },
    {
      slug: "formularios-continuos",
      title: "Formulários contínuos",
      description: "Formulários contínuos.",
    },
    {
      slug: "rascunhos-e-documentos",
      title: "Rascunhos e documentos de escritório",
      description: "Rascunhos e documentos de escritório.",
    },
    {
      slug: "envelopes-brancos-sem-janela",
      title: "Envelopes brancos sem janela plástica",
      description: "Envelopes brancos sem janela plástica.",
    },
    {
      slug: "aparas-de-grafica",
      title: "Aparas de gráfica de papel branco",
      description: "Aparas de gráfica de papel branco.",
    },
    {
      slug: "cadernos-com-folhas-brancas",
      title: "Cadernos com folhas brancas",
      description:
        "Cadernos com folhas brancas (retirando espirais e capas).",
    },
    {
      slug: "papel-timbrado-e-documentos",
      title: "Papel timbrado e documentos impressos",
      description: "Papel timbrado e documentos impressos.",
    },
  ]),
  ...scraps("pp-colorido", [
    {
      slug: "copos-e-tampas-de-iogurte-coloridos",
      title: "Copos e tampas de iogurte",
      description: "Copos e tampas de iogurte (conforme o tipo).",
    },
    {
      slug: "baldes-e-bacias-coloridas-pp",
      title: "Baldes e bacias coloridas",
      description: "Baldes e bacias coloridas de PP.",
    },
    {
      slug: "caixas-e-pecas-plasticas-domesticas",
      title: "Caixas e peças plásticas de uso doméstico",
      description: "Caixas e peças plásticas de uso doméstico.",
    },
    {
      slug: "tampas-de-garrafa-pp",
      title: "Tampas de garrafa",
      description: "Tampas de garrafa (muitas são PP).",
    },
    {
      slug: "pecas-plasticas-automotivas-leves",
      title: "Peças plásticas automotivas leves",
      description: "Peças plásticas automotivas leves (interior do carro).",
    },
  ]),
  ...scraps("pp-branco", [
    {
      slug: "potes-de-margarina-brancos",
      title: "Potes de margarina brancos",
      description: "Potes de margarina brancos.",
    },
    {
      slug: "copos-de-iogurte-brancos",
      title: "Copos de iogurte brancos",
      description: "Copos de iogurte brancos.",
    },
    {
      slug: "tampas-brancas-de-embalagens",
      title: "Tampas brancas de embalagens",
      description: "Tampas brancas de embalagens.",
    },
    {
      slug: "baldes-e-bacias-brancas",
      title: "Baldes e bacias brancas",
      description: "Baldes e bacias brancas.",
    },
    {
      slug: "caixas-e-pecas-plasticas-brancas",
      title: "Caixas e peças plásticas brancas",
      description: "Caixas e peças plásticas brancas (PP nº 5).",
    },
    {
      slug: "embalagens-de-alimentos-industriais-claras",
      title: "Embalagens de alimentos industriais claras",
      description: "Embalagens de alimentos industriais claras.",
    },
  ]),
  ...scraps("pead-colorido", [
    {
      slug: "garrafas-de-produtos-de-limpeza",
      title: "Garrafas de produtos de limpeza",
      description:
        "Garrafas de produtos de limpeza (cloro, água sanitária, desinfetante).",
    },
    {
      slug: "frascos-de-detergente-e-amaciante",
      title: "Frascos de detergente e amaciante",
      description: "Frascos de detergente e amaciante.",
    },
    {
      slug: "galoes-de-oleo-ou-quimicos",
      title: "Galões de óleo lubrificante ou produtos químicos",
      description: "Galões de óleo lubrificante ou produtos químicos.",
    },
    {
      slug: "baldes-e-bacias-coloridas-pead",
      title: "Baldes e bacias coloridas",
      description: "Baldes e bacias coloridas (alguns são PEAD).",
    },
    {
      slug: "embalagens-de-higiene-rigidas",
      title: "Embalagens de shampoos e produtos de higiene",
      description: "Embalagens de shampoos e produtos de higiene mais rígidas.",
    },
    {
      slug: "caixas-e-contentores-plasticos",
      title: "Caixas e contentores plásticos resistentes",
      description: "Caixas e contentores plásticos resistentes.",
    },
  ]),
  ...scraps("plastico-cristal", [
    {
      slug: "plastico-bolha",
      title: "Plástico bolha",
      description: "Plástico bolha.",
    },
    {
      slug: "filme-stretch",
      title: "Filme stretch",
      description: "Filme stretch usado para envolver pallets.",
    },
    {
      slug: "sacos-plasticos-transparentes-grossos",
      title: "Sacos plásticos transparentes grossos",
      description: "Sacos plásticos transparentes grossos.",
    },
    {
      slug: "plastico-transparente-de-eletrodomesticos",
      title: "Plástico transparente de eletrodomésticos e móveis",
      description:
        "Plástico transparente que envolve eletrodomésticos e móveis novos.",
    },
    {
      slug: "embalagens-transparentes-pouca-impressao",
      title: "Embalagens plásticas transparentes",
      description:
        "Embalagens plásticas transparentes sem impressão ou com pouca impressão.",
    },
  ]),
  ...scraps("plastico-mole-colorido", [
    {
      slug: "sacolas-de-supermercado-coloridas",
      title: "Sacolas de supermercado coloridas",
      description: "Sacolas de supermercado coloridas.",
    },
    {
      slug: "sacos-de-lixo",
      title: "Sacos de lixo",
      description: "Sacos de lixo.",
    },
    {
      slug: "embalagens-de-alimentos-flexiveis",
      title: "Embalagens de arroz, feijão, macarrão e açúcar",
      description: "Embalagens de arroz, feijão, macarrão e açúcar.",
    },
    {
      slug: "embalagens-de-racao",
      title: "Embalagens de ração",
      description: "Embalagens de ração.",
    },
    {
      slug: "embalagens-flexiveis-de-limpeza",
      title: "Embalagens de produtos de limpeza flexíveis",
      description: "Embalagens de produtos de limpeza flexíveis.",
    },
    {
      slug: "filmes-plasticos-coloridos",
      title: "Filmes plásticos coloridos ou impressos",
      description: "Filmes plásticos coloridos ou impressos.",
    },
    {
      slug: "sacolas-de-lojas",
      title: "Sacolas de lojas",
      description: "Sacolas de lojas.",
    },
  ]),
  ...scraps("pet", [
    {
      slug: "garrafas-de-refrigerante",
      title: "Garrafas de refrigerante",
      description: "Garrafas de refrigerante.",
    },
    {
      slug: "garrafas-de-agua-mineral",
      title: "Garrafas de água mineral",
      description: "Garrafas de água mineral.",
    },
    {
      slug: "garrafas-de-suco-e-isotonico",
      title: "Garrafas de suco e isotônicos",
      description: "Garrafas de suco e isotônicos.",
    },
    {
      slug: "garrafas-de-oleo-de-cozinha",
      title: "Garrafas de óleo de cozinha",
      description: "Garrafas de óleo de cozinha.",
    },
    {
      slug: "embalagens-transparentes-pet",
      title: "Embalagens transparentes PET",
      description:
        "Embalagens transparentes de alimentos identificadas com o símbolo PET (nº 1).",
    },
  ]),
  ...scraps("pvc", [
    {
      slug: "tubos-e-conexoes-de-encanamento",
      title: "Tubos e conexões de encanamento",
      description: "Tubos e conexões de encanamento (cano PVC).",
    },
    {
      slug: "calhas-e-forros-de-pvc",
      title: "Calhas e forros de PVC",
      description: "Calhas e forros de PVC.",
    },
    {
      slug: "perfis-de-portas-e-janelas-de-pvc",
      title: "Perfis de portas e janelas de PVC",
      description: "Perfis de portas e janelas de PVC.",
    },
    {
      slug: "mangueiras-de-pvc",
      title: "Mangueiras de PVC",
      description: "Mangueiras de PVC.",
    },
    {
      slug: "cortinas-de-pvc",
      title: "Cortinas de PVC",
      description: "Cortinas de PVC.",
    },
    {
      slug: "embalagens-rigidas-pvc",
      title: "Embalagens rígidas PVC",
      description:
        "Embalagens rígidas identificadas com o símbolo 3 (PVC).",
    },
  ]),
  ...scraps("latinha", [
    {
      slug: "latas-de-refrigerante",
      title: "Latas de refrigerante",
      description: "Latas de refrigerante.",
    },
    {
      slug: "latas-de-cerveja",
      title: "Latas de cerveja",
      description: "Latas de cerveja.",
    },
    {
      slug: "latas-de-energetico",
      title: "Latas de energético",
      description: "Latas de energético.",
    },
    {
      slug: "latas-de-agua-com-gas",
      title: "Latas de água com gás e outras bebidas",
      description: "Latas de água com gás e outras bebidas em alumínio.",
    },
  ]),
  ...scraps("aluminio", [
    {
      slug: "panelas-de-aluminio",
      title: "Panelas de alumínio",
      description:
        "Panelas de alumínio (sem cabo de plástico ou baquelite, se possível).",
    },
    {
      slug: "assadeiras-e-formas",
      title: "Assadeiras e formas de bolo",
      description: "Assadeiras e formas de bolo.",
    },
    {
      slug: "molduras-e-perfis-de-aluminio",
      title: "Molduras e perfis de alumínio",
      description:
        "Molduras e perfis de alumínio (portas, janelas, esquadrias).",
    },
    {
      slug: "cabos-e-pecas-de-aluminio",
      title: "Cabos e peças de alumínio",
      description:
        "Cabos e peças de alumínio (sem muita mistura de outros materiais).",
    },
    {
      slug: "tampas-de-aluminio",
      title: "Tampas de alumínio",
      description: "Tampas de alumínio (algumas de potes e embalagens).",
    },
    {
      slug: "sucata-de-aluminio-limpo",
      title: "Restos de sucata de alumínio limpo",
      description: "Restos de sucata de alumínio limpo.",
    },
  ]),
  ...scraps("ferro", [
    {
      slug: "estruturas-de-ferro",
      title: "Estruturas de ferro",
      description: "Estruturas de ferro (portões, grades, vigas).",
    },
    {
      slug: "ferragens-e-sucata-de-construcao",
      title: "Ferragens e sucata de construção",
      description: "Ferragens e sucata de construção.",
    },
    {
      slug: "parafusos-pregos-porcas",
      title: "Parafusos, pregos e porcas",
      description: "Parafusos, pregos e porcas.",
    },
    {
      slug: "ferramentas-velhas",
      title: "Ferramentas velhas",
      description: "Ferramentas velhas (chaves, alicates, martelos).",
    },
    {
      slug: "eletrodomesticos-estrutura-de-ferro",
      title: "Eletrodomésticos com estrutura de ferro",
      description:
        "Eletrodomésticos com estrutura de ferro (fogão, máquina de lavar, geladeira — parte interna).",
    },
    {
      slug: "chapas-e-sucata-de-aco",
      title: "Chapas e sucata de aço",
      description: "Chapas e sucata de aço.",
    },
    {
      slug: "motores-e-pecas-automotivas-de-ferro",
      title: "Motores e peças automotivas de ferro",
      description: "Motores e peças automotivas de ferro.",
    },
  ]),
  ...scraps("metal", [
    {
      slug: "pecas-de-maquinas",
      title: "Peças de máquinas",
      description: "Peças de máquinas.",
    },
    {
      slug: "ferragens-variadas",
      title: "Ferragens variadas",
      description: "Ferragens variadas (mistura de metais).",
    },
    {
      slug: "objetos-metalicos-pequenos",
      title: "Objetos metálicos pequenos",
      description: "Objetos metálicos pequenos sem separação clara.",
    },
    {
      slug: "restos-de-construcao-com-metais",
      title: "Restos de construção com diferentes metais",
      description: "Restos de construção com diferentes metais.",
    },
    {
      slug: "utensilios-metalicos-sem-identificacao",
      title: "Utensílios metálicos sem identificação clara",
      description: "Utensílios metálicos sem identificação clara.",
    },
    {
      slug: "parafusos-dobradicas-pecas-misturadas",
      title: "Parafusos, dobradiças e peças pequenas misturadas",
      description: "Parafusos, dobradiças e peças pequenas misturadas.",
    },
    {
      slug: "sucata-de-oficinas-mecanicas",
      title: "Sucata de oficinas mecânicas",
      description: "Sucata de oficinas mecânicas (misturada).",
    },
  ]),
  ...scraps("cobre", [
    {
      slug: "fios-eletricos-descascados",
      title: "Fios elétricos descascados",
      description: "Fios elétricos descascados (cobre limpo).",
    },
    {
      slug: "cabos-de-energia-e-extensao",
      title: "Cabos de energia e extensão",
      description: "Cabos de energia e extensão (quando separados do plástico).",
    },
    {
      slug: "tubos-de-cobre",
      title: "Tubos de cobre",
      description:
        "Tubos de cobre (encanamento de ar-condicionado e refrigeração).",
    },
    {
      slug: "bobinas-e-enrolamentos-de-motores",
      title: "Bobinas e enrolamentos de motores",
      description:
        "Bobinas e enrolamentos de motores (transformadores, motores queimados).",
    },
    {
      slug: "sucata-de-eletronicos-com-cobre",
      title: "Sucata de eletrônicos",
      description: "Sucata de eletrônicos (partes internas com cobre).",
    },
    {
      slug: "conexoes-e-pecas-de-cobre",
      title: "Conexões e peças de cobre maciço",
      description: "Conexões e peças de cobre maciço.",
    },
  ]),
];

export const galleryImages = materials.map((m) => ({
  src: m.image,
  alt: m.title,
}));

export function getMaterialBySlug(slug: string) {
  return materials.find((item) => item.slug === slug);
}

export function getScrapBySlug(slug: string) {
  return scrapItems.find((item) => item.slug === slug);
}

export function getMaterialGallery(item: Material | ScrapItem) {
  if (item.gallery?.length) {
    return item.gallery.map((src, i) => ({
      src,
      alt: `${item.title} — foto ${i + 1}`,
    }));
  }

  return [{ src: item.image, alt: item.title }];
}
