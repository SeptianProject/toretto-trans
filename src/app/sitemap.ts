import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toretto.biz.id";

  const staticRoutes = [
    "",
    "/tour",
    "/destinasi",
    "/sewa-mobil",
    "/sewa-bus",
    "/tentang",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Mockup untuk dynamic routes (ganti dengan fetch dari database/CMS)
  // const carIds = ['1', '2', '3'];
  // const dynamicCarRoutes = carIds.map(id => ({ ... }))

  return [...staticRoutes];
}
