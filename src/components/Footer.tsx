import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NAV_LINKS, SITE, whatsappUrl } from "@/lib/constants";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-white/80 transition-colors hover:bg-white/[0.12] hover:text-white"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-fenix-black text-white metal-grain">
      <div className="container-fenix relative z-[2] py-12 md:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 lg:gap-10">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo className="max-w-[200px]" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {SITE.fullName}. Compra e venda de materiais reciclados em{" "}
              {SITE.city}/{SITE.state}, com atendimento no {SITE.serviceArea}.
              Coleta rápida, organizada e segura.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={SITE.social.instagram} label="Instagram">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 7.2A4.8 4.8 0 1016.8 12 4.81 4.81 0 0012 7.2zm0 7.92A3.12 3.12 0 1115.12 12 3.13 3.13 0 0112 15.12zM17.76 6.96a1.12 1.12 0 11-1.12-1.12 1.12 1.12 0 011.12 1.12zM21.6 12a9.6 9.6 0 01-.06 1.1 5.55 5.55 0 01-5.44 5.44 9.6 9.6 0 01-1.1.06 9.6 9.6 0 01-1.1-.06 5.55 5.55 0 01-5.44-5.44A9.6 9.6 0 014.4 12a9.6 9.6 0 01.06-1.1 5.55 5.55 0 015.44-5.44A9.6 9.6 0 0111 5.4h2a9.6 9.6 0 011.1.06 5.55 5.55 0 015.44 5.44A9.6 9.6 0 0121.6 12zm-1.68 0a7.9 7.9 0 00-.05-.9 3.87 3.87 0 00-3.77-3.77 7.9 7.9 0 00-.9-.05h-2a7.9 7.9 0 00-.9.05 3.87 3.87 0 00-3.77 3.77 7.9 7.9 0 00-.05.9v2a7.9 7.9 0 00.05.9 3.87 3.87 0 003.77 3.77 7.9 7.9 0 00.9.05h2a7.9 7.9 0 00.9-.05 3.87 3.87 0 003.77-3.77 7.9 7.9 0 00.05-.9z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-lg font-semibold">
              Menu de Navegação
            </h3>
            <ul className="mt-5 flex flex-col gap-2.5 lg:grid lg:grid-cols-1 lg:gap-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex w-full items-center justify-center rounded-sm bg-white/[0.06] px-4 py-3.5 text-center text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.1] hover:text-white md:justify-start md:bg-white/[0.05] lg:inline-flex lg:w-auto lg:bg-transparent lg:px-0 lg:py-1.5 lg:justify-start"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-sm bg-white/[0.06] p-6 md:p-7 lg:bg-transparent lg:p-0">
            <h3 className="font-display text-lg font-semibold leading-snug">
              Interessado em nossos serviços?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Compra e venda de materiais reciclados com atendimento ágil e
              personalizado. Solicite sua cotação agora!
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green mt-6 w-full md:w-auto lg:w-full xl:w-auto"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-[2] border-t border-white/10 pb-24 md:pb-6">
        <div className="container-fenix flex flex-col items-center gap-2.5 py-6 text-center text-xs leading-relaxed text-white/55 md:gap-3 lg:flex-row lg:justify-between lg:gap-4 lg:text-left">
          <p className="order-2 max-w-xs md:max-w-none lg:order-1 lg:max-w-[240px]">
            {SITE.address}
          </p>
          <p className="order-1 text-[0.8rem] text-white/70 lg:order-2">
            © {new Date().getFullYear()} {SITE.brandName}. Todos os direitos
            reservados.
          </p>
          <p className="order-3 lg:max-w-[260px] lg:text-right">{SITE.hours}</p>
        </div>
      </div>
    </footer>
  );
}
