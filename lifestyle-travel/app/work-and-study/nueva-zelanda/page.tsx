'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Nueva Zelanda',
    hero_sub: 'Oceanía · Work and Study',
    hero_badge: 'Medio',
    stat1_label: 'Capital requerido',
    stat1_value: '$15,000 - $22,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Medio',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Student Visa + 20h/semana + tiempo completo en vacaciones académicas',
      'Post-Study Work Visa: hasta 3 años de trabajo abierto post-graduación',
      'IRD Number gratis — clave para trabajar desde la primera semana',
      'Salario mínimo $23 NZD/hora — entre los más altos del blueprint',
      'Green List: sectores en demanda con camino directo a residencia permanente',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Nueva Zelanda combina lo mejor de Canadá (salarios altos, camino a PR) con lo mejor de Europa (trámites más simples). Salario mínimo de $23 NZD/hora, paisajes únicos y una comunidad internacional activa en Auckland, Wellington y Christchurch.',
    autoridad_p1_label: 'Student Visa:',
    autoridad_p1_text: 'estudia en institutos aprobados (NZQA) y trabaja',
    autoridad_p1_b: 'hasta 20 horas/semana',
    autoridad_p1_mid: 'durante clases y',
    autoridad_p1_b2: 'tiempo completo',
    autoridad_p1_end: 'en vacaciones académicas.',
    autoridad_p2_label: 'Hoja de ruta:',
    autoridad_p2: 'Offer of Place → Student Visa → IRD Number → trabajo → Post-Study Work Visa → Green List → Residencia Permanente.',
    autoridad_blue: '💱 Conversión NZ: 1 NZD ≈ $0.57 USD. NZ$200 ≈ $114 USD. Salario mínimo $23 NZD/hora ≈ $13.1 USD/hora.',
    autoridad_hack: 'El IRD Number es el documento clave para trabajar en Nueva Zelanda. Sin él ningún empleador puede pagarte legalmente. Es gratis y se obtiene en pocos días si ya tienes cuenta bancaria. Solicítalo en tu primera semana — es la prioridad #1.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'En Nueva Zelanda la escuela se elige por ubicación y conexión laboral — cerca de Auckland, Wellington o Christchurch donde hay más oportunidades de trabajo para estudiantes.',
    estrategia_head: '🇳🇿 Matriz de Escuelas de Inglés: Nueva Zelanda 2026',
    th_inst: 'Institución', th_loc: 'Ubicación', th_precio: 'Precio (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvencia obligatoria:',
    solvencia1_val: '~$12,000 – $13,000 USD para cubrir gastos del primer año',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$15,000 – $22,000 USD (curso + visa + gastos iniciales)',
    solvencia3_label: '📍 Mejor estrategia:',
    solvencia3_val: 'ITPs (Institutes of Technology) + Green List para PR rápido',
    estrategia_hack: 'Elige institutos fuera de Auckland para costos más bajos. SIT en Invercargill tiene programas gratuitos para internacionales. Misma calificación para Post-Study Work Visa — 30-40% menos costo.',
    sec_pre_title: 'Pre-Foundations & Pathway Programs',
    pre_intro: 'Los programas University Pathway te preparan para universidades neozelandesas. Al completar un programa Level 7+ en ITP elegible, accedes al Post-Study Work Visa — el permiso más valioso para conseguir PR.',
    th_programa: 'Programa', th_institucion: 'Institución', th_inversion: 'Inversión',
    pre_blue: '🔵 POST-STUDY WORK VISA: Al graduarte de un programa Level 7+ elegible, puedes aplicar al Post-Study Work Visa (hasta 3 años). Con ese permiso acumulas experiencia para aplicar a Skilled Migrant Category o Green List PR.',
    pre_hack: 'Los programas en IT, Ingeniería y Salud están en la Green List — tu empleador puede patrocinar tu residencia casi de inmediato al graduarte. Elige bien tu especialidad y aceleras el camino a PR.',
    sec_edu_title: 'Institutes of Technology (ITPs) — La Ruta Más Inteligente',
    edu_intro: 'Los ITPs son más económicos que las universidades y ofrecen programas prácticos alineados con la demanda laboral. Programas en la Green List = PR rápido con apoyo del empleador.',
    th_ubicacion: 'Ubicación', th_programa_col: 'Programa', th_precio_anual: 'Precio/año USD',
    edu_blue: '💰 GREEN LIST HACK: Si estudias IT, Ingeniería, Construcción o Salud en un ITP, tu empleador puede patrocinar tu residencia permanente casi de inmediato al graduarte. ITP más barato + Green List = camino más rápido a PR en Nueva Zelanda.',
    edu_hack: 'SIT (Southern Institute of Technology) en Invercargill ofrece algunos programas gratuitos bajo el Zero Fees Scheme. Misma calificación para Post-Study Work Visa y Green List. Investiga esta opción antes de elegir instituto.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Nueva Zelanda es más accesible que Canadá en solvencia (~$12,000 vs ~$16,000 USD) pero los costos de vida en Auckland son altos. Ciudades secundarias reducen gastos significativamente.',
    th_concepto: 'Concepto', th_costo: 'Costo', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA: ~$12,000 – $13,000 USD para cubrir gastos del primer año. Sin esta prueba de fondos la Student Visa será rechazada. Adicionalmente: $20,000 NZD mínimos en extractos bancarios.',
    gastos_hack: 'Capital real = precio del instituto + $350 visa + $400 seguro médico + solvencia. Total $15,000-22,000 USD. Más barato que Canadá y con salarios similares.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En Nueva Zelanda el proceso es rápido y ordenado. Banco + IRD Number son las dos prioridades de la primera semana. Sin IRD no puedes trabajar legalmente.',
    student_visa_head: '1. Student Visa — Tu permiso de estudio en Nueva Zelanda',
    pasos: [
      ['Paso 1', 'Entrada con Student Visa aprobada por Immigration New Zealand (INZ)', null],
      ['Paso 2', 'Abrir cuenta bancaria (ANZ o ASB) con pasaporte + Student Visa + dirección en NZ', 'https://www.anz.co.nz'],
      ['Paso 3', 'IRD Number gratis en ird.govt.nz — necesitas cuenta bancaria activa primero', 'https://www.ird.govt.nz'],
      ['Paso 4', 'Buscar habitación permanente (Trade Me, Facebook Marketplace, grupos latinos)', null],
    ],
    pswv_head: '2. Post-Study Work Visa (después de graduarte)',
    pswv_items: [
      ['Aplicas dentro de 6 meses después de graduarte — hasta 3 años de trabajo abierto', null],
      ['Con experiencia acumulada aplicas a Skilled Migrant Category o Green List', null],
      ['Portal oficial de Immigration New Zealand para todos los trámites', 'https://www.immigration.govt.nz'],
    ],
    aterrizaje_hack: 'El orden correcto en NZ es: Banco → IRD Number → trabajo. Banco el mismo día, IRD en 2-3 días. Sin banco no hay IRD. Sin IRD no hay salario legal.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Abre ANZ o ASB tu primera semana — son los más usados por estudiantes internacionales. Con cuenta activa puedes solicitar el IRD Number y empezar a trabajar.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre ANZ o ASB apenas llegues. Con cuenta activa solicitas el IRD Number online en 2-3 días. Esa secuencia banco → IRD → trabajo es el camino más rápido al primer ingreso en NZ.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales para tu proceso en Nueva Zelanda. INZ para todo lo migratorio. IRD para el número fiscal. Seek NZ es el portal de empleo más usado del país.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'Seek NZ es el portal más usado por empresas locales. Si ves una vacante, aplica rápido. Las empresas reciben muchos CV y los primeros candidatos son los que llaman primero.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'Auckland tiene el costo de vivienda más alto de Nueva Zelanda. Wellington y Christchurch son 20-30% más baratas. Ciudades como Dunedin o Invercargill son 40-50% más baratas.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal NZD', th_mes: 'Precio Mensual NZD', th_usd_mes: '≈ USD/mes',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Nueva Zelanda también existen estafas en alquileres online. Nunca envíes dinero sin haber visitado el lugar físicamente.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'Las habitaciones buenas en Auckland desaparecen en 24-48 horas. Considera Christchurch o Dunedin — renta 30-40% más barata y misma calificación para Post-Study Work Visa.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Nueva Zelanda tiene uno de los salarios mínimos más altos del mundo — $23 NZD/hora ($13.1 USD). Con 20h/semana ganas $1,840 NZD/mes (~$1,049 USD).',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'Funciona muy bien en cafés, restaurantes y hoteles. Di:',
    empleos_cv_quote: '"Hi, I\'m looking for a part-time position. I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_nzd: 'Salario/hora NZD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_blue: '💡 FRUIT PICKING HACK: El trabajo agrícola de temporada paga $23-28 NZD/hora y muchas veces incluye alojamiento básico. En temporada alta (dic-mar) puedes trabajar tiempo completo y ahorrar agresivamente.',
    empleos_hack: 'En NZ muchos trabajos se consiguen combinando portales online con visitas en persona. Si aplicas en Seek y además vas en persona, duplicas tus posibilidades.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Nueva Zelanda tiene salario mínimo de $23 NZD/hora. Con 20h/semana ganas ~$1,840 NZD/mes. En vacaciones a tiempo completo ~$3,680 NZD/mes.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Mensual EST. (20h/sem)',
    salarios_blue: '💡 VACACIONES ACADÉMICAS: Tiempo completo (40h/semana) = NZ$3,680 – $4,480/mes (~$2,098 – $2,554 USD). Suficiente para ahorrar significativamente.',
    salarios_hack: 'NZ paga semanal o quincenal — mucho más rápido que Europa. Puedes cobrar tu primer pago en 2-3 semanas desde que empiezas.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Nueva Zelanda tiene el proceso pre-partida más corto de los destinos anglófonos. La Student Visa tarda 4-8 semanas (vs 8-12 en Canadá). Una vez en el país, banco + IRD en una semana.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Elegir instituto + Offer of Place + Prueba de fondos + Aplicar Student Visa', '2-3 meses antes'],
      ['Semana 1', 'Abrir ANZ o ASB (pasaporte + visa) + IRD Number online (2-3 días)', 'Día 1-7'],
      ['Semana 2-4', 'Buscar habitación permanente (Trade Me) + Aplicar en Seek e Indeed NZ', 'Día 7-30'],
      ['Mes 2', 'Conseguir empleo + Primer salario + Estabilizar 20h/semana', 'Día 30-60'],
      ['Al graduarte', 'Aplicar Post-Study Work Visa (dentro de 6 meses) + Green List jobs', 'Post-graduación'],
      ['Años 2-4', 'Acumular experiencia + Skilled Migrant Category o Green List → PR', '2-4 años'],
    ],
    timeline_hack: 'El orden en NZ es: Banco → IRD → trabajo. Banco el día 1, IRD en 2-3 días, empleo en 1-3 semanas. Sin banco no hay IRD. Sin IRD no hay salario legal.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Nueva Zelanda es rápida si haces bien dos cosas: abrir banco y obtener el IRD Number. Con eso, puedes estar trabajando en 1-3 semanas y cobrar en 2-5 semanas.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Student Visa activa', 'Cuenta bancaria abierta', 'IRD Number obtenido', 'Oferta laboral'],
    hito1_time: '👉 Tiempo real: 1-3 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato o acuerdo laboral', 'Alta en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 2-4 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~1-3 semanas desde que llegas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~2-5 semanas desde llegada',
    salario1_hack: 'NZ paga semanal o quincenal. Si empiezas en semana 2, cobras en semana 3-4. Mucho más rápido que Europa. Flujo de caja positivo en menos de un mes desde que llegas.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. Nueva Zelanda tiene un sistema ordenado — sigue el canal correcto y se resuelve rápido.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '111 — Policía, Ambulancia, Bomberos'],
      ['INZ (Inmigración)', 'immigration.govt.nz — Student Visa y permisos'],
      ['IRD (Impuestos)', 'ird.govt.nz — IRD Number y trámites fiscales'],
      ['Work and Income', 'workandincome.govt.nz — Empleo y recursos'],
      ['Comunidad L&T', 'Latinos en Auckland, Wellington, Christchurch — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Nueva Zelanda',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en NZ — links próximamente',
    crisis_hack: 'En NZ muchas oportunidades aparecen primero en comunidades de estudiantes internacionales. Únete a grupos de WhatsApp de latinos en Auckland desde antes de llegar.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Nueva Zelanda como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Student Visa (NZQA approved providers)'],
      ['Duración mínima', '6 meses – 2 años'],
      ['Horas de trabajo', '20h/semana durante clases'],
      ['Vacaciones académicas', 'Tiempo completo (40h/semana)'],
      ['Solvencia obligatoria', '~$12,000 – $13,000 USD'],
      ['Capital total recomendado', '$15,000 – $22,000 USD'],
      ['Student Visa', '$230 – $375 USD'],
      ['IRD Number (para trabajar)', 'Gratis — online en ird.govt.nz'],
      ['Renta cuarto compartido', 'NZ$720 – $1,000/mes'],
      ['Empleos más comunes', 'Hospitality, Retail, Agriculture, Tourism'],
      ['Salario mínimo', '$23 NZD/hora (~$13.1 USD)'],
      ['Tiempo hasta primer trabajo', '1-3 semanas desde llegada'],
      ['Tiempo hasta primer cobro', '2-5 semanas desde llegada'],
      ['Post-graduación', 'Post-Study Work Visa hasta 3 años'],
      ['Camino a PR', 'PSWV → Skilled Migrant / Green List → PR'],
      ['Nivel de dificultad', 'Medio'],
      ['Mejores ciudades', 'Auckland, Wellington, Christchurch'],
      ['Ventaja única', 'Salario mínimo alto + Green List + naturaleza única'],
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
    hero_title: 'Nova Zelândia',
    hero_sub: 'Oceania · Work and Study',
    hero_badge: 'Médio',
    stat1_label: 'Capital necessário',
    stat1_value: '$15.000 - $22.000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Médio',
    included_title: 'O que inclui o Blueprint',
    included: [
      'Student Visa + 20h/semana + período integral nas férias acadêmicas',
      'Post-Study Work Visa: até 3 anos de trabalho aberto pós-graduação',
      'IRD Number gratuito — chave para trabalhar desde a primeira semana',
      'Salário mínimo $23 NZD/hora — entre os mais altos do blueprint',
      'Green List: setores em demanda com caminho direto para residência permanente',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Nova Zelândia combina o melhor do Canadá (salários altos, caminho para PR) com processos mais simples. Salário mínimo de $23 NZD/hora, paisagens únicas e comunidade internacional ativa em Auckland, Wellington e Christchurch.',
    autoridad_p1_label: 'Student Visa:',
    autoridad_p1_text: 'permite estudar em institutos aprovados (NZQA) e trabalhar',
    autoridad_p1_b: 'até 20 horas/semana',
    autoridad_p1_mid: 'durante as aulas e',
    autoridad_p1_b2: 'período integral',
    autoridad_p1_end: 'nas férias acadêmicas.',
    autoridad_p2_label: 'Roteiro:',
    autoridad_p2: 'Offer of Place → Student Visa → IRD Number → trabalho → Post-Study Work Visa → Green List → Residência Permanente.',
    autoridad_blue: '💱 Conversão NZ: 1 NZD ≈ $0,57 USD. NZ$200 ≈ $114 USD. Salário mínimo $23 NZD/hora ≈ $13,1 USD/hora.',
    autoridad_hack: 'O IRD Number é o documento chave para trabalhar na Nova Zelândia. Sem ele nenhum empregador pode te pagar legalmente. É gratuito e se obtém em poucos dias. Solicite na primeira semana — prioridade #1.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Na Nova Zelândia a escola se escolhe por localização e conexão laboral — perto de Auckland, Wellington ou Christchurch onde há mais oportunidades de trabalho.',
    estrategia_head: '🇳🇿 Matriz de Escolas de Inglês: Nova Zelândia 2026',
    th_inst: 'Instituição', th_loc: 'Localização', th_precio: 'Preço (24 semanas)', th_web: 'Website',
    solvencia1_label: '🔴 Solvência obrigatória:',
    solvencia1_val: '~$12.000 – $13.000 USD para cobrir despesas do primeiro ano',
    solvencia2_label: '🟢 Capital total recomendado:',
    solvencia2_val: '$15.000 – $22.000 USD (curso + visto + despesas iniciais)',
    solvencia3_label: '📍 Melhor estratégia:',
    solvencia3_val: 'ITPs (Institutes of Technology) + Green List para PR rápido',
    estrategia_hack: 'Escolha institutos fora de Auckland para custos mais baixos. SIT em Invercargill tem programas gratuitos para internacionais. Mesma qualificação para Post-Study Work Visa — 30-40% menos custo.',
    sec_pre_title: 'Pré-Fundações & Programas de Acesso',
    pre_intro: 'Os programas University Pathway te preparam para universidades neozelandesas. Ao completar um programa Level 7+ em ITP elegível, você acessa o Post-Study Work Visa.',
    th_programa: 'Programa', th_institucion: 'Instituição', th_inversion: 'Investimento',
    pre_blue: '🔵 POST-STUDY WORK VISA: Ao se formar em programa Level 7+ elegível, você pode solicitar o Post-Study Work Visa (até 3 anos) para acumular experiência e aplicar ao Green List PR.',
    pre_hack: 'Programas em TI, Engenharia e Saúde estão na Green List — seu empregador pode patrocinar sua residência quase imediatamente ao se formar.',
    sec_edu_title: 'Institutes of Technology (ITPs) — A Rota Mais Inteligente',
    edu_intro: 'Os ITPs são mais econômicos que as universidades e oferecem programas práticos alinhados com a demanda real do mercado. Green List = PR rápido com apoio do empregador.',
    th_ubicacion: 'Localização', th_programa_col: 'Programa', th_precio_anual: 'Preço/ano USD',
    edu_blue: '💰 GREEN LIST HACK: Se você estudar TI, Engenharia, Construção ou Saúde em um ITP, seu empregador pode patrocinar sua residência permanente quase imediatamente ao se formar.',
    edu_hack: 'SIT em Invercargill oferece programas gratuitos sob o Zero Fees Scheme. Mesma qualificação para Post-Study Work Visa e Green List. Pesquise antes de escolher.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'A Nova Zelândia é mais acessível que o Canadá em solvência (~$12.000 vs ~$16.000 USD) mas os custos em Auckland são altos. Cidades secundárias reduzem despesas significativamente.',
    th_concepto: 'Conceito', th_costo: 'Custo', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA: ~$12.000 – $13.000 USD para cobrir despesas do primeiro ano. Sem essa prova de fundos a Student Visa será rejeitada.',
    gastos_hack: 'Capital real = preço do instituto + $350 visto + $400 seguro médico + solvência. Total $15.000-22.000 USD. Mais barato que o Canadá e com salários similares.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Na Nova Zelândia o processo é rápido e ordenado. Banco + IRD Number são as duas prioridades da primeira semana. Sem IRD você não pode trabalhar legalmente.',
    student_visa_head: '1. Student Visa — Sua permissão de estudo na Nova Zelândia',
    pasos: [
      ['Passo 1', 'Entrada com Student Visa aprovada pela Immigration New Zealand (INZ)', null],
      ['Passo 2', 'Abrir conta bancária (ANZ ou ASB) com passaporte + Student Visa + endereço em NZ', 'https://www.anz.co.nz'],
      ['Passo 3', 'IRD Number gratuito em ird.govt.nz — você precisa de conta bancária ativa primeiro', 'https://www.ird.govt.nz'],
      ['Passo 4', 'Buscar quarto permanente (Trade Me, Facebook Marketplace, grupos latinos)', null],
    ],
    pswv_head: '2. Post-Study Work Visa (após se formar)',
    pswv_items: [
      ['Solicite dentro de 6 meses após se formar — até 3 anos de trabalho aberto', null],
      ['Com experiência acumulada solicite Skilled Migrant Category ou Green List', null],
      ['Portal oficial da Immigration New Zealand para todos os procedimentos', 'https://www.immigration.govt.nz'],
    ],
    aterrizaje_hack: 'A ordem correta na NZ é: Banco → IRD Number → trabalho. Banco no mesmo dia, IRD em 2-3 dias. Sem banco não há IRD. Sem IRD não há salário legal.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Abra ANZ ou ASB na primeira semana — são os mais usados por estudantes internacionais. Com conta ativa você pode solicitar o IRD Number e começar a trabalhar.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra ANZ ou ASB assim que chegar. Com conta ativa solicite o IRD Number online em 2-3 dias. Essa sequência banco → IRD → trabalho é o caminho mais rápido para a primeira renda.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais para seu processo na Nova Zelândia. INZ para tudo migratório. IRD para o número fiscal. Seek NZ é o portal de emprego mais usado do país.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Seek NZ é o portal mais usado pelas empresas locais. Se ver uma vaga, aplique rápido. As empresas recebem muitos CVs e os primeiros candidatos são os que chamam primeiro.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'Auckland tem o custo de moradia mais alto. Wellington e Christchurch são 20-30% mais baratas. Cidades como Dunedin ou Invercargill são 40-50% mais baratas.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal NZD', th_mes: 'Preço Mensal NZD', th_usd_mes: '≈ USD/mês',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. Também existem golpes em aluguéis online na NZ. Nunca envie dinheiro sem ter visitado fisicamente.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Os bons quartos em Auckland desaparecem em 24-48 horas. Considere Christchurch ou Dunedin — aluguel 30-40% mais barato e mesma qualificação para Post-Study Work Visa.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'A Nova Zelândia tem salário mínimo de $23 NZD/hora ($13,1 USD). Com 20h/semana você ganha $1.840 NZD/mês (~$1.049 USD). Nas férias em período integral isso dobra.',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'Funciona muito bem em cafés, restaurantes e hotéis. Diga:',
    empleos_cv_quote: '"Hi, I\'m looking for a part-time position. I have immediate availability."',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_nzd: 'Salário/hora NZD', th_usd_h: '≈ USD/hora', th_canal_emp: 'Canal',
    empleos_blue: '💡 FRUIT PICKING HACK: Trabalho agrícola de temporada paga $23-28 NZD/hora e muitas vezes inclui alojamento. Na alta temporada (dez-mar) você pode trabalhar em período integral e economizar muito.',
    empleos_hack: 'Na NZ muitos trabalhos se conseguem combinando portais online com visitas pessoais. Se aplicar no Seek e também for pessoalmente, dobra suas chances.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Salário mínimo de $23 NZD/hora. Com 20h/semana você ganha ~$1.840 NZD/mês. Nas férias em período integral ~$3.680 NZD/mês.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Mensal EST. (20h/sem)',
    salarios_blue: '💡 FÉRIAS ACADÊMICAS: Período integral = NZ$3.680 – $4.480/mês (~$2.098 – $2.554 USD). Suficiente para economizar significativamente.',
    salarios_hack: 'NZ paga semanal ou quinzenal — muito mais rápido que a Europa. Você pode receber o primeiro pagamento em 2-3 semanas desde que começa.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'A Nova Zelândia tem o processo pré-partida mais curto dos destinos anglófonos. A Student Visa demora 4-8 semanas (vs 8-12 no Canadá). Uma vez no país, banco + IRD em uma semana.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Escolher instituto + Offer of Place + Prova de fundos + Solicitar Student Visa', '2-3 meses antes'],
      ['Semana 1', 'Abrir ANZ ou ASB (passaporte + visto) + IRD Number online (2-3 dias)', 'Dia 1-7'],
      ['Semana 2-4', 'Buscar quarto permanente (Trade Me) + Aplicar no Seek e Indeed NZ', 'Dia 7-30'],
      ['Mês 2', 'Conseguir emprego + Primeiro salário + Estabilizar 20h/semana', 'Dia 30-60'],
      ['Ao se formar', 'Solicitar Post-Study Work Visa (dentro de 6 meses) + Green List jobs', 'Pós-graduação'],
      ['Anos 2-4', 'Acumular experiência + Skilled Migrant Category ou Green List → PR', '2-4 anos'],
    ],
    timeline_hack: 'A ordem na NZ é: Banco → IRD → trabalho. Banco no dia 1, IRD em 2-3 dias, emprego em 1-3 semanas. Essa sequência rápida é o que torna a NZ mais eficiente que muitos destinos europeus.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'A Nova Zelândia é rápida se você fizer duas coisas: abrir banco e obter o IRD Number. Você pode estar trabalhando em 1-3 semanas e receber em 2-5 semanas.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Student Visa ativa', 'Conta bancária aberta', 'IRD Number obtido', 'Oferta de trabalho'],
    hito1_time: '👉 Tempo real: 1-3 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato ou acordo de trabalho', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 2-4 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~1-3 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~2-5 semanas desde chegada',
    salario1_hack: 'NZ paga semanal ou quinzenal. Se começar na semana 2, recebe na semana 3-4. Muito mais rápido que a Europa. Fluxo de caixa positivo em menos de um mês desde que chega.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. A Nova Zelândia tem um sistema ordenado — siga o canal correto e se resolve rápido.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '111 — Polícia, Ambulância, Bombeiros'],
      ['INZ (Imigração)', 'immigration.govt.nz — Student Visa e permissões'],
      ['IRD (Impostos)', 'ird.govt.nz — IRD Number e trâmites fiscais'],
      ['Work and Income', 'workandincome.govt.nz — Emprego e recursos'],
      ['Comunidade L&T', 'Latinos em Auckland, Wellington, Christchurch — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Nova Zelândia',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na NZ — links em breve',
    crisis_hack: 'Na NZ muitas oportunidades aparecem primeiro em comunidades de estudantes internacionais. Entre em grupos de WhatsApp de latinos em Auckland antes de chegar.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Nova Zelândia como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Student Visa (NZQA approved providers)'],
      ['Duração mínima', '6 meses – 2 anos'],
      ['Horas de trabalho', '20h/semana durante aulas'],
      ['Férias acadêmicas', 'Período integral (40h/semana)'],
      ['Solvência obrigatória', '~$12.000 – $13.000 USD'],
      ['Capital total recomendado', '$15.000 – $22.000 USD'],
      ['Student Visa', '$230 – $375 USD'],
      ['IRD Number (para trabalhar)', 'Gratuito — online em ird.govt.nz'],
      ['Aluguel quarto compartilhado', 'NZ$720 – $1.000/mês'],
      ['Empregos mais comuns', 'Hotelaria, Varejo, Agricultura, Turismo'],
      ['Salário mínimo', '$23 NZD/hora (~$13,1 USD)'],
      ['Tempo até primeiro trabalho', '1-3 semanas desde chegada'],
      ['Tempo até primeiro pagamento', '2-5 semanas desde chegada'],
      ['Pós-graduação', 'Post-Study Work Visa até 3 anos'],
      ['Caminho para PR', 'PSWV → Skilled Migrant / Green List → PR'],
      ['Nível de dificuldade', 'Médio'],
      ['Melhores cidades', 'Auckland, Wellington, Christchurch'],
      ['Vantagem única', 'Salário mínimo alto + Green List + natureza única'],
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
    hero_title: 'New Zealand',
    hero_sub: 'Oceania · Work and Study',
    hero_badge: 'Medium',
    stat1_label: 'Required Capital',
    stat1_value: '$15,000 - $22,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Medium',
    included_title: 'What the Blueprint Includes',
    included: [
      'Student Visa + 20h/week + full time during academic holidays',
      'Post-Study Work Visa: up to 3 years of open work post-graduation',
      'Free IRD Number — key to working from the first week',
      'Minimum wage $23 NZD/hour — among the highest in the blueprint',
      'Green List: in-demand sectors with direct path to permanent residency',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'New Zealand combines high salaries and a clear path to PR with simpler procedures than Canada. Minimum wage of $23 NZD/hour, unique landscapes and an active international community in Auckland, Wellington and Christchurch.',
    autoridad_p1_label: 'Student Visa:',
    autoridad_p1_text: 'study at approved institutes (NZQA) and work',
    autoridad_p1_b: 'up to 20 hours/week',
    autoridad_p1_mid: 'during classes and',
    autoridad_p1_b2: 'full time',
    autoridad_p1_end: 'during academic holidays.',
    autoridad_p2_label: 'Roadmap:',
    autoridad_p2: 'Offer of Place → Student Visa → IRD Number → work → Post-Study Work Visa → Green List → Permanent Residency.',
    autoridad_blue: '💱 NZ conversion: 1 NZD ≈ $0.57 USD. NZ$200 ≈ $114 USD. Minimum wage $23 NZD/hour ≈ $13.1 USD/hour.',
    autoridad_hack: 'The IRD Number is the key document to work in New Zealand. Without it no employer can legally pay you. It\'s free and takes a few days. Apply in your first week — priority #1.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'In New Zealand the school is chosen by location and job connection — near Auckland, Wellington or Christchurch where there are more work opportunities for students.',
    estrategia_head: '🇳🇿 English Schools Matrix: New Zealand 2026',
    th_inst: 'Institution', th_loc: 'Location', th_precio: 'Price (24 weeks)', th_web: 'Website',
    solvencia1_label: '🔴 Mandatory funds:',
    solvencia1_val: '~$12,000 – $13,000 USD to cover first year expenses',
    solvencia2_label: '🟢 Total recommended capital:',
    solvencia2_val: '$15,000 – $22,000 USD (course + visa + initial costs)',
    solvencia3_label: '📍 Best strategy:',
    solvencia3_val: 'ITPs (Institutes of Technology) + Green List for fast PR',
    estrategia_hack: 'Choose institutes outside Auckland for lower costs. SIT in Invercargill has free programs for internationals. Same qualification for Post-Study Work Visa — 30-40% less cost.',
    sec_pre_title: 'Pre-Foundations & Pathway Programs',
    pre_intro: 'University Pathway programs prepare you for NZ universities. Upon completing a Level 7+ program at an eligible ITP, you access the Post-Study Work Visa.',
    th_programa: 'Program', th_institucion: 'Institution', th_inversion: 'Investment',
    pre_blue: '🔵 POST-STUDY WORK VISA: Upon graduating from an eligible Level 7+ program, you can apply for the Post-Study Work Visa (up to 3 years) to accumulate experience for Green List PR.',
    pre_hack: 'Programs in IT, Engineering and Health are on the Green List — your employer can sponsor your residency almost immediately upon graduating.',
    sec_edu_title: 'Institutes of Technology (ITPs) — The Smartest Route',
    edu_intro: 'ITPs are more affordable than universities and offer practical programs aligned with real labor demand. Green List programs = fast PR with employer support.',
    th_ubicacion: 'Location', th_programa_col: 'Program', th_precio_anual: 'Price/year USD',
    edu_blue: '💰 GREEN LIST HACK: If you study IT, Engineering, Construction or Health at an ITP, your employer can sponsor your permanent residency almost immediately upon graduating.',
    edu_hack: 'SIT in Invercargill offers free programs under the Zero Fees Scheme. Same qualification for Post-Study Work Visa and Green List. Research before choosing.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'New Zealand is more accessible than Canada in required funds (~$12,000 vs ~$16,000 USD) but Auckland living costs are high. Secondary cities reduce expenses significantly.',
    th_concepto: 'Item', th_costo: 'Cost', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS: ~$12,000 – $13,000 USD to cover first year expenses. Without this proof the Student Visa will be rejected.',
    gastos_hack: 'Real capital = institute price + $350 visa + $400 health insurance + funds. Total $15,000-22,000 USD. Cheaper than Canada with similar salaries.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In New Zealand the process is fast and orderly. Bank + IRD Number are the two priorities of the first week. Without IRD you cannot work legally.',
    student_visa_head: '1. Student Visa — Your study permit in New Zealand',
    pasos: [
      ['Step 1', 'Entry with Student Visa approved by Immigration New Zealand (INZ)', null],
      ['Step 2', 'Open bank account (ANZ or ASB) with passport + Student Visa + NZ address', 'https://www.anz.co.nz'],
      ['Step 3', 'Free IRD Number at ird.govt.nz — you need an active bank account first', 'https://www.ird.govt.nz'],
      ['Step 4', 'Find permanent room (Trade Me, Facebook Marketplace, Latino groups)', null],
    ],
    pswv_head: '2. Post-Study Work Visa (after graduating)',
    pswv_items: [
      ['Apply within 6 months after graduating — up to 3 years of open work', null],
      ['With accumulated experience apply for Skilled Migrant Category or Green List', null],
      ['Official Immigration New Zealand portal for all procedures', 'https://www.immigration.govt.nz'],
    ],
    aterrizaje_hack: 'The correct order in NZ is: Bank → IRD Number → work. Bank same day, IRD in 2-3 days. Without bank no IRD. Without IRD no legal salary.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Open ANZ or ASB in your first week — most used by international students. With active account you can apply for IRD Number and start working.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open ANZ or ASB as soon as you arrive. With active account apply for IRD Number online in 2-3 days. That bank → IRD → work sequence is the fastest path to first income.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Official portals for your process in New Zealand. INZ for migration. IRD for tax number. Seek NZ is the most used employment portal.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'Seek NZ is the most used portal by local companies. If you see a vacancy, apply fast. Companies receive many CVs and the first candidates are the ones they call first.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Auckland has the highest housing cost. Wellington and Christchurch are 20-30% cheaper. Cities like Dunedin or Invercargill are 40-50% cheaper.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price NZD', th_mes: 'Monthly Price NZD', th_usd_mes: '≈ USD/month',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. Online rental scams also exist in NZ. Never send money without physically visiting.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'Good rooms in Auckland disappear in 24-48 hours. Consider Christchurch or Dunedin — rent 30-40% cheaper and same qualification for Post-Study Work Visa.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'New Zealand has a minimum wage of $23 NZD/hour ($13.1 USD). With 20h/week you earn $1,840 NZD/month (~$1,049 USD). During holidays full time that doubles.',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'Works very well at cafés, restaurants and hotels. Say:',
    empleos_cv_quote: '"Hi, I\'m looking for a part-time position. I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_nzd: 'Wage/hour NZD', th_usd_h: '≈ USD/hour', th_canal_emp: 'Channel',
    empleos_blue: '💡 FRUIT PICKING HACK: Seasonal agricultural work pays $23-28 NZD/hour and often includes accommodation. In peak season (Dec-Mar) you can work full time and save aggressively.',
    empleos_hack: 'In NZ many student jobs are found combining online portals with in-person visits. If you apply on Seek and also go in person, you double your chances.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'New Zealand minimum wage is $23 NZD/hour. With 20h/week you earn ~$1,840 NZD/month. During academic holidays full time ~$3,680 NZD/month.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Monthly EST. (20h/wk)',
    salarios_blue: '💡 ACADEMIC HOLIDAYS: Full time = NZ$3,680 – $4,480/month (~$2,098 – $2,554 USD). Enough to save significantly.',
    salarios_hack: 'NZ pays weekly or biweekly — much faster than Europe. You can receive your first payment in 2-3 weeks from when you start.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'New Zealand has the shortest pre-departure process of English-speaking destinations. Student Visa takes 4-8 weeks (vs 8-12 in Canada). Once in country, bank + IRD in one week.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Choose institute + Offer of Place + Proof of funds + Apply Student Visa', '2-3 months before'],
      ['Week 1', 'Open ANZ or ASB (passport + visa) + IRD Number online (2-3 days)', 'Day 1-7'],
      ['Week 2-4', 'Find permanent room (Trade Me) + Apply on Seek and Indeed NZ', 'Day 7-30'],
      ['Month 2', 'Find employment + First salary + Stabilize 20h/week', 'Day 30-60'],
      ['Upon graduating', 'Apply Post-Study Work Visa (within 6 months) + Green List jobs', 'Post-graduation'],
      ['Years 2-4', 'Accumulate experience + Skilled Migrant Category or Green List → PR', '2-4 years'],
    ],
    timeline_hack: 'The order in NZ is: Bank → IRD → work. Bank day 1, IRD in 2-3 days, employment in 1-3 weeks. Without bank no IRD. Without IRD no legal salary.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'New Zealand is fast if you do two things right: open a bank account and get the IRD Number. You can be working in 1-3 weeks and receive payment in 2-5 weeks.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active Student Visa', 'Bank account opened', 'IRD Number obtained', 'Job offer'],
    hito1_time: '👉 Real timeline: 1-3 weeks from arrival',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Employment contract or agreement', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 2-4 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~1-3 weeks from arrival',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~2-5 weeks from arrival',
    salario1_hack: 'NZ pays weekly or biweekly. If you start in week 2, you receive payment in week 3-4. Much faster than Europe. Positive cash flow in less than a month from arrival.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. New Zealand has an orderly system — follow the correct channel and it resolves quickly.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '111 — Police, Ambulance, Fire'],
      ['INZ (Immigration)', 'immigration.govt.nz — Student Visa and permits'],
      ['IRD (Tax)', 'ird.govt.nz — IRD Number and tax procedures'],
      ['Work and Income', 'workandincome.govt.nz — Employment and resources'],
      ['L&T Community', 'Latinos in Auckland, Wellington, Christchurch — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in New Zealand',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in NZ — links coming soon',
    crisis_hack: 'In NZ many opportunities appear first in international student communities. Join WhatsApp groups of Latinos in Auckland before arriving.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of New Zealand as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa (NZQA approved providers)'],
      ['Minimum duration', '6 months – 2 years'],
      ['Work hours', '20h/week during classes'],
      ['Academic holidays', 'Full time (40h/week)'],
      ['Mandatory funds', '~$12,000 – $13,000 USD'],
      ['Total recommended capital', '$15,000 – $22,000 USD'],
      ['Student Visa', '$230 – $375 USD'],
      ['IRD Number (to work)', 'Free — online at ird.govt.nz'],
      ['Shared room rent', 'NZ$720 – $1,000/month'],
      ['Most common jobs', 'Hospitality, Retail, Agriculture, Tourism'],
      ['Minimum wage', '$23 NZD/hour (~$13.1 USD)'],
      ['Time to first job', '1-3 weeks from arrival'],
      ['Time to first payment', '2-5 weeks from arrival'],
      ['Post-graduation', 'Post-Study Work Visa up to 3 years'],
      ['Path to PR', 'PSWV → Skilled Migrant / Green List → PR'],
      ['Difficulty level', 'Medium'],
      ['Best cities', 'Auckland, Wellington, Christchurch'],
      ['Unique advantage', 'High minimum wage + Green List + unique nature'],
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

