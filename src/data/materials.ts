const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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

export const materials: Material[] = [
  {
    id: "papelao",
    slug: "papelao",
    title: "Papelão",
    shortTitle: "Papelão",
    description:
      "Compramos caixas de mercado, transportadoras, eletrodomésticos e encomendas, além de papelão ondulado, chapas limpas e tubos de papelão.",
    image: img("photo-1532996122724-e3c354a0b15b"),
  },
  {
    id: "misto",
    slug: "misto",
    title: "Misto",
    shortTitle: "Misto",
    description:
      "Recebemos papel misto reciclável: jornais, revistas, folhetos, envelopes sem plástico, sulfite colorido, catálogos e papel de presente sem brilho metálico.",
    image: img("photo-1504711434969-e33886168f5c"),
  },
  {
    id: "papel-branco",
    slug: "papel-branco",
    title: "Papel Branco",
    shortTitle: "Papel Branco",
    description:
      "Compramos sulfite branco, papel de impressora, formulários, documentos de escritório, envelopes brancos sem janela plástica e aparas de gráfica.",
    image: img("photo-1586075010923-2dd4570fb338"),
  },
  {
    id: "pp-colorido",
    slug: "pp-colorido",
    title: "PP Colorido",
    shortTitle: "PP Colorido",
    description:
      "Adquirimos polipropileno colorido: copos e tampas, baldes, bacias, caixas plásticas domésticas, tampas de garrafa e peças plásticas leves.",
    image: img("photo-1621451537084-482c73073a0f"),
  },
  {
    id: "pp-branco",
    slug: "pp-branco",
    title: "PP Branco",
    shortTitle: "PP Branco",
    description:
      "Compramos PP branco nº 5: potes de margarina, copos de iogurte, tampas, baldes, bacias e embalagens industriais claras.",
    image: img("photo-1571781926291-c477ebfd024b"),
  },
  {
    id: "pead-colorido",
    slug: "pead-colorido",
    title: "PEAD Colorido",
    shortTitle: "PEAD Colorido",
    description:
      "Recebemos PEAD colorido: garrafas de limpeza, frascos de detergente e amaciante, galões, embalagens rígidas de higiene e contentores resistentes.",
    image: img("photo-1585386959984-a4155224a1ad"),
  },
  {
    id: "plastico-cristal",
    slug: "plastico-cristal",
    title: "Plástico Cristal",
    shortTitle: "Plástico Cristal",
    description:
      "Compramos plástico bolha, filme stretch, sacos transparentes grossos e embalagens plásticas transparentes com pouca ou nenhuma impressão.",
    image: img("photo-1604187351574-c75ca79f5807"),
  },
  {
    id: "plastico-mole-colorido",
    slug: "plastico-mole-colorido",
    title: "Plástico Mole Colorido",
    shortTitle: "Plástico Mole",
    description:
      "Adquirimos sacolas, sacos de lixo, embalagens flexíveis de alimentos e limpeza, filmes plásticos coloridos ou impressos e sacolas de lojas.",
    image: img("photo-1591195853828-11db59a44f6b"),
  },
  {
    id: "pet",
    slug: "pet",
    title: "PET",
    shortTitle: "PET",
    description:
      "Compramos garrafas PET nº 1: refrigerante, água mineral, suco, isotônicos, óleo de cozinha e embalagens transparentes identificadas como PET.",
    image: img("photo-1530587191325-3db32d826c18"),
  },
  {
    id: "pvc",
    slug: "pvc",
    title: "PVC",
    shortTitle: "PVC",
    description:
      "Recebemos tubos e conexões, calhas, forros, perfis de portas e janelas, mangueiras, cortinas e embalagens rígidas identificadas como PVC nº 3.",
    image: img("photo-1581092160562-40aa08e78837"),
  },
  {
    id: "latinha",
    slug: "latinha",
    title: "Latinha",
    shortTitle: "Latinha",
    description:
      "Compramos latas de alumínio de refrigerante, cerveja, energético, água com gás e demais bebidas em embalagem de alumínio.",
    image: img("photo-1610557892470-55d9e80c0bce"),
  },
  {
    id: "aluminio",
    slug: "aluminio",
    title: "Alumínio",
    shortTitle: "Alumínio",
    description:
      "Adquirimos panelas, assadeiras, molduras, perfis, esquadrias, cabos, tampas e sucata de alumínio limpo, com o mínimo de misturas.",
    image: img("photo-1611273426858-450d8e3c9fce"),
  },
  {
    id: "ferro",
    slug: "ferro",
    title: "Ferro",
    shortTitle: "Ferro",
    description:
      "Compramos estruturas, ferragens, parafusos, ferramentas, chapas, aço, motores e sucata de ferro de construção e oficinas.",
    image: img("photo-1504328345606-18bbc8c9d7d1"),
  },
  {
    id: "metal",
    slug: "metal",
    title: "Metal",
    shortTitle: "Metal",
    description:
      "Recebemos peças de máquinas, ferragens variadas, objetos metálicos misturados, restos de construção e sucata de oficinas mecânicas.",
    image: img("photo-1581092918056-0c4c3acd3789"),
  },
  {
    id: "cobre",
    slug: "cobre",
    title: "Cobre",
    shortTitle: "Cobre",
    description:
      "Compramos fios descascados, cabos, tubos de refrigeração, bobinas de motores, partes internas de eletrônicos e peças de cobre maciço.",
    image: img("photo-1615485290382-441e4d049cb5"),
  },
];

