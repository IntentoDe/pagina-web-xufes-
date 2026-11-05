import { ArrowRight, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/descargando chufas en foios.jpeg";

const facts = [
  { value: "DO", label: "Chufa de Valencia" },
  { value: "27 años", label: "Dedicados a la chufa" },
  { value: "Propios", label: "Lavadero y secadero" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-earth-900">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chufa recién lavada descargándose en la era de secado"
          className="h-full w-full object-cover object-[70%_center]"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-earth-900/65 to-earth-900/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-earth-900/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-16 pt-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 bg-cream-50/10 px-4 py-1.5 text-sm font-medium text-cream-100 backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4 text-green-200" />
            <span className="sm:hidden">DO Chufa de Valencia</span>
            <span className="hidden sm:inline">Denominación de Origen Chufa de Valencia</span>
          </p>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
            La chufa con la que se hace{" "}
            <em className="font-normal italic text-earth-200">horchata de verdad</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200 sm:text-xl">
            Cultivamos, lavamos y secamos Chufa de Valencia en Alboraya. Suministramos a fábricas
            de horchata y horchaterías artesanas, en calidad normal o premium.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-all hover:bg-earth-600 active:scale-[0.98]"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#calidades"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/40 px-8 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-cream-50/10"
            >
              Ver calidades
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cream-50/15 bg-earth-900/60 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-3 px-6">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-5 lg:py-6 ${
                index > 0 ? "border-l border-cream-50/15 pl-4 lg:pl-8" : ""
              }`}
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <p className="font-display text-2xl font-semibold text-cream-50 lg:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-sm text-cream-300">{fact.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
