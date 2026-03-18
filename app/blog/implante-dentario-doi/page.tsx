import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Implante dentário dói? Descubra a verdade | Odontologia Tanuri",
  description: "Saiba se o implante dentário causa dor e como é o procedimento. Informações completas sobre anestesia, recuperação e cuidados pós-operatórios.",
  keywords: "implante dentário dói, dor implante dental, anestesia implante dentário, recuperação implante",
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
            <span className="text-[#1A1A1A]">Implante dentário dói?</span>
          </nav>
          
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#C9A032] mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl text-balance">
            Implante dentário dói? Descubra a verdade sobre o procedimento
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-[#666666]">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              15 Mar 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              5 min de leitura
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-man-with-toothy-smile-demonstrating-his-dental-implant-2048x1363-CfusyrZNJgVc7BzeI6G1hHdnUlFHut.jpg"
                alt="Implante dentário"
                width={900}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#666666] leading-relaxed">
                Uma das perguntas mais frequentes que recebemos na Odontologia Tanuri é: <strong>{'"'}O implante dentário dói?{'"'}</strong> É completamente compreensível ter essa preocupação, afinal, estamos falando de um procedimento cirúrgico. Mas a boa notícia é que, com as técnicas modernas e anestesia adequada, o implante dentário é muito mais confortável do que você imagina.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Durante o procedimento</h2>
              <p className="text-[#666666] leading-relaxed">
                O procedimento de implante dentário é realizado com <strong>anestesia local</strong>, a mesma utilizada em outros tratamentos odontológicos. Isso significa que durante a cirurgia você não sentirá dor alguma. Alguns pacientes relatam sentir apenas uma leve pressão durante a inserção do implante, mas nada doloroso.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Para pacientes mais ansiosos, oferecemos opções de sedação que proporcionam maior relaxamento durante o procedimento. O Dr. Rafael Tanuri e sua equipe estão preparados para garantir seu conforto do início ao fim.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Após o procedimento</h2>
              <p className="text-[#666666] leading-relaxed">
                É normal sentir um desconforto leve nos primeiros dias após a cirurgia. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li>Leve inchaço na região</li>
                <li>Sensibilidade no local da cirurgia</li>
                <li>Pequeno sangramento nas primeiras horas</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mt-4">
                Esses sintomas são facilmente controlados com medicamentos prescritos pelo dentista, como analgésicos e anti-inflamatórios. A maioria dos pacientes consegue retomar suas atividades normais em 2 a 3 dias.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Comparando com outros procedimentos</h2>
              <p className="text-[#666666] leading-relaxed">
                Muitos pacientes ficam surpresos ao descobrir que o implante dentário é menos desconfortável do que uma extração simples. Isso porque a cirurgia é planejada com precisão e realizada de forma minimamente invasiva.
              </p>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Dicas para uma recuperação tranquila</h2>
              <ul className="list-disc pl-6 text-[#666666] space-y-2">
                <li>Siga todas as orientações do seu dentista</li>
                <li>Tome os medicamentos nos horários corretos</li>
                <li>Evite alimentos duros nos primeiros dias</li>
                <li>Mantenha uma boa higiene bucal</li>
                <li>Evite fumar e bebidas alcoólicas</li>
                <li>Aplique gelo na região nas primeiras 48 horas</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4">Conclusão</h2>
              <p className="text-[#666666] leading-relaxed">
                O medo da dor não deve impedir você de recuperar seu sorriso. Com profissionais experientes e técnicas modernas, o implante dentário é um procedimento seguro e confortável. Na Odontologia Tanuri, o Dr. Rafael Tanuri possui mais de 20 anos de experiência em implantodontia, tendo realizado milhares de procedimentos com sucesso.
              </p>
            </article>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#0B1C2C] text-center">
              <h3 className="text-2xl font-bold text-white">
                Ainda tem dúvidas sobre implante dentário?
              </h3>
              <p className="mt-4 text-gray-300">
                Agende uma avaliação gratuita e converse pessoalmente com o Dr. Rafael Tanuri.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
              >
                <a
                  href="https://wa.me/5544999999999?text=Olá! Li o artigo sobre implante dentário e gostaria de agendar uma avaliação."
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
