import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFEF7] via-[#FFFDF2] to-[#FFFBEA] py-12 sm:py-16 lg:py-20 border-y border-[#D4AF37]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="scale">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] lg:text-4xl text-balance font-sans">
              Esta cansado de{" "}
              <span className="text-[#D4AF37]">esconder o sorriso</span>?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#666666] leading-relaxed">
              Chegou a hora de transformar sua vida. Agende uma avaliacao gratuita e descubra como podemos ajuda-lo a conquistar o sorriso dos seus sonhos.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <a
                  href="https://wa.me/5544999999999?text=Ola! Gostaria de agendar minha avaliacao gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Avaliacao Gratuita
                </a>
              </Button>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#666666]/70">
              Atendimento de segunda a sexta, das 8h as 18h
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
