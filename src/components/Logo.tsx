import Link from "next/link";
import { SITE } from "@/lib/constants";

type LogoProps = {
  className?: string;
  /** light = fundo escuro (header/footer); dark = fundo claro */
  variant?: "light" | "dark";
  layout?: "horizontal" | "symbol";
};

const LOGOS = {
  horizontal: {
    light: "/brand/logo-horizontal-light.svg",
    dark: "/brand/logo-horizontal-color.svg",
  },
  symbol: {
    light: "/brand/simbolo-04.svg",
    dark: "/brand/simbolo-01.svg",
  },
} as const;

export function Logo({
  className = "",
  variant = "light",
  layout = "horizontal",
}: LogoProps) {
  const src = LOGOS[layout][variant];
  const isHorizontal = layout === "horizontal";

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label={SITE.brandName}
    >
      {/* Native img: Next/Image is unreliable with local SVGs */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={SITE.brandName}
        width={isHorizontal ? 220 : 48}
        height={isHorizontal ? 88 : 48}
        className={
          isHorizontal
            ? "h-11 w-auto max-w-[170px] object-contain object-left sm:max-w-[200px] md:h-12 md:max-w-[230px]"
            : "h-10 w-10 object-contain md:h-11 md:w-11"
        }
        decoding="async"
      />
    </Link>
  );
}

export function BrandMark({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGOS.symbol[variant]}
      alt=""
      width={200}
      height={200}
      className={className}
      aria-hidden
      decoding="async"
    />
  );
}
