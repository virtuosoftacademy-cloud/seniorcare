'use client'

import Script from 'next/script'
import { useEffect, useId, useRef, useState } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto'
          size?: 'normal' | 'compact' | 'flexible'
          appearance?: 'always' | 'execute' | 'interaction-only'
        }
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

type Props = {
  /** Hidden input name. The server reads this to verify. */
  name?: string
  /** Force re-render of the widget (e.g. after form submit success/error). */
  resetKey?: string | number
  theme?: 'light' | 'dark' | 'auto'
}

/**
 * Cloudflare Turnstile widget. Renders an invisible/managed challenge and
 * writes the resulting token into a hidden input named `cf-turnstile-response`
 * (Turnstile's default), which the server action picks up from FormData.
 */
export default function Turnstile({
  name = 'cf-turnstile-response',
  resetKey,
  theme = 'auto',
}: Props) {
  const containerId = useId().replace(/:/g, '_')
  const widgetIdRef = useRef<string | null>(null)
  const [token, setToken] = useState('')
  const [scriptReady, setScriptReady] = useState(
    typeof window !== 'undefined' && !!window.turnstile
  )

  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!scriptReady || !sitekey || !window.turnstile) return

    // (Re)render whenever resetKey changes
    const el = document.getElementById(containerId)
    if (!el) return

    // Clean up any previous instance
    if (widgetIdRef.current && window.turnstile.remove) {
      try {
        window.turnstile.remove(widgetIdRef.current)
      } catch {
        /* noop */
      }
    }

    widgetIdRef.current = window.turnstile.render(el, {
      sitekey,
      theme,
      callback: (t: string) => setToken(t),
      'expired-callback': () => setToken(''),
      'error-callback': () => setToken(''),
    })

    return () => {
      if (widgetIdRef.current && window.turnstile?.remove) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          /* noop */
        }
      }
    }
  }, [scriptReady, sitekey, containerId, resetKey, theme])

  if (!sitekey) {
    // Development fallback: render nothing rather than crash, but warn loudly.
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[Turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set. Captcha will be skipped in dev.'
      )
    }
    return null
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div id={containerId} />
      {/* Mirror token into a hidden input so it travels with the form */}
      <input type="hidden" name={name} value={token} readOnly />
    </>
  )
}