import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/service-hero.jpg";
import { services } from "@/data/services";
import PageHero, { Section } from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/hooks/use-seo";
import Footer from "@/components/site/Footer";
import CTASection from "@/components/site/CTASection";

const Services = () => {
  useSeo(
    "Services | Web Design, SEO & Marketing for Seychelles Businesses",
    "Websites, online stores, landing pages, SEO, branding, social media and paid ads for businesses across Seychelles."
  );
  return (
  <main className="relative">
    <PageHero
      eyebrow="Services"
      title="Everything your business needs to be"
      highlight="found and chosen."
      text="From the first search to the signed job — websites, online stores, search visibility, branding, and campaigns, delivered by one team on one timeline."
      image={heroImg}
      crumbs={[{ label: "Services" }]}
    />

    <Section>
      <Reveal>
        <div className="mb-8 grid items-end gap-5 text-center md:mb-16 md:grid-cols-12 md:gap-10 md:text-left">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— What we do</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06] text-ink">
              Seven services, one <span className="font-normal text-coral">team.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:col-span-5 md:text-lg">
            We work as one agency. Most clients start with a website or brand system,
            then add search, content, and campaigns as the business grows.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
            <Link
              to={`/services/${s.slug}`}
              className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-teal transition-colors group-hover:bg-coral group-hover:text-white">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coral">
                Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section className="bg-gradient-cream">
      <Reveal>
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— How engagements work</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
              Start focused. Scale as it keeps <span className="font-normal text-coral">working.</span>
            </h2>
          </div>
          <Link to="/contact-us" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep">
            Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-8">
        {[
          { n: "01", t: "Discovery", d: "We map your goals, audience, and competitors, then scope the right service mix." },
          { n: "02", t: "Build", d: "Approve the direction and we build the full site, store, or brand system." },
          { n: "03", t: "Grow", d: "Search, content, and campaigns keep the calendar full through every season." },
        ].map((b, i) => (
          <Reveal key={b.n} delay={i * 0.1}>
            <div className="group rounded-[2rem] border border-border bg-card p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-float md:text-left">
              <div className="font-display text-5xl font-bold text-aqua/50 transition-colors group-hover:text-coral">{b.n}</div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <CTASection />
    <Footer />
  </main>
);
};

export default Services;
