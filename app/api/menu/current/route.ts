import { NextResponse } from "next/server"
import { list } from "@vercel/blob"

export async function GET() {
  try {
    // Buscar archivos de menú en Vercel Blob Storage
    try {
      // Primero intentar con prefijo
      let { blobs } = await list({ prefix: "carta-mestizo" })
      
      console.log("Found blobs with prefix 'carta-mestizo':", blobs.length)
      
      // Si no encuentra nada, listar todos y filtrar
      if (blobs.length === 0) {
        console.log("No blobs found with prefix, trying to list all...")
        const allBlobs = await list()
        blobs = allBlobs.blobs.filter(blob => 
          blob.pathname.includes("carta-mestizo") && blob.pathname.endsWith(".pdf")
        )
        console.log("Found blobs after filtering:", blobs.length, blobs.map(b => b.pathname))
      } else {
        console.log("Found blobs:", blobs.map(b => ({ pathname: b.pathname, uploadedAt: b.uploadedAt })))
      }
      
      if (blobs.length === 0) {
        console.log("No menu files found in Blob Storage")
        return NextResponse.json({ menu: null })
      }

      // Obtener el archivo más reciente
      let latestBlob = blobs[0]
      let latestTime = new Date(latestBlob.uploadedAt).getTime()

      for (const blob of blobs) {
        const blobTime = new Date(blob.uploadedAt).getTime()
        if (blobTime > latestTime) {
          latestTime = blobTime
          latestBlob = blob
        }
      }

      const menuFile = {
        url: latestBlob.url,
        filename: "lagunaMestizo.pdf",
        uploadedAt: latestBlob.uploadedAt,
        size: latestBlob.size,
      }

      console.log("Returning menu file:", menuFile)
      return NextResponse.json({ menu: menuFile })
    } catch (error) {
      // Si no hay archivos o hay un error
      console.error("Error listing blobs:", error)
      const errorMessage = error instanceof Error ? error.message : String(error)
      const errorStack = error instanceof Error ? error.stack : String(error)
      console.error("Error details:", { message: errorMessage, stack: errorStack })
      
      // Si es un error de autenticación, informar
      if (errorMessage.includes("token") || errorMessage.includes("BLOB") || errorMessage.includes("Unauthorized")) {
        console.error("Blob Storage authentication error - check BLOB_READ_WRITE_TOKEN")
        return NextResponse.json({ 
          error: "Blob Storage authentication failed. Check BLOB_READ_WRITE_TOKEN variable." 
        }, { status: 500 })
      }
      
      return NextResponse.json({ menu: null })
    }
  } catch (error) {
    console.error("Error fetching current menu:", error)
    return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 })
  }
}
