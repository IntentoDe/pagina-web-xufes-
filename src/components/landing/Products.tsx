import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import productImage from "@/assets/product-chufa.jpg";
import { ArrowRight, X, ShoppingBag, Award, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chufa Seca Premium",
    category: "Snack natural",
    price: "6,90 €",
    image: productImage,
    description:
      "Selección extra de chufa seca de Valencia, crujiente y con su dulzor característico. Ideal para picar entre horas o añadir a ensaladas y postres.",
    features: ["Bolsa de 500 g", "Sin aditivos", "Origen DO Valencia"],
    badge: "Más vendido",
  },
  {
    id: 2,
    name: "Chufa con Piel Artesanal",
    category: "Tradicional",
    price: "5,50 €",
    image: productImage,
    description:
      "Chufa con su piel natural, tal como la consumían nuestros abuelos. Sabor más intenso y textura auténtica para los paladares más exigentes.",
    features: ["Bolsa de 400 g", "Secado tradicional", "Sabor intenso"],
    badge: null,
  },
  {
    id: 3,
    name: "Pack Degustación",
    category: "Pack regalo",
    price: "18,00 €",
    image: productImage,
    description:
      "Una cuidada selección de tres variedades de chufa valenciana en formato regalo. Perfecto para descubrir matices o sorprender a los tuyos.",
    features: ["3 bolsas de 250 g", "Caja artesanal", "Incluye recetario"],
    badge: "Edición limitada",
  },
];

export function Products() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  return (
    <section id="productos" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${headerVisible ? "reveal-visible" : ""} reveal`}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Productos
          </span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
            El sabor auténtico de la huerta
          </h2>
          <p className="mt-4 text-lg text-earth-600">
            Seleccionamos cada lote con mimo para que disfrutes de la mejor chufa de Valencia en
            tu casa.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            gridVisible ? "reveal-visible" : ""
          } reveal`}
        >
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-cream-400/60 bg-cream-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-earth-900/5 ${
                gridVisible ? "reveal-visible" : ""
              } reveal stagger-${index + 1}`}
            >
              {product.badge && (
                <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                  <Award className="h-3.5 w-3.5" />
                  {product.badge}
                </div>
              )}

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={816}
                  height={816}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {product.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium text-earth-900">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-primary">{product.price}</p>
                </div>

                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-earth-600">
                  {product.description}
                </p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                >
                  Saber más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-earth-900/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-cream-400/50 bg-cream-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-cream-50/80 p-2 text-earth-600 transition-colors hover:bg-cream-50 hover:text-earth-900"
              aria-label="Cerrar detalles del producto"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover"
                width={816}
                height={816}
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {selectedProduct.category}
                  </p>
                  <h3
                    id="product-modal-title"
                    className="mt-1 font-display text-2xl font-medium text-earth-900"
                  >
                    {selectedProduct.name}
                  </h3>
                </div>
                <p className="text-2xl font-semibold text-primary">{selectedProduct.price}</p>
              </div>

              <p className="mt-4 leading-relaxed text-earth-700">{selectedProduct.description}</p>

              <ul className="mt-6 space-y-2">
                {selectedProduct.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-earth-700">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-green-700 active:scale-[0.98]"
              >
                <ShoppingBag className="h-4 w-4" />
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
