import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/site";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            End-to-end interior{" "}
            <span className="italic text-gold">solutions</span>
          </>
        }
        subtitle="From a single modular kitchen to complete turnkey interiors, we handle design, manufacturing and installation under one roof."
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="space-y-20 sm:space-y-28">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <SectionReveal key={s.slug}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="group relative overflow-hidden rounded-sm shadow-luxe">
                      <img
                        src={s.image}
                        alt={s.title}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-5xl text-gold/40">
                        0{i + 1}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-terracotta/10 text-terracotta">
                        <s.icon className="h-6 w-6" />
                      </span>
                    </div>
                    <h2 className="mt-6 font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <a
                      href={whatsappLink(
                        `Hi Dee Art, I'm interested in your ${s.title} service.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-terracotta"
                    >
                      <span className="link-underline">Enquire about this</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      {/* Process recap */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">
            One team, complete accountability
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every service is delivered in-house and managed end-to-end, so you get
            a single point of contact from first sketch to final handover.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {[
              "Free design consultation",
              "3D visualisation",
              "Transparent quotation",
              "Quality materials & hardware",
              "On-site project management",
              "On-time handover",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-terracotta" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-terracotta px-8 py-3.5 text-sm font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
