import type { Metadata } from "next";
import { GoogleReviewsCTA } from "@/components/GoogleReviewsCTA";
import { MaterialsGrid } from "@/components/MaterialsGrid";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Materiais",
  description: `Materiais reciclados — compra e venda com a ${SITE.brandName}.`,
};

export default function MateriaisPage() {
  return (
    <>
      <PageHero
        title="Materiais"
        breadcrumb="Materiais"
        image="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=2000&q=80"
      />
      <MaterialsGrid />
      <GoogleReviewsCTA />
    </>
  );
}
