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
    default: "PT New Toretto Trans Tour & Travel",
    template: "%s | PT New Toretto Trans",
  },
  description:
    "PT New Toretto Trans menyediakan Tour Travel Surabaya, Sewa Bis Surabaya, dan Paket Tour Pantai dengan layanan premium.",
  openGraph: {
    title: "PT New Toretto Trans Tour & Travel",
    description:
      "Paket tour, sewa kendaraan, dan perjalanan wisata premium dari Surabaya.",
    url: "/",
    siteName: "PT New Toretto Trans",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
    shortcut: "/favicon.ico",
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
