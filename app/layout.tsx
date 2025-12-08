import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Serif } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const robotoSerif = Roboto_Serif({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto-serif",
})

export const metadata: Metadata = {
  title: "Dr. Oliveira Advocacia - Plantao 24h | Atendimento Juridico Urgente",
  description:
    "Advocacia de urgencia 24 horas. Atuacao imediata em casos de prisao, bloqueio bancario, medidas protetivas e liminares de saude. OAB/SP 524.997 | OAB/PE 24.469",
  keywords:
    "advogado 24 horas, plantao criminal, liminar urgente, advogado para flagrante, desbloqueio judicial, medida protetiva, habeas corpus, advocacia emergencial",
  authors: [{ name: "Dr. Carlos Fernando Lopes de Oliveira" }],
  openGraph: {
    title: "Dr. Oliveira Advocacia - Plantao 24h",
    description: "Atendimento juridico de urgencia 24 horas",
    type: "website",
    url: "https://droliveira.adv.br",
    images: [
      {
        url: "/images/ativo-2014.png",
        width: 1200,
        height: 1200,
        alt: "Dr. Oliveira Advocacia - Escudo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Oliveira Advocacia - Plantao 24h",
    description: "Atendimento juridico de urgencia 24 horas",
    images: ["/images/ativo-2014.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#082533",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${robotoSerif.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
