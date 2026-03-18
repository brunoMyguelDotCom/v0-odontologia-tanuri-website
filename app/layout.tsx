import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D4AF37',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://odontologiatanuri.com.br'),
  title: {
    default: 'Odontologia Tanuri | Dentista em Maringa - PR | Implantes e Lentes de Contato Dental',
    template: '%s | Odontologia Tanuri',
  },
  description: 'Clinica odontologica em Maringa especializada em implantes dentarios, lentes de contato dental, ortodontia, clareamento e proteses. Mais de 20 anos de experiencia. Agende sua avaliacao gratuita!',
  keywords: [
    'dentista maringa',
    'implante dentario maringa',
    'lente de contato dental maringa',
    'ortodontia maringa',
    'clareamento dental maringa',
    'protese dentaria maringa',
    'tratamento de canal maringa',
    'dentista em maringa',
    'clinica odontologica maringa',
    'implante dental maringa',
    'aparelho ortodontico maringa',
  ],
  authors: [{ name: 'Dr. Rafael R. Tanuri' }],
  creator: 'Odontologia Tanuri',
  publisher: 'Odontologia Tanuri',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Odontologia Tanuri | Dentista em Maringa - PR',
    description: 'Transforme seu sorriso com quem esta ha mais de 20 anos cuidando de vidas em Maringa. Implantes, lentes de contato dental, ortodontia e mais.',
    url: 'https://odontologiatanuri.com.br',
    siteName: 'Odontologia Tanuri',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Odontologia Tanuri - Clinica Odontologica em Maringa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odontologia Tanuri | Dentista em Maringa - PR',
    description: 'Transforme seu sorriso com quem esta ha mais de 20 anos cuidando de vidas em Maringa.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'sua-verificacao-google',
  },
  alternates: {
    canonical: 'https://odontologiatanuri.com.br',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        {/* Google Ads Conversion Tracking - Replace with your ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        {/* Schema.org structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Odontologia Tanuri",
              "description": "Clinica odontologica em Maringa especializada em implantes dentarios, lentes de contato dental, ortodontia e mais.",
              "url": "https://odontologiatanuri.com.br",
              "telephone": "+55-44-99999-9999",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Endereco da Clinica",
                "addressLocality": "Maringa",
                "addressRegion": "PR",
                "postalCode": "87000-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.4205",
                "longitude": "-51.9333"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "image": "https://odontologiatanuri.com.br/og-image.jpg",
              "sameAs": [
                "https://instagram.com/odontologiatanuri",
                "https://facebook.com/odontologiatanuri"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicos Odontologicos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Implante Dentario"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lente de Contato Dental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ortodontia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Clareamento Dental"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
