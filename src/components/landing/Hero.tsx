import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImage from "@/assets/hero-chufa.jpg";
import { Leaf, ArrowDown } from "lucide-react";

export function Hero() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-cream-100">
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 lg:grid-cols-2 lg:gap-12 lg:py-0">
        <div
          ref={contentRef}
          className={`flex flex-col justify-center pt-12 lg:pt-0 ${
            contentVisible ? "reveal-visible" : ""
          } reveal`}
        >
          <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            <span>Xufes Pastor · de lo bueno lo mejor</span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-earth-900 sm:text-6xl lg:text-7xl">
            Chufa de Valencia
            <span className="block text-primary">El oro de la huerta</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-earth-700 sm:text-xl">
            Un tesoro mediterráneo cultivado durante siglos en la fertile tierra valenciana.
            Sabor dulce, textura crujiente y beneficios que nutren desde dentro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-700/20 active:scale-[0.98]"
            >
              Descubrir productos
            </a>
            <a
              href="#historia"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-earth-400 bg-transparent px-7 py-3.5 text-base font-semibold text-earth-800 transition-all hover:border-primary hover:text-primary active:scale-[0.98]"
            >
              Conocer a Xufes Pastor
            </a>
          </div>

          <div className="mt-12 hidden items-center gap-8 text-sm text-earth-600 lg:flex">
            <div>
              <p className="text-2xl font-semibold text-earth-900">500+</p>
              <p>Años de tradición</p>
            </div>
            <div className="h-10 w-px bg-earth-300" />
            <div>
              <p className="text-2xl font-semibold text-earth-900">100%</p>
              <p>Natural y artesanal</p>
            </div>
            <div className="h-10 w-px bg-earth-300" />
            <div>
              <p className="text-2xl font-semibold text-earth-900">DO</p>
              <p>Origen garantizado</p>
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`relative lg:h-[85vh] ${imageVisible ? "reveal-visible" : ""} reveal-scale`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-earth-900/10 lg:aspect-auto lg:h-full">
            <img
              src={heroImage}
              alt="Chufa de Valencia en un cuenco artesanal con vistas a campos de cultivo"
              className="h-full w-full object-cover"
              width={1440}
              height={912}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl border border-cream-400/50 bg-cream-50/95 p-5 shadow-xl backdrop-blur-sm lg:block">
            <p className="font-display text-lg font-medium text-earth-900">
              "La chufa más pequeña, el sabor más grande de Valencia."
            </p>
          </div>
        </div>
      </div>

      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce flex-col items-center gap-2 text-sm font-medium text-earth-600 transition-colors hover:text-primary lg:flex"
        aria-label="Desplazarse a Conócenos"
      >
        <span>Descubre más</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
