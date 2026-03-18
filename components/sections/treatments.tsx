import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight } from "lucide-react"

const treatments = [
  {
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com implantes de alta qualidade e tecnologia avançada.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-man-with-toothy-smile-demonstrating-his-dental-implant-2048x1363-CfusyrZNJgVc7BzeI6G1hHdnUlFHut.jpg",
    href: "/implante-dentario-maringa",
  },
  {
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com lentes ultrafinas e resultados naturais.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentist-whiting-teeth-2048x1365-jDzl0jxvbYsyKXnX7JKYeMH8wOmcF1.jpg",
    href: "/lente-de-contato-dental-maringa",
  },
  {
    title: "Ortodontia",
    description: "Alinhe seus dentes com aparelhos modernos e tratamentos personalizados.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentist-holding-dental-plastic-model-with-braces-1536x1024-gWq6kp9QAurRVM43FIPJQXDxEnqBbQ.jpg",
    href: "/ortodontia-maringa",
  },
  {
    title: "Próteses Dentárias",
    description: "Reabilite sua mastigação e estética com próteses de alta qualidade.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg",
    href: "/protese-dentaria-maringa",
  },
]

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              Nossos Tratamentos
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
              Procedimentos Especializados
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#666666]">
              Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta e profissionais experientes.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <ScrollAnimation key={treatment.href} delay={index * 100}>
              <Link
                href={treatment.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666] line-clamp-2">
                    {treatment.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-[#D4AF37]">
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation delay={400}>
          <div className="mt-12 text-center">
            <Link
              href="/contato"
              className="inline-flex items-center text-[#0B1C2C] font-medium hover:text-[#D4AF37] transition-colors"
            >
              Ver todos os tratamentos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
