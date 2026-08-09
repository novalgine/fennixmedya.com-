import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import WizardCta from "@/components/WizardCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Sosyal medya videoları, kurumsal tanıtım filmleri, YouTube içerik üretimi ve anahtar teslim stüdyo kurulumu. İstanbul merkezli profesyonel video prodüksiyon hizmetleri.",
  alternates: { canonical: "https://fennixmedya.com/hizmetler" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler",
    title: "Hizmetlerimiz",
    description:
      "Sosyal medya videoları, kurumsal tanıtım filmleri, YouTube içerik üretimi ve anahtar teslim stüdyo kurulumu.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Fennix Medya Hizmetleri",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://fennixmedya.com${s.href}`,
          })),
        }}
      />
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <Breadcrumbs items={[{ name: "Hizmetler" }]} />

        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Hizmetler
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
            Video Prodüksiyon <span className="text-gradient-gold">Çözümlerimiz</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Markanızın ihtiyacına göre uçtan uca tasarlanmış dört ana hizmet.
            Hepsinde aynı standart: sinematik kalite, stratejik kurgu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={`group block h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${service.border}`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-6`}
              >
                <service.icon className="w-7 h-7 text-foreground/80 group-hover:text-primary transition-colors" />
              </div>

              <h2 className="font-heading font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                İncele <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-card border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Hangisinin size uygun olduğundan emin değil misiniz?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            15 dakikalık ücretsiz strateji görüşmesinde markanız için en doğru çözümü birlikte
            belirleyelim.
          </p>
          <WizardCta />
        </div>
      </section>
    </div>
  );
}
