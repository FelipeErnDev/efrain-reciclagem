import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialDetail } from "@/components/MaterialDetail";
import { PageHero } from "@/components/PageHero";
import { getMaterialBySlug, getScrapBySlug, scrapItems } from "@/data/materials";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return scrapItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getScrapBySlug(slug);
  if (!item) return { title: "Sucata" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ScrapPage({ params }: Props) {
  const { slug } = await params;
  const item = getScrapBySlug(slug);
  if (!item) notFound();

  const category = getMaterialBySlug(item.category);

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Sucatas", href: "/sucatas" },
          ...(category
            ? [{ label: category.title, href: "/sucatas" }]
            : []),
          { label: item.title },
        ]}
      />
      <MaterialDetail title={item.title} description={item.description} />
    </>
  );
}
