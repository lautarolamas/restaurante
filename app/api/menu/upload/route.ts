import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir, readdir, unlink } from "fs/promises"
import { join } from "path"

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

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 10MB" }, { status: 400 })
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "public", "uploads")
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }

    // Delete existing menu files first
    try {
      const files = await readdir(uploadsDir)
      for (const existingFile of files) {
        if (existingFile.startsWith("carta-mestizo")) {
          await unlink(join(uploadsDir, existingFile))
        }
      }
    } catch (error) {
      console.log("No existing files to delete or error deleting:", error)
    }

    // Save new file
    const timestamp = new Date().toISOString().split("T")[0]
    const filename = `carta-mestizo-${timestamp}.pdf`
    const filePath = join(uploadsDir, filename)
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    await writeFile(filePath, buffer)

    return NextResponse.json({
      success: true,
      url: `/uploads/${filename}`,
      filename: file.name,
      size: file.size,
      uploadedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
