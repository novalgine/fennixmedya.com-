import { Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { createBlogMetadata } from "@/data/blog-posts";
import Image from "next/image";
import WizardCta from "@/components/WizardCta";
import TldrSummary from "@/components/TldrSummary";
import LastUpdated from "@/components/LastUpdated";

export const metadata = createBlogMetadata("high-ticket-satislar-icin-video-funnel");

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background pt-16 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "High-Ticket (Yüksek Fiyatlı) Satışlar İçin Video Funnel" }]} />

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-black mb-6 leading-tight">
            High-Ticket (Yüksek Fiyatlı) Satışlar İçin Video Funnel
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-y border-border/50 py-4 mb-8">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Semih Hasanoğlu</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 16 Mayıs 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7-8 dk okuma</span>
          </div>
          <LastUpdated date="2026-05-16" />
        </header>

        <TldrSummary
          points={[
            "High-ticket satışlar, tek bir reklamla değil, aşamalı güven inşa eden bir 'Video Funnel' mimarisi ile gerçekleşir.",
            "Soğuk kitleye kısa 'Hook' videoları (TOFU), siteye gelene uzun satış mektubu (MOFU) ve kararsızlara referans videoları (BOFU) gösterilir.",
            "Profesyonel kurgulanmış bir Video Funnel, 7/24 çalışan mükemmel bir satış temsilcisi gibi itirazları kırar ve otorite sağlar."
          ]}
        />

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <p className="lead font-medium text-foreground">
            Büyük bir emlak projesi, aylık 10.000 dolarlık bir kurumsal danışmanlık hizmeti veya lüks bir estetik cerrahi operasyonu... Satmaya çalıştığınız ürünün veya hizmetin fiyatı arttıkça, müşterinizin satın alma kararı alması da o derece zorlaşır. High-ticket (yüksek fiyatlı) satış dünyasında insanlar, internette gördükleri 15 saniyelik tek bir reklama tıklayarak kredi kartlarını çıkarmazlar.
          </p>
          <p>
            Yüksek bütçeli alımlarda, karar alma sürecini yöneten şey "mantık" gibi görünse de aslında temel belirleyici <strong>"Güven ve Otorite"</strong> dir. Hedef kitleniz sizin alanınızdaki en iyi kişi veya kurum olduğunuza tamamen ikna olana dek parasını size vermeyecektir. İşte tam bu noktada, potansiyel müşterinizi yabancı birinden sadık bir müşteriye dönüştüren, psikolojik tetikleyicilerle örülmüş bir mimari devreye girer: <strong>Video Funnel (Video Satış Hunisi).</strong>
          </p>

          <h2 className="text-3xl mt-12 mb-6">Video Funnel (Huni) Nedir? Neden Web Sitenizden Daha Önemlidir?</h2>
          <p>
            Geleneksel web siteleri genellikle dijital birer broşürden ibarettir. Ziyaretçi gelir, hakkımızda sayfasına bakar, hizmetleri okur ve %98 ihtimalle çıkar gider. Bir daha o kullanıcıyı bulamazsınız. Video Funnel ise bunun tam tersidir; müşteriyi elinden tutar ve ona önceden planlanmış, stratejik bir <em>video yolculuğu</em> yaşatır.
          </p>
          <p>
            Bu yolculuk, müşterinin probleminin farkına vardığı noktadan (Farkındalık) başlar, çözüm olarak sizi tanımasıyla (Değer) devam eder ve sonunda ikna olup sizinle görüşme talep etmesiyle (Karar) son bulur. Gelin bu sistemin 3 altın aşamasını detaylandıralım:
          </p>

          <h2 className="text-3xl mt-12 mb-6">Aşama 1: Farkındalık ve Dikkat (Top of Funnel - TOFU)</h2>
          <p>
            Bu aşamada kimse sizin hizmetinizi satın almaya hazır değildir. Hedef kitleniz sadece sosyal medyada (Instagram, TikTok, LinkedIn) gezinmektedir. Burada amacımız satış yapmak <strong>değil</strong>, hedef kitlenin başparmağını kaydırmayı bırakmasını sağlamak (Scroll-stopper) ve dikkatini çekmektir.
          </p>
          <ul className="space-y-3">
            <li><strong>Video Formatı:</strong> 15-45 saniyelik, çok dinamik, hızlı kurgulanmış "<Link href="/blog/videolarda-ilk-3-saniye-kurali-hook">Hook</Link> (Kanca)" videoları.</li>
            <li><strong>İçerik Stratejisi:</strong> Müşterinin gece uyurken düşündüğü o en büyük soruna doğrudan parmak basın. "Neden şirketiniz büyümüyor?", "Neden sattığınız evlerin değerini alamıyorsunuz?" gibi vurucu sorularla başlayın.</li>
            <li><strong>Hedef (Call to Action):</strong> Tıklama almak ve kullanıcıyı "Daha Fazlasını Öğren" diyerek web sitenize / açılış sayfanıza (Landing Page) çekmek.</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">Aşama 2: Eğiterek İkna Etme (Middle of Funnel - MOFU)</h2>
          <p>
            Tebrikler, reklam videonuz çalıştı ve kullanıcı açılış sayfanıza geldi. Ama hala size güvenmiyor. O yüzden karşısına "Hemen Satın Al" butonu çıkarmamalısınız. Bunun yerine ona değer sunan, aydınlanma yaşamasına sebep olacak bir video sunmanız gerekir. Bu videoya <strong>VSL (Video Sales Letter / Video Satış Mektubu)</strong> diyoruz.
          </p>
          <ul className="space-y-3">
            <li><strong>Video Formatı:</strong> 5 ila 15 dakika arası sürebilen, yüksek otorite hissi veren, <Link href="/hizmetler/anahtar-teslim-studyo">stüdyo</Link> ortamında veya şık bir ofiste profesyonelce çekilmiş yatay (16:9) ana tanıtım videosu.</li>
            <li><strong>İçerik Stratejisi:</strong> Önce kullanıcının sorununu tekrar teyit edin. Sonra, bu sorunun neden eski yöntemlerle çözülemeyeceğini mantıksal argümanlarla (veriler ve grafiklerle) açıklayın. Son olarak kendi sisteminizi (ürününüzü/hizmetinizi) "yeni, mantıklı ve kesin çözüm" olarak sunun.</li>
            <li><strong>Hedef (Call to Action):</strong> "Randevu Al", "Ücretsiz Strateji Görüşmesi Talep Et" veya "Formu Doldur".</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">Aşama 3: Güven ve Yeniden Pazarlama (Bottom of Funnel - BOFU)</h2>
          <p>
            MOFU aşamasında VSL videonuzu izleyenlerin bir kısmı formu dolduracaktır. Ancak büyük bir çoğunluk hala kararsızdır; fiyattan çekinirler, "Acaba bu sistem bende de işe yarar mı?" derler ve sayfayı kapatırlar. High-ticket satışların %80'i işte tam da bu sayfayı kapatan insanlara yapılan "Yeniden Pazarlama (Retargeting)" kampanyaları ile gelir.
          </p>
          <ul className="space-y-3">
            <li><strong>Video Formatı:</strong> Sadece sitenize daha önce girmiş (piksel ile izlenen) kişilere gösterilen özel reklam videoları.</li>
            <li><strong>İçerik Stratejisi:</strong> Kararsızlığı kırmanın tek yolu Sosyal Kanıttır (Social Proof). Önceki müşterilerinizin veya hastalarınızın kamera karşısına geçip, "Ben de başta korkuyordum ama bu sistem hayatımı değiştirdi" dediği yüksek prodüksiyonlu Müşteri Deneyimi (Testimonial) videoları gösterilir. Vaka analizleri (Case Studies) anlatılır.</li>
            <li><strong>Hedef (Call to Action):</strong> "Sınırlı kontenjan", "Hemen Görüşelim" diyerek aciliyet hissi yaratıp o masaya oturtmak.</li>
          </ul>

          <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 mt-12 rounded-r-xl">
            <h3 className="font-bold text-2xl text-foreground mb-3">En İyi Satış Personeliniz: Kurulum Sonrası Huni</h3>
            <p className="m-0 text-muted-foreground text-base">
              High-ticket bir ürün satarken, her gün aynı itirazları dinlemekten, aynı sunumları yapmaktan yorulabilirsiniz. Profesyonelce kurgulanmış bir Video Funnel, <strong>hiç yorulmayan, maaş istemeyen, hasta olmayan ve 7/24 uyanık olan mükemmel bir satış temsilcisidir.</strong> Doğru mimariyle kurulduğunda, markanızın premium algısını her tıklamada korur ve size sadece, sisteme zaten inanmış sıcak müşterilerle (warm leads) anlaşma imzalamak kalır.
            </p>
          </div>
        </div>

        <RelatedPosts slug="high-ticket-satislar-icin-video-funnel" />

        <div className="mt-16 pt-10 border-t border-border">
          <div className="bg-card border border-white/5 p-8 rounded-3xl text-center shadow-2xl">
            <h3 className="font-heading text-2xl font-bold mb-4">Markanızın hikayesini anlatmaya hazır mısınız?</h3>
            <p className="text-muted-foreground mb-8">
              Stratejik içerik üretimi ve <Link href="/hizmetler/kurumsal-tanitim-filmi">profesyonel video prodüksiyon</Link>u ile rakiplerinizin bir adım önüne geçin.
            </p>
            <WizardCta text="Hemen Ücretsiz Strateji Görüşmesi Al" />
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "High-Ticket (Yüksek Fiyatlı) Satışlar İçin Video Funnel", author: { "@type": "Person", name: "Semih Hasanoğlu" }, datePublished: "2026-05-16", publisher: { "@type": "Organization", name: "Fennix Medya" }, mainEntityOfPage: "https://fennixmedya.com/blog/high-ticket-satislar-icin-video-funnel" }) }} />
    </div>
  );
}
