"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { materials } from "@/data/materials";

export function MaterialsCarousel() {
  const [index, setIndex] = useState(0);
  const pages = Math.ceil(materials.length / 3);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % pages);
    }, 6000);
    return () => window.clearInterval(id);
  }, [pages]);

  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix">
        <Reveal>
          <div className="border-t border-fenix-line pt-10">
            <h2 className="section-title">Materiais que compramos e vendemos!</h2>
          </div>
        </Reveal>

        <div className="mt-10 hidden overflow-hidden md:block">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: pages }).map((_, page) => (
              <div
                key={page}
                className="grid w-full shrink-0 grid-cols-2 gap-8 lg:grid-cols-3"
              >
                {materials.slice(page * 3, page * 3 + 3).map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.08}>
                    <Link
                      href={`/materiais/${item.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fenix-surface">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          sizes="(max-width:1024px) 45vw, 30vw"
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {materials.map((item) => (
              <Link
                key={item.id}
                href={`/materiais/${item.slug}`}
                className="w-[85%] shrink-0 snap-center"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fenix-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fenix-muted">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-fenix-green"
                  : "w-2.5 bg-fenix-line hover:bg-fenix-muted/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
