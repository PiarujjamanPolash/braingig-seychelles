import { Anchor } from "lucide-react";
import Reveal from "./Reveal";
import CalendlyEmbed from "./CalendlyEmbed";

const CTASection = ({
  eyebrow = "— Reservation",
  title = "Let's talk about your",
  highlight = "next project.",
  text = "Pick a time that works for you and we'll come prepared with ideas tailored to your brand.",
}: { eyebrow?: string; title?: string; highlight?: string; text?: string }) => (
  <section id="contact" className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-36">
    <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 blob bg-aqua-light/40 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 blob-2 bg-sunset/15 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-palm">{eyebrow}</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-semibold leading-[1.05] text-ink text-balance">
            {title} <span className="font-normal text-coral">{highlight}</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">{text}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft">
            <Anchor className="h-4 w-4 shrink-0 text-coral" />
            <p className="text-xs text-ink/75 md:text-sm">
              A focused conversation about your brand, your goals, and what we'd build.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal y={50} className="mt-14">
        <CalendlyEmbed />
      </Reveal>
    </div>
  </section>
);

export default CTASection;
