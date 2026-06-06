import Head from "next/head";
import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  url,
  image = "/logo.png",
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    // fallback icon entries are handled in layout.tsx
  } as Metadata;
}

// Client-side component for pages that prefer runtime insertion of meta + JSON-LD
export default function Seo({
  title,
  description,
  url,
  image = "/logo.png",
}: SEOProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT New Toretto Trans",
    url,
    logo: image,
    telephone: "+6285103632966",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name: title,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Ensure canonical is absolute when a relative path is provided
  let canonical = url;
  try {
    if (typeof window !== "undefined") {
      if (url && url.startsWith("/"))
        canonical = `${window.location.origin}${url}`;
    }
  } catch {
    // fallback: leave url unchanged
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonical} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </Head>
  );
}
