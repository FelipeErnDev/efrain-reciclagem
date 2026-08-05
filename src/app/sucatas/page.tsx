import type { Metadata } from "next";
import { GoogleReviewsCTA } from "@/components/GoogleReviewsCTA";
import { PageHero } from "@/components/PageHero";
import { ScrapCatalog } from "@/components/ScrapCatalog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sucatas",
  description: `Catálogo de materiais recicláveis da ${SITE.brandName}.`,
};

export default function SucatasPage() {
  return (
    <>
      <PageHero
        title="Sucatas"
        breadcrumb="Sucatas"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80"
      />
      <ScrapCatalog />
      <GoogleReviewsCTA />
    </>
  );
}
