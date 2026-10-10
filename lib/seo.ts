import { contact, faqs } from "@/lib/site-data"

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) return `https://${production}`
  return "http://localhost:3000"
}

export const siteUrl = resolveSiteUrl()

export const siteName = "SNS Education — Student Next Step"

export const siteTitle =
  "SNS Education | Estudar na Índia com bolsa de 50% — Parul University"

export const siteDescription =
  "Estude na Parul University (Índia) com a SNS Education: bolsa de 50%, sem taxa de agência e acompanhamento completo — Offer Letter, carta de admissão, visto, bilhete e chegada ao campus. Para estudantes de Moçambique e países lusófonos."

export const siteKeywords = [
  "SNS Education",
  "Student Next Step",
  "estudar na Índia",
  "estudar no estrangeiro",
  "estudar fora de Moçambique",
  "Parul University",
  "Parul University Moçambique",
  "bolsa de estudo Índia",
  "bolsa de 50%",
  "agência de estudos Moçambique",
  "estudantes moçambicanos na Índia",
  "visto de estudante Índia",
  "Offer Letter Parul University",
  "licenciatura na Índia",
  "mestrado na Índia",
  "medicina na Índia MBBS",
  "engenharia na Índia",
  "Maputo",
  "Moçambique",
]

export function buildJsonLd() {
  const organizationId = `${siteUrl}/#organization`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: "SNS Education",
        alternateName: "Student Next Step",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/opengraph-image`,
        description: siteDescription,
        email: contact.email,
        telephone: `+${contact.whatsappNumber}`,
        areaServed: [
          { "@type": "Country", name: "Moçambique" },
          { "@type": "Country", name: "Angola" },
          { "@type": "Country", name: "Brasil" },
        ],
        knowsLanguage: ["pt", "en"],
        sameAs: [contact.instagramUrl],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "admissions",
          email: contact.email,
          telephone: `+${contact.whatsappNumber}`,
          availableLanguage: ["Portuguese", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "pt",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        inLanguage: "pt",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }
}
