export const contact = {
  email: "snseducation8@gmail.com",
  whatsappDisplay: "+91 81411 37426",
  whatsappNumber: "918141137426",
  instagramHandle: "sns_education1",
  instagramUrl: "https://www.instagram.com/sns_education1",
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const defaultWhatsappMessage =
  "Olá SNS Education! Gostaria de saber mais sobre como estudar na Parul University."

export const navItems = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cursos", href: "#cursos" },
  { label: "Processo", href: "#processo" },
  { label: "Custos", href: "#custos" },
  { label: "Perguntas", href: "#perguntas" },
]

export type Faculty =
  | "Engenharia & Tecnologia"
  | "Computação"
  | "Gestão & Comércio"
  | "Saúde & Medicina"
  | "Design & Arquitectura"
  | "Direito"
  | "Ciências & Agricultura"
  | "Hotelaria & Turismo"

export type Level = "Licenciatura" | "Mestrado"

export type Course = {
  name: string
  short: string
  faculty: Faculty
  level: Level
  duration: string
}

export const faculties: Faculty[] = [
  "Engenharia & Tecnologia",
  "Computação",
  "Gestão & Comércio",
  "Saúde & Medicina",
  "Design & Arquitectura",
  "Direito",
  "Ciências & Agricultura",
  "Hotelaria & Turismo",
]

export const courses: Course[] = [
  { name: "Engenharia Informática (Computer Science)", short: "B.Tech CSE", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Inteligência Artificial & Ciência de Dados", short: "B.Tech AI & DS", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Engenharia Mecânica", short: "B.Tech Mechanical", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Engenharia Civil", short: "B.Tech Civil", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Engenharia Eléctrica", short: "B.Tech Electrical", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Engenharia Electrónica e Comunicações", short: "B.Tech ECE", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Engenharia Química", short: "B.Tech Chemical", faculty: "Engenharia & Tecnologia", level: "Licenciatura", duration: "4 anos" },
  { name: "Mestrado em Engenharia", short: "M.Tech", faculty: "Engenharia & Tecnologia", level: "Mestrado", duration: "2 anos" },
  { name: "Aplicações Informáticas", short: "BCA", faculty: "Computação", level: "Licenciatura", duration: "3 anos" },
  { name: "Mestrado em Aplicações Informáticas", short: "MCA", faculty: "Computação", level: "Mestrado", duration: "2 anos" },
  { name: "Gestão de Empresas", short: "BBA", faculty: "Gestão & Comércio", level: "Licenciatura", duration: "3 anos" },
  { name: "Comércio e Contabilidade", short: "B.Com", faculty: "Gestão & Comércio", level: "Licenciatura", duration: "3 anos" },
  { name: "Mestrado em Gestão de Empresas", short: "MBA", faculty: "Gestão & Comércio", level: "Mestrado", duration: "2 anos" },
  { name: "Medicina", short: "MBBS", faculty: "Saúde & Medicina", level: "Licenciatura", duration: "5,5 anos" },
  { name: "Farmácia", short: "B.Pharm", faculty: "Saúde & Medicina", level: "Licenciatura", duration: "4 anos" },
  { name: "Fisioterapia", short: "BPT", faculty: "Saúde & Medicina", level: "Licenciatura", duration: "4,5 anos" },
  { name: "Enfermagem", short: "B.Sc Nursing", faculty: "Saúde & Medicina", level: "Licenciatura", duration: "4 anos" },
  { name: "Design", short: "B.Des", faculty: "Design & Arquitectura", level: "Licenciatura", duration: "4 anos" },
  { name: "Arquitectura", short: "B.Arch", faculty: "Design & Arquitectura", level: "Licenciatura", duration: "5 anos" },
  { name: "Direito (Artes + Direito)", short: "BA LLB", faculty: "Direito", level: "Licenciatura", duration: "5 anos" },
  { name: "Direito (Gestão + Direito)", short: "BBA LLB", faculty: "Direito", level: "Licenciatura", duration: "5 anos" },
  { name: "Agronomia", short: "B.Sc Agriculture", faculty: "Ciências & Agricultura", level: "Licenciatura", duration: "4 anos" },
  { name: "Biotecnologia", short: "B.Sc Biotechnology", faculty: "Ciências & Agricultura", level: "Licenciatura", duration: "3 anos" },
  { name: "Microbiologia", short: "B.Sc Microbiology", faculty: "Ciências & Agricultura", level: "Licenciatura", duration: "3 anos" },
  { name: "Gestão Hoteleira e Turismo", short: "BHMCT", faculty: "Hotelaria & Turismo", level: "Licenciatura", duration: "4 anos" },
]

export type FaqCategory = "Geral" | "Admissão" | "Custos & Bolsa" | "Visto & Viagem" | "Vida na Índia"

export type FaqItem = {
  category: FaqCategory
  question: string
  answer: string
}

/**
 * Edite livremente as perguntas e respostas abaixo.
 * Cada item aparece automaticamente na secção "Perguntas frequentes" do site.
 */
