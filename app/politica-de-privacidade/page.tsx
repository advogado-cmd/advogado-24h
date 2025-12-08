import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Politica de Privacidade | Dr. Oliveira Advocacia",
  description: "Politica de Privacidade do Dr. Oliveira Advocacia - LGPD e Google Ads Compliance",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#082533] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/ativo-2012.png"
              alt="Dr. Oliveira Advocacia"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-white hover:text-[#ccab76]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Site
            </Button>
          </Link>
          <h1 className="text-4xl font-serif font-bold">Politica de Privacidade</h1>
          <p className="text-gray-300 mt-2">Ultima atualizacao: Dezembro de 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Introducao */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Para receber informacoes sobre os seus dados pessoais, os propositos e as partes de informacao que sao
              compartilhadas, entre em contato com o Proprietario.
            </p>
          </section>

          {/* Proprietario */}
          <section className="mb-10 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Proprietario e Controlador de Dados</h2>
            <p className="text-gray-700 font-semibold">Dr Oliveira Advocacia</p>
            <p className="text-gray-700">
              E-mail de contato do Proprietario:{" "}
              <a href="mailto:contato@droliveira.adv.br" className="text-[#ccab76] hover:underline">
                contato@droliveira.adv.br
              </a>
            </p>
          </section>

          {/* Tipos de Dados */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Tipos de Dados Coletados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uso de Dados e outros dados coletados. Detalhes completos sobre cada tipo de Dados Pessoais coletados sao
              fornecidos nas secoes dedicadas desta politica de privacidade ou por textos explicativos especificos
              exibidos antes da coleta de Dados.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Dados Pessoais poderao ser fornecidos livremente pelo Usuario, ou, no caso dos Dados de Utilizacao,
              coletados automaticamente ao se utilizar este Aplicativo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A menos que especificado diferentemente todos os Dados solicitados por este Aplicativo sao obrigatorios e
              a falta de fornecimento destes Dados podera impossibilitar este Aplicativo de fornecer os seus Servicos.
              Nos casos em que este Aplicativo afirmar especificamente que alguns Dados nao forem obrigatorios, os
              Usuarios ficam livres para deixarem de comunicar estes Dados sem nenhuma consequencia para a
              disponibilidade ou o funcionamento do Servico.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Usuarios que tiverem duvidas a respeito de quais Dados Pessoais sao obrigatorios estao convidados a
              entrar em contato com o Proprietario.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quaisquer usos de cookies - ou de outras ferramentas de rastreamento - por este Aplicativo ou pelos
              proprietarios de servicos terceiros utilizados por este Aplicativo serao para a finalidade de fornecer os
              Servicos solicitados pelo Usuario, alem das demais finalidades descritas no presente documento e na
              Politica de Cookies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Os Usuarios ficam responsaveis por quaisquer Dados Pessoais de terceiros que forem obtidos, publicados ou
              compartilhados atraves deste Servico (este Aplicativo).
            </p>
          </section>

          {/* Modo e Local de Processamento */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Modo e Local de Processamento dos Dados</h2>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Metodo de processamento</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Proprietario tomara as medidas de seguranca adequadas para impedir o acesso nao autorizado, divulgacao,
              alteracao ou destruicao nao autorizada dos Dados.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              O processamento dos Dados e realizado utilizando computadores e /ou ferramentas de TI habilitadas,
              seguindo procedimentos organizacionais e meios estritamente relacionados com os fins indicados. Alem do
              Proprietario, em alguns casos, os Dados podem ser acessados por certos tipos de pessoas encarregadas,
              envolvidas com a operacao deste Servico (este Aplicativo) (administracao, vendas, marketing, administracao
              legal do sistema) ou pessoas externas (como fornecedores terceirizados de servicos tecnicos, carteiros,
              provedores de hospedagem, empresas de TI, agencias de comunicacao) nomeadas, quando necessario, como
              Processadores de Dados por parte do Proprietario. A lista atualizada destas partes pode ser solicitada ao
              Proprietario a qualquer momento.
            </p>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Lugar</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os dados sao processados nas sedes de operacao dos Proprietarios, e em quaisquer outros lugares onde as
              partes envolvidas com o processamento estiverem localizadas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dependendo da localizacao do Usuario as transferencias de dados poderao envolver a transferencia dos Dados
              do Usuario para outro pais que nao seja o seu. Para descobrirem mais sobre o local de processamento de
              tais Dados transferidos os Usuarios poderao verificar a secao contendo os detalhes sobre o processamento
              de Dados Pessoais.
            </p>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Periodo de conservacao</h3>
            <p className="text-gray-700 leading-relaxed">
              Salvo especificacao em contrario neste documento, os Dados Pessoais serao tratados e armazenados pelo
              tempo necessario para as finalidades para as quais foram coletados, e poderao ser retidos por mais tempo
              em razao de qualquer obrigacao legal aplicavel ou com base no consentimento dos Usuarios.
            </p>
          </section>

          {/* Politica de Cookies - Google Ads */}
          <section className="mb-10 p-6 bg-[#082533] text-white rounded-xl">
            <h2 className="text-2xl font-bold text-[#ccab76] mb-4">Politica de Cookies e Publicidade Online</h2>
            <p className="leading-relaxed mb-4">
              Este Aplicativo usa Rastreadores. Para saber mais, os Usuarios poderao consultar a Politica de Cookies.
            </p>

            <h3 className="text-xl font-bold text-[#ccab76] mb-3 mt-6">Google Ads e Remarketing</h3>
            <p className="leading-relaxed mb-4">
              Este site utiliza o Google Ads e tecnologias de remarketing para exibir anuncios relevantes aos usuarios
              em outros sites da internet. Os cookies do Google Ads sao usados para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Rastrear conversoes de anuncios</li>
              <li>Personalizar anuncios com base em visitas anteriores ao site</li>
              <li>Medir a eficacia de campanhas publicitarias</li>
              <li>Criar listas de remarketing para campanhas direcionadas</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Os usuarios podem optar por sair do remarketing do Google Ads visitando as{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccab76] underline"
              >
                Configuracoes de Anuncios do Google
              </a>{" "}
              ou utilizando a extensao de navegador para desativacao do Google Analytics.
            </p>

            <h3 className="text-xl font-bold text-[#ccab76] mb-3 mt-6">Google Analytics</h3>
            <p className="leading-relaxed">
              Utilizamos o Google Analytics para analisar o trafego do site e entender como os visitantes interagem com
              nosso conteudo. Os dados coletados incluem informacoes anonimas sobre paginas visitadas, tempo de
              permanencia e origem do trafego.
            </p>
          </section>

          {/* LGPD - Base Juridica */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Informacoes Adicionais para Usuarios - LGPD</h2>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Base juridica para o processamento</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Proprietario podera processar os Dados Pessoais relacionados ao Usuario se uma das hipoteses a seguir se
              aplicar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Os Usuarios tenham dado a sua anuencia para uma ou mais finalidades especificas.</li>
              <li>
                O fornecimento dos Dados for necessario para o cumprimento de um contrato com o Usuario e/ou quaisquer
                obrigacoes pre-contratuais do mesmo.
              </li>
              <li>
                O processamento for necessario para o cumprimento de uma obrigacao juridica a qual o Proprietario
                estiver sujeito.
              </li>
              <li>
                O processamento estiver relacionado a uma tarefa que for executada no interesse publico ou no exercicio
                de uma autorizacao oficial na qual o Proprietario estiver investido.
              </li>
              <li>
                O processamento for necessario para a finalidade de interesses legitimos perseguidos pelo Proprietario
                ou por um terceiro.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Em qualquer caso, o Proprietario colaborara de bom grado para esclarecer qual a base juridica que se
              aplica ao processamento, e em especial se o fornecimento de Dados for um requisito obrigatorio por forca
              de lei ou contratual, ou uma exigencia necessaria para celebrar um contrato.
            </p>
          </section>

          {/* Tempo de Retencao */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Mais informacoes sobre o tempo de retencao</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Salvo especificacao em contrario neste documento, os Dados Pessoais serao tratados e armazenados pelo
              tempo necessario para as finalidades para as quais foram coletados, e poderao ser retidos por mais tempo
              em razao de qualquer obrigacao legal aplicavel ou com base no consentimento dos Usuarios.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Portanto:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Os Dados Pessoais coletados para as finalidades relacionadas com a execucao de um contrato entre o
                Proprietario e o Usuario serao conservados ate que tal contrato tenha sido completamente cumprido.
              </li>
              <li>
                Os Dados Pessoais coletados para as finalidades relacionadas com os legitimos interesses do Proprietario
                serao conservados pelo tempo que for necessario para cumprir tais finalidades.
              </li>
              <li>
                O Proprietario podera ter a permissao de conservar os Dados Pessoais por um prazo maior sempre que o
                Usuario tiver dado a sua autorizacao para tal processamento, enquanto tal autorizacao nao tiver sido
                retirada.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Assim que o prazo de conservacao vencer os Dados Pessoais serao apagados. Desta forma o direito de
              acessar, o direito de apagar, o direito de corrigir e o direito a portabilidade dos dados nao poderao ter
              o seu cumprimento exigido apos o vencimento do prazo de conservacao.
            </p>
          </section>

          {/* Direitos dos Usuarios */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Os direitos dos Usuarios com base na LGPD</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Usuarios poderao exercer determinados direitos a respeito dos seus Dados processados pelo Proprietario.
              Em especial, os Usuarios possuem os direitos a fazer o seguinte, dentro dos limites permitidos por lei:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
              <li>
                <strong>Retirar a sua anuencia a qualquer momento.</strong> Os Usuarios possuem o direito de retirar a
                sua anuencia nos casos em que tenham dado a sua anuencia anteriormente para o processamento dos seus
                Dados Pessoais.
              </li>
              <li>
                <strong>Objetar o processamento dos seus Dados.</strong> Os Usuarios possuem o direito de objetar o
                processamento dos seus Dados se o processamento for executado sobre outra base juridica que nao a
                anuencia.
              </li>
              <li>
                <strong>Acessar os seus Dados.</strong> Os Usuarios possuem o direito de saber se os seus Dados estao
                sendo tratados pelo Proprietario, obter revelacoes sobre determinados aspectos do tratamento e conseguir
                uma copia dos Dados que estiverem sendo tratados.
              </li>
              <li>
                <strong>Verificar e pedir retificacao.</strong> Os Usuarios possuem o direito de verificar a exatidao
                dos seus Dados e de pedir que os mesmos sejam atualizados ou corrigidos.
              </li>
              <li>
                <strong>Restringir o processamento dos seus Dados.</strong> Os Usuarios possuem o direito de restringir
                o processamento dos seus Dados para qualquer outra finalidade que nao seja o armazenamento dos mesmos.
              </li>
              <li>
                <strong>Ter os seus Dados Pessoais apagados ou retirados.</strong> Os Usuarios possuem o direito de
                obter a eliminacao dos seus Dados do Proprietario.
              </li>
              <li>
                <strong>Receber os seus Dados e ter os mesmos transferidos para outro controlador.</strong> Os Usuarios
                possuem o direito de receber os seus Dados em um formato estruturado, utilizado comumente e apto a ser
                lido por maquinas.
              </li>
              <li>
                <strong>Registrar uma reclamacao.</strong> Os Usuarios possuem o direito de apresentar reclamacao
                perante a sua autoridade de protecao de dados competente (ANPD - Autoridade Nacional de Protecao de
                Dados).
              </li>
            </ul>
          </section>

          {/* Como Exercer os Direitos */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Como exercer estes direitos</h2>
            <p className="text-gray-700 leading-relaxed">
              Quaisquer solicitacoes para exercer os direitos do Usuario podem ser encaminhadas ao Proprietario por meio
              dos detalhes de contato fornecidos neste documento. Tais pedidos sao gratuitos e serao atendidos pelo
              Proprietario com a maior brevidade possivel e sempre no prazo de um mes, fornecendo aos Usuarios as
              informacoes exigidas por lei. Qualquer retificacao ou exclusao de Dados Pessoais ou restricao de
              processamento sera comunicada pelo Proprietario a cada destinatario, se houver, a quem os Dados Pessoais
              foram divulgados, a menos que isso seja impossivel ou implique um trabalho desproporcional. A pedido dos
              Usuarios, o Proprietario os informara sobre tais destinatarios.
            </p>
          </section>

          {/* Informacoes Adicionais */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">
              Informacoes adicionais sobre a coleta e processamento de Dados
            </h2>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Acao juridica</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Dados Pessoais dos Usuarios podem ser utilizados para fins juridicos pelo Proprietario em juizo ou nas
              etapas conducentes a possivel acao juridica decorrente de uso indevido deste Servico (este Aplicativo) ou
              dos Servicos relacionados. O Usuario declara estar ciente de que o Proprietario podera ser obrigado a
              revelar os Dados Pessoais mediante solicitacao das autoridades governamentais.
            </p>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">Logs do sistema e manutencao</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para fins de operacao e manutencao, este Aplicativo e quaisquer servicos de terceiros poderao coletar
              arquivos que gravam a interacao com este Aplicativo (logs do sistema) ou usar outros Dados Pessoais (tais
              como endereco IP) para esta finalidade.
            </p>

            <h3 className="text-xl font-bold text-[#082533] mb-3 mt-6">As informacoes nao contidas nesta politica</h3>
            <p className="text-gray-700 leading-relaxed">
              Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao Proprietario, a
              qualquer momento. Favor ver as informacoes de contato no inicio deste documento.
            </p>
          </section>

          {/* Mudancas na Politica */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Mudancas nesta politica de privacidade</h2>
            <p className="text-gray-700 leading-relaxed">
              O Proprietario se reserva o direito de fazer alteracoes nesta politica de privacidade a qualquer momento,
              atraves de notificacao a seus Usuarios nesta pagina e possivelmente dentro deste Servico (este Aplicativo)
              e/ou - na medida em que for tecnica e juridicamente viavel - enviando um aviso para os Usuarios atraves de
              quaisquer informacoes de contato disponiveis para o Proprietario. E altamente recomendavel checar esta
              pagina regularmente, consultando a data da ultima modificacao informada na parte inferior. Caso as
              mudancas afetem as atividades de processamento realizadas com base na anuencia do Usuario, o Proprietario
              coletara nova anuencia do Usuario, onde for exigida.
            </p>
          </section>

          {/* Aviso Final */}
          <section className="bg-[#ccab76] p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Natureza do Servico</h2>
            <p className="text-[#082533] font-bold leading-relaxed">
              IMPORTANTE: Este e um site de servicos advocaticios. Nao prestamos servicos medicos, farmaceuticos ou de
              diagnostico.
            </p>
            <p className="text-[#082533] leading-relaxed mt-3">
              Nosso trabalho consiste exclusivamente em assessoria e representacao juridica. Em caso de emergencia
              medica, procure um servico de saude ou ligue 192 (SAMU).
            </p>
          </section>

          {/* Contato */}
          <section className="mt-10 p-6 border-2 border-[#082533] rounded-xl">
            <h2 className="text-2xl font-bold text-[#082533] mb-4">Contato</h2>
            <p className="text-gray-700 mb-2">
              <strong>Dr Oliveira Advocacia</strong>
            </p>
            <p className="text-gray-700 mb-2">
              E-mail:{" "}
              <a href="mailto:contato@droliveira.adv.br" className="text-[#ccab76] hover:underline">
                contato@droliveira.adv.br
              </a>
            </p>
            <p className="text-gray-700">
              WhatsApp:{" "}
              <a href="https://api.whatsapp.com/send?phone=5511930819577" className="text-[#ccab76] hover:underline">
                +55 11 93081-9577
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
