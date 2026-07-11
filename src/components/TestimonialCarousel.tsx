import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Decorative quote mark */}
      <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="font-serif text-[5rem] leading-none text-terracotta/10">&ldquo;</span>
      </div>

      <div className="relative rounded-2xl bg-card p-8 ring-1 ring-border/50 sm:p-12">
        <div className="relative min-h-[160px] sm:min-h-[130px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{t.detail}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border text-muted-foreground transition-all hover:ring-terracotta hover:text-terracotta hover:bg-terracotta/5"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-terracotta" : "w-1.5 bg-border hover:bg-terracotta/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border text-muted-foreground transition-all hover:ring-terracotta hover:text-terracotta hover:bg-terracotta/5"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
