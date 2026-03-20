import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Ortodontia em Maringá | Odontologia Tanuri",
  description: "Ortodontia em Maringá com aparelhos modernos. Alinhe seus dentes com tratamento personalizado na Odontologia Tanuri. Agende sua avaliação!",
  keywords: "ortodontia maringá, aparelho dental maringá, aparelho invisível maringá, dentista ortodontista maringá",
}

export default function OrtodontiaPage() {
  return (
    <TreatmentPage
      title="Ortodontia"
      subtitle="Alinhe seus dentes e transforme seu sorriso"
      description="A ortodontia corrige a posição dos dentes e dos ossos maxilares. Na Odontologia Tanuri, oferecemos tratamentos personalizados, desde aparelhos convencionais até alinhadores transparentes."
      longDescription="O tratamento ortodôntico vai além da estética. Dentes alinhados são mais fáceis de higienizar, reduzindo o risco de cáries e doenças gengivais. Uma mordida correta previne problemas na articulação temporomandibular (ATM) e distribui melhor as forças da mastigação. Na Odontologia Tanuri, o Dr. Rafael Tanuri é especialista em ortodontia e ortopedia facial, oferecendo soluções personalizadas para crianças, adolescentes e adultos. Trabalhamos com aparelhos metálicos, estéticos (porcelana), autoligados e alinhadores transparentes."
      image="/images/ortodontia.jpg"
      benefits={[
        "Dentes alinhados e sorriso harmonioso",
        "Melhora na mastigação e fala",
        "Facilidade na higienização bucal",
        "Prevenção de problemas na ATM",
        "Aumento da autoestima",
        "Resultados duradouros",
      ]}
      indications={[
        "Dentes desalinhados ou tortos",
        "Mordida cruzada, aberta ou profunda",
        "Espaços entre os dentes",
        "Apinhamento dental",
        "Problemas de mastigação",
        "Respiração bucal",
      ]}
      faqs={[
        {
          question: "Qual a idade ideal para iniciar o tratamento ortodôntico?",
          answer: "A avaliação ortodôntica é recomendada a partir dos 7 anos. No entanto, adultos também podem iniciar o tratamento e obter ótimos resultados.",
        },
        {
          question: "Quanto tempo dura o tratamento ortodôntico?",
          answer: "A duração depende da complexidade do caso. Em média, varia de 18 a 36 meses. Casos simples podem ser concluídos em menos tempo.",
        },
        {
          question: "O aparelho ortodôntico dói?",
          answer: "É comum sentir desconforto nos primeiros dias após a colocação do aparelho e após ajustes mensais. Essa sensibilidade é temporária e pode ser aliviada com analgésicos comuns.",
        },
        {
          question: "Posso usar aparelho invisível?",
          answer: "Sim! Trabalhamos com alinhadores transparentes, ideais para quem busca discrição. Na avaliação, verificamos se você é candidato a esse tipo de tratamento.",
        },
      ]}
      relatedTreatments={[
        { name: "Lente de Contato Dental", href: "/lente-de-contato-dental-maringa" },
        { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
        { name: "Implante Dentário", href: "/implante-dentario-maringa" },
      ]}
    />
  )
}