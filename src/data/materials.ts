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

/** Preenchido quando os materiais forem enviados novamente */
export const materials: Material[] = [];

/** Preenchido quando as sucatas forem enviadas novamente */
export const scrapItems: ScrapItem[] = [];

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
