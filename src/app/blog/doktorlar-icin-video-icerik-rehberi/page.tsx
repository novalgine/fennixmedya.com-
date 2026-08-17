import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { createBlogMetadata } from "@/data/blog-posts";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata = createBlogMetadata("doktorlar-icin-video-icerik-rehberi");

export default function BlogPost3() {
  return (
    <article className="min-h-screen bg-background pt-header">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Doktorlar İçin Sosyal Medya Video İçerik Rehberi" }]} />

        <header className="mb-12">
          <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">Sektörel</span>
          <h1 className="font-heading text-3xl md:text-5xl font-black tracking-tight mt-4 mb-6">
            Doktorlar İçin Sosyal Medya <span className="text-primary">Video İçerik Rehberi</span>
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Semih Hasanoğlu</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 Mayıs 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5-6 dk okuma</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Bir hastanın size güvenmesi için artık muayenehanenizin kapısından içeri girmesine gerek yok. Dijital çağda güven, ekranın diğer tarafında, doğru kurgulanmış bir video ile inşa ediliyor. Ancak sağlık sektöründe video içerik üretmek, sıradan bir ürün satmaya benzemez. Hastanın sağlığını, psikolojisini ve beklentilerini anladığınızı göstermek, en büyük önceliğiniz olmalıdır.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Günümüzde doktorlar, cerrahlar ve diş hekimleri, potansiyel hastalarına uzmanlıklarını kanıtlamak için sosyal medyayı aktif bir şekilde kullanıyor. Fakat bu rekabet ortamında sadece "bilgi veren" videolar yeterli olmuyor. Hem etik kurallara bağlı kalan hem de hasta psikolojisine hitap eden, otorite inşa eden premium içerikler üretmeniz gerekiyor. Bu rehberde, doktorlar için video içerik stratejisinin temellerini, yapılabilecek ölümcül hataları ve yüksek dönüşüm getirecek 10 harika video fikrini derinlemesine inceleyeceğiz.
          </p>

          <h2 className="font-heading text-3xl font-bold mt-12 mb-6 text-foreground">1. Neden Doktorlar Kamera Karşısına Geçmeli?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Araştırmalara göre, sağlık hizmeti alacak kişilerin <strong>%77'si</strong> doktor seçimi yapmadan önce kapsamlı bir online araştırma yürütüyor. Yalnızca CV'nizi ve diplomalarınızı okumak hastalar için artık ikna edici değil. İnsanlar, doktorlarının <em>yüzünü görmek, ses tonunu duymak ve beden dilindeki o şefkatli uzmanlığı</em> hissetmek istiyor. 
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Video içerik, yazılı metinlere kıyasla tam 12 kat daha fazla paylaşılıyor. Daha da önemlisi, düzenli video yayınlayan doktorların randevu takvimlerindeki doluluk oranının, yalnızca fotoğraf paylaşanlara kıyasla %80 daha yüksek olduğu gözlemleniyor. Bir hasta randevu oluşturmadan önce sizin birkaç videonuzu izlediyse, o odaya zaten size güvenerek, "tanıdık" birine gelmiş gibi girer. Bu durum, tedaviye uyum (kompliyans) sürecini de inanılmaz derecede hızlandırır.
          </p>

          <h2 className="font-heading text-3xl font-bold mt-12 mb-6 text-foreground">2. Sağlık İletişiminde Etik Kurallar (Kırmızı Çizgiler)</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sağlık iletişimi, pazarlamanın en hassas olduğu alandır. Güven inşa edeyim derken, meslek etiğinizi veya yasal sınırları ihlal etmek, telafisi zor krizlere yol açabilir.
          </p>
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 my-8">
            <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">⚠️ Kesinlikle Yapılmaması Gerekenler</h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span><strong>Hasta Mahremiyetinin İhlali:</strong> Hastanın yüzü, kimliği veya kişisel verileri, onayı olmadan (yazılı izin formu) asla videoya yansımamalıdır. Ameliyathane ortamında dahi arka planda hasta dosyalarının görünmemesine dikkat edilmelidir.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span><strong>%100 Garanti Veren Cümleler:</strong> Tıpta kesinlik yoktur. "Sizi kesin iyileştireceğim", "Asla ağrı hissetmeyeceksiniz" gibi umut tacirliğine girebilecek iddialı söylemlerden kaçınılmalı.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span><strong>Rakip Kötüleme:</strong> Diğer hekimlerin tedavi yöntemlerini eleştirerek kendi yönteminizi yüceltmek, hasta gözünde olumsuz ve antipatik bir etki bırakır.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span><strong>Aşırı Ticari Dil:</strong> "İndirim", "Kampanya", "Fırsat" gibi kelimeler sağlık sektörünün itibarını zedeler. Amacınız satmak değil, "eğitmek ve bilgilendirmek" olmalıdır.</span>
              </li>
            </ul>
          </div>

          <h2 className="font-heading text-3xl font-bold mt-12 mb-6 text-foreground">3. Doktorlar İçin 10 Yüksek Dönüşümlü Video İçerik Fikri</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Peki <Link href="/blog/kamera-karsisinda-rahat-konusma-teknikleri">kamera karşısında</Link> ne konuşacaksınız? Hastalarınızın neyi duymaya ihtiyacı var? İşte size ilham verecek, uzmanlığınızı parlatacak 10 test edilmiş içerik formatı:
          </p>
          
          <div className="space-y-6">
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">1. "Sıkça Sorulan Sorular" Serisi</h3>
              <p className="text-muted-foreground text-sm">Muayenehanede hastalarınızın size günde en az üç kez sorduğu o klasik soruları düşünün. Bu soruların cevaplarını 45-60 saniyelik dikey videolara (Reels/Shorts) dönüştürün. Hedef kitleniz bu cevapları Google'da zaten arıyor!</p>
            </div>
            
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">2. Efsane mi, Gerçek mi? (Mitoz Çürütücü)</h3>
              <p className="text-muted-foreground text-sm">Kendi branşınızla ilgili halk arasında doğru bilinen yanlışları (mitleri) çürütün. Örneğin: "Şeker yemek doğrudan kanser yapar mı? Efsane mi, Gerçek mi?" Bu format hem dikkat çekicidir hem de bilimsel otoritenizi gösterir.</p>
            </div>

            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">3. Vaka Çalışmaları (Case Studies)</h3>
              <p className="text-muted-foreground text-sm">İsim vermeden veya hasta onayıyla, zorlu bir vakanın kliniğinize nasıl geldiğini ve tedavi sürecinin adım adım nasıl ilerlediğini hikayeleştirerek anlatın. Hastalar kendi hikayelerine benzeyen süreçleri dinlemeyi severler.</p>
            </div>

            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">4. Tedavi Öncesi / Sonrası Psikolojik Hazırlık</h3>
              <p className="text-muted-foreground text-sm">Örneğin bir ameliyata girecek hasta, ameliyat öncesi gece ne hissedecek? Neler yapmalı? Onların endişelerini anladığınızı gösteren, empatik ve sakinleştirici videolar çekin.</p>
            </div>

            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">5. "Kamera Arkası" ve Muayenehane Turu</h3>
              <p className="text-muted-foreground text-sm">Hastalarınızın girecekleri ortamı önceden görmesi stresi azaltır. Kliniğinizin temizliğini, modern cihazlarınızı ve güleryüzlü ekibinizi samimi bir vlog tarzında gösterin.</p>
            </div>
            
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">6. Güncel Teknoloji Anlatımları</h3>
              <p className="text-muted-foreground text-sm">Eğer kliniğinize yeni bir lazer cihazı veya cerrahi alet aldıysanız, bunu teknik jargona boğmadan, hastaya ne fayda sağlayacağını (daha az ağrı, daha hızlı iyileşme vb.) vurgulayarak anlatın.</p>
            </div>
            
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">7. Hastalık Habercisi "O" Belirtiler</h3>
              <p className="text-muted-foreground text-sm">Kullanıcıların dikkatini saniyeler içinde çeken liste videoları: "Tirodinizin yavaş çalıştığını gösteren 3 gizli belirti." İnsanlar bu belirtilerin kendilerinde olup olmadığını kontrol etmek için videoyu sonuna kadar izler.</p>
            </div>
            
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">8. Mesleğin Zorlukları ve Samimi İtiraflar</h3>
              <p className="text-muted-foreground text-sm">Sürekli mükemmel doktoru oynamayın. Zor geçen bir nöbetin ardından hissettiklerinizi veya mesleğinize duyduğunuz aşkı samimi bir dille paylaştığınız videolar, aradaki soğuk duvarları yıkar.</p>
            </div>
            
            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">9. Hasta Röportajları (Sosyal Kanıt)</h3>
              <p className="text-muted-foreground text-sm">Eğer etik kurallar dahilinde izin aldıysanız, başarılı bir tedavinin ardından mutlu hastanızın kendi deneyimini kısaca anlatması paha biçilemez bir referanstır.</p>
            </div>

            <div className="p-5 bg-card border border-border/50 rounded-xl">
              <h3 className="font-bold text-foreground text-xl mb-2">10. Mevsimsel / Gündeme Dair Tavsiyeler</h3>
              <p className="text-muted-foreground text-sm">Kış mevsimine girerken bağışıklık güçlendirme, bahar aylarında alerjilerle başa çıkma gibi tamamen o ana odaklı ve anında uygulanabilir hap bilgiler sunun.</p>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold mt-12 mb-6 text-foreground">4. Neden Profesyonel Prodüksiyon Şart? (Selfie Videonun Ötesi)</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pek çok doktor "Elime telefonumu alıp çekerim" diyerek yola çıkıyor. Gündelik Story paylaşımları için bu son derece doğaldır ve yapılması gerekir. Ancak Instagram Reels akışınızda "kalıcı" olacak, veya YouTube'da yıllarca aranıp bulunacak ana videolarınızın bir Hollywood estetiğinde olması gerekir. Neden mi?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Çünkü <strong>görsel kalite, hastanın zihnindeki hizmet kalitenizle doğrudan eşleşir.</strong> Kötü aydınlatılmış, yankı yapan iğrenç bir sese sahip ve kekelediğiniz anların kesilmediği bir video, sizin cerrahi yeteneğinizi gölgede bırakır. "Bu kadar özensiz bir videoyla karşımıza çıkan bir doktor, ameliyatımda ne kadar özenli olur?" algısı bilinçaltına yerleşir. Oysa sinematik ışıklarla aydınlatılmış, yaka mikrofonu ile net bir ses alınmış ve dinamik kurguyla desteklenmiş profesyonel bir çekim, sizi anında bulunduğunuz şehrin veya ülkenin "Zirve Otoritesi" olarak konumlandırır.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unutmayın, kamera karşısında uzmanlığına güvenen, kendinden emin bir doktor duruşu sergilemeniz gerekir; bu da ancak arka plandaki tüm teknik dertleri (ışık, ses, kamera açıları, ezber yapma derdi) profesyonel bir ekibe bırakmanızla mümkündür.
          </p>
        </div>

        <RelatedPosts slug="doktorlar-icin-video-icerik-rehberi" />

        <div className="mt-16 bg-muted/30 border border-border rounded-2xl p-8 text-center">
          <p className="text-lg font-heading font-bold text-foreground mb-2">Sağlık sektöründe video içerik desteği mi arıyorsunuz?</p>
          <p className="text-muted-foreground text-sm mb-6">Etik kurallara uygun, profesyonel video prodüksiyon için görüşelim.</p>
          <Link href="/#wizard" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-black px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">
            Ücretsiz Strateji Görüşmesi Al <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Doktorlar İçin Sosyal Medya Video İçerik Rehberi", author: { "@type": "Person", name: "Semih Hasanoğlu" }, datePublished: "2026-05-15", publisher: { "@type": "Organization", name: "Fennix Medya" }, mainEntityOfPage: "https://fennixmedya.com/blog/doktorlar-icin-video-icerik-rehberi" }) }} />
    </article>
  );
}
