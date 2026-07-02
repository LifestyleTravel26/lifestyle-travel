'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { usePurchase } from '../../hooks/usePurchase'

const translations = {
  es: {
    hero_title: 'Irlanda',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '€3,000 - €5,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Fácil',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Stamp 2 permite estudiar full-time y trabajar 20h/semana (40h en vacaciones)',
      'PPS Number en MyWelfare.ie apenas llegues — clave para evitar Emergency Tax del 40%',
      'Stamp 1G post-graduación: trabajá tiempo completo 1-2 años como camino a residencia',
      'Escuelas desde €3,000/año — 18 opciones verificadas en Dublín y Limerick',
      'Comunidad latina consolidada — grupos de WhatsApp para vivienda y trabajo',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Irlanda es el destino número 1 para latinoamericanos en Europa. Inglés oficial, alta demanda laboral, comunidad latina consolidada y un camino claro hacia la residencia permanente a través del Stamp 1G post-graduación.',
    autoridad_stamp2_label: 'Stamp 2 (Student Visa):',
    autoridad_stamp2_text: 'te permite estudiar a tiempo completo y trabajar',
    autoridad_20h: '20 horas/semana',
    autoridad_mid: 'durante clases y',
    autoridad_40h: '40 horas/semana',
    autoridad_end: 'en vacaciones oficiales.',
    autoridad_acelerador_label: 'Acelerador de puesta en marcha:',
    autoridad_acelerador_text: 'una hoja de ruta clara para que aterrices, te actives legalmente y empieces a generar ingresos sin improvisar. La clave es el orden y el timing correcto desde el día 1.',
    autoridad_blue: '💱 Estándar de moneda: todos los precios van en EUR primero, luego el equivalente en USD. Referencia: 1 EUR ≈ $1.10 USD. Ejemplo: €300 → $330 USD.',
    autoridad_hack: 'El PPS Number es la llave para todo en Irlanda. Sin él, tu empleador te aplicará Emergency Tax (~40%). Prioriza conseguirlo en la primera semana usando un Job Offer como prueba de necesidad.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'Elegir bien tu escuela es la decisión financiera más importante de tu proceso. No se trata solo de estudiar — es tu inversión base que determina tu velocidad de inserción laboral. Las escuelas AM son más caras pero te dejan las tardes libres para trabajar. Las PM son más baratas y te dejan las mañanas libres.',
    dublin_head: '🇮🇪 Matriz: Dublín (Sede Central)',
    dublin_sub: '18 escuelas verificadas en Dublín ordenadas por precio. AM = turno mañana (más caro), PM = turno tarde (más barato y libera mañanas para trabajar).',
    th_inst: 'Institución', th_loc: 'Ubicación', th_am: 'Precio AM', th_usd: '≈ USD', th_pm: 'Precio PM', th_web: 'Website',
    limerick_head: '☘️ Matriz: Limerick (Optimización de costos)',
    limerick_sub: 'Limerick es la segunda ciudad universitaria de Irlanda. Renta más barata (€100-200/mes menos que Dublín), menor competencia laboral y escuelas más económicas. Ideal si tu prioridad es ahorrar.',
    solvencia_ingles: '🔵 Solvencia requerida para inglés (25 semanas):',
    solvencia_uni: '🔵 Solvencia requerida para universidad/master:',
    estrategia_hack: 'Antes de elegir escuela aplica este filtro: ¿El horario AM o PM te permite trabajar? ¿Está en zona con empleos cerca? ¿Precio total (escuela + solvencia) cabe en tu capital? Si no pasa los 3 filtros, descártala.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Si tu objetivo es una universidad irlandesa pero no tienes notas de bachillerato europeo equivalentes, los programas Pre-Foundation son tu puerta de entrada. Son más cortos, más baratos que un Bachelor completo y te dan acceso al mismo Stamp 1G post-graduación.',
    pre_p1: 'Estos programas de entre 1 y 2 años te preparan para entrar directamente a colleges y universidades irlandesas. Al graduarte, calificas para el',
    pre_stamp: 'Stamp 1G',
    pre_p1_end: 'que te permite trabajar tiempo completo por 1-2 años.',
    th_prog: 'Programa', th_precio_eur: 'Precio EUR',
    pre_blue: '🔵 SOLVENCIA UNIVERSITARIA: Para programas de nivel universitario necesitas demostrar €10,000 (≈ $11,000 USD) de solvencia. Beneficio clave: al graduarte aplicas al Stamp 1G por 1-2 años de trabajo tiempo completo.',
    pre_hack: 'Los programas Pre-Foundation son la ruta más inteligente si quieres universidad sin las notas europeas. Cuestan menos que un Bachelor y te dan el mismo Stamp 1G. Verifica que el programa esté acreditado en la lista ILEP antes de pagar.',
    sec_edu_title: 'Educación Superior',
    edu_intro: 'Para quienes buscan una ruta sólida hacia la residencia permanente en Irlanda. Un título de Bachelor o Master de una universidad irlandesa acreditada te da acceso al Stamp 1G por 1-2 años para trabajar a tiempo completo antes de solicitar residencia.',
    edu_p1: 'Los colleges privados son más accesibles para no-UE y tienen programas de 1 año. Las universidades públicas son más prestigiosas pero más costosas y selectivas. El Stamp 1G se aplica a ambas opciones.',
    th_uni: 'Universidad / College', th_area: 'Área de Estudio', th_anual: 'Precio Anual EUR',
    edu_blue: '🔵 SOLVENCIA UNIVERSITARIA: €10,000 (≈ $11,000 USD) obligatorios en cuenta bancaria para programas universitarios y de máster. Esto NO es el costo del programa — es el dinero que debes demostrar tener.',
    edu_hack: 'CCT e IBAT son los más accesibles para latinoamericanos. Tienen programas de 1 año que califican para Stamp 1G. Verifica que el programa esté en la lista ILEP (Irish Language Education Providers) antes de pagar matrícula.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Estos son los costos que tu escuela NO incluye en el precio del curso. Son absolutamente obligatorios y debes tenerlos calculados y disponibles antes de iniciar el proceso de visa. No tenerlos puede significar el rechazo de tu solicitud.',
    th_concepto: 'Concepto', th_costo: 'Costo (EUR)', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA (STAMP 2): €6,665 para inglés — €10,000 para universidad. Sin este monto exacto en tu cuenta bancaria, la visa será RECHAZADA de inmediato. Este dinero no se gasta — solo se demuestra.',
    gastos_hack: 'Tu Capital de Ejecución Real = precio de tu escuela + €6,665 de solvencia + €650 de gastos fijos. Ese es el número mínimo que necesitas antes de arrancar. Si no lo tienes completo, no inicies el proceso.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'El aterrizaje es la fase más crítica de tu proceso migratorio. Los primeros 30 días determinan si trabajas y cobras rápido o si quemas ahorros esperando trámites. El orden correcto lo es todo: primero el PPS, luego el banco, luego el IRP.',
    pps_head: '1. PPS Number — Tu número de seguridad social irlandés',
    pps_p: 'Sin PPS tu empleador está obligado a aplicarte Emergency Tax (~40%). Es el primer trámite que debes hacer al llegar. Tarda 2-4 semanas si lo haces bien desde el día 1.',
    pasos: [
      ['Paso 1', 'Crear cuenta en MyGovID.ie (portal digital del gobierno irlandés)', 'https://mygovid.ie'],
      ['Paso 2', 'Solicitar PPS Number en MyWelfare.ie — sección servicios online', 'https://mywelfare.ie'],
      ['Paso 3', 'Adjuntar: Pasaporte + Proof of Address + Prueba de necesidad (Job Offer es la vía más rápida)', null],
      ['Paso 4', 'Con PPS activo, registrarte en Revenue.ie para evitar Emergency Tax del 40%', 'https://revenue.ie'],
    ],
    irp_head: '2. IRP — Registro de Inmigración (Obligatorio)',
    irp_p: 'El IRP es tu tarjeta de residencia física. Debes registrarte dentro de los primeros 90 días de llegada. Sin IRP no puedes renovar tu visa ni demostrar estatus legal.',
    irp_items: [
      ['Registrar dentro de 90 días de llegada — si no, estás en situación irregular', null],
      ['Coste: €300 (≈ $330 USD) — se paga en el momento del registro', null],
      ['Cita en IrishImmigration.ie — sácala ANTES de llegar, puede tardar semanas', 'https://irishimmigration.ie'],
    ],
    aterrizaje_hack: 'La cita IRP puede tardar semanas o meses si llegas sin una. Sácala desde el portal IrishImmigration.ie ANTES de volar a Irlanda. Llegar sin cita puede significar esperar 2-3 meses para registrarte legalmente y trabajar.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Para cobrar tu nómina en Irlanda necesitas un IBAN europeo o irlandés. Sin cuenta bancaria activa, tu empleador no puede pagarte legalmente. Abre primero una cuenta digital (Revolut o N26) — en 24-48 horas tienes tu IBAN activo.',
    bancos_estrategia_label: 'Estrategia recomendada:',
    bancos_estrategia_text: 'Abre Revolut o N26 los primeros días para tener IBAN inmediato. Luego abre AIB o Bank of Ireland para trámites que requieren banco tradicional (como estados de cuenta para visa).',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Revolut o N26 ANTES de llegar o el primer día. Descarga la app, verifica tu identidad con pasaporte y activa la tarjeta virtual en Apple Pay / Google Pay para usarla inmediatamente. La tarjeta física llega en 5-7 días.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Estos son los portales oficiales que necesitas conocer y usar desde tu primera semana en Irlanda. Guárdalos en favoritos antes de volar. Cada uno tiene un rol específico en tu proceso de instalación legal y laboral.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'Revenue.ie es el portal más crítico y el más olvidado. Si empiezas a trabajar sin vincular tu empleo en Revenue, tu empleador te aplica Emergency Tax y pierde hasta el 40% de tu salario. Créa la cuenta el mismo día que firmes tu contrato.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado de vivienda en Irlanda es extremadamente competitivo, especialmente en Dublín. Las habitaciones buenas se alquilan en horas. No busques suerte — aplica un sistema técnico de búsqueda con alertas en tiempo real y networking desde el primer día.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2025)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal EUR', th_mes: 'Precio Mensual EUR',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos a distancia. Si no has visto la habitación físicamente y probado la llave en la cerradura, NO pagues depósito. Las estafas de vivienda son comunes y el dinero no se recupera.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'No busques habitación desde tu país — es casi imposible y lleno de estafas. Reserva un hostel para las primeras 2 semanas y busca desde ahí. Pide los links de WhatsApp de latinos en tu escuela el primer día. Las mejores habitaciones nunca llegan a Daft.ie.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Con Stamp 2 puedes trabajar 20 horas por semana durante el período académico y 40 horas durante las vacaciones oficiales. Estos son los sectores con mayor rotación y acceso más rápido para recién llegados sin experiencia local.',
    empleos_cv_label: 'Estrategia CV en mano:',
    empleos_cv_text: 'imprime 50 copias de tu CV y preséntate en pubs entre 3pm y 5pm (antes del turno de la noche). Pide hablar con el Floor Manager y di:',
    empleos_cv_quote: '"I\'m looking for Floor Staff, I have immediate availability."',
    empleos_cv_end: 'Este método funciona 3x más que aplicar online.',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_h: 'Salario/hora EUR', th_canal_emp: 'Canal principal',
    empleos_hack: 'Imprime 50 copias de tu CV. Ve a pubs entre 3pm y 5pm. Pide hablar con el Floor Manager. Di exactamente: \'I am looking for Floor Staff, I have immediate availability and my PPSN is ready.\' Este método consigue trabajo en 1-2 semanas vs 6-8 semanas aplicando solo online.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Estimación de ingresos reales para estudiantes con Stamp 2 trabajando 20 horas semanales. En vacaciones puedes duplicar estas cifras trabajando 40 horas. Todos los valores ya descontados de impuestos aproximados.',
    th_puesto_sal: 'Puesto', th_horas: 'Horas/semana', th_mensual: 'Mensual EUR',
    salarios_blue: '💡 En vacaciones oficiales (verano, Navidad, Semana Santa) puedes trabajar 40h/semana. Eso duplica estos ingresos. Un estudiante en hospitality puede ganar €1,800 - €2,400/mes en períodos de vacaciones.',
    salarios_hack: 'Con 20h/semana en hospitality ganas €960-€1,120/mes. Si consigues el Stamp 1G post-graduación y trabajas 40h, puedes ganar €1,900-€2,240/mes. La diferencia entre hacer el plan bien o mal puede ser €1,000+ al mes.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Este es el mapa de ruta mes a mes. Sigue este orden exacto — cada paso desbloquea el siguiente. Saltarte uno puede costarte semanas de espera o el 40% de tu salario en Emergency Tax.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar escuela + Letter of Acceptance + Contratar seguro médico + Reservar hostel 2 semanas + Sacar cita IRP en IrishImmigration.ie', '3-4 meses antes'],
      ['Semana 1', 'Comprar SIM card local + Abrir Revolut/N26 + Entregar CVs en mano en pubs + Iniciar solicitud PPS en MyWelfare.ie', 'Día 1-7'],
      ['Semana 2-4', 'Recibir PPS Number + Registrar en Revenue.ie + Buscar habitación fija (salir del hostel)', 'Día 7-30'],
      ['Semana 3-5', 'Registro IRP en IrishImmigration.ie — pagar €300 — recibir tarjeta', 'Día 21-35'],
      ['Mes 2', 'Vincular empleo con PPS en Revenue.ie + Estabilizar rutina laboral 20h/semana', 'Día 30-60'],
      ['Mes 3+', 'Estabilizar ingresos + Planear upgrade a Educación Superior si aplica + Renovar visa si necesario', 'Día 60+'],
    ],
    timeline_hack: 'El orden PPS → Banco → IRP → Revenue es sagrado. Si lo sigues bien, puedes estar trabajando y cobrando en menos de 3 semanas desde que aterrizas. Si lo saltás, puedes perder meses y el 40% de tu salario.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Estos son los dos hitos reales que marcan tu independencia económica en Irlanda. Planifica con estos tiempos — no con los tiempos ideales que te digan en foros.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['PPS Number activo y recibido', 'Cuenta bancaria con IBAN activo', 'CV entregado en persona', 'Registrado en Revenue.ie'],
    hito1_time: '👉 Tiempo real: 1-3 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato de trabajo firmado', 'Alta en payroll (sistema de nómina)', 'Cuenta bancaria activa para recibir pago'],
    hito2_time: '👉 Tiempo real: 2-5 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '1-3 semanas desde que aterrizas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '3-6 semanas desde que llegas',
    salario1_hack: 'Si empiezas a trabajar sin estar registrado en Revenue.ie, te aplican Emergency Tax y pierdes hasta el 40% de tu salario. Ese dinero se devuelve, pero puede tardar meses. Hazlo bien desde el principio: crea la cuenta en Revenue ANTES de tu primer día de trabajo.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. Lo que diferencia a quien los resuelve rápido de quien se paraliza es tener el protocolo claro antes de que pasen. Guarda estos contactos en tu teléfono desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '999 o 112 — Policía (Garda), Ambulancia, Bomberos'],
      ['INIS / Inmigración', 'IrishImmigration.ie — Para problemas con visa y IRP'],
      ['Revenue / Impuestos', 'Revenue.ie — Para Emergency Tax y trámites fiscales'],
      ['GP (Médico)', 'Busca tu GP más cercano por código postal en hse.ie'],
      ['Comunidad L&T', 'Mexicanos, Ticos, Colombianos, Argentinos en Irlanda — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Irlanda',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Irlanda — links próximamente',
    crisis_hack: 'La mayoría de las crisis en Irlanda se resuelven siguiendo el proceso burocrático correcto. Mantén la calma, usa Google Translate si necesitas, y recuerda: todo tiene solución si sigues el paso a paso. Nunca respondas solo a notificaciones de Revenue o Inmigración — consulta primero.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Irlanda como destino de migración para latinoamericanos. Úsalo para comparar con otros países del blueprint y tomar la decisión más informada.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Student Visa — Stamp 2'],
      ['Duración mínima del curso', '25 semanas (6 meses)'],
      ['Horas de trabajo durante clases', '20 horas/semana'],
      ['Horas de trabajo en vacaciones', '40 horas/semana'],
      ['Solvencia para inglés', '€6,665 (≈ $7,330)'],
      ['Solvencia para universidad', '€10,000 (≈ $11,000)'],
      ['Costo promedio curso inglés', '€2,700 - €4,500/año'],
      ['Registro de inmigración (IRP)', '€300 (≈ $330)'],
      ['Renta habitación compartida', '€480 - €720/mes'],
      ['Empleos más comunes', 'Hospitality, Cleaning, Security, Care'],
      ['Salario promedio entrada', '€12 - €16 por hora'],
      ['Tiempo hasta primer trabajo', '1-4 semanas'],
      ['Tiempo hasta primer cobro', '3-6 semanas desde llegada'],
      ['Idioma oficial', 'Inglés'],
      ['Camino a residencia', 'Stamp 1G → Stamp 4'],
      ['Nivel de dificultad', 'Fácil / Medio'],
      ['Mejores ciudades', 'Dublín / Limerick'],
      ['Comunidad latina', 'Muy consolidada — grupos WhatsApp activos'],
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
    hero_title: 'Irlanda',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '€3,000 - €5,000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Fácil',
    included_title: 'O que inclui o Blueprint',
    included: [
      'O Stamp 2 permite estudar em tempo integral e trabalhar 20h/semana (40h nas férias)',
      'PPS Number no MyWelfare.ie assim que chegar — essencial para evitar Emergency Tax de 40%',
      'Stamp 1G pós-graduação: trabalhe em tempo integral por 1-2 anos como caminho para residência',
      'Escolas a partir de €3.000/ano — 18 opções verificadas em Dublin e Limerick',
      'Comunidade latina consolidada — grupos de WhatsApp para moradia e trabalho',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Irlanda é o destino número 1 para latino-americanos na Europa. Inglês oficial, alta demanda de trabalho, comunidade latina consolidada e um caminho claro para a residência permanente através do Stamp 1G pós-graduação.',
    autoridad_stamp2_label: 'Stamp 2 (Visto de Estudante):',
    autoridad_stamp2_text: 'permite estudar em tempo integral e trabalhar',
    autoridad_20h: '20 horas/semana',
    autoridad_mid: 'durante as aulas e',
    autoridad_40h: '40 horas/semana',
    autoridad_end: 'nas férias oficiais.',
    autoridad_acelerador_label: 'Acelerador de início:',
    autoridad_acelerador_text: 'um roteiro claro para que você chegue, se ative legalmente e comece a gerar renda sem improvisar. A chave é a ordem e o timing correto desde o dia 1.',
    autoridad_blue: '💱 Padrão de moeda: todos os preços vão em EUR primeiro, depois o equivalente em USD. Referência: 1 EUR ≈ $1,10 USD. Exemplo: €300 → $330 USD.',
    autoridad_hack: 'O PPS Number é a chave para tudo na Irlanda. Sem ele, seu empregador aplicará Emergency Tax (~40%). Priorize obtê-lo na primeira semana usando uma Job Offer como prova de necessidade.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Escolher bem sua escola é a decisão financeira mais importante do seu processo. Não se trata apenas de estudar — é seu investimento base que determina sua velocidade de inserção no mercado de trabalho. As escolas AM são mais caras mas deixam as tardes livres para trabalhar. As PM são mais baratas e liberam as manhãs.',
    dublin_head: '🇮🇪 Matriz: Dublin (Sede Central)',
    dublin_sub: '18 escolas verificadas em Dublin ordenadas por preço. AM = turno manhã (mais caro), PM = turno tarde (mais barato e libera manhãs para trabalhar).',
    th_inst: 'Instituição', th_loc: 'Localização', th_am: 'Preço AM', th_usd: '≈ USD', th_pm: 'Preço PM', th_web: 'Website',
    limerick_head: '☘️ Matriz: Limerick (Otimização de custos)',
    limerick_sub: 'Limerick é a segunda cidade universitária da Irlanda. Aluguel mais barato (€100-200/mês menos que Dublin), menor concorrência no mercado de trabalho e escolas mais econômicas. Ideal se sua prioridade é economizar.',
    solvencia_ingles: '🔵 Solvência exigida para inglês (25 semanas):',
    solvencia_uni: '🔵 Solvência exigida para universidade/mestrado:',
    estrategia_hack: 'Antes de escolher a escola aplique este filtro: O horário AM ou PM permite trabalhar? Está em área com empregos próximos? O preço total (escola + solvência) cabe no seu capital? Se não passar nos 3 filtros, descarte.',
    sec_pre_title: 'Pré-Fundações & Pré-Carreiras',
    pre_intro: 'Se seu objetivo é uma universidade irlandesa mas você não tem notas de ensino médio europeu equivalentes, os programas Pré-Foundation são sua porta de entrada. São mais curtos, mais baratos que um Bachelor completo e dão acesso ao mesmo Stamp 1G pós-graduação.',
    pre_p1: 'Estes programas de 1 a 2 anos preparam você para entrar diretamente em colleges e universidades irlandesas. Ao se formar, você se qualifica para o',
    pre_stamp: 'Stamp 1G',
    pre_p1_end: 'que permite trabalhar em tempo integral por 1-2 anos.',
    th_prog: 'Programa', th_precio_eur: 'Preço EUR',
    pre_blue: '🔵 SOLVÊNCIA UNIVERSITÁRIA: Para programas de nível universitário você precisa demonstrar €10.000 (≈ $11.000 USD) de solvência. Benefício chave: ao se formar, você aplica ao Stamp 1G por 1-2 anos de trabalho em tempo integral.',
    pre_hack: 'Os programas Pré-Foundation são a rota mais inteligente se você quer universidade sem as notas europeias. Custam menos que um Bachelor e dão o mesmo Stamp 1G. Verifique se o programa está credenciado na lista ILEP antes de pagar.',
    sec_edu_title: 'Educação Superior',
    edu_intro: 'Para quem busca uma rota sólida para a residência permanente na Irlanda. Um título de Bachelor ou Master de uma universidade irlandesa credenciada dá acesso ao Stamp 1G por 1-2 anos para trabalhar em tempo integral antes de solicitar residência.',
    edu_p1: 'Os colleges privados são mais acessíveis para não-UE e têm programas de 1 ano. As universidades públicas são mais prestigiosas mas mais caras e seletivas. O Stamp 1G se aplica a ambas as opções.',
    th_uni: 'Universidade / College', th_area: 'Área de Estudo', th_anual: 'Preço Anual EUR',
    edu_blue: '🔵 SOLVÊNCIA UNIVERSITÁRIA: €10.000 (≈ $11.000 USD) obrigatórios em conta bancária para programas universitários e de mestrado. Isso NÃO é o custo do programa — é o dinheiro que você deve demonstrar ter.',
    edu_hack: 'CCT e IBAT são os mais acessíveis para latino-americanos. Têm programas de 1 ano que qualificam para Stamp 1G. Verifique se o programa está na lista ILEP (Irish Language Education Providers) antes de pagar a matrícula.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Estes são os custos que sua escola NÃO inclui no preço do curso. São absolutamente obrigatórios e você deve tê-los calculados e disponíveis antes de iniciar o processo de visto. Não tê-los pode significar a rejeição do seu pedido.',
    th_concepto: 'Conceito', th_costo: 'Custo (EUR)', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA (STAMP 2): €6.665 para inglês — €10.000 para universidade. Sem este valor exato em sua conta bancária, o visto será REJEITADO imediatamente. Este dinheiro não é gasto — apenas demonstrado.',
    gastos_hack: 'Seu Capital de Execução Real = preço da sua escola + €6.665 de solvência + €650 de despesas fixas. Esse é o número mínimo que você precisa antes de começar. Se não tiver completo, não inicie o processo.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'A chegada é a fase mais crítica do seu processo migratório. Os primeiros 30 dias determinam se você trabalha e recebe rápido ou se queima economias esperando burocracias. A ordem correta é tudo: primeiro o PPS, depois o banco, depois o IRP.',
    pps_head: '1. PPS Number — Seu número de seguridade social irlandês',
    pps_p: 'Sem PPS seu empregador é obrigado a aplicar Emergency Tax (~40%). É o primeiro procedimento que você deve fazer ao chegar. Leva 2-4 semanas se feito corretamente desde o dia 1.',
    pasos: [
      ['Passo 1', 'Criar conta no MyGovID.ie (portal digital do governo irlandês)', 'https://mygovid.ie'],
      ['Passo 2', 'Solicitar PPS Number no MyWelfare.ie — seção serviços online', 'https://mywelfare.ie'],
      ['Passo 3', 'Anexar: Passaporte + Comprovante de Endereço + Prova de necessidade (Job Offer é a via mais rápida)', null],
      ['Passo 4', 'Com PPS ativo, registrar-se no Revenue.ie para evitar Emergency Tax de 40%', 'https://revenue.ie'],
    ],
    irp_head: '2. IRP — Registro de Imigração (Obrigatório)',
    irp_p: 'O IRP é seu cartão de residência físico. Você deve se registrar dentro dos primeiros 90 dias de chegada. Sem IRP você não pode renovar seu visto nem demonstrar status legal.',
    irp_items: [
      ['Registrar dentro de 90 dias da chegada — caso contrário, você está em situação irregular', null],
      ['Custo: €300 (≈ $330 USD) — pago no momento do registro', null],
      ['Agendamento no IrishImmigration.ie — marque ANTES de chegar, pode demorar semanas', 'https://irishimmigration.ie'],
    ],
    aterrizaje_hack: 'O agendamento do IRP pode demorar semanas ou meses se você chegar sem um. Marque pelo portal IrishImmigration.ie ANTES de voar para a Irlanda. Chegar sem agendamento pode significar esperar 2-3 meses para se registrar legalmente e trabalhar.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Para receber seu salário na Irlanda você precisa de um IBAN europeu ou irlandês. Sem conta bancária ativa, seu empregador não pode pagar você legalmente. Abra primeiro uma conta digital (Revolut ou N26) — em 24-48 horas você tem seu IBAN ativo.',
    bancos_estrategia_label: 'Estratégia recomendada:',
    bancos_estrategia_text: 'Abra Revolut ou N26 nos primeiros dias para ter IBAN imediato. Depois abra AIB ou Bank of Ireland para procedimentos que exigem banco tradicional (como extratos bancários para visto).',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Revolut ou N26 ANTES de chegar ou no primeiro dia. Baixe o app, verifique sua identidade com passaporte e ative o cartão virtual no Apple Pay / Google Pay para usar imediatamente. O cartão físico chega em 5-7 dias.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Estes são os portais oficiais que você precisa conhecer e usar desde sua primeira semana na Irlanda. Salve-os nos favoritos antes de voar. Cada um tem um papel específico no seu processo de instalação legal e profissional.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Revenue.ie é o portal mais crítico e o mais esquecido. Se você começa a trabalhar sem vincular seu emprego no Revenue, seu empregador aplica Emergency Tax e você perde até 40% do seu salário. Crie a conta no mesmo dia em que assinar seu contrato.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário na Irlanda é extremamente competitivo, especialmente em Dublin. Os bons quartos são alugados em horas. Não busque sorte — aplique um sistema técnico de busca com alertas em tempo real e networking desde o primeiro dia.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2025)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal EUR', th_mes: 'Preço Mensal EUR',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos à distância. Se você não viu o quarto fisicamente e testou a chave na fechadura, NÃO pague depósito. Golpes de moradia são comuns e o dinheiro não é recuperado.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Não busque quarto do seu país — é quase impossível e cheio de golpes. Reserve um hostel para as primeiras 2 semanas e busque de lá. Peça os links de WhatsApp de latinos na sua escola no primeiro dia. Os melhores quartos nunca chegam ao Daft.ie.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Com o Stamp 2 você pode trabalhar 20 horas por semana durante o período acadêmico e 40 horas durante as férias oficiais. Estes são os setores com maior rotatividade e acesso mais rápido para recém-chegados sem experiência local.',
    empleos_cv_label: 'Estratégia CV na mão:',
    empleos_cv_text: 'imprima 50 cópias do seu CV e se apresente em pubs entre 15h e 17h (antes do turno da noite). Peça para falar com o Floor Manager e diga:',
    empleos_cv_quote: '"I\'m looking for Floor Staff, I have immediate availability."',
    empleos_cv_end: 'Este método funciona 3x mais do que aplicar online.',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_h: 'Salário/hora EUR', th_canal_emp: 'Canal principal',
    empleos_hack: 'Imprima 50 cópias do seu CV. Vá a pubs entre 15h e 17h. Peça para falar com o Floor Manager. Diga exatamente: \'I am looking for Floor Staff, I have immediate availability and my PPSN is ready.\' Este método consegue trabalho em 1-2 semanas vs 6-8 semanas aplicando só online.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Estimativa de renda real para estudantes com Stamp 2 trabalhando 20 horas semanais. Nas férias você pode dobrar esses valores trabalhando 40 horas. Todos os valores já descontados de impostos aproximados.',
    th_puesto_sal: 'Cargo', th_horas: 'Horas/semana', th_mensual: 'Mensal EUR',
    salarios_blue: '💡 Nas férias oficiais (verão, Natal, Páscoa) você pode trabalhar 40h/semana. Isso dobra esses rendimentos. Um estudante em hospitalidade pode ganhar €1.800 - €2.400/mês em períodos de férias.',
    salarios_hack: 'Com 20h/semana em hospitalidade você ganha €960-€1.120/mês. Se conseguir o Stamp 1G pós-graduação e trabalhar 40h, pode ganhar €1.900-€2.240/mês. A diferença entre fazer o plano bem ou mal pode ser €1.000+ ao mês.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Este é o mapa de rota mês a mês. Siga esta ordem exata — cada passo desbloqueia o próximo. Pular um pode custar semanas de espera ou 40% do seu salário em Emergency Tax.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar escola + Letter of Acceptance + Contratar seguro médico + Reservar hostel 2 semanas + Marcar consulta IRP no IrishImmigration.ie', '3-4 meses antes'],
      ['Semana 1', 'Comprar SIM card local + Abrir Revolut/N26 + Entregar CVs em mãos em pubs + Iniciar solicitação PPS no MyWelfare.ie', 'Dia 1-7'],
      ['Semana 2-4', 'Receber PPS Number + Registrar no Revenue.ie + Buscar quarto fixo (sair do hostel)', 'Dia 7-30'],
      ['Semana 3-5', 'Registro IRP no IrishImmigration.ie — pagar €300 — receber cartão', 'Dia 21-35'],
      ['Mês 2', 'Vincular emprego com PPS no Revenue.ie + Estabilizar rotina de trabalho 20h/semana', 'Dia 30-60'],
      ['Mês 3+', 'Estabilizar renda + Planejar upgrade para Educação Superior se aplicável + Renovar visto se necessário', 'Dia 60+'],
    ],
    timeline_hack: 'A ordem PPS → Banco → IRP → Revenue é sagrada. Se seguir corretamente, você pode estar trabalhando e recebendo em menos de 3 semanas desde que chega. Se pular, pode perder meses e 40% do seu salário.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'Estes são os dois marcos reais que marcam sua independência econômica na Irlanda. Planeje com estes tempos — não com os tempos ideais que te dizem nos fóruns.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['PPS Number ativo e recebido', 'Conta bancária com IBAN ativo', 'CV entregue pessoalmente', 'Registrado no Revenue.ie'],
    hito1_time: '👉 Tempo real: 1-3 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato de trabalho assinado', 'Cadastro na folha de pagamento', 'Conta bancária ativa para receber pagamento'],
    hito2_time: '👉 Tempo real: 2-5 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '1-3 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '3-6 semanas desde que chega',
    salario1_hack: 'Se você começa a trabalhar sem estar registrado no Revenue.ie, aplicam Emergency Tax e você perde até 40% do seu salário. Esse dinheiro é devolvido, mas pode demorar meses. Faça certo desde o início: crie a conta no Revenue ANTES do seu primeiro dia de trabalho.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. O que diferencia quem resolve rápido de quem fica paralisado é ter o protocolo claro antes que aconteçam. Salve esses contatos no seu celular desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '999 ou 112 — Polícia (Garda), Ambulância, Bombeiros'],
      ['INIS / Imigração', 'IrishImmigration.ie — Para problemas com visto e IRP'],
      ['Revenue / Impostos', 'Revenue.ie — Para Emergency Tax e trâmites fiscais'],
      ['GP (Médico)', 'Busque seu GP mais próximo pelo código postal em hse.ie'],
      ['Comunidade L&T', 'Mexicanos, Ticos, Colombianos, Argentinos na Irlanda — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Irlanda',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na Irlanda — links em breve',
    crisis_hack: 'A maioria das crises na Irlanda se resolve seguindo o processo burocrático correto. Mantenha a calma, use o Google Tradutor se precisar, e lembre-se: tudo tem solução se seguir o passo a passo. Nunca responda sozinho a notificações do Revenue ou Imigração — consulte primeiro.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Irlanda como destino de migração para latino-americanos. Use-o para comparar com outros países do blueprint e tomar a decisão mais informada.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Student Visa — Stamp 2'],
      ['Duração mínima do curso', '25 semanas (6 meses)'],
      ['Horas de trabalho durante aulas', '20 horas/semana'],
      ['Horas de trabalho nas férias', '40 horas/semana'],
      ['Solvência para inglês', '€6.665 (≈ $7.330)'],
      ['Solvência para universidade', '€10.000 (≈ $11.000)'],
      ['Custo médio curso inglês', '€2.700 - €4.500/ano'],
      ['Registro de imigração (IRP)', '€300 (≈ $330)'],
      ['Aluguel quarto compartilhado', '€480 - €720/mês'],
      ['Empregos mais comuns', 'Hospitalidade, Limpeza, Segurança, Cuidados'],
      ['Salário médio de entrada', '€12 - €16 por hora'],
      ['Tempo até primeiro emprego', '1-4 semanas'],
      ['Tempo até primeiro pagamento', '3-6 semanas desde chegada'],
      ['Idioma oficial', 'Inglês'],
      ['Caminho para residência', 'Stamp 1G → Stamp 4'],
      ['Nível de dificuldade', 'Fácil / Médio'],
      ['Melhores cidades', 'Dublin / Limerick'],
      ['Comunidade latina', 'Muito consolidada — grupos WhatsApp ativos'],
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
    hero_title: 'Ireland',
    hero_sub: 'Europe · Work and Study',
    hero_badge: 'Easy',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '€3,000 - €5,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Easy',
    included_title: 'What the Blueprint Includes',
    included: [
      'Stamp 2 allows full-time study and 20h/week work (40h during holidays)',
      'PPS Number at MyWelfare.ie upon arrival — key to avoid 40% Emergency Tax',
      'Post-graduation Stamp 1G: work full-time 1-2 years as path to residency',
      'Schools from €3,000/year — 18 verified options in Dublin and Limerick',
      'Established Latin community — WhatsApp groups for housing and work',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Ireland is the #1 destination for Latin Americans in Europe. Official English language, high job demand, established Latin community and a clear path to permanent residency through the post-graduation Stamp 1G.',
    autoridad_stamp2_label: 'Stamp 2 (Student Visa):',
    autoridad_stamp2_text: 'allows you to study full-time and work',
    autoridad_20h: '20 hours/week',
    autoridad_mid: 'during classes and',
    autoridad_40h: '40 hours/week',
    autoridad_end: 'during official holidays.',
    autoridad_acelerador_label: 'Launch accelerator:',
    autoridad_acelerador_text: 'a clear roadmap so you land, get legally activated and start generating income without improvising. The key is correct order and timing from day 1.',
    autoridad_blue: '💱 Currency standard: all prices are in EUR first, then the USD equivalent. Reference: 1 EUR ≈ $1.10 USD. Example: €300 → $330 USD.',
    autoridad_hack: 'The PPS Number is the key to everything in Ireland. Without it, your employer will apply Emergency Tax (~40%). Prioritize getting it in the first week using a Job Offer as proof of need.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'Choosing the right school is the most important financial decision of your process. It\'s not just about studying — it\'s your base investment that determines your speed of job placement. AM schools are more expensive but leave afternoons free to work. PM schools are cheaper and free up mornings.',
    dublin_head: '🇮🇪 Matrix: Dublin (Main Hub)',
    dublin_sub: '18 verified schools in Dublin ordered by price. AM = morning shift (more expensive), PM = afternoon shift (cheaper and frees mornings to work).',
    th_inst: 'Institution', th_loc: 'Location', th_am: 'AM Price', th_usd: '≈ USD', th_pm: 'PM Price', th_web: 'Website',
    limerick_head: '☘️ Matrix: Limerick (Cost Optimization)',
    limerick_sub: 'Limerick is Ireland\'s second university city. Cheaper rent (€100-200/month less than Dublin), lower job competition and more affordable schools. Ideal if saving money is your priority.',
    solvencia_ingles: '🔵 Required funds for English (25 weeks):',
    solvencia_uni: '🔵 Required funds for university/master:',
    estrategia_hack: 'Before choosing a school apply this filter: Does the AM or PM schedule allow you to work? Is it in an area with nearby jobs? Does the total price (school + funds) fit your capital? If it doesn\'t pass all 3 filters, discard it.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'If your goal is an Irish university but you don\'t have equivalent European high school grades, Pre-Foundation programs are your entry point. They\'re shorter, cheaper than a full Bachelor and give access to the same post-graduation Stamp 1G.',
    pre_p1: 'These 1-2 year programs prepare you to enter Irish colleges and universities directly. Upon graduation, you qualify for the',
    pre_stamp: 'Stamp 1G',
    pre_p1_end: 'which allows full-time work for 1-2 years.',
    th_prog: 'Program', th_precio_eur: 'Price EUR',
    pre_blue: '🔵 UNIVERSITY FUNDS: For university-level programs you need to demonstrate €10,000 (≈ $11,000 USD) in funds. Key benefit: upon graduation you apply for Stamp 1G for 1-2 years of full-time work.',
    pre_hack: 'Pre-Foundation programs are the smartest route if you want university without European grades. They cost less than a Bachelor and give the same Stamp 1G. Verify the program is accredited on the ILEP list before paying.',
    sec_edu_title: 'Higher Education',
    edu_intro: 'For those seeking a solid route to permanent residency in Ireland. A Bachelor or Master degree from an accredited Irish university gives access to the Stamp 1G for 1-2 years to work full-time before applying for residency.',
    edu_p1: 'Private colleges are more accessible for non-EU students and have 1-year programs. Public universities are more prestigious but more expensive and selective. The Stamp 1G applies to both options.',
    th_uni: 'University / College', th_area: 'Study Area', th_anual: 'Annual Price EUR',
    edu_blue: '🔵 UNIVERSITY FUNDS: €10,000 (≈ $11,000 USD) required in bank account for university and master programs. This is NOT the program cost — it\'s the money you must demonstrate having.',
    edu_hack: 'CCT and IBAT are the most accessible for Latin Americans. They have 1-year programs that qualify for Stamp 1G. Verify the program is on the ILEP list (Irish Language Education Providers) before paying tuition.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'These are costs your school does NOT include in the course price. They are absolutely mandatory and must be calculated and available before starting the visa process. Not having them can mean rejection of your application.',
    th_concepto: 'Item', th_costo: 'Cost (EUR)', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS (STAMP 2): €6,665 for English — €10,000 for university. Without this exact amount in your bank account, the visa will be REJECTED immediately. This money is not spent — only demonstrated.',
    gastos_hack: 'Your Real Execution Capital = your school price + €6,665 in funds + €650 in fixed costs. That\'s the minimum number you need before starting. If you don\'t have it complete, don\'t start the process.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'Landing is the most critical phase of your migration process. The first 30 days determine whether you work and get paid fast or burn savings waiting for paperwork. The correct order is everything: first the PPS, then the bank, then the IRP.',
    pps_head: '1. PPS Number — Your Irish Social Security Number',
    pps_p: 'Without PPS your employer must apply Emergency Tax (~40%). It\'s the first procedure you must do upon arrival. Takes 2-4 weeks if done correctly from day 1.',
    pasos: [
      ['Step 1', 'Create account at MyGovID.ie (Irish government digital portal)', 'https://mygovid.ie'],
      ['Step 2', 'Apply for PPS Number at MyWelfare.ie — online services section', 'https://mywelfare.ie'],
      ['Step 3', 'Attach: Passport + Proof of Address + Proof of need (Job Offer is the fastest route)', null],
      ['Step 4', 'With active PPS, register at Revenue.ie to avoid 40% Emergency Tax', 'https://revenue.ie'],
    ],
    irp_head: '2. IRP — Immigration Registration (Mandatory)',
    irp_p: 'The IRP is your physical residence card. You must register within the first 90 days of arrival. Without IRP you cannot renew your visa or demonstrate legal status.',
    irp_items: [
      ['Register within 90 days of arrival — otherwise you are in an irregular situation', null],
      ['Cost: €300 (≈ $330 USD) — paid at the time of registration', null],
      ['Appointment at IrishImmigration.ie — book BEFORE arriving, can take weeks', 'https://irishimmigration.ie'],
    ],
    aterrizaje_hack: 'The IRP appointment can take weeks or months if you arrive without one. Book it through the IrishImmigration.ie portal BEFORE flying to Ireland. Arriving without an appointment can mean waiting 2-3 months to register legally and work.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'To receive your paycheck in Ireland you need a European or Irish IBAN. Without an active bank account, your employer cannot pay you legally. Open a digital account first (Revolut or N26) — in 24-48 hours you have your IBAN active.',
    bancos_estrategia_label: 'Recommended strategy:',
    bancos_estrategia_text: 'Open Revolut or N26 in the first days to have immediate IBAN. Then open AIB or Bank of Ireland for procedures requiring a traditional bank (like bank statements for visa).',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Revolut or N26 BEFORE arriving or on day one. Download the app, verify your identity with passport and activate the virtual card on Apple Pay / Google Pay to use immediately. The physical card arrives in 5-7 days.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'These are the official portals you need to know and use from your first week in Ireland. Save them as favourites before flying. Each one has a specific role in your legal and employment setup process.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'Revenue.ie is the most critical and most forgotten portal. If you start working without linking your employment in Revenue, your employer applies Emergency Tax and you lose up to 40% of your salary. Create the account the same day you sign your contract.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'The housing market in Ireland is extremely competitive, especially in Dublin. Good rooms are rented within hours. Don\'t rely on luck — apply a technical search system with real-time alerts and networking from day one.',
    vivienda_costos_head: '📊 Accommodation Costs (2025 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price EUR', th_mes: 'Monthly Price EUR',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO remote deposits. If you haven\'t physically seen the room and tested the key in the lock, DO NOT pay a deposit. Housing scams are common and money is not recovered.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'Don\'t look for a room from your home country — it\'s nearly impossible and full of scams. Book a hostel for the first 2 weeks and search from there. Ask for WhatsApp links of fellow Latinos at your school on day one. The best rooms never make it to Daft.ie.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'With Stamp 2 you can work 20 hours per week during the academic period and 40 hours during official holidays. These are the sectors with the highest turnover and fastest access for newcomers without local experience.',
    empleos_cv_label: 'CV in hand strategy:',
    empleos_cv_text: 'print 50 copies of your CV and walk into pubs between 3pm and 5pm (before the night shift). Ask to speak with the Floor Manager and say:',
    empleos_cv_quote: '"I\'m looking for Floor Staff, I have immediate availability."',
    empleos_cv_end: 'This method works 3x better than applying online.',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_h: 'Hourly Wage EUR', th_canal_emp: 'Main Channel',
    empleos_hack: 'Print 50 copies of your CV. Go to pubs between 3pm and 5pm. Ask to speak with the Floor Manager. Say exactly: \'I am looking for Floor Staff, I have immediate availability and my PPSN is ready.\' This method gets a job in 1-2 weeks vs 6-8 weeks applying only online.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Real income estimates for Stamp 2 students working 20 hours per week. During holidays you can double these figures working 40 hours. All values already have approximate taxes deducted.',
    th_puesto_sal: 'Role', th_horas: 'Hours/week', th_mensual: 'Monthly EUR',
    salarios_blue: '💡 During official holidays (summer, Christmas, Easter) you can work 40h/week. That doubles this income. A hospitality student can earn €1,800 - €2,400/month during holiday periods.',
    salarios_hack: 'With 20h/week in hospitality you earn €960-€1,120/month. If you get the post-graduation Stamp 1G and work 40h, you can earn €1,900-€2,240/month. The difference between doing the plan well or poorly can be €1,000+ per month.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'This is the month-by-month roadmap. Follow this exact order — each step unlocks the next. Skipping one can cost you weeks of waiting or 40% of your salary in Emergency Tax.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay school + Letter of Acceptance + Get health insurance + Book hostel 2 weeks + Book IRP appointment at IrishImmigration.ie', '3-4 months before'],
      ['Week 1', 'Buy local SIM card + Open Revolut/N26 + Drop off CVs in pubs + Start PPS application at MyWelfare.ie', 'Day 1-7'],
      ['Week 2-4', 'Receive PPS Number + Register at Revenue.ie + Find permanent room (leave hostel)', 'Day 7-30'],
      ['Week 3-5', 'IRP registration at IrishImmigration.ie — pay €300 — receive card', 'Day 21-35'],
      ['Month 2', 'Link employment with PPS at Revenue.ie + Stabilize 20h/week work routine', 'Day 30-60'],
      ['Month 3+', 'Stabilize income + Plan upgrade to Higher Education if applicable + Renew visa if needed', 'Day 60+'],
    ],
    timeline_hack: 'The order PPS → Bank → IRP → Revenue is sacred. If followed correctly, you can be working and getting paid in less than 3 weeks from landing. If you skip steps, you can lose months and 40% of your salary.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'These are the two real milestones that mark your economic independence in Ireland. Plan with these timelines — not the ideal timelines people tell you in forums.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['PPS Number active and received', 'Bank account with active IBAN', 'CV delivered in person', 'Registered at Revenue.ie'],
    hito1_time: '👉 Real timeline: 1-3 weeks from landing',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Employment contract signed', 'Added to payroll system', 'Active bank account to receive payment'],
    hito2_time: '👉 Real timeline: 2-5 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '1-3 weeks from landing',
    resumen2: 'You can receive your first salary in:', resumen2_b: '3-6 weeks from arrival',
    salario1_hack: 'If you start working without being registered at Revenue.ie, Emergency Tax is applied and you lose up to 40% of your salary. That money is returned, but it can take months. Do it right from the start: create the Revenue account BEFORE your first day of work.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. What differentiates those who resolve them quickly from those who freeze is having a clear protocol before they occur. Save these contacts on your phone from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '999 or 112 — Police (Garda), Ambulance, Fire'],
      ['INIS / Immigration', 'IrishImmigration.ie — For visa and IRP issues'],
      ['Revenue / Tax', 'Revenue.ie — For Emergency Tax and tax matters'],
      ['GP (Doctor)', 'Find your nearest GP by postcode at hse.ie'],
      ['L&T Community', 'Mexicans, Costa Ricans, Colombians, Argentinians in Ireland — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Ireland',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Ireland — links coming soon',
    crisis_hack: 'Most crises in Ireland are resolved by following the correct bureaucratic process. Stay calm, use Google Translate if needed, and remember: everything has a solution if you follow the steps. Never respond alone to Revenue or Immigration notifications — consult first.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Ireland as a migration destination for Latin Americans. Use it to compare with other countries in the blueprint and make the most informed decision.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa — Stamp 2'],
      ['Minimum course duration', '25 weeks (6 months)'],
      ['Work hours during classes', '20 hours/week'],
      ['Work hours during holidays', '40 hours/week'],
      ['Required funds for English', '€6,665 (≈ $7,330)'],
      ['Required funds for university', '€10,000 (≈ $11,000)'],
      ['Average English course cost', '€2,700 - €4,500/year'],
      ['Immigration registration (IRP)', '€300 (≈ $330)'],
      ['Shared room rent', '€480 - €720/month'],
      ['Most common jobs', 'Hospitality, Cleaning, Security, Care'],
      ['Average entry salary', '€12 - €16 per hour'],
      ['Time to first job', '1-4 weeks'],
      ['Time to first payment', '3-6 weeks from arrival'],
      ['Official language', 'English'],
      ['Path to residency', 'Stamp 1G → Stamp 4'],
      ['Difficulty level', 'Easy / Medium'],
      ['Best cities', 'Dublin / Limerick'],
      ['Latin community', 'Very established — active WhatsApp groups'],
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

