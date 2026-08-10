import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import ServiceCta from "@/components/ServiceCta";
import OtherServices from "@/components/OtherServices";

const OZET =
  "İstanbul'da YouTube için uzun format video çekimi ve kurgusu. Konu planından altyazıya kadar tek elden; kanalınızın düzenli yayın ritmini birlikte kurarız.";

export const metadata: Metadata = {
  title: "YouTube İçerik Üretimi",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler/youtube-icerik-uretimi" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/youtube-icerik-uretimi",
    title: "YouTube İçerik Üretimi",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const STEPS = [
  {
    title: "Konu planı",
    body: "Kanalın kime hitap ettiğini konuşup bir konu listesi çıkarıyoruz. Tek tek video düşünmek yerine birbirini besleyen bir sıra kurmak, hem çekimi hem izleyicinin kanalda kalmasını kolaylaştırıyor.",
  },
  {
    title: "Tek günde birden çok bölüm",
    body: "Uzun format videolarda en pahalı şey kurulum. Bir kere kurup art arda birkaç bölüm çekmek, kanalın haftalarca yayın yapmasını sağlıyor. Aynı gün içinde kıyafet ve arka plan değişimiyle bölümleri ayırıyoruz.",
  },
  {
    title: "Anlatımın kendisi",
    body: "Uzun formatta izleyiciyi tutan şey kurgu hızı değil, konuşan kişinin rahatlığı. Ezber cümle ile kendi cümlesi arasındaki farkı kamera anında gösteriyor — oyunculuk geçmişim burada işe yarıyor.",
  },
  {
    title: "Kurgu ve altyazı",
    body: "Kurgu, ses dengeleme, renk düzeltme ve altyazı bende. Videoyu Shorts için kesmek isterseniz aynı çekimden dikey parçalar da çıkarıyorum.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Hangi formatlarda çekiyorsunuz?",
    a: "Ana videolar yatay 16:9. Aynı çekimden Shorts için dikey 9:16 kesitler de çıkarabiliyorum. Podcast tarzı sohbet ve ürün anlatım videoları da bu kapsamda.",
  },
  {
    q: "Kapak görseli (thumbnail) tasarımı dahil mi?",
    a: "Hayır. Grafik tasarım benim alanım değil, o yüzden kendim yapmıyorum. Çalıştığım güvendiğim tasarımcılara yönlendirir, süreci sizin adınıza takip ederim.",
  },
  {
    q: "Başlık ve açıklama metinlerini yazıyor musunuz?",
    a: "Konu planını birlikte çıkarırken başlık yönünü de konuşuyoruz. Ama kanalın büyümesi tek başına başlıktan gelmiyor; asıl belirleyici olan düzenli yayın ve videonun kendisi.",
  },
  {
    q: "Ne sıklıkla çekim yapıyoruz?",
    a: "Kanalın hedefine göre değişiyor. Genelde ayda bir veya iki çekim gününde birkaç bölüm birden çekip yayın takvimini önden dolduruyoruz.",
  },
  {
    q: "Ne kadar sürede sonuç alırım?",
    a: "Bir ayda patlarız diye bir söz veremem. YouTube'da kalıcı sonuç düzenli yayınla birkaç ay içinde geliyor; bunu baştan konuşalım ki ikimiz de doğru beklentiyle başlayalım.",
  },
];

export default function YoutubeIcerikUretimiPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "YouTube içerik üretimi",
          serviceType: "Video prodüksiyon",
          description: OZET,
          url: "https://fennixmedya.com/hizmetler/youtube-icerik-uretimi",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
        }}
      />

      <ServiceHero
        breadcrumb="YouTube İçerik Üretimi"
        eyebrow="Uzun format · 16:9"
        title={[{ text: "Bir Gün Çekim" }, { text: "Aylarca Yayın", gold: true }]}
        intro={
          <>
            <p>
              YouTube için uzun format videolar çekiyorum. Konu planından altyazıya kadar süreç
              bende; sizin işiniz anlatmak.
            </p>
            <p>
              Bir kere kurulup art arda bölüm çekmek, kanalın haftalarca yayında kalmasını
              sağlıyor — uzun formatta en çok işe yarayan şey bu.
            </p>
          </>
        }
        video={{
          src: "/videos/portfolyo/youtube.mp4",
          poster: "/videos/portfolyo/youtube.jpg",
          title: "YouTube için çekilen uzun format video",
          vertical: false,
        }}
        videoCaption="Uzun format"
      />

      <ServiceSteps
        eyebrow="Kanal akışı"
        heading="Nasıl İşliyor"
        steps={STEPS}
        note={
          <>
            Kapak görseli tasarımı ve grafik işleri bu pakete dahil değil — benim alanım olmadığı
            için kendim yapmıyorum, güvendiğim isimlere yönlendiriyorum.
          </>
        }
      />

      <ServiceFaq faqs={FAQS} />

      <OtherServices currentServiceId="youtube-icerik-uretimi" />

      <ServiceCta
        heading="Kanalınızı Konuşalım"
        text="15 dakikalık görüşmede kanalın hedefini dinliyorum, hangi konu sırasının işe yarayacağını birlikte çıkarıyoruz."
      />
    </div>
  );
}
