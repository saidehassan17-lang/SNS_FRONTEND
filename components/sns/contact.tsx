"use client"

import { useState } from "react"
import { ArrowUpRight, AtSign, Mail, MessageCircle, Send } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { contact, courses, whatsappLink } from "@/lib/site-data"

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: whatsappLink(),
    note: "Resposta mais rápida",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Para enviar documentos",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: `@${contact.instagramHandle}`,
    href: contact.instagramUrl,
    note: "Novidades e testemunhos",
  },
]

const inputClass =
  "h-12 w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.06] px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/30 focus-visible:outline-none"

export function Contact() {
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [level, setLevel] = useState("12ª classe")
  const [city, setCity] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const message = [
      "Olá SNS Education! Quero iniciar a minha candidatura à Parul University.",
      "",
      `Nome completo: ${name}`,
      `Curso pretendido: ${course || "Ainda não decidi"}`,
      `Último nível concluído: ${level}`,
      `Cidade: ${city}`,
    ].join("\n")
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contacto" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
        <div className="grid gap-14 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <SectionHeading
              tone="inverted"
              eyebrow="Contacto"
              title={
                <>
                  Fale connosco. <em className="text-accent">Estamos aqui</em> para si.
                </>
              }
              description="Tem dúvidas? Escreva-nos a qualquer momento. Respondemos com calma, clareza e em tempo real."
            />
            <ul className="flex flex-col gap-3">
              {channels.map(({ icon: Icon, label, value, href, note }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-4 transition-colors hover:bg-primary-foreground/[0.09]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-xs text-primary-foreground/60">
                        {label} · {note}
                      </span>
                      <span className="truncate font-medium">{value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-primary-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 md:p-8"
          >
            <div>
              <h3 className="font-serif text-3xl">Inicie a sua candidatura</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                Preencha os campos e enviamos a sua mensagem directamente para o nosso WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome completo
              </label>
              <input
                id="name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: Ana Maria Machava"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="course" className="text-sm font-medium">
                Curso pretendido
              </label>
              <select
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={`${inputClass} [&>option]:text-foreground`}
              >
                <option value="">Ainda não decidi</option>
                {courses.map((c) => (
                  <option key={c.short} value={`${c.short} — ${c.name}`}>
                    {c.short} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="level" className="text-sm font-medium">
                  Último nível concluído
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className={`${inputClass} [&>option]:text-foreground`}
                >
                  <option>12ª classe</option>
                  <option>Licenciatura</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city" className="text-sm font-medium">
                  Cidade
                </label>
                <input
                  id="city"
                  required
                  autoComplete="address-level2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex.: Maputo"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Send className="size-4" aria-hidden="true" />
              Enviar pelo WhatsApp
            </button>
            <p className="text-center text-xs text-primary-foreground/55">
              Os seus dados são enviados apenas para a SNS Education.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
