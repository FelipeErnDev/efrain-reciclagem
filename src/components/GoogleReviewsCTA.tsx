import { Reveal } from "@/components/Reveal";
import { BrandMark } from "@/components/Logo";
import { SITE } from "@/lib/constants";

export function GoogleReviewsCTA() {
  return (
    <section className="relative overflow-hidden bg-fenix-green-deep metal-grain">
      <div
        className="pointer-events-none absolute -left-8 top-1/2 hidden h-[130%] w-[380px] -translate-y-1/2 opacity-[0.14] lg:block"
        aria-hidden
      >
        <BrandMark variant="light" className="h-full w-full object-contain" />
      </div>

      <div className="container-fenix relative z-[2] flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center md:py-14">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold tracking-tight text-white">
            Confira Nossas Avaliações no Google!
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            Veja o que dizem sobre a {SITE.brandName} e a qualidade dos nossos
            serviços. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a href={SITE.googleReviews} className="btn btn-dark">
            Ver depoimentos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
