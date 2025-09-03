import { AdminAccess } from "@/components/admin-access";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm shadow-2xl border-b border-amber-600/30">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mestizo-logo.png"
                alt="Mestizo Complejo Deli"
                width={300}
                height={90}
                className="h-16 w-auto drop-shadow-2xl"
              />
            </Link>
            <div className="text-right">
              <h1 className="text-xl font-semibold text-white">
                Panel de Administración
              </h1>
              <p className="text-amber-300 text-sm">Gestión de carta</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 border border-amber-600/30">
          <AdminAccess />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 text-amber-100 py-8 mt-16 border-t border-amber-600/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Mestizo Deli. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
