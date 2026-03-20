import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Clareamento Dental em Maringá | Odontologia Tanuri",
  description: "Clareamento dental em Maringá com resultados seguros e eficazes. Tenha dentes mais brancos na Odontologia Tanuri. Agende sua avaliação!",
  keywords: "clareamento dental maringá, branqueamento dental maringá, dentes brancos maringá, clareamento a laser maringá",
}

export default function ClareamentoDentalPage() {
  return (
    <TreatmentPage
      title="Clareamento Dental"
      subtitle="Dentes mais brancos com segurança e eficácia"
      description="O clareamento dental é o procedimento estético mais procurado na odontologia. Na Odontologia Tanuri, utilizamos técnicas modernas para você conquistar dentes mais brancos com conforto e segurança."
      longDescription="O clareamento dental é um procedimento que utiliza agentes clareadores para remover manchas e iluminar a cor natural dos dentes. Oferecemos duas modalidades: o clareamento em consultório, realizado pelo dentista com gel de alta concentração e luz de LED, e o clareamento caseiro, feito em casa com moldeiras personalizadas e gel de menor concentração. Ambos os métodos são seguros e eficazes quando supervisionados por um profissional. O Dr. Rafael Tanuri avalia cada caso individualmente para indicar o melhor tratamento para você."
      image="/images/clareamento.jpg"
      benefits={[
        "Dentes visivelmente mais brancos",
        "Procedimento seguro e supervisionado",
        "Resultados rápidos (consultório) ou graduais (caseiro)",
        "Aumento da autoestima",
        "Rejuvenescimento do sorriso",
        "Sem danos ao esmalte dental",
      ]}
      indications={[
        "Dentes amarelados ou escurecidos",
        "Manchas causadas por alimentos e bebidas",
        "Manchas de cigarro",
        "Escurecimento natural devido ao envelhecimento",
        "Preparação para outros procedimentos estéticos",
        "Desejo de um sorriso mais branco",
      ]}
      faqs={[
        {
          question: "O clareamento dental enfraquece os dentes?",
          answer: "Não. Quando realizado corretamente por um profissional, o clareamento dental não danifica nem enfraquece os dentes. Os produtos utilizados são seguros e aprovados para uso odontológico.",
        },
        {
          question: "Quanto tempo dura o resultado do clareamento?",
          answer: "O resultado pode durar de 1 a 3 anos, dependendo dos hábitos de higiene e da alimentação do paciente. Evitar alimentos e bebidas que mancham os dentes ajuda a prolongar o efeito.",
        },
        {
          question: "O clareamento causa sensibilidade?",
          answer: "Algumas pessoas podem sentir sensibilidade temporária durante e após o tratamento. Utilizamos produtos dessensibilizantes para minimizar este efeito e garantir conforto.",
        },
        {
          question: "Qual a diferença entre clareamento caseiro e de consultório?",
          answer: "O clareamento em consultório é mais rápido (1 a 3 sessões) e utiliza gel de alta concentração. O caseiro é feito em casa com moldeiras e gel de menor concentração, com duração aproximada de 2 a 3 semanas.",
        },
      ]}
      relatedTreatments={[
        { name: "Lente de Contato Dental", href: "/lente-de-contato-dental-maringa" },
        { name: "Ortodontia", href: "/ortodontia-maringa" },
        { name: "Prótese Dentária", href: "/protese-dentaria-maringa" },
      ]}
    />
  )
}