import { Search, Zap, ShieldCheck } from "lucide-react"

export function Protocol() {
  const steps = [
    {
      icon: Search,
      title: "Triagem Imediata",
      description: "Analise do risco em ate 15 minutos via WhatsApp/Telefone.",
    },
    {
      icon: Zap,
      title: "Intervencao Tecnica",
      description:
        "Deslocamento para o local (Delegacia/Imovel) ou Protocolo Eletronico Urgente (Liminar/Habeas Corpus).",
    },
    {
      icon: ShieldCheck,
      title: "Contencao de Danos",
      description: "Preservacao da liberdade, desbloqueio de bens ou garantia da seguranca fisica.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#082533] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-balance">Protocolo de Resposta Rapida</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ccab76] rounded-full flex items-center justify-center text-[#082533] font-bold text-xl">
                  {index + 1}
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full">
                  <Icon className="w-12 h-12 text-[#ccab76] mb-6" />
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
