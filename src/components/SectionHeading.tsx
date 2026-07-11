import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Editorial section heading: eyebrow label with a gold rule, a large serif
 * title (supports inline gold-accent spans) and optional description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            align === "center" && "eyebrow-center justify-center",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-5 font-serif text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            tone === "light" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
