import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

const team = [
  {
    name: "Dra. Maria Silva",
    role: "Ortodontista",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr1-768x768-FxREkDPad1TlV9FkHEiYmNuLf6ND0i.png",
  },
  {
    name: "Dra. Ana Oliveira",
    role: "Endodontista",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr2-768x768-ZatMOWXCOD3iOz2KKJ3y8zjV2IVz4d.png",
  },
  {
    name: "Dra. Paula Santos",
    role: "Periodontista",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr3-768x768-aK992RWchzeLo1M2YYcQzFxZVvjtS7.png",
  },
]

export function TeamSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Nossa Equipe
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl">
              Profissionais Especializados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#666666] text-sm sm:text-base">
              Nossa equipe e formada por profissionais altamente qualificados, dedicados a oferecer o melhor atendimento para voce.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <ScrollAnimation key={member.name} delay={index * 150} direction="scale">
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0B1C2C] to-[#1A3A5C]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-[#0B1C2C]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-[#D4AF37]/20">
                    <h3 className="text-base sm:text-lg font-semibold text-[#0B1C2C]">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
