import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const qualities = [
  {
    id: "normal",
    name: "Chufa DO",
    tagline: "La de toda la vida",
    size: 0.72,
    description:
      "Chufa de Valencia limpia y seleccionada, con el rendimiento y el dulzor constantes que necesita una producción de horchata.",
    idealFor: "Fábricas de horchata y producción en volumen",
    features: [
      "Calibre estándar, homogéneo",
      "Lavada y secada en nuestras instalaciones",
      "Libre de piedras y restos de campo",
    ],
    featured: false,
  },
  {
    id: "premium",
    name: "Chufa DO Premium",
    tagline: "Calibre grande",
    size: 1,
    description:
      "Los granos de mayor tamaño de cada cosecha. Más carnosos y vistosos, para quien quiere lo mejor en el vaso y en el mostrador.",
    idealFor: "Horchaterías artesanas y venta a granel",
    features: [
      "Selección de calibre grande",
      "Lavada y secada en nuestras instalaciones",
      "Libre de piedras y restos de campo",
    ],
    featured: true,
  },
];

function ChufaMark({ scale }: { scale: number }) {
  // Stylised tiger nut drawn to scale so the two calibres can be compared at a glance.
  const rx = 52 * scale;
  const ry = 40 * scale;
  return (
    <svg viewBox="0 0 160 120" className="h-28 w-auto" aria-hidden>
      <ellipse cx="80" cy={60 + ry * 0.92} rx={rx * 0.8} ry={6 * scale} className="fill-earth-900/10" />
      <ellipse cx="80" cy="60" rx={rx} ry={ry} className="fill-earth-400" />
      {[-0.55, -0.15, 0.25, 0.62].map((t) => (
        <path
          key={t}
          d={`M ${80 + rx * t} ${60 - ry * 0.95} Q ${80 + rx * (t + 0.12)} 60 ${80 + rx * t} ${60 + ry * 0.95}`}
          className="fill-none stroke-earth-600"
          strokeWidth={3 * scale}
          strokeLinecap="round"
        />
      ))}
      <circle cx={80 - rx * 0.86} cy="60" r={5 * scale} className="fill-earth-700" />
    </svg>
  );
}

export function Qualities() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="calidades" className="relative scroll-mt-20 bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end ${
            headerVisible ? "reveal-visible" : ""
          } reveal`}
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nuestras calidades
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
              Un solo producto. Dos calibres.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-earth-700">
            Nos dedicamos solo a la chufa, y toda es Denominación de Origen. La diferencia entre
            nuestras dos calidades es el tamaño del grano.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 ${
            gridVisible ? "reveal-visible" : ""
          } reveal`}
        >
          {qualities.map((q, index) => (
            <article
              key={q.id}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                q.featured
                  ? "bg-earth-900 text-cream-100 shadow-2xl shadow-earth-900/20"
                  : "border border-cream-400 bg-cream-50 text-earth-800"
              } ${gridVisible ? "reveal-visible" : ""} reveal stagger-${index + 1}`}
            >
              <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:justify-between">
                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-widest ${
                      q.featured ? "text-earth-300" : "text-primary"
                    }`}
                  >
                    {q.tagline}
                  </p>
                  <h3
                    className={`mt-2 text-3xl font-semibold lg:text-4xl ${
                      q.featured ? "text-cream-50" : "text-earth-900"
                    }`}
                  >
                    {q.name}
                  </h3>
                </div>
                <div
                  className={`flex h-28 w-36 shrink-0 items-center sm:h-32 sm:w-40 justify-center rounded-2xl ${
                    q.featured ? "bg-cream-50/5" : "bg-cream-200"
                  }`}
                >
                  <ChufaMark scale={q.size} />
                </div>
              </div>

              <p
                className={`mt-6 text-lg leading-relaxed ${
                  q.featured ? "text-cream-200" : "text-earth-700"
                }`}
              >
                {q.description}
              </p>

              <ul className="mt-8 space-y-3">
                {q.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        q.featured ? "text-earth-300" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-8 border-t pt-6 ${
                  q.featured ? "border-cream-50/15" : "border-cream-400"
                }`}
              >
                <p
                  className={`text-sm ${q.featured ? "text-cream-400" : "text-earth-500"}`}
                >
                  Recomendada para
                </p>
                <p
                  className={`mt-1 font-medium ${
                    q.featured ? "text-cream-50" : "text-earth-900"
                  }`}
                >
                  {q.idealFor}
                </p>
              </div>

              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  const select = document.getElementById("quality") as HTMLSelectElement | null;
                  if (select) select.value = q.id;
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all active:scale-[0.98] ${
                  q.featured
                    ? "bg-primary text-primary-foreground hover:bg-earth-600"
                    : "border-2 border-earth-900 text-earth-900 hover:bg-earth-900 hover:text-cream-50"
                }`}
              >
                Pedir precio de {q.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-earth-600">
          Pedido mínimo <strong className="text-earth-900">200 kg</strong>. Precio según calidad,
          volumen y época de la campaña.
        </p>
      </div>
    </section>
  );
}
