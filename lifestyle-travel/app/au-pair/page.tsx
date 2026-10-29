'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import HeaderMenu from '../components/HeaderMenu'
import { usePurchase } from '../hooks/usePurchase'
import IconBadge from '../components/IconBadge'
import { tx } from '@/lib/phrases'

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
    destinos_intro: 'La Visa Au Pair está disponible en múltiples países europeos y en EE.UU. Cada uno tiene requisitos de edad, idioma y proceso distintos. Ojo: Irlanda NO tiene visa ni ruta au pair para personas fuera de la UE — solo se puede trabajar como childminder si ya tienes visa de estudiante.',
    th_pais: 'País', th_edad: 'Edad', th_idioma: 'Idioma', th_pago: 'Pocket money', th_dificultad: 'Dificultad', th_portal: 'Portal',
    destinos_rows: [
      ['🇮🇪 Irlanda', '18+', 'Inglés · solo con visa de estudiante (Stamp 2)', 'Salario mínimo (€14.15/h)', 'Alta', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
      ['🇦🇺 Australia', '18–30', 'Inglés · Working Holiday Visa solo para Argentina, Chile y Perú (no existe visa au pair)', 'AUD $800–$1,600/mes', 'Media', 'immi.homeaffairs.gov.au', 'https://immi.homeaffairs.gov.au'],
      ['🇩🇪 Alemania', '18–26', 'Alemán básico (A1)', 'mín. €280/mes', 'Media', 'make-it-in-germany.com', 'https://www.make-it-in-germany.com/en/visa-residence/types/au-pair'],
      ['🇫🇷 Francia', '18–30', 'Francés básico (A1)', 'mín. €320/mes', 'Media', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr/en/web/france-visas/au-pair'],
      ['🇪🇸 España', '18–30', 'Español · visa de estudiante (curso 20h/sem; si hablas español, de otra materia)', '€280–€320/mes', 'Media', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
      ['🇦🇹 Austria', '18–27', 'Alemán básico (A1)', '€551.10/mes (mín. 2026)', 'Media', 'migration.gv.at', 'https://www.migration.gv.at/en/types-of-immigration/fixed-term-settlement/au-pair/'],
      ['🇨🇭 Suiza', '18–25', 'Alemán / Francés básico · agencia SECO obligatoria · cupos limitados para no-UE (no hay en Zúrich ni Ginebra)', 'CHF 500–800/mes neto', 'Alta', 'sem.admin.ch', 'https://www.sem.admin.ch'],
      ['🇳🇱 Países Bajos', '18–25', 'Inglés / Básico · solo con agencia reconocida por la IND', '€300–€340/mes', 'Media', 'ind.nl', 'https://ind.nl/en/residence-permits/exchange/au-pair'],
      ['🇧🇪 Bélgica', '18–26', 'Básico', '€450/mes', 'Media', 'dofi.ibz.be', 'https://dofi.ibz.be/en/themes/faq/au-pair'],
      ['🇺🇸 EE.UU.', '18–26', 'Inglés intermedio', '$195.75/semana', 'Alta', 'j1visa.state.gov', 'https://j1visa.state.gov/programs/au-pair'],
    ],
    sec_comparativa_title: 'Comparativa Au Pair',
    sec_comparativa_sub: 'Pocket money, horas, idioma y dificultad de visa por país',
    th_comp_pais: 'País', th_comp_pocket: 'Pocket Money', th_comp_horas: 'Horas/Semana', th_comp_idioma: 'Idioma', th_comp_visa: 'Dificultad de Visa',
    comparativa_rows: [
      ['🇩🇪 Alemania', 'mín. €280/mes', '30h', 'Alemán/Inglés', 'Media'],
      ['🇫🇷 Francia', 'mín. €320/mes', '25h', 'Francés', 'Media'],
      ['🇪🇸 España', '€280–€320/mes', '30h', 'Español', 'Media'],
      ['🇺🇸 EE.UU.', '$195.75/semana', '45h', 'Inglés', 'Alta'],
      ['🇮🇪 Irlanda', 'Salario mínimo (€14.15/h)', 'Máx. 20h (40h en verano)', 'Inglés', 'Alta'],
      ['🇦🇺 Australia', 'AUD $800–$1,600/mes', '25–30h', 'Inglés', 'Media'],
      ['🇦🇹 Austria', '€551.10/mes (mín. 2026)', '18h', 'Alemán', 'Media'],
      ['🇨🇭 Suiza', 'CHF 500–800/mes neto', '30h', 'Alemán/Francés', 'Alta'],
    ],
    sec_agencias_title: 'Agencias Recomendadas',
    agencias_intro: 'Plataformas y agencias para encontrar familia anfitriona y gestionar la visa.',
    agencias_items: [
      ['AuPairWorld', 'Gratuita, online', 'aupairworld.com', 'https://www.aupairworld.com'],
      ['Cultural Care Au Pair', 'USA, más formal', 'culturalcare.com', 'https://www.culturalcare.com'],
      ['Au Pair in America', 'USA, AIFS', 'aupairinamerica.com', 'https://www.aupairinamerica.com'],
      ['GoAuPair', 'USA, online', 'goaupair.com', 'https://www.goaupair.com'],
      ['AuPair.com', 'Europa, gratuita', 'aupair.com', 'https://www.aupair.com'],
      ['Perfect Way', 'Suiza, agencia con licencia', 'perfectway.ch', 'https://en.perfectway.ch'],
    ],
    sec_proscons_title: 'Pros y Contras',
    pros_title: '✅ Pros',
    cons_title: '❌ Contras',
    pros_items: [
      'Alojamiento y comida incluidos',
      'Aprendes el idioma viviendo con la familia',
      'Experiencia cultural única',
      'Bajo costo de vida',
      'Extensible en muchos países',
    ],
    cons_items: [
      'Sueldo bajo comparado con trabajo formal',
      'Depende mucho de la familia anfitriona',
      'Pocas horas libres en algunas familias',
      'No aplica para todos los países de Latinoamérica',
    ],
    destinos_hack: 'Irlanda no tiene ruta au pair para personas fuera de la UE: solo puedes trabajar como childminder si ya tienes visa de estudiante (máx. 20 h/semana, 40 h en verano) y con derecho al salario mínimo. Para una ruta au pair real, Alemania, Francia y España son las opciones más claras. Alemania y Francia piden nivel básico del idioma local. Australia: solo Argentina, Chile y Perú tienen Working Holiday (subclass 462); con Costa Rica, Colombia o México solo se entra con visa de estudiante. España: si hablas español, el curso de 20 h/semana debe ser de otra materia (por ejemplo inglés), porque un curso de español no sirve. Países Bajos: solo con agencia reconocida por la IND.',
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
    tiempos_intro: 'El tiempo total depende principalmente de la rapidez para encontrar familia. Con perfil fuerte y búsqueda activa puedes cerrar en 2-4 semanas. Luego 2-8 semanas para la visa según el país. En la práctica, vía Unión Europea el proceso completo (familia, documentos consulares, citas y aprobación) toma entre 3 y 5 meses; en Australia (Working Holiday) la aprobación tarda 2-4 semanas.',
    th_fase: 'Fase', th_tiempo: 'Tiempo estimado', th_depende: 'Depende de',
    tiempos_hack: 'Tiempo real con buen perfil y búsqueda activa: match en 2-4 semanas + visa en 3-6 semanas = 5-10 semanas en total solo si el visado es rápido (Australia). Para Europa cuenta 3-5 meses; sin preparación puede tardar más. La diferencia está en la calidad del perfil y la velocidad de aplicación.',
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
    tiempos_rows: [
      ['Crear perfil y aplicar a familias', '1-2 semanas', 'Calidad del perfil'],
      ['Entrevistas y match con familia', '2-4 semanas', 'Actividad y comunicación'],
      ['Contrato + documentación', '1-2 semanas', 'Velocidad de trámites'],
      ['Aplicación de visa', '2-8 semanas', 'País de destino'],
      ['Tiempo total estimado', 'Europa: 3-5 meses · Australia: 6-10 semanas', 'Todo el proceso'],
    ],
    gastos_rows: [
      ['Seguro médico internacional', '€100 – €300/año', '✅ Sí'],
      ['Tasa de aplicación de visa', '$100 – $450 USD (Australia ~A$670; visas de estudiante europeas ~€80)', '✅ Sí'],
      ['Curso de idiomas (España/Suiza/Austria)', '$1,500 – $3,500 USD/año (en España lo paga la au pair)', '✅ Si aplica'],
      ['Traducciones y apostillas', '€50 – €150', '✅ Sí'],
      ['Agencia (según país)', 'Suiza: gratis o hasta ~$300 · Austria: hasta ~$200 · Países Bajos: no pueden cobrarte · Bélgica: mínima · España: €250 – €400 · Australia: ~$500 – $1,000', '✅ Según país'],
      ['Permiso de residencia (Países Bajos)', '€423 (lo paga la familia o la agencia, no la au pair)', '❌ No, lo cubre la familia'],
      ['Working With Children Check (Australia)', 'A$80 – A$160 (normalmente lo cubre o reembolsa la familia)', '✅ Sí, en Australia'],
      ['Biometría o exámenes médicos', '€50 – €200', '✅ Si requerido'],
      ['Boleto de avión', '€400 – €1,200 (vuelos + seguro: $600 – $1,500 USD)', '✅ Sí'],
      ['Capital inicial recomendado', '€2,000 – €4,000', '✅ Para los primeros 30-60 días'],
    ],
    bancos_rows: [
      ['Wise', 'Digital — Global', 'Transferencias internacionales baratas + múltiples divisas', 'wise.com', 'https://wise.com'],
      ['Revolut', 'Digital — Global', 'Apertura rápida + tarjeta virtual inmediata', 'revolut.com', 'https://revolut.com'],
      ['N26', 'Digital — Europa', 'IBAN europeo + gestión desde app', 'n26.com', 'https://n26.com'],
      ['ANZ', 'Tradicional — AUS/NZ', 'Muy usado por viajeros en Australia y Nueva Zelanda', 'anz.com', 'https://anz.com'],
      ['Scotiabank', 'Tradicional — CA', 'Popular entre trabajadores WHV en Canadá', 'scotiabank.com', 'https://scotiabank.com'],
    ],
    vivienda_rows: [
      ['Airbnb', 'Temporal', 'Primeras semanas o transición entre familias', 'airbnb.com', 'https://airbnb.com'],
      ['Booking', 'Hostels', 'Económico para llegadas sin alojamiento confirmado', 'booking.com', 'https://booking.com'],
      ['Facebook Groups', 'Comunidad Au Pair', 'Grupos específicos por país con consejos y contactos', 'facebook.com', 'https://facebook.com'],
      ['Expat.com', 'Internacional', 'Comunidad de expatriados con info de vivienda por ciudad', 'expat.com', 'https://expat.com'],
    ],
    cta_buy: 'Acceso Total — Todos los Blueprints €39.99',
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
      ['Programa', 'Solo childminding casual (visa estudiante)', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duración', 'Flexible', '6–12 meses', '6–12 meses', '12 meses'],
      ['Edad', '18+', '18–26', '18–30', '18–26'],
      ['Idioma', 'Inglés básico', 'Alemán A1', 'Francés A1', 'Inglés intermedio'],
      ['Aplicación', 'Directo o agencia', 'Directo o agencia', 'Directo o agencia', 'Agencia obligatoria'],
      ['Pago', '€14.15/h (mín.)', 'mín. €280/mes', 'mín. €320/mes', '$195.75/sem'],
      ['Incluye', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida + estudios'],
      ['Dificultad', '🔴 Alta', '🟡 Media', '🟡 Media', '🔴 Alta'],
    ],
    matrix_hack: 'Irlanda no es una ruta au pair para latinoamericanos: solo childminding casual con visa de estudiante. Alemania y Francia son las rutas au pair reales (visa propia) pero requieren nivel básico del idioma local.',
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
    destinos_intro: 'O Visto Au Pair está disponível em vários países europeus e nos EUA. Cada um tem requisitos de idade, idioma e processo diferentes. Atenção: a Irlanda NÃO tem visto nem rota au pair para quem é de fora da UE — só é possível trabalhar como childminder se você já tiver visto de estudante.',
    th_pais: 'País', th_edad: 'Idade', th_idioma: 'Idioma', th_pago: 'Pocket money', th_dificultad: 'Dificuldade', th_portal: 'Portal',
    destinos_rows: [
      ['🇮🇪 Irlanda', '18+', 'Inglês · só com visto de estudante (Stamp 2)', 'Salário mínimo (€14,15/h)', 'Alta', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
      ['🇦🇺 Austrália', '18–30', 'Inglês · Working Holiday Visa só para Argentina, Chile e Peru (não existe visto au pair)', 'AUD $800–$1,600/mês', 'Média', 'immi.homeaffairs.gov.au', 'https://immi.homeaffairs.gov.au'],
      ['🇩🇪 Alemanha', '18–26', 'Alemão básico (A1)', 'mín. €280/mês', 'Média', 'make-it-in-germany.com', 'https://www.make-it-in-germany.com/en/visa-residence/types/au-pair'],
      ['🇫🇷 França', '18–30', 'Francês básico (A1)', 'mín. €320/mês', 'Média', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr/en/web/france-visas/au-pair'],
      ['🇪🇸 Espanha', '18–30', 'Espanhol · visto de estudante (curso 20h/sem; se você fala espanhol, de outra matéria)', '€280–€320/mês', 'Média', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
      ['🇦🇹 Áustria', '18–27', 'Alemão básico (A1)', '€551,10/mês (mín. 2026)', 'Média', 'migration.gv.at', 'https://www.migration.gv.at/en/types-of-immigration/fixed-term-settlement/au-pair/'],
      ['🇨🇭 Suíça', '18–25', 'Alemão / Francês básico · agência SECO obrigatória · cotas limitadas para não-UE (não há em Zurique nem Genebra)', 'CHF 500–800/mês neto', 'Alta', 'sem.admin.ch', 'https://www.sem.admin.ch'],
      ['🇳🇱 Países Baixos', '18–25', 'Inglês / Básico · só com agência reconhecida pelo IND', '€300–€340/mês', 'Média', 'ind.nl', 'https://ind.nl/en/residence-permits/exchange/au-pair'],
      ['🇧🇪 Bélgica', '18–26', 'Básico', '€450/mês', 'Média', 'dofi.ibz.be', 'https://dofi.ibz.be/en/themes/faq/au-pair'],
      ['🇺🇸 EUA', '18–26', 'Inglês intermediário', '$195,75/semana', 'Alta', 'j1visa.state.gov', 'https://j1visa.state.gov/programs/au-pair'],
    ],
    sec_comparativa_title: 'Comparativo Au Pair',
    sec_comparativa_sub: 'Pocket money, horas, idioma e dificuldade de visto por país',
    th_comp_pais: 'País', th_comp_pocket: 'Pocket Money', th_comp_horas: 'Horas/Semana', th_comp_idioma: 'Idioma', th_comp_visa: 'Dificuldade de Visto',
    comparativa_rows: [
      ['🇩🇪 Alemanha', 'mín. €280/mês', '30h', 'Alemão/Inglês', 'Média'],
      ['🇫🇷 França', 'mín. €320/mês', '25h', 'Francês', 'Média'],
      ['🇪🇸 Espanha', '€280–€320/mês', '30h', 'Espanhol', 'Média'],
      ['🇺🇸 EUA', '$195.75/semana', '45h', 'Inglês', 'Alta'],
      ['🇮🇪 Irlanda', 'Salário mínimo (€14,15/h)', 'Máx. 20h (40h no verão)', 'Inglês', 'Alta'],
      ['🇦🇺 Austrália', 'AUD $800–$1,600/mês', '25–30h', 'Inglês', 'Média'],
      ['🇦🇹 Áustria', '€551,10/mês (mín. 2026)', '18h', 'Alemão', 'Média'],
      ['🇨🇭 Suíça', 'CHF 500–800/mês neto', '30h', 'Alemão/Francês', 'Alta'],
    ],
    sec_agencias_title: 'Agências Recomendadas',
    agencias_intro: 'Plataformas e agências para encontrar família anfitriã e gerenciar o visto.',
    agencias_items: [
      ['AuPairWorld', 'Gratuita, online', 'aupairworld.com', 'https://www.aupairworld.com'],
      ['Cultural Care Au Pair', 'EUA, mais formal', 'culturalcare.com', 'https://www.culturalcare.com'],
      ['Au Pair in America', 'EUA, AIFS', 'aupairinamerica.com', 'https://www.aupairinamerica.com'],
      ['GoAuPair', 'EUA, online', 'goaupair.com', 'https://www.goaupair.com'],
      ['AuPair.com', 'Europa, gratuita', 'aupair.com', 'https://www.aupair.com'],
      ['Perfect Way', 'Suíça, agência licenciada', 'perfectway.ch', 'https://en.perfectway.ch'],
    ],
    sec_proscons_title: 'Prós e Contras',
    pros_title: '✅ Prós',
    cons_title: '❌ Contras',
    pros_items: [
      'Alojamento e comida incluídos',
      'Você aprende o idioma morando com a família',
      'Experiência cultural única',
      'Baixo custo de vida',
      'Extensível em muitos países',
    ],
    cons_items: [
      'Salário baixo comparado ao trabalho formal',
      'Depende muito da família anfitriã',
      'Poucas horas livres em algumas famílias',
      'Não se aplica a todos os países da América Latina',
    ],
    destinos_hack: 'A Irlanda não tem rota au pair para quem é de fora da UE: você só pode trabalhar como childminder se já tiver visto de estudante (máx. 20 h/semana, 40 h no verão) e com direito ao salário mínimo. Para uma rota au pair real, Alemanha, França e Espanha são as opções mais claras. Alemanha e França exigem nível básico do idioma local. Austrália: só Argentina, Chile e Peru têm Working Holiday (subclass 462); com Costa Rica, Colômbia ou México só se entra com visto de estudante. Espanha: se você fala espanhol, o curso de 20 h/semana deve ser de outra matéria (por exemplo inglês), porque um curso de espanhol não serve. Países Baixos: só com agência reconhecida pelo IND.',
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
    tiempos_intro: 'O tempo total depende principalmente da rapidez para encontrar família. Com perfil forte e busca ativa você pode fechar em 2-4 semanas. Depois 2-8 semanas para o visto conforme o país. Na prática, via União Europeia o processo completo (família, documentos consulares, agendamentos e aprovação) leva de 3 a 5 meses; na Austrália (Working Holiday) a aprovação leva 2-4 semanas.',
    th_fase: 'Fase', th_tiempo: 'Tempo estimado', th_depende: 'Depende de',
    tiempos_hack: 'Tempo real com bom perfil e busca ativa: match em 2-4 semanas + visto em 3-6 semanas = 5-10 semanas no total só se o visto for rápido (Austrália). Para a Europa conte 3-5 meses; sem preparação pode demorar mais. A diferença está na qualidade do perfil e velocidade de aplicação.',
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
    tiempos_rows: [
      ['Criar perfil e candidatar-se a famílias', '1-2 semanas', 'Qualidade do perfil'],
      ['Entrevistas e match com a família', '2-4 semanas', 'Atividade e comunicação'],
      ['Contrato + documentação', '1-2 semanas', 'Rapidez dos trâmites'],
      ['Pedido de visto', '2-8 semanas', 'País de destino'],
      ['Tempo total estimado', 'Europa: 3-5 meses · Austrália: 6-10 semanas', 'Todo o processo'],
    ],
    gastos_rows: [
      ['Seguro saúde internacional', '€100 – €300/ano', '✅ Sim'],
      ['Taxa do visto', '$100 – $450 USD (Austrália ~A$670; vistos de estudante europeus ~€80)', '✅ Sim'],
      ['Curso de idioma (Espanha/Suíça/Áustria)', '$1,500 – $3,500 USD/ano (na Espanha quem paga é a au pair)', '✅ Se aplicável'],
      ['Traduções e apostilas', '€50 – €150', '✅ Sim'],
      ['Agência (conforme o país)', 'Suíça: grátis ou até ~$300 · Áustria: até ~$200 · Países Baixos: não podem cobrar de você · Bélgica: mínima · Espanha: €250 – €400 · Austrália: ~$500 – $1,000', '✅ Conforme o país'],
      ['Autorização de residência (Países Baixos)', '€423 (paga pela família ou pela agência, não pela au pair)', '❌ Não, a família cobre'],
      ['Working With Children Check (Austrália)', 'A$80 – A$160 (normalmente a família cobre ou reembolsa)', '✅ Sim, na Austrália'],
      ['Biometria ou exames médicos', '€50 – €200', '✅ Se exigido'],
      ['Passagem aérea', '€400 – €1,200 (voo + seguro: $600 – $1,500 USD)', '✅ Sim'],
      ['Capital inicial recomendado', '€2,000 – €4,000', '✅ Para os primeiros 30-60 dias'],
    ],
    bancos_rows: [
      ['Wise', 'Digital — Global', 'Transferências internacionais baratas + várias moedas', 'wise.com', 'https://wise.com'],
      ['Revolut', 'Digital — Global', 'Abertura rápida + cartão virtual imediato', 'revolut.com', 'https://revolut.com'],
      ['N26', 'Digital — Europa', 'IBAN europeu + gestão pelo app', 'n26.com', 'https://n26.com'],
      ['ANZ', 'Tradicional — AUS/NZ', 'Muito usado por viajantes na Austrália e Nova Zelândia', 'anz.com', 'https://anz.com'],
      ['Scotiabank', 'Tradicional — CA', 'Popular entre trabalhadores WHV no Canadá', 'scotiabank.com', 'https://scotiabank.com'],
    ],
    vivienda_rows: [
      ['Airbnb', 'Temporário', 'Primeiras semanas ou transição entre famílias', 'airbnb.com', 'https://airbnb.com'],
      ['Booking', 'Hostels', 'Econômico para chegadas sem hospedagem confirmada', 'booking.com', 'https://booking.com'],
      ['Facebook Groups', 'Comunidade Au Pair', 'Grupos específicos por país com dicas e contatos', 'facebook.com', 'https://facebook.com'],
      ['Expat.com', 'Internacional', 'Comunidade de expatriados com informação de moradia por cidade', 'expat.com', 'https://expat.com'],
    ],
    cta_buy: 'Acesso Total — Todos os Blueprints €39.99',
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
      ['Programa', 'Só childminding casual (visto estudante)', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duração', 'Flexível', '6–12 meses', '6–12 meses', '12 meses'],
      ['Idade', '18+', '18–26', '18–30', '18–26'],
      ['Idioma', 'Inglês básico', 'Alemão A1', 'Francês A1', 'Inglês intermediário'],
      ['Solicitação', 'Direto ou agência', 'Direto ou agência', 'Direto ou agência', 'Agência obrigatória'],
      ['Pagamento', '€14,15/h (mín.)', 'mín. €280/mês', 'mín. €320/mês', '$195,75/sem'],
      ['Inclui', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida', 'Aloj. + comida + estudos'],
      ['Dificuldade', '🔴 Alta', '🟡 Média', '🟡 Média', '🔴 Alta'],
    ],
    matrix_hack: 'A Irlanda não é uma rota au pair para latino-americanos: só childminding casual com visto de estudante. Alemanha e França são as rotas au pair reais (visto próprio) mas exigem nível básico do idioma local.',
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
    destinos_intro: 'The Au Pair Visa is available in multiple European countries and the US. Each has different age, language and process requirements. Note: Ireland has NO au pair visa or route for non-EU nationals — you can only work as a childminder if you already hold a student visa.',
    th_pais: 'Country', th_edad: 'Age', th_idioma: 'Language', th_pago: 'Pocket money', th_dificultad: 'Difficulty', th_portal: 'Portal',
    destinos_rows: [
      ['🇮🇪 Ireland', '18+', 'English · only with student visa (Stamp 2)', 'Minimum wage (€14.15/h)', 'High', 'irishimmigration.ie', 'https://www.irishimmigration.ie'],
      ['🇦🇺 Australia', '18–30', 'English · Working Holiday Visa only for Argentina, Chile and Peru (no au pair visa exists)', 'AUD $800–$1,600/month', 'Medium', 'immi.homeaffairs.gov.au', 'https://immi.homeaffairs.gov.au'],
      ['🇩🇪 Germany', '18–26', 'Basic German (A1)', 'min. €280/month', 'Medium', 'make-it-in-germany.com', 'https://www.make-it-in-germany.com/en/visa-residence/types/au-pair'],
      ['🇫🇷 France', '18–30', 'Basic French (A1)', 'min. €320/month', 'Medium', 'france-visas.gouv.fr', 'https://france-visas.gouv.fr/en/web/france-visas/au-pair'],
      ['🇪🇸 Spain', '18–30', 'Spanish · student visa (20h/week course; if you speak Spanish, in another subject)', '€280–€320/month', 'Medium', 'exteriores.gob.es', 'https://www.exteriores.gob.es'],
      ['🇦🇹 Austria', '18–27', 'Basic German (A1)', '€551.10/month (min. 2026)', 'Medium', 'migration.gv.at', 'https://www.migration.gv.at/en/types-of-immigration/fixed-term-settlement/au-pair/'],
      ['🇨🇭 Switzerland', '18–25', 'Basic German / French · SECO-licensed agency required · limited quotas for non-EU (none in Zurich or Geneva)', 'CHF 500–800/month net', 'High', 'sem.admin.ch', 'https://www.sem.admin.ch'],
      ['🇳🇱 Netherlands', '18–25', 'English / Basic · only through an IND-recognised agency', '€300–€340/month', 'Medium', 'ind.nl', 'https://ind.nl/en/residence-permits/exchange/au-pair'],
      ['🇧🇪 Belgium', '18–26', 'Basic', '€450/month', 'Medium', 'dofi.ibz.be', 'https://dofi.ibz.be/en/themes/faq/au-pair'],
      ['🇺🇸 USA', '18–26', 'Intermediate English', '$195.75/week', 'High', 'j1visa.state.gov', 'https://j1visa.state.gov/programs/au-pair'],
    ],
    sec_comparativa_title: 'Au Pair Comparison',
    sec_comparativa_sub: 'Pocket money, hours, language and visa difficulty by country',
    th_comp_pais: 'Country', th_comp_pocket: 'Pocket Money', th_comp_horas: 'Hours/Week', th_comp_idioma: 'Language', th_comp_visa: 'Visa Difficulty',
    comparativa_rows: [
      ['🇩🇪 Germany', 'min. €280/month', '30h', 'German/English', 'Medium'],
      ['🇫🇷 France', 'min. €320/month', '25h', 'French', 'Medium'],
      ['🇪🇸 Spain', '€280–€320/month', '30h', 'Spanish', 'Medium'],
      ['🇺🇸 USA', '$195.75/week', '45h', 'English', 'High'],
      ['🇮🇪 Ireland', 'Minimum wage (€14.15/h)', 'Max 20h (40h in summer)', 'English', 'High'],
      ['🇦🇺 Australia', 'AUD $800–$1,600/month', '25–30h', 'English', 'Medium'],
      ['🇦🇹 Austria', '€551.10/month (min. 2026)', '18h', 'German', 'Medium'],
      ['🇨🇭 Switzerland', 'CHF 500–800/month net', '30h', 'German/French', 'High'],
    ],
    sec_agencias_title: 'Recommended Agencies',
    agencias_intro: 'Platforms and agencies to find a host family and manage the visa.',
    agencias_items: [
      ['AuPairWorld', 'Free, online', 'aupairworld.com', 'https://www.aupairworld.com'],
      ['Cultural Care Au Pair', 'USA, more formal', 'culturalcare.com', 'https://www.culturalcare.com'],
      ['Au Pair in America', 'USA, AIFS', 'aupairinamerica.com', 'https://www.aupairinamerica.com'],
      ['GoAuPair', 'USA, online', 'goaupair.com', 'https://www.goaupair.com'],
      ['AuPair.com', 'Europe, free', 'aupair.com', 'https://www.aupair.com'],
      ['Perfect Way', 'Switzerland, licensed agency', 'perfectway.ch', 'https://en.perfectway.ch'],
    ],
    sec_proscons_title: 'Pros and Cons',
    pros_title: '✅ Pros',
    cons_title: '❌ Cons',
    pros_items: [
      'Accommodation and food included',
      'Learn the language living with the family',
      'Unique cultural experience',
      'Low cost of living',
      'Extendable in many countries',
    ],
    cons_items: [
      'Low pay compared to formal work',
      'Highly dependent on the host family',
      'Limited free time with some families',
      'Not available for all Latin American countries',
    ],
    destinos_hack: 'Ireland has no au pair route for non-EU nationals: you can only work as a childminder if you already hold a student visa (max 20 h/week, 40 h in summer) and you are entitled to minimum wage. For a real au pair route, Germany, France and Spain are the clearest options. Germany and France require basic knowledge of the local language. Australia: only Argentina, Chile and Peru have a Working Holiday (subclass 462); with Costa Rica, Colombia or Mexico you can only enter on a student visa. Spain: if you speak Spanish, the 20 h/week course must be in another subject (for example English), because a Spanish course does not qualify. Netherlands: only through an IND-recognised agency.',
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
    tiempos_intro: 'Total time depends mainly on how quickly you find a family. With a strong profile and active search you can close in 2-4 weeks. Then 2-8 weeks for the visa depending on the country. In practice, via the European Union the full process (family, consular documents, appointments and approval) takes 3 to 5 months; in Australia (Working Holiday) approval takes 2-4 weeks.',
    th_fase: 'Phase', th_tiempo: 'Estimated time', th_depende: 'Depends on',
    tiempos_hack: 'Real time with good profile and active search: match in 2-4 weeks + visa in 3-6 weeks = 5-10 weeks total only if the visa is fast (Australia). For Europe count on 3-5 months; without preparation it can take longer. The difference is in profile quality and application speed.',
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
    tiempos_rows: [
      ['Create profile and apply to families', '1-2 weeks', 'Profile quality'],
      ['Interviews and family match', '2-4 weeks', 'Activity and communication'],
      ['Contract + documentation', '1-2 weeks', 'Speed of paperwork'],
      ['Visa application', '2-8 weeks', 'Destination country'],
      ['Total estimated time', 'Europe: 3-5 months · Australia: 6-10 weeks', 'Whole process'],
    ],
    gastos_rows: [
      ['International health insurance', '€100 – €300/year', '✅ Yes'],
      ['Visa application fee', '$100 – $450 USD (Australia ~A$670; European student visas ~€80)', '✅ Yes'],
      ['Language course (Spain/Switzerland/Austria)', '$1,500 – $3,500 USD/year (in Spain the au pair pays)', '✅ If applicable'],
      ['Translations and apostilles', '€50 – €150', '✅ Yes'],
      ['Agency (depends on country)', 'Switzerland: free or up to ~$300 · Austria: up to ~$200 · Netherlands: they cannot charge you · Belgium: minimal · Spain: €250 – €400 · Australia: ~$500 – $1,000', '✅ Depends on country'],
      ['Residence permit (Netherlands)', '€423 (paid by the family or agency, not the au pair)', '❌ No, the family covers it'],
      ['Working With Children Check (Australia)', 'A$80 – A$160 (usually covered or reimbursed by the family)', '✅ Yes, in Australia'],
      ['Biometrics or medical exams', '€50 – €200', '✅ If required'],
      ['Plane ticket', '€400 – €1,200 (flights + insurance: $600 – $1,500 USD)', '✅ Yes'],
      ['Recommended starting capital', '€2,000 – €4,000', '✅ For the first 30-60 days'],
    ],
    bancos_rows: [
      ['Wise', 'Digital — Global', 'Cheap international transfers + multiple currencies', 'wise.com', 'https://wise.com'],
      ['Revolut', 'Digital — Global', 'Fast sign-up + instant virtual card', 'revolut.com', 'https://revolut.com'],
      ['N26', 'Digital — Europe', 'European IBAN + management from the app', 'n26.com', 'https://n26.com'],
      ['ANZ', 'Traditional — AUS/NZ', 'Widely used by travellers in Australia and New Zealand', 'anz.com', 'https://anz.com'],
      ['Scotiabank', 'Traditional — CA', 'Popular with WHV workers in Canada', 'scotiabank.com', 'https://scotiabank.com'],
    ],
    vivienda_rows: [
      ['Airbnb', 'Temporary', 'First weeks or transition between families', 'airbnb.com', 'https://airbnb.com'],
      ['Booking', 'Hostels', 'Budget option if you arrive without confirmed housing', 'booking.com', 'https://booking.com'],
      ['Facebook Groups', 'Au Pair community', 'Country-specific groups with tips and contacts', 'facebook.com', 'https://facebook.com'],
      ['Expat.com', 'International', 'Expat community with housing info by city', 'expat.com', 'https://expat.com'],
    ],
    cta_buy: 'Full Access — All Blueprints €39.99',
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
      ['Program', 'Casual childminding only (student visa)', 'Au Pair', 'Au Pair', 'Au Pair (J-1)'],
      ['Duration', 'Flexible', '6–12 months', '6–12 months', '12 months'],
      ['Age', '18+', '18–26', '18–30', '18–26'],
      ['Language', 'Basic English', 'German A1', 'French A1', 'Intermediate English'],
      ['Application', 'Direct or agency', 'Direct or agency', 'Direct or agency', 'Agency required'],
      ['Pay', '€14.15/h (min.)', 'min. €280/month', 'min. €320/month', '$195.75/week'],
      ['Includes', 'Accom. + food', 'Accom. + food', 'Accom. + food', 'Accom. + food + studies'],
      ['Difficulty', '🔴 High', '🟡 Medium', '🟡 Medium', '🔴 High'],
    ],
    matrix_hack: 'Ireland is not an au pair route for Latin Americans: only casual childminding on a student visa. Germany and France are the real au pair routes (own visa) but require basic knowledge of the local language.',
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
  const { hasAccess, loading } = usePurchase()
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
          <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>←</span>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
          </Link>
          <HeaderMenu />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>👶</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[[t.stat1_label, t.stat1_value, 'cost'], [t.stat2_label, t.stat2_value, 'time'], [t.stat3_label, t.stat3_value, 'level']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ marginBottom: '8px' }}><IconBadge name={s[2]} size={36} /></div>
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
                {t.destinos_rows.map((r, i) => (
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

        {/* COMPARATIVA */}
        <Section id="comparativa" emoji="📊" title={t.sec_comparativa_title}>
          <Intro text={t.sec_comparativa_sub} />
          <div style={T.wrap}>
            <table style={{ ...T.table, minWidth: '520px' }}>
              <thead><tr>{[t.th_comp_pais, t.th_comp_pocket, t.th_comp_horas, t.th_comp_idioma, t.th_comp_visa].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.comparativa_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* PREMIUM LOCK */}
        {!hasAccess && (
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', margin: '16px 0', border: '2px solid #e8572a' }}>
          <div style={{ marginBottom: '14px' }}><IconBadge name="lock" size={52} /></div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>{tx('Contenido Premium', locale)}</h3>
          <p style={{ color: '#555555', fontSize: '14px', marginBottom: '20px' }}>{tx('Accede al blueprint completo con toda la información detallada', locale)}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4"
             
              style={{
                backgroundColor: '#e8572a',
                color: 'white',
                borderRadius: '10px',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(232,87,42,0.4)',
                border: '2px solid #ff6b3d',
              }}
            >
              {t.cta_buy}
            </a>
          </div>
        </div>
        )}

        <div style={{ display: hasAccess ? 'block' : 'none' }}>


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

        <Section id="agencias" emoji="🏢" title={t.sec_agencias_title}>
          <Intro text={t.agencias_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {t.agencias_items.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '12px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{item[0]}</p>
                  <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>{item[1]}</p>
                </div>
                <ExtLink text={item[2] as string} url={item[3] as string} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="proscons" emoji="⚖️" title={t.sec_proscons_title}>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '14px', border: '1px solid #86efac' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 8px', color: '#166534' }}>{t.pros_title}</p>
              {t.pros_items.map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
            </div>
            <div style={{ backgroundColor: '#fef2f2', borderRadius: '10px', padding: '14px', border: '1px solid #fecaca' }}>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 8px', color: '#dc2626' }}>{t.cons_title}</p>
              {t.cons_items.map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#ef4444' }}>✗</span> {item}
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* TIEMPOS */}
        <Section id="tiempos" emoji="⏳" title={t.sec_tiempos_title}>
          <Intro text={t.tiempos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_fase, t.th_tiempo, t.th_depende].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.tiempos_rows.map((r, i) => (
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
                {t.gastos_rows.map((r, i) => (
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
            {t.bancos_rows.map((r, i) => (
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
            {t.vivienda_rows.map((r, i) => (
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
          <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

      </div>
    </main>
  )
}