import portHeysey from "@/assets/portfolio-heysey.png";
import portSshea from "@/assets/portfolio-sshea.png";
import portMjpillay from "@/assets/portfolio-mjpillay.png";
import portSanjuan from "@/assets/portfolio-sanjuan.png";
import portConfident from "@/assets/portfolio-confident.png";
import portDmartiis from "@/assets/portfolio-dmartiis.png";

export type PortfolioProject = {
  title: string;
  tag: string;
  location: string;
  href: string;
  img: string;
  /** Larger card in the featured masonry row */
  featured?: boolean;
  /** Extra grid placement classes for the home/featured layout */
  cls?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "HeySey.com",
    tag: "Travel Platform",
    location: "Seychelles",
    href: "https://heysey.com/",
    img: portHeysey,
    featured: true,
    cls: "md:col-span-7 md:row-span-2",
  },
  {
    title: "SSHEA",
    tag: "Hospitality Association",
    location: "Seychelles",
    href: "https://sshea.com/",
    img: portSshea,
    featured: true,
    cls: "md:col-span-5 md:row-span-1",
  },
  {
    title: "MJ Pillay",
    tag: "Property Management",
    location: "Seychelles",
    href: "https://mjpillay.com/",
    img: portMjpillay,
    featured: true,
    cls: "md:col-span-5 md:row-span-1",
  },
  {
    title: "San Juan Pools of Arizona",
    tag: "Home Services",
    location: "Arizona, USA",
    href: "https://sanjuanpoolsofarizona.com/",
    img: portSanjuan,
  },
  {
    title: "Confident & Capable",
    tag: "Education Directory",
    location: "United Kingdom",
    href: "https://confidentandcapable.co.uk/",
    img: portConfident,
  },
  {
    title: "Dmartiis",
    tag: "Real Estate",
    location: "Spain",
    href: "https://dmartiis.com/",
    img: portDmartiis,
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);
export const secondaryProjects = portfolioProjects.filter((p) => !p.featured);
