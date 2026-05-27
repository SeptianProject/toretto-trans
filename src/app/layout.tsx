import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
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
  icons: {
    icon: "/PT_New_Toretto_Trans_Logo.jpeg",
    apple: "/PT_New_Toretto_Trans_Logo.jpeg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("toretto-theme")?.value;
  const themeClass =
    themeCookie === "dark" || themeCookie === "light" ? themeCookie : undefined;

  return (
    <html
      lang="id"
      suppressHydrationWarning
      data-theme={themeClass}
      className={`${themeClass ?? ""} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
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
