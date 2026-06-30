'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Canadá',
    hero_sub: 'América del Norte · Work and Study',
    hero_badge: 'Alto',
    stat1_label: 'Capital requerido',
    stat1_value: '$18,000 - $25,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Alto',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Study Permit + 20h/semana de trabajo + tiempo completo en vacaciones',
      'PGWP post-graduación: hasta 3 años de trabajo abierto para conseguir PR',
      'SIN (Social Insurance Number) — gratis, mismo día en Service Canada',
      'Colleges públicos desde $8,500 CAD/año — más baratos que universidades privadas',
      'Camino claro a Residencia Permanente vía Express Entry o PNP',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Canadá es el destino más exigente del blueprint pero también el que ofrece el camino más claro a la Residencia Permanente. Study Permit + PGWP + Express Entry = PR en 3-5 años. Si buscas construir futuro a largo plazo, Canadá es la apuesta más sólida.',
    autoridad_p1_label: 'Study Permit:',
    autoridad_p1_text: 'te permite estudiar en instituciones autorizadas (DLI) y trabajar',
    autoridad_p1_b: 'hasta 20 horas/semana',
    autoridad_p1_mid: 'durante clases y',
    autoridad_p1_b2: 'tiempo completo',
    autoridad_p1_end: 'en vacaciones académicas.',
    autoridad_p2_label: 'Hoja de ruta sin humo:',
    autoridad_p2: 'LOA (carta de aceptación) → Study Permit → SIN → trabajo → PGWP → Express Entry → PR. Cada paso desbloquea el siguiente.',
    autoridad_blue: '💱 Conversión Canadá: 1 CAD ≈ $0.72 USD. $200 CAD ≈ $144 USD. Todos los precios en CAD con equivalente en USD.',
    autoridad_hack: 'El SIN (Social Insurance Number) es el documento clave para trabajar en Canadá. Sin SIN ninguna empresa puede contratarte ni pagarte salario. La buena noticia es que el proceso es gratis y se completa el mismo día en Service Canada si llevas pasaporte y Study Permit.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'En Canadá la escuela se elige por ubicación y ejecución: cerca de zonas laborales y transporte público en ciudades como Toronto, Vancouver o Montreal, donde es más realista conseguir trabajo siendo estudiante.',
    estrategia_head: '🇨🇦 Matriz de Escuelas de Inglés: Canadá 2026',
    th_inst: 'Institución', th_loc: 'Ubicación', th_precio: 'Precio (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvencia obligatoria:',
    solvencia1_val: '~$15,000 – $16,000 USD para cubrir gastos del primer año',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$18,000 – $25,000 USD (curso + visa + gastos iniciales)',
    solvencia3_label: '📍 Mejor estrategia:',
    solvencia3_val: 'Colleges públicos en ciudades secundarias (más baratos + menos competencia)',
    estrategia_hack: 'Elige colleges públicos en ciudades secundarias como Newfoundland, Manitoba o British Columbia interior. Cuestan 30-40% menos que Toronto o Vancouver, hay menos competencia por trabajo y la calidad educativa es equivalente para el PGWP.',
    sec_pre_title: 'Pre-Foundations & Pathway Programs',
    pre_intro: 'Los programas University Pathway te preparan para entrar a universidades canadienses con inglés académico. Al completar un programa en college o universidad elegible, accedes al PGWP — el permiso de trabajo post-graduación más valioso del blueprint.',
    th_programa: 'Programa', th_institucion: 'Institución', th_inversion: 'Inversión',
    pre_blue: '🔵 PGWP: Al graduarte de un programa elegible en college o universidad pública canadiense, puedes aplicar al Post-Graduation Work Permit (hasta 3 años). Con ese permiso acumulas experiencia laboral canadiense para aplicar a Express Entry o PNP.',
    pre_hack: 'Los programas University Pathway son la entrada más accesible a universidades canadienses. Completas inglés académico y entras directo a primer año de college o universidad. El PGWP al graduarte es el verdadero premio.',
    sec_edu_title: 'Colleges Públicos — La Ruta Más Inteligente',
    edu_intro: 'Los colleges públicos en Canadá son más económicos que las universidades privadas Y dan acceso al PGWP de hasta 3 años. Esta combinación los hace la opción más inteligente para quien busca PR en el menor tiempo posible.',
    th_provincia: 'Provincia', th_programa_col: 'Programa', th_precio_anual: 'Precio/año CAD',
    edu_blue: '💰 HACK PGWP: Los graduados de colleges públicos son elegibles para PGWP de hasta 3 años. Con ese permiso acumulas experiencia laboral canadiense y aplicas a Express Entry o PNP para PR. College público + PGWP = camino más rápido a PR.',
    edu_hack: 'College of North Atlantic en Newfoundland y Northern Lights College en BC son los más económicos. Costo de vida también más bajo que Toronto o Vancouver. Misma calificación para PGWP. La diferencia de costo puede ser de $15,000-20,000 CAD en total.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Canadá es el destino con mayor inversión inicial del blueprint. La solvencia requerida es alta pero los salarios también son los más altos — $16-25 CAD/hora desde el primer trabajo.',
    th_concepto: 'Concepto', th_costo: 'Costo', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA (CANADÁ): ~$15,000 – $16,000 USD para cubrir gastos de vida del primer año. Sin esta prueba de fondos el Study Permit será rechazado. Es el requisito más alto del blueprint — pero los salarios también son los más altos.',
    gastos_hack: 'Capital de Ejecución Real = precio del college + $250 visa y biométricos + $700 seguro médico + solvencia. En promedio $18,000-25,000 USD. Es el mayor desembolso del blueprint pero también el que más ROI tiene a largo plazo vía PGWP y PR.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En Canadá el proceso es más rápido que en Europa una vez que tienes el Study Permit aprobado. El día que llegas ya puedes iniciar el trámite del SIN — el documento clave para trabajar.',
    study_permit_head: '1. Study Permit — Tu permiso de estudio en Canadá',
    pasos: [
      ['Paso 1', 'Presentar Letter of Introduction en aeropuerto — el oficial emite el Study Permit físico', null],
      ['Paso 2', 'SIN (Social Insurance Number) en Service Canada — gratis, mismo día, solo pasaporte + Study Permit', 'https://www.canada.ca'],
      ['Paso 3', 'Abrir cuenta bancaria (Scotiabank o RBC) con pasaporte + Study Permit', null],
      ['Paso 4', 'Buscar habitación permanente (Kijiji, Rentals.ca o grupos de Facebook)', null],
    ],
    pgwp_head: '2. PGWP — Post-Graduation Work Permit (después de graduarte)',
    pgwp_items: [
      ['Aplicas al PGWP dentro de los 180 días después de graduarte', null],
      ['Te da hasta 3 años de permiso de trabajo abierto en cualquier provincia', null],
      ['Con experiencia acumulada aplicas a Express Entry o PNP para PR', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/after-apply-next-steps.html'],
    ],
    aterrizaje_hack: 'El SIN es el documento clave para trabajar en Canadá. Sin SIN ninguna empresa puede contratarte ni pagarte salario. Solicítalo en Service Canada durante tu primera semana. Es gratis y se completa el mismo día. Sin SIN pierdes semanas de ingreso.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Canadá tiene los bancos más accesibles para estudiantes internacionales. Con pasaporte + Study Permit puedes abrir cuenta el mismo día. Scotiabank y RBC tienen programas específicos para newcomers.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Scotiabank o RBC apenas llegues. Tienen programas para newcomers que permiten recibir salario, pagar renta y manejar dinero desde el primer día. Scotiabank tiene el programa StartRight más completo para estudiantes internacionales.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales para tu proceso en Canadá. IRCC para todo lo migratorio. Service Canada para el SIN. Job Bank es el portal de empleo del gobierno.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'El SIN es el cuello de botella en Canadá. Solicítalo el primer día en Service Canada — es gratis y se completa ese mismo día. Sin SIN no puedes trabajar legalmente y pierdes tiempo e ingresos. Prioridad #1 al llegar.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'Canadá tiene el costo de vivienda más alto del blueprint — especialmente Toronto y Vancouver. Las ciudades secundarias son 40-50% más baratas con las mismas oportunidades laborales para estudiantes.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal CAD', th_mes: 'Precio Mensual CAD', th_usd_mes: '≈ USD/mes',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Canadá también existen estafas en anuncios de alquiler, especialmente en Toronto y Vancouver. Nunca envíes dinero sin haber visitado el lugar.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'En Canadá las habitaciones se alquilan muy rápido en Kijiji o Marketplace. Si encuentras una opción, escribe inmediatamente. Las mejores habitaciones desaparecen en 24-48 horas, especialmente cerca de colleges y universidades.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Canadá tiene los salarios más altos del blueprint — salario mínimo entre $15-17 CAD/hora según provincia. Con 20h/semana puedes ganar $1,200-1,700 CAD/mes (~$864-$1,224 USD).',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'Ve a hoteles, restaurantes y malls entre',
    empleos_cv_b: '10:00 AM - 12:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_cad: 'Salario/hora CAD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_hack: 'En Canadá muchas empresas valoran actitud, puntualidad y disponibilidad inmediata. Muchos trabajos se consiguen aplicando online o dejando CV directamente. La clave es aplicar RÁPIDO — Indeed Canada recibe cientos de aplicaciones por día.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Canadá tiene los salarios más altos del blueprint. Con 20h/semana y $16 CAD/hora, ganas $1,280 CAD/mes (~$922 USD). En vacaciones académicas puedes trabajar tiempo completo y duplicar esa cifra.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Mensual EST. (20h/sem)',
    salarios_blue: '💡 VACACIONES ACADÉMICAS: Puedes trabajar tiempo completo (40h/semana). Un estudiante en hospitality a $18 CAD/hora puede ganar $2,880 CAD/mes (~$2,074 USD) en vacaciones. Eso es suficiente para cubrir gastos y ahorrar significativamente.',
    salarios_hack: 'Delivery con DoorDash o Uber Eats puede llegar a $25 CAD/hora en Toronto o Vancouver. Con 20h/semana son $2,000 CAD/mes (~$1,440 USD). En vacaciones académicas con 40h/semana son $4,000 CAD/mes. Es el sector con mayor ingreso por hora.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Canadá tiene el proceso pre-partida más largo del blueprint — el Study Permit puede tardar 8-12 semanas en aprobarse. Planifica con tiempo. Una vez en el país, el proceso es rápido.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Elegir college + Carta de Aceptación (LOA) + Prueba de fondos + Aplicar Study Permit + Biométricos', '3-4 meses antes'],
      ['Semana 1', 'Presentar Letter of Introduction en aeropuerto + SIN en Service Canada + Abrir Scotiabank o RBC', 'Día 1-7'],
      ['Semana 2-4', 'Buscar habitación permanente (Kijiji, Rentals.ca) + Entregar CVs + Aplicar en Indeed', 'Día 7-30'],
      ['Mes 2', 'Conseguir empleo + Primer salario + Estabilizar 20h/semana', 'Día 30-60'],
      ['Al graduarte', 'Aplicar al PGWP (dentro de 180 días) + Buscar trabajo profesional', 'Post-graduación'],
      ['Años 2-5', 'Acumular experiencia laboral + Aplicar Express Entry o PNP → Residencia Permanente', '2-5 años'],
    ],
    timeline_hack: 'El Study Permit puede tardar 8-12 semanas — aplica lo antes posible. El SIN es gratis y se obtiene el primer día. Esos son los dos puntos críticos de tiempo en Canadá. El resto fluye rápido si llegas con los documentos en orden.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Canadá es rápido si llegas con el Study Permit aprobado. El punto crítico es el SIN — sin él no puedes trabajar. Con SIN el mismo día que llegas puedes empezar a aplicar.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Study Permit activo', 'SIN (Social Insurance Number) obtenido', 'Cuenta bancaria activa', 'Oferta laboral'],
    hito1_time: '👉 Tiempo real: 1-3 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato firmado', 'Alta en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 2-4 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~1-3 semanas desde que llegas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~2-5 semanas desde llegada',
    salario1_hack: 'Si sacas el SIN el primer día y aplicas rápido, puedes estar trabajando en 1-2 semanas. Canadá paga semanal o quincenal — mucho más rápido que Europa que paga mensual. Eso significa que puedes cobrar tu primer pago en 2-3 semanas desde que empiezas.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. En Canadá el sistema es ordenado — sigue el canal correcto y se resuelve rápido. Guarda estos contactos desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '911 — Policía, Ambulancia, Bomberos'],
      ['IRCC (Inmigración)', 'canada.ca — Study Permit, visas y permisos'],
      ['Service Canada (SIN)', 'canada.ca/sin — Social Insurance Number'],
      ['Job Bank', 'jobbank.gc.ca — Empleo oficial del gobierno'],
      ['Comunidad L&T', 'Latinos en Toronto, Vancouver, Montreal — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Canadá',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Canadá — links próximamente',
    crisis_hack: 'En Canadá muchas oportunidades aparecen primero en comunidades de estudiantes internacionales y grupos de WhatsApp. Latinos en Toronto, Vancouver y Montreal son comunidades muy activas. Únete desde el día 1 para encontrar trabajo y vivienda más rápido.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Canadá como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Study Permit (permiso de estudio)'],
      ['Duración mínima', '6 meses – 2 años'],
      ['Horas de trabajo', '20h/semana durante clases'],
      ['Vacaciones académicas', 'Tiempo completo (40h/semana)'],
      ['Solvencia obligatoria', '~$15,000 – $16,000 USD'],
      ['Capital total recomendado', '$18,000 – $25,000 USD'],
      ['Study Permit', '$150 CAD + $85 CAD biométricos'],
      ['SIN (para trabajar)', 'Gratis — mismo día en Service Canada'],
      ['Renta cuarto compartido', '$720 – $1,000 CAD/mes'],
      ['Empleos más comunes', 'Hospitality, Retail, Delivery, Warehouses'],
      ['Salario promedio entrada', '$16 – $20 CAD/hora'],
      ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
      ['Tiempo hasta primer cobro', '2-5 semanas desde llegada'],
      ['Post-graduación (PGWP)', 'Hasta 3 años de trabajo abierto'],
      ['Camino a PR', 'PGWP → Express Entry o PNP → Residencia Permanente'],
      ['Nivel de dificultad', 'Alto'],
      ['Mejores ciudades', 'Toronto, Vancouver, Montreal, Calgary'],
      ['Ventaja única', 'Salarios más altos del blueprint + camino claro a PR'],
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
    hero_title: 'Canadá',
    hero_sub: 'América do Norte · Work and Study',
    hero_badge: 'Alto',
    stat1_label: 'Capital necessário',
    stat1_value: '$18.000 - $25.000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Alto',
    included_title: 'O que inclui o Blueprint',
    included: [
      'Study Permit + 20h/semana de trabalho + período integral nas férias',
      'PGWP pós-graduação: até 3 anos de trabalho aberto para conseguir PR',
      'SIN (Social Insurance Number) — gratuito, mesmo dia no Service Canada',
      'Colleges públicos a partir de $8.500 CAD/ano — mais baratos que universidades privadas',
      'Caminho claro para Residência Permanente via Express Entry ou PNP',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'O Canadá é o destino mais exigente do blueprint mas também o que oferece o caminho mais claro para a Residência Permanente. Study Permit + PGWP + Express Entry = PR em 3-5 anos. Se você busca construir futuro a longo prazo, o Canadá é a aposta mais sólida.',
    autoridad_p1_label: 'Study Permit:',
    autoridad_p1_text: 'permite estudar em instituições autorizadas (DLI) e trabalhar',
    autoridad_p1_b: 'até 20 horas/semana',
    autoridad_p1_mid: 'durante as aulas e',
    autoridad_p1_b2: 'período integral',
    autoridad_p1_end: 'nas férias acadêmicas.',
    autoridad_p2_label: 'Roteiro sem fumaça:',
    autoridad_p2: 'LOA (carta de aceitação) → Study Permit → SIN → trabalho → PGWP → Express Entry → PR. Cada passo desbloqueia o próximo.',
    autoridad_blue: '💱 Conversão Canadá: 1 CAD ≈ $0,72 USD. $200 CAD ≈ $144 USD. Todos os preços em CAD com equivalente em USD.',
    autoridad_hack: 'O SIN (Social Insurance Number) é o documento chave para trabalhar no Canadá. Sem SIN nenhuma empresa pode te contratar nem te pagar salário. A boa notícia é que o processo é gratuito e se completa no mesmo dia no Service Canada se você levar passaporte e Study Permit.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'No Canadá a escola se escolhe por localização e execução: perto de zonas de trabalho e transporte público em cidades como Toronto, Vancouver ou Montreal, onde é mais realista conseguir trabalho sendo estudante.',
    estrategia_head: '🇨🇦 Matriz de Escolas de Inglês: Canadá 2026',
    th_inst: 'Instituição', th_loc: 'Localização', th_precio: 'Preço (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvência obrigatória:',
    solvencia1_val: '~$15.000 – $16.000 USD para cobrir despesas do primeiro ano',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$18.000 – $25.000 USD (curso + visto + despesas iniciais)',
    solvencia3_label: '📍 Melhor estratégia:',
    solvencia3_val: 'Colleges públicos em cidades secundárias (mais baratos + menos concorrência)',
    estrategia_hack: 'Escolha colleges públicos em cidades secundárias como Newfoundland, Manitoba ou interior da British Columbia. Custam 30-40% menos que Toronto ou Vancouver, há menos concorrência por trabalho e a qualidade educacional é equivalente para o PGWP.',
    sec_pre_title: 'Pré-Fundações & Programas de Acesso',
    pre_intro: 'Os programas University Pathway te preparam para entrar em universidades canadenses com inglês acadêmico. Ao completar um programa em college ou universidade elegível, você acessa o PGWP — a permissão de trabalho pós-graduação mais valiosa do blueprint.',
    th_programa: 'Programa', th_institucion: 'Instituição', th_inversion: 'Investimento',
    pre_blue: '🔵 PGWP: Ao se formar em um programa elegível em college ou universidade pública canadense, você pode solicitar o Post-Graduation Work Permit (até 3 anos). Com essa permissão você acumula experiência de trabalho canadense para solicitar Express Entry ou PNP.',
    pre_hack: 'Os programas University Pathway são a entrada mais acessível a universidades canadenses. Você completa inglês acadêmico e entra direto no primeiro ano de college ou universidade. O PGWP ao se formar é o verdadeiro prêmio.',
    sec_edu_title: 'Colleges Públicos — A Rota Mais Inteligente',
    edu_intro: 'Os colleges públicos no Canadá são mais econômicos que as universidades privadas E dão acesso ao PGWP de até 3 anos. Essa combinação os torna a opção mais inteligente para quem busca PR no menor tempo possível.',
    th_provincia: 'Província', th_programa_col: 'Programa', th_precio_anual: 'Preço/ano CAD',
    edu_blue: '💰 HACK PGWP: Os formados em colleges públicos são elegíveis para PGWP de até 3 anos. Com essa permissão você acumula experiência de trabalho canadense e solicita Express Entry ou PNP para PR. College público + PGWP = caminho mais rápido para PR.',
    edu_hack: 'College of North Atlantic em Newfoundland e Northern Lights College em BC são os mais econômicos. Custo de vida também mais baixo que Toronto ou Vancouver. Mesma qualificação para PGWP. A diferença de custo pode ser de $15.000-20.000 CAD no total.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'O Canadá é o destino com maior investimento inicial do blueprint. A solvência exigida é alta mas os salários também são os mais altos — $16-25 CAD/hora desde o primeiro trabalho.',
    th_concepto: 'Conceito', th_costo: 'Custo', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA (CANADÁ): ~$15.000 – $16.000 USD para cobrir despesas de vida do primeiro ano. Sem essa prova de fundos o Study Permit será rejeitado. É o requisito mais alto do blueprint — mas os salários também são os mais altos.',
    gastos_hack: 'Capital de Execução Real = preço do college + $250 visto e biometria + $700 seguro médico + solvência. Em média $18.000-25.000 USD. É o maior desembolso do blueprint mas também o que mais ROI tem a longo prazo via PGWP e PR.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'No Canadá o processo é mais rápido que na Europa uma vez que você tem o Study Permit aprovado. No dia que você chega já pode iniciar o processo do SIN — o documento chave para trabalhar.',
    study_permit_head: '1. Study Permit — Sua permissão de estudo no Canadá',
    pasos: [
      ['Passo 1', 'Apresentar Letter of Introduction no aeroporto — o oficial emite o Study Permit físico', null],
      ['Passo 2', 'SIN (Social Insurance Number) no Service Canada — gratuito, mesmo dia, só passaporte + Study Permit', 'https://www.canada.ca'],
      ['Passo 3', 'Abrir conta bancária (Scotiabank ou RBC) com passaporte + Study Permit', null],
      ['Passo 4', 'Buscar quarto permanente (Kijiji, Rentals.ca ou grupos do Facebook)', null],
    ],
    pgwp_head: '2. PGWP — Post-Graduation Work Permit (após se formar)',
    pgwp_items: [
      ['Você solicita o PGWP dentro de 180 dias após se formar', null],
      ['Te dá até 3 anos de permissão de trabalho aberto em qualquer província', null],
      ['Com experiência acumulada você solicita Express Entry ou PNP para PR', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/after-apply-next-steps.html'],
    ],
    aterrizaje_hack: 'O SIN é o documento chave para trabalhar no Canadá. Sem SIN nenhuma empresa pode te contratar nem te pagar salário. Solicite no Service Canada durante sua primeira semana. É gratuito e se completa no mesmo dia. Sem SIN você perde semanas de renda.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'O Canadá tem os bancos mais acessíveis para estudantes internacionais. Com passaporte + Study Permit você pode abrir conta no mesmo dia. Scotiabank e RBC têm programas específicos para newcomers.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Scotiabank ou RBC assim que chegar. Têm programas para newcomers que permitem receber salário, pagar aluguel e movimentar dinheiro desde o primeiro dia. O Scotiabank tem o programa StartRight mais completo para estudantes internacionais.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais para seu processo no Canadá. IRCC para tudo migratório. Service Canada para o SIN. Job Bank é o portal de emprego do governo.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'O SIN é o gargalo no Canadá. Solicite no primeiro dia no Service Canada — é gratuito e se completa no mesmo dia. Sem SIN você não pode trabalhar legalmente e perde tempo e renda. Prioridade #1 ao chegar.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O Canadá tem o custo de moradia mais alto do blueprint — especialmente Toronto e Vancouver. As cidades secundárias são 40-50% mais baratas com as mesmas oportunidades de trabalho para estudantes.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal CAD', th_mes: 'Preço Mensal CAD', th_usd_mes: '≈ USD/mês',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. No Canadá também existem golpes em anúncios de aluguel, especialmente em Toronto e Vancouver. Nunca envie dinheiro sem ter visitado o lugar.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'No Canadá os quartos são alugados muito rápido no Kijiji ou Marketplace. Se encontrar uma opção, escreva imediatamente. Os melhores quartos desaparecem em 24-48 horas, especialmente perto de colleges e universidades.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'O Canadá tem os salários mais altos do blueprint — salário mínimo entre $15-17 CAD/hora conforme a província. Com 20h/semana você pode ganhar $1.200-1.700 CAD/mês (~$864-$1.224 USD).',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'Vá a hotéis, restaurantes e shoppings entre',
    empleos_cv_b: '10h - 12h',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_cad: 'Salário/hora CAD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_hack: 'No Canadá muitas empresas valorizam atitude, pontualidade e disponibilidade imediata. Muitos trabalhos são conseguidos aplicando online ou deixando CV diretamente. A chave é aplicar RÁPIDO — Indeed Canada recebe centenas de candidaturas por dia.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'O Canadá tem os salários mais altos do blueprint. Com 20h/semana e $16 CAD/hora, você ganha $1.280 CAD/mês (~$922 USD). Nas férias acadêmicas você pode trabalhar período integral e dobrar esse valor.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Mensal EST. (20h/sem)',
    salarios_blue: '💡 FÉRIAS ACADÊMICAS: Você pode trabalhar período integral (40h/semana). Um estudante em hotelaria a $18 CAD/hora pode ganhar $2.880 CAD/mês (~$2.074 USD) nas férias. Isso é suficiente para cobrir despesas e economizar significativamente.',
    salarios_hack: 'Delivery com DoorDash ou Uber Eats pode chegar a $25 CAD/hora em Toronto ou Vancouver. Com 20h/semana são $2.000 CAD/mês (~$1.440 USD). Nas férias acadêmicas com 40h/semana são $4.000 CAD/mês. É o setor com maior renda por hora.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'O Canadá tem o processo pré-partida mais longo do blueprint — o Study Permit pode demorar 8-12 semanas para ser aprovado. Planeje com antecedência. Uma vez no país, o processo é rápido.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Escolher college + Carta de Aceitação (LOA) + Prova de fundos + Solicitar Study Permit + Biometria', '3-4 meses antes'],
      ['Semana 1', 'Apresentar Letter of Introduction no aeroporto + SIN no Service Canada + Abrir Scotiabank ou RBC', 'Dia 1-7'],
      ['Semana 2-4', 'Buscar quarto permanente (Kijiji, Rentals.ca) + Entregar CVs + Aplicar no Indeed', 'Dia 7-30'],
      ['Mês 2', 'Conseguir emprego + Primeiro salário + Estabilizar 20h/semana', 'Dia 30-60'],
      ['Ao se formar', 'Solicitar PGWP (dentro de 180 dias) + Buscar trabalho profissional', 'Pós-graduação'],
      ['Anos 2-5', 'Acumular experiência de trabalho + Solicitar Express Entry ou PNP → Residência Permanente', '2-5 anos'],
    ],
    timeline_hack: 'O Study Permit pode demorar 8-12 semanas — solicite o mais cedo possível. O SIN é gratuito e se obtém no primeiro dia. Esses são os dois pontos críticos de tempo no Canadá. O resto flui rápido se você chegar com os documentos em ordem.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'O Canadá é rápido se você chegar com o Study Permit aprovado. O ponto crítico é o SIN — sem ele você não pode trabalhar. Com SIN no mesmo dia que chega você pode começar a aplicar.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Study Permit ativo', 'SIN (Social Insurance Number) obtido', 'Conta bancária ativa', 'Oferta de trabalho'],
    hito1_time: '👉 Tempo real: 1-3 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato assinado', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 2-4 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~1-3 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~2-5 semanas desde chegada',
    salario1_hack: 'Se você obtiver o SIN no primeiro dia e aplicar rápido, pode estar trabalhando em 1-2 semanas. O Canadá paga semanal ou quinzenal — muito mais rápido que a Europa que paga mensal. Isso significa que você pode receber seu primeiro pagamento em 2-3 semanas desde que começa.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. No Canadá o sistema é ordenado — siga o canal correto e se resolve rápido. Salve esses contatos desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '911 — Polícia, Ambulância, Bombeiros'],
      ['IRCC (Imigração)', 'canada.ca — Study Permit, vistos e permissões'],
      ['Service Canada (SIN)', 'canada.ca/sin — Social Insurance Number'],
      ['Job Bank', 'jobbank.gc.ca — Emprego oficial do governo'],
      ['Comunidade L&T', 'Latinos em Toronto, Vancouver, Montreal — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina no Canadá',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos no Canadá — links em breve',
    crisis_hack: 'No Canadá muitas oportunidades aparecem primeiro em comunidades de estudantes internacionais e grupos de WhatsApp. Latinos em Toronto, Vancouver e Montreal são comunidades muito ativas. Entre desde o dia 1 para encontrar trabalho e moradia mais rápido.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo do Canadá como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Study Permit (permissão de estudo)'],
      ['Duração mínima', '6 meses – 2 anos'],
      ['Horas de trabalho', '20h/semana durante aulas'],
      ['Férias acadêmicas', 'Período integral (40h/semana)'],
      ['Solvência obrigatória', '~$15.000 – $16.000 USD'],
      ['Capital total recomendado', '$18.000 – $25.000 USD'],
      ['Study Permit', '$150 CAD + $85 CAD biometria'],
      ['SIN (para trabalhar)', 'Gratuito — mesmo dia no Service Canada'],
      ['Aluguel quarto compartilhado', '$720 – $1.000 CAD/mês'],
      ['Empregos mais comuns', 'Hotelaria, Varejo, Delivery, Armazéns'],
      ['Salário médio de entrada', '$16 – $20 CAD/hora'],
      ['Tempo até primeiro trabalho', '1-3 semanas desde chegada'],
      ['Tempo até primeiro pagamento', '2-5 semanas desde chegada'],
      ['Pós-graduação (PGWP)', 'Até 3 anos de trabalho aberto'],
      ['Caminho para PR', 'PGWP → Express Entry ou PNP → Residência Permanente'],
      ['Nível de dificuldade', 'Alto'],
      ['Melhores cidades', 'Toronto, Vancouver, Montreal, Calgary'],
      ['Vantagem única', 'Salários mais altos do blueprint + caminho claro para PR'],
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
    hero_title: 'Canada',
    hero_sub: 'North America · Work and Study',
    hero_badge: 'High',
    stat1_label: 'Required Capital',
    stat1_value: '$18,000 - $25,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'High',
    included_title: 'What the Blueprint Includes',
    included: [
      'Study Permit + 20h/week of work + full time during holidays',
      'Post-graduation PGWP: up to 3 years of open work to get PR',
      'SIN (Social Insurance Number) — free, same day at Service Canada',
      'Public colleges from $8,500 CAD/year — cheaper than private universities',
      'Clear path to Permanent Residency via Express Entry or PNP',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Canada is the most demanding destination in the blueprint but also the one that offers the clearest path to Permanent Residency. Study Permit + PGWP + Express Entry = PR in 3-5 years. If you\'re looking to build a long-term future, Canada is the most solid bet.',
    autoridad_p1_label: 'Study Permit:',
    autoridad_p1_text: 'allows you to study at authorized institutions (DLI) and work',
    autoridad_p1_b: 'up to 20 hours/week',
    autoridad_p1_mid: 'during classes and',
    autoridad_p1_b2: 'full time',
    autoridad_p1_end: 'during academic holidays.',
    autoridad_p2_label: 'Clear roadmap:',
    autoridad_p2: 'LOA (acceptance letter) → Study Permit → SIN → work → PGWP → Express Entry → PR. Each step unlocks the next.',
    autoridad_blue: '💱 Canada conversion: 1 CAD ≈ $0.72 USD. $200 CAD ≈ $144 USD. All prices in CAD with USD equivalent.',
    autoridad_hack: 'The SIN (Social Insurance Number) is the key document to work in Canada. Without SIN no company can hire you or pay your salary. The good news is that the process is free and completed the same day at Service Canada if you bring your passport and Study Permit.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'In Canada the school is chosen by location and execution: near work areas and public transport in cities like Toronto, Vancouver or Montreal, where it\'s more realistic to find work as a student.',
    estrategia_head: '🇨🇦 English Schools Matrix: Canada 2026',
    th_inst: 'Institution', th_loc: 'Location', th_precio: 'Price (24 weeks)', th_web: 'Website',
    solvencia1_label: '🔴 Mandatory funds:',
    solvencia1_val: '~$15,000 – $16,000 USD to cover first year expenses',
    solvencia2_label: '🟢 Total recommended capital:',
    solvencia2_val: '$18,000 – $25,000 USD (course + visa + initial costs)',
    solvencia3_label: '📍 Best strategy:',
    solvencia3_val: 'Public colleges in secondary cities (cheaper + less competition)',
    estrategia_hack: 'Choose public colleges in secondary cities like Newfoundland, Manitoba or interior British Columbia. They cost 30-40% less than Toronto or Vancouver, there\'s less job competition and the educational quality is equivalent for the PGWP.',
    sec_pre_title: 'Pre-Foundations & Pathway Programs',
    pre_intro: 'University Pathway programs prepare you to enter Canadian universities with academic English. Upon completing a program at an eligible college or university, you access the PGWP — the most valuable post-graduation work permit in the blueprint.',
    th_programa: 'Program', th_institucion: 'Institution', th_inversion: 'Investment',
    pre_blue: '🔵 PGWP: Upon graduating from an eligible program at a Canadian public college or university, you can apply for the Post-Graduation Work Permit (up to 3 years). With that permit you accumulate Canadian work experience to apply for Express Entry or PNP.',
    pre_hack: 'University Pathway programs are the most accessible entry to Canadian universities. You complete academic English and go straight into first year of college or university. The PGWP upon graduating is the real prize.',
    sec_edu_title: 'Public Colleges — The Smartest Route',
    edu_intro: 'Public colleges in Canada are more affordable than private universities AND give access to the PGWP of up to 3 years. This combination makes them the smartest option for those looking for PR in the shortest time possible.',
    th_provincia: 'Province', th_programa_col: 'Program', th_precio_anual: 'Price/year CAD',
    edu_blue: '💰 PGWP HACK: Public college graduates are eligible for PGWP of up to 3 years. With that permit you accumulate Canadian work experience and apply for Express Entry or PNP for PR. Public college + PGWP = fastest path to PR.',
    edu_hack: 'College of North Atlantic in Newfoundland and Northern Lights College in BC are the most affordable. Cost of living also lower than Toronto or Vancouver. Same PGWP qualification. The cost difference can be $15,000-20,000 CAD in total.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'Canada is the destination with the highest initial investment in the blueprint. The required funds are high but salaries are also the highest — $16-25 CAD/hour from the first job.',
    th_concepto: 'Item', th_costo: 'Cost', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS (CANADA): ~$15,000 – $16,000 USD to cover first year living expenses. Without this proof of funds the Study Permit will be rejected. It\'s the highest requirement in the blueprint — but salaries are also the highest.',
    gastos_hack: 'Real Execution Capital = college price + $250 visa and biometrics + $700 health insurance + funds. On average $18,000-25,000 USD. It\'s the biggest outlay in the blueprint but also the one with the most ROI long-term via PGWP and PR.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In Canada the process is faster than in Europe once you have the Study Permit approved. The day you arrive you can already start the SIN process — the key document to work.',
    study_permit_head: '1. Study Permit — Your study permit in Canada',
    pasos: [
      ['Step 1', 'Present Letter of Introduction at airport — the officer issues the physical Study Permit', null],
      ['Step 2', 'SIN (Social Insurance Number) at Service Canada — free, same day, just passport + Study Permit', 'https://www.canada.ca'],
      ['Step 3', 'Open bank account (Scotiabank or RBC) with passport + Study Permit', null],
      ['Step 4', 'Find permanent room (Kijiji, Rentals.ca or Facebook groups)', null],
    ],
    pgwp_head: '2. PGWP — Post-Graduation Work Permit (after graduating)',
    pgwp_items: [
      ['Apply for PGWP within 180 days after graduating', null],
      ['Gives you up to 3 years of open work permit in any province', null],
      ['With accumulated experience apply for Express Entry or PNP for PR', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/after-apply-next-steps.html'],
    ],
    aterrizaje_hack: 'The SIN is the key document to work in Canada. Without SIN no company can hire you or pay your salary. Apply at Service Canada during your first week. It\'s free and completed the same day. Without SIN you lose weeks of income.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Canada has the most accessible banks for international students. With passport + Study Permit you can open an account the same day. Scotiabank and RBC have specific programs for newcomers.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Scotiabank or RBC as soon as you arrive. They have newcomer programs that allow you to receive salary, pay rent and manage money from day one. Scotiabank has the most complete StartRight program for international students.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Official portals for your process in Canada. IRCC for everything migration-related. Service Canada for the SIN. Job Bank is the government employment portal.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'The SIN is the bottleneck in Canada. Apply on the first day at Service Canada — it\'s free and completed that same day. Without SIN you can\'t work legally and lose time and income. Priority #1 upon arrival.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Canada has the highest housing cost in the blueprint — especially Toronto and Vancouver. Secondary cities are 40-50% cheaper with the same job opportunities for students.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price CAD', th_mes: 'Monthly Price CAD', th_usd_mes: '≈ USD/month',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. In Canada there are also rental scams, especially in Toronto and Vancouver. Never send money without having visited the place.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'In Canada rooms are rented very quickly on Kijiji or Marketplace. If you find an option, write immediately. The best rooms disappear in 24-48 hours, especially near colleges and universities.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'Canada has the highest salaries in the blueprint — minimum wage between $15-17 CAD/hour depending on province. With 20h/week you can earn $1,200-1,700 CAD/month (~$864-$1,224 USD).',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'Go to hotels, restaurants and malls between',
    empleos_cv_b: '10:00 AM - 12:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_cad: 'Wage/hour CAD', th_usd_h: '≈ USD/hour', th_canal_emp: 'Channel',
    empleos_hack: 'In Canada many companies value attitude, punctuality and immediate availability. Many jobs are found by applying online or dropping off CV directly. The key is to apply FAST — Indeed Canada receives hundreds of applications per day.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Canada has the highest salaries in the blueprint. With 20h/week and $16 CAD/hour, you earn $1,280 CAD/month (~$922 USD). During academic holidays you can work full time and double that figure.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Monthly EST. (20h/wk)',
    salarios_blue: '💡 ACADEMIC HOLIDAYS: You can work full time (40h/week). A student in hospitality at $18 CAD/hour can earn $2,880 CAD/month (~$2,074 USD) during holidays. That\'s enough to cover expenses and save significantly.',
    salarios_hack: 'Delivery with DoorDash or Uber Eats can reach $25 CAD/hour in Toronto or Vancouver. With 20h/week that\'s $2,000 CAD/month (~$1,440 USD). During academic holidays with 40h/week that\'s $4,000 CAD/month. It\'s the sector with the highest hourly income.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Canada has the longest pre-departure process in the blueprint — the Study Permit can take 8-12 weeks to be approved. Plan ahead. Once in the country, the process is fast.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Choose college + Acceptance Letter (LOA) + Proof of funds + Apply Study Permit + Biometrics', '3-4 months before'],
      ['Week 1', 'Present Letter of Introduction at airport + SIN at Service Canada + Open Scotiabank or RBC', 'Day 1-7'],
      ['Week 2-4', 'Find permanent room (Kijiji, Rentals.ca) + Drop off CVs + Apply on Indeed', 'Day 7-30'],
      ['Month 2', 'Find employment + First salary + Stabilize 20h/week', 'Day 30-60'],
      ['Upon graduating', 'Apply for PGWP (within 180 days) + Look for professional work', 'Post-graduation'],
      ['Years 2-5', 'Accumulate work experience + Apply Express Entry or PNP → Permanent Residency', '2-5 years'],
    ],
    timeline_hack: 'The Study Permit can take 8-12 weeks — apply as soon as possible. The SIN is free and obtained on the first day. Those are the two critical time points in Canada. The rest flows quickly if you arrive with your documents in order.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'Canada is fast if you arrive with the Study Permit approved. The critical point is the SIN — without it you can\'t work. With SIN the same day you arrive you can start applying.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active Study Permit', 'SIN (Social Insurance Number) obtained', 'Active bank account', 'Job offer'],
    hito1_time: '👉 Real timeline: 1-3 weeks from arrival',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Contract signed', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 2-4 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~1-3 weeks from arrival',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~2-5 weeks from arrival',
    salario1_hack: 'If you get the SIN on the first day and apply quickly, you can be working in 1-2 weeks. Canada pays weekly or biweekly — much faster than Europe which pays monthly. That means you can receive your first payment in 2-3 weeks from when you start.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. In Canada the system is orderly — follow the correct channel and it resolves quickly. Save these contacts from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '911 — Police, Ambulance, Fire'],
      ['IRCC (Immigration)', 'canada.ca — Study Permit, visas and permits'],
      ['Service Canada (SIN)', 'canada.ca/sin — Social Insurance Number'],
      ['Job Bank', 'jobbank.gc.ca — Government employment portal'],
      ['L&T Community', 'Latinos in Toronto, Vancouver, Montreal — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Canada',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Canada — links coming soon',
    crisis_hack: 'In Canada many opportunities appear first in international student communities and WhatsApp groups. Latinos in Toronto, Vancouver and Montreal are very active communities. Join from day 1 to find work and housing faster.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Canada as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Study Permit'],
      ['Minimum duration', '6 months – 2 years'],
      ['Work hours', '20h/week during classes'],
      ['Academic holidays', 'Full time (40h/week)'],
      ['Mandatory funds', '~$15,000 – $16,000 USD'],
      ['Total recommended capital', '$18,000 – $25,000 USD'],
      ['Study Permit', '$150 CAD + $85 CAD biometrics'],
      ['SIN (to work)', 'Free — same day at Service Canada'],
      ['Shared room rent', '$720 – $1,000 CAD/month'],
      ['Most common jobs', 'Hospitality, Retail, Delivery, Warehouses'],
      ['Average entry salary', '$16 – $20 CAD/hour'],
      ['Time to first job', '1-3 weeks from arrival'],
      ['Time to first payment', '2-5 weeks from arrival'],
      ['Post-graduation (PGWP)', 'Up to 3 years of open work'],
      ['Path to PR', 'PGWP → Express Entry or PNP → Permanent Residency'],
      ['Difficulty level', 'High'],
      ['Best cities', 'Toronto, Vancouver, Montreal, Calgary'],
      ['Unique advantage', 'Highest salaries in blueprint + clear path to PR'],
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

