import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog: Video Prodüksiyon Rehberleri",
  description:
    "Sosyal medya videosu, kamera önü, çekim ve kurgu üzerine rehberler — sette öğrendiklerim.",
  alternates: { canonical: "https://fennixmedya.com/blog" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/blog",
    title: "Blog: Video Prodüksiyon Rehberleri",
    description:
      "Sosyal medya videosu, kamera önü, çekim ve kurgu üzerine rehberler — sette öğrendiklerim.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

import BlogList from "@/components/BlogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Blog</span>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
            Video Prodüksiyon <span className="text-primary">Rehberleri</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Markanızı büyütecek video stratejileri, ekipman karşılaştırmaları ve sektörel ipuçları.
          </p>
        </div>

        <Suspense fallback={null}>
          <BlogList />
        </Suspense>
      </section>
    </div>
  );
}
