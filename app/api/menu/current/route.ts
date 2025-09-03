import { NextResponse } from "next/server"
import { readdir, stat } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // Buscar archivos de menú en la carpeta uploads
    const uploadsDir = join(process.cwd(), "public", "uploads")
    
    try {
      const files = await readdir(uploadsDir)
      const menuFiles = files.filter(file => file.startsWith("carta-mestizo") && file.endsWith(".pdf"))
      
      if (menuFiles.length === 0) {
        return NextResponse.json({ menu: null })
      }

      // Obtener el archivo más reciente
      let latestFile = menuFiles[0]
      let latestTime = 0

      for (const file of menuFiles) {
        const filePath = join(uploadsDir, file)
        const stats = await stat(filePath)
        if (stats.mtime.getTime() > latestTime) {
          latestTime = stats.mtime.getTime()
          latestFile = file
        }
      }

      const filePath = join(uploadsDir, latestFile)
      const stats = await stat(filePath)

      const menuFile = {
        url: `/uploads/${latestFile}`,
        filename: latestFile,
        uploadedAt: stats.mtime.toISOString(),
        size: stats.size,
      }

      return NextResponse.json({ menu: menuFile })
    } catch (error) {
      // Si no existe la carpeta uploads o no hay archivos
      return NextResponse.json({ menu: null })
    }
  } catch (error) {
    console.error("Error fetching current menu:", error)
    return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 })
  }
}
