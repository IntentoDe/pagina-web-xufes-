import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EMAIL = "hola@chufadevalencia.es";

type Errors = Partial<Record<"name" | "email" | "quantity" | "message", string>>;

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
    const quantity = String(data.get("quantity") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name || name.length > 100) next.name = "Indica tu nombre (máx. 100 caracteres).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      next.email = "Introduce un correo electrónico válido.";
    if (!quantity || quantity.length > 100)
      next.quantity = "Indica la cantidad aproximada que necesitas.";
    if (!message || message.length > 1000)
      next.message = "Escribe tu consulta (máx. 1000 caracteres).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : null,
      `Email: ${email}`,
      `Cantidad estimada: ${quantity}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Consulta de precios para pedidos al por mayor",
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    form.reset();
  };

  const inputClass =
    "w-full rounded-2xl border border-cream-400/70 bg-white/80 px-4 py-3 text-earth-900 shadow-sm shadow-earth-900/5 placeholder:text-earth-500 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contacto" className="relative scroll-mt-24 bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 ${
            isVisible ? "reveal-visible" : ""
          } reveal`}
        >
          <div className="flex flex-col justify-center lg:pr-8">
            <h2 className="text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
              Hablemos de tu pedido
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-earth-700">
              ¿Necesitas grandes cantidades de chufa para tu horchatería, tienda o distribuidora?
              Cuéntanos qué buscas y te enviaremos un presupuesto personalizado.
            </p>
          </div>

          <div className="rounded-3xl border border-cream-400/60 bg-cream-50/90 p-8 shadow-[0_20px_60px_-20px_rgba(24,36,24,0.18)] lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-earth-900">
              Solicitar precios al por mayor
            </h3>
            <p className="mt-2 text-sm text-earth-600">
              Respondemos en un plazo de 24-48 horas laborables.
            </p>

            {sent && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm text-earth-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Hemos preparado tu mensaje en tu gestor de correo. Si no se ha abierto, escríbenos
                  directamente a {EMAIL}.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-earth-800">
                  Nombre
                </label>
                <input id="name" name="name" maxLength={100} className={inputClass} placeholder="Tu nombre" />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-earth-800">
                    Correo electrónico
                  </label>
                  <input id="email" name="email" type="email" maxLength={255} className={inputClass} placeholder="tu@empresa.com" />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-earth-800">
                    Empresa <span className="text-earth-500">(opcional)</span>
                  </label>
                  <input id="company" name="company" maxLength={100} className={inputClass} placeholder="Nombre comercial" />
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="mb-1.5 block text-sm font-medium text-earth-800">
                  Cantidad estimada
                </label>
                <input id="quantity" name="quantity" maxLength={100} className={inputClass} placeholder="Ej. 200 kg de chufa seca al mes" />
                {errors.quantity && <p className="mt-1 text-sm text-destructive">{errors.quantity}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-earth-800">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className={`${inputClass} resize-none`}
                  placeholder="Cuéntanos qué necesitas: formato, periodicidad, destino del envío..."
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-green-700 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}