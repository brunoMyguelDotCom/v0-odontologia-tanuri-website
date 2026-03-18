import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Odontologia Tanuri | Dentista em Maringá - PR',
  description: 'Clínica odontológica em Maringá especializada em implantes dentários, lentes de contato dental, ortodontia e muito mais. Agende sua avaliação gratuita!',
  keywords: 'dentista maringá, implante dentário maringá, lente de contato dental maringá, ortodontia maringá, clareamento dental maringá',
  openGraph: {
    title: 'Odontologia Tanuri | Dentista em Maringá - PR',
    description: 'Transforme seu sorriso com quem está há mais de 20 anos cuidando de vidas em Maringá',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
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
