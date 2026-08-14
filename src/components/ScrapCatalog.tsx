"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { materials, scrapItems } from "@/data/materials";
import { whatsappUrl } from "@/lib/constants";

export function ScrapCatalog() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return scrapItems;
    return scrapItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">
              Categorias
            </h2>
            <ul className="mt-4 divide-y divide-fenix-line border-y border-fenix-line">
              <li>
                <button
                  type="button"
                  onClick={() => setActive("all")}
                  className={`w-full py-3 text-left text-sm transition-colors ${
                    active === "all"
                      ? "font-semibold text-fenix-green"
                      : "text-fenix-muted hover:text-fenix-black"
                  }`}
                >
                  - Todas as sucatas
                </button>
              </li>
              {materials.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => setActive(m.slug)}
                    className={`w-full py-3 text-left text-sm transition-colors ${
                      active === m.slug
                        ? "font-semibold text-fenix-green"
                        : "text-fenix-muted hover:text-fenix-black"
                    }`}
                  >
                    - {m.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-fenix-green p-6 text-white metal-grain">
            <div className="relative z-[2]">
              <p className="text-sm text-white/85">Precisando de ajuda?</p>
              <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                Fale com nossos especialistas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Entre em contato através do nosso WhatsApp e tire todas as suas
                dúvidas.
              </p>
              <a
                href={whatsappUrl(
                  "Olá! Preciso de ajuda com materiais reciclados.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-6 w-full"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </aside>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.06}>
              <Link href={`/sucatas/${item.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fenix-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 45vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight transition-colors group-hover:text-fenix-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fenix-muted">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-fenix-muted sm:col-span-2 xl:col-span-3">
              Em breve listamos aqui as sucatas disponíveis.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
