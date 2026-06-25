import { MetadataRoute } from "next";
import { mockTours, mockVehicles } from "@/data/mock";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pastikan HARUS tanpa trailing slash di akhir
  const baseUrl = "https://toretto.biz.id";
  const now = new Date();

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/tour",
    "/destinasi",
    "/sewa-mobil",
    "/sewa-bus",
    "/tentang",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Tour Routes
  const tourRoutes: MetadataRoute.Sitemap = mockTours.map((t) => ({
    url: `${baseUrl}/tour/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 3. Dynamic Vehicle Routes
  const vehicleRoutes: MetadataRoute.Sitemap = mockVehicles.map((v) => ({
    url: `${baseUrl}/${v.type === "mobil" ? "sewa-mobil" : "sewa-bus"}/${v.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...tourRoutes, ...vehicleRoutes];
}
