import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dryingImage from "@/assets/descargando chufas en foios.jpeg";

const steps = [
  {
    title: "Cultivo",
    description:
      "Se siembra en primavera en las tierras arenosas de l'Horta Nord y se riega con el agua de la acequia.",
  },
  {
    title: "Recolección",
    description:
      "Entre noviembre y diciembre, cuando la planta se ha secado, se arranca la chufa de la tierra.",
  },
  {
    title: "Lavado",
    description:
      "En nuestro lavadero propio eliminamos tierra, piedras y restos vegetales que llegan del campo.",
  },
  {
    title: "Secado natural",
    description:
      "Se extiende y se voltea a diario durante semanas hasta que pierde la humedad y concentra su dulzor.",
  },
  {
    title: "Selección y envío",
    description:
      "Separamos por calibre en normal y premium y preparamos tu pedido para la fábrica o el obrador.",
  },
];

export function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proceso" className="relative scroll-mt-20 bg-cream-50 py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20 ${
          isVisible ? "reveal-visible" : ""
        } reveal`}
      >
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proceso
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
            Del campo a tu fábrica, sin intermediarios
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-earth-700">
            Controlamos cada paso en nuestras propias instalaciones. Por eso sabemos exactamente
            qué chufa te enviamos.
          </p>
          <figure className="mt-10 overflow-hidden rounded-3xl">
            <img
              src={dryingImage}
              alt="Remolque descargando chufa lavada en la era de secado"
              className="aspect-[4/3] w-full object-cover"
              width={1600}
              height={900}
              loading="lazy"
            />
            <figcaption className="bg-cream-200 px-5 py-3 text-sm text-earth-600">
              Descarga de chufa recién lavada en nuestra era de secado.
            </figcaption>
          </figure>
        </div>

        <ol className="relative">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-6 border-b border-cream-400 py-8 first:pt-0 last:border-b-0 lg:gap-8"
            >
              <span className="w-14 shrink-0 font-display text-5xl font-light leading-none tabular-nums text-primary/70 lg:w-20 lg:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="text-2xl font-medium text-earth-900">{step.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-earth-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
