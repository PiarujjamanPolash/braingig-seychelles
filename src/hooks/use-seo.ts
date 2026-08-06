import { useEffect } from "react";

export const useSeo = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    const set = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.startsWith("og:") ? "property" : "name", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    set('meta[name="description"]', "description", description);
    set('meta[property="og:title"]', "og:title", title);
    set('meta[property="og:description"]', "og:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + window.location.pathname;
  }, [title, description]);
};

export default useSeo;