export default function NuevaZelanda() {
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1171&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇳🇿</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>{t.hero_badge}</span>
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531804159968-24716780d214?q=80&w=688&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
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
              <thead><tr>{[t.th_inst, t.th_loc, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['NZLC', 'Auckland / Wellington', '$3,200 – $4,000', 'nzlc.ac.nz', 'https://nzlc.ac.nz'],
                  ['LSI Auckland', 'Auckland', '$3,200 – $4,000', 'lsi.edu', 'https://lsi.edu'],
                  ['Worldwide School of English', 'Auckland', '$3,300 – $4,100', 'worldwide.ac.nz', 'https://worldwide.ac.nz'],
                  ['Languages International', 'Auckland', '$3,400 – $4,200', 'languages.ac.nz', 'https://languages.ac.nz'],
                  ['Kaplan International', 'Auckland', '$3,500 – $4,400', 'kaplaninternational.com', 'https://kaplaninternational.com'],
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
                  ['University Pathway', 'NZLC', '$9,500 – $12,500', 'nzlc.ac.nz', 'https://nzlc.ac.nz'],
                  ['Academic English', 'Worldwide School of English', '$9,800 – $12,000', 'worldwide.ac.nz', 'https://worldwide.ac.nz'],
                  ['College Pathway', 'LSI Auckland', '$9,500 – $12,000', 'lsi.edu', 'https://lsi.edu'],
                  ['Academic Pathway', 'Languages International', '$10,000 – $13,000', 'languages.ac.nz', 'https://languages.ac.nz'],
                  ['University Preparation', 'Kaplan International', '$11,000 – $14,000', 'kaplaninternational.com', 'https://kaplaninternational.com'],
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
              <thead><tr>{[t.th_inst, t.th_ubicacion, t.th_programa_col, t.th_precio_anual, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Southern Institute of Technology (SIT)', 'Invercargill', 'Business / IT / Hospitality', '$11,000 – $14,000', 'sit.ac.nz', 'https://www.sit.ac.nz'],
                  ['Otago Polytechnic', 'Dunedin / Auckland', 'Design / IT / Business', '$13,000 – $17,000', 'op.ac.nz', 'https://www.op.ac.nz'],
                  ['Ara Institute of Canterbury', 'Christchurch', 'Engineering / Business', '$13,000 – $18,000', 'ara.ac.nz', 'https://www.ara.ac.nz'],
                  ['Toi Ohomai Institute', 'Tauranga / Rotorua', 'Tourism / IT / Business', '$14,000 – $18,000', 'toiohomai.ac.nz', 'https://www.toiohomai.ac.nz'],
                  ['Manukau Institute of Technology', 'Auckland', 'Trades / Engineering / Business', '$15,000 – $19,000', 'manukau.ac.nz', 'https://www.manukau.ac.nz'],
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
                  ['Seguro médico internacional', '$300 – $600/año', '✅ Sí'],
                  ['Student Visa (INZ Fee)', '$230 – $375 USD', '✅ Sí'],
                  ['Examen médico y Rayos X', '$150 – $250', '✅ Si requerido'],
                  ['Materiales / Libros', '$150 – $300', '✅ Sí'],
                  ['IRD Number (número fiscal)', 'Gratis', '✅ Para trabajar'],
                  ['Solvencia obligatoria', '~$12,000 – $13,000 USD', '✅ Obligatorio visa'],
                  ['Capital total recomendado', '$15,000 – $22,000 USD', '✅ Para arrancar bien'],
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
          <SubHead text={t.pswv_head} />
          {t.pswv_items.map((item, i) => (
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
                  ['ANZ Bank NZ', 'Tradicional', 'El más grande. Muy usado por estudiantes internacionales. Cuenta activa el mismo día.', 'anz.co.nz', 'https://www.anz.co.nz'],
                  ['ASB Bank', 'Tradicional', 'Cuenta sencilla para estudiantes con excelente app móvil.', 'asb.co.nz', 'https://www.asb.co.nz'],
                  ['BNZ (Bank of New Zealand)', 'Tradicional', 'Gran red de sucursales. Buenos servicios para newcomers.', 'bnz.co.nz', 'https://www.bnz.co.nz'],
                  ['Westpac NZ', 'Tradicional', 'Banco internacional con cuentas para estudiantes y migrantes.', 'westpac.co.nz', 'https://www.westpac.co.nz'],
                  ['Wise', 'Digital', 'Ideal para transferencias internacionales y conversión de divisas.', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Banca digital popular entre estudiantes internacionales.', 'revolut.com', 'https://revolut.com'],
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
                  ['Immigration NZ (INZ)', 'Student Visa, permisos de trabajo y residencia', 'Antes de viajar + seguimiento', 'immigration.govt.nz', 'https://www.immigration.govt.nz'],
                  ['Inland Revenue (IRD)', 'IRD Number para trabajar y pagar impuestos', 'Semana 1 — prioritario', 'ird.govt.nz', 'https://www.ird.govt.nz'],
                  ['Work and Income NZ', 'Ofertas de empleo y recursos laborales', 'Desde semana 1', 'workandincome.govt.nz', 'https://www.workandincome.govt.nz'],
                  ['Seek NZ', 'Portal de empleo más usado en NZ', 'Desde semana 1', 'seek.co.nz', 'https://www.seek.co.nz'],
                  ['Indeed NZ', 'Vacantes de todo tipo', 'Desde semana 1', 'nz.indeed.com', 'https://nz.indeed.com'],
                  ['Trade Me Jobs', 'Muy usado por empresas locales', 'Desde semana 1', 'trademe.co.nz/jobs', 'https://www.trademe.co.nz/jobs'],
                  ['Backpacker Board', 'Hospitality y trabajos temporales', 'Desde semana 1', 'backpackerboard.co.nz', 'https://www.backpackerboard.co.nz'],
                  ['Seasonal Jobs NZ', 'Fruit picking y trabajos de temporada', 'Según temporada', 'seasonaljobs.co.nz', 'https://www.seasonaljobs.co.nz'],
                  ['Trade Me (vivienda)', 'Portal #1 para alquiler en NZ', 'Semana 1 para vivienda', 'trademe.co.nz', 'https://www.trademe.co.nz'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595125989588-36d745a2a828?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes, t.th_usd_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', 'NZ$180 – $250', 'NZ$720 – $1,000', '$411 – $570'],
                  ['Cuarto individual', 'NZ$280 – $400', 'NZ$1,120 – $1,600', '$638 – $912'],
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
                  ['Trade Me', 'Portal #1 en NZ', 'El portal más usado para alquiler en todo el país', 'trademe.co.nz', 'https://www.trademe.co.nz'],
                  ['Realestate.co.nz', 'Portal inmobiliario', 'Plataforma profesional para alquileres verificados', 'realestate.co.nz', 'https://www.realestate.co.nz'],
                  ['Facebook Marketplace', 'Clasificados', 'Muy usado por estudiantes y locales para alquileres rápidos', 'facebook.com/marketplace', 'https://facebook.com/marketplace'],
                  ['Airbnb', 'Temporal', 'Primeras 1-2 semanas mientras buscas permanente', 'airbnb.com', 'https://airbnb.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinos en Auckland, Wellington, Christchurch', 'Ver grupos', '#'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589364902763-41b8c0a099c5?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <em>{t.empleos_cv_quote}</em>
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_nzd, t.th_usd_h, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Kitchen Hand', '$23 – $26 NZD', '$13.1 – $14.8', 'Seek / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $25 NZD', '$13.1 – $14.3', 'Indeed NZ / Agencias'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$24 – $27 NZD', '$13.7 – $15.4', 'Seek / hoteles directos'],
                  ['Retail', 'Sales Assistant', '$23 – $26 NZD', '$13.1 – $14.8', 'Trade Me Jobs / malls'],
                  ['Agriculture', 'Fruit Picker / Farm Worker', '$23 – $28 NZD', '$13.1 – $16', 'Seasonal Jobs NZ / Backpacker Board'],
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
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_salario_nzd, t.th_usd_h, t.th_mensual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Kitchen Hand', '$23 – $26 NZD', '$13.1 – $14.8', 'NZ$1,840 – $2,080'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$23 – $25 NZD', '$13.1 – $14.3', 'NZ$1,840 – $2,000'],
                  ['Hotels', 'Front Desk / Hotel Staff', '$24 – $27 NZD', '$13.7 – $15.4', 'NZ$1,920 – $2,160'],
                  ['Retail', 'Sales Assistant', '$23 – $26 NZD', '$13.1 – $14.8', 'NZ$1,840 – $2,080'],
                  ['Agriculture', 'Fruit Picker / Farm Worker', '$23 – $28 NZD', '$13.1 – $16', 'NZ$1,840 – $2,240'],
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
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#166634', margin: '0 0 10px' }}>{t.hito1_title}</p>
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía NZ y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Trade Me/Facebook y denunciar en Policía', 'Policía NZ'],
                  ['Problemas con Student Visa', 'Revisar en INZ o contactar institución educativa', 'immigration.govt.nz'],
                  ['Retraso en documentos del instituto', 'Contactar International Student Office', 'Tu instituto'],
                  ['Enfermedad / Urgencia médica', 'Hospital público o clínica privada según seguro', '111'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1630406379079-b40993ae203e?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇳🇿`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Nueva Zelanda:\n\n' + feedback)}`, '_blank')
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