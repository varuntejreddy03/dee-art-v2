import { Link } from "react-router-dom";
import { ArrowRight, Eye, Target, Gem, Handshake, Leaf } from "lucide-react";

import aboutImg from "@/assets/about.jpg";
import turnkeyImg from "@/assets/turnkey.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const stats = [
  { value: "20+", label: "Years Combined Expertise" },
  { value: "100%", label: "Turnkey Delivery" },
  { value: "500+", label: "Spaces Designed" },
  { value: "Gachibowli", label: "Based in Hyderabad" },
];

const values = [
  { icon: Gem, title: "Craftsmanship", text: "Premium materials and meticulous detailing in every project." },
  { icon: Handshake, title: "Trust", text: "Transparent process, honest pricing and dependable timelines." },
  { icon: Target, title: "Precision", text: "Designs planned to the millimetre and executed to match." },
  { icon: Leaf, title: "Comfort", text: "Spaces that look stunning and feel effortless to live in." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Interiors crafted with{" "}
            <span className="italic text-gold">intent</span>
          </>
        }
        subtitle="Dee Art Modulars and Interiors blends creativity, functionality and premium craftsmanship to shape spaces that feel unmistakably yours."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <div className="group relative overflow-hidden rounded-sm shadow-luxe">
              <img
                src={aboutImg}
                alt="Dee Art design team at work"
                width={1120}
                height={1120}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  A studio built on design and{" "}
                  <span className="italic text-terracotta">detail</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Based in {site.area}, Dee Art Modulars and Interiors is a
                full-service interior design and modular furniture studio. We
                specialise in transforming homes, apartments, villas and
                commercial spaces into elegant, practical environments.
              </p>
              <p>
                Our team of architects and interior professionals brings over 20
                years of combined experience, managing every stage in-house —
                from concept and 3D design to manufacturing, installation and
                final handover.
              </p>
              <p>
                We believe great interiors aren't just seen, they're lived in.
                That philosophy guides every material we choose and every space
                we deliver.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-cream">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-serif text-4xl text-gold sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm tracking-wide text-cream/70">
                {s.label}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <SectionReveal>
            <div className="group relative h-full overflow-hidden rounded-xl bg-card p-8 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30 sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-terracotta/6 to-gold/4 blur-2xl" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-terracotta/20">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To deliver thoughtfully designed, beautifully executed interiors
                  that enhance the way our clients live and work — on time, on
                  budget and beyond expectation.
                </p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-xl bg-card p-8 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30 sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-gold/6 to-terracotta/4 blur-2xl" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-terracotta/20">
                  <Eye className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To be Hyderabad's most trusted name in premium interiors and
                  modular solutions — known for design integrity, craftsmanship and
                  lasting client relationships.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal>
            <SectionHeading
              align="center"
              eyebrow="What Drives Us"
              title="Our values"
            />
          </SectionReveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-xl bg-card p-7 text-center ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30">
                  <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-gold/8 to-transparent blur-xl" />
                  <div className="relative">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-gold/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-terracotta/20">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <img
          src={turnkeyImg}
          alt="Turnkey interior project"
          width={1920}
          height={1280}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative mx-auto max-w-2xl px-5 text-center text-cream sm:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Let's design something you'll love coming home to
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-terracotta px-8 py-3.5 text-sm font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
