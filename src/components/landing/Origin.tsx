import { MapPin, ShieldCheck, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: MapPin,
    title: "Origen garantizado",
    description:
      "Solo se ampara la chufa cultivada en los municipios de l'Horta Nord inscritos en la Denominación. Nada de mezclas con chufa importada.",
  },
  {
    icon: ShieldCheck,
    title: "Controlada de principio a fin",
    description:
      "El Consejo Regulador supervisa el cultivo, el lavado y el secado de cada partida, y cada lote es trazable hasta su parcela.",
  },
  {
    icon: Award,
    title: "Un argumento para tu horchata",
    description:
      "Elaborar con chufa DO es lo que permite a una horchata presumir de Chufa de Valencia. Tus clientes lo notan, y lo buscan.",
  },
];

export function Origin() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="denominacion"
      className="relative scroll-mt-20 overflow-hidden bg-accent py-24 text-accent-foreground lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-cream-50/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[24rem] w-[24rem] rounded-full border border-cream-50/10"
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 ${isVisible ? "reveal-visible" : ""} reveal`}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              Denominación de Origen
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-cream-50 lg:text-5xl">
              Solo es Chufa de Valencia si nace en l'Horta Nord
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-cream-200 lg:pt-10">
            <p>
              Buena parte de la chufa que se vende en España llega de fuera. La Denominación de
              Origen Chufa de Valencia protege la que se cultiva aquí, en la huerta de Alboraya y
              los pueblos de alrededor, con un clima, una tierra arenosa y un agua de acequia que no
              se pueden copiar.
            </p>
            <p>
              Toda nuestra chufa es DO. Apostar por ella es apostar por el sabor de siempre y por
              los agricultores que mantienen viva la huerta.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream-50/15 bg-cream-50/15 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-accent p-8 lg:p-10">
              <pillar.icon className="h-7 w-7 text-green-200" strokeWidth={1.5} />
              <h3 className="mt-6 text-2xl font-medium text-cream-50">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
