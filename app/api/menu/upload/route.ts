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

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 10MB" }, { status: 400 })
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
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
