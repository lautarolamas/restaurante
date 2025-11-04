import { type NextRequest, NextResponse } from "next/server"
import { put, list, del } from "@vercel/blob"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
    }

    // Validate file size (4MB max for serverless functions, 10MB for client upload)
    // Vercel serverless functions have a 4.5MB body limit
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json({ 
        error: "El archivo es demasiado grande. Máximo 4MB para subida desde servidor. Considera usar client upload." 
      }, { status: 400 })
    }

    // Delete existing menu files first
    try {
      const { blobs } = await list({ prefix: "carta-mestizo" })
      for (const blob of blobs) {
        await del(blob.url)
      }
    } catch (error) {
      console.log("No existing files to delete or error deleting:", error)
    }

    // Save new file to Vercel Blob Storage
    const timestamp = new Date().toISOString().split("T")[0]
    const filename = `carta-mestizo-${timestamp}.pdf`
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const blob = await put(filename, buffer, {
      access: "public",
      contentType: "application/pdf",
    })

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: file.name,
      size: file.size,
      uploadedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Upload error:", error)
    const errorMessage = error instanceof Error ? error.message : "Upload failed"
    const errorStack = error instanceof Error ? error.stack : String(error)
    
    // Log completo para debugging
    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
      error: error
    })
    
    // Si es un error de autenticación, probablemente Blob Storage no está configurado
    if (errorMessage.includes("token") || errorMessage.includes("BLOB") || errorMessage.includes("Unauthorized")) {
      return NextResponse.json({ 
        error: "Blob Storage no está conectado. Por favor, conecta el Blob Store en Vercel Dashboard → Storage → Blob → Connect Database" 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === "development" ? errorStack : undefined
    }, { status: 500 })
  }
}
