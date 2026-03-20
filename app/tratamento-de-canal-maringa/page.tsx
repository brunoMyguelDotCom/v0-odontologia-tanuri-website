import { Metadata } from "next"
import { TreatmentPage } from "@/components/treatment-page"

export const metadata: Metadata = {
  title: "Tratamento de Canal em Maringá | Odontologia Tanuri",
  description: "Tratamento de canal em Maringá sem dor e com tecnologia moderna. Salve seu dente na Odontologia Tanuri. Agende sua avaliação!",
  keywords: "tratamento de canal maringá, endodontia maringá, canal dentário maringá, dor de dente maringá",
}

export default function TratamentoDeCanalPage() {
  return (
    <TreatmentPage
      title="Tratamento de Canal"
      subtitle="Salve seu dente com tecnologia e conforto"
      description="O tratamento de canal, ou endodontia, é um procedimento que remove a polpa dental infectada, salvando dentes que de outra forma precisariam ser extraídos. Na Odontologia Tanuri, utilizamos tecnologia moderna para um tratamento eficaz e confortável."
      longDescription="O tratamento de canal é necessário quando a polpa dental (nervo do dente) está inflamada ou infectada, geralmente devido a cáries profundas, fraturas ou traumas. O procedimento consiste em remover a polpa danificada, limpar e desinfectar os canais radiculares, e preenchê-los com um material biocompatível. Ao contrário do que muitos pensam, o tratamento de canal alivia a dor, não a causa. Com anestesia adequada e técnicas modernas, o procedimento é confortável. Na Odontologia Tanuri, utilizamos microscópio operatório e instrumentos rotatórios de última geração para maior precisão e eficácia."
      image="/images/canal.jpg"
      benefits={[
        "Preservação do dente natural",
        "Alívio da dor e desconforto",
        "Prevenção de infecções graves",
        "Procedimento seguro e eficaz",
        "Recuperação rápida",
        "Custo menor que extrair e repor o dente",
      ]}
      indications={[
        "Dor de dente intensa e persistente",
        "Sensibilidade prolongada ao frio ou calor",
        "Inchaço na gengiva próximo ao dente",
        "Escurecimento do dente",
        "Cárie profunda que atingiu o nervo",
        "Trauma dental",
      ]}
      faqs={[
        {
          question: "O tratamento de canal dói?",
          answer: "Com a anestesia moderna, o tratamento de canal é praticamente indolor. Na verdade, ele alivia a dor causada pela infecção. Você pode sentir um leve desconforto nos dias seguintes, controlável com analgésicos.",
        },
        {
          question: "Quantas sessões são necessárias?",
          answer: "Geralmente, o tratamento de canal pode ser realizado em uma única sessão. Casos mais complexos podem exigir duas ou mais sessões. O tempo de cada sessão varia de 30 minutos a 1 hora e meia.",
        },
        {
          question: "O dente fica fraco após o tratamento de canal?",
          answer: "O dente pode ficar mais frágil após o tratamento, por isso geralmente é indicada a colocação de uma coroa para protegê-lo. Com os cuidados adequados, o dente tratado pode durar a vida toda.",
        },
        {
          question: "É melhor fazer canal ou extrair o dente?",
          answer: "Sempre que possível, é melhor preservar o dente natural. O tratamento de canal permite salvar dentes que de outra forma seriam perdidos, evitando a necessidade de implantes ou próteses.",
        },
      ]}
      relatedTreatments={[
        { name: "Prótese Dentária", href: "/protese-dentaria-maringa" },
        { name: "Implante Dentário", href: "/implante-dentario-maringa" },
        { name: "Clareamento Dental", href: "/clareamento-dental-maringa" },
      ]}
    />
  )
}
