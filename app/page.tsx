import { Suspense } from "react";
import { MenuDownload } from "@/components/menu-download";
import { ReviewsSection } from "@/components/reviews-section";
import { ImageCarousel } from "@/components/image-carousel";
import Image from "next/image";

export default function HomePage() {
  // Structured Data (JSON-LD) para SEO
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Laguna Mestizo",
    description:
      "Auténtica cocina argentina en Benavidez. Restaurante especializado en platos tradicionales argentinos.",
    image: "https://lagunamestizo.com/images/laguna.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Deán Funes 1695",
      addressLocality: "Dique Luján",
      addressRegion: "Buenos Aires",
      postalCode: "B1621",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-34.3958527",
      longitude: "-58.7069731",
    },
    telephone: "+54 11 6599 9642",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "00:00",
        closes: "00:00",
        closed: true,
      },
    ],
    servesCuisine: "Argentine",
    priceRange: "$$",
    url: "https://lagunamestizo.com",
    sameAs: [
      // Agregar cuando tengas redes sociales
      // "https://www.facebook.com/lagunamestizo",
      // "https://www.instagram.com/lagunamestizo",
    ],
  };

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <div className="min-h-screen" style={{ backgroundColor: "#f5f5eb" }}>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#f5f5eb" }}
        >
          {/* Header */}
          <header
            className="relative z-10"
            style={{ backgroundColor: "#f5f5eb" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    src="/images/laguna.png"
                    alt="Laguna Mestizo - Restaurante Argentino en Benavidez"
                    width={400}
                    height={120}
                    className="h-32 sm:h-48 w-auto drop-shadow-2xl"
                    priority
                    style={{ marginBottom: "-2rem" }}
                  />
                </div>
                <p className="text-gray-600 text-xs sm:text-xl font-extralight">
                  Un espacio que te invita a quedarte
                </p>
              </div>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {/* H1 oculto para SEO - solo visible para motores de búsqueda */}
            <h1 className="sr-only">
              Laguna Mestizo - Restaurante Argentino en Benavidez | Dique Luján
            </h1>
            <div className="text-center mb-16">
              <h2 className="text-sm sm:text-3xl lg:text-5xl font-light text-gray-950 ">
                Sabores frescos. Momentos al aire libre.
              </h2>
              <p className="text-xs sm:text-2xl text-gray-600 max-w-1xl mx-auto leading-relaxed font-light">
                Una experiencia gastronomica pensada para que disfrutes sin
                apuros.
              </p>
            </div>

            {/* Featured Image Gallery */}
            <ImageCarousel />
          </div>
        </section>

        {/* Main Content */}
        <main
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          style={{ backgroundColor: "#f5f5eb" }}
        >
          <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Menu Download Section */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                style={{ backgroundColor: "#222222" }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-600/50">
                    <svg
                      className="w-8 h-8 text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extralight text-white mb-4">
                    Explorá una carta equilibrada y fresca
                  </h2>
                  <p className="text-gray-300 text-md leading-relaxed font-light">
                    Ingredientes simples, preparaciones limpias, sabor real.
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="text-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
                      <p className="text-gray-300 mt-4 text-lg">
                        Cargando carta...
                      </p>
                    </div>
                  }
                >
                  <MenuDownload />
                </Suspense>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="space-y-8 w-full">
              {/* Restaurant Info */}
              <div
                className="rounded-2xl shadow-xl p-8 border border-gray-700/50"
                style={{ backgroundColor: "#222222" }}
              >
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600/50">
                    <svg
                      className="w-6 h-6 text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Horarios
                  </h3>
                </div>

                <div className="space-y-3 text-gray-300">
                  {/* Lunes */}
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-light text-white text-sm">
                        Lunes
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm pl-6">
                      10.00 - 00.00 hs
                    </p>
                  </div>

                  {/* Martes */}
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-light text-white text-sm">
                        Martes
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm pl-6">Cerrado</p>
                  </div>

                  {/* Miércoles - Sábado */}
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-light text-white text-sm">
                        Miércoles - Sábado
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm pl-6">
                      10.00 - 00.00 hs
                    </p>
                  </div>

                  {/* Domingo */}
                  <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-light text-white text-sm">
                        Domingo
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm pl-6">
                      10.00 - 16.00 hs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Reviews CTA */}
            <div className="md:col-span-2 lg:col-span-2 w-full">
              <ReviewsSection className="w-full h-full" />
            </div>

            {/* Location Section */}
            <div className="w-full">
              <div
                className="rounded-2xl shadow-xl p-8 border border-gray-700/50"
                style={{ backgroundColor: "#222222" }}
              >
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600/50">
                    <svg
                      className="w-6 h-6 text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Ubicación
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-center">
                        <p className="font-light text-white">Deán Funes 1695</p>
                        <p className="text-gray-400 font-light">
                          Dique Luján Benavidez
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <a
                        href="https://wa.me/541165999642"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light text-white hover:text-gray-300 transition-colors text-center"
                      >
                        +54 11 6599 9642
                      </a>
                    </div>
                  </div>

                  {/* Google Maps Button */}
                  <a
                    href="https://www.google.com/maps/dir//Laguna+by+mestizo+De%C3%A1n+Funes+1695,+Dique+Luj%C3%A1n+B1621+Tigre+Provincia+de+Buenos+Aires/@-34.3958527,-58.7069731,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95bca17d727cf2f1:0x6e574f0c330a68c4!2m2!1d-58.7069731!2d-34.3958527?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-800/50 hover:bg-gray-700/50 text-white font-light py-3 px-6 rounded-xl text-center border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Ver en Google Maps
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="text-gray-700 py-12 mt-20"
          style={{ backgroundColor: "#f5f5eb" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4">
                <a
                  href="https://www.instagram.com/lagunaok?igsh=dDM4dzM0NmlyZHpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                  aria-label="Síguenos en Instagram"
                >
                  <svg
                    className="w-8 h-8 text-gray-700 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <p className="text-gray-600 font-light">
                &copy; {new Date().getFullYear()} Laguna Mestizo. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
