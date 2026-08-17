import { Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { createBlogMetadata } from "@/data/blog-posts";
import WizardCta from "@/components/WizardCta";
import TldrSummary from "@/components/TldrSummary";
import LastUpdated from "@/components/LastUpdated";
import EditorNote from "@/components/blog/EditorNote";

export const metadata = createBlogMetadata("linkedin-video-stratejisi-b2b");

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background pt-header pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "LinkedIn Video Stratejisi: B2B Markalar İçin 2026 Rehberi" }]} />

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-black mb-6 leading-tight">
            LinkedIn Video Stratejisi: B2B Markalar İçin 2026 Rehberi
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-y border-border/50 py-4 mb-8">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Semih Hasanoğlu</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10 Haziran 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7-8 dk okuma</span>
          </div>
          <LastUpdated date="2026-06-18" />
        </header>

        <TldrSummary
          points={[
            "LinkedIn, 2026'da B2B video içerik için en yüksek dönüşüm oranına sahip platform — video paylaşımları metin paylaşımlarından 5 kat daha fazla etkileşim alıyor.",
            "LinkedIn algoritması 'dwell time' (izlenme süresi) ve 'meaningful comments' (nitelikli yorumlar) metriklerini önceliklendiriyor; bu nedenle düşünce liderliği videoları en etkili format.",
            "En iyi performans gösteren LinkedIn videoları 60-120 saniye aralığında, alt yazılı ve kare (1:1) formatta — çünkü kullanıcıların %80'i ofiste sessiz izliyor.",
            "CEO ve üst düzey yöneticilerin kişisel hesaplarından paylaşılan videolar, şirket sayfasından paylaşılanlara göre %561 daha fazla erişim elde ediyor."
          ]}
        />

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-body prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <p className="lead font-medium text-foreground">
            TikTok ve Instagram Reels konuşulurken, B2B dünyasında sessiz bir dev büyüyor: LinkedIn Video. 2026 itibarıyla LinkedIn, <strong>1 milyardan fazla profesyonel kullanıcıya</strong> sahip ve platformdaki video içerik tüketimi son 1 yılda %36 arttı (LinkedIn Marketing Solutions, 2026). Ancak birçok B2B marka hâlâ LinkedIn&apos;de video paylaşmıyor veya yanlış formatlarla paylaşıyor.
          </p>
          <p>
            Bu rehberde, <strong className="text-foreground">LinkedIn <Link href="/blog/reels-tiktok-algoritmasi-2026">algoritma</Link>sının video içerikleri nasıl değerlendirdiğini, en etkili video formatlarını ve CEO / kurucu düzeyinde kişisel marka oluşturma stratejilerini</strong> detaylı olarak anlatıyoruz.
          </p>

          <h2 className="text-3xl mt-12 mb-6">1. LinkedIn Algoritması Video İçerikleri Nasıl Değerlendiriyor?</h2>
          <p>
            LinkedIn&apos;in 2026 algoritması, video içerikleri değerlendirirken şu sinyallere bakıyor:
          </p>
          <ul className="space-y-3">
            <li><strong>Dwell Time (Bekleme Süresi):</strong> Kullanıcının videonuzda ne kadar süre durduğu. LinkedIn, hızlı kaydırmayı (&quot;scroll past&quot;) negatif sinyal, durup izlemeyi pozitif sinyal olarak algılıyor. Bu nedenle <Link href="/blog/videolarda-ilk-3-saniye-kurali-hook">ilk 3 saniye</Link> kritiktir.</li>
            <li><strong>Meaningful Comments (Nitelikli Yorumlar):</strong> &quot;Harika&quot; veya emoji yorumları değil, en az 10+ kelimelik düşünceli yorumlar. Algoritma, tartışma başlatan içerikleri ödüllendiriyor.</li>
            <li><strong>Native Video Terciheti:</strong> LinkedIn, kendi platformuna doğrudan yüklenen videoları (native), YouTube veya Vimeo linklerine göre 3-5 kat daha fazla gösteriyor. Dış link paylaşmak yerine videoyu mutlaka doğrudan yükleyin.</li>
            <li><strong>İlk 60 Dakika Etkileşimi:</strong> Videonuzun ilk 1 saatteki performansı, sonraki erişimini belirliyor. Yayınlama zamanlaması kritik: Türkiye için en iyi saatler hafta içi 08:00-09:00 ve 12:00-13:00 arasıdır.</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">2. B2B İçin En Etkili 5 LinkedIn Video Formatı</h2>
          
          <h3 className="text-2xl mt-8 mb-4">A. Düşünce Liderliği (Thought Leadership) Videoları</h3>
          <p>
            CEO veya üst düzey yöneticinin kameraya bakarak sektörel bir konuda görüşünü paylaştığı 60-90 saniyelik videolar. LinkedIn&apos;de <strong className="text-foreground">en yüksek etkileşim oranına sahip format</strong> budur. Önemli olan mükemmel bir prodüksiyon değil, otantik ve değerli bir mesajdır.
          </p>
          <p>
            <strong>Pratik formül:</strong> &quot;Bu hafta [sektörde yaşanan olay] hakkında çok düşündüm. İşte benim görüşüm...&quot; — Bu tarz açılışlar, sektör profesyonellerinin dikkatini çeker ve tartışma başlatır.
          </p>

          <h3 className="text-2xl mt-8 mb-4">B. &quot;Bunu Biliyor Muydunuz?&quot; Mikro Eğitim Videoları</h3>
          <p>
            30-60 saniyelik, tek bir bilgi veya istatistik etrafında dönen kısa videolar. Ekranda büyük bir rakam veya şaşırtıcı veriyle başlayın, ardından kısa açıklama yapın. Bu format &quot;kaydedilme&quot; oranını artırır ve viralleşme potansiyeli yüksektir.
          </p>

          <h3 className="text-2xl mt-8 mb-4">C. Müşteri Başarı Hikayesi (Case Study) Videoları</h3>
          <p>
            Müşterinizin kendi ağzından &quot;bu şirketle çalışmadan önce/sonra&quot; anlatımı. 2-3 dakikalık bu videolar, LinkedIn&apos;deki en güçlü satış aracıdır çünkü sosyal kanıt (social proof) içerir. Potansiyel müşteriler, benzer şirketlerin deneyimlerini görünce satın alma kararını çok daha hızlı verir.
          </p>

          <h3 className="text-2xl mt-8 mb-4">D. Kamera Arkası / Kültür Videoları</h3>
          <p>
            Şirketinizin iç kültürünü, ekibinizi ve çalışma ortamınızı gösteren samimi videolar. Özellikle işveren markası (employer branding) ve yetenek çekme stratejileri için güçlüdür. LinkedIn&apos;de &quot;bir gün bizimle&quot; formatı inanılmaz etkili.
          </p>

          <h3 className="text-2xl mt-8 mb-4">E. Etkinlik ve Konferans Klipleri</h3>
          <p>
            Katıldığınız veya düzenlediğiniz etkinliklerden en çarpıcı anları 30-60 saniyelik kliplere dönüştürün. Sahnedeki sunumlar, networking anları ve panel tartışmaları LinkedIn&apos;de yüksek performans gösterir.
          </p>

          <h2 className="text-3xl mt-12 mb-6">3. Kişisel Hesap vs Şirket Sayfası: Hangisinden Paylaşmalı?</h2>
          <p>
            LinkedIn&apos;in kendi verilerine göre, <strong className="text-foreground">kişisel hesaplardan paylaşılan içerikler, şirket sayfalarından paylaşılanlara göre ortalama %561 daha fazla erişim</strong> elde ediyor. Bu, B2B video stratejisinde kritik bir ayrım noktasıdır.
          </p>
          <p>
            <strong>Önerimiz:</strong> İlk olarak videoları CEO veya kurucunun kişisel hesabından paylaşın. 24-48 saat sonra aynı videoyu şirket sayfasında yeniden paylaşın. Böylece hem kişisel markanın organik erişiminden yararlanırsınız hem de şirket sayfasını beslersiniz.
          </p>

          <h2 className="text-3xl mt-12 mb-6">4. Teknik Gereksinimler ve Optimizasyon İpuçları</h2>
          <ul className="space-y-3">
            <li><strong>Format:</strong> Kare (1:1) veya dikey (4:5) — mobil ekranda daha fazla alan kaplar ve dikkat çeker.</li>
            <li><strong>Süre:</strong> Optimal 60-120 saniye. 3 dakikayı aşmayın, dwell time düşmeye başlar.</li>
            <li><strong>Alt yazı:</strong> ZORUNLU. LinkedIn kullanıcılarının %80&apos;i ofiste sessiz izliyor. Alt yazısız video, izlenmeden geçilir.</li>
            <li><strong>Kapak karesi (Thumbnail):</strong> Dikkat çekici, metin içeren özel bir kapak karesi kullanın. LinkedIn otomatik thumbnail genellikle kötüdür.</li>
            <li><strong>Açıklama metni:</strong> İlk 2 satır hook (kanca) olmalı. &quot;Daha fazla gör&quot; tıklanmasını sağlayacak bir merak boşluğu bırakın. 1.300 karakteri geçmeyin.</li>
            <li><strong>Hashtag:</strong> 3-5 ilgili hashtag kullanın. #B2BMarketing #KurumsalVideo gibi niş hashtagler, geniş hashtaglerden daha etkilidir.</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">5. LinkedIn Video İçerik Takvimi Şablonu</h2>
          <p>
            Tutarlılık, LinkedIn&apos;de başarının anahtarıdır. Haftada 2-3 video paylaşımı ideal frekans. İşte örnek bir aylık takvim:
          </p>
          <ul className="space-y-3">
            <li><strong>Hafta 1:</strong> Düşünce liderliği videosu (Pazartesi) + Mikro eğitim videosu (Perşembe)</li>
            <li><strong>Hafta 2:</strong> Müşteri başarı hikayesi (Salı) + Sektör trendi yorumu (Cuma)</li>
            <li><strong>Hafta 3:</strong> Kamera arkası / kültür videosu (Çarşamba) + Düşünce liderliği (Pazartesi)</li>
            <li><strong>Hafta 4:</strong> Etkinlik klibi veya podcast kesiti (Salı) + &quot;Bunu biliyor muydunuz?&quot; videosu (Perşembe)</li>
          </ul>

          <EditorNote title="LinkedIn, B2B'nin TikTok'udur">
            <p className="m-0 text-muted-foreground text-base">
              TikTok tüketici markalarını nasıl dönüştürdüyse, LinkedIn de B2B markalar için aynı etkiyi yaratıyor. Fark şu: LinkedIn&apos;de her izlenme potansiyel bir karar verici. Bir TikTok izlenmenin değeri kuruşlarla ölçülürken, bir LinkedIn izlenmenin değeri binlerce liralık iş anlaşmalarına dönüşebilir. Bu fırsatı kaçırmayın.
            </p>
          </EditorNote>
        </div>

        <RelatedPosts slug="linkedin-video-stratejisi-b2b" />

        <div className="mt-16 pt-10 border-t border-border">
          <div className="bg-card border border-white/5 p-8 rounded-2xl text-center shadow-2xl">
            <h3 className="font-heading text-2xl font-bold mb-4">LinkedIn video stratejinizi birlikte oluşturalım</h3>
            <p className="text-muted-foreground mb-8">
              CEO videoları, müşteri hikayeleri ve düşünce liderliği içerikleriyle LinkedIn&apos;de fark yaratın.
            </p>
            <WizardCta />
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "LinkedIn Video Stratejisi: B2B Markalar İçin 2026 Rehberi", author: { "@type": "Person", name: "Semih Hasanoğlu" }, datePublished: "2026-06-10", dateModified: "2026-06-18", publisher: { "@type": "Organization", name: "Fennix Medya" }, mainEntityOfPage: "https://fennixmedya.com/blog/linkedin-video-stratejisi-b2b" }) }} />
    </div>
  );
}
