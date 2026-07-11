import { cn } from "@/lib/utils";

interface LogoProps {
  light?: boolean;
  className?: string;
}

// Temporary text wordmark. Swap for the uploaded logo file when provided.
export function Logo({ light, className }: LogoProps) {
  return (
    <span className={cn("flex flex-col leading-none select-none", className)}>
      <span className="flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-serif italic text-2xl tracking-tight",
            light ? "text-cream" : "text-charcoal",
          )}
        >
          dee
        </span>
        <span
          className={cn(
            "font-serif text-2xl font-semibold tracking-[0.15em]",
            light ? "text-cream" : "text-charcoal",
          )}
        >
          A<span className="text-terracotta">R</span>T
        </span>
      </span>
      <span
        className={cn(
          "text-[0.55rem] font-medium uppercase tracking-[0.32em] mt-0.5",
          light ? "text-cream/70" : "text-muted-foreground",
        )}
      >
        Modular &amp; Interiors
      </span>
    </span>
  );
}
