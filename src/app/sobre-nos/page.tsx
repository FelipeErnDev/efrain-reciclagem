import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { Certifications } from "@/components/Certifications";
import { Differentials } from "@/components/Differentials";
import { GoogleReviewsCTA } from "@/components/GoogleReviewsCTA";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: `Conheça a ${SITE.brandName} — compra e venda de materiais reciclados em ${SITE.city}/${SITE.state}.`,
};

export default function SobreNosPage() {
  return (
    <>
      <PageHero
        title="Sobre nós"
        breadcrumb="Sobre nós"
        image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=80"
      />
      <AboutSection showCta={false} />
      <MissionVisionValues />
      <Differentials />
      <PhotoGallery />
      <Certifications />
      <GoogleReviewsCTA />
    </>
  );
}
