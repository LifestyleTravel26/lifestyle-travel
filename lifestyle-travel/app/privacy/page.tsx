'use client'
import LegalLayout from '../components/LegalLayout'

const EMAIL = 'jimmyg.leonr@gmail.com'

const content = {
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: octubre 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. Quién es el responsable', p: [`Lifestyle & Travel (lifestylentravel.com) es operado por Jimmy Gerardo Leon Rodriguez, con sede en Dublín, Irlanda. Para cualquier tema de privacidad escríbenos a ${EMAIL}.`] },
      { h: '2. Qué datos recopilamos', p: ['Cuenta: tu nombre, email y contraseña (la contraseña se almacena cifrada, nunca la vemos).', 'Compras: qué plan compraste y la fecha. Los datos de pago (tarjeta) los procesa Lemon Squeezy; nosotros no los recibimos ni los guardamos.', 'Uso del sitio: estadísticas de tráfico mediante Google Analytics, solo si aceptas las cookies.', 'Chat con IA: los mensajes que escribes en el asistente se envían a un proveedor de IA (Anthropic) para generar la respuesta. No incluyas datos sensibles en el chat.'] },
      { h: '3. Para qué los usamos', p: ['Crear y gestionar tu cuenta, darte acceso a los blueprints que compraste, enviarte correos de acceso y recuperación de contraseña, atender tus consultas y mejorar el sitio.', 'No vendemos tus datos ni los usamos para publicidad de terceros.'] },
      { h: '4. Con quién los compartimos', p: ['Solo con los proveedores necesarios para operar el servicio: Supabase (cuentas y base de datos), Vercel (alojamiento), Resend (correos), Lemon Squeezy (pagos), Google Analytics (estadísticas, con tu consentimiento) y Anthropic (asistente de IA). Algunos están fuera del Espacio Económico Europeo y aplican garantías como las cláusulas contractuales tipo.'] },
      { h: '5. Cookies', p: ['Usamos cookies esenciales para que el sitio funcione (sesión e idioma) y cookies de análisis solo si las aceptas en el banner. Puedes rechazarlas y el sitio funciona igual.'] },
      { h: '6. Cuánto tiempo los guardamos', p: ['Mientras tu cuenta esté activa y el tiempo necesario para cumplir obligaciones legales y contables. Puedes pedir que eliminemos tu cuenta en cualquier momento.'] },
      { h: '7. Tus derechos', p: [`Puedes pedir acceso, corrección, eliminación, limitación u oposición al tratamiento de tus datos, y portabilidad. Escríbenos a ${EMAIL}. Si crees que no tratamos bien tus datos, puedes reclamar ante la Comisión de Protección de Datos de Irlanda (dataprotection.ie) o tu autoridad local.`] },
      { h: '8. Cambios', p: ['Podemos actualizar esta política. La fecha de arriba indica la última versión.'] },
    ],
  },
  pt: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: outubro de 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. Quem é o responsável', p: [`A Lifestyle & Travel (lifestylentravel.com) é operada por Jimmy Gerardo Leon Rodriguez, com sede em Dublin, Irlanda. Para qualquer assunto de privacidade escreva para ${EMAIL}.`] },
      { h: '2. Quais dados coletamos', p: ['Conta: seu nome, email e senha (a senha é armazenada criptografada, nós nunca a vemos).', 'Compras: qual plano você comprou e a data. Os dados de pagamento (cartão) são processados pela Lemon Squeezy; nós não os recebemos nem os guardamos.', 'Uso do site: estatísticas de tráfego pelo Google Analytics, somente se você aceitar os cookies.', 'Chat com IA: as mensagens que você escreve no assistente são enviadas a um provedor de IA (Anthropic) para gerar a resposta. Não inclua dados sensíveis no chat.'] },
      { h: '3. Para que os usamos', p: ['Criar e gerenciar sua conta, dar acesso aos blueprints que você comprou, enviar emails de acesso e recuperação de senha, atender suas dúvidas e melhorar o site.', 'Não vendemos seus dados nem os usamos para publicidade de terceiros.'] },
      { h: '4. Com quem os compartilhamos', p: ['Somente com os provedores necessários para operar o serviço: Supabase (contas e banco de dados), Vercel (hospedagem), Resend (emails), Lemon Squeezy (pagamentos), Google Analytics (estatísticas, com seu consentimento) e Anthropic (assistente de IA). Alguns estão fora do Espaço Econômico Europeu e aplicam garantias como as cláusulas contratuais padrão.'] },
      { h: '5. Cookies', p: ['Usamos cookies essenciais para o site funcionar (sessão e idioma) e cookies de análise somente se você aceitar no banner. Você pode recusá-los e o site funciona igual.'] },
      { h: '6. Por quanto tempo os guardamos', p: ['Enquanto sua conta estiver ativa e pelo tempo necessário para cumprir obrigações legais e contábeis. Você pode pedir a exclusão da sua conta a qualquer momento.'] },
      { h: '7. Seus direitos', p: [`Você pode pedir acesso, correção, exclusão, limitação ou oposição ao tratamento dos seus dados, e portabilidade. Escreva para ${EMAIL}. Se achar que tratamos mal seus dados, pode reclamar à Comissão de Proteção de Dados da Irlanda (dataprotection.ie) ou à sua autoridade local.`] },
      { h: '8. Mudanças', p: ['Podemos atualizar esta política. A data acima indica a última versão.'] },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: October 2026',
    back: '← Lifestyle & Travel',
    sections: [
      { h: '1. Who is responsible', p: [`Lifestyle & Travel (lifestylentravel.com) is operated by Jimmy Gerardo Leon Rodriguez, based in Dublin, Ireland. For any privacy matter write to ${EMAIL}.`] },
      { h: '2. What data we collect', p: ['Account: your name, email and password (the password is stored encrypted; we never see it).', 'Purchases: which plan you bought and when. Payment details (card) are processed by Lemon Squeezy; we do not receive or store them.', 'Site usage: traffic statistics through Google Analytics, only if you accept cookies.', 'AI chat: messages you type in the assistant are sent to an AI provider (Anthropic) to generate the reply. Please do not include sensitive data in the chat.'] },
      { h: '3. What we use it for', p: ['To create and manage your account, give you access to the blueprints you bought, send access and password-recovery emails, answer your questions and improve the site.', 'We do not sell your data or use it for third-party advertising.'] },
      { h: '4. Who we share it with', p: ['Only with the providers needed to run the service: Supabase (accounts and database), Vercel (hosting), Resend (emails), Lemon Squeezy (payments), Google Analytics (statistics, with your consent) and Anthropic (AI assistant). Some are outside the European Economic Area and apply safeguards such as standard contractual clauses.'] },
      { h: '5. Cookies', p: ['We use essential cookies for the site to work (session and language) and analytics cookies only if you accept them in the banner. You can reject them and the site works the same.'] },
      { h: '6. How long we keep it', p: ['While your account is active and for as long as needed to meet legal and accounting obligations. You can ask us to delete your account at any time.'] },
      { h: '7. Your rights', p: [`You can request access, correction, deletion, restriction or objection to the processing of your data, and portability. Write to ${EMAIL}. If you believe we are not handling your data properly, you can complain to the Irish Data Protection Commission (dataprotection.ie) or your local authority.`] },
      { h: '8. Changes', p: ['We may update this policy. The date above shows the latest version.'] },
    ],
  },
}

export default function PrivacyPage() {
  return <LegalLayout content={content} />
}
