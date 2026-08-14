import { Reveal } from "@/components/Reveal";
import { EXCLUDED_MATERIALS } from "@/lib/constants";

export function ExclusionBanner() {
  return (
    <section className="bg-fenix-green metal-grain">
      <div className="container-fenix relative z-[2] py-8 md:py-10">
        <Reveal y={16}>
          <div className="flex gap-4 md:items-start md:gap-5">
            <span
              className="mt-1 hidden h-10 w-px shrink-0 bg-white/80 sm:block"
              aria-hidden
            />
            <div>
              <h2 className="font-display text-lg font-bold text-white md:text-xl">
                Atenção na entrega dos materiais:
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
                {EXCLUDED_MATERIALS}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
