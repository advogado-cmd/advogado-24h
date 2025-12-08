"use client"

import { Button } from "@/components/ui/button"
import { Siren } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "PLANTAO 24H - URGENTE\n\nOla, Dr. Carlos Fernando Lopes de Oliveira!\nPreciso de atendimento imediato.",
    )

    window.open(`https://api.whatsapp.com/send?phone=5511930819577&text=${message}`, "_blank")
  }

  return (
    <section id="inicio" className="relative bg-[#082533] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image src="/images/ativo-2014.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-6 py-2 bg-[#ccab76] text-[#082533] font-bold text-sm md:text-base rounded-full mb-4">
            PLANTAO JURIDICO 24 HORAS
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-balance">
            A Justica nao espera o horario comercial. Atuacao imediata para proteger sua Liberdade, Patrimonio e
            Familia.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-pretty">
            Em situacoes criticas - prisao, bloqueio bancario, invasao de propriedade ou risco a vida - cada minuto
            conta. Tenha um escritorio de elite pronto para agir agora, com medidas liminares e presenca fisica onde for
            necessario.
          </p>

          <div className="pt-6">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#ccab76] hover:bg-[#d4b885] text-[#082533] font-bold text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
            >
              <Siren className="mr-2 h-5 w-5" />
              Falar com Advogado de Plantao Agora
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ccab76] rounded-full animate-pulse" />
              <span>Disponivel 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span>OAB/SP 524.997 | OAB/PE 24.469</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
