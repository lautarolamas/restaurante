import { Suspense } from "react";
import { MenuDownload } from "@/components/menu-download";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-black/95 backdrop-blur-sm shadow-2xl border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/mestizo-logo.png"
                  alt="Mestizo Complejo Deli"
                  width={400}
                  height={120}
                  className="h-20 sm:h-24 w-auto drop-shadow-2xl"
                  priority
                />
              </div>
              <p className="text-white text-lg sm:text-xl font-light">
                Auténtica cocina argentina
              </p>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-ligh text-white mb-6">
              Sabores que{" "}
              <span className="text-white font-bold">conquistan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Descubre la auténtica gastronomía argentina en un ambiente cálido
              y familiar
            </p>
          </div>

          {/* Featured Image Gallery */}
          <div className="relative max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-700/30">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                      <svg
                        className="w-10 h-10 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-light">
                      Nuestros Platos
                    </p>
                    <p className="text-white text-sm font-light">
                      Auténtica cocina argentina
                    </p>
                  </div>
                </div>
              </div>

              {/* Dessert Showcase */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-700/30">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-500">
                      <svg
                        className="w-10 h-10 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-light">
                      Postres Artesanales
                    </p>
                    <p className="text-gray-400 text-sm font-light">
                      Crème brûlée y delicias dulces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Menu Download Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-600">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
                  Nuestra Carta
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Descarga nuestro menú actualizado con todos los platos y
                  precios
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
                    <p className="text-gray-500 mt-4 text-lg">
                      Cargando carta...
                    </p>
                  </div>
                }
              >
                <MenuDownload />
              </Suspense>
            </div>
          </div>

          {/* Restaurant Info & Location */}
          <div className="space-y-8">
            {/* Restaurant Info */}
            <div className="bg-gray-900/50 rounded-2xl shadow-xl p-8 border border-gray-700/30">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <svg
                    className="w-6 h-6 text-gray-300"
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

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
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
                  <span className="font-light text-white">
                    Lun - Dom: 12:00 - 23:00
                  </span>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-gray-900/50 rounded-2xl shadow-xl p-8 border border-gray-700/30">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <svg
                    className="w-6 h-6 text-gray-300"
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
                <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-light text-white">
                        Juan M García 8852
                      </p>
                      <p className="text-gray-400 font-light">
                        Benavidez, B1421, AR
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <a
                      href="https://wa.me/5491173673508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-light text-white hover:text-gray-300 transition-colors"
                    >
                      +54 9 11 7367 3508
                    </a>
                  </div>
                </div>

                {/* Google Maps Button */}
                <a
                  href="https://maps.google.com/?q=Juan+M+García+8852,+Benavidez,+B1421,+AR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-700 text-white font-light py-3 px-6 rounded-xl text-center hover:bg-gray-600 transition-all duration-300 border border-gray-600"
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
      <footer className="bg-black text-gray-400 py-12 mt-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/mestizo-logo.png"
                alt="Mestizo Complejo Deli"
                width={200}
                height={60}
                className="h-12 w-auto mx-auto"
              />
            </div>
            <p className="text-white text-lg mb-4 font-light">
              Auténtica cocina argentina en Benavidez
            </p>
            <p className="text-gray-600 font-light">
              &copy; 2025 Mestizo Deli. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
