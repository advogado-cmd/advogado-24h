import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Narrative } from "@/components/narrative"
import { VideoSection } from "@/components/video-section"
import { Protocol } from "@/components/protocol"
import { UrgencyCards } from "@/components/urgency-cards"
import { Authority } from "@/components/authority"
import { TechnicalProof } from "@/components/technical-proof"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="servicos">
        <Narrative />
      </div>
      <VideoSection />
      <Protocol />
      <UrgencyCards />
      <div id="sobre">
        <Authority />
      </div>
      <div id="contato">
        <ContactForm />
      </div>
      <TechnicalProof />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      <WhatsappFloat />
    </main>
  )
}
