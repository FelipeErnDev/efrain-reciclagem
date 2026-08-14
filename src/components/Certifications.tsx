import { Reveal } from "@/components/Reveal";
import { ABOUT_LICENSES } from "@/lib/constants";

export function Certifications() {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix max-w-3xl text-center">
        <Reveal>
          <h2 className="section-title">Licenças e regularização</h2>
          <p className="mt-5 text-base leading-relaxed text-fenix-muted">
            {ABOUT_LICENSES}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
