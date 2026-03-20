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
      description="As próteses dentárias substituem dentes perdidos, restaurando função e estética do sorriso. Na Odontologia Tanuri, oferecemos diversos tipos de próteses para atender suas necessidades."
      longDescription="A prótese dentária é um dispositivo que substitui dentes ausentes e pode ser fixa ou removível. Próteses fixas incluem coroas e pontes, cimentadas sobre dentes naturais ou implantes. Próteses removíveis, como dentaduras ou parciais, podem ser retiradas para higienização. Na Odontologia Tanuri, utilizamos materiais de alta qualidade e tecnologia avançada para criar próteses que se assemelham aos dentes naturais, oferecendo conforto, funcionalidade e estética. Também oferecemos próteses sobre implantes, combinando estabilidade e praticidade."
      image="/images/protese.png"
      benefits={[
        "Recuperação da função mastigatória",
        "Melhora na fala e dicção",
        "Restauração da estética do sorriso",
        "Prevenção da movimentação dos dentes remanescentes",
        "Suporte para músculos faciais",
        "Aumento da autoestima e qualidade de vida",
      ]}
      indications={[
        "Perda de um ou mais dentes",
        "Substituição de próteses antigas",
        "Dentes comprometidos que precisam ser extraídos",
        "Desejo de melhorar a mastigação",
        "Problemas estéticos pela ausência de dentes",
        "Dificuldade na fala devido à falta de dentes",
      ]}
      faqs={[
        {
          question: "Qual a diferença entre prótese e implante?",
          answer: "O implante é um pino de titânio fixado no osso, funcionando como raiz artificial. A prótese é o dente artificial que pode ser colocado sobre o implante ou apoiado em dentes naturais. São tratamentos complementares.",
        },
        {
          question: "Quanto tempo dura uma prótese dentária?",
          answer: "A durabilidade depende do tipo de prótese e dos cuidados do paciente. Próteses fixas podem durar de 10 a 15 anos, enquanto próteses removíveis geralmente precisam ser substituídas a cada 5 a 7 anos.",
        },
        {
          question: "Prótese dentária é desconfortável?",
          answer: "Próteses bem adaptadas são confortáveis. É normal um período de adaptação inicial. Se sentir desconforto com sua prótese, agende uma avaliação para ajustes necessários.",
        },
        {
          question: "Como cuidar da prótese dentária?",
          answer: "A higienização diária é essencial. Próteses removíveis devem ser escovadas e mantidas em solução adequada à noite. Próteses fixas exigem escovação e uso de fio dental normalmente.",
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