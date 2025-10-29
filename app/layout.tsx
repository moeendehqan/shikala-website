import type { Metadata } from "next";
import Script from "next/script";
import { Vazirmatn, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const vazirmatn = Vazirmatn({
  variable: "--font-fa-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://shikala.ir"),
  title: {
    default: "شیکالا | وب‌سایت رسمی",
    template: "%s | شیکالا",
  },
  description:
    "شیکالا؛ معرفی خدمات و محصولات با تمرکز بر سرعت، تجربه کاربری و سئوی عالی.",
  keywords: [
    "شیکالا",
    "سئو",
    "Next.js",
    "واکنش‌گرا",
    "عملکرد بالا",
    "وب‌سایت",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "شیکالا | وب‌سایت رسمی",
    description:
      "شیکالا؛ معرفی خدمات و محصولات با تمرکز بر سرعت، تجربه کاربری و سئوی عالی.",
    siteName: "شیکالا",
    locale: "fa_IR",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "شیکالا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شیکالا | وب‌سایت رسمی",
    description:
      "شیکالا؛ معرفی خدمات و محصولات با تمرکز بر سرعت، تجربه کاربری و سئوی عالی.",
    images: ["/vercel.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${vazirmatn.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "شیکالا",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shikala.ir",
              logo:
                (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shikala.ir") +
                "/favicon.ico",
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shikala.ir",
              name: "شیکالا",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shikala.ir") +
                  "/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
