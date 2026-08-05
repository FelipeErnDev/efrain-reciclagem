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
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
      />
      <ContactSection />
    </>
  );
}
