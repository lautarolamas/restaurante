"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface MenuFile {
  url: string;
  filename: string;
  uploadedAt: string;
  size: number;
}

export function MenuDownload() {
  const [menuFile, setMenuFile] = useState<MenuFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchCurrentMenu();
  }, []);

  const fetchCurrentMenu = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/menu/current");

      if (!response.ok) {
        throw new Error("Error al cargar la carta");
      }

      const data = await response.json();
      setMenuFile(data.menu);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (menuFile) {
      // Open PDF in a new tab
      window.open(menuFile.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Solo se permiten archivos PDF");
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError("El archivo debe ser menor a 10MB");
      return;
    }

    setUploading(true);
    setError(null);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/menu/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al subir el archivo");
      }

      setUploadSuccess(true);
      // Refresh the menu data
      await fetchCurrentMenu();

      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al subir el archivo"
      );
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
        <p className="text-gray-600 mt-2">Cargando carta...</p>
      </div>
    );
  }

  // Mostrar mensajes de éxito y error
  const showMessage = (message: string, type: "success" | "error") => (
    <div
      className={`mb-6 p-4 rounded-xl border ${
        type === "success"
          ? "bg-green-100/80 border-green-500/50 text-green-800"
          : "bg-red-100/80 border-red-500/50 text-red-800"
      }`}
    >
      <p className="text-center">{message}</p>
    </div>
  );

  return (
    <div className="text-center">
      {/* Mensajes de éxito y error */}
      {uploadSuccess &&
        showMessage("¡Carta actualizada exitosamente!", "success")}
      {error && showMessage(`Error: ${error}`, "error")}

      {/* Input de archivo oculto */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Botón de subir archivo */}

      {/* Información de la carta actual */}
      {menuFile ? (
        <>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700/50">
            <h3 className="font-semibold text-white mb-2">
              {menuFile.filename}
            </h3>
            <p className="text-sm text-gray-300">
              Actualizada:{" "}
              {new Date(menuFile.uploadedAt).toLocaleString("es-AR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
            {/* <p className="text-sm text-gray-400">
              Tamaño: {(menuFile.size / 1024 / 1024).toFixed(1)} MB
            </p> */}
          </div>

          <Button
            onClick={handleDownload}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg border border-gray-700"
            size="lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Ver Carta
          </Button>
        </>
      ) : (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-amber-600/50">
          <p className="text-white mb-2">
            No hay carta disponible en este momento.
          </p>
          <p className="text-sm text-gray-300">
            Sube un archivo PDF para comenzar.
          </p>
        </div>
      )}
    </div>
  );
}
