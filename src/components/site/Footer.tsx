import { Link } from "react-router-dom";
import { services } from "@/data/services";
import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border bg-sand/40 px-6 py-10 md:px-10 md:py-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 text-center md:grid-cols-12 md:text-left">
        <div className="md:col-span-4">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground md:mx-0">
            BrainGig Pty Ltd is a digital growth agency working with businesses across Seychelles —
            websites, online stores, branding, search, and marketing built to bring in
            more customers.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-palm">Services</div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-ink/70 hover:text-coral">
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.25em] text-palm">Agency</div>
          <div className="mt-4 grid gap-2">
            <Link to="/about-us" className="text-sm text-ink/70 hover:text-coral">About Us</Link>
            <Link to="/services" className="text-sm text-ink/70 hover:text-coral">All Services</Link>
            <Link to="/contact-us" className="text-sm text-ink/70 hover:text-coral">Contact Us</Link>
          </div>
          <div className="mt-6 grid gap-2 text-sm text-ink/70">
            <a href="tel:+2482614082" className="hover:text-coral">+248 2 614 082</a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-sm text-muted-foreground md:mt-12 md:flex-row md:text-left">
        <div>© {new Date().getFullYear()} BrainGig Pty Ltd · All rights reserved</div>
        <div>Serving Seychelles · Remote · Worldwide</div>
      </div>

    </div>
  </footer>
);

export default Footer;
