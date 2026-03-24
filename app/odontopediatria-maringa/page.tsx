import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Odontopediatria em Maringá | Odontologia Tanuri",
  description: "Atendimento odontológico infantil em Maringá com cuidado, paciência e prevenção. Cuide do sorriso das crianças.",
  keywords: "odontopediatria maringá, dentista infantil maringá, odontologia infantil",
}

export default function OdontopediatriaPage() {
  return (
    <TreatmentPage
      title="Odontopediatria"
      subtitle="Cuidado especializado para o sorriso das crianças"
      description="A odontopediatria cuida da saúde bucal infantil com atenção especial ao conforto e adaptação das crianças."
      longDescription="A odontopediatria é a área da odontologia dedicada ao cuidado da saúde bucal de bebês, crianças e adolescentes. O objetivo é prevenir problemas, orientar os pais e proporcionar uma experiência positiva para a criança no consultório. Na Odontologia Tanuri, oferecemos um atendimento humanizado, criando um ambiente acolhedor e seguro para o desenvolvimento de hábitos saudáveis."
      image="/images/pediatria.jpg"
      benefits={[
        "Prevenção de cáries",
        "Acompanhamento do crescimento dental",
        "Educação em higiene bucal",
        "Ambiente acolhedor",
        "Redução do medo do dentista",
      ]}
      indications={[
        "Primeira consulta odontológica",
        "Prevenção de cáries",
        "Acompanhamento infantil",
        "Orientação aos pais",
        "Hábitos bucais inadequados",
      ]}
      faqs={[
        {
          question: "Quando levar a criança ao dentista pela primeira vez?",
          answer: "O ideal é a partir do nascimento dos primeiros dentes ou até 1 ano de idade."
        },
        {
          question: "Como evitar o medo do dentista?",
          answer: "Com visitas regulares e um ambiente acolhedor, a criança se adapta naturalmente."
        },
      ]}
      relatedTreatments={[
        { name: "Ortodontia", href: "/ortodontia-maringa" },
      ]}
    />
  )
}