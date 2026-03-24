import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Stethoscope } from "lucide-react"

const specialties = [
  { icon: Stethoscope, title: "Implantodontia", description: "Especialista em implantes dentários" },
  { icon: GraduationCap, title: "Ortodontia ", description: "Correção do posicionamento dos dentes" },
  { icon: Award, title: "Ortopedia Facial", description: "Tratamento de estruturas faciais" },
]

export function DoctorSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8F9FA] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          
          {/* Content */}
          <ScrollAnimation direction="left">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Conheça o Doutor
              </span>
              
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl text-balance">
                Dr. Rafael R. Tanuri
              </h2>

              <p className="mt-4 sm:mt-6 text-[#666666] leading-relaxed text-sm sm:text-base">
                Atendimento humanizado de alta performance, com foco na qualidade, conforto e confiança em cada consulta.
              </p>

              <p className="mt-3 sm:mt-4 text-[#666666] leading-relaxed text-sm sm:text-base">
                Mais de 26 anos de experiência atendendo no mesmo endereço, com mais de 30 mil pacientes atendidos ao longo da carreira.
              </p>

              {/* Specialties */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {specialties.map((specialty, index) => (
                  <ScrollAnimation key={index} delay={100 + index * 100} direction="right">
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#0B1C2C]/5 hover:bg-[#0B1C2C]/10 transition-colors">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B1C2C] to-[#1A3A5C]">
                        <specialty.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-[#0B1C2C] text-sm sm:text-base">{specialty.title}</h3>
                        <p className="text-xs sm:text-sm text-[#666666]">{specialty.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  <a
                    href="https://wa.me/554497095982?text=Olá! Gostaria de agendar uma consulta com o Dr. Rafael."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta com Dr. Rafael
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation delay={200} direction="right">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none order-1 lg:order-2">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/body-doutor.png"
                alt="Dr. Rafael R. Tanuri"
                width={500}
                height={500}
                className="relative rounded-xl sm:rounded-2xl object-cover"
              />
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  )
}