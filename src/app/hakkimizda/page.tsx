import type { Metadata } from "next";
import WizardCta from "@/components/WizardCta";
import { ArrowRight, Camera, Film, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda — Fennix Medya",
  description:
    "Fennix Medya ve kurucusu Semih Hasanoğlu hakkında. Sektör liderleri ve high-ticket uzmanlar için algı yönetimi ve stratejik görsel iletişim danışmanlığı.",
  alternates: { canonical: "https://fennixmedya.com/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
          Hakkımızda
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
          Merhaba, ben <span className="text-gradient-gold">Semih Hasanoğlu</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
          Fennix Medya&apos;nın kurucusu ve görsel stratejistiyim. Sektör liderlerinin ve yüksek değerli (high-ticket) uzmanların dijital dünyadaki otoritesini sinematik kodlarla inşa ediyorum.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Kamera önü bariyerlerinizi içerik koçluğumuzla kaldırıyor, tüm stratejik, operasyonel ve yaratıcı yükü omuzlarınızdan tamamen alıyoruz. Amacımız sadece güzel görünen videolar değil, <strong className="text-foreground"> otoritenizi inşa edecek kârlı içerikler</strong> üretmek.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          İstanbul merkezli olarak kurumsal tanıtım filmleri, sosyal medya videoları ve 
          YouTube içerik üretimi alanında hizmet veriyoruz. Her projede anahtar teslim 
          çözümler sunuyor, müşterilerimizin tek yapması gereken şeyin kamera karşısına 
          geçmek olmasını sağlıyoruz.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="font-heading text-3xl font-bold mb-10 text-center">Neden Fennix Medya?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: "Sinematik Görsel Kodlama",
              desc: "Işık, gölge ve renklerin psikolojik etkisini kullanarak markanızın premium algısını izleyicinin bilinçaltına işliyoruz.",
            },
            {
              icon: Film,
              title: "Sıfır Operasyonel Yük",
              desc: "Strateji, kanca senaryoları ve algoritma mühendisliğini üstleniyoruz. Siz sadece ayda 6 saatinizi ayırın, gerisini biz yönetelim.",
            },
            {
              icon: Sparkles,
              title: "Otorite ve Güven Odaklı Mimari",
              desc: "Sadece izlenen değil, premium müşteri çeken ve rakiplerinizin fiyat itirazlarını daha video izlenirken eriten sistemler tasarlıyoruz.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-muted/30 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-border">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
          Birlikte çalışalım mı?
        </h2>
        <p className="text-muted-foreground mb-8">
          15 dakikalık ücretsiz strateji görüşmesinde projenizi birlikte planlayalım.
        </p>
        <WizardCta text="Ücretsiz Strateji Görüşmesi Al" />
      </section>

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Semih Hasanoğlu",
            jobTitle: "Görsel Stratejist & Kreatif Direktör",
            worksFor: { "@type": "Organization", name: "Fennix Medya" },
            url: "https://fennixmedya.com/hakkimizda",
            sameAs: [],
          }),
        }}
      />
    </div>
  );
}
