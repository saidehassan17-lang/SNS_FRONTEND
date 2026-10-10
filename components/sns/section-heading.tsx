import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  tone?: "default" | "inverted"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const inverted = tone === "inverted"
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
          inverted ? "text-accent" : "text-primary",
        )}
      >
        <span aria-hidden="true" className={cn("h-px w-6", inverted ? "bg-accent" : "bg-primary")} />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.05] text-balance md:text-5xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-pretty md:text-lg",
            inverted ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
