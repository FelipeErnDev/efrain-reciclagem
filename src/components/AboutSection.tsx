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
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-fenix-green-deep to-fenix-green metal-grain">
            <img
              src="/brand/logo-vertical-light.svg"
              alt={SITE.brandName}
              className="relative z-[2] h-auto w-[55%] max-w-[220px]"
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
                  <p>{ABOUT_LICENSES}</p>
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
