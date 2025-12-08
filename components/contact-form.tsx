"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    urgencia: "",
    mensagem: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Erro ao enviar")

      toast({
        title: "Mensagem enviada!",
        description: "Redirecionando para WhatsApp...",
      })

      setTimeout(() => {
        const message = `PLANTAO 24H - URGENTE

Ola, Dr. Carlos!
Nome: ${formData.nome}
Tipo de Urgencia: ${formData.urgencia}

${formData.mensagem}`

        const encodedMessage = encodeURIComponent(message)
        window.open(`https://api.whatsapp.com/send?phone=5511930819577&text=${encodedMessage}`, "_blank")
      }, 1000)

      setFormData({
        nome: "",
        telefone: "",
        email: "",
        urgencia: "",
        mensagem: "",
      })
    } catch (error) {
      toast({
        title: "Erro",
        description: "Nao foi possivel enviar a mensagem. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#082533]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Solicite Atendimento Urgente</h2>
            <p className="text-gray-300 text-lg">Preencha o formulario e entraremos em contato imediatamente</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input
                  id="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgencia">Qual a Urgencia? *</Label>
              <Select
                required
                value={formData.urgencia}
                onValueChange={(value) => setFormData({ ...formData, urgencia: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de urgencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Prisao/Delegacia">Prisao/Delegacia</SelectItem>
                  <SelectItem value="Bloqueio de Bens">Bloqueio de Bens</SelectItem>
                  <SelectItem value="Risco de Vida">Risco de Vida</SelectItem>
                  <SelectItem value="Medida Protetiva">Medida Protetiva</SelectItem>
                  <SelectItem value="Invasao de Propriedade">Invasao de Propriedade</SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Breve relato da situacao *</Label>
              <Textarea
                id="mensagem"
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                placeholder="Descreva brevemente sua situacao de urgencia..."
                rows={5}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ccab76] hover:bg-[#b89a65] text-[#082533] font-bold text-lg py-6"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Conectando ao Plantao...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  SOLICITAR AJUDA IMEDIATA
                </>
              )}
            </Button>

            <p className="text-xs text-gray-600 text-center">
              Ao enviar, voce sera redirecionado para WhatsApp e recebera um email de confirmacao
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
