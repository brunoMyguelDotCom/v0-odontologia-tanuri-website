"use client"

import { MessageCircle } from "lucide-react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function WhatsAppButton() {
  const handleClick = () => {
    // Track WhatsApp click for Google Ads conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXXXXXXX',
        'event_callback': () => {}
      })
    }
  }

  return (
    <a
      href="https://wa.me/5544999999999?text=Ola! Gostaria de agendar uma avaliacao na Odontologia Tanuri."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse hover:animate-none"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  )
}
