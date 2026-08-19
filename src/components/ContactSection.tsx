"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE, whatsappUrl } from "@/lib/constants";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const text = `Olá! Meu nome é ${name}. Telefone: ${phone}.\n\n${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h2 className="section-title">Fale com a {SITE.brandName}</h2>
            <p className="mt-5 text-base leading-relaxed text-fenix-muted">
              Solicite uma cotação, tire dúvidas sobre materiais ou agende uma
              coleta. Atendimento presencial, a domicílio e online no{" "}
              {SITE.serviceArea}.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fenix-muted uppercase">
                  WhatsApp / Telefone
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-fenix-green"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              {SITE.phones.filter((p) => p !== SITE.phone).length > 0 && (
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fenix-muted uppercase">
                  Outros telefones
                </dt>
                <dd className="mt-1 space-y-1 text-lg font-medium">
                  {SITE.phones
                    .filter((p) => p !== SITE.phone)
                    .map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                </dd>
              </div>
              )}
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fenix-muted uppercase">
                  E-mail
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="transition-colors hover:text-fenix-green"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fenix-muted uppercase">
                  Endereço
                </dt>
                <dd className="mt-1 text-lg font-medium">{SITE.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fenix-muted uppercase">
                  Horário
                </dt>
                <dd className="mt-1 text-lg font-medium">{SITE.hours}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-fenix-line bg-fenix-surface/60 p-6 md:p-8"
          >
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Nome</span>
                <input
                  name="name"
                  required
                  className="w-full border border-fenix-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-fenix-green"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Telefone</span>
                <input
                  name="phone"
                  required
                  className="w-full border border-fenix-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-fenix-green"
                  placeholder="(47) 98845-5704"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Mensagem</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y border border-fenix-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-fenix-green"
                  placeholder="Descreva o material e o volume aproximado"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-green mt-6 w-full sm:w-auto">
              Enviar pelo WhatsApp
            </button>

            {sent && (
              <p className="mt-4 text-sm text-fenix-green">
                Abrimos o WhatsApp com sua mensagem. É só enviar!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
