import { Siren, Shield, Landmark, HeartPulse } from "lucide-react"

export function UrgencyCards() {
  const cards = [
    {
      icon: Siren,
      title: "Liberdade e Criminal",
      description:
        "Acompanhamento em flagrantes, Audiencias de Custodia, Habeas Corpus e defesa contra procedimentos irregulares e abusos de autoridade.",
    },
    {
      icon: Shield,
      title: "Familia e Protecao",
      description:
        "Medidas Protetivas (Lei Maria da Penha) e acoes urgentes contra Alienacao Parental para preservar vinculos e seguranca da crianca.",
    },
    {
      icon: Landmark,
      title: "Patrimonio e Empresas",
      description:
        "Acoes contra Bloqueios Bancarios indevidos (Bacenjud) e reintegracao de posse imediata em casos de Invasao de Propriedade.",
    },
    {
      icon: HeartPulse,
      title: "Saude e Liminares",
      description:
        "Liminares para cirurgias, internamentos e tratamentos negados, garantindo o direito a vida e bem-estar imediato.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#082533] mb-4 text-balance">
            Onde atuamos em regime de Plantao?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#ccab76] hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-[#082533] group-hover:bg-[#ccab76] rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7 text-[#ccab76] group-hover:text-[#082533]" />
                </div>
                <h3 className="text-lg font-bold text-[#082533] mb-3">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
