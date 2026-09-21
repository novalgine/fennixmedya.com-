import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import ServiceCta from "@/components/ServiceCta";
import OtherServices from "@/components/OtherServices";
import ServiceWorks from "@/components/ServiceWorks";
import ServicePrice from "@/components/ServicePrice";
import TestimonialsStrip from "@/components/TestimonialsStrip";
import { packages } from "@/data/pricing";

// Fiyat tek kaynaktan: data/pricing.ts
const AYLIK = packages.find((p) => p.id === "aylik")!;

const OZET =
  `İstanbul'da Instagram Reels, TikTok ve YouTube Shorts için dikey video çekimi. Ayda iki çekim günü, sekiz video; metin yazımından kurguya kadar tek elden. Aylık ${AYLIK.price}'den başlar.`;

export const metadata: Metadata = {
  title: "Reels ve Sosyal Medya Video Çekimi · İstanbul",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler/sosyal-medya-video" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/sosyal-medya-video",
    title: "Reels ve Sosyal Medya Video Çekimi · İstanbul",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const STEPS = [
  {
    title: "Önce metin, sonra kamera",
    body: "Sete \"bugün ne çeksek\" diye gitmem. Markanızı tanıyıp metinleri ben yazarım; siz kendi sektörünüzü benden iyi bildiğiniz için isterseniz siz yazarsınız, ya da ana konularınızdan yola çıkıp birlikte kurgularız. Çekim gününe geldiğimizde ne söyleyeceğiniz bellidir.",
  },
  {
    title: "Ayda iki çekim günü",
    body: "Zamanlamayı birlikte planlarız, çekimler genelde öğleden sonra olur. Bir günde hedefim dört Reels; günün akışına göre üç ile beş arasında değişir. Aylık sekiz videoyu iki sete çıkarak tamamlarız.",
  },
  {
    title: "Kamera önünde yalnız değilsiniz",
    body: "Donduğunuz yerde devreye girerim. Oyunculuk ve yönetmenlik geçmişim tam da bunun için: kendi tonunuzu bulana kadar birlikte çalışırız. Konuşmalar bitince mekânın atmosferini toplayan detay çekimlerini yaparım.",
  },
  {
    title: "Akşam kurguya başlarım",
    body: "Eve döndüğüm akşam kurgu başlar. Videoları ay sonunu bekletip toplu atmam — bittikçe sırayla teslim ederim, böylece paylaşım takviminiz boş kalmaz.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Sosyal medya video çekimi ne kadar tutuyor?",
    a: `Aylık üretim ${AYLIK.price}'den başlıyor: ayda sekiz video, iki çekim günü; senaryo, çekim, kurgu ve kamera önü koçluğu dahil. Ödemeyi ilk çekim gününün sonunda, ayın tamamı için alıyorum.`,
  },
  {
    q: "En az ne kadar süre çalışıyoruz?",
    a: "En az bir ay: iki çekim günü, sekiz video. Sosyal medyada sonuç düzenli üretimle geldiği için tek çekim günü satmıyorum; ama sizi bir yıla bağlayan sözleşme de yok, aydan aya devam ederiz.",
  },
  {
    q: "İstanbul dışına geliyor musunuz?",
    a: "Evet. Diş hekimi Ayzıt Umay için üç ay boyunca Ankara'ya gidip geldim. Yol ve konaklama karşılandığında Marmara ve yakın iller benim için rahat; daha uzak şehirler için önce konuşuruz.",
  },
  {
    q: "Hangi sektörlerle çalıştınız?",
    a: "Diş hekimi, veteriner klinikleri, beslenme uzmanı, kuyumcu, ev tekstili ve içecek markaları, tiyatro oyunları. İşlerin bir kısmı bu sayfada, tamamı portfolyoda duruyor.",
  },
  {
    q: "Bir çekim gününde kaç video çıkıyor?",
    a: "Hedefim dört Reels. Konuların uzunluğuna, mekân değişimine ve günün akışına göre üç ile beş arasında değişiyor. Ayda iki çekim gününde toplam sekiz video teslim ediyorum.",
  },
  {
    q: "Metinleri kim yazıyor?",
    a: "Genelde ben yazıyorum. Ama siz kendi sektörünüzü benden iyi biliyorsunuz; isterseniz siz yazarsınız ya da ana konularınızı verirsiniz, birlikte kurgularız. Hangisi olursa olsun metin çekimden önce hazır olur.",
  },
  {
    q: "Hangi platformlara uygun çekiyorsunuz?",
    a: "Dikey 9:16 formatta çekiyorum; Instagram Reels, TikTok, YouTube Shorts ve LinkedIn'de aynı video kullanılabiliyor.",
  },
  {
    q: "Videolar ne zaman elime geçiyor?",
    a: "Çekim akşamı kurguya başlıyorum ve videoları bittikçe sırayla gönderiyorum. Toplu teslimat için ay sonunu beklemenize gerek kalmıyor.",
  },
  {
    q: "Hangi ekipmanla çekiyorsunuz?",
    a: "Sony FX30 kamera, Tamron 17-70mm lens, DJI RS4 gimbal, tripod ve Rode Wireless GO II yaka mikrofonu. Drone pakete dahil değil; gerekirse günlük ayrı kalem olarak ekliyorum.",
  },
  {
    q: "Kapak görseli veya grafik tasarım yapıyor musunuz?",
    a: "Hayır, grafik tasarım ve statik görsel benim alanım değil. İhtiyacınız olursa güvendiğim isimlere yönlendirir, süreci sizin adınıza takip ederim.",
  },
];

export default function SosyalMedyaVideoPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sosyal medya video prodüksiyonu",
          serviceType: "Video prodüksiyon",
          description: OZET,
          url: "https://fennixmedya.com/hizmetler/sosyal-medya-video",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
          offers: {
            "@type": "Offer",
            price: AYLIK.price.replace(/[^0-9]/g, ""),
            priceCurrency: "TRY",
            description: "Aylık üretim başlangıç fiyatı: ayda 8 video, 2 çekim günü",
          },
        }}
      />

      <ServiceHero
        breadcrumb="Sosyal Medya Videosu"
        eyebrow="Sosyal medya video çekimi · İstanbul"
        title={[{ text: "Ayda İki Gün" }, { text: "Sekiz Video", gold: true }]}
        intro={
          <>
            <p>
              Reels, TikTok ve Shorts için dikey video çekiyorum. Sizden istediğim tek şey,
              belirlediğimiz gün ve saatte sette olmak.
            </p>
            <p>
              Metni önceden yazarız, çekimde kamera karşısında sizi yalnız bırakmam, akşam kurguya
              başlarım. Aradaki her adım bende.
            </p>
          </>
        }
        video={{
          src: "/videos/portfolyo/umay.mp4",
          poster: "/videos/portfolyo/umay.jpg",
          title: "Diş Hekimi Ayzıt Umay için çekilen dikey video",
          vertical: true,
        }}
        videoCaption="Dt. Ayzıt Umay"
      />

      <ServiceWorks
        eyebrow="Teslim edilen işler"
        heading="Kimlerle Çalıştım"
        sub="Diş hekimi, veteriner kliniği, beslenme uzmanı, kuyumcu, ev tekstili ve içecek markaları, tiyatro oyunları. Hepsini ben çektim, ben kurguladım."
        ids={["umay", "vethouse", "melis", "boogold", "vavelya-karpuz", "buzdagi", "afife", "zuhal"]}
      />
      <ServiceSteps
        eyebrow="Bir çekim günü"
        heading="Nasıl İşliyor"
        steps={STEPS}
        note={
          <>
            Bu hizmet aylık düzenli çalışma üzerine kurulu — sosyal medyada kalıcı sonuç, düzenli
            üretimle birkaç ay içinde geliyor. Tek seferlik bir video ihtiyacınız varsa da
            konuşabiliriz, kapsamına göre fiyatlandırıyorum.
          </>
        }
      />

      <ServicePrice
        packageId="aylik"
        heading="Aylık Üretim Ne Kadar?"
        sub="Fiyatı saklamıyorum. Görüşmeye gelmeden bilmeniz ikimizin de zamanını korur."
      />
      <TestimonialsStrip />
      <ServiceFaq faqs={FAQS} />

      <OtherServices currentServiceId="sosyal-medya-video" />

      <ServiceCta
        heading="Sıradaki Çekim Günü"
        text="15 dakikalık görüşmede markanızı dinliyorum, hangi konuların işe yarayacağını konuşuyoruz."
      />
    </div>
  );
}
