import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight } from "lucide-react"

const treatments = [
  {
    title: "Implantes Dentarios",
    description: "Recupere seu sorriso com implantes de alta qualidade e tecnologia avancada.",
    image: "/images/implante.jpg",
    href: "/implante-dentario-maringa",
  },
  {
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com lentes ultrafinas e resultados naturais.",
    image: "/images/lentes.jpg",
    href: "/lente-de-contato-dental-maringa",
  },
  {
    title: "Ortodontia",
    description: "Alinhe seus dentes com aparelhos modernos e tratamentos personalizados.",
    image: "/images/ortodontia.jpg",
    href: "/ortodontia-maringa",
  },
  {
    title: "Clareamento Dental",
    description: "Dentes mais brancos e saudaveis com tecnicas seguras e eficazes.",
    image: "/images/clareamento.jpg",
    href: "/clareamento-dental-maringa",
  },
  {
    title: "Proteses Dentarias",
    description: "Reabilite sua mastigacao e estetica com proteses de alta qualidade.",
    image: "/images/protese.png",
    href: "/protese-dentaria-maringa",
  },
  {
    title: "Tratamento de Canal",
    description: "Elimine a dor e preserve seu dente com endodontia especializada.",
    image: "/images/canal.jpg",
    href: "/tratamento-de-canal-maringa",
  },
]

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className="bg-[#F8F9FA] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Nossos Tratamentos
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1C2C] lg:text-4xl">
              Procedimentos Especializados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#666666] text-sm sm:text-base">
              Oferecemos uma ampla gama de tratamentos odontologicos com tecnologia de ponta e profissionais experientes.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <ScrollAnimation
              key={treatment.href}
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Link
                href={treatment.href}
                className="group block overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-[#D4AF37] text-[#0B1C2C] text-xs font-semibold rounded-full">
                      Especialidade
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-[#0B1C2C] group-hover:text-[#D4AF37] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#666666] line-clamp-2">
                    {treatment.description}
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm font-medium text-[#D4AF37]">
                    Saiba mais
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={500} direction="up">
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/contato"
              className="inline-flex items-center px-6 py-3 bg-[#0B1C2C] text-white font-medium rounded-full hover:bg-[#0B1C2C]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agende sua avaliacao gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
