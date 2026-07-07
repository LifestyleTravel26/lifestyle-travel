'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { usePurchase } from '../../hooks/usePurchase'

const translations = {
  es: {
    hero_title: 'Italia',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Media',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '€2,500 - €4,500',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Media',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Visto per Studio permite estudiar italiano y trabajar 20h/semana legalmente',
      'Codice Fiscale (equivalente al PPS) — clave para trabajar, abrir cuenta y alquilar',
      'Permesso di Soggiorno — cómo tramitarlo en la Questura sin morir en el intento',
      'Escuelas de italiano desde €2,500/año — opciones verificadas en Roma, Milán y Florencia',
      'Ciudadanía italiana por descendencia — cómo saber si calificás y cómo aplicar',
      'Comunidad latina consolidada — grupos activos en Roma, Milán y Florencia',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Italia es uno de los destinos más soñados para latinoamericanos en Europa. Mediterráneo, cultura milenaria, gastronomía incomparable y un idioma que los latinos aprenden casi naturalmente. Para muchos, también es la puerta a la ciudadanía europea por descendencia italiana.',
    autoridad_stamp2_label: 'Visto per Studio:',
    autoridad_stamp2_text: 'te permite estudiar italiano a tiempo completo y trabajar',
    autoridad_20h: '20 horas/semana',
    autoridad_mid: 'durante clases,',
    autoridad_40h: 'sin restricción de horas',
    autoridad_end: 'en vacaciones oficiales.',
    autoridad_acelerador_label: 'Acelerador de puesta en marcha:',
    autoridad_acelerador_text: 'una hoja de ruta clara para que aterrices en Italia, te actives legalmente y empieces a generar ingresos sin improvisar. La burocracia italiana puede ser lenta — el orden y el timing desde el día 1 son clave.',
    autoridad_blue: '💱 Estándar de moneda: todos los precios van en EUR primero, luego el equivalente en USD. Referencia: 1 EUR ≈ $1.10 USD. Ejemplo: €300 → $330 USD.',
    autoridad_hack: 'El Codice Fiscale es la llave para todo en Italia. Sin él no podés trabajar, alquilar ni abrir cuenta bancaria. Prioriza conseguirlo en la primera semana — se tramita gratis en la Agenzia delle Entrate o en el consulado italiano antes de viajar.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'Elegir bien tu escuela es la decisión financiera más importante de tu proceso. No se trata solo de estudiar — es tu inversión base que determina tu velocidad de inserción laboral. Las escuelas AM son más caras pero te dejan las tardes libres para trabajar. Las PM son más baratas y te dejan las mañanas libres.',
    roma_head: '🇮🇹 Matriz: Roma (Sede Central)',
    roma_sub: '6 escuelas verificadas en Roma ordenadas por precio. AM = turno mañana, PM = turno tarde.',
    florencia_head: '🌸 Matriz: Florencia (Cultura y Arte)',
    florencia_sub: 'Florencia es la ciudad más cultural de Italia. Ambiente más tranquilo y escuelas muy reconocidas internacionalmente.',
    milan_head: '🏙️ Matriz: Milán (Optimización de ingresos)',
    milan_sub: 'Milán es la capital financiera de Italia — más oportunidades laborales en moda, diseño y finanzas.',
    th_inst: 'Institución', th_loc: 'Ubicación', th_am: 'Precio AM', th_usd: '≈ USD', th_pm: 'Precio PM', th_web: 'Website',
    solvencia_ingles: '🔵 Solvencia requerida para italiano (6 meses):',
    solvencia_uni: '🔵 Solvencia requerida para universidad/master:',
    estrategia_hack: 'Antes de elegir escuela aplica este filtro: ¿El horario AM o PM te permite trabajar? ¿Está en zona con empleos cerca? ¿Precio total (escuela + solvencia) cabe en tu capital? Si no pasa los 3 filtros, descártala. Roma para experiencia cultural completa, Florencia para arte y tranquilidad, Milán para maximizar ingresos.',
    sec_edu_title: 'Educación Superior',
    edu_en_head: '🏛️ Programas en INGLÉS — Bachelor / Master',
    edu_en_sub: 'Necesitás IELTS/TOEFL B2 — No necesitás saber italiano',
    edu_it_head: '🏛️ Programas en ITALIANO — Bachelor / Master',
    edu_it_sub: 'Necesitás certificado B2 italiano (CILS o CELI)',
    th_uni: 'Universidad', th_area: 'Área', th_anual: 'Precio/año',
    edu_blue: '🔵 Solvencia universitaria: €8,800/año (≈ $9,680 USD) — Esta cantidad debe estar demostrada en tu cuenta bancaria personal al momento de aplicar a la visa de estudiante en el consulado italiano de tu país. No es el costo del programa — es el dinero que el gobierno italiano te exige tener disponible para cubrir tus gastos de vida durante el año académico. Sin demostrar esta solvencia, el consulado puede rechazar tu visa aunque tengas la carta de aceptación de la universidad.',
    edu_hack: 'Si ya estudiaste italiano y tenés B2 — los programas en italiano son mucho más baratos y hay más opciones. Si venís con inglés — los programas en inglés son tu puerta directa sin esperar aprender italiano. Sapienza Roma tiene 59 programas en inglés y es una de las universidades más grandes de Europa.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Estos son los costos que tu escuela NO incluye en el precio del curso. Son absolutamente obligatorios y debes tenerlos calculados y disponibles antes de iniciar el proceso de visa. No tenerlos puede significar el rechazo de tu solicitud.',
    th_concepto: 'Concepto', th_costo: 'Costo (EUR)',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA: €5,000 para escuela de italiano — €8,800 para universidad. Sin este monto exacto en tu cuenta bancaria, la visa será RECHAZADA de inmediato. Este dinero no se gasta — solo se demuestra.',
    gastos_hack: 'Tu Capital de Ejecución Real = precio de tu escuela + €5,000 de solvencia + €500 de gastos fijos. Ese es el número mínimo que necesitas antes de arrancar. Si no lo tienes completo, no inicies el proceso. La Dichiarazione di Valore es única para Italia — es la validación oficial de tu diploma en el consulado italiano de tu país. Tramítala con mínimo 3 meses de anticipación porque puede demorar.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'Aquí el orden importa más que en cualquier otro país: Codice Fiscale primero, Permesso di Soggiorno dentro de 8 días, SPID después, banco al final.',
    codice_head: '1. Codice Fiscale — Tu número de identificación fiscal',
    codice_p: 'Sin Codice Fiscale no podés trabajar, abrir cuenta bancaria, alquilar ni acceder a servicios públicos. Es el primer trámite — tramítalo en el consulado italiano de tu país ANTES de viajar.',
    codice_pasos: [
      ['Paso 1', 'Solicitar Codice Fiscale en el consulado italiano de tu país', null],
      ['Paso 2', 'Si no lo tramitaste antes, ir a la Agenzia delle Entrate apenas llegues', 'https://agenziaentrate.gov.it'],
      ['Paso 3', 'Adjuntar: Pasaporte + Visto per Studio válido', null],
      ['Paso 4', 'Con Codice Fiscale activo, abrí cuenta en Poste Italiane o banco local', null],
    ],
    permesso_head: '2. Permesso di Soggiorno — Tu permiso de residencia (Obligatorio)',
    permesso_p: 'Debés solicitarlo dentro de los primeros 8 días hábiles de llegada — mucho más rápido que otros países. La tramitación puede tardar 3-6 meses pero el recibo (ricevuta) es válido mientras esperás.',
    permesso_pasos: [
      ['Paso 1', 'Descargar el kit de solicitud en Poste Italiane', null],
      ['Paso 2', 'Completar el formulario y pagar €80-€120 en bolletino postale', null],
      ['Paso 3', 'Adjuntar €16 de Marca da Bollo', null],
      ['Paso 4', 'Entregar en la Questura de tu ciudad — guardar la ricevuta como documento válido', null],
      ['Paso 5', 'Seguir el estado en Portale Immigrazione', 'https://portaleimmigrazione.it'],
    ],
    spid_head: '3. SPID — Tu identidad digital italiana',
    spid_p: 'Equivalente al MyGovID irlandés. Sin SPID no podés gestionar trámites online del gobierno.',
    spid_pasos: [
      ['Paso 1', 'Registrarte en Poste Italiane SPID — el más fácil para extranjeros', null],
      ['Paso 2', 'Verificar identidad con Codice Fiscale + Pasaporte', null],
      ['Paso 3', 'Activar SPID y acceder a todos los servicios en SPID.gov.it', 'https://spid.gov.it'],
    ],
    tel_head: '4. Número de Teléfono Italiano',
    tel_p: 'Necesitás un número italiano para verificar cuentas, recibir SMS de bancos y trámites.',
    tel_items: ['TIM — cobertura más amplia en Italia', 'Vodafone Italia — buena opción para ciudades grandes', 'WindTre — más económico, bueno para empezar', 'SIM desde €10 con documento de identidad'],
    aterrizaje_hack: 'Italia tiene la burocracia más lenta de Europa — el Permesso di Soggiorno puede tardar hasta 6 meses en llegar físicamente. No entres en pánico — la ricevuta (recibo de solicitud) es legalmente válida mientras esperás. Guardala siempre contigo. Tramitá el Codice Fiscale en el consulado antes de viajar — te ahorra días críticos al llegar.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Para cobrar tu nómina en Italia necesitás un IBAN italiano o europeo. Sin cuenta bancaria activa, tu empleador no puede pagarte legalmente. Abre primero una cuenta digital (Revolut o N26) — en 24-48 horas tenés tu IBAN activo.',
    bancos_estrategia_label: 'Estrategia recomendada:',
    bancos_estrategia_text: 'Abre Revolut o N26 los primeros días para tener IBAN inmediato. Luego abre Poste Italiane o una cuenta tradicional para trámites que requieren banco italiano (como estados de cuenta para renovación de visa o contratos de alquiler).',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abrí Revolut o N26 ANTES de llegar o el primer día. Descargá la app, verificá tu identidad con pasaporte y activá la tarjeta virtual en Apple Pay / Google Pay para usarla inmediatamente. La tarjeta física llega en 5-7 días. Para abrir cuenta en banco italiano tradicional necesitás el Codice Fiscale — sin él ningún banco te abre cuenta. Por eso el orden es: primero Codice Fiscale, después banco.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Estos son los portales oficiales que necesitás conocer y usar desde tu primera semana en Italia. Guardalos en favoritos antes de volar. Cada uno tiene un rol específico en tu proceso de instalación legal y laboral.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'Universitaly es el portal más crítico y el más olvidado. Sin completar el proceso en Universitaly no podés obtener la visa de estudiante italiana. Iniciá el trámite con mínimo 3-4 meses de anticipación antes de volar — los consulados italianos son lentos y los cupos se agotan. El Codice Fiscale es tu segunda prioridad absoluta — sin él no podés abrir banco, firmar contrato ni alquilar.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado de vivienda en Italia varía mucho por ciudad. Roma y Milán son las más competitivas — las habitaciones buenas se alquilan en horas. Florencia es más tranquila pero también cara. No busqués suerte — aplicá un sistema técnico de búsqueda con alertas en tiempo real y networking desde el primer día.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_mes: 'Precio Mensual EUR',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos a distancia. Si no has visto la habitación físicamente y probado la llave en la cerradura, NO pagues depósito. Las estafas de vivienda son muy comunes en Italia y el dinero no se recupera. Desconfiá de precios demasiado baratos para Roma o Milán.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia',
    vivienda_hack: 'No busqués habitación desde tu país — es casi imposible y lleno de estafas. Reservá un hostel para las primeras 2 semanas y buscá desde ahí en persona. Pedí los links de WhatsApp de latinos en tu escuela el primer día — las mejores habitaciones nunca llegan a los portales oficiales. En Italia el contrato de alquiler (contratto di locazione) debe estar registrado en la Agenzia delle Entrate para ser legal — pedilo siempre.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Con Visto per Studio podés trabajar 20 horas por semana durante el período académico. Estos son los sectores con mayor rotación y acceso más rápido para recién llegados sin experiencia local italiana.',
    empleos_cv_label: 'Estrategia CV en mano:',
    empleos_cv_text: 'Imprimí 50 copias de tu CV en italiano y presentate en bares y restaurantes entre las 15:00 y las 17:00 (antes del turno de la noche). Pedí hablar con el Responsabile y decí:',
    empleos_cv_quote: '"Sto cercando lavoro come cameriere/a, sono disponibile subito."',
    empleos_cv_end: 'Este método funciona 3x más que aplicar online en Italia.',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_h: 'Salario/hora EUR',
    empleos_hack: 'Imprimí 50 copias de tu CV en italiano — aunque no hables perfecto, el esfuerzo de tenerlo en italiano impresiona. Andá a bares y restaurantes entre las 15:00 y las 17:00. Pedí hablar con el Responsabile y decí exactamente: "Sto cercando lavoro, sono disponibile subito e ho già il Codice Fiscale." Mencionar que ya tenés el Codice Fiscale acelera mucho el proceso.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Estimación de ingresos reales para estudiantes con Visto per Studio trabajando 20 horas semanales. En vacaciones podés trabajar más horas. Todos los valores aproximados antes de impuestos.',
    th_puesto_sal: 'Puesto',
    salarios_blue: '💡 En vacaciones oficiales (verano, Navidad, Semana Santa) podés trabajar más horas y aumentar significativamente tus ingresos. Un estudiante en hospitality puede ganar €1,000 - €1,400/mes en períodos de vacaciones trabajando tiempo completo.',
    salarios_hack: 'Italia tiene el salario mínimo más bajo de Europa Occidental. Con solo 20h/semana (€660-€800/mes) no siempre alcanza para cubrir renta + gastos + ahorros. Por eso en la práctica muchos estudiantes toman dos empleos para compensar.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Este es el mapa de ruta mes a mes. Seguí este orden exacto — cada paso desbloquea el siguiente. Saltarte uno puede costarte semanas de espera o problemas con tu visa.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar escuela + Letter of Acceptance + Tramitar Dichiarazione di Valore en consulado italiano + Contratar seguro médico + Reservar hostel 2 semanas + Iniciar proceso en Universitaly', '3-4 meses antes'],
      ['Fase 2: Visa', 'Solicitar Visto per Studio en consulado italiano de tu país con todos los documentos + Solvencia €5,000 demostrada en cuenta bancaria', '2-3 meses antes'],
      ['Semana 1', 'Comprar SIM card italiana + Abrir Revolut/N26 + Solicitar Codice Fiscale en Agenzia delle Entrate + Registrar Permesso di Soggiorno en Questura dentro de 8 días hábiles', 'Día 1-7'],
      ['Semana 2-4', 'Registrar SPID en Poste Italiane + Abrir cuenta bancaria italiana + Entregar CVs en mano en bares y restaurantes 15-17h + Buscar habitación fija (salir del hostel)', 'Día 7-30'],
      ['Mes 2', 'Estabilizar empleo 20h/semana + Recibir primera nómina + Confirmar inscripción en escuela de italiano', 'Día 30-60'],
      ['Mes 3-6', 'Esperar Permesso di Soggiorno físico (puede tardar hasta 6 meses — normal) + Guardar siempre la ricevuta como documento válido', 'Día 60-180'],
    ],
    timeline_hack: 'El orden Codice Fiscale → Permesso di Soggiorno → SPID → Banco es sagrado en Italia. Si lo seguís bien podés estar trabajando y cobrando en menos de 3 semanas desde que aterrizás. El Permesso di Soggiorno físico tarda meses — no entrés en pánico, la ricevuta es tu documento legal válido mientras esperás. Nunca salgas sin ella.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Estos son los dos hitos reales que marcan tu independencia económica en Italia. Planeá con estos tiempos — no con los tiempos ideales que te digan en foros.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Codice Fiscale activo y recibido', 'Permesso di Soggiorno solicitado (ricevuta en mano)', 'Cuenta bancaria con IBAN activo (Revolut o banco italiano)', 'CV entregado en persona en bares y restaurantes', 'SPID activo para trámites online'],
    hito1_time: '👉 Tiempo real: 1-2 semanas desde que llegás',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato de trabajo firmado (contratto di lavoro)', 'Alta en el sistema INPS (seguridad social italiana)', 'Cuenta bancaria activa para recibir pago', 'Busta paga (recibo de nómina) recibido'],
    hito2_time: '👉 Tiempo real: 3-6 semanas desde que empezás a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Podés empezar a trabajar en:', resumen1_b: '1-2 semanas desde que aterrizás',
    resumen2: 'Podés cobrar tu primer salario en:', resumen2_b: '4-8 semanas desde que llegás',
    salario1_hack: 'En Italia el empleador está obligado a darte de alta en el INPS antes de tu primer día de trabajo — no después. Si tu empleador te pide trabajar sin contrato primero "para probarte", es trabajo en negro (lavoro nero) y no tenés ninguna protección legal ni cobertura médica. Exigí siempre el contratto di lavoro firmado antes de empezar.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. Lo que diferencia a quien los resuelve rápido de quien se paraliza es tener el protocolo claro antes de que pasen. Guardá estos contactos en tu teléfono desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '112 — número único en Italia (Policía, Ambulancia, Bomberos) · 113 Polizia · 118 Ambulancia · 115 Bomberos'],
      ['Inmigración', 'PortaleImmigrazione.it — Para problemas con Permesso di Soggiorno · Questura de tu ciudad para trámites en persona'],
      ['Codice Fiscale / Impuestos', 'AgenziaEntrate.gov.it — Para trámites fiscales y Codice Fiscale'],
      ['Médico', 'Salute.gov.it — Para encontrar médico (medico di base) más cercano'],
      ['Comunidad L&T', 'Latinos en Roma, Milán y Florencia — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Italia',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Italia — links próximamente',
    crisis_hack: 'La burocracia italiana puede ser frustrante pero todo tiene solución si seguís el proceso correcto. El sindacato (sindicato) es tu mejor aliado en Italia — CGIL, CISL y UIL ofrecen asesoría gratuita a cualquier trabajador sin importar tu nacionalidad. Nunca respondas solo a notificaciones de inmigración — consultá primero con alguien de confianza.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Italia como destino de migración para latinoamericanos. Úsalo para comparar con otros países del blueprint y tomar la decisión más informada.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Visto per Studio'],
      ['Duración mínima del curso', '6 meses'],
      ['Horas de trabajo durante clases', '20 horas/semana'],
      ['Horas de trabajo en vacaciones', 'Sin límite oficial'],
      ['Solvencia para italiano', '€5,000 (≈ $5,500)'],
      ['Solvencia para universidad', '€8,800 (≈ $9,680)'],
      ['Costo promedio curso italiano', '€2,500 - €3,500/año'],
      ['Permesso di Soggiorno', '€80 - €120 (≈ $88 - $132)'],
      ['Renta habitación compartida', '€350 - €600/mes'],
      ['Empleos más comunes', 'Hospitality, Cleaning, Retail, Delivery'],
      ['Salario promedio entrada', '€8.24 - €10 por hora'],
      ['Tiempo hasta primer trabajo', '1-2 semanas'],
      ['Tiempo hasta primer cobro', '4-8 semanas desde llegada'],
      ['Idioma oficial', 'Italiano'],
      ['Camino a residencia', 'Permesso di Soggiorno → Residenza Permanente (5 años)'],
      ['Ciudadanía', '10 años residencia legal / Por descendencia sin límite'],
      ['Nivel de dificultad', 'Medio (burocracia lenta)'],
      ['Mejores ciudades', 'Roma / Milán / Florencia'],
      ['Comunidad latina', 'Creciente — grupos WhatsApp activos'],
      ['Ventaja única', 'Ciudadanía por descendencia italiana para muchos latinos'],
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
    hero_title: 'Itália',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Média',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '€2.500 - €4.500',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Média',
    included_title: 'O que inclui o Blueprint',
    included: [
      'O Visto per Studio permite estudar italiano e trabalhar 20h/semana legalmente',
      'Codice Fiscale (equivalente ao PPS) — essencial para trabalhar, abrir conta e alugar',
      'Permesso di Soggiorno — como tramitar na Questura sem morrer na tentativa',
      'Escolas de italiano a partir de €2.500/ano — opções verificadas em Roma, Milão e Florença',
      'Cidadania italiana por descendência — como saber se você se qualifica e como aplicar',
      'Comunidade latina consolidada — grupos ativos em Roma, Milão e Florença',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'A Itália é um dos destinos mais sonhados para latino-americanos na Europa. Mediterrâneo, cultura milenar, gastronomia incomparável e um idioma que os latinos aprendem quase naturalmente. Para muitos, também é a porta para a cidadania europeia por descendência italiana.',
    autoridad_stamp2_label: 'Visto per Studio:',
    autoridad_stamp2_text: 'permite estudar italiano em tempo integral e trabalhar',
    autoridad_20h: '20 horas/semana',
    autoridad_mid: 'durante as aulas,',
    autoridad_40h: 'sem restrição de horas',
    autoridad_end: 'nas férias oficiais.',
    autoridad_acelerador_label: 'Acelerador de início:',
    autoridad_acelerador_text: 'um roteiro claro para você chegar à Itália, se ativar legalmente e começar a gerar renda sem improvisar. A burocracia italiana pode ser lenta — a ordem e o timing desde o dia 1 são essenciais.',
    autoridad_blue: '💱 Padrão de moeda: todos os preços vão em EUR primeiro, depois o equivalente em USD. Referência: 1 EUR ≈ $1,10 USD. Exemplo: €300 → $330 USD.',
    autoridad_hack: 'O Codice Fiscale é a chave para tudo na Itália. Sem ele você não pode trabalhar, alugar nem abrir conta bancária. Priorize consegui-lo na primeira semana — é feito gratuitamente na Agenzia delle Entrate ou no consulado italiano antes de viajar.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Escolher bem sua escola é a decisão financeira mais importante do seu processo. Não se trata apenas de estudar — é seu investimento base que determina sua velocidade de inserção no mercado de trabalho. As escolas AM são mais caras mas deixam as tardes livres para trabalhar. As PM são mais baratas e liberam as manhãs.',
    roma_head: '🇮🇹 Matriz: Roma (Sede Central)',
    roma_sub: '6 escolas verificadas em Roma ordenadas por preço. AM = turno manhã, PM = turno tarde.',
    florencia_head: '🌸 Matriz: Florença (Cultura e Arte)',
    florencia_sub: 'Florença é a cidade mais cultural da Itália. Ambiente mais tranquilo e escolas muito reconhecidas internacionalmente.',
    milan_head: '🏙️ Matriz: Milão (Otimização de renda)',
    milan_sub: 'Milão é a capital financeira da Itália — mais oportunidades de trabalho em moda, design e finanças.',
    th_inst: 'Instituição', th_loc: 'Localização', th_am: 'Preço AM', th_usd: '≈ USD', th_pm: 'Preço PM', th_web: 'Website',
    solvencia_ingles: '🔵 Solvência exigida para italiano (6 meses):',
    solvencia_uni: '🔵 Solvência exigida para universidade/mestrado:',
    estrategia_hack: 'Antes de escolher a escola aplique este filtro: O horário AM ou PM permite trabalhar? Está numa área com empregos próximos? O preço total (escola + solvência) cabe no seu capital? Se não passar nos 3 filtros, descarte. Roma para experiência cultural completa, Florença para arte e tranquilidade, Milão para maximizar renda.',
    sec_edu_title: 'Educação Superior',
    edu_en_head: '🏛️ Programas em INGLÊS — Bachelor / Master',
    edu_en_sub: 'Você precisa de IELTS/TOEFL B2 — Não precisa saber italiano',
    edu_it_head: '🏛️ Programas em ITALIANO — Bachelor / Master',
    edu_it_sub: 'Você precisa do certificado B2 italiano (CILS ou CELI)',
    th_uni: 'Universidade', th_area: 'Área', th_anual: 'Preço/ano',
    edu_blue: '🔵 Solvência universitária: €8.800/ano (≈ $9.680 USD) — Este valor deve ser demonstrado na sua conta bancária pessoal no momento de aplicar ao visto de estudante no consulado italiano do seu país. Não é o custo do programa — é o dinheiro que o governo italiano exige que você tenha disponível para cobrir seus gastos de vida durante o ano acadêmico. Sem demonstrar essa solvência, o consulado pode rejeitar seu visto mesmo com a carta de aceitação da universidade.',
    edu_hack: 'Se você já estudou italiano e tem B2 — os programas em italiano são muito mais baratos e há mais opções. Se você vem com inglês — os programas em inglês são sua porta direta sem esperar aprender italiano. Sapienza Roma tem 59 programas em inglês e é uma das maiores universidades da Europa.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Estes são os custos que sua escola NÃO inclui no preço do curso. São absolutamente obrigatórios e você deve tê-los calculados e disponíveis antes de iniciar o processo de visto. Não tê-los pode significar a rejeição do seu pedido.',
    th_concepto: 'Conceito', th_costo: 'Custo (EUR)',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA: €5.000 para escola de italiano — €8.800 para universidade. Sem este valor exato na sua conta bancária, o visto será REJEITADO imediatamente. Este dinheiro não é gasto — apenas demonstrado.',
    gastos_hack: 'Seu Capital de Execução Real = preço da sua escola + €5.000 de solvência + €500 de despesas fixas. Esse é o número mínimo que você precisa antes de começar. Se não tiver completo, não inicie o processo. A Dichiarazione di Valore é exclusiva da Itália — é a validação oficial do seu diploma no consulado italiano do seu país. Providencie com pelo menos 3 meses de antecedência porque pode demorar.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Aqui a ordem importa mais do que em qualquer outro país: Codice Fiscale primeiro, Permesso di Soggiorno dentro de 8 dias, SPID depois, banco por último.',
    codice_head: '1. Codice Fiscale — Seu número de identificação fiscal',
    codice_p: 'Sem Codice Fiscale você não pode trabalhar, abrir conta bancária, alugar nem acessar serviços públicos. É o primeiro procedimento — providencie no consulado italiano do seu país ANTES de viajar.',
    codice_pasos: [
      ['Passo 1', 'Solicitar o Codice Fiscale no consulado italiano do seu país', null],
      ['Passo 2', 'Se não providenciou antes, ir à Agenzia delle Entrate assim que chegar', 'https://agenziaentrate.gov.it'],
      ['Passo 3', 'Anexar: Passaporte + Visto per Studio válido', null],
      ['Passo 4', 'Com Codice Fiscale ativo, abrir conta na Poste Italiane ou banco local', null],
    ],
    permesso_head: '2. Permesso di Soggiorno — Sua permissão de residência (Obrigatório)',
    permesso_p: 'Você deve solicitá-lo dentro dos primeiros 8 dias úteis de chegada — muito mais rápido que outros países. O trâmite pode demorar 3-6 meses mas o recibo (ricevuta) é válido enquanto você espera.',
    permesso_pasos: [
      ['Passo 1', 'Baixar o kit de solicitação na Poste Italiane', null],
      ['Passo 2', 'Preencher o formulário e pagar €80-€120 no bolletino postale', null],
      ['Passo 3', 'Anexar €16 de Marca da Bollo', null],
      ['Passo 4', 'Entregar na Questura da sua cidade — guardar a ricevuta como documento válido', null],
      ['Passo 5', 'Acompanhar o status no Portale Immigrazione', 'https://portaleimmigrazione.it'],
    ],
    spid_head: '3. SPID — Sua identidade digital italiana',
    spid_p: 'Equivalente ao MyGovID irlandês. Sem SPID você não pode gerenciar trâmites online do governo.',
    spid_pasos: [
      ['Passo 1', 'Registrar-se no Poste Italiane SPID — o mais fácil para estrangeiros', null],
      ['Passo 2', 'Verificar identidade com Codice Fiscale + Passaporte', null],
      ['Passo 3', 'Ativar o SPID e acessar todos os serviços em SPID.gov.it', 'https://spid.gov.it'],
    ],
    tel_head: '4. Número de Telefone Italiano',
    tel_p: 'Você precisa de um número italiano para verificar contas, receber SMS de bancos e trâmites.',
    tel_items: ['TIM — cobertura mais ampla na Itália', 'Vodafone Italia — boa opção para cidades grandes', 'WindTre — mais econômico, bom para começar', 'SIM a partir de €10 com documento de identidade'],
    aterrizaje_hack: 'A Itália tem a burocracia mais lenta da Europa — o Permesso di Soggiorno pode demorar até 6 meses para chegar fisicamente. Não entre em pânico — a ricevuta (recibo da solicitação) é legalmente válida enquanto você espera. Guarde-a sempre com você. Providencie o Codice Fiscale no consulado antes de viajar — isso economiza dias críticos ao chegar.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Para receber seu salário na Itália você precisa de um IBAN italiano ou europeu. Sem conta bancária ativa, seu empregador não pode pagar você legalmente. Abra primeiro uma conta digital (Revolut ou N26) — em 24-48 horas você tem seu IBAN ativo.',
    bancos_estrategia_label: 'Estratégia recomendada:',
    bancos_estrategia_text: 'Abra Revolut ou N26 nos primeiros dias para ter IBAN imediato. Depois abra Poste Italiane ou uma conta tradicional para procedimentos que exigem banco italiano (como extratos bancários para renovação de visto ou contratos de aluguel).',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Revolut ou N26 ANTES de chegar ou no primeiro dia. Baixe o app, verifique sua identidade com passaporte e ative o cartão virtual no Apple Pay / Google Pay para usar imediatamente. O cartão físico chega em 5-7 dias. Para abrir conta em banco italiano tradicional você precisa do Codice Fiscale — sem ele nenhum banco abre conta para você. Por isso a ordem é: primeiro Codice Fiscale, depois banco.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Estes são os portais oficiais que você precisa conhecer e usar desde sua primeira semana na Itália. Salve-os nos favoritos antes de voar. Cada um tem um papel específico no seu processo de instalação legal e profissional.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Universitaly é o portal mais crítico e o mais esquecido. Sem completar o processo no Universitaly você não pode obter o visto de estudante italiano. Inicie o trâmite com no mínimo 3-4 meses de antecedência antes de voar — os consulados italianos são lentos e as vagas se esgotam. O Codice Fiscale é sua segunda prioridade absoluta — sem ele você não pode abrir banco, assinar contrato nem alugar.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário na Itália varia muito por cidade. Roma e Milão são as mais competitivas — os bons quartos são alugados em horas. Florença é mais tranquila mas também cara. Não busque sorte — aplique um sistema técnico de busca com alertas em tempo real e networking desde o primeiro dia.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_mes: 'Preço Mensal EUR',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos à distância. Se você não viu o quarto fisicamente e testou a chave na fechadura, NÃO pague depósito. Golpes de moradia são muito comuns na Itália e o dinheiro não é recuperado. Desconfie de preços baixos demais para Roma ou Milão.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia',
    vivienda_hack: 'Não busque quarto do seu país — é quase impossível e cheio de golpes. Reserve um hostel para as primeiras 2 semanas e busque de lá pessoalmente. Peça os links de WhatsApp de latinos na sua escola no primeiro dia — os melhores quartos nunca chegam aos portais oficiais. Na Itália o contrato de aluguel (contratto di locazione) deve estar registrado na Agenzia delle Entrate para ser legal — peça sempre.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Com o Visto per Studio você pode trabalhar 20 horas por semana durante o período acadêmico. Estes são os setores com maior rotatividade e acesso mais rápido para recém-chegados sem experiência local italiana.',
    empleos_cv_label: 'Estratégia CV na mão:',
    empleos_cv_text: 'Imprima 50 cópias do seu CV em italiano e se apresente em bares e restaurantes entre 15h e 17h (antes do turno da noite). Peça para falar com o Responsabile e diga:',
    empleos_cv_quote: '"Sto cercando lavoro come cameriere/a, sono disponibile subito."',
    empleos_cv_end: 'Este método funciona 3x mais do que aplicar online na Itália.',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_h: 'Salário/hora EUR',
    empleos_hack: 'Imprima 50 cópias do seu CV em italiano — mesmo que você não fale perfeitamente, o esforço de tê-lo em italiano impressiona. Vá a bares e restaurantes entre 15h e 17h. Peça para falar com o Responsabile e diga exatamente: "Sto cercando lavoro, sono disponibile subito e ho già il Codice Fiscale." Mencionar que você já tem o Codice Fiscale acelera muito o processo.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Estimativa de renda real para estudantes com Visto per Studio trabalhando 20 horas semanais. Nas férias você pode trabalhar mais horas. Todos os valores aproximados antes de impostos.',
    th_puesto_sal: 'Cargo',
    salarios_blue: '💡 Nas férias oficiais (verão, Natal, Páscoa) você pode trabalhar mais horas e aumentar significativamente sua renda. Um estudante em hospitalidade pode ganhar €1.000 - €1.400/mês em períodos de férias trabalhando em tempo integral.',
    salarios_hack: 'A Itália tem o salário mínimo mais baixo da Europa Ocidental. Com apenas 20h/semana (€660-€800/mês) nem sempre é suficiente para cobrir aluguel + despesas + poupança. Por isso, na prática, muitos estudantes assumem dois empregos para compensar.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Este é o mapa de rota mês a mês. Siga esta ordem exata — cada passo desbloqueia o próximo. Pular um pode custar semanas de espera ou problemas com seu visto.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar escola + Letter of Acceptance + Providenciar Dichiarazione di Valore no consulado italiano + Contratar seguro médico + Reservar hostel 2 semanas + Iniciar processo no Universitaly', '3-4 meses antes'],
      ['Fase 2: Visto', 'Solicitar Visto per Studio no consulado italiano do seu país com todos os documentos + Solvência €5.000 demonstrada em conta bancária', '2-3 meses antes'],
      ['Semana 1', 'Comprar SIM card italiano + Abrir Revolut/N26 + Solicitar Codice Fiscale na Agenzia delle Entrate + Registrar Permesso di Soggiorno na Questura dentro de 8 dias úteis', 'Dia 1-7'],
      ['Semana 2-4', 'Registrar SPID na Poste Italiane + Abrir conta bancária italiana + Entregar CVs em mãos em bares e restaurantes 15-17h + Buscar quarto fixo (sair do hostel)', 'Dia 7-30'],
      ['Mês 2', 'Estabilizar emprego 20h/semana + Receber primeira folha de pagamento + Confirmar inscrição na escola de italiano', 'Dia 30-60'],
      ['Mês 3-6', 'Aguardar Permesso di Soggiorno físico (pode demorar até 6 meses — normal) + Guardar sempre a ricevuta como documento válido', 'Dia 60-180'],
    ],
    timeline_hack: 'A ordem Codice Fiscale → Permesso di Soggiorno → SPID → Banco é sagrada na Itália. Se você seguir corretamente, pode estar trabalhando e recebendo em menos de 3 semanas desde que chega. O Permesso di Soggiorno físico demora meses — não entre em pânico, a ricevuta é seu documento legal válido enquanto espera. Nunca saia sem ela.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'Estes são os dois marcos reais que marcam sua independência econômica na Itália. Planeje com estes tempos — não com os tempos ideais que dizem nos fóruns.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Codice Fiscale ativo e recebido', 'Permesso di Soggiorno solicitado (ricevuta em mãos)', 'Conta bancária com IBAN ativo (Revolut ou banco italiano)', 'CV entregue pessoalmente em bares e restaurantes', 'SPID ativo para trâmites online'],
    hito1_time: '👉 Tempo real: 1-2 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato de trabalho assinado (contratto di lavoro)', 'Cadastro no sistema INPS (previdência social italiana)', 'Conta bancária ativa para receber pagamento', 'Busta paga (holerite) recebido'],
    hito2_time: '👉 Tempo real: 3-6 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '1-2 semanas desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '4-8 semanas desde que chega',
    salario1_hack: 'Na Itália o empregador é obrigado a te cadastrar no INPS antes do seu primeiro dia de trabalho — não depois. Se seu empregador pedir para você trabalhar sem contrato primeiro "para testar", isso é trabalho informal (lavoro nero) e você não tem nenhuma proteção legal nem cobertura médica. Exija sempre o contratto di lavoro assinado antes de começar.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. O que diferencia quem resolve rápido de quem fica paralisado é ter o protocolo claro antes que aconteçam. Salve estes contatos no seu celular desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '112 — número único na Itália (Polícia, Ambulância, Bombeiros) · 113 Polizia · 118 Ambulância · 115 Bombeiros'],
      ['Imigração', 'PortaleImmigrazione.it — Para problemas com Permesso di Soggiorno · Questura da sua cidade para trâmites presenciais'],
      ['Codice Fiscale / Impostos', 'AgenziaEntrate.gov.it — Para trâmites fiscais e Codice Fiscale'],
      ['Médico', 'Salute.gov.it — Para encontrar médico (medico di base) mais próximo'],
      ['Comunidade L&T', 'Latinos em Roma, Milão e Florença — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina na Itália',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos na Itália — links em breve',
    crisis_hack: 'A burocracia italiana pode ser frustrante mas tudo tem solução se você seguir o processo correto. O sindacato (sindicato) é seu melhor aliado na Itália — CGIL, CISL e UIL oferecem assessoria gratuita a qualquer trabalhador, independente da sua nacionalidade. Nunca responda sozinho a notificações de imigração — consulte primeiro alguém de confiança.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo da Itália como destino de migração para latino-americanos. Use-o para comparar com outros países do blueprint e tomar a decisão mais informada.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Visto per Studio'],
      ['Duração mínima do curso', '6 meses'],
      ['Horas de trabalho durante aulas', '20 horas/semana'],
      ['Horas de trabalho nas férias', 'Sem limite oficial'],
      ['Solvência para italiano', '€5.000 (≈ $5.500)'],
      ['Solvência para universidade', '€8.800 (≈ $9.680)'],
      ['Custo médio curso italiano', '€2.500 - €3.500/ano'],
      ['Permesso di Soggiorno', '€80 - €120 (≈ $88 - $132)'],
      ['Aluguel quarto compartilhado', '€350 - €600/mês'],
      ['Empregos mais comuns', 'Hospitalidade, Limpeza, Varejo, Delivery'],
      ['Salário médio de entrada', '€8,24 - €10 por hora'],
      ['Tempo até primeiro emprego', '1-2 semanas'],
      ['Tempo até primeiro pagamento', '4-8 semanas desde chegada'],
      ['Idioma oficial', 'Italiano'],
      ['Caminho para residência', 'Permesso di Soggiorno → Residenza Permanente (5 anos)'],
      ['Cidadania', '10 anos de residência legal / Por descendência sem limite'],
      ['Nível de dificuldade', 'Médio (burocracia lenta)'],
      ['Melhores cidades', 'Roma / Milão / Florença'],
      ['Comunidade latina', 'Crescente — grupos WhatsApp ativos'],
      ['Vantagem única', 'Cidadania por descendência italiana para muitos latinos'],
    ],
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Montamos seu plano migratório personalizado com Jimmy.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    feedback_title: 'Algo desatualizado ou uma sugestão?',
    feedback_desc: 'Seu feedback nos ajuda a manter o blueprint atualizado.',
    feedback_placeholder: 'Ex: o preço da escola X mudou, ou gostaria de ver informações sobre...',
    feedback_btn: 'Enviar sugestão',
    hack_label: '💡 Dica da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Italy',
    hero_sub: 'Europe · Work and Study',
    hero_badge: 'Medium',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '€2,500 - €4,500',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Medium',
    included_title: 'What the Blueprint Includes',
    included: [
      'Visto per Studio allows you to study Italian and work 20h/week legally',
      'Codice Fiscale (equivalent to PPS) — key to work, open a bank account, and rent',
      'Permesso di Soggiorno — how to process it at the Questura without losing your mind',
      'Italian schools from €2,500/year — verified options in Rome, Milan and Florence',
      'Italian citizenship by descent — how to know if you qualify and how to apply',
      'Established Latin community — active groups in Rome, Milan and Florence',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Italy is one of the most dreamed-of destinations for Latin Americans in Europe. Mediterranean lifestyle, ancient culture, unmatched food, and a language Latinos pick up almost naturally. For many, it\'s also the gateway to European citizenship through Italian descent.',
    autoridad_stamp2_label: 'Visto per Studio:',
    autoridad_stamp2_text: 'allows you to study Italian full-time and work',
    autoridad_20h: '20 hours/week',
    autoridad_mid: 'during classes,',
    autoridad_40h: 'with no official hour limit',
    autoridad_end: 'during official holidays.',
    autoridad_acelerador_label: 'Launch accelerator:',
    autoridad_acelerador_text: 'a clear roadmap so you land in Italy, get legally activated and start generating income without improvising. Italian bureaucracy can be slow — the correct order and timing from day 1 are key.',
    autoridad_blue: '💱 Currency standard: all prices are in EUR first, then the USD equivalent. Reference: 1 EUR ≈ $1.10 USD. Example: €300 → $330 USD.',
    autoridad_hack: 'The Codice Fiscale is the key to everything in Italy. Without it you can\'t work, rent, or open a bank account. Prioritize getting it in the first week — it\'s free at the Agenzia delle Entrate or at the Italian consulate before traveling.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'Choosing the right school is the most important financial decision of your process. It\'s not just about studying — it\'s your base investment that determines your speed of job placement. AM schools are more expensive but leave afternoons free to work. PM schools are cheaper and free up mornings.',
    roma_head: '🇮🇹 Matrix: Rome (Main Hub)',
    roma_sub: '6 verified schools in Rome ordered by price. AM = morning shift, PM = afternoon shift.',
    florencia_head: '🌸 Matrix: Florence (Culture & Art)',
    florencia_sub: 'Florence is Italy\'s most cultural city. A calmer atmosphere and internationally well-known schools.',
    milan_head: '🏙️ Matrix: Milan (Income Optimization)',
    milan_sub: 'Milan is Italy\'s financial capital — more job opportunities in fashion, design, and finance.',
    th_inst: 'Institution', th_loc: 'Location', th_am: 'AM Price', th_usd: '≈ USD', th_pm: 'PM Price', th_web: 'Website',
    solvencia_ingles: '🔵 Required funds for Italian (6 months):',
    solvencia_uni: '🔵 Required funds for university/master:',
    estrategia_hack: 'Before choosing a school apply this filter: Does the AM or PM schedule allow you to work? Is it in an area with nearby jobs? Does the total price (school + funds) fit your capital? If it doesn\'t pass all 3 filters, discard it. Rome for the full cultural experience, Florence for art and calm, Milan to maximize income.',
    sec_edu_title: 'Higher Education',
    edu_en_head: '🏛️ Programs in ENGLISH — Bachelor / Master',
    edu_en_sub: 'You need IELTS/TOEFL B2 — You don\'t need to know Italian',
    edu_it_head: '🏛️ Programs in ITALIAN — Bachelor / Master',
    edu_it_sub: 'You need an Italian B2 certificate (CILS or CELI)',
    th_uni: 'University', th_area: 'Area', th_anual: 'Price/year',
    edu_blue: '🔵 University funds: €8,800/year (≈ $9,680 USD) — This amount must be demonstrated in your personal bank account when applying for the student visa at the Italian consulate in your country. This is NOT the program cost — it\'s the money the Italian government requires you to have available to cover your living expenses during the academic year. Without demonstrating these funds, the consulate may reject your visa even with a university acceptance letter.',
    edu_hack: 'If you already studied Italian and have B2 — programs in Italian are much cheaper and there are more options. If you come with English — programs in English are your direct path without waiting to learn Italian. Sapienza Rome has 59 programs in English and is one of the largest universities in Europe.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'These are costs your school does NOT include in the course price. They are absolutely mandatory and must be calculated and available before starting the visa process. Not having them can mean rejection of your application.',
    th_concepto: 'Item', th_costo: 'Cost (EUR)',
    gastos_red: '🔴 MANDATORY FUNDS: €5,000 for Italian school — €8,800 for university. Without this exact amount in your bank account, the visa will be REJECTED immediately. This money is not spent — only demonstrated.',
    gastos_hack: 'Your Real Execution Capital = your school price + €5,000 in funds + €500 in fixed costs. That\'s the minimum number you need before starting. If you don\'t have it complete, don\'t start the process. The Dichiarazione di Valore is unique to Italy — it\'s the official validation of your diploma at the Italian consulate in your country. Process it at least 3 months in advance since it can take time.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'Here the order matters more than in any other country: Codice Fiscale first, Permesso di Soggiorno within 8 days, SPID next, bank last.',
    codice_head: '1. Codice Fiscale — Your tax identification number',
    codice_p: 'Without a Codice Fiscale you can\'t work, open a bank account, rent, or access public services. It\'s the first procedure — process it at the Italian consulate in your country BEFORE traveling.',
    codice_pasos: [
      ['Step 1', 'Apply for the Codice Fiscale at the Italian consulate in your country', null],
      ['Step 2', 'If you didn\'t process it beforehand, go to the Agenzia delle Entrate as soon as you arrive', 'https://agenziaentrate.gov.it'],
      ['Step 3', 'Attach: Passport + Valid Visto per Studio', null],
      ['Step 4', 'With an active Codice Fiscale, open an account at Poste Italiane or a local bank', null],
    ],
    permesso_head: '2. Permesso di Soggiorno — Your residence permit (Mandatory)',
    permesso_p: 'You must apply within the first 8 business days of arrival — much faster than other countries. Processing can take 3-6 months but the receipt (ricevuta) is valid while you wait.',
    permesso_pasos: [
      ['Step 1', 'Download the application kit at Poste Italiane', null],
      ['Step 2', 'Complete the form and pay €80-€120 at a bolletino postale', null],
      ['Step 3', 'Attach €16 in Marca da Bollo', null],
      ['Step 4', 'Submit at the Questura of your city — keep the ricevuta as a valid document', null],
      ['Step 5', 'Track the status at Portale Immigrazione', 'https://portaleimmigrazione.it'],
    ],
    spid_head: '3. SPID — Your Italian digital identity',
    spid_p: 'Equivalent to Ireland\'s MyGovID. Without SPID you can\'t manage government procedures online.',
    spid_pasos: [
      ['Step 1', 'Register for SPID at Poste Italiane — the easiest option for foreigners', null],
      ['Step 2', 'Verify identity with Codice Fiscale + Passport', null],
      ['Step 3', 'Activate SPID and access all services at SPID.gov.it', 'https://spid.gov.it'],
    ],
    tel_head: '4. Italian Phone Number',
    tel_p: 'You need an Italian number to verify accounts, receive SMS from banks and paperwork.',
    tel_items: ['TIM — widest coverage in Italy', 'Vodafone Italia — good option for big cities', 'WindTre — more affordable, good to start with', 'SIM from €10 with ID document'],
    aterrizaje_hack: 'Italy has the slowest bureaucracy in Europe — the physical Permesso di Soggiorno can take up to 6 months to arrive. Don\'t panic — the ricevuta (application receipt) is legally valid while you wait. Always keep it with you. Process the Codice Fiscale at the consulate before traveling — it saves you critical days upon arrival.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'To receive your paycheck in Italy you need an Italian or European IBAN. Without an active bank account, your employer can\'t pay you legally. Open a digital account first (Revolut or N26) — in 24-48 hours you\'ll have your IBAN active.',
    bancos_estrategia_label: 'Recommended strategy:',
    bancos_estrategia_text: 'Open Revolut or N26 in the first days for an immediate IBAN. Then open Poste Italiane or a traditional account for procedures requiring an Italian bank (like bank statements for visa renewal or rental contracts).',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Revolut or N26 BEFORE arriving or on day one. Download the app, verify your identity with your passport and activate the virtual card on Apple Pay / Google Pay to use it immediately. The physical card arrives in 5-7 days. To open an account at a traditional Italian bank you need the Codice Fiscale — without it no bank will open an account for you. That\'s why the order is: Codice Fiscale first, then bank.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'These are the official portals you need to know and use from your first week in Italy. Save them as favourites before flying. Each one has a specific role in your legal and employment setup process.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'Universitaly is the most critical and most forgotten portal. Without completing the process on Universitaly you can\'t get the Italian student visa. Start the process at least 3-4 months in advance before flying — Italian consulates are slow and slots run out. The Codice Fiscale is your second absolute priority — without it you can\'t open a bank account, sign a contract, or rent.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'The housing market in Italy varies a lot by city. Rome and Milan are the most competitive — good rooms rent out within hours. Florence is calmer but also expensive. Don\'t rely on luck — apply a technical search system with real-time alerts and networking from day one.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_mes: 'Monthly Price EUR',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO remote deposits. If you haven\'t physically seen the room and tested the key in the lock, DO NOT pay a deposit. Housing scams are very common in Italy and the money isn\'t recovered. Be wary of prices that seem too cheap for Rome or Milan.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy',
    vivienda_hack: 'Don\'t look for a room from your home country — it\'s nearly impossible and full of scams. Book a hostel for the first 2 weeks and search from there in person. Ask for WhatsApp links of fellow Latinos at your school on day one — the best rooms never make it to the official portals. In Italy the rental contract (contratto di locazione) must be registered with the Agenzia delle Entrate to be legal — always ask for it.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'With the Visto per Studio you can work 20 hours per week during the academic period. These are the sectors with the highest turnover and fastest access for newcomers without local Italian experience.',
    empleos_cv_label: 'CV in hand strategy:',
    empleos_cv_text: 'Print 50 copies of your CV in Italian and walk into bars and restaurants between 3pm and 5pm (before the night shift). Ask to speak with the Responsabile and say:',
    empleos_cv_quote: '"Sto cercando lavoro come cameriere/a, sono disponibile subito."',
    empleos_cv_end: 'This method works 3x better than applying online in Italy.',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_h: 'Hourly Wage EUR',
    empleos_hack: 'Print 50 copies of your CV in Italian — even if you don\'t speak perfectly, the effort of having it in Italian impresses. Go to bars and restaurants between 3pm and 5pm. Ask to speak with the Responsabile and say exactly: "Sto cercando lavoro, sono disponibile subito e ho già il Codice Fiscale." Mentioning that you already have the Codice Fiscale speeds up the process a lot.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Real income estimates for Visto per Studio students working 20 hours per week. During holidays you can work more hours. All values are approximate and before taxes.',
    th_puesto_sal: 'Role',
    salarios_blue: '💡 During official holidays (summer, Christmas, Easter) you can work more hours and significantly increase your income. A hospitality student can earn €1,000 - €1,400/month during holiday periods working full-time.',
    salarios_hack: 'Italy has the lowest minimum wage in Western Europe. With only 20h/week (€660-€800/month) it\'s not always enough to cover rent + expenses + savings. That\'s why in practice many students take on two jobs to compensate.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'This is the month-by-month roadmap. Follow this exact order — each step unlocks the next. Skipping one can cost you weeks of waiting or visa issues.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay school + Letter of Acceptance + Process Dichiarazione di Valore at the Italian consulate + Get health insurance + Book hostel 2 weeks + Start the Universitaly process', '3-4 months before'],
      ['Phase 2: Visa', 'Apply for the Visto per Studio at the Italian consulate in your country with all documents + €5,000 in funds demonstrated in bank account', '2-3 months before'],
      ['Week 1', 'Buy Italian SIM card + Open Revolut/N26 + Apply for Codice Fiscale at the Agenzia delle Entrate + Register Permesso di Soggiorno at the Questura within 8 business days', 'Day 1-7'],
      ['Week 2-4', 'Register SPID at Poste Italiane + Open Italian bank account + Drop off CVs in person at bars and restaurants 3-5pm + Find a permanent room (leave the hostel)', 'Day 7-30'],
      ['Month 2', 'Stabilize 20h/week job + Receive first paycheck + Confirm enrollment at the Italian school', 'Day 30-60'],
      ['Month 3-6', 'Wait for the physical Permesso di Soggiorno (can take up to 6 months — normal) + Always keep the ricevuta as a valid document', 'Day 60-180'],
    ],
    timeline_hack: 'The order Codice Fiscale → Permesso di Soggiorno → SPID → Bank is sacred in Italy. If followed correctly, you can be working and getting paid in less than 3 weeks from landing. The physical Permesso di Soggiorno takes months — don\'t panic, the ricevuta is your valid legal document while you wait. Never go out without it.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'These are the two real milestones that mark your economic independence in Italy. Plan with these timelines — not the ideal timelines people tell you in forums.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Codice Fiscale active and received', 'Permesso di Soggiorno applied for (ricevuta in hand)', 'Bank account with active IBAN (Revolut or Italian bank)', 'CV delivered in person at bars and restaurants', 'SPID active for online procedures'],
    hito1_time: '👉 Real timeline: 1-2 weeks from landing',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Employment contract signed (contratto di lavoro)', 'Registered in the INPS system (Italian social security)', 'Active bank account to receive payment', 'Busta paga (payslip) received'],
    hito2_time: '👉 Real timeline: 3-6 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '1-2 weeks from landing',
    resumen2: 'You can receive your first salary in:', resumen2_b: '4-8 weeks from arrival',
    salario1_hack: 'In Italy the employer is required to register you with INPS before your first day of work — not after. If your employer asks you to work without a contract first "to try you out," that\'s undeclared work (lavoro nero) and you have no legal protection or health coverage. Always demand the signed contratto di lavoro before starting.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. What differentiates those who resolve them quickly from those who freeze is having a clear protocol before they occur. Save these contacts on your phone from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '112 — single emergency number in Italy (Police, Ambulance, Fire) · 113 Police · 118 Ambulance · 115 Fire'],
      ['Immigration', 'PortaleImmigrazione.it — For Permesso di Soggiorno issues · Questura in your city for in-person procedures'],
      ['Codice Fiscale / Tax', 'AgenziaEntrate.gov.it — For tax matters and Codice Fiscale'],
      ['Doctor', 'Salute.gov.it — To find your nearest GP (medico di base)'],
      ['L&T Community', 'Latinos in Rome, Milan, and Florence — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Italy',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Italy — links coming soon',
    crisis_hack: 'Italian bureaucracy can be frustrating but everything has a solution if you follow the correct process. The sindacato (labor union) is your best ally in Italy — CGIL, CISL, and UIL offer free advice to any worker regardless of nationality. Never respond alone to immigration notifications — consult someone you trust first.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Italy as a migration destination for Latin Americans. Use it to compare with other countries in the blueprint and make the most informed decision.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Visto per Studio'],
      ['Minimum course duration', '6 months'],
      ['Work hours during classes', '20 hours/week'],
      ['Work hours during holidays', 'No official limit'],
      ['Required funds for Italian', '€5,000 (≈ $5,500)'],
      ['Required funds for university', '€8,800 (≈ $9,680)'],
      ['Average Italian course cost', '€2,500 - €3,500/year'],
      ['Permesso di Soggiorno', '€80 - €120 (≈ $88 - $132)'],
      ['Shared room rent', '€350 - €600/month'],
      ['Most common jobs', 'Hospitality, Cleaning, Retail, Delivery'],
      ['Average entry salary', '€8.24 - €10 per hour'],
      ['Time to first job', '1-2 weeks'],
      ['Time to first payment', '4-8 weeks from arrival'],
      ['Official language', 'Italian'],
      ['Path to residency', 'Permesso di Soggiorno → Residenza Permanente (5 years)'],
      ['Citizenship', '10 years legal residency / By descent, no limit'],
      ['Difficulty level', 'Medium (slow bureaucracy)'],
      ['Best cities', 'Rome / Milan / Florence'],
      ['Latin community', 'Growing — active WhatsApp groups'],
      ['Unique advantage', 'Citizenship by Italian descent for many Latin Americans'],
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

