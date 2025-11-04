import { AdminAccess } from "@/components/admin-access";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5eb" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#f5f5eb" }}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/laguna.png"
                alt="Mestizo Complejo Deli"
                width={300}
                height={90}
                className="h-16 w-auto drop-shadow-2xl"
              />
            </Link>
            <div className="text-right">
              <h1 className="text-xl font-semibold text-gray-900">
                Panel de Administración
              </h1>
              <p className="text-gray-700 text-sm">Gestión de carta</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: "#f5f5eb" }}
      >
        <div
          className="rounded-3xl shadow-xl p-8 border border-gray-700/50"
          style={{ backgroundColor: "#222222" }}
        >
          <AdminAccess />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-gray-700 py-8 mt-16"
        style={{ backgroundColor: "#f5f5eb" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Mestizo Deli. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
