import { Reveal } from "@/components/Reveal";

const CERTS = [
  {
    name: "Licença",
    color: "#1B4F9C",
    label: "Lorem ipsum dolor",
  },
  {
    name: "Ambiental",
    color: "#1B7A4B",
    label: "Sit amet consectetur",
  },
  {
    name: "Municipal",
    color: "#8B6914",
    label: "Adipiscing elit sed",
  },
  {
    name: "Estadual",
    color: "#2B6CB0",
    label: "Eiusmod tempor",
  },
];

export function Certifications() {
  return (
    <section className="bg-fenix-white py-14 md:py-20">
      <div className="container-fenix">
        <Reveal>
          <h2 className="section-title text-center">Nossas Licenças</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-fenix-muted">
            Contamos com todas as licenças exigidas para este tipo de serviço
            junto aos órgãos competentes. Lorem ipsum dolor sit amet.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 md:gap-6">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-2 md:h-28 md:w-28"
                  style={{ borderColor: cert.color }}
                >
                  <span
                    className="font-display text-sm font-bold tracking-tight md:text-base"
                    style={{ color: cert.color }}
                  >
                    {cert.name}
                  </span>
                </div>
                <p className="max-w-[9rem] text-xs text-fenix-muted">
                  {cert.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
