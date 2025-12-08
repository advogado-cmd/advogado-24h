import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Voces atendem de madrugada?",
      answer:
        "Sim, temos equipe de sobreaviso para casos criticos. Nosso plantao funciona 24 horas por dia, 7 dias por semana, incluindo feriados e finais de semana.",
    },
    {
      question: "O advogado vai ate a delegacia?",
      answer:
        "Sim, em casos de prisao ou depoimento, a presenca fisica e fundamental e garantida. Deslocamos para delegacias, foruns ou qualquer local onde sua presenca juridica seja necessaria.",
    },
    {
      question: "Quanto custa o plantao?",
      answer:
        "O valor reflete a exclusividade e urgencia do atendimento, mas seguimos a tabela da OAB com transparencia. Entre em contato para orcamento personalizado conforme seu caso.",
    },
    {
      question: "Conseguem desbloquear conta bancaria hoje?",
      answer:
        "Entramos com o pedido urgente imediatamente, dependendo apenas do despacho do juiz de plantao. Nossa atuacao e rapida e estrategica para minimizar prejuizos.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082533] mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#ccab76]"
              >
                <AccordionTrigger className="text-left font-bold text-[#082533] hover:text-[#ccab76] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
