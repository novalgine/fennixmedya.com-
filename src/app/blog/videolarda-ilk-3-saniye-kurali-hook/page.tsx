import { Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { createBlogMetadata } from "@/data/blog-posts";
import Image from "next/image";
import WizardCta from "@/components/WizardCta";
import TldrSummary from "@/components/TldrSummary";
import LastUpdated from "@/components/LastUpdated";

export const metadata = createBlogMetadata("videolarda-ilk-3-saniye-kurali-hook");

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background pt-header pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Videolarda İlk 3 Saniye Kuralı (Hook Stratejileri)" }]} />

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-black mb-6 leading-tight">
            Videolarda İlk 3 Saniye Kuralı (Hook Stratejileri)
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-y border-border/50 py-4 mb-8">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Semih Hasanoğlu</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 14 Mayıs 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6-7 dk okuma</span>
          </div>
          <LastUpdated date="2026-05-14" />
        </header>

        <TldrSummary
          points={[
            "Sosyal medyada bir kullanıcının kaydırmasını (scroll) durdurmak için sadece 3 saniyeniz var. Buna 'Hook' (Kanca) denir.",
            "Güçlü bir Hook sadece görsel değil; aynı zamanda sözel, işitsel ve psikolojik unsurlar barındırmalıdır.",
            "'Merhaba ben...' diye başlayan girişler videonuzun anında geçilmesine neden olur; doğrudan değer önerisiyle başlayın.",
            "Videonuzun izlenme süresini (retention) artırmak için sadece ilk 3 saniyede değil, her 8 saniyede bir mikro kancalar kullanmalısınız."
          ]}
        />

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-body prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <p className="lead font-medium text-foreground">
            Büyük bir hevesle, saatlerinizi hatta belki binlerce liranızı harcayarak harika bir video çektiniz. Işık mükemmel, ses kusursuz, verdiğiniz bilgiler altın değerinde. Ancak videoyu yayınladıktan sonra analitik verilerine bir bakıyorsunuz: İzleyicilerin %70'i videoyu henüz 3. saniyede terk etmiş! Neden?
          </p>
          <p>
            Çünkü günümüzün acımasız sosyal medya <Link href="/blog/reels-tiktok-algoritmasi-2026">algoritma</Link>larında (TikTok, Reels, Shorts) kimse sizin "kim olduğunuzla" veya "ne kadar iyi çektiğinizle" ilgilenmiyor. Algoritma tek bir şeye bakıyor: <strong>Kullanıcının kaydırma (scroll) hareketini durdurabildiniz mi?</strong> İşte bu durdurucu güce <em>Hook (Kanca)</em> diyoruz.
          </p>

          <h2 className="text-3xl mt-12 mb-6">1. Kanca (Hook) Psikolojisi: Beyin Neden Durur?</h2>
          <p>
            Kullanıcılar sosyal medyada kaydırırken adeta bir zombi modundadır (doomscrolling). Beynimiz, sadece "örüntüyü kıran" (pattern interrupt) veya "hayatta kalma/merak duygusunu tetikleyen" bir uyarıcı gördüğünde bu zombi modundan çıkar ve dikkatini verir.
          </p>
          <p>
            Etkili bir kanca, dopamin sistemini tetikleyerek şu üç duygudan en az birine hitap etmelidir: <strong>Merak (Curosity), Korku/Aciliyet (FOMO) veya Beklenmediklik (Surprise).</strong> İnsanlar bildikleri şeyleri izlemek istemezler; ya bilmedikleri bir sırrı öğrenmek ya da inandıkları bir şeyin yanlış olduğunu duymak isterler.
          </p>

          <h2 className="text-3xl mt-12 mb-6">2. Görsel Hook Nedir ve Nasıl Kurgulanır?</h2>
          <p>
            Kullanıcı videonun sesini açmamış olsa bile (ki %85'i sessiz izlemeye başlar), ekrandaki görüntü onu durdurmalıdır. Görsel kanca, videonun ilk 3 saniyesindeki görsel aksiyondur.
          </p>
          <ul className="space-y-3">
            <li><strong>Hareketle Başlayın:</strong> Ekranda sabit durarak konuşmaya başlamayın. Yürüyerek kadraja girin, kameraya doğru elinizi uzatın, bir nesneyi ekrana yaklaştırın. İnsan gözü, evrimsel olarak ani harekete odaklanmaya programlıdır.</li>
            <li><strong>Büyük ve Dikkat Çekici Metin (Title Hook):</strong> Ekranın ortasında veya üstünde, videonun en can alıcı vaadini içeren büyük bir başlık kullanın. Örn: "Cildinizi Mahveden 3 Hata" metni, hedef kitlenizin kaydırmasını anında durdurur.</li>
            <li><strong>Garip veya İddialı Bir Obje:</strong> Videoya konunuzla alakalı ama absürt bir objeyi göstererek başlayın. Bir diş hekiminin elinde kocaman bir çekiçle videoya başlaması, anında merak uyandırır.</li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">3. Sözel Hook (Metin/Konuşma) Stratejileri</h2>
          <p>
            En büyük hata şudur: "Merhaba kanalıma hoş geldiniz, ben falanca şirketinden Semih. Bugün sizlere..." Bu giriş, 2014 yılında işe yarıyordu. 2026'te ise bu cümlenin sonunu duymadan kullanıcı başka videoya geçmiş olur.
          </p>
          <p>
            Sözel kancalar, <strong>doğrudan değer önerisiyle veya tartışmalı bir ifadeyle</strong> başlamalıdır. İzleyicinin beyninde bir boşluk yaratmalı ve o boşluğu doldurmak için videonun sonuna kadar izlemesini sağlamalısınız.
          </p>

          <h3 className="text-2xl mt-8 mb-4">Kanıtlanmış Hook Şablonları (Kopyala/Yapıştır)</h3>
          <ul className="space-y-3">
            <li><strong>Negatif Kanca (Acı Noktası):</strong> "Eğer X yapıyorsanız, Y'yi tamamen yanlış yapıyorsunuz." <em>(Örn: Eğer günde 2 kahve içiyorsanız, metabolizmanızı mahvediyorsunuz.)</em></li>
            <li><strong>Sır / İfşa Kancası:</strong> "[Sektörünüzün] sizden gizlediği o büyük sır." <em>(Örn: Spor salonlarının bilmenizi istemediği yağ yakım sırrı.)</em></li>
            <li><strong>Zaman / Sonuç Kancası:</strong> "Sadece [Zaman] içinde nasıl [Sonuç] elde ettim?" <em>(Örn: Sadece 30 günde İngilizce konuşmamı sağlayan taktik.)</em></li>
            <li><strong>X'in Y Nedenleri:</strong> "[Hedef Kitle]'nin [Problem]'i yaşamasının 3 ana nedeni." <em>(Örn: Restoranınızın hafta içi boş kalmasının 3 ana nedeni.)</em></li>
          </ul>

          <h2 className="text-3xl mt-12 mb-6">4. Mikro-Kancalar ve Ritim (Pacing)</h2>
          <p>
            İlk 3 saniyeyi atlattınız, tebrikler! Ancak iş burada bitmiyor. Günümüz izleyicisinin dikkati çok hızlı dağılır. İzleyiciyi videonun sonuna kadar tutmak için (Retention Rate), videonun içine her 5-8 saniyede bir <strong>"Mikro-Kancalar"</strong> yerleştirmelisiniz.
          </p>
          <p>
            Mikro-kancalar nelerdir? Kamera açısını değiştirmek (Jump cut), ekrana aniden giren bir ses efekti (swoosh, pop), önemli bir kelimenin ekranda büyümesi veya arka plan müziğinin ritminin değişmesi. Bu küçük kesintiler, izleyicinin beynine sürekli "uyanık kal, yeni bir şey oluyor" sinyali gönderir.
          </p>

          <h2 className="text-3xl mt-12 mb-6">5. Asla Yapılmaması Gereken "Hook" Hataları</h2>
          <p>
            Hook kullanmak uğruna markanıza zarar vermeyin. <strong>Clickbait (Tık tuzağı) en tehlikeli hatadır.</strong> İzleyiciye girişte büyük bir vaat sunup, videonun sonunda o vaadi karşılamazsanız, algoritma sizi cezalandırmasa bile kullanıcılar sizi engeller veya "İlgilenmiyorum" butonuna basar.
          </p>
          <p>
            Bir diğer hata ise kancayı çok uzun tutmaktır. Hook cümleniz 5 kelimeyi geçmemelidir. Kısa, net, vurucu olmalıdır.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 mt-12 rounded-r-xl">
            <h3 className="font-bold text-2xl text-foreground mb-3">Hook, İçeriğinizin Vitrinidir</h3>
            <p className="m-0 text-muted-foreground text-base">
              İster dünyanın en iyi kurgulanmış profesyonel filmi olsun, ister elinizdeki cep telefonuyla çektiğiniz bir vlog olsun — eğer doğru bir kancaya sahip değilse izlenmeyecektir. Video çekim planınızı yaparken enerjinizin ve zamanınızın %50'sini sadece videonun ilk 3 saniyesini tasarlamaya ayırın. Çünkü o ilk 3 saniye, geriye kalan tüm dakikaların izlenip izlenmeyeceğine karar verir.
            </p>
          </div>
        </div>

        <RelatedPosts slug="videolarda-ilk-3-saniye-kurali-hook" />

        <div className="mt-16 pt-10 border-t border-border">
          <div className="bg-card border border-white/5 p-8 rounded-2xl text-center shadow-2xl">
            <h3 className="font-heading text-2xl font-bold mb-4">Markanızın hikayesini anlatmaya hazır mısınız?</h3>
            <p className="text-muted-foreground mb-8">
              Stratejik içerik üretimi ve <Link href="/hizmetler/sosyal-medya-video">profesyonel video prodüksiyon</Link>u ile rakiplerinizin bir adım önüne geçin.
            </p>
            <WizardCta />
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Videolarda İlk 3 Saniye Kuralı (Hook Stratejileri)", author: { "@type": "Person", name: "Semih Hasanoğlu" }, datePublished: "2026-05-14", publisher: { "@type": "Organization", name: "Fennix Medya" }, mainEntityOfPage: "https://fennixmedya.com/blog/videolarda-ilk-3-saniye-kurali-hook" }) }} />
    </div>
  );
}
