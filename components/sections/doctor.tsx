import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Stethoscope } from "lucide-react"

const specialties = [
  { icon: Stethoscope, title: "Implantodontia", description: "Especialista em implantes dentários" },
  { icon: GraduationCap, title: "Ortodontia", description: "Correção do posicionamento dos dentes" },
  { icon: Award, title: "Ortopedia Facial", description: "Tratamento de estruturas faciais" },
]

export function DoctorSection() {
  return (
    <section className="bg-[#0B1C2C] py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <ScrollAnimation>
            <div>
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Conheça o Doutor
              </span>
              <h2 className="mt-2 text-3xl font-bold lg:text-4xl text-balance">
                Dr. Rafael R. Tanuri
              </h2>
              <p className="mt-2 text-lg text-[#D4AF37]">
                CRO-PR 12345
              </p>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Com mais de 20 anos dedicados à odontologia, o Dr. Rafael Tanuri é referência em implantes dentários, ortodontia e ortopedia facial em Maringá e região. Sua abordagem combina técnica apurada com um atendimento humanizado, sempre buscando o melhor resultado para cada paciente.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Formado pela Universidade Estadual de Maringá, possui diversas especializações e está em constante atualização, participando de congressos e cursos nacionais e internacionais.
              </p>
              
              {/* Specialties */}
              <div className="mt-8 space-y-4">
                {specialties.map((specialty, index) => (
                  <ScrollAnimation key={index} delay={100 + index * 100}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37]/20">
                        <specialty.icon className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{specialty.title}</h3>
                        <p className="text-sm text-gray-400">{specialty.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03]"
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma consulta com o Dr. Rafael."
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
          <ScrollAnimation delay={200}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-3xl transform rotate-3"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-33-768x768-UAk3JCeBO3pApstbU4crzUzaAKNSRU.png"
                alt="Dr. Rafael R. Tanuri"
                width={500}
                height={500}
                className="relative rounded-2xl object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
