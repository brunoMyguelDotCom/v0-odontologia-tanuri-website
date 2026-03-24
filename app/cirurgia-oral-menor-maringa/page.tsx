import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Extração de Siso em Maringá | Odontologia Tanuri",
  description: "Extração de siso em Maringá com segurança e conforto. Procedimentos realizados por profissionais experientes.",
  keywords: "extração de siso maringá, dente do juízo maringá, cirurgia oral menor maringá",
}

export default function CirurgiaOralPage() {
  return (
    <TreatmentPage
      title="Cirurgia Oral Menor (Terceiro molar)"
      subtitle="Remoção de siso com segurança e conforto"
      description="Realizamos procedimentos cirúrgicos odontológicos simples com foco em segurança, conforto e recuperação rápida."
      longDescription="A cirurgia oral menor inclui procedimentos como a extração de dentes do siso (terceiro molar). Esses dentes podem causar dor, inflamação e desalinhamento quando não possuem espaço adequado para nascer. Na Odontologia Tanuri, utilizamos técnicas modernas e anestesia local para garantir um procedimento seguro e tranquilo, com orientações completas para o pós-operatório."
      image="/images/siso.jpg"
      benefits={[
        "Alívio da dor",
        "Prevenção de infecções",
        "Procedimento seguro",
        "Recuperação orientada",
        "Melhora da saúde bucal",
      ]}
      indications={[
        "Dor no siso",
        "Inflamação gengival",
        "Dentes inclusos",
        "Falta de espaço na arcada",
        "Indicação preventiva",
      ]}
      faqs={[
        {
          question: "A extração de siso dói?",
          answer: "Não. O procedimento é feito com anestesia local, garantindo conforto durante toda a cirurgia."
        },
        {
          question: "Quanto tempo leva a recuperação?",
          answer: "Geralmente entre 3 a 7 dias, seguindo corretamente as orientações do dentista."
        },
      ]}
      relatedTreatments={[
        { name: "Implantes Dentários", href: "/implantes-dentarios-maringa" },
      ]}
    />
  )
}