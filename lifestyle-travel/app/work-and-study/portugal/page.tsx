'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Portugal',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Medio',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '€1,880 - €5,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Medio',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'NIF antes de viajar — llega con ventaja y activa todo desde el día 1',
      'Universidades públicas desde €1,500/año — entre las más baratas de Europa',
      'Tres rutas disponibles: Estudiante, Nómada Digital o Trabajo Cualificado',
      'AIMA (residencia) gestionable en pocos meses con documentación correcta',
      'Comunidad latina creciente — grupos WhatsApp en Lisboa, Porto y Algarve',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Portugal ya no es el lugar donde llegas y regularizas sobre la marcha. El enfoque ahora es entrar con una estrategia definida — Estudiante, Nómada Digital o Perfil Cualificado. El NIF es la llave de todo: sin él no abres banco, no firmas contratos y no te integras al sistema.',
    rutas_title: 'Tres rutas disponibles en 2026:',
    rutas: [
      ['🎓 Visa de Estudiante', 'Estudiar en universidad o curso profesional. Hasta 20h/semana de trabajo.'],
      ['💻 Nómada Digital', 'Trabajar remotamente para empresa extranjera. Requiere €3,480/mes mínimo.'],
      ['🧠 Trabajo Cualificado', 'Contrato con empresa portuguesa en sectores como IT, ingeniería, marketing digital.'],
    ],
    autoridad_blue: '💱 Estándar de moneda (Portugal): primero EUR y al lado el equivalente en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'El NIF es el documento más importante en Portugal. Sin NIF no puedes abrir banco, firmar contrato ni trabajar. La jugada inteligente es sacarlo ANTES de viajar con un representante fiscal online (€90-150). Llegas con ventaja y activas todo desde el día 1.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Rutas Disponibles',
    estrategia_intro: 'Portugal tiene tres rutas migratorias viables en 2026. Elige la que corresponde a tu perfil y situación financiera antes de iniciar cualquier trámite.',
    ruta1_head: '🎓 Ruta 1: Visa de Estudiante',
    th_inst: 'Institución', th_nivel: 'Nivel', th_precio_anual: 'Precio anual', th_web: 'Website',
    ruta2_head: '💻 Ruta 2: Nómada Digital',
    nomada_ingresos: 'Ingresos mínimos:',
    nomada_ingresos_val: '€3,480/mes (4x salario mínimo portugués)',
    nomada_req: 'Requisitos:',
    nomada_req_val: 'Trabajo remoto demostrable + seguro médico + alojamiento en Portugal',
    nomada_hist: 'Historial:',
    nomada_hist_val: '3-6 meses de ingresos en extractos bancarios',
    ruta3_head: '🧠 Ruta 3: Trabajo Cualificado',
    cualificado_sectores: 'Sectores con más demanda:',
    cualificado_sectores_val: 'IT (developer, data analyst, cybersecurity), Ingeniería, Marketing digital, Finanzas, Multilingual roles (Google, Meta, empresas internacionales en Lisboa)',
    cualificado_req: 'Requisitos:',
    cualificado_req_val: 'Contrato laboral previo + experiencia demostrable + aplicación desde consulado',
    solvencia_red_label: '🔴 Solvencia Visa Estudiante:',
    solvencia_red_val: '~€11,040 (€920 salario mínimo × 12 meses)',
    capital_min_label: '🟢 Capital mínimo realista:',
    capital_min_val: '€4,000 – €6,000 (para moverte)',
    capital_sol_label: '✅ Capital sólido:',
    capital_sol_val: '€10,000+ (para aprobación y estabilidad)',
    estrategia_hack: 'Capital real = solvencia (€11,000) + alojamiento inicial + gastos administrativos (~€500-€800). Si no tienes €11,000 para la visa de estudiante, considera la ruta de nómada digital o trabajo cualificado — tienen requisitos diferentes.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Los cursos profesionales en Portugal son la entrada más económica al sistema universitario. Desde €1,880/año con formación teórica, talleres prácticos y prácticas opcionales. Al graduarte puedes optar a residencia por trabajo cualificado.',
    th_programa: 'Programa', th_institucion: 'Institución', th_precio: 'Precio',
    pre_blue: '🔵 Los cursos profesionales desde €1,880 son la ruta más económica para entrar legalmente a Portugal como estudiante. Formación teórica + prácticas opcionales. Al completar puedes aplicar a residencia por trabajo cualificado.',
    pre_hack: 'Los cursos profesionales en Imigrata son los más baratos de Portugal para internacionales. €1,880/año vs €6,000+ en universidades grandes. Misma visa de estudiante, mismo derecho a residencia.',
    sec_edu_title: 'Educación Superior',
    edu_intro: 'Portugal tiene universidades públicas entre las más baratas de Europa. La Universidade da Beira Interior y Évora son las más accesibles para internacionales. Programas disponibles en portugués (más barato) y en inglés (más caro pero más fácil).',
    th_idioma: 'Idioma',
    edu_blue: '💰 HACK UNIVERSIDADES PÚBLICAS: Universidades en Beira Interior, Évora y Algarve cobran desde €1,500/año. Un Máster de €2,000 en Portugal vs €15,000+ en Irlanda. Mismo título europeo reconocido internacionalmente.',
    edu_hack: 'Elige programas en inglés si tu portugués es básico — muchas universidades públicas ofrecen Masters completamente en inglés. Beira Interior y Algarve son las más baratas y tienen buenos programas en IT y Business.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Portugal tiene gastos administrativos adicionales que no siempre se mencionan. El más importante: el NIF con representante fiscal si no tienes amigos en Portugal. Sin NIF no puedes hacer nada.',
    th_concepto: 'Concepto', th_costo_eur: 'Costo (EUR)', th_usd: '≈ USD', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA (PORTUGAL): ~€11,040 basado en €920 salario mínimo × 12 meses. Sin este monto demostrable en extractos bancarios de los últimos 3-6 meses, la visa será rechazada.',
    gastos_hack: 'Capital mínimo realista = solvencia €11,000 + alojamiento inicial + gastos administrativos ~€600. Capital sólido = €10,000+. Si no llegas a ese número, considera la ruta de nómada digital (requiere €3,480/mes de ingresos) o trabajo cualificado.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En Portugal el NIF lo es todo. Es el primer trámite — antes incluso de abrir banco. Sin NIF no puedes firmar contratos, alquilar vivienda ni trabajar legalmente. La jugada inteligente es sacarlo antes de viajar.',
    nif_head: '1. NIF — Número de Identificação Fiscal',
    nif_pasos: [
      ['Opción A', 'Presencial en oficinas de Finanças al llegar (gratis, pero tarda)', null],
      ['Opción B', 'Online con representante fiscal antes de viajar (€90-150, 24-72 horas)', 'https://www.nifonline.pt'],
      ['Opción C', 'Servicios alternativos: e-residence.com o anchorless.io (€90-150)', 'https://anchorless.io'],
    ],
    aima_head: '2. AIMA — Agência para a Integração, Migrações e Asilo',
    aima_p: 'Una vez que tienes base legal (estudios, ingresos remotos o contrato), puedes iniciar el proceso de residencia ante AIMA. Costo aproximado €150-200.',
    aima_items: [
      ['Documentos necesarios: NIF + prueba de ruta elegida + NISS (si aplica) + comprobante de domicilio', null],
      ['Sitio oficial AIMA para residencia en Portugal', 'https://aima.gov.pt'],
      ['Portal de Finanças para gestión del NIF', 'https://www.portaldasfinancas.gov.pt'],
    ],
    aterrizaje_hack: 'Saca el NIF antes de viajar con representante fiscal online. Con NIF puedes abrir banco, aplicar a trabajos y firmar contratos desde tu primer día en Portugal. Sin NIF pierdes semanas en trámites que bloquean todo lo demás.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Sin NIF no puedes abrir cuenta bancaria tradicional en Portugal. Abre Revolut o Wise antes de viajar para tener IBAN inmediato. Cuando tengas NIF, abre ActivoBank — el favorito de los expatriados, sin comisiones.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Revolut o Wise antes de viajar. Con eso puedes recibir dinero, demostrar fondos y cubrir gastos desde el primer día mientras completas la apertura de banco local en Portugal. ActivoBank es el paso 2 cuando tengas NIF.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales obligatorios para tu proceso en Portugal. AIMA gestiona tu residencia. Portal das Finanças gestiona tu NIF. Sin estos dos activos no puedes avanzar.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'AIMA es el cuello de botella en Portugal — puede tardar meses. Inicia el proceso lo antes posible y ten todos los documentos listos antes de la cita. Quien llega preparado con NIF + documentación activa avanza el doble de rápido.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado inmobiliario en Lisboa y Porto es muy competitivo. Las habitaciones buenas se van rápido. El contrato de alquiler es NECESARIO para el proceso de AIMA — sin dirección registrada no puedes completar tu residencia.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal EUR', th_mes: 'Precio Mensual EUR',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de ver la propiedad. En Portugal existen muchas estafas en alquileres publicados en redes sociales. Nunca envíes dinero sin haber visitado la vivienda.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'En Lisboa y Porto las habitaciones se van muy rápido. Si ves un anuncio interesante, contacta inmediatamente y agenda visita ese mismo día. El primer interesado que visita el piso suele quedarse con la habitación. Activa alertas en Idealista antes de llegar.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Portugal tiene alta demanda en turismo, hostelería y tecnología. El inglés abre muchas puertas — especialmente en Lisboa donde están los call centers internacionales de Google, Meta y otras multinacionales.',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'Muchos restaurantes, cafés y hoteles prefieren contratar personas que se presenten directamente. Especialmente en zonas turísticas como',
    empleos_cv_b: 'Lisboa, Porto, Algarve y Cascais',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_mes: 'Salario/mes EUR', th_usd_mes: '≈ USD', th_canal_emp: 'Canal',
    empleos_hack: 'Lisboa tiene call centers internacionales de Google, Meta, Amazon y otras multinacionales que contratan hispanohablantes. Inglés + español puede darte acceso a €1,500-2,500/mes — mucho más que hospitality. Busca en LinkedIn "customer support Lisboa".',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Salarios en Portugal son más bajos que Irlanda o España, pero el costo de vida también es más bajo. Con €700-800/mes puedes cubrir renta + comida + transporte en ciudades secundarias.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Salario/mes EUR', th_usd_sal: '≈ USD/mes',
    salarios_blue: '💡 VENTAJA PORTUGAL: Costo de vida más bajo que España, Irlanda o Malta. Una habitación compartida en Évora o Braga cuesta €300-400/mes. Con €900/mes de salario en hospitality puedes vivir con comodidad fuera de Lisboa.',
    salarios_hack: 'Evita Lisboa y Porto si priorizas el ahorro. Ciudades como Évora, Braga, Faro o Coimbra tienen rentas 40-50% más baratas y menos competencia por trabajo. Misma visa, mismo acceso a AIMA, pero mucho menos gasto mensual.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Portugal requiere planificación antes de viajar — especialmente el NIF. Quien llega con NIF activo avanza el doble de rápido. Sin NIF, las primeras 2-3 semanas se van en trámites bloqueantes.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar curso + Carta de Aceptación + Seguro médico + NIF con representante fiscal online + Visa Tipo D', '2-3 meses antes'],
      ['Semana 1', 'SIM card + Abrir ActivoBank (con NIF ya activo) + Buscar habitación permanente', 'Día 1-7'],
      ['Semana 2-4', 'Contrato de alquiler firmado + Iniciar proceso AIMA + Buscar empleo activamente', 'Día 7-30'],
      ['Mes 2', 'NISS con empleador + Empezar a trabajar + Primer salario', 'Día 30-60'],
      ['Mes 3-4', 'AIMA aprobada + Residencia activa + Estabilizar ingresos', 'Día 60-120'],
    ],
    timeline_hack: 'El orden en Portugal es: NIF (antes de viajar) → Banco → Alquiler → AIMA → NISS → Trabajo. Cada paso desbloquea el siguiente. Sin NIF nada avanza. Con NIF listo desde antes de viajar, puedes estar empleable en 2-4 semanas.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Portugal no requiere espera de 90 días como Malta. Si llegas con NIF activo puedes estar trabajando en 2-4 semanas. El documento clave es el NIF — todo lo demás depende de él.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Visa activa (estudiante, nómada o cualificado)', 'NIF activo', 'NISS (Seguridad Social)', 'Contrato de trabajo o actividad registrada'],
    hito1_time: '👉 Tiempo real: 2-4 semanas (si ya tienes NIF)',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Contrato firmado', 'Alta en Seguridad Social (NISS)', 'Registro en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 3-5 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~2-4 semanas (con NIF listo)',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~1-2 meses desde llegada',
    salario1_hack: 'Sin NIF pierdes semanas en trámites que bloquean todo lo demás. Con NIF antes de viajar, puedes estar empleable en 2-4 semanas. Esa diferencia puede ser de €800-1,100 de salario que pierdes o ganas dependiendo de si llegas preparado.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. En Portugal muchas oportunidades y soluciones aparecen antes en comunidades de networking que en portales oficiales.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '112 — Policía, Ambulancia, Bomberos'],
      ['AIMA (Residencia)', 'aima.gov.pt — Residencia y estatus migratorio'],
      ['Portal das Finanças', 'portaldasfinancas.gov.pt — NIF y trámites fiscales'],
      ['IEFP (Empleo)', 'iefponline.iefp.pt — Empleo y formación'],
      ['Comunidad L&T', 'Latinos en Lisboa, Porto y Algarve — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Portugal',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Portugal — links próximamente',
    crisis_hack: 'En Portugal muchas oportunidades aparecen primero en comunidades y networking. Únete a grupos de WhatsApp de latinos en Lisboa y Porto desde el día 1. Muchas habitaciones y trabajos se publican ahí antes que en portales oficiales.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Portugal como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Visa de Estudiante (Tipo D4)'],
      ['Rutas disponibles', 'Estudiante / Nómada Digital / Trabajo Cualificado'],
      ['Horas de trabajo (estudiante)', 'Hasta 20h/semana'],
      ['Solvencia obligatoria', '~€11,040 (€920 × 12 meses)'],
      ['Costo promedio curso', '€1,880 – €5,000/año'],
      ['Residencia', 'AIMA (€150-200)'],
      ['Renta cuarto compartido', '€480 – €720/mes'],
      ['Empleos más comunes', 'Hospitality, Turismo, Retail, IT (Lisboa)'],
      ['Salario promedio entrada', '€750 – €1,400/mes'],
      ['Tiempo hasta primer trabajo', '2-4 semanas (con NIF listo)'],
      ['Tiempo hasta primer cobro', '1-2 meses desde llegada'],
      ['Documento clave', 'NIF — obtener antes de viajar'],
      ['Idioma', 'Portugués (inglés en multinacionales)'],
      ['Camino a residencia', 'AIMA → Residencia Permanente (5 años)'],
      ['Nivel de dificultad', 'Medio'],
      ['Mejores ciudades', 'Lisboa, Porto, Algarve, Braga'],
      ['Ventaja única', 'Universidades más baratas de Europa + ruta nómada digital'],
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
    hero_title: 'Portugal',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Médio',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '€1.880 - €5.000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Médio',
    included_title: 'O que inclui o Blueprint',
    included: [
      'NIF antes de viajar — chegue com vantagem e ative tudo desde o dia 1',
      'Universidades públicas a partir de €1.500/ano — entre as mais baratas da Europa',
      'Três rotas disponíveis: Estudante, Nômade Digital ou Trabalho Qualificado',
      'AIMA (residência) gerenciável em poucos meses com documentação correta',
      'Comunidade latina crescente — grupos WhatsApp em Lisboa, Porto e Algarve',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'Portugal não é mais o lugar onde você chega e regulariza enquanto vai. O foco agora é entrar com uma estratégia definida — Estudante, Nômade Digital ou Perfil Qualificado. O NIF é a chave de tudo: sem ele você não abre banco, não assina contratos e não se integra ao sistema.',
    rutas_title: 'Três rotas disponíveis em 2026:',
    rutas: [
      ['🎓 Visto de Estudante', 'Estudar em universidade ou curso profissional. Até 20h/semana de trabalho.'],
      ['💻 Nômade Digital', 'Trabalhar remotamente para empresa estrangeira. Requer €3.480/mês mínimo.'],
      ['🧠 Trabalho Qualificado', 'Contrato com empresa portuguesa em setores como TI, engenharia, marketing digital.'],
    ],
    autoridad_blue: '💱 Padrão de moeda (Portugal): primeiro EUR e ao lado o equivalente em USD. Exemplo: €200 → $230 USD (usando referência 1 EUR ≈ $1,15 USD).',
    autoridad_hack: 'O NIF é o documento mais importante em Portugal. Sem NIF você não pode abrir banco, assinar contrato nem trabalhar. A jogada inteligente é obtê-lo ANTES de viajar com um representante fiscal online (€90-150). Você chega com vantagem e ativa tudo desde o dia 1.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Rotas Disponíveis',
    estrategia_intro: 'Portugal tem três rotas migratórias viáveis em 2026. Escolha a que corresponde ao seu perfil e situação financeira antes de iniciar qualquer procedimento.',
    ruta1_head: '🎓 Rota 1: Visto de Estudante',
    th_inst: 'Instituição', th_nivel: 'Nível', th_precio_anual: 'Preço anual', th_web: 'Website',
    ruta2_head: '💻 Rota 2: Nômade Digital',
    nomada_ingresos: 'Renda mínima:',
    nomada_ingresos_val: '€3.480/mês (4x salário mínimo português)',
    nomada_req: 'Requisitos:',
    nomada_req_val: 'Trabalho remoto demonstrável + seguro médico + alojamento em Portugal',
    nomada_hist: 'Histórico:',
    nomada_hist_val: '3-6 meses de renda em extratos bancários',
    ruta3_head: '🧠 Rota 3: Trabalho Qualificado',
    cualificado_sectores: 'Setores com mais demanda:',
    cualificado_sectores_val: 'TI (developer, data analyst, cybersecurity), Engenharia, Marketing digital, Finanças, Funções multilíngues (Google, Meta, empresas internacionais em Lisboa)',
    cualificado_req: 'Requisitos:',
    cualificado_req_val: 'Contrato de trabalho prévio + experiência demonstrável + candidatura a partir do consulado',
    solvencia_red_label: '🔴 Solvência Visto de Estudante:',
    solvencia_red_val: '~€11.040 (€920 salário mínimo × 12 meses)',
    capital_min_label: '🟢 Capital mínimo realista:',
    capital_min_val: '€4.000 – €6.000 (para se mover)',
    capital_sol_label: '✅ Capital sólido:',
    capital_sol_val: '€10.000+ (para aprovação e estabilidade)',
    estrategia_hack: 'Capital real = solvência (€11.000) + alojamento inicial + despesas administrativas (~€500-€800). Se você não tem €11.000 para o visto de estudante, considere a rota de nômade digital ou trabalho qualificado — têm requisitos diferentes.',
    sec_pre_title: 'Pré-Fundações & Pré-Carreiras',
    pre_intro: 'Os cursos profissionais em Portugal são a entrada mais econômica no sistema universitário. A partir de €1.880/ano com formação teórica, workshops práticos e estágios opcionais. Ao se formar você pode optar pela residência por trabalho qualificado.',
    th_programa: 'Programa', th_institucion: 'Instituição', th_precio: 'Preço',
    pre_blue: '🔵 Os cursos profissionais a partir de €1.880 são a rota mais econômica para entrar legalmente em Portugal como estudante. Formação teórica + estágios opcionais. Ao concluir você pode solicitar residência por trabalho qualificado.',
    pre_hack: 'Os cursos profissionais da Imigrata são os mais baratos de Portugal para internacionais. €1.880/ano vs €6.000+ em universidades grandes. Mesmo visto de estudante, mesmo direito à residência.',
    sec_edu_title: 'Educação Superior',
    edu_intro: 'Portugal tem universidades públicas entre as mais baratas da Europa. A Universidade da Beira Interior e Évora são as mais acessíveis para internacionais. Programas disponíveis em português (mais barato) e em inglês (mais caro mas mais fácil).',
    th_idioma: 'Idioma',
    edu_blue: '💰 HACK UNIVERSIDADES PÚBLICAS: Universidades em Beira Interior, Évora e Algarve cobram a partir de €1.500/ano. Um Mestrado de €2.000 em Portugal vs €15.000+ na Irlanda. Mesmo título europeu reconhecido internacionalmente.',
    edu_hack: 'Escolha programas em inglês se seu português é básico — muitas universidades públicas oferecem Mestrados completamente em inglês. Beira Interior e Algarve são as mais baratas e têm bons programas em TI e Business.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Portugal tem despesas administrativas adicionais que nem sempre são mencionadas. A mais importante: o NIF com representante fiscal se você não tem amigos em Portugal. Sem NIF você não pode fazer nada.',
    th_concepto: 'Conceito', th_costo_eur: 'Custo (EUR)', th_usd: '≈ USD', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA (PORTUGAL): ~€11.040 baseado em €920 salário mínimo × 12 meses. Sem esse valor demonstrável em extratos bancários dos últimos 3-6 meses, o visto será rejeitado.',
    gastos_hack: 'Capital mínimo realista = solvência €11.000 + alojamento inicial + despesas administrativas ~€600. Capital sólido = €10.000+. Se não chegar a esse número, considere a rota de nômade digital (requer €3.480/mês de renda) ou trabalho qualificado.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Em Portugal o NIF é tudo. É o primeiro procedimento — antes mesmo de abrir banco. Sem NIF você não pode assinar contratos, alugar moradia nem trabalhar legalmente. A jogada inteligente é obtê-lo antes de viajar.',
    nif_head: '1. NIF — Número de Identificação Fiscal',
    nif_pasos: [
      ['Opção A', 'Presencial nos escritórios de Finanças ao chegar (gratuito, mas demora)', null],
      ['Opção B', 'Online com representante fiscal antes de viajar (€90-150, 24-72 horas)', 'https://www.nifonline.pt'],
      ['Opção C', 'Serviços alternativos: e-residence.com ou anchorless.io (€90-150)', 'https://anchorless.io'],
    ],
    aima_head: '2. AIMA — Agência para a Integração, Migrações e Asilo',
    aima_p: 'Uma vez que você tem base legal (estudos, rendimentos remotos ou contrato), pode iniciar o processo de residência perante a AIMA. Custo aproximado €150-200.',
    aima_items: [
      ['Documentos necessários: NIF + prova da rota escolhida + NISS (se aplicável) + comprovante de domicílio', null],
      ['Site oficial AIMA para residência em Portugal', 'https://aima.gov.pt'],
      ['Portal das Finanças para gestão do NIF', 'https://www.portaldasfinancas.gov.pt'],
    ],
    aterrizaje_hack: 'Obtenha o NIF antes de viajar com representante fiscal online. Com NIF você pode abrir banco, candidatar-se a empregos e assinar contratos desde seu primeiro dia em Portugal. Sem NIF você perde semanas em procedimentos que bloqueiam tudo o mais.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Sem NIF você não pode abrir conta bancária tradicional em Portugal. Abra Revolut ou Wise antes de viajar para ter IBAN imediato. Quando tiver NIF, abra o ActivoBank — o favorito dos expatriados, sem comissões.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra Revolut ou Wise antes de viajar. Com isso você pode receber dinheiro, demonstrar fundos e cobrir despesas desde o primeiro dia enquanto conclui a abertura do banco local em Portugal. ActivoBank é o passo 2 quando tiver NIF.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais obrigatórios para seu processo em Portugal. AIMA gerencia sua residência. Portal das Finanças gerencia seu NIF. Sem esses dois ativos você não pode avançar.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'AIMA é o gargalo em Portugal — pode demorar meses. Inicie o processo o mais rápido possível e tenha todos os documentos prontos antes da consulta. Quem chega preparado com NIF + documentação ativa avança o dobro de rápido.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário em Lisboa e Porto é muito competitivo. Os bons quartos vão rápido. O contrato de aluguel é NECESSÁRIO para o processo da AIMA — sem endereço registrado você não pode completar sua residência.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal EUR', th_mes: 'Preço Mensal EUR',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de ver a propriedade. Em Portugal existem muitos golpes em aluguéis publicados em redes sociais. Nunca envie dinheiro sem ter visitado a moradia.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Em Lisboa e Porto os quartos vão muito rápido. Se ver um anúncio interessante, entre em contato imediatamente e agende visita nesse mesmo dia. O primeiro interessado que visita o apartamento geralmente fica com o quarto. Ative alertas no Idealista antes de chegar.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Portugal tem alta demanda em turismo, hotelaria e tecnologia. O inglês abre muitas portas — especialmente em Lisboa onde estão os call centers internacionais do Google, Meta e outras multinacionais.',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'Muitos restaurantes, cafés e hotéis preferem contratar pessoas que se apresentam diretamente. Especialmente em zonas turísticas como',
    empleos_cv_b: 'Lisboa, Porto, Algarve e Cascais',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_mes: 'Salário/mês EUR', th_usd_mes: '≈ USD', th_canal_emp: 'Canal',
    empleos_hack: 'Lisboa tem call centers internacionais do Google, Meta, Amazon e outras multinacionais que contratam hispanofalantes. Inglês + espanhol pode te dar acesso a €1.500-2.500/mês — muito mais que hotelaria. Busque no LinkedIn "customer support Lisboa".',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Salários em Portugal são mais baixos que Irlanda ou Espanha, mas o custo de vida também é mais baixo. Com €700-800/mês você pode cobrir aluguel + comida + transporte em cidades secundárias.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Salário/mês EUR', th_usd_sal: '≈ USD/mês',
    salarios_blue: '💡 VANTAGEM PORTUGAL: Custo de vida mais baixo que Espanha, Irlanda ou Malta. Um quarto compartilhado em Évora ou Braga custa €300-400/mês. Com €900/mês de salário em hotelaria você pode viver confortavelmente fora de Lisboa.',
    salarios_hack: 'Evite Lisboa e Porto se prioriza poupança. Cidades como Évora, Braga, Faro ou Coimbra têm aluguéis 40-50% mais baratos e menos concorrência por trabalho. Mesmo visto, mesmo acesso à AIMA, mas muito menos gasto mensal.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Portugal requer planejamento antes de viajar — especialmente o NIF. Quem chega com NIF ativo avança o dobro de rápido. Sem NIF, as primeiras 2-3 semanas se vão em procedimentos bloqueantes.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar curso + Carta de Aceitação + Seguro médico + NIF com representante fiscal online + Visto Tipo D', '2-3 meses antes'],
      ['Semana 1', 'SIM card + Abrir ActivoBank (com NIF já ativo) + Buscar quarto permanente', 'Dia 1-7'],
      ['Semana 2-4', 'Contrato de aluguel assinado + Iniciar processo AIMA + Buscar emprego ativamente', 'Dia 7-30'],
      ['Mês 2', 'NISS com empregador + Começar a trabalhar + Primeiro salário', 'Dia 30-60'],
      ['Mês 3-4', 'AIMA aprovada + Residência ativa + Estabilizar renda', 'Dia 60-120'],
    ],
    timeline_hack: 'A ordem em Portugal é: NIF (antes de viajar) → Banco → Aluguel → AIMA → NISS → Trabalho. Cada passo desbloqueia o próximo. Sem NIF nada avança. Com NIF pronto antes de viajar, você pode estar empregável em 2-4 semanas.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'Portugal não requer espera de 90 dias como Malta. Se chegar com NIF ativo pode estar trabalhando em 2-4 semanas. O documento chave é o NIF — tudo o mais depende dele.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Visto ativo (estudante, nômade ou qualificado)', 'NIF ativo', 'NISS (Seguridade Social)', 'Contrato de trabalho ou atividade registrada'],
    hito1_time: '👉 Tempo real: 2-4 semanas (se já tiver NIF)',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Contrato assinado', 'Registro na Seguridade Social (NISS)', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 3-5 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~2-4 semanas (com NIF pronto)',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~1-2 meses desde a chegada',
    salario1_hack: 'Sem NIF você perde semanas em procedimentos que bloqueiam tudo o mais. Com NIF antes de viajar, você pode estar empregável em 2-4 semanas. Essa diferença pode ser de €800-1.100 de salário que você perde ou ganha dependendo de chegar preparado.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. Em Portugal muitas oportunidades e soluções aparecem antes em comunidades de networking do que em portais oficiais.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '112 — Polícia, Ambulância, Bombeiros'],
      ['AIMA (Residência)', 'aima.gov.pt — Residência e status migratório'],
      ['Portal das Finanças', 'portaldasfinancas.gov.pt — NIF e trâmites fiscais'],
      ['IEFP (Emprego)', 'iefponline.iefp.pt — Emprego e formação'],
      ['Comunidade L&T', 'Latinos em Lisboa, Porto e Algarve — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina em Portugal',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos em Portugal — links em breve',
    crisis_hack: 'Em Portugal muitas oportunidades aparecem primeiro em comunidades e networking. Entre em grupos de WhatsApp de latinos em Lisboa e Porto desde o dia 1. Muitos quartos e trabalhos são publicados lá antes dos portais oficiais.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo de Portugal como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Visto de Estudante (Tipo D4)'],
      ['Rotas disponíveis', 'Estudante / Nômade Digital / Trabalho Qualificado'],
      ['Horas de trabalho (estudante)', 'Até 20h/semana'],
      ['Solvência obrigatória', '~€11.040 (€920 × 12 meses)'],
      ['Custo médio curso', '€1.880 – €5.000/ano'],
      ['Residência', 'AIMA (€150-200)'],
      ['Aluguel quarto compartilhado', '€480 – €720/mês'],
      ['Empregos mais comuns', 'Hotelaria, Turismo, Varejo, TI (Lisboa)'],
      ['Salário médio de entrada', '€750 – €1.400/mês'],
      ['Tempo até primeiro trabalho', '2-4 semanas (com NIF pronto)'],
      ['Tempo até primeiro pagamento', '1-2 meses desde chegada'],
      ['Documento chave', 'NIF — obter antes de viajar'],
      ['Idioma', 'Português (inglês em multinacionais)'],
      ['Caminho para residência', 'AIMA → Residência Permanente (5 anos)'],
      ['Nível de dificuldade', 'Médio'],
      ['Melhores cidades', 'Lisboa, Porto, Algarve, Braga'],
      ['Vantagem única', 'Universidades mais baratas da Europa + rota nômade digital'],
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
    hero_title: 'Portugal',
    hero_sub: 'Europe · Work and Study',
    hero_badge: 'Medium',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '€1,880 - €5,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Medium',
    included_title: 'What the Blueprint Includes',
    included: [
      'NIF before traveling — arrive with advantage and activate everything from day 1',
      'Public universities from €1,500/year — among the cheapest in Europe',
      'Three routes available: Student, Digital Nomad or Skilled Work',
      'AIMA (residency) manageable in a few months with correct documentation',
      'Growing Latin community — WhatsApp groups in Lisbon, Porto and Algarve',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Portugal is no longer the place where you arrive and regularize as you go. The focus now is to enter with a defined strategy — Student, Digital Nomad or Skilled Profile. The NIF is the key to everything: without it you cannot open a bank account, sign contracts or integrate into the system.',
    rutas_title: 'Three routes available in 2026:',
    rutas: [
      ['🎓 Student Visa', 'Study at a university or professional course. Up to 20h/week of work.'],
      ['💻 Digital Nomad', 'Work remotely for a foreign company. Requires minimum €3,480/month.'],
      ['🧠 Skilled Work', 'Contract with a Portuguese company in sectors like IT, engineering, digital marketing.'],
    ],
    autoridad_blue: '💱 Currency standard (Portugal): EUR first with USD equivalent. Example: €200 → $230 USD (using reference 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'The NIF is the most important document in Portugal. Without NIF you cannot open a bank account, sign a contract or work. The smart move is to get it BEFORE traveling with an online tax representative (€90-150). You arrive with an advantage and activate everything from day 1.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: Available Routes',
    estrategia_intro: 'Portugal has three viable migration routes in 2026. Choose the one that matches your profile and financial situation before starting any procedure.',
    ruta1_head: '🎓 Route 1: Student Visa',
    th_inst: 'Institution', th_nivel: 'Level', th_precio_anual: 'Annual price', th_web: 'Website',
    ruta2_head: '💻 Route 2: Digital Nomad',
    nomada_ingresos: 'Minimum income:',
    nomada_ingresos_val: '€3,480/month (4x Portuguese minimum wage)',
    nomada_req: 'Requirements:',
    nomada_req_val: 'Demonstrable remote work + health insurance + accommodation in Portugal',
    nomada_hist: 'History:',
    nomada_hist_val: '3-6 months of income in bank statements',
    ruta3_head: '🧠 Route 3: Skilled Work',
    cualificado_sectores: 'Most in-demand sectors:',
    cualificado_sectores_val: 'IT (developer, data analyst, cybersecurity), Engineering, Digital marketing, Finance, Multilingual roles (Google, Meta, international companies in Lisbon)',
    cualificado_req: 'Requirements:',
    cualificado_req_val: 'Prior employment contract + demonstrable experience + application from consulate',
    solvencia_red_label: '🔴 Student Visa Funds:',
    solvencia_red_val: '~€11,040 (€920 minimum wage × 12 months)',
    capital_min_label: '🟢 Realistic minimum capital:',
    capital_min_val: '€4,000 – €6,000 (to get started)',
    capital_sol_label: '✅ Solid capital:',
    capital_sol_val: '€10,000+ (for approval and stability)',
    estrategia_hack: 'Real capital = funds (€11,000) + initial accommodation + administrative costs (~€500-€800). If you don\'t have €11,000 for the student visa, consider the digital nomad or skilled work route — they have different requirements.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Professional courses in Portugal are the most affordable entry into the university system. From €1,880/year with theoretical training, practical workshops and optional internships. Upon graduating you can apply for residency through skilled work.',
    th_programa: 'Program', th_institucion: 'Institution', th_precio: 'Price',
    pre_blue: '🔵 Professional courses from €1,880 are the most affordable route to legally enter Portugal as a student. Theoretical training + optional internships. Upon completion you can apply for residency through skilled work.',
    pre_hack: 'Imigrata\'s professional courses are the cheapest in Portugal for internationals. €1,880/year vs €6,000+ at large universities. Same student visa, same right to residency.',
    sec_edu_title: 'Higher Education',
    edu_intro: 'Portugal has public universities among the cheapest in Europe. Universidade da Beira Interior and Évora are the most accessible for internationals. Programs available in Portuguese (cheaper) and English (more expensive but easier).',
    th_idioma: 'Language',
    edu_blue: '💰 PUBLIC UNIVERSITY HACK: Universities in Beira Interior, Évora and Algarve charge from €1,500/year. A Master\'s for €2,000 in Portugal vs €15,000+ in Ireland. Same internationally recognized European degree.',
    edu_hack: 'Choose English-language programs if your Portuguese is basic — many public universities offer Master\'s programs completely in English. Beira Interior and Algarve are the cheapest and have good IT and Business programs.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'Portugal has additional administrative costs that aren\'t always mentioned. The most important: the NIF with a tax representative if you have no contacts in Portugal. Without NIF you can\'t do anything.',
    th_concepto: 'Item', th_costo_eur: 'Cost (EUR)', th_usd: '≈ USD', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS (PORTUGAL): ~€11,040 based on €920 minimum wage × 12 months. Without this demonstrable amount in bank statements from the last 3-6 months, the visa will be rejected.',
    gastos_hack: 'Realistic minimum capital = funds €11,000 + initial accommodation + administrative costs ~€600. Solid capital = €10,000+. If you can\'t reach that number, consider the digital nomad route (requires €3,480/month income) or skilled work.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In Portugal the NIF is everything. It\'s the first procedure — even before opening a bank account. Without NIF you cannot sign contracts, rent housing or work legally. The smart move is to get it before traveling.',
    nif_head: '1. NIF — Número de Identificação Fiscal',
    nif_pasos: [
      ['Option A', 'In-person at Finanças offices upon arrival (free, but takes time)', null],
      ['Option B', 'Online with tax representative before traveling (€90-150, 24-72 hours)', 'https://www.nifonline.pt'],
      ['Option C', 'Alternative services: e-residence.com or anchorless.io (€90-150)', 'https://anchorless.io'],
    ],
    aima_head: '2. AIMA — Agency for Integration, Migration and Asylum',
    aima_p: 'Once you have a legal basis (studies, remote income or contract), you can start the residency process with AIMA. Approximate cost €150-200.',
    aima_items: [
      ['Required documents: NIF + proof of chosen route + NISS (if applicable) + proof of address', null],
      ['Official AIMA website for residency in Portugal', 'https://aima.gov.pt'],
      ['Finanças portal for NIF management', 'https://www.portaldasfinancas.gov.pt'],
    ],
    aterrizaje_hack: 'Get the NIF before traveling with an online tax representative. With NIF you can open a bank account, apply for jobs and sign contracts from your first day in Portugal. Without NIF you lose weeks on procedures that block everything else.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'Without NIF you cannot open a traditional bank account in Portugal. Open Revolut or Wise before traveling for immediate IBAN. When you have NIF, open ActivoBank — the expat favorite, no fees.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Revolut or Wise before traveling. With that you can receive money, demonstrate funds and cover expenses from day one while completing the local bank account opening in Portugal. ActivoBank is step 2 when you have NIF.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Mandatory official portals for your process in Portugal. AIMA manages your residency. Portal das Finanças manages your NIF. Without these two active you cannot move forward.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'AIMA is the bottleneck in Portugal — it can take months. Start the process as soon as possible and have all documents ready before the appointment. Those who arrive prepared with NIF + active documentation advance twice as fast.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'The real estate market in Lisbon and Porto is very competitive. Good rooms go fast. The rental contract is NECESSARY for the AIMA process — without a registered address you cannot complete your residency.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price EUR', th_mes: 'Monthly Price EUR',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before seeing the property. In Portugal there are many scams in rentals published on social media. Never send money without having visited the housing.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'In Lisbon and Porto rooms go very fast. If you see an interesting listing, contact immediately and schedule a visit that same day. The first interested person who visits the apartment usually gets the room. Activate alerts on Idealista before arriving.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'Portugal has high demand in tourism, hospitality and technology. English opens many doors — especially in Lisbon where international call centers for Google, Meta and other multinationals are located.',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'Many restaurants, cafés and hotels prefer to hire people who present themselves directly. Especially in tourist areas like',
    empleos_cv_b: 'Lisbon, Porto, Algarve and Cascais',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_mes: 'Salary/month EUR', th_usd_mes: '≈ USD', th_canal_emp: 'Channel',
    empleos_hack: 'Lisbon has international call centers from Google, Meta, Amazon and other multinationals that hire Spanish speakers. English + Spanish can give you access to €1,500-2,500/month — much more than hospitality. Search LinkedIn for "customer support Lisboa".',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Salaries in Portugal are lower than Ireland or Spain, but the cost of living is also lower. With €700-800/month you can cover rent + food + transport in secondary cities.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Salary/month EUR', th_usd_sal: '≈ USD/month',
    salarios_blue: '💡 PORTUGAL ADVANTAGE: Lower cost of living than Spain, Ireland or Malta. A shared room in Évora or Braga costs €300-400/month. With €900/month salary in hospitality you can live comfortably outside Lisbon.',
    salarios_hack: 'Avoid Lisbon and Porto if you prioritize saving. Cities like Évora, Braga, Faro or Coimbra have rents 40-50% cheaper and less job competition. Same visa, same access to AIMA, but much less monthly spending.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Portugal requires planning before traveling — especially the NIF. Those who arrive with an active NIF advance twice as fast. Without NIF, the first 2-3 weeks are lost in blocking procedures.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay course + Acceptance Letter + Health insurance + NIF with online tax representative + Type D Visa', '2-3 months before'],
      ['Week 1', 'SIM card + Open ActivoBank (with NIF already active) + Find permanent room', 'Day 1-7'],
      ['Week 2-4', 'Signed rental contract + Start AIMA process + Actively look for employment', 'Day 7-30'],
      ['Month 2', 'NISS with employer + Start working + First salary', 'Day 30-60'],
      ['Month 3-4', 'AIMA approved + Active residency + Stabilize income', 'Day 60-120'],
    ],
    timeline_hack: 'The order in Portugal is: NIF (before traveling) → Bank → Rental → AIMA → NISS → Work. Each step unlocks the next. Without NIF nothing advances. With NIF ready before traveling, you can be employable in 2-4 weeks.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'Portugal doesn\'t require a 90-day wait like Malta. If you arrive with an active NIF you can be working in 2-4 weeks. The key document is the NIF — everything else depends on it.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active visa (student, nomad or qualified)', 'Active NIF', 'NISS (Social Security)', 'Employment contract or registered activity'],
    hito1_time: '👉 Real timeline: 2-4 weeks (if you already have NIF)',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Contract signed', 'Social Security registration (NISS)', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 3-5 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~2-4 weeks (with NIF ready)',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~1-2 months from arrival',
    salario1_hack: 'Without NIF you lose weeks in procedures that block everything else. With NIF before traveling, you can be employable in 2-4 weeks. That difference can be €800-1,100 in salary you lose or gain depending on whether you arrive prepared.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. In Portugal many opportunities and solutions appear first in networking communities rather than official portals.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '112 — Police, Ambulance, Fire'],
      ['AIMA (Residency)', 'aima.gov.pt — Residency and migration status'],
      ['Portal das Finanças', 'portaldasfinancas.gov.pt — NIF and tax procedures'],
      ['IEFP (Employment)', 'iefponline.iefp.pt — Employment and training'],
      ['L&T Community', 'Latinos in Lisbon, Porto and Algarve — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Portugal',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Portugal — links coming soon',
    crisis_hack: 'In Portugal many opportunities appear first in communities and networking. Join WhatsApp groups of Latinos in Lisbon and Porto from day 1. Many rooms and jobs are posted there before official portals.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Portugal as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa (Type D4)'],
      ['Available routes', 'Student / Digital Nomad / Skilled Work'],
      ['Work hours (student)', 'Up to 20h/week'],
      ['Mandatory funds', '~€11,040 (€920 × 12 months)'],
      ['Average course cost', '€1,880 – €5,000/year'],
      ['Residency', 'AIMA (€150-200)'],
      ['Shared room rent', '€480 – €720/month'],
      ['Most common jobs', 'Hospitality, Tourism, Retail, IT (Lisbon)'],
      ['Average entry salary', '€750 – €1,400/month'],
      ['Time to first job', '2-4 weeks (with NIF ready)'],
      ['Time to first payment', '1-2 months from arrival'],
      ['Key document', 'NIF — get before traveling'],
      ['Language', 'Portuguese (English at multinationals)'],
      ['Path to residency', 'AIMA → Permanent Residency (5 years)'],
      ['Difficulty level', 'Medium'],
      ['Best cities', 'Lisbon, Porto, Algarve, Braga'],
      ['Unique advantage', 'Cheapest universities in Europe + digital nomad route'],
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

