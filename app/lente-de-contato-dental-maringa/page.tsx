import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Lente de Contato Dental em Maringá | Odontologia Tanuri",
  description: "Lente de contato dental em Maringá para um sorriso perfeito. Transforme seu sorriso com lentes ultrafinas na Odontologia Tanuri. Agende sua avaliação!",
  keywords: "lente de contato dental maringá, faceta dental maringá, lente dental maringá, laminado cerâmico maringá",
}

export default function LenteDeContatoDentalPage() {
  return (
    <TreatmentPage
      title="Lente de Contato Dental"
      subtitle="Transforme seu sorriso com lentes ultrafinas"
      description="As lentes de contato dental são lâminas ultrafinas de porcelana que são coladas na superfície dos dentes, proporcionando um sorriso perfeito de forma rápida e minimamente invasiva."
      longDescription="As lentes de contato dental são facetas ultrafinas de porcelana ou resina, com espessura de aproximadamente 0,3mm a 0,5mm, que são aplicadas na face frontal dos dentes. Elas são ideais para corrigir imperfeições como dentes manchados, desalinhados, com pequenas fraturas ou espaçados. O procedimento é minimamente invasivo, preservando a maior parte da estrutura dental natural. O resultado é um sorriso harmonioso, natural e duradouro. Na Odontologia Tanuri, utilizamos materiais de alta qualidade e técnicas avançadas para garantir resultados excepcionais."
      image="/images/lentes.jpg"
      benefits={[
        "Resultado natural e estético",
        "Procedimento minimamente invasivo",
        "Durabilidade de 10 a 15 anos",
        "Resistência a manchas",
        "Correção de múltiplas imperfeições",
        "Melhora instantânea do sorriso",
      ]}
      indications={[
        "Dentes manchados ou escurecidos",
        "Dentes com formato irregular",
        "Pequenos desalinhamentos",
        "Espaços entre os dentes (diastemas)",
        "Dentes desgastados ou lascados",
        "Desejo de harmonização do sorriso",
      ]}
      faqs={[
        {
          question: "Lente de contato dental estraga os dentes?",
          answer: "Não. O procedimento é minimamente invasivo e preserva a maior parte da estrutura dental. Em muitos casos, não é necessário desgastar o dente. O tratamento é feito de forma conservadora e segura.",
        },
        {
          question: "Quanto tempo dura a lente de contato dental?",
          answer: "Com os cuidados adequados, as lentes de contato dental podem durar de 10 a 15 anos ou mais. É importante manter uma boa higiene bucal e evitar hábitos que possam danificá-las, como roer unhas ou morder objetos duros.",
        },
        {
          question: "O procedimento causa dor?",
          answer: "O procedimento é indolor. Na maioria dos casos, não é necessário anestesia. Você pode sentir uma leve sensibilidade temporária após a aplicação, que desaparece em poucos dias.",
        },
        {
          question: "Posso clarear os dentes depois de colocar as lentes?",
          answer: "As lentes de contato dental não clareiam. Por isso, se você deseja dentes mais brancos, recomendamos fazer o clareamento dental antes da aplicação das lentes.",
        },
      ]}
      relatedTreatments={[
        { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
        { name: "Ortodontia", href: "/ortodontia-maringa" },
        { name: "Implante Dentário", href: "/implante-dentario-maringa" },
      ]}
    />
  )
}
