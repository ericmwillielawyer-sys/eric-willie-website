import { ALL_PAGES, PAGE_SEO, DOMAIN } from "@/lib/seo";

export default function sitemap() {
  return ALL_PAGES.map((path) => ({
    url: `${DOMAIN}${path === "/" ? "" : path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: PAGE_SEO[path]?.priority || 0.5,
  }));
}
