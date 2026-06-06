import { NextResponse } from "next/server";
import { metadata as rootMetadata } from "@/app/layout";

const STATIC_PAGES = [
  "/",
  "/tour",
  "/destinasi",
  "/sewa-mobil",
  "/sewa-bus",
  "/tentang",
];

function getBaseUrl() {
  try {
    const base = (rootMetadata && (rootMetadata as any).metadataBase) || null;
    if (base) return base.toString();
  } catch (e) {
    // ignore
  }
  return "https://toretto.biz.id";
}

export async function GET() {
  const baseUrl = getBaseUrl();
  const now = new Date().toISOString().slice(0, 10);

  const urls = STATIC_PAGES.map((p) => ({
    loc: `${baseUrl}${p}`,
    lastmod: now,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
