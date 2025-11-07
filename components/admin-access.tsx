"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminPanel } from "@/components/admin-panel";

export function AdminAccess() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError("Contraseña incorrecta");
      }
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(false);
    setPassword("");
    setError("");
  };

  if (isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="text-center">
      {!showLogin ? (
        <Button
          onClick={() => setShowLogin(true)}
          variant="ghost"
          className="bg-gray-800/50 hover:bg-gray-700/50 text-white text-sm border border-gray-700/50 hover:border-gray-600/50"
        >
          Acceso Administrador
        </Button>
      ) : (
        <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 max-w-md mx-auto border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">
            Acceso de Administrador
          </h3>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-gray-500"
                required
              />
            </div>

            {error && <p className="text-red-300 text-sm">{error}</p>}

            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700/50"
              >
                {loading ? "Verificando..." : "Ingresar"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowLogin(false)}
                className="border-gray-700/50 text-blackhover:bg-gray-800/50"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
