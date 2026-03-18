import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Diferença entre prótese e implante | Odontologia Tanuri",
  description: "Entenda as diferenças entre prótese e implante dentário e descubra qual tratamento é mais indicado para o seu caso.",
  keywords: "diferença prótese implante, prótese ou implante, comparação prótese implante dentário",
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
            <span className="text-[#1A1A1A]">Prótese vs Implante</span>
          </nav>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A032] mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
            Diferença entre prótese e implante: qual a melhor opção?
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              28 Fev 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              6 min de leitura
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
                alt="Consultório odontológico"
                width={900}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#666666] leading-relaxed">
                Quando se trata de substituir dentes perdidos, duas opções são frequentemente consideradas: <strong>prótese</strong> e <strong>implante</strong>. Mas qual a diferença entre eles? E qual é a melhor opção para você? Vamos esclarecer essas dúvidas.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">O que é implante dentário?</h2>
              <p className="text-[#666666] leading-relaxed">
                O implante dentário é um pino de titânio que é inserido cirurgicamente no osso maxilar ou mandibular. Ele funciona como uma raiz artificial, sobre a qual é colocada uma coroa (dente). O implante se integra ao osso (osseointegração), proporcionando estabilidade e durabilidade.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">O que é prótese dentária?</h2>
              <p className="text-[#666666] leading-relaxed">
                A prótese dentária é um dispositivo que substitui os dentes perdidos. Pode ser:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li><strong>Prótese fixa (ponte):</strong> Apoiada nos dentes vizinhos</li>
                <li><strong>Prótese removível parcial:</strong> Substitui alguns dentes</li>
                <li><strong>Prótese removível total (dentadura):</strong> Substitui todos os dentes</li>
                <li><strong>Prótese sobre implante:</strong> Combinação de implante com prótese</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Comparativo: Implante vs Prótese</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="border p-3 text-left font-semibold text-[#1A1A1A]">Característica</th>
                      <th className="border p-3 text-left font-semibold text-[#1A1A1A]">Implante</th>
                      <th className="border p-3 text-left font-semibold text-[#1A1A1A]">Prótese Removível</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#666666]">
                    <tr>
                      <td className="border p-3">Durabilidade</td>
                      <td className="border p-3">Pode durar a vida toda</td>
                      <td className="border p-3">5-7 anos em média</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Estabilidade</td>
                      <td className="border p-3">Excelente (fixo)</td>
                      <td className="border p-3">Pode se soltar</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Preservação óssea</td>
                      <td className="border p-3">Sim</td>
                      <td className="border p-3">Não</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Conforto</td>
                      <td className="border p-3">Alto</td>
                      <td className="border p-3">Médio</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Investimento inicial</td>
                      <td className="border p-3">Maior</td>
                      <td className="border p-3">Menor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Qual escolher?</h2>
              <p className="text-[#666666] leading-relaxed">
                A escolha entre implante e prótese depende de diversos fatores:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li>Condição de saúde geral e bucal</li>
                <li>Quantidade e qualidade do osso disponível</li>
                <li>Número de dentes a serem substituídos</li>
                <li>Expectativas e preferências do paciente</li>
                <li>Orçamento disponível</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mt-4">
                Em geral, quando possível, o implante é a opção mais recomendada por oferecer maior durabilidade, conforto e preservação da estrutura óssea. Porém, a prótese continua sendo uma excelente opção em muitos casos.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Prótese sobre implante: o melhor dos dois mundos</h2>
              <p className="text-[#666666] leading-relaxed">
                Para quem perdeu todos os dentes, a prótese sobre implantes (protocolo) combina a estabilidade dos implantes com a praticidade da prótese. Com apenas 4 a 6 implantes, é possível fixar uma prótese completa, eliminando o desconforto da dentadura convencional.
              </p>
            </article>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#0B1C2C] text-center">
              <h3 className="text-2xl font-bold text-white">
                Ainda tem dúvidas sobre qual tratamento escolher?
              </h3>
              <p className="mt-4 text-gray-300">
                Agende uma avaliação e descubra a melhor opção para o seu caso.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de saber qual tratamento é mais indicado para mim: prótese ou implante."
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
