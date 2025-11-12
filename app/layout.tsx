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
  title: "Laguna Mestizo - Restaurante Argentino en Benavidez | Carta y Menú",
  description:
    "Laguna Mestizo: auténtica cocina argentina en Benavidez. Descubrí nuestra carta actualizada con los mejores platos tradicionales. Restaurante abierto de lunes a sábado. Reservas y delivery disponible.",
  keywords: [
    "laguna mestizo",
    "laguna mestizo benavidez",
    "restaurante argentino benavidez",
    "comida argentina",
    "laguna mestizo carta",
    "laguna mestizo menú",
    "restaurante benavidez",
    "comida típica argentina",
    "asado benavidez",
    "laguna mestizo delivery",
  ],
  authors: [{ name: "Laguna Mestizo" }],
  creator: "Laguna Mestizo",
  publisher: "Laguna Mestizo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lagunamestizo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Laguna Mestizo - Auténtica Cocina Argentina en Benavidez",
    description:
      "Descubrí la auténtica gastronomía argentina en Laguna Mestizo. Carta actualizada, horarios y ubicación en Benavidez.",
    url: "https://lagunamestizo.com",
    siteName: "Laguna Mestizo",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/laguna.png",
        width: 1200,
        height: 630,
        alt: "Laguna Mestizo - Restaurante Argentino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laguna Mestizo - Auténtica Cocina Argentina",
    description:
      "Descubrí la auténtica gastronomía argentina en Benavidez. Carta actualizada y horarios.",
    images: ["/images/laguna.png"],
  },
  icons: {
    icon: "/images/laguna.png",
    shortcut: "/images/laguna.png",
    apple: "/images/laguna.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={unbounded.variable}>
      <body className={unbounded.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
