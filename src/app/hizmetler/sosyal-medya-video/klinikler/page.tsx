import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceWorks from "@/components/ServiceWorks";
import ServiceSteps from "@/components/ServiceSteps";
import ServicePrice from "@/components/ServicePrice";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import ServiceCta from "@/components/ServiceCta";
import OtherServices from "@/components/OtherServices";
import { packages } from "@/data/pricing";

// Fiyat tek kaynaktan: data/pricing.ts
const AYLIK = packages.find((p) => p.id === "aylik")!;
const URL = "https://fennixmedya.com/hizmetler/sosyal-medya-video/klinikler";

const OZET = `Diş hekimi ve veteriner klinikleri için dikey sosyal medya videosu. Klinikte, planlı bir çekim gününde; tedavi sonucu vaat etmeyen, bilgilendiren metinle. Ayda iki gün, sekiz video, ${AYLIK.price}'den.`;

export const metadata: Metadata = {
  title: "Klinikler ve Hekimler için Sosyal Medya Videosu · İstanbul",
  description: OZET,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Klinikler ve Hekimler için Sosyal Medya Videosu · İstanbul",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const STEPS = [
  {
    title: "Konuları hasta sorularından çıkarırız",
    body: "Muayenede en çok duyduğunuz soruları yazarız; her biri bir video olur. Kamera karşısında ezber değil, her gün zaten anlattığınız şeyi anlatırsınız.",
  },
  {
    title: "Metin, sağlık tanıtımının sınırında kalır",
    body: "Türkiye'de sağlık alanında tanıtım kısıtlı. Metinler tedavi sonucu vaat etmez; bilgilendirir, sizi ve kliniği tanıtır. Anlatan sizsiniz, konu bilgi.",
  },
  {
    title: "Çekim klinikte, planlı bir yarım günde",
    body: "Randevu aralarına sıkışmayız; ayda iki öğleden sonrayı çekime ayırırız. Işığı ve mikrofonu ben getiririm, ayrı stüdyo gerekmez. Donduğunuz yerde devreye girerim.",
  },
  {
    title: "Akşam kurguya başlarım",
    body: "Eve döndüğüm akşam kurgu başlar. Videoları ay sonunu bekletip toplu atmam — bittikçe sırayla teslim ederim.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Hangi kliniklerle çalıştınız?",
    a: "Diş hekimi Ayzıt Umay ile Ankara'da üç ay çalıştım. Vet House ve Petadress veteriner klinikleri için de çektim. Üçünün de videoları bu sayfada.",
  },
  {
    q: "Hasta görüntüsü olmadan video çekilir mi?",
    a: "Evet, işlerin çoğu öyle. Anlatan hekim, konu bilgi: \"diş beyazlatma kimlere uygun\", \"kedim mama yemiyor, ne zaman getirmeliyim\" gibi. Hasta görünecekse yazılı izin sizin sorumluluğunuzda, çekim düzeni benim.",
  },
  {
    q: "Tedavi öncesi-sonrası videosu çeker misiniz?",
    a: "Hayır. Türkiye'de sağlık tanıtımında sonuç vaadi kısıtlı; ben de öyle video çekmiyorum. Bilgilendiren, sizi ve kliniği tanıtan videolar çekiyorum.",
  },
  {
    q: "Çekim kliniğin içinde mi oluyor?",
    a: "Evet. Muayene odası, bekleme alanı, laboratuvar — hangisi işe yarıyorsa. Sony FX30, ışık ve Rode yaka mikrofonu benimle geliyor.",
  },
  {
    q: "Kamera karşısında rahat değilim, ne olacak?",
    a: "Çoğu hekim öyle başlıyor. Dört yıl tiyatro oyunculuğu yaptım; donduğunuz yerde devreye girip kendi tonunuzu bulana kadar birlikte çalışırız. İlk çekim günü en zoru, ikincisinde alışılıyor.",
  },
  {
    q: "İstanbul dışındayız, gelir misiniz?",
    a: "Evet. Ayzıt Umay için üç ay Ankara'ya gidip geldim. Yol ve konaklama karşılandığında Marmara ve yakın iller benim için rahat; daha uzak şehirler için önce konuşuruz.",
  },
  {
    q: "Ne kadar tutuyor?",
    a: `Klinikler için ayrı bir paket yok: aylık üretim ${AYLIK.price}'den başlıyor — ayda sekiz video, iki çekim günü, senaryo, çekim, kurgu ve kamera önü koçluğu dahil. Ödemeyi ilk çekim gününün sonunda, ayın tamamı için alıyorum.`,
  },
];

export default function KliniklerPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Klinikler ve hekimler için sosyal medya video prodüksiyonu",
          serviceType: "Video prodüksiyon",
          description: OZET,
          url: URL,
          audience: { "@type": "Audience", audienceType: "Diş hekimleri, hekimler ve veteriner klinikleri" },
          areaServed: [
            { "@type": "City", name: "İstanbul" },
            { "@type": "Country", name: "Türkiye" },
          ],
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
        breadcrumb="Klinikler için"
        eyebrow="Klinikler ve hekimler için · dikey video"
        title={[{ text: "Hastanız Sizi" }, { text: "Önce Ekranda Görüyor.", gold: true }]}
        intro={
          <>
            <p>
              Diş hekimi ve veteriner klinikleri için dikey video çekiyorum: hastanın kapıdan
              girmeden önce sizi tanıdığı kısa videolar.
            </p>
            <p>
              Konuları muayenede en çok duyduğunuz sorulardan çıkarırız. Metin tedavi sonucu vaat
              etmez; siz anlatırsınız, ben çeker ve kurgularım.
            </p>
          </>
        }
        video={{
          src: "/videos/portfolyo/umay.mp4",
          poster: "/videos/portfolyo/umay.jpg",
          title: "Diş hekimi Ayzıt Umay için Ankara'da çekilen dikey video",
          vertical: true,
        }}
        videoCaption="Dt. Ayzıt Umay · Ankara"
      />
      <ServiceWorks
        eyebrow="Teslim edilen işler"
        heading="Klinik İşleri"
        sub="Bir diş hekimi, iki veteriner kliniği. Hepsini ben çektim, ben kurguladım."
        ids={["umay", "vethouse", "petadress"]}
      />
      <ServiceSteps
        eyebrow="Bir çekim günü"
        heading="Klinikte Nasıl İşliyor"
        steps={STEPS}
        note={
          <>
            Bu, <Link href="/hizmetler/sosyal-medya-video" className="text-primary hover:underline">sosyal medya video</Link>{" "}
            hizmetimin klinikler için uyarlanmış hali. Ritim ve fiyat aynı; değişen, konuların
            nereden çıktığı ve metnin hangi sınırda kaldığı.
          </>
        }
      />
      <ServicePrice
        packageId="aylik"
        heading="Klinikler için Fiyat Aynı"
        sub="Ayrı bir paket yok: aylık üretim, sekiz video, iki çekim günü."
      />
      <ServiceFaq faqs={FAQS} />
      <OtherServices currentServiceId="sosyal-medya-video" />
      <ServiceCta
        heading="Kliniğinizi Görelim"
        text="15 dakikalık görüşmede hangi soruların video olacağını birlikte çıkarırız."
      />
    </div>
  );
}
