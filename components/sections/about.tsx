import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Award, Heart, Sparkles, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "+20", label: "Anos de Experiência" },
  { icon: Users, value: "+5.000", label: "Pacientes Atendidos" },
  { icon: Sparkles, value: "+10.000", label: "Sorrisos Transformados" },
  { icon: Heart, value: "100%", label: "Dedicação" },
]

export function AboutSection() {
  return (
    <section className="bg-[#F5F5F5] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <ScrollAnimation>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-3xl transform -rotate-3"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg"
                alt="Consultório moderno da Odontologia Tanuri"
                width={600}
                height={400}
                className="relative rounded-2xl object-cover w-full"
              />
            </div>
          </ScrollAnimation>
          
          {/* Content */}
          <ScrollAnimation delay={100}>
            <div>
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Sobre a Clínica
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl text-balance">
                Excelência em Odontologia com Atendimento Humanizado
              </h2>
              <p className="mt-6 text-[#666666] leading-relaxed">
                A Odontologia Tanuri nasceu do sonho de oferecer um atendimento odontológico diferenciado em Maringá. Há mais de duas décadas, nos dedicamos a transformar sorrisos e proporcionar saúde bucal com excelência.
              </p>
              <p className="mt-4 text-[#666666] leading-relaxed">
                Nossa clínica conta com infraestrutura moderna, equipamentos de última geração e uma equipe de profissionais altamente qualificados, sempre em busca das melhores técnicas e inovações do mercado.
              </p>
              
              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={index} delay={200 + index * 100}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                        <stat.icon className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#1A1A1A]">{stat.value}</p>
                        <p className="text-sm text-[#666666]">{stat.label}</p>
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
