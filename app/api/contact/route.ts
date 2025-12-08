import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, telefone, email, urgencia, mensagem } = body

    const { data, error } = await resend.emails.send({
      from: "Dr. Oliveira Advocacia <onboarding@resend.dev>",
      to: ["advogado@droliveira.adv.br"],
      replyTo: email,
      subject: `PLANTAO 24H - ${urgencia}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #082533; padding: 30px; text-align: center;">
            <h1 style="color: #ccab76; margin: 0; font-size: 24px;">SOLICITACAO URGENTE</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #082533; margin-bottom: 20px;">Nova Solicitacao de Plantao</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0; color: #666;"><strong style="color: #082533;">Nome:</strong> ${nome}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0; color: #666;"><strong style="color: #082533;">Telefone/WhatsApp:</strong> ${telefone}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0; color: #666;"><strong style="color: #082533;">Email:</strong> ${email}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 0; color: #666;"><strong style="color: #082533;">Tipo de Urgencia:</strong></p>
              <p style="margin: 10px 0 0 0; color: #b91c1c; font-weight: bold;">${urgencia}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #082533; font-weight: bold;">Relato da Situacao:</p>
              <p style="margin: 0; color: #666; white-space: pre-wrap;">${mensagem}</p>
            </div>
          </div>
          
          <div style="background: #082533; padding: 20px; text-align: center;">
            <p style="color: #ccab76; margin: 0; font-size: 12px;">Dr. Oliveira Advocacia & Associados - Plantao 24h</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
  }
}
