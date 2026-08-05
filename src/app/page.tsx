import { AboutSection } from "@/components/AboutSection";
import { Certifications } from "@/components/Certifications";
import { ExclusionBanner } from "@/components/ExclusionBanner";
import { GoogleReviewsCTA } from "@/components/GoogleReviewsCTA";
import { HomeHero } from "@/components/HomeHero";
import { MaterialsCarousel } from "@/components/MaterialsCarousel";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MaterialsCarousel />
      <ExclusionBanner />
      <AboutSection compact />
      <PhotoGallery />
      <Certifications />
      <GoogleReviewsCTA />
    </>
  );
}
