import heroImg from "@/assets/hero-island.jpg";
import hotelsImg from "@/assets/hotels.jpg";
import beachImg from "@/assets/beachclub.jpg";
import yachtImg from "@/assets/yacht.jpg";
import divingImg from "@/assets/diving.jpg";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Palmtree, ShoppingBag, Utensils, Briefcase, HardHat,
  Search, PenTool, Code2, Rocket, Sparkles, ShieldCheck, Smartphone, Zap, CalendarCheck,
  Star, BadgeCheck,
} from "lucide-react";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import CTASection from "@/components/site/CTASection";
import PortfolioSection from "@/components/site/PortfolioSection";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

/* ---------- Hero ---------- */
const Hero = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="top" className="relative h-[100svh] max-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})`, transform: `translateY(${offset}px) scale(1.08)`, filter: "saturate(0.9) blur(1.5px)" }} />
      <div className="absolute inset-0 -z-10 ocean-overlay" />
      <div className="absolute inset-0 -z-10 bg-teal-deep/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-deep/80 via-teal-deep/40 to-teal-deep/90" />
      {/* centre focus vignette keeps headline legible over busy imagery */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 48%, hsl(var(--teal-deep) / 0.55), transparent 70%)" }}
      />

      <Nav overlay />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 pb-10 pt-28 text-center md:px-10">
        <div className="animate-fade-up flex flex-col items-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-[11px]">
            <Palmtree className="h-3.5 w-3.5" /> Digital Growth Agency · Seychelles
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,4.75rem)] font-semibold leading-[1.06] text-white text-balance [text-shadow:0_2px_28px_hsl(var(--teal-deep)/0.7)]">
            We build websites that turn<br className="hidden sm:block" />{" "}
            attention into <span className="text-sunset font-normal">business growth.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/95 text-pretty [text-shadow:0_1px_16px_hsl(var(--teal-deep)/0.65)] sm:text-base md:text-lg">
            Strategy, design, development, SEO, and marketing for Seychelles businesses —
            shops, restaurants, clinics, contractors, and service providers who want their
            website to actually bring in customers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a href="/services" className="group inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep hover:shadow-float sm:px-7 sm:py-3.5 sm:text-base">
              Explore Our Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className="group inline-flex items-center gap-2 text-sm text-white/90">
              <span className="h-px w-10 bg-white/60 transition-all group-hover:w-16" /> See Our Work
            </a>
          </div>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 justify-items-start gap-x-4 gap-y-3 border-t border-white/15 pt-6 text-white/85 sm:justify-items-center md:mt-14 md:grid-cols-4">
          {[
            [ShieldCheck, "Direct with the team"],
            [Smartphone, "Mobile-first & SEO-ready"],
            [CalendarCheck, "Reply within one working day"],
            [Zap, "Fast-loading builds"],
          ].map(([Icon, label]) => (
            <div key={label as string} className="flex items-center gap-2.5">
              {(() => { const I = Icon as typeof Palmtree; return <I className="h-4 w-4 text-sunset shrink-0" />; })()}
              <div className="text-[10px] uppercase tracking-[0.16em] md:text-[11px]">{label as string}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

/* ---------- Marquee strip ---------- */
const Strip = () => (
  <div className="border-y border-border bg-sand/50 py-5 overflow-hidden">
    <div className="flex animate-drift items-center justify-around gap-12 whitespace-nowrap px-6 text-xs uppercase tracking-[0.3em] text-ink/60 md:text-sm">
      <span>Mahé</span><span className="text-coral">✦</span>
      <span>Praslin</span><span className="text-coral">✦</span>
      <span>La Digue</span><span className="text-coral">✦</span>
      <span>Silhouette</span><span className="text-coral">✦</span>
      <span>Curieuse</span><span className="text-coral">✦</span>
      <span>Aride</span>
    </div>
  </div>
);

/* ---------- Services Overview ---------- */
const ServicesOverview = () => (
  <section id="services" className="relative overflow-hidden bg-gradient-cream px-6 py-20 md:px-10 md:py-32">
    <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 blob bg-aqua-light/70 blur-3xl animate-float-slow" />
    <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 blob-2 bg-sunset/25 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <div className="mb-12 grid items-end gap-8 md:mb-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— What we do</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06] text-ink">
              Seven services,
              <span className="text-coral font-normal"> one team.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:col-span-5 md:text-lg">
            Design, build, grow, and care — under one roof, in one voice, on one timeline.
            Everything a Seychelles business needs to be found, trusted, and chosen.
          </p>
        </div>
      </Reveal>


      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 0.07} className="h-full">
            <Link
              to={`/services/${s.slug}`}
              className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-teal transition-colors group-hover:bg-coral group-hover:text-white">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-coral">
                Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <Link to="/services" className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep">
          View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  </section>
);


/* ---------- Reviews ---------- */
const reviews = [
  { name: "Amanda speer", when: "2 months ago", color: "bg-teal", text: "not gonna write a long review but yeah, happy with the work." },
  { name: "shraddha jadhav", when: "2 months ago", color: "bg-coral", text: "Good overall experience. Site looks clean, loads fast, and we've started getting a few more inquiries since launch." },
  { name: "marco mearini", when: "3 months ago", color: "bg-coral-deep", text: "honestly just needed a decent site and they got it done. nothing fancy but clean and works so im good with it." },
  { name: "edite ferreira da silva", when: "3 months ago", color: "bg-palm", text: "They did a really good job on our website. not gonna lie we had a few changes during the process but they handled everything pretty calmly and delivered what we asked for." },
  { name: "David Fuentes Rojas", when: "3 months ago", color: "bg-sunset", text: "they helped with both website + seo. still early but we're already seeing some traffic coming in so yeah, pretty happy so far." },
  { name: "babeeta rani", when: "3 months ago", color: "bg-aqua", text: "We run a directory site and needed something more organized. it's not perfect (nothing ever is lol) but overall way better than what we had before and the team was easy to work with." },
  { name: "Luciano De Martiis", when: "6 months ago", color: "bg-teal-deep", text: "Very positive experience with this agency and its director. I use their services often, and they always resolve issues and deliver excellent results on time." },
  { name: "Ihsan", when: "7 months ago", color: "bg-palm", text: "Really good service. They created a complex webpage for my business. Love it. I will do in future all my webpages from them. Many thanks to the whole team." },
];

const GoogleMark = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C37 41 44 36 44 24c0-1.2-.1-2.3-.4-3.5z"/>
  </svg>
);

const ReviewCard = ({ r }: { r: (typeof reviews)[number] }) => {
  const [open, setOpen] = useState(false);
  const long = r.text.length > 130;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${r.color} font-display text-lg font-bold uppercase text-primary-foreground`}>
            {r.name[0]}
          </span>
          <div>
            <div className="font-display text-base font-bold text-ink">{r.name}</div>
            <div className="text-sm text-muted-foreground">{r.when}</div>
          </div>
        </div>
        <GoogleMark />
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <div className="flex gap-0.5 text-sunset">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <BadgeCheck className="h-4 w-4 text-aqua" />
      </div>

      <p className={`mt-3 flex-1 leading-relaxed text-ink/85 ${!open && long ? "line-clamp-4" : ""}`}>
        {r.text}
      </p>
      {long && (
        <button onClick={() => setOpen((v) => !v)} className="mt-3 self-start text-sm text-muted-foreground transition-colors hover:text-coral">
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
};

const Reviews = () => (
  <section className="px-6 py-20 md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <div className="mb-12 grid items-end gap-8 md:mb-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— Testimonials</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06] text-ink">
              Real stories of
              <span className="text-coral font-normal"> growth.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:col-span-5 md:text-lg">
            A few words from the owners, managers, and teams we have built and grown websites for.
          </p>
        </div>
      </Reveal>


      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={(i % 4) * 0.07} className="h-full">
            <ReviewCard r={r} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);


/* ---------- Portfolio (shared data: src/data/portfolio.ts) ---------- */
const Work = () => <PortfolioSection id="work" />;

/* ---------- Industries — Who this is for ---------- */
const industries = [
  {
    icon: ShoppingBag, title: "Retail & eCommerce", img: hotelsImg,
    text: "Shops and suppliers selling online properly — stock, payments, and delivery handled.",
    points: ["Product catalogues", "Card payments", "Stock & order automation"],
  },
  {
    icon: Utensils, title: "Restaurants & Cafés", img: beachImg,
    text: "Menus, reservations, and a presence that fills tables on quiet weeknights too.",
    points: ["Digital menus", "Table reservations", "Google Business & reviews"],
  },
  {
    icon: Briefcase, title: "Professional Services", img: yachtImg,
    text: "Clinics, law firms, consultants, and agencies that need to look established online.",
    points: ["Credibility-first pages", "Appointment enquiries", "Local search visibility"],
  },
  {
    icon: HardHat, title: "Trades, Marine & Tourism", img: divingImg,
    text: "Contractors, workshops, charters, and operators turning enquiries into booked jobs.",
    points: ["Project & fleet galleries", "Quote request forms", "WhatsApp handoff"],
  },
];


const Industries = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="who" className="relative overflow-hidden bg-gradient-cream px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 blob bg-aqua-light/70 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 blob-2 bg-sunset/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end md:gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-palm">— Who we work with</span>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.04] text-ink">
                Local businesses, <span className="text-coral font-normal">built to be chosen.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground md:text-lg">
              From shops and restaurants to clinics, contractors, and operators — if your
              website should be doing real work for the business, we are a fit.
            </p>
          </div>
        </Reveal>


        {/* Desktop expanding panels */}
        <Reveal>
          <div className="hidden h-[34rem] gap-3 md:flex">
            {industries.map((it, i) => (
              <motion.button
                key={it.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flex: active === i ? 4 : 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[2rem] text-left shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                style={{ flex: active === i ? 4 : 1 }}
              >
                <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/95 via-teal-deep/60 to-teal-deep/30" />

                <AnimatePresence>
                  {active !== i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-8">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-background/90 backdrop-blur">
                        <it.icon className="h-5 w-5 text-teal" />
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-white [writing-mode:vertical-rl] rotate-180">
                        {it.title}
                      </span>
                      <span className="font-display text-2xl font-bold text-coral">0{i + 1}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {active === i && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                      <div className="flex items-start justify-between">
                        <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 backdrop-blur">
                          <it.icon className="h-6 w-6 text-teal" />
                        </span>
                        <span className="font-display text-xs uppercase tracking-[0.25em] text-white/70">0{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-4xl font-bold leading-tight">{it.title}</h3>
                        <p className="mt-3 max-w-md text-white/80">{it.text}</p>
                        <ul className="mt-6 space-y-2">
                          {it.points.map((p) => (
                            <li key={p} className="flex items-center gap-2.5 text-sm text-white/85">
                              <span className="h-1 w-1 rounded-full bg-coral" /> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="grid gap-5 md:hidden">
          {industries.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <article className="relative overflow-hidden rounded-[2rem] shadow-soft">
                <img src={it.img} alt={it.title} loading="lazy" className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/92 via-teal-deep/55 to-teal-deep/25" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-background/90"><it.icon className="h-5 w-5 text-teal" /></span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{it.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{it.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Process ---------- */
const steps = [
  { icon: Search,   title: "Discover", text: "We dig into your business, your customers, and the work the site actually has to do. No decks, no discovery theatre." },
  { icon: PenTool,  title: "Plan",     text: "Direction, messaging, and structure agreed up front — with a clear scope, timeline, and price." },
  { icon: Code2,    title: "Build",    text: "Design and production code: fast, accessible, easy to edit, and search-engine friendly out of the box." },
  { icon: Rocket,   title: "Launch",   text: "QA, analytics, and tracking wired up, then we take it live and watch the first real traffic." },
  { icon: Sparkles, title: "Grow",     text: "We stay on as a partner — SEO, campaigns, and small improvements that compound month after month." },
];

const Process = () => (
  <section id="process" className="relative overflow-hidden bg-gradient-cream px-6 py-20 md:px-10 md:py-32">
    <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 blob bg-aqua-light/40 blur-3xl" />
    <div className="pointer-events-none absolute -left-16 bottom-20 h-72 w-72 blob-2 bg-sunset/15 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— The BrainGig way</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06] text-ink">
              Calm process. <span className="text-coral font-normal">Sharp output.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
              Five steps, no surprises. You always know what is happening, who is doing it,
              and what comes next. Typical timeline: 4–10 weeks.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link to="/contact-us" className="group inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3.5 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep sm:px-7 sm:py-4">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 md:mt-16">

        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07} className="h-full">
            <li className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl font-bold leading-none text-aqua/60 transition-colors group-hover:text-coral">
                  0{i + 1}
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-teal transition-colors group-hover:bg-coral group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);


/* ---------- Promises ---------- */
const Promises = () => (
  <section className="relative overflow-hidden bg-teal-deep px-6 py-20 text-white md:px-10 md:py-32">
    <div className="pointer-events-none absolute -top-20 right-10 h-80 w-80 blob bg-aqua/20 blur-3xl animate-float-slow" />
    <div className="pointer-events-none absolute bottom-0 -left-20 h-96 w-96 blob-2 bg-sunset/15 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-aqua">— Our promises to you</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06]">
            We don't just build websites.<br />
            We build <span className="text-sunset font-normal">momentum.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {[
          { n: "01", t: "Built to convert",         d: "Every section is designed to help people trust your business, understand your value, and take the next step." },
          { n: "02", t: "Made for mobile first",    d: "Most local discovery happens on a phone. Your business should look sharp there first, not last." },
          { n: "03", t: "Measured, not guessed",    d: "Analytics, tracking, and plain-English monthly reporting — so you know exactly what the work returned." },

        ].map((b, i) => (
          <Reveal key={b.n} delay={i * 0.12}>
            <div className="group">
              <div className="font-display text-6xl font-bold text-aqua/40 transition-colors group-hover:text-coral">{b.n}</div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-[1.7rem]">{b.t}</h3>
              <p className="mt-3 text-white/70">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => (
  <main className="relative">
    <Hero />
    <Strip />
    <ServicesOverview />
    <Reviews />
    <Work />
    <Industries />
    <Process />
    <Promises />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
