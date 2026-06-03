'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Georgia',
    hero_sub: 'Cáucaso · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Capital recomendado',
    stat1_value: '$2,000 - $3,000',
    stat2_label: 'Estancia visa-free',
    stat2_value: '365 días',
    stat3_label: 'Dificultad',
    stat3_value: 'Fácil',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      '365 días sin visa — sin entrevistas, sin cartas de aceptación, sin trámites previos',
      'Individual Entrepreneur + 1% de impuestos — el régimen fiscal más favorable para freelancers',
      'Cuenta bancaria en 24-48 horas solo con pasaporte — sin NIF ni representante fiscal',
      'Costo de vida entre los más bajos del blueprint — habitación desde $240/mes',
      'Comunidad de digital nomads activa en Tbilisi y Batumi',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Georgia es el destino más accesible del blueprint. 365 días sin visa, sin trámites previos, sin solvencia obligatoria. Entras con pasaporte y tienes un año para organizar tu actividad económica desde dentro del país. El registro como Individual Entrepreneur con 1% de impuestos es la joya del sistema.',
    autoridad_p1_label: 'La diferencia clave vs Europa:',
    autoridad_p1: 'No dependes de una visa o patrocinio antes de viajar. Entras primero y organizas tu actividad económica desde dentro del país sin un proceso migratorio largo.',
    autoridad_p2_label: 'Acelerador de puesta en marcha:',
    autoridad_p2: 'registro como Individual Entrepreneur → Small Business Status (1% tax) → cuenta bancaria → primer ingreso. Todo en menos de 2 semanas.',
    autoridad_blue: '💱 Conversión Georgia: 1 GEL ≈ $0.37 USD. $100 USD ≈ 270 GEL. Todos los precios locales en GEL con equivalente en USD.',
    autoridad_hack: '365 días visa-free es la gran ventaja de Georgia. Eso te compra tiempo para hacer lo importante sin ansiedad. Mucha gente usa las primeras semanas para registrarse como Individual Entrepreneur y activar el régimen fiscal del 1%. Esa decisión puede ahorrarte miles de dólares en impuestos.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto',
    estrategia_intro: 'Georgia tiene tres rutas económicas principales. Elige la que corresponde a tu situación antes de llegar. No necesitas elegir antes de viajar — puedes decidir durante los primeros días en Tbilisi.',
    ruta1_head: 'Ruta 1: Freelancer / Individual Entrepreneur (la más popular)',
    ruta1_para: 'Para quién:', ruta1_para_val: 'Freelancers, trabajadores remotos, emprendedores digitales',
    ruta1_imp: 'Impuestos:', ruta1_imp_val: 'Solo 1% sobre ingresos hasta ~$180,000/año',
    ruta1_reg: 'Registro:', ruta1_reg_val: 'Public Service Hall — mismo día, ~20-50 GEL (€7-18)',
    ruta1_vent: 'Ventaja:', ruta1_vent_val: 'Factura internacionalmente, sin reportes complejos, sin IVA',
    ruta2_head: 'Ruta 2: Empleo local (con empresa georgiana)',
    ruta2_para: 'Para quién:', ruta2_para_val: 'Quienes buscan trabajo presencial en Tbilisi o Batumi',
    ruta2_proc: 'Proceso:', ruta2_proc_val: 'El empleador tramita el Permiso de Actividad Laboral Especial',
    ruta2_res: 'Resultado:', ruta2_res_val: 'Visa laboral D1 para formalizar residencia',
    ruta2_sect: 'Sectores:', ruta2_sect_val: 'Hospitality, turismo, tech, retail',
    ruta3_head: 'Ruta 3: Trabajo remoto (para empresa extranjera)',
    ruta3_para: 'Para quién:', ruta3_para_val: 'Quienes ya tienen trabajo remoto para empresa de otro país',
    ruta3_vent: 'Ventaja:', ruta3_vent_val: 'Georgia no regula el trabajo remoto para empleadores extranjeros',
    ruta3_imp: 'Impuestos:', ruta3_imp_val: 'Registrarse como Individual Entrepreneur y pagar 1%',
    ruta3_res: 'Resultado:', ruta3_res_val: 'Máxima flexibilidad + mínimo impuesto',
    capital_label: '💰 Capital recomendado:', capital_val: '$2,000 – $3,000 USD total',
    desglose_label: '📦 Desglose:', desglose_val: 'Alojamiento primer mes ($400-700) + Gastos iniciales ($200-400) + Colchón operativo ($1,400-1,900)',
    no_solvencia: '✅ No hay solvencia obligatoria — es visa-free, no exigen demostrar fondos',
    estrategia_hack: 'La jugada en Georgia es simple: 365 días legales sin visa te dan tiempo para hacer lo importante. Registra Individual Entrepreneur en la primera semana, activa el 1% de impuestos y empieza a facturar internacionalmente. Un freelancer que gana $2,000/mes paga solo $20 de impuestos en Georgia vs $400-800 en Irlanda o España.',
    sec_gastos_title: 'Gastos Obligatorios / Recomendados',
    gastos_intro: 'Georgia es el destino con menos gastos obligatorios del blueprint. Sin visa, sin solvencia obligatoria, sin representante fiscal. Los únicos costos son los que tú decides tener.',
    th_concepto: 'Concepto', th_costo: 'Costo (USD)', th_oblig: 'Obligatorio',
    gastos_blue: '🔵 VENTAJA GEORGIA: Sin solvencia obligatoria, sin visa previa, sin representante fiscal. El registro como Individual Entrepreneur cuesta menos de $20. El 1% de impuestos es activable online sin costo. Georgia es el destino más barato para arrancar del blueprint completo.',
    gastos_hack: 'Georgia no exige solvencia obligatoria para entrar. Sin embargo, para establecerte cómodamente necesitas calcular alojamiento inicial + gastos básicos + capital operativo (~$1,000-1,500). Si llegas con $2,500-3,000 tendrás margen suficiente para los primeros 30-60 días mientras organizas tus ingresos.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En Georgia el proceso es el más simple del blueprint. Sin citas de semanas, sin documentos apostillados. El día que llegas puedes empezar a activar tu estatus económico.',
    ie_head: '1. Individual Entrepreneur — Tu registro económico en Georgia',
    pasos: [
      ['Paso 1', 'Entrar a Georgia visa-free con pasaporte (365 días automáticos)', null],
      ['Paso 2', 'Ir al Public Service Hall con pasaporte — registro el mismo día (~20-50 GEL)', 'https://psh.gov.ge'],
      ['Paso 3', 'Activar Small Business Status (1% tax) en Revenue Service — sin costo', 'https://www.rs.ge'],
      ['Paso 4', 'Abrir cuenta bancaria (Bank of Georgia o TBC Bank) con pasaporte — 24-48 horas', null],
    ],
    residencia_head: '2. Residencia Temporal (si planeas quedarte largo plazo)',
    residencia_items: [
      ['Costo: 100-300 GEL ($35-100) — más rápido si pagas tarifa premium', null],
      ['Documentos: Pasaporte + registro Individual Entrepreneur o contrato de trabajo + domicilio', null],
      ['Portal oficial de migración de Georgia', 'https://migration.commission.ge'],
    ],
    aterrizaje_hack: 'En Georgia el documento clave no es una visa, sino el registro como Individual Entrepreneur. Con ese registro + Small Business Status pagas solo 1% de impuestos y puedes facturar internacionalmente de forma legal. Mucha gente lo activa en los primeros 2-3 días después de llegar.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Georgia tiene la apertura bancaria más fácil del blueprint — solo necesitas pasaporte. Sin NIF, sin representante fiscal, sin depósito mínimo obligatorio. Bank of Georgia y TBC Bank son los más usados por expatriados.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Bank of Georgia o TBC Bank en tus primeros días — solo necesitas pasaporte. Con cuenta bancaria local + Individual Entrepreneur puedes empezar a facturar internacionalmente y recibir pagos desde clientes en cualquier país del mundo.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales para tu proceso en Georgia. Revenue Service para impuestos, Public Service Hall para registro de negocio, Migration Commission para residencia.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'El Revenue Service (rs.ge) es tu portal más importante en Georgia. Ahí activas el Small Business Status (1% tax) que transforma tu situación fiscal. Sin este paso, pagas impuestos normales que pueden ser hasta 20%. Es gratis y se hace online.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'Georgia tiene uno de los mercados de alquiler más económicos del blueprint. Tbilisi es la capital y tiene más trabajo. Batumi es la ciudad costera, más turística y barata. Muchos digital nomads prefieren Tbilisi por su comunidad internacional.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal USD', th_mes: 'Precio Mensual USD',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. Aunque Georgia es bastante seguro, también existen anuncios falsos en portales y redes sociales. Siempre visita el apartamento o verifica al propietario antes de enviar dinero.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'Tbilisi tiene la comunidad de digital nomads más activa del Cáucaso. Únete a grupos de Facebook "Digital Nomads Tbilisi" y "Expats in Georgia" desde antes de llegar. Ahí se publican habitaciones, oportunidades de trabajo y networking antes que en portales oficiales.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Georgia tiene dos opciones de ingresos: trabajo local (salarios bajos pero costo de vida muy bajo) o trabajo remoto/freelance (salarios internacionales con impuestos del 1%). La segunda opción es la más recomendada.',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario: 'Salario/mes USD', th_canal_emp: 'Canal',
    empleos_blue: '💡 ESTRATEGIA RECOMENDADA: Si puedes trabajar remotamente para clientes internacionales, Georgia es el paraíso fiscal. $2,000/mes remotos = $20 de impuestos. $2,000/mes en España = $400-600 de impuestos. La diferencia anual es de $4,500-7,000 USD que te quedas en el bolsillo.',
    empleos_hack: 'En Georgia muchas empresas valoran inglés básico, actitud y disponibilidad inmediata para trabajos locales. Pero la jugada maestra es combinar trabajo remoto para clientes internacionales + Individual Entrepreneur 1% tax. Eso maximiza ingresos y minimiza impuestos.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Los salarios locales en Georgia son bajos comparados con Europa, pero el costo de vida es proporcionalmente más bajo. Un freelancer con ingresos internacionales tiene el mayor poder adquisitivo.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Salario/mes USD', th_impuesto: 'Impuesto (1% IE)',
    salarios_blue: '💡 VENTAJA ÚNICA: La columna de impuestos muestra lo que pagas con Individual Entrepreneur (1%). Un freelancer que gana $2,000/mes paga $20 de impuestos. En Irlanda pagaría $400-800. En España $400-600. La diferencia anual es de $4,500-9,000 USD.',
    salarios_hack: 'Con $600/mes de salario local puedes vivir bien en Tbilisi — habitación ($300) + comida ($150) + transporte ($50) + extras ($100) = $600. Con trabajo remoto de $1,500+/mes tienes un nivel de vida excepcional en Georgia.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Georgia tiene el timeline más rápido del blueprint. Sin esperas de semanas para visas o citas. El proceso de activación económica puede completarse en menos de una semana.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Solo necesitas: pasaporte vigente + seguro médico + $2,500-3,000 de capital. Sin visa previa, sin trámites.', '1-2 semanas antes'],
      ['Día 1-2', 'SIM card (Magti/Silknet) + Airbnb temporal + Explorar Tbilisi', 'Día 1-2'],
      ['Día 2-5', 'Abrir cuenta bancaria (Bank of Georgia o TBC Bank) con pasaporte', 'Día 2-5'],
      ['Día 3-7', 'Registro Individual Entrepreneur en Public Service Hall (mismo día, ~$15)', 'Día 3-7'],
      ['Día 5-10', 'Activar Small Business Status 1% en Revenue Service (rs.ge, gratis)', 'Día 5-10'],
      ['Semana 2', 'Buscar habitación permanente (MyHome.ge) + Primer ingreso', 'Semana 2'],
    ],
    timeline_hack: 'El orden en Georgia es: Banco → Individual Entrepreneur → Small Business 1% → Primer ingreso. Todo en menos de 10 días. Sin esperar semanas de citas o aprobaciones. Es el país más rápido para activar un negocio legal de todos los que cubrimos.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Georgia es el destino con el tiempo más corto hasta el primer ingreso. Sin espera de 90 días como Malta, sin TIE como España. Si ya tienes clientes o trabajo remoto, puedes cobrar en la primera semana.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Entrada legal al país (visa-free)', 'Pasaporte válido', 'Acuerdo laboral o clientes freelance'],
    hito1_time: '👉 Tiempo real: Inmediato – 1 semana',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Acuerdo de trabajo o clientes confirmados', 'Cuenta bancaria activa (opcional pero recomendado)', 'Individual Entrepreneur registrado (para freelance)'],
    hito2_time: '👉 Tiempo real: 1-3 semanas desde llegada',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: 'inmediato – 1 semana',
    resumen2: 'Puedes cobrar tu primer ingreso en:', resumen2_b: '1-3 semanas desde llegada',
    salario1_hack: 'Georgia es uno de los países más fáciles para empezar. No hay sistema complejo como Europa. No necesitas visa, no hay permiso de trabajo complicado. Si ya tienes trabajo remoto o clientes freelance, puedes cobrar tu primer ingreso en menos de 2 semanas.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Georgia es un país bastante seguro. La mayoría de problemas se resuelven rápido con los canales correctos. Guarda estos contactos desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
      ['Revenue Service', 'rs.ge — Impuestos y Small Business Status'],
      ['Public Service Hall', 'psh.gov.ge — Registro de negocio y trámites'],
      ['Migration Commission', 'migration.commission.ge — Estatus migratorio'],
      ['Comunidad L&T', 'Latinos en Georgia — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Georgia',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Georgia — links próximamente',
    crisis_hack: 'En Georgia muchas oportunidades aparecen primero en grupos de expatriados y comunidades de digital nomads. "Digital Nomads Tbilisi" en Facebook es el grupo más activo. Úsalo para encontrar vivienda, trabajo y contactos profesionales antes que lleguen a portales oficiales.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Georgia como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Entrada', 'Visa-free hasta 365 días'],
      ['Visa requerida', 'No (mayoría de pasaportes LATAM)'],
      ['Permiso de trabajo', 'Individual Entrepreneur o empleador local'],
      ['Impuestos (freelance)', '1% con Small Business Status'],
      ['Solvencia obligatoria', 'No — solo recomendado $2,000-3,000'],
      ['Capital recomendado', '$3,000 – $4,000 USD'],
      ['Registro Individual Entrepreneur', '~$15 USD — mismo día en Public Service Hall'],
      ['Apertura cuenta bancaria', '24-48 horas solo con pasaporte'],
      ['Renta cuarto compartido', '$240 – $360/mes'],
      ['Empleos locales más comunes', 'Hospitality, Retail, Delivery'],
      ['Salario local entrada', '$350 – $700/mes'],
      ['Salario freelance (remoto)', '$1,000 – $5,000+/mes'],
      ['Tiempo hasta primer ingreso', '1-3 semanas desde llegada'],
      ['Idioma', 'Georgiano (inglés en turismo y negocios)'],
      ['Residencia temporal', '100-300 GEL ($35-100)'],
      ['Nivel de dificultad', 'Fácil'],
      ['Mejores ciudades', 'Tbilisi / Batumi'],
      ['Ventaja única', '365 días visa-free + 1% de impuestos para freelancers'],
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
    hero_title: 'Geórgia',
    hero_sub: 'Cáucaso · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Capital recomendado',
    stat1_value: '$2.000 - $3.000',
    stat2_label: 'Estadia visa-free',
    stat2_value: '365 dias',
    stat3_label: 'Dificuldade',
    stat3_value: 'Fácil',
    included_title: 'O que inclui o Blueprint',
    included: [
      '365 dias sem visto — sem entrevistas, sem cartas de aceitação, sem procedimentos prévios',
      'Individual Entrepreneur + 1% de impostos — o regime fiscal mais favorável para freelancers',
      'Conta bancária em 24-48 horas só com passaporte — sem NIF nem representante fiscal',
      'Custo de vida entre os mais baixos do blueprint — quarto a partir de $240/mês',
      'Comunidade de nômades digitais ativa em Tbilisi e Batumi',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Geórgia é o destino mais acessível do blueprint. 365 dias sem visto, sem procedimentos prévios, sem solvência obrigatória. Você entra com passaporte e tem um ano para organizar sua atividade econômica dentro do país. O registro como Individual Entrepreneur com 1% de impostos é a joia do sistema.',
    autoridad_p1_label: 'A diferença chave vs Europa:',
    autoridad_p1: 'Você não depende de um visto ou patrocínio antes de viajar. Você entra primeiro e organiza sua atividade econômica de dentro do país sem um processo migratório longo.',
    autoridad_p2_label: 'Acelerador de início:',
    autoridad_p2: 'registro como Individual Entrepreneur → Small Business Status (1% tax) → conta bancária → primeira renda. Tudo em menos de 2 semanas.',
    autoridad_blue: '💱 Conversão Geórgia: 1 GEL ≈ $0,37 USD. $100 USD ≈ 270 GEL. Todos os preços locais em GEL com equivalente em USD.',
    autoridad_hack: '365 dias visa-free é a grande vantagem da Geórgia. Isso te compra tempo para fazer o importante sem ansiedade. Muita gente usa as primeiras semanas para se registrar como Individual Entrepreneur e ativar o regime fiscal de 1%. Essa decisão pode te economizar milhares de dólares em impostos.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento',
    estrategia_intro: 'A Geórgia tem três rotas econômicas principais. Escolha a que corresponde à sua situação antes de chegar. Você não precisa escolher antes de viajar — pode decidir durante os primeiros dias em Tbilisi.',
    ruta1_head: 'Rota 1: Freelancer / Individual Entrepreneur (a mais popular)',
    ruta1_para: 'Para quem:', ruta1_para_val: 'Freelancers, trabalhadores remotos, empreendedores digitais',
    ruta1_imp: 'Impostos:', ruta1_imp_val: 'Apenas 1% sobre rendimentos até ~$180.000/ano',
    ruta1_reg: 'Registro:', ruta1_reg_val: 'Public Service Hall — mesmo dia, ~20-50 GEL (€7-18)',
    ruta1_vent: 'Vantagem:', ruta1_vent_val: 'Fatura internacionalmente, sem relatórios complexos, sem IVA',
    ruta2_head: 'Rota 2: Emprego local (com empresa georgiana)',
    ruta2_para: 'Para quem:', ruta2_para_val: 'Quem busca trabalho presencial em Tbilisi ou Batumi',
    ruta2_proc: 'Processo:', ruta2_proc_val: 'O empregador processa a Permissão de Atividade Laboral Especial',
    ruta2_res: 'Resultado:', ruta2_res_val: 'Visto de trabalho D1 para formalizar residência',
    ruta2_sect: 'Setores:', ruta2_sect_val: 'Hotelaria, turismo, tecnologia, varejo',
    ruta3_head: 'Rota 3: Trabalho remoto (para empresa estrangeira)',
    ruta3_para: 'Para quem:', ruta3_para_val: 'Quem já tem trabalho remoto para empresa de outro país',
    ruta3_vent: 'Vantagem:', ruta3_vent_val: 'A Geórgia não regula o trabalho remoto para empregadores estrangeiros',
    ruta3_imp: 'Impostos:', ruta3_imp_val: 'Registrar como Individual Entrepreneur e pagar 1%',
    ruta3_res: 'Resultado:', ruta3_res_val: 'Máxima flexibilidade + mínimo imposto',
    capital_label: '💰 Capital recomendado:', capital_val: '$2.000 – $3.000 USD total',
    desglose_label: '📦 Detalhamento:', desglose_val: 'Alojamento primeiro mês ($400-700) + Despesas iniciais ($200-400) + Reserva operacional ($1.400-1.900)',
    no_solvencia: '✅ Não há solvência obrigatória — é visa-free, não exigem demonstrar fundos',
    estrategia_hack: 'A jogada na Geórgia é simples: 365 dias legais sem visto te dão tempo para fazer o importante. Registre Individual Entrepreneur na primeira semana, ative o 1% de impostos e comece a faturar internacionalmente. Um freelancer que ganha $2.000/mês paga apenas $20 de impostos na Geórgia vs $400-800 na Irlanda ou Espanha.',
    sec_gastos_title: 'Despesas Obrigatórias / Recomendadas',
    gastos_intro: 'A Geórgia é o destino com menos despesas obrigatórias do blueprint. Sem visto, sem solvência obrigatória, sem representante fiscal. Os únicos custos são os que você decide ter.',
    th_concepto: 'Conceito', th_costo: 'Custo (USD)', th_oblig: 'Obrigatório',
    gastos_blue: '🔵 VANTAGEM GEÓRGIA: Sem solvência obrigatória, sem visto prévio, sem representante fiscal. O registro como Individual Entrepreneur custa menos de $20. O 1% de impostos é ativável online sem custo. A Geórgia é o destino mais barato para começar do blueprint completo.',
    gastos_hack: 'A Geórgia não exige solvência obrigatória para entrar. No entanto, para se estabelecer confortavelmente você precisa calcular alojamento inicial + despesas básicas + capital operacional (~$1.000-1.500). Se chegar com $2.500-3.000 terá margem suficiente para os primeiros 30-60 dias enquanto organiza sua renda.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Na Geórgia o processo é o mais simples do blueprint. Sem consultas de semanas, sem documentos apostilados. No dia que você chega pode começar a ativar seu status econômico.',
    ie_head: '1. Individual Entrepreneur — Seu registro econômico na Geórgia',
    pasos: [
      ['Passo 1', 'Entrar na Geórgia visa-free com passaporte (365 dias automáticos)', null],
      ['Passo 2', 'Ir ao Public Service Hall com passaporte — registro no mesmo dia (~20-50 GEL)', 'https://psh.gov.ge'],
      ['Passo 3', 'Ativar Small Business Status (1% tax) no Revenue Service — sem custo', 'https://www.rs.ge'],
      ['Passo 4', 'Abrir conta bancária (Bank of Georgia ou TBC Bank) com passaporte — 24-48 horas', null],
    ],
    residencia_head: '2. Residência Temporária (se planeja ficar longo prazo)',
    residencia_items: [
      ['Custo: 100-300 GEL ($35-100) — mais rápido se pagar tarifa premium', null],
      ['Documentos: Passaporte + registro Individual Entrepreneur ou contrato de trabalho + domicílio', null],
      ['Portal oficial de migração da Geórgia', 'https://migration.commission.ge'],
    ],
    aterrizaje_hack: 'Na Geórgia o documento chave não é um visto, mas o registro como Individual Entrepreneur. Com esse registro + Small Business Status você paga apenas 1% de impostos e pode faturar internacionalmente de forma legal. Muita gente ativa nos primeiros 2-3 dias após chegar.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'A Geórgia tem a abertura bancária mais fácil do blueprint — só precisa de passaporte. Sem NIF, sem representante fiscal, sem depósito mínimo obrigatório. Bank of Georgia e TBC Bank são os mais usados por expatriados.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Bank of Georgia ou TBC Bank nos primeiros dias — só precisa de passaporte. Com conta bancária local + Individual Entrepreneur você pode começar a faturar internacionalmente e receber pagamentos de clientes em qualquer país do mundo.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais para seu processo na Geórgia. Revenue Service para impostos, Public Service Hall para registro de negócio, Migration Commission para residência.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'O Revenue Service (rs.ge) é seu portal mais importante na Geórgia. Lá você ativa o Small Business Status (1% tax) que transforma sua situação fiscal. Sem este passo, você paga impostos normais que podem ser até 20%. É gratuito e feito online.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'A Geórgia tem um dos mercados de aluguel mais econômicos do blueprint. Tbilisi é a capital e tem mais trabalho. Batumi é a cidade costeira, mais turística e barata. Muitos nômades digitais preferem Tbilisi por sua comunidade internacional.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal USD', th_mes: 'Preço Mensal USD',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. Embora a Geórgia seja bastante segura, também existem anúncios falsos em portais e redes sociais. Sempre visite o apartamento ou verifique o proprietário antes de enviar dinheiro.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Tbilisi tem a comunidade de nômades digitais mais ativa do Cáucaso. Entre em grupos do Facebook "Digital Nomads Tbilisi" e "Expats in Georgia" antes de chegar. Lá são publicados quartos, oportunidades de trabalho e networking antes dos portais oficiais.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'A Geórgia tem duas opções de renda: trabalho local (salários baixos mas custo de vida muito baixo) ou trabalho remoto/freelance (salários internacionais com impostos de 1%). A segunda opção é a mais recomendada.',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario: 'Salário/mês USD', th_canal_emp: 'Canal',
    empleos_blue: '💡 ESTRATÉGIA RECOMENDADA: Se você pode trabalhar remotamente para clientes internacionais, a Geórgia é o paraíso fiscal. $2.000/mês remotos = $20 de impostos. $2.000/mês na Espanha = $400-600 de impostos. A diferença anual é de $4.500-7.000 USD que ficam no seu bolso.',
    empleos_hack: 'Na Geórgia muitas empresas valorizam inglês básico, atitude e disponibilidade imediata para trabalhos locais. Mas a jogada mestra é combinar trabalho remoto para clientes internacionais + Individual Entrepreneur 1% tax. Isso maximiza renda e minimiza impostos.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Os salários locais na Geórgia são baixos comparados à Europa, mas o custo de vida é proporcionalmente mais baixo. Um freelancer com rendimentos internacionais tem o maior poder aquisitivo.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Salário/mês USD', th_impuesto: 'Imposto (1% IE)',
    salarios_blue: '💡 VANTAGEM ÚNICA: A coluna de impostos mostra o que você paga com Individual Entrepreneur (1%). Um freelancer que ganha $2.000/mês paga $20 de impostos. Na Irlanda pagaria $400-800. Na Espanha $400-600. A diferença anual é de $4.500-9.000 USD.',
    salarios_hack: 'Com $600/mês de salário local você pode viver bem em Tbilisi — quarto ($300) + comida ($150) + transporte ($50) + extras ($100) = $600. Com trabalho remoto de $1.500+/mês você tem um nível de vida excepcional na Geórgia.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'A Geórgia tem o cronograma mais rápido do blueprint. Sem esperas de semanas para vistos ou consultas. O processo de ativação econômica pode ser concluído em menos de uma semana.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Só precisa: passaporte válido + seguro médico + $2.500-3.000 de capital. Sem visto prévio, sem procedimentos.', '1-2 semanas antes'],
      ['Dia 1-2', 'SIM card (Magti/Silknet) + Airbnb temporário + Explorar Tbilisi', 'Dia 1-2'],
      ['Dia 2-5', 'Abrir conta bancária (Bank of Georgia ou TBC Bank) com passaporte', 'Dia 2-5'],
      ['Dia 3-7', 'Registro Individual Entrepreneur no Public Service Hall (mesmo dia, ~$15)', 'Dia 3-7'],
      ['Dia 5-10', 'Ativar Small Business Status 1% no Revenue Service (rs.ge, gratuito)', 'Dia 5-10'],
      ['Semana 2', 'Buscar quarto permanente (MyHome.ge) + Primeira renda', 'Semana 2'],
    ],
    timeline_hack: 'A ordem na Geórgia é: Banco → Individual Entrepreneur → Small Business 1% → Primeira renda. Tudo em menos de 10 dias. Sem esperar semanas de consultas ou aprovações. É o país mais rápido para ativar um negócio legal de todos que cobrimos.',
    sec_salario1_title: 'Tempo até Primeira Renda',
    salario1_intro: 'A Geórgia é o destino com o menor tempo até a primeira renda. Sem espera de 90 dias como Malta, sem TIE como Espanha. Se já tem clientes ou trabalho remoto, pode receber na primeira semana.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Entrada legal no país (visa-free)', 'Passaporte válido', 'Acordo de trabalho ou clientes freelance'],
    hito1_time: '👉 Tempo real: Imediato – 1 semana',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Acordo de trabalho ou clientes confirmados', 'Conta bancária ativa (opcional mas recomendado)', 'Individual Entrepreneur registrado (para freelance)'],
    hito2_time: '👉 Tempo real: 1-3 semanas desde chegada',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: 'imediato – 1 semana',
    resumen2: 'Você pode receber sua primeira renda em:', resumen2_b: '1-3 semanas desde chegada',
    salario1_hack: 'A Geórgia é um dos países mais fáceis para começar. Não há sistema complexo como na Europa. Você não precisa de visto, não há permissão de trabalho complicada. Se já tem trabalho remoto ou clientes freelance, pode receber sua primeira renda em menos de 2 semanas.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'A Geórgia é um país bastante seguro. A maioria dos problemas se resolve rápido com os canais corretos. Salve esses contatos desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '112 — Polícia, Ambulância, Bombeiros'],
      ['Revenue Service', 'rs.ge — Impostos e Small Business Status'],
      ['Public Service Hall', 'psh.gov.ge — Registro de negócio e procedimentos'],
      ['Migration Commission', 'migration.commission.ge — Status migratório'],
      ['Comunidade L&T', 'Latinos na Geórgia — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Geórgia',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na Geórgia — links em breve',
    crisis_hack: 'Na Geórgia muitas oportunidades aparecem primeiro em grupos de expatriados e comunidades de nômades digitais. "Digital Nomads Tbilisi" no Facebook é o grupo mais ativo. Use-o para encontrar moradia, trabalho e contatos profissionais antes que cheguem aos portais oficiais.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Geórgia como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Entrada', 'Visa-free até 365 dias'],
      ['Visto necessário', 'Não (maioria dos passaportes LATAM)'],
      ['Permissão de trabalho', 'Individual Entrepreneur ou empregador local'],
      ['Impostos (freelance)', '1% com Small Business Status'],
      ['Solvência obrigatória', 'Não — apenas recomendado $2.000-3.000'],
      ['Capital recomendado', '$3.000 – $4.000 USD'],
      ['Registro Individual Entrepreneur', '~$15 USD — mesmo dia no Public Service Hall'],
      ['Abertura conta bancária', '24-48 horas só com passaporte'],
      ['Aluguel quarto compartilhado', '$240 – $360/mês'],
      ['Empregos locais mais comuns', 'Hotelaria, Varejo, Delivery'],
      ['Salário local entrada', '$350 – $700/mês'],
      ['Salário freelance (remoto)', '$1.000 – $5.000+/mês'],
      ['Tempo até primeira renda', '1-3 semanas desde chegada'],
      ['Idioma', 'Georgiano (inglês em turismo e negócios)'],
      ['Residência temporária', '100-300 GEL ($35-100)'],
      ['Nível de dificuldade', 'Fácil'],
      ['Melhores cidades', 'Tbilisi / Batumi'],
      ['Vantagem única', '365 dias visa-free + 1% de impostos para freelancers'],
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
    hero_title: 'Georgia',
    hero_sub: 'Caucasus · Work and Study',
    hero_badge: 'Easy',
    stat1_label: 'Recommended Capital',
    stat1_value: '$2,000 - $3,000',
    stat2_label: 'Visa-free stay',
    stat2_value: '365 days',
    stat3_label: 'Difficulty',
    stat3_value: 'Easy',
    included_title: 'What the Blueprint Includes',
    included: [
      '365 days visa-free — no interviews, no acceptance letters, no prior procedures',
      'Individual Entrepreneur + 1% taxes — the most favorable tax regime for freelancers',
      'Bank account in 24-48 hours with just a passport — no NIF or tax representative',
      'Cost of living among the lowest in the blueprint — room from $240/month',
      'Active digital nomad community in Tbilisi and Batumi',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Georgia is the most accessible destination in the blueprint. 365 days visa-free, no prior procedures, no mandatory funds. You enter with your passport and have a year to organize your economic activity from inside the country. Registering as an Individual Entrepreneur with 1% taxes is the gem of the system.',
    autoridad_p1_label: 'The key difference vs Europe:',
    autoridad_p1: 'You don\'t depend on a visa or sponsorship before traveling. You enter first and organize your economic activity from inside the country without a long migration process.',
    autoridad_p2_label: 'Launch accelerator:',
    autoridad_p2: 'register as Individual Entrepreneur → Small Business Status (1% tax) → bank account → first income. All in less than 2 weeks.',
    autoridad_blue: '💱 Georgia conversion: 1 GEL ≈ $0.37 USD. $100 USD ≈ 270 GEL. All local prices in GEL with USD equivalent.',
    autoridad_hack: '365 visa-free days is Georgia\'s great advantage. That buys you time to do what\'s important without anxiety. Many people use the first weeks to register as Individual Entrepreneur and activate the 1% tax regime. That decision can save you thousands of dollars in taxes.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget',
    estrategia_intro: 'Georgia has three main economic routes. Choose the one that matches your situation before arriving. You don\'t need to choose before traveling — you can decide during the first few days in Tbilisi.',
    ruta1_head: 'Route 1: Freelancer / Individual Entrepreneur (most popular)',
    ruta1_para: 'For whom:', ruta1_para_val: 'Freelancers, remote workers, digital entrepreneurs',
    ruta1_imp: 'Taxes:', ruta1_imp_val: 'Only 1% on income up to ~$180,000/year',
    ruta1_reg: 'Registration:', ruta1_reg_val: 'Public Service Hall — same day, ~20-50 GEL (€7-18)',
    ruta1_vent: 'Advantage:', ruta1_vent_val: 'Invoice internationally, no complex reports, no VAT',
    ruta2_head: 'Route 2: Local employment (with Georgian company)',
    ruta2_para: 'For whom:', ruta2_para_val: 'Those looking for in-person work in Tbilisi or Batumi',
    ruta2_proc: 'Process:', ruta2_proc_val: 'Employer processes the Special Labor Activity Permit',
    ruta2_res: 'Result:', ruta2_res_val: 'D1 work visa to formalize residency',
    ruta2_sect: 'Sectors:', ruta2_sect_val: 'Hospitality, tourism, tech, retail',
    ruta3_head: 'Route 3: Remote work (for foreign company)',
    ruta3_para: 'For whom:', ruta3_para_val: 'Those who already have remote work for a company in another country',
    ruta3_vent: 'Advantage:', ruta3_vent_val: 'Georgia does not regulate remote work for foreign employers',
    ruta3_imp: 'Taxes:', ruta3_imp_val: 'Register as Individual Entrepreneur and pay 1%',
    ruta3_res: 'Result:', ruta3_res_val: 'Maximum flexibility + minimum tax',
    capital_label: '💰 Recommended capital:', capital_val: '$2,000 – $3,000 USD total',
    desglose_label: '📦 Breakdown:', desglose_val: 'First month accommodation ($400-700) + Initial costs ($200-400) + Operating buffer ($1,400-1,900)',
    no_solvencia: '✅ No mandatory funds required — it\'s visa-free, no need to demonstrate funds',
    estrategia_hack: 'The move in Georgia is simple: 365 legal days visa-free give you time to do what\'s important. Register Individual Entrepreneur in the first week, activate the 1% tax and start invoicing internationally. A freelancer earning $2,000/month pays only $20 in taxes in Georgia vs $400-800 in Ireland or Spain.',
    sec_gastos_title: 'Mandatory / Recommended Costs',
    gastos_intro: 'Georgia is the destination with the fewest mandatory costs in the blueprint. No visa, no mandatory funds, no tax representative. The only costs are the ones you decide to have.',
    th_concepto: 'Item', th_costo: 'Cost (USD)', th_oblig: 'Mandatory',
    gastos_blue: '🔵 GEORGIA ADVANTAGE: No mandatory funds, no prior visa, no tax representative. Registering as Individual Entrepreneur costs less than $20. The 1% tax is activatable online at no cost. Georgia is the cheapest destination to get started in the complete blueprint.',
    gastos_hack: 'Georgia does not require mandatory funds to enter. However, to establish yourself comfortably you need to calculate initial accommodation + basic expenses + operating capital (~$1,000-1,500). If you arrive with $2,500-3,000 you\'ll have enough margin for the first 30-60 days while organizing your income.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In Georgia the process is the simplest in the blueprint. No weeks of appointments, no apostilled documents. The day you arrive you can start activating your economic status.',
    ie_head: '1. Individual Entrepreneur — Your economic registration in Georgia',
    pasos: [
      ['Step 1', 'Enter Georgia visa-free with passport (365 days automatic)', null],
      ['Step 2', 'Go to Public Service Hall with passport — registration same day (~20-50 GEL)', 'https://psh.gov.ge'],
      ['Step 3', 'Activate Small Business Status (1% tax) at Revenue Service — no cost', 'https://www.rs.ge'],
      ['Step 4', 'Open bank account (Bank of Georgia or TBC Bank) with passport — 24-48 hours', null],
    ],
    residencia_head: '2. Temporary Residency (if you plan to stay long term)',
    residencia_items: [
      ['Cost: 100-300 GEL ($35-100) — faster if you pay premium rate', null],
      ['Documents: Passport + Individual Entrepreneur registration or employment contract + address', null],
      ['Official Georgia migration portal', 'https://migration.commission.ge'],
    ],
    aterrizaje_hack: 'In Georgia the key document is not a visa, but the Individual Entrepreneur registration. With that registration + Small Business Status you pay only 1% taxes and can invoice internationally legally. Many people activate it in the first 2-3 days after arriving.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Georgia has the easiest bank account opening in the blueprint — you only need a passport. No NIF, no tax representative, no mandatory minimum deposit. Bank of Georgia and TBC Bank are the most used by expats.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Bank of Georgia or TBC Bank in your first few days — you only need a passport. With a local bank account + Individual Entrepreneur you can start invoicing internationally and receiving payments from clients anywhere in the world.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Official portals for your process in Georgia. Revenue Service for taxes, Public Service Hall for business registration, Migration Commission for residency.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'The Revenue Service (rs.ge) is your most important portal in Georgia. There you activate the Small Business Status (1% tax) that transforms your tax situation. Without this step, you pay normal taxes which can be up to 20%. It\'s free and done online.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Georgia has one of the most affordable rental markets in the blueprint. Tbilisi is the capital and has more work. Batumi is the coastal city, more touristy and affordable. Many digital nomads prefer Tbilisi for its international community.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price USD', th_mes: 'Monthly Price USD',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. Although Georgia is quite safe, fake listings also exist on portals and social media. Always visit the apartment or verify the owner before sending money.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'Tbilisi has the most active digital nomad community in the Caucasus. Join Facebook groups "Digital Nomads Tbilisi" and "Expats in Georgia" before arriving. Rooms, job opportunities and networking are posted there before official portals.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'Georgia has two income options: local work (low salaries but very low cost of living) or remote/freelance work (international salaries with 1% taxes). The second option is most recommended.',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario: 'Salary/month USD', th_canal_emp: 'Channel',
    empleos_blue: '💡 RECOMMENDED STRATEGY: If you can work remotely for international clients, Georgia is a tax haven. $2,000/month remote = $20 in taxes. $2,000/month in Spain = $400-600 in taxes. The annual difference is $4,500-7,000 USD that stays in your pocket.',
    empleos_hack: 'In Georgia many companies value basic English, attitude and immediate availability for local jobs. But the master move is combining remote work for international clients + Individual Entrepreneur 1% tax. That maximizes income and minimizes taxes.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Local salaries in Georgia are low compared to Europe, but the cost of living is proportionally lower. A freelancer with international income has the highest purchasing power.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Salary/month USD', th_impuesto: 'Tax (1% IE)',
    salarios_blue: '💡 UNIQUE ADVANTAGE: The tax column shows what you pay with Individual Entrepreneur (1%). A freelancer earning $2,000/month pays $20 in taxes. In Ireland they\'d pay $400-800. In Spain $400-600. The annual difference is $4,500-9,000 USD.',
    salarios_hack: 'With $600/month local salary you can live well in Tbilisi — room ($300) + food ($150) + transport ($50) + extras ($100) = $600. With $1,500+/month remote work you have an exceptional quality of life in Georgia.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Georgia has the fastest timeline in the blueprint. No waiting weeks for visas or appointments. The economic activation process can be completed in less than a week.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'You only need: valid passport + health insurance + $2,500-3,000 capital. No prior visa, no procedures.', '1-2 weeks before'],
      ['Day 1-2', 'SIM card (Magti/Silknet) + Temporary Airbnb + Explore Tbilisi', 'Day 1-2'],
      ['Day 2-5', 'Open bank account (Bank of Georgia or TBC Bank) with passport', 'Day 2-5'],
      ['Day 3-7', 'Individual Entrepreneur registration at Public Service Hall (same day, ~$15)', 'Day 3-7'],
      ['Day 5-10', 'Activate Small Business Status 1% at Revenue Service (rs.ge, free)', 'Day 5-10'],
      ['Week 2', 'Find permanent room (MyHome.ge) + First income', 'Week 2'],
    ],
    timeline_hack: 'The order in Georgia is: Bank → Individual Entrepreneur → Small Business 1% → First income. All in less than 10 days. Without waiting weeks for appointments or approvals. It\'s the fastest country to activate a legal business of all those we cover.',
    sec_salario1_title: 'Time to First Income',
    salario1_intro: 'Georgia is the destination with the shortest time to first income. No 90-day wait like Malta, no TIE like Spain. If you already have clients or remote work, you can receive payment in the first week.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Legal entry to the country (visa-free)', 'Valid passport', 'Work agreement or freelance clients'],
    hito1_time: '👉 Real timeline: Immediate – 1 week',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Work agreement or confirmed clients', 'Active bank account (optional but recommended)', 'Individual Entrepreneur registered (for freelance)'],
    hito2_time: '👉 Real timeline: 1-3 weeks from arrival',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: 'immediate – 1 week',
    resumen2: 'You can receive your first income in:', resumen2_b: '1-3 weeks from arrival',
    salario1_hack: 'Georgia is one of the easiest countries to get started. There\'s no complex system like Europe. You don\'t need a visa, there\'s no complicated work permit. If you already have remote work or freelance clients, you can receive your first income in less than 2 weeks.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Georgia is a quite safe country. Most problems are resolved quickly with the correct channels. Save these contacts from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '112 — Police, Ambulance, Fire'],
      ['Revenue Service', 'rs.ge — Taxes and Small Business Status'],
      ['Public Service Hall', 'psh.gov.ge — Business registration and procedures'],
      ['Migration Commission', 'migration.commission.ge — Migration status'],
      ['L&T Community', 'Latinos in Georgia — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Georgia',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Georgia — links coming soon',
    crisis_hack: 'In Georgia many opportunities appear first in expat groups and digital nomad communities. "Digital Nomads Tbilisi" on Facebook is the most active group. Use it to find housing, work and professional contacts before they reach official portals.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Georgia as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Entry', 'Visa-free up to 365 days'],
      ['Visa required', 'No (most LATAM passports)'],
      ['Work permit', 'Individual Entrepreneur or local employer'],
      ['Taxes (freelance)', '1% with Small Business Status'],
      ['Mandatory funds', 'No — only recommended $2,000-3,000'],
      ['Recommended capital', '$3,000 – $4,000 USD'],
      ['Individual Entrepreneur registration', '~$15 USD — same day at Public Service Hall'],
      ['Bank account opening', '24-48 hours with passport only'],
      ['Shared room rent', '$240 – $360/month'],
      ['Most common local jobs', 'Hospitality, Retail, Delivery'],
      ['Local entry salary', '$350 – $700/month'],
      ['Freelance salary (remote)', '$1,000 – $5,000+/month'],
      ['Time to first income', '1-3 weeks from arrival'],
      ['Language', 'Georgian (English in tourism and business)'],
      ['Temporary residency', '100-300 GEL ($35-100)'],
      ['Difficulty level', 'Easy'],
      ['Best cities', 'Tbilisi / Batumi'],
      ['Unique advantage', '365 days visa-free + 1% taxes for freelancers'],
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

