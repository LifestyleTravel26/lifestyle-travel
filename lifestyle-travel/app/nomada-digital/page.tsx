'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { usePurchase } from '../hooks/usePurchase'

const translations = {
  es: {
    hero_title: 'Visa Nómada Digital',
    hero_sub: 'Vive en otro país mientras trabajas remoto',
    stat1_label: 'Ingreso mínimo', stat1_value: '$2,000 – $3,500',
    stat2_label: 'Duración', stat2_value: '1 – 3 años',
    stat3_label: 'Dificultad', stat3_value: 'Baja – Media',
    card_title: '¿Qué es la Visa Nómada Digital?',
    card_intro: 'La Visa Nómada Digital es una forma legal de vivir en otro país mientras trabajas remoto para una empresa o clientes internacionales. Tu ingreso viene de fuera, pero tu vida diaria está en el país destino. Bien elegida, te da estabilidad legal, mejor calidad de vida y en algunos casos ventajas fiscales.',
    card_p: 'A diferencia de una visa de trabajo tradicional,',
    card_b: 'no requiere patrocinio de una empresa local.',
    card_p2: 'Está pensada para freelancers, emprendedores o empleados remotos con ingresos de fuera del país destino.',
    filter_title: '💡 Filtro rápido por ingreso mensual:',
    filter_items: [
      '• Menos de €700/mes: Colombia',
      '• $686 – $1,500/mes: Colombia, Argentina o México',
      '• €2,000 – €2,700/mes: Georgia o Hungría',
      '• €2,700 – €3,500/mes: España o Croacia',
      '• Más de $3,000/mes: Portugal, Dubai o Costa Rica',
    ],
    sec_req_title: 'Requisitos Económicos por País',
    req_intro: 'El factor clave para la aprobación es demostrar ingresos estables trabajando para empresas o clientes fuera del país de destino. Sin cupos, sin sorteos — solo ingresos comprobables.',
    th_pais: 'País', th_ingreso: 'Ingreso mínimo/mes', th_duracion: 'Duración', th_dificultad: 'Dificultad',
    req_rows: [
      ['🇬🇪 Georgia', '~$2,000', '365 días', '⭐ Fácil', '#22c55e'],
      ['🇭🇺 Hungría', '€2,000', '1 – 2 años', '⭐ Fácil', '#22c55e'],
      ['🇭🇷 Croacia', '€2,532', '1 año', '⭐⭐ Media', '#f59e0b'],
      ['🇦🇪 Dubai', '$5,000', '1 año', '⭐⭐⭐ Alta', '#ef4444'],
      ['🇪🇸 España', '€2,762', '1 – 3 años', '⭐⭐⭐ Media', '#f59e0b'],
      ['🇵🇹 Portugal', '€3,480', '1 año renovable', '⭐⭐⭐ Alta', '#ef4444'],
      ['🇨🇷 Costa Rica', '$3,000', '1 año renovable', '⭐⭐⭐ Media', '#f59e0b'],
      ['🇨🇴 Colombia', '$686 (3 SMMLV)', '2 años renovable', '⭐⭐ Media', '#f59e0b'],
      ['🇲🇽 México', '$1,500 recomendado', '180 días + residente temporal', '⭐⭐ Media', '#f59e0b'],
      ['🇦🇷 Argentina', '$1,500', 'Visa rentista', '⭐ Fácil', '#22c55e'],
    ],
    sec_comparativa_title: 'Comparativa de Destinos',
    sec_comparativa_sub: 'Ingreso mínimo, costo de vida, impuestos, internet y clima',
    th_comp_pais: 'País', th_comp_ingreso: 'Ingreso Mínimo', th_comp_costo: 'Costo de Vida', th_comp_impuestos: 'Impuestos', th_comp_internet: 'Internet', th_comp_clima: 'Clima',
    comparativa_rows: [
      ['🇬🇪 Georgia', '$2,000', 'Bajo', '0%', 'Rápido', 'Variado'],
      ['🇪🇸 España', '€2,762', 'Alto', '24% (Beckham)', 'Rápido', 'Mediterráneo'],
      ['🇵🇹 Portugal', '€3,480', 'Medio', '20% (NHR)', 'Rápido', 'Mediterráneo'],
      ['🇭🇺 Hungría', '€2,000', 'Medio', '15%', 'Rápido', 'Continental'],
      ['🇭🇷 Croacia', '€2,532', 'Medio', '0% 1er año', 'Rápido', 'Mediterráneo'],
      ['🇦🇪 Dubai', '$5,000', 'Alto', '0%', 'Rápido', 'Caluroso'],
      ['🇨🇷 Costa Rica', '$3,000', 'Medio', '0%', 'Bueno', 'Tropical'],
      ['🇨🇴 Colombia', '$686', 'Bajo', 'Local +183 días', 'Bueno', 'Tropical'],
      ['🇲🇽 México', '$1,500', 'Bajo-Medio', 'Local +183 días', 'Bueno', 'Variado'],
      ['🇦🇷 Argentina', '$1,500', 'Muy Bajo', 'Local', 'Bueno', 'Templado'],
    ],
    sec_impuestos_title: 'Impuestos por País',
    impuestos_intro: 'Cada destino tiene reglas fiscales distintas para ingresos extranjeros. Conoce tu obligación antes de elegir.',
    impuestos_items: [
      ['🇬🇪 Georgia', '0% impuesto para ingresos extranjeros'],
      ['🇪🇸 España', 'Régimen Beckham — 24% flat rate primeros 6 años'],
      ['🇵🇹 Portugal', 'NHR (Non-Habitual Resident) — 20% flat rate primeros 10 años'],
      ['🇭🇷 Croacia', '0% impuesto sobre ingresos extranjeros primer año'],
      ['🇨🇷 Costa Rica', '0% impuesto sobre ingresos extranjeros'],
      ['🇨🇴 Colombia', 'Impuesto local aplica después de 183 días'],
      ['🇲🇽 México', 'Impuesto aplica si resides más de 183 días'],
    ],
    sec_coworking_title: 'Comunidades y Coworkings',
    coworking_intro: 'Espacios y comunidades donde conectar con otros nómadas digitales en cada hub.',
    coworking_items: [
      ['🇬🇪 Georgia (Tbilisi)', 'Impact Hub, Fabrika'],
      ['🇪🇸 España (Barcelona/Madrid)', 'WeWork, Utopicus'],
      ['🇵🇹 Portugal (Lisboa)', 'Second Home, Heden'],
      ['🇨🇴 Colombia (Medellín)', 'Selina, Atomhouse'],
      ['🇲🇽 México (Ciudad de México)', 'WeWork, Comunal'],
      ['🇨🇷 Costa Rica (San José)', 'La Maquila, Impact Hub'],
    ],
    req_hack: 'No elijas el país primero — elige según tu ingreso actual. Georgia (desde $2,000) y Hungría (desde €2,000) son los puntos de entrada más accesibles del blueprint. Una vez establecido con ingresos demostrables, puedes aplicar a Portugal o España.',
    sec_aplic_title: 'Cómo Aplicar — 3 Tipos de Proceso',
    aplic_intro: 'A diferencia de Working Holiday, en la Visa Nómada Digital no compites por cupos. La aprobación depende de cumplir los requisitos de ingresos y documentación. Sin sorteos, sin fechas de apertura — aplicas cuando estás listo.',
    aplic_systems: [
      { n: '1️⃣', title: 'Aplicación Online (Portal Oficial)', desc: 'Creas cuenta, subes documentos y pagas la tasa en el portal oficial. Todo digital.', examples: 'España, Croacia, Hungría', color: '#22c55e', portals: [['España', 'https://prie.comercio.gob.es'], ['Hungría', 'https://enterhungary.gov.hu'], ['Croacia', 'https://mup.gov.hr']] },
      { n: '2️⃣', title: 'Aplicación Consular', desc: 'Presentas documentos originales en el consulado del país de destino desde tu país de origen.', examples: 'Portugal (Visa D8), Italia, Grecia', color: '#f59e0b', portals: [['Portugal', 'https://pedidodevistos.mne.gov.pt']] },
      { n: '3️⃣', title: 'Desde Dentro del País', desc: 'Entras como turista y aplicas a la residencia desde dentro. Puedes abrir banco y preparar documentos localmente.', examples: 'España, Croacia, Georgia', color: '#3b82f6', portals: [['Georgia', 'https://migration.commission.ge'], ['Dubai', 'https://visitdubai.com']] },
    ],
    aplic_hack: 'En visas nómada digital no compites por cupos como en Working Holiday. El factor que determina la aprobación es demostrar ingresos remotos suficientes y estabilidad laboral. Prepara contratos, extractos bancarios y prueba de ingresos de los últimos 6 meses antes de iniciar la aplicación.',
    sec_tiempos_title: 'Tiempos de Aprobación por País',
    tiempos_intro: 'Los tiempos varían según el tipo de aplicación. Online es el más rápido (2-4 semanas). Consulado puede tardar 4-8 semanas. La clave es tener todos los documentos listos antes de aplicar.',
    th_tipo: 'Tipo', th_tiempo: 'Tiempo aprobación', th_portal: 'Portal',
    tiempos_hack: 'Georgia es la única opción donde puedes estar legal desde el día 1 sin trámite previo — entras con pasaporte y tienes 365 días. Úsalo para construir historial de ingresos y luego aplicar a España o Portugal con documentación sólida.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist_intro: 'El proceso va bien cuando preparas tres cosas antes de aplicar: prueba de ingresos remotos, seguro médico y antecedentes penales. La forma más limpia de aprobar es mostrar al menos 6 meses de ingresos estables.',
    checklist: [
      ['Pasaporte vigente', 'Mínimo 12-18 meses de validez para cubrir todo el proceso'],
      ['Prueba de trabajo remoto', 'Contrato laboral con empresa extranjera o facturas de clientes internacionales'],
      ['Extractos bancarios (6 meses)', 'Demuestran ingresos estables por encima del mínimo requerido'],
      ['Seguro médico internacional', 'Cobertura válida durante toda la estancia (€300-900/año)'],
      ['Antecedentes penales apostillados', 'Del país de origen — puede tardar semanas, prepáralo primero'],
      ['Carta de la empresa o clientes', 'Confirma que puedes trabajar remotamente desde otro país'],
      ['Prueba de alojamiento', 'Contrato de alquiler, Airbnb o dirección en el país de destino'],
      ['Pago de tasa de visa', '€75 – €200 según el país'],
    ],
    checklist_red: '⚠️ Los antecedentes penales apostillados son el documento que más tiempo tarda. Empiézalo PRIMERO — puede tardar 2-4 semanas solo ese trámite.',
    checklist_hack: 'Capital de ejecución real = ingreso mínimo requerido + gastos iniciales de instalación. En la práctica muchos nómadas empiezan el proceso con €3,000-6,000 disponibles para cubrir los primeros 30-60 días mientras se establecen.',
    sec_costos_title: 'Gastos Obligatorios No Incluidos',
    th_concepto: 'Concepto', th_costo: 'Costo', th_oblig: 'Obligatorio',
    costos_hack: 'Las visas nómada digital normalmente exigen demostrar ingresos mínimos, pero eso no significa que el proceso sea barato. Muchos países también piden ahorros adicionales. Calcula: ingreso mínimo requerido + €1,500-2,000 de gastos iniciales = tu capital real de ejecución.',
    sec_bancos_title: 'Opciones Bancarias',
    bancos_intro: 'Para una Visa Nómada Digital abre primero Wise o Revolut antes de viajar. Te permite recibir dinero internacionalmente y pagar gastos inmediatos mientras completas la apertura de un banco local.',
    th_banco: 'Banco', th_tipo_banco: 'Tipo', th_region: 'País/Región',
    bancos_hack: 'Abre Wise antes de viajar — te da IBAN europeo, permite recibir pagos en múltiples divisas y transferir internacionalmente barato. Es el banco puente perfecto mientras abres cuenta local en el país destino.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'Reserva hostel o Airbnb para las primeras 1-2 semanas. Busca habitación o apartamento permanente desde ahí. Muchos nómadas digitales encuentran vivienda a través de comunidades de expatriados antes que en portales oficiales.',
    vivienda_costos_head: '💰 Costos de Alojamiento (Estimación)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal', th_mes: 'Precio Mensual',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    vivienda_red: '⚠️ REGLA DE ORO: CERO depósitos antes de visitar la propiedad. Aunque seas nómada digital con visa formal, las estafas de vivienda existen en todos los mercados. Verifica siempre al propietario antes de enviar dinero.',
    vivienda_hack: 'Muchos nómadas digitales encuentran alojamiento a través de networking con otros expats. En ciudades con comunidad activa como Lisboa, Madrid o Tbilisi, las habitaciones se anuncian en grupos de Facebook o Slack antes que en portales. Únete a grupos de tu destino antes de volar.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'A diferencia de Working Holiday, en las visas nómada digital no compites por cupos. La aprobación depende de demostrar ingresos estables y documentación financiera clara. Sin fecha de apertura — aplicas cuando estás listo.',
    th_fase: 'Fase', th_que: 'Qué hacer',
    timeline_rows: [
      ['Fase 1', 'Filtrar países según ingreso actual + elegir destino', '1-2 semanas'],
      ['Fase 2', 'Verificar requisitos exactos + calcular capital necesario', '1 semana'],
      ['Fase 3', 'Iniciar antecedentes penales apostillados (el más lento)', '2-4 semanas'],
      ['Fase 4', 'Reunir extractos bancarios (6 meses) + contrato o facturas', '1 semana'],
      ['Fase 5', 'Contratar seguro médico + crear cuenta en portal oficial', '1 semana'],
      ['Fase 6', 'Enviar aplicación + pagar tasa de visa', 'Día de envío'],
      ['Fase 7', 'Esperar aprobación + planificar viaje', '2 – 8 semanas'],
    ],
    timeline_hack: 'Empieza los antecedentes penales apostillados el día 1 — es el documento que más tarda (2-4 semanas). Mientras esperas, reúne extractos bancarios, contrato y seguro médico. Cuando lleguen los antecedentes, ya tienes todo listo para enviar la aplicación.',
    sec_crisis_title: 'Crisis y Contingencia',
    crisis_items: [
      ['Robo / pérdida de pasaporte', 'Reportar a Policía + contactar Embajada/Consulado de tu país para documento temporal'],
      ['Problemas con visa o residencia', 'Consultar portal oficial de inmigración del país o oficina migratoria local'],
      ['Estafa de vivienda', 'No enviar depósitos sin ver la propiedad — reportar en la plataforma'],
      ['Problemas bancarios', 'Contactar banco inmediatamente para bloquear tarjeta o revisar movimientos'],
      ['Emergencias médicas', 'Contactar proveedor de seguro médico internacional — Europa: 112'],
    ],
    crisis_blue: '🔵 SOPORTE: Portal oficial de cada país + Embajada de tu país + seguro médico internacional. Guarda estos tres contactos desde el día 1 en el destino.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Comparativa de los destinos más populares para Visa Nómada Digital.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Tipo', 'Visa D8', 'Visa Nómada', 'Visa-Free + IE', 'White Card'],
      ['Duración', '1 – 2 años', '1 – 3 años', '365 días', '1 – 2 años'],
      ['Ingreso mínimo', '€3,480/mes', '€2,762/mes', 'Sin requisito', '€2,000/mes'],
      ['Sistema', 'Consulado', 'Online/Consulado', 'Entrada directa', 'Consulado'],
      ['Impuestos', 'NHR posible', 'Régimen Beckham', '1% Small Business', 'Estándar'],
      ['Tasa visa', '€75 – €180', '€80 – €120', 'Muy baja', '€80 – €100'],
      ['Dificultad', 'Alta', 'Media', 'Baja', 'Fácil'],
    ],
    matrix_hack: 'Estrategia inteligente: 1️⃣ Georgia para establecer base legal y fiscal (1% impuestos, sin requisito de ingreso mínimo). 2️⃣ Construir historial de ingresos remotos. 3️⃣ Aplicar a Portugal o España con 6 meses de extractos sólidos. Esa secuencia maximiza probabilidades de aprobación.',
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Te ayudamos a identificar tu mejor ruta como nómada digital.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Visto Nômade Digital',
    hero_sub: 'Viva em outro país enquanto trabalha remotamente',
    stat1_label: 'Renda mínima', stat1_value: '$2.000 – $3.500',
    stat2_label: 'Duração', stat2_value: '1 – 3 anos',
    stat3_label: 'Dificuldade', stat3_value: 'Baixa – Média',
    card_title: 'O que é o Visto Nômade Digital?',
    card_intro: 'O Visto Nômade Digital é uma forma legal de viver em outro país enquanto trabalha remotamente para uma empresa ou clientes internacionais. Sua renda vem de fora, mas sua vida diária está no país de destino. Bem escolhido, oferece estabilidade legal, melhor qualidade de vida e em alguns casos vantagens fiscais.',
    card_p: 'Ao contrário de um visto de trabalho tradicional,',
    card_b: 'não exige patrocínio de uma empresa local.',
    card_p2: 'É pensado para freelancers, empreendedores ou funcionários remotos com renda de fora do país de destino.',
    filter_title: '💡 Filtro rápido por renda mensal:',
    filter_items: [
      '• Menos de €700/mês: Colômbia',
      '• $686 – $1.500/mês: Colômbia, Argentina ou México',
      '• €2.000 – €2.700/mês: Geórgia ou Hungria',
      '• €2.700 – €3.500/mês: Espanha ou Croácia',
      '• Mais de $3.000/mês: Portugal, Dubai ou Costa Rica',
    ],
    sec_req_title: 'Requisitos Econômicos por País',
    req_intro: 'O fator chave para aprovação é demonstrar renda estável trabalhando para empresas ou clientes fora do país de destino. Sem vagas, sem sorteios — apenas renda comprovável.',
    th_pais: 'País', th_ingreso: 'Renda mínima/mês', th_duracion: 'Duração', th_dificultad: 'Dificuldade',
    req_rows: [
      ['🇬🇪 Geórgia', '~$2.000', '365 dias', '⭐ Fácil', '#22c55e'],
      ['🇭🇺 Hungria', '€2.000', '1 – 2 anos', '⭐ Fácil', '#22c55e'],
      ['🇭🇷 Croácia', '€2.532', '1 ano', '⭐⭐ Média', '#f59e0b'],
      ['🇦🇪 Dubai', '$5.000', '1 ano', '⭐⭐⭐ Alta', '#ef4444'],
      ['🇪🇸 Espanha', '€2.762', '1 – 3 anos', '⭐⭐⭐ Média', '#f59e0b'],
      ['🇵🇹 Portugal', '€3.480', '1 ano renovável', '⭐⭐⭐ Alta', '#ef4444'],
      ['🇨🇷 Costa Rica', '$3.000', '1 ano renovável', '⭐⭐⭐ Média', '#f59e0b'],
      ['🇨🇴 Colômbia', '$686 (3 SMMLV)', '2 anos renovável', '⭐⭐ Média', '#f59e0b'],
      ['🇲🇽 México', '$1.500 recomendado', '180 dias + residente temporal', '⭐⭐ Média', '#f59e0b'],
      ['🇦🇷 Argentina', '$1.500', 'Visto rentista', '⭐ Fácil', '#22c55e'],
    ],
    sec_comparativa_title: 'Comparativo de Destinos',
    sec_comparativa_sub: 'Renda mínima, custo de vida, impostos, internet e clima',
    th_comp_pais: 'País', th_comp_ingreso: 'Renda Mínima', th_comp_costo: 'Custo de Vida', th_comp_impuestos: 'Impostos', th_comp_internet: 'Internet', th_comp_clima: 'Clima',
    comparativa_rows: [
      ['🇬🇪 Geórgia', '$2.000', 'Baixo', '0%', 'Rápido', 'Variado'],
      ['🇪🇸 Espanha', '€2.762', 'Alto', '24% (Beckham)', 'Rápido', 'Mediterrâneo'],
      ['🇵🇹 Portugal', '€3.480', 'Médio', '20% (NHR)', 'Rápido', 'Mediterrâneo'],
      ['🇭🇺 Hungria', '€2.000', 'Médio', '15%', 'Rápido', 'Continental'],
      ['🇭🇷 Croácia', '€2.532', 'Médio', '0% 1º ano', 'Rápido', 'Mediterrâneo'],
      ['🇦🇪 Dubai', '$5.000', 'Alto', '0%', 'Rápido', 'Quente'],
      ['🇨🇷 Costa Rica', '$3.000', 'Médio', '0%', 'Bom', 'Tropical'],
      ['🇨🇴 Colômbia', '$686', 'Baixo', 'Local +183 dias', 'Bom', 'Tropical'],
      ['🇲🇽 México', '$1.500', 'Baixo-Médio', 'Local +183 dias', 'Bom', 'Variado'],
      ['🇦🇷 Argentina', '$1.500', 'Muito Baixo', 'Local', 'Bom', 'Temperado'],
    ],
    sec_impuestos_title: 'Impostos por País',
    impuestos_intro: 'Cada destino tem regras fiscais distintas para renda estrangeira. Conheça sua obrigação antes de escolher.',
    impuestos_items: [
      ['🇬🇪 Geórgia', '0% imposto para renda estrangeira'],
      ['🇪🇸 Espanha', 'Regime Beckham — 24% flat rate primeiros 6 anos'],
      ['🇵🇹 Portugal', 'NHR (Non-Habitual Resident) — 20% flat rate primeiros 10 anos'],
      ['🇭🇷 Croácia', '0% imposto sobre renda estrangeira no primeiro ano'],
      ['🇨🇷 Costa Rica', '0% imposto sobre renda estrangeira'],
      ['🇨🇴 Colômbia', 'Imposto local aplica após 183 dias'],
      ['🇲🇽 México', 'Imposto aplica se reside mais de 183 dias'],
    ],
    sec_coworking_title: 'Comunidades e Coworkings',
    coworking_intro: 'Espaços e comunidades para conectar com outros nômades digitais em cada hub.',
    coworking_items: [
      ['🇬🇪 Geórgia (Tbilisi)', 'Impact Hub, Fabrika'],
      ['🇪🇸 Espanha (Barcelona/Madrid)', 'WeWork, Utopicus'],
      ['🇵🇹 Portugal (Lisboa)', 'Second Home, Heden'],
      ['🇨🇴 Colômbia (Medellín)', 'Selina, Atomhouse'],
      ['🇲🇽 México (Cidade do México)', 'WeWork, Comunal'],
      ['🇨🇷 Costa Rica (San José)', 'La Maquila, Impact Hub'],
    ],
    req_hack: 'Não escolha o país primeiro — escolha de acordo com sua renda atual. Geórgia (a partir de $2.000) e Hungria (a partir de €2.000) são os pontos de entrada mais acessíveis do blueprint. Uma vez estabelecido com renda demonstrável, você pode solicitar Portugal ou Espanha.',
    sec_aplic_title: 'Como Solicitar — 3 Tipos de Processo',
    aplic_intro: 'Ao contrário do Working Holiday, no Visto Nômade Digital você não compete por vagas. A aprovação depende de cumprir os requisitos de renda e documentação. Sem sorteios, sem datas de abertura — você solicita quando está pronto.',
    aplic_systems: [
      { n: '1️⃣', title: 'Solicitação Online (Portal Oficial)', desc: 'Você cria conta, sobe documentos e paga a taxa no portal oficial. Tudo digital.', examples: 'Espanha, Croácia, Hungria', color: '#22c55e', portals: [['Espanha', 'https://prie.comercio.gob.es'], ['Hungria', 'https://enterhungary.gov.hu'], ['Croácia', 'https://mup.gov.hr']] },
      { n: '2️⃣', title: 'Solicitação Consular', desc: 'Você apresenta documentos originais no consulado do país de destino a partir do seu país de origem.', examples: 'Portugal (Visto D8), Itália, Grécia', color: '#f59e0b', portals: [['Portugal', 'https://pedidodevistos.mne.gov.pt']] },
      { n: '3️⃣', title: 'De Dentro do País', desc: 'Você entra como turista e solicita a residência de dentro. Pode abrir banco e preparar documentos localmente.', examples: 'Espanha, Croácia, Geórgia', color: '#3b82f6', portals: [['Geórgia', 'https://migration.commission.ge'], ['Dubai', 'https://visitdubai.com']] },
    ],
    aplic_hack: 'Nos vistos nômade digital você não compete por vagas como no Working Holiday. O fator que determina a aprovação é demonstrar renda remota suficiente e estabilidade laboral. Prepare contratos, extratos bancários e prova de renda dos últimos 6 meses antes de iniciar a solicitação.',
    sec_tiempos_title: 'Prazos de Aprovação por País',
    tiempos_intro: 'Os prazos variam conforme o tipo de solicitação. Online é o mais rápido (2-4 semanas). Consulado pode demorar 4-8 semanas. A chave é ter todos os documentos prontos antes de solicitar.',
    th_tipo: 'Tipo', th_tiempo: 'Prazo de aprovação', th_portal: 'Portal',
    tiempos_hack: 'A Geórgia é a única opção onde você pode estar legal desde o dia 1 sem procedimento prévio — você entra com passaporte e tem 365 dias. Use isso para construir histórico de renda e depois solicitar Espanha ou Portugal com documentação sólida.',
    sec_checklist_title: 'Checklist de Documentos',
    checklist_intro: 'O processo vai bem quando você prepara três coisas antes de solicitar: prova de renda remota, seguro médico e antecedentes criminais. A forma mais limpa de aprovar é mostrar pelo menos 6 meses de renda estável.',
    checklist: [
      ['Passaporte válido', 'Mínimo 12-18 meses de validade para cobrir todo o processo'],
      ['Prova de trabalho remoto', 'Contrato de trabalho com empresa estrangeira ou faturas de clientes internacionais'],
      ['Extratos bancários (6 meses)', 'Demonstram renda estável acima do mínimo exigido'],
      ['Seguro médico internacional', 'Cobertura válida durante toda a estadia (€300-900/ano)'],
      ['Antecedentes criminais apostilados', 'Do país de origem — pode demorar semanas, prepare primeiro'],
      ['Carta da empresa ou clientes', 'Confirma que você pode trabalhar remotamente de outro país'],
      ['Prova de alojamento', 'Contrato de aluguel, Airbnb ou endereço no país de destino'],
      ['Pagamento da taxa de visto', '€75 – €200 conforme o país'],
    ],
    checklist_red: '⚠️ Os antecedentes criminais apostilados são o documento que mais demora. Comece PRIMEIRO — pode demorar 2-4 semanas só esse procedimento.',
    checklist_hack: 'Capital de execução real = renda mínima exigida + despesas iniciais de instalação. Na prática muitos nômades começam o processo com €3.000-6.000 disponíveis para cobrir os primeiros 30-60 dias enquanto se estabelecem.',
    sec_costos_title: 'Despesas Obrigatórias Não Incluídas',
    th_concepto: 'Conceito', th_costo: 'Custo', th_oblig: 'Obrigatório',
    costos_hack: 'Os vistos nômade digital normalmente exigem demonstrar renda mínima, mas isso não significa que o processo seja barato. Muitos países também pedem poupanças adicionais. Calcule: renda mínima exigida + €1.500-2.000 de despesas iniciais = seu capital real de execução.',
    sec_bancos_title: 'Opções Bancárias',
    bancos_intro: 'Para um Visto Nômade Digital abra primeiro Wise ou Revolut antes de viajar. Permite receber dinheiro internacionalmente e pagar despesas imediatas enquanto você abre uma conta local.',
    th_banco: 'Banco', th_tipo_banco: 'Tipo', th_region: 'País/Região',
    bancos_hack: 'Abra Wise antes de viajar — oferece IBAN europeu, permite receber pagamentos em múltiplas divisas e transferir internacionalmente barato. É o banco ponte perfeito enquanto você abre conta local no país de destino.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'Reserve hostel ou Airbnb para as primeiras 1-2 semanas. Busque quarto ou apartamento permanente a partir daí. Muitos nômades digitais encontram moradia através de comunidades de expatriados antes dos portais oficiais.',
    vivienda_costos_head: '💰 Custos de Alojamento (Estimativa)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal', th_mes: 'Preço Mensal',
    vivienda_canales_head: '📍 Canais de Busca',
    vivienda_red: '⚠️ REGRA DE OURO: ZERO depósitos antes de visitar a propriedade. Mesmo sendo nômade digital com visto formal, os golpes de moradia existem em todos os mercados. Sempre verifique o proprietário antes de enviar dinheiro.',
    vivienda_hack: 'Muitos nômades digitais encontram alojamento através de networking com outros expatriados. Em cidades com comunidade ativa como Lisboa, Madri ou Tbilisi, os quartos são anunciados em grupos do Facebook ou Slack antes dos portais. Entre em grupos do seu destino antes de viajar.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Ao contrário do Working Holiday, nos vistos nômade digital você não compete por vagas. A aprovação depende de demonstrar renda estável e documentação financeira clara. Sem data de abertura — você solicita quando está pronto.',
    th_fase: 'Fase', th_que: 'O que fazer',
    timeline_rows: [
      ['Fase 1', 'Filtrar países conforme renda atual + escolher destino', '1-2 semanas'],
      ['Fase 2', 'Verificar requisitos exatos + calcular capital necessário', '1 semana'],
      ['Fase 3', 'Iniciar antecedentes criminais apostilados (o mais lento)', '2-4 semanas'],
      ['Fase 4', 'Reunir extratos bancários (6 meses) + contrato ou faturas', '1 semana'],
      ['Fase 5', 'Contratar seguro médico + criar conta no portal oficial', '1 semana'],
      ['Fase 6', 'Enviar solicitação + pagar taxa de visto', 'Dia do envio'],
      ['Fase 7', 'Aguardar aprovação + planejar viagem', '2 – 8 semanas'],
    ],
    timeline_hack: 'Comece os antecedentes criminais apostilados no dia 1 — é o documento que mais demora (2-4 semanas). Enquanto aguarda, reúna extratos bancários, contrato e seguro médico. Quando chegarem os antecedentes, você já tem tudo pronto para enviar a solicitação.',
    sec_crisis_title: 'Crise e Contingência',
    crisis_items: [
      ['Roubo / perda de passaporte', 'Registrar na Polícia + contatar Embaixada/Consulado do seu país para documento temporário'],
      ['Problemas com visto ou residência', 'Consultar portal oficial de imigração do país ou escritório migratório local'],
      ['Golpe de moradia', 'Não enviar depósitos sem ver a propriedade — reportar na plataforma'],
      ['Problemas bancários', 'Contatar banco imediatamente para bloquear cartão ou revisar movimentos'],
      ['Emergências médicas', 'Contatar provedor de seguro médico internacional — Europa: 112'],
    ],
    crisis_blue: '🔵 SUPORTE: Portal oficial de cada país + Embaixada do seu país + seguro médico internacional. Salve esses três contatos desde o dia 1 no destino.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Comparativo dos destinos mais populares para Visto Nômade Digital.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Tipo', 'Visto D8', 'Visto Nômade', 'Visa-Free + IE', 'White Card'],
      ['Duração', '1 – 2 anos', '1 – 3 anos', '365 dias', '1 – 2 anos'],
      ['Renda mínima', '€3.480/mês', '€2.762/mês', 'Sem requisito', '€2.000/mês'],
      ['Sistema', 'Consulado', 'Online/Consulado', 'Entrada direta', 'Consulado'],
      ['Impostos', 'NHR possível', 'Regime Beckham', '1% Small Business', 'Padrão'],
      ['Taxa visto', '€75 – €180', '€80 – €120', 'Muito baixa', '€80 – €100'],
      ['Dificuldade', 'Alta', 'Média', 'Baixa', 'Fácil'],
    ],
    matrix_hack: 'Estratégia inteligente: 1️⃣ Geórgia para estabelecer base legal e fiscal (1% impostos, sem requisito de renda mínima). 2️⃣ Construir histórico de renda remota. 3️⃣ Solicitar Portugal ou Espanha com 6 meses de extratos sólidos. Essa sequência maximiza as chances de aprovação.',
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Te ajudamos a identificar sua melhor rota como nômade digital.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Digital Nomad Visa',
    hero_sub: 'Live in another country while working remotely',
    stat1_label: 'Minimum income', stat1_value: '$2,000 – $3,500',
    stat2_label: 'Duration', stat2_value: '1 – 3 years',
    stat3_label: 'Difficulty', stat3_value: 'Low – Medium',
    card_title: 'What is the Digital Nomad Visa?',
    card_intro: 'The Digital Nomad Visa is a legal way to live in another country while working remotely for an international company or clients. Your income comes from abroad, but your daily life is in the destination country. Well chosen, it gives you legal stability, better quality of life and in some cases tax advantages.',
    card_p: 'Unlike a traditional work visa,',
    card_b: 'it does not require sponsorship from a local company.',
    card_p2: 'It is designed for freelancers, entrepreneurs or remote employees with income from outside the destination country.',
    filter_title: '💡 Quick filter by monthly income:',
    filter_items: [
      '• Less than €700/month: Colombia',
      '• $686 – $1,500/month: Colombia, Argentina or Mexico',
      '• €2,000 – €2,700/month: Georgia or Hungary',
      '• €2,700 – €3,500/month: Spain or Croatia',
      '• More than $3,000/month: Portugal, Dubai or Costa Rica',
    ],
    sec_req_title: 'Economic Requirements by Country',
    req_intro: 'The key factor for approval is demonstrating stable income working for companies or clients outside the destination country. No quotas, no lotteries — just provable income.',
    th_pais: 'Country', th_ingreso: 'Minimum income/month', th_duracion: 'Duration', th_dificultad: 'Difficulty',
    req_rows: [
      ['🇬🇪 Georgia', '~$2,000', '365 days', '⭐ Easy', '#22c55e'],
      ['🇭🇺 Hungary', '€2,000', '1 – 2 years', '⭐ Easy', '#22c55e'],
      ['🇭🇷 Croatia', '€2,532', '1 year', '⭐⭐ Medium', '#f59e0b'],
      ['🇦🇪 Dubai', '$5,000', '1 year', '⭐⭐⭐ High', '#ef4444'],
      ['🇪🇸 Spain', '€2,762', '1 – 3 years', '⭐⭐⭐ Medium', '#f59e0b'],
      ['🇵🇹 Portugal', '€3,480', '1 year renewable', '⭐⭐⭐ High', '#ef4444'],
      ['🇨🇷 Costa Rica', '$3,000', '1 year renewable', '⭐⭐⭐ Medium', '#f59e0b'],
      ['🇨🇴 Colombia', '$686 (3 SMMLV)', '2 years renewable', '⭐⭐ Medium', '#f59e0b'],
      ['🇲🇽 Mexico', '$1,500 recommended', '180 days + temporary resident', '⭐⭐ Medium', '#f59e0b'],
      ['🇦🇷 Argentina', '$1,500', 'Rentista visa', '⭐ Easy', '#22c55e'],
    ],
    sec_comparativa_title: 'Destination Comparison',
    sec_comparativa_sub: 'Minimum income, cost of living, taxes, internet and climate',
    th_comp_pais: 'Country', th_comp_ingreso: 'Minimum Income', th_comp_costo: 'Cost of Living', th_comp_impuestos: 'Taxes', th_comp_internet: 'Internet', th_comp_clima: 'Climate',
    comparativa_rows: [
      ['🇬🇪 Georgia', '$2,000', 'Low', '0%', 'Fast', 'Varied'],
      ['🇪🇸 Spain', '€2,762', 'High', '24% (Beckham)', 'Fast', 'Mediterranean'],
      ['🇵🇹 Portugal', '€3,480', 'Medium', '20% (NHR)', 'Fast', 'Mediterranean'],
      ['🇭🇺 Hungary', '€2,000', 'Medium', '15%', 'Fast', 'Continental'],
      ['🇭🇷 Croatia', '€2,532', 'Medium', '0% 1st year', 'Fast', 'Mediterranean'],
      ['🇦🇪 Dubai', '$5,000', 'High', '0%', 'Fast', 'Hot'],
      ['🇨🇷 Costa Rica', '$3,000', 'Medium', '0%', 'Good', 'Tropical'],
      ['🇨🇴 Colombia', '$686', 'Low', 'Local +183 days', 'Good', 'Tropical'],
      ['🇲🇽 Mexico', '$1,500', 'Low-Medium', 'Local +183 days', 'Good', 'Varied'],
      ['🇦🇷 Argentina', '$1,500', 'Very Low', 'Local', 'Good', 'Temperate'],
    ],
    sec_impuestos_title: 'Taxes by Country',
    impuestos_intro: 'Each destination has different tax rules for foreign income. Know your obligations before choosing.',
    impuestos_items: [
      ['🇬🇪 Georgia', '0% tax on foreign income'],
      ['🇪🇸 Spain', 'Beckham Regime — 24% flat rate first 6 years'],
      ['🇵🇹 Portugal', 'NHR (Non-Habitual Resident) — 20% flat rate first 10 years'],
      ['🇭🇷 Croatia', '0% tax on foreign income first year'],
      ['🇨🇷 Costa Rica', '0% tax on foreign income'],
      ['🇨🇴 Colombia', 'Local tax applies after 183 days'],
      ['🇲🇽 Mexico', 'Tax applies if you reside more than 183 days'],
    ],
    sec_coworking_title: 'Communities & Coworkings',
    coworking_intro: 'Spaces and communities to connect with other digital nomads in each hub.',
    coworking_items: [
      ['🇬🇪 Georgia (Tbilisi)', 'Impact Hub, Fabrika'],
      ['🇪🇸 Spain (Barcelona/Madrid)', 'WeWork, Utopicus'],
      ['🇵🇹 Portugal (Lisbon)', 'Second Home, Heden'],
      ['🇨🇴 Colombia (Medellín)', 'Selina, Atomhouse'],
      ['🇲🇽 Mexico (Mexico City)', 'WeWork, Comunal'],
      ['🇨🇷 Costa Rica (San José)', 'La Maquila, Impact Hub'],
    ],
    req_hack: 'Don\'t choose the country first — choose based on your current income. Georgia (from $2,000) and Hungary (from €2,000) are the most accessible entry points in the blueprint. Once established with provable income, you can apply to Portugal or Spain.',
    sec_aplic_title: 'How to Apply — 3 Types of Process',
    aplic_intro: 'Unlike Working Holiday, with the Digital Nomad Visa you don\'t compete for quotas. Approval depends on meeting the income and documentation requirements. No lotteries, no opening dates — you apply when you\'re ready.',
    aplic_systems: [
      { n: '1️⃣', title: 'Online Application (Official Portal)', desc: 'You create an account, upload documents and pay the fee on the official portal. All digital.', examples: 'Spain, Croatia, Hungary', color: '#22c55e', portals: [['Spain', 'https://prie.comercio.gob.es'], ['Hungary', 'https://enterhungary.gov.hu'], ['Croatia', 'https://mup.gov.hr']] },
      { n: '2️⃣', title: 'Consular Application', desc: 'You submit original documents at the consulate of the destination country from your home country.', examples: 'Portugal (Visa D8), Italy, Greece', color: '#f59e0b', portals: [['Portugal', 'https://pedidodevistos.mne.gov.pt']] },
      { n: '3️⃣', title: 'From Inside the Country', desc: 'You enter as a tourist and apply for residency from inside. You can open a bank account and prepare documents locally.', examples: 'Spain, Croatia, Georgia', color: '#3b82f6', portals: [['Georgia', 'https://migration.commission.ge'], ['Dubai', 'https://visitdubai.com']] },
    ],
    aplic_hack: 'With digital nomad visas you don\'t compete for quotas like in Working Holiday. The factor that determines approval is demonstrating sufficient remote income and employment stability. Prepare contracts, bank statements and proof of income from the last 6 months before starting the application.',
    sec_tiempos_title: 'Approval Times by Country',
    tiempos_intro: 'Times vary depending on the type of application. Online is the fastest (2-4 weeks). Consulate can take 4-8 weeks. The key is having all documents ready before applying.',
    th_tipo: 'Type', th_tiempo: 'Approval time', th_portal: 'Portal',
    tiempos_hack: 'Georgia is the only option where you can be legal from day 1 without prior procedure — you enter with a passport and have 365 days. Use it to build income history and then apply to Spain or Portugal with solid documentation.',
    sec_checklist_title: 'Documents Checklist',
    checklist_intro: 'The process goes well when you prepare three things before applying: proof of remote income, health insurance and criminal record. The cleanest way to get approved is to show at least 6 months of stable income.',
    checklist: [
      ['Valid passport', 'Minimum 12-18 months validity to cover the entire process'],
      ['Proof of remote work', 'Employment contract with foreign company or invoices from international clients'],
      ['Bank statements (6 months)', 'Demonstrate stable income above the required minimum'],
      ['International health insurance', 'Valid coverage throughout the stay (€300-900/year)'],
      ['Apostilled criminal record', 'From your home country — can take weeks, prepare it first'],
      ['Letter from company or clients', 'Confirms you can work remotely from another country'],
      ['Proof of accommodation', 'Rental contract, Airbnb or address in the destination country'],
      ['Visa fee payment', '€75 – €200 depending on country'],
    ],
    checklist_red: '⚠️ The apostilled criminal record is the document that takes the longest. Start it FIRST — that process alone can take 2-4 weeks.',
    checklist_hack: 'Real execution capital = required minimum income + initial setup costs. In practice many nomads start the process with €3,000-6,000 available to cover the first 30-60 days while they get established.',
    sec_costos_title: 'Mandatory Costs Not Included',
    th_concepto: 'Item', th_costo: 'Cost', th_oblig: 'Mandatory',
    costos_hack: 'Digital nomad visas usually require proving minimum income, but that doesn\'t mean the process is cheap. Many countries also ask for additional savings. Calculate: required minimum income + €1,500-2,000 initial costs = your real execution capital.',
    sec_bancos_title: 'Banking Options',
    bancos_intro: 'For a Digital Nomad Visa first open Wise or Revolut before traveling. It allows you to receive money internationally and pay immediate expenses while you complete opening a local bank account.',
    th_banco: 'Bank', th_tipo_banco: 'Type', th_region: 'Country/Region',
    bancos_hack: 'Open Wise before traveling — it gives you a European IBAN, allows receiving payments in multiple currencies and transferring internationally cheaply. It\'s the perfect bridge bank while you open a local account in the destination country.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Book a hostel or Airbnb for the first 1-2 weeks. Look for a permanent room or apartment from there. Many digital nomads find housing through expat communities before official portals.',
    vivienda_costos_head: '💰 Accommodation Costs (Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price', th_mes: 'Monthly Price',
    vivienda_canales_head: '📍 Search Channels',
    vivienda_red: '⚠️ GOLDEN RULE: ZERO deposits before visiting the property. Even as a digital nomad with a formal visa, housing scams exist in all markets. Always verify the owner before sending money.',
    vivienda_hack: 'Many digital nomads find accommodation through networking with other expats. In cities with active communities like Lisbon, Madrid or Tbilisi, rooms are advertised in Facebook or Slack groups before portals. Join groups for your destination before flying.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Unlike Working Holiday, with digital nomad visas you don\'t compete for quotas. Approval depends on demonstrating stable income and clear financial documentation. No opening date — you apply when you\'re ready.',
    th_fase: 'Phase', th_que: 'What to do',
    timeline_rows: [
      ['Phase 1', 'Filter countries based on current income + choose destination', '1-2 weeks'],
      ['Phase 2', 'Verify exact requirements + calculate necessary capital', '1 week'],
      ['Phase 3', 'Start apostilled criminal record (the slowest)', '2-4 weeks'],
      ['Phase 4', 'Gather bank statements (6 months) + contract or invoices', '1 week'],
      ['Phase 5', 'Get health insurance + create account on official portal', '1 week'],
      ['Phase 6', 'Submit application + pay visa fee', 'Submission day'],
      ['Phase 7', 'Wait for approval + plan trip', '2 – 8 weeks'],
    ],
    timeline_hack: 'Start the apostilled criminal record on day 1 — it\'s the document that takes longest (2-4 weeks). While waiting, gather bank statements, contract and health insurance. When the record arrives, you already have everything ready to submit the application.',
    sec_crisis_title: 'Crisis & Contingency',
    crisis_items: [
      ['Theft / lost passport', 'Report to Police + contact your country\'s Embassy/Consulate for temporary document'],
      ['Visa or residency problems', 'Check official immigration portal of the country or local migration office'],
      ['Housing scam', 'Don\'t send deposits without seeing the property — report on the platform'],
      ['Banking problems', 'Contact bank immediately to block card or review transactions'],
      ['Medical emergencies', 'Contact international health insurance provider — Europe: 112'],
    ],
    crisis_blue: '🔵 SUPPORT: Official portal of each country + your country\'s Embassy + international health insurance. Save these three contacts from day 1 in the destination.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Comparison of the most popular destinations for Digital Nomad Visa.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Type', 'Visa D8', 'Nomad Visa', 'Visa-Free + IE', 'White Card'],
      ['Duration', '1 – 2 years', '1 – 3 years', '365 days', '1 – 2 years'],
      ['Min income', '€3,480/month', '€2,762/month', 'No requirement', '€2,000/month'],
      ['System', 'Consulate', 'Online/Consulate', 'Direct entry', 'Consulate'],
      ['Taxes', 'NHR possible', 'Beckham Regime', '1% Small Business', 'Standard'],
      ['Visa fee', '€75 – €180', '€80 – €120', 'Very low', '€80 – €100'],
      ['Difficulty', 'High', 'Medium', 'Low', 'Easy'],
    ],
    matrix_hack: 'Smart strategy: 1️⃣ Georgia to establish legal and tax base (1% taxes, no minimum income requirement). 2️⃣ Build remote income history. 3️⃣ Apply to Portugal or Spain with 6 months of solid statements. That sequence maximizes approval chances.',
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We help you identify your best route as a digital nomad.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

