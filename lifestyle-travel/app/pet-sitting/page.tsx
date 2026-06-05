'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Pet & House Sitting',
    hero_sub: 'Cuida mascotas y casas — alojamiento gratis mientras viajas',
    stat1_label: 'Capital inicial', stat1_value: '€1,500 – €3,000',
    stat2_label: 'Alojamiento', stat2_value: 'Gratis (intercambio)',
    stat3_label: 'Dificultad', stat3_value: 'Baja – Media',
    card_title: '¿Qué es el Pet Sitting?',
    card_intro: 'El pet sitting (house sitting) es un intercambio: tú cuidas una casa y sus mascotas y, a cambio, te alojas allí gratis. Para quienes trabajan en remoto, es una forma muy práctica de eliminar el gasto más grande (la vivienda) sin frenar su rutina online.',
    card_p: 'A diferencia de otras rutas,',
    card_b: 'no necesitas visa de trabajo, contrato laboral ni empleador.',
    card_p2: 'Solo necesitas perfil sólido, confianza y estrategia en plataformas especializadas.',
    included_title: '✅ Lo que incluye el modelo Pet Sitting:',
    included: [
      'Alojamiento gratis (el mayor ahorro posible)',
      'Flexibilidad total — tú eliges cuándo y dónde',
      'Sin visa de trabajo requerida',
      'Compatible con trabajo remoto e ingresos freelance',
      'Experiencia internacional y de vida real',
    ],
    intro_hack: 'El pet sitting no te paga, pero te quita de encima el costo del alojamiento. Si combinas esto con trabajo remoto o ingresos freelance, reduces tu gasto mensual a casi cero en vivienda. Llega con €1,500-3,000 de colchón para los primeros sits mientras construyes reseñas.',
    sec_visados_title: 'Visados — Opciones Legales para Pet Sitting',
    visados_intro: 'El pet sitting funciona con visa de turista en la mayoría de países. Es una actividad de intercambio no remunerada, por lo que no requiere permiso de trabajo. Respeta siempre los límites de estancia del país.',
    visados: [
      { flag: '🇪🇺', title: 'Zona Schengen (Europa)', detail: 'Hasta 90 días en 180 días. España, Francia, Alemania, Portugal y más. Ideal para rotar entre sits europeos.', link: 'home-affairs.ec.europa.eu', url: 'https://home-affairs.ec.europa.eu', color: '#22c55e', dif: 'Fácil' },
      { flag: '🇬🇧', title: 'Reino Unido', detail: 'Standard Visitor Visa — hasta 6 meses. Alta demanda de pet sitters. Competencia alta en ciudades grandes.', link: 'gov.uk/standard-visitor', url: 'https://www.gov.uk/standard-visitor', color: '#f59e0b', dif: 'Media' },
      { flag: '🇺🇸', title: 'Estados Unidos (B1/B2)', detail: 'Turismo y visitas temporales. Pet sitting posible como intercambio no remunerado. Requiere visa B1/B2 para la mayoría de LATAM.', link: 'travel.state.gov', url: 'https://travel.state.gov', color: '#f59e0b', dif: 'Media' },
      { flag: '🇦🇺🇳🇿', title: 'Australia / Nueva Zelanda', detail: 'Visa requerida (Working Holiday o turista). Estancias largas muy demandadas. Distancia y costo de vuelo son las barreras principales.', link: 'immi.homeaffairs.gov.au', url: 'https://immi.homeaffairs.gov.au', color: '#ef4444', dif: 'Alta' },
    ],
    visados_red: '⚠️ IMPORTANTE: El pet sitting debe mantenerse como actividad no remunerada. No puedes recibir salario directo con visa de turista. El intercambio es alojamiento por cuidado — no dinero por trabajo.',
    sec_plataformas_title: 'Plataformas — Cómo Encontrar Sits',
    plataformas_intro: 'El pet sitting no funciona como una visa tradicional. Todo depende de tu perfil en plataformas especializadas. Tu perfil es tu CV de confianza — sin perfil sólido, cuesta conseguir los primeros sits.',
    globales_head: '🌍 Plataformas globales',
    locales_head: '🗺️ Plataformas por país (menos competencia)',
    plataformas_hack: 'Empieza en destinos menos competidos (ciudades secundarias en España, Portugal o Francia) para conseguir tus primeras 2-3 reseñas. Con esas reviews, accedes a mejores casas en destinos más populares. Sin reviews, todo cuesta el doble de tiempo.',
    sec_proceso_title: 'Proceso Paso a Paso',
    proceso_intro: 'No gana el más calificado, sino el más rápido y confiable. Perfil fuerte + aplicación rápida = primeros sits. Reviews = acceso a mejores casas.',
    pasos: [
      ['1️⃣', 'Crear perfil sólido', 'Fotos con animales, descripción clara y confiable, experiencia con mascotas (aunque sea informal) y referencias. Tu perfil es TODO.'],
      ['2️⃣', 'Aplicar en las primeras horas', 'Cuando aparece un sit nuevo, aplica en las primeras 1-2 horas. Los dueños revisan primero los que llegaron antes.'],
      ['3️⃣', 'Mensajes personalizados', 'Adapta cada mensaje al dueño — menciona sus mascotas por nombre, su zona, sus rutinas. Los mensajes genéricos no convierten.'],
      ['4️⃣', 'Videollamada con el dueño', 'Se evalúan compatibilidad, tareas (comida, paseos, rutinas), fechas y condiciones. Aquí se construye la confianza.'],
      ['5️⃣', 'Confirmar y ejecutar el sit', 'Acordar detalles finales, llegar puntual y cuidar la casa como si fuera tuya. Eso genera excelentes reviews.'],
      ['6️⃣', 'Conseguir review y escalar', 'Cada review mejora tu perfil y te da acceso a mejores casas. Los primeros 2-3 sits son los más difíciles — después fluye.'],
    ],
    tiempos_head: '⏱ Tiempos estimados',
    th_fase: 'Fase', th_tiempo: 'Tiempo', th_factor: 'Factor clave',
    proceso_hack: 'Los primeros 1-2 sits son los más difíciles sin reviews. Estrategia: aplica a sits en ciudades secundarias menos competidas (no Londres, París o Nueva York al inicio). Con 2-3 reviews sólidas, ya puedes aspirar a las mejores casas en cualquier destino.',
    sec_gastos_title: 'Gastos e Inversión Inicial',
    gastos_intro: 'El pet sitting elimina el mayor gasto (alojamiento) pero sí requiere inversión en plataformas y colchón inicial para los primeros 30-60 días mientras consigues tus primeros sits.',
    th_concepto: 'Concepto', th_costo: 'Costo', th_oblig: 'Obligatorio',
    gastos_blue: '💡 Con 2-3 sits seguidos bien coordinados puedes estar 2-3 meses sin pagar alojamiento. Si tu trabajo es remoto, tu único gasto real son comida, transporte y actividades. El ahorro mensual puede ser de €700-1,500 respecto a alquilar.',
    sec_bancos_title: 'Opciones Bancarias — Lifestyle Remoto',
    bancos_intro: 'En pet sitting no necesitas banco local — no recibes ingresos del país. Lo importante es acceso a dinero internacional y pagos digitales sin comisiones. Wise y Revolut son la combinación perfecta.',
    bancos_hack: 'En pet sitting no necesitas banco local para empezar. Usa Wise o Revolut para gestionar dinero globalmente, pagar gastos diarios y moverte entre países sin fricción.',
    sec_crisis_title: 'Crisis y Contingencia',
    crisis_intro: 'En pet sitting estás viviendo en casa de otra persona. La clave es anticiparse, comunicar rápido y gestionar bien cada situación desde el primer día.',
    crisis_items: [
      ['Problemas con la mascota', 'Contactar inmediatamente al dueño y seguir sus instrucciones. Tienen protocolo para cada situación.'],
      ['Condiciones diferentes a lo acordado', 'Hablar con el dueño directamente. Si no se resuelve, contactar la plataforma (TrustedHousesitters tiene soporte).'],
      ['Cancelación de último momento', 'Activar plan B (Airbnb/hostel) y buscar nuevo sit inmediatamente en la plataforma.'],
      ['Robo / pérdida de documentos', 'Reportar a Policía + contactar Embajada/Consulado de tu país.'],
      ['Problemas de salud', 'Usar seguro médico internacional — Europa: 112.'],
      ['Perfil falso o estafa', 'Nunca confirmar sin videollamada y referencias verificadas. La plataforma tiene sistema de verificación.'],
    ],
    crisis_blue: '🔵 SOPORTE: Dueño de la casa (primer contacto) → Plataforma (TrustedHousesitters/Nomador) → Embajada de tu país → Seguro médico → Servicios de emergencia (112 en Europa, 000 en Australia, 911 en EE.UU.).',
    sec_matrix_title: 'Comparación de Destinos',
    th_categoria: 'Categoría',
    matrix_rows: [
      ['Duración sits', '1 semana – 2 meses', '1 semana – 3 meses', '2 semanas – 6 meses'],
      ['Competencia', 'Media', 'Alta', 'Media'],
      ['Idioma', 'Inglés básico útil', 'Inglés requerido', 'Inglés requerido'],
      ['Acceso', 'Schengen 90 días', 'Visa UK según país', 'Visa necesaria'],
      ['Beneficio principal', 'Ahorro en vivienda', 'Muchas oportunidades', 'Estancias largas'],
      ['Dificultad', '🟢 Baja', '🟡 Media', '🟡 Media'],
      ['Mejor para', 'Empezar + rotar', 'Sits largos urbanos', 'Experiencia larga'],
    ],
    matrix_hack: 'Europa (España, Portugal, Francia) es el mejor punto de inicio — Schengen de 90 días, media competencia y muchas familias buscando sitters. Empieza ahí, construye 3-5 reviews y luego escala a UK, Australia o Nueva Zelanda con un perfil ya consolidado.',
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Te ayudamos a armar tu estrategia de pet sitting + trabajo remoto.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Pet & House Sitting',
    hero_sub: 'Cuide animais e casas — alojamento grátis enquanto viaja',
    stat1_label: 'Capital inicial', stat1_value: '€1.500 – €3.000',
    stat2_label: 'Alojamento', stat2_value: 'Grátis (intercâmbio)',
    stat3_label: 'Dificuldade', stat3_value: 'Baixa – Média',
    card_title: 'O que é o Pet Sitting?',
    card_intro: 'O pet sitting (house sitting) é uma troca: você cuida de uma casa e seus animais e, em troca, se hospeda lá de graça. Para quem trabalha remotamente, é uma forma muito prática de eliminar o maior gasto (a moradia) sem parar sua rotina online.',
    card_p: 'Ao contrário de outras rotas,',
    card_b: 'você não precisa de visto de trabalho, contrato de trabalho nem empregador.',
    card_p2: 'Só precisa de perfil sólido, confiança e estratégia em plataformas especializadas.',
    included_title: '✅ O que inclui o modelo Pet Sitting:',
    included: [
      'Alojamento grátis (a maior economia possível)',
      'Flexibilidade total — você escolhe quando e onde',
      'Sem visto de trabalho necessário',
      'Compatível com trabalho remoto e renda freelance',
      'Experiência internacional e de vida real',
    ],
    intro_hack: 'O pet sitting não te paga, mas elimina o custo do alojamento. Se combinar isso com trabalho remoto ou renda freelance, você reduz seu gasto mensal a quase zero em moradia. Chegue com €1.500-3.000 de reserva para os primeiros sits enquanto constrói avaliações.',
    sec_visados_title: 'Vistos — Opções Legais para Pet Sitting',
    visados_intro: 'O pet sitting funciona com visto de turista na maioria dos países. É uma atividade de intercâmbio não remunerada, portanto não exige permissão de trabalho. Sempre respeite os limites de estadia do país.',
    visados: [
      { flag: '🇪🇺', title: 'Zona Schengen (Europa)', detail: 'Até 90 dias em 180 dias. Espanha, França, Alemanha, Portugal e mais. Ideal para rodar entre sits europeus.', link: 'home-affairs.ec.europa.eu', url: 'https://home-affairs.ec.europa.eu', color: '#22c55e', dif: 'Fácil' },
      { flag: '🇬🇧', title: 'Reino Unido', detail: 'Standard Visitor Visa — até 6 meses. Alta demanda de pet sitters. Concorrência alta em cidades grandes.', link: 'gov.uk/standard-visitor', url: 'https://www.gov.uk/standard-visitor', color: '#f59e0b', dif: 'Média' },
      { flag: '🇺🇸', title: 'Estados Unidos (B1/B2)', detail: 'Turismo e visitas temporárias. Pet sitting possível como intercâmbio não remunerado. Exige visto B1/B2 para a maioria da LATAM.', link: 'travel.state.gov', url: 'https://travel.state.gov', color: '#f59e0b', dif: 'Média' },
      { flag: '🇦🇺🇳🇿', title: 'Austrália / Nova Zelândia', detail: 'Visto necessário (Working Holiday ou turista). Estadias longas muito demandadas. Distância e custo do voo são as principais barreiras.', link: 'immi.homeaffairs.gov.au', url: 'https://immi.homeaffairs.gov.au', color: '#ef4444', dif: 'Alta' },
    ],
    visados_red: '⚠️ IMPORTANTE: O pet sitting deve ser mantido como atividade não remunerada. Você não pode receber salário direto com visto de turista. A troca é alojamento por cuidado — não dinheiro por trabalho.',
    sec_plataformas_title: 'Plataformas — Como Encontrar Sits',
    plataformas_intro: 'O pet sitting não funciona como um visto tradicional. Tudo depende do seu perfil em plataformas especializadas. Seu perfil é seu CV de confiança — sem perfil sólido, é difícil conseguir os primeiros sits.',
    globales_head: '🌍 Plataformas globais',
    locales_head: '🗺️ Plataformas por país (menos concorrência)',
    plataformas_hack: 'Comece em destinos menos concorridos (cidades secundárias na Espanha, Portugal ou França) para conseguir suas primeiras 2-3 avaliações. Com essas reviews, você acessa melhores casas em destinos mais populares. Sem reviews, tudo leva o dobro do tempo.',
    sec_proceso_title: 'Processo Passo a Passo',
    proceso_intro: 'Não vence o mais qualificado, mas o mais rápido e confiável. Perfil forte + aplicação rápida = primeiros sits. Reviews = acesso a melhores casas.',
    pasos: [
      ['1️⃣', 'Criar perfil sólido', 'Fotos com animais, descrição clara e confiável, experiência com animais (mesmo que informal) e referências. Seu perfil é TUDO.'],
      ['2️⃣', 'Aplicar nas primeiras horas', 'Quando aparece um sit novo, aplique nas primeiras 1-2 horas. Os donos revisam primeiro os que chegaram antes.'],
      ['3️⃣', 'Mensagens personalizadas', 'Adapte cada mensagem ao dono — mencione seus animais pelo nome, sua região, suas rotinas. Mensagens genéricas não convertem.'],
      ['4️⃣', 'Videochamada com o dono', 'São avaliados compatibilidade, tarefas (comida, passeios, rotinas), datas e condições. Aqui se constrói a confiança.'],
      ['5️⃣', 'Confirmar e executar o sit', 'Acertar detalhes finais, chegar pontual e cuidar da casa como se fosse sua. Isso gera excelentes avaliações.'],
      ['6️⃣', 'Conseguir avaliação e escalar', 'Cada avaliação melhora seu perfil e te dá acesso a melhores casas. Os primeiros 2-3 sits são os mais difíceis — depois flui.'],
    ],
    tiempos_head: '⏱ Prazos estimados',
    th_fase: 'Fase', th_tiempo: 'Tempo', th_factor: 'Fator chave',
    proceso_hack: 'Os primeiros 1-2 sits são os mais difíceis sem avaliações. Estratégia: aplique a sits em cidades secundárias menos concorridas (não Londres, Paris ou Nova York no início). Com 2-3 avaliações sólidas, já pode aspirar às melhores casas em qualquer destino.',
    sec_gastos_title: 'Gastos e Investimento Inicial',
    gastos_intro: 'O pet sitting elimina o maior gasto (alojamento) mas exige investimento em plataformas e reserva inicial para os primeiros 30-60 dias enquanto consegue seus primeiros sits.',
    th_concepto: 'Conceito', th_costo: 'Custo', th_oblig: 'Obrigatório',
    gastos_blue: '💡 Com 2-3 sits seguidos bem coordenados você pode ficar 2-3 meses sem pagar alojamento. Se seu trabalho é remoto, seu único gasto real são comida, transporte e atividades. A economia mensal pode ser de €700-1.500 em relação a alugar.',
    sec_bancos_title: 'Opções Bancárias — Lifestyle Remoto',
    bancos_intro: 'No pet sitting você não precisa de banco local — não recebe renda do país. O importante é acesso a dinheiro internacional e pagamentos digitais sem comissões. Wise e Revolut são a combinação perfeita.',
    bancos_hack: 'No pet sitting você não precisa de banco local para começar. Use Wise ou Revolut para gerenciar dinheiro globalmente, pagar despesas diárias e se mover entre países sem fricção.',
    sec_crisis_title: 'Crise e Contingência',
    crisis_intro: 'No pet sitting você está morando na casa de outra pessoa. A chave é antecipar, comunicar rápido e gerenciar bem cada situação desde o primeiro dia.',
    crisis_items: [
      ['Problemas com o animal', 'Contatar imediatamente o dono e seguir suas instruções. Eles têm protocolo para cada situação.'],
      ['Condições diferentes do acordado', 'Conversar com o dono diretamente. Se não resolver, contatar a plataforma (TrustedHousesitters tem suporte).'],
      ['Cancelamento de última hora', 'Ativar plano B (Airbnb/hostel) e buscar novo sit imediatamente na plataforma.'],
      ['Roubo / perda de documentos', 'Registrar na Polícia + contatar Embaixada/Consulado do seu país.'],
      ['Problemas de saúde', 'Usar seguro médico internacional — Europa: 112.'],
      ['Perfil falso ou golpe', 'Nunca confirmar sem videochamada e referências verificadas. A plataforma tem sistema de verificação.'],
    ],
    crisis_blue: '🔵 SUPORTE: Dono da casa (primeiro contato) → Plataforma (TrustedHousesitters/Nomador) → Embaixada do seu país → Seguro médico → Serviços de emergência (112 na Europa, 000 na Austrália, 911 nos EUA).',
    sec_matrix_title: 'Comparação de Destinos',
    th_categoria: 'Categoria',
    matrix_rows: [
      ['Duração sits', '1 semana – 2 meses', '1 semana – 3 meses', '2 semanas – 6 meses'],
      ['Concorrência', 'Média', 'Alta', 'Média'],
      ['Idioma', 'Inglês básico útil', 'Inglês necessário', 'Inglês necessário'],
      ['Acesso', 'Schengen 90 dias', 'Visto UK conforme país', 'Visto necessário'],
      ['Benefício principal', 'Economia em moradia', 'Muitas oportunidades', 'Estadias longas'],
      ['Dificuldade', '🟢 Baixa', '🟡 Média', '🟡 Média'],
      ['Melhor para', 'Começar + rodar', 'Sits longos urbanos', 'Experiência longa'],
    ],
    matrix_hack: 'Europa (Espanha, Portugal, França) é o melhor ponto de partida — Schengen de 90 dias, média concorrência e muitas famílias buscando sitters. Comece lá, construa 3-5 avaliações e depois escale para UK, Austrália ou Nova Zelândia com um perfil já consolidado.',
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Te ajudamos a montar sua estratégia de pet sitting + trabalho remoto.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'Pet & House Sitting',
    hero_sub: 'Care for pets and homes — free accommodation while you travel',
    stat1_label: 'Initial capital', stat1_value: '€1,500 – €3,000',
    stat2_label: 'Accommodation', stat2_value: 'Free (exchange)',
    stat3_label: 'Difficulty', stat3_value: 'Low – Medium',
    card_title: 'What is Pet Sitting?',
    card_intro: 'Pet sitting (house sitting) is an exchange: you care for a home and its pets and, in return, you stay there for free. For those who work remotely, it\'s a very practical way to eliminate the biggest expense (housing) without stopping your online routine.',
    card_p: 'Unlike other routes,',
    card_b: 'you don\'t need a work visa, employment contract or employer.',
    card_p2: 'You just need a solid profile, trust and strategy on specialized platforms.',
    included_title: '✅ What the Pet Sitting model includes:',
    included: [
      'Free accommodation (the biggest possible saving)',
      'Total flexibility — you choose when and where',
      'No work visa required',
      'Compatible with remote work and freelance income',
      'International and real-life experience',
    ],
    intro_hack: 'Pet sitting doesn\'t pay you, but it takes away the cost of accommodation. If you combine this with remote work or freelance income, you reduce your monthly housing expense to almost zero. Arrive with €1,500-3,000 as a buffer for the first sits while you build reviews.',
    sec_visados_title: 'Visas — Legal Options for Pet Sitting',
    visados_intro: 'Pet sitting works with a tourist visa in most countries. It\'s an unpaid exchange activity, so it doesn\'t require a work permit. Always respect the country\'s stay limits.',
    visados: [
      { flag: '🇪🇺', title: 'Schengen Zone (Europe)', detail: 'Up to 90 days in 180 days. Spain, France, Germany, Portugal and more. Ideal for rotating between European sits.', link: 'home-affairs.ec.europa.eu', url: 'https://home-affairs.ec.europa.eu', color: '#22c55e', dif: 'Easy' },
      { flag: '🇬🇧', title: 'United Kingdom', detail: 'Standard Visitor Visa — up to 6 months. High demand for pet sitters. High competition in large cities.', link: 'gov.uk/standard-visitor', url: 'https://www.gov.uk/standard-visitor', color: '#f59e0b', dif: 'Medium' },
      { flag: '🇺🇸', title: 'United States (B1/B2)', detail: 'Tourism and temporary visits. Pet sitting possible as unpaid exchange. Requires B1/B2 visa for most of LATAM.', link: 'travel.state.gov', url: 'https://travel.state.gov', color: '#f59e0b', dif: 'Medium' },
      { flag: '🇦🇺🇳🇿', title: 'Australia / New Zealand', detail: 'Visa required (Working Holiday or tourist). Long stays very much in demand. Distance and flight cost are the main barriers.', link: 'immi.homeaffairs.gov.au', url: 'https://immi.homeaffairs.gov.au', color: '#ef4444', dif: 'High' },
    ],
    visados_red: '⚠️ IMPORTANT: Pet sitting must be kept as an unpaid activity. You cannot receive direct payment with a tourist visa. The exchange is accommodation for care — not money for work.',
    sec_plataformas_title: 'Platforms — How to Find Sits',
    plataformas_intro: 'Pet sitting doesn\'t work like a traditional visa. Everything depends on your profile on specialized platforms. Your profile is your trust CV — without a solid profile, getting the first sits is hard.',
    globales_head: '🌍 Global platforms',
    locales_head: '🗺️ Country-specific platforms (less competition)',
    plataformas_hack: 'Start in less competitive destinations (secondary cities in Spain, Portugal or France) to get your first 2-3 reviews. With those reviews, you access better homes in more popular destinations. Without reviews, everything takes twice as long.',
    sec_proceso_title: 'Step by Step Process',
    proceso_intro: 'The winner isn\'t the most qualified, but the fastest and most reliable. Strong profile + fast application = first sits. Reviews = access to better homes.',
    pasos: [
      ['1️⃣', 'Create a solid profile', 'Photos with animals, clear and trustworthy description, experience with pets (even informal) and references. Your profile is EVERYTHING.'],
      ['2️⃣', 'Apply in the first hours', 'When a new sit appears, apply in the first 1-2 hours. Owners review those who arrived first.'],
      ['3️⃣', 'Personalized messages', 'Adapt each message to the owner — mention their pets by name, their area, their routines. Generic messages don\'t convert.'],
      ['4️⃣', 'Video call with the owner', 'Compatibility, tasks (food, walks, routines), dates and conditions are evaluated. This is where trust is built.'],
      ['5️⃣', 'Confirm and execute the sit', 'Agree on final details, arrive on time and care for the home as if it were yours. That generates excellent reviews.'],
      ['6️⃣', 'Get review and scale up', 'Each review improves your profile and gives you access to better homes. The first 2-3 sits are the hardest — after that it flows.'],
    ],
    tiempos_head: '⏱ Estimated timelines',
    th_fase: 'Phase', th_tiempo: 'Time', th_factor: 'Key factor',
    proceso_hack: 'The first 1-2 sits are the hardest without reviews. Strategy: apply to sits in less competitive secondary cities (not London, Paris or New York at first). With 2-3 solid reviews, you can already aim for the best homes in any destination.',
    sec_gastos_title: 'Costs & Initial Investment',
    gastos_intro: 'Pet sitting eliminates the biggest expense (accommodation) but does require investment in platforms and an initial buffer for the first 30-60 days while you get your first sits.',
    th_concepto: 'Item', th_costo: 'Cost', th_oblig: 'Mandatory',
    gastos_blue: '💡 With 2-3 consecutive well-coordinated sits you can go 2-3 months without paying accommodation. If your work is remote, your only real expense is food, transport and activities. The monthly saving can be €700-1,500 compared to renting.',
    sec_bancos_title: 'Banking Options — Remote Lifestyle',
    bancos_intro: 'In pet sitting you don\'t need a local bank — you don\'t receive income from the country. What matters is access to international money and digital payments without commissions. Wise and Revolut are the perfect combination.',
    bancos_hack: 'In pet sitting you don\'t need a local bank to start. Use Wise or Revolut to manage money globally, pay daily expenses and move between countries without friction.',
    sec_crisis_title: 'Crisis & Contingency',
    crisis_intro: 'In pet sitting you\'re living in someone else\'s home. The key is to anticipate, communicate quickly and manage each situation well from the first day.',
    crisis_items: [
      ['Problems with the pet', 'Contact the owner immediately and follow their instructions. They have a protocol for each situation.'],
      ['Conditions different from agreed', 'Talk to the owner directly. If unresolved, contact the platform (TrustedHousesitters has support).'],
      ['Last-minute cancellation', 'Activate plan B (Airbnb/hostel) and look for a new sit immediately on the platform.'],
      ['Theft / loss of documents', 'Report to Police + contact your country\'s Embassy/Consulate.'],
      ['Health problems', 'Use international health insurance — Europe: 112.'],
      ['Fake profile or scam', 'Never confirm without video call and verified references. The platform has a verification system.'],
    ],
    crisis_blue: '🔵 SUPPORT: Home owner (first contact) → Platform (TrustedHousesitters/Nomador) → Your country\'s Embassy → Health insurance → Emergency services (112 in Europe, 000 in Australia, 911 in the US).',
    sec_matrix_title: 'Destination Comparison',
    th_categoria: 'Category',
    matrix_rows: [
      ['Sit duration', '1 week – 2 months', '1 week – 3 months', '2 weeks – 6 months'],
      ['Competition', 'Medium', 'High', 'Medium'],
      ['Language', 'Basic English useful', 'English required', 'English required'],
      ['Access', 'Schengen 90 days', 'UK visa per country', 'Visa required'],
      ['Main benefit', 'Housing savings', 'Many opportunities', 'Long stays'],
      ['Difficulty', '🟢 Low', '🟡 Medium', '🟡 Medium'],
      ['Best for', 'Start + rotate', 'Long urban sits', 'Long experience'],
    ],
    matrix_hack: 'Europe (Spain, Portugal, France) is the best starting point — 90-day Schengen, medium competition and many families looking for sitters. Start there, build 3-5 reviews and then scale to UK, Australia or New Zealand with an already consolidated profile.',
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We help you build your pet sitting + remote work strategy.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

