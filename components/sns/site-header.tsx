"use client"

import { useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { Logo } from "./logo"
import { defaultWhatsappMessage, navItems, whatsappLink } from "@/lib/site-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden text-sm font-medium text-foreground underline-offset-4 hover:underline md:inline"
          >
            Contacto
          </a>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex md:ml-3"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Navegação móvel" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {[...navItems, { label: "Contacto", href: "#contacto" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
