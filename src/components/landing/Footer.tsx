import logo from "@/assets/logo-xufes-pastor.png";

const links = [
  { href: "#denominacion", label: "Denominación de Origen" },
  { href: "#calidades", label: "Calidades" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-cream-50/10 bg-earth-900 py-12 text-cream-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-12 w-12 rounded-full bg-cream-50 object-contain"
              width={48}
              height={48}
              loading="lazy"
            />
            <span>
              <span className="block font-display text-xl font-semibold text-cream-50">
                Xufes Pastor
              </span>
              <span className="block text-sm text-cream-400">
                Chufa de Valencia DO · Alboraya
              </span>
            </span>
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-cream-50">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream-50/10 pt-6 text-sm text-cream-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Xufes Pastor. Todos los derechos reservados.</p>
          <p>C/ Calderers 38, 46120 Alboraya, Valencia</p>
        </div>
      </div>
    </footer>
  );
}
