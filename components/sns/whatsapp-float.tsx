import { MessageCircle } from "lucide-react"
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site-data"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/25 ring-4 ring-background transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
