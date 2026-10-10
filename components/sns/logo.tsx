import { cn } from "@/lib/utils"

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <a href="#inicio" className={cn("group flex items-center gap-3", className)} aria-label="SNS Education — início">
        <img
          src="/logo.png"
          alt="SNS Education logo"
          width={40}
          height={40}
          className="h-13 w-13 shrink-0 object-contain"
        />
      <span className="flex flex-col leading-none">
        <span className={cn("text-base font-bold tracking-tight", inverted ? "text-primary-foreground" : "text-foreground")}>
          SNS Education
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.2em]",
            inverted ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Student Next Step
        </span>
      </span>
    </a>
  )
}
