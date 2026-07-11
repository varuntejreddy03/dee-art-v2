import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Where creativity meets functionality — thoughtfully designed
            interiors and modular furniture for homes and workspaces in
            Hyderabad.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-terracotta hover:border-terracotta"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-terracotta hover:border-terracotta"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
            <span
              aria-label="LinkedIn coming soon"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/10 text-cream/30"
              title="Coming soon"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-terracotta"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="transition-colors hover:text-terracotta"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cream">
            Get in Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-terracotta"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-terracotta" />
              <span>Phone: {site.phoneDisplay}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
