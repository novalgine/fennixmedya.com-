import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import { WizardProvider } from "@/components/WizardContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["700", "800"],
  display: "swap",
});

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
    // og:image, app/opengraph-image.tsx dosya konvansiyonundan otomatik gelir
  },
  twitter: {
    card: "summary_large_image",
    title: "Fennix Medya | Premium Video Prodüksiyon",
    description: "İstanbul'da profesyonel video prodüksiyon hizmeti.",
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
import FacebookPixel from "@/components/FacebookPixel";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        {/* Favicon is handled by Next.js icon.tsx automatically */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://fennixmedya.com/#organization",
              name: "Fennix Medya",
              image: "https://fennixmedya.com/opengraph-image",
              logo: "https://fennixmedya.com/apple-icon",
              description: "İstanbul merkezli profesyonel video prodüksiyon ajansı. Sosyal medya yönetimi, kurumsal tanıtım filmi, YouTube içerik üretimi.",
              url: "https://fennixmedya.com",
              telephone: "+905467407084",
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
      <body className={`${inter.variable} ${manrope.variable} font-body antialiased overflow-x-hidden relative w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <WizardProvider>
            <SmoothScroll>
            <div className="relative flex flex-col min-h-screen overflow-x-clip w-full">
              <SiteHeader />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
              <CookieBanner />
              <FacebookPixel />

            </div>
            </SmoothScroll>
          </WizardProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
