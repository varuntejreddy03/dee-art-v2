import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const tallIndexes = new Set([0, 3, 4, 7]);

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? portfolioItems
        : portfolioItems.filter((p) => p.category === filter),
    [filter],
  );

  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  const next = () =>
    setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, filtered.length]);

  const tabs = portfolioCategories;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Spaces we&rsquo;ve brought to{" "}
            <span className="italic text-gold">life</span>
          </>
        }
        subtitle="A glimpse of our design language across kitchens, wardrobes, living spaces, bedrooms and workplaces."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setFilter(tab);
                setLightbox(null);
              }}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300",
                filter === tab
                  ? "bg-terracotta text-terracotta-foreground shadow-sm"
                  : "border border-border text-muted-foreground hover:border-terracotta hover:text-terracotta",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(i)}
                className={cn(
                  "group relative overflow-hidden rounded-sm",
                  tallIndexes.has(i) && "row-span-2",
                )}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Plus className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                    {item.category}
                  </p>
                  <p className="mt-1 font-serif text-lg text-cream">
                    {item.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/97 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream hover:text-cream"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream hover:text-cream sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="max-h-[80vh] w-full rounded-sm object-contain"
              />
              <figcaption className="mt-5 text-center text-cream">
                <span className="text-xs uppercase tracking-[0.25em] text-gold">
                  {filtered[lightbox].category}
                </span>
                <p className="mt-2 font-serif text-xl">
                  {filtered[lightbox].title}
                </p>
                <p className="mt-1 text-xs text-cream/50">
                  {lightbox + 1} / {filtered.length}
                </p>
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream hover:text-cream sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
