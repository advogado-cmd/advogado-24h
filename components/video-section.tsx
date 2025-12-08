export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-4">
            Entenda como agimos em Casos de Urgencia
          </h2>
          <p className="text-gray-700 text-lg">
            Dr. Carlos Oliveira explica os primeiros passos em uma emergencia juridica.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div
            className="relative rounded-xl overflow-hidden border-4 border-[#ccab76] shadow-2xl"
            style={{ paddingBottom: "177.78%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/6ULtNksVIlw"
              title="Video sobre atendimento de urgencia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
