import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import productImage from "@/assets/product-chufa.jpg";

const stats = [
  { value: "50+", label: "años trabajando la tierra" },
  { value: "27", label: "años dedicados a la chufa" },
  { value: "2", label: "hermanos al frente" },
];

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="relative scroll-mt-20 bg-cream-100 py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${
          isVisible ? "reveal-visible" : ""
        } reveal`}
      >
        <div className="relative order-2 lg:order-1">
          <img
            src={productImage}
            alt="Chufa seca de Valencia en un saco de arpillera"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
            width={816}
            height={816}
            loading="lazy"
          />
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-xl lg:-right-6">
            <p className="font-display text-lg italic">“De lo bueno, lo mejor”</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nosotros
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
            Una familia de Alboraya que vive de la chufa
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-earth-700">
            <p>
              Xufes Pastor son dos hermanos que llevan toda la vida en el campo. Más de 50 años
              trabajando la tierra nos han enseñado a respetar cada ciclo del cultivo.
            </p>
            <p>
              Hace 27 años nos volcamos por completo en la chufa: construimos nuestro propio
              lavadero y perfeccionamos el secado tradicional. Hoy vendemos y distribuimos chufa
              a quienes hacen horchata, con el cuidado de siempre y la capacidad para servir
              grandes pedidos.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-cream-400 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="font-display text-4xl font-semibold text-earth-900 lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-earth-600">{stat.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
