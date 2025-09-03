"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Solo se permiten archivos PDF");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("El archivo no puede superar los 10MB");
      return;
    }

    setUploading(true);
    setError("");
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/menu/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir el archivo");
      }

      setUploadSuccess(true);
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gray-800 border-amber-600/30">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-white">
          Panel de Administración
        </CardTitle>
        <p className="text-gray-300">Actualizar carta del restaurante</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="border-2 border-dashed border-amber-600/30 rounded-2xl p-8 text-center bg-gray-700/50">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">
            Subir Nueva Carta
          </h3>
          <p className="text-gray-300 mb-4">
            Selecciona un archivo PDF para reemplazar la carta actual
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="pdf-upload"
          />

          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-amber-500/25"
          >
            {uploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Subiendo...
              </>
            ) : (
              "Seleccionar PDF"
            )}
          </Button>

          <p className="text-sm text-gray-400 mt-2">
            Máximo 10MB • Solo archivos PDF
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {uploadSuccess && (
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
            <p className="text-green-300">¡Carta actualizada exitosamente!</p>
            <p className="text-sm text-green-400 mt-1">
              Los clientes ya pueden descargar la nueva versión.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t border-gray-700">
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Cerrar Sesión
          </Button>

          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Actualizar Página
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
