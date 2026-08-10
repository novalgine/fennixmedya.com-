import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import ServiceCta from "@/components/ServiceCta";
import OtherServices from "@/components/OtherServices";

const OZET =
  "İstanbul'da Instagram Reels, TikTok ve YouTube Shorts için dikey video çekimi. Ayda iki çekim günü, sekiz video; metin yazımından kurguya kadar tek elden.";

export const metadata: Metadata = {
  title: "Sosyal Medya Video Çekimi",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler/sosyal-medya-video" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/sosyal-medya-video",
    title: "Sosyal Medya Video Çekimi",
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
        }}
      />

      <ServiceHero
        breadcrumb="Sosyal Medya Videosu"
        eyebrow="Dikey format · 9:16"
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

      <ServiceFaq faqs={FAQS} />

      <OtherServices currentServiceId="sosyal-medya-video" />

      <ServiceCta
        heading="Sıradaki Çekim Günü"
        text="15 dakikalık görüşmede markanızı dinliyorum, hangi konuların işe yarayacağını konuşuyoruz."
      />
    </div>
  );
}
