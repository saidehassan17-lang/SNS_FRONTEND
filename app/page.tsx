import { SiteHeader } from "@/components/sns/site-header"
import { Hero } from "@/components/sns/hero"
import { TrustStrip } from "@/components/sns/trust-strip"
import { About } from "@/components/sns/about"
import { Services } from "@/components/sns/services"
import { University } from "@/components/sns/university"
import { Courses } from "@/components/sns/courses"
import { Process } from "@/components/sns/process"
import { Costs } from "@/components/sns/costs"
import { Faq } from "@/components/sns/faq"
import { Contact } from "@/components/sns/contact"
import { SiteFooter } from "@/components/sns/site-footer"
import { WhatsappFloat } from "@/components/sns/whatsapp-float"
import { StructuredData } from "@/components/sns/structured-data"

export default function Page() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <University />
        <Courses />
        <Process />
        <Costs />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
