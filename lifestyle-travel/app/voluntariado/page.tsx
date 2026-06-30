'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from '../components/LanguageSwitcher'

const translations = {
  es: {
    hero_title: 'Voluntariado Internacional',
    hero_sub: 'Alojamiento + comida gratis a cambio de tu tiempo',
    stat1_label: 'Costo mensual', stat1_value: '~$0 (Aloj + comida)',
    stat2_label: 'Horas/semana', stat2_value: '20 – 40 horas',
    stat3_label: 'Dificultad', stat3_value: 'Media – Alta',
    card_title: '¿Qué es el Voluntariado Internacional?',
    card_intro: 'Un sistema de intercambio diseñado para eliminar tus dos gastos más grandes — alojamiento y comida — sin visa de trabajo ni costosos estudios. Ingresas como turista, cooperas en proyectos globales a cambio de beneficios en especie, y usas tus horas libres para facturar en dólares o euros por internet de forma 100% remota.',
    included_title: '✅ Lo que incluye el voluntariado:',
    included: ['Alojamiento gratis (habitación o cama)', 'Comida incluida (según programa)', 'Experiencia internacional real', 'Días libres para turismo y trabajo remoto', 'Red de contactos global'],
    intro_hack: 'Al ingresar en la ventanilla de migración, NUNCA digas que vienes a trabajar a cambio de comida. Para la ley, eso activa alarmas de inmigración ilegal. Eres un turista en un programa de intercambio cultural. Lleva siempre pasaje de regreso, seguro médico y datos del anfitrión como "hospedaje", nunca como "empleador".',
    sec_eleg_title: 'Elegibilidad por Pasaporte Latinoamericano',
    eleg_intro: 'Tu nivel de acceso depende del poder de tu pasaporte. Esto determina qué programas puedes usar, cuántos trámites necesitas y qué fondos debes demostrar en frontera.',
    elegibilidad: [
      { level: '🟢 PREMIUM', countries: 'Argentina, Chile, Uruguay, Costa Rica, Panamá, Brasil', europe: '✅ Libre (Sin Visa)', asia: '✅ Libre / VoA', impact: 'BAJO — Aterrizan sin trámites consulares. 90 días directos en Schengen y acceso directo a Tailandia, Malasia y Vietnam.', color: '#22c55e', bg: '#f0fdf4', border: '#86efac' },
      { level: '🟡 MEDIO', countries: 'Colombia, Perú, México', europe: '✅ Libre (Sin Visa)', asia: '⚠️ Variable', impact: 'MEDIO — Mismo beneficio de entrada que Premium, pero migración exige fondos de contingencia ($1,500 USD obligatorios) y boleto de salida.', color: '#f59e0b', bg: '#fffbeb', border: '#fbbf24' },
      { level: '🔴 RESTRICCIÓN', countries: 'Ecuador, Bolivia, Cuba, Rep. Dominicana, Honduras, El Salvador, Guatemala, Nicaragua', europe: '⛔ Visa Schengen obligatoria', asia: '⛔ Restringido', impact: 'ALTO — Deben tramitar visa consular previa. El hostal debe enviar Carta de Invitación Formal. Recomendado: UN Volunteers o AIESEC por su respaldo institucional.', color: '#ef4444', bg: '#fef2f2', border: '#fca5a5' },
    ],
    sec_prog_title: 'Programas Disponibles',
    prog_intro: 'Tres programas principales, cada uno con un perfil diferente. Worldpackers para hostales y proyectos urbanos. WWOOF para granjas y vida rural. UN Volunteers para misiones humanitarias con financiación completa de la ONU.',
    prog_fields: ['⏰ Horas', '🍽️ Beneficio', '📍 Destinos', '🛠️ Roles'],
    prog_hack: 'La ONU (UN Volunteers) es el mejor programa para pasaportes de alta restricción — la carta de la ONU exime de solvencia consular y acelera aprobación de visa. Para pasaportes Premium, Worldpackers es la entrada más rápida y flexible.',
    sec_req_title: 'Requisitos por Programa',
    th_prog: 'Programa', th_edad: 'Edad', th_idioma: 'Idioma', th_antec: 'Antecedentes', th_docs: 'Documentos',
    sec_gastos_title: 'Gastos Obligatorios por Perfil',
    th_perfil: 'Perfil', th_visa: 'Visa Europa', th_seguro: 'Seguro médico', th_extras: 'Extras', th_total: 'Total estimado',
    gastos_blue: '💡 ETIAS 2026: Los latinoamericanos con pasaporte Premium (sin visa Schengen) ahora deben tramitar ETIAS online antes de volar a Europa. Cuesta €20, dura 3 años y se aprueba en minutos. Sin ETIAS no te dejan subir al avión.',
    sec_roles_title: 'Roles y Límites de Trabajo Voluntario',
    roles_intro: 'El intercambio es justo cuando se respetan los límites. Más de 30 horas semanales ya califica como empleo y debe ser remunerado. Verifica estas reglas antes de confirmar cualquier voluntariado.',
    reglas: [
      ['✅ Regla del Intercambio Justo', 'Ningún voluntariado informal debe exigir más de 30 horas semanales. Más de eso = empleo = debe ser remunerado.'],
      ['✅ Días de Descanso Garantizados', 'Mínimo 2 días libres consecutivos por semana para turismo o descanso.'],
      ['✅ Prohibición de Lucro Directo', 'El voluntario no debe manejar cajas de dinero ni venta directa de forma aislada.'],
    ],
    th_roles: 'Programa', th_roles2: 'Roles más demandados', th_horas: 'Horas/semana', th_beneficios: 'Beneficios',
    sec_remoto_title: 'Trabajo Remoto — Portales para Facturar Online',
    remoto_intro: 'En tus horas libres del voluntariado puedes facturar en dólares o euros de forma 100% remota. Estos son los mejores portales para trabajo freelance e independiente desde cualquier país.',
    sec_timeline_title: 'Timeline de Ejecución — 3 Meses Antes del Vuelo',
    timeline_phases: [
      { phase: '📅 Mes 3 (Semanas 12-9)', title: 'Fase de Filtro y Aplicación', items: ['Sem 12: Crear y optimizar perfiles en Worldpackers, WWOOF o UN Volunteers', 'Sem 11: Revisar vigencia del pasaporte — si quedan menos de 6 meses, renovar YA', 'Sem 10: Enviar primeras 5 aplicaciones personalizadas a anfitriones', 'Sem 9: Videollamadas con anfitriones interesados y confirmar roles, horas y beneficios'], color: '#3b82f6' },
      { phase: '📅 Mes 2 (Semanas 8-5)', title: 'Fase Legal y Logística', items: ['Sem 8: Comprar pasajes de avión ida y vuelta (obligatorio)', 'Sem 7: Tramitar ETIAS (€20 online) o visa consular si aplica', 'Sem 6: Solicitar antecedentes penales apostillados si el programa lo requiere', 'Sem 5: Revisar calendario de vacunación según destino (Fiebre Amarilla en trópicos)'], color: '#f59e0b' },
      { phase: '📅 Mes 1 (Semanas 4-1)', title: 'Fase de Cierre y Blindaje', items: ['Sem 4: Contratar seguro médico (SafetyWing o Heymondo)', 'Sem 3: Notificar banco sobre viaje + configurar Wise/Revolut', 'Sem 2: Preparar equipaje + dejar copias digitales en la nube', 'Sem 1: Confirmar llegada con anfitrión + cambiar $100-200 USD en efectivo + check-in 24h antes'], color: '#22c55e' },
    ],
    sec_aterrizaje_title: 'Protocolo de Aterrizaje — Primeras 72 Horas',
    aterrizaje_intro: 'Las primeras 72 horas son críticas para tu estatus migratorio y tu relación con el anfitrión. Sigue este protocolo exacto.',
    aterrizaje_pasos: [
      ['Día 1 — Primeras 24h', 'Sellar entrada / registro digital. En Europa verificar registro EES. En Asia guardar comprobante de Arrival Card. Evitar multas por entrada no registrada.'],
      ['Día 2 — Primeras 48h', 'Check-in con el anfitrión. Si el país lo exige, registrar dirección real de estancia. Confirmar roles, horario y días libres exactos para evitar malentendidos desde el inicio.'],
      ['Día 3 — Primeras 72h', 'Activar SIM local con datos para tener acceso a mapas y soporte de plataformas en caso de emergencia. Confirmar reglas de convivencia: cocina, horario nocturno, visitas, lavandería.'],
    ],
    aterrizaje_red: '⚠️ Si te pasas de los 90 días legales, NO intentes salir escondiéndote. Dirígete a migración local para pagar la multa y solicitar salida voluntaria. Evitas deportación y veto fronterizo.',
    sec_crisis_title: 'Crisis y Contingencia — Protocolos de Emergencia',
    crisis_scenarios: [
      { title: '🏚️ Escenario A: El voluntariado es una estafa o condiciones deplorables', steps: ['Documentar con fotos, videos y capturas de chat.', 'Worldpackers: Activar seguro — paga hasta 3 noches de hostal de emergencia y te reubica. WWOOF: Reportar al coordinador nacional.', 'Si tu integridad está en riesgo, vete inmediatamente a un hostal. Ningún voluntariado vale tu seguridad.'], color: '#dc2626' },
      { title: '🏥 Escenario B: Accidente o enfermedad grave', steps: ['Informar al anfitrión y compañeros para primeros auxilios.', 'Llamar al número de emergencia de tu póliza ANTES de entrar al hospital. Si no es posible, guardar todas las facturas.', 'Notificar a la plataforma sobre tu estado para congelar la estancia o tramitar relevo.'], color: '#f59e0b' },
      { title: '🛃 Escenario C: Problemas migratorios o pérdida de documentos', steps: ['Pérdida de pasaporte: Ir a policía local a levantar denuncia (Police Report obligatorio).', 'Agendar cita de emergencia en embajada de tu país para pasaporte de emergencia o salvoconducto.', 'Overstay (días excedidos): No intentes salir sin reportar. Ve a migración, paga multa, pide salida voluntaria.'], color: '#3b82f6' },
    ],
    paso_label: 'Paso',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_a_head: '🛫 Ruta A: Latinoamérica → Europa / Asia',
    matrix_b_head: '🛬 Ruta B: Europa / Asia → Latinoamérica',
    th_cat: 'Categoría', th_det: 'Detalle',
    matrix_a: [
      ['Ruta visa principal', 'ETIAS €20 (Premium/Medio) / Visa Schengen €90 (Restricción)'],
      ['Permiso de trabajo', '0h formales (actividad no remunerada con visa turista)'],
      ['Solvencia requerida', '€40–€90/día de estancia como garantía en control de frontera'],
      ['Costo seguro médico', '$40–$70 USD/mes (SafetyWing / Heymondo)'],
      ['Alojamiento promedio', '$0 USD (cubierto por el anfitrión)'],
      ['Roles más comunes', 'Recepción, Housekeeping, Social Media, Bartender, Agricultura'],
      ['Salario en especie', 'Equivalente a €800/mes en Europa · $500/mes en Asia'],
      ['Tiempo hasta primer sit', '1-2 semanas (confirmado desde Worldpackers antes de volar)'],
      ['Ruta a largo plazo', 'Voluntariado → Ingresos remotos → Visa Nómada Digital'],
      ['Dificultad', 'Media-Alta (según restricción del pasaporte)'],
      ['Mejores ciudades', 'Barcelona, Berlín, Bangkok, Tokio'],
    ],
    matrix_b: [
      ['Entrada', '$0 (libre 90 días para EU/Asia Premium)'],
      ['Alojamiento', '$0 (cubierto por eco-lodge, ONG u hostal)'],
      ['Roles comunes', 'Enseñanza de idiomas, Permacultura, Eco-construcción, Relaciones con huéspedes'],
      ['Salario en especie', 'Equivalente a $400 USD/mes en Latam'],
      ['Ruta a largo plazo', 'Voluntariado → Red ONGs → Patrocinio visa de empleo local'],
      ['Dificultad', 'Baja (pasaportes EU/Premium asiáticos)'],
      ['Mejores ciudades', 'Ciudad de México, Medellín, Cusco, Florianópolis'],
    ],
    matrix_hack: 'La ruta más inteligente: Voluntariado (0 gastos fijos) + trabajo remoto en horas libres + ingresos en USD/EUR = ahorro máximo. Con 3-6 meses de ingresos remotos demostrables, aplicas a Visa Nómada Digital en Georgia o España para residencia legal.',
    consultoria_title: 'Consultoría 1 a 1',
    consultoria_desc: 'Te armamos la estrategia de voluntariado + trabajo remoto según tu perfil.',
    consultoria_time: '60 minutos · Plan completo · Respuesta en 24h',
    consultoria_btn: '📅 Agenda tu llamada de orientación',
    hack_label: '💡 Hack de Lifestyle & Travel: ',
  },
  pt: {
    hero_title: 'Voluntariado Internacional',
    hero_sub: 'Alojamento + comida grátis em troca do seu tempo',
    stat1_label: 'Custo mensal', stat1_value: '~$0 (Aloj + comida)',
    stat2_label: 'Horas/semana', stat2_value: '20 – 40 horas',
    stat3_label: 'Dificuldade', stat3_value: 'Média – Alta',
    card_title: 'O que é o Voluntariado Internacional?',
    card_intro: 'Um sistema de intercâmbio projetado para eliminar seus dois maiores gastos — alojamento e comida — sem visto de trabalho nem estudos caros. Você entra como turista, coopera em projetos globais em troca de benefícios em espécie, e usa suas horas livres para faturar em dólares ou euros pela internet de forma 100% remota.',
    included_title: '✅ O que inclui o voluntariado:',
    included: ['Alojamento grátis (quarto ou cama)', 'Comida incluída (conforme programa)', 'Experiência internacional real', 'Dias livres para turismo e trabalho remoto', 'Rede de contatos global'],
    intro_hack: 'Ao entrar na janela de migração, NUNCA diga que vem trabalhar em troca de comida. Para a lei, isso aciona alarmes de imigração ilegal. Você é um turista em um programa de intercâmbio cultural. Sempre leve passagem de volta, seguro médico e dados do anfitrião como "hospedagem", nunca como "empregador".',
    sec_eleg_title: 'Elegibilidade por Passaporte Latino-americano',
    eleg_intro: 'Seu nível de acesso depende do poder do seu passaporte. Isso determina quais programas você pode usar, quantos procedimentos precisa e quais fundos deve demonstrar na fronteira.',
    elegibilidad: [
      { level: '🟢 PREMIUM', countries: 'Argentina, Chile, Uruguai, Costa Rica, Panamá, Brasil', europe: '✅ Livre (Sem Visto)', asia: '✅ Livre / VoA', impact: 'BAIXO — Chegam sem procedimentos consulares. 90 dias diretos no Schengen e acesso direto à Tailândia, Malásia e Vietnã.', color: '#22c55e', bg: '#f0fdf4', border: '#86efac' },
      { level: '🟡 MÉDIO', countries: 'Colômbia, Peru, México', europe: '✅ Livre (Sem Visto)', asia: '⚠️ Variável', impact: 'MÉDIO — Mesmo benefício de entrada que Premium, mas migração exige fundos de contingência ($1.500 USD obrigatórios) e passagem de saída.', color: '#f59e0b', bg: '#fffbeb', border: '#fbbf24' },
      { level: '🔴 RESTRIÇÃO', countries: 'Equador, Bolívia, Cuba, Rep. Dominicana, Honduras, El Salvador, Guatemala, Nicarágua', europe: '⛔ Visto Schengen obrigatório', asia: '⛔ Restrito', impact: 'ALTO — Devem tramitar visto consular prévio. O hostel deve enviar Carta de Convite Formal. Recomendado: UN Volunteers ou AIESEC pelo respaldo institucional.', color: '#ef4444', bg: '#fef2f2', border: '#fca5a5' },
    ],
    sec_prog_title: 'Programas Disponíveis',
    prog_intro: 'Três programas principais, cada um com um perfil diferente. Worldpackers para hostels e projetos urbanos. WWOOF para fazendas e vida rural. UN Volunteers para missões humanitárias com financiamento completo da ONU.',
    prog_fields: ['⏰ Horas', '🍽️ Benefício', '📍 Destinos', '🛠️ Funções'],
    prog_hack: 'A ONU (UN Volunteers) é o melhor programa para passaportes de alta restrição — a carta da ONU isenta de solvência consular e acelera aprovação de visto. Para passaportes Premium, Worldpackers é a entrada mais rápida e flexível.',
    sec_req_title: 'Requisitos por Programa',
    th_prog: 'Programa', th_edad: 'Idade', th_idioma: 'Idioma', th_antec: 'Antecedentes', th_docs: 'Documentos',
    sec_gastos_title: 'Despesas Obrigatórias por Perfil',
    th_perfil: 'Perfil', th_visa: 'Visto Europa', th_seguro: 'Seguro médico', th_extras: 'Extras', th_total: 'Total estimado',
    gastos_blue: '💡 ETIAS 2026: Os latino-americanos com passaporte Premium (sem visto Schengen) agora devem tramitar ETIAS online antes de voar para a Europa. Custa €20, dura 3 anos e é aprovado em minutos. Sem ETIAS não deixam embarcar.',
    sec_roles_title: 'Funções e Limites do Trabalho Voluntário',
    roles_intro: 'O intercâmbio é justo quando os limites são respeitados. Mais de 30 horas semanais já qualifica como emprego e deve ser remunerado. Verifique estas regras antes de confirmar qualquer voluntariado.',
    reglas: [
      ['✅ Regra do Intercâmbio Justo', 'Nenhum voluntariado informal deve exigir mais de 30 horas semanais. Mais que isso = emprego = deve ser remunerado.'],
      ['✅ Dias de Descanso Garantidos', 'Mínimo 2 dias livres consecutivos por semana para turismo ou descanso.'],
      ['✅ Proibição de Lucro Direto', 'O voluntário não deve manusear caixas de dinheiro nem venda direta de forma isolada.'],
    ],
    th_roles: 'Programa', th_roles2: 'Funções mais demandadas', th_horas: 'Horas/semana', th_beneficios: 'Benefícios',
    sec_remoto_title: 'Trabalho Remoto — Portais para Faturar Online',
    remoto_intro: 'Nas suas horas livres do voluntariado você pode faturar em dólares ou euros de forma 100% remota. Estes são os melhores portais para trabalho freelance e independente de qualquer país.',
    sec_timeline_title: 'Cronograma de Execução — 3 Meses Antes do Voo',
    timeline_phases: [
      { phase: '📅 Mês 3 (Semanas 12-9)', title: 'Fase de Filtro e Aplicação', items: ['Sem 12: Criar e otimizar perfis no Worldpackers, WWOOF ou UN Volunteers', 'Sem 11: Verificar validade do passaporte — se restar menos de 6 meses, renovar JÁ', 'Sem 10: Enviar primeiras 5 candidaturas personalizadas a anfitriões', 'Sem 9: Videochamadas com anfitriões interessados e confirmar funções, horas e benefícios'], color: '#3b82f6' },
      { phase: '📅 Mês 2 (Semanas 8-5)', title: 'Fase Legal e Logística', items: ['Sem 8: Comprar passagens de avião ida e volta (obrigatório)', 'Sem 7: Tramitar ETIAS (€20 online) ou visto consular se aplicável', 'Sem 6: Solicitar antecedentes criminais apostilados se o programa exigir', 'Sem 5: Verificar calendário de vacinação conforme destino (Febre Amarela nos trópicos)'], color: '#f59e0b' },
      { phase: '📅 Mês 1 (Semanas 4-1)', title: 'Fase de Fechamento e Blindagem', items: ['Sem 4: Contratar seguro médico (SafetyWing ou Heymondo)', 'Sem 3: Notificar banco sobre viagem + configurar Wise/Revolut', 'Sem 2: Preparar bagagem + deixar cópias digitais na nuvem', 'Sem 1: Confirmar chegada com anfitrião + trocar $100-200 USD em dinheiro + check-in 24h antes'], color: '#22c55e' },
    ],
    sec_aterrizaje_title: 'Protocolo de Chegada — Primeiras 72 Horas',
    aterrizaje_intro: 'As primeiras 72 horas são críticas para seu status migratório e sua relação com o anfitrião. Siga este protocolo exato.',
    aterrizaje_pasos: [
      ['Dia 1 — Primeiras 24h', 'Carimbar entrada / registro digital. Na Europa verificar registro EES. Na Ásia guardar comprovante do Arrival Card. Evitar multas por entrada não registrada.'],
      ['Dia 2 — Primeiras 48h', 'Check-in com o anfitrião. Se o país exigir, registrar endereço real de estadia. Confirmar funções, horário e dias livres exatos para evitar mal-entendidos desde o início.'],
      ['Dia 3 — Primeiras 72h', 'Ativar SIM local com dados para ter acesso a mapas e suporte de plataformas em caso de emergência. Confirmar regras de convivência: cozinha, horário noturno, visitas, lavanderia.'],
    ],
    aterrizaje_red: '⚠️ Se ultrapassar os 90 dias legais, NÃO tente sair se escondendo. Dirija-se à migração local para pagar a multa e solicitar saída voluntária. Evita deportação e veto de fronteira.',
    sec_crisis_title: 'Crise e Contingência — Protocolos de Emergência',
    crisis_scenarios: [
      { title: '🏚️ Cenário A: O voluntariado é uma fraude ou condições deploráveis', steps: ['Documentar com fotos, vídeos e capturas de chat.', 'Worldpackers: Ativar seguro — paga até 3 noites de hostel de emergência e te realoca. WWOOF: Reportar ao coordenador nacional.', 'Se sua integridade estiver em risco, vá imediatamente para um hostel. Nenhum voluntariado vale sua segurança.'], color: '#dc2626' },
      { title: '🏥 Cenário B: Acidente ou doença grave', steps: ['Informar ao anfitrião e companheiros para primeiros socorros.', 'Ligar para o número de emergência da sua apólice ANTES de entrar no hospital. Se não for possível, guardar todas as faturas.', 'Notificar a plataforma sobre seu estado para congelar a estadia ou tramitar revezamento.'], color: '#f59e0b' },
      { title: '🛃 Cenário C: Problemas migratórios ou perda de documentos', steps: ['Perda de passaporte: Ir à polícia local para registrar boletim de ocorrência (Police Report obrigatório).', 'Agendar consulta de emergência na embaixada do seu país para passaporte de emergência ou salvo-conduto.', 'Overstay (dias excedidos): Não tente sair sem reportar. Vá à migração, pague multa, peça saída voluntária.'], color: '#3b82f6' },
    ],
    paso_label: 'Passo',
    sec_matrix_title: 'Matriz de Comparação de Países',
    matrix_a_head: '🛫 Rota A: América Latina → Europa / Ásia',
    matrix_b_head: '🛬 Rota B: Europa / Ásia → América Latina',
    th_cat: 'Categoria', th_det: 'Detalhe',
    matrix_a: [
      ['Rota visto principal', 'ETIAS €20 (Premium/Médio) / Visto Schengen €90 (Restrição)'],
      ['Permissão de trabalho', '0h formais (atividade não remunerada com visto turista)'],
      ['Solvência exigida', '€40–€90/dia de estadia como garantia no controle de fronteira'],
      ['Custo seguro médico', '$40–$70 USD/mês (SafetyWing / Heymondo)'],
      ['Alojamento médio', '$0 USD (coberto pelo anfitrião)'],
      ['Funções mais comuns', 'Recepção, Housekeeping, Social Media, Bartender, Agricultura'],
      ['Salário em espécie', 'Equivalente a €800/mês na Europa · $500/mês na Ásia'],
      ['Tempo até primeiro sit', '1-2 semanas (confirmado no Worldpackers antes de voar)'],
      ['Rota a longo prazo', 'Voluntariado → Renda remota → Visto Nômade Digital'],
      ['Dificuldade', 'Média-Alta (conforme restrição do passaporte)'],
      ['Melhores cidades', 'Barcelona, Berlim, Bangkok, Tóquio'],
    ],
    matrix_b: [
      ['Entrada', '$0 (livre 90 dias para EU/Ásia Premium)'],
      ['Alojamento', '$0 (coberto por eco-lodge, ONG ou hostel)'],
      ['Funções comuns', 'Ensino de idiomas, Permacultura, Eco-construção, Relações com hóspedes'],
      ['Salário em espécie', 'Equivalente a $400 USD/mês na Latam'],
      ['Rota a longo prazo', 'Voluntariado → Rede ONGs → Patrocínio visto de emprego local'],
      ['Dificuldade', 'Baixa (passaportes EU/Premium asiáticos)'],
      ['Melhores cidades', 'Cidade do México, Medellín, Cusco, Florianópolis'],
    ],
    matrix_hack: 'A rota mais inteligente: Voluntariado (0 gastos fixos) + trabalho remoto nas horas livres + renda em USD/EUR = economia máxima. Com 3-6 meses de renda remota demonstrável, você solicita Visto Nômade Digital na Geórgia ou Espanha para residência legal.',
    consultoria_title: 'Consultoria 1 a 1',
    consultoria_desc: 'Montamos a estratégia de voluntariado + trabalho remoto conforme seu perfil.',
    consultoria_time: '60 minutos · Plano completo · Resposta em 24h',
    consultoria_btn: '📅 Agende sua chamada de orientação',
    hack_label: '💡 Hack da Lifestyle & Travel: ',
  },
  en: {
    hero_title: 'International Volunteering',
    hero_sub: 'Free accommodation + food in exchange for your time',
    stat1_label: 'Monthly cost', stat1_value: '~$0 (Accom + food)',
    stat2_label: 'Hours/week', stat2_value: '20 – 40 hours',
    stat3_label: 'Difficulty', stat3_value: 'Medium – High',
    card_title: 'What is International Volunteering?',
    card_intro: 'An exchange system designed to eliminate your two biggest expenses — accommodation and food — without a work visa or expensive studies. You enter as a tourist, cooperate in global projects in exchange for in-kind benefits, and use your free hours to invoice in dollars or euros online 100% remotely.',
    included_title: '✅ What volunteering includes:',
    included: ['Free accommodation (room or bed)', 'Food included (depending on program)', 'Real international experience', 'Free days for tourism and remote work', 'Global contact network'],
    intro_hack: 'At the immigration window, NEVER say you\'re coming to work in exchange for food. By law, that triggers illegal immigration alarms. You\'re a tourist in a cultural exchange program. Always carry a return ticket, health insurance and host details as "accommodation", never as "employer".',
    sec_eleg_title: 'Eligibility by Latin American Passport',
    eleg_intro: 'Your level of access depends on your passport\'s power. This determines which programs you can use, how many procedures you need and what funds you must show at the border.',
    elegibilidad: [
      { level: '🟢 PREMIUM', countries: 'Argentina, Chile, Uruguay, Costa Rica, Panama, Brazil', europe: '✅ Free (No Visa)', asia: '✅ Free / VoA', impact: 'LOW — They land without consular procedures. 90 days directly in Schengen and direct access to Thailand, Malaysia and Vietnam.', color: '#22c55e', bg: '#f0fdf4', border: '#86efac' },
      { level: '🟡 MEDIUM', countries: 'Colombia, Peru, Mexico', europe: '✅ Free (No Visa)', asia: '⚠️ Variable', impact: 'MEDIUM — Same entry benefit as Premium, but immigration requires contingency funds ($1,500 USD mandatory) and outbound ticket.', color: '#f59e0b', bg: '#fffbeb', border: '#fbbf24' },
      { level: '🔴 RESTRICTED', countries: 'Ecuador, Bolivia, Cuba, Dominican Rep., Honduras, El Salvador, Guatemala, Nicaragua', europe: '⛔ Schengen Visa required', asia: '⛔ Restricted', impact: 'HIGH — Must process prior consular visa. The hostel must send a Formal Invitation Letter. Recommended: UN Volunteers or AIESEC for institutional backing.', color: '#ef4444', bg: '#fef2f2', border: '#fca5a5' },
    ],
    sec_prog_title: 'Available Programs',
    prog_intro: 'Three main programs, each with a different profile. Worldpackers for hostels and urban projects. WWOOF for farms and rural life. UN Volunteers for humanitarian missions with full UN funding.',
    prog_fields: ['⏰ Hours', '🍽️ Benefit', '📍 Destinations', '🛠️ Roles'],
    prog_hack: 'The UN (UN Volunteers) is the best program for highly restricted passports — the UN letter exempts from consular solvency and speeds up visa approval. For Premium passports, Worldpackers is the fastest and most flexible entry.',
    sec_req_title: 'Requirements by Program',
    th_prog: 'Program', th_edad: 'Age', th_idioma: 'Language', th_antec: 'Background check', th_docs: 'Documents',
    sec_gastos_title: 'Mandatory Costs by Profile',
    th_perfil: 'Profile', th_visa: 'Europe Visa', th_seguro: 'Health insurance', th_extras: 'Extras', th_total: 'Estimated total',
    gastos_blue: '💡 ETIAS 2026: Latin Americans with Premium passports (no Schengen visa) must now process ETIAS online before flying to Europe. It costs €20, lasts 3 years and is approved in minutes. Without ETIAS you can\'t board the plane.',
    sec_roles_title: 'Roles & Volunteer Work Limits',
    roles_intro: 'The exchange is fair when limits are respected. More than 30 weekly hours already qualifies as employment and must be paid. Check these rules before confirming any volunteering.',
    reglas: [
      ['✅ Fair Exchange Rule', 'No informal volunteering should require more than 30 weekly hours. More than that = employment = must be paid.'],
      ['✅ Guaranteed Rest Days', 'Minimum 2 consecutive free days per week for tourism or rest.'],
      ['✅ No Direct Profit', 'The volunteer must not handle cash registers or direct sales in isolation.'],
    ],
    th_roles: 'Program', th_roles2: 'Most in-demand roles', th_horas: 'Hours/week', th_beneficios: 'Benefits',
    sec_remoto_title: 'Remote Work — Portals to Invoice Online',
    remoto_intro: 'In your free hours from volunteering you can invoice in dollars or euros 100% remotely. These are the best portals for freelance and independent work from any country.',
    sec_timeline_title: 'Execution Timeline — 3 Months Before the Flight',
    timeline_phases: [
      { phase: '📅 Month 3 (Weeks 12-9)', title: 'Filter & Application Phase', items: ['Week 12: Create and optimize profiles on Worldpackers, WWOOF or UN Volunteers', 'Week 11: Check passport validity — if less than 6 months remain, renew NOW', 'Week 10: Send first 5 personalized applications to hosts', 'Week 9: Video calls with interested hosts and confirm roles, hours and benefits'], color: '#3b82f6' },
      { phase: '📅 Month 2 (Weeks 8-5)', title: 'Legal & Logistics Phase', items: ['Week 8: Buy round-trip plane tickets (mandatory)', 'Week 7: Process ETIAS (€20 online) or consular visa if applicable', 'Week 6: Request apostilled criminal record if program requires it', 'Week 5: Check vaccination schedule for destination (Yellow Fever in tropics)'], color: '#f59e0b' },
      { phase: '📅 Month 1 (Weeks 4-1)', title: 'Closing & Protection Phase', items: ['Week 4: Get health insurance (SafetyWing or Heymondo)', 'Week 3: Notify bank about trip + set up Wise/Revolut', 'Week 2: Prepare luggage + leave digital copies in the cloud', 'Week 1: Confirm arrival with host + exchange $100-200 USD cash + check-in 24h before'], color: '#22c55e' },
    ],
    sec_aterrizaje_title: 'Landing Protocol — First 72 Hours',
    aterrizaje_intro: 'The first 72 hours are critical for your immigration status and your relationship with the host. Follow this exact protocol.',
    aterrizaje_pasos: [
      ['Day 1 — First 24h', 'Stamp entry / digital registration. In Europe verify EES registration. In Asia keep Arrival Card receipt. Avoid fines for unregistered entry.'],
      ['Day 2 — First 48h', 'Check-in with host. If the country requires it, register real address of stay. Confirm roles, schedule and exact free days to avoid misunderstandings from the start.'],
      ['Day 3 — First 72h', 'Activate local SIM with data for access to maps and platform support in case of emergency. Confirm house rules: kitchen, night hours, visitors, laundry.'],
    ],
    aterrizaje_red: '⚠️ If you exceed the legal 90 days, DO NOT try to leave hiding. Go to local immigration to pay the fine and request voluntary departure. You avoid deportation and border ban.',
    sec_crisis_title: 'Crisis & Contingency — Emergency Protocols',
    crisis_scenarios: [
      { title: '🏚️ Scenario A: The volunteering is a scam or deplorable conditions', steps: ['Document with photos, videos and chat screenshots.', 'Worldpackers: Activate insurance — pays up to 3 emergency hostel nights and relocates you. WWOOF: Report to national coordinator.', 'If your integrity is at risk, leave immediately to a hostel. No volunteering is worth your safety.'], color: '#dc2626' },
      { title: '🏥 Scenario B: Accident or serious illness', steps: ['Inform the host and companions for first aid.', 'Call your policy emergency number BEFORE entering the hospital. If not possible, save all invoices.', 'Notify the platform about your status to freeze the stay or arrange relief.'], color: '#f59e0b' },
      { title: '🛃 Scenario C: Immigration problems or loss of documents', steps: ['Passport loss: Go to local police to file a report (Police Report mandatory).', 'Schedule emergency appointment at your country\'s embassy for emergency passport or safe-conduct.', 'Overstay: Don\'t try to leave without reporting. Go to immigration, pay fine, request voluntary departure.'], color: '#3b82f6' },
    ],
    paso_label: 'Step',
    sec_matrix_title: 'Country Comparison Matrix',
    matrix_a_head: '🛫 Route A: Latin America → Europe / Asia',
    matrix_b_head: '🛬 Route B: Europe / Asia → Latin America',
    th_cat: 'Category', th_det: 'Detail',
    matrix_a: [
      ['Main visa route', 'ETIAS €20 (Premium/Medium) / Schengen Visa €90 (Restricted)'],
      ['Work permit', '0 formal hours (unpaid activity with tourist visa)'],
      ['Required funds', '€40–€90/day of stay as guarantee at border control'],
      ['Health insurance cost', '$40–$70 USD/month (SafetyWing / Heymondo)'],
      ['Average accommodation', '$0 USD (covered by host)'],
      ['Most common roles', 'Reception, Housekeeping, Social Media, Bartender, Agriculture'],
      ['In-kind salary', 'Equivalent to €800/month in Europe · $500/month in Asia'],
      ['Time to first sit', '1-2 weeks (confirmed via Worldpackers before flying)'],
      ['Long-term route', 'Volunteering → Remote income → Digital Nomad Visa'],
      ['Difficulty', 'Medium-High (depending on passport restriction)'],
      ['Best cities', 'Barcelona, Berlin, Bangkok, Tokyo'],
    ],
    matrix_b: [
      ['Entry', '$0 (free 90 days for EU/Asia Premium)'],
      ['Accommodation', '$0 (covered by eco-lodge, NGO or hostel)'],
      ['Common roles', 'Language teaching, Permaculture, Eco-construction, Guest relations'],
      ['In-kind salary', 'Equivalent to $400 USD/month in Latam'],
      ['Long-term route', 'Volunteering → NGO network → Local employment visa sponsorship'],
      ['Difficulty', 'Low (EU/Premium Asian passports)'],
      ['Best cities', 'Mexico City, Medellín, Cusco, Florianópolis'],
    ],
    matrix_hack: 'The smartest route: Volunteering (0 fixed costs) + remote work in free hours + income in USD/EUR = maximum savings. With 3-6 months of provable remote income, you apply for a Digital Nomad Visa in Georgia or Spain for legal residency.',
    consultoria_title: '1 on 1 Consultation',
    consultoria_desc: 'We build your volunteering + remote work strategy based on your profile.',
    consultoria_time: '60 minutes · Complete plan · Response within 24h',
    consultoria_btn: '📅 Schedule your orientation call',
    hack_label: '💡 Lifestyle & Travel Hack: ',
  },
}

