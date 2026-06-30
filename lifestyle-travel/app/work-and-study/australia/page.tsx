'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Australia',
    hero_sub: 'Oceanía · Work and Study',
    hero_badge: 'Alto',
    stat1_label: 'Capital requerido',
    stat1_value: '$18,000 - $25,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Alto',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      '48 horas quincenales de trabajo + tiempo completo en vacaciones — más horas que NZ o Canadá',
      'TFN (Tax File Number) gratis — clave para trabajar desde la primera semana',
      'Puedes abrir Commonwealth Bank ANTES de viajar — cuenta activa al llegar',
      'Temporary Graduate Visa (485): 2-4 años de trabajo post-graduación',
      'Salarios más altos del blueprint — $22-35 AUD/hora (~$15-24 USD)',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Australia tiene los salarios más altos del blueprint y el mayor número de horas de trabajo permitidas — 48 horas quincenales durante clases y tiempo completo en vacaciones. El costo es alto, pero el retorno también. Con TFN y cuenta bancaria activos en la primera semana, puedes estar generando ingresos antes de que termine el primer mes.',
    autoridad_p1_label: 'Student Visa Subclass 500:',
    autoridad_p1_text: 'estudia en instituciones registradas (CRICOS) y trabaja',
    autoridad_p1_b: '48 horas quincenales',
    autoridad_p1_mid: 'durante clases y',
    autoridad_p1_b2: 'tiempo completo',
    autoridad_p1_end: 'en vacaciones académicas.',
    autoridad_p2_label: 'Hoja de ruta:',
    autoridad_p2: 'CoE → Student Visa 500 → TFN → trabajo → Temporary Graduate Visa 485 → Skilled Migrant → PR.',
    autoridad_blue: '💱 Conversión Australia: 1 AUD ≈ $0.69 USD. A$200 ≈ $138 USD. Salario mínimo $23 AUD/hora ≈ $15.9 USD/hora.',
    autoridad_hack: 'Australia permite abrir Commonwealth Bank ANTES de viajar. Eso significa que llegas con cuenta activa, tarjeta lista y puedes recibir dinero desde el día 1. Combina esto con TFN en semana 1 y puedes estar trabajando antes de que termine el primer mes.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'En Australia la academia se elige por ubicación y conexión laboral — cerca de zonas con alta actividad económica. Sydney CBD, Melbourne CBD, Brisbane y Gold Coast son las mejores ciudades para conseguir trabajo siendo estudiante.',
    estrategia_head: '🇦🇺 Matriz de Escuelas de Inglés: Australia 2026',
    th_inst: 'Institución', th_ciudad: 'Ciudad', th_precio: 'Precio (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvencia obligatoria:',
    solvencia1_val: '~$15,000 – $16,000 USD (AUD $24,505) para gastos del primer año',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$18,000 – $25,000 USD (curso + visa + OSHC + gastos iniciales)',
    solvencia3_label: '📍 Mejor estrategia:',
    solvencia3_val: 'Universidades regionales (más baratas) + Subclass 485 para PR',
    estrategia_hack: 'Brisbane y Gold Coast tienen costos de vida 20-30% más bajos que Sydney o Melbourne con las mismas oportunidades laborales. Elige ubicación con transporte público cercano — multiplica tus opciones de empleo.',
    sec_pre_title: 'VET Diplomas & Career Programs',
    pre_intro: 'Los programas VET (Vocational Education and Training) son más cortos y económicos que universidades. Al completar un Diploma o Advanced Diploma elegible, accedes a la Temporary Graduate Visa 485 para trabajar tiempo completo post-graduación.',
    th_programa: 'Programa', th_institucion: 'Institución', th_inversion: 'Inversión',
    pre_blue: '🔵 TEMPORARY GRADUATE VISA 485: Al graduarte de un programa elegible puedes aplicar a la Subclass 485 — 2 a 4 años de trabajo tiempo completo en Australia. Con esa experiencia aplicas a Skilled Migrant Category para PR.',
    pre_hack: 'Los Diplomas VET son la entrada más económica al sistema educativo australiano. $6,500-9,000 vs $15,000+ en universidades. Misma calificación para la Subclass 485. La diferencia de costo puede ser de $8,000-10,000 AUD.',
    sec_edu_title: 'Educación Superior — Universidades Regionales',
    edu_intro: 'Las universidades regionales de Australia son más baratas, tienen menor competencia y más oportunidades laborales para estudiantes. Al graduarte calificas para la Subclass 485 post-graduación.',
    th_nivel: 'Nivel', th_programa_col: 'Programa', th_precio_anual: 'Precio/año AUD',
    edu_blue: '💰 HACK REGIONES: Universidades fuera de Sydney o Melbourne tienen matrículas 20-30% más bajas, menos competencia y más trabajo disponible. Con Subclass 485 post-graduación tienes 2-4 años de trabajo tiempo completo para llegar a PR.',
    edu_hack: 'University of Southern Queensland y Federation University son de las más accesibles para latinoamericanos. Sus programas califican para la Subclass 485. Costo de vida fuera de las grandes ciudades también es 30-40% más bajo.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Australia tiene el OSHC (Overseas Student Health Cover) como seguro médico obligatorio — es diferente al seguro médico normal. Sin OSHC tu visa no se aprueba.',
    th_concepto: 'Concepto', th_costo: 'Costo USD', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA: ~$15,000 – $16,000 USD (AUD $24,505) para gastos del primer año. OSHC es separado y también obligatorio — sin él no hay visa.',
    gastos_hack: 'Capital real = precio del curso + $650 visa + $500 OSHC + solvencia. Total $18,000-25,000 USD. Es el destino más caro junto con Canadá, pero con los salarios más altos. Un estudiante trabajando 48h quincenales puede recuperar $800-1,200 AUD/semana.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'Australia tiene el proceso de aterrizaje más flexible del blueprint — puedes abrir cuenta bancaria antes de viajar. TFN + banco son las dos prioridades de la primera semana.',
    student_visa_head: '1. Student Visa 500 — Tu permiso de estudio en Australia',
    pasos: [
      ['Paso 1', 'Abre Commonwealth Bank ANTES de viajar — permite apertura online previa al vuelo', 'https://commbank.com.au'],
      ['Paso 2', 'Entrada con Student Visa 500 — presenta pasaporte + CoE en aeropuerto', null],
      ['Paso 3', 'TFN gratis en ato.gov.au — aplica online, llega en pocos días', 'https://ato.gov.au'],
      ['Paso 4', 'SIM card (Telstra/Optus/Vodafone) + buscar habitación permanente (Flatmates)', null],
    ],
    visa485_head: '2. Temporary Graduate Visa 485 (después de graduarte)',
    visa485_items: [
      ['Aplicas después de graduarte — 2 a 4 años de trabajo tiempo completo en Australia', null],
      ['Con experiencia acumulada aplicas a Skilled Migrant Category para PR', null],
      ['Portal oficial Department of Home Affairs para todos los trámites migratorios', 'https://homeaffairs.gov.au'],
    ],
    aterrizaje_hack: 'En Australia el TFN es el documento clave para trabajar. Sin TFN los empleadores retienen impuestos muy altos de tu salario. Es gratis y se aplica online en ato.gov.au. Banco + TFN en semana 1 = empleable en semana 2-3.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Australia tiene la ventaja única de que puedes abrir Commonwealth Bank ANTES de viajar. Llegas con cuenta activa y tarjeta lista. Con cuenta abierta, el TFN llega en días y puedes empezar a trabajar.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Commonwealth Bank antes de viajar — es el único banco principal de Australia que permite apertura online previa al vuelo. Llegas con cuenta activa, tarjeta lista y puedes recibir dinero desde el día 1.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales para tu proceso en Australia. ATO para el TFN. Home Affairs para la visa. Seek es el portal de empleo #1 del país.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'Seek es el LinkedIn de Australia para trabajos entry-level. Aplica en menos de 10 minutos cuando veas una vacante — las empresas australianas revisan primero los CV que llegan más rápido. Activa alertas desde antes de llegar.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'Sydney y Melbourne tienen los alquileres más altos — habitación compartida $280-350 AUD/semana. Brisbane, Gold Coast y ciudades regionales son 20-40% más baratas con las mismas oportunidades laborales.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal AUD', th_mes: 'Precio Mensual AUD', th_usd_mes: '≈ USD/mes',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Australia también existen estafas en anuncios de alquiler online. Nunca envíes dinero sin haber visitado la habitación físicamente.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'Las habitaciones en Australia se alquilan muy rápido. Si ves algo en Flatmates o Facebook, escribe inmediatamente. Considera Brisbane o Gold Coast — 20-30% más barato, menos competencia y mucho trabajo en turismo y hospitality.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Australia tiene los salarios más altos del blueprint — $22-35 AUD/hora. Con 48 horas quincenales (24h/semana promedio) puedes ganar $1,760-2,880 AUD/mes.',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'Camina por cafés, restaurantes y tiendas en zonas comerciales. Di:',
    empleos_cv_quote: '"I\'m looking for a casual position. I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_aud: 'Salario/hora AUD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_blue: '💡 DELIVERY HACK: Uber Eats y DoorDash en Sydney o Melbourne pagan $25-35 AUD/hora. Con 48 horas quincenales puedes ganar $1,200-1,680 AUD/quincena. En vacaciones a tiempo completo son $2,400-3,360 AUD/quincena.',
    empleos_hack: 'En Australia muchas empresas valoran actitud, presencia y disponibilidad inmediata. Los primeros CV en aplicar a Seek son los que llaman. Aplica en menos de 10 minutos cuando veas una vacante.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Australia tiene los salarios más altos del blueprint. Salario mínimo $23 AUD/hora ($15.9 USD). Con 48h quincenales (24h/sem promedio) ganas A$1,760-2,880/mes.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Mensual EST. (48h/quincena)',
    salarios_blue: '💡 VACACIONES ACADÉMICAS: Tiempo completo = A$3,520 – $5,600/mes (~$2,429 – $3,864 USD). Un estudiante en delivery a $30 AUD/hora trabajando 40h/semana en vacaciones gana más de $4,800 AUD/mes.',
    salarios_hack: 'Delivery en Australia puede llegar a $35 AUD/hora en Sydney o Melbourne durante horario pico. Con 48h quincenales son $1,680 AUD/quincena. En vacaciones a tiempo completo son $3,360 AUD/quincena.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Australia tiene el proceso pre-partida más complejo (OSHC + visa + CoE) pero el aterrizaje más rápido — cuenta bancaria antes de viajar y TFN en días. Una vez en el país, puedes estar trabajando en 1-2 semanas.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'CoE (Confirmation of Enrolment) + OSHC obligatorio + Student Visa 500 + Commonwealth Bank online', '2-3 meses antes'],
      ['Antes de volar', 'Abrir Commonwealth Bank app + activar tarjeta virtual', '1-2 semanas antes'],
      ['Semana 1', 'SIM card + TFN en ato.gov.au + buscar habitación (Flatmates)', 'Día 1-7'],
      ['Semana 2-3', 'Aplicar en Seek, Indeed y Jora + CV en mano en restaurantes y cafés', 'Día 7-21'],
      ['Mes 2', 'Primer empleo + primer salario + estabilizar 48h quincenales', 'Día 30-60'],
      ['Al graduarte', 'Aplicar Subclass 485 + buscar trabajo cualificado → PR', 'Post-graduación'],
    ],
    timeline_hack: 'El orden en Australia es: Commonwealth Bank (antes de volar) → TFN (semana 1) → trabajo (semana 2-3). Ese proceso optimizado puede tener ingresos fluyendo en menos de un mes — el más rápido de los destinos anglófonos.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Australia es el más rápido de los destinos anglófonos gracias a la apertura bancaria previa al vuelo. Con cuenta activa al llegar y TFN en días, puedes estar trabajando en la segunda semana.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Student Visa 500 activa', 'TFN obtenido (Australian Tax Office)', 'Cuenta bancaria activa (Commonwealth/ANZ)', 'Oferta laboral'],
    hito1_time: '👉 Tiempo real: 1-3 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato o acuerdo laboral', 'Alta en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 2-4 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~1-3 semanas desde que llegas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~2-5 semanas desde llegada',
    salario1_hack: 'Australia paga semanal o quincenal. Con cuenta bancaria abierta antes de volar y TFN en días, este es el proceso más rápido de todos los destinos anglófonos del blueprint.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. Australia tiene un sistema ordenado — sigue el canal correcto y se resuelve rápido. Con OSHC tienes cobertura médica desde el primer día.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '000 — Policía, Ambulancia, Bomberos'],
      ['Home Affairs (Visa)', 'homeaffairs.gov.au — Student Visa y permisos'],
      ['ATO (Impuestos)', 'ato.gov.au — TFN y trámites fiscales'],
      ['Seek (Empleo)', 'seek.com.au — Portal de empleo #1'],
      ['Comunidad L&T', 'Latinos en Sydney, Melbourne, Brisbane — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Australia',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Australia — links próximamente',
    crisis_hack: 'En Australia muchas oportunidades aparecen primero en grupos de estudiantes internacionales y comunidades de Facebook. Únete a grupos de latinos en Sydney y Melbourne desde antes de llegar.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Australia como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Student Visa Subclass 500 (CRICOS)'],
      ['Duración mínima', '24 semanas mínimo para inglés'],
      ['Horas de trabajo', '48 horas quincenales durante estudios'],
      ['Vacaciones académicas', 'Tiempo completo'],
      ['Solvencia obligatoria', '~$15,000 – $16,000 USD (AUD $24,505)'],
      ['Capital total recomendado', '$18,000 – $25,000 USD'],
      ['Student Visa Subclass 500', '~$650 USD (~$1,000 AUD)'],
      ['OSHC (seguro obligatorio)', '$400 – $700 USD/año'],
      ['TFN (para trabajar)', 'Gratis — online en ato.gov.au'],
      ['Cuenta bancaria', 'Commonwealth Bank — puede abrirse ANTES de viajar'],
      ['Renta cuarto compartido', 'A$720 – $1,120/mes'],
      ['Empleos más comunes', 'Hospitality, Retail, Cleaning, Delivery'],
      ['Salario mínimo', '$23 AUD/hora (~$15.9 USD)'],
      ['Salario delivery pico', 'Hasta $35 AUD/hora (~$24 USD)'],
      ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
      ['Post-graduación', 'Temporary Graduate Visa 485 (2-4 años)'],
      ['Camino a PR', 'Subclass 485 → Skilled Migrant → Residencia Permanente'],
      ['Nivel de dificultad', 'Alto'],
      ['Mejores ciudades', 'Sydney, Melbourne, Brisbane, Gold Coast'],
      ['Ventaja única', 'Salarios más altos del blueprint + cuenta bancaria antes de volar'],
    ],
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Armamos tu plan migratorio personalizado con Jimmy.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    feedback_title: '¿Algo desactualizado o una sugerencia?',
    feedback_desc: 'Tu feedback nos ayuda a mantener el blueprint al día.',
    feedback_placeholder: 'Ej: el precio de la escuela X cambió, o me gustaría ver información sobre...',
    feedback_btn: 'Enviar sugerencia',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Austrália',
    hero_sub: 'Oceania · Work and Study',
    hero_badge: 'Alto',
    stat1_label: 'Capital necessário',
    stat1_value: '$18.000 - $25.000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Alto',
    included_title: 'O que inclui o Blueprint',
    included: [
      '48 horas quinzenais de trabalho + período integral nas férias — mais horas que NZ ou Canadá',
      'TFN (Tax File Number) gratuito — chave para trabalhar desde a primeira semana',
      'Você pode abrir Commonwealth Bank ANTES de viajar — conta ativa ao chegar',
      'Temporary Graduate Visa (485): 2-4 anos de trabalho pós-graduação',
      'Salários mais altos do blueprint — $22-35 AUD/hora (~$15-24 USD)',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Austrália tem os salários mais altos do blueprint e o maior número de horas de trabalho permitidas — 48 horas quinzenais durante as aulas e período integral nas férias. O custo é alto, mas o retorno também. Com TFN e conta bancária ativos na primeira semana, você pode estar gerando renda antes do primeiro mês acabar.',
    autoridad_p1_label: 'Student Visa Subclass 500:',
    autoridad_p1_text: 'permite estudar em instituições registradas (CRICOS) e trabalhar',
    autoridad_p1_b: '48 horas quinzenais',
    autoridad_p1_mid: 'durante as aulas e',
    autoridad_p1_b2: 'período integral',
    autoridad_p1_end: 'nas férias acadêmicas.',
    autoridad_p2_label: 'Roteiro:',
    autoridad_p2: 'CoE → Student Visa 500 → TFN → trabalho → Temporary Graduate Visa 485 → Skilled Migrant → PR.',
    autoridad_blue: '💱 Conversão Austrália: 1 AUD ≈ $0,69 USD. A$200 ≈ $138 USD. Salário mínimo $23 AUD/hora ≈ $15,9 USD/hora.',
    autoridad_hack: 'A Austrália permite abrir Commonwealth Bank ANTES de viajar. Isso significa que você chega com conta ativa, cartão pronto e pode receber dinheiro desde o dia 1. Combine isso com TFN na semana 1 e pode estar trabalhando antes do primeiro mês acabar.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Na Austrália a academia se escolhe por localização e conexão laboral. Sydney CBD, Melbourne CBD, Brisbane e Gold Coast são as melhores cidades para conseguir trabalho sendo estudante.',
    estrategia_head: '🇦🇺 Matriz de Escolas de Inglês: Austrália 2026',
    th_inst: 'Instituição', th_ciudad: 'Cidade', th_precio: 'Preço (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvência obrigatória:',
    solvencia1_val: '~$15.000 – $16.000 USD (AUD $24.505) para despesas do primeiro ano',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$18.000 – $25.000 USD (curso + visto + OSHC + despesas iniciais)',
    solvencia3_label: '📍 Melhor estratégia:',
    solvencia3_val: 'Universidades regionais (mais baratas) + Subclass 485 para PR',
    estrategia_hack: 'Brisbane e Gold Coast têm custos de vida 20-30% mais baixos que Sydney ou Melbourne com as mesmas oportunidades de trabalho. Escolha localização com transporte público próximo — multiplica suas opções de emprego.',
    sec_pre_title: 'VET Diplomas & Career Programs',
    pre_intro: 'Os programas VET (Vocational Education and Training) são mais curtos e econômicos que universidades. Ao completar um Diploma ou Advanced Diploma elegível, você acessa a Temporary Graduate Visa 485 para trabalhar em período integral pós-graduação.',
    th_programa: 'Programa', th_institucion: 'Instituição', th_inversion: 'Investimento',
    pre_blue: '🔵 TEMPORARY GRADUATE VISA 485: Ao se formar em programa elegível você pode solicitar a Subclass 485 — 2 a 4 anos de trabalho em período integral na Austrália. Com essa experiência você solicita Skilled Migrant Category para PR.',
    pre_hack: 'Os Diplomas VET são a entrada mais econômica no sistema educacional australiano. $6.500-9.000 vs $15.000+ em universidades. Mesma qualificação para a Subclass 485. A diferença de custo pode ser de $8.000-10.000 AUD.',
    sec_edu_title: 'Ensino Superior — Universidades Regionais',
    edu_intro: 'As universidades regionais da Austrália são mais baratas, têm menos concorrência e mais oportunidades de trabalho para estudantes. Ao se formar você se qualifica para a Subclass 485.',
    th_nivel: 'Nível', th_programa_col: 'Programa', th_precio_anual: 'Preço/ano AUD',
    edu_blue: '💰 HACK REGIÕES: Universidades fora de Sydney ou Melbourne têm mensalidades 20-30% mais baixas, menos concorrência e mais trabalho disponível. Com Subclass 485 você tem 2-4 anos de trabalho em período integral para chegar ao PR.',
    edu_hack: 'University of Southern Queensland e Federation University são das mais acessíveis para latino-americanos. Seus programas se qualificam para a Subclass 485. Custo de vida fora das grandes cidades também é 30-40% mais baixo.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'A Austrália tem o OSHC (Overseas Student Health Cover) como seguro médico obrigatório — é diferente do seguro médico normal. Sem OSHC seu visto não é aprovado.',
    th_concepto: 'Conceito', th_costo: 'Custo USD', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA: ~$15.000 – $16.000 USD (AUD $24.505) para despesas do primeiro ano. O OSHC é separado e também obrigatório — sem ele não há visto.',
    gastos_hack: 'Capital real = preço do curso + $650 visto + $500 OSHC + solvência. Total $18.000-25.000 USD. É o destino mais caro junto com o Canadá, mas com os salários mais altos.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'A Austrália tem o processo de chegada mais flexível do blueprint — você pode abrir conta bancária antes de viajar. TFN + banco são as duas prioridades da primeira semana.',
    student_visa_head: '1. Student Visa 500 — Sua permissão de estudo na Austrália',
    pasos: [
      ['Passo 1', 'Abra Commonwealth Bank ANTES de viajar — permite abertura online antes do voo', 'https://commbank.com.au'],
      ['Passo 2', 'Entrada com Student Visa 500 — apresente passaporte + CoE no aeroporto', null],
      ['Passo 3', 'TFN gratuito em ato.gov.au — solicite online, chega em poucos dias', 'https://ato.gov.au'],
      ['Passo 4', 'SIM card (Telstra/Optus/Vodafone) + buscar quarto permanente (Flatmates)', null],
    ],
    visa485_head: '2. Temporary Graduate Visa 485 (após se formar)',
    visa485_items: [
      ['Você solicita após se formar — 2 a 4 anos de trabalho em período integral na Austrália', null],
      ['Com experiência acumulada você solicita Skilled Migrant Category para PR', null],
      ['Portal oficial Department of Home Affairs para todos os trâmites migratórios', 'https://homeaffairs.gov.au'],
    ],
    aterrizaje_hack: 'Na Austrália o TFN é o documento chave para trabalhar. Sem TFN os empregadores retêm impostos muito altos do seu salário. É gratuito e se solicita online em ato.gov.au. Banco + TFN na semana 1 = empregável na semana 2-3.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'A Austrália tem a vantagem única de que você pode abrir Commonwealth Bank ANTES de viajar. Você chega com conta ativa e cartão pronto. Com conta aberta, o TFN chega em dias.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Commonwealth Bank antes de viajar — é o único banco principal da Austrália que permite abertura online antes do voo. Você chega com conta ativa, cartão pronto e pode receber dinheiro desde o dia 1.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais para seu processo na Austrália. ATO para o TFN. Home Affairs para o visto. Seek é o portal de emprego #1 do país.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Seek é o LinkedIn da Austrália para trabalhos entry-level. Aplique em menos de 10 minutos quando ver uma vaga — as empresas australianas revisam primeiro os CVs que chegam mais rápido.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'Sydney e Melbourne têm os aluguéis mais altos — um quarto compartilhado pode custar $280-350 AUD/semana. Brisbane, Gold Coast e cidades regionais são 20-40% mais baratas com as mesmas oportunidades.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal AUD', th_mes: 'Preço Mensal AUD', th_usd_mes: '≈ USD/mês',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. Na Austrália também existem golpes em anúncios de aluguel online. Nunca envie dinheiro sem ter visitado fisicamente.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Os quartos na Austrália são alugados muito rápido. Se ver algo no Flatmates ou Facebook, escreva imediatamente. Considere Brisbane ou Gold Coast — 20-30% mais barato e muito trabalho em turismo e hotelaria.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'A Austrália tem os salários mais altos do blueprint — $22-35 AUD/hora. Com 48 horas quinzenais (24h/semana em média) você pode ganhar $1.760-2.880 AUD/mês.',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'Caminhe por cafés, restaurantes e lojas em zonas comerciais. Diga:',
    empleos_cv_quote: '"I\'m looking for a casual position. I have immediate availability."',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_aud: 'Salário/hora AUD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_blue: '💡 DELIVERY HACK: Uber Eats e DoorDash em Sydney ou Melbourne pagam $25-35 AUD/hora. Com 48 horas quinzenais você pode ganhar $1.200-1.680 AUD/quinzena. Nas férias em período integral são $2.400-3.360 AUD/quinzena.',
    empleos_hack: 'Na Austrália muitas empresas valorizam atitude, presença e disponibilidade imediata. Os primeiros CVs a chegar no Seek são os que chamam. Aplique em menos de 10 minutos quando ver uma vaga.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'A Austrália tem os salários mais altos do blueprint. Salário mínimo $23 AUD/hora ($15,9 USD). Com 48h quinzenais (24h/sem em média) você ganha A$1.760-2.880/mês.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Mensal EST. (48h/quinzena)',
    salarios_blue: '💡 FÉRIAS ACADÊMICAS: Período integral = A$3.520 – $5.600/mês (~$2.429 – $3.864 USD). Um estudante em delivery a $30 AUD/hora trabalhando 40h/semana nas férias ganha mais de $4.800 AUD/mês.',
    salarios_hack: 'Delivery na Austrália pode chegar a $35 AUD/hora em Sydney ou Melbourne no horário de pico. Com 48h quinzenais são $1.680 AUD/quinzena. Nas férias em período integral são $3.360 AUD/quinzena.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'A Austrália tem o processo pré-partida mais complexo (OSHC + visto + CoE) mas a chegada mais rápida — conta bancária antes de viajar e TFN em dias. Uma vez no país, você pode estar trabalhando em 1-2 semanas.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'CoE (Confirmation of Enrolment) + OSHC obrigatório + Student Visa 500 + Commonwealth Bank online', '2-3 meses antes'],
      ['Antes de voar', 'Abrir Commonwealth Bank app + ativar cartão virtual', '1-2 semanas antes'],
      ['Semana 1', 'SIM card + TFN em ato.gov.au + buscar quarto (Flatmates)', 'Dia 1-7'],
      ['Semana 2-3', 'Aplicar no Seek, Indeed e Jora + CV pessoalmente em restaurantes e cafés', 'Dia 7-21'],
      ['Mês 2', 'Primeiro emprego + primeiro salário + estabilizar 48h quinzenais', 'Dia 30-60'],
      ['Ao se formar', 'Solicitar Subclass 485 + buscar trabalho qualificado → PR', 'Pós-graduação'],
    ],
    timeline_hack: 'A ordem na Austrália é: Commonwealth Bank (antes de voar) → TFN (semana 1) → trabalho (semana 2-3). Esse processo otimizado pode ter renda fluindo em menos de um mês — o mais rápido dos destinos anglófonos.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'A Austrália é a mais rápida dos destinos anglófonos graças à abertura bancária antes do voo. Com conta ativa ao chegar e TFN em dias, você pode estar trabalhando na segunda semana.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Student Visa 500 ativa', 'TFN obtido (Australian Tax Office)', 'Conta bancária ativa (Commonwealth/ANZ)', 'Oferta de trabalho'],
    hito1_time: '👉 Tempo real: 1-3 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato ou acordo de trabalho', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 2-4 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~1-3 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~2-5 semanas desde chegada',
    salario1_hack: 'A Austrália paga semanal ou quinzenal. Com conta bancária aberta antes de voar e TFN em dias, este é o processo mais rápido de todos os destinos anglófonos do blueprint.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. A Austrália tem um sistema ordenado — siga o canal correto e se resolve rápido. Com OSHC você tem cobertura médica desde o primeiro dia.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '000 — Polícia, Ambulância, Bombeiros'],
      ['Home Affairs (Visto)', 'homeaffairs.gov.au — Student Visa e permissões'],
      ['ATO (Impostos)', 'ato.gov.au — TFN e trâmites fiscais'],
      ['Seek (Emprego)', 'seek.com.au — Portal de emprego #1'],
      ['Comunidade L&T', 'Latinos em Sydney, Melbourne, Brisbane — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Austrália',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na Austrália — links em breve',
    crisis_hack: 'Na Austrália muitas oportunidades aparecem primeiro em grupos de estudantes internacionais e comunidades do Facebook. Entre em grupos de latinos em Sydney e Melbourne antes de chegar.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Austrália como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Student Visa Subclass 500 (CRICOS)'],
      ['Duração mínima', '24 semanas mínimo para inglês'],
      ['Horas de trabalho', '48 horas quinzenais durante estudos'],
      ['Férias acadêmicas', 'Período integral'],
      ['Solvência obrigatória', '~$15.000 – $16.000 USD (AUD $24.505)'],
      ['Capital total recomendado', '$18.000 – $25.000 USD'],
      ['Student Visa Subclass 500', '~$650 USD (~$1.000 AUD)'],
      ['OSHC (seguro obrigatório)', '$400 – $700 USD/ano'],
      ['TFN (para trabalhar)', 'Gratuito — online em ato.gov.au'],
      ['Conta bancária', 'Commonwealth Bank — pode ser aberta ANTES de viajar'],
      ['Aluguel quarto compartilhado', 'A$720 – $1.120/mês'],
      ['Empregos mais comuns', 'Hotelaria, Varejo, Limpeza, Delivery'],
      ['Salário mínimo', '$23 AUD/hora (~$15,9 USD)'],
      ['Salário delivery pico', 'Até $35 AUD/hora (~$24 USD)'],
      ['Tempo até primeiro trabalho', '1-3 semanas desde chegada'],
      ['Pós-graduação', 'Temporary Graduate Visa 485 (2-4 anos)'],
      ['Caminho para PR', 'Subclass 485 → Skilled Migrant → Residência Permanente'],
      ['Nível de dificuldade', 'Alto'],
      ['Melhores cidades', 'Sydney, Melbourne, Brisbane, Gold Coast'],
      ['Vantagem única', 'Salários mais altos do blueprint + conta bancária antes de voar'],
    ],
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Montamos seu plano migratório personalizado com Jimmy.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    feedback_title: 'Algo desatualizado ou uma sugestão?',
    feedback_desc: 'Seu feedback nos ajuda a manter o blueprint atualizado.',
    feedback_placeholder: 'Ex: o preço da escola X mudou, ou gostaria de ver informações sobre...',
    feedback_btn: 'Enviar sugestão',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Australia',
    hero_sub: 'Oceania · Work and Study',
    hero_badge: 'High',
    stat1_label: 'Required Capital',
    stat1_value: '$18,000 - $25,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'High',
    included_title: 'What the Blueprint Includes',
    included: [
      '48 fortnightly hours of work + full time during holidays — more hours than NZ or Canada',
      'Free TFN (Tax File Number) — key to working from the first week',
      'You can open Commonwealth Bank BEFORE traveling — active account on arrival',
      'Temporary Graduate Visa (485): 2-4 years of post-graduation work',
      'Highest salaries in the blueprint — $22-35 AUD/hour (~$15-24 USD)',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Australia has the highest salaries in the blueprint and the most work hours allowed — 48 fortnightly hours during classes and full time during holidays. The cost is high, but so is the return. With TFN and bank account active in the first week, you can be generating income before the first month ends.',
    autoridad_p1_label: 'Student Visa Subclass 500:',
    autoridad_p1_text: 'study at registered institutions (CRICOS) and work',
    autoridad_p1_b: '48 fortnightly hours',
    autoridad_p1_mid: 'during classes and',
    autoridad_p1_b2: 'full time',
    autoridad_p1_end: 'during academic holidays.',
    autoridad_p2_label: 'Roadmap:',
    autoridad_p2: 'CoE → Student Visa 500 → TFN → work → Temporary Graduate Visa 485 → Skilled Migrant → PR.',
    autoridad_blue: '💱 Australia conversion: 1 AUD ≈ $0.69 USD. A$200 ≈ $138 USD. Minimum wage $23 AUD/hour ≈ $15.9 USD/hour.',
    autoridad_hack: 'Australia allows you to open Commonwealth Bank BEFORE traveling. That means you arrive with an active account, card ready and can receive money from day 1. Combine this with TFN in week 1 and you can be working before the first month ends.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'In Australia the school is chosen by location and job connection. Sydney CBD, Melbourne CBD, Brisbane and Gold Coast are the best cities to find work as a student.',
    estrategia_head: '🇦🇺 English Schools Matrix: Australia 2026',
    th_inst: 'Institution', th_ciudad: 'City', th_precio: 'Price (24 weeks)', th_web: 'Website',
    solvencia1_label: '🔴 Mandatory funds:',
    solvencia1_val: '~$15,000 – $16,000 USD (AUD $24,505) for first year expenses',
    solvencia2_label: '🟢 Total recommended capital:',
    solvencia2_val: '$18,000 – $25,000 USD (course + visa + OSHC + initial costs)',
    solvencia3_label: '📍 Best strategy:',
    solvencia3_val: 'Regional universities (cheaper) + Subclass 485 for PR',
    estrategia_hack: 'Brisbane and Gold Coast have living costs 20-30% lower than Sydney or Melbourne with the same job opportunities. Choose a location near public transport — it multiplies your employment options.',
    sec_pre_title: 'VET Diplomas & Career Programs',
    pre_intro: 'VET (Vocational Education and Training) programs are shorter and more affordable than universities. Upon completing an eligible Diploma or Advanced Diploma, you access the Temporary Graduate Visa 485 to work full time post-graduation.',
    th_programa: 'Program', th_institucion: 'Institution', th_inversion: 'Investment',
    pre_blue: '🔵 TEMPORARY GRADUATE VISA 485: Upon graduating from an eligible program you can apply for Subclass 485 — 2 to 4 years of full-time work in Australia. With that experience you apply for Skilled Migrant Category for PR.',
    pre_hack: 'VET Diplomas are the most affordable entry into the Australian education system. $6,500-9,000 vs $15,000+ at universities. Same qualification for Subclass 485. The cost difference can be $8,000-10,000 AUD.',
    sec_edu_title: 'Higher Education — Regional Universities',
    edu_intro: 'Regional universities in Australia are cheaper, have less competition and more job opportunities for students. Upon graduating you qualify for Subclass 485.',
    th_nivel: 'Level', th_programa_col: 'Program', th_precio_anual: 'Price/year AUD',
    edu_blue: '💰 REGIONAL HACK: Universities outside Sydney or Melbourne have tuition fees 20-30% lower, less competition and more available work. With Subclass 485 you have 2-4 years of full-time work to reach PR.',
    edu_hack: 'University of Southern Queensland and Federation University are among the most accessible for Latin Americans. Their programs qualify for Subclass 485. Cost of living outside major cities is also 30-40% lower.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'Australia has OSHC (Overseas Student Health Cover) as mandatory health insurance — it\'s different from regular health insurance. Without OSHC your visa won\'t be approved.',
    th_concepto: 'Item', th_costo: 'Cost USD', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS: ~$15,000 – $16,000 USD (AUD $24,505) for first year expenses. OSHC is separate and also mandatory — without it there\'s no visa.',
    gastos_hack: 'Real capital = course price + $650 visa + $500 OSHC + funds. Total $18,000-25,000 USD. The most expensive destination alongside Canada, but with the highest salaries.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'Australia has the most flexible landing process in the blueprint — you can open a bank account before traveling. TFN + bank are the two priorities of the first week.',
    student_visa_head: '1. Student Visa 500 — Your study permit in Australia',
    pasos: [
      ['Step 1', 'Open Commonwealth Bank BEFORE traveling — allows online opening before flight', 'https://commbank.com.au'],
      ['Step 2', 'Entry with Student Visa 500 — present passport + CoE at airport', null],
      ['Step 3', 'Free TFN at ato.gov.au — apply online, arrives in a few days', 'https://ato.gov.au'],
      ['Step 4', 'SIM card (Telstra/Optus/Vodafone) + find permanent room (Flatmates)', null],
    ],
    visa485_head: '2. Temporary Graduate Visa 485 (after graduating)',
    visa485_items: [
      ['Apply after graduating — 2 to 4 years of full-time work in Australia', null],
      ['With accumulated experience apply for Skilled Migrant Category for PR', null],
      ['Official Department of Home Affairs portal for all migration procedures', 'https://homeaffairs.gov.au'],
    ],
    aterrizaje_hack: 'In Australia the TFN is the key document to work. Without TFN employers withhold very high taxes from your salary. It\'s free and applied for online at ato.gov.au. Bank + TFN in week 1 = employable in week 2-3.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Australia has the unique advantage that you can open Commonwealth Bank BEFORE traveling. You arrive with an active account and card ready. With account open, TFN arrives in days and you can start working.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Commonwealth Bank before traveling — it\'s the only major Australian bank that allows online opening before the flight. You arrive with an active account, card ready and can receive money from day 1.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Official portals for your process in Australia. ATO for TFN. Home Affairs for visa. Seek is the #1 employment portal in the country.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'Seek is the LinkedIn of Australia for entry-level jobs. Apply in less than 10 minutes when you see a vacancy — Australian companies review the first CVs that arrive fastest. Set up alerts before arriving.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Sydney and Melbourne have the highest rents — a shared room can cost $280-350 AUD/week. Brisbane, Gold Coast and regional cities are 20-40% cheaper with the same job opportunities.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price AUD', th_mes: 'Monthly Price AUD', th_usd_mes: '≈ USD/month',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. Online rental scams also exist in Australia. Never send money without having physically visited the room.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'Rooms in Australia are rented very quickly. If you see something on Flatmates or Facebook, write immediately. Consider Brisbane or Gold Coast — 20-30% cheaper and lots of work in tourism and hospitality.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'Australia has the highest salaries in the blueprint — $22-35 AUD/hour. With 48 fortnightly hours (24h/week average) you can earn $1,760-2,880 AUD/month.',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'Walk through cafés, restaurants and shops in commercial areas. Say:',
    empleos_cv_quote: '"I\'m looking for a casual position. I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_aud: 'Wage/hour AUD', th_usd_h: '≈ USD/hour', th_canal_emp: 'Channel',
    empleos_blue: '💡 DELIVERY HACK: Uber Eats and DoorDash in Sydney or Melbourne pay $25-35 AUD/hour. With 48 fortnightly hours you can earn $1,200-1,680 AUD/fortnight. During academic holidays full time that\'s $2,400-3,360 AUD/fortnight.',
    empleos_hack: 'In Australia many companies value attitude, presence and immediate availability. The first CVs to arrive on Seek are the ones they call. Apply in less than 10 minutes when you see a vacancy.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Australia has the highest salaries in the blueprint. Minimum wage $23 AUD/hour ($15.9 USD). With 48 fortnightly hours (24h/week average) you earn A$1,760-2,880/month.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Monthly EST. (48h/fortnight)',
    salarios_blue: '💡 ACADEMIC HOLIDAYS: Full time = A$3,520 – $5,600/month (~$2,429 – $3,864 USD). A student in delivery at $30 AUD/hour working 40h/week during holidays earns more than $4,800 AUD/month.',
    salarios_hack: 'Delivery in Australia can reach $35 AUD/hour in Sydney or Melbourne during peak hours. With 48 fortnightly hours that\'s $1,680 AUD/fortnight. During academic holidays full time that\'s $3,360 AUD/fortnight.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Australia has the most complex pre-departure process (OSHC + visa + CoE) but the fastest landing — bank account before traveling and TFN in days. Once in the country, you can be working in 1-2 weeks.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'CoE (Confirmation of Enrolment) + mandatory OSHC + Student Visa 500 + Commonwealth Bank online', '2-3 months before'],
      ['Before flying', 'Open Commonwealth Bank app + activate virtual card', '1-2 weeks before'],
      ['Week 1', 'SIM card + TFN at ato.gov.au + find room (Flatmates)', 'Day 1-7'],
      ['Week 2-3', 'Apply on Seek, Indeed and Jora + CV in hand at restaurants and cafés', 'Day 7-21'],
      ['Month 2', 'First job + first salary + stabilize 48 fortnightly hours', 'Day 30-60'],
      ['Upon graduating', 'Apply Subclass 485 + look for skilled work → PR', 'Post-graduation'],
    ],
    timeline_hack: 'The order in Australia is: Commonwealth Bank (before flying) → TFN (week 1) → work (week 2-3). That optimized process can have income flowing in less than a month — the fastest of the English-speaking destinations.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'Australia is the fastest of the English-speaking destinations thanks to pre-flight bank account opening. With an active account on arrival and TFN in days, you can be working in the second week.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active Student Visa 500', 'TFN obtained (Australian Tax Office)', 'Active bank account (Commonwealth/ANZ)', 'Job offer'],
    hito1_time: '👉 Real timeline: 1-3 weeks from arrival',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Employment contract or agreement', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 2-4 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~1-3 weeks from arrival',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~2-5 weeks from arrival',
    salario1_hack: 'Australia pays weekly or fortnightly. With bank account opened before flying and TFN in days, this is the fastest process of all English-speaking destinations in the blueprint.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. Australia has an orderly system — follow the correct channel and it resolves quickly. With OSHC you have medical coverage from day one.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '000 — Police, Ambulance, Fire'],
      ['Home Affairs (Visa)', 'homeaffairs.gov.au — Student Visa and permits'],
      ['ATO (Tax)', 'ato.gov.au — TFN and tax procedures'],
      ['Seek (Jobs)', 'seek.com.au — #1 employment portal'],
      ['L&T Community', 'Latinos in Sydney, Melbourne, Brisbane — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Australia',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Australia — links coming soon',
    crisis_hack: 'In Australia many opportunities appear first in international student groups and Facebook communities. Join Latino groups in Sydney and Melbourne before arriving.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Australia as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa Subclass 500 (CRICOS)'],
      ['Minimum duration', '24 weeks minimum for English'],
      ['Work hours', '48 fortnightly hours during studies'],
      ['Academic holidays', 'Full time'],
      ['Mandatory funds', '~$15,000 – $16,000 USD (AUD $24,505)'],
      ['Total recommended capital', '$18,000 – $25,000 USD'],
      ['Student Visa Subclass 500', '~$650 USD (~$1,000 AUD)'],
      ['OSHC (mandatory insurance)', '$400 – $700 USD/year'],
      ['TFN (to work)', 'Free — online at ato.gov.au'],
      ['Bank account', 'Commonwealth Bank — can be opened BEFORE traveling'],
      ['Shared room rent', 'A$720 – $1,120/month'],
      ['Most common jobs', 'Hospitality, Retail, Cleaning, Delivery'],
      ['Minimum wage', '$23 AUD/hour (~$15.9 USD)'],
      ['Peak delivery wage', 'Up to $35 AUD/hour (~$24 USD)'],
      ['Time to first job', '1-3 weeks from arrival'],
      ['Post-graduation', 'Temporary Graduate Visa 485 (2-4 years)'],
      ['Path to PR', 'Subclass 485 → Skilled Migrant → Permanent Residency'],
      ['Difficulty level', 'High'],
      ['Best cities', 'Sydney, Melbourne, Brisbane, Gold Coast'],
      ['Unique advantage', 'Highest salaries in blueprint + bank account before flying'],
    ],
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We build your personalized migration plan with Jimmy.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    feedback_title: 'Something outdated or a suggestion?',
    feedback_desc: 'Your feedback helps us keep the blueprint up to date.',
    feedback_placeholder: 'E.g.: the price of school X changed, or I would like to see information about...',
    feedback_btn: 'Send suggestion',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

