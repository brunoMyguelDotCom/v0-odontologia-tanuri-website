import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Como escolher um dentista: 7 dicas | Odontologia Tanuri",
  description: "Dicas essenciais para escolher o dentista certo. Saiba o que avaliar para encontrar um profissional de confiança.",
  keywords: "como escolher dentista, dicas escolher dentista, encontrar bom dentista, dentista de confiança",
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
            <span className="text-[#1A1A1A]">Como escolher um dentista</span>
          </nav>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A032] mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
            Como escolher um dentista: 7 dicas essenciais
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              20 de fevereiro de 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              5 minutos de leitura
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-33-768x768-UAk3JCeBO3pApstbU4crzUzaAKNSRU.png"
                alt="Dr. Rafael Tanuri"
                width={900}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#666666] leading-relaxed">
                Escolher o dentista certo é fundamental para a sua saúde bucal e bem-estar. Um bom profissional não apenas trata problemas, mas também previne e orienta. Confira nossas <strong>7 dicas essenciais</strong> para encontrar o dentista ideal.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">1. Verifique a formação e especialização</h2>
              <p className="text-[#666666] leading-relaxed">
                Certifique-se de que o profissional é registrado no CRO (Conselho Regional de Odontologia) da sua região. Além disso, se você precisa de um tratamento específico, como implantes ou ortodontia, verifique se o dentista possui especialização na área.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">2. Pesquise avaliações e recomendações</h2>
              <p className="text-[#666666] leading-relaxed">
                Leia avaliações online (Google, redes sociais) e peça recomendações a amigos e familiares. A experiência de outros pacientes pode fornecer uma boa ideia da qualidade do atendimento.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">3. Avalie a estrutura da clínica</h2>
              <p className="text-[#666666] leading-relaxed">
                Uma clínica bem equipada, limpa e organizada é sinal de profissionalismo. Observe se os equipamentos parecem modernos e se os protocolos de biossegurança são rigorosamente seguidos.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">4. Preste atenção na comunicação</h2>
              <p className="text-[#666666] leading-relaxed">
                Um bom dentista explica os procedimentos de forma clara, responde às suas dúvidas com paciência e não pressiona você a realizar tratamentos. A comunicação transparente é fundamental para uma relação de confiança.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">5. Verifique a experiência</h2>
              <p className="text-[#666666] leading-relaxed">
                A experiência é muito importante, especialmente para procedimentos mais complexos. Pergunte há quanto tempo o profissional atua na área e quantos procedimentos semelhantes ao seu ele já realizou.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">6. Considere a localização e os horários</h2>
              <p className="text-[#666666] leading-relaxed">
                Escolha uma clínica com localização conveniente e horários que se encaixem na sua rotina. Isso facilita o acompanhamento regular e evita faltas às consultas por dificuldades de deslocamento.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">7. Avalie o custo-benefício</h2>
              <p className="text-[#666666] leading-relaxed">
                O preço mais baixo nem sempre é a melhor opção. Considere a qualidade do atendimento, os materiais utilizados e a experiência do profissional. Um tratamento bem feito, mesmo que mais caro, pode evitar problemas e gastos futuros.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Conclusão</h2>
              <p className="text-[#666666] leading-relaxed">
                Encontrar o dentista certo pode parecer desafiador, mas vale o esforço. Um bom profissional será seu parceiro na manutenção da saúde bucal por muitos anos. Reserve um tempo para pesquisar e, se possível, faça uma visita inicial para conhecer a clínica e conversar com o dentista.
              </p>
            </article>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#0B1C2C] text-center">
              <h3 className="text-2xl font-bold text-white">
                Quer conhecer a Odontologia Tanuri?
              </h3>
              <p className="mt-4 text-gray-300">
                Agende uma visita e conheça nossa estrutura, equipe e forma de trabalho.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
              >
                <a
                  href="https://wa.me/554497095982?text=Olá! Gostaria de conhecer a Odontologia Tanuri."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Visita
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}