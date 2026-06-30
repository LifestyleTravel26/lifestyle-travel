'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Visa Au Pair',
    hero_sub: 'Vive con una familia y trabaja en cuidado infantil',
    stat1_label: 'Capital inicial', stat1_value: '€2,000 – €4,000',
    stat2_label: 'Duración', stat2_value: '6 – 12 meses',
    stat3_label: 'Dificultad', stat3_value: 'Baja – Media',
    card_title: '¿Qué es la Visa Au Pair?',
    card_intro: 'La Visa Au Pair es una ruta de intercambio cultural que te permite vivir con una familia anfitriona mientras cuidas a sus hijos. A cambio recibes alojamiento, comida y una compensación económica. Es la forma más accesible de trabajar legalmente en Europa o EE.UU. sin necesitar contrato laboral tradicional.',
    card_p: 'A diferencia de otras rutas,',
    card_b: 'primero necesitas una familia anfitriona y luego aplicas a la visa.',
    card_p2: 'Sin familia confirmada no hay visa — esa es la regla clave del proceso.',
    included_title: '✅ Lo que incluye el programa Au Pair:',
    included: ['Alojamiento con la familia anfitriona', 'Comida incluida', 'Compensación semanal/mensual', 'Experiencia internacional y de idioma', 'Seguro médico en algunos países'],
    sec_destinos_title: 'Destinos Disponibles — Visa Au Pair',
    destinos_intro: 'La Visa Au Pair está disponible en múltiples países europeos y en EE.UU. Cada uno tiene requisitos de edad, idioma y proceso distintos. Irlanda es el más accesible para latinoamericanos.',
    th_pais: 'País', th_edad: 'Edad', th_idioma: 'Idioma', th_pago: 'Pago mensual', th_dificultad: 'Dificultad', th_portal: 'Portal',
    destinos_hack: 'Irlanda es el destino más accesible para latinoamericanos — alta demanda, inglés como idioma de trabajo y proceso directo sin agencia obligatoria. Alemania y Francia requieren nivel básico del idioma local pero tienen los salarios más competitivos de Europa.',
    sec_aplic_title: 'Cómo Aplicar — Proceso Paso a Paso',
    aplic_intro: 'La Visa Au Pair no se solicita como una Working Holiday. Primero necesitas familia anfitriona + contrato firmado. Sin familia confirmada no hay visa. Ese es el orden correcto.',
    plataformas_head: 'Las 2 formas de encontrar familia',
    opcion_a_title: 'Opción A: Plataformas directas',
    opcion_a_desc: 'Tú haces el match directamente con la familia. Más libertad pero menos seguridad.',
    opcion_b_title: 'Opción B: Agencias (recomendado)',
    opcion_b_desc: 'Te ayudan con matching, visa, soporte legal y acompañamiento. En EE.UU. es obligatorio.',
    pasos_head: 'Los 5 pasos del proceso',
    pasos: [
      ['1️⃣', 'Crear perfil de Au Pair', 'Experiencia con niños (mínimo 200h recomendado), fotos naturales, video de presentación, referencias y nivel de idioma. Tu perfil es TODO.'],
      ['2️⃣', 'Aplicar activamente a familias', 'Aplica a 20-30 familias — no esperes a que te contacten. Responde rápido y con buena actitud.'],
      ['3️⃣', 'Entrevistas con familias', 'Videollamadas para evaluar compatibilidad, tareas, horarios y condiciones. Elegir bien la familia es tan importante como que te elijan.'],
      ['4️⃣', 'Contrato + documentación', 'Firma el acuerdo, recibe carta de invitación y prepara pasaporte, antecedentes penales y seguro médico.'],
      ['5️⃣', 'Aplicar a la visa', 'Con familia confirmada, solicita la visa en embajada/consulado del país de destino.'],
    ],
    aplic_red: '⚠️ REGLA CLAVE: Sin familia confirmada = sin visa. No hay manera de aplicar a la Visa Au Pair sin tener primero el match con una familia y un contrato firmado.',
    aplic_hack: 'El error típico es esperar a encontrar familia cuando estés "listo". La estrategia real: crear perfil PERFECTO primero, aplicar a 20-30 familias activamente y hacer follow-up constante. Quienes se preparan bien consiguen match en 2-4 semanas.',
    sec_tiempos_title: 'Tiempos del Proceso',
    tiempos_intro: 'El tiempo total depende principalmente de la rapidez para encontrar familia. Con perfil fuerte y búsqueda activa puedes cerrar en 2-4 semanas. Luego 2-8 semanas para la visa según el país.',
    th_fase: 'Fase', th_tiempo: 'Tiempo estimado', th_depende: 'Depende de',
    tiempos_hack: 'Tiempo real con buen perfil y búsqueda activa: match en 2-4 semanas + visa en 3-6 semanas = 5-10 semanas en total. Sin preparación puede tardar 4-6 meses. La diferencia está en la calidad del perfil y la velocidad de aplicación.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist: [
      ['Pasaporte vigente', 'Mínimo 12 meses de validez'],
      ['Contrato firmado con familia', 'Sin esto no hay visa — prioritario'],
      ['Carta de invitación de la familia', 'Emitida por la familia anfitriona'],
      ['Antecedentes penales', 'Del país de origen — apostillados'],
      ['Seguro médico internacional', '€100-300 dependiendo del país y duración'],
      ['Certificado de idioma (si aplica)', 'Alemania (A1 alemán), Francia (A1 francés), EE.UU. (inglés intermedio)'],
      ['Experiencia con niños documentada', 'Mínimo 200h recomendado'],
      ['Fotos tipo pasaporte', 'Para proceso migratorio'],
    ],
    checklist_hack: 'Aunque no hay requisito oficial de fondos para trabajar como childminder, llega con €2,000-4,000 para cubrir los primeros 30-60 días mientras te instalas. Al inicio puede tomar tiempo generar ingresos estables.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    th_concepto: 'Concepto', th_costo: 'Costo', th_oblig: 'Obligatorio',
    sec_bancos_title: 'Opciones Bancarias',
    bancos_intro: 'Abre Wise o Revolut antes de viajar — permite recibir dinero internacionalmente y pagar gastos inmediatos mientras abres cuenta local en el país de destino.',
    sec_vivienda_title: 'Protocolo de Vivienda',
    vivienda_intro: 'Como Au Pair el alojamiento está incluido con la familia anfitriona. Pero si cambias de familia o necesitas alojamiento temporal entre llegada y inicio del programa, usa estos canales.',
    vivienda_red: '⚠️ NUNCA viajes sin contrato firmado con la familia. Verifica perfiles y referencias antes de aceptar. Una familia falsa o mal investigada puede arruinar toda la experiencia.',
    sec_crisis_title: 'Crisis y Contingencia',
    crisis_intro: 'Durante tu experiencia como Au Pair pueden surgir imprevistos. La clave es saber a quién acudir y actuar rápido, especialmente porque estás viviendo con una familia.',
    crisis_items: [
      ['Problemas con la familia anfitriona', 'Intentar resolver con comunicación directa. Si no funciona, contactar agencia o buscar cambio de familia.'],
      ['Exceso de trabajo o condiciones injustas', 'Revisar el acuerdo inicial y establecer límites claros. Si persiste, buscar soporte externo.'],
      ['Robo / pérdida de documentos', 'Reportar a Policía + contactar Embajada/Consulado de tu país.'],
      ['Problemas de salud', 'Contactar seguro médico y acudir a centro médico local.'],
      ['Familia falsa o estafa', 'Verificar siempre perfil y referencias antes de aceptar. Nunca viajar sin contrato.'],
    ],
    crisis_blue: '🔵 SOPORTE: Familia anfitriona (primer contacto) → Agencia (si aplica) → Embajada de tu país → Seguro médico internacional → Policía local (emergencias).',
    sec_matrix_title: 'Country Comparison Matrix',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Programa', 'Childminding/Au Pair', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duración', 'Flexible', '6–12 meses', '6–12 meses', '12 meses'],
      ['Edad', '18+', '18–30', '18–30', '18–26'],
      ['Idioma', 'Inglés básico', 'Alemán A1', 'Francés A1', 'Inglés intermedio'],
      ['Aplicación', 'Directo o agencia', 'Directo o agencia', 'Directo o agencia', 'Agencia obligatoria'],
      ['Pago', '€150–€250/sem', '€280–€400/mes', '€300–€400/mes', '~$195/semana'],
      ['Incluye', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida + estudios'],
      ['Dificultad', '🟢 Baja', '🟡 Media', '🟡 Media', '🔴 Alta'],
    ],
    matrix_hack: 'Irlanda es el punto de entrada más accesible para latinoamericanos — alta demanda de childminders, inglés como idioma de trabajo y proceso directo. Alemania y Francia son los más pagados pero requieren nivel básico del idioma local.',
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Te ayudamos a encontrar tu ruta Au Pair ideal según tu perfil.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Visto Au Pair',
    hero_sub: 'Viva com uma família e trabalhe com cuidado infantil',
    stat1_label: 'Capital inicial', stat1_value: '€2.000 – €4.000',
    stat2_label: 'Duração', stat2_value: '6 – 12 meses',
    stat3_label: 'Dificuldade', stat3_value: 'Baixa – Média',
    card_title: 'O que é o Visto Au Pair?',
    card_intro: 'O Visto Au Pair é uma rota de intercâmbio cultural que permite você viver com uma família anfitriã enquanto cuida dos filhos deles. Em troca você recebe alojamento, comida e uma compensação financeira. É a forma mais acessível de trabalhar legalmente na Europa ou EUA sem precisar de contrato de trabalho tradicional.',
    card_p: 'Ao contrário de outras rotas,',
    card_b: 'primeiro você precisa de uma família anfitriã e depois solicita o visto.',
    card_p2: 'Sem família confirmada não há visto — essa é a regra chave do processo.',
    included_title: '✅ O que inclui o programa Au Pair:',
    included: ['Alojamento com a família anfitriã', 'Comida incluída', 'Compensação semanal/mensal', 'Experiência internacional e de idioma', 'Seguro médico em alguns países'],
    sec_destinos_title: 'Destinos Disponíveis — Visto Au Pair',
    destinos_intro: 'O Visto Au Pair está disponível em vários países europeus e nos EUA. Cada um tem requisitos de idade, idioma e processo diferentes. A Irlanda é a mais acessível para latino-americanos.',
    th_pais: 'País', th_edad: 'Idade', th_idioma: 'Idioma', th_pago: 'Pagamento mensal', th_dificultad: 'Dificuldade', th_portal: 'Portal',
    destinos_hack: 'A Irlanda é o destino mais acessível para latino-americanos — alta demanda, inglês como idioma de trabalho e processo direto sem agência obrigatória. Alemanha e França exigem nível básico do idioma local mas têm os salários mais competitivos da Europa.',
    sec_aplic_title: 'Como Solicitar — Processo Passo a Passo',
    aplic_intro: 'O Visto Au Pair não se solicita como um Working Holiday. Primeiro você precisa de família anfitriã + contrato assinado. Sem família confirmada não há visto. Essa é a ordem correta.',
    plataformas_head: 'As 2 formas de encontrar família',
    opcion_a_title: 'Opção A: Plataformas diretas',
    opcion_a_desc: 'Você faz o match diretamente com a família. Mais liberdade mas menos segurança.',
    opcion_b_title: 'Opção B: Agências (recomendado)',
    opcion_b_desc: 'Te ajudam com matching, visto, suporte legal e acompanhamento. Nos EUA é obrigatório.',
    pasos_head: 'Os 5 passos do processo',
    pasos: [
      ['1️⃣', 'Criar perfil de Au Pair', 'Experiência com crianças (mínimo 200h recomendado), fotos naturais, vídeo de apresentação, referências e nível de idioma. Seu perfil é TUDO.'],
      ['2️⃣', 'Aplicar ativamente a famílias', 'Aplique a 20-30 famílias — não espere que te contatem. Responda rápido e com boa atitude.'],
      ['3️⃣', 'Entrevistas com famílias', 'Videochamadas para avaliar compatibilidade, tarefas, horários e condições. Escolher bem a família é tão importante quanto ser escolhido.'],
      ['4️⃣', 'Contrato + documentação', 'Assine o acordo, receba carta de convite e prepare passaporte, antecedentes criminais e seguro médico.'],
      ['5️⃣', 'Solicitar o visto', 'Com família confirmada, solicite o visto na embaixada/consulado do país de destino.'],
    ],
    aplic_red: '⚠️ REGRA CHAVE: Sem família confirmada = sem visto. Não há como solicitar o Visto Au Pair sem ter primeiro o match com uma família e um contrato assinado.',
    aplic_hack: 'O erro típico é esperar encontrar família quando você estiver "pronto". A estratégia real: criar perfil PERFEITO primeiro, aplicar a 20-30 famílias ativamente e fazer follow-up constante. Quem se prepara bem consegue match em 2-4 semanas.',
    sec_tiempos_title: 'Prazos do Processo',
    tiempos_intro: 'O tempo total depende principalmente da rapidez para encontrar família. Com perfil forte e busca ativa você pode fechar em 2-4 semanas. Depois 2-8 semanas para o visto conforme o país.',
    th_fase: 'Fase', th_tiempo: 'Tempo estimado', th_depende: 'Depende de',
    tiempos_hack: 'Tempo real com bom perfil e busca ativa: match em 2-4 semanas + visto em 3-6 semanas = 5-10 semanas no total. Sem preparação pode demorar 4-6 meses. A diferença está na qualidade do perfil e velocidade de aplicação.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist: [
      ['Passaporte válido', 'Mínimo 12 meses de validade'],
      ['Contrato assinado com família', 'Sem isso não há visto — prioritário'],
      ['Carta de convite da família', 'Emitida pela família anfitriã'],
      ['Antecedentes criminais', 'Do país de origem — apostilados'],
      ['Seguro médico internacional', '€100-300 dependendo do país e duração'],
      ['Certificado de idioma (se aplicável)', 'Alemanha (A1 alemão), França (A1 francês), EUA (inglês intermediário)'],
      ['Experiência com crianças documentada', 'Mínimo 200h recomendado'],
      ['Fotos tipo passaporte', 'Para processo migratório'],
    ],
    checklist_hack: 'Embora não haja requisito oficial de fundos para trabalhar como au pair, chegue com €2.000-4.000 para cobrir os primeiros 30-60 dias enquanto você se instala. No início pode levar tempo para gerar renda estável.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    th_concepto: 'Conceito', th_costo: 'Custo', th_oblig: 'Obrigatório',
    sec_bancos_title: 'Opções Bancárias',
    bancos_intro: 'Abra Wise ou Revolut antes de viajar — permite receber dinheiro internacionalmente e pagar despesas imediatas enquanto você abre conta local no país de destino.',
    sec_vivienda_title: 'Protocolo de Moradia',
    vivienda_intro: 'Como Au Pair o alojamento está incluído com a família anfitriã. Mas se você mudar de família ou precisar de alojamento temporário entre chegada e início do programa, use estes canais.',
    vivienda_red: '⚠️ NUNCA viaje sem contrato assinado com a família. Verifique perfis e referências antes de aceitar. Uma família falsa ou mal investigada pode arruinar toda a experiência.',
    sec_crisis_title: 'Crise e Contingência',
    crisis_intro: 'Durante sua experiência como Au Pair podem surgir imprevistos. A chave é saber a quem recorrer e agir rápido, especialmente porque você está morando com uma família.',
    crisis_items: [
      ['Problemas com a família anfitriã', 'Tentar resolver com comunicação direta. Se não funcionar, contatar agência ou buscar mudança de família.'],
      ['Excesso de trabalho ou condições injustas', 'Revisar o acordo inicial e estabelecer limites claros. Se persistir, buscar suporte externo.'],
      ['Roubo / perda de documentos', 'Registrar na Polícia + contatar Embaixada/Consulado do seu país.'],
      ['Problemas de saúde', 'Contatar seguro médico e ir a centro médico local.'],
      ['Família falsa ou golpe', 'Sempre verificar perfil e referências antes de aceitar. Nunca viajar sem contrato.'],
    ],
    crisis_blue: '🔵 SUPORTE: Família anfitriã (primeiro contato) → Agência (se aplicável) → Embaixada do seu país → Seguro médico internacional → Polícia local (emergências).',
    sec_matrix_title: 'Matriz de Comparação de Países',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Programa', 'Childminding/Au Pair', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duração', 'Flexível', '6–12 meses', '6–12 meses', '12 meses'],
      ['Idade', '18+', '18–30', '18–30', '18–26'],
      ['Idioma', 'Inglês básico', 'Alemão A1', 'Francês A1', 'Inglês intermediário'],
      ['Solicitação', 'Direto ou agência', 'Direto ou agência', 'Direto ou agência', 'Agência obrigatória'],
      ['Pagamento', '€150–€250/sem', '€280–€400/mês', '€300–€400/mês', '~$195/semana'],
      ['Inclui', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida + estudos'],
      ['Dificuldade', '🟢 Baixa', '🟡 Média', '🟡 Média', '🔴 Alta'],
    ],
    matrix_hack: 'A Irlanda é o ponto de entrada mais acessível para latino-americanos — alta demanda de childminders, inglês como idioma de trabalho e processo direto. Alemanha e França são os mais bem pagos mas exigem nível básico do idioma local.',
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Te ajudamos a encontrar sua rota Au Pair ideal conforme seu perfil.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Au Pair Visa',
    hero_sub: 'Live with a family and work in childcare',
    stat1_label: 'Initial capital', stat1_value: '€2,000 – €4,000',
    stat2_label: 'Duration', stat2_value: '6 – 12 months',
    stat3_label: 'Difficulty', stat3_value: 'Low – Medium',
    card_title: 'What is the Au Pair Visa?',
    card_intro: 'The Au Pair Visa is a cultural exchange route that allows you to live with a host family while caring for their children. In return you receive accommodation, food and financial compensation. It\'s the most accessible way to work legally in Europe or the US without needing a traditional employment contract.',
    card_p: 'Unlike other routes,',
    card_b: 'you first need a host family and then apply for the visa.',
    card_p2: 'Without a confirmed family there\'s no visa — that\'s the key rule of the process.',
    included_title: '✅ What the Au Pair program includes:',
    included: ['Accommodation with host family', 'Food included', 'Weekly/monthly compensation', 'International and language experience', 'Health insurance in some countries'],
    sec_destinos_title: 'Available Destinations — Au Pair Visa',
    destinos_intro: 'The Au Pair Visa is available in multiple European countries and the US. Each has different age, language and process requirements. Ireland is the most accessible for Latin Americans.',
    th_pais: 'Country', th_edad: 'Age', th_idioma: 'Language', th_pago: 'Monthly pay', th_dificultad: 'Difficulty', th_portal: 'Portal',
    destinos_hack: 'Ireland is the most accessible destination for Latin Americans — high demand, English as the working language and direct process without mandatory agency. Germany and France require basic knowledge of the local language but have the most competitive salaries in Europe.',
    sec_aplic_title: 'How to Apply — Step by Step Process',
    aplic_intro: 'The Au Pair Visa is not applied for like a Working Holiday. First you need a host family + signed contract. Without a confirmed family there\'s no visa. That\'s the correct order.',
    plataformas_head: 'The 2 ways to find a family',
    opcion_a_title: 'Option A: Direct platforms',
    opcion_a_desc: 'You match directly with the family. More freedom but less security.',
    opcion_b_title: 'Option B: Agencies (recommended)',
    opcion_b_desc: 'They help with matching, visa, legal support and accompaniment. In the US it\'s mandatory.',
    pasos_head: 'The 5 steps of the process',
    pasos: [
      ['1️⃣', 'Create Au Pair profile', 'Experience with children (minimum 200h recommended), natural photos, presentation video, references and language level. Your profile is EVERYTHING.'],
      ['2️⃣', 'Actively apply to families', 'Apply to 20-30 families — don\'t wait for them to contact you. Respond quickly and with a good attitude.'],
      ['3️⃣', 'Interviews with families', 'Video calls to evaluate compatibility, tasks, schedules and conditions. Choosing the right family is as important as being chosen.'],
      ['4️⃣', 'Contract + documentation', 'Sign the agreement, receive invitation letter and prepare passport, criminal record and health insurance.'],
      ['5️⃣', 'Apply for visa', 'With confirmed family, apply for the visa at the embassy/consulate of the destination country.'],
    ],
    aplic_red: '⚠️ KEY RULE: Without confirmed family = no visa. There\'s no way to apply for the Au Pair Visa without first having a match with a family and a signed contract.',
    aplic_hack: 'The typical mistake is waiting to find a family when you\'re "ready". The real strategy: create a PERFECT profile first, actively apply to 20-30 families and follow up constantly. Those who prepare well get a match in 2-4 weeks.',
    sec_tiempos_title: 'Process Timeline',
    tiempos_intro: 'Total time depends mainly on how quickly you find a family. With a strong profile and active search you can close in 2-4 weeks. Then 2-8 weeks for the visa depending on the country.',
    th_fase: 'Phase', th_tiempo: 'Estimated time', th_depende: 'Depends on',
    tiempos_hack: 'Real time with good profile and active search: match in 2-4 weeks + visa in 3-6 weeks = 5-10 weeks total. Without preparation it can take 4-6 months. The difference is in profile quality and application speed.',
    sec_checklist_title: 'Documents Checklist',
    checklist: [
      ['Valid passport', 'Minimum 12 months validity'],
      ['Signed contract with family', 'Without this there\'s no visa — priority'],
      ['Invitation letter from family', 'Issued by the host family'],
      ['Criminal record', 'From your home country — apostilled'],
      ['International health insurance', '€100-300 depending on country and duration'],
      ['Language certificate (if applicable)', 'Germany (A1 German), France (A1 French), US (intermediate English)'],
      ['Documented experience with children', 'Minimum 200h recommended'],
      ['Passport-type photos', 'For migration process'],
    ],
    checklist_hack: 'Although there\'s no official funds requirement to work as a childminder, arrive with €2,000-4,000 to cover the first 30-60 days while you get settled. At the beginning it may take time to generate stable income.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    th_concepto: 'Item', th_costo: 'Cost', th_oblig: 'Mandatory',
    sec_bancos_title: 'Banking Options',
    bancos_intro: 'Open Wise or Revolut before traveling — allows receiving money internationally and paying immediate expenses while you open a local account in the destination country.',
    sec_vivienda_title: 'Housing Protocol',
    vivienda_intro: 'As an Au Pair accommodation is included with the host family. But if you change families or need temporary accommodation between arrival and program start, use these channels.',
    vivienda_red: '⚠️ NEVER travel without a signed contract with the family. Verify profiles and references before accepting. A fake or poorly investigated family can ruin the entire experience.',
    sec_crisis_title: 'Crisis & Contingency',
    crisis_intro: 'During your Au Pair experience unexpected events may arise. The key is knowing who to turn to and acting fast, especially because you\'re living with a family.',
    crisis_items: [
      ['Problems with host family', 'Try to resolve with direct communication. If it doesn\'t work, contact agency or look for a family change.'],
      ['Overwork or unfair conditions', 'Review the initial agreement and set clear boundaries. If it persists, seek external support.'],
      ['Theft / loss of documents', 'Report to Police + contact your country\'s Embassy/Consulate.'],
      ['Health problems', 'Contact health insurance and go to local medical center.'],
      ['Fake family or scam', 'Always verify profile and references before accepting. Never travel without a contract.'],
    ],
    crisis_blue: '🔵 SUPPORT: Host family (first contact) → Agency (if applicable) → Your country\'s Embassy → International health insurance → Local Police (emergencies).',
    sec_matrix_title: 'Country Comparison Matrix',
    th_categoria: 'Category',
    matrix_rows: [
      ['Program', 'Childminding/Au Pair', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duration', 'Flexible', '6–12 months', '6–12 months', '12 months'],
      ['Age', '18+', '18–30', '18–30', '18–26'],
      ['Language', 'Basic English', 'German A1', 'French A1', 'Intermediate English'],
      ['Application', 'Direct or agency', 'Direct or agency', 'Direct or agency', 'Agency required'],
      ['Pay', '€150–€250/week', '€280–€400/month', '€300–€400/month', '~$195/week'],
      ['Includes', 'Accom. + food', 'Accom. + food', 'Accom. + food', 'Accom. + food + studies'],
      ['Difficulty', '🟢 Low', '🟡 Medium', '🟡 Medium', '🔴 High'],
    ],
    matrix_hack: 'Ireland is the most accessible entry point for Latin Americans — high demand for childminders, English as working language and direct process. Germany and France are the highest paying but require basic knowledge of the local language.',
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We help you find your ideal Au Pair route based on your profile.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

export default function AuPair() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)
  const { locale } = useLanguage()
  const t = translations[locale]

  const HackBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '8px', padding: '14px 16px', marginTop: '16px' }}>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
        <span style={{ color: '#e8572a', fontWeight: 'bold' }}>{t.hack_label}</span>{text}
      </p>
    </div>
  )
  const Intro = ({ text }: { text: string }) => (
    <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '16px', borderLeft: '3px solid #e8572a', paddingLeft: '12px' }}>{text}</p>
  )
  const SubHead = ({ text }: { text: string }) => (
    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e', margin: '20px 0 10px', borderBottom: '2px solid #f0f0f0', paddingBottom: '6px' }}>{text}</p>
  )
  const RedBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '8px', padding: '14px', marginTop: '12px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#dc2626', fontWeight: '600', lineHeight: '1.6' }}>{text}</p>
    </div>
  )
  const BlueBox = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '12px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.6' }}>{text}</p>
    </div>
  )
  const T = {
    wrap: { overflowX: 'auto' as const, marginTop: '12px', borderRadius: '10px', border: '1px solid #e5e7eb' },
    table: { width: '100%', borderCollapse: 'collapse' as const, minWidth: '400px' },
    th: { backgroundColor: '#1e3a5f', color: 'white', padding: '10px 14px', textAlign: 'left' as const, fontSize: '13px', fontWeight: '700' as const, whiteSpace: 'nowrap' as const },
    td: (i: number) => ({ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', lineHeight: '1.4', color: '#1a1a2e' }),
    link: { color: '#2563eb', textDecoration: 'underline' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }
  const ExtLink = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )
  const Section = ({ id, emoji, title, children }: any) => (
    <div style={{ border: '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer', color: '#1a1a2e' }}>
        <span style={{ fontWeight: '600', fontSize: '15px', color: '#1a1a2e' }}>{emoji} {title}</span>
        <span style={{ fontSize: '16px', color: '#555555' }}>{openSection === id ? '∧' : '∨'}</span>
      </button>
      {openSection === id && (
        <div style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #f5f5f5' }}>{children}</div>
      )}
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1560706981-3f98c4aceb76?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>👶</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[[t.stat1_label, t.stat1_value, '💰'], [t.stat2_label, t.stat2_value, '🕐'], [t.stat3_label, t.stat3_value, '📊']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[2]}</div>
            <div style={{ color: '#555555', fontSize: '10px', marginBottom: '3px' }}>{s[0]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px', color: '#1a1a2e' }}>{s[1]}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* CARD INTRO */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '16px' }}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1663579170393-7076f2021b10?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>{t.card_title}</h2>
          <Intro text={t.card_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '10px' }}>
            {t.card_p} <strong>{t.card_b}</strong> {t.card_p2}
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>{t.included_title}</p>
            {t.included.map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
        </div>

        {/* DESTINOS */}
        <Section id="destinos" emoji="🌍" title={t.sec_destinos_title}>
          <Intro text={t.destinos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_pais, t.th_edad, t.th_idioma, t.th_pago, t.th_dificultad, t.th_portal].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🇮🇪 Irlanda', '18+', 'Inglés básico', '€150–€250/sem', 'Baja', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
                  ['🇩🇪 Alemania', '18–30', 'Alemán básico (A1)', '€280–€400/mes', 'Media', 'make-it-in-germany.com', 'https://www.make-it-in-germany.com/en/visa-residence/types/au-pair'],
                  ['🇫🇷 Francia', '18–30', 'Francés básico (A1)', '€300–€400/mes', 'Media', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr/en/web/france-visas/au-pair'],
                  ['🇪🇸 España', '18–30', 'Ninguno', 'Variable', 'Baja', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
                  ['🇦🇹 Austria', '18–30', 'Alemán básico (A1)', 'Alto', 'Media', 'migration.gv.at', 'https://www.migration.gv.at/en/types-of-immigration/fixed-term-settlement/au-pair/'],
                  ['🇨🇭 Suiza', '18–25', 'Básico', 'El más alto', 'Media', 'sem.admin.ch', 'https://www.sem.admin.ch'],
                  ['🇳🇱 Países Bajos', '18–25', 'Inglés / Básico', 'Competitivo', 'Media', 'ind.nl', 'https://ind.nl/en/residence-permits/exchange/au-pair'],
                  ['🇧🇪 Bélgica', '18–26', 'Básico', 'Competitivo', 'Media', 'dofi.ibz.be', 'https://dofi.ibz.be/en/themes/faq/au-pair'],
                  ['🇺🇸 EE.UU.', '18–26', 'Inglés intermedio', '~$195/semana', 'Alta', 'j1visa.state.gov', 'https://j1visa.state.gov/programs/au-pair'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}><ExtLink text={r[5] as string} url={r[6] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.destinos_hack} />
        </Section>

        {/* PREMIUM LOCK */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', margin: '16px 0', border: '2px solid #e8572a' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔒</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>Contenido Premium</h3>
          <p style={{ color: '#555555', fontSize: '14px', marginBottom: '20px' }}>Accede al blueprint completo con toda la información detallada</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
              🗂️ Comprar este Blueprint — €14.99
            </a>
            <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
              📚 Acceso Total — Todos los Blueprints €39.99
            </a>
          </div>
        </div>

        <div style={{ display: 'none' }}>


        {/* APLICACION */}
        <Section id="aplicacion" emoji="🛂" title={t.sec_aplic_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1663579170702-fce379dc864e?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.aplic_intro} />
          <SubHead text={t.plataformas_head} />
          <div style={{ display: 'grid', gap: '10px', marginBottom: '14px' }}>
            <div style={{ backgroundColor: '#f0f9ff', borderRadius: '10px', padding: '14px', border: '1px solid #bae6fd' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 6px', color: '#0369a1' }}>{t.opcion_a_title}</p>
              <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 8px', lineHeight: '1.5' }}>{t.opcion_a_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                {[['AuPairWorld', 'https://www.aupairworld.com'], ['AuPair.com', 'https://www.aupair.com']].map((p, i) => (
                  <a key={i} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #bae6fd', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>{p[0]} →</a>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '14px', border: '1px solid #86efac' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 6px', color: '#166534' }}>{t.opcion_b_title}</p>
              <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 8px', lineHeight: '1.5' }}>{t.opcion_b_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                {[['Cultural Care', 'https://www.culturalcare.com'], ['AuPairCare', 'https://www.aupaircare.com'], ['Expert AuPair', 'https://expertaupair.com'], ['Go Au Pair', 'https://www.goaupair.com'], ['Au Pair in America', 'https://www.aupairinamerica.com'], ['EurAupair', 'https://www.euraupair.com']].map((p, i) => (
                  <a key={i} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #86efac', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#166534', textDecoration: 'none' }}>{p[0]} →</a>
                ))}
              </div>
            </div>
          </div>
          <SubHead text={t.pasos_head} />
          {t.pasos.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{step[0]}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px', color: '#1a1a2e' }}>{step[1]}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0, lineHeight: '1.5' }}>{step[2]}</p>
              </div>
            </div>
          ))}
          <RedBox text={t.aplic_red} />
          <HackBox text={t.aplic_hack} />
        </Section>

        {/* TIEMPOS */}
        <Section id="tiempos" emoji="⏳" title={t.sec_tiempos_title}>
          <Intro text={t.tiempos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_fase, t.th_tiempo, t.th_depende].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Crear perfil y aplicar a familias', '1-2 semanas', 'Calidad del perfil'],
                  ['Entrevistas y match con familia', '2-4 semanas', 'Actividad y comunicación'],
                  ['Contrato + documentación', '1-2 semanas', 'Velocidad de trámites'],
                  ['Aplicación de visa', '2-8 semanas', 'País de destino'],
                  ['Tiempo total estimado', '6-16 semanas', 'Todo el proceso'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.tiempos_hack} />
        </Section>

        {/* CHECKLIST */}
        <Section id="checklist" emoji="📋" title={t.sec_checklist_title}>
          {t.checklist.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <HackBox text={t.checklist_hack} />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico internacional', '€100 – €300/año', '✅ Sí'],
                  ['Tasa de aplicación de visa', '€150 – €500', '✅ Sí'],
                  ['Traducciones y apostillas', '€50 – €150', '✅ Sí'],
                  ['Biometría o exámenes médicos', '€50 – €200', '✅ Si requerido'],
                  ['Boleto de avión', '€400 – €1,200', '✅ Sí'],
                  ['Capital inicial recomendado', '€2,000 – €4,000', '✅ Para los primeros 30-60 días'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title={t.sec_bancos_title}>
          <Intro text={t.bancos_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital — Global', 'Transferencias internacionales baratas + múltiples divisas', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital — Global', 'Apertura rápida + tarjeta virtual inmediata', 'revolut.com', 'https://revolut.com'],
              ['N26', 'Digital — Europa', 'IBAN europeo + gestión desde app', 'n26.com', 'https://n26.com'],
              ['ANZ', 'Tradicional — AUS/NZ', 'Muy usado por viajeros en Australia y Nueva Zelanda', 'anz.com', 'https://anz.com'],
              ['Scotiabank', 'Tradicional — CA', 'Popular entre trabajadores WHV en Canadá', 'scotiabank.com', 'https://scotiabank.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{r[0]} <span style={{ color: '#333333', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title={t.sec_vivienda_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629551241242-eab03e6fb655?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.vivienda_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Airbnb', 'Temporal', 'Primeras semanas o transición entre familias', 'airbnb.com', 'https://airbnb.com'],
              ['Booking', 'Hostels', 'Económico para llegadas sin alojamiento confirmado', 'booking.com', 'https://booking.com'],
              ['Facebook Groups', 'Comunidad Au Pair', 'Grupos específicos por país con consejos y contactos', 'facebook.com', 'https://facebook.com'],
              ['Expat.com', 'Internacional', 'Comunidad de expatriados con info de vivienda por ciudad', 'expat.com', 'https://expat.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{r[0]} <span style={{ color: '#333333', fontWeight: 'normal', fontSize: '12px' }}>· {r[1]}</span></p>
                  <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{r[2]}</p>
                </div>
                <a href={r[4] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px', flexShrink: 0, marginLeft: '8px' }}>{r[3]}</a>
              </div>
            ))}
          </div>
          <RedBox text={t.vivienda_red} />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <Intro text={t.crisis_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {t.crisis_items.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #ef4444' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#dc2626', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <BlueBox text={t.crisis_blue} />
        </Section>

        {/* MATRIX */}
        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1644603847556-bfd96cfa1538?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '16px' }} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, '🇮🇪 Irlanda', '🇩🇪 Alemania', '🇫🇷 Francia', '🇺🇸 EE.UU.'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.matrix_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    {r.slice(1).map((v, j) => <td key={j} style={T.td(i)}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.matrix_hack} />
        </Section>

        </div>

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px', color: '#1a1a2e' }}>{t.consultoria_title}</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1" className="lemonsqueezy-button" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

      </div>
    </main>
  )
}