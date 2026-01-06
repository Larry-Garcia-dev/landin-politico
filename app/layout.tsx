import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerardo Yepes Caro - Cámara C-106 | Partido Conservador Colombiano",
  description: "Con Humildad se Trabaja por la Gente. Únete al Partido del ORDEN.",
  generator: "v0.app",
  keywords: ["Gerardo Yepes Caro", "Cámara", "C-106", "Partido Conservador", "Colombia", "Elecciones"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/apple-icon.png",
        type: "image/png+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}