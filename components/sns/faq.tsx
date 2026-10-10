"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqCategories, faqs, whatsappLink, type FaqCategory } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Faq() {
  const [category, setCategory] = useState<FaqCategory>("Geral")
  const items = faqs.filter((f) => f.category === category)

  return (
    <section id="perguntas" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-32">
      <div className="grid gap-10 md:gap-14 lg:grid-cols-12">
        <div className="flex min-w-0 flex-col gap-6 md:gap-8 lg:col-span-4">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Todas as respostas, antes de perguntar."
            description="Reunimos as dúvidas mais comuns dos nossos estudantes. Se a sua não estiver aqui, respondemos em tempo real."
          />
          <a
            href={whatsappLink("Olá SNS Education! Tenho uma pergunta:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="size-4 text-primary" aria-hidden="true" />
            Fazer outra pergunta
          </a>
        </div>

        <div className="flex min-w-0 flex-col gap-5 md:gap-6 lg:col-span-8">
          <div role="tablist" aria-label="Categorias de perguntas" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {faqCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                aria-controls="faq-panel"
                onClick={() => setCategory(c)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div id="faq-panel" role="tabpanel" className="rounded-2xl border border-border bg-card px-5 md:rounded-3xl md:px-8">
            <Accordion key={category}>
              {items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="gap-4 py-5 text-base font-semibold md:gap-6 md:py-6 text-foreground hover:no-underline md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
