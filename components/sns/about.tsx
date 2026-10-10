import { Eye, HeartHandshake, ShieldCheck } from "lucide-react"
import { SectionHeading } from "./section-heading"

const values = [
  {
    icon: ShieldCheck,
    title: "Transparência",
    text: "Explicamos cada passo e cada pagamento antes de avançar. Sem surpresas e sem custos escondidos.",
  },
  {
    icon: HeartHandshake,
    title: "Proximidade",
    text: "Falamos a sua língua e conhecemos a sua realidade. Estamos sempre disponíveis para si e para a sua família.",
  },
  {
    icon: Eye,
    title: "Acompanhamento",
    text: "Não o deixamos sozinho depois da candidatura. Seguimos consigo até chegar à universidade.",
  },
]

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
      <div className="grid gap-8 md:gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Quem somos"
            title={
              <>
                Uma ponte segura entre Moçambique e o seu <em className="text-primary">futuro</em>.
              </>
            }
          />
        </div>
        <div className="flex flex-col gap-5 text-base leading-relaxed md:gap-6 md:text-lg text-muted-foreground lg:col-span-7">
          <p className="text-pretty">
            A <strong className="font-semibold text-foreground">SNS Education — Student Next Step</strong> nasceu com um
            objectivo claro: ajudar estudantes moçambicanos a embarcar na nova jornada da vida, estudando no
            estrangeiro com confiança.
          </p>
          <p className="text-pretty">
            Sabemos que estudar fora levanta muitas perguntas — sobre cursos, custos, documentos, visto e viagem. Por
            isso, tratamos de tudo consigo, passo a passo, para que a única preocupação seja preparar-se para esta
            nova etapa. Neste momento, estamos focados na{" "}
            <strong className="font-semibold text-foreground">Parul University</strong>, na Índia.
          </p>
        </div>
      </div>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-16 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4 bg-card p-5 md:flex-col md:gap-5 md:p-10">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary md:size-12 md:rounded-2xl">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1.5 md:gap-5">
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
