import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#082533] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image src="/images/ativo-2012.png" alt="Dr. Oliveira Advocacia" width={200} height={50} className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Atendimento juridico de urgencia 24 horas para proteger sua liberdade, patrimonio e familia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#ccab76]">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ccab76]" />
                <span>+55 11 93081 9577</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ccab76]" />
                <span>advogado@droliveira.adv.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ccab76] mt-1" />
                <span>OAB/SP 524.997 | OAB/PE 24.469</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#ccab76]">Informacoes</h3>
            <div className="space-y-2 text-sm">
              <Link href="/politica-de-privacidade" className="block hover:text-[#ccab76] transition-colors">
                Politica de Privacidade
              </Link>
              <p className="text-gray-400 text-xs mt-4">
                IMPORTANTE: Este e um site de advocacia. Em caso de emergencia medica, ligue 192 (SAMU). Em caso de
                emergencia policial, ligue 190.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Oliveira Advocacia & Associados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
