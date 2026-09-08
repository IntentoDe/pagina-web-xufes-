import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Header } from "@/components/landing/Header";
import { Contact } from "@/components/landing/Contact";
import { History } from "@/components/landing/History";
import { Products } from "@/components/landing/Products";
import { Timeline } from "@/components/landing/Timeline";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Xufes Pastor | Chufa de Valencia — de lo bueno lo mejor",
      },
      {
        name: "description",
        content:
          "Descubre la Chufa de Valencia de Xufes Pastor: historia, beneficios para la salud y productos artesanales de tigernut con Denominación de Origen.",
      },
      {
        property: "og:title",
        content: "Xufes Pastor | Chufa de Valencia — de lo bueno lo mejor",
      },
      {
        property: "og:description",
        content:
          "Descubre la Chufa de Valencia de Xufes Pastor: historia, beneficios para la salud y productos artesanales con Denominación de Origen.",
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
      <History />
      <Products />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
