'use client'

import { useEffect } from 'react'

type LemonSqueezyGlobal = {
  Url?: { Open?: (url: string) => void }
}

type LemonWindow = Window & {
  createLemonSqueezy?: () => void
  LemonSqueezy?: LemonSqueezyGlobal
}

// Los botones de pago (a.lemonsqueezy-button) los dibuja React después de que
// lemon.js ya escaneó la página, así que el script nunca los engancha y el
// enlace abre el checkout a pantalla completa (donde la X no vuelve a la web).
// Aquí inicializamos lemon.js y abrimos el checkout como ventana superpuesta.
export default function LemonSqueezyInit() {
  useEffect(() => {
    const w = window as LemonWindow

    const init = () => {
      if (typeof w.createLemonSqueezy === 'function') {
        try {
          w.createLemonSqueezy()
        } catch {}
        return true
      }
      return false
    }

    // lemon.js se carga con defer: esperamos a que exista
    let tries = 0
    const timer = window.setInterval(() => {
      tries += 1
      if (init() || tries > 40) window.clearInterval(timer)
    }, 250)

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const link = target?.closest?.('a.lemonsqueezy-button') as HTMLAnchorElement | null
      if (!link || !link.href) return
      // Respetar clic con tecla (abrir en pestaña nueva, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return

      if (!w.LemonSqueezy?.Url?.Open) init()
      const open = w.LemonSqueezy?.Url?.Open
      if (open) {
        e.preventDefault()
        open(link.href)
      }
      // Si lemon.js no cargó, se deja el comportamiento normal del enlace.
    }

    document.addEventListener('click', onClick, true)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('click', onClick, true)
    }
  }, [])

  return null
}
