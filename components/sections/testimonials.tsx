import { ScrollAnimation } from "@/components/scroll-animation"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "João Carlos",
    text: "Excelente atendimento! O Dr. Rafael é muito atencioso e competente. Fiz meu implante com ele e o resultado ficou perfeito. Recomendo demais!",
    rating: 5,
    date: "há 2 semanas",
  },
  {
    name: "Maria Fernanda",
    text: "Clínica maravilhosa, equipe super atenciosa. Fiz minhas lentes de contato dental e estou amando o resultado. Finalmente posso sorrir sem vergonha!",
    rating: 5,
    date: "há 1 mês",
  },
  {
    name: "Pedro Henrique",
    text: "Ambiente muito agradável e profissionais extremamente qualificados. Meu tratamento ortodôntico está indo muito bem. Super indico!",
    rating: 5,
    date: "há 3 semanas",
  },
  {
    name: "Ana Paula",
    text: "Sempre tive medo de dentista, mas na Odontologia Tanuri me senti muito à vontade. Atendimento humanizado de verdade. Nota 10!",
    rating: 5,
    date: "há 1 semana",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
              O Que Nossos Pacientes Dizem
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[#666666]">4.9 estrelas no Google</span>
            </div>
          </div>
        </ScrollAnimation>
        
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="flex flex-col h-full rounded-2xl bg-[#F5F5F5] p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="flex-1 text-[#666666] text-sm leading-relaxed">
                  {'"'}{testimonial.text}{'"'}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
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
