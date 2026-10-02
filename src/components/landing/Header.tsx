import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-xufes-pastor.png";

const links = [
  { href: "#historia", label: "Conócenos" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-cream-400/60 bg-cream-50/95 shadow-sm backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Xufes Pastor, inicio">
          <img
            src={logo}
            alt="Logotipo de Xufes Pastor"
            className="h-11 w-11 object-contain"
            width={44}
            height={44}
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-earth-900">Xufes Pastor</span>
            <span className="mt-0.5 text-[0.7rem] italic tracking-wide text-earth-600">
              de lo bueno lo mejor
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-earth-700 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-green-700 active:scale-[0.98] lg:inline-flex"
        >
          Pedir presupuesto
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-earth-300 text-earth-800 transition-colors hover:border-primary hover:text-primary lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-400/60 bg-cream-50/95 backdrop-blur-md lg:hidden">
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
          </ul>
        </div>
      )}
    </header>
  );
}