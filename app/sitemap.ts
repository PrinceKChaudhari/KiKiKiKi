import allDocs from "@/.velite/docs.json";
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, priority: 1 }, { url: siteUrl + "/pricing" }, { url: siteUrl + "/themes" }, ...allDocs.map(doc => ({ url: siteUrl + doc.url, lastModified: doc.lastUpdated }))];
}
