import Image from "next/image"
import { ArrowRight, BadgePercent, Check, MessageCircle, Plane } from "lucide-react"
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site-data"

const assurances = ["0 USD de taxa de agência", "Bolsa de estudo de 50%", "Acompanhamento até à chegada"]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-16 md:gap-14 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Candidaturas abertas · Parul University, Índia
          </span>

          <h1 className="font-serif text-[2.75rem] leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl">
            O seu próximo passo começa <em className="text-primary">aqui</em>.
          </h1>

          <p className="max-w-xl text-base leading-relaxed sm:text-lg text-pretty text-muted-foreground">
            Ajudamos estudantes moçambicanos a estudar no estrangeiro com segurança e tranquilidade — da escolha do
            curso ao visto, ao bilhete e à chegada à universidade. Sem custos de agência.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#processo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Como obter a carta de admissão
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver cursos disponíveis
            </a>
          </div>

          <ul className="flex flex-col gap-2.5 sm:flex-row sm:pt-2 sm:flex-wrap sm:gap-x-6">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted lg:ml-auto lg:max-w-lg">
            <Image
              src="/images/hero-student.png"
              alt="Estudante moçambicana sorridente com passaporte num campus universitário"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-8 hidden items-center sm:flex gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-lg shadow-primary/5 backdrop-blur sm:left-4 lg:-left-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <BadgePercent className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-2xl leading-none text-foreground">50%</p>
              <p className="mt-1 text-xs text-muted-foreground">Bolsa de estudo</p>
            </div>
          </div>

          <div className="absolute bottom-24 hidden items-center sm:flex gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-lg shadow-primary/5 backdrop-blur sm:right-4 lg:-right-4">
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
              <Plane className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Bilhete grátis</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Possível, sujeito a condições</p>
            </div>
          </div>

          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 flex w-[calc(100%-2rem)] max-w-xs sm:bottom-6 -translate-x-1/2 items-center gap-3 rounded-2xl bg-primary p-3 pr-5 text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:-translate-y-0.5 lg:left-auto lg:right-1/2 lg:translate-x-1/2"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
              <MessageCircle className="size-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium">Dúvidas? Respondemos já.</span>
              <span className="text-xs text-primary-foreground/70">WhatsApp em tempo real</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
