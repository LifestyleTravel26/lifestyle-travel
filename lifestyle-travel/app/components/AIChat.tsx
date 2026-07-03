'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/LanguageContext'
import { usePurchase } from '@/app/hooks/usePurchase'

const translations = {
  es: {
    title: '🤖 Asistente de Migración AI',
    subtitle: 'Pregúntame sobre visas, costos, requisitos y más',
    placeholder: 'Ej: ¿Cuánto dinero necesito para ir a Irlanda?',
    send: 'Enviar',
    thinking: 'Pensando...',
    welcome: '¡Hola! Soy tu asistente de migración AI. Puedo ayudarte con preguntas sobre visas, costos, requisitos y todo lo relacionado con emigrar y trabajar en el extranjero. ¿En qué te puedo ayudar?',
    error: 'Error al procesar tu mensaje. Intenta de nuevo.',
  },
  pt: {
    title: '🤖 Assistente de Migração AI',
    subtitle: 'Pergunte-me sobre vistos, custos, requisitos e mais',
    placeholder: 'Ex: Quanto dinheiro preciso para ir à Irlanda?',
    send: 'Enviar',
    thinking: 'Pensando...',
    welcome: 'Olá! Sou seu assistente de migração AI. Posso ajudá-lo com perguntas sobre vistos, custos, requisitos e tudo relacionado a emigrar e trabalhar no exterior. Como posso ajudá-lo?',
    error: 'Erro ao processar sua mensagem. Tente novamente.',
  },
  en: {
    title: '🤖 AI Migration Assistant',
    subtitle: 'Ask me about visas, costs, requirements and more',
    placeholder: 'E.g: How much money do I need to go to Ireland?',
    send: 'Send',
    thinking: 'Thinking...',
    welcome: 'Hi! I am your AI migration assistant. I can help you with questions about visas, costs, requirements and everything related to emigrating and working abroad. How can I help you?',
    error: 'Error processing your message. Please try again.',
  },
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function AIChat() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { locale } = useLanguage()
  const { hasAccess } = usePurchase()
  const t = translations[locale]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 0) {
        return [{ role: 'assistant', content: t.welcome }]
      }
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [{ role: 'assistant', content: t.welcome }]
      }
      return prev
    })
  }, [locale, t.welcome])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMessage: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const firstUserIndex = newMessages.findIndex(m => m.role === 'user')
    const apiMessages = firstUserIndex >= 0 ? newMessages.slice(firstUserIndex) : []

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })
      const data = await response.json()
      if (response.ok && data.message) {
        setMessages([...newMessages, { role: 'assistant', content: data.message }])
      } else {
        setMessages([...newMessages, { role: 'assistant', content: t.error }])
      }
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: t.error }])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null
  if (!hasAccess) return null

  return createPortal(
    <>
      <button
        type="button"
        aria-label={isOpen ? 'Close chat' : 'Open AI chat'}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#e8572a',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '0 4px 16px rgba(232,87,42,0.4)',
          zIndex: 10001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '148px',
          right: '20px',
          width: '340px',
          maxWidth: 'calc(100vw - 40px)',
          height: '480px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          <div style={{ backgroundColor: '#1a1a2e', padding: '14px 16px' }}>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 0 2px' }}>{t.title}</p>
            <p style={{ color: '#aaa', fontSize: '11px', margin: 0 }}>{t.subtitle}</p>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  backgroundColor: msg.role === 'user' ? '#e8572a' : '#f8f7f4',
                  color: msg.role === 'user' ? 'white' : '#1a1a2e',
                  borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                  padding: '10px 12px',
                  fontSize: '13px',
                  lineHeight: '1.5',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ backgroundColor: '#f8f7f4', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', fontSize: '13px', color: '#555' }}>
                  {t.thinking}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: '12px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder={t.placeholder}
              style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', outline: 'none', color: '#1a1a2e' }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                backgroundColor: '#e8572a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 'bold',
                cursor: 'pointer',
                opacity: loading || !input.trim() ? 0.6 : 1,
              }}
            >
              {t.send}
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}