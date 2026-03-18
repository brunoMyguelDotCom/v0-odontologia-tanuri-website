import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Prótese Dentária em Maringá | Odontologia Tanuri",
  description: "Prótese dentária em Maringá com qualidade e naturalidade. Reabilite seu sorriso com próteses modernas na Odontologia Tanuri. Agende sua avaliação!",
  keywords: "prótese dentária maringá, dentadura maringá, prótese fixa maringá, prótese removível maringá",
}

export default function ProteseDentariaPage() {
  return (
    <TreatmentPage
      title="Prótese Dentária"
      subtitle="Reabilite seu sorriso com naturalidade e conforto"
      description="As próteses dentárias são soluções eficazes para substituir dentes perdidos, devolvendo a função mastigatória e a estética do sorriso. Na Odontologia Tanuri, trabalhamos com diversos tipos de próteses para atender suas necessidades."
      longDescription="A prótese dentária é um dispositivo que substitui dentes ausentes, podendo ser fixa ou removível. As próteses fixas incluem coroas e pontes, que são cimentadas sobre dentes naturais ou implantes. As próteses removíveis incluem dentaduras e próteses parciais, que podem ser retiradas para higienização. Na Odontologia Tanuri, utilizamos materiais de alta qualidade e tecnologia moderna para criar próteses que se assemelham aos dentes naturais, proporcionando conforto, funcionalidade e estética. Também oferecemos próteses sobre implantes, que combinam a estabilidade dos implantes com a praticidade das próteses."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental-cabinet-with-various-medical-equipment-scaled-g6KF0db2DRz8Tt3wTnDBJ2EZ1RdZ2J.jpg"
      benefits={[
        "Recuperação da função mastigatória",
        "Melhora na fala e dicção",
        "Restauração da estética do sorriso",
        "Prevenção de movimentação dos dentes remanescentes",
        "Suporte para os músculos faciais",
        "Aumento da autoestima e qualidade de vida",
      ]}
      indications={[
        "Perda de um ou mais dentes",
        "Necessidade de substituir próteses antigas",
        "Dentes comprometidos que precisam ser extraídos",
        "Desejo de melhorar a mastigação",
        "Problemas estéticos causados pela falta de dentes",
        "Dificuldade na fala devido à ausência dental",
      ]}
      faqs={[
        {
          question: "Qual a diferença entre prótese e implante?",
          answer: "O implante é um pino de titânio fixado no osso que serve como raiz artificial. A prótese é o dente artificial que pode ser colocado sobre o implante ou apoiado em dentes naturais. São tratamentos complementares.",
        },
        {
          question: "Quanto tempo dura uma prótese dentária?",
          answer: "A durabilidade varia conforme o tipo de prótese e os cuidados do paciente. Próteses fixas podem durar de 10 a 15 anos. Próteses removíveis geralmente precisam ser substituídas a cada 5 a 7 anos.",
        },
        {
          question: "Prótese dentária é desconfortável?",
          answer: "Próteses bem adaptadas são confortáveis. É normal um período de adaptação inicial. Se você sente desconforto com sua prótese atual, agende uma avaliação para verificar se são necessários ajustes.",
        },
        {
          question: "Como cuidar da prótese dentária?",
          answer: "A higienização diária é essencial. Próteses removíveis devem ser escovadas e mantidas em solução apropriada durante a noite. Próteses fixas exigem escovação e uso de fio dental normalmente.",
        },
      ]}
      relatedTreatments={[
        { name: "Implante Dentário", href: "/implante-dentario-maringa" },
        { name: "Tratamento de Canal", href: "/tratamento-de-canal-maringa" },
        { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
      ]}
    />
  )
}