export default function NomadaDigital() {
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
  const Lnk = ({ text, url }: { text: string; url: string }) => (
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1715210471871-590883e6a720?q=80&w=1200&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>💻</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[[t.stat1_label, t.stat1_value, '💰'], [t.stat2_label, t.stat2_value, '🕐'], [t.stat3_label, t.stat3_value, '📊']].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s[2]}</div>
            <div style={{ color: '#555555', fontSize: '10px', marginBottom: '3px' }}>{s[0]}</div>
            <div style={{ fontWeight: '700', fontSize: '12px', color: '#1a1a2e' }}>{s[1]}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 40px', maxWidth: '600px', margin: '0 auto' }}>

        {/* CARD INTRO */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '16px' }}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530977875151-aae9742fde19?q=80&w=735&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>{t.card_title}</h2>
          <Intro text={t.card_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '10px' }}>
            {t.card_p} <strong>{t.card_b}</strong> {t.card_p2}
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>{t.filter_title}</p>
            <p style={{ fontSize: '13px', color: '#1a1a2e', margin: 0, lineHeight: '1.7' }}>
              {t.filter_items.map((item, i) => <span key={i}>{item}<br /></span>)}
            </p>
          </div>
        </div>

        {/* REQUISITOS */}

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

        <Section id="requisitos" emoji="📊" title={t.sec_req_title}>
          <Intro text={t.req_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_pais, t.th_ingreso, t.th_duracion, t.th_dificultad].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.req_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '700' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: r[4] as string, fontWeight: '600' }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.req_hack} />
        </Section>

        <Section id="comparativa" emoji="📊" title={t.sec_comparativa_title}>
          <Intro text={t.sec_comparativa_sub} />
          <div style={T.wrap}>
            <table style={{ ...T.table, minWidth: '560px' }}>
              <thead><tr>{[t.th_comp_pais, t.th_comp_ingreso, t.th_comp_costo, t.th_comp_impuestos, t.th_comp_internet, t.th_comp_clima].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.comparativa_rows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                    <td style={T.td(i)}>{r[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="impuestos" emoji="🧾" title={t.sec_impuestos_title}>
          <Intro text={t.impuestos_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {t.impuestos_items.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #1e3a5f' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#1a1a2e', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="coworking" emoji="💼" title={t.sec_coworking_title}>
          <Intro text={t.coworking_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {t.coworking_items.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #22c55e' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#166534', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* APLICACION */}
        <Section id="aplicacion" emoji="🛂" title={t.sec_aplic_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.aplic_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {t.aplic_systems.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px', color: '#1a1a2e' }}>{item.n} {item.title}</p>
                <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 6px', lineHeight: '1.5' }}>{item.desc}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: '0 0 6px' }}>Ejemplos: <strong>{item.examples}</strong></p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                  {item.portals.map((p, j) => (
                    <a key={j} href={p[1]} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '6px', padding: '3px 10px', fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>{p[0]} →</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <HackBox text={t.aplic_hack} />
        </Section>

        {/* TIEMPOS */}
        <Section id="tiempos" emoji="⏳" title={t.sec_tiempos_title}>
          <Intro text={t.tiempos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_pais, t.th_tipo, t.th_tiempo, t.th_portal].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🇬🇪 Georgia', 'Entrada directa', 'Inmediato', 'migration.commission.ge', 'https://migration.commission.ge'],
                  ['🇭🇺 Hungría', 'Consulado + residencia', '30 – 45 días', 'enterhungary.gov.hu', 'https://enterhungary.gov.hu'],
                  ['🇦🇪 Dubai', 'Online', '30 – 45 días', 'visitdubai.com', 'https://visitdubai.com'],
                  ['🇪🇸 España', 'Online / residencia', '20 – 45 días', 'prie.comercio.gob.es', 'https://prie.comercio.gob.es'],
                  ['🇭🇷 Croacia', 'Online / consulado', '30 – 60 días', 'mup.gov.hr', 'https://mup.gov.hr'],
                  ['🇵🇹 Portugal', 'Consulado (Visa D8)', '30 – 60 días', 'pedidodevistos.mne.gov.pt', 'https://pedidodevistos.mne.gov.pt'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[2]}</td>
                    <td style={T.td(i)}><Lnk text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.tiempos_hack} />
        </Section>

        {/* CHECKLIST */}
        <Section id="checklist" emoji="📋" title={t.sec_checklist_title}>
          <Intro text={t.checklist_intro} />
          {t.checklist.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#22c55e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <RedBox text={t.checklist_red} />
          <HackBox text={t.checklist_hack} />
        </Section>

        {/* COSTOS */}
        <Section id="costos" emoji="💰" title={t.sec_costos_title}>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Seguro médico privado', '€300 – €900/año', '✅ Sí'],
                  ['Tasa de aplicación de visa', '€75 – €200', '✅ Sí'],
                  ['Traducciones y apostillas', '€50 – €200', '✅ Sí'],
                  ['Antecedentes penales', '€20 – €80', '✅ Sí'],
                  ['Boleto de avión inicial', '€400 – €1,200', '✅ Sí'],
                  ['Alojamiento inicial', '€500 – €1,500', '✅ Primer mes'],
                  ['Capital recomendado total', '€3,000 – €6,000', '✅ Para arrancar bien'],
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
          <HackBox text={t.costos_hack} />
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title={t.sec_bancos_title}>
          <Intro text={t.bancos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_banco, t.th_tipo_banco, t.th_region, 'Website'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Wise', 'Digital', 'Global', 'wise.com', 'https://wise.com'],
                  ['Revolut', 'Digital', 'Global', 'revolut.com', 'https://revolut.com'],
                  ['N26', 'Digital (EU IBAN)', 'Europa', 'n26.com', 'https://n26.com'],
                  ['Bunq', 'Digital', 'Europa', 'bunq.com', 'https://bunq.com'],
                  ['CaixaBank', 'Tradicional', 'España', 'caixabank.es', 'https://caixabank.es'],
                  ['Millennium BCP', 'Tradicional', 'Portugal', 'millenniumbcp.pt', 'https://millenniumbcp.pt'],
                  ['OTP Bank', 'Tradicional', 'Hungría', 'otpbank.hu', 'https://otpbank.hu'],
                  ['Bank of Georgia', 'Tradicional', 'Georgia', 'bankofgeorgia.ge', 'https://bankofgeorgia.ge'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={T.td(i)}><Lnk text={r[3] as string} url={r[4] as string} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.bancos_hack} />
        </Section>

        {/* VIVIENDA */}
        <Section id="vivienda" emoji="🏠" title={t.sec_vivienda_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1652088241116-5faf85b6c6aa?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[['Cuarto compartido', '$120 – $220', '$480 – $880'], ['Cuarto individual', '$250 – $450', '$1,000 – $1,800']].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text={t.vivienda_canales_head} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            {[
              ['Airbnb', 'Temporal', 'Primeras semanas — base para buscar permanente', 'airbnb.com', 'https://airbnb.com'],
              ['Booking', 'Hostels económicos', 'Ideal para llegar sin compromisos', 'booking.com', 'https://booking.com'],
              ['Facebook Groups', 'Comunidad expats', 'Habitaciones y networking entre nómadas digitales', 'facebook.com', 'https://facebook.com'],
              ['Expat.com', 'Comunidad internacional', 'Vivienda y contactos locales en cada país', 'expat.com', 'https://expat.com'],
              ['Nomad List', 'Comunidad nómadas', 'Info de ciudades + comunidad de nómadas activos', 'nomadlist.com', 'https://nomadlist.com'],
            ].map((r, i) => (
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
          <HackBox text={t.vivienda_hack} />
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="⏳" title={t.sec_timeline_title}>
          <Intro text={t.timeline_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_fase, t.th_que, 'Tiempo'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1653745375567-c6741ec5fef8?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
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
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, '🇵🇹 Portugal', '🇪🇸 España', '🇬🇪 Georgia', '🇭🇺 Hungría'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
          <a href="https://lifestylentravel2.lemonsqueezy.com/checkout/buy/9528f8ba-c895-43fb-ba9b-2637815b1366?embed=1" className="lemonsqueezy-button" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

      </div>
    </main>
  )
}
