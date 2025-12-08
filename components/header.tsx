"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "PLANTAO 24H - URGENTE\n\nOla, Dr. Carlos Fernando Lopes de Oliveira!\nPreciso de atendimento imediato.",
    )
    window.open(`https://api.whatsapp.com/send?phone=5511930819577&text=${message}`, "_blank")
  }

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicos", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/ativo-2016.png"
              alt="Dr. Oliveira Advocacia & Associados"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#082533] hover:text-[#ccab76] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-2 rounded-lg transition-all hover:scale-105"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp 24h
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-[#082533]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#082533] hover:text-[#ccab76] font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-lg mt-2"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp 24h
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
