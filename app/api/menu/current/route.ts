import { NextResponse } from "next/server"
import { list } from "@vercel/blob"

export async function GET() {
  try {
    // Buscar archivos de menú en Vercel Blob Storage
    try {
      const { blobs } = await list({ prefix: "carta-mestizo" })
      
      if (blobs.length === 0) {
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
        filename: latestBlob.pathname,
        uploadedAt: latestBlob.uploadedAt,
        size: latestBlob.size,
      }

      return NextResponse.json({ menu: menuFile })
    } catch (error) {
      // Si no hay archivos o hay un error
      console.error("Error listing blobs:", error)
      return NextResponse.json({ menu: null })
    }
  } catch (error) {
    console.error("Error fetching current menu:", error)
    return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 })
  }
}
