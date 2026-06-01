import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import WizardCta from "@/components/WizardCta";
import OtherServices from "@/components/OtherServices";
import LazyHeroVideo from "@/components/LazyHeroVideo";

export const metadata: Metadata = {
  title: "YouTube İçerik Üretimi | Fennix Medya",
  description:
    "YouTube kanalınız için algoritma uyumlu içerik mimarisi. Tıklanma (CTR) ve dikkat yönetimi (retention) optimize edilmiş YouTube büyüme paketi.",
  alternates: { canonical: "https://fennixmedya.com/hizmetler/youtube-icerik-uretimi" },
};

const faqs = [
  { q: "YouTube için hangi formatlarda içerik üretiyorsunuz?", a: "Yatay format (16:9) ana videolar, YouTube Shorts (dikey 9:16), podcast tarzı sohbet videoları ve ürün inceleme videoları üretiyoruz." },
  { q: "Thumbnail tasarımı dahil mi?", a: "Evet, her video için tıklanma oranını artırmak üzere profesyonelce tasarlanmış thumbnail dahildir." },
  { q: "SEO ve başlık optimizasyonu yapıyor musunuz?", a: "Evet, video başlığı, açıklama ve etiketleri YouTube algoritmasına uygun şekilde optimize ediyoruz." },
];

export default function YouTubeIcerikUretimiPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Hizmetlerimiz — YouTube
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              YouTube <span className="text-gradient-gold">İçerik Üretimi</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              YouTube kanalınızı büyütmek için anahtar teslim video prodüksiyon. 
              Senaryo, çekim, kurgu, renk düzeltme, ses tasarımı ve thumbnail — hepsi dahil.
            </p>
            <WizardCta text="Ücretsiz Strateji Görüşmesi Al" />
          </div>
          <div className="relative w-full aspect-video flex items-center justify-center group rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-black">
            <LazyHeroVideo
              src="/videos/portfolyo/youtube.mp4"
              poster="/videos/portfolyo/youtube.jpg"
              title="YouTube Video Örneği"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">Paket İçeriği</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Senaryo & Konsept", desc: "Kanalınıza özel konu araştırması, senaryo yazımı ve çekim planı." },
            { title: "Profesyonel Çekim", desc: "Sinema kalitesinde yatay format çekim, aydınlatma ve ses kaydı." },
            { title: "Post-Prodüksiyon", desc: "Kurgu, renk düzeltme, grafik, altyazı ve thumbnail tasarımı." },
          ].map((item) => (
            <div key={item.title} className="bg-muted/30 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
      <OtherServices currentServiceId="youtube-icerik-uretimi" />

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground text-lg mb-6">YouTube kanalınızı profesyonelce büyütmeye hazır mısınız?</p>
        <WizardCta text="Hemen Başlayalım" />
      </section>
    </div>
  );
}
