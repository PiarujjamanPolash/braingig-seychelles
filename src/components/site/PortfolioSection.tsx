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
  <div className="group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-ink shadow-soft block aspect-video",
        cls
      )}
    >
      <img
        src={img}
        alt={`${title} website`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {tag}
      </div>
    </a>
    <div className="mt-4 px-1 text-center md:text-left">
      <h3 className="font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{location}</p>
    </div>
  </div>
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
  compact = true,
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
        <div className="mb-8 grid items-end gap-5 text-center md:mb-16 md:grid-cols-12 md:gap-10 md:text-left">
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
              <PortfolioCard key={p.title} {...p} />
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
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-medium text-white shadow-coral transition-all hover:bg-coral-deep"
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
