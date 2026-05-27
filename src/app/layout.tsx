import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import { PageTransition } from "@/components/transitions/PageTransition";
import "./globals.css";

const themeScript = `
(function() {
  try {
    var storageKey = 'toretto-theme';
    var theme = localStorage.getItem(storageKey) || 'system';
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolvedTheme = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
    var root = document.documentElement;

    root.classList.toggle('dark', resolvedTheme === 'dark');
    root.style.colorScheme = resolvedTheme;
    root.dataset.theme = resolvedTheme;
  } catch (error) {}
})();
`;

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="app-shell min-h-full">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
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
