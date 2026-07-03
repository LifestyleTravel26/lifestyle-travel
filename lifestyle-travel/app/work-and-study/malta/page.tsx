'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { usePurchase } from '../../hooks/usePurchase'

const translations = {
  es: {
    hero_title: 'Malta',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '€2,500 - €4,500',
    stat2_label: 'Duración',
    stat2_value: '6 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Fácil',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Ruta Estudiante → Single Permit: la vía más segura y legal para vivir y trabajar en Malta',
      'Clima mediterráneo, inglés oficial y costo de vida más bajo que Irlanda o Canadá',
      'e-Residence Card: tu ID maltés en menos de 90 días desde llegada',
      '11 escuelas verificadas en St. Julian\'s, Sliema y Gozo con precios desde €2,500',
      'Comunidad latina activa — grupos de WhatsApp para vivienda y trabajo',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Malta es la isla mediterránea que combina inglés oficial, clima cálido todo el año y un costo de vida más bajo que cualquier otro destino europeo de habla inglesa. La ruta es clara: entras como estudiante, activas tu e-Residence y, después de 90 días, consigues un empleador que tramite tu Single Permit.',
    autoridad_p1_label: 'Ruta principal:',
    autoridad_p1_text: 'Student Visa → e-Residence → 90 días → Single Permit (permiso de trabajo). Puedes trabajar',
    autoridad_p1_b: 'hasta 20 horas/semana',
    autoridad_p1_end: 'una vez aprobado el permiso.',
    autoridad_p2_label: 'Acelerador de puesta en marcha:',
    autoridad_p2_text: 'sincronizamos registros y tiempos (residencia, estudio y trabajo) con tu plan de ingresos para cuidar tu ahorro y acelerar el retorno de tu inversión.',
    autoridad_blue: '💱 Estándar de moneda (Malta): primero moneda local y al lado el equivalente aproximado en USD. Ejemplo: €200 → $230 USD (usando referencia 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'En Malta el contrato de alquiler es tan importante como el curso. Sin un contrato de vivienda registrado, no hay e-Residence. Y sin e-Residence, te toca salir al día 91. Asegura tu cama antes de salir a buscar trabajo.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'Elegir bien tu escuela es la decisión financiera más importante. Las escuelas AM son más caras pero te dejan las tardes libres para trabajar. Las PM son más baratas y liberan las mañanas. Malta tiene opciones en St. Julian\'s (más empleo), Gozo (más económico) y Sliema.',
    estrategia_head: '🇲🇹 Matriz de Escuelas de Inglés: Malta 2026',
    estrategia_sub: '11 escuelas verificadas ordenadas por precio. AM = turno mañana, PM = turno tarde.',
    th_inst: 'Institución', th_loc: 'Ubicación', th_am: 'Precio AM (25 sem)', th_pm: 'Precio PM (25 sem)', th_web: 'Website',
    solvencia1_label: '🔵 Solvencia con alojamiento pagado:',
    solvencia1_val: '€28/día → aprox. €5,040 para 6 meses',
    solvencia2_label: '🔵 Solvencia sin alojamiento pagado:',
    solvencia2_val: '€48/día → aprox. €8,640 para 6 meses',
    solvencia3_label: '🔵 Capital recomendado (con alojamiento):',
    solvencia3_val: '€5,500+ para instalación e imprevistos',
    estrategia_hack: 'Antes de elegir escuela aplica este filtro: ¿El horario AM o PM te permite trabajar? ¿Está cerca de zonas de empleo (St. Julian\'s tiene más trabajo)? ¿El precio total cabe en tu capital? Si no pasa los 3 filtros, descártala.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Si tu objetivo es una universidad maltesa, los programas Foundation son tu puerta de entrada. Son más cortos y más baratos que un Bachelor completo. Al graduarte de Level 6+, puedes aplicar a la Stay-Back Visa por 6-9 meses para buscar trabajo profesional.',
    th_prog: 'Institución', th_programa: 'Programa', th_duracion: 'Duración', th_precio: 'Precio',
    pre_blue: '🔵 STAY-BACK VISA: Al graduarte de un programa Level 6 o superior, puedes aplicar a una extensión de residencia de 6 a 9 meses para buscar trabajo profesional legalmente en Malta.',
    pre_hack: 'Los programas Foundation son la ruta más inteligente si quieres universidad sin las notas europeas. Cuestan menos que un Bachelor y te dan acceso a la Stay-Back Visa. Verifica que el programa sea Level 6+ antes de pagar.',
    sec_edu_title: 'Educación Superior',
    edu_intro: 'Malta tiene universidades reconocidas internacionalmente con precios muy competitivos. El programa Get Qualified permite recuperar hasta el 70% del costo del máster en créditos fiscales si te quedas trabajando en Malta después de graduarte.',
    th_nivel: 'Nivel', th_anual: 'Precio anual', th_total: 'Precio total',
    edu_blue: '💰 HACK GET QUALIFIED: Si terminas un Máster (Level 7) y te quedas trabajando en Malta, el gobierno te devuelve hasta el 70% del costo del curso en créditos fiscales. Un máster de €8,000 termina costándote solo €2,400.',
    edu_hack: 'Global College Malta e IEU son los más accesibles para latinoamericanos. Sus programas califican para la Stay-Back Visa. Verifica que el programa sea Level 6+ antes de pagar matrícula.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Estos son los costos que tu escuela NO incluye en el precio del curso. Son absolutamente obligatorios. La solvencia en Malta se calcula por día de estancia, no es un monto fijo.',
    th_concepto: 'Concepto', th_costo: 'Costo (EUR)', th_usd: '≈ USD', th_oblig: 'Obligatorio',
    gastos_red: '🔴 SOLVENCIA OBLIGATORIA (MALTA): €28/día con alojamiento pagado (€5,040 para 6 meses) o €48/día sin alojamiento (€8,640). Sin estos fondos demostrables en extractos de los últimos 3 meses, la visa será RECHAZADA.',
    gastos_hack: 'Tu Capital de Ejecución Real = precio de tu escuela + €5,040 de solvencia + €450 de gastos fijos administrativos. Ese es el número mínimo que necesitas antes de arrancar. Si no lo tienes completo, no inicies el proceso.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'El aterrizaje en Malta tiene una regla de oro diferente a Irlanda: los primeros 90 días son de instalación legal, NO de trabajo. Úsalos para activar tu e-Residence, abrir banco y conseguir empleador.',
    eresidence_head: '1. e-Residence Card — Tu ID maltés',
    eresidence_p: 'Sin e-Residence no puedes abrir cuenta bancaria formal, firmar contratos ni solicitar el permiso de trabajo. Es el primer trámite obligatorio al llegar. Debes completarlo antes del día 90.',
    pasos: [
      ['Paso 1', 'Al llegar, recoge tus documentos originales en la academia (Letter of Acceptance física)', null],
      ['Paso 2', 'Saca cita en Identità Malta — oficina de Msida', 'https://identitamalta.com'],
      ['Paso 3', 'Adjuntar: Pasaporte + Contrato de alquiler registrado + Formulario CEA Form N', null],
      ['Paso 4', 'Pagar €70 por la emisión de la e-Residence Card', null],
    ],
    single_permit_head: '2. Single Permit — Permiso de Trabajo (después de 90 días)',
    single_permit_p: 'No puedes trabajar legalmente hasta después de 90 días. El proceso lo inicia tu empleador en Jobsplus. El número de Seguridad Social y Tax se tramitan automáticamente al aprobarse.',
    permit_items: [
      ['Espera legal: 90 días desde llegada antes de poder solicitar el permiso', null],
      ['Tu empleador inicia el trámite del Single Permit en Jobsplus vinculado a su empresa', 'https://jobsplus.gov.mt'],
      ['Sin Single Permit aprobado, cualquier trabajo es ilegal y puede resultar en deportación', null],
    ],
    aterrizaje_hack: 'Los primeros 90 días son de instalación, no de trabajo. Úsalos bien: activa e-Residence, abre banco, busca empleador. El error más común es llegar sin ahorros para 3 meses. Malta requiere paciencia al principio pero la recompensa es grande.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'Para cobrar tu nómina necesitas IBAN europeo o maltés. Abre primero una cuenta digital (Revolut o N26) los primeros días. Los bancos tradicionales en Malta pueden tardar 2-4 semanas en abrir cuenta.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'No esperes al banco tradicional. Abre N26 con tu dirección de Malta apenas pises la isla. El sistema bancario tradicional de Malta es famoso por ser lento (2-4 semanas). Muévete rápido con digital y usa BOV para la nómina formal.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Estos son los portales oficiales obligatorios para tu proceso en Malta. Guárdalos desde el día 1. Sin Jobsplus no puedes trabajar legalmente. Sin Identità Malta no tienes e-Residence.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'Jobsplus es el portal más crítico en Malta. Sin registro en Jobsplus, trabajas en negro y te pueden deportar. Tu empleador lo inicia — pero tú debes hacer seguimiento. Verifica que tu registro esté activo antes de tu primer día de trabajo.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado de vivienda en Malta es de alta rotación. El contrato de alquiler REGISTRADO es obligatorio para la e-Residence — sin él no puedes completar tu trámite migratorio. En Malta, a diferencia de Irlanda, Facebook es la herramienta #1 para encontrar vivienda.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal EUR', th_mes: 'Precio Mensual EUR',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos a distancia. Si no has probado la llave en la cerradura físicamente, ES ESTAFA. El contrato de alquiler debe estar REGISTRADO — no solo firmado.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'No busques suerte, busca contactos. Pide los links de WhatsApp de estudiantes y grupos latinos apenas llegues a Malta. Si ves una habitación disponible, escribe inmediatamente — las buenas opciones se alquilan en menos de 24 horas.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Con Single Permit puedes trabajar hasta 20 horas/semana. Malta tiene sectores con alta rotación y acceso rápido para recién llegados. El iGaming es único de Malta — paga mejor que hospitality y requiere inglés intermedio.',
    empleos_cv_label: 'Estrategia CV en mano:',
    empleos_cv_text: 'Imprime 30-50 copias de tu CV. El mejor horario es entre',
    empleos_cv_b: '3:00 PM – 5:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability"',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_h: 'Salario/hora EUR', th_canal_emp: 'Canal principal',
    empleos_hack: 'En Malta valoran mucho la actitud y disponibilidad inmediata. Si tu inglés no es perfecto pero puedes comunicarte, igual puedes conseguir trabajo rápido en hospitality o limpieza. El iGaming es el sector premium — inglés B2 puede darte €10-12/hora.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Estimación de ingresos reales para estudiantes con Single Permit trabajando 20 horas semanales. Malta tiene salario mínimo de €8.24/hora (2026).',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual: 'Mensual EST. (20h/sem)',
    salarios_blue: '💡 Malta tiene un costo de vida más bajo que Irlanda o Canadá. Con €700-800/mes puedes cubrir renta + comida + transporte. El iGaming es la joya oculta — €960/mes con solo 20h/semana es muy sólido para Malta.',
    salarios_hack: 'Con 20h/semana en iGaming ganas €800-960/mes. Con hospitality €560-720/mes. La diferencia es el inglés: B2 te abre el iGaming. Invierte 3 meses en mejorar tu inglés y multiplicas tus ingresos.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Malta tiene un timeline diferente a Irlanda. Los primeros 3 meses son de instalación legal — no de trabajo. Planifica tu ahorro para sobrevivir esos 3 meses antes del primer ingreso.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar escuela + Letter of Acceptance + Seguro médico + Reservar hostel 1-2 semanas + Preparar pasaporte y fondos', '2-3 meses antes'],
      ['Semana 1-2', 'SIM card + Abrir Revolut/N26 + Buscar habitación permanente + Recoger documentos en academia', 'Día 1-14'],
      ['Semana 2-4', 'Cita en Identità Malta + Contrato de alquiler registrado + e-Residence Card (€70)', 'Día 14-30'],
      ['Mes 1-3', 'Networking activo + Buscar empleador + Preparar CV en inglés + Entregar CV en restaurantes y hoteles', 'Día 30-90'],
      ['Mes 3', 'Solicitar Single Permit con empleador (día 90+) + Tax Number', 'Día 90+'],
      ['Mes 4-5', 'Single Permit aprobado + Empezar a trabajar 20h/semana + Primer salario', 'Día 120-150'],
    ],
    timeline_hack: 'El orden en Malta es: e-Residence → Banco → Buscar empleador → Single Permit. Sin e-Residence no puedes avanzar nada. Sin contrato de alquiler registrado no hay e-Residence. El primer paso es asegurar tu vivienda — todo lo demás se construye sobre eso.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'Malta es el destino con el timeline más largo hasta el primer ingreso. Son 4-5 meses desde la llegada. Planifica tu capital de reserva en consecuencia.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Visa de estudiante activa', 'Cumplir 90 días en Malta', 'e-Residence Card activa', 'Single Permit aprobado por Jobsplus', 'Tax Number activo'],
    hito1_time: '👉 Tiempo real: 3 meses + 2-6 semanas desde que llegas',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Permiso aprobado', 'Firma de contrato', 'Alta en payroll', 'Cuenta bancaria activa'],
    hito2_time: '👉 Tiempo real: 3-6 semanas desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~4-5 meses desde que llegas',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~5-6 meses desde que llegas',
    salario1_hack: 'Malta requiere paciencia. Necesitas ahorros para 4-5 meses sin trabajar. Si llegas con menos de €5,000 disponibles después de pagar la escuela, es muy arriesgado. Planifica bien tu capital de reserva antes de salir.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren. Lo que diferencia a quien los resuelve rápido de quien se paraliza es tener el protocolo claro antes de que pasen. Guarda estos contactos desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '112 o 999 — Policía, Ambulancia, Bomberos'],
      ['Identità Malta', 'identitamalta.com — e-Residence y estatus migratorio'],
      ['Jobsplus', 'jobsplus.gov.mt — Permiso de trabajo y Tax Number'],
      ['GP (Médico)', 'Centros de salud públicos en diferentes zonas de Malta'],
      ['Comunidad L&T', 'Mexicanos, Ticos, Colombianos, Argentinos en Malta — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Malta',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Malta — links próximamente',
    crisis_hack: 'La mayoría de problemas en Malta se resuelven hablando directamente con la escuela, el empleador o los servicios públicos. Mantén la calma, usa traductor si es necesario y sigue el proceso paso a paso.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Malta como destino de migración para latinoamericanos. Úsalo para comparar con otros países del blueprint.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Student Visa → Single Permit'],
      ['Duración mínima del curso', '25 semanas (6 meses)'],
      ['Espera para trabajar', '90 días desde llegada'],
      ['Horas de trabajo', '20 horas/semana (con Single Permit)'],
      ['Solvencia (con alojamiento)', '€5,040 (€28/día × 180 días)'],
      ['Solvencia (sin alojamiento)', '€8,640 (€48/día × 180 días)'],
      ['Costo promedio curso inglés', '€2,500 – €4,500 (25 semanas)'],
      ['e-Residence Card', '€70 (equivalente al IRP de Irlanda)'],
      ['Renta cuarto compartido', '€250 – €320/mes'],
      ['Empleos más comunes', 'Hospitality, iGaming, Cleaning, Delivery'],
      ['Salario promedio entrada', '€7 – €12 por hora'],
      ['Tiempo hasta primer trabajo', '4-5 meses desde llegada'],
      ['Tiempo hasta primer cobro', '5-6 meses desde llegada'],
      ['Idioma oficial', 'Inglés y Maltés'],
      ['Camino a residencia', 'Stay-Back Visa → Residencia Permanente'],
      ['Nivel de dificultad', 'Fácil'],
      ['Mejores zonas', "St. Julian's / Sliema / Gozo"],
      ['Comunidad latina', 'Creciente — grupos WhatsApp activos'],
      ['Ventaja única', 'iGaming + Get Qualified (70% devolución máster)'],
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
    hero_title: 'Malta',
    hero_sub: 'Europa · Work and Study',
    hero_badge: 'Fácil',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '€2.500 - €4.500',
    stat2_label: 'Duração',
    stat2_value: '6 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Fácil',
    included_title: 'O que inclui o Blueprint',
    included: [
      'Rota Estudante → Single Permit: a via mais segura e legal para viver e trabalhar em Malta',
      'Clima mediterrâneo, inglês oficial e custo de vida mais baixo que Irlanda ou Canadá',
      'e-Residence Card: seu ID maltês em menos de 90 dias desde a chegada',
      '11 escolas verificadas em St. Julian\'s, Sliema e Gozo com preços a partir de €2.500',
      'Comunidade latina ativa — grupos de WhatsApp para moradia e trabalho',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'Malta é a ilha mediterrânea que combina inglês oficial, clima quente o ano todo e um custo de vida mais baixo que qualquer outro destino europeu de língua inglesa. A rota é clara: você entra como estudante, ativa seu e-Residence e, após 90 dias, consegue um empregador que processe seu Single Permit.',
    autoridad_p1_label: 'Rota principal:',
    autoridad_p1_text: 'Student Visa → e-Residence → 90 dias → Single Permit (permissão de trabalho). Você pode trabalhar',
    autoridad_p1_b: 'até 20 horas/semana',
    autoridad_p1_end: 'uma vez aprovada a permissão.',
    autoridad_p2_label: 'Acelerador de início:',
    autoridad_p2_text: 'sincronizamos registros e prazos (residência, estudo e trabalho) com seu plano de renda para proteger sua economia e acelerar o retorno do seu investimento.',
    autoridad_blue: '💱 Padrão de moeda (Malta): primeiro moeda local e ao lado o equivalente aproximado em USD. Exemplo: €200 → $230 USD (usando referência 1 EUR ≈ $1,15 USD).',
    autoridad_hack: 'Em Malta o contrato de aluguel é tão importante quanto o curso. Sem um contrato de moradia registrado, não há e-Residence. E sem e-Residence, você precisa sair no dia 91. Garanta sua cama antes de sair para buscar trabalho.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Escolher bem sua escola é a decisão financeira mais importante. As escolas AM são mais caras mas deixam as tardes livres para trabalhar. As PM são mais baratas e liberam as manhãs. Malta tem opções em St. Julian\'s (mais emprego), Gozo (mais econômico) e Sliema.',
    estrategia_head: '🇲🇹 Matriz de Escolas de Inglês: Malta 2026',
    estrategia_sub: '11 escolas verificadas ordenadas por preço. AM = turno manhã, PM = turno tarde.',
    th_inst: 'Instituição', th_loc: 'Localização', th_am: 'Preço AM (25 sem)', th_pm: 'Preço PM (25 sem)', th_web: 'Website',
    solvencia1_label: '🔵 Solvência com alojamento pago:',
    solvencia1_val: '€28/dia → aprox. €5.040 para 6 meses',
    solvencia2_label: '🔵 Solvência sem alojamento pago:',
    solvencia2_val: '€48/dia → aprox. €8.640 para 6 meses',
    solvencia3_label: '🔵 Capital recomendado (com alojamento):',
    solvencia3_val: '€5.500+ para instalação e imprevistos',
    estrategia_hack: 'Antes de escolher a escola aplique este filtro: O horário AM ou PM permite trabalhar? Está próxima de áreas de emprego (St. Julian\'s tem mais trabalho)? O preço total cabe no seu capital? Se não passar nos 3 filtros, descarte.',
    sec_pre_title: 'Pré-Fundações & Pré-Carreiras',
    pre_intro: 'Se seu objetivo é uma universidade maltesa, os programas Foundation são sua porta de entrada. São mais curtos e mais baratos que um Bachelor completo. Ao se formar no Level 6+, você pode aplicar ao Stay-Back Visa por 6-9 meses para buscar trabalho profissional.',
    th_prog: 'Instituição', th_programa: 'Programa', th_duracion: 'Duração', th_precio: 'Preço',
    pre_blue: '🔵 STAY-BACK VISA: Ao se formar em um programa Level 6 ou superior, você pode aplicar a uma extensão de residência de 6 a 9 meses para buscar trabalho profissional legalmente em Malta.',
    pre_hack: 'Os programas Foundation são a rota mais inteligente se você quer universidade sem as notas europeias. Custam menos que um Bachelor e dão acesso ao Stay-Back Visa. Verifique se o programa é Level 6+ antes de pagar.',
    sec_edu_title: 'Educação Superior',
    edu_intro: 'Malta tem universidades reconhecidas internacionalmente com preços muito competitivos. O programa Get Qualified permite recuperar até 70% do custo do mestrado em créditos fiscais se você ficar trabalhando em Malta após se formar.',
    th_nivel: 'Nível', th_anual: 'Preço anual', th_total: 'Preço total',
    edu_blue: '💰 HACK GET QUALIFIED: Se você terminar um Mestrado (Level 7) e ficar trabalhando em Malta, o governo te devolve até 70% do custo do curso em créditos fiscais. Um mestrado de €8.000 acaba custando apenas €2.400.',
    edu_hack: 'Global College Malta e IEU são os mais acessíveis para latino-americanos. Seus programas qualificam para o Stay-Back Visa. Verifique se o programa é Level 6+ antes de pagar a matrícula.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Estes são os custos que sua escola NÃO inclui no preço do curso. São absolutamente obrigatórios. A solvência em Malta é calculada por dia de estadia, não é um valor fixo.',
    th_concepto: 'Conceito', th_costo: 'Custo (EUR)', th_usd: '≈ USD', th_oblig: 'Obrigatório',
    gastos_red: '🔴 SOLVÊNCIA OBRIGATÓRIA (MALTA): €28/dia com alojamento pago (€5.040 para 6 meses) ou €48/dia sem alojamento (€8.640). Sem esses fundos demonstráveis em extratos dos últimos 3 meses, o visto será REJEITADO.',
    gastos_hack: 'Seu Capital de Execução Real = preço da sua escola + €5.040 de solvência + €450 de despesas administrativas fixas. Esse é o número mínimo que você precisa antes de começar. Se não tiver completo, não inicie o processo.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'A chegada em Malta tem uma regra de ouro diferente da Irlanda: os primeiros 90 dias são de instalação legal, NÃO de trabalho. Use-os para ativar seu e-Residence, abrir banco e conseguir empregador.',
    eresidence_head: '1. e-Residence Card — Seu ID maltês',
    eresidence_p: 'Sem e-Residence você não pode abrir conta bancária formal, assinar contratos nem solicitar a permissão de trabalho. É o primeiro procedimento obrigatório ao chegar. Deve ser concluído antes do dia 90.',
    pasos: [
      ['Passo 1', 'Ao chegar, retire seus documentos originais na academia (Letter of Acceptance física)', null],
      ['Passo 2', 'Marque consulta em Identità Malta — escritório de Msida', 'https://identitamalta.com'],
      ['Passo 3', 'Anexar: Passaporte + Contrato de aluguel registrado + Formulário CEA Form N', null],
      ['Passo 4', 'Pagar €70 pela emissão do e-Residence Card', null],
    ],
    single_permit_head: '2. Single Permit — Permissão de Trabalho (após 90 dias)',
    single_permit_p: 'Você não pode trabalhar legalmente até depois de 90 dias. O processo é iniciado pelo seu empregador no Jobsplus. O número de Seguridade Social e Tax são processados automaticamente após a aprovação.',
    permit_items: [
      ['Espera legal: 90 dias desde a chegada antes de poder solicitar a permissão', null],
      ['Seu empregador inicia o processo do Single Permit no Jobsplus vinculado à sua empresa', 'https://jobsplus.gov.mt'],
      ['Sem Single Permit aprovado, qualquer trabalho é ilegal e pode resultar em deportação', null],
    ],
    aterrizaje_hack: 'Os primeiros 90 dias são de instalação, não de trabalho. Use-os bem: ative e-Residence, abra banco, busque empregador. O erro mais comum é chegar sem economias para 3 meses. Malta exige paciência no início mas a recompensa é grande.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Para receber seu salário você precisa de IBAN europeu ou maltês. Abra primeiro uma conta digital (Revolut ou N26) nos primeiros dias. Os bancos tradicionais em Malta podem demorar 2-4 semanas para abrir conta.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Não espere o banco tradicional. Abra o N26 com seu endereço de Malta assim que chegar na ilha. O sistema bancário tradicional de Malta é famoso por ser lento (2-4 semanas). Mova-se rápido com digital e use o BOV para a folha de pagamento formal.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Estes são os portais oficiais obrigatórios para seu processo em Malta. Salve-os desde o dia 1. Sem Jobsplus você não pode trabalhar legalmente. Sem Identità Malta você não tem e-Residence.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Jobsplus é o portal mais crítico em Malta. Sem registro no Jobsplus, você trabalha informalmente e pode ser deportado. Seu empregador o inicia — mas você deve fazer o acompanhamento. Verifique se seu registro está ativo antes do seu primeiro dia de trabalho.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário em Malta tem alta rotatividade. O contrato de aluguel REGISTRADO é obrigatório para o e-Residence — sem ele você não pode completar seu processo migratório. Em Malta, diferente da Irlanda, o Facebook é a ferramenta #1 para encontrar moradia.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal EUR', th_mes: 'Preço Mensal EUR',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos à distância. Se você não testou a chave na fechadura fisicamente, É GOLPE. O contrato de aluguel deve estar REGISTRADO — não apenas assinado.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Não busque sorte, busque contatos. Peça os links de WhatsApp de estudantes e grupos latinos assim que chegar em Malta. Se vir um quarto disponível, escreva imediatamente — as boas opções são alugadas em menos de 24 horas.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Com Single Permit você pode trabalhar até 20 horas/semana. Malta tem setores com alta rotatividade e acesso rápido para recém-chegados. O iGaming é exclusivo de Malta — paga melhor que hospitalidade e requer inglês intermediário.',
    empleos_cv_label: 'Estratégia CV na mão:',
    empleos_cv_text: 'Imprima 30-50 cópias do seu CV. O melhor horário é entre',
    empleos_cv_b: '15h – 17h',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability"',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_h: 'Salário/hora EUR', th_canal_emp: 'Canal principal',
    empleos_hack: 'Em Malta valorizam muito a atitude e disponibilidade imediata. Se seu inglês não é perfeito mas você consegue se comunicar, ainda pode conseguir trabalho rápido em hospitalidade ou limpeza. O iGaming é o setor premium — inglês B2 pode te dar €10-12/hora.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Estimativa de renda real para estudantes com Single Permit trabalhando 20 horas semanais. Malta tem salário mínimo de €8,24/hora (2026).',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual: 'Mensal EST. (20h/sem)',
    salarios_blue: '💡 Malta tem um custo de vida mais baixo que Irlanda ou Canadá. Com €700-800/mês você pode cobrir aluguel + comida + transporte. O iGaming é a joia oculta — €960/mês com apenas 20h/semana é muito sólido para Malta.',
    salarios_hack: 'Com 20h/semana em iGaming você ganha €800-960/mês. Com hospitalidade €560-720/mês. A diferença é o inglês: B2 te abre o iGaming. Invista 3 meses em melhorar seu inglês e multiplique sua renda.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Malta tem um cronograma diferente da Irlanda. Os primeiros 3 meses são de instalação legal — não de trabalho. Planeje suas economias para sobreviver esses 3 meses antes da primeira renda.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar escola + Letter of Acceptance + Seguro médico + Reservar hostel 1-2 semanas + Preparar passaporte e fundos', '2-3 meses antes'],
      ['Semana 1-2', 'SIM card + Abrir Revolut/N26 + Buscar quarto permanente + Retirar documentos na academia', 'Dia 1-14'],
      ['Semana 2-4', 'Consulta em Identità Malta + Contrato de aluguel registrado + e-Residence Card (€70)', 'Dia 14-30'],
      ['Mês 1-3', 'Networking ativo + Buscar empregador + Preparar CV em inglês + Entregar CV em restaurantes e hotéis', 'Dia 30-90'],
      ['Mês 3', 'Solicitar Single Permit com empregador (dia 90+) + Tax Number', 'Dia 90+'],
      ['Mês 4-5', 'Single Permit aprovado + Começar a trabalhar 20h/semana + Primeiro salário', 'Dia 120-150'],
    ],
    timeline_hack: 'A ordem em Malta é: e-Residence → Banco → Buscar empregador → Single Permit. Sem e-Residence você não pode avançar nada. Sem contrato de aluguel registrado não há e-Residence. O primeiro passo é garantir sua moradia — tudo o mais se constrói sobre isso.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'Malta é o destino com o cronograma mais longo até a primeira renda. São 4-5 meses desde a chegada. Planeje seu capital de reserva adequadamente.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Visto de estudante ativo', 'Cumprir 90 dias em Malta', 'e-Residence Card ativo', 'Single Permit aprovado pelo Jobsplus', 'Tax Number ativo'],
    hito1_time: '👉 Tempo real: 3 meses + 2-6 semanas desde que você chega',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Permissão aprovada', 'Assinatura de contrato', 'Cadastro na folha de pagamento', 'Conta bancária ativa'],
    hito2_time: '👉 Tempo real: 3-6 semanas desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~4-5 meses desde que chega',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~5-6 meses desde que chega',
    salario1_hack: 'Malta exige paciência. Você precisa de economias para 4-5 meses sem trabalhar. Se chegar com menos de €5.000 disponíveis após pagar a escola, é muito arriscado. Planeje bem seu capital de reserva antes de sair.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem. O que diferencia quem resolve rápido de quem fica paralisado é ter o protocolo claro antes que aconteçam. Salve esses contatos desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '112 ou 999 — Polícia, Ambulância, Bombeiros'],
      ['Identità Malta', 'identitamalta.com — e-Residence e status migratório'],
      ['Jobsplus', 'jobsplus.gov.mt — Permissão de trabalho e Tax Number'],
      ['GP (Médico)', 'Centros de saúde públicos em diferentes zonas de Malta'],
      ['Comunidade L&T', 'Mexicanos, Ticos, Colombianos, Argentinos em Malta — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina em Malta',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos em Malta — links em breve',
    crisis_hack: 'A maioria dos problemas em Malta se resolve falando diretamente com a escola, o empregador ou os serviços públicos. Mantenha a calma, use tradutor se necessário e siga o processo passo a passo.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo de Malta como destino de migração para latino-americanos. Use-o para comparar com outros países do blueprint.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Student Visa → Single Permit'],
      ['Duração mínima do curso', '25 semanas (6 meses)'],
      ['Espera para trabalhar', '90 dias desde a chegada'],
      ['Horas de trabalho', '20 horas/semana (com Single Permit)'],
      ['Solvência (com alojamento)', '€5.040 (€28/dia × 180 dias)'],
      ['Solvência (sem alojamento)', '€8.640 (€48/dia × 180 dias)'],
      ['Custo médio curso inglês', '€2.500 – €4.500 (25 semanas)'],
      ['e-Residence Card', '€70 (equivalente ao IRP da Irlanda)'],
      ['Aluguel quarto compartilhado', '€250 – €320/mês'],
      ['Empregos mais comuns', 'Hospitalidade, iGaming, Limpeza, Delivery'],
      ['Salário médio de entrada', '€7 – €12 por hora'],
      ['Tempo até primeiro emprego', '4-5 meses desde a chegada'],
      ['Tempo até primeiro pagamento', '5-6 meses desde a chegada'],
      ['Idioma oficial', 'Inglês e Maltês'],
      ['Caminho para residência', 'Stay-Back Visa → Residência Permanente'],
      ['Nível de dificuldade', 'Fácil'],
      ['Melhores zonas', "St. Julian's / Sliema / Gozo"],
      ['Comunidade latina', 'Crescente — grupos WhatsApp ativos'],
      ['Vantagem única', 'iGaming + Get Qualified (70% devolução mestrado)'],
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
    hero_title: 'Malta',
    hero_sub: 'Europe · Work and Study',
    hero_badge: 'Easy',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '€2,500 - €4,500',
    stat2_label: 'Duration',
    stat2_value: '6 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Easy',
    included_title: 'What the Blueprint Includes',
    included: [
      'Student → Single Permit route: the safest and most legal way to live and work in Malta',
      'Mediterranean climate, official English and lower cost of living than Ireland or Canada',
      'e-Residence Card: your Maltese ID in less than 90 days from arrival',
      '11 verified schools in St. Julian\'s, Sliema and Gozo with prices from €2,500',
      'Active Latin community — WhatsApp groups for housing and work',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Malta is the Mediterranean island that combines official English, warm weather year-round and a lower cost of living than any other English-speaking European destination. The route is clear: you enter as a student, activate your e-Residence and, after 90 days, find an employer to process your Single Permit.',
    autoridad_p1_label: 'Main route:',
    autoridad_p1_text: 'Student Visa → e-Residence → 90 days → Single Permit (work permit). You can work',
    autoridad_p1_b: 'up to 20 hours/week',
    autoridad_p1_end: 'once the permit is approved.',
    autoridad_p2_label: 'Launch accelerator:',
    autoridad_p2_text: 'we synchronize registrations and timelines (residency, study and work) with your income plan to protect your savings and accelerate the return on your investment.',
    autoridad_blue: '💱 Currency standard (Malta): local currency first with approximate USD equivalent. Example: €200 → $230 USD (using reference 1 EUR ≈ $1.15 USD).',
    autoridad_hack: 'In Malta the rental contract is as important as the course. Without a registered housing contract, there\'s no e-Residence. And without e-Residence, you must leave by day 91. Secure your bed before going out to look for work.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'Choosing the right school is the most important financial decision. AM schools are more expensive but leave afternoons free to work. PM schools are cheaper and free up mornings. Malta has options in St. Julian\'s (more employment), Gozo (more affordable) and Sliema.',
    estrategia_head: '🇲🇹 English Schools Matrix: Malta 2026',
    estrategia_sub: '11 verified schools ordered by price. AM = morning shift, PM = afternoon shift.',
    th_inst: 'Institution', th_loc: 'Location', th_am: 'AM Price (25 wks)', th_pm: 'PM Price (25 wks)', th_web: 'Website',
    solvencia1_label: '🔵 Funds with paid accommodation:',
    solvencia1_val: '€28/day → approx. €5,040 for 6 months',
    solvencia2_label: '🔵 Funds without paid accommodation:',
    solvencia2_val: '€48/day → approx. €8,640 for 6 months',
    solvencia3_label: '🔵 Recommended capital (with accommodation):',
    solvencia3_val: '€5,500+ for setup and contingencies',
    estrategia_hack: 'Before choosing a school apply this filter: Does the AM or PM schedule allow you to work? Is it near employment areas (St. Julian\'s has more work)? Does the total price fit your capital? If it doesn\'t pass all 3 filters, discard it.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'If your goal is a Maltese university, Foundation programs are your entry point. They\'re shorter and cheaper than a full Bachelor. Upon graduating from Level 6+, you can apply for the Stay-Back Visa for 6-9 months to look for professional work.',
    th_prog: 'Institution', th_programa: 'Program', th_duracion: 'Duration', th_precio: 'Price',
    pre_blue: '🔵 STAY-BACK VISA: Upon graduating from a Level 6 or higher program, you can apply for a 6-9 month residency extension to legally look for professional work in Malta.',
    pre_hack: 'Foundation programs are the smartest route if you want university without European grades. They cost less than a Bachelor and give access to the Stay-Back Visa. Verify the program is Level 6+ before paying.',
    sec_edu_title: 'Higher Education',
    edu_intro: 'Malta has internationally recognized universities with very competitive prices. The Get Qualified program allows recovering up to 70% of the master\'s cost in tax credits if you stay working in Malta after graduating.',
    th_nivel: 'Level', th_anual: 'Annual price', th_total: 'Total price',
    edu_blue: '💰 GET QUALIFIED HACK: If you complete a Master\'s (Level 7) and stay working in Malta, the government refunds up to 70% of the course cost in tax credits. An €8,000 master\'s ends up costing you only €2,400.',
    edu_hack: 'Global College Malta and IEU are the most accessible for Latin Americans. Their programs qualify for the Stay-Back Visa. Verify the program is Level 6+ before paying tuition.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'These are costs your school does NOT include in the course price. They are absolutely mandatory. Funds in Malta are calculated per day of stay, not a fixed amount.',
    th_concepto: 'Item', th_costo: 'Cost (EUR)', th_usd: '≈ USD', th_oblig: 'Mandatory',
    gastos_red: '🔴 MANDATORY FUNDS (MALTA): €28/day with paid accommodation (€5,040 for 6 months) or €48/day without accommodation (€8,640). Without these demonstrable funds in last 3 months\' statements, the visa will be REJECTED.',
    gastos_hack: 'Your Real Execution Capital = your school price + €5,040 in funds + €450 in fixed administrative costs. That\'s the minimum number you need before starting. If you don\'t have it complete, don\'t start the process.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'Landing in Malta has a golden rule different from Ireland: the first 90 days are for legal setup, NOT work. Use them to activate your e-Residence, open a bank account and find an employer.',
    eresidence_head: '1. e-Residence Card — Your Maltese ID',
    eresidence_p: 'Without e-Residence you cannot open a formal bank account, sign contracts or apply for a work permit. It\'s the first mandatory procedure upon arrival. Must be completed before day 90.',
    pasos: [
      ['Step 1', 'Upon arrival, collect your original documents from the academy (physical Letter of Acceptance)', null],
      ['Step 2', 'Book appointment at Identità Malta — Msida office', 'https://identitamalta.com'],
      ['Step 3', 'Attach: Passport + Registered rental contract + CEA Form N', null],
      ['Step 4', 'Pay €70 for the e-Residence Card issuance', null],
    ],
    single_permit_head: '2. Single Permit — Work Permit (after 90 days)',
    single_permit_p: 'You cannot work legally until after 90 days. The process is initiated by your employer at Jobsplus. The Social Security and Tax numbers are processed automatically upon approval.',
    permit_items: [
      ['Legal wait: 90 days from arrival before you can apply for the permit', null],
      ['Your employer initiates the Single Permit process at Jobsplus linked to their company', 'https://jobsplus.gov.mt'],
      ['Without an approved Single Permit, any work is illegal and can result in deportation', null],
    ],
    aterrizaje_hack: 'The first 90 days are for setup, not work. Use them well: activate e-Residence, open bank, find employer. The most common mistake is arriving without savings for 3 months. Malta requires patience at first but the reward is great.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'To receive your paycheck you need a European or Maltese IBAN. Open a digital account (Revolut or N26) first in the first few days. Traditional banks in Malta can take 2-4 weeks to open an account.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Don\'t wait for the traditional bank. Open N26 with your Malta address as soon as you set foot on the island. Malta\'s traditional banking system is famous for being slow (2-4 weeks). Move fast with digital and use BOV for the formal payroll.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'These are the mandatory official portals for your process in Malta. Save them from day 1. Without Jobsplus you cannot work legally. Without Identità Malta you don\'t have e-Residence.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'Jobsplus is the most critical portal in Malta. Without registration at Jobsplus, you work informally and can be deported. Your employer initiates it — but you must follow up. Verify your registration is active before your first day of work.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'The housing market in Malta has high turnover. The REGISTERED rental contract is mandatory for e-Residence — without it you cannot complete your migration process. In Malta, unlike Ireland, Facebook is the #1 tool for finding housing.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price EUR', th_mes: 'Monthly Price EUR',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO remote deposits. If you haven\'t physically tested the key in the lock, IT\'S A SCAM. The rental contract must be REGISTERED — not just signed.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'Don\'t look for luck, look for contacts. Ask for WhatsApp links from students and Latin groups as soon as you arrive in Malta. If you see a room available, write immediately — good options are rented in less than 24 hours.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'With Single Permit you can work up to 20 hours/week. Malta has sectors with high turnover and fast access for newcomers. iGaming is unique to Malta — pays better than hospitality and requires intermediate English.',
    empleos_cv_label: 'CV in hand strategy:',
    empleos_cv_text: 'Print 30-50 copies of your CV. The best time is between',
    empleos_cv_b: '3:00 PM – 5:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability"',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_h: 'Hourly Wage EUR', th_canal_emp: 'Main Channel',
    empleos_hack: 'In Malta they value attitude and immediate availability. If your English isn\'t perfect but you can communicate, you can still get work quickly in hospitality or cleaning. iGaming is the premium sector — B2 English can get you €10-12/hour.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Real income estimates for students with Single Permit working 20 hours per week. Malta has a minimum wage of €8.24/hour (2026).',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual: 'Monthly EST. (20h/wk)',
    salarios_blue: '💡 Malta has a lower cost of living than Ireland or Canada. With €700-800/month you can cover rent + food + transport. iGaming is the hidden gem — €960/month with just 20h/week is very solid for Malta.',
    salarios_hack: 'With 20h/week in iGaming you earn €800-960/month. With hospitality €560-720/month. The difference is English: B2 opens iGaming to you. Invest 3 months improving your English and multiply your income.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Malta has a different timeline from Ireland. The first 3 months are for legal setup — not work. Plan your savings to survive those 3 months before the first income.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay school + Letter of Acceptance + Health insurance + Book hostel 1-2 weeks + Prepare passport and funds', '2-3 months before'],
      ['Week 1-2', 'SIM card + Open Revolut/N26 + Find permanent room + Collect documents from academy', 'Day 1-14'],
      ['Week 2-4', 'Appointment at Identità Malta + Registered rental contract + e-Residence Card (€70)', 'Day 14-30'],
      ['Month 1-3', 'Active networking + Find employer + Prepare CV in English + Drop off CV at restaurants and hotels', 'Day 30-90'],
      ['Month 3', 'Apply for Single Permit with employer (day 90+) + Tax Number', 'Day 90+'],
      ['Month 4-5', 'Single Permit approved + Start working 20h/week + First salary', 'Day 120-150'],
    ],
    timeline_hack: 'The order in Malta is: e-Residence → Bank → Find employer → Single Permit. Without e-Residence you cannot advance at all. Without a registered rental contract there\'s no e-Residence. The first step is securing your housing — everything else is built on that.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'Malta is the destination with the longest timeline to first income. It\'s 4-5 months from arrival. Plan your reserve capital accordingly.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Student visa active', 'Complete 90 days in Malta', 'e-Residence Card active', 'Single Permit approved by Jobsplus', 'Tax Number active'],
    hito1_time: '👉 Real timeline: 3 months + 2-6 weeks from arrival',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Permit approved', 'Contract signed', 'Added to payroll', 'Active bank account'],
    hito2_time: '👉 Real timeline: 3-6 weeks from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~4-5 months from arrival',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~5-6 months from arrival',
    salario1_hack: 'Malta requires patience. You need savings for 4-5 months without working. If you arrive with less than €5,000 available after paying the school, it\'s very risky. Plan your reserve capital well before leaving.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen. What differentiates those who resolve them quickly from those who freeze is having a clear protocol before they occur. Save these contacts from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '112 or 999 — Police, Ambulance, Fire'],
      ['Identità Malta', 'identitamalta.com — e-Residence and migration status'],
      ['Jobsplus', 'jobsplus.gov.mt — Work permit and Tax Number'],
      ['GP (Doctor)', 'Public health centers in different areas of Malta'],
      ['L&T Community', 'Mexicans, Costa Ricans, Colombians, Argentinians in Malta — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Malta',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Malta — links coming soon',
    crisis_hack: 'Most problems in Malta are resolved by speaking directly with the school, employer or public services. Stay calm, use a translator if necessary and follow the process step by step.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Malta as a migration destination for Latin Americans. Use it to compare with other countries in the blueprint.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa → Single Permit'],
      ['Minimum course duration', '25 weeks (6 months)'],
      ['Wait to work', '90 days from arrival'],
      ['Work hours', '20 hours/week (with Single Permit)'],
      ['Funds (with accommodation)', '€5,040 (€28/day × 180 days)'],
      ['Funds (without accommodation)', '€8,640 (€48/day × 180 days)'],
      ['Average English course cost', '€2,500 – €4,500 (25 weeks)'],
      ['e-Residence Card', '€70 (equivalent to Ireland\'s IRP)'],
      ['Shared room rent', '€250 – €320/month'],
      ['Most common jobs', 'Hospitality, iGaming, Cleaning, Delivery'],
      ['Average entry salary', '€7 – €12 per hour'],
      ['Time to first job', '4-5 months from arrival'],
      ['Time to first payment', '5-6 months from arrival'],
      ['Official language', 'English and Maltese'],
      ['Path to residency', 'Stay-Back Visa → Permanent Residency'],
      ['Difficulty level', 'Easy'],
      ['Best areas', "St. Julian's / Sliema / Gozo"],
      ['Latin community', 'Growing — active WhatsApp groups'],
      ['Unique advantage', 'iGaming + Get Qualified (70% master\'s refund)'],
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

