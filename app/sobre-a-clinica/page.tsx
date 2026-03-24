import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Award, Heart, Shield, Zap, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre a Clínica | Odontologia Tanuri - Maringá",
  description: "Conheça a Odontologia Tanuri, clínica odontológica em Maringá há mais de 26 anos no mesmo endereço, com mais de 30 mil pacientes atendidos e atendimento humanizado de alta performance.",
  keywords: "sobre odontologia tanuri, clínica odontológica maringá, dentista maringá, história odontologia tanuri",
}

const values = [
  {
    icon: Heart,
    title: "Humanização",
    description: "Atendimento humanizado de alta performance, com foco total no paciente.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Seguimos protocolos rigorosos de biossegurança e esterilização.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Mais de 30 mil pacientes atendidos com resultados comprovados.",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Tecnologia de ponta aliada à experiência de mais de 26 anos.",
  },
]

const timeline = [
  {
    year: "2003",
    title: "Fundação",
    description: "Dr. Rafael Tanuri funda a Odontologia Tanuri em Maringá, com foco em implantodontia.",
  },
  {
    year: "2008",
    title: "Expansão",
    description: "Ampliação do consultório e incorporação de novos profissionais especializados.",
  },
  {
    year: "2015",
    title: "Tecnologia",
    description: "Aquisição de equipamentos de última geração e implantação de radiografia digital.",
  },
  {
    year: "HOJE",
    title: "Referência",
    description: "Mais de 30 mil pacientes atendidos e mais de 26 anos no mesmo endereço em Maringá.",
  },
]

export default function SobreAClinicaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F5F5F5] py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <nav className="mb-4 flex items-center gap-2 text-sm text-[#666666]">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Início</Link>
                <span>/</span>
                <span className="text-[#1A1A1A]">Sobre a Clínica</span>
              </nav>

              <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
                Conheça a <span className="text-[#D4AF37]">Odontologia Tanuri</span>
              </h1>

              <p className="mt-6 text-lg text-[#666666] leading-relaxed">
                Há mais de 26 anos no mesmo endereço, já atendemos mais de 30 mil pacientes em Maringá e região com atendimento humanizado de alta performance. Nossa história é construída sobre pilares de excelência, humanização e inovação.
              </p>

              <p className="mt-4 text-lg text-[#666666] leading-relaxed">
                Fundada pelo Dr. Rafael R. Tanuri, a clínica nasceu do sonho de oferecer atendimento odontológico diferenciado, unindo experiência, tecnologia e cuidado individual em cada paciente.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/equipamento.jpg"
                alt="Consultório moderno da Odontologia Tanuri"
                width={600}
                height={400}
                className="relative rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="bg-[#0B1C2C] py-16 lg:py-24 text-white px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold lg:text-4xl">
                Nossa <span className="text-[#D4AF37]">Missão</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
                Proporcionar saúde bucal e bem-estar por meio de atendimento humanizado de alta performance, aliando tecnologia avançada, experiência de mais de 26 anos e foco total em cada paciente.
              </p>
            </div>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/20">
                    <value.icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 lg:py-24 px-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">Nossa Trajetória</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">Uma História de Sucesso</h2>
            </div>
          </ScrollAnimation>

          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <ScrollAnimation key={item.year} delay={index * 100}>
                  <div className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-[#F5F5F5] rounded-2xl p-6 lg:p-8">
                        <span className="text-2xl font-bold text-[#D4AF37]">{item.year}</span>
                        <h3 className="mt-2 text-xl font-semibold text-[#1A1A1A]">{item.title}</h3>
                        <p className="mt-2 text-[#666666]">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1C2C] font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      {/* (mantido igual, sem necessidade de ajuste de info estratégica) */}

      {/* CTA */}
      <section className="bg-[#0B1C2C] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Venha nos conhecer!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-300">
              Mais de 26 anos no mesmo endereço e mais de 30 mil pacientes atendidos com atendimento humanizado de alta performance.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03] shadow-lg"
              >
                <a
                  href="https://wa.me/554497095982?text=Olá! Gostaria de conhecer a clínica."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Visita
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}