import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialDetail } from "@/components/MaterialDetail";
import { MaterialsCarousel } from "@/components/MaterialsCarousel";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import {
  getMaterialBySlug,
  getMaterialGallery,
  materials,
} from "@/data/materials";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return materials.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMaterialBySlug(slug);
  if (!item) return { title: "Material" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const item = getMaterialBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        image={item.image}
        crumbs={[
          { label: "Materiais", href: "/materiais" },
          { label: item.title },
        ]}
      />
      <MaterialDetail
        title={item.title}
        description={item.description}
        image={item.image}
      />
      <PhotoGallery images={getMaterialGallery(item)} />
      <MaterialsCarousel />
    </>
  );
}
