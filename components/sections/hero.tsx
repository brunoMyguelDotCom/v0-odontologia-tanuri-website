import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border-[#D4AF37]/30">
              +20 Anos de Experiência
            </Badge>
            
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance leading-tight">
              Transforme seu sorriso com quem está há mais de{" "}
              <span className="text-[#D4AF37]">20 anos</span> cuidando de vidas em Maringá
            </h1>
            
            <p className="mt-6 text-lg text-[#666666] leading-relaxed">
              Na Odontologia Tanuri, combinamos tecnologia de ponta com atendimento humanizado para garantir que você tenha o sorriso dos seus sonhos. Sua saúde bucal em mãos experientes.
            </p>
            
            <ul className="mt-6 space-y-3">
              {[
                "Atendimento humanizado e personalizado",
                "Tecnologia moderna e equipamentos de última geração",
                "Profissionais especializados e em constante atualização",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#666666]">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03] shadow-lg"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma avaliação gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Avaliação Gratuita
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#0B1C2C] text-[#0B1C2C] hover:bg-[#0B1C2C] hover:text-white transition-all"
              >
                <a href="#tratamentos">
                  Conheça Nossos Tratamentos
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl transform rotate-3"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img51-1536x1536-fW2NhdEutGilz6xkSuc38Y9H5yII3E.png"
                alt="Dr. Rafael R. Tanuri - Especialista em Implantes e Ortodontia"
                width={600}
                height={600}
                className="relative rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#0B1C2C]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
