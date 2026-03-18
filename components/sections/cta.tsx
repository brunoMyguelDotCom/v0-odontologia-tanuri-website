import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1C2C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimation>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl text-balance">
              Está cansado de{" "}
              <span className="text-[#D4AF37]">esconder o sorriso</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
              Chegou a hora de transformar sua vida. Agende uma avaliação gratuita e descubra como podemos ajudá-lo a conquistar o sorriso dos seus sonhos.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03] shadow-lg text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar minha avaliação gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Avaliação Gratuita
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Atendimento de segunda a sexta, das 8h às 18h
            </p>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
    </section>
  )
}
