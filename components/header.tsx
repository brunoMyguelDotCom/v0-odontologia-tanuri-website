"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const treatments = [
  { name: "Implante Dentário", href: "/implante-dentario-maringa" },
  { name: "Lente de Contato Dental", href: "/lente-de-contato-dental-maringa" },
  { name: "Ortodontia", href: "/ortodontia-maringa" },
  { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
  { name: "Prótese Dentária", href: "/protese-dentaria-maringa" },
  { name: "Tratamento de Canal", href: "/tratamento-de-canal-maringa" },
]

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre-a-clinica" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-icon251-zABCeJwdvVpWl60se55sbojGXdE2Jk.png"
              alt="Odontologia Tanuri"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-[#D4AF37] transition-colors"
          >
            Início
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-[#D4AF37] transition-colors">
              Tratamentos
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {treatments.map((treatment) => (
                <DropdownMenuItem key={treatment.href} asChild>
                  <Link href={treatment.href} className="w-full cursor-pointer">
                    {treatment.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link
            href="/sobre-a-clinica"
            className="text-sm font-medium text-foreground hover:text-[#D4AF37] transition-colors"
          >
            Sobre
          </Link>
          
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-[#D4AF37] transition-colors"
          >
            Blog
          </Link>
          
          <Link
            href="/contato"
            className="text-sm font-medium text-foreground hover:text-[#D4AF37] transition-colors"
          >
            Contato
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold transition-all hover:scale-[1.03]"
          >
            <a
              href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Avaliação
            </a>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-icon251-zABCeJwdvVpWl60se55sbojGXdE2Jk.png"
                alt="Odontologia Tanuri"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="py-2">
                  <p className="-mx-3 px-3 py-2 text-sm font-semibold text-muted-foreground">
                    Tratamentos
                  </p>
                  {treatments.map((treatment) => (
                    <Link
                      key={treatment.href}
                      href={treatment.href}
                      className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {treatment.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-6">
                <Button
                  asChild
                  className="w-full bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#C9A032] font-semibold"
                >
                  <a
                    href="https://wa.me/5544999999999?text=Olá! Gostaria de agendar uma avaliação."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Avaliação
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
