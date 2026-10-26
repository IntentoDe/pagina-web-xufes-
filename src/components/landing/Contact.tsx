import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EMAIL = "vpcerpase@hotmail.com";
const PHONE = "+34 639 12 29 27";
const PHONE_LINK = "+34639122927";

const qualityLabels: Record<string, string> = {
  normal: "Chufa DO",
  premium: "Chufa DO Premium",
  "no-se": "Aún no lo sé",
};

type Errors = Partial<Record<"name" | "email" | "quantity", string>>;

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const quality = String(data.get("quality") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name || name.length > 100) next.name = "Indica tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      next.email = "Introduce un correo electrónico válido.";
    if (!quantity) next.quantity = "Elige una cantidad aproximada.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : null,
      business ? `Tipo de negocio: ${business}` : null,
      `Email: ${email}`,
      `Calidad: ${qualityLabels[quality] ?? quality}`,
      `Cantidad estimada: ${quantity}`,
      message ? `\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Presupuesto chufa DO – ${company || name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    form.reset();
  };

  const inputClass =
    "w-full rounded-xl border border-cream-400 bg-white px-4 py-3 text-earth-900 placeholder:text-earth-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-earth-800";

  return (
    <section id="contacto" className="relative scroll-mt-20 bg-earth-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${
            isVisible ? "reveal-visible" : ""
          } reveal`}
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-earth-300">
              Presupuesto sin compromiso
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-cream-50 lg:text-5xl">
              Hablemos de tu próxima campaña
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-300">
              Cuéntanos qué calidad necesitas y cuánta, y te preparamos un precio. Si lo prefieres,
              llámanos o escríbenos por WhatsApp.
            </p>

            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="group flex items-center gap-4 rounded-2xl border border-cream-50/10 p-4 transition-colors hover:border-cream-50/30 hover:bg-cream-50/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-cream-400">Teléfono</span>
                    <span className="block font-medium text-cream-50">{PHONE}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-cream-50/10 p-4 transition-colors hover:border-cream-50/30 hover:bg-cream-50/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-cream-400">WhatsApp</span>
                    <span className="block font-medium text-cream-50">Escríbenos directamente</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-cream-50/10 p-4 transition-colors hover:border-cream-50/30 hover:bg-cream-50/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-cream-400">Correo</span>
                    <span className="block truncate font-medium text-cream-50">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-200">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-cream-400">Instalaciones</span>
                  <span className="block font-medium text-cream-50">
                    C/ Calderers 38, Alboraya (Valencia)
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-cream-50 p-6 shadow-2xl sm:p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-earth-900">Solicitar presupuesto</h3>
            <p className="mt-1 text-sm text-earth-600">
              Respondemos en 24-48 horas laborables. Pedido mínimo 200 kg.
            </p>

            {sent && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-green-50 p-4 text-sm text-earth-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Hemos preparado tu mensaje en tu gestor de correo. Si no se ha abierto,
                  escríbenos directamente a {EMAIL}.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nombre
                  </label>
                  <input id="name" name="name" maxLength={100} className={inputClass} autoComplete="name" />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Empresa <span className="font-normal text-earth-500">(opcional)</span>
                  </label>
                  <input id="company" name="company" maxLength={100} className={inputClass} autoComplete="organization" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className={inputClass}
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="business" className={labelClass}>
                    Tipo de negocio
                  </label>
                  <select id="business" name="business" className={inputClass} defaultValue="">
                    <option value="">Selecciona…</option>
                    <option>Fábrica de horchata</option>
                    <option>Horchatería artesana</option>
                    <option>Distribuidor</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quality" className={labelClass}>
                    Calidad
                  </label>
                  <select id="quality" name="quality" className={inputClass} defaultValue="no-se">
                    <option value="normal">Chufa DO</option>
                    <option value="premium">Chufa DO Premium</option>
                    <option value="no-se">Aún no lo sé</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className={labelClass}>
                    Cantidad aproximada
                  </label>
                  <select id="quantity" name="quantity" className={inputClass} defaultValue="">
                    <option value="">Selecciona…</option>
                    <option>200 – 500 kg</option>
                    <option>500 kg – 1 t</option>
                    <option>1 – 5 t</option>
                    <option>Más de 5 t</option>
                  </select>
                  {errors.quantity && <p className="mt-1 text-sm text-destructive">{errors.quantity}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Mensaje <span className="font-normal text-earth-500">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  className={`${inputClass} resize-none`}
                  placeholder="Periodicidad, fechas de entrega, destino del envío…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-earth-700 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
