import type { Metadata } from "next";
import { CheckCircle2, Play, TrendingUp, Users } from "lucide-react";
import WizardCta from "@/components/WizardCta";
import OtherServices from "@/components/OtherServices";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sosyal Medya Görsel Algı ve Otorite Yönetimi",
  description:
    "İstanbul'da yüksek dönüşümlü sosyal medya video stratejisi. Reels, TikTok ve Shorts için native kurgulanmış dikey format içerik ağları. Ayda 6 saat ayırarak otoritenizi inşa edin.",
  alternates: { canonical: "https://fennixmedya.com/hizmetler/sosyal-medya-video" },
};

const faqs = [
  { q: "Bir çekim günü kaç video çıkar?", a: "Profesyonel bir çekim gününde ortalama 4-5 dikey format video çıkarmaktayız. Bu, bir aylık sosyal medya içeriğinizi rahatlıkla karşılar." },
  { q: "Senaryoları kim hazırlıyor?", a: "Anahtar teslim paketimizde tüm senaryo, metin ve konsept çalışmasını biz yapıyoruz. Siz sadece kamera karşısına geçip konuşuyorsunuz." },
  { q: "Hangi platformlara uygun?", a: "Instagram Reels, TikTok, YouTube Shorts ve LinkedIn Video formatlarının hepsine uygun dikey (9:16) videolar üretiyoruz." },
];

export default function SosyalMedyaVideoPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Sosyal Medya Video Prodüksiyon",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Fennix Medya"
          },
          "description": "Instagram Reels, TikTok ve YouTube Shorts için profesyonel video çekimi ve kurgusu."
        }}
      />
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Hizmetlerimiz — Dikey Format
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Sosyal Medya <span className="text-gradient-gold">Görsel Algı Yönetimi</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              Reels, TikTok ve Shorts için izleyiciyi saniyeler içinde yakalayan (hook) ve güven inşa eden dikey içerik ağları. 
              Ayda sadece <strong className="text-foreground">6 saat</strong> ayırarak pazarın zirvesine yerleşin.
            </p>

            <WizardCta text="Ücretsiz Strateji Görüşmesi Al" />
          </div>
          <div className="relative w-full aspect-[9/16] md:aspect-[4/5] flex items-center justify-center group rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-black rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <video
              src="/videos/portfolyo/umay.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/portfolyo/umay.jpg"
              title="Sosyal Medya Video Örneği"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">
          Neler Yapıyoruz?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Kanca (Hook) ve İçerik Mimarisi", desc: "Markanıza özel yüksek dikkat çekici fikirler ve senaryolar hazırlıyoruz." },
            { title: "Sinematik Algı Çekimi", desc: "Hollywood standartlarında aydınlatma ve ekipmanlarla stratejik lokasyon çekimi." },
            { title: "Dikkat Yönetimi ve Kurgu", desc: "Trend sesler, hızlı ritim ve dikkat metriklerine (retention) uygun kurgulanmış videolar." },
          ].map((item) => (
            <div key={item.title} className="bg-muted/30 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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
        {/* FAQPage Schema */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="sosyal-medya-video" />

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground text-lg mb-6">
          Sosyal medyanız için profesyonel video içerik üretmeye hazır mısınız?
        </p>
        <WizardCta text="Hemen Başlayalım" />
      </section>
    </div>
  );
}
