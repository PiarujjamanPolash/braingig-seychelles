import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/data/services";
import PageHero, { Section } from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/hooks/use-seo";
import Footer from "@/components/site/Footer";
import CTASection from "@/components/site/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);
  useSeo(
    service ? `${service.title} in Seychelles | BrainGig` : "Services | BrainGig",
    service ? service.short : "Digital services for Seychelles businesses."
  );
  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="relative">
      <PageHero
        eyebrow={service.title}
        title={service.hero}
        text={service.short}
        image={service.image}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-center md:text-left">
                <span className="text-xs uppercase tracking-[0.25em] text-palm">— Overview</span>
                <p className="mt-6 font-display text-2xl leading-snug text-ink md:text-3xl">{service.intro}</p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal y={50}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <div className="text-[11px] uppercase tracking-[0.25em] text-palm">What you get out of it</div>
                <ul className="mt-6 space-y-4">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-ink/85">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral/15 text-coral">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact-us" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-coral">
                  Talk to us about this <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-cream">
        <Reveal>
          <div className="mx-auto mb-8 max-w-3xl text-center md:mx-0 md:mb-14 md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— What's included</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
              Everything handled, <span className="font-normal text-coral">end to end.</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {service.deliverables.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.08} className="h-full">
              <div className="h-full rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
                <div className="font-display text-xs font-bold tracking-[0.2em] text-coral">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-center md:text-left">
                <span className="text-xs uppercase tracking-[0.25em] text-palm">— Questions</span>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
                  Good to <span className="font-normal text-coral">know.</span>
                </h2>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal y={40}>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`i${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg font-bold text-ink">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-cream">
        <Reveal>
          <div className="mb-8 flex flex-col flex-wrap items-center justify-between gap-4 text-center md:mb-12 md:flex-row md:items-end md:gap-6 md:text-left">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Explore other services</h2>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-coral">
              View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="h-full">
              <Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-teal transition-colors group-hover:bg-coral group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default ServiceDetail;
