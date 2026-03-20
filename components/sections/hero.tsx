import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Badge className="mb-4 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border-[#D4AF37]/30">
              +20 Anos de Experiencia
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl text-balance leading-tight">
              Transforme seu sorriso com quem esta ha mais de{" "}
              <span className="text-[#D4AF37]">20 anos</span> cuidando de vidas em Maringa
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#666666] leading-relaxed">
              Na Odontologia Tanuri, combinamos tecnologia de ponta com atendimento humanizado para garantir que voce tenha o sorriso dos seus sonhos.
            </p>
            
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left mx-auto lg:mx-0 max-w-md lg:max-w-none">
              {[
                "Atendimento humanizado e personalizado",
                "Tecnologia moderna e equipamentos de ultima geracao",
                "Profissionais especializados e em constante atualizacao",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#666666] text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <a
                  href="https://wa.me/5544999999999?text=Ola! Gostaria de agendar uma avaliacao gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Avaliacao Gratuita
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#0B1C2C] text-[#0B1C2C] hover:bg-[#0B1C2C] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                <a href="#tratamentos">
                  Conheca Nossos Tratamentos
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
              <Image
                src="images\hero-doutor.png"
                alt="Dr. Rafael R. Tanuri - Especialista em Implantes e Ortodontia"
                width={600}
                height={600}
                className="relative rounded-xl sm:rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-[#0B1C2C]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
