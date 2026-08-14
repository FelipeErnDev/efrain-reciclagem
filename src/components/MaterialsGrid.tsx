import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { materials } from "@/data/materials";

export function MaterialsGrid() {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix">
        {materials.length === 0 ? (
          <p className="text-base text-fenix-muted">
            Em breve listamos aqui os materiais que compramos e vendemos.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.07}>
                <Link href={`/materiais/${item.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fenix-surface">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 45vw, 30vw"
                    />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-bold tracking-tight transition-colors group-hover:text-fenix-green">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-fenix-muted">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
