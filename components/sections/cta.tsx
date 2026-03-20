"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

const WHATSAPP = "554497095982"
const INSTAGRAM = "https://www.instagram.com/dr.rafaeltanuri/"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFEF7] via-[#FFFDF2] to-[#FFFBEA] py-12 sm:py-16 lg:py-20 border-y border-[#D4AF37]/10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="scale">
          <div className="relative z-10 text-center">
            
            {/* HEADLINE */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
              Cansado de <span className="text-[#D4AF37]">esconder o sorriso</span>?
            </h2>

            {/* SUB */}
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#666666] leading-relaxed">
              Descubra o que está impedindo você de sorrir com confiança.
              Agende sua avaliação e conheça o plano ideal para o seu caso.
            </p>

            {/* BOTÕES */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* WHATSAPP */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Olá! Vim pelo site e gostaria de agendar uma avaliação.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>

              {/* INSTAGRAM */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1C2C] font-semibold transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Ver resultados no Instagram
                </a>
              </Button>

            </div>

            {/* PROVA SOCIAL */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#666666]/70">
              Mais de 20 anos transformando sorrisos em Maringá
            </p>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}