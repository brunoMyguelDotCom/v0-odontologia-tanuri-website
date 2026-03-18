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
    <section className="bg-[#F5F5F5] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Nossa Equipe
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
              Profissionais Especializados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#666666]">
              Nossa equipe é formada por profissionais altamente qualificados, dedicados a oferecer o melhor atendimento para você.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <ScrollAnimation key={member.name} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">{member.name}</h3>
                    <p className="text-sm text-[#D4AF37] font-medium">{member.role}</p>
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
