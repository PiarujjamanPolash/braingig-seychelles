import { MessageCircle, Phone } from "lucide-react";
import divingImg from "@/assets/contact-hero.webp";
import PageHero, { Section } from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/hooks/use-seo";
import Footer from "@/components/site/Footer";
import CTASection from "@/components/site/CTASection";
import ReservationForm from "@/components/site/ReservationForm";

const details = [
  { icon: Phone, label: "Phone", value: "+248 2 614 082", href: "tel:+2482614082" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message the agency", href: "https://wa.me/2482614082" },
];

const ContactUs = () => {
  useSeo(
    "Contact BrainGig | Digital Agency in Seychelles",
    "Talk to BrainGig about websites, branding, SEO, and campaigns for your Seychelles business. We reply within 24 hours."
  );
  return (
  <main className="relative">
    <PageHero
      eyebrow="Contact Us"
      title="Let's talk about your business,"
      highlight="and where it should be going."
      text="Send us a few details and we'll come back within 24 hours — usually with a first idea already sketched out."
      image={divingImg}
      crumbs={[{ label: "Contact Us" }]}
    />

    <Section>
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <Reveal>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-palm">— Get in touch</span>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.08] text-ink">
                We reply to every message, <span className="font-normal text-coral">personally.</span>
              </h2>

              <p className="mt-6 text-muted-foreground md:text-lg">
                Whether you are planning a new website or just have a question about your
                current website, this is the right place to start.
              </p>

              <div className="mt-10 grid gap-4">
                {details.map((d) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-soft transition-colors hover:border-coral">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-teal">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-ink/50">{d.label}</div>
                        <div className="font-display text-base font-bold text-ink">{d.value}</div>
                      </div>
                    </div>
                  );
                  return d.href
                    ? <a key={d.label} href={d.href} className="block">{inner}</a>
                    : <div key={d.label}>{inner}</div>;
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-sand/60 p-5 text-sm text-ink/75">
                Agency hours: Monday to Friday, 08:00 – 17:00 (SCT, UTC+4).
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal y={50}>
            <ReservationForm />
          </Reveal>
        </div>
      </div>
    </Section>

    <CTASection
      eyebrow="— Or book directly"
      title="Pick a time that suits"
      highlight="you."
      text="Choose a slot in the calendar below and we'll meet you there."
    />
    <Footer />
  </main>
);
};

export default ContactUs;