export default function Voluntariado() {
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

  const programs = [
    { name: 'Worldpackers', emoji: '🌐', cost: '$49 USD/año', hours: '20-24 h/semana', benefit: 'Cama + cocina + desayuno + lavandería', destinations: 'España, Portugal, Francia, Italia, Tailandia, Vietnam', roles: 'Recepción, Social Media, Bartender, Limpieza', link: 'https://www.worldpackers.com', color: '#e8572a' },
    { name: 'WWOOF', emoji: '🌾', cost: '€15-35/año', hours: '25-30 h/semana', benefit: 'Alojamiento + 3 comidas completas/día', destinations: 'Francia, Alemania, Irlanda, Japón, Corea del Sur', roles: 'Siembra, Cosecha, Animales, Permacultura, Quesos/Vino', link: 'https://wwoof.net', color: '#22c55e' },
    { name: 'UN Volunteers (ONU)', emoji: '🇺🇳', cost: '$0 (Paga la ONU)', hours: '35-40 h/semana', benefit: 'Subsidio $1,200-$2,400/mes + seguro + vuelos', destinations: 'Camboya, Laos, Nepal, Europa del Este, Latam', roles: 'Logística, DDHH, Soporte Técnico, Monitoreo', link: 'https://www.unv.org', color: '#3b82f6' },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f7f4', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ position: 'relative', height: '55vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20)), url("https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1171&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>←</Link>
          <LanguageSwitcher />
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>✈️ Lifestyle & Travel</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px 32px' }}>
          <div style={{ fontSize: '52px', marginBottom: '8px' }}>🌱</div>
          <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{t.hero_title}</h1>
          <p style={{ color: '#eee', fontSize: '15px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{t.hero_sub}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #f8f7f4)', pointerEvents: 'none' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '16px 20px' }}>
        {[[t.stat1_label, t.stat1_value, '💰'], [t.stat2_label, t.stat2_value, '⏰'], [t.stat3_label, t.stat3_value, '📊']].map((s, i) => (
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
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542323228-002ac256e7b8?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '12px', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#1a1a2e' }}>{t.card_title}</h2>
          <Intro text={t.card_intro} />
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '14px', marginBottom: '12px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px', color: '#166534' }}>{t.included_title}</p>
            {t.included.map((item, i) => (
              <p key={i} style={{ fontSize: '13px', color: '#1a1a2e', margin: '3px 0', display: 'flex', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {item}
              </p>
            ))}
          </div>
          <HackBox text={t.intro_hack} />
        </div>

        {/* ELEGIBILIDAD */}
        <Section id="elegibilidad" emoji="🛂" title={t.sec_eleg_title}>
          <Intro text={t.eleg_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {t.elegibilidad.map((item, i) => (
              <div key={i} style={{ backgroundColor: item.bg, borderRadius: '10px', padding: '14px', border: `1px solid ${item.border}` }}>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 4px', color: item.color }}>{item.level}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', margin: '0 0 4px', color: '#1a1a2e' }}>{item.countries}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: '0 0 6px', lineHeight: '1.5' }}>Europa: {item.europe} · Asia: {item.asia}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0, lineHeight: '1.5' }}>{item.impact}</p>
              </div>
            ))}
          </div>
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


        {/* PROGRAMAS */}
        <Section id="programas" emoji="🚀" title={t.sec_prog_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616680213875-8c6cbae0b933?q=80&w=687&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <Intro text={t.prog_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {programs.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '16px', borderLeft: `4px solid ${p.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <p style={{ fontWeight: '700', fontSize: '15px', margin: 0, color: '#1a1a2e' }}>{p.emoji} {p.name}</p>
                  <span style={{ backgroundColor: p.color, color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '12px', fontWeight: '700' }}>{p.cost}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                  {[t.prog_fields[0], t.prog_fields[1], t.prog_fields[2], t.prog_fields[3]].map((label, j) => (
                    <div key={j}>
                      <p style={{ fontSize: '11px', color: '#333333', margin: '0 0 1px', fontWeight: '600' }}>{label}</p>
                      <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{[p.hours, p.benefit, p.destinations, p.roles][j]}</p>
                    </div>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: p.color, textDecoration: 'underline', fontSize: '13px', fontWeight: '700' }}>Aplicar en {p.name} →</a>
              </div>
            ))}
          </div>
          <HackBox text={t.prog_hack} />
        </Section>

        {/* REQUISITOS */}
        <Section id="requisitos" emoji="📋" title={t.sec_req_title}>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_prog, t.th_edad, t.th_idioma, t.th_antec, t.th_docs].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🌐 Worldpackers', '18 – 99 años', 'Inglés básico informal', 'Solo si trabaja con niños/ONGs', 'Pasaporte +6 meses + seguro de viaje'],
                  ['🌾 WWOOF', '18 años mínimo', 'Idioma local básico o inglés', 'No requerido (90% granjas)', 'Pasaporte + registro asociación local'],
                  ['🇺🇳 UN Volunteers (Youth)', '18 – 26 años', 'Inglés/Francés/Español avanzado', '✅ Obligatorio (policía nacional)', 'Pasaporte + título universitario + CV'],
                  ['🇺🇳 UN Volunteers (Especialista)', '27 – 80 años', 'Inglés/Francés/Español avanzado', '✅ Obligatorio', 'Pasaporte + experiencia profesional + CV'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={T.td(i)}>{r[2]}</td>
                    <td style={{ ...T.td(i), color: i >= 2 ? '#dc2626' : '#166534', fontWeight: '600' }}>{r[3]}</td>
                    <td style={T.td(i)}>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* GASTOS */}
        <Section id="gastos" emoji="💰" title={t.sec_gastos_title}>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_perfil, t.th_visa, t.th_seguro, t.th_extras, t.th_total].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🟢 LATAM Premium/Medio → Europa', '€20 (ETIAS)', '$40-70 USD/mes', '$20-50 USD', '~€300-500/mes'],
                  ['🔴 LATAM Restricción → Europa', '€90 (Schengen)', '$40-70 USD/mes', '$30-50 USD (apostillas)', '~€400-700/mes'],
                  ['🇺🇳 UN Volunteers (cualquier pasaporte)', '$0 (ONU paga todo)', '$0 (seguro ONU)', '$20-50 USD (apostillas)', 'Subsidio $1,200-$2,400/mes'],
                  ['🇪🇺 Europeos → Latam/Asia', '$0 (libre 90 días)', '$40-70 USD/mes', '$20-30 USD', '~€200-400/mes'],
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
          <BlueBox text={t.gastos_blue} />
        </Section>

        {/* ROLES */}
        <Section id="roles" emoji="🛠️" title={t.sec_roles_title}>
          <Intro text={t.roles_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {t.reglas.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f0fdf4', borderRadius: '10px', padding: '12px 14px', borderLeft: '3px solid #22c55e' }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: '#166534', margin: '0 0 3px' }}>{item[0]}</p>
                <p style={{ fontSize: '12px', color: '#1a1a2e', margin: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_roles, t.th_roles2, t.th_horas, t.th_beneficios].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['🌐 Worldpackers', 'Recepción, Social Media, Bar, Limpieza', '20 – 24h (5 días/sem)', 'Cama + cocina + desayuno + lavandería'],
                  ['🌾 WWOOF', 'Siembra, Animales, Permacultura, Quesos', '25 – 30h (4-6h/día)', 'Alojamiento + 3 comidas/día'],
                  ['🇺🇳 UN Volunteers', 'Logística, DDHH, IT, Monitoreo', '35 – 40h (full-time)', 'Subsidio + seguro + vuelos ida/vuelta'],
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                    <td style={{ ...T.td(i), color: '#0369a1', fontWeight: '600' }}>{r[2]}</td>
                    <td style={T.td(i)}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* TRABAJO REMOTO */}
        <Section id="remoto" emoji="💻" title={t.sec_remoto_title}>
          <Intro text={t.remoto_intro} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Upwork', 'Freelance global', 'Traducción, diseño, programación, asistencia virtual. Pagos en USD.', 'upwork.com', 'https://www.upwork.com'],
              ['Fiverr', 'Servicios digitales', 'Vender servicios por proyectos cortos. Perfecta para ganar dinero rápido en el camino.', 'fiverr.com', 'https://www.fiverr.com'],
              ['We Work Remotely', 'Empleo remoto', 'La mayor comunidad de empleo remoto del mundo. Puestos estables a tiempo parcial o completo.', 'weworkremotely.com', 'https://weworkremotely.com'],
              ['LinkedIn Global', 'Red profesional', 'Configurar ubicación en el país de destino para trabajo corporativo en Europa o Asia.', 'linkedin.com', 'https://www.linkedin.com'],
              ['Indeed (por país)', 'Empleo local', 'Filtrar por país destino. Hostelería, turismo, idiomas.', 'indeed.com', 'https://www.indeed.com'],
              ['Hostel Jobs', 'Sector hostelería', 'Empleos pagados en hostales y turismo. El salto natural después de ser voluntario.', 'hosteljobs.net', 'https://www.hosteljobs.net'],
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
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" emoji="📅" title={t.sec_timeline_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '180px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {t.timeline_phases.map((phase, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '14px', borderLeft: `4px solid ${phase.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '13px', color: phase.color, margin: '0 0 2px' }}>{phase.phase}</p>
                <p style={{ fontWeight: '700', fontSize: '14px', margin: '0 0 8px', color: '#1a1a2e' }}>{phase.title}</p>
                {phase.items.map((item, j) => (
                  <p key={j} style={{ fontSize: '12px', color: '#1a1a2e', margin: '3px 0', display: 'flex', gap: '6px' }}>
                    <span style={{ color: phase.color, flexShrink: 0 }}>•</span> {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* ATERRIZAJE */}
        <Section id="aterrizaje" emoji="🛬" title={t.sec_aterrizaje_title}>
          <Intro text={t.aterrizaje_intro} />
          {t.aterrizaje_pasos.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
              <div>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 3px', color: '#e8572a' }}>{item[0]}</p>
                <p style={{ fontSize: '13px', color: '#1a1a2e', margin: 0, lineHeight: '1.5' }}>{item[1]}</p>
              </div>
            </div>
          ))}
          <RedBox text={t.aterrizaje_red} />
        </Section>

        {/* CRISIS */}
        <Section id="crisis" emoji="🛡️" title={t.sec_crisis_title}>
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617835963886-d504ab3cca44?q=80&w=1170&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '160px', borderRadius: '10px', marginBottom: '14px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {t.crisis_scenarios.map((scenario, i) => (
              <div key={i} style={{ backgroundColor: '#f8f7f4', borderRadius: '12px', padding: '14px', borderLeft: `4px solid ${scenario.color}` }}>
                <p style={{ fontWeight: '700', fontSize: '13px', margin: '0 0 8px', color: scenario.color }}>{scenario.title}</p>
                {scenario.steps.map((step, j) => (
                  <p key={j} style={{ fontSize: '12px', color: '#1a1a2e', margin: '4px 0', display: 'flex', gap: '6px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: '700', flexShrink: 0 }}>{t.paso_label} {j + 1}:</span> {step}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* MATRIX */}
        <Section id="matrix" emoji="🌍" title={t.sec_matrix_title}>
          <SubHead text={t.matrix_a_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_cat, t.th_det].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.matrix_a.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHead text={t.matrix_b_head} />
          <div style={T.wrap}>
            <table style={T.table}>
              <thead><tr>{[t.th_cat, t.th_det].map((h, i) => <th key={i} style={T.th}>{h}</th>)}</tr></thead>
              <tbody>
                {t.matrix_b.map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...T.td(i), ...T.bold }}>{r[0]}</td>
                    <td style={T.td(i)}>{r[1]}</td>
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
          <a href="https://calendly.com/jimmyg-leonr/1-hour-meeting" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#e8572a', color: 'white', borderRadius: '12px', padding: '14px 32px', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
            {t.consultoria_btn}
          </a>
        </div>

      </div>
    </main>
  )
}