import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Nav from "./Nav";

const PageHero = ({
  eyebrow, title, highlight, text, image, crumbs = [],
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
}) => (
  <section className="relative flex h-[100svh] max-h-[100svh] flex-col overflow-hidden">
    <Nav overlay />
    {/* Match home hero: full viewport + scaled cover so edges don’t clip */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-[center_20%]"
      style={{ backgroundImage: `url(${image})`, transform: "scale(1.08)" }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-deep/70 via-teal-deep/55 to-teal-deep/85" />
    <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center px-6 pb-16 pt-28 md:px-10 md:pb-20">
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-white/60">
        <Link to="/" className="hover:text-white">Home</Link>
        {crumbs.map((c) => (
          <span key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white/90">{c.label}</span>}
          </span>
        ))}
      </nav>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
        {eyebrow}
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[1.04] text-white text-balance">
        {title} {highlight && <span className="font-normal text-sunset">{highlight}</span>}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-white/85 text-pretty">{text}</p>
    </div>
  </section>
);

export const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`px-6 py-24 md:px-10 md:py-32 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

export default PageHero;