export default function Canada() {
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

      {/* HERO */}
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=765&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇨🇦</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#ef4444', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>{t.hero_badge}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', t.stat1_label, t.stat1_value], ['🕐', t.stat2_label, t.stat2_value], ['📊', t.stat3_label, t.stat3_value]].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#555555', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px', color: '#1a1a2e' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      {/* INCLUDED */}
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

        {/* FREE - AUTORIDAD */}
        <Section id="autoridad" emoji="🧭" title={t.sec_autoridad_title} free={true}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497373637916-e47a55e22d0a?q=80&w=1173&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
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

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />
          <SubHead text={t.estrategia_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_loc, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ILSC Language Schools', 'Toronto / Vancouver', '$3,200 – $4,200', 'ilsc.com', 'https://ilsc.com'],
                  ['Oxford International', 'Toronto / Vancouver', '$3,200 – $4,100', 'oxfordinternationalenglish.com', 'https://oxfordinternationalenglish.com'],
                  ['EC English', 'Vancouver / Montreal', '$3,300 – $4,300', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Kaplan International', 'Toronto / Vancouver', '$3,400 – $4,500', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                  ['ILAC', 'Toronto / Vancouver', '$3,500 – $4,800', 'ilac.com', 'https://ilac.com'],
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

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title={t.sec_pre_title}>
          <Intro text={t.pre_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_programa, t.th_institucion, t.th_inversion, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University Pathway', 'ILSC', '$10,000 – $13,000', 'ilsc.com', 'https://ilsc.com'],
                  ['Academic Pathway', 'ILAC', '$11,000 – $14,000', 'ilac.com', 'https://ilac.com'],
                  ['University Preparation', 'Kaplan', '$12,000 – $15,000', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                  ['Academic English', 'EC English', '$10,500 – $13,500', 'ecenglish.com', 'https://ecenglish.com'],
                  ['College Pathway', 'Oxford International', '$10,000 – $12,500', 'oxfordinternationalenglish.com', 'https://oxfordinternationalenglish.com'],
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

        {/* COLLEGES PUBLICOS */}
        <Section id="edu" emoji="🎓" title={t.sec_edu_title}>
          <Intro text={t.edu_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_provincia, t.th_programa_col, t.th_precio_anual, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['College of North Atlantic', 'Newfoundland', 'Business / IT / Trades', '$8,500 – $11,000 CAD', 'cna.nl.ca', 'https://www.cna.nl.ca'],
                  ['Northern Lights College', 'British Columbia', 'Business / Energy / Trades', '$10,000 – $13,000 CAD', 'nlc.bc.ca', 'https://www.nlc.bc.ca'],
                  ['Red River College', 'Manitoba', 'Business / Technology', '$10,000 – $17,000 CAD', 'rrc.ca', 'https://www.rrc.ca'],
                  ['Lambton College', 'Ontario', 'Business / IT / Supply Chain', '$13,000 – $14,000 CAD', 'lambtoncollege.ca', 'https://www.lambtoncollege.ca'],
                  ['Camosun College', 'British Columbia', 'Hospitality / Business', '$14,000 – $15,000 CAD', 'camosun.ca', 'https://camosun.ca'],
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

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <Intro text={t.gastos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico internacional o provincial', '$600 – $900/año', '✅ Sí'],
                  ['Study Permit (visa de estudiante)', '$150 CAD (~$108 USD)', '✅ Sí'],
                  ['Biométricos', '$85 CAD (~$61 USD)', '✅ Sí'],
                  ['Materiales / Libros', '$200 – $400', '✅ Sí'],
                  ['Examen médico migratorio (si requerido)', '$150 – $250', '✅ Según caso'],
                  ['Solvencia (primer año de vida)', '~$15,000 – $16,000 USD', '✅ Obligatorio visa'],
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

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title={t.sec_aterrizaje_title}>
          <Intro text={t.aterrizaje_intro} />
          <SubHead text={t.study_permit_head} />
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6', color: '#1a1a2e' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.pgwp_head} />
          {t.pgwp_items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span style={{ color: '#1a1a2e' }}>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
            </div>
          ))}
          <HackBox text={t.aterrizaje_hack} />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="📊" title={t.sec_bancos_title}>
          <Intro text={t.bancos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_entidad, t.th_tipo, t.th_ventaja, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Scotiabank', 'Tradicional', 'Programa StartRight para recién llegados. Fácil apertura para nuevos inmigrantes.', 'scotiabank.com', 'https://scotiabank.com'],
                  ['RBC', 'Tradicional', 'El más grande del país. Muy usado por estudiantes. Cuenta activa el mismo día.', 'rbc.com', 'https://rbc.com'],
                  ['TD Bank', 'Tradicional', 'Buena red de sucursales. Cuenta especial para estudiantes internacionales.', 'td.com', 'https://td.com'],
                  ['CIBC', 'Tradicional', 'Sin comisiones para newcomers. Muy popular entre estudiantes.', 'cibc.com', 'https://cibc.com'],
                  ['Tangerine', 'Digital', 'Banco digital de Scotiabank. Sin comisiones y gestión desde app.', 'tangerine.ca', 'https://tangerine.ca'],
                  ['Simplii Financial', 'Digital', 'Banco digital de CIBC. Transferencias gratuitas y apertura online.', 'simplii.com', 'https://simplii.com'],
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

        {/* WEBS */}
        <Section id="webs" emoji="🔗" title={t.sec_webs_title}>
          <Intro text={t.webs_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_portal, t.th_para_que, t.th_cuando, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['IRCC (Inmigración Canadá)', 'Study Permit, visas y permisos de trabajo', 'Antes de viajar + seguimiento en Canadá', 'canada.ca', 'https://www.canada.ca'],
                  ['Service Canada (SIN)', 'Social Insurance Number para trabajar', 'Semana 1 — prioritario', 'canada.ca/sin', 'https://www.canada.ca/en/employment-social-development/services/sin.html'],
                  ['Job Bank Canada', 'Portal de empleo oficial del gobierno', 'Desde semana 1', 'jobbank.gc.ca', 'https://www.jobbank.gc.ca'],
                  ['Indeed Canada', 'Portal más usado en Canadá', 'Desde semana 1', 'indeed.ca', 'https://indeed.ca'],
                  ['LinkedIn Jobs', 'Empresas internacionales', 'Desde semana 1', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Workopolis', 'Vacantes en retail y administración', 'Desde semana 1', 'workopolis.com', 'https://workopolis.com'],
                  ['Glassdoor Canada', 'Vacantes + info de salarios', 'Desde semana 2', 'glassdoor.ca', 'https://glassdoor.ca'],
                  ['Kijiji', 'Clasificados — vivienda y trabajo', 'Semana 1 para vivienda', 'kijiji.ca', 'https://kijiji.ca'],
                  ['Rentals.ca', 'Plataforma de alquiler #1', 'Semana 1 para vivienda', 'rentals.ca', 'https://rentals.ca'],
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

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title={t.sec_vivienda_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes, t.th_usd_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$180 – $250', '$720 – $1,000', '$518 – $720'],
                  ['Cuarto individual', '$300 – $500', '$1,200 – $2,000', '$864 – $1,440'],
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
                  ['Rentals.ca', 'Portal #1 en Canadá', 'Plataforma grande para todo el país', 'rentals.ca', 'https://rentals.ca'],
                  ['Kijiji', 'Clasificados', 'Muy usado para habitaciones compartidas', 'kijiji.ca', 'https://kijiji.ca'],
                  ['PadMapper', 'Portal con mapa', 'Buscador visual para apartamentos', 'padmapper.com', 'https://padmapper.com'],
                  ['Facebook Marketplace', 'Clasificados', 'Muy usado por estudiantes y locales', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Toronto, Vancouver, Montreal', 'Ver grupos', '#'],
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

        {/* EMPLEOS */}
        <Section id="empleos" emoji="🛠️" title={t.sec_empleos_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1153&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <strong>{t.empleos_cv_b}</strong>. {t.empleos_cv_quote}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_cad, t.th_usd_h, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Server / Kitchen Helper', '$16 – $20 CAD', '$11.5 – $14.4', 'Indeed / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$16 – $19 CAD', '$11.5 – $13.7', 'Job Bank / Indeed'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$17 – $21 CAD', '$12.2 – $15.1', 'LinkedIn / hotels directos'],
                  ['Retail', 'Sales Associate', '$16 – $20 CAD', '$11.5 – $14.4', 'Indeed / aplicar en tienda'],
                  ['Delivery', 'Delivery Driver / Courier', '$18 – $25 CAD', '$13 – $18', 'DoorDash / Uber Eats / Indeed'],
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
          <HackBox text={t.empleos_hack} />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title={t.sec_salarios_title}>
          <Intro text={t.salarios_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_salario_cad, t.th_usd_h, t.th_mensual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Server / Kitchen Helper', '$16 – $20 CAD', '$11.5 – $14.4', '$1,280 – $1,600 CAD'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$16 – $19 CAD', '$11.5 – $13.7', '$1,280 – $1,520 CAD'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$17 – $21 CAD', '$12.2 – $15.1', '$1,360 – $1,680 CAD'],
                  ['Retail', 'Sales Associate', '$16 – $20 CAD', '$11.5 – $14.4', '$1,280 – $1,600 CAD'],
                  ['Delivery', 'Driver / Courier', '$18 – $25 CAD', '$13 – $18', '$1,440 – $2,000 CAD'],
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

        {/* TIMELINE */}
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

        {/* PRIMER SALARIO */}
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

        {/* CRISIS */}
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
                  ['Estafa de Vivienda', 'Reportar en Kijiji/Rentals.ca y denunciar en Policía', 'Policía local'],
                  ['Problemas con Study Permit', 'Revisar estado en IRCC o contactar institución educativa', 'canada.ca'],
                  ['Retraso en documentos del college', 'Contactar International Student Office', 'Tu college'],
                  ['Enfermedad / Urgencia médica', 'Hospital público o clínica privada según provincia y seguro', '911'],
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

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇨🇦`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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

        {/* FEEDBACK */}
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Canadá:\n\n' + feedback)}`, '_blank')
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