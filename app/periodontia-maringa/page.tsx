import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Tratamento de Gengiva em Maringá | Odontologia Tanuri",
  description: "Tratamento de gengivite e periodontite em Maringá. Cuide da saúde da sua gengiva com especialistas.",
  keywords: "periodontia maringá, gengivite maringá, tratamento gengival maringá",
}

export default function PeriodontiaPage() {
  return (
    <TreatmentPage
      title="Periodontia (Tratamentos gengivais)"
      subtitle="Saúde da gengiva e suporte dos dentes"
      description="A periodontia trata doenças gengivais que podem comprometer a saúde bucal e levar à perda dentária."
      longDescription="A periodontia é responsável pelo diagnóstico e tratamento de doenças que afetam a gengiva e os tecidos de suporte dos dentes. Problemas como gengivite e periodontite podem evoluir silenciosamente e causar perda dentária se não tratados. Na Odontologia Tanuri, realizamos tratamentos eficazes para controlar a inflamação, eliminar bactérias e preservar a saúde bucal."
      image="/images/periodontia.jpg"
      benefits={[
        "Controle da inflamação gengival",
        "Prevenção da perda dentária",
        "Melhora do hálito",
        "Saúde bucal completa",
        "Tratamento eficaz e seguro",
      ]}
      indications={[
        "Sangramento gengival",
        "Mau hálito",
        "Gengiva inchada",
        "Retração gengival",
        "Mobilidade dentária",
      ]}
      faqs={[
        {
          question: "Gengiva sangrando é normal?",
          answer: "Não. É um sinal de inflamação e deve ser avaliado por um dentista."
        },
        {
          question: "Periodontite tem cura?",
          answer: "Pode ser controlada com tratamento adequado e manutenção periódica."
        },
      ]}
      relatedTreatments={[
        { name: "Implantes Dentários", href: "/implantes-dentarios-maringa" },
      ]}
    />
  )
}