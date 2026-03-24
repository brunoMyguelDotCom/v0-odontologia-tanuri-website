import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Award, Heart, Sparkles, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "+26", label: "Anos no Mesmo Endereço" },
  { icon: Users, value: "+30.000", label: "Pacientes Atendidos" },
  { icon: Sparkles, value: "", label: "Atendimento Humanizado" },
  { icon: Heart, value: "100%", label: "Dedicação" },
]

export function AboutSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          
          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 rounded-2xl sm:rounded-3xl transform -rotate-3"></div>
              <Image
                src="/images/equipamento.jpg"
                alt="Consultório moderno da Odontologia Tanuri"
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
                Sobre a Clínica
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl text-balance">
                Excelência em Odontologia com Atendimento Humanizado e Alta Performance
              </h2>

              <p className="mt-4 sm:mt-6 text-[#666666] leading-relaxed text-sm sm:text-base">
                Há mais de 26 anos no mesmo endereço em Maringá, a Odontologia Tanuri construiu uma trajetória sólida baseada em confiança, constância e resultados reais.
              </p>

              <p className="mt-3 sm:mt-4 text-[#666666] leading-relaxed text-sm sm:text-base">
                Já são mais de 30 mil pacientes atendidos ao longo dessa jornada, refletindo nosso compromisso com a excelência clínica e a satisfação de cada pessoa que passa por aqui.
              </p>

              <p className="mt-3 sm:mt-4 text-[#666666] leading-relaxed text-sm sm:text-base">
                Nosso diferencial está no atendimento humanizado de alta performance, unindo tecnologia, precisão e cuidado individualizado em cada tratamento.
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