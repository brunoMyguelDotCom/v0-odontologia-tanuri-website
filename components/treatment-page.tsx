import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface TreatmentPageProps {
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  benefits: string[]
  indications: string[]
  faqs: FAQ[]
  relatedTreatments: {
    name: string
    href: string
  }[]
}

export function TreatmentPage({
  title,
  subtitle,
  description,
  longDescription,
  image,
  benefits,
  indications,
  faqs,
  relatedTreatments,
}: TreatmentPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F5F5F5] py-12 lg:py-20 px-5 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <nav className="mb-4 flex items-center gap-2 text-sm text-[#666666]">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </Link>
                <span>/</span>
                <span className="text-[#1A1A1A]">{title}</span>
              </nav>

              <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
                {title} <span className="text-[#D4AF37]">em Maringá</span>
              </h1>

              <p className="mt-2 text-lg text-[#D4AF37] font-medium">
                {subtitle}
              </p>

              <p className="mt-6 text-lg text-[#666666] leading-relaxed">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03] shadow-lg"
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de saber mais sobre {title.toLowerCase()}."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agendar Avaliação
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl transform rotate-3"></div>
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="relative rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-[#1A1A1A] lg:text-3xl">
                O que é {title}?
              </h2>
              <div className="mt-6 prose prose-lg text-[#666666] leading-relaxed">
                <p>{longDescription}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits and Indications */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24 px-4 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Benefits */}
            <ScrollAnimation>
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h3 className="text-xl font-bold text-[#1A1A1A] lg:text-2xl">
                  Benefícios
                </h3>
                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#666666]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Indications */}
            <ScrollAnimation delay={100}>
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h3 className="text-xl font-bold text-[#1A1A1A] lg:text-2xl">
                  Indicações
                </h3>
                <ul className="mt-6 space-y-4">
                  {indications.map((indication, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#666666]">{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24 px-6 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1A1A1A] lg:text-3xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-4 text-[#666666]">
                Tire suas dúvidas sobre {title.toLowerCase()}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-[#1A1A1A] hover:text-[#D4AF37]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#666666]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1A1A1A] lg:text-3xl">
                Outros Tratamentos
              </h2>
            </div>
          </ScrollAnimation>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {relatedTreatments.map((treatment, index) => (
              <ScrollAnimation key={treatment.href} delay={index * 50}>
                <Link
                  href={treatment.href}
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md transition-all hover:shadow-lg hover:bg-[#D4AF37] hover:text-[#0B1C2C]"
                >
                  {treatment.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C2C] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-300">
              Agende sua avaliação gratuita e descubra como o {title.toLowerCase()} pode mudar sua vida.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03] shadow-lg"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma avaliação para {title.toLowerCase()}."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Avaliação Gratuita
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
