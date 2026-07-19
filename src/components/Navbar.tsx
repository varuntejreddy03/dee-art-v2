import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
        <Link to="/" aria-label="Dee Art home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "group relative py-1 text-[0.9rem] font-medium tracking-wide transition-colors hover:text-terracotta text-foreground",
                  isActive && "text-terracotta",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-0.5 left-0 h-px bg-terracotta transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href={whatsappLink("Hi Dee Art, I'd like a quote for my interiors.")}
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-sm bg-terracotta px-5 py-2.5 text-[0.9rem] font-medium text-terracotta-foreground shadow-sm transition-all hover:bg-terracotta/90 hover:shadow-md"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden md:hidden"
            style={{ height: "100dvh", backgroundColor: "#2d2926" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-5 py-3.5 sm:px-8">
              <Logo light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-7">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "font-serif text-3xl text-cream transition-colors hover:text-terracotta",
                        isActive && "text-terracotta",
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * links.length }}
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                  className="mt-4 rounded-sm bg-terracotta px-8 py-3 text-base font-medium text-terracotta-foreground"
                >
                  Get a Quote
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
