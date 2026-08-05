import { Eye, Gem, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    title: "Missão",
    icon: Target,
    text: "Contribuir para a economia circular e a preservação do meio ambiente, com coleta rápida, organizada e segura de materiais recicláveis.",
  },
  {
    title: "Visão",
    icon: Eye,
    text: "Ser referência em compra e venda de materiais reciclados no Alto Vale, com transparência, agilidade e destinação correta.",
  },
  {
    title: "Valores",
    icon: Gem,
    text: "Atendimento ágil e personalizado, equipe qualificada, equipamentos modernos e parcerias com empresas e comunidades.",
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
