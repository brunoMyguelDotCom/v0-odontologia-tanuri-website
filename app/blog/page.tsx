import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Odontologia Tanuri - Dicas e Informações",
  description: "Artigos e dicas sobre saúde bucal, tratamentos odontológicos e cuidados com os dentes. Conteúdo educativo da Odontologia Tanuri em Maringá.",
  keywords: "blog odontologia, dicas saúde bucal, artigos dentista, informações tratamentos dentários",
}

const posts = [
  {
    slug: "implante-dentario-doi",
    title: "Implante dentário dói? Descubra a verdade sobre o procedimento",
    excerpt: "Muitos pacientes têm receio do procedimento de implante por medo da dor. Neste artigo, explicamos como funciona e por que você não precisa ter medo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-man-with-toothy-smile-demonstrating-his-dental-implant-2048x1363-CfusyrZNJgVc7BzeI6G1hHdnUlFHut.jpg",
    date: "15 Mar 2026",
    readTime: "5 min",
  },
  {
    slug: "quanto-custa-implante-dentario",
    title: "Quanto custa um implante dentário? Fatores que influenciam o preço",
    excerpt: "O valor do implante dentário pode variar bastante. Entenda os fatores que influenciam o preço e como fazer um investimento inteligente em sua saúde bucal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg",
    date: "10 Mar 2026",
    readTime: "7 min",
  },
  {
    slug: "lente-de-contato-dental-antes-e-depois",
    title: "Lente de contato dental: antes e depois impressionantes",
    excerpt: "Veja resultados reais de transformações com lentes de contato dental e entenda como esse procedimento pode mudar completamente seu sorriso.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentist-whiting-teeth-2048x1365-jDzl0jxvbYsyKXnX7JKYeMH8wOmcF1.jpg",
    date: "5 Mar 2026",
    readTime: "4 min",
  },
  {
    slug: "diferenca-protese-implante",
    title: "Diferença entre prótese e implante: qual a melhor opção?",
    excerpt: "Prótese ou implante? Entenda as diferenças entre esses tratamentos e descubra qual é o mais indicado para o seu caso.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg",
    date: "28 Fev 2026",
    readTime: "6 min",
  },
  {
    slug: "como-escolher-dentista",
    title: "Como escolher um dentista: 7 dicas essenciais",
    excerpt: "Escolher o dentista certo é fundamental para sua saúde bucal. Confira nossas dicas para encontrar o profissional ideal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-33-768x768-UAk3JCeBO3pApstbU4crzUzaAKNSRU.png",
    date: "20 Fev 2026",
    readTime: "5 min",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-white to-[#F5F5F5] py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-sm text-[#666666]">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Blog</span>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Blog <span className="text-[#D4AF37]">Odontologia Tanuri</span>
            </h1>
            <p className="mt-6 text-lg text-[#666666]">
              Dicas, informações e novidades sobre saúde bucal e tratamentos odontológicos.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <ScrollAnimation key={post.slug} delay={index * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#666666]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#666666] line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-[#D4AF37]">
                      Ler mais
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