export default function Italia() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
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

  const StepList = ({ steps }: { steps: (string | null)[][] }) => (
    <>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
          <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
          <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
        </div>
      ))}
    </>
  )

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=1086&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>←</span>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>✈️ Lifestyle & Travel</span>
          </a>
          <LanguageSwitcher />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px 24px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px', textShadow: heroTextShadow }}>🇮🇹</div>
          <h1 style={{ color: 'white', fontSize: '34px', fontWeight: 'bold', margin: '0 0 6px', textShadow: heroTextShadow }}>{t.hero_title}</h1>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 14px', textShadow: heroTextShadow }}>{t.hero_sub}</p>
          <span style={{ backgroundColor: '#f59e0b', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>{t.hero_badge}</span>
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
          <div style={imageBanner('https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=1170&auto=format&fit=crop')} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.autoridad_stamp2_label}</strong> {t.autoridad_stamp2_text} <strong>{t.autoridad_20h}</strong> {t.autoridad_mid} <strong>{t.autoridad_40h}</strong> {t.autoridad_end}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
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

        <div style={{ display: hasAccess ? 'block' : 'none' }}>

          {/* ESTRATEGIA */}
          <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
            <Intro text={t.estrategia_intro} />
            <SubHead text={t.roma_head} />
            <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.roma_sub}</p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_inst, t.th_loc, t.th_am].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Dilit International House', 'Roma Centro', '€2,500'],
                    ['Torre di Babele', 'Roma Prati', '€2,600'],
                    ['Scuola Leonardo da Vinci', 'Roma Centro', '€2,700'],
                    ['Il Laboratorio', 'Roma Trastevere', '€2,800'],
                    ['Istituto Italiano', 'Roma Parioli', '€3,000'],
                    ['Accademia Italiana', 'Roma Centro', '€3,200'],
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
            <SubHead text={t.florencia_head} />
            <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.florencia_sub}</p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_inst, t.th_loc, t.th_am].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Scuola Leonardo da Vinci', 'Centro', '€2,500'],
                    ['British Institute Florence', 'Oltrarno', '€2,800'],
                    ['Istituto Machiavelli', 'Centro', '€3,000'],
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
            <SubHead text={t.milan_head} />
            <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.milan_sub}</p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_inst, t.th_loc, t.th_am].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Scuola Leonardo da Vinci', 'Brera', '€2,700'],
                    ['Istituto Europeo', 'Centro', '€3,000'],
                    ['Berlitz Milano', 'Centro', '€3,500'],
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
            <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
              <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                <strong>{t.solvencia_ingles}</strong> €5,000 (≈ $5,500 USD)<br />
                <strong>{t.solvencia_uni}</strong> €8,800 (≈ $9,680 USD)
              </p>
            </div>
            <HackBox text={t.estrategia_hack} />
          </Section>

          {/* EDUCACION SUPERIOR */}
          <Section id="edu" emoji="🎓" title={t.sec_edu_title}>
            <SubHead text={t.edu_en_head} />
            <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.edu_en_sub}</p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_uni, t.th_area, t.th_anual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Sapienza University Roma', 'Humanidades / Ciencias / IT', '€1,000 - €2,000'],
                    ['Politecnico di Milano', 'Diseño / Ingeniería / Arquitectura', '€3,900 - €8,000'],
                    ['University of Bologna', 'Negocios / Ingeniería / Arte', '€2,500 - €5,000'],
                    ["Ca' Foscari University", 'Economía / Lenguas / Marketing', '€2,800 - €5,500'],
                    ['Bocconi University', 'Negocios / Finanzas / Economía', '€13,000 - €16,000'],
                    ['IED Istituto Europeo di Design', 'Diseño / Moda / Comunicación', '€7,000 - €12,000'],
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
            <SubHead text={t.edu_it_head} />
            <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.edu_it_sub}</p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_uni, t.th_area, t.th_anual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Sapienza University Roma', 'Derecho / Medicina / Ciencias', '€300 - €1,500'],
                    ['University of Bologna', 'Todas las áreas', '€1,000 - €3,000'],
                    ['University of Padova', 'Medicina / Ingeniería / Ciencias', '€1,500 - €3,500'],
                    ['Politecnico di Torino', 'Arquitectura / Ingeniería', '€2,000 - €4,000'],
                    ["Ca' Foscari University", 'Economía / Comercio / Lenguas', '€1,500 - €3,000'],
                    ['University of Pisa', 'Ciencias / IT / Ingeniería', '€1,000 - €3,000'],
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
            <BlueBox text={t.edu_blue} />
            <HackBox text={t.edu_hack} />
          </Section>

          {/* GASTOS */}
          <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
            <Intro text={t.gastos_intro} />
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_concepto, t.th_costo].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Seguro médico', '€150 - €200'],
                    ['Examen final del curso de italiano', '€100 - €150'],
                    ['Materiales / Libros', '€40 - €70'],
                    ['Permesso di Soggiorno (inmigración)', '€80 - €120'],
                    ['Marca da Bollo (sello fiscal)', '€16'],
                    ['Dichiarazione di Valore (validación diploma)', '€50 - €150'],
                    ['Solvencia — Italiano (6 meses)', '€5,000'],
                    ['Solvencia — Universidad/Master', '€8,800'],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                      <td style={T.td(i)}>{r[1]}</td>
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
            <SubHead text={t.codice_head} />
            <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>{t.codice_p}</p>
            <StepList steps={t.codice_pasos} />
            <SubHead text={t.permesso_head} />
            <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>{t.permesso_p}</p>
            <StepList steps={t.permesso_pasos} />
            <SubHead text={t.spid_head} />
            <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>{t.spid_p}</p>
            <StepList steps={t.spid_pasos} />
            <SubHead text={t.tel_head} />
            <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '10px' }}>{t.tel_p}</p>
            {t.tel_items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px' }}>
                <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
                <span>{item}</span>
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
                <thead><tr>{[t.th_entidad, t.th_tipo, t.th_ventaja].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Revolut', 'Digital', 'IBAN europeo activo en 24h. El más usado por extranjeros para nóminas rápidas.'],
                    ['N26', 'Digital', 'IBAN europeo. App excelente, sin comisiones de mantenimiento.'],
                    ['Poste Italiane', 'Tradicional', 'El más accesible para extranjeros en Italia. Cuentas BancoPosta desde €0/mes.'],
                    ['UniCredit', 'Tradicional', 'Banco más grande de Italia. Sucursales en toda Italia.'],
                    ['Intesa Sanpaolo', 'Tradicional', 'Segundo banco más grande. Muy usado para nóminas y alquileres.'],
                    ['Fineco Bank', 'Digital/Tradicional', 'Sin comisiones mensuales, buena app, muy popular entre jóvenes.'],
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
                    ['Universitaly', 'Pre-inscripción universitaria y visa de estudiante', 'Antes de volar — trámite obligatorio', 'universitaly.it', 'https://universitaly.it'],
                    ['Portale Immigrazione', 'Solicitar Permesso di Soggiorno', 'Primeros 8 días hábiles al llegar', 'portaleimmigrazione.it', 'https://portaleimmigrazione.it'],
                    ['Agenzia delle Entrate', 'Obtener Codice Fiscale', 'Semana 1 — antes de todo lo demás', 'agenziaentrate.gov.it', 'https://agenziaentrate.gov.it'],
                    ['SPID — Poste Italiane', 'Identidad digital para trámites online', 'Semana 1-2 al llegar', 'spid.gov.it', 'https://spid.gov.it'],
                    ['INPS', 'Seguridad social y contribuciones', 'Cuando empieces a trabajar', 'inps.it', 'https://inps.it'],
                    ['Indeed Italia', 'Búsqueda de empleo general', 'Desde semana 1', 'indeed.it', 'https://indeed.it'],
                    ['InfoJobs Italia', 'Empleo local italiano', 'Desde semana 1', 'infojobs.it', 'https://infojobs.it'],
                    ['LinkedIn Jobs', 'Empleos profesionales y networking', 'Desde mes 2-3', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                    ['Idealista', 'Búsqueda de vivienda #1 en Italia', 'Desde semana 1 — activa alertas', 'idealista.it', 'https://idealista.it'],
                    ['Immobiliare.it', 'Habitaciones y apartamentos compartidos', 'Desde semana 1', 'immobiliare.it', 'https://immobiliare.it'],
                    ['Bakeca.it', 'Habitaciones baratas y clasificados', 'Desde semana 1', 'bakeca.it', 'https://bakeca.it'],
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
            <div style={imageBanner('https://images.unsplash.com/photo-1594881497142-08fdfdfc4074?q=80&w=715&auto=format&fit=crop')} />
            <SubHead text={t.vivienda_costos_head} />
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_tipo_aloj, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Habitación compartida (Roma)', '€400 - €600'],
                    ['Habitación individual (Roma)', '€600 - €900'],
                    ['Habitación compartida (Milán)', '€450 - €700'],
                    ['Habitación individual (Milán)', '€700 - €1,000'],
                    ['Habitación compartida (Florencia)', '€350 - €550'],
                    ['Habitación compartida (Nápoles/Sur)', '€250 - €400'],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                      <td style={T.td(i)}>{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RedBox text={t.vivienda_red} />
            <SubHead text={t.vivienda_canales_head} />
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_canal, t.th_tipo, t.th_estrategia_col].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Idealista', 'Portal oficial #1', 'Activa alertas push — respondé en menos de 2 horas'],
                    ['Immobiliare.it', 'Portal oficial #2', 'Filtrá por stanze (habitaciones) compartidas'],
                    ['Bakeca.it', 'Clasificados', 'Habitaciones más baratas — revisá diario'],
                    ['Subito.it', 'Clasificados', 'Bueno para habitaciones en ciudades medianas'],
                    ['Grupos WhatsApp Latinos', 'Networking', 'Unite al grupo de tu país — Latinos en Roma, Latinos en Milán'],
                    ['Facebook Groups', 'Networking', '"Affitti Roma", "Stanze Milano" — grupos muy activos'],
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
            <HackBox text={t.vivienda_hack} />
          </Section>

          {/* EMPLEOS */}
          <Section id="empleos" emoji="🛠️" title={t.sec_empleos_title}>
            <div style={imageBanner('https://images.unsplash.com/photo-1553508978-314fe7d8cf77?q=80&w=765&auto=format&fit=crop')} />
            <Intro text={t.empleos_intro} />
            <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
              <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <em>{t.empleos_cv_quote}</em> {t.empleos_cv_end}
            </p>
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_h].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Hospitality', 'Cameriere / Barista / Aiuto Cucina', '€8.24 - €10'],
                    ['Cleaning / Housekeeping', 'Addetto Pulizie / Housekeeper', '€8.24 - €9'],
                    ['Retail', 'Commesso / Shop Assistant', '€8.24 - €10'],
                    ['Turismo', 'Guía turístico / Receptionist', '€9 - €12'],
                    ['Cuidado de personas', 'Badante / Care Assistant', '€9 - €13'],
                    ['Delivery', 'Rider / Corriere', '€8.50 - €11'],
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
            <HackBox text={t.empleos_hack} />
          </Section>

          {/* SALARIOS */}
          <Section id="salarios" emoji="📊" title={t.sec_salarios_title}>
            <Intro text={t.salarios_intro} />
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_puesto_sal, t.th_salario_h].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ['Cameriere / Floor Staff', '€8.24 - €10'],
                    ['Addetto Pulizie / Cleaner', '€8.24 - €9'],
                    ['Commesso / Shop Assistant', '€8.24 - €10'],
                    ['Barista / Bar Staff', '€8.50 - €11'],
                    ['Badante / Care Assistant', '€9 - €13'],
                    ['Rider / Delivery', '€8.50 - €11'],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                      <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[1]}</td>
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
                    ['Robo / Pérdida de Pasaporte', 'Denuncia en Commissariato más cercano + Contactar Embajada de tu país inmediatamente', '113 + Embajada'],
                    ['Estafa de Vivienda', 'No más pagos. Denunciar en Commissariato y reportar en grupos latinos', '113'],
                    ['Trabajo sin contrato (lavoro nero)', 'Denunciar en Ispettorato del Lavoro — es anónimo y gratuito', 'ispettorato.gov.it'],
                    ['Problemas con Permesso di Soggiorno', 'Ir a la Questura con toda la documentación + ricevuta original', 'portaleimmigrazione.it'],
                    ['Problemas con empleador', 'Contactar sindacato (CGIL, CISL, UIL) — servicio gratuito para trabajadores', 'cgil.it'],
                    ['Enfermedad / Urgencia médica', 'Ir al Pronto Soccorso (urgencias) más cercano con seguro médico', '118 / 112'],
                    ['Accidente laboral', 'Reportar al empleador + denunciar en INAIL inmediatamente', 'inail.it'],
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
            <div style={imageBanner('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=683&auto=format&fit=crop')} />
            <Intro text={t.matrix_intro} />
            <div style={T.wrap}>
              <table style={T.table}>
                <thead><tr>{[t.th_categoria, `${t.hero_title} 🇮🇹`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
            style={{ width: '100%', borderRadius: '10px', border: '1px solid #e5e7eb', padding: '12px', fontSize: '13px', resize: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', outline: 'none' }}
          />
          <button
            onClick={() => {
              if (!feedback.trim()) return
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Italia:\n\n' + feedback)}`, '_blank')
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