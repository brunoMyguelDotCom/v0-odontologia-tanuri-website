import { ScrollAnimation } from "@/components/scroll-animation"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Joao Carlos",
    text: "Excelente atendimento! O Dr. Rafael e muito atencioso e competente. Fiz meu implante com ele e o resultado ficou perfeito. Recomendo demais!",
    rating: 5,
    date: "ha 2 semanas",
  },
  {
    name: "Maria Fernanda",
    text: "Clinica maravilhosa, equipe super atenciosa. Fiz minhas lentes de contato dental e estou amando o resultado. Finalmente posso sorrir sem vergonha!",
    rating: 5,
    date: "ha 1 mes",
  },
  {
    name: "Pedro Henrique",
    text: "Ambiente muito agradavel e profissionais extremamente qualificados. Meu tratamento ortodontico esta indo muito bem. Super indico!",
    rating: 5,
    date: "ha 3 semanas",
  },
  {
    name: "Ana Paula",
    text: "Sempre tive medo de dentista, mas na Odontologia Tanuri me senti muito a vontade. Atendimento humanizado de verdade. Nota 10!",
    rating: 5,
    date: "ha 1 semana",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl">
              O Que Nossos Pacientes Dizem
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[#666666] text-sm sm:text-base">4.9 estrelas no Google</span>
            </div>
          </div>
        </ScrollAnimation>
        
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 100} direction="up">
              <div className="flex flex-col h-full rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="flex-1 text-[#666666] text-xs sm:text-sm leading-relaxed">
                  {'"'}{testimonial.text}{'"'}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-[#0B1C2C] text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs text-[#666666]">{testimonial.date}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
