"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsappFloat() {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappNumber = "5511930819577"
  const whatsappMessage = encodeURIComponent("Ola! Preciso de atendimento juridico urgente.")

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] md:bottom-8 md:right-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      <span
        className={`overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 ${
          isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Fale Conosco
      </span>
    </a>
  )
}
