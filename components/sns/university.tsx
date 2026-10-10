import Image from "next/image"
import { Building2, Globe2, Languages, MapPin } from "lucide-react"
import { SectionHeading } from "./section-heading"

const highlights = [
  { icon: MapPin, title: "Localização", text: "Vadodara, Gujarat — Índia" },
  { icon: Languages, title: "Língua de ensino", text: "Cursos leccionados em inglês" },
  { icon: Building2, title: "Acomodação", text: "Residência dentro do campus" },
  { icon: Globe2, title: "Comunidade", text: "Estudantes de dezenas de países" },
]

export function University() {
  return (
    <section aria-labelledby="universidade-titulo" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
      <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted">
          <Image
            src="/images/campus.png"
            alt="Campus universitário moderno com jardins e estudantes"
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 rounded-xl bg-card/95 px-4 py-3 backdrop-blur sm:bottom-6 sm:left-6 sm:max-w-xs sm:rounded-2xl sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">Parceiro actual</p>
            <p className="mt-0.5 font-serif text-xl text-foreground sm:mt-1 sm:text-2xl">Parul University</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            eyebrow="A universidade"
            title={<span id="universidade-titulo">Estude na Parul University, na Índia.</span>}
            description="Uma universidade privada reconhecida, com um campus moderno, uma grande oferta de cursos e uma comunidade internacional acolhedora. É aqui que concentramos hoje toda a nossa experiência."
          />
          <dl className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:gap-4 sm:p-5">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-foreground">{title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