export default function Malta() {
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
    td: (i: number) => ({ padding: '9px 14px', fontSize: '13px', borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? 'white' : '#fafafa', lineHeight: '1.4' , color: '#1a1a2e' }),
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇲🇹</div>
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587974928552-4f4aac51b45d?q=80&w=1206&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e'}}>
            <strong>{t.autoridad_p1_label}</strong> {t.autoridad_p1_text} <strong>{t.autoridad_p1_b}</strong> {t.autoridad_p1_end}
          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px', color: '#1a1a2e'}}>
            <strong>{t.autoridad_p2_label}</strong> {t.autoridad_p2_text}
          </p>
          <BlueBox text={t.autoridad_blue} />
          <HackBox text={t.autoridad_hack} />
        </Section>

        {/* PREMIUM LOCK */}
        {!hasAccess && (
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', margin: '16px 0', border: '2px solid #e8572a' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔒</div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>Contenido Premium</h3>
          <p style={{ color: '#555555', fontSize: '14px', marginBottom: '20px' }}>Accede al blueprint completo con toda la información detallada</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/524cea8d-e3ba-4bbf-b5dd-46c927b2857d?embed=1" className="lemonsqueezy-button" style={{ backgroundColor: '#1a1a2e', color: 'white', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'block' }}>
              🗂️ Comprar este Blueprint — €14.99
            </a>
            <a
              href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/2dc9d208-cf0b-45f0-83b4-998414ffb9f4?embed=1"
              className="lemonsqueezy-button"
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
              🔥 Acceso Total — Todos los Blueprints €39.99
            </a>
          </div>
        </div>
        )}

        <div style={{ display: hasAccess ? 'block' : 'none' }}>

        {/* ESTRATEGIA */}
        <Section id="estrategia" emoji="🏷️" title={t.sec_estrategia_title}>
          <Intro text={t.estrategia_intro} />
          <SubHead text={t.estrategia_head} />
          <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '10px', lineHeight: '1.6' }}>{t.estrategia_sub}</p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_loc, t.th_am, t.th_pm, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Gateway School (GSE)', "St. Julian's", '€2,500 – €2,850', '€2,200 – €2,400', 'english-malta.com', 'https://english-malta.com'],
                  ['International House Malta', "St. Julian's", '€2,800 – €3,200', '€2,400 – €2,700', 'ihmalta.com', 'https://ihmalta.com'],
                  ['BELS Malta', 'Gozo / St Paul\'s Bay', '€2,900 – €3,300', '€2,500 – €2,800', 'belsmalta.com', 'https://belsmalta.com'],
                  ['English Path (EP)', "St. Julian's", '€3,100 – €3,600', '€2,650 – €3,000', 'englishpath.com', 'https://englishpath.com'],
                  ['Clubclass Malta', 'Swieqi', '€3,250 – €3,700', '€2,800 – €3,200', 'clubclass.com', 'https://clubclass.com'],
                  ['Sprachcaffe Malta', "St. Julian's", '€3,200 – €3,700', '€2,900 – €3,300', 'sprachcaffe.com', 'https://sprachcaffe.com'],
                  ['Inlingua Malta', 'Sliema', '€3,300 – €3,800', '€3,000 – €3,400', 'inlinguamalta.com', 'https://inlinguamalta.com'],
                  ['ACE English Malta', "St. Julian's", '€3,500 – €3,900', '€3,200 – €3,500', 'aceenglishmalta.com', 'https://aceenglishmalta.com'],
                  ['ESE Malta', "St. Julian's", '€3,600 – €4,000', '€3,200 – €3,600', 'ese-edu.com', 'https://ese-edu.com'],
                  ['EC English Malta', "St. Julian's", '€4,000 – €4,500', '€3,600 – €4,000', 'ecenglish.com', 'https://ecenglish.com'],
                  ['Malta University Language School', 'Lija', '€3,800 – €4,200', '€3,400 – €3,700', 'universitylanguageschool.com', 'https://universitylanguageschool.com'],
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
              <thead><tr>{[t.th_prog, t.th_programa, t.th_duracion, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['SBM Malta', 'NCUK International Foundation Year', '1 año', '€4,500', 'sbm.edu.mt', 'https://sbm.edu.mt'],
                  ['GBS Malta', 'Foundation Degree (IT / Business)', '1 año', '€5,000', 'gbs.edu.mt', 'https://gbs.edu.mt'],
                  ['University of Malta', 'Foundation Studies (Humanities / Nursing)', '1 año', '€6,600', 'um.edu.mt', 'https://um.edu.mt'],
                  ['Global College Malta', 'Foundation Business / Management', '1 año', '€6,800 – €8,500', 'gcm.edu.mt', 'https://gcm.edu.mt'],
                  ['University of Malta', 'Foundation in Medical & Dental', '1 año', '€16,000', 'um.edu.mt', 'https://um.edu.mt'],
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
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{['Institución', t.th_nivel, t.th_anual, t.th_total, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Global College Malta', 'Bachelor / Master', '€4,000 – €4,500', '€12k – €18k', 'gcm.edu.mt', 'https://gcm.edu.mt'],
                  ['International European University (IEU)', 'Bachelor / Master', '€5,000 – €5,500', '€15k – €20k', 'ieumalta.com', 'https://ieumalta.com'],
                  ['MCAST', 'Diploma / Bachelor', '€6,000 – €8,000', '€12k – €20k', 'mcast.edu.mt', 'https://mcast.edu.mt'],
                  ['University of Malta', 'Bachelor / Master', '€6,000 – €12,000', '€18k – €36k', 'um.edu.mt', 'https://um.edu.mt'],
                  ['London School of Commerce Malta', 'Master (MBA)', '€7,000 – €8,000', '€7k – €8k', 'lscmalta.edu.mt', 'https://lscmalta.edu.mt'],
                  ['GBS Malta', 'Bachelor / Master', '€7,500 – €9,000', '€15k – €25k', 'gbs.edu.mt', 'https://gbs.edu.mt'],
                  ['STC Higher Education Malta', 'Bachelor / Master (IT, Business)', '€8,000 – €10,000', '€16k – €30k', 'stc.academy', 'https://stc.academy'],
                  ['American University of Malta', 'Bachelor / Master', '€15,000 – €17,000', '€45k – €50k', 'aum.edu.mt', 'https://aum.edu.mt'],
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
                  ['Seguro médico', '€150', '$173', '✅ Sí'],
                  ['Examen Final del curso', '€150 - €200', '$173 - $230', '✅ Sí'],
                  ['Materiales / Libros', '€40 - €70', '$46 - $81', '✅ Sí'],
                  ['e-Residence Card (Identità Malta)', '€70', '$81', '✅ Sí'],
                  ['Solvencia (con alojamiento pagado)', '€5,040', '$5,796', '✅ Obligatorio visa'],
                  ['Solvencia (sin alojamiento pagado)', '€8,640', '$9,936', '✅ Obligatorio visa'],
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
          <SubHead text={t.eresidence_head} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>{t.eresidence_p}</p>
          {t.pasos.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <span style={{ lineHeight: '1.6' }}>{s[2] ? <><strong>{s[0]}:</strong> <a href={s[2] as string} target="_blank" rel="noopener noreferrer" style={T.link}>{s[1]}</a></> : <><strong>{s[0]}:</strong> {s[1]}</>}</span>
            </div>
          ))}
          <SubHead text={t.single_permit_head} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '10px' }}>{t.single_permit_p}</p>
          {t.permit_items.map((item, i) => (
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
                  ['Revolut / N26', 'Digital', 'IBAN europeo activo en 24h. Usar dirección maltesa para recibir tarjeta física.', 'revolut.com', 'https://revolut.com'],
                  ['Bank of Valletta (BOV)', 'Tradicional', 'El banco más grande de Malta. Estándar para domiciliar nóminas y pagos.', 'bov.com', 'https://bov.com'],
                  ['HSBC Malta', 'Tradicional', 'Ideal si ya tienes cuenta HSBC en otro país. Muy sólido para perfiles profesionales.', 'hsbc.com.mt', 'https://hsbc.com.mt'],
                  ['Moneybase', 'Digital Local', 'Primer ecosistema financiero digital nacido en Malta. Útil para pagos locales.', 'moneybase.com', 'https://moneybase.com'],
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
                  ['Identità Malta', 'e-Residence Card y estatus migratorio', 'Semana 1-2 — cita obligatoria antes del día 90', 'identitamalta.com', 'https://identitamalta.com'],
                  ['Jobsplus', 'Permiso de trabajo y Tax Number', 'Mes 3 — tu empleador lo inicia', 'jobsplus.gov.mt', 'https://jobsplus.gov.mt'],
                  ['Social Security Malta', 'Verificar aportaciones al seguro social', 'Desde que empieces a trabajar', 'socialsecurity.gov.mt', 'https://socialsecurity.gov.mt'],
                  ['Jobs in Malta', 'Portal de empleo local', 'Desde semana 1', 'jobsinmalta.com', 'https://jobsinmalta.com'],
                  ['Keepmeposted', 'Vacantes en hospitality y retail', 'Desde semana 1', 'keepmeposted.com.mt', 'https://keepmeposted.com.mt'],
                  ['Indeed Malta', 'Vacantes generales', 'Desde semana 1', 'indeed.com.mt', 'https://indeed.com.mt'],
                  ['Maltapark', 'Clasificados — vivienda y trabajo', 'Desde semana 1', 'maltapark.com', 'https://maltapark.com'],
                  ['QuickLets', 'Agencia de alquiler para estudiantes', 'Semana 1-2 para vivienda', 'quicklets.com.mt', 'https://quicklets.com.mt'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548780416-f23a4186ceb9?q=80&w=1246&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '€60 – €80', '€250 – €320'],
                  ['Cuarto individual', '€80 – €110', '€320 – €550'],
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
                  ['Maltapark', 'Portal Local #1', 'El sitio #1 de clasificados en la isla', 'maltapark.com', 'https://maltapark.com'],
                  ['QuickLets', 'Agencia', 'La más grande y rápida para estudiantes', 'quicklets.com.mt', 'https://quicklets.com.mt'],
                  ['Zanzi Homes', 'Agencia', 'Especialistas en contratos largos y zonas residenciales', 'zanzihomes.com', 'https://zanzihomes.com'],
                  ['Facebook Marketplace', 'Social', 'Fuente confiable para tratos directos con dueños', 'Facebook Malta', 'https://facebook.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Mexicanos, Colombianos, Argentinos en Malta', 'Ver grupos', '#'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527155431803-74e5f93c7111?q=80&w=1088&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <strong>{t.empleos_cv_b}</strong>. {t.empleos_cv_quote}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_h, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff / Kitchen Assistant', '€7 – €9', 'CV en mano en restaurantes / Indeed'],
                  ['Cleaning Services', 'Cleaner / Housekeeping', '€7 – €8', 'Grupos Facebook / Agencias'],
                  ['Hotels & Tourism', 'Hotel Staff / Reception Assistant', '€8 – €10', 'LinkedIn / Jobs in Malta'],
                  ['iGaming / Customer Support', 'Customer Support Agent', '€10 – €12', 'LinkedIn / portales especializados'],
                  ['Delivery / Logistics', 'Courier / Delivery Rider', '€8 – €11', 'Bolt Food / Wolt'],
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
          <HackBox text={t.empleos_hack} />
        </Section>

        {/* SALARIOS */}
        <Section id="salarios" emoji="📊" title={t.sec_salarios_title}>
          <Intro text={t.salarios_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_salario_h, t.th_usd, t.th_mensual].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', '€7 – €9', '$8 – $10', '€560 – €720'],
                  ['Cleaning', 'Cleaner / Housekeeping', '€7 – €8', '$8 – $9', '€560 – €640'],
                  ['Hotels', 'Hotel Staff / Reception', '€8 – €10', '$9 – $12', '€640 – €800'],
                  ['iGaming', 'Customer Support', '€10 – €12', '$12 – $14', '€800 – €960'],
                  ['Delivery', 'Rider / Courier', '€8 – €11', '$9 – $13', '€640 – €880'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Malta y contactar Embajada/Consulado de tu país', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Facebook/Marketplace y denunciar en Policía local', 'Policía Malta'],
                  ['Problemas con e-Residence', 'Contactar directamente Identità Malta con documentos completos', 'identitamalta.com'],
                  ['Single Permit rechazado', 'Revisar con empleador el estado en Jobsplus', 'jobsplus.gov.mt'],
                  ['Retraso en documentos de escuela', 'Contactar directamente al Student Office de la academia', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Ir al centro de salud más cercano con seguro médico', '999 / 112'],
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661963984279-1b0fa1b3ac0d?q=80&w=1171&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇲🇹`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Malta:\n\n' + feedback)}`, '_blank')
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