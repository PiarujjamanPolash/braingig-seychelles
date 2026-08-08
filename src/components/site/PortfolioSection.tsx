import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  featuredProjects,
  portfolioProjects,
  secondaryProjects,
  type PortfolioProject,
} from "@/data/portfolio";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const PortfolioCard = ({
  img,
  href,
  tag,
  title,
  location,
  cls,
}: PortfolioProject & { cls?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group relative overflow-hidden rounded-[2rem] bg-ink shadow-soft",
      cls
    )}
  >
    <img
      src={img}
      alt={`${title} website`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition-[transform,opacity] duration-[1.2s] ease-out group-hover:scale-[1.04] group-hover:opacity-70"
    />
    <div className="absolute inset-0 bg-ink/35" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/95 to-transparent" />
    <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {tag}
    </div>
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-7">
      <div>
        <div className="font-display text-2xl font-bold leading-tight [text-shadow:0_2px_12px_hsl(var(--ink)/0.55)] md:text-[1.75rem]">
          {title}
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/85 [text-shadow:0_1px_8px_hsl(var(--ink)/0.5)]">
          {location}
        </div>
      </div>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-all group-hover:bg-coral group-hover:rotate-45">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </div>
  </a>
);

type PortfolioSectionProps = {
  id?: string;
  className?: string;
  /** Compact grid: equal cards only (no featured masonry) */
  compact?: boolean;
  showCta?: boolean;
  ctaToContact?: boolean;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
};

const PortfolioSection = ({
  id = "work",
  className,
  compact = false,
  showCta = true,
  ctaToContact = false,
  eyebrow = "— Selected Work",
  title = (
    <>
      A small slice of the
      <span className="font-normal text-coral"> work we've shipped.</span>
    </>
  ),
  description = "Live platforms and brand sites we've designed and built — from Seychelles travel and hospitality to property, pools, and community directories abroad.",
}: PortfolioSectionProps) => (
  <section id={id} className={cn("relative px-6 py-16 md:px-10 md:py-32", className)}>
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <div className="mb-8 grid items-end gap-5 md:mb-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-palm">{eyebrow}</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.06] text-ink">
              {title}
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:col-span-5 md:text-lg">{description}</p>
        </div>
      </Reveal>

      {compact ? (
        <Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((p) => (
              <PortfolioCard key={p.title} {...p} cls="h-72 sm:h-80" />
            ))}
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:[grid-template-rows:20rem_20rem]">
              {featuredProjects.map((p) => (
                <PortfolioCard key={p.title} {...p} cls={`${p.cls ?? ""} h-72 sm:h-80 md:h-auto`} />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:[grid-auto-rows:20rem]">
              {secondaryProjects.map((p) => (
                <PortfolioCard key={p.title} {...p} cls="h-72 sm:h-80 md:h-auto" />
              ))}
            </div>
          </Reveal>
        </>
      )}

      {showCta && (
        <div className="mt-8 flex justify-center md:mt-14">
          {ctaToContact ? (
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-card px-7 py-4 text-sm font-medium text-ink shadow-soft transition-all hover:bg-ink hover:text-white"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-card px-7 py-4 text-sm font-medium text-ink shadow-soft transition-all hover:bg-ink hover:text-white"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      )}
    </div>
  </section>
);

export default PortfolioSection;
