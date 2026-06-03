'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'España',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Medio',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '€2,500 - €5,500',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Medio',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Hasta 30 horas/semana de trabajo — más que Irlanda, Malta o Canadá',
      'Universidades públicas desde €1,500/año — hasta 80% más barato que otros países europeos',
      'TIE (tu ID español) en 30 días desde llegada',
      '12 escuelas verificadas en Madrid, Barcelona, Valencia y Alicante',
      'Comunidad latina enorme — grupos WhatsApp en todas las ciudades principales',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'España es el destino europeo con más horas de trabajo permitidas para estudiantes — hasta 30 horas/semana. Cultura latina, idioma compartido, clima excepcional y universidades públicas entre las más baratas de Europa. La ruta es: Visado Tipo D → Empadronamiento → TIE → trabajo legal.',
    autoridad_p1_label: 'Visa de Estudiante (Tipo D):',
    autoridad_p1_text: 'te permite estudiar y trabajar',
    autoridad_p1_b: 'hasta 30 horas/semana',
    autoridad_p1_end: 'durante el programa académico. Más horas que Irlanda (20h), Malta (20h) o Canadá (20h).',
    autoridad_p2_label: 'Acelerador de puesta en marcha:',
    autoridad_p2: 'coordinamos NIE, empadronamiento, TIE y Seguridad Social para habilitar el permiso laboral desde el inicio sin perder semanas en burocracia.',
    autoridad_blue: '💱 Estándar de moneda (España): primero EUR y al lado el equivalente en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'En España el empadronamiento y el contrato de alquiler son tan importantes como la visa. Sin dirección registrada no tramitas la TIE. Sin TIE no trabajas legalmente. Prioridad #1: asegurar dirección. Todo lo demás se construye sobre eso.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'Elegimos escuela por viabilidad migratoria y costo operativo, no por marketing. Miramos precio del programa, ciudad y cercanía a zonas con alta rotación laboral para que tu presupuesto aguante el primer año.',
    estrategia_head: '🇪🇸 Matriz de Escuelas de Español: España 2026',
    th_escuela: 'Escuela', th_ciudad: 'Ciudad', th_duracion: 'Duración', th_precio: 'Precio total', th_web: 'Website',
    solvencia1_label: '🔵 Solvencia obligatoria (España):',
    solvencia1_val: '~€7,200 – €8,400 basado en el 100% del IPREM anual',
    solvencia2_label: '🔵 Capital recomendado:',
    solvencia2_val: 'solvencia + depósito + primer mes + imprevistos',
    estrategia_hack: 'Tu Capital de Ejecución Real = precio escuela + €7,200 solvencia + ~€700 gastos administrativos. Ese es tu número mínimo. Si no tienes el monto completo, no inicies el proceso — primero asegura tu capital.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Los programas Foundation en España abren la puerta a universidades europeas reconocidas. Al graduarte de Bachelor o Master puedes solicitar la Autorización de Búsqueda de Empleo por 12 meses para conseguir trabajo profesional en el país.',
    th_programa: 'Programa', th_institucion: 'Institución', th_inversion: 'Inversión',
    pre_blue: '🔵 AUTORIZACIÓN DE BÚSQUEDA DE EMPLEO: Al graduarte de Bachelor o Master en España, puedes solicitar 12 meses adicionales para buscar trabajo profesional. Esto permite posteriormente obtener permiso de trabajo → residencia legal.',
    pre_hack: 'Los programas Foundation en universidades públicas de Andalucía, Valencia o Extremadura son los más económicos. Mismo título europeo, hasta 70% menos costo que Irlanda o Malta. Verifica acreditación antes de pagar.',
    sec_edu_title: 'Educación Superior',
    edu_intro: 'España tiene el sistema universitario público más barato de Europa occidental. Universidades en Andalucía, Valencia y Extremadura cobran desde €1,500/año para estudiantes internacionales — hasta 80% más barato que Irlanda.',
    th_inst: 'Institución', th_nivel: 'Nivel', th_inversion_anual: 'Inversión (año/total)',
    edu_blue: '💰 HACK UNIVERSIDADES PÚBLICAS: Muchas universidades públicas en Andalucía, Valencia y Extremadura cobran tasas muy reducidas incluso para estudiantes internacionales. Un Máster de €2,500 vs €15,000+ en Irlanda. Mismo título europeo reconocido.',
    edu_hack: 'Universidad de Jaén o Extremadura son las más baratas de España para internacionales. Mismo título europeo que UCM o UAB pero hasta 80% menos costo. La diferencia de precio puede ser de €10,000+ por año.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Estos son los costos que tu escuela NO incluye. El seguro médico en España debe ser de una compañía española, sin copagos ni carencias — no vale cualquier seguro internacional.',
    th_concepto: 'Concepto', th_costo_eur: 'Costo (EUR)', th_usd: '≈ USD', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA (ESPAÑA): ~€7,200 – €8,400 basado en el 100% del IPREM anual. No es dinero para gastar — es prueba de capacidad económica que Extranjería exige ver en tus extractos bancarios.',
    gastos_hack: 'Tu Capital de Ejecución Real = precio escuela + €7,200 solvencia + €700 gastos administrativos. Sin ese monto completo, no inicies el proceso. El seguro médico DEBE ser español sin copagos — rechazarán otros seguros internacionales.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En España el orden correcto es crítico: primero empadronamiento, luego TIE, luego trabajo. Sin dirección registrada no puedes tramitar la TIE. Sin TIE no puedes trabajar legalmente. Todo depende de asegurar tu vivienda primero.',
    tie_head: '1. TIE — Tarjeta de Identidad de Extranjero',
    tie_p: 'Debes solicitar la TIE dentro de los primeros 30 días de llegada. Sin TIE no puedes trabajar legalmente ni abrir cuenta bancaria completa.',
    pasos: [
      ['Paso 1', 'Entrar con Visado Nacional Tipo D del consulado español', null],
      ['Paso 2', 'Empadronamiento en el ayuntamiento de tu ciudad (mismo día si es posible)', null],
      ['Paso 3', 'Cita en Extranjería para toma de huellas (dentro de los primeros 30 días)', 'https://sede.administracionespublicas.gob.es'],
      ['Paso 4', 'Adjuntar: Pasaporte + Carta de Aceptación + Contrato alquiler + Formulario EX-17', null],
      ['Paso 5', 'Pagar tasa administrativa €16 por la TIE', null],
    ],
    trabajo_head: '2. Permiso de Trabajo (30h/semana)',
    trabajo_items: [
      ['Puedes trabajar hasta 30 horas/semana mientras dure el programa académico', null],
      ['El empleador tramita tu registro en la Seguridad Social (NUSS)', 'https://seg-social.es'],
      ['Con NIE/TIE + Seguridad Social activo, ya puedes trabajar legalmente', null],
    ],
    aterrizaje_hack: 'La cita de Extranjería para la TIE puede tardar semanas. Agenda tu cita lo antes posible — sin TIE activo muchos empleadores no pueden contratarte legalmente. Es el cuello de botella principal en España.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Abre N26 o BBVA los primeros días para mover dinero rápido. Cuando tengas NIE/TIE y contrato de trabajo, migra a banco tradicional para recibir nómina y domiciliar pagos.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre N26 o BBVA apenas llegues para empezar a mover dinero y recibir transferencias. Cuando ya tengas NIE/TIE y contrato de trabajo, abre Santander o BBVA para recibir nómina y domiciliar pagos como renta, luz o internet.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales obligatorios para tu proceso en España. Sin Seguridad Social no puedes trabajar legalmente. Sin cita en Extranjería no tienes TIE.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'La cita de Extranjería es el cuello de botella en España. Agenda tu cita el mismo día que llegues — puede tardar semanas. Sin TIE activo, muchos empleadores no pueden contratarte formalmente aunque tengas NIE.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado inmobiliario en Madrid, Barcelona y Valencia es muy competitivo. Los pisos se alquilan en horas. El contrato de alquiler es OBLIGATORIO para el empadronamiento y la TIE — sin él no puedes completar tu trámite migratorio.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal EUR', th_mes: 'Precio Mensual EUR',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En España hay muchas estafas online en alquileres. Si no has visto el piso físicamente, NO pagues nada.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'En España los pisos se alquilan muy rápido. Si ves una habitación en Idealista, escribe inmediatamente y agenda visita ese mismo día. El que responde primero suele quedarse con el piso. Activa notificaciones push en Idealista antes de llegar.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Con 30 horas/semana puedes ganar significativamente más que en otros países del blueprint. España tiene 80+ millones de turistas al año — hoteles, restaurantes y bares contratan masivamente, especialmente en temporada.',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'imprime 20-30 copias. Ve a restaurantes y bares entre',
    empleos_cv_b: '3:00 PM – 6:00 PM',
    empleos_cv_quote: '"Hola, estoy buscando trabajo como camarero, tengo disponibilidad inmediata."',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_h: 'Salario/hora EUR', th_usd_h: '≈ USD', th_canal_emp: 'Canal principal',
    empleos_hack: 'En España valoran actitud, presencia y disponibilidad inmediata. Muchos trabajos en hostelería o comercio se consiguen hablando directamente con el encargado, incluso si tu experiencia es básica. El español básico abre muchas más puertas que en Irlanda o Malta.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Estimación de ingresos reales para estudiantes trabajando 30 horas semanales. España permite 30h/semana — 50% más que Irlanda o Malta (20h). Esa diferencia son €300-400 más al mes.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Mensual EST. (30h/sem)',
    salarios_blue: '💡 VENTAJA ESPAÑA: 30h/semana vs 20h/semana en Irlanda = €300-400 más al mes. Con hotels a €9-12/hora y 30h, puedes ganar €1,080-€1,440/mes. El costo de vida en ciudades secundarias (Valencia, Alicante) es 30-40% menor que Barcelona o Madrid.',
    salarios_hack: 'Elige ciudades secundarias como Valencia, Alicante o Sevilla. Hay menos competencia por trabajo, renta más barata y misma visa. Valencia tiene playa, clima excepcional y renta 40% más barata que Barcelona.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'España es más rápida que Malta (no hay espera de 90 días) pero más lenta que Irlanda por la burocracia del empadronamiento y TIE. El cuello de botella es la cita de Extranjería.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar escuela + Carta de Aceptación + Seguro médico español + Visado Tipo D en consulado', '2-3 meses antes'],
      ['Semana 1', 'SIM card + Empadronamiento + Abrir N26/BBVA + Agenda cita TIE en Extranjería', 'Día 1-7'],
      ['Semana 2-4', 'Recibir TIE + Buscar habitación permanente + Entregar CVs en restaurantes y bares', 'Día 7-30'],
      ['Mes 2', 'Conseguir empleo + Registrar Seguridad Social con empleador + Primer salario', 'Día 30-60'],
      ['Mes 3-4', 'Estabilizar ingresos 30h/semana + Planear educación superior si aplica', 'Día 60-120'],
    ],
    timeline_hack: 'El orden en España es: Empadronamiento → Cita TIE → TIE → Seguridad Social → trabajo. Agenda la cita de Extranjería el mismo día que llegas — puede tardar semanas. Sin TIE, muchos empleadores no pueden contratarte formalmente.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'España es más flexible que Malta — no hay espera de 90 días. Si llegas con NIE adelantado puedes estar trabajando en 2-4 semanas. El trámite clave es la cita de TIE en Extranjería.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Visa activa (Tipo D)', 'NIE / TIE activo', 'Número de Seguridad Social', 'Oferta laboral / contrato'],
    hito1_time: '👉 Tiempo real: 2-4 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato firmado', 'Alta en Seguridad Social', 'Alta en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 3-5 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~2-4 semanas desde que llegas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~1-2 meses desde llegada',
    salario1_hack: 'Si llegas con empadronamiento y cita de TIE ya gestionada desde antes, puedes estar empleable en 2 semanas. La burocracia española es el cuello de botella — quien llega preparado avanza el doble de rápido.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. En España muchas oportunidades y soluciones aparecen primero en grupos de WhatsApp y comunidades internacionales. Mantente activo en esos grupos desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
      ['Extranjería (TIE/NIE)', 'sede.administracionespublicas.gob.es'],
      ['Seguridad Social', 'seg-social.es — NUSS y trámites laborales'],
      ['SEPE (Empleo)', 'sepe.es — Programas de empleo y formación'],
      ['Comunidad L&T', 'Latinos en Madrid, Barcelona, Valencia — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en España',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en España — links próximamente',
    crisis_hack: 'En España muchas oportunidades aparecen primero en grupos de estudiantes y comunidades internacionales. Mantente activo, responde rápido y usa networking para encontrar vivienda o trabajo antes que llegue a portales oficiales.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de España como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Visa de Estudiante (Tipo D)'],
      ['Horas de trabajo', 'Hasta 30 horas/semana'],
      ['Mínimo curso', '20 horas semanales'],
      ['Solvencia obligatoria', '~€7,200 – €8,400 (IPREM anual)'],
      ['Costo promedio curso español', '€2,500 – €5,500 (6 meses)'],
      ['TIE (tarjeta residencia)', '€16 — dentro de 30 días de llegada'],
      ['Renta cuarto compartido', '€480 – €800/mes'],
      ['Empleos más comunes', 'Hospitality, Retail, Delivery, Tourism'],
      ['Salario promedio entrada', '€7 – €12 por hora'],
      ['Tiempo hasta primer trabajo', '2-6 semanas'],
      ['Tiempo hasta primer cobro', '1-2 meses desde llegada'],
      ['Idioma', 'Español'],
      ['Camino a residencia', 'Búsqueda de empleo (12 meses) → Permiso de trabajo → Residencia'],
      ['Nivel de dificultad', 'Medio'],
      ['Mejores ciudades', 'Madrid, Valencia, Barcelona, Sevilla'],
      ['Ventaja única', '30h/semana + universidades públicas más baratas de Europa'],
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
    hero_title: 'Espanha',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Médio',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '€2.500 - €5.500',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Médio',
    included_title: 'O que inclui o Blueprint',
    included: [
      'Até 30 horas/semana de trabalho — mais que Irlanda, Malta ou Canadá',
      'Universidades públicas a partir de €1.500/ano — até 80% mais barato que outros países europeus',
      'TIE (seu ID espanhol) em 30 dias desde a chegada',
      '12 escolas verificadas em Madrid, Barcelona, Valência e Alicante',
      'Enorme comunidade latina — grupos WhatsApp em todas as principais cidades',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Espanha é o destino europeu com mais horas de trabalho permitidas para estudantes — até 30 horas/semana. Cultura latina, idioma compartilhado, clima excepcional e universidades públicas entre as mais baratas da Europa. A rota é: Visto Tipo D → Registro Municipal → TIE → trabalho legal.',
    autoridad_p1_label: 'Visto de Estudante (Tipo D):',
    autoridad_p1_text: 'permite estudar e trabalhar',
    autoridad_p1_b: 'até 30 horas/semana',
    autoridad_p1_end: 'durante o programa acadêmico. Mais horas que Irlanda (20h), Malta (20h) ou Canadá (20h).',
    autoridad_p2_label: 'Acelerador de início:',
    autoridad_p2: 'coordenamos NIE, registro municipal, TIE e Seguridade Social para habilitar a permissão de trabalho desde o início sem perder semanas em burocracia.',
    autoridad_blue: '💱 Padrão de moeda (Espanha): primeiro EUR e ao lado o equivalente em USD. Exemplo: €200 → $230 USD (usando referência 1 EUR ≈ $1,15 USD).',
    autoridad_hack: 'Na Espanha o registro municipal e o contrato de aluguel são tão importantes quanto o visto. Sem endereço registrado você não processa o TIE. Sem TIE você não trabalha legalmente. Prioridade #1: garantir endereço. Todo o resto se constrói sobre isso.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Escolhemos a escola pela viabilidade migratória e custo operacional, não pelo marketing. Olhamos o preço do programa, a cidade e a proximidade a zonas com alta rotatividade de trabalho para que seu orçamento aguente o primeiro ano.',
    estrategia_head: '🇪🇸 Matriz de Escolas de Espanhol: Espanha 2026',
    th_escuela: 'Escola', th_ciudad: 'Cidade', th_duracion: 'Duração', th_precio: 'Preço total', th_web: 'Website',
    solvencia1_label: '🔵 Solvência obrigatória (Espanha):',
    solvencia1_val: '~€7.200 – €8.400 baseado em 100% do IPREM anual',
    solvencia2_label: '🔵 Capital recomendado:',
    solvencia2_val: 'solvência + depósito + primeiro mês + imprevistos',
    estrategia_hack: 'Seu Capital de Execução Real = preço escola + €7.200 solvência + ~€700 despesas administrativas. Esse é seu número mínimo. Se não tiver o valor completo, não inicie o processo — primeiro garanta seu capital.',
    sec_pre_title: 'Pré-Fundações & Pré-Carreiras',
    pre_intro: 'Os programas Foundation na Espanha abrem a porta para universidades europeias reconhecidas. Ao se formar em Bachelor ou Master você pode solicitar a Autorização de Busca de Emprego por 12 meses para conseguir trabalho profissional no país.',
    th_programa: 'Programa', th_institucion: 'Instituição', th_inversion: 'Investimento',
    pre_blue: '🔵 AUTORIZAÇÃO DE BUSCA DE EMPREGO: Ao se formar em Bachelor ou Master na Espanha, você pode solicitar 12 meses adicionais para buscar trabalho profissional. Isso permite posteriormente obter permissão de trabalho → residência legal.',
    pre_hack: 'Os programas Foundation em universidades públicas da Andaluzia, Valência ou Extremadura são os mais econômicos. Mesmo título europeu, até 70% menos custo que Irlanda ou Malta. Verifique a acreditação antes de pagar.',
    sec_edu_title: 'Educação Superior',
    edu_intro: 'A Espanha tem o sistema universitário público mais barato da Europa ocidental. Universidades na Andaluzia, Valência e Extremadura cobram a partir de €1.500/ano para estudantes internacionais — até 80% mais barato que a Irlanda.',
    th_inst: 'Instituição', th_nivel: 'Nível', th_inversion_anual: 'Investimento (ano/total)',
    edu_blue: '💰 HACK UNIVERSIDADES PÚBLICAS: Muitas universidades públicas na Andaluzia, Valência e Extremadura cobram taxas muito reduzidas mesmo para estudantes internacionais. Um Mestrado de €2.500 vs €15.000+ na Irlanda. Mesmo título europeu reconhecido.',
    edu_hack: 'Universidade de Jaén ou Extremadura são as mais baratas da Espanha para internacionais. Mesmo título europeu que UCM ou UAB mas até 80% menos custo. A diferença de preço pode ser de €10.000+ por ano.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Estes são os custos que sua escola NÃO inclui. O seguro médico na Espanha deve ser de uma empresa espanhola, sem copagamentos nem carências — não vale qualquer seguro internacional.',
    th_concepto: 'Conceito', th_costo_eur: 'Custo (EUR)', th_usd: '≈ USD', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA (ESPANHA): ~€7.200 – €8.400 baseado em 100% do IPREM anual. Não é dinheiro para gastar — é prova de capacidade econômica que a Estrangeria exige ver em seus extratos bancários.',
    gastos_hack: 'Seu Capital de Execução Real = preço escola + €7.200 solvência + €700 despesas administrativas. Sem esse valor completo, não inicie o processo. O seguro médico DEVE ser espanhol sem copagamentos — rejeitarão outros seguros internacionais.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Na Espanha a ordem correta é crítica: primeiro registro municipal, depois TIE, depois trabalho. Sem endereço registrado você não pode processar o TIE. Sem TIE você não pode trabalhar legalmente. Tudo depende de garantir sua moradia primeiro.',
    tie_head: '1. TIE — Cartão de Identidade de Estrangeiro',
    tie_p: 'Você deve solicitar o TIE dentro dos primeiros 30 dias de chegada. Sem TIE você não pode trabalhar legalmente nem abrir conta bancária completa.',
    pasos: [
      ['Passo 1', 'Entrar com Visto Nacional Tipo D do consulado espanhol', null],
      ['Passo 2', 'Registro municipal (empadronamento) na prefeitura da sua cidade (mesmo dia se possível)', null],
      ['Passo 3', 'Consulta na Estrangeria para coleta de impressões digitais (dentro dos primeiros 30 dias)', 'https://sede.administracionespublicas.gob.es'],
      ['Passo 4', 'Anexar: Passaporte + Carta de Aceitação + Contrato de aluguel + Formulário EX-17', null],
      ['Passo 5', 'Pagar taxa administrativa €16 pelo TIE', null],
    ],
    trabajo_head: '2. Permissão de Trabalho (30h/semana)',
    trabajo_items: [
      ['Você pode trabalhar até 30 horas/semana enquanto durar o programa acadêmico', null],
      ['O empregador processa seu registro na Seguridade Social (NUSS)', 'https://seg-social.es'],
      ['Com NIE/TIE + Seguridade Social ativo, você já pode trabalhar legalmente', null],
    ],
    aterrizaje_hack: 'A consulta na Estrangeria para o TIE pode demorar semanas. Agende sua consulta o mais rápido possível — sem TIE ativo muitos empregadores não podem contratá-lo legalmente. É o principal gargalo na Espanha.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Abra N26 ou BBVA nos primeiros dias para movimentar dinheiro rápido. Quando tiver NIE/TIE e contrato de trabalho, migre para banco tradicional para receber salário e domiciliar pagamentos.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra N26 ou BBVA assim que chegar para começar a movimentar dinheiro e receber transferências. Quando já tiver NIE/TIE e contrato de trabalho, abra Santander ou BBVA para receber salário e domiciliar pagamentos como aluguel, luz ou internet.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais obrigatórios para seu processo na Espanha. Sem Seguridade Social você não pode trabalhar legalmente. Sem consulta na Estrangeria você não tem TIE.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'A consulta na Estrangeria é o gargalo na Espanha. Agende sua consulta no mesmo dia que chegar — pode demorar semanas. Sem TIE ativo, muitos empregadores não podem contratá-lo formalmente mesmo tendo NIE.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário em Madrid, Barcelona e Valência é muito competitivo. Os apartamentos são alugados em horas. O contrato de aluguel é OBRIGATÓRIO para o registro municipal e o TIE — sem ele você não pode completar seu processo migratório.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal EUR', th_mes: 'Preço Mensal EUR',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. Na Espanha há muitos golpes online em aluguéis. Se não viu o apartamento fisicamente, NÃO pague nada.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Na Espanha os apartamentos são alugados muito rápido. Se ver um quarto no Idealista, escreva imediatamente e agende visita nesse mesmo dia. Quem responde primeiro geralmente fica com o apartamento. Ative notificações push no Idealista antes de chegar.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Com 30 horas/semana você pode ganhar significativamente mais que em outros países do blueprint. A Espanha tem 80+ milhões de turistas por ano — hotéis, restaurantes e bares contratam massivamente, especialmente na temporada.',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'imprima 20-30 cópias. Vá a restaurantes e bares entre',
    empleos_cv_b: '15h – 18h',
    empleos_cv_quote: '"Olá, estou procurando trabalho como garçom, tenho disponibilidade imediata."',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_h: 'Salário/hora EUR', th_usd_h: '≈ USD', th_canal_emp: 'Canal principal',
    empleos_hack: 'Na Espanha valorizam atitude, presença e disponibilidade imediata. Muitos trabalhos em hotelaria ou comércio são conseguidos falando diretamente com o gerente, mesmo que sua experiência seja básica. O espanhol básico abre muito mais portas que na Irlanda ou Malta.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Estimativa de renda real para estudantes trabalhando 30 horas semanais. A Espanha permite 30h/semana — 50% mais que Irlanda ou Malta (20h). Essa diferença são €300-400 a mais por mês.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Mensal EST. (30h/sem)',
    salarios_blue: '💡 VANTAGEM ESPANHA: 30h/semana vs 20h/semana na Irlanda = €300-400 a mais por mês. Com hotéis a €9-12/hora e 30h, você pode ganhar €1.080-€1.440/mês. O custo de vida em cidades secundárias (Valência, Alicante) é 30-40% menor que Barcelona ou Madrid.',
    salarios_hack: 'Escolha cidades secundárias como Valência, Alicante ou Sevilha. Há menos concorrência por trabalho, aluguel mais barato e mesmo visto. Valência tem praia, clima excepcional e aluguel 40% mais barato que Barcelona.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'A Espanha é mais rápida que Malta (não há espera de 90 dias) mas mais lenta que a Irlanda pela burocracia do registro municipal e TIE. O gargalo é a consulta na Estrangeria.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar escola + Carta de Aceitação + Seguro médico espanhol + Visto Tipo D no consulado', '2-3 meses antes'],
      ['Semana 1', 'SIM card + Registro municipal + Abrir N26/BBVA + Agendar consulta TIE na Estrangeria', 'Dia 1-7'],
      ['Semana 2-4', 'Receber TIE + Buscar quarto permanente + Entregar CVs em restaurantes e bares', 'Dia 7-30'],
      ['Mês 2', 'Conseguir emprego + Registrar Seguridade Social com empregador + Primeiro salário', 'Dia 30-60'],
      ['Mês 3-4', 'Estabilizar renda 30h/semana + Planejar educação superior se aplicável', 'Dia 60-120'],
    ],
    timeline_hack: 'A ordem na Espanha é: Registro municipal → Consulta TIE → TIE → Seguridade Social → trabalho. Agende a consulta na Estrangeria no mesmo dia que chegar — pode demorar semanas. Sem TIE, muitos empregadores não podem contratá-lo formalmente.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'A Espanha é mais flexível que Malta — não há espera de 90 dias. Se chegar com NIE adiantado pode estar trabalhando em 2-4 semanas. O processo chave é a consulta de TIE na Estrangeria.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Visto ativo (Tipo D)', 'NIE / TIE ativo', 'Número de Seguridade Social', 'Oferta de trabalho / contrato'],
    hito1_time: '👉 Tempo real: 2-4 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato assinado', 'Registro na Seguridade Social', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 3-5 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~2-4 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~1-2 meses desde a chegada',
    salario1_hack: 'Se chegar com registro municipal e consulta de TIE já agendada com antecedência, pode estar empregável em 2 semanas. A burocracia espanhola é o gargalo — quem chega preparado avança o dobro de rápido.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. Na Espanha muitas oportunidades e soluções aparecem primeiro em grupos de WhatsApp e comunidades internacionais. Mantenha-se ativo nesses grupos desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '112 — Polícia, Ambulância, Bombeiros'],
      ['Estrangeria (TIE/NIE)', 'sede.administracionespublicas.gob.es'],
      ['Seguridade Social', 'seg-social.es — NUSS e trâmites trabalhistas'],
      ['SEPE (Emprego)', 'sepe.es — Programas de emprego e formação'],
      ['Comunidade L&T', 'Latinos em Madrid, Barcelona, Valência — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Espanha',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na Espanha — links em breve',
    crisis_hack: 'Na Espanha muitas oportunidades aparecem primeiro em grupos de estudantes e comunidades internacionais. Mantenha-se ativo, responda rápido e use networking para encontrar moradia ou trabalho antes que chegue aos portais oficiais.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Espanha como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Visto de Estudante (Tipo D)'],
      ['Horas de trabalho', 'Até 30 horas/semana'],
      ['Curso mínimo', '20 horas semanais'],
      ['Solvência obrigatória', '~€7.200 – €8.400 (IPREM anual)'],
      ['Custo médio curso espanhol', '€2.500 – €5.500 (6 meses)'],
      ['TIE (cartão de residência)', '€16 — dentro de 30 dias da chegada'],
      ['Aluguel quarto compartilhado', '€480 – €800/mês'],
      ['Empregos mais comuns', 'Hotelaria, Varejo, Delivery, Turismo'],
      ['Salário médio de entrada', '€7 – €12 por hora'],
      ['Tempo até primeiro trabalho', '2-6 semanas'],
      ['Tempo até primeiro pagamento', '1-2 meses desde chegada'],
      ['Idioma', 'Espanhol'],
      ['Caminho para residência', 'Busca de emprego (12 meses) → Permissão de trabalho → Residência'],
      ['Nível de dificuldade', 'Médio'],
      ['Melhores cidades', 'Madrid, Valência, Barcelona, Sevilha'],
      ['Vantagem única', '30h/semana + universidades públicas mais baratas da Europa'],
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
    hero_title: 'Spain',
    hero_sub: 'Europe · Work and Study',
    hero_badge: 'Medium',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '€2,500 - €5,500',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Medium',
    included_title: 'What the Blueprint Includes',
    included: [
      'Up to 30 hours/week of work — more than Ireland, Malta or Canada',
      'Public universities from €1,500/year — up to 80% cheaper than other European countries',
      'TIE (your Spanish ID) in 30 days from arrival',
      '12 verified schools in Madrid, Barcelona, Valencia and Alicante',
      'Huge Latin community — WhatsApp groups in all major cities',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Spain is the European destination with the most work hours allowed for students — up to 30 hours/week. Latin culture, shared language, exceptional climate and public universities among the cheapest in Europe. The route is: Type D Visa → Municipal Registration → TIE → legal work.',
    autoridad_p1_label: 'Student Visa (Type D):',
    autoridad_p1_text: 'allows you to study and work',
    autoridad_p1_b: 'up to 30 hours/week',
    autoridad_p1_end: 'during the academic program. More hours than Ireland (20h), Malta (20h) or Canada (20h).',
    autoridad_p2_label: 'Launch accelerator:',
    autoridad_p2: 'we coordinate NIE, municipal registration, TIE and Social Security to enable your work permit from the start without losing weeks to bureaucracy.',
    autoridad_blue: '💱 Currency standard (Spain): EUR first with USD equivalent. Example: €200 → $230 USD (using reference 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'In Spain the municipal registration and rental contract are as important as the visa. Without a registered address you cannot process the TIE. Without TIE you cannot work legally. Priority #1: secure your address. Everything else is built on that.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'We choose schools by migration viability and operating cost, not marketing. We look at program price, city and proximity to high job-turnover areas so your budget lasts the first year.',
    estrategia_head: '🇪🇸 Spanish Schools Matrix: Spain 2026',
    th_escuela: 'School', th_ciudad: 'City', th_duracion: 'Duration', th_precio: 'Total price', th_web: 'Website',
    solvencia1_label: '🔵 Mandatory funds (Spain):',
    solvencia1_val: '~€7,200 – €8,400 based on 100% of the annual IPREM',
    solvencia2_label: '🔵 Recommended capital:',
    solvencia2_val: 'funds + deposit + first month + contingencies',
    estrategia_hack: 'Your Real Execution Capital = school price + €7,200 funds + ~€700 administrative costs. That\'s your minimum number. If you don\'t have the full amount, don\'t start the process — secure your capital first.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Foundation programs in Spain open the door to recognized European universities. Upon graduating from a Bachelor or Master you can apply for the Job Search Authorization for 12 months to find professional work in the country.',
    th_programa: 'Program', th_institucion: 'Institution', th_inversion: 'Investment',
    pre_blue: '🔵 JOB SEARCH AUTHORIZATION: Upon graduating from a Bachelor or Master in Spain, you can apply for 12 additional months to search for professional work. This allows you to subsequently obtain a work permit → legal residency.',
    pre_hack: 'Foundation programs at public universities in Andalusia, Valencia or Extremadura are the most affordable. Same European degree, up to 70% less cost than Ireland or Malta. Verify accreditation before paying.',
    sec_edu_title: 'Higher Education',
    edu_intro: 'Spain has the cheapest public university system in Western Europe. Universities in Andalusia, Valencia and Extremadura charge from €1,500/year for international students — up to 80% cheaper than Ireland.',
    th_inst: 'Institution', th_nivel: 'Level', th_inversion_anual: 'Investment (year/total)',
    edu_blue: '💰 PUBLIC UNIVERSITY HACK: Many public universities in Andalusia, Valencia and Extremadura charge very reduced fees even for international students. A Master\'s for €2,500 vs €15,000+ in Ireland. Same recognized European degree.',
    edu_hack: 'University of Jaén or Extremadura are the cheapest in Spain for internationals. Same European degree as UCM or UAB but up to 80% less cost. The price difference can be €10,000+ per year.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'These are costs your school does NOT include. Health insurance in Spain must be from a Spanish company, with no copayments or waiting periods — international insurance is not accepted.',
    th_concepto: 'Item', th_costo_eur: 'Cost (EUR)', th_usd: '≈ USD', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS (SPAIN): ~€7,200 – €8,400 based on 100% of the annual IPREM. This is not money to spend — it\'s proof of economic capacity that Immigration requires to see in your bank statements.',
    gastos_hack: 'Your Real Execution Capital = school price + €7,200 funds + €700 administrative costs. Without the full amount, don\'t start the process. Health insurance MUST be Spanish with no copayments — other international insurance will be rejected.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In Spain the correct order is critical: first municipal registration, then TIE, then work. Without a registered address you cannot process the TIE. Without TIE you cannot work legally. Everything depends on securing your housing first.',
    tie_head: '1. TIE — Foreigner Identity Card',
    tie_p: 'You must apply for the TIE within the first 30 days of arrival. Without TIE you cannot work legally or open a full bank account.',
    pasos: [
      ['Step 1', 'Enter with National Type D Visa from the Spanish consulate', null],
      ['Step 2', 'Municipal registration at the city hall on your arrival day (same day if possible)', null],
      ['Step 3', 'Appointment at Immigration for fingerprints (within the first 30 days)', 'https://sede.administracionespublicas.gob.es'],
      ['Step 4', 'Attach: Passport + Acceptance Letter + Rental contract + EX-17 Form', null],
      ['Step 5', 'Pay €16 administrative fee for the TIE', null],
    ],
    trabajo_head: '2. Work Permit (30h/week)',
    trabajo_items: [
      ['You can work up to 30 hours/week while the academic program lasts', null],
      ['The employer processes your Social Security registration (NUSS)', 'https://seg-social.es'],
      ['With NIE/TIE + active Social Security, you can already work legally', null],
    ],
    aterrizaje_hack: 'The Immigration appointment for the TIE can take weeks. Schedule your appointment as soon as possible — without an active TIE many employers cannot legally hire you. It\'s the main bottleneck in Spain.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Open N26 or BBVA in the first few days to move money quickly. When you have NIE/TIE and an employment contract, switch to a traditional bank to receive payroll and set up direct debits.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open N26 or BBVA as soon as you arrive to start moving money and receiving transfers. When you already have NIE/TIE and an employment contract, open Santander or BBVA to receive payroll and set up direct debits for rent, utilities or internet.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Mandatory official portals for your process in Spain. Without Social Security you cannot work legally. Without an Immigration appointment you don\'t have TIE.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'The Immigration appointment is the bottleneck in Spain. Schedule your appointment the same day you arrive — it can take weeks. Without an active TIE, many employers cannot formally hire you even if you have a NIE.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'The real estate market in Madrid, Barcelona and Valencia is very competitive. Apartments are rented within hours. The rental contract is MANDATORY for municipal registration and TIE — without it you cannot complete your migration process.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price EUR', th_mes: 'Monthly Price EUR',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. In Spain there are many online rental scams. If you haven\'t physically seen the apartment, DO NOT pay anything.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'In Spain apartments are rented very quickly. If you see a room on Idealista, write immediately and schedule a visit that same day. The first to respond usually gets the apartment. Activate push notifications on Idealista before arriving.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'With 30 hours/week you can earn significantly more than in other blueprint countries. Spain has 80+ million tourists per year — hotels, restaurants and bars hire massively, especially in season.',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'print 20-30 copies. Go to restaurants and bars between',
    empleos_cv_b: '3:00 PM – 6:00 PM',
    empleos_cv_quote: '"Hi, I\'m looking for work as a waiter, I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_h: 'Hourly Wage EUR', th_usd_h: '≈ USD', th_canal_emp: 'Main Channel',
    empleos_hack: 'In Spain they value attitude, presence and immediate availability. Many jobs in hospitality or retail are found by speaking directly with the manager, even if your experience is basic. Basic Spanish opens many more doors than in Ireland or Malta.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Real income estimates for students working 30 hours per week. Spain allows 30h/week — 50% more than Ireland or Malta (20h). That difference is €300-400 more per month.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Monthly EST. (30h/wk)',
    salarios_blue: '💡 SPAIN ADVANTAGE: 30h/week vs 20h/week in Ireland = €300-400 more per month. With hotels at €9-12/hour and 30h, you can earn €1,080-€1,440/month. Cost of living in secondary cities (Valencia, Alicante) is 30-40% lower than Barcelona or Madrid.',
    salarios_hack: 'Choose secondary cities like Valencia, Alicante or Seville. Less job competition, cheaper rent and same visa. Valencia has beach, exceptional climate and rent 40% cheaper than Barcelona.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Spain is faster than Malta (no 90-day wait) but slower than Ireland due to municipal registration and TIE bureaucracy. The bottleneck is the Immigration appointment.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay school + Acceptance Letter + Spanish health insurance + Type D Visa at consulate', '2-3 months before'],
      ['Week 1', 'SIM card + Municipal registration + Open N26/BBVA + Schedule TIE appointment at Immigration', 'Day 1-7'],
      ['Week 2-4', 'Receive TIE + Find permanent room + Drop off CVs at restaurants and bars', 'Day 7-30'],
      ['Month 2', 'Find employment + Register Social Security with employer + First salary', 'Day 30-60'],
      ['Month 3-4', 'Stabilize income 30h/week + Plan higher education if applicable', 'Day 60-120'],
    ],
    timeline_hack: 'The order in Spain is: Municipal registration → TIE appointment → TIE → Social Security → work. Schedule the Immigration appointment the same day you arrive — it can take weeks. Without TIE, many employers cannot formally hire you.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'Spain is more flexible than Malta — no 90-day wait. If you arrive with an advance NIE you can be working in 2-4 weeks. The key procedure is the TIE appointment at Immigration.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active visa (Type D)', 'NIE / TIE active', 'Social Security Number', 'Job offer / contract'],
    hito1_time: '👉 Real timeline: 2-4 weeks from arrival',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Contract signed', 'Social Security registration', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 3-5 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~2-4 weeks from arrival',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~1-2 months from arrival',
    salario1_hack: 'If you arrive with municipal registration and TIE appointment already managed in advance, you can be employable in 2 weeks. Spanish bureaucracy is the bottleneck — those who arrive prepared advance twice as fast.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. In Spain many opportunities and solutions appear first in WhatsApp groups and international communities. Stay active in those groups from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '112 — Police, Ambulance, Fire'],
      ['Immigration (TIE/NIE)', 'sede.administracionespublicas.gob.es'],
      ['Social Security', 'seg-social.es — NUSS and employment procedures'],
      ['SEPE (Employment)', 'sepe.es — Employment and training programs'],
      ['L&T Community', 'Latinos in Madrid, Barcelona, Valencia — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Spain',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Spain — links coming soon',
    crisis_hack: 'In Spain many opportunities appear first in student groups and international communities. Stay active, respond fast and use networking to find housing or work before it reaches official portals.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Spain as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa (Type D)'],
      ['Work hours', 'Up to 30 hours/week'],
      ['Minimum course', '20 hours per week'],
      ['Mandatory funds', '~€7,200 – €8,400 (annual IPREM)'],
      ['Average Spanish course cost', '€2,500 – €5,500 (6 months)'],
      ['TIE (residency card)', '€16 — within 30 days of arrival'],
      ['Shared room rent', '€480 – €800/month'],
      ['Most common jobs', 'Hospitality, Retail, Delivery, Tourism'],
      ['Average entry salary', '€7 – €12 per hour'],
      ['Time to first job', '2-6 weeks'],
      ['Time to first payment', '1-2 months from arrival'],
      ['Language', 'Spanish'],
      ['Path to residency', 'Job search (12 months) → Work permit → Residency'],
      ['Difficulty level', 'Medium'],
      ['Best cities', 'Madrid, Valencia, Barcelona, Seville'],
      ['Unique advantage', '30h/week + cheapest public universities in Europe'],
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

