import heroImage from "@/assets/hero-chufa.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-earth-900">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chufa de Valencia"
          className="h-full w-full object-cover"
          width={1440}
          height={912}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/70 via-earth-900/25 to-earth-900/50" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <a
          href="#productos"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-700/20 active:scale-[0.98]"
        >
          Descubre nuestros productos
        </a>
      </div>
    </section>
  );
}
