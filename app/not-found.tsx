import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f5f5eb" }}
    >
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <Image
          src="/images/laguna.png"
          alt="Laguna Mestizo"
          width={300}
          height={90}
          className="h-24 w-auto mx-auto mb-8 drop-shadow-xl"
        />
        <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-light text-gray-700 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8 font-light">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-light"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
