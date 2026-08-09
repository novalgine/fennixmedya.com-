import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WizardCta from "@/components/WizardCta";
import OtherServices from "@/components/OtherServices";
import LazyHeroVideo from "@/components/LazyHeroVideo";

export const metadata: Metadata = {
  title: "Kurumsal Tanıtım Filmi Çekimi",
  description:
    "Markanızın vizyonunu ve değerini kurumsal prestijinizi en üst seviyeye taşıyan stratejik marka filmleriyle anlatıyoruz.",
  alternates: { canonical: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi",
    title: "Kurumsal Tanıtım Filmi Çekimi",
    description: "Markanızın vizyonunu ve değerini kurumsal prestijinizi en üst seviyeye taşıyan stratejik marka filmleriyle anlatıyoruz.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const faqs = [
  { q: "Kurumsal tanıtım filmi ne kadar sürer?", a: "Projenin kapsamına göre 1-3 dakikalık filmler üretiyoruz. Araştırmalar, 2 dakikanın altındaki filmlerin en yüksek izlenme oranına sahip olduğunu gösteriyor." },
  { q: "Çekim süreci nasıl işliyor?", a: "Ön prodüksiyon (senaryo + storyboard) → Çekim günü (1-2 gün) → Post-prodüksiyon (kurgu + renk düzeltme + ses) → Revizyon → Final teslimat. Toplam süre 2-4 hafta." },
  { q: "Drone çekimi dahil mi?", a: "Evet, lokasyonun uygun olduğu projelerde drone çekimi ek ücret olmadan paketimize dahildir." },
];

export default function KurumsalTanitimFilmiPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kurumsal Tanıtım Filmi Prodüksiyonu",
          serviceType: "Video Prodüksiyon",
          description: "Markanızın vizyonunu ve değerini anlatan stratejik kurumsal tanıtım filmleri; senaryo, çekim ve post-prodüksiyon dahil uçtan uca hizmet.",
          url: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
        }}
      />
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Hizmetlerimiz — Yatay Format
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Kurumsal Tanıtım <span className="text-gradient-gold">Filmi</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              Markanızın hikayesini, değerlerini ve vizyonunu sinematik kalitede anlatan profesyonel tanıtım filmleri. 
              Web siteniz, fuarlar, yatırımcı sunumları ve sosyal medya için kullanılabilir.
            </p>
            <WizardCta />
          </div>
          <div className="relative w-full aspect-video flex items-center justify-center group rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-black">
            <LazyHeroVideo
              src="/videos/portfolyo/petadress.mp4"
              poster="/videos/portfolyo/petadress.jpg"
              title="Kurumsal Tanıtım Filmi Örneği"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">Süreç</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Keşif", desc: "Markanızı, hedef kitlenizi ve mesajınızı anlıyoruz." },
            { step: "02", title: "Senaryo", desc: "Hikayenizi kağıda döküyor, storyboard hazırlıyoruz." },
            { step: "03", title: "Çekim", desc: "Profesyonel ekipmanlarla lokasyon veya stüdyo çekimi." },
            { step: "04", title: "Teslimat", desc: "Renk düzeltme, ses tasarımı ve final kurgu." },
          ].map((item) => (
            <div key={item.step} className="bg-muted/30 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors text-center">
              <span className="text-primary font-heading text-3xl font-black">{item.step}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-3 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="font-heading text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-muted/20 border border-border rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="kurumsal-tanitim-filmi" />

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground text-lg mb-6">Markanızın hikayesini profesyonelce anlatmaya hazır mısınız?</p>
        <WizardCta />
      </section>
    </div>
  );
}
