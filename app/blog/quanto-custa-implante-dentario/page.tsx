import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Quanto custa um implante dentário? | Odontologia Tanuri",
  description: "Saiba quais fatores influenciam o preço do implante dentário e como fazer um investimento inteligente em sua saúde bucal.",
  keywords: "quanto custa implante dentário, preço implante dental, valor implante dentário Maringá",
}

export default function BlogPostPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-white to-[#F5F5F5] py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-sm text-[#666666]">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Quanto custa um implante dentário?</span>
          </nav>
          
          <Link href="/blog" className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A032] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
            Quanto custa um implante dentário? Descubra os fatores que influenciam o preço
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              10 de março de 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              7 min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="rounded-2xl overflow-hidden mb-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg"
                alt="Consultório odontológico moderno"
                width={900}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#666666] leading-relaxed">
                <strong>"Quanto custa um implante dentário?"</strong> é uma das perguntas mais frequentes que recebemos. O valor pode variar bastante dependendo de vários fatores. Neste artigo, explicamos o que influencia o preço e como avaliar esse investimento na sua saúde bucal.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Fatores que influenciam o preço</h2>
              
              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">1. Marca do implante</h3>
              <p className="text-[#666666] leading-relaxed">
                Existem várias marcas de implantes no mercado, cada uma com diferentes níveis de qualidade e tecnologia. Implantes premium, como Straumann e Nobel Biocare, costumam ter custo mais elevado, oferecendo maior durabilidade e previsibilidade.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">2. Necessidade de enxerto ósseo</h3>
              <p className="text-[#666666] leading-relaxed">
                Alguns pacientes não têm osso suficiente para receber o implante diretamente. Nestes casos, pode ser necessário realizar um enxerto ósseo antes ou durante a cirurgia, o que aumenta o valor do tratamento.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">3. Tipo de prótese sobre o implante</h3>
              <p className="text-[#666666] leading-relaxed">
                A coroa que será instalada sobre o implante pode ser feita em diferentes materiais: metalocerâmica, zircônia ou porcelana pura. Cada material apresenta características e preços distintos.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">4. Complexidade do caso</h3>
              <p className="text-[#666666] leading-relaxed">
                Casos mais complexos, que exigem técnicas especiais ou múltiplas etapas cirúrgicas, naturalmente têm um custo maior.
              </p>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">5. Experiência do profissional</h3>
              <p className="text-[#666666] leading-relaxed">
                Profissionais mais experientes podem cobrar valores mais altos, mas oferecem maior segurança e melhores resultados.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Por que não informamos preços online?</h2>
              <p className="text-[#666666] leading-relaxed">
                Cada caso é único. O valor do implante só pode ser determinado após uma avaliação presencial, onde analisamos sua condição bucal, necessidades específicas e expectativas. Informar preços sem avaliação poderia gerar frustração.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Implante é caro ou é investimento?</h2>
              <p className="text-[#666666] leading-relaxed">
                Considerando durabilidade, qualidade de vida e benefícios estéticos, o implante se mostra um investimento inteligente:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li>Pode durar a vida toda com os cuidados adequados</li>
                <li>Não precisa ser substituído periodicamente</li>
                <li>Preserva o osso e a estrutura facial</li>
                <li>Proporciona conforto e naturalidade ao mastigar e sorrir</li>
                <li>Melhora significativamente a qualidade de vida</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Formas de pagamento</h2>
              <p className="text-[#666666] leading-relaxed">
                Na Odontologia Tanuri, oferecemos opções variadas de pagamento, incluindo parcelamento no cartão e financiamento. Entre em contato para encontrar a solução mais adequada para você.
              </p>
            </article>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#0B1C2C] text-center">
              <h3 className="text-2xl font-bold text-white">
                Quer saber o valor do implante para o seu caso?
              </h3>
              <p className="mt-4 text-gray-300">
                Agende uma avaliação gratuita e receba um orçamento personalizado.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
              >
                <a
                  href="https://wa.me/554497095982?text=Olá! Gostaria de saber quanto custa o implante dentário para o meu caso."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}