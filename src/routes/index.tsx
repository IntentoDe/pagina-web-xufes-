import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Header } from "@/components/landing/Header";
import { Contact } from "@/components/landing/Contact";
import { Origin } from "@/components/landing/Origin";
import { Qualities } from "@/components/landing/Qualities";
import { Process } from "@/components/landing/Process";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Xufes Pastor | Chufa de Valencia DO a granel para horchata",
      },
      {
        name: "description",
        content:
          "Proveedor de Chufa de Valencia con Denominación de Origen para fábricas de horchata y horchaterías artesanas. Calidad normal y premium.",
      },
      {
        property: "og:title",
        content: "Xufes Pastor | Chufa de Valencia — de lo bueno lo mejor",
      },
      {
        property: "og:description",
        content:
          "Chufa de Valencia DO para fábricas de horchata y horchaterías artesanas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Origin />
      <Qualities />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