export default function Georgia() {
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
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1258&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇬🇪</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>{t.hero_badge}</span>
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558352532-d30aee197dea?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.autoridad_p1_label}</strong> {t.autoridad_p1}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.autoridad_p2_label}</strong> {t.autoridad_p2}
          </p>
          <BlueBox text={t.autoridad_blue} />
          <HackBox text={t.autoridad_hack} />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold', color: '#1a1a2e' }}>{t.premium_badge}</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />

          <SubHead text={t.ruta1_head} />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.7' }}>
              <strong>{t.ruta1_para}</strong> {t.ruta1_para_val}<br />
              <strong>{t.ruta1_imp}</strong> {t.ruta1_imp_val}<br />
              <strong>{t.ruta1_reg}</strong> {t.ruta1_reg_val}<br />
              <strong>{t.ruta1_vent}</strong> {t.ruta1_vent_val}
            </p>
          </div>

          <SubHead text={t.ruta2_head} />
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.7' }}>
              <strong>{t.ruta2_para}</strong> {t.ruta2_para_val}<br />
              <strong>{t.ruta2_proc}</strong> {t.ruta2_proc_val}<br />
              <strong>{t.ruta2_res}</strong> {t.ruta2_res_val}<br />
              <strong>{t.ruta2_sect}</strong> {t.ruta2_sect_val}
            </p>
          </div>

          <SubHead text={t.ruta3_head} />
          <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fbbf24', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#92400e', lineHeight: '1.7' }}>
              <strong>{t.ruta3_para}</strong> {t.ruta3_para_val}<br />
              <strong>{t.ruta3_vent}</strong> {t.ruta3_vent_val}<br />
              <strong>{t.ruta3_imp}</strong> {t.ruta3_imp_val}<br />
              <strong>{t.ruta3_res}</strong> {t.ruta3_res_val}
            </p>
          </div>

          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6', color: '#1a1a2e' }}>
              <strong>{t.capital_label}</strong> {t.capital_val}<br />
              <strong>{t.desglose_label}</strong> {t.desglose_val}<br />
              <strong>{t.no_solvencia}</strong>
            </p>
          </div>
          <HackBox text={t.estrategia_hack} />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <Intro text={t.gastos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Visa de entrada', '$0', '✅ Gratis (visa-free)'],
                  ['Seguro médico internacional', '$60 – $120', '⚪ Muy recomendado'],
                  ['Registro Individual Entrepreneur', '$7 – $18 (20-50 GEL)', '⚪ Si trabajas como freelancer'],
                  ['Apertura cuenta bancaria', '$0 – $100', '⚪ Recomendado'],
                  ['Traducciones de documentos', '$30 – $100', '⚪ Según necesidad'],
                  ['Small Business Status (1% tax)', '$0', '⚪ Gratis — activas online'],
                  ['Capital recomendado total', '$2,000 – $3,000', '⚪ Recomendado para estabilidad'],
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
          <BlueBox text={t.gastos_blue} />
          <HackBox text={t.gastos_hack} />
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🏦" title={t.sec_aterrizaje_title}>
          <Intro text={t.aterrizaje_intro} />
          <SubHead text={t.ie_head} />
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6', color: '#1a1a2e' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.residencia_head} />
          {t.residencia_items.map((item, i) => (
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
              <thead><tr>{[t.th_entidad, t.th_tipo, t.th_ventaja, 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Bank of Georgia', 'Tradicional', 'El más grande del país. Muy usado por expatriados y emprendedores. App excelente.', 'bankofgeorgia.ge', 'https://bankofgeorgia.ge'],
                  ['TBC Bank', 'Tradicional', 'Excelente banca digital. Apertura muy rápida. Popular entre digital nomads.', 'tbcbank.ge', 'https://tbcbank.ge'],
                  ['Liberty Bank', 'Tradicional', 'Amplia red de sucursales y cajeros en todo el país.', 'libertybank.ge', 'https://libertybank.ge'],
                  ['Wise', 'Digital', 'Ideal para transferencias internacionales y conversión de divisas.', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Apertura rápida desde el móvil. Pagos internacionales.', 'revolut.com', 'https://revolut.com'],
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
              <thead><tr>{[t.th_portal, t.th_para_que, t.th_cuando, 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revenue Service (rs.ge)', 'Impuestos y Small Business Status (1%)', 'Semana 1 — registrar actividad fiscal', 'rs.ge', 'https://www.rs.ge'],
                  ['Public Service Hall (psh.ge)', 'Registro como Individual Entrepreneur', 'Semana 1 — presencial con pasaporte', 'psh.gov.ge', 'https://psh.gov.ge'],
                  ['Migration Commission', 'Residencia temporal y estatus migratorio', 'Si planeas quedarte más de 365 días', 'migration.commission.ge', 'https://migration.commission.ge'],
                  ['Jobs.ge', 'Portal de empleo más grande de Georgia', 'Desde semana 1', 'jobs.ge', 'https://jobs.ge'],
                  ['HR.ge', 'Vacantes corporativas y administrativas', 'Desde semana 1', 'hr.ge', 'https://hr.ge'],
                  ['SS.ge', 'Clasificados — trabajo y vivienda', 'Desde semana 1', 'ss.ge', 'https://ss.ge'],
                  ['MyHome.ge', 'Portal inmobiliario #1 en Georgia', 'Semana 1 para vivienda', 'myhome.ge', 'https://www.myhome.ge'],
                  ['Expat.com', 'Comunidad de expatriados — empleo y networking', 'Desde semana 1', 'expat.com', 'https://expat.com'],
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697730182538-406cbc7789d4?q=80&w=722&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$60 – $90', '$240 – $360'],
                  ['Cuarto individual', '$110 – $160', '$440 – $640'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
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
                  ['MyHome.ge', 'Portal #1 en Georgia', 'Alquileres en Tbilisi y Batumi — el más completo', 'myhome.ge', 'https://www.myhome.ge'],
                  ['SS.ge', 'Clasificados populares', 'Alquileres económicos y anuncios directos de propietarios', 'ss.ge', 'https://www.ss.ge'],
                  ['Place.ge', 'Portal inmobiliario', 'Muchas opciones en Tbilisi y Batumi', 'place.ge', 'https://www.place.ge'],
                  ['Airbnb', 'Alojamiento temporal', 'Primeras semanas mientras buscas permanente', 'airbnb.com', 'https://airbnb.com'],
                  ['Digital Nomads Tbilisi (Facebook)', 'Comunidad', 'Grupos donde se comparten alquileres y oportunidades', 'Facebook', 'https://facebook.com'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549466785-f5c1771646cc?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$350 – $600', 'Jobs.ge / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '$300 – $500', 'Jobs.ge / SS.ge'],
                  ['Hotels', 'Reception / Hotel Staff', '$400 – $700', 'Jobs.ge / LinkedIn'],
                  ['Retail', 'Sales Assistant', '$350 – $600', 'HR.ge / Jobs.ge'],
                  ['Delivery', 'Rider / Courier (Wolt)', '$500 – $900', 'Wolt / Glovo'],
                  ['Freelance / Remoto', 'Tu especialidad para clientes internacionales', '$1,000 – $5,000+', 'LinkedIn / Upwork / Fiverr'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: i === 5 ? '#166534' : '#1a1a2e', fontWeight: i === 5 ? '700' : 'normal' }}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BlueBox text={t.empleos_blue} />
          <HackBox text={t.empleos_hack} />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title={t.sec_salarios_title}>
          <Intro text={t.salarios_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_mensual, t.th_impuesto].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '$350 – $600', '$3.5 – $6'],
                  ['Hotels', 'Reception / Hotel Staff', '$400 – $700', '$4 – $7'],
                  ['Delivery', 'Rider / Courier', '$500 – $900', '$5 – $9'],
                  ['Freelance Junior', 'Tu especialidad (remoto)', '$1,000 – $2,000', '$10 – $20'],
                  ['Freelance Senior', 'Tu especialidad (remoto)', '$2,000 – $5,000', '$20 – $50'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#22c55e', fontWeight: '700' }}>{r[3]}</td>
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Georgia y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en plataforma (MyHome/SS.ge) y denunciar en Policía', 'Policía Georgia'],
                  ['Problemas migratorios', 'Consultar con Public Service Hall o Migration Commission', 'psh.gov.ge'],
                  ['Problemas bancarios', 'Contactar Bank of Georgia o TBC Bank para bloquear tarjeta', 'Tu banco'],
                  ['Enfermedad / Urgencia médica', 'Hospital privado o clínica internacional en Tbilisi', '112'],
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697730152499-dfb766ea949d?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇬🇪`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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

        {/* CONSULTORIA */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px', color: '#1a1a2e' }}>{t.consultoria_title}</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Georgia:\n\n' + feedback)}`, '_blank')
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