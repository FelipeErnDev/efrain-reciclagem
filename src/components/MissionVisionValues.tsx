import { Eye, Gem, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ABOUT_TEXT, DIFFERENTIALS } from "@/lib/constants";

const ITEMS = [
  {
    title: "Missão",
    icon: Target,
    text: ABOUT_TEXT,
  },
  {
    title: "Visão",
    icon: Eye,
    text: DIFFERENTIALS[0] + " " + DIFFERENTIALS[4] + " " + DIFFERENTIALS[7],
  },
  {
    title: "Valores",
    icon: Gem,
    text: [DIFFERENTIALS[1], DIFFERENTIALS[2], DIFFERENTIALS[3], DIFFERENTIALS[5]]
      .join(" "),
  },
];

export function MissionVisionValues() {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix grid gap-10 md:grid-cols-3 md:gap-8">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="group px-2 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center text-fenix-green">
                <item.icon
                  size={36}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fenix-muted md:text-[0.95rem]">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
