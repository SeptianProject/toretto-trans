import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import { PageTransition } from "@/components/transitions/PageTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toretto.biz.id"),
  title: {
    default: "Toretto Trans | Sewa Bus & Mobil Surabaya",
    template: "%s | Toretto Trans Surabaya",
  },
  description:
    "Layanan sewa bus pariwisata, mobil harian, dan paket tour travel dari Surabaya. Armada premium, harga transparan, dan terpercaya.",
  keywords: [
    "sewa bus surabaya",
    "sewa mobil surabaya",
    "tour travel surabaya",
    "rental hiace surabaya",
    "toretto trans",
  ],
  openGraph: {
    title: "Toretto Trans | Sewa Bus & Mobil Surabaya",
    description:
      "Paket tour, sewa kendaraan, dan perjalanan wisata premium dari Surabaya.",
    url: "https://toretto.biz.id",
    siteName: "Toretto Trans",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
  verification: {
    google:
      "google-site-verification=5DSjLU2ZIQ88StpPAC-v509BWuJqEgb8dZW0TVMPzx4",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      data-theme="light"
      className={`light ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="app-shell min-h-full">
        <AppProviders>
          <div className="min-h-screen app-hero">
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
