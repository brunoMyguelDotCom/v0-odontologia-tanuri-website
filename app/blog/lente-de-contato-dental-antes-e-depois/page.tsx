import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Lente de contato dental: antes e depois | Odontologia Tanuri",
  description: "Veja resultados reais de transformações com lentes de contato dental. Entenda como esse procedimento pode mudar completamente seu sorriso.",
  keywords: "lente de contato dental antes e depois, resultado lente dental, transformação sorriso",
}

export default function BlogPostPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-white to-[#F5F5F5] py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-sm text-[#666666]">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Lente dental antes e depois</span>
          </nav>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A032] mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
            Lente de contato dental: antes e depois impressionantes
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              5 Mar 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              4 min de leitura
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentist-whiting-teeth-2048x1365-jDzl0jxvbYsyKXnX7JKYeMH8wOmcF1.jpg"
                alt="Lente de contato dental"
                width={900}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#666666] leading-relaxed">
                As <strong>lentes de contato dental</strong> revolucionaram a odontologia estética, permitindo transformações incríveis de forma rápida e minimamente invasiva. Neste artigo, vamos mostrar como esse procedimento pode mudar completamente seu sorriso.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">O que as lentes de contato dental podem corrigir?</h2>
              <p className="text-[#666666] leading-relaxed">
                As lentes de contato dental são indicadas para diversos casos:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li><strong>Dentes manchados ou amarelados:</strong> Quando o clareamento não é suficiente</li>
                <li><strong>Dentes com formato irregular:</strong> Dentes pequenos, triangulares ou desproporcionais</li>
                <li><strong>Diastemas:</strong> Espaços entre os dentes</li>
                <li><strong>Pequenos desalinhamentos:</strong> Quando a ortodontia não é necessária ou desejada</li>
                <li><strong>Dentes desgastados:</strong> Por bruxismo ou erosão</li>
                <li><strong>Fraturas e lascas:</strong> Pequenos danos nos dentes</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Como é o procedimento?</h2>
              <p className="text-[#666666] leading-relaxed">
                O tratamento com lentes de contato dental geralmente é realizado em 2 a 3 sessões:
              </p>
              <ol className="list-decimal pl-6 text-[#666666] space-y-2">
                <li><strong>Planejamento:</strong> Avaliação, fotos, moldagens e design do sorriso</li>
                <li><strong>Preparação:</strong> Mínimo preparo dos dentes (quando necessário) e moldagem final</li>
                <li><strong>Cimentação:</strong> Instalação das lentes definitivas</li>
              </ol>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Resultados que impressionam</h2>
              <p className="text-[#666666] leading-relaxed">
                A transformação é impressionante. Pacientes que antes tinham vergonha de sorrir, após o tratamento, não conseguem parar de mostrar os dentes. Os resultados incluem:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li>Sorriso mais branco e uniforme</li>
                <li>Dentes proporcionais e harmoniosos</li>
                <li>Aparência natural e saudável</li>
                <li>Maior confiança e autoestima</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Quanto tempo dura?</h2>
              <p className="text-[#666666] leading-relaxed">
                Com os cuidados adequados, as lentes de contato dental podem durar de <strong>10 a 15 anos</strong> ou mais. É importante manter uma boa higiene bucal, evitar morder objetos duros e fazer acompanhamento regular com seu dentista.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Lentes de contato dental ou facetas?</h2>
              <p className="text-[#666666] leading-relaxed">
                As lentes de contato dental são mais finas que as facetas convencionais, exigindo pouco ou nenhum desgaste do dente. Já as facetas são um pouco mais espessas e indicadas para casos que precisam de correções mais significativas. Na avaliação, o dentista indica a melhor opção para o seu caso.
              </p>
            </article>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#0B1C2C] text-center">
              <h3 className="text-2xl font-bold text-white">
                Quer transformar seu sorriso?
              </h3>
              <p className="mt-4 text-gray-300">
                Agende uma avaliação e descubra como as lentes de contato dental podem mudar sua vida.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de saber mais sobre lentes de contato dental."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Avaliação
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
