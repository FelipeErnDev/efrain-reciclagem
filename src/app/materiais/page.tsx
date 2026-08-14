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
      <PageHero title="Materiais" breadcrumb="Materiais" />
      <MaterialsGrid />
      <GoogleReviewsCTA />
    </>
  );
}
