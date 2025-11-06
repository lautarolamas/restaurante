import type React from "react";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laguna Mestizo - Auténtica Cocina Argentina",
  description:
    "Mira nuestra carta actualizada con los mejores platos de la cocina argentina",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={unbounded.variable}>
      <body className={unbounded.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
