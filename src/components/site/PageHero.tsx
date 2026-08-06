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
  <section className="relative overflow-hidden">
    <Nav overlay />
    <div className="absolute inset-0 -z-10">
      <img src={image} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/70 via-teal-deep/55 to-teal-deep/85" />
    </div>
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
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