export default function Irlanda() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
  const toggle = (s: string) => setOpenSection(openSection === s ? null : s)
  const { locale } = useLanguage()
  const { hasAccess } = usePurchase()
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
    td: (i: number) => ({ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', lineHeight: '1.4' , color: '#1a1a2e' }),
    link: { color: '#2563eb', textDecoration: 'underline' as const, cursor: 'pointer' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }

  const Link = ({ text, url }: { text: string; url: string }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" style={T.link}>{text}</a>
  )

  const imageBanner = (url: string) => ({
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
    backgroundRepeat: 'no-repeat' as const,
    height: '220px',
    borderRadius: '12px',
    marginBottom: '16px',
  })

  const heroTextShadow = '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.85)'

  const Section = ({ id, emoji, title, children, free = false }: any) => (
    <div style={{ border: free ? '2px solid #e8572a' : '2px solid #f59e0b', borderRadius: '12px', marginBottom: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => toggle(id)} style={{ width: '100%', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: 'none', cursor: 'pointer', flexShrink: 0, color: '#1a1a2e' }}>
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1570875450638-044bca38ec92?q=80&w=1234&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>←</span>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>✈️ Lifestyle & Travel</span>
          </a>
          <LanguageSwitcher />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px 24px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px', textShadow: heroTextShadow }}>🇮🇪</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: heroTextShadow }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: heroTextShadow }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>{t.hero_badge}</span>
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
        <h3 style={{ fontWeight: '700', marginBottom: '10px', fontSize: '15px', color: '#1a1a2e'}}>{t.included_title}</h3>
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
          <div style={imageBanner('https://images.unsplash.com/photo-1601805824475-527ed396e4d2?q=80&w=764&auto=format&fit=crop')} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e'}}>
            <strong>{t.autoridad_stamp2_label}</strong> {t.autoridad_stamp2_text} <strong>{t.autoridad_20h}</strong> {t.autoridad_mid} <strong>{t.autoridad_40h}</strong> {t.autoridad_end}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e'}}>
            <strong>{t.autoridad_acelerador_label}</strong> {t.autoridad_acelerador_text}
          </p>
          <BlueBox text={t.autoridad_blue} />
          <HackBox text={t.autoridad_hack} />
        </Section>

        {!hasAccess && (
  <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', margin: '16px 0', border: '2px solid #e8572a' }}>
    <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔒</div>
    <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>Contenido Premium</h3>
    <p style={{ color: '#555555', fontSize: '14px', marginBottom: '20px' }}>Accede al blueprint completo con toda la información detallada</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
        🗂️ Comprar este Blueprint — €14.99
      </a>
      <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '10px', padding: '16px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', display: 'block', textAlign: 'center', boxShadow: '0 4px 12px rgba(232,87,42,0.4)', border: '2px solid #ff6b3d' }}>
        🔥 Acceso Total — Todos los Blueprints €39.99
      </a>
    </div>
  </div>
)}

<div style={{ display: 'none' }}>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />
          <SubHead text={t.dublin_head} />
          <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.dublin_sub}</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_loc, t.th_am, t.th_usd, t.th_pm, t.th_usd, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Active Language Learning', 'Dublin 1', '€3,000', '$3,300', '€2,700', '$2,970', 'all.ie', 'https://all.ie'],
                  ['Central School of English', 'Dublin', '€3,000', '$3,300', '€2,700', '$2,970', 'centralschool.ie', 'https://centralschool.ie'],
                  ['ICOT College Dublin', 'Dublin 1/2', '€3,000', '$3,300', '€2,800', '$3,080', 'icot.ie', 'https://icot.ie'],
                  ['ULearn English School', 'Dublin 1', '€3,100', '$3,410', '€2,800', '$3,080', 'ulearnschool.com', 'https://ulearnschool.com'],
                  ['Erin School of English', 'Dublin 1', '€3,200', '$3,520', '€2,900', '$3,190', 'erincollege.com', 'https://erincollege.com'],
                  ['Ned Training Centre', 'Dublin 1', '€3,200', '$3,520', '€2,900', '$3,190', 'ned.ie', 'https://ned.ie'],
                  ['GoLearn', 'Dublin 1', '€3,300', '$3,630', '€3,000', '$3,300', 'golearnireland.com', 'https://golearnireland.com'],
                  ['Seda College', 'Dublin 1', '€3,500', '$3,850', '€3,200', '$3,520', 'seda.college', 'https://seda.college'],
                  ['Swan Training Institute', 'Dublin 2', '€3,700', '$4,070', '€3,200', '$3,520', 'swantraining.ie', 'https://swantraining.ie'],
                  ['ATC Language Schools', 'Dublin 2', '€3,800', '$4,180', '€3,300', '$3,630', 'atclanguageschools.com', 'https://atclanguageschools.com'],
                  ['Delfin English School', 'Dublin 1', '€3,800', '$4,180', '€3,400', '$3,740', 'delfin.ie', 'https://delfin.ie'],
                  ['ISI Dublin', 'Dublin 2', '€3,900', '$4,290', '€3,400', '$3,740', 'isi-ireland.ie', 'https://isi-ireland.ie'],
                  ['CES Dublin', 'Dublin 2', '€3,900', '$4,290', '€3,400', '$3,740', 'ces-schools.com', 'https://ces-schools.com'],
                  ['Dorset College', 'Dublin 1', '€4,200', '$4,620', '€3,800', '$4,180', 'dorset-college.ie', 'https://dorset-college.ie'],
                  ['EC English Dublin', 'Dublin 2', '€4,200', '$4,620', '€3,700', '$4,070', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Emerald Cultural Institute', 'Dublin', '€4,200', '$4,620', '€3,700', '$4,070', 'emeraldculturalinstitute.com', 'https://emeraldculturalinstitute.com'],
                  ['IBAT College Dublin', 'Dublin 2', '€4,500', '$4,950', '€3,900', '$4,290', 'ibat.ie', 'https://ibat.ie'],
                  ['Kaplan International Dublin', 'Dublin 2', '€4,500', '$4,950', '€4,000', '$4,400', 'kaplaninternational.com', 'https://kaplaninternational.com'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}>{r[5]}</td>
                    <td style={T.td(i)}><Link text={r[6] as string} url={r[7] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text={t.limerick_head} />
          <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.limerick_sub}</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_loc, t.th_am, t.th_usd, t.th_pm, t.th_usd, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Limerick City College', "O'Connell St", '€3,000', '$3,300', '€2,700', '$2,970', 'limerickcitycollege.ie', 'https://limerickcitycollege.ie'],
                  ['Rightword Institute', 'Winthrop H.', '€3,200', '$3,520', '€2,900', '$3,190', 'rightword.ie', 'https://rightword.ie'],
                  ['Limerick Language Centre', 'The Crescent', '€3,800', '$4,180', 'N/A', '-', 'english-in-limerick.com', 'https://english-in-limerick.com'],
                  ['Griffith College Limerick', "O'Connell Av", '€3,600', '$3,960', '€3,200', '$3,520', 'griffith.ie', 'https://griffith.ie'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}>{r[5]}</td>
                    <td style={T.td(i)}><Link text={r[6] as string} url={r[7] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              <strong>{t.solvencia_ingles}</strong> €6,665 (≈ $7,330 USD)<br />
              <strong>{t.solvencia_uni}</strong> €10,000 (≈ $11,000 USD)
            </p>
          </div>
          <HackBox text={t.estrategia_hack} />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title={t.sec_pre_title}>
          <Intro text={t.pre_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '12px', color: '#1a1a2e' }}>
            {t.pre_p1} <strong>{t.pre_stamp}</strong> {t.pre_p1_end}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_prog, 'Institución', t.th_precio_eur, t.th_usd, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Diploma in Project Management', 'IBAT', '€2,500 - €3,500', '$2,750 - $3,850', 'ibat.ie', 'https://ibat.ie'],
                  ['Certificate in IT Skills', 'CCT College', '€3,000 - €4,500', '$3,300 - $4,950', 'cct.ie', 'https://cct.ie'],
                  ['English for Academic Purposes', 'Atlas Language', '€4,500 - €5,500', '$4,950 - $6,050', 'atlaslanguageschool.com', 'https://atlaslanguageschool.com'],
                  ['International Foundation', 'NCIRL', '€6,000 - €8,000', '$6,600 - $8,800', 'ncirl.ie', 'https://ncirl.ie'],
                  ['Pre-Masters in Business', 'Griffith College', '€7,500 - €9,500', '$8,250 - $10,450', 'griffith.ie', 'https://griffith.ie'],
                  ['Foundation in Science', 'DCU', '€8,500 - €12,000', '$9,350 - $13,200', 'dcu.ie', 'https://dcu.ie'],
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
          <BlueBox text={t.pre_blue} />
          <HackBox text={t.pre_hack} />
        </Section>

        {/* EDUCACION SUPERIOR */}
        <Section id="edu" emoji="🎓" title={t.sec_edu_title}>
          <Intro text={t.edu_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '12px', color: '#1a1a2e' }}>{t.edu_p1}</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_uni, t.th_area, t.th_anual, t.th_usd, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['CCT College Dublin', 'Computing & Business', '€4,000 - €12,000', '$4,400 - $13,200', 'cct.ie', 'https://cct.ie'],
                  ['IBAT College', 'Business & Management', '€6,500 - €9,000', '$7,150 - $9,900', 'ibat.ie', 'https://ibat.ie'],
                  ['Dorset College', 'Healthcare & IT', '€7,500 - €10,500', '$8,250 - $11,550', 'dorset-college.ie', 'https://dorset-college.ie'],
                  ['DBS - Dublin Business School', 'Business / Marketing', '€9,000 - €12,500', '$9,900 - $13,750', 'dbs.ie', 'https://dbs.ie'],
                  ['Independent College Dublin', 'Law / Business', '€10,000 - €13,000', '$11,000 - $14,300', 'independentcolleges.ie', 'https://independentcolleges.ie'],
                  ['ICD Business School', 'Business / Finance', '€10,000 - €13,500', '$11,000 - $14,850', 'icd.ie', 'https://icd.ie'],
                  ['NCI - National College of Ireland', 'Data / HR / Finance', '€10,000 - €15,000', '$11,000 - $16,500', 'ncirl.ie', 'https://ncirl.ie'],
                  ['Griffith College Dublin', 'Law / Media / Business', '€12,000 - €14,000', '$13,200 - $15,400', 'griffith.ie', 'https://griffith.ie'],
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
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_usd, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico', '€150', '$165', '✅ Sí'],
                  ['Examen Final del curso', '€150 - €200', '$165 - $220', '✅ Sí'],
                  ['Materiales / Libros', '€40 - €70', '$44 - $77', '✅ Sí'],
                  ['Cita IRP (Inmigración)', '€300', '$330', '✅ Sí'],
                  ['Solvencia - Inglés (25 semanas)', '€6,665', '$7,330', '✅ Obligatorio visa'],
                  ['Solvencia - Universidad/Master', '€10,000', '$11,000', '✅ Obligatorio visa'],
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
          <SubHead text={t.pps_head} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>{t.pps_p}</p>
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.irp_head} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '10px' }}>{t.irp_p}</p>
          {t.irp_items.map((item, i) => (
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
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.bancos_estrategia_label}</strong> {t.bancos_estrategia_text}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_entidad, t.th_tipo, t.th_ventaja, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Revolut Ireland', 'Digital', 'IBAN irlandés (IE) activo en 24h. El más usado para nóminas rápidas.', 'revolut.com', 'https://revolut.com'],
                  ['N26', 'Digital', 'IBAN europeo. App excelente y sin comisiones de mantenimiento.', 'n26.com', 'https://n26.com'],
                  ['AIB', 'Tradicional', 'Necesario para depósitos en efectivo y estados de cuenta para visa.', 'aib.ie', 'https://aib.ie'],
                  ['Bank of Ireland', 'Tradicional', 'Mayor red de cajeros y sucursales físicas en todo el país.', 'bankofireland.com', 'https://bankofireland.com'],
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
                  ['MyGovID.ie', 'Cuenta digital del gobierno irlandés', 'Semana 1 — antes de todo lo demás', 'mygovid.ie', 'https://mygovid.ie'],
                  ['MyWelfare.ie', 'Solicitar PPS Number', 'Semana 1-2 al llegar', 'mywelfare.ie', 'https://mywelfare.ie'],
                  ['IrishImmigration.ie', 'Cita y registro IRP', 'Antes de volar — saca la cita anticipada', 'irishimmigration.ie', 'https://irishimmigration.ie'],
                  ['Revenue.ie', 'Registro fiscal — evitar Emergency Tax 40%', 'Antes de tu primer día de trabajo', 'revenue.ie', 'https://revenue.ie'],
                  ['Indeed.ie', 'Búsqueda de empleo general', 'Desde semana 1', 'indeed.ie', 'https://indeed.ie'],
                  ['IrishJobs.ie', 'Empleo local irlandés', 'Desde semana 1', 'irishjobs.ie', 'https://irishjobs.ie'],
                  ['LinkedIn Jobs', 'Empleos profesionales y networking', 'Desde mes 2-3', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Daft.ie', 'Búsqueda de vivienda #1 en Irlanda', 'Desde semana 1 — activa alertas push', 'daft.ie', 'https://daft.ie'],
                  ['Rent.ie', 'Habitaciones compartidas', 'Desde semana 1', 'rent.ie', 'https://rent.ie'],
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
          <Intro text={t.vivienda_intro} />
          <div style={imageBanner('https://images.unsplash.com/photo-1505576457712-b769c0c0a354?q=80&w=686&auto=format&fit=crop')} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_usd, t.th_mes, t.th_usd].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Habitación compartida (Dublín)', '€120 - €180', '$132 - $198', '€480 - €720', '$528 - $792'],
                  ['Habitación individual (Dublín)', '€180 - €260', '$198 - $286', '€720 - €1,040', '$792 - $1,144'],
                  ['Habitación compartida (Limerick)', '€80 - €130', '$88 - $143', '€320 - €520', '$352 - $572'],
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
          <RedBox text={t.vivienda_red} />
          <SubHead text={t.vivienda_canales_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_canal, t.th_tipo, t.th_estrategia_col, t.th_acceso].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Daft.ie', 'Portal oficial #1', 'Activa alertas push — responde en menos de 2 horas', 'daft.ie', 'https://daft.ie'],
                  ['Rent.ie', 'Portal oficial #2', 'Filtra por habitaciones compartidas', 'rent.ie', 'https://rent.ie'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Únete al grupo de tu país — Mexicanos, Ticos, Colombianos, Argentinos en Irlanda', 'Ver grupos', '#'],
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
          <div style={imageBanner('https://images.unsplash.com/photo-1630784032313-f780ae5532c6?q=80&w=687&auto=format&fit=crop')} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <em>{t.empleos_cv_quote}</em> {t.empleos_cv_end}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_h, t.th_usd, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Floor Staff / Kitchen Porter', '€12 - €14', '$13.2 - $15.4', 'CV en mano en pubs 3-5pm'],
                  ['Cleaning / Housekeeping', 'Cleaner / Housekeeper', '€11 - €13', '$12.1 - $14.3', 'Indeed, agencias, grupos WhatsApp'],
                  ['Security', 'Static Guard / Event Security', '€13 - €16', '$14.3 - $17.6', 'Requiere PSA License (4 días, ~€400)'],
                  ['Retail', 'Shop Assistant / Cashier', '€12 - €13', '$13.2 - $14.3', 'Indeed, tiendas directas'],
                  ['Care Sector', 'Care Assistant', '€14 - €17', '$15.4 - $18.7', 'Agencias: CPL, Staffline Ireland'],
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
              <thead><tr>{[t.th_puesto_sal, t.th_salario_h, t.th_usd, t.th_horas, t.th_mensual, t.th_usd].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Waiter / Floor Staff', '€12 - €14', '$13.2 - $15.4', '20h', '€960 - €1,120', '$1,056 - $1,232'],
                  ['Cleaner / Housekeeping', '€11 - €13', '$12.1 - $14.3', '20h', '€880 - €1,040', '$968 - $1,144'],
                  ['Security Guard', '€13 - €16', '$14.3 - $17.6', '20h', '€1,040 - €1,280', '$1,144 - $1,408'],
                  ['Shop Assistant', '€12 - €13', '$13.2 - $14.3', '20h', '€960 - €1,040', '$1,056 - $1,144'],
                  ['Care Assistant', '€14 - €17', '$15.4 - $18.7', '20h', '€1,120 - €1,360', '$1,232 - $1,496'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[4]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[5]}</td>
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
              <span style={{ color: '#1a1a2e', lineHeight: '1.5' }}>{item[1]}</span>
            </div>
          ))}
          <SubHead text={t.crisis_gestion_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_problema, t.th_accion, t.th_contacto].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Robo / Pérdida de Pasaporte', 'Denuncia en Garda Station + Contactar Embajada de tu país de inmediato', 'Garda.ie + Embajada'],
                  ['Estafa de Vivienda', 'No más pagos. Denunciar en Garda y reportar en Facebook/WhatsApp', 'Garda.ie'],
                  ['Emergency Tax (sin PPS)', 'Entrar a Revenue.ie y vincular empleo con PPSN — dinero se devuelve en próxima nómina', 'Revenue.ie'],
                  ['Rechazo de IRP', 'Generalmente falta Proof of Address válido o Job Offer — revisar documentos', 'IrishImmigration.ie'],
                  ['Problemas con empleador', 'Contactar Workplace Relations Commission — servicio gratuito', 'WRC.ie'],
                  ['Enfermedad / Urgencia médica', 'Ir a Urgent Care Center más cercano con seguro médico', '999 / 112'],
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
            <p style={{ fontSize: '13px', color: '#1a1a2e', margin: 0 }}>{t.comunidad_text}</p>
          </div>
          <HackBox text={t.crisis_hack} />
        </Section>

        {/* COUNTRY MATRIX */}
        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <div style={imageBanner('https://images.unsplash.com/photo-1555577508-d4497bed817e?q=80&w=725&auto=format&fit=crop')} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇮🇪`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
          <h3 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '18px', color: '#1a1a2e'}}>{t.consultoria_title}</h3>
          <p style={{ color: '#1a1a2e', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
          <p style={{ color: '#555555', fontSize: '13px', marginBottom: '16px' }}>{t.consultoria_time}</p>
          <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1" className="lemonsqueezy-button" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

        {/* FEEDBACK */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '16px' }}>
          <div style={{ fontSize: '28px', textAlign: 'center', marginBottom: '8px' }}>📝</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'center', marginBottom: '4px', color: '#1a1a2e'}}>{t.feedback_title}</h3>
          <p style={{ color: '#333333', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>{t.feedback_desc}</p>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Irlanda:\n\n' + feedback)}`, '_blank')
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