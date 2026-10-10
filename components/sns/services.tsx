import Image from "next/image"
import { Compass, FileCheck2, GraduationCap, Plane, Stamp, Users } from "lucide-react"
import { SectionHeading } from "./section-heading"

const services = [
  {
    icon: Compass,
    title: "Orientação na escolha do curso",
    text: "Ajudamo-lo a escolher o curso certo de acordo com os seus objectivos, notas e orçamento.",
  },
  {
    icon: FileCheck2,
    title: "Offer Letter e carta de admissão",
    text: "Tratamos da sua candidatura junto da universidade até receber a carta de admissão oficial.",
  },
  {
    icon: GraduationCap,
    title: "Bolsa de estudo de 50%",
    text: "Candidatando-se connosco, tem acesso a uma bolsa de 50% e não paga nenhuma taxa de agência.",
  },
  {
    icon: Stamp,
    title: "Apoio no visto de estudante",
    text: "Orientamos a preparação dos documentos e o pedido de visto, sem complicações.",
  },
  {
    icon: Plane,
    title: "Compra de bilhetes",
    text: "Ajudamos a comprar o bilhete de avião — com possibilidade de bilhete grátis, sujeito a condições.",
  },
  {
    icon: Users,
    title: "Acompanhamento até à chegada",
    text: "Seguimos consigo durante toda a viagem até chegar em segurança à Parul University.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              tone="inverted"
              eyebrow="O que oferecemos"
              title="Tudo o que precisa, num só lugar."
              description="Do primeiro contacto ao primeiro dia de aulas, cuidamos de cada detalhe para que se sinta seguro em cada decisão."
            />
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-3xl lg:col-span-5 lg:block">
            <Image
              src="/images/journey.png"
              alt="Dois estudantes com malas a caminhar num aeroporto"
              fill
              sizes="(min-width: 1024px) 28rem, 0px"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="group flex gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5 transition-colors hover:bg-primary-foreground/[0.08] sm:flex-col sm:gap-6 sm:rounded-3xl sm:p-8"
            >
              <div className="flex shrink-0 items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground sm:size-12 sm:rounded-2xl">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="hidden font-serif text-2xl text-primary-foreground/30 sm:inline" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70 sm:text-base">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
