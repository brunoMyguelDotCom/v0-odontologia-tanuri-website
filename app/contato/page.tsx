import { Metadata } from "next"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Odontologia Tanuri - Maringá",
  description: "Entre em contato e agende sua consulta de forma rápida e prática.",
}

const WHATSAPP = "554497095982"
const INSTAGRAM = "https://www.instagram.com/dr.rafaeltanuri/"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. 19 de Dezembro, 369 - Zona 04\nMaringá - PR",
    href: "https://maps.app.goo.gl/viTvHAADPudwEbt98",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(44) 9709-5982",
    href: `tel:+${WHATSAPP}`,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "recepcaotanuri@gmail.com",
    href: "mailto:recepcaotanuri@gmail.com",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 08:00 às 11:30 e 13:30 às 21:00",
    href: null,
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F5F5F5] py-16 px-8 sm:px-12 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-[#1A1A1A]">
          Entre em <span className="text-[#D4AF37]">Contato</span>
        </h1>
        <p className="mt-4 text-[#666]">
          Agende sua avaliação de forma rápida e simples.
        </p>
      </section>

      {/* INFORMAÇÕES DE CONTATO */}
      <section className="py-16 px-8 sm:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, i) => (
            <ScrollAnimation key={i}>
              <div className="p-6 bg-[#F5F5F5] rounded-xl text-center">
                <item.icon className="mx-auto text-[#D4AF37]" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 whitespace-pre-line">{item.content}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="bg-[#0B1C2C] text-center py-16 px-8 sm:px-12 lg:px-20 text-white">
        <h2 className="text-3xl font-bold">
          Fale conosco pelo WhatsApp
        </h2>
        <p className="mt-4 text-gray-300">
          Atendimento rápido e direto com nossa equipe.
        </p>

        <Button asChild className="mt-6 bg-[#25D366] text-white">
          <a href={`https://wa.me/${WHATSAPP}`}>
            <MessageCircle className="mr-2" />
            Agendar agora
          </a>
        </Button>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16 px-8 sm:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold">
          Veja resultados reais no Instagram
        </h2>
        <p className="mt-4 text-[#666]">
          Conheça transformações de sorrisos e acompanhe nosso dia a dia clínico.
        </p>

        <Button asChild className="mt-6 bg-[#D4AF37] text-[#0B1C2C]">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Instagram className="mr-2" />
            Ver Instagram
          </a>
        </Button>
      </section>
    </>
  )
}