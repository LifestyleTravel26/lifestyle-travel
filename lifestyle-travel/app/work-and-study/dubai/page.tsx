'use client'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Dubái',
    hero_sub: 'Medio Oriente · Work and Study',
    hero_badge: 'Medio',
    stat1_label: 'Costo inicial (Cursos)',
    stat1_value: '$3,500 - $7,000',
    stat2_label: 'Duración',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificultad',
    stat3_value: 'Medio',
    included_title: 'Lo que incluye el Blueprint',
    included: [
      'Emirates ID en 10-15 días — la llave para banco, contratos y trabajo en Dubái',
      'Sin solvencia bancaria obligatoria — el pago del curso actúa como garantía',
      '10 escuelas verificadas en JLT, Knowledge Park y Business Bay',
      'Acceso a universidades internacionales con títulos británicos, australianos y canadienses',
      'Comunidad latina activa — grupos de WhatsApp para vivienda y trabajo',
    ],
    sec_autoridad_title: 'Encabezado de Autoridad',
    autoridad_intro: 'Dubái es el destino más rápido del blueprint. El proceso de residencia se cierra en 10-15 días. Sin solvencia bancaria obligatoria — el pago del curso actúa como garantía. El Emirates ID es la llave para todo: banco, contratos y trabajo.',
    autoridad_warn_label: '⚠️ Importante:',
    autoridad_warn: 'La visa de estudiante permite vivir y estudiar en Dubái, pero',
    autoridad_warn_b: 'NO otorga automáticamente permiso de trabajo',
    autoridad_warn_end: '. Para trabajar legalmente, una empresa debe tramitar el permiso laboral correspondiente.',
    autoridad_p2_label: 'Acelerador de puesta en marcha:',
    autoridad_p2: 'coordinamos el orden correcto de los pasos — Entry Permit, Medical Test, Emirates ID y contratación — para que estés listo en tiempo récord.',
    autoridad_blue: '💱 Conversión Dubái: 1 AED ≈ $0.27 USD. $200 USD ≈ 735 AED. Todos los salarios en AED con equivalente en USD.',
    autoridad_hack: 'En Dubái el Emirates ID es la llave para todo. Sin esta tarjeta no puedes abrir banco, firmar contrato ni activar trabajo. Si llevas los documentos bien, el proceso se completa en 10 a 15 días — mucho más rápido que cualquier país europeo.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estrategia y Presupuesto: Selección de Academia',
    estrategia_intro: 'En Dubái la academia no se elige solo por precio. Lo inteligente es escoger una bien ubicada cerca de zonas laborales clave como JLT, Dubai Marina o Knowledge Park, donde se concentra el movimiento internacional y el networking que más te conviene.',
    estrategia_head: '🇦🇪 Matriz de Escuelas de Inglés: Dubái 2026',
    th_inst: 'Institución', th_loc: 'Ubicación', th_precio: 'Precio (24 semanas)', th_web: 'Website',
    estrategia_blue: '🔵 SOLVENCIA DUBÁI: A diferencia de Europa, Dubái NO exige demostrar una cifra fija en el banco. El pago del curso + paquete de visa actúa como garantía financiera. Capital recomendado: $4,300 - $5,650 USD total (curso + visa + gastos iniciales).',
    estrategia_hack: 'Suma el precio de tu escuela + ~$900 de visa y trámites + $150 de exámenes médicos. Ese es tu Capital de Ejecución Real para Dubái. La ventaja es que no necesitas demostrar solvencia bancaria alta como en Europa.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Los programas de preparación académica en Dubái abren la puerta a universidades internacionales con títulos reconocidos globalmente. Al graduarte puedes acceder a empleo profesional en Business, Finanzas, Tecnología y Turismo.',
    th_prog: 'Institución', th_programa: 'Programa', th_duracion: 'Duración', th_precio_prog: 'Precio',
    pre_blue: '🔵 UNIVERSIDADES INTERNACIONALES: Dubái alberga campus de universidades británicas, australianas y canadienses en Dubai Knowledge Park y Dubai International Academic City. Puedes obtener un título internacional estudiando en Dubái.',
    pre_hack: 'Dubái tiene una ventaja única: puedes obtener un título británico, australiano o canadiense sin salir de los Emiratos. Esto abre puertas a empleos en empresas multinacionales tanto en Dubái como en otros países del Golfo.',
    sec_edu_title: 'Educación Superior',
    edu_intro: 'Dubái tiene universidades internacionales de primer nivel con títulos reconocidos globalmente. Muchos graduados logran transicionar a una Employment Visa patrocinada por empresas multinacionales.',
    edu_bachelor_head: '🎓 Bachelor Degrees',
    th_programas: 'Programas', th_anual: 'Precio anual', th_total: 'Precio total',
    edu_master_head: '⭐ Masters (MBA y MSc)',
    th_programa_m: 'Programa',
    edu_hack: 'University of Bolton Dubai tiene los MBAs más accesibles del Golfo ($6,000-$10,000 total). Un título británico en Dubái te abre puertas en toda la región del Golfo Pérsico.',
    sec_gastos_title: 'Gastos Obligatorios No Incluidos',
    gastos_intro: 'Dubái tiene una ventaja única: NO se exige solvencia bancaria fija como en Europa. Los gastos principales son el paquete de visa y los exámenes médicos obligatorios.',
    th_concepto: 'Concepto', th_costo: 'Costo (USD)', th_oblig: 'Obligatorio',
    gastos_blue: '🔵 VENTAJA DUBÁI: No necesitas demostrar solvencia bancaria alta como en Irlanda (€6,665) o Malta (€5,040). El pago del curso actúa como garantía. Capital de Ejecución Real: $4,300 – $5,650 USD total.',
    gastos_hack: 'Suma el precio de tu escuela + $900 de visa y trámites + $150 de exámenes médicos. Ese es tu número real para arrancar en Dubái. Mucho más accesible que Europa para quienes no tienen grandes ahorros.',
    sec_aterrizaje_title: 'Protocolo de Aterrizaje y Gestión',
    aterrizaje_intro: 'En Dubái todo funciona con rapidez. El proceso Entry Permit → Medical Test → Emirates ID se cierra en 10-15 días si llevas los documentos correctos. El Emirates ID es tu prioridad #1 al llegar.',
    emirates_head: '1. Emirates ID — Tu ID oficial en Dubái',
    pasos: [
      ['Paso 1', 'Entrar a Dubái con Entry Permit emitido por tu escuela (sponsor)', null],
      ['Paso 2', 'Exámenes médicos (Medical Fitness Tests) en centros autorizados por Dubai Health Authority', 'https://dha.gov.ae'],
      ['Paso 3', 'Registro biométrico en centro de ICP (huellas y firma digital)', 'https://icp.gov.ae'],
      ['Paso 4', 'Adjuntar: Pasaporte + Carta de Aceptación + Recibo de pago + Seguro médico + Resultados médicos', null],
      ['Paso 5', 'Costo total aprox. $700-$1,000 USD (normalmente incluido en paquete de visa de la escuela)', null],
    ],
    trabajo_head: '2. Permiso de Trabajo (con empleador)',
    trabajo_items: [
      ['La visa de estudiante NO da permiso de trabajo automático — necesitas un empleador sponsor', null],
      ['El empleador registra el contrato en MOHRE (Ministerio de Recursos Humanos)', 'https://mohre.gov.ae'],
      ['Con Emirates ID + contrato registrado puedes trabajar legalmente en Dubái', null],
    ],
    aterrizaje_hack: 'En Dubái todo es rápido si llevas los documentos en orden. Haz los exámenes médicos en tu primera semana. El Emirates ID llega en 10-15 días. Sin Emirates ID no puedes abrir banco ni firmar nada. Ese es tu objetivo #1.',
    sec_bancos_title: 'Matriz de Opciones Bancarias',
    bancos_intro: 'En Dubái no puedes abrir cuenta bancaria sin Emirates ID. Abre Liv. (digital) apenas recibas tu Emirates ID — te permite recibir salario, pagar renta y transferir internacionalmente desde el primer día.',
    th_entidad: 'Entidad', th_tipo: 'Tipo', th_ventaja: 'Ventaja Principal',
    bancos_hack: 'Abre Liv. apenas tengas tu Emirates ID. La mayoría de expatriados usan este banco digital porque permite recibir salario, pagar renta y hacer transferencias internacionales rápidamente — mientras organizas banco tradicional si tu empresa lo requiere.',
    sec_webs_title: 'Webs de Gestión y Empleo',
    webs_intro: 'Portales oficiales obligatorios para tu proceso en Dubái. Guárdalos desde el día 1. GDRFA gestiona tu residencia. DHA tus exámenes médicos. MOHRE registra tu contrato laboral.',
    th_portal: 'Portal', th_para_que: 'Para qué sirve', th_cuando: 'Cuándo usarlo',
    webs_hack: 'En Dubái la velocidad es todo. Si ves una vacante en LinkedIn o Dubizzle, aplica en menos de 5 minutos. Las empresas reciben cientos de aplicaciones al día y los primeros CV son los que llaman.',
    sec_vivienda_title: 'Protocolo de Vivienda e Instalación',
    vivienda_intro: 'El mercado inmobiliario de Dubái es dinámico y muy competitivo en zonas como Dubai Marina, JLT, Al Barsha y Business Bay. A diferencia de Europa, el mercado se mueve principalmente por Dubizzle y Property Finder — muchos acuerdos se cierran rápido por WhatsApp.',
    vivienda_costos_head: '📊 Costos de Alojamiento (Estimación 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Precio Semanal USD', th_mes: 'Precio Mensual USD',
    vivienda_red: '⚠️ REGLA DE ORO ANTI-ESTAFA: CERO depósitos antes de visitar la propiedad. Nunca envíes dinero sin haber visto la habitación y verificado al propietario o agente. En Dubái también existen estafas en plataformas de alquiler.',
    vivienda_canales_head: '📍 Canales de Búsqueda',
    th_canal: 'Canal', th_estrategia_col: 'Estrategia', th_acceso: 'Acceso',
    vivienda_hack: 'En Dubái muchos alquileres se cierran muy rápido por WhatsApp. Si encuentras una habitación en Dubizzle, escribe inmediatamente al número del anuncio y agenda visita lo antes posible. Las mejores habitaciones se alquilan en horas.',
    sec_empleos_title: 'Matriz de Empleos de Alta Rotación',
    empleos_intro: 'Para trabajar en Dubái necesitas un empleador sponsor. Los trabajos entry-level en hospitality, retail y turismo son los más accesibles. Muchos trabajos incluyen alojamiento, transporte o comida.',
    empleos_cv_label: 'CV en Mano:',
    empleos_cv_text: 'Ve a hoteles, restaurantes y malls entre',
    empleos_cv_b: '10:00 AM - 12:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Puesto Típico', th_salario_aed: 'Salario/mes AED', th_usd_mes: '≈ USD/mes', th_canal_emp: 'Canal',
    empleos_hack: 'En Dubái muchas empresas valoran más presencia, actitud y disponibilidad inmediata que experiencia. Muchos trabajos incluyen alojamiento o transporte — esto reduce significativamente el costo de vida. Si consigues trabajo con alojamiento incluido, tus gastos se reducen a la mitad.',
    sec_salarios_title: 'Matriz de Salarios Comunes',
    salarios_intro: 'Salarios en AED con equivalente en USD. 1 AED ≈ $0.27 USD. Dubái no tiene impuesto sobre la renta personal — lo que ganas es lo que cobras.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Puesto', th_mensual_aed: 'Salario/mes AED', th_mensual_usd: '≈ USD/mes',
    salarios_blue: '💡 VENTAJA DUBÁI: Sin impuesto sobre la renta personal. Todo lo que ganas es tuyo. Delivery puede llegar a $1,350/mes — más que hospitality en Irlanda. Muchos trabajos incluyen alojamiento y transporte, lo que aumenta el poder adquisitivo real.',
    salarios_hack: 'Delivery en Dubái puede pagarte AED 3,000-5,000/mes ($810-$1,350). Es el trabajo con mejor relación esfuerzo/ingreso para recién llegados. Sin impuestos, ese dinero es tuyo completo.',
    sec_timeline_title: 'Timeline de Ejecución',
    timeline_intro: 'Dubái es el destino más rápido del blueprint. El proceso de residencia se cierra en 10-15 días. El trabajo depende de conseguir empleador — puede ser en semanas si te mueves rápido.',
    th_fase: 'Fase', th_que_hacer: 'Qué hacer', th_tiempo: 'Tiempo',
    timeline_rows: [
      ['Fase 1: Pre-Partida', 'Pagar escuela + Carta de Aceptación + Seguro médico + Reservar hostel 1-2 semanas + Entry Permit (gestiona la escuela)', '2-3 meses antes'],
      ['Semana 1', 'SIM card (Etisalat o Du) + Exámenes médicos (DHA) + Registro biométrico (ICP)', 'Día 1-7'],
      ['Semana 2', 'Recibir Emirates ID + Abrir Liv. (banco digital) + Buscar habitación permanente', 'Día 7-15'],
      ['Semana 2-4', 'Aplicar en LinkedIn, Indeed UAE y Dubizzle + CV en mano en hoteles y malls', 'Día 15-30'],
      ['Mes 2-3', 'Conseguir empleador sponsor + Registrar contrato en MOHRE + Empezar a trabajar', 'Día 30-90'],
      ['Mes 2-3', 'Primer salario', 'Día 60-90'],
    ],
    timeline_hack: 'El orden en Dubái es: Entry Permit → Medical Test → Emirates ID → Banco → Trabajo. Todo depende del Emirates ID. Hazlo en tu primera semana y el resto fluye. Sin Emirates ID no puedes avanzar nada.',
    sec_salario1_title: 'Tiempo a Primer Salario',
    salario1_intro: 'En Dubái todo funciona con sponsor (empresa). Tu visa depende del empleador. Si cambias de trabajo, cambias de sponsor. Es más dependiente del empleador que en Europa pero puede ser más rápido si te mueves bien.',
    hito1_title: '1️⃣ Hito 1 — Empleable (listo para trabajar)',
    hito1_items: ['Visa de trabajo activa (con sponsor)', 'Emirates ID aprobado', 'Contrato laboral firmado y registrado en MOHRE'],
    hito1_time: '👉 Tiempo real: 2-6 semanas desde que te contratan',
    hito2_title: '2️⃣ Hito 2 — Primer ingreso (primer cobro)',
    hito2_items: ['Alta en payroll', 'Cuenta bancaria activa (Emirates ID requerido)', 'Ciclo de pago de la empresa completado'],
    hito2_time: '👉 Tiempo real: 1-2 meses desde que empiezas a trabajar',
    resumen_label: '🎯 En resumen:',
    resumen1: 'Puedes empezar a trabajar en:', resumen1_b: '~2-6 semanas desde que te contratan',
    resumen2: 'Puedes cobrar tu primer salario en:', resumen2_b: '~1-2 meses desde el inicio',
    salario1_hack: 'En Dubái todo depende de conseguir empleador rápido. Aplica en LinkedIn y Dubizzle desde el día 1. Ve en persona a hoteles y malls. La velocidad es tu ventaja — las empresas en Dubái contratan rápido a quien se presenta disponible.',
    sec_crisis_title: 'Crisis, Contingencia y Soporte',
    crisis_intro: 'Los imprevistos ocurren pero el pánico es opcional. En Dubái todo se resuelve rápido si sigues el canal correcto. Guarda estos contactos desde el día 1.',
    crisis_emergencias_head: '🛟 Contactos de Emergencia',
    crisis_contactos: [
      ['Emergencias', '999 — Policía, Ambulancia, Bomberos'],
      ['GDRFA (Inmigración)', 'gdrfad.gov.ae — Residencia y visa'],
      ['Dubai Health Authority', 'dha.gov.ae — Exámenes médicos y salud'],
      ['MOHRE (Trabajo)', 'mohre.gov.ae — Contratos laborales'],
      ['Comunidad L&T', 'Latinoamericanos en Dubái — ver grupos abajo'],
    ],
    crisis_gestion_head: '⚠️ Gestión de Crisis Comunes (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Acción Inmediata', th_contacto: 'Contacto',
    comunidad_title: '🤝 Comunidad Latina en Dubái',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezolanos · Peruanos en Dubái — links próximamente',
    crisis_hack: 'En Dubái muchas oportunidades aparecen primero en comunidades de expatriados, grupos de WhatsApp o LinkedIn antes de llegar a portales oficiales. Mantente activo en estos grupos y responde rápido.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Resumen ejecutivo de Dubái como destino de migración para latinoamericanos.',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Visa principal', 'Student Visa (UAE Residence Visa)'],
      ['Duración mínima del curso', '12 – 24 semanas'],
      ['Permiso de trabajo', 'Requiere empleador sponsor'],
      ['Solvencia obligatoria', 'No requerida formalmente'],
      ['Capital recomendado', '$4,300 – $5,650 USD'],
      ['Costo promedio curso inglés', '$3,500 – $7,000'],
      ['ID oficial', 'Emirates ID (10-15 días)'],
      ['Renta cuarto compartido', '$280 – $400/mes'],
      ['Empleos más comunes', 'Hospitality, Retail, Delivery, Tourism'],
      ['Salario promedio entrada', '$540 – $1,350/mes'],
      ['Tiempo hasta primer trabajo', '2-6 semanas desde contratación'],
      ['Impuesto sobre la renta', '0% — sin impuesto personal'],
      ['Idioma oficial', 'Árabe (inglés de facto en negocios)'],
      ['Camino a residencia', 'Trabajo → Work Visa → Residencia'],
      ['Nivel de dificultad', 'Medio'],
      ['Mejores zonas', 'Dubai Marina, JLT, Al Barsha, Deira'],
      ['Ventaja única', 'Sin impuestos + Emirates ID en 10-15 días'],
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
    hero_title: 'Dubai',
    hero_sub: 'Oriente Médio · Work and Study',
    hero_badge: 'Médio',
    stat1_label: 'Custo inicial (Cursos)',
    stat1_value: '$3.500 - $7.000',
    stat2_label: 'Duração',
    stat2_value: '8 - 12 meses',
    stat3_label: 'Dificuldade',
    stat3_value: 'Médio',
    included_title: 'O que inclui o Blueprint',
    included: [
      'Emirates ID em 10-15 dias — a chave para banco, contratos e trabalho em Dubai',
      'Sem solvência bancária obrigatória — o pagamento do curso atua como garantia',
      '10 escolas verificadas em JLT, Knowledge Park e Business Bay',
      'Acesso a universidades internacionais com títulos britânicos, australianos e canadenses',
      'Comunidade latina ativa — grupos de WhatsApp para moradia e trabalho',
    ],
    sec_autoridad_title: 'Cabeçalho de Autoridade',
    autoridad_intro: 'Dubai é o destino mais rápido do blueprint. O processo de residência é concluído em 10-15 dias. Sem solvência bancária obrigatória — o pagamento do curso atua como garantia. O Emirates ID é a chave para tudo: banco, contratos e trabalho.',
    autoridad_warn_label: '⚠️ Importante:',
    autoridad_warn: 'O visto de estudante permite viver e estudar em Dubai, mas',
    autoridad_warn_b: 'NÃO concede automaticamente permissão de trabalho',
    autoridad_warn_end: '. Para trabalhar legalmente, uma empresa deve processar a permissão de trabalho correspondente.',
    autoridad_p2_label: 'Acelerador de início:',
    autoridad_p2: 'coordenamos a ordem correta das etapas — Entry Permit, Medical Test, Emirates ID e contratação — para que você esteja pronto no menor tempo possível.',
    autoridad_blue: '💱 Conversão Dubai: 1 AED ≈ $0,27 USD. $200 USD ≈ 735 AED. Todos os salários em AED com equivalente em USD.',
    autoridad_hack: 'Em Dubai o Emirates ID é a chave para tudo. Sem esse cartão você não pode abrir banco, assinar contrato nem ativar trabalho. Se você tiver os documentos em ordem, o processo é concluído em 10 a 15 dias — muito mais rápido que qualquer país europeu.',
    premium_badge: '⭐ Blueprint Completo — PREMIUM',
    sec_estrategia_title: 'Estratégia e Orçamento: Seleção de Academia',
    estrategia_intro: 'Em Dubai a academia não se escolhe apenas pelo preço. O inteligente é escolher uma bem localizada perto de zonas de trabalho importantes como JLT, Dubai Marina ou Knowledge Park, onde se concentra o movimento internacional e o networking mais útil para você.',
    estrategia_head: '🇦🇪 Matriz de Escolas de Inglês: Dubai 2026',
    th_inst: 'Instituição', th_loc: 'Localização', th_precio: 'Preço (24 semanas)', th_web: 'Website',
    estrategia_blue: '🔵 SOLVÊNCIA DUBAI: Ao contrário da Europa, Dubai NÃO exige demonstrar um valor fixo no banco. O pagamento do curso + pacote de visto atua como garantia financeira. Capital recomendado: $4.300 - $5.650 USD total (curso + visto + despesas iniciais).',
    estrategia_hack: 'Some o preço da sua escola + ~$900 de visto e procedimentos + $150 de exames médicos. Esse é seu Capital de Execução Real para Dubai. A vantagem é que você não precisa demonstrar alta solvência bancária como na Europa.',
    sec_pre_title: 'Pré-Fundações & Pré-Carreiras',
    pre_intro: 'Os programas de preparação acadêmica em Dubai abrem a porta para universidades internacionais com títulos reconhecidos globalmente. Ao se formar você pode acessar emprego profissional em Business, Finanças, Tecnologia e Turismo.',
    th_prog: 'Instituição', th_programa: 'Programa', th_duracion: 'Duração', th_precio_prog: 'Preço',
    pre_blue: '🔵 UNIVERSIDADES INTERNACIONAIS: Dubai abriga campi de universidades britânicas, australianas e canadenses no Dubai Knowledge Park e Dubai International Academic City. Você pode obter um título internacional estudando em Dubai.',
    pre_hack: 'Dubai tem uma vantagem única: você pode obter um título britânico, australiano ou canadense sem sair dos Emirados. Isso abre portas para empregos em empresas multinacionais tanto em Dubai quanto em outros países do Golfo.',
    sec_edu_title: 'Educação Superior',
    edu_intro: 'Dubai tem universidades internacionais de primeiro nível com títulos reconhecidos globalmente. Muitos graduados conseguem transicionar para um Employment Visa patrocinado por empresas multinacionais.',
    edu_bachelor_head: '🎓 Bachelor Degrees',
    th_programas: 'Programas', th_anual: 'Preço anual', th_total: 'Preço total',
    edu_master_head: '⭐ Masters (MBA e MSc)',
    th_programa_m: 'Programa',
    edu_hack: 'University of Bolton Dubai tem os MBAs mais acessíveis do Golfo ($6.000-$10.000 total). Um título britânico em Dubai abre portas em toda a região do Golfo Pérsico.',
    sec_gastos_title: 'Despesas Obrigatórias Não Incluídas',
    gastos_intro: 'Dubai tem uma vantagem única: NÃO se exige solvência bancária fixa como na Europa. As principais despesas são o pacote de visto e os exames médicos obrigatórios.',
    th_concepto: 'Conceito', th_costo: 'Custo (USD)', th_oblig: 'Obrigatório',
    gastos_blue: '🔵 VANTAGEM DUBAI: Você não precisa demonstrar alta solvência bancária como na Irlanda (€6.665) ou Malta (€5.040). O pagamento do curso atua como garantia. Capital de Execução Real: $4.300 – $5.650 USD total.',
    gastos_hack: 'Some o preço da sua escola + $900 de visto e procedimentos + $150 de exames médicos. Esse é seu número real para começar em Dubai. Muito mais acessível que a Europa para quem não tem grandes economias.',
    sec_aterrizaje_title: 'Protocolo de Chegada e Gestão',
    aterrizaje_intro: 'Em Dubai tudo funciona com rapidez. O processo Entry Permit → Medical Test → Emirates ID é concluído em 10-15 dias se você tiver os documentos corretos. O Emirates ID é sua prioridade #1 ao chegar.',
    emirates_head: '1. Emirates ID — Seu ID oficial em Dubai',
    pasos: [
      ['Passo 1', 'Entrar em Dubai com Entry Permit emitido pela sua escola (sponsor)', null],
      ['Passo 2', 'Exames médicos (Medical Fitness Tests) em centros autorizados pela Dubai Health Authority', 'https://dha.gov.ae'],
      ['Passo 3', 'Registro biométrico no centro do ICP (impressões digitais e assinatura digital)', 'https://icp.gov.ae'],
      ['Passo 4', 'Anexar: Passaporte + Carta de Aceitação + Recibo de pagamento + Seguro médico + Resultados médicos', null],
      ['Passo 5', 'Custo total aprox. $700-$1.000 USD (normalmente incluído no pacote de visto da escola)', null],
    ],
    trabalho_head: '2. Permissão de Trabalho (com empregador)',
    trabalho_items: [
      ['O visto de estudante NÃO dá permissão de trabalho automática — você precisa de um empregador sponsor', null],
      ['O empregador registra o contrato no MOHRE (Ministério de Recursos Humanos)', 'https://mohre.gov.ae'],
      ['Com Emirates ID + contrato registrado você pode trabalhar legalmente em Dubai', null],
    ],
    aterrizaje_hack: 'Em Dubai tudo é rápido se você tiver os documentos em ordem. Faça os exames médicos na sua primeira semana. O Emirates ID chega em 10-15 dias. Sem Emirates ID você não pode abrir banco nem assinar nada. Esse é seu objetivo #1.',
    sec_bancos_title: 'Matriz de Opções Bancárias',
    bancos_intro: 'Em Dubai você não pode abrir conta bancária sem Emirates ID. Abra o Liv. (digital) assim que receber seu Emirates ID — permite receber salário, pagar aluguel e transferir internacionalmente desde o primeiro dia.',
    th_entidad: 'Entidade', th_tipo: 'Tipo', th_ventaja: 'Vantagem Principal',
    bancos_hack: 'Abra o Liv. assim que tiver seu Emirates ID. A maioria dos expatriados usa esse banco digital porque permite receber salário, pagar aluguel e fazer transferências internacionais rapidamente — enquanto organiza banco tradicional se sua empresa exigir.',
    sec_webs_title: 'Sites de Gestão e Emprego',
    webs_intro: 'Portais oficiais obrigatórios para seu processo em Dubai. Salve-os desde o dia 1. GDRFA gerencia sua residência. DHA seus exames médicos. MOHRE registra seu contrato de trabalho.',
    th_portal: 'Portal', th_para_que: 'Para que serve', th_cuando: 'Quando usar',
    webs_hack: 'Em Dubai a velocidade é tudo. Se você vir uma vaga no LinkedIn ou Dubizzle, aplique em menos de 5 minutos. As empresas recebem centenas de candidaturas por dia e os primeiros CVs são os que chamam.',
    sec_vivienda_title: 'Protocolo de Moradia e Instalação',
    vivienda_intro: 'O mercado imobiliário de Dubai é dinâmico e muito competitivo em zonas como Dubai Marina, JLT, Al Barsha e Business Bay. Ao contrário da Europa, o mercado se move principalmente pelo Dubizzle e Property Finder — muitos acordos são fechados rapidamente pelo WhatsApp.',
    vivienda_costos_head: '📊 Custos de Alojamento (Estimativa 2026)',
    th_tipo_aloj: 'Tipo', th_sem: 'Preço Semanal USD', th_mes: 'Preço Mensal USD',
    vivienda_red: '⚠️ REGRA DE OURO ANTI-GOLPE: ZERO depósitos antes de visitar a propriedade. Nunca envie dinheiro sem ter visto o quarto e verificado o proprietário ou agente. Em Dubai também existem golpes em plataformas de aluguel.',
    vivienda_canales_head: '📍 Canais de Busca',
    th_canal: 'Canal', th_estrategia_col: 'Estratégia', th_acceso: 'Acesso',
    vivienda_hack: 'Em Dubai muitos aluguéis são fechados muito rapidamente pelo WhatsApp. Se encontrar um quarto no Dubizzle, escreva imediatamente para o número do anúncio e agende visita o mais rápido possível. Os melhores quartos são alugados em horas.',
    sec_empleos_title: 'Matriz de Empregos de Alta Rotatividade',
    empleos_intro: 'Para trabalhar em Dubai você precisa de um empregador sponsor. Os trabalhos entry-level em hospitalidade, varejo e turismo são os mais acessíveis. Muitos trabalhos incluem alojamento, transporte ou alimentação.',
    empleos_cv_label: 'CV na Mão:',
    empleos_cv_text: 'Vá a hotéis, restaurantes e shoppings entre',
    empleos_cv_b: '10h - 12h',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Setor', th_puesto: 'Cargo Típico', th_salario_aed: 'Salário/mês AED', th_usd_mes: '≈ USD/mês', th_canal_emp: 'Canal',
    empleos_hack: 'Em Dubai muitas empresas valorizam mais presença, atitude e disponibilidade imediata do que experiência. Muitos trabalhos incluem alojamento ou transporte — isso reduz significativamente o custo de vida. Se conseguir trabalho com alojamento incluído, suas despesas caem pela metade.',
    sec_salarios_title: 'Matriz de Salários Comuns',
    salarios_intro: 'Salários em AED com equivalente em USD. 1 AED ≈ $0,27 USD. Dubai não tem imposto de renda pessoal — o que você ganha é o que você recebe.',
    th_sector_sal: 'Setor', th_puesto_sal: 'Cargo', th_mensual_aed: 'Salário/mês AED', th_mensual_usd: '≈ USD/mês',
    salarios_blue: '💡 VANTAGEM DUBAI: Sem imposto de renda pessoal. Tudo que você ganha é seu. Delivery pode chegar a $1.350/mês — mais que hospitalidade na Irlanda. Muitos trabalhos incluem alojamento e transporte, o que aumenta o poder de compra real.',
    salarios_hack: 'Delivery em Dubai pode te pagar AED 3.000-5.000/mês ($810-$1.350). É o trabalho com melhor relação esforço/renda para recém-chegados. Sem impostos, esse dinheiro é completamente seu.',
    sec_timeline_title: 'Cronograma de Execução',
    timeline_intro: 'Dubai é o destino mais rápido do blueprint. O processo de residência é concluído em 10-15 dias. O trabalho depende de conseguir empregador — pode ser em semanas se você se mover rápido.',
    th_fase: 'Fase', th_que_hacer: 'O que fazer', th_tiempo: 'Tempo',
    timeline_rows: [
      ['Fase 1: Pré-Partida', 'Pagar escola + Carta de Aceitação + Seguro médico + Reservar hostel 1-2 semanas + Entry Permit (a escola gerencia)', '2-3 meses antes'],
      ['Semana 1', 'SIM card (Etisalat ou Du) + Exames médicos (DHA) + Registro biométrico (ICP)', 'Dia 1-7'],
      ['Semana 2', 'Receber Emirates ID + Abrir Liv. (banco digital) + Buscar quarto permanente', 'Dia 7-15'],
      ['Semana 2-4', 'Aplicar no LinkedIn, Indeed UAE e Dubizzle + CV em mãos em hotéis e shoppings', 'Dia 15-30'],
      ['Mês 2-3', 'Conseguir empregador sponsor + Registrar contrato no MOHRE + Começar a trabalhar', 'Dia 30-90'],
      ['Mês 2-3', 'Primeiro salário', 'Dia 60-90'],
    ],
    timeline_hack: 'A ordem em Dubai é: Entry Permit → Medical Test → Emirates ID → Banco → Trabalho. Tudo depende do Emirates ID. Faça isso na sua primeira semana e o resto flui. Sem Emirates ID você não pode avançar nada.',
    sec_salario1_title: 'Tempo até Primeiro Salário',
    salario1_intro: 'Em Dubai tudo funciona com sponsor (empresa). Seu visto depende do empregador. Se mudar de trabalho, muda de sponsor. É mais dependente do empregador que na Europa mas pode ser mais rápido se você se mover bem.',
    hito1_title: '1️⃣ Marco 1 — Empregável (pronto para trabalhar)',
    hito1_items: ['Visto de trabalho ativo (com sponsor)', 'Emirates ID aprovado', 'Contrato de trabalho assinado e registrado no MOHRE'],
    hito1_time: '👉 Tempo real: 2-6 semanas desde que é contratado',
    hito2_title: '2️⃣ Marco 2 — Primeira renda (primeiro pagamento)',
    hito2_items: ['Cadastro na folha de pagamento', 'Conta bancária ativa (Emirates ID obrigatório)', 'Ciclo de pagamento da empresa concluído'],
    hito2_time: '👉 Tempo real: 1-2 meses desde que começa a trabalhar',
    resumen_label: '🎯 Em resumo:',
    resumen1: 'Você pode começar a trabalhar em:', resumen1_b: '~2-6 semanas desde que é contratado',
    resumen2: 'Você pode receber seu primeiro salário em:', resumen2_b: '~1-2 meses desde o início',
    salario1_hack: 'Em Dubai tudo depende de conseguir empregador rápido. Aplique no LinkedIn e Dubizzle desde o dia 1. Vá pessoalmente a hotéis e shoppings. A velocidade é sua vantagem — as empresas em Dubai contratam rápido quem se apresenta disponível.',
    sec_crisis_title: 'Crise, Contingência e Suporte',
    crisis_intro: 'Imprevistos acontecem mas o pânico é opcional. Em Dubai tudo se resolve rápido se você seguir o canal correto. Salve esses contatos desde o dia 1.',
    crisis_emergencias_head: '🛟 Contatos de Emergência',
    crisis_contactos: [
      ['Emergências', '999 — Polícia, Ambulância, Bombeiros'],
      ['GDRFA (Imigração)', 'gdrfad.gov.ae — Residência e visto'],
      ['Dubai Health Authority', 'dha.gov.ae — Exames médicos e saúde'],
      ['MOHRE (Trabalho)', 'mohre.gov.ae — Contratos de trabalho'],
      ['Comunidade L&T', 'Latino-americanos em Dubai — ver grupos abaixo'],
    ],
    crisis_gestion_head: '⚠️ Gestão de Crises Comuns (Quick Fix)',
    th_problema: 'Problema', th_accion: 'Ação Imediata', th_contacto: 'Contato',
    comunidad_title: '🤝 Comunidade Latina em Dubai',
    comunidad_text: 'Mexicanos · Ticos · Colombianos · Argentinos · Venezuelanos · Peruanos em Dubai — links em breve',
    crisis_hack: 'Em Dubai muitas oportunidades aparecem primeiro em comunidades de expatriados, grupos de WhatsApp ou LinkedIn antes de chegar aos portais oficiais. Mantenha-se ativo nesses grupos e responda rápido.',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_intro: 'Resumo executivo de Dubai como destino de migração para latino-americanos.',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Visto principal', 'Student Visa (UAE Residence Visa)'],
      ['Duração mínima do curso', '12 – 24 semanas'],
      ['Permissão de trabalho', 'Requer empregador sponsor'],
      ['Solvência obrigatória', 'Não exigida formalmente'],
      ['Capital recomendado', '$4.300 – $5.650 USD'],
      ['Custo médio curso inglês', '$3.500 – $7.000'],
      ['ID oficial', 'Emirates ID (10-15 dias)'],
      ['Aluguel quarto compartilhado', '$280 – $400/mês'],
      ['Empregos mais comuns', 'Hospitalidade, Varejo, Delivery, Turismo'],
      ['Salário médio de entrada', '$540 – $1.350/mês'],
      ['Tempo até primeiro trabalho', '2-6 semanas desde contratação'],
      ['Imposto de renda', '0% — sem imposto pessoal'],
      ['Idioma oficial', 'Árabe (inglês de fato nos negócios)'],
      ['Caminho para residência', 'Trabalho → Work Visa → Residência'],
      ['Nível de dificuldade', 'Médio'],
      ['Melhores zonas', 'Dubai Marina, JLT, Al Barsha, Deira'],
      ['Vantagem única', 'Sem impostos + Emirates ID em 10-15 dias'],
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
    hero_title: 'Dubai',
    hero_sub: 'Middle East · Work and Study',
    hero_badge: 'Medium',
    stat1_label: 'Initial Cost (Courses)',
    stat1_value: '$3,500 - $7,000',
    stat2_label: 'Duration',
    stat2_value: '8 - 12 months',
    stat3_label: 'Difficulty',
    stat3_value: 'Medium',
    included_title: 'What the Blueprint Includes',
    included: [
      'Emirates ID in 10-15 days — the key for bank, contracts and work in Dubai',
      'No mandatory bank balance required — course payment acts as guarantee',
      '10 verified schools in JLT, Knowledge Park and Business Bay',
      'Access to international universities with British, Australian and Canadian degrees',
      'Active Latin community — WhatsApp groups for housing and work',
    ],
    sec_autoridad_title: 'Authority Header',
    autoridad_intro: 'Dubai is the fastest destination in the blueprint. The residency process closes in 10-15 days. No mandatory bank balance — the course payment acts as guarantee. The Emirates ID is the key to everything: bank, contracts and work.',
    autoridad_warn_label: '⚠️ Important:',
    autoridad_warn: 'The student visa allows living and studying in Dubai, but',
    autoridad_warn_b: 'does NOT automatically grant work permission',
    autoridad_warn_end: '. To work legally, a company must process the corresponding work permit.',
    autoridad_p2_label: 'Launch accelerator:',
    autoridad_p2: 'we coordinate the correct order of steps — Entry Permit, Medical Test, Emirates ID and hiring — so you\'re ready in record time.',
    autoridad_blue: '💱 Dubai conversion: 1 AED ≈ $0.27 USD. $200 USD ≈ 735 AED. All salaries in AED with USD equivalent.',
    autoridad_hack: 'In Dubai the Emirates ID is the key to everything. Without this card you cannot open a bank, sign a contract or activate work. If you have your documents in order, the process is completed in 10-15 days — much faster than any European country.',
    premium_badge: '⭐ Complete Blueprint — PREMIUM',
    sec_estrategia_title: 'Strategy & Budget: School Selection',
    estrategia_intro: 'In Dubai you don\'t choose a school just by price. The smart move is to choose one well located near key work areas like JLT, Dubai Marina or Knowledge Park, where international movement and useful networking is concentrated.',
    estrategia_head: '🇦🇪 English Schools Matrix: Dubai 2026',
    th_inst: 'Institution', th_loc: 'Location', th_precio: 'Price (24 weeks)', th_web: 'Website',
    estrategia_blue: '🔵 DUBAI FUNDS: Unlike Europe, Dubai does NOT require demonstrating a fixed bank balance. The course payment + visa package acts as financial guarantee. Recommended capital: $4,300 - $5,650 USD total (course + visa + initial costs).',
    estrategia_hack: 'Add your school price + ~$900 for visa and procedures + $150 for medical exams. That\'s your Real Execution Capital for Dubai. The advantage is you don\'t need to demonstrate high bank balance like in Europe.',
    sec_pre_title: 'Pre-Foundations & Pre-Careers',
    pre_intro: 'Academic preparation programs in Dubai open the door to international universities with globally recognized degrees. Upon graduating you can access professional employment in Business, Finance, Technology and Tourism.',
    th_prog: 'Institution', th_programa: 'Program', th_duracion: 'Duration', th_precio_prog: 'Price',
    pre_blue: '🔵 INTERNATIONAL UNIVERSITIES: Dubai hosts campuses from British, Australian and Canadian universities in Dubai Knowledge Park and Dubai International Academic City. You can earn an international degree while studying in Dubai.',
    pre_hack: 'Dubai has a unique advantage: you can earn a British, Australian or Canadian degree without leaving the Emirates. This opens doors to jobs at multinational companies both in Dubai and other Gulf countries.',
    sec_edu_title: 'Higher Education',
    edu_intro: 'Dubai has top-tier international universities with globally recognized degrees. Many graduates manage to transition to an Employment Visa sponsored by multinational companies.',
    edu_bachelor_head: '🎓 Bachelor Degrees',
    th_programas: 'Programs', th_anual: 'Annual price', th_total: 'Total price',
    edu_master_head: '⭐ Masters (MBA and MSc)',
    th_programa_m: 'Program',
    edu_hack: 'University of Bolton Dubai has the most accessible MBAs in the Gulf ($6,000-$10,000 total). A British degree from Dubai opens doors throughout the Persian Gulf region.',
    sec_gastos_title: 'Mandatory Costs Not Included',
    gastos_intro: 'Dubai has a unique advantage: NO fixed bank balance is required like in Europe. The main costs are the visa package and mandatory medical exams.',
    th_concepto: 'Item', th_costo: 'Cost (USD)', th_oblig: 'Mandatory',
    gastos_blue: '🔵 DUBAI ADVANTAGE: You don\'t need to demonstrate high bank balance like in Ireland (€6,665) or Malta (€5,040). The course payment acts as guarantee. Real Execution Capital: $4,300 – $5,650 USD total.',
    gastos_hack: 'Add your school price + $900 for visa and procedures + $150 for medical exams. That\'s your real number to start in Dubai. Much more accessible than Europe for those without large savings.',
    sec_aterrizaje_title: 'Landing & Management Protocol',
    aterrizaje_intro: 'In Dubai everything works fast. The Entry Permit → Medical Test → Emirates ID process closes in 10-15 days if you have the correct documents. The Emirates ID is your #1 priority upon arrival.',
    emirates_head: '1. Emirates ID — Your official Dubai ID',
    pasos: [
      ['Step 1', 'Enter Dubai with Entry Permit issued by your school (sponsor)', null],
      ['Step 2', 'Medical exams (Medical Fitness Tests) at centers authorized by Dubai Health Authority', 'https://dha.gov.ae'],
      ['Step 3', 'Biometric registration at ICP center (fingerprints and digital signature)', 'https://icp.gov.ae'],
      ['Step 4', 'Attach: Passport + Acceptance Letter + Payment receipt + Health insurance + Medical results', null],
      ['Step 5', 'Total cost approx. $700-$1,000 USD (normally included in school visa package)', null],
    ],
    trabalho_head: '2. Work Permit (with employer)',
    trabalho_items: [
      ['Student visa does NOT give automatic work permission — you need an employer sponsor', null],
      ['The employer registers the contract at MOHRE (Ministry of Human Resources)', 'https://mohre.gov.ae'],
      ['With Emirates ID + registered contract you can work legally in Dubai', null],
    ],
    aterrizaje_hack: 'In Dubai everything is fast if you have your documents in order. Do the medical exams in your first week. The Emirates ID arrives in 10-15 days. Without Emirates ID you can\'t open a bank or sign anything. That is your #1 objective.',
    sec_bancos_title: 'Banking Options Matrix',
    bancos_intro: 'In Dubai you cannot open a bank account without Emirates ID. Open Liv. (digital) as soon as you receive your Emirates ID — it lets you receive salary, pay rent and transfer internationally from day one.',
    th_entidad: 'Bank', th_tipo: 'Type', th_ventaja: 'Main Advantage',
    bancos_hack: 'Open Liv. as soon as you have your Emirates ID. Most expats use this digital bank because it allows receiving salary, paying rent and making international transfers quickly — while you set up a traditional bank if your company requires it.',
    sec_webs_title: 'Management & Employment Websites',
    webs_intro: 'Mandatory official portals for your process in Dubai. Save them from day 1. GDRFA manages your residency. DHA your medical exams. MOHRE registers your employment contract.',
    th_portal: 'Portal', th_para_que: 'Purpose', th_cuando: 'When to use',
    webs_hack: 'In Dubai speed is everything. If you see a job on LinkedIn or Dubizzle, apply in less than 5 minutes. Companies receive hundreds of applications per day and the first CVs are the ones they call.',
    sec_vivienda_title: 'Housing & Settlement Protocol',
    vivienda_intro: 'Dubai\'s real estate market is dynamic and very competitive in areas like Dubai Marina, JLT, Al Barsha and Business Bay. Unlike Europe, the market moves mainly through Dubizzle and Property Finder — many deals close fast via WhatsApp.',
    vivienda_costos_head: '📊 Accommodation Costs (2026 Estimate)',
    th_tipo_aloj: 'Type', th_sem: 'Weekly Price USD', th_mes: 'Monthly Price USD',
    vivienda_red: '⚠️ GOLDEN ANTI-SCAM RULE: ZERO deposits before visiting the property. Never send money without having seen the room and verified the owner or agent. Rental scams also exist in Dubai platforms.',
    vivienda_canales_head: '📍 Search Channels',
    th_canal: 'Channel', th_estrategia_col: 'Strategy', th_acceso: 'Access',
    vivienda_hack: 'In Dubai many rentals close very quickly via WhatsApp. If you find a room on Dubizzle, write immediately to the listing number and schedule a visit as soon as possible. The best rooms are rented within hours.',
    sec_empleos_title: 'High-Turnover Jobs Matrix',
    empleos_intro: 'To work in Dubai you need an employer sponsor. Entry-level jobs in hospitality, retail and tourism are the most accessible. Many jobs include accommodation, transport or meals.',
    empleos_cv_label: 'CV in Hand:',
    empleos_cv_text: 'Go to hotels, restaurants and malls between',
    empleos_cv_b: '10:00 AM - 12:00 PM',
    empleos_cv_quote: '"I\'m looking for a Floor Staff position, I have immediate availability."',
    th_sector: 'Sector', th_puesto: 'Typical Role', th_salario_aed: 'Salary/month AED', th_usd_mes: '≈ USD/month', th_canal_emp: 'Channel',
    empleos_hack: 'In Dubai companies value presence, attitude and immediate availability more than experience. Many jobs include accommodation or transport — this significantly reduces the cost of living. If you get a job with accommodation included, your expenses are cut in half.',
    sec_salarios_title: 'Common Salaries Matrix',
    salarios_intro: 'Salaries in AED with USD equivalent. 1 AED ≈ $0.27 USD. Dubai has no personal income tax — what you earn is what you keep.',
    th_sector_sal: 'Sector', th_puesto_sal: 'Role', th_mensual_aed: 'Salary/month AED', th_mensual_usd: '≈ USD/month',
    salarios_blue: '💡 DUBAI ADVANTAGE: No personal income tax. Everything you earn is yours. Delivery can reach $1,350/month — more than hospitality in Ireland. Many jobs include accommodation and transport, which increases real purchasing power.',
    salarios_hack: 'Delivery in Dubai can pay you AED 3,000-5,000/month ($810-$1,350). It\'s the work with the best effort/income ratio for newcomers. Without taxes, that money is completely yours.',
    sec_timeline_title: 'Execution Timeline',
    timeline_intro: 'Dubai is the fastest destination in the blueprint. The residency process closes in 10-15 days. Work depends on finding an employer — it can be weeks if you move fast.',
    th_fase: 'Phase', th_que_hacer: 'What to do', th_tiempo: 'Time',
    timeline_rows: [
      ['Phase 1: Pre-Departure', 'Pay school + Acceptance Letter + Health insurance + Book hostel 1-2 weeks + Entry Permit (school manages)', '2-3 months before'],
      ['Week 1', 'SIM card (Etisalat or Du) + Medical exams (DHA) + Biometric registration (ICP)', 'Day 1-7'],
      ['Week 2', 'Receive Emirates ID + Open Liv. (digital bank) + Find permanent room', 'Day 7-15'],
      ['Week 2-4', 'Apply on LinkedIn, Indeed UAE and Dubizzle + CV in hand at hotels and malls', 'Day 15-30'],
      ['Month 2-3', 'Find employer sponsor + Register contract at MOHRE + Start working', 'Day 30-90'],
      ['Month 2-3', 'First salary', 'Day 60-90'],
    ],
    timeline_hack: 'The order in Dubai is: Entry Permit → Medical Test → Emirates ID → Bank → Work. Everything depends on the Emirates ID. Do it in your first week and the rest flows. Without Emirates ID you cannot advance anything.',
    sec_salario1_title: 'Time to First Salary',
    salario1_intro: 'In Dubai everything works with a sponsor (company). Your visa depends on the employer. If you change jobs, you change sponsors. It\'s more employer-dependent than in Europe but can be faster if you move well.',
    hito1_title: '1️⃣ Milestone 1 — Employable (ready to work)',
    hito1_items: ['Active work visa (with sponsor)', 'Emirates ID approved', 'Employment contract signed and registered at MOHRE'],
    hito1_time: '👉 Real timeline: 2-6 weeks from when you\'re hired',
    hito2_title: '2️⃣ Milestone 2 — First income (first payment)',
    hito2_items: ['Added to payroll', 'Active bank account (Emirates ID required)', 'Company payment cycle completed'],
    hito2_time: '👉 Real timeline: 1-2 months from starting work',
    resumen_label: '🎯 In summary:',
    resumen1: 'You can start working in:', resumen1_b: '~2-6 weeks from when you\'re hired',
    resumen2: 'You can receive your first salary in:', resumen2_b: '~1-2 months from the start',
    salario1_hack: 'In Dubai everything depends on finding an employer fast. Apply on LinkedIn and Dubizzle from day 1. Go in person to hotels and malls. Speed is your advantage — companies in Dubai hire fast those who show up available.',
    sec_crisis_title: 'Crisis, Contingency & Support',
    crisis_intro: 'Unexpected events happen but panic is optional. In Dubai everything is resolved quickly if you follow the correct channel. Save these contacts from day 1.',
    crisis_emergencias_head: '🛟 Emergency Contacts',
    crisis_contactos: [
      ['Emergencies', '999 — Police, Ambulance, Fire'],
      ['GDRFA (Immigration)', 'gdrfad.gov.ae — Residency and visa'],
      ['Dubai Health Authority', 'dha.gov.ae — Medical exams and health'],
      ['MOHRE (Work)', 'mohre.gov.ae — Employment contracts'],
      ['L&T Community', 'Latin Americans in Dubai — see groups below'],
    ],
    crisis_gestion_head: '⚠️ Common Crisis Management (Quick Fix)',
    th_problema: 'Problem', th_accion: 'Immediate Action', th_contacto: 'Contact',
    comunidad_title: '🤝 Latin Community in Dubai',
    comunidad_text: 'Mexicans · Costa Ricans · Colombians · Argentinians · Venezuelans · Peruvians in Dubai — links coming soon',
    crisis_hack: 'In Dubai many opportunities appear first in expat communities, WhatsApp groups or LinkedIn before reaching official portals. Stay active in these groups and respond fast.',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_intro: 'Executive summary of Dubai as a migration destination for Latin Americans.',
    th_categoria: 'Category',
    matrix_rows: [
      ['Main Visa', 'Student Visa (UAE Residence Visa)'],
      ['Minimum course duration', '12 – 24 weeks'],
      ['Work permit', 'Requires employer sponsor'],
      ['Mandatory funds', 'Not formally required'],
      ['Recommended capital', '$4,300 – $5,650 USD'],
      ['Average English course cost', '$3,500 – $7,000'],
      ['Official ID', 'Emirates ID (10-15 days)'],
      ['Shared room rent', '$280 – $400/month'],
      ['Most common jobs', 'Hospitality, Retail, Delivery, Tourism'],
      ['Average entry salary', '$540 – $1,350/month'],
      ['Time to first job', '2-6 weeks from hiring'],
      ['Income tax', '0% — no personal tax'],
      ['Official language', 'Arabic (English de facto in business)'],
      ['Path to residency', 'Work → Work Visa → Residency'],
      ['Difficulty level', 'Medium'],
      ['Best areas', 'Dubai Marina, JLT, Al Barsha, Deira'],
      ['Unique advantage', 'No taxes + Emirates ID in 10-15 days'],
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

export default function Dubai() {
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=1177&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/work-and-study" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</a>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🇦🇪</div>
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.autoridad_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
            <strong>{t.autoridad_warn_label}</strong> {t.autoridad_warn} <strong>{t.autoridad_warn_b}</strong>{t.autoridad_warn_end}
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
              <thead><tr>{[t.th_inst, t.th_loc, t.th_precio, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Language Skills Institute', 'Al Barsha', '$2,500 – $3,200', 'languageskills.ae', 'https://languageskills.ae'],
                  ['SpotOn Training Institute', 'Al Karama', '$2,600 – $3,300', 'spoton.ae', 'https://spoton.ae'],
                  ['Learners Point Academy', 'Al Garhoud', '$2,700 – $3,400', 'learnerspoint.org', 'https://learnerspoint.org'],
                  ['Speak English Institute', 'JLT', '$2,800 – $3,500', 'speak.ae', 'https://www.speak.ae'],
                  ['Direct English Dubai', 'Business Bay', '$2,800 – $3,600', 'directenglish.ae', 'https://directenglish.ae'],
                  ['Express English College', 'Business Bay', '$2,900 – $3,600', 'expressenglish.ae', 'https://expressenglish.ae'],
                  ['English Path Dubai', 'Knowledge Park', '$3,000 – $3,800', 'englishpath.com', 'https://www.englishpath.com/destinations/middle-east/dubai/'],
                  ['UKCBC Dubai', 'Academic City', '$3,000 – $4,000', 'ukcbc.ac.ae', 'https://ukcbc.ac.ae'],
                  ['ES Dubai', 'JLT', '$3,200 – $4,200', 'esdubai.com', 'https://esdubai.com'],
                  ['EC Dubai', 'Knowledge Park', '$3,500 – $4,500', 'ecenglish.com', 'https://ecenglish.com'],
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
          <BlueBox text={t.estrategia_blue} />
          <HackBox text={t.estrategia_hack} />
        </Section>

        {/* PRE-FOUNDATIONS */}
        <Section id="pre" emoji="🚀" title={t.sec_pre_title}>
          <Intro text={t.pre_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_prog, t.th_programa, t.th_duracion, t.th_precio_prog, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['ES Dubai', 'Academic English / EAP', '6–12 meses', '$2,600 – $3,200', 'esdubai.com', 'https://esdubai.com'],
                  ['English Path Dubai', 'Academic English + transición laboral', '6–12 meses', '$3,000 – $3,600', 'englishpath.com', 'https://www.englishpath.com/destinations/middle-east/dubai/'],
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
          <SubHead text={t.edu_bachelor_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_programas, t.th_anual, t.th_total, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Bolton Dubai', 'Business, IT, Engineering', '$7,500 – $9,000', '$22k – $27k', 'bolton.ac.ae', 'https://www.bolton.ac.ae'],
                  ['Amity University Dubai', 'Business, IT, Media', '$9,000 – $12,000', '$27k – $36k', 'amityuniversity.ae', 'https://amityuniversity.ae'],
                  ['Manipal University Dubai', 'Engineering, Business, IT', '$10,000 – $13,000', '$30k – $40k', 'manipaldubai.com', 'https://www.manipaldubai.com'],
                  ['Canadian University Dubai', 'Business, Engineering', '$12,000 – $16,000', '$36k – $48k', 'cud.ac.ae', 'https://www.cud.ac.ae'],
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
          <SubHead text={t.edu_master_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_inst, t.th_programa_m, t.th_total, t.th_web].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['University of Bolton Dubai', 'MBA / MSc / LLM', '$6,000 – $10,000', 'bolton.ac.ae', 'https://www.bolton.ac.ae'],
                  ['Amity University Dubai', 'MBA / MSc', '$11,000 – $15,000', 'amityuniversity.ae', 'https://amityuniversity.ae'],
                  ['Manipal University Dubai', 'MBA / MSc', '$12,000 – $16,000', 'manipaldubai.com', 'https://www.manipaldubai.com'],
                  ['Canadian University Dubai', 'MBA / MSc', '$14,000 – $18,000', 'cud.ac.ae', 'https://www.cud.ac.ae'],
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
                  ['Seguro médico (requerido para visa)', '$200 – $300', '✅ Sí'],
                  ['Visa de estudiante + gestión migratoria', '$600 – $1,000', '✅ Sí'],
                  ['Exámenes médicos (Dubai Health Authority)', '$100 – $150', '✅ Sí'],
                  ['Emirates ID', '$100', '✅ Sí'],
                  ['Materiales / Libros', '$50 – $100', '✅ Sí'],
                  ['Solvencia bancaria', 'No requerida formalmente', '⚪ Recomendado $3k-$5k'],
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
          <SubHead text={t.emirates_head} />
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
                  ['Liv. (by Emirates NBD)', 'Digital', 'Apertura en minutos con Emirates ID. Ideal para estudiantes y expatriados desde día 1.', 'liv.me', 'https://liv.me'],
                  ['Wio Bank', 'Digital', 'Banco digital moderno. Popular entre freelancers y emprendedores en Dubái.', 'wio.io', 'https://wio.io'],
                  ['Emirates NBD', 'Tradicional', 'El banco más grande de Dubái. Red amplia y muy usado para nóminas internacionales.', 'emiratesnbd.com', 'https://emiratesnbd.com'],
                  ['ADCB', 'Tradicional', 'Muy popular entre expatriados. Buena app y apertura relativamente rápida.', 'adcb.com', 'https://adcb.com'],
                  ['Mashreq Bank', 'Tradicional', 'Uno de los bancos más antiguos del país. Muy usado por empresas y trabajadores extranjeros.', 'mashreq.com', 'https://mashreq.com'],
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
                  ['GDRFA', 'Entry Permit y residencia estudiantil', 'Tu escuela lo gestiona antes de llegar', 'gdrfad.gov.ae', 'https://gdrfad.gov.ae'],
                  ['Dubai Health Authority', 'Exámenes médicos obligatorios', 'Semana 1 — prioritario', 'dha.gov.ae', 'https://dha.gov.ae'],
                  ['ICP (Emirates ID)', 'Registro biométrico y Emirates ID', 'Semana 1-2', 'icp.gov.ae', 'https://icp.gov.ae'],
                  ['MOHRE (Ministerio de Trabajo)', 'Registro de contratos laborales', 'Cuando consigues empleador', 'mohre.gov.ae', 'https://mohre.gov.ae'],
                  ['LinkedIn Jobs', 'Empleos profesionales e internacionales', 'Desde semana 1', 'linkedin.com/jobs', 'https://linkedin.com/jobs'],
                  ['Indeed UAE', 'Vacantes de todo tipo', 'Desde semana 1', 'ae.indeed.com', 'https://ae.indeed.com'],
                  ['Dubizzle Jobs', 'Empleos entry level y habitaciones', 'Desde semana 1', 'dubizzle.com', 'https://dubizzle.com'],
                  ['GulfTalent', 'Empresas grandes del Golfo', 'Mes 2-3', 'gulftalent.com', 'https://gulftalent.com'],
                  ['Bayt', 'Vacantes corporativas regionales', 'Mes 2-3', 'bayt.com', 'https://bayt.com'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.vivienda_intro} />
          <SubHead text={t.vivienda_costos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_tipo_aloj, t.th_sem, t.th_mes].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cuarto compartido', '$70 – $100', '$280 – $400'],
                  ['Cuarto individual', '$120 – $180', '$480 – $720'],
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
                  ['Dubizzle', 'Portal #1 de clasificados', 'Habitaciones compartidas y alquileres rápidos', 'dubizzle.com', 'https://dubizzle.com'],
                  ['Property Finder', 'Portal inmobiliario', 'Apartamentos con agentes verificados', 'propertyfinder.ae', 'https://propertyfinder.ae'],
                  ['Bayut', 'Portal inmobiliario', 'Muy detallado con mapas y precios por zona', 'bayut.com', 'https://bayut.com'],
                  ['Airbnb', 'Alojamiento temporal', 'Útil para primeras semanas', 'airbnb.com', 'https://airbnb.com'],
                  ['Grupos WhatsApp Latinos', 'Networking', 'Latinoamericanos en Dubái — habitaciones antes que en portales', 'Ver grupos', '#'],
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.empleos_intro} />
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '12px' }}>
            <strong>{t.empleos_cv_label}</strong> {t.empleos_cv_text} <strong>{t.empleos_cv_b}</strong>. {t.empleos_cv_quote}
          </p>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_sector, t.th_puesto, t.th_salario_aed, t.th_usd_mes, t.th_canal_emp].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', 'AED 2,000 – 3,500', '$540 – $945', 'LinkedIn, Indeed UAE, Dubizzle'],
                  ['Cleaning', 'Cleaner / Housekeeping', 'AED 1,500 – 2,500', '$405 – $675', 'Indeed UAE, Dubizzle'],
                  ['Hotels', 'Reception / Hotel Staff', 'AED 2,500 – 4,000', '$675 – $1,080', 'LinkedIn, Bayt, hoteles directos'],
                  ['Retail', 'Sales Assistant / Shop Staff', 'AED 2,500 – 4,000', '$675 – $1,080', 'LinkedIn, malls directos'],
                  ['Delivery', 'Delivery Rider / Courier', 'AED 3,000 – 5,000', '$810 – $1,350', 'Talabat, Deliveroo, Indeed UAE'],
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
              <thead><tr>{[t.th_sector_sal, t.th_puesto_sal, t.th_mensual_aed, t.th_mensual_usd].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Hospitality', 'Waiter / Bar Staff', 'AED 2,000 – 3,500', '$540 – $945'],
                  ['Cleaning', 'Cleaner / Housekeeping', 'AED 1,500 – 2,500', '$405 – $675'],
                  ['Hotels', 'Reception / Hotel Staff', 'AED 2,500 – 4,000', '$675 – $1,080'],
                  ['Retail', 'Sales Assistant', 'AED 2,500 – 4,000', '$675 – $1,080'],
                  ['Delivery', 'Rider / Courier', 'AED 3,000 – 5,000', '$810 – $1,350'],
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
                  ['Robo / Extravío de Pasaporte', 'Reportar a Policía de Dubái y contactar Embajada/Consulado', 'Policía + Embajada'],
                  ['Estafa de Vivienda', 'Reportar en Dubizzle/Property Finder y denunciar a Policía', 'Policía Dubái'],
                  ['Problemas con Visa / Emirates ID', 'Revisar estado con sponsor o institución educativa', 'GDRFA / Escuela'],
                  ['Retraso en documentos de escuela', 'Contactar Student Office de la institución', 'Tu academia'],
                  ['Enfermedad / Urgencia médica', 'Hospital privado o clínica autorizada con tu seguro', '999'],
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
          <div style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1697729798591-8b7e1b271515?q=80&w=684&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '200px', borderRadius: '12px', marginBottom: '16px' }} />
          <Intro text={t.matrix_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, `${t.hero_title} 🇦🇪`].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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
              window.open(`https://wa.me/353830691988?text=${encodeURIComponent('💡 Feedback Blueprint Dubái:\n\n' + feedback)}`, '_blank')
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