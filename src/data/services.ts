import {
  Globe, ShoppingBag, LayoutTemplate, Search, Palette, Share2, Megaphone,
  type LucideIcon,
} from "lucide-react";

import hotelsImg from "@/assets/bw-hero.jpg";
import beachImg from "@/assets/landing-hero-1.jpg";
import yachtImg from "@/assets/ecom-hero.jpg";
import divingImg from "@/assets/pm-hero.jpg";
import port1 from "@/assets/sm-hero.jpg";
import port2 from "@/assets/seo-hero.jpg";
import port6 from "@/assets/brand-hero.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  hero: string;
  intro: string;
  image: string;
  outcomes: string[];
  deliverables: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    icon: Globe,
    title: "Business Websites",
    short: "Complete websites built for clarity, credibility, and measurable growth.",
    hero: "Websites that turn attention into business growth.",
    intro:
      "Most local businesses in Seychelles are strong in person and quiet online. We design and build complete business websites — custom design, responsive layouts, and SEO-ready structure — so shops, clinics, contractors, agencies, and operators look as capable online as they are on the ground.",
    image: hotelsImg,
    outcomes: [
      "A site customers trust within the first five seconds",
      "Clear structure that answers questions before they are asked",
      "Fast on mobile networks, ready for search engines",
    ],
    deliverables: [
      { title: "Custom design", text: "No templates. A visual language drawn from your brand, your market, and your customers." },
      { title: "Responsive build", text: "Designed for the phone screen where most local discovery happens." },
      { title: "Content structure", text: "Messaging, page flow, and calls to action written to lead people to contact you." },
      { title: "SEO foundations", text: "Optimised images, clean markup, metadata, and technical SEO from day one." },
    ],
    faqs: [
      { q: "How long does a business website take?", a: "Most sites go live in four to eight weeks depending on scope and how quickly content comes together." },
      { q: "Do you write the content?", a: "Yes. Copywriting and content structure are part of every build — you review and approve it." },
    ],
  },
  {
    slug: "ecommerce",
    icon: ShoppingBag,
    title: "eCommerce & Online Stores",
    short: "Storefronts and booking systems engineered for revenue and retention.",
    hero: "Sell online, take payments, and keep the margin.",
    intro:
      "Whether you sell products, services, or time slots, we build Shopify, WooCommerce, and custom storefronts that handle payments, stock, and confirmations properly — so you sell directly instead of paying a platform for every order.",
    image: yachtImg,
    outcomes: [
      "Direct sales without per-order commissions",
      "Real stock and availability, no double selling",
      "Checkout that works for local and international customers",
    ],
    deliverables: [
      { title: "Store design", text: "Structured listings for products, services, appointments, or slots." },
      { title: "Payments", text: "Secure card payments with international currency support." },
      { title: "Inventory & scheduling", text: "Stock and calendar-driven availability so nothing oversells." },
      { title: "Automated notifications", text: "Order confirmations, reminders, and follow-ups handled for you." },
    ],
    faqs: [
      { q: "Can it connect to my existing systems?", a: "In most cases yes — we integrate with common POS, booking, and accounting tools." },
      { q: "What about commissions?", a: "You pay your payment processor's fee only. We take nothing per order." },
    ],
  },
  {
    slug: "landing-pages",
    icon: LayoutTemplate,
    title: "Landing Pages",
    short: "Single-purpose pages built to turn attention into enquiries.",
    hero: "One page. One goal. Built entirely around the enquiry.",
    intro:
      "A landing page is the fastest way to test an offer, a promotion, or a new service line. We design focused pages with a single path forward, so every visitor either contacts you, buys, or leaves knowing exactly what you do.",
    image: beachImg,
    outcomes: [
      "Higher conversion from ads and social traffic",
      "A page you can launch in days, not months",
      "Clear measurement of what is actually working",
    ],
    deliverables: [
      { title: "Offer positioning", text: "We sharpen the promise so it is impossible to misunderstand." },
      { title: "Conversion-led layout", text: "Proof, detail, and reassurance in the order people actually need them." },
      { title: "Forms & tracking", text: "Enquiry forms, WhatsApp handoff, and analytics wired in." },
      { title: "A/B ready", text: "Built so headlines and offers can be tested without a rebuild." },
    ],
    faqs: [
      { q: "Can you build a single campaign landing page?", a: "Yes — we design and build focused landing pages for promotions, launches, and paid campaigns." },
      { q: "Can it live on my current domain?", a: "Absolutely, as a subpage or subdomain of your existing site." },
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO & Local Search",
    short: "Rankings, traffic, and calls — earned the honest way.",
    hero: "Be the business people find when they search in Seychelles.",
    intro:
      "Most buying decisions start with a search. We make sure your business appears for the products, services, and questions your customers are typing — with technical SEO, Google Business Profile work, and content that earns the ranking.",
    image: port2,
    outcomes: [
      "Visibility for high-intent local searches",
      "A Google Business Profile that actually generates calls",
      "Steady traffic that does not stop when ads stop",
    ],
    deliverables: [
      { title: "Technical SEO", text: "Speed, indexing, structured data, and clean site architecture." },
      { title: "Keyword & intent research", text: "What your customers search before buying, mapped to your pages." },
      { title: "Local presence", text: "Google Business Profile, maps, reviews, and directory consistency." },
      { title: "Content plan", text: "Pages and guides that answer real customer questions." },
    ],
    faqs: [
      { q: "How fast will I see results?", a: "Local and technical wins can show within weeks; competitive rankings typically take three to six months." },
      { q: "Do you guarantee page one?", a: "No honest agency does. We guarantee the work, the reporting, and steady measurable progress." },
    ],
  },
  {
    slug: "branding-design",
    icon: Palette,
    title: "Branding & Design",
    short: "Identity and design systems that make a business look established.",
    hero: "Look like the business you already are.",
    intro:
      "Pricing power comes from perception. We build identities — logo, palette, typography, imagery direction, and tone — that position your business at the level it deserves, consistently across every touchpoint.",
    image: port6,
    outcomes: [
      "Instant recognition across web, print, and social",
      "Confidence to charge what your work is worth",
      "A brand kit your whole team can apply correctly",
    ],
    deliverables: [
      { title: "Identity system", text: "Logo suite, colour, typography, and graphic language." },
      { title: "Brand guidelines", text: "A practical document your staff and suppliers can follow." },
      { title: "Collateral", text: "Signage, menus, price lists, brochures, and social templates." },
      { title: "Art direction", text: "Shot lists and direction so future images stay on brand." },
    ],
    faqs: [
      { q: "Can you refresh instead of rebuild?", a: "Yes. Many clients keep their name and heritage while we modernise the execution." },
      { q: "Do we own the files?", a: "Completely. You receive all source files and full rights." },
    ],
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Management",
    short: "Consistent, on-brand presence on the channels your customers use.",
    hero: "Stay visible every week, not just when you remember.",
    intro:
      "Facebook and Instagram are where local businesses are recommended, compared, and remembered. We plan, produce, and publish content that keeps you in that conversation — and route the interest it creates back to your website.",
    image: port1,
    outcomes: [
      "A feed that looks intentional, not improvised",
      "Consistent posting without the daily scramble",
      "Followers that turn into enquiries",
    ],
    deliverables: [
      { title: "Content calendar", text: "Monthly planning aligned to your offers and busy periods." },
      { title: "Design & captions", text: "On-brand visuals and copy in English and French." },
      { title: "Publishing & community", text: "Scheduled posts, stories, and reply management." },
      { title: "Monthly reporting", text: "Reach, engagement, and the enquiries it produced." },
    ],
    faqs: [
      { q: "Do you produce the content?", a: "Yes — we design and write everything, and we can work from photos and clips your team captures." },
      { q: "Which platforms?", a: "Typically Facebook, Instagram, and TikTok, plus Google Business updates." },
    ],
  },
  {
    slug: "paid-ads",
    icon: Megaphone,
    title: "Paid Advertising",
    short: "Google and Meta campaigns measured down to the enquiry.",
    hero: "Reach the customer who is already looking for you.",
    intro:
      "Paid media works when the targeting, the offer, and the landing page agree with each other. We run Meta and Google campaigns aimed at high-intent buyers in your market, set up tracking properly, and report on what it actually returned.",
    image: divingImg,
    outcomes: [
      "Enquiries you can trace back to spend",
      "Lower cost per lead through tight targeting",
      "Campaigns that scale up and down with demand",
    ],
    deliverables: [
      { title: "Campaign strategy", text: "Markets, audiences, seasonality, and budget plan." },
      { title: "Creative production", text: "Ad visuals, video cutdowns, and copy variants." },
      { title: "Tracking setup", text: "Pixels, conversions, and attribution done properly." },
      { title: "Ongoing optimisation", text: "Weekly management with transparent monthly reporting." },
    ],
    faqs: [
      { q: "What budget should I start with?", a: "Most local businesses start meaningfully from around €500 per month in ad spend." },
      { q: "Do I need a landing page first?", a: "Strongly recommended — ads sent to a weak page waste budget." },
    ],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
