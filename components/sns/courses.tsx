"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Clock, Search } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { courses, faculties, whatsappLink, type Faculty, type Level } from "@/lib/site-data"
import { cn } from "@/lib/utils"

type FacultyFilter = Faculty | "Todos"
type LevelFilter = Level | "Todos"

const levels: LevelFilter[] = ["Todos", "Licenciatura", "Mestrado"]

export function Courses() {
  const [faculty, setFaculty] = useState<FacultyFilter>("Todos")
  const [level, setLevel] = useState<LevelFilter>("Todos")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses.filter(
      (c) =>
        (faculty === "Todos" || c.faculty === faculty) &&
        (level === "Todos" || c.level === level) &&
        (!q || c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q)),
    )
  }, [faculty, level, query])

  return (
    <section id="cursos" className="bg-muted/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Cursos disponíveis"
            title="Encontre o curso certo para si."
            description="Explore alguns dos cursos da Parul University. Não encontra o que procura? Fale connosco — a universidade oferece muitos outros."
          />
          <div className="relative w-full lg:max-w-xs">
            <label htmlFor="course-search" className="sr-only">
              Pesquisar curso
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar curso..."
              className="h-12 w-full rounded-full border border-border bg-card pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none"
            />
          </div>
        </div>

          <div className="mt-8 flex flex-col gap-3 md:mt-12 md:gap-4">
          <div role="group" aria-label="Filtrar por área" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {(["Todos", ...faculties] as FacultyFilter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFaculty(f)}
                aria-pressed={faculty === f}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  faculty === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Filtrar por nível" className="flex gap-1 self-start rounded-full border border-border bg-card p-1">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                aria-pressed={level === l}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  level === l ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "curso encontrado" : "cursos encontrados"}
        </p>

        {filtered.length > 0 ? (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {filtered.map((course) => (
              <li
                key={course.short}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:gap-6 sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {course.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{course.short}</p>
                  <h3 className="text-base leading-snug font-semibold text-foreground text-pretty sm:text-lg">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{course.faculty}</p>
                </div>
                <a
                  href={whatsappLink(
                    `Olá SNS Education! Tenho interesse no curso ${course.short} — ${course.name} na Parul University. Podem dar-me mais informações?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Pedir informações
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">sobre {course.name}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
            <p className="font-medium text-foreground">Não encontrámos esse curso nesta lista.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A Parul University tem muitos mais cursos.{" "}
              <a
                href={whatsappLink(`Olá SNS Education! Procuro o curso "${query}" na Parul University. Está disponível?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                Pergunte-nos pelo WhatsApp
              </a>
              .
            </p>
          </div>
        )}

        <p className="mt-8 text-xs text-muted-foreground">
          * Lista indicativa. A disponibilidade, a duração e os valores finais de cada curso são confirmados no seu
          Offer Letter.
        </p>
      </div>
    </section>
  )
}
