"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "@/data/materials";

type GalleryImage = {
  src: string;
  alt: string;
};

type PhotoGalleryProps = {
  images?: GalleryImage[];
};

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const items = images?.length ? images : galleryImages;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const galleryKey = items.map((img) => img.src).join("|");

  useEffect(() => {
    setActive(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [galleryKey]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const card = el.querySelector("figure");
      if (!card) return;
      const width = (card as HTMLElement).offsetWidth + 16;
      const idx = Math.round(el.scrollLeft / width);
      setActive(Math.min(idx, items.length - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  if (items.length < 2) return null;

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    if (!card) return;
    const width = (card as HTMLElement).offsetWidth + 16;
    el.scrollTo({ left: width * i, behavior: "smooth" });
    setActive(i);
  };

  return (
    <section className="bg-fenix-surface py-14 md:py-20">
      <div className="container-fenix">
        <Reveal>
          <h2 className="section-title text-center">Galeria de fotos</h2>
        </Reveal>

        <div
          ref={trackRef}
          className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {items.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className="relative aspect-[3/4] w-[70%] shrink-0 snap-center overflow-hidden rounded-xl sm:aspect-[4/3] sm:w-[48%] lg:w-[calc(25%-12px)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width:640px) 70vw, (max-width:1024px) 48vw, 25vw"
                priority={i < 2}
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Foto ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-fenix-green"
                  : "w-2.5 bg-black/15 hover:bg-black/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
