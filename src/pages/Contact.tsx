import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappLink } from "@/data/site";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s start your{" "}
            <span className="italic text-gold">project</span>
          </>
        }
        subtitle="Tell us about your space and we'll get back to you with ideas, timelines and a transparent quote."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <SectionReveal>
            <h2 className="font-serif text-2xl sm:text-3xl">
              Get in <span className="italic text-terracotta">touch</span>
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Reach us directly on WhatsApp for the quickest response, or drop us
              an email and we'll take it from there.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-terracotta/10 text-terracotta">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-sm text-muted-foreground hover:text-terracotta"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-terracotta/10 text-terracotta">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Studio</h3>
                  <p className="text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-terracotta/10 text-terracotta">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">{site.hours}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hi Dee Art, I'd like to book a free consultation.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
            </a>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us</span>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FaFacebookF />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Dee Art location map"
                src={site.mapEmbed}
                width="100%"
                height="240"
                loading="lazy"
                className="block"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.1}>
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-terracotta" />
                <h2 className="font-serif text-2xl">Request a Consultation</h2>
              </div>
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