export const scrapItems: ScrapItem[] = [
  // Papelão
  {
    id: "caixas-mercado",
    slug: "caixas-de-papelao-de-mercado",
    title: "Caixas de papelão de mercado e transportadoras",
    description:
      "Caixas de papelão provenientes de mercados e transportadoras, limpas e secas, prontas para reciclagem.",
    image: img("photo-1532996122724-e3c354a0b15b", 800),
    category: "papelao",
  },
  {
    id: "caixas-eletro",
    slug: "caixas-de-eletrodomesticos",
    title: "Caixas de eletrodomésticos",
    description:
      "Caixas de papelão de eletrodomésticos, sem umidade e sem contaminação excessiva de outros materiais.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "papelao",
  },
  {
    id: "caixas-encomendas",
    slug: "caixas-de-encomendas",
    title: "Caixas de encomendas",
    description:
      "Caixas de papelão de encomendas e e-commerce, ideais para reciclagem quando limpas e secas.",
    image: img("photo-1595113316349-9fa4eb24f884", 800),
    category: "papelao",
  },
  {
    id: "papelao-ondulado",
    slug: "papelao-ondulado",
    title: "Papelão ondulado",
    description:
      "Papelão ondulado (com as “ondinhas” no meio), amplamente utilizado em embalagens e aceito para reciclagem.",
    image: img("photo-1532996122724-e3c354a0b15b", 800),
    category: "papelao",
  },
  {
    id: "chapas-papelao",
    slug: "chapas-de-papelao",
    title: "Chapas de papelão limpas e secas",
    description:
      "Chapas de papelão limpas e secas, sem resíduos orgânicos ou umidade excessiva.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "papelao",
  },
  {
    id: "tubos-papelao",
    slug: "tubos-de-papelao",
    title: "Tubos de papelão",
    description:
      "Tubos de papelão utilizados em bobinas e embalagens, aceitos conforme avaliação do material.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "papelao",
  },

  // Misto
  {
    id: "folhas-caderno",
    slug: "folhas-de-caderno-usadas",
    title: "Folhas de caderno usadas",
    description:
      "Folhas de caderno usadas, sem espirais, capas plásticas ou materiais que atrapalhem a reciclagem.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "misto",
  },
  {
    id: "jornais",
    slug: "jornais",
    title: "Jornais",
    description:
      "Jornais usados para reciclagem de papel misto, secos e sem contaminação.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "misto",
  },
  {
    id: "revistas",
    slug: "revistas",
    title: "Revistas",
    description:
      "Revistas impressas em papel reciclável, aceitas na categoria de papel misto.",
    image: img("photo-1516738901171-8eb4fc13bd20", 800),
    category: "misto",
  },
  {
    id: "folhetos",
    slug: "folhetos-e-panfletos",
    title: "Folhetos e panfletos",
    description:
      "Folhetos e panfletos publicitários em papel, secos e sem plástico laminado.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "misto",
  },
  {
    id: "envelopes-misto",
    slug: "envelopes-sem-plastico",
    title: "Envelopes sem plástico",
    description:
      "Envelopes de papel sem janela plástica nem acabamentos que dificultem a reciclagem.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "misto",
  },
  {
    id: "sulfite-colorido",
    slug: "papel-sulfite-colorido",
    title: "Papel sulfite colorido",
    description:
      "Folhas de sulfite colorido provenientes de escritórios, escolas e gráficas.",
    image: img("photo-1625246333195-78d9c38ad449", 800),
    category: "misto",
  },
  {
    id: "catalogos",
    slug: "catalogos",
    title: "Catálogos",
    description:
      "Catálogos impressos em papel, aceitos na coleta de papel misto reciclável.",
    image: img("photo-1516738901171-8eb4fc13bd20", 800),
    category: "misto",
  },
  {
    id: "listas-telefonicas",
    slug: "listas-telefonicas-antigas",
    title: "Listas telefônicas antigas",
    description:
      "Listas telefônicas antigas em papel, destinadas corretamente à reciclagem.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "misto",
  },
  {
    id: "papel-presente",
    slug: "papel-de-presente",
    title: "Papel de presente sem brilho metálico",
    description:
      "Papel de presente sem brilho metálico, laminado ou elementos que contaminem a reciclagem.",
    image: img("photo-1625246333195-78d9c38ad449", 800),
    category: "misto",
  },

  // Papel Branco
  {
    id: "sulfite-a4",
    slug: "folhas-de-sulfite-branco-a4",
    title: "Folhas de sulfite branco A4",
    description:
      "Folhas de sulfite branco A4, limpas, ideais para reciclagem de papel branco de alta qualidade.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "papel-branco",
  },
  {
    id: "papel-impressora",
    slug: "papel-de-impressora-e-fotocopia",
    title: "Papel de impressora e fotocópia",
    description:
      "Papel de impressora e fotocópia usado em escritórios, sem grampos em excesso e sem capas plásticas.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "papel-branco",
  },
  {
    id: "formularios",
    slug: "formularios-continuos",
    title: "Formulários contínuos",
    description:
      "Formulários contínuos de papel branco provenientes de empresas e escritórios.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "papel-branco",
  },
  {
    id: "rascunhos",
    slug: "rascunhos-e-documentos",
    title: "Rascunhos e documentos de escritório",
    description:
      "Rascunhos e documentos de escritório em papel branco, prontos para destinação reciclável.",
    image: img("photo-1516738901171-8eb4fc13bd20", 800),
    category: "papel-branco",
  },
  {
    id: "envelopes-brancos",
    slug: "envelopes-brancos-sem-janela",
    title: "Envelopes brancos sem janela plástica",
    description:
      "Envelopes brancos sem janela plástica, adequados para a linha de papel branco.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "papel-branco",
  },
  {
    id: "aparas-grafica",
    slug: "aparas-de-grafica",
    title: "Aparas de gráfica de papel branco",
    description:
      "Aparas e sobras de gráfica em papel branco, com boa valorização na reciclagem.",
    image: img("photo-1625246333195-78d9c38ad449", 800),
    category: "papel-branco",
  },
  {
    id: "cadernos-brancos",
    slug: "cadernos-com-folhas-brancas",
    title: "Cadernos com folhas brancas",
    description:
      "Cadernos com folhas brancas, retirando espirais e capas antes da entrega para reciclagem.",
    image: img("photo-1586075010923-2dd4570fb338", 800),
    category: "papel-branco",
  },
  {
    id: "papel-timbrado",
    slug: "papel-timbrado-e-documentos",
    title: "Papel timbrado e documentos impressos",
    description:
      "Papel timbrado e documentos impressos em papel branco, aceitos na coleta seletiva.",
    image: img("photo-1504711434969-e33886168f5c", 800),
    category: "papel-branco",
  },

  // PP Colorido
  {
    id: "copos-iogurte-color",
    slug: "copos-e-tampas-de-iogurte",
    title: "Copos e tampas de iogurte",
    description:
      "Copos e tampas de iogurte em PP colorido, limpos e secos, conforme avaliação do material.",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "pp-colorido",
  },
  {
    id: "baldes-bacias-color",
    slug: "baldes-e-bacias-coloridas",
    title: "Baldes e bacias coloridas",
    description:
      "Baldes e bacias coloridas de polipropileno para reciclagem de PP.",
    image: img("photo-1571781926291-c477ebfd024b", 800),
    category: "pp-colorido",
  },
  {
    id: "caixas-domesticas",
    slug: "caixas-e-pecas-plasticas-domesticas",
    title: "Caixas e peças plásticas domésticas",
    description:
      "Caixas e peças plásticas de uso doméstico em PP colorido.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "pp-colorido",
  },
  {
    id: "tampas-garrafa",
    slug: "tampas-de-garrafa",
    title: "Tampas de garrafa",
    description:
      "Tampas de garrafa, muitas delas em PP, com boa aceitação na reciclagem.",
    image: img("photo-1530587191325-3db32d826c18", 800),
    category: "pp-colorido",
  },
  {
    id: "pecas-auto-leves",
    slug: "pecas-plasticas-automotivas-leves",
    title: "Peças plásticas automotivas leves",
    description:
      "Peças plásticas leves de interior automotivo em PP, separadas de metais e outros materiais.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "pp-colorido",
  },

  // PP Branco
  {
    id: "margarina",
    slug: "potes-de-margarina-brancos",
    title: "Potes de margarina brancos",
    description:
      "Potes de margarina brancos em PP nº 5, limpos e sem resíduos alimentares em excesso.",
    image: img("photo-1571781926291-c477ebfd024b", 800),
    category: "pp-branco",
  },
  {
    id: "iogurte-branco",
    slug: "copos-de-iogurte-brancos",
    title: "Copos de iogurte brancos",
    description:
      "Copos de iogurte brancos em polipropileno, adequados para reciclagem de PP branco.",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "pp-branco",
  },
  {
    id: "tampas-brancas",
    slug: "tampas-brancas-de-embalagens",
    title: "Tampas brancas de embalagens",
    description:
      "Tampas brancas de embalagens em PP, separadas e limpas.",
    image: img("photo-1571781926291-c477ebfd024b", 800),
    category: "pp-branco",
  },
  {
    id: "baldes-brancos",
    slug: "baldes-e-bacias-brancas",
    title: "Baldes e bacias brancas",
    description:
      "Baldes e bacias brancas em PP, com boa valorização na reciclagem.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "pp-branco",
  },
  {
    id: "caixas-pp5",
    slug: "caixas-e-pecas-plasticas-brancas",
    title: "Caixas e peças plásticas brancas (PP nº 5)",
    description:
      "Caixas e peças plásticas brancas identificadas como PP nº 5.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "pp-branco",
  },
  {
    id: "embalagens-industriais",
    slug: "embalagens-de-alimentos-industriais",
    title: "Embalagens de alimentos industriais claras",
    description:
      "Embalagens claras de alimentos industriais em PP branco, limpas e secas.",
    image: img("photo-1571781926291-c477ebfd024b", 800),
    category: "pp-branco",
  },

  // PEAD Colorido
  {
    id: "garrafas-limpeza",
    slug: "garrafas-de-produtos-de-limpeza",
    title: "Garrafas de produtos de limpeza",
    description:
      "Garrafas de cloro, água sanitária e desinfetante em PEAD colorido, preferencialmente vazias e enxaguadas.",
    image: img("photo-1585386959984-a4155224a1ad", 800),
    category: "pead-colorido",
  },
  {
    id: "detergente",
    slug: "frascos-de-detergente-e-amaciante",
    title: "Frascos de detergente e amaciante",
    description:
      "Frascos de detergente e amaciante em PEAD colorido para reciclagem.",
    image: img("photo-1558618666-fcd25c85cd64", 800),
    category: "pead-colorido",
  },
  {
    id: "galoes",
    slug: "galoes-de-oleo-e-quimicos",
    title: "Galões de óleo lubrificante ou produtos químicos",
    description:
      "Galões de óleo lubrificante ou produtos químicos em PEAD, vazios e adequadamente manuseados.",
    image: img("photo-1585386959984-a4155224a1ad", 800),
    category: "pead-colorido",
  },
  {
    id: "baldes-pead",
    slug: "baldes-e-bacias-pead",
    title: "Baldes e bacias coloridas (PEAD)",
    description:
      "Baldes e bacias coloridas em PEAD, resistentes e recicláveis.",
    image: img("photo-1571781926291-c477ebfd024b", 800),
    category: "pead-colorido",
  },
  {
    id: "shampoo-rigido",
    slug: "embalagens-de-higiene-rigidas",
    title: "Embalagens de shampoos e higiene",
    description:
      "Embalagens mais rígidas de shampoos e produtos de higiene em PEAD.",
    image: img("photo-1558618666-fcd25c85cd64", 800),
    category: "pead-colorido",
  },
  {
    id: "contentores",
    slug: "caixas-e-contentores-plasticos",
    title: "Caixas e contentores plásticos resistentes",
    description:
      "Caixas e contentores plásticos resistentes em PEAD colorido.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "pead-colorido",
  },

  // Plástico Cristal
  {
    id: "plastico-bolha",
    slug: "plastico-bolha",
    title: "Plástico bolha",
    description:
      "Plástico bolha usado em proteção de produtos, limpo e sem excesso de fitas adesivas.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "plastico-cristal",
  },
  {
    id: "filme-stretch",
    slug: "filme-stretch",
    title: "Filme stretch",
    description:
      "Filme stretch utilizado para envolver pallets e cargas, reciclável na linha de plástico cristal.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "plastico-cristal",
  },
  {
    id: "sacos-transparentes",
    slug: "sacos-plasticos-transparentes",
    title: "Sacos plásticos transparentes grossos",
    description:
      "Sacos plásticos transparentes grossos, limpos e secos.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "plastico-cristal",
  },
  {
    id: "plastico-moveis",
    slug: "plastico-transparente-de-embalagens",
    title: "Plástico transparente de eletrodomésticos e móveis",
    description:
      "Plástico transparente que envolve eletrodomésticos e móveis novos, sem muita sujeira.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "plastico-cristal",
  },
  {
    id: "embalagens-transparentes",
    slug: "embalagens-plasticas-transparentes",
    title: "Embalagens plásticas transparentes",
    description:
      "Embalagens plásticas transparentes sem impressão ou com pouca impressão.",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "plastico-cristal",
  },

  // Plástico Mole Colorido
  {
    id: "sacolas-mercado",
    slug: "sacolas-de-supermercado",
    title: "Sacolas de supermercado coloridas",
    description:
      "Sacolas de supermercado coloridas em plástico mole, limpas e secas.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "sacos-lixo",
    slug: "sacos-de-lixo",
    title: "Sacos de lixo",
    description:
      "Sacos de lixo plásticos, preferencialmente limpos e sem resíduos orgânicos.",
    image: img("photo-1558618666-fcd25c85cd64", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "embalagens-alimentos",
    slug: "embalagens-de-alimentos",
    title: "Embalagens de arroz, feijão, macarrão e açúcar",
    description:
      "Embalagens flexíveis de alimentos secos, limpas e sem restos de produto.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "embalagens-racao",
    slug: "embalagens-de-racao",
    title: "Embalagens de ração",
    description:
      "Embalagens de ração em plástico mole colorido ou impresso.",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "embalagens-limpeza-flex",
    slug: "embalagens-flexiveis-de-limpeza",
    title: "Embalagens flexíveis de limpeza",
    description:
      "Embalagens flexíveis de produtos de limpeza, esvaziadas e limpas.",
    image: img("photo-1585386959984-a4155224a1ad", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "filmes-coloridos",
    slug: "filmes-plasticos-coloridos",
    title: "Filmes plásticos coloridos ou impressos",
    description:
      "Filmes plásticos coloridos ou impressos destinados à reciclagem.",
    image: img("photo-1591195853828-11db59a44f6b", 800),
    category: "plastico-mole-colorido",
  },
  {
    id: "sacolas-lojas",
    slug: "sacolas-de-lojas",
    title: "Sacolas de lojas",
    description:
      "Sacolas plásticas de lojas e varejo, limpas e secas.",
    image: img("photo-1558618666-fcd25c85cd64", 800),
    category: "plastico-mole-colorido",
  },

  // PET
  {
    id: "pet-refri",
    slug: "garrafas-de-refrigerante",
    title: "Garrafas de refrigerante",
    description:
      "Garrafas PET de refrigerante, preferencialmente amassadas e sem tampas misturadas em excesso.",
    image: img("photo-1530587191325-3db32d826c18", 800),
    category: "pet",
  },
  {
    id: "pet-agua",
    slug: "garrafas-de-agua-mineral",
    title: "Garrafas de água mineral",
    description:
      "Garrafas PET de água mineral, limpas e destinadas corretamente à reciclagem.",
    image: img("photo-1530587191325-3db32d826c18", 800),
    category: "pet",
  },
  {
    id: "pet-suco",
    slug: "garrafas-de-suco-e-isotonico",
    title: "Garrafas de suco e isotônicos",
    description:
      "Garrafas PET de suco e isotônicos, identificadas com o símbolo PET nº 1.",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "pet",
  },
  {
    id: "pet-oleo",
    slug: "garrafas-de-oleo-de-cozinha",
    title: "Garrafas de óleo de cozinha",
    description:
      "Garrafas PET de óleo de cozinha, bem escorridas antes da entrega.",
    image: img("photo-1530587191325-3db32d826c18", 800),
    category: "pet",
  },
  {
    id: "pet-alimentos",
    slug: "embalagens-transparentes-pet",
    title: "Embalagens transparentes PET",
    description:
      "Embalagens transparentes de alimentos identificadas com o símbolo PET (nº 1).",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "pet",
  },

  // PVC
  {
    id: "tubos-pvc",
    slug: "tubos-e-conexoes-de-pvc",
    title: "Tubos e conexões de encanamento",
    description:
      "Tubos e conexões de cano PVC provenientes de obras e reformas.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "pvc",
  },
  {
    id: "calhas-forros",
    slug: "calhas-e-forros-de-pvc",
    title: "Calhas e forros de PVC",
    description:
      "Calhas e forros de PVC para destinação reciclável.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "pvc",
  },
  {
    id: "perfis-pvc",
    slug: "perfis-de-portas-e-janelas",
    title: "Perfis de portas e janelas de PVC",
    description:
      "Perfis de portas e janelas em PVC, separados de vidros e metais quando possível.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "pvc",
  },
  {
    id: "mangueiras-pvc",
    slug: "mangueiras-de-pvc",
    title: "Mangueiras de PVC",
    description:
      "Mangueiras de PVC usadas em jardinagem, construção e uso geral.",
    image: img("photo-1558618666-fcd25c85cd64", 800),
    category: "pvc",
  },
  {
    id: "cortinas-pvc",
    slug: "cortinas-de-pvc",
    title: "Cortinas de PVC",
    description:
      "Cortinas de PVC industriais ou domésticas destinadas à reciclagem.",
    image: img("photo-1604187351574-c75ca79f5807", 800),
    category: "pvc",
  },
  {
    id: "embalagens-pvc",
    slug: "embalagens-rigidas-pvc",
    title: "Embalagens rígidas PVC (nº 3)",
    description:
      "Embalagens rígidas identificadas com o símbolo 3 (PVC).",
    image: img("photo-1621451537084-482c73073a0f", 800),
    category: "pvc",
  },

  // Latinha
  {
    id: "latas-refri",
    slug: "latas-de-refrigerante",
    title: "Latas de refrigerante",
    description:
      "Latas de alumínio de refrigerante, limpas e amassadas para facilitar o transporte.",
    image: img("photo-1610557892470-55d9e80c0bce", 800),
    category: "latinha",
  },
  {
    id: "latas-cerveja",
    slug: "latas-de-cerveja",
    title: "Latas de cerveja",
    description:
      "Latas de alumínio de cerveja, com alta valorização na reciclagem.",
    image: img("photo-1563729784474-d77dbb933a9e", 800),
    category: "latinha",
  },
  {
    id: "latas-energetico",
    slug: "latas-de-energetico",
    title: "Latas de energético",
    description:
      "Latas de alumínio de energético e bebidas similares.",
    image: img("photo-1610557892470-55d9e80c0bce", 800),
    category: "latinha",
  },
  {
    id: "latas-agua-gas",
    slug: "latas-de-agua-com-gas",
    title: "Latas de água com gás e outras bebidas",
    description:
      "Latas de alumínio de água com gás e demais bebidas em embalagem de alumínio.",
    image: img("photo-1563729784474-d77dbb933a9e", 800),
    category: "latinha",
  },

  // Alumínio
  {
    id: "panelas-aluminio",
    slug: "panelas-de-aluminio",
    title: "Panelas de alumínio",
    description:
      "Panelas de alumínio, preferencialmente sem cabo de plástico ou baquelite.",
    image: img("photo-1611273426858-450d8e3c9fce", 800),
    category: "aluminio",
  },
  {
    id: "assadeiras",
    slug: "assadeiras-e-formas",
    title: "Assadeiras e formas de bolo",
    description:
      "Assadeiras e formas de bolo em alumínio para reciclagem.",
    image: img("photo-1571068316344-75bc76f77890", 800),
    category: "aluminio",
  },
  {
    id: "perfis-aluminio",
    slug: "molduras-e-perfis-de-aluminio",
    title: "Molduras e perfis de alumínio",
    description:
      "Molduras e perfis de alumínio de portas, janelas e esquadrias.",
    image: img("photo-1611273426858-450d8e3c9fce", 800),
    category: "aluminio",
  },
  {
    id: "cabos-aluminio",
    slug: "cabos-e-pecas-de-aluminio",
    title: "Cabos e peças de alumínio",
    description:
      "Cabos e peças de alumínio com pouca mistura de outros materiais.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "aluminio",
  },
  {
    id: "tampas-aluminio",
    slug: "tampas-de-aluminio",
    title: "Tampas de alumínio",
    description:
      "Tampas de alumínio de potes e embalagens, limpas e secas.",
    image: img("photo-1610557892470-55d9e80c0bce", 800),
    category: "aluminio",
  },
  {
    id: "sucata-aluminio",
    slug: "sucata-de-aluminio-limpo",
    title: "Sucata de alumínio limpo",
    description:
      "Restos de sucata de alumínio limpo, sem contaminação excessiva.",
    image: img("photo-1611273426858-450d8e3c9fce", 800),
    category: "aluminio",
  },

  // Ferro
  {
    id: "estruturas-ferro",
    slug: "estruturas-de-ferro",
    title: "Estruturas de ferro",
    description:
      "Portões, grades, vigas e demais estruturas de ferro para reciclagem.",
    image: img("photo-1504328345606-18bbc8c9d7d1", 800),
    category: "ferro",
  },
  {
    id: "ferragens-construcao",
    slug: "ferragens-e-sucata-de-construcao",
    title: "Ferragens e sucata de construção",
    description:
      "Ferragens e sucata de ferro provenientes de obras e reformas.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "ferro",
  },
  {
    id: "parafusos",
    slug: "parafusos-pregos-e-porcas",
    title: "Parafusos, pregos e porcas",
    description:
      "Parafusos, pregos, porcas e pequenas ferragens de ferro.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "ferro",
  },
  {
    id: "ferramentas",
    slug: "ferramentas-velhas",
    title: "Ferramentas velhas",
    description:
      "Chaves, alicates, martelos e outras ferramentas usadas em ferro.",
    image: img("photo-1504328345606-18bbc8c9d7d1", 800),
    category: "ferro",
  },
  {
    id: "eletro-ferro",
    slug: "eletrodomesticos-estrutura-ferro",
    title: "Eletrodomésticos com estrutura de ferro",
    description:
      "Partes de fogão, máquina de lavar e geladeira com estrutura de ferro.",
    image: img("photo-1550009158-9ebf69173e03", 800),
    category: "ferro",
  },
  {
    id: "chapas-aco",
    slug: "chapas-e-sucata-de-aco",
    title: "Chapas e sucata de aço",
    description:
      "Chapas e sucata de aço provenientes de indústria e oficinas.",
    image: img("photo-1504328345606-18bbc8c9d7d1", 800),
    category: "ferro",
  },
  {
    id: "motores-ferro",
    slug: "motores-e-pecas-automotivas",
    title: "Motores e peças automotivas de ferro",
    description:
      "Motores e peças automotivas de ferro para destinação reciclável.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "ferro",
  },

  // Metal
  {
    id: "pecas-maquinas",
    slug: "pecas-de-maquinas",
    title: "Peças de máquinas",
    description:
      "Peças de máquinas metálicas, com ou sem mistura de tipos de metal.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "metal",
  },
  {
    id: "ferragens-variadas",
    slug: "ferragens-variadas",
    title: "Ferragens variadas",
    description:
      "Ferragens variadas e mistura de metais para avaliação e reciclagem.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "metal",
  },
  {
    id: "objetos-metalicos",
    slug: "objetos-metalicos-pequenos",
    title: "Objetos metálicos pequenos",
    description:
      "Objetos metálicos pequenos sem separação clara entre tipos de metal.",
    image: img("photo-1473341304170-971dccb5ac1e", 800),
    category: "metal",
  },
  {
    id: "restos-construcao-metal",
    slug: "restos-de-construcao-com-metais",
    title: "Restos de construção com diferentes metais",
    description:
      "Restos de construção contendo diferentes metais misturados.",
    image: img("photo-1504328345606-18bbc8c9d7d1", 800),
    category: "metal",
  },
  {
    id: "utensilios-metal",
    slug: "utensilios-metalicos",
    title: "Utensílios metálicos",
    description:
      "Utensílios metálicos sem identificação clara do tipo de metal.",
    image: img("photo-1571068316344-75bc76f77890", 800),
    category: "metal",
  },
  {
    id: "pecas-pequenas-mistas",
    slug: "parafusos-dobradicas-e-pecas-mistas",
    title: "Parafusos, dobradiças e peças pequenas misturadas",
    description:
      "Parafusos, dobradiças e peças pequenas misturadas de metal.",
    image: img("photo-1581092160562-40aa08e78837", 800),
    category: "metal",
  },
  {
    id: "sucata-oficinas",
    slug: "sucata-de-oficinas-mecanicas",
    title: "Sucata de oficinas mecânicas",
    description:
      "Sucata misturada de oficinas mecânicas, avaliada conforme composição.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "metal",
  },

  // Cobre
  {
    id: "fios-descascados",
    slug: "fios-eletricos-descascados",
    title: "Fios elétricos descascados",
    description:
      "Fios elétricos descascados com cobre limpo, de alta valorização.",
    image: img("photo-1615485290382-441e4d049cb5", 800),
    category: "cobre",
  },
  {
    id: "cabos-energia",
    slug: "cabos-de-energia-e-extensao",
    title: "Cabos de energia e extensão",
    description:
      "Cabos de energia e extensão, preferencialmente com plástico separado do cobre.",
    image: img("photo-1615485290382-441e4d049cb5", 800),
    category: "cobre",
  },
  {
    id: "tubos-cobre",
    slug: "tubos-de-cobre",
    title: "Tubos de cobre",
    description:
      "Tubos de cobre de encanamento, ar-condicionado e refrigeração.",
    image: img("photo-1615485290382-441e4d049cb5", 800),
    category: "cobre",
  },
  {
    id: "bobinas",
    slug: "bobinas-e-enrolamentos",
    title: "Bobinas e enrolamentos de motores",
    description:
      "Bobinas e enrolamentos de transformadores e motores queimados com cobre.",
    image: img("photo-1581092918056-0c4c3acd3789", 800),
    category: "cobre",
  },
  {
    id: "eletronicos-cobre",
    slug: "sucata-de-eletronicos-com-cobre",
    title: "Sucata de eletrônicos com cobre",
    description:
      "Partes internas de eletrônicos contendo cobre para reciclagem.",
    image: img("photo-1550009158-9ebf69173e03", 800),
    category: "cobre",
  },
  {
    id: "pecas-cobre",
    slug: "conexoes-e-pecas-de-cobre",
    title: "Conexões e peças de cobre maciço",
    description:
      "Conexões e peças de cobre maciço, limpas e sem muita mistura.",
    image: img("photo-1615485290382-441e4d049cb5", 800),
    category: "cobre",
  },
];

export const galleryImages = [
  {
    src: img("photo-1532996122724-e3c354a0b15b", 700),
    alt: "Papelão reciclável",
  },
  {
    src: img("photo-1621451537084-482c73073a0f", 700),
    alt: "Plásticos recicláveis",
  },
  {
    src: img("photo-1610557892470-55d9e80c0bce", 700),
    alt: "Latinhas de alumínio",
  },
  {
    src: img("photo-1615485290382-441e4d049cb5", 700),
    alt: "Cobre reciclável",
  },
  {
    src: img("photo-1504328345606-18bbc8c9d7d1", 700),
    alt: "Sucata de ferro",
  },
  {
    src: img("photo-1530587191325-3db32d826c18", 700),
    alt: "Garrafas PET",
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((item) => item.slug === slug);
}

export function getScrapBySlug(slug: string) {
  return scrapItems.find((item) => item.slug === slug);
}

export function getMaterialGallery(item: Material | ScrapItem) {
  const related = scrapItems
    .filter((s) =>
      "category" in item
        ? s.category === (item as ScrapItem).category || s.category === item.id
        : s.category === item.id || s.category === item.slug,
    )
    .map((s) => s.image);

  const extras = item.gallery?.length
    ? item.gallery
    : related.length
      ? related
      : galleryImages.map((g) => g.src);

  const urls = [item.image, ...extras.filter((src) => src !== item.image)];
  return urls.slice(0, 6).map((src, i) => ({
    src,
    alt: `${item.title} — foto ${i + 1}`,
  }));
}
