import { Logo } from "./logo"
import { contact, navItems, whatsappLink } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ajudamos estudantes moçambicanos a dar o próximo passo — com transparência, confiança e acompanhamento do
            início ao fim.
          </p>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <address className="flex flex-col gap-3 text-sm not-italic">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            WhatsApp: {contact.whatsappDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-foreground">
            {contact.email}
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            Instagram: @{contact.instagramHandle}
          </a>
        </address>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} SNS Education — Student Next Step. Todos os direitos reservados.</p>
        <p>Feito com cuidado para estudantes moçambicanos.</p>
      </div>
    </footer>
  )
}
