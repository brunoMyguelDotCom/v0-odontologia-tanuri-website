import { Metadata } from "next"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Odontologia Tanuri - Maringá",
  description: "Entre em contato com a Odontologia Tanuri em Maringá. Agende sua consulta pelo WhatsApp ou visite nossa clínica. Atendimento de segunda a sábado.",
  keywords: "contato odontologia tanuri, telefone dentista maringá, endereço dentista maringá, agendar consulta maringá",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Brasil, 1234 - Zona 01\nMaringá - PR, 87013-000",
    href: "https://maps.google.com/?q=Av.+Brasil,+1234+-+Zona+01,+Maringá+-+PR",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(44) 99999-9999",
    href: "tel:+5544999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@tanuri.com.br",
    href: "mailto:contato@tanuri.com.br",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    href: null,
  },
]

export default function ContatoPage() {
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
            <span className="text-[#1A1A1A]">Contato</span>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Entre em <span className="text-[#D4AF37]">Contato</span>
            </h1>
            <p className="mt-6 text-lg text-[#666666]">
              Estamos prontos para atendê-lo. Escolha a forma de contato que preferir ou visite nossa clínica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-[#F5F5F5] hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                    <item.icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-2 block text-[#666666] hover:text-[#D4AF37] transition-colors whitespace-pre-line"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-2 text-[#666666] whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#0B1C2C] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                Prefere falar pelo <span className="text-[#D4AF37]">WhatsApp</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-gray-300">
                A forma mais rápida de entrar em contato conosco. Clique no botão abaixo e fale diretamente com nossa equipe.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold transition-all hover:scale-[1.03] shadow-lg text-lg px-8"
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Localização
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
                Como Chegar
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.6944344444444!2d-51.9386!3d-23.4245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzI4LjIiUyA1McKwNTYnMTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Odontologia Tanuri"
                className="w-full"
              ></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="mt-8 text-center">
              <p className="text-[#666666]">
                Estamos localizados no centro de Maringá, com fácil acesso e estacionamento próximo.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1C2C]"
              >
                <a
                  href="https://maps.google.com/?q=Av.+Brasil,+1234+-+Zona+01,+Maringá+-+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                Redes Sociais
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
                Siga-nos
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[#666666]">
                Acompanhe nosso trabalho e fique por dentro das novidades.
              </p>
            </div>
          </ScrollAnimation>

          <div className="mt-10 flex justify-center gap-6">
            <ScrollAnimation delay={100}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#F5F5F5] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Instagram className="h-6 w-6 text-[#D4AF37]" />
                <span className="font-medium text-[#1A1A1A]">Instagram</span>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#F5F5F5] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Facebook className="h-6 w-6 text-[#D4AF37]" />
                <span className="font-medium text-[#1A1A1A]">Facebook</span>
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
