"use client"

import { MessageCircle } from "lucide-react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const WHATSAPP_NUMBER = "554497095982"

export function WhatsAppButton() {
  const handleClick = () => {
    // Track WhatsApp click for Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXX", // ⚠️ COLOQUE SEU ID REAL
        value: 1.0,
        currency: "BRL",
      })

      // Evento adicional (analytics mais detalhado)
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "botao_flutuante",
      })
    }
  }

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e gostaria de agendar uma avaliação.`}
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