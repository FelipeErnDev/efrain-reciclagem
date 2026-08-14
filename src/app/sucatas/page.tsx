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
        image="/materials/metal.jpg"
      />
      <ScrapCatalog />
      <GoogleReviewsCTA />
    </>
  );
}
