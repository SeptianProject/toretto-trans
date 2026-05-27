import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
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
  metadataBase: new URL("https://toretto-trans.example"),
  title: {
    default: "Toretto Trans Tour & Travel",
    template: "%s | Toretto Trans",
  },
  description:
    "Toretto Trans menyediakan Tour Travel Surabaya, Sewa Bis Surabaya, dan Paket Tour Pantai dengan layanan premium.",
  openGraph: {
    title: "Toretto Trans Tour & Travel",
    description:
      "Paket tour, sewa kendaraan, dan perjalanan wisata premium dari Surabaya.",
    url: "/",
    siteName: "Toretto Trans",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_32%),linear-gradient(180deg,#020617_0%,#0f172a_50%,#111827_100%)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
