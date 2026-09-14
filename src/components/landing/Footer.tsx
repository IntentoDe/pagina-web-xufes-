import { Leaf, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cream-400/50 bg-earth-900 py-16 text-cream-100 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-display text-2xl font-semibold">Xufes Pastor</span>
            </div>
            <p className="mt-2 text-sm italic text-cream-300">de lo bueno lo mejor</p>
            <p className="mt-4 max-w-md leading-relaxed text-cream-400">
              El oro de la huerta mediterránea. Tradición, sabor y bienestar en cada tubérculo,
              cultivado con respeto por nuestro territorio.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium text-cream-50">Contacto</h4>
            <ul className="mt-5 space-y-3 text-cream-300">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>C/ Calderers 38, Alboraya, Valencia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+34 639122927</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>vpcerpase@hotmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium text-cream-50">Síguenos</h4>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-700 bg-cream-800/50 text-cream-200 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-700 bg-cream-800/50 text-cream-200 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-800 pt-8 text-sm text-cream-400 lg:flex-row">
          <p>&copy; {new Date().getFullYear()} Xufes Pastor. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream-100">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-cream-100">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