export default function Australia() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
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
    link: { color: '#2563eb', textDecoration: 'underline' as const, cursor: 'pointer' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }
  const Link = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )
  const Section = ({ id, emoji, title, children, free = false }: any) => (
    <div style={{ border: free ? '2px solid #e8572a' : '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇦🇺</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#ef4444', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>{t.hero_badge}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', t.stat1_label, t.stat1_value], ['🕐', t.stat2_label, t.stat2_value], ['📊', t.stat3_label, t.stat3_value]].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#555555', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px', color: '#1a1a2e' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      <div style={{ margin: '0 20px 16px', backgroundColor: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '10px', fontSize: '15px', color: '#1a1a2e' }}>{t.included_title}</h3>
        {t.included.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span style={{ color: '#22c55e', fontSize: '16px', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '13px', color: '#1a1a2e', lineHeight: '1.5' }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px' }}>
        <Section id="autoridad" emoji="🧭" title={t.sec_autoridad_title} free={true}>
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1666983888610-2362b2433009?q=80&w=764&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.autoridad_p1_label}</strong> {t.autoridad_p1_text} <strong>{t.autoridad_p1_b}</strong> {t.autoridad_p1_mid} <strong>{t.autoridad_p1_b2}</strong> {t.autoridad_p1_end}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.autoridad_p2_label}</strong> {t.autoridad_p2}
          </p>
          <BlueBox text={t.autoridad_blue} />
          <HackBox text={t.autoridad_hack} />
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

        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />
          <SubHead text={t.estrategia_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_ciudad, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ILSC Language Schools', 'Sydney / Melbourne', '$3,000 – $4,500', 'ilsc.com', 'https://ilsc.com'],
                  ['Greenwich College', 'Sydney / Melbourne', '$3,200 – $4,800', 'greenwichcollege.edu.au', 'https://greenwichcollege.edu.au'],
                  ['Browns English', 'Brisbane / Gold Coast', '$3,600 – $5,000', 'brownsenglish.edu.au', 'https://brownsenglish.edu.au'],
                  ['Navitas English', 'Varias ciudades', '$3,500 – $5,000', 'navitasenglish.edu.au', 'https://navitasenglish.edu.au'],
                  ['Kaplan International', 'Sydney', '$3,800 – $5,200', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6', color: '#1a1a2e' }}>
              <strong>{t.solvencia1_label}</strong> {t.solvencia1_val}<br />
              <strong>{t.solvencia2_label}</strong> {t.solvencia2_val}<br />
              <strong>{t.solvencia3_label}</strong> {t.solvencia3_val}
            </p>
          </div>
          <HackBox text={t.estrategia_hack} />
        </Section>

        <Section id="pre" emoji="🚀" title={t.sec_pre_title}>
          <Intro text={t.pre_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_programa, t.th_institucion, t.th_inversion, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Diploma of Business', 'Nova Vocational College', '$6,500 – $7,500', 'nvc.edu.au', 'https://nvc.edu.au'],
                  ['Diploma of Leadership & Management', 'Australian Institute of Advanced Studies', '$7,000 – $8,500', 'aias.edu.au', 'https://aias.edu.au'],
                  ['Diploma of Marketing & Communication', 'Pacific Training Group', '$7,500 – $9,000', 'ptg.edu.au', 'https://ptg.edu.au'],
                  ['Diploma of Hospitality Management', 'AIBT Global', '$9,000 – $13,000', 'aibtglobal.edu.au', 'https://aibtglobal.edu.au'],
                  ['Diploma of Information Technology', 'TAFE Australia', '$10,000 – $14,000', 'tafe.edu.au', 'https://tafe.edu.au'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text={t.pre_blue} />
          <HackBox text={t.pre_hack} />
        </Section>

        <Section id="edu" emoji="🎓" title={t.sec_edu_title}>
          <Intro text={t.edu_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_nivel, t.th_programa_col, t.th_precio_anual, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Southern Queensland', 'Bachelor / Master', 'Business / IT / Engineering', '$15,000 – $18,000', 'usq.edu.au', 'https://usq.edu.au'],
                  ['Charles Sturt University', 'Bachelor / Master', 'Business / Education / IT', '$16,000 – $19,000', 'csu.edu.au', 'https://csu.edu.au'],
                  ['Federation University Australia', 'Bachelor / Master', 'Business / Engineering / Nursing', '$16,000 – $20,000', 'federation.edu.au', 'https://federation.edu.au'],
                  ['Southern Cross University', 'Bachelor / Master', 'Business / Tourism / IT', '$17,000 – $21,000', 'scu.edu.au', 'https://scu.edu.au'],
                  ['University of the Sunshine Coast', 'Bachelor / Master', 'Business / Communication / IT', '$18,000 – $22,000', 'usc.edu.au', 'https://usc.edu.au'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}><Link text={r[4] as string} url={r[5] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text={t.edu_blue} />
          <HackBox text={t.edu_hack} />
        </Section>

        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <Intro text={t.gastos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['OSHC (Overseas Student Health Cover)', '$400 – $700/año', '✅ Sí — obligatorio para visa'],
                  ['Student Visa Subclass 500', '~$650 USD (~$1,000 AUD)', '✅ Sí'],
                  ['Exámenes médicos para visa', '$200 – $350', '✅ Si requerido'],
                  ['Materiales / Libros', '$100 – $300', '✅ Sí'],
                  ['Biométricos o traducción de documentos', '$50 – $150', '✅ Si requerido'],
                  ['TFN (Tax File Number)', 'Gratis', '✅ Para trabajar legalmente'],
                  ['Solvencia obligatoria (primer año)', '~$15,000 – $16,000 USD', '✅ Obligatorio visa'],
                  ['Capital total recomendado', '$18,000 – $25,000 USD', '✅ Para arrancar bien'],
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
          <RedBox text={t.gastos_red} />
          <HackBox text={t.gastos_hack} />
        </Section>

        <Section id="aterrizaje" emoji="🏦" title={t.sec_aterrizaje_title}>
          <Intro text={t.aterrizaje_intro} />
          <SubHead text={t.student_visa_head} />
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6', color: '#1a1a2e' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.visa485_head} />
          {t.visa485_items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span style={{ color: '#1a1a2e' }}>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text={t.aterrizaje_hack} />
        </Section>

        <Section id="bancos" emoji="📊" title={t.sec_bancos_title}>
          <Intro text={t.bancos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_entidad, t.th_tipo, t.th_ventaja, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Commonwealth Bank', 'Tradicional', 'El más usado. Permite apertura ANTES de viajar desde app. El #1 recomendado.', 'commbank.com.au', 'https://commbank.com.au'],
                  ['ANZ Bank Australia', 'Tradicional', 'Muy popular entre estudiantes. Buena app bancaria.', 'anz.com.au', 'https://anz.com.au'],
                  ['NAB (National Australia Bank)', 'Tradicional', 'Cuenta para estudiantes sin comisión. Fácil apertura con visa.', 'nab.com.au', 'https://nab.com.au'],
                  ['Westpac', 'Tradicional', 'Amplia red de cajeros. Buen soporte para estudiantes internacionales.', 'westpac.com.au', 'https://westpac.com.au'],
                  ['Wise', 'Digital', 'Cuenta multi-moneda para transferencias internacionales baratas.', 'wise.com', 'https://wise.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.bancos_hack} />
        </Section>

        <Section id="webs" emoji="🔗" title={t.sec_webs_title}>
          <Intro text={t.webs_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_portal, t.th_para_que, t.th_cuando, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ATO (Australian Tax Office)', 'TFN (Tax File Number) para trabajar', 'Semana 1 — prioritario', 'ato.gov.au', 'https://ato.gov.au'],
                  ['Department of Home Affairs', 'Student Visa y trámites migratorios', 'Antes de viajar + seguimiento', 'homeaffairs.gov.au', 'https://homeaffairs.gov.au'],
                  ['Seek Australia', 'Portal de empleo #1 en Australia', 'Desde semana 1', 'seek.com.au', 'https://seek.com.au'],
                  ['Indeed Australia', 'Vacantes de todo tipo', 'Desde semana 1', 'au.indeed.com', 'https://au.indeed.com'],
                  ['Jora Jobs', 'Vacantes rápidas para estudiantes', 'Desde semana 1', 'au.jora.com', 'https://au.jora.com'],
                  ['Gumtree Jobs', 'Trabajos casuales y temporales', 'Desde semana 1', 'gumtree.com.au', 'https://gumtree.com.au'],
                  ['Backpacker Job Board', 'Hospitality y trabajos para estudiantes', 'Desde semana 1', 'backpackerjobboard.com.au', 'https://backpackerjobboard.com.au'],
                  ['Flatmates', 'Portal #1 para habitaciones compartidas', 'Semana 1 para vivienda', 'flatmates.com.au', 'https://flatmates.com.au'],
                  ['Domain / Realestate', 'Alquileres y apartamentos', 'Semana 1 para vivienda', 'domain.com.au', 'https://domain.com.au'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.webs_hack} />
        </Section>

        <Section id="vivienda" emoji="🏠" title={t.sec_vivienda_title}>
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1706517229833-f41d68aae8ff?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes, t.th_usd_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', 'A$180 – $280', 'A$720 – $1,120', '$497 – $773'],
                  ['Cuarto individual', 'A$300 – $450', 'A$1,200 – $1,800', '$828 – $1,242'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <RedBox text={t.vivienda_red} />
          <SubHead text={t.vivienda_canales_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_canal, t.th_tipo, t.th_estrategia_col, t.th_acceso].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Flatmates', 'Portal #1 habitaciones', 'El más usado por estudiantes internacionales en Australia', 'flatmates.com.au', 'https://flatmates.com.au'],
                  ['Domain', 'Portal inmobiliario', 'Plataforma grande para alquileres y apartamentos', 'domain.com.au', 'https://domain.com.au'],
                  ['Realestate.com.au', 'Portal inmobiliario', 'Portal profesional con propiedades verificadas', 'realestate.com.au', 'https://realestate.com.au'],
                  ['Facebook Marketplace', 'Clasificados', 'Estudiantes suben habitaciones y subarriendos', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Sydney, Melbourne, Brisbane', 'Ver grupos', '#'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Link text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.vivienda_hack} />
        </Section>

        <Section id="empleos" emoji="🛠️" title={t.sec_empleos_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526958977630-bc61b30a2009?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <em>{t.empleos_cv_quote}</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_aud, t.th_usd_h, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff / Kitchen Hand', '$22 – $30 AUD', '$15.2 – $20.7', 'Seek / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $30 AUD', '$15.9 – $20.7', 'Gumtree / Indeed'],
                  ['Hotels', 'Reception / Hotel Staff', '$24 – $32 AUD', '$16.6 – $22.1', 'Seek / hoteles directos'],
                  ['Retail', 'Sales Assistant', '$23 – $30 AUD', '$15.9 – $20.7', 'Seek / malls directos'],
                  ['Delivery', 'Rider / Courier', '$25 – $35 AUD', '$17.3 – $24.2', 'Uber Eats / DoorDash'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text={t.empleos_blue} />
          <HackBox text={t.empleos_hack} />
        </Section>

        <Section id="salarios" emoji="📊" title={t.sec_salarios_title}>
          <Intro text={t.salarios_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_salario_aud, t.th_usd_h, t.th_mensual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$22 – $30 AUD', '$15.2 – $20.7', 'A$1,760 – $2,400'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $30 AUD', '$15.9 – $20.7', 'A$1,840 – $2,400'],
                  ['Hotels', 'Reception / Hotel Staff', '$24 – $32 AUD', '$16.6 – $22.1', 'A$1,920 – $2,560'],
                  ['Retail', 'Sales Assistant', '$23 – $30 AUD', '$15.9 – $20.7', 'A$1,840 – $2,400'],
                  ['Delivery', 'Rider / Courier', '$25 – $35 AUD', '$17.3 – $24.2', 'A$2,000 – $2,800'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text={t.salarios_blue} />
          <HackBox text={t.salarios_hack} />
        </Section>

        <Section id="timeline" emoji="⏳" title={t.sec_timeline_title}>
          <Intro text={t.timeline_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_fase, t.th_que_hacer, t.th_tiempo].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.timeline_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold, color: '#e8572a', whiteSpace: 'nowrap' as const }}>{r[0]}</td>
                    <td style={{ ...T.td(i), lineHeight: '1.6' }}>{r[1]}</td>
                    <td style={{ ...T.td(i), fontWeight: '600', whiteSpace: 'nowrap' as const, color: '#166534' }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.timeline_hack} />
        </Section>

        <Section id="salario1" emoji="⏳" title={t.sec_salario1_title}>
          <Intro text={t.salario1_intro} />
          <div style={{ display: 'grid', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '16px', border: '1px solid #86efac' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166534', margin: '0 0 10px' }}>{t.hito1_title}</p>
              {t.hito1_items.map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>{t.hito1_time}</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>{t.hito2_title}</p>
              {t.hito2_items.map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>{t.hito2_time}</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7', color: '#1a1a2e' }}>
              <strong>{t.resumen_label}</strong><br />
              • {t.resumen1} <strong>{t.resumen1_b}</strong><br />
              • {t.resumen2} <strong>{t.resumen2_b}</strong>
            </p>
          </div>
          <HackBox text={t.salario1_hack} />
        </Section>

        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <Intro text={t.crisis_intro} />
          <SubHead text={t.crisis_emergencias_head} />
          {t.crisis_contactos.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', fontWeight: '700', flexShrink: 0, minWidth: '120px' }}>{item[0]}:</span>
              <span style={{ color: '#1a1a2e', lineHeight: '1.5' }}>{item[1]}</span>
            </div>
          ))}
          <SubHead text={t.crisis_gestion_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_problema, t.th_accion, t.th_contacto].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Flatmates/Facebook y denunciar en Policía', 'Policía Australia'],
                  ['Problemas con Student Visa', 'Revisar en Home Affairs o contactar institución educativa', 'homeaffairs.gov.au'],
                  ['Retraso en documentos del college', 'Contactar Student Office de tu institución', 'Tu institución'],
                  ['Enfermedad / Urgencia médica', 'Hospital o clínica autorizada con tu OSHC', '000'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold, color: '#dc2626' }}>{r[0]}</td>
                    <td style={{ ...T.td(i), lineHeight: '1.5' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#f0fdf4', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700', color: '#1a1a2e' }}>{t.comunidad_title}</p>
            <p style={{ fontSize: '13px', color: '#1a1a2e', margin: 0 }}>{t.comunidad_text}</p>
          </div>
          <HackBox text={t.crisis_hack} />
        </Section>

        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇦🇺`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.matrix_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px', color: '#1a1a2e' }}>{t.consultoria_title}</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '16px' }}>
          <div style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>📝</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', marginBottom: '4px', color: '#1a1a2e' }}>{t.feedback_title}</h3>
          <p style={{ color: '#333333', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>{t.feedback_desc}</p>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder={t.feedback_placeholder}
            rows={3}
            style={{ width: '100%', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '12px', fontSize: '13px', resize: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', outline: 'none', color: '#1a1a2e' }}
          />
          <button
            onClick={() => {
              if (!feedback.trim()) return
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Australia:\n\n' + feedback)}`, '_blank')
              setFeedback('')
            }}
            style={{ marginTop: '10px', width: '100%', backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
            {t.feedback_btn}
          </button>
        </div>

      </div>
    </main>
  )
}