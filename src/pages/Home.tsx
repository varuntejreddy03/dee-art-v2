import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  MessagesSquare,
  PencilRuler,
  Hammer,
  KeyRound,
  Gem,
  UserCheck,
  Clock,
  Cpu,
  ClipboardList,
  Mail,
  MapPin,
  Clock as ClockIcon,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import ceilingImg from "@/assets/ceiling.jpg";
import livingImg from "@/assets/living.jpg";
import tvunitImg from "@/assets/tvunit.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import turnkeyImg from "@/assets/turnkey.jpg";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { site, whatsappLink } from "@/data/site";

const processSteps = [
  { icon: MessagesSquare, title: "Consultation", text: "We listen to your vision, lifestyle and budget." },
  { icon: PencilRuler, title: "Design", text: "Layouts, 3D visuals and material selection." },
  { icon: Hammer, title: "Execution", text: "Precise, quality-controlled on-site delivery." },
  { icon: KeyRound, title: "Handover", text: "A polished, move-in-ready space, on time." },
];

const whyChoose = [
  { icon: KeyRound, title: "Turnkey Execution", text: "One team from concept to final handover." },
  { icon: Gem, title: "Premium Materials", text: "Trusted hardware and durable, tactile finishes." },
  { icon: UserCheck, title: "Personalized Design", text: "Every layout tailored to how you live." },
  { icon: Clock, title: "On-Time Delivery", text: "Realistic timelines we plan and keep." },
  { icon: Cpu, title: "Home Automation", text: "Smart lighting, climate and control, built in." },
  { icon: ClipboardList, title: "End-to-End Management", text: "A single point of contact throughout." },
];

const captionTiles = [
  { src: ceilingImg, caption: "Comfort Meets Class" },
  { src: livingImg, caption: "Design That Speaks" },
  { src: aboutImg, caption: "Luxury in Every Line" },
  { src: tvunitImg, caption: "Bold Ideas, Executed" },
  { src: kitchenImg, caption: "Elegance in Every Detail" },
  { src: turnkeyImg, caption: "Crafted with Passion" },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Luxury living room interior designed by Dee Art"
          width={1920}
          height={1280}
          initial={reduce ? undefined : { scale: 1.12 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-charcoal/50" />

        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream"
          >
            <span className="eyebrow eyebrow-center justify-center text-gold before:bg-gold after:bg-gold">
              Interior Designers in {site.area}
            </span>
            <h1 className="mx-auto mt-7 max-w-3xl font-serif text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Crafting <span className="italic text-gold">Timeless</span>{" "}
              Interiors &amp; Modular Spaces
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
              Thoughtfully designed homes and workspaces around Gachibowli,
              Hyderabad — where premium craftsmanship meets everyday comfort.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-terracotta px-8 py-4 text-sm font-medium tracking-wide text-terracotta-foreground transition-all hover:bg-terracotta/90 hover:shadow-lg hover:shadow-terracotta/25"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-sm border border-cream/40 px-8 py-4 text-sm font-medium tracking-wide text-cream backdrop-blur-sm transition-all hover:bg-cream hover:text-charcoal hover:shadow-lg"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-gold"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* Tagline strip */}
      <section className="bg-terracotta">
        <div className="mx-auto max-w-4xl px-6 py-11 text-center sm:px-8">
          <p className="font-serif text-lg italic leading-relaxed text-terracotta-foreground sm:text-2xl">
            &ldquo;Where creativity meets functionality — every space,
            thoughtfully designed.&rdquo;
          </p>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <div className="group relative overflow-hidden rounded-lg shadow-luxe">
              <img
                src={aboutImg}
                alt="Dee Art designers reviewing materials and plans"
                width={1120}
                height={1120}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/5" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SectionHeading
              eyebrow="About Dee Art"
              title={
                <>
                  Designing spaces that feel like{" "}
                  <span className="italic text-terracotta">home</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                At Dee Art Modulars and Interiors, we specialise in modern
                interior solutions and customised modular furniture that turn
                everyday spaces into elegant, comfortable and practical
                environments.
              </p>
              <p>
                Backed by a team of architects and interior professionals with{" "}
                <span className="font-semibold text-foreground">
                  over 20 years of combined expertise
                </span>
                , we deliver end-to-end interiors for homes, apartments, villas
                and commercial spaces — tailored to your lifestyle and budget.
              </p>
            </div>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta"
            >
              <span className="link-underline">Know More</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Caption image grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal>
            <SectionHeading
              align="center"
              eyebrow="A Glimpse"
              title={
                <>
                  Moments that make a{" "}
                  <span className="italic text-terracotta">home</span>
                </>
              }
              description="A closer look at the details, textures and finishes that define a Dee Art space."
            />
          </SectionReveal>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {captionTiles.map((tile, i) => (
              <SectionReveal key={tile.caption} delay={(i % 3) * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={tile.src}
                    alt={tile.caption}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="font-serif text-sm text-cream sm:text-base">
                      {tile.caption}
                    </p>
                    <div className="mt-1.5 h-px w-8 bg-gold/60" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal>
            <SectionHeading
              align="center"
              eyebrow="How We Work"
              title="A refined, transparent process"
              description="From first conversation to final handover, every stage is managed in-house so the outcome matches the vision."
            />
          </SectionReveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-xl bg-card p-7 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30">
                  {/* Decorative gradient blob */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-terracotta/8 to-gold/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-terracotta/0 group-hover:shadow-lg group-hover:shadow-terracotta/20">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <span className="font-serif text-3xl font-light text-border/80 transition-colors group-hover:text-gold/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title={
                <>
                  Interiors, <span className="italic text-terracotta">crafted</span> in full
                </>
              }
            />
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-terracotta"
            >
              <span className="link-underline">All Services</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/services"
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-card p-7 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30"
                >
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracotta/0 to-transparent transition-all duration-500 group-hover:via-terracotta/60" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-terracotta/20">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless experience band */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <SectionReveal className="flex items-center bg-secondary px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
            <div>
              <SectionHeading
                eyebrow="Why Dee Art"
                title={
                  <>
                    A <span className="italic text-terracotta">seamless</span>{" "}
                    experience
                  </>
                }
                description="From the first sketch to the final styling, Dee Art manages every detail in-house — so your transformation feels effortless, precise and true to your vision."
              />
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta"
              >
                <span className="link-underline">Our Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </SectionReveal>
          <div className="min-h-[320px] overflow-hidden lg:min-h-full">
            <img
              src={aboutImg}
              alt="Serene, thoughtfully designed Dee Art interior"
              width={1120}
              height={1120}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="bg-charcoal py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Selected Work"
              title={
                <>
                  Spaces we&rsquo;ve brought to{" "}
                  <span className="italic text-gold">life</span>
                </>
              }
            />
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold"
            >
              <span className="link-underline">See Full Portfolio</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 lg:grid-cols-4">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <SectionReveal
                key={item.title}
                delay={(i % 4) * 0.06}
                className={
                  i === 0 || i === 3 ? "sm:col-span-2 sm:row-span-1" : ""
                }
              >
                <Link
                  to="/portfolio"
                  className="group relative block h-full overflow-hidden rounded-lg"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold">
                      {item.category}
                    </p>
                    <p className="mt-1 font-serif text-base text-cream sm:text-lg">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal>
            <SectionHeading
              align="center"
              eyebrow="Our Promise"
              title="Why choose Dee Art"
              description="Design integrity, honest timelines and master-level execution — the reasons clients trust us with their homes."
            />
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <SectionReveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-xl bg-card p-7 ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-terracotta/30">
                  {/* Subtle corner gradient */}
                  <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-gold/6 to-transparent blur-2xl" />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-gold/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta/80 group-hover:text-white group-hover:ring-0 group-hover:shadow-md group-hover:shadow-terracotta/20">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {w.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionReveal>
            <SectionHeading
              align="center"
              eyebrow="Kind Words"
              title="What our clients say"
            />
          </SectionReveal>
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden py-24 sm:py-36">
        <img
          src={heroImg}
          alt="Elegant dark luxury interior"
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative mx-auto max-w-3xl px-5 text-center text-cream sm:px-8">
          <span className="eyebrow eyebrow-center justify-center text-gold before:bg-gold after:bg-gold">
            Let&rsquo;s Begin
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-5xl">
            Your space. Your story.{" "}
            <span className="italic text-gold">Beautifully delivered.</span>
          </h2>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-terracotta px-9 py-4 text-sm font-medium text-terracotta-foreground transition-all hover:bg-terracotta/90 hover:shadow-lg hover:shadow-terracotta/25"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Contact snapshot */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3">
          {[
            { icon: Mail, title: "Email Us", content: <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground break-words hover:text-terracotta transition-colors">{site.email}</a> },
            { icon: MapPin, title: "Visit Us", content: <p className="text-sm text-muted-foreground">{site.area}</p> },
            { icon: ClockIcon, title: "Business Hours", content: <p className="text-sm text-muted-foreground">Open 10 AM – 7 PM, Mon–Sun</p> },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-xl bg-card p-5 ring-1 ring-border/50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10">
                <item.icon className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-5 px-5 sm:px-8">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border text-muted-foreground transition-all hover:ring-terracotta hover:text-terracotta hover:bg-terracotta/5"
          >
            <FaFacebookF className="h-3.5 w-3.5" />
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border text-muted-foreground transition-all hover:ring-terracotta hover:text-terracotta hover:bg-terracotta/5"
          >
            <FaInstagram className="h-3.5 w-3.5" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-terracotta hover:underline"
          >
            WhatsApp us →
          </a>
        </div>
      </section>
    </>
  );
}
