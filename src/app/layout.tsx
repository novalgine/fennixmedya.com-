import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fennixmedya.com"),
  title: {
    default: "Fennix Medya | Premium Video Prodüksiyon İstanbul",
    template: "%s | Fennix Medya",
  },
  description:
    "İstanbul merkezli profesyonel video prodüksiyon ajansı. Sosyal medya videoları, kurumsal tanıtım filmleri ve YouTube içerik üretimi. Ayda sadece 6 saat ayırarak 30 günlük video içeriğe sahip olun.",
  keywords: [
    "video prodüksiyon İstanbul",
    "kurumsal tanıtım filmi",
    "sosyal medya video çekimi",
    "YouTube içerik üretimi",
    "profesyonel video çekimi",
    "Fennix Medya",
  ],
  authors: [{ name: "Semih Hasanoğlu" }],
  creator: "Fennix Medya",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://fennixmedya.com",
    siteName: "Fennix Medya",
    title: "Fennix Medya | Premium Video Prodüksiyon İstanbul",
    description:
      "Ayda sadece 6 saat ayırarak 30 günlük yüksek kaliteli video içeriğe sahip olun. Profesyonel çekim, kurgu ve metin yazarlığı hizmeti.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fennix Medya | Premium Video Prodüksiyon",
    description: "İstanbul'da profesyonel video prodüksiyon hizmeti.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fennixmedya.com",
  },
};

import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://fennixmedya.com/#organization",
              name: "Fennix Medya",
              image: "https://fennixmedya.com/og-image.jpg",
              logo: "https://fennixmedya.com/logo.png",
              description: "İstanbul merkezli profesyonel video prodüksiyon ajansı. Sosyal medya yönetimi, kurumsal tanıtım filmi, YouTube içerik üretimi.",
              url: "https://fennixmedya.com",
              telephone: "+905000000000",
              areaServed: { "@type": "City", name: "İstanbul" },
              address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
              serviceType: ["Video Prodüksiyon", "Kurumsal Tanıtım Filmi", "Sosyal Medya İçerik Üretimi", "YouTube İçerik Üretimi"],
              founder: { "@type": "Person", name: "Semih Hasanoğlu", jobTitle: "Video Prodüktör & Kreatif Direktör" },
              priceRange: "$$$",
              sameAs: [
                "https://www.instagram.com/fennixmedya",
                "https://www.youtube.com/@fennixmedya",
                "https://www.linkedin.com/company/fennixmedya"
              ]
            },
            { "@type": "WebSite", "@id": "https://fennixmedya.com/#website", name: "Fennix Medya", url: "https://fennixmedya.com", publisher: { "@id": "https://fennixmedya.com/#organization" } },
          ],
        }} />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
