'use client'
import LegalLayout from '../components/LegalLayout'

const EMAIL = 'jimmyg.leonr@gmail.com'

const content = {
  es: {
    title: 'Términos y Condiciones',
    updated: 'Última actualización: octubre 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. Qué es Lifestyle & Travel', p: ['Lifestyle & Travel (lifestylentravel.com) vende acceso digital a blueprints paso a paso sobre rutas para vivir, estudiar y trabajar en el extranjero, y consultorías 1 a 1. Operado por Jimmy Gerardo Leon Rodriguez, Dublín, Irlanda.'] },
      { h: '2. Información, no asesoría legal', p: ['El contenido es informativo y se basa en fuentes públicas y experiencia personal. No es asesoría legal, migratoria ni financiera. Las reglas de visas, tasas y requisitos cambian con frecuencia y dependen de tu nacionalidad: confirma siempre en el portal oficial del país o con un profesional antes de tomar decisiones. No garantizamos que obtengas una visa ni un resultado concreto.'] },
      { h: '3. Tu cuenta y tu acceso', p: ['Necesitas una cuenta para acceder al contenido. La licencia es personal e intransferible: no puedes compartir tu cuenta ni revender o redistribuir el contenido.', '"Acceso de por vida" significa acceso mientras el servicio esté disponible, incluyendo las actualizaciones que publiquemos.'] },
      { h: '4. Pagos', p: ['Los pagos los procesa Lemon Squeezy, que actúa como vendedor autorizado (merchant of record) y gestiona impuestos y facturación. Los precios se muestran en la página de planes y pueden cambiar; el precio que pagas es el vigente al comprar.'] },
      { h: '5. Reembolsos', p: ['Por tratarse de contenido digital con acceso inmediato, las compras no son reembolsables, salvo error de cobro o cuando la ley aplicable a tu caso te dé ese derecho.', `Si tuviste un problema de acceso o un cobro incorrecto, escríbenos a ${EMAIL} y lo resolvemos.`] },
      { h: '6. Consultorías 1 a 1', p: ['La consultoría es una sesión de orientación de 60 minutos. Si necesitas reprogramar, avísanos con anticipación a través de nuestro email de contacto.'] },
      { h: '7. Uso aceptable', p: ['No puedes copiar, extraer de forma automatizada, revender ni publicar el contenido, ni usar el sitio de forma que afecte su funcionamiento o a otros usuarios.'] },
      { h: '8. Propiedad intelectual', p: ['El contenido, el diseño y la marca son de Lifestyle & Travel. Tu pago te da una licencia de uso personal, no la propiedad del contenido.'] },
      { h: '9. Limitación de responsabilidad', p: ['En la medida permitida por la ley, no somos responsables de decisiones tomadas con base en el contenido, ni de cambios en las reglas migratorias, rechazos de visa o pérdidas derivadas. Nada en estos términos limita derechos que la ley te reconozca como consumidor.'] },
      { h: '10. Ley aplicable', p: ['Estos términos se rigen por las leyes de Irlanda. Si eres consumidor, también te protegen las normas imperativas de tu país de residencia.'] },
      { h: '11. Contacto y cambios', p: [`Dudas: ${EMAIL}. Podemos actualizar estos términos; la fecha de arriba indica la última versión. Ver también nuestra Política de Privacidad en /privacy.`] },
    ],
  },
  pt: {
    title: 'Termos e Condições',
    updated: 'Última atualização: outubro de 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. O que é a Lifestyle & Travel', p: ['A Lifestyle & Travel (lifestylentravel.com) vende acesso digital a blueprints passo a passo sobre rotas para viver, estudar e trabalhar no exterior, e consultorias 1 a 1. Operada por Jimmy Gerardo Leon Rodriguez, Dublin, Irlanda.'] },
      { h: '2. Informação, não assessoria jurídica', p: ['O conteúdo é informativo e baseado em fontes públicas e experiência pessoal. Não é assessoria jurídica, migratória nem financeira. As regras de vistos, taxas e requisitos mudam com frequência e dependem da sua nacionalidade: confirme sempre no portal oficial do país ou com um profissional antes de tomar decisões. Não garantimos que você obtenha um visto nem um resultado concreto.'] },
      { h: '3. Sua conta e seu acesso', p: ['Você precisa de uma conta para acessar o conteúdo. A licença é pessoal e intransferível: você não pode compartilhar sua conta nem revender ou redistribuir o conteúdo.', '"Acesso vitalício" significa acesso enquanto o serviço estiver disponível, incluindo as atualizações que publicarmos.'] },
      { h: '4. Pagamentos', p: ['Os pagamentos são processados pela Lemon Squeezy, que atua como vendedora autorizada (merchant of record) e cuida de impostos e faturamento. Os preços aparecem na página de planos e podem mudar; o preço que você paga é o vigente na compra.'] },
      { h: '5. Reembolsos', p: ['Por se tratar de conteúdo digital com acesso imediato, as compras não são reembolsáveis, exceto por erro de cobrança ou quando a lei aplicável ao seu caso lhe der esse direito.', `Se teve um problema de acesso ou uma cobrança incorreta, escreva para ${EMAIL} e resolvemos.`] },
      { h: '6. Consultorias 1 a 1', p: ['A consultoria é uma sessão de orientação de 60 minutos. Se precisar reagendar, avise com antecedência pelo nosso email de contato.'] },
      { h: '7. Uso aceitável', p: ['Você não pode copiar, extrair de forma automatizada, revender nem publicar o conteúdo, nem usar o site de forma que afete seu funcionamento ou outros usuários.'] },
      { h: '8. Propriedade intelectual', p: ['O conteúdo, o design e a marca pertencem à Lifestyle & Travel. Seu pagamento dá uma licença de uso pessoal, não a propriedade do conteúdo.'] },
      { h: '9. Limitação de responsabilidade', p: ['Na medida permitida por lei, não somos responsáveis por decisões tomadas com base no conteúdo, nem por mudanças nas regras migratórias, recusas de visto ou perdas decorrentes. Nada nestes termos limita direitos que a lei lhe reconheça como consumidor.'] },
      { h: '10. Lei aplicável', p: ['Estes termos são regidos pelas leis da Irlanda. Se você é consumidor, também o protegem as normas imperativas do seu país de residência.'] },
      { h: '11. Contato e mudanças', p: [`Dúvidas: ${EMAIL}. Podemos atualizar estes termos; a data acima indica a última versão. Veja também nossa Política de Privacidade em /privacy.`] },
    ],
  },
  en: {
    title: 'Terms & Conditions',
    updated: 'Last updated: October 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. What Lifestyle & Travel is', p: ['Lifestyle & Travel (lifestylentravel.com) sells digital access to step-by-step blueprints on routes to live, study and work abroad, plus 1-on-1 consultations. Operated by Jimmy Gerardo Leon Rodriguez, Dublin, Ireland.'] },
      { h: '2. Information, not legal advice', p: ['The content is informational and based on public sources and personal experience. It is not legal, immigration or financial advice. Visa rules, fees and requirements change often and depend on your nationality: always confirm on the country\'s official portal or with a professional before making decisions. We do not guarantee that you will obtain a visa or any specific outcome.'] },
      { h: '3. Your account and access', p: ['You need an account to access the content. The licence is personal and non-transferable: you may not share your account or resell or redistribute the content.', '"Lifetime access" means access for as long as the service is available, including the updates we publish.'] },
      { h: '4. Payments', p: ['Payments are processed by Lemon Squeezy, which acts as merchant of record and handles taxes and invoicing. Prices are shown on the plans page and may change; the price you pay is the one in effect at purchase.'] },
      { h: '5. Refunds', p: ['Because this is digital content with immediate access, purchases are non-refundable, except for a billing error or where the law applicable to you gives you that right.', `If you had an access problem or an incorrect charge, write to ${EMAIL} and we will sort it out.`] },
      { h: '6. 1-on-1 consultations', p: ['The consultation is a 60-minute guidance session. If you need to reschedule, let us know in advance through our contact email.'] },
      { h: '7. Acceptable use', p: ['You may not copy, scrape, resell or publish the content, or use the site in a way that affects its operation or other users.'] },
      { h: '8. Intellectual property', p: ['The content, design and brand belong to Lifestyle & Travel. Your payment gives you a personal-use licence, not ownership of the content.'] },
      { h: '9. Limitation of liability', p: ['To the extent permitted by law, we are not liable for decisions made based on the content, nor for changes in immigration rules, visa refusals or resulting losses. Nothing in these terms limits rights the law gives you as a consumer.'] },
      { h: '10. Governing law', p: ['These terms are governed by the laws of Ireland. If you are a consumer, the mandatory rules of your country of residence also protect you.'] },
      { h: '11. Contact and changes', p: [`Questions: ${EMAIL}. We may update these terms; the date above shows the latest version. See also our Privacy Policy at /privacy.`] },
    ],
  },
}

export default function TermsPage() {
  return <LegalLayout content={content} />
}
