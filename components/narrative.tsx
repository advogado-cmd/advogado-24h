import { Clock, AlertTriangle, Shield } from "lucide-react"

export function Narrative() {
  const blocks = [
    {
      icon: Clock,
      title: "O Imprevisto Fora de Hora",
      description:
        "Crises juridicas nao respeitam horario comercial. Elas acontecem de madrugada, no feriado ou no fim de semana. O desespero toma conta quando o telefone toca e voce descobre que um familiar foi detido, sua conta empresarial foi bloqueada ou sua propriedade invadida. Nesses momentos, a sensacao de vulnerabilidade e total.",
    },
    {
      icon: AlertTriangle,
      title: "O Risco da Demora",
      description:
        'A reacao instintiva e "esperar o dia amanhecer" ou tentar resolver sozinho na delegacia acreditando que "quem nao deve, nao teme". Esse e o erro que transforma um incidente em condenacao. Sem defesa tecnica imediata, depoimentos equivocados sao colhidos, provas se perdem e o prazo para liminares urgentes se esgota. O tempo joga contra voce.',
    },
    {
      icon: Shield,
      title: "A Intervencao Imediata",
      description:
        'O Direito socorre quem age rapido. Nossa atuacao de plantao nao e apenas um "atendimento telefonico", e acao processual de combate. Seja impetrando um Habeas Corpus na madrugada, despachando com o juiz de plantao ou comparecendo ao local da ocorrencia, nos estancamos a crise e garantimos que a Lei seja sua protecao, e nao sua algoz.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#082533] mb-4 text-balance">
            O erro fatal e esperar ate segunda-feira.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blocks.map((block, index) => {
            const Icon = block.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#ccab76] transition-colors"
              >
                <div className="w-14 h-14 bg-[#ccab76] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#082533]" />
                </div>
                <h3 className="text-xl font-bold text-[#082533] mb-4">{block.title}</h3>
                <p className="text-gray-700 leading-relaxed">{block.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
