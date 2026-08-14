import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a ${SITE.brandName} em ${SITE.city}/${SITE.state}.`,
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        breadcrumb="Contato"
        image="/materials/latinha.jpg"
      />
      <ContactSection />
    </>
  );
}
