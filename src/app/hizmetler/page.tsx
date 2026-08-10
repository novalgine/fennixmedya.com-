import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import WizardCta from "@/components/WizardCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const OZET =
  "Sosyal medya videosu, kurumsal tanıtım filmi, YouTube içerik üretimi ve anahtar teslim stüdyo kurulumu. İstanbul'da senaryodan teslimata kadar tek elden video prodüksiyon.";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler",
    title: "Hizmetler",
    description: OZET,
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
          name: "Fennix Medya hizmetleri",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://fennixmedya.com${s.href}`,
          })),
        }}
      />

      <section className="container-page pt-8 pb-16 md:pb-20">
        <Breadcrumbs items={[{ name: "Hizmetler" }]} />

        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-4 mt-8">
            Ne yapıyorum
          </p>
          <h1 className="text-poster mb-8">
            <span className="block text-foreground">Dört İş.</span>
            <span className="block text-gradient-gold">Hepsi Bende.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Aralarındaki tek fark format ve ritim. Hangisini seçerseniz seçin, metni birlikte
            kurar, çekimi ben yapar, kurguyu ben bitiririm — arada devreden çıkan kimse olmaz.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14 items-stretch">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-surface border-t border-border/40">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-display-2 text-foreground mb-4">Hangisi Size Uyar?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Emin değilseniz 15 dakikalık görüşmede konuşalım. Markanızı dinledikten sonra
              hangisinin işe yarayacağını söylemek benim işim.
            </p>
            <WizardCta />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
