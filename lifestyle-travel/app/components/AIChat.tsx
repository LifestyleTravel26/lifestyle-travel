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
    welcome: '¡Hola! 🌍 ¿Listo para tu aventura en el extranjero? Soy tu asistente de migración AI. Puedo ayudarte con visas, costos, requisitos y todo lo que necesitas para emigrar y trabajar legalmente abroad. ¿Por dónde empezamos?',
    error: 'Error al procesar tu mensaje. Intenta de nuevo.',
  },
  pt: {
    title: '🤖 Assistente de Migração AI',
    subtitle: 'Pergunte-me sobre vistos, custos, requisitos e mais',
    placeholder: 'Ex: Quanto dinheiro preciso para ir à Irlanda?',
    send: 'Enviar',
    thinking: 'Pensando...',
    welcome: 'Olá! 🌍 Pronto para sua aventura no exterior? Sou seu assistente de migração AI. Posso ajudá-lo com vistos, custos, requisitos e tudo que você precisa para emigrar e trabalhar legalmente no exterior. Por onde começamos?',
    error: 'Erro ao processar sua mensagem. Tente novamente.',
  },
  en: {
    title: '🤖 AI Migration Assistant',
    subtitle: 'Ask me about visas, costs, requirements and more',
    placeholder: 'E.g: How much money do I need to go to Ireland?',
    send: 'Send',
    thinking: 'Thinking...',
    welcome: 'Hi! 🌍 Ready for your adventure abroad? I\'m your AI migration assistant. I can help you with visas, costs, requirements and everything you need to emigrate and work legally abroad. Where do we start?',
    error: 'Error processing your message. Please try again.',
  },
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const BUTTON_SIZE = 56
const CHAT_WIDTH = 340
const CHAT_HEIGHT = 480
const GAP = 12
const INITIAL_BOTTOM = 80
const INITIAL_RIGHT = 20
const DRAG_THRESHOLD = 5

function getInitialPosition() {
  return {
    x: window.innerWidth - INITIAL_RIGHT - BUTTON_SIZE,
    y: window.innerHeight - INITIAL_BOTTOM - BUTTON_SIZE,
  }
}

function clampButtonPosition(pos: { x: number; y: number }) {
  return {
    x: Math.max(0, Math.min(window.innerWidth - BUTTON_SIZE, pos.x)),
    y: Math.max(0, Math.min(window.innerHeight - BUTTON_SIZE, pos.y)),
  }
}

function getChatPosition(buttonPos: { x: number; y: number }) {
  let chatX = buttonPos.x + BUTTON_SIZE - CHAT_WIDTH
  let chatY = buttonPos.y - CHAT_HEIGHT - GAP

  if (chatY < 8) {
    chatY = buttonPos.y + BUTTON_SIZE + GAP
  }

  chatX = Math.max(8, Math.min(window.innerWidth - CHAT_WIDTH - 8, chatX))
  chatY = Math.max(8, Math.min(window.innerHeight - CHAT_HEIGHT - 8, chatY))

  return { x: chatX, y: chatY }
}

export default function AIChat() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, posX: 0, posY: 0 })
  const movedRef = useRef(0)
  const { locale } = useLanguage()
  const { hasAccess } = usePurchase()
  const t = translations[locale]

  useEffect(() => {
    setMounted(true)
    setPosition(getInitialPosition())

    const onResize = () => {
      setPosition(prev => (prev ? clampButtonPosition(prev) : getInitialPosition()))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    function handlePointerMove(e: MouseEvent | TouchEvent) {
      if (!isDraggingRef.current) return
      if ('touches' in e) e.preventDefault()

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      const dx = clientX - dragStartRef.current.pointerX
      const dy = clientY - dragStartRef.current.pointerY
      movedRef.current = Math.hypot(dx, dy)

      setPosition(clampButtonPosition({
        x: dragStartRef.current.posX + dx,
        y: dragStartRef.current.posY + dy,
      }))
    }

    function handlePointerUp() {
      if (!isDraggingRef.current) return
      if (movedRef.current < DRAG_THRESHOLD) {
        setIsOpen(prev => !prev)
      }
      isDraggingRef.current = false
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handlePointerMove)
    document.addEventListener('mouseup', handlePointerUp)
    document.addEventListener('touchmove', handlePointerMove, { passive: false })
    document.addEventListener('touchend', handlePointerUp)

    return () => {
      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
      document.removeEventListener('touchmove', handlePointerMove)
      document.removeEventListener('touchend', handlePointerUp)
    }
  }, [])

  function handlePointerDown(e: React.MouseEvent | React.TouchEvent) {
    if (!position) return
    e.preventDefault()

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    isDraggingRef.current = true
    setIsDragging(true)
    movedRef.current = 0
    dragStartRef.current = {
      pointerX: clientX,
      pointerY: clientY,
      posX: position.x,
      posY: position.y,
    }
  }

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
  if (!position) return null

  const chatPosition = getChatPosition(position)

  return createPortal(
    <>
      <button
        type="button"
        aria-label={isOpen ? 'Close chat' : 'Open AI chat'}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${BUTTON_SIZE}px`,
          height: `${BUTTON_SIZE}px`,
          borderRadius: '50%',
          backgroundColor: '#e8572a',
          color: 'white',
          border: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          fontSize: '24px',
          boxShadow: '0 4px 16px rgba(232,87,42,0.4)',
          zIndex: 10001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          touchAction: 'none',
          userSelect: 'none',
        }}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          left: `${chatPosition.x}px`,
          top: `${chatPosition.y}px`,
          width: `${CHAT_WIDTH}px`,
          maxWidth: 'calc(100vw - 40px)',
          height: `${CHAT_HEIGHT}px`,
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