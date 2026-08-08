import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, Sparkles, Waves } from "lucide-react";
import beachImg from "@/assets/about-hero.jpg";
import yachtImg from "@/assets/our-story.jpg";
import PageHero, { Section } from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/hooks/use-seo";
import Footer from "@/components/site/Footer";
import CTASection from "@/components/site/CTASection";

const values = [
  { icon: Waves, t: "Built for how people actually browse", d: "Mobile first, fast on modest connections, readable in bright sunlight — because that is where your customers are." },
  { icon: Sparkles, t: "Quality over volume", d: "We take a small number of clients each quarter so every project gets real attention." },
  { icon: HeartHandshake, t: "Partners, not vendors", d: "We stay involved after launch — measuring, refining, and improving as the business grows." },
  { icon: Compass, t: "Honest direction", d: "If a service will not move your revenue, we will tell you before you spend on it." },
];

const AboutUs = () => {
  useSeo(
    "About BrainGig | Digital Growth Agency for Seychelles Businesses",
    "BrainGig is a digital growth agency building websites, online stores, brands and marketing for businesses across Seychelles."
  );
  return (
  <main className="relative">
    <PageHero
      eyebrow="About Us"
      title="A small agency built around one idea:"
      highlight="good businesses deserve better websites."
      text="We work with shops, restaurants, clinics, contractors, professional firms, and operators across Mahé, Praslin, and La Digue."
      image={beachImg}
      crumbs={[{ label: "About Us" }]}
    />

    <Section>
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-palm">— Our story</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.08] text-ink">
              Strong businesses, <span className="font-normal text-coral">weak websites.</span>
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground md:text-lg">
              <p>
                We kept seeing the same gap. A shop with loyal customers and no way to sell online.
                A clinic doing excellent work behind a page that loads in nine seconds. A contractor
                losing quotes to a competitor with a better first impression.
              </p>
              <p>
                BrainGig exists to close that gap. We handle the digital side of the business —
                website, online store, branding, search visibility, and campaigns — so what people
                find online matches the standard of the work you actually do.
              </p>
              <p>
                We are deliberately small, deliberately hands-on, and focused on one measure of
                success: more enquiries and more revenue for the people we work with.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal y={50}>
            <img src={yachtImg} alt="BrainGig working with businesses across Seychelles" loading="lazy" className="h-full min-h-[18rem] w-full rounded-[2rem] object-cover shadow-float md:min-h-[24rem]" />
          </Reveal>
        </div>
      </div>
    </Section>

    <Section className="bg-teal-deep text-white">
      <Reveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ["40+", "Businesses supported"],
            ["3", "Main islands covered"],
            ["2x", "Average lift in enquiries"],
            ["24h", "Typical response time"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-bold text-sunset sm:text-5xl md:text-6xl">{n}</div>
              <div className="mt-3 text-sm text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>

    <Section className="bg-gradient-cream">
      <Reveal>
        <div className="mb-8 max-w-3xl md:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-palm">— How we work</span>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.08] text-ink">
            The principles behind every <span className="font-normal text-coral">project.</span>
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {values.map((v, i) => (
          <Reveal key={v.t} delay={(i % 2) * 0.08} className="h-full">
            <div className="h-full rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-teal">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-8 md:mt-14">
          <Link to="/services" className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-card px-7 py-4 text-sm font-medium text-ink shadow-soft transition-all hover:bg-ink hover:text-white">
            See what we do <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </Section>

    <CTASection
      eyebrow="— Let's talk"
      title="Tell us about your business and we'll show you what's"
      highlight="possible."
      text="Book a relaxed call. We'll come with ideas specific to your business, your customers, and your market."
    />

    <Footer />
  </main>
);
};

export default AboutUs;