export default function Espana() {
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
    <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '16px', borderLeft: '3px solid #e8572a', paddingLeft: '12px' }}>{text}</p>
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
    td: (i: number) => ({ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', lineHeight: '1.4' }),
    link: { color: '#2563eb', textDecoration: 'underline' as const, cursor: 'pointer' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }

  const Link = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )

  const Section = ({ id, emoji, title, children, free = false }: any) => (
    <div style={{ border: free ? '2px solid #e8572a' : '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontWeight: '600', fontSize: '15px' }}>{emoji} {title}</span>
        <span style={{ fontSize: '16px', color: '#999' }}>{openSection === id ? '∧' : '∨'}</span>
      </button>
      {openSection === id && (
        <div style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #f5f5f5' }}>{children}</div>
      )}
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇪🇸</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold' }}>{t.hero_badge}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[['💰', t.stat1_label, t.stat1_value], ['🕐', t.stat2_label, t.stat2_value], ['📊', t.stat3_label, t.stat3_value]].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[0]}</div>
            <div style={{ color: '#999', fontSize: '10px', marginBottom: '3px' }}>{s[1]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>{s[2]}</div>
          </div>
        ))}
      </div>

      {/* INCLUDED */}
      <div style={{ margin: '0 20px 16px', backgroundColor: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontWeight: '700', marginBottom: '10px', fontSize: '15px' }}>{t.included_title}</h3>
        {t.included.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span style={{ color: '#22c55e', fontSize: '16px', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '13px', color: '#444', lineHeight: '1.5' }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px' }}>

        {/* FREE - AUTORIDAD */}
        <Section id="autoridad" emoji="🧭" title={t.sec_autoridad_title} free={true}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559386081-325882507af7?q=80&w=736&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>{t.autoridad_p1_label}</strong> {t.autoridad_p1_text} <strong>{t.autoridad_p1_b}</strong> {t.autoridad_p1_end}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>{t.autoridad_p2_label}</strong> {t.autoridad_p2}
          </p>
          <BlueBox text={t.autoridad_blue} />
          <HackBox text={t.autoridad_hack} />
        </Section>

        {/* PREMIUM BADGE */}
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <span style={{ backgroundColor: '#fff8e1', border: '2px solid #f59e0b', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: 'bold' }}>{t.premium_badge}</span>
        </div>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />
          <SubHead text={t.estrategia_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_escuela, t.th_ciudad, t.th_duracion, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Proyecto Español', 'Alicante / Granada', '6 meses', '€2,500 – €3,500', 'proyectoespanol.com', 'https://proyectoespanol.com'],
                  ['Conversa Spanish Institute', 'Valencia', '6 meses', '€2,760', 'conversaspanishinstitute.com', 'https://conversaspanishinstitute.com'],
                  ['Enforex', 'Valencia / Málaga / Madrid', '6 meses', '€2,800 – €3,600', 'enforex.com', 'https://www.enforex.com'],
                  ['Olé Languages', 'Barcelona', '6 meses', '€2,800 – €4,000', 'olelanguages.com', 'https://olelanguages.com'],
                  ['Speakeasy BCN', 'Barcelona', '6 meses', '€2,900 – €3,100', 'speakeasybcn.com', 'https://speakeasybcn.com'],
                  ['Don Quijote', 'Madrid / Barcelona / Valencia', '6 meses', '€3,000 – €3,800', 'donquijote.org', 'https://www.donquijote.org'],
                  ['BCNLIP', 'Barcelona', '6 meses', '€3,000 – €4,500', 'bcnlip.com', 'https://bcnlip.com'],
                  ['Expanish', 'Barcelona / Madrid', '6 meses', '€3,200 – €4,200', 'expanish.com', 'https://expanish.com'],
                  ['Taronja School', 'Valencia', '6 meses', '€3,200 – €4,000', 'taronjaschool.com', 'https://taronjaschool.com'],
                  ['Camino Barcelona', 'Barcelona', '6 meses', '€3,300 – €4,300', 'caminobarcelona.com', 'https://caminobarcelona.com'],
                  ['AIL Madrid', 'Madrid', '6–9 meses', '€3,500 – €5,500', 'ailmadrid.com', 'https://ailmadrid.com'],
                  ['IH España', 'Barcelona / Madrid / Valencia', '6 meses', '€3,800 – €5,500', 'ihspain.com', 'https://www.ihspain.com'],
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
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>{t.solvencia1_label}</strong> {t.solvencia1_val}<br />
              <strong>{t.solvencia2_label}</strong> {t.solvencia2_val}
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
                  ['International Foundation', 'Universidad Europea', '€4,500 – €6,500', 'universidadeuropea.com', 'https://universidadeuropea.com'],
                  ['Foundation Program', 'EU Business School', '€5,500 – €7,500', 'euruni.edu', 'https://euruni.edu'],
                  ['Access Course', 'Universidad de Valencia', '€2,500 – €3,500', 'uv.es', 'https://www.uv.es'],
                  ['Pre-Masters Program', 'EAE Business School', '€6,500 – €9,000', 'eae.es', 'https://eae.es'],
                  ['Academic Spanish Prep', 'Expanish', '€4,000 – €5,500', 'expanish.com', 'https://expanish.com'],
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

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title={t.sec_edu_title}>
          <Intro text={t.edu_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_nivel, t.th_inversion_anual, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidad de Jaén / Extremadura', 'Bachelor / Master', '€1,500 – €2,500', 'ujaen.es', 'https://www.ujaen.es'],
                  ['Universidades Públicas (Valencia / Granada)', 'Bachelor / Master', '€2,500 – €4,000', 'uv.es', 'https://www.uv.es'],
                  ['Universidad de Granada', 'Bachelor / Master', '€2,500 – €4,500', 'ugr.es', 'https://www.ugr.es'],
                  ['Universidad de Valencia', 'Bachelor / Master', '€2,800 – €4,500', 'uv.es', 'https://www.uv.es'],
                  ['Universidad de Salamanca', 'Bachelor / Master', '€3,000 – €4,500', 'usal.es', 'https://www.usal.es'],
                  ['Universidad Autónoma de Barcelona', 'Master', '€4,000 – €6,000', 'uab.cat', 'https://www.uab.cat'],
                  ['Universidad Complutense de Madrid', 'Master', '€8,000 – €10,000', 'ucm.es', 'https://www.ucm.es'],
                  ['EAE Business School', 'Master', '€7,000 – €12,000', 'eae.es', 'https://www.eae.es'],
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
          <BlueBox text={t.edu_blue} />
          <HackBox text={t.edu_hack} />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <Intro text={t.gastos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo_eur, t.th_usd, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico (compañía española, sin copagos)', '€400 – €600', '$460 – $690', '✅ Sí'],
                  ['Tasa de visado (consulado)', '€60 – €80', '$69 – $92', '✅ Sí'],
                  ['Materiales / Libros', '€50 – €100', '$58 – $115', '✅ Sí'],
                  ['TIE (Tarjeta de Identidad de Extranjero)', '€16', '$18', '✅ Sí'],
                  ['Solvencia económica (IPREM anual)', '€7,200 – €8,400', '$8,280 – $9,660', '✅ Obligatorio visa'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[3]}</td>
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
          <SubHead text={t.tie_head} />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>{t.tie_p}</p>
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.trabajo_head} />
          {t.trabajo_items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span>{item[1] ? <a href={item[1] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{item[0]}</a> : item[0]}</span>
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
                  ['N26', 'Digital', 'Apertura rápida con pasaporte. IBAN europeo. Sin comisiones. Ideal para empezar.', 'n26.com', 'https://n26.com'],
                  ['Revolut', 'Digital', 'Multi-moneda y transferencias baratas. Útil para uso diario pero no siempre para nóminas.', 'revolut.com', 'https://revolut.com'],
                  ['BBVA', 'Tradicional', 'Cuenta gratuita para jóvenes, excelente app. Ideal para domiciliar pagos y nómina.', 'bbva.es', 'https://bbva.es'],
                  ['Santander', 'Tradicional', 'Red enorme de cajeros. Muy usado por estudiantes internacionales y empresas.', 'santander.es', 'https://santander.es'],
                  ['CaixaBank', 'Tradicional', 'HolaBank para extranjeros con atención en inglés. Gran presencia nacional.', 'caixabank.es', 'https://caixabank.es'],
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
                  ['Sede Extranjería', 'Citas NIE/TIE y trámites migratorios', 'Semana 1 — agenda cita inmediatamente', 'sede.administracionespublicas.gob.es', 'https://sede.administracionespublicas.gob.es'],
                  ['Seguridad Social (NUSS)', 'Número de Seguridad Social para trabajar', 'Cuando consigues empleo', 'seg-social.es', 'https://seg-social.es'],
                  ['SEPE', 'Programas de empleo y formación', 'Desde semana 2-3', 'sepe.es', 'https://sepe.es'],
                  ['InfoJobs', 'Portal de empleo más grande de España', 'Desde semana 1', 'infojobs.net', 'https://infojobs.net'],
                  ['Indeed España', 'Vacantes de todo tipo', 'Desde semana 1', 'indeed.es', 'https://indeed.es'],
                  ['JobToday', 'Hostelería, retail y trabajos rápidos', 'Desde semana 1', 'jobtoday.com', 'https://jobtoday.com'],
                  ['Turijobs', 'Hoteles, restaurantes y turismo', 'Desde semana 1', 'turijobs.com', 'https://turijobs.com'],
                  ['Idealista', 'Vivienda #1 en España', 'Semana 1 para encontrar habitación', 'idealista.com', 'https://idealista.com'],
                  ['Badi', 'App de habitaciones compartidas', 'Semana 1', 'badi.com', 'https://badi.com'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579282240050-352db0a14c21?q=80&w=652&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€120 – €200', '€480 – €800'],
                  ['Cuarto individual', '€300 – €500', '€800 – €1,200'],
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
                  ['Idealista', 'Portal #1 en España', 'Activa alertas push — responde en menos de 1 hora', 'idealista.com', 'https://idealista.com'],
                  ['Spotahome', 'Plataforma verificada', 'Propiedades verificadas con fotos y video', 'spotahome.com', 'https://spotahome.com'],
                  ['Badi', 'App de habitaciones', 'La app más popular para habitaciones compartidas', 'badi.com', 'https://badi.com'],
                  ['Uniplaces', 'Plataforma estudiantil', 'Alquiler rápido para estudiantes internacionales', 'uniplaces.com', 'https://uniplaces.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Mexicanos, Colombianos, Argentinos en Madrid/Barcelona', 'Ver grupos', '#'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1761145190969-cbeb31f64aa1?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <strong>{t.empleos_cv_b}</strong>. {t.empleos_cv_quote}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_h, t.th_usd_h, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Camarero / Bar Staff / Ayudante de Cocina', '€7 – €10', '$8 – $12', 'CV en persona / JobToday / InfoJobs'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €9', '$8 – $10', 'Agencias / Indeed / Networking'],
                  ['Hotels & Tourism', 'Recepción / Hotel Staff', '€9 – €12', '$10 – $14', 'Turijobs / Hosco / LinkedIn'],
                  ['Retail', 'Dependiente / Shop Assistant', '€8 – €10', '$9 – $12', 'InfoJobs / Indeed'],
                  ['Delivery', 'Repartidor / Courier', '€8 – €12', '$9 – $14', 'Glovo / Uber Eats / Apps'],
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
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_salario_h, t.th_usd_h, t.th_mensual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Camarero / Bar Staff', '€7 – €10', '$8 – $12', '€840 – €1,200'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €9', '$8 – $10', '€840 – €1,080'],
                  ['Hotels', 'Recepción / Hotel Staff', '€9 – €12', '$10 – $14', '€1,080 – €1,440'],
                  ['Retail', 'Dependiente', '€8 – €10', '$9 – $12', '€960 – €1,200'],
                  ['Delivery', 'Repartidor / Courier', '€8 – €12', '$9 – $14', '€960 – €1,440'],
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
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>{t.hito1_time}</p>
            </div>
            <div style={{ backgroundColor: '#eff6ff', borderRadius: '12px', padding: '16px', border: '1px solid #93c5fd' }}>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e40af', margin: '0 0 10px' }}>{t.hito2_title}</p>
              {t.hito2_items.map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: '#444', margin: '4px 0', display: 'flex', gap: '6px' }}>
                  <span style={{ color: '#3b82f6' }}>✓</span> {item}
                </p>
              ))}
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8572a', margin: '10px 0 0' }}>{t.hito2_time}</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '14px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
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
              <span style={{ color: '#444', lineHeight: '1.5' }}>{item[1]}</span>
            </div>
          ))}
          <SubHead text={t.crisis_gestion_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_problema, t.th_accion, t.th_contacto].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía Nacional y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en plataforma y denunciar en Policía', 'Policía Nacional'],
                  ['Problemas con TIE/NIE', 'Revisar cita en Extranjería y reunir documentos faltantes', 'Sede Extranjería'],
                  ['Retraso en documentos de escuela', 'Contactar Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Centro médico privado o urgencias con seguro', '112'],
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
            <p style={{ fontSize: '14px', margin: '0 0 10px', fontWeight: '700' }}>{t.comunidad_title}</p>
            <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>{t.comunidad_text}</p>
          </div>
          <HackBox text={t.crisis_hack} />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1728249987965-3943d53dd634?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇪🇸`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px' }}>{t.consultoria_title}</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

        {/* FEEDBACK */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '16px' }}>
          <div style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>📝</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', marginBottom: '4px' }}>{t.feedback_title}</h3>
          <p style={{ color: '#888', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>{t.feedback_desc}</p>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder={t.feedback_placeholder}
            rows={3}
            style={{ width: '100%', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '12px', fontSize: '13px', resize: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', outline: 'none' }}
          />
          <button
            onClick={() => {
              if (!feedback.trim()) return
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint España:\n\n' + feedback)}`, '_blank')
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