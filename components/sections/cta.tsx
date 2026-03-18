import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1C2C] via-[#0F2438] to-[#061220] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="scale">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white lg:text-4xl xl:text-5xl text-balance">
              Esta cansado de{" "}
              <span className="text-[#D4AF37]">esconder o sorriso</span>?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              Chegou a hora de transformar sua vida. Agende uma avaliacao gratuita e descubra como podemos ajuda-lo a conquistar o sorriso dos seus sonhos.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
              Atendimento de segunda a sexta, das 8h as 18h
            </p>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Decorative gradient elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
