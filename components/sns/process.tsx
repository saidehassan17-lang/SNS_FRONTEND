import { Check, FileText, MessageCircle } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { contact, whatsappLink } from "@/lib/site-data"

const steps = [
  {
    title: "Envie-nos os seus dados",
    payment: null,
    text: "Mande uma mensagem pelo WhatsApp ou e-mail com os seus dados pessoais, o curso pretendido e os seus documentos académicos.",
    details: ["Nome completo e contacto", "Curso que deseja estudar", "Certificado e notas", "Cópia do passaporte ou BI"],
  },
  {
    title: "Pague 100 USD e receba o Offer Letter",
    payment: "100 USD",
    text: "Após o pagamento de 100 USD, tratamos da emissão do seu Offer Letter junto da Parul University.",
    details: ["Oferta oficial da universidade", "Bolsa de 50% já aplicada", "Sem taxa de agência"],
  },
  {
    title: "Analise o Offer Letter connosco",
    payment: null,
    text: "Com o Offer Letter em mãos, fica a saber exactamente quanto vai pagar pelo curso escolhido e quais os requisitos da universidade a cumprir antes de chegar.",
    details: ["Valor das propinas", "Valor da acomodação", "Requisitos da universidade"],
  },
  {
    title: "Pague 50% das propinas e 50% da acomodação",
    payment: "50% + 50%",
    text: "Este pagamento é feito para garantir a sua vaga. Em seguida, recebe a sua carta de admissão (Admission Letter) oficial.",
    details: ["50% do valor das propinas", "50% do valor da acomodação", "Carta de admissão garantida"],
  },
  {
    title: "Visto, bilhete e viagem",
    payment: null,
    text: "Com a carta de admissão, ajudamo-lo a tratar do visto de estudante e a comprar o bilhete — com possibilidade de bilhete grátis.",
    details: ["Apoio no pedido de visto", "Compra do bilhete de avião", "Preparação para a viagem"],
  },
  {
    title: "Chegada à Parul University",
    payment: null,
    text: "Acompanhamo-lo até chegar à universidade. A partir daqui, começa a sua nova jornada.",
    details: ["Acompanhamento até ao campus", "Apoio nos primeiros dias", "Contacto sempre disponível"],
  },
]

export function Process() {
  return (
    <section id="processo" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
      <div className="grid gap-10 md:gap-16 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Passo a passo"
              title="Como obter a sua carta de admissão."
              description="Um processo simples e claro, em seis etapas. Em cada uma, sabe exactamente o que fazer e quanto pagar."
            />
            <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FileText className="size-4 text-primary" aria-hidden="true" />
                Pronto para começar?
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Envie os seus dados hoje e damos início ao processo.
              </p>
              <a
                href={whatsappLink(
                  "Olá SNS Education! Quero iniciar a minha candidatura.\n\nNome completo:\nCurso pretendido:\nÚltimo nível concluído:\nCidade:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Enviar dados por WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent("Candidatura — Parul University")}`}
                className="text-center text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                ou por e-mail: {contact.email}
              </a>
            </div>
          </div>
        </div>

        <ol className="relative flex min-w-0 flex-col lg:col-span-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-3 pb-6 last:pb-0 sm:gap-6 md:gap-8 md:pb-12">
              {i < steps.length - 1 ? (
                <span aria-hidden="true" className="absolute top-11 bottom-0 left-4 w-px bg-border sm:top-14 sm:left-6" />
              ) : null}
              <span
                aria-hidden="true"
                className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card font-serif text-base text-primary sm:size-12 sm:text-xl"
              >
                {i + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-2xl border border-border bg-card p-5 sm:gap-4 sm:rounded-3xl sm:p-6 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <h3 className="text-lg font-semibold text-foreground text-pretty sm:text-xl">
                    <span className="sr-only">Passo {i + 1}: </span>
                    {step.title}
                  </h3>
                  {step.payment ? (
                    <span className="w-fit shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Pagamento: {step.payment}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{step.text}</p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 sm:pt-1">
                  {step.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <Check className="size-3 text-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
