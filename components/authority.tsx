import Image from "next/image"

export function Authority() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#ccab76] shadow-2xl">
                <Image
                  src="/images/carlosface-20-282-29.jpeg"
                  alt="Dr. Carlos Fernando Lopes de Oliveira"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] text-balance">
                Dr. Carlos Fernando Lopes de Oliveira
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Em emergencias, conhecimento tecnico e tao vital quanto a rapidez. O Dr. Carlos Fernando Lopes de
                  Oliveira e Mestre em Ciencias Juridicas (UFPB) e Especialista em Gestao (CEDEPE).
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Essa formacao de alto nivel permite que ele encontre solucoes juridicas complexas em curto espaco de
                  tempo, algo que um generalista nao conseguiria fazer sob pressao.
                </p>

                <div className="bg-[#ccab76] p-6 rounded-xl mt-6">
                  <p className="text-lg font-bold text-[#082533] italic text-pretty">
                    "Quem tem o direito ao seu lado nao deve temer o relogio. Nos convertemos horas de angustia em
                    solucoes juridicas."
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ccab76] rounded-full" />
                    <span>Mestre em Ciencias Juridicas (UFPB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ccab76] rounded-full" />
                    <span>Especialista em Gestao (CEDEPE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ccab76] rounded-full" />
                    <span>OAB/SP 524.997 | OAB/PE 24.469</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
