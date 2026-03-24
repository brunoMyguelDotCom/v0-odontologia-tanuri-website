import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const WHATSAPP = "+55-44-9709-5982"
const INSTAGRAM = "https://www.instagram.com/dr.rafaeltanuri/"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D4AF37',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://odontologiatanuri.com.br'),
  title: {
    default: 'Odontologia Tanuri | Dentista em Maringá - PR',
    template: '%s | Odontologia Tanuri',
  },
  description: 'Clínica odontológica em Maringá especializada em implantes dentários, lentes de contato dental e ortodontia.',
  alternates: {
    canonical: 'https://odontologiatanuri.com.br',
  },
  icons: {
    icon: '/images/favicon.ico',        // favicon principal
    shortcut: '/images/favicon.ico',    // favicon para navegadores antigos
    apple: '/images/favicon.ico',       // ícone para iOS (pode usar o mesmo se não tiver PNG separado)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Odontologia Tanuri",
              "url": "https://odontologiatanuri.com.br",
              "telephone": WHATSAPP,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. 19 de Dezembro, 369 – Sala 3 e 4",
                "addressLocality": "Maringá",
                "addressRegion": "PR",
                "postalCode": "87013-000",
                "addressCountry": "BR"
              },
              "sameAs": [INSTAGRAM]
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}