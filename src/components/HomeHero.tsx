"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE, whatsappUrl } from "@/lib/constants";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(88vh,820px)] overflow-hidden bg-fenix-black text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-fenix-green-deep via-fenix-black to-fenix-green metal-grain"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,119,83,0.35),transparent_55%)]" />

      <div className="container-fenix relative z-[2] flex min-h-[min(88vh,820px)] flex-col justify-center py-20 md:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-[0.12em] text-white/75 uppercase md:text-[0.95rem] md:normal-case md:tracking-normal">
            {SITE.brandName}
          </p>
          <h1 className="font-display text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.08] font-bold tracking-tight">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {SITE.description}
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green mt-9"
          >
            Solicite um orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
