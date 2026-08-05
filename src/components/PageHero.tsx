import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  image: string;
  /** Simple single crumb (legacy) */
  breadcrumb?: string;
  /** Multi-level crumbs: Home is always first */
  crumbs?: BreadcrumbItem[];
};

export function PageHero({ title, breadcrumb, image, crumbs }: PageHeroProps) {
  const trail: BreadcrumbItem[] = crumbs?.length
    ? crumbs
    : breadcrumb
      ? [{ label: breadcrumb }]
      : [];

  return (
    <section className="relative overflow-hidden bg-fenix-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="container-fenix relative z-[2] py-16 md:py-20 lg:py-24">
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">
          {title}
        </h1>
        <nav className="mt-3 text-sm text-white/75" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {trail.map((item, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li key={`${item.label}-${i}`} className="flex items-center gap-2">
                  <span className="opacity-60">&gt;</span>
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-white">{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
