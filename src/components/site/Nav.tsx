import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/data/services";
import Logo from "./Logo";

const Nav = ({ overlay = false }: { overlay?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobile(false); setOpenMega(false); }, [pathname]);

  const solid = !overlay || scrolled;

  const linkCls = solid
    ? "text-ink/70 hover:text-coral"
    : "text-white hover:text-sunset [text-shadow:0_1px_10px_hsl(var(--teal-deep)/0.6)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMega(false)}
    >
      {!solid && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-teal-deep/70 to-transparent" />
      )}
      <div className="relative px-6 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <Logo light={!solid} />

          <nav className="hidden items-center gap-9 md:flex">
            <Link to="/" className={`text-sm transition-colors ${linkCls}`}>Home</Link>

            <div className="relative" onMouseEnter={() => setOpenMega(true)}>
              <Link to="/services" className={`inline-flex items-center gap-1 text-sm transition-colors ${linkCls}`}>
                Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMega ? "rotate-180" : ""}`} />
              </Link>
            </div>

            <Link to="/about-us" className={`text-sm transition-colors ${linkCls}`}>About Us</Link>
            <Link to="/contact-us" className={`text-sm transition-colors ${linkCls}`}>Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className="group hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep hover:shadow-float sm:inline-flex"
            >
              Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobile((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
                solid ? "border-border text-ink" : "border-white/30 text-white"
              }`}
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu */}
      {openMega && (
        <div className="hidden border-t border-border bg-background/95 backdrop-blur-xl md:block">
          <div className="px-6 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-2 py-8 md:grid-cols-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl p-4 transition-colors hover:bg-sand/60"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-teal">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-sm font-bold text-ink group-hover:text-coral">{s.title}</span>
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background px-6 py-6 md:hidden">
          <Link to="/" className="block py-2 text-sm text-ink">Home</Link>
          <Link to="/services" className="block py-2 text-sm text-ink">Services</Link>
          <div className="ml-3 border-l border-border pl-4">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="block py-1.5 text-sm text-muted-foreground">
                {s.title}
              </Link>
            ))}
          </div>
          <Link to="/about-us" className="block py-2 text-sm text-ink">About Us</Link>
          <Link to="/contact-us" className="block py-2 text-sm text-ink">Contact</Link>
          <Link to="/contact-us" className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-medium text-white">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
