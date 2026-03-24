import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const treatments = [
  { name: "Implante Dentário", href: "/implante-dentario-maringa" },
  { name: "Lente de Contato Dental", href: "/lente-de-contato-dental-maringa" },
  { name: "Ortodontia", href: "/ortodontia-maringa" },
  { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
  { name: "Prótese Dentária", href: "/protese-dentaria-maringa" },
  { name: "Tratamento de Canal", href: "/tratamento-de-canal-maringa" },
]

const quickLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre a Clínica", href: "/sobre-a-clinica" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#0B1C2C] text-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo and description */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Odontologia Tanuri"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Há mais de 26 anos no mesmo endereço, a Odontologia Tanuri já atendeu mais de 30 mil pacientes em Maringá, oferecendo atendimento humanizado de alta performance.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Tratamentos
            </h3>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment.href}>
                  <Link
                    href={treatment.href}
                    className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Av. 19 de Dezembro, 369 - Zona 04<br />
                  Maringá - PR, 87015-610
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+554497095982"
                  className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  (44) 99709-5982
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:recepcaotanuri@gmail.com"
                  className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  recepcaotanuri@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Seg - Sex: 08:00 às 11:30 e 13:30 às 21:00
                </span>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Odontologia Tanuri. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}