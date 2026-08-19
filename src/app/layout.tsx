import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const revalidate = 60;

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reciclagemefrain.com.br"),
  title: {
    default: `${SITE.brandName} | Compra e venda de materiais reciclados`,
    template: `%s | ${SITE.brandName}`,
  },
  description: SITE.description,
  applicationName: SITE.brandName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: SITE.brandName,
    description: SITE.tagline,
    locale: "pt_BR",
    type: "website",
    url: "https://reciclagemefrain.com.br",
    siteName: SITE.brandName,
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: SITE.brandName,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE.brandName,
    description: SITE.tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-fenix-white text-fenix-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
