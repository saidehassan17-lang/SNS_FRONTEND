const stats = [
  { value: "0 USD", label: "Taxa de agência" },
  { value: "50%", label: "Bolsa de estudo" },
  { value: "100 USD", label: "Para obter o Offer Letter" },
  { value: "1 equipa", label: "Do primeiro contacto à chegada" },
]

export function TrustStrip() {
  return (
    <section aria-label="Resumo das vantagens" className="border-y border-border bg-border">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-card px-5 py-8 md:px-8">
            <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-serif text-4xl text-foreground md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
