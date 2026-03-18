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
      description="A ortodontia é a especialidade que corrige a posição dos dentes e dos ossos maxilares. Na Odontologia Tanuri, oferecemos diversas opções de tratamento ortodôntico, desde aparelhos convencionais até alinhadores transparentes."
      longDescription="O tratamento ortodôntico vai muito além da estética. Dentes alinhados são mais fáceis de higienizar, reduzindo o risco de cáries e doenças gengivais. Além disso, uma mordida correta previne problemas na articulação temporomandibular (ATM) e distribui melhor as forças da mastigação. Na Odontologia Tanuri, o Dr. Rafael Tanuri é especialista em ortodontia e ortopedia facial, oferecendo tratamentos personalizados para crianças, adolescentes e adultos. Trabalhamos com aparelhos metálicos, estéticos (de porcelana), autoligados e alinhadores transparentes."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentist-holding-dental-plastic-model-with-braces-1536x1024-gWq6kp9QAurRVM43FIPJQXDxEnqBbQ.jpg"
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
          answer: "Recomenda-se uma avaliação ortodôntica a partir dos 7 anos de idade. No entanto, nunca é tarde para começar o tratamento. Adultos também podem se beneficiar da ortodontia.",
        },
        {
          question: "Quanto tempo dura o tratamento ortodôntico?",
          answer: "A duração varia de acordo com a complexidade do caso. Em média, o tratamento dura de 18 a 36 meses. Casos mais simples podem ser resolvidos em menos tempo.",
        },
        {
          question: "O aparelho ortodôntico dói?",
          answer: "É normal sentir um desconforto nos primeiros dias após a colocação do aparelho e após os ajustes mensais. Essa sensibilidade é temporária e pode ser aliviada com analgésicos comuns.",
        },
        {
          question: "Posso usar aparelho invisível?",
          answer: "Sim! Oferecemos tratamento com alinhadores transparentes, que são uma ótima opção para quem busca discrição. Na avaliação, verificamos se você é um candidato para esse tipo de tratamento.",
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