export const faqs: FaqItem[] = [
  {
    category: "Geral",
    question: "O que é a SNS Education?",
    answer:
      "A SNS Education (Student Next Step) é uma agência criada para ajudar estudantes moçambicanos a estudar no estrangeiro. Acompanhamos cada estudante desde a escolha do curso até à chegada à universidade.",
  },
  {
    category: "Geral",
    question: "Preciso de pagar alguma taxa à agência?",
    answer:
      "Não. Ao candidatar-se através da SNS Education, não paga nenhuma taxa à agência. Os únicos pagamentos são os 100 USD para emitir o Offer Letter e os valores pagos à universidade (propinas e acomodação).",
  },
  {
    category: "Geral",
    question: "Com que universidade trabalham neste momento?",
    answer:
      "Neste momento estamos focados na Parul University, em Vadodara, no estado de Gujarat, Índia — uma universidade privada reconhecida, com muitos estudantes internacionais e uma grande variedade de cursos.",
  },
  {
    category: "Geral",
    question: "A SNS Education é de confiança?",
    answer:
      "Sim. Trabalhamos com total transparência: explicamos cada passo e cada pagamento antes de o fazer, e estamos sempre disponíveis por WhatsApp, e-mail e Instagram para responder às suas dúvidas em tempo real.",
  },
  {
    category: "Admissão",
    question: "Como começo a minha candidatura?",
    answer:
      "Envie uma mensagem pelo WhatsApp ou e-mail com os seus dados (nome completo, contacto, curso pretendido e nível de escolaridade). A nossa equipa responde-lhe e orienta todo o processo.",
  },
  {
    category: "Admissão",
    question: "Que documentos preciso de enviar?",
    answer:
      "Normalmente: cópia do passaporte (ou BI, se ainda não tiver passaporte), certificado e notas da 12ª classe (ou do último nível concluído) e uma fotografia tipo passe. Para mestrado, também o certificado e notas da licenciatura. Confirmaremos a lista exacta para o seu curso.",
  },
  {
    category: "Admissão",
    question: "Qual é a diferença entre Offer Letter e Admission Letter?",
    answer:
      "O Offer Letter é a oferta inicial da universidade: mostra o curso, o valor das propinas e os requisitos. A Admission Letter (carta de admissão) é a confirmação final da sua vaga, emitida depois do pagamento de 50% das propinas e 50% da acomodação.",
  },
  {
    category: "Admissão",
    question: "Quanto tempo demora a receber o Offer Letter?",
    answer:
      "Depois de recebermos os seus dados e o pagamento de 100 USD, o Offer Letter costuma ser emitido em poucos dias úteis. Mantemo-lo informado durante todo o processo.",
  },
  {
    category: "Admissão",
    question: "Posso mudar de curso depois de receber o Offer Letter?",
    answer:
      "Fale connosco antes de fazer qualquer pagamento à universidade. Ajudamo-lo a escolher o curso certo desde o início para evitar mudanças, e verificamos consigo as opções disponíveis caso precise de alterar.",
  },
  {
    category: "Custos & Bolsa",
    question: "Para que servem os 100 USD?",
    answer:
      "Os 100 USD são para a emissão do seu Offer Letter. É o único pagamento antes de conhecer os valores exactos do curso que escolheu.",
  },
  {
    category: "Custos & Bolsa",
    question: "Como funciona a bolsa de 50%?",
    answer:
      "Ao candidatar-se através da SNS Education, tem acesso a uma bolsa de estudo de 50%. O valor final, já com a bolsa, aparece no seu Offer Letter, para que saiba exactamente quanto vai pagar.",
  },
  {
    category: "Custos & Bolsa",
    question: "Quanto custa o curso que eu quero?",
    answer:
      "O valor depende do curso escolhido. O seu Offer Letter mostra o valor exacto das propinas e da acomodação. Se quiser uma estimativa antes, envie-nos uma mensagem com o curso pretendido.",
  },
  {
    category: "Custos & Bolsa",
    question: "O bilhete de avião é mesmo grátis?",
    answer:
      "Existe a possibilidade de obter o bilhete de avião gratuito, dependendo das condições em vigor no momento da sua candidatura. Explicamos-lhe tudo pessoalmente — fale connosco para saber se é elegível.",
  },
  {
    category: "Custos & Bolsa",
    question: "O que pago para garantir a carta de admissão?",
    answer:
      "Depois de aceitar o Offer Letter, paga 50% do valor das propinas e 50% do valor da acomodação. Este pagamento garante a emissão da sua carta de admissão.",
  },
  {
    category: "Visto & Viagem",
    question: "A SNS Education ajuda a tratar do visto?",
    answer:
      "Sim. Orientamo-lo na preparação dos documentos e no pedido de visto de estudante para a Índia, passo a passo.",
  },
  {
    category: "Visto & Viagem",
    question: "Ajudam a comprar o bilhete de avião?",
    answer:
      "Sim. Ajudamos a encontrar e comprar o bilhete mais adequado para a data de início das aulas.",
  },
  {
    category: "Visto & Viagem",
    question: "Alguém me acompanha até chegar à universidade?",
    answer:
      "Sim. Acompanhamos todo o percurso até à sua chegada à Parul University, para que nunca se sinta sozinho nesta nova etapa.",
  },
  {
    category: "Vida na Índia",
    question: "As aulas são em inglês?",
    answer:
      "Sim, os cursos para estudantes internacionais são leccionados em inglês. Se tiver dúvidas sobre o seu nível de inglês, fale connosco.",
  },
  {
    category: "Vida na Índia",
    question: "Onde vou morar?",
    answer:
      "A acomodação é dentro do campus, organizada pela universidade. Por isso, parte do pagamento inicial (50%) é dedicado à acomodação.",
  },
  {
    category: "Vida na Índia",
    question: "Há outros estudantes moçambicanos na Parul University?",
    answer:
      "A Parul University recebe estudantes de muitos países, incluindo de África. Fale connosco para saber mais sobre a comunidade de estudantes moçambicanos e lusófonos no campus.",
  },
]

export const faqCategories: FaqCategory[] = [
  "Geral",
  "Admissão",
  "Custos & Bolsa",
  "Visto & Viagem",
  "Vida na Índia",
]
