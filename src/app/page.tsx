import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre Amigos Tours — Experiencias culturales premium",
  description: "Experiencias culturales premium en México",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <html lang="es">
      <body className="bg-[#F3E6D0] text-[#2B2B2B]">
        <main>
          {/* Top bar */}
          <div className="border-b border-black/10 bg-white/40 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
              <p className="text-xs tracking-wide">
                Experiencias culturales premium en México
              </p>
              <div className="flex items-center gap-3 text-xs">
                <a className="hover:underline" href="#tours">Tours</a>
                <a className="hover:underline" href="#como-funciona">Cómo funciona</a>
                <a className="hover:underline" href="#contacto">Contacto</a>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#2A3F5F]" />
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    Entre Amigos Tours
                  </p>
                  <p className="text-xs text-black/60">
                    Cultura • Naturaleza • Identidad
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5210000000000"
                className="rounded-xl bg-[#768C69] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
          </header>

          {/* HERO */}
          <section className="mx-auto max-w-6xl px-4 pb-10 pt-2">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs">
                  <span className="h-2 w-2 rounded-full bg-[#C8A15F]" />
                  Curaduría real, logística cuidada, experiencia impecable
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Vive México <span className="text-[#2A3F5F]">con sentido</span>, no como turista.
                </h1>

                <p className="mt-4 max-w-prose text-base text-black/70">
                  Diseñamos experiencias premium para viajeros que valoran cultura,
                  tradición y naturaleza.
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/60 p-3 shadow-sm">
                <img
                  src="https://i.postimg.cc/DwNhLwmC/kanenori-beach-6292382-1920.jpg"
                  alt="Experiencia cultural México"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>

          {/* Cómo funciona */}
          <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold">Cómo funciona</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Paso 1", "Selecciona experiencia"],
                ["Paso 2", "Perfilamos tu necesidad"],
                ["Paso 3", "Reserva sin estrés"],
              ].map(([step, title]) => (
                <div key={title} className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <p className="text-xs font-semibold text-[#2A3F5F]">{step}</p>
                  <p className="mt-2 text-base font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tours */}
          <section id="tours" className="mx-auto max-w-6xl px-4 pb-12">
            <h2 className="text-2xl font-semibold">Experiencias destacadas</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Oaxaca — Día de Muertos",
                "Cuetzalan — Cultura + Naturaleza",
                "Oaxaca — Ruta Artesanal",
              ].map((title) => (
                <article key={title} className="rounded-3xl border border-black/10 bg-white/70 p-5">
                  <img
                    src="https://i.postimg.cc/DwNhLwmC/kanenori-beach-6292382-1920.jpg"
                    alt={title}
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <a className="mt-5 inline-flex text-sm font-semibold text-[#2A3F5F] hover:underline" href="#contacto">
                    Pedir info →
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="contacto" className="mx-auto max-w-6xl px-4 pb-16">
            <div className="rounded-3xl bg-[#2A3F5F] p-8 text-white">
              <h2 className="text-2xl font-semibold">¿Cotizamos tu experiencia?</h2>

              <a
                href="https://wa.me/5210000000000"
                className="mt-6 inline-flex rounded-2xl bg-[#C8A15F] px-5 py-3 text-sm font-semibold text-[#2B2B2B] hover:opacity-95"
              >
                Abrir WhatsApp
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-black/10 bg-white/40">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
              <p className="text-xs text-black/60">
                © {year} Entre Amigos Tours
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
