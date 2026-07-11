import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-32 pb-20 text-cream sm:pt-40 sm:pb-28">
      {/* subtle gold glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        {eyebrow && (
          <span className="eyebrow eyebrow-center justify-center text-gold before:bg-gold after:bg-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
