import { Reveal } from "@/components/Reveal";
import { DIFFERENTIALS } from "@/lib/constants";

export function Differentials() {
  return (
    <section className="bg-fenix-surface py-14 md:py-20">
      <div className="container-fenix">
        <Reveal>
          <h2 className="section-title text-center">Nossos diferenciais</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 0.05}>
              <article className="h-full border border-fenix-line bg-fenix-white p-5">
                <span className="font-display text-sm font-bold text-fenix-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-fenix-muted">
                  {item}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
