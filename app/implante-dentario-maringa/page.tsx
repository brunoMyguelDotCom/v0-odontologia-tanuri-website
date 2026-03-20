import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Implante Dentário em Maringá | Odontologia Tanuri",
  description: "Implante dentário em Maringá com tecnologia de ponta. Recupere seu sorriso com implantes de alta qualidade na Odontologia Tanuri. Agende sua avaliação gratuita!",
  keywords: "implante dentário maringá, implante dental maringá, dentista implante maringá, implante osseointegrado maringá",
}

export default function ImplanteDentarioPage() {
  return (
    <TreatmentPage
      title="Implante Dentário"
      subtitle="Recupere seu sorriso com segurança e naturalidade"
      description="O implante dentário é a solução mais moderna e eficaz para substituir dentes perdidos. Na Odontologia Tanuri, utilizamos tecnologia de ponta para garantir resultados naturais e duradouros."
      longDescription="O implante dentário é um pino de titânio que é inserido no osso maxilar ou mandibular, funcionando como uma raiz artificial. Sobre esse pino, é colocada uma coroa (dente artificial) que se integra perfeitamente ao seu sorriso. O procedimento é realizado com anestesia local, garantindo conforto durante todo o processo. Os implantes têm uma taxa de sucesso superior a 98% e podem durar a vida toda com os cuidados adequados. Na Odontologia Tanuri, o Dr. Rafael Tanuri possui mais de 20 anos de experiência em implantodontia, tendo realizado milhares de procedimentos com sucesso."
      image="/images/implante.jpg"
      benefits={[
        "Aspecto natural e estético",
        "Durabilidade superior (pode durar a vida toda)",
        "Preservação do osso maxilar",
        "Não danifica os dentes vizinhos",
        "Melhora na mastigação e fala",
        "Aumento da autoestima e confiança",
      ]}
      indications={[
        "Perda de um ou mais dentes",
        "Dentes comprometidos sem possibilidade de tratamento",
        "Próteses removíveis desconfortáveis",
        "Desejo de uma solução fixa e definitiva",
        "Pacientes com boa saúde bucal geral",
      ]}
      faqs={[
        {
          question: "O implante dentário dói?",
          answer: "O procedimento é realizado com anestesia local, então você não sentirá dor durante a cirurgia. Após o procedimento, pode haver um leve desconforto que é facilmente controlado com medicamentos prescritos pelo dentista.",
        },
        {
          question: "Quanto tempo dura um implante dentário?",
          answer: "Com os cuidados adequados, um implante dentário pode durar a vida toda. A taxa de sucesso é superior a 98% após 10 anos. A higiene bucal adequada e visitas regulares ao dentista são essenciais para a longevidade do implante.",
        },
        {
          question: "Quanto custa um implante dentário em Maringá?",
          answer: "O valor do implante dentário varia de acordo com o caso de cada paciente. Agende uma avaliação gratuita para recebermos você e apresentarmos um orçamento personalizado.",
        },
        {
          question: "Qual é o tempo de recuperação após o implante?",
          answer: "A recuperação inicial leva cerca de 7 a 10 dias. O período de osseointegração (quando o implante se funde ao osso) leva de 3 a 6 meses, dependendo do caso.",
        },
      ]}
      relatedTreatments={[
        { name: "Prótese Dentária", href: "/protese-dentaria-maringa" },
        { name: "Lente de Contato Dental", href: "/lente-de-contato-dental-maringa" },
        { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
      ]}
    />
  )
}
