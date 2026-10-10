import { ShieldCheck } from "lucide-react"
import { SectionHeading } from "./section-heading"

const rows = [
  {
    item: "Taxa da agência SNS Education",
    when: "Nunca",
    amount: "0 USD",
    highlight: true,
  },
  {
    item: "Emissão do Offer Letter",
    when: "Depois de enviar os seus dados",
    amount: "100 USD",
  },
  {
    item: "Propinas (com bolsa de 50% aplicada)",
    when: "Depois de receber o Offer Letter",
    amount: "50% do valor",
  },
  {
    item: "Acomodação no campus",
    when: "Depois de receber o Offer Letter",
    amount: "50% do valor",
  },
  {
    item: "Bilhete de avião",
    when: "Antes da viagem",
    amount: "Possivelmente grátis*",
  },
]

export function Costs() {
  return (
    <section id="custos" className="bg-secondary/60">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="Transparência total"
          title="Quanto vai pagar — e quando."
          description="Sem surpresas. Estes são todos os pagamentos do processo. Os valores exactos das propinas e da acomodação aparecem no seu Offer Letter."
        />

        <div className="mt-10 overflow-hidden rounded-2xl md:mt-14 md:rounded-3xl border border-border bg-card">
          <table className="w-full text-left">
            <caption className="sr-only">Resumo dos pagamentos do processo de admissão</caption>
            <thead className="hidden border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground md:table-header-group">
              <tr>
                <th scope="col" className="px-8 py-4 font-semibold">
                  Pagamento
                </th>
                <th scope="col" className="px-8 py-4 font-semibold">
                  Quando
                </th>
                <th scope="col" className="px-8 py-4 text-right font-semibold">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr
                  key={row.item}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-4 md:table-row md:p-0"
                >
                  <th scope="row" className="text-sm font-medium text-foreground md:px-8 md:py-6 md:text-base">
                    {row.item}
                  </th>
                  <td className="col-start-1 row-start-2 text-xs text-muted-foreground md:px-8 md:py-6 md:text-sm">
                    {row.when}
                  </td>
                  <td className="col-start-2 row-span-2 row-start-1 text-right md:px-8 md:py-6">
                    <span
                      className={
                        row.highlight
                          ? "inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground"
                          : "font-serif text-lg whitespace-nowrap text-foreground md:text-2xl"
                      }
                    >
                      {row.amount}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-card/70 p-5 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="leading-relaxed">
            O pagamento de 50% das propinas e 50% da acomodação garante a emissão da sua carta de admissão. *O bilhete
            grátis está sujeito às condições em vigor no momento da candidatura — confirme connosco.
          </p>
        </div>
      </div>
    </section>
  )
}
