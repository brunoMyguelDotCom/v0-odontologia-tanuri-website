import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Ortopedia Facial em Maringá | Odontologia Tanuri",
  description: "Ortopedia facial em Maringá para corrigir o crescimento ósseo e melhorar a harmonia do rosto. Avaliação especializada.",
  keywords: "ortopedia facial maringá, ortopedia dos maxilares, crescimento facial crianças maringá",
}

export default function OrtopediaFacialPage() {
  return (
    <TreatmentPage
      title="Ortopedia Facial"
      subtitle="Correção do crescimento ósseo e harmonia facial"
      description="A ortopedia facial atua no desenvolvimento correto dos ossos da face, principalmente em crianças e adolescentes."
      longDescription="A ortopedia facial é responsável por guiar o crescimento dos ossos da face, corrigindo alterações estruturais ainda na fase de desenvolvimento. Com o uso de aparelhos ortopédicos, é possível prevenir problemas mais complexos no futuro, como desalinhamentos severos e cirurgias. O tratamento é mais eficaz quando iniciado na infância, mas também pode trazer benefícios em outras fases da vida."
      image="/images/ortopedia.jpg"
      benefits={[
        "Correção do crescimento ósseo",
        "Prevenção de problemas futuros",
        "Melhora da estética facial",
        "Tratamentos menos invasivos",
        "Melhora da respiração e mastigação",
      ]}
      indications={[
        "Crianças em fase de crescimento",
        "Mordida desalinhada",
        "Respiração bucal",
        "Assimetria facial",
        "Problemas de desenvolvimento ósseo",
      ]}
      faqs={[
        {
          question: "Qual a idade ideal para iniciar?",
          answer: "O ideal é iniciar durante a infância, quando os ossos estão em desenvolvimento."
        },
        {
          question: "Substitui o aparelho ortodôntico?",
          answer: "Não necessariamente, mas pode reduzir ou facilitar tratamentos futuros."
        },
      ]}
      relatedTreatments={[
        { name: "Ortodontia", href: "/ortodontia-maringa" },
      ]}
    />
  )
}