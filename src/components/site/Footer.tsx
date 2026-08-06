import { Link } from "react-router-dom";
import { services } from "@/data/services";
import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border bg-sand/40 px-6 py-14 md:px-10 md:py-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            BrainGig is a digital growth agency working with businesses across Seychelles —
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
            <a href="mailto:braingigllc@gmail.com" className="break-all hover:text-coral">braingigllc@gmail.com</a>
            <a href="tel:+2482614082" className="hover:text-coral">+248 2 614 082</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/70">
            <a href="https://www.facebook.com/braingigllc" target="_blank" rel="noreferrer" className="hover:text-coral">Facebook</a>
            <a href="https://www.instagram.com/braingigllc/" target="_blank" rel="noreferrer" className="hover:text-coral">Instagram</a>
            <a href="https://www.linkedin.com/company/99014556" target="_blank" rel="noreferrer" className="hover:text-coral">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <div>© {new Date().getFullYear()} BrainGig LLC · All rights reserved</div>
        <div>Serving Seychelles · Remote · Worldwide</div>
      </div>

    </div>
  </footer>
);

export default Footer;
