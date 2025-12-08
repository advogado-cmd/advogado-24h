import { Scale } from "lucide-react"

export function TechnicalProof() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#082533] to-[#0a3545] p-8 md:p-12 rounded-2xl text-white shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#ccab76] rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-[#082533]" />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">O Poder Geral de Cautela</h2>

                <p className="text-gray-200 leading-relaxed text-lg">
                  O Codigo de Processo Civil e a Constituicao garantem ao juiz o poder de conceder medidas liminares a
                  qualquer hora do dia ou da noite (Plantao Judiciario) para evitar o perecimento de direito. A lei esta
                  preparada para a urgencia; seu advogado tambem precisa estar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
