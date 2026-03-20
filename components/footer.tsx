import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

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
<footer className="bg-[#0B1C2C] text-white px-4 sm:px-6 lg:px-8">      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-icon251-zABCeJwdvVpWl60se55sbojGXdE2Jk.png"
              alt="Odontologia Tanuri"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Há mais de 20 anos transformando sorrisos e cuidando da saúde bucal de Maringá e região com excelência e humanização.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
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
                  Av. Brasil, 1234 - Zona 01<br />
                  Maringá - PR, 87013-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+554497095982"
                  className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  (44) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:contato@tanuri.com.br"
                  className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  contato@tanuri.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Seg - Sex: 8h às 18h<br />
                  Sáb: 8h às 12h
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
