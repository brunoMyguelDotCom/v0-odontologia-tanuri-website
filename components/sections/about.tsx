import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Award, Heart, Sparkles, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "+20", label: "Anos de Experiencia" },
  { icon: Users, value: "+5.000", label: "Pacientes Atendidos" },
  { icon: Sparkles, value: "+10.000", label: "Sorrisos Transformados" },
  { icon: Heart, value: "100%", label: "Dedicacao" },
]

export function AboutSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 rounded-2xl sm:rounded-3xl transform -rotate-3"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg"
                alt="Consultorio moderno da Odontologia Tanuri"
                width={600}
                height={400}
                className="relative rounded-xl sm:rounded-2xl object-cover w-full"
              />
            </div>
          </ScrollAnimation>
          
          {/* Content */}
          <ScrollAnimation delay={100} direction="right">
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Sobre a Clinica
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl text-balance">
                Excelencia em Odontologia com Atendimento Humanizado
              </h2>
              <p className="mt-4 sm:mt-6 text-[#666666] leading-relaxed text-sm sm:text-base">
                A Odontologia Tanuri nasceu do sonho de oferecer um atendimento odontologico diferenciado em Maringa. Ha mais de duas decadas, nos dedicamos a transformar sorrisos e proporcionar saude bucal com excelencia.
              </p>
              <p className="mt-3 sm:mt-4 text-[#666666] leading-relaxed text-sm sm:text-base">
                Nossa clinica conta com infraestrutura moderna, equipamentos de ultima geracao e uma equipe de profissionais altamente qualificados.
              </p>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={index} delay={200 + index * 100} direction="scale">
                    <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0B1C2C] to-[#1A3A5C]">
                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                      </div>
                      <div className="text-left">
                        <p className="text-xl sm:text-2xl font-bold text-[#0B1C2C]">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-[#666666]">{stat.label}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