export default function Portugal() {
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇵🇹</div>
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581887469434-5dacb946ab56?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e' }}>
            <strong>{t.rutas_title}</strong>
          </p>
          {t.rutas.map(([title, desc], i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px' }}>
              <span style={{ color: '#e8572a', flexShrink: 0 }}>•</span>
              <span style={{ color: '#1a1a2e' }}><strong>{title}:</strong> {desc}</span>
            </div>
          ))}
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
          <SubHead text={t.ruta1_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_nivel, t.th_precio_anual, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidade da Beira Interior', 'Bachelor / Master', '€1,500 – €3,000', 'ubi.pt', 'https://www.ubi.pt'],
                  ['Universidade de Évora', 'Bachelor / Master', '€2,000 – €3,500', 'uevora.pt', 'https://www.uevora.pt'],
                  ['Universidade do Algarve', 'Bachelor / Master', '€2,000 – €4,000', 'ualg.pt', 'https://www.ualg.pt'],
                  ['Instituto Politécnico de Leiria', 'Bachelor / Master', '€2,500 – €4,000', 'ipleiria.pt', 'https://www.ipleiria.pt'],
                  ['Universidade do Porto', 'Bachelor / Master', '€3,000 – €6,000', 'up.pt', 'https://www.up.pt'],
                  ['Universidade de Lisboa', 'Bachelor / Master', '€3,500 – €7,000', 'ulisboa.pt', 'https://www.ulisboa.pt'],
                  ['NOVA University Lisbon', 'Bachelor / Master', '€4,000 – €8,000', 'unl.pt', 'https://www.unl.pt'],
                  ['Cursos Profesionales (Imigrata)', 'Formação profissional', 'Desde €1,880/ano', 'imigrata.com', 'https://imigrata.com/en/portugal/profcourses'],
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
          <SubHead text={t.ruta2_head} />
          <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#0369a1', lineHeight: '1.7' }}>
              <strong>{t.nomada_ingresos}</strong> {t.nomada_ingresos_val}<br />
              <strong>{t.nomada_req}</strong> {t.nomada_req_val}<br />
              <strong>{t.nomada_hist}</strong> {t.nomada_hist_val}
            </p>
          </div>
          <SubHead text={t.ruta3_head} />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginTop: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#166534', lineHeight: '1.7' }}>
              <strong>{t.cualificado_sectores}</strong> {t.cualificado_sectores_val}<br />
              <strong>{t.cualificado_req}</strong> {t.cualificado_req_val}
            </p>
          </div>
          <div style={{ marginTop: '14px', backgroundColor: '#fef3c7', borderRadius: '8px', padding: '12px', border: '1px solid #fbbf24' }}>
            <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6', color: '#1a1a2e' }}>
              <strong>{t.solvencia_red_label}</strong> {t.solvencia_red_val}<br />
              <strong>{t.capital_min_label}</strong> {t.capital_min_val}<br />
              <strong>{t.capital_sol_label}</strong> {t.capital_sol_val}
            </p>
          </div>
          <HackBox text={t.estrategia_hack} />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title={t.sec_pre_title}>
          <Intro text={t.pre_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_programa, t.th_institucion, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cursos Profesionales (1 año)', 'Imigrata', 'Desde €1,880', 'imigrata.com', 'https://imigrata.com/en/portugal/profcourses'],
                  ['International Foundation', 'Universidade do Porto', '€3,000 – €4,000', 'up.pt', 'https://www.up.pt'],
                  ['Foundation Program', 'Universidade de Lisboa', '€3,500 – €5,000', 'ulisboa.pt', 'https://www.ulisboa.pt'],
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
              <thead><tr>{[t.th_inst, t.th_nivel, t.th_precio_anual, t.th_idioma, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Universidade da Beira Interior', 'Bachelor / Master', '€1,500 – €3,000', 'PT / EN', 'ubi.pt', 'https://www.ubi.pt'],
                  ['Universidade de Évora', 'Bachelor / Master', '€2,000 – €3,500', 'PT / EN', 'uevora.pt', 'https://www.uevora.pt'],
                  ['Universidade do Algarve', 'Bachelor / Master', '€2,000 – €4,000', 'PT / EN', 'ualg.pt', 'https://www.ualg.pt'],
                  ['Instituto Politécnico de Leiria', 'Bachelor / Master', '€2,500 – €4,000', 'PT / EN', 'ipleiria.pt', 'https://www.ipleiria.pt'],
                  ['Universidade do Porto', 'Bachelor / Master', '€3,000 – €6,000', 'PT / EN', 'up.pt', 'https://www.up.pt'],
                  ['Universidade de Lisboa', 'Bachelor / Master', '€3,500 – €7,000', 'PT / EN', 'ulisboa.pt', 'https://www.ulisboa.pt'],
                  ['NOVA University Lisbon', 'Bachelor / Master', '€4,000 – €8,000', 'EN', 'unl.pt', 'https://www.unl.pt'],
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
              <thead><tr>{[t.th_concepto, t.th_costo_eur, t.th_usd, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico (cobertura mínima €30,000)', '€80 – €150', '$92 – $173', '✅ Sí'],
                  ['Tasa de visa en consulado', '€80 – €120', '$92 – $138', '✅ Sí'],
                  ['Traducciones y apostillas de documentos', '€50 – €150', '$58 – $173', '✅ Sí'],
                  ['Representante fiscal para NIF', '€90 – €150', '$104 – $173', '✅ Sí (si no tienes contacto en PT)'],
                  ['Depósito inicial cuenta bancaria', '€100 – €250', '$115 – $288', '✅ Sí'],
                  ['Solvencia económica (Visa Estudiante)', '€11,040', '$12,696', '✅ Obligatorio visa'],
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
          <SubHead text={t.nif_head} />
          {t.nif_pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6', color: '#1a1a2e' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.aima_head} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '10px' }}>{t.aima_p}</p>
          {t.aima_items.map((item, i) => (
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
                  ['Revolut / Wise', 'Digital', 'Abre antes de viajar. IBAN europeo inmediato para demostrar fondos y cubrir gastos desde día 1.', 'revolut.com', 'https://revolut.com'],
                  ['ActivoBank', 'Digital/Físico', 'El favorito de expatriados en Portugal. Sin comisiones mensuales. Requiere NIF.', 'activobank.pt', 'https://www.activobank.pt'],
                  ['Millennium BCP', 'Tradicional', 'El banco más grande de Portugal. Muy usado por inmigración y empresas.', 'millenniumbcp.pt', 'https://www.millenniumbcp.pt'],
                  ['Santander Totta', 'Tradicional', 'Gran red de cajeros y sucursales en todo Portugal.', 'santander.pt', 'https://www.santander.pt'],
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
                  ['Portal das Finanças (NIF)', 'Gestión del NIF fiscal', 'Antes de viajar o semana 1', 'portaldasfinancas.gov.pt', 'https://www.portaldasfinancas.gov.pt'],
                  ['AIMA (Residencia)', 'Residencia legal en Portugal', 'Cuando tengas base legal activa', 'aima.gov.pt', 'https://aima.gov.pt'],
                  ['IEFP (Empleo)', 'Registrar perfil profesional y empleo', 'Semana 2-3', 'iefponline.iefp.pt', 'https://iefponline.iefp.pt'],
                  ['Portal de Visas', 'Visa de estudiante y trámites consulares', 'Antes de viajar', 'vistos.mne.gov.pt', 'https://vistos.mne.gov.pt'],
                  ['Net-Empregos', 'Portal de empleo más grande de Portugal', 'Desde semana 1', 'net-empregos.com', 'https://net-empregos.com'],
                  ['Indeed Portugal', 'Vacantes de todo tipo', 'Desde semana 1', 'indeed.pt', 'https://indeed.pt'],
                  ['OLX Empregos', 'Trabajos rápidos o temporales', 'Desde semana 1', 'olx.pt', 'https://olx.pt'],
                  ['Sapo Emprego', 'Turismo, hoteles y restaurantes', 'Desde semana 1', 'empregos.sapo.pt', 'https://empregos.sapo.pt'],
                  ['Idealista PT', 'Vivienda #1 en Portugal', 'Semana 1 para habitación', 'idealista.pt', 'https://www.idealista.pt'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1173&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€120 – €180', '€480 – €720'],
                  ['Cuarto individual', '€250 – €400', '€720 – €1,000'],
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
                  ['Idealista PT', 'Portal #1 en Portugal', 'Activa alertas — responde inmediatamente', 'idealista.pt', 'https://www.idealista.pt'],
                  ['Imovirtual', 'Portal inmobiliario', 'Muy usado por locales para alquileres largos', 'imovirtual.com', 'https://www.imovirtual.com'],
                  ['Casa Sapo', 'Portal tradicional', 'Miles de propiedades en todo el país', 'casasapo.pt', 'https://www.casasapo.pt'],
                  ['Uniplaces', 'Plataforma estudiantil', 'Alquiler temporal seguro para estudiantes', 'uniplaces.com', 'https://www.uniplaces.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinoamericanos en Portugal — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1670758941284-bc28b71aa134?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <strong>{t.empleos_cv_b}</strong>.
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_mes, t.th_usd_mes, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€750 – €1,100', '$863 – $1,265', 'Indeed / CV en persona'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€750 – €1,000', '$863 – $1,150', 'Indeed / Agencias'],
                  ['Hotels', 'Reception / Hotel Staff', '€900 – €1,200', '$1,035 – $1,380', 'Sapo Emprego / LinkedIn'],
                  ['Retail', 'Sales Assistant', '€850 – €1,100', '$978 – $1,265', 'Net-Empregos / Indeed'],
                  ['Delivery', 'Delivery Rider / Courier', '€900 – €1,400', '$1,035 – $1,610', 'Glovo / Uber Eats'],
                  ['IT / Tech (cualificado)', 'Developer / Data Analyst', '€1,500 – €3,000', '$1,725 – $3,450', 'LinkedIn / empresas directas'],
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
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_mensual, t.th_usd_sal].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€750 – €1,100', '$863 – $1,265'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€750 – €1,000', '$863 – $1,150'],
                  ['Hotels', 'Reception / Hotel Staff', '€900 – €1,200', '$1,035 – $1,380'],
                  ['Retail', 'Sales Assistant', '€850 – €1,100', '$978 – $1,265'],
                  ['Delivery', 'Rider / Courier', '€900 – €1,400', '$1,035 – $1,610'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[3]}</td>
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
                  ['Estafa de Vivienda', 'No enviar dinero → reportar en plataforma + denunciar en Policía', 'Policía Portugal'],
                  ['Problemas con Residencia (AIMA)', 'Revisar estado con AIMA o institución educativa', 'aima.gov.pt'],
                  ['Problemas con NIF', 'Contactar representante fiscal o Finanças directamente', 'portaldasfinancas.gov.pt'],
                  ['Retraso en documentos', 'Contactar Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Sistema público o privado según cobertura del seguro', '112'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1670097937762-943d7f0e8d80?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇵🇹`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
          <p style={{ color: '#333333', fontSize: '14px', marginBottom: '6px' }}>{t.consultoria_desc}</p>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Portugal:\n\n' + feedback)}`, '_blank')
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