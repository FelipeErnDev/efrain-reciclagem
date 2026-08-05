import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ABOUT_LICENSES, ABOUT_TEXT, SITE } from "@/lib/constants";

type AboutSectionProps = {
  showCta?: boolean;
  compact?: boolean;
};

export function AboutSection({
  showCta = true,
  compact = false,
}: AboutSectionProps) {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fenix-surface">
            <Image
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80"
              alt="Materiais recicláveis"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="section-title">Conheça a {SITE.brandName}</h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-fenix-muted md:text-base">
              {compact ? (
                <>
                  <p>{ABOUT_TEXT}</p>
                  <p>
                    Atendimento presencial, a domicílio e online no{" "}
                    {SITE.serviceArea}. {ABOUT_LICENSES}
                  </p>
                </>
              ) : (
                <>
                  <p>{ABOUT_TEXT}</p>
                  <p>
                    Razão social: {SITE.fullName}. Especialidade: compra e venda
                    de materiais reciclados em {SITE.city}/{SITE.state}.
                  </p>
                  <p>
                    {ABOUT_LICENSES} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </>
              )}
            </div>
            {showCta && (
              <Link href="/sobre-nos" className="btn btn-green mt-8">
                Conheça mais
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
