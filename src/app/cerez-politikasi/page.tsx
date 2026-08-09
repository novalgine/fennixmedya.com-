import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Fennix Medya web sitesi çerez kullanım politikası.",
  alternates: { canonical: "https://fennixmedya.com/cerez-politikasi" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/cerez-politikasi",
    title: "Çerez Politikası",
    description: "Fennix Medya web sitesi çerez kullanım politikası.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-background pt-header pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-3xl md:text-5xl font-black mb-8">Çerez (Cookie) Politikası</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
          <p>
            Fennix Medya olarak web sitemizi (fennixmedya.com) ziyaret eden kullanıcılarımızın deneyimini 
            iyileştirmek ve sitemizin verimli çalışmasını sağlamak amacıyla çerezler (cookies) kullanmaktayız. 
            Bu politika, hangi tür çerezleri kullandığımızı ve bunları nasıl yönetebileceğinizi açıklamaktadır.
          </p>

          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, 
            telefon, tablet) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin cihazınızı 
            hatırlamasına ve tercihlerinizi kaydetmesine olanak tanır.
          </p>

          <h2>2. Hangi Çerezleri Kullanıyoruz?</h2>
          <p>Sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
          <ul>
            <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini yerine getirebilmesi için gerekli olan çerezlerdir. Bunlar kapatılamaz.</li>
            <li><strong>Analiz ve Performans Çerezleri:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Hangi sayfaların daha çok ziyaret edildiği gibi anonim veriler toplar (ör. Google Analytics).</li>
            <li><strong>Pazarlama ve Hedefleme Çerezleri:</strong> İlgi alanlarınıza uygun reklam ve kampanyalar sunmak amacıyla kullanılır. Reklam ortaklarımız tarafından yerleştirilebilir.</li>
          </ul>

          <h2>3. Çerezlerin Yönetimi</h2>
          <p>
            Tarayıcınızın ayarlarını değiştirerek çerezleri silebilir veya engelleyebilirsiniz. Ancak 
            zorunlu çerezleri engellemeniz durumunda sitemizin bazı bölümleri düzgün çalışmayabilir. 
            Sitemize ilk girişinizde karşınıza çıkan "Çerez Onay" paneli üzerinden de tercihlerinizi 
            belirleyebilirsiniz.
          </p>

          <h2>4. İletişim</h2>
          <p>
            Çerez Politikamızla ilgili her türlü soru ve önerileriniz için sitemizdeki iletişim yolları 
            üzerinden bize ulaşabilirsiniz.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Son Güncelleme Tarihi: Mayıs 2026
          </p>
        </div>
      </div>
    </div>
  );
}
