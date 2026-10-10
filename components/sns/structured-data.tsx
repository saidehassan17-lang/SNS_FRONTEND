import { buildJsonLd } from "@/lib/seo"

export function StructuredData() {
  const json = JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