export default function PetSitting() {
  const [openSection, setOpenSection] = useState<string | null>(null)
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
    link: { color: '#2563eb', textDecoration: 'underline' as const, fontSize: '13px' },
    bold: { fontWeight: '700' as const },
  }
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
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1696875135742-c3044510c9e2?q=80&w=1180&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🐾</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[[t.stat1_label, t.stat1_value, '💰'], [t.stat2_label, t.stat2_value, '🏠'], [t.stat3_label, t.stat3_value, '📊']].map((s, i) => (
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617028835510-3882b8bd4076?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>{t.card_title}</h2>
          <Intro text={t.card_intro} />
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#1a1a2e', marginBottom: '12px' }}>
            {t.card_p} <strong>{t.card_b}</strong> {t.card_p2}
          </p>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>{t.included_title}</p>
            {t.included.map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
          <HackBox text={t.intro_hack} />
        </div>

        {/* VISADOS */}
        <Section id="visados" emoji="🛂" title={t.sec_visados_title}>
          <Intro text={t.visados_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {t.visados.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${item.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <p style={{ fontWeight: '700', fontSize: '14px', margin: 0, color: '#1a1a2e' }}>{item.flag} {item.title}</p>
                  <span style={{ backgroundColor: item.color, color: 'white', borderRadius: '10px', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold', flexShrink: 0, marginLeft: '8px' }}>{item.dif}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#1a1a2e', margin: '0 0 6px', lineHeight: '1.5' }}>{item.detail}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>{item.link} →</a>
              </div>
            ))}
          </div>
          <RedBox text={t.visados_red} />
        </Section>

        {/* PLATAFORMAS */}
        <Section id="plataformas" emoji="🐕‍🦺" title={t.sec_plataformas_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1749673802585-9023423800ba?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.plataformas_intro} />
          <SubHead text={t.globales_head} />
          <div style={{ display: 'grid', gap: '8px', marginBottom: '14px' }}>
            {[
              ['TrustedHousesitters', 'La más grande a nivel mundial. Mayor variedad de destinos.', '€120-150/año', 'https://www.trustedhousesitters.com'],
              ['Nomador', 'Muy fuerte en Europa. Buena para empezar en España o Francia.', '€89/año', 'https://www.nomador.com'],
              ['HouseCarers', 'Comunidad sólida y veterana. Buena variedad global.', '€50/año', 'https://www.housecarers.com'],
              ['MindMyHouse', 'Opción económica para empezar. Menos competencia.', '€20/año', 'https://www.mindmyhouse.com'],
              ['HouseSitMatch', 'Buena para principiantes. Proceso de matching más guiado.', '€39/año', 'https://www.housesitmatch.com'],
              ['Luxury House Sitting', 'Propiedades premium. Requiere historial sólido.', 'Variable', 'https://www.luxuryhousesitting.com'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 14px' }}>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 2px', color: '#1a1a2e' }}>{r[0]}</p>
                  <p style={{ fontSize: '12px', color: '#333333', margin: 0 }}>{r[1]}</p>
                </div>
                <div style={{ textAlign: 'right' as const, flexShrink: 0, marginLeft: '8px' }}>
                  <p style={{ fontSize: '11px', color: '#333333', margin: '0 0 2px' }}>{r[2]}</p>
                  <a href={r[3] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>Ver →</a>
                </div>
              </div>
            ))}
          </div>
          <SubHead text={t.locales_head} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              ['🇦🇺 Australia', 'Aussie House Sitters', 'https://www.aussiehousesitters.com.au'],
              ['🇳🇿 Nueva Zelanda', 'Kiwi House Sitters', 'https://www.kiwihousesitters.co.nz'],
              ['🇺🇸 EE.UU.', 'House Sitters America', 'https://www.housesittersamerica.com'],
              ['🇨🇦 Canadá', 'House Sitters Canada', 'https://www.housesitterscanada.com'],
              ['🇲🇽 México', 'House Sit Mexico', 'https://www.housesitmexico.com'],
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '10px', padding: '10px 12px' }}>
                <p style={{ fontWeight: '700', fontSize: '12px', margin: '0 0 3px', color: '#1a1a2e' }}>{r[0]}</p>
                <a href={r[2] as string} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '12px' }}>{r[1]}</a>
              </div>
            ))}
          </div>
          <HackBox text={t.plataformas_hack} />
        </Section>

        {/* PROCESO */}
        <Section id="proceso" emoji="⏳" title={t.sec_proceso_title}>
          <Intro text={t.proceso_intro} />
          {t.pasos.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{step[0]}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px', color: '#1a1a2e' }}>{step[1]}</p>
                <p style={{ fontSize: '12px', color: '#333333', margin: 0, lineHeight: '1.5' }}>{step[2]}</p>
              </div>
            </div>
          ))}
          <SubHead text={t.tiempos_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_fase, t.th_tiempo, t.th_factor].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Crear perfil optimizado', '1-3 días', 'Calidad de fotos y descripción'],
                  ['Primeras aplicaciones', 'Día 1 en plataforma', 'Velocidad + personalización'],
                  ['Primer sit confirmado', '1-2 semanas (perfil fuerte)', 'Competencia del destino'],
                  ['Primeras reviews', 'Tras completar sit', 'Calidad del cuidado'],
                  ['Acceso a mejores oportunidades', 'Tras 3-5 reviews', 'Historial en plataforma'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={{ ...T.td(i), color: '#166534', fontWeight: '600' }}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <HackBox text={t.proceso_hack} />
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <Intro text={t.gastos_intro} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_concepto, t.th_costo, t.th_oblig].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Membresía TrustedHousesitters', '€120-150/año', '✅ Principal plataforma'],
                  ['Membresía Nomador (opcional)', '€89/año', '⚪ Recomendado para Europa'],
                  ['Membresía adicional (opcional)', '€20-50/año', '⚪ Para más visibilidad'],
                  ['Seguro médico internacional', '€100-300/año', '✅ Muy recomendado'],
                  ['Tasa de visa (si aplica)', '€0-200', '✅ Según país'],
                  ['Boleto de avión', '€400-1,200', '✅ Primer destino'],
                  ['Colchón inicial recomendado', '€1,500-3,000', '✅ Para los primeros 30-60 días'],
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
        </Section>

        {/* BANCOS */}
        <Section id="bancos" emoji="🏦" title={t.sec_bancos_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1696875094691-815f5a332506?q=80&w=627&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.bancos_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Wise', 'Digital — Global', 'Transferencias internacionales baratas + múltiples divisas. El #1 para nómadas.', 'wise.com', 'https://wise.com'],
              ['Revolut', 'Digital — Global', 'Apertura rápida + tarjeta virtual inmediata. Ideal para pagos diarios.', 'revolut.com', 'https://revolut.com'],
              ['N26', 'Digital — Europa', 'IBAN europeo + gestión completa desde app.', 'n26.com', 'https://n26.com'],
              ['Monzo', 'Digital — UK', 'Muy usado en UK. Ideal si haces muchos sits en Reino Unido.', 'monzo.com', 'https://monzo.com'],
              ['Bunq', 'Digital — Europa', 'IBAN europeo + control total + ideal para expats.', 'bunq.com', 'https://bunq.com'],
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
          <HackBox text={t.bancos_hack} />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1749674240266-eda73911d98f?q=80&w=1074&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.crisis_intro} />
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
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_categoria, '🇪🇺 Europa', '🇬🇧 Reino Unido', '🇦🇺🇳🇿 AUS/NZ'].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
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

      </div>
    </main>
  )
}