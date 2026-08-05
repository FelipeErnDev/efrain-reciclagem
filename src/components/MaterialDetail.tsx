import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/constants";

type MaterialDetailProps = {
  title: string;
  description: string;
  image: string;
};

export function MaterialDetail({
  title,
  description,
  image,
}: MaterialDetailProps) {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-md bg-fenix-surface sm:aspect-[4/3] lg:aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.35rem)] font-bold tracking-tight text-fenix-black">
              {title}
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-fenix-muted md:text-base">
              {description}
            </p>
            <a
              href={whatsappUrl(
                `Olá! Gostaria de mais informações sobre: ${title}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green mt-8"
            >
              Entrar em contato
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
