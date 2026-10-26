import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-xufes-pastor.png";

const links = [
  { href: "#denominacion", label: "Denominación de Origen" },
  { href: "#calidades", label: "Calidades" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-cream-400/60 bg-cream-50/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Xufes Pastor, inicio">
          <img
            src={logo}
            alt=""
            className="h-11 w-11 rounded-full bg-cream-50 object-contain"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-semibold transition-colors ${
                solid ? "text-earth-900" : "text-cream-50"
              }`}
            >
              Xufes Pastor
            </span>
            <span
              className={`mt-1 text-[0.7rem] italic tracking-wide transition-colors ${
                solid ? "text-earth-600" : "text-cream-200"
              }`}
            >
              de lo bueno lo mejor
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-earth-700 hover:bg-primary/10 hover:text-primary"
                    : "text-cream-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-earth-700 active:scale-[0.98] lg:inline-flex"
        >
          Pedir presupuesto
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
            solid
              ? "border-earth-300 text-earth-800 hover:border-primary hover:text-primary"
              : "border-white/40 text-white hover:bg-white/10"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-400/60 bg-cream-50 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-earth-800 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Pedir presupuesto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
