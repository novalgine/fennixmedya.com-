import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServiceHero from "@/components/ServiceHero";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import ServiceCta from "@/components/ServiceCta";
import OtherServices from "@/components/OtherServices";

const OZET =
  "İstanbul'da kurumsal tanıtım filmi çekimi. Senaryo, çekim, kurgu ve renk düzeltme tek elden; web siteniz, fuar standınız ve reklam kampanyalarınız için 1-3 dakikalık film.";

export const metadata: Metadata = {
  title: "Kurumsal Tanıtım Filmi Çekimi",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi",
    title: "Kurumsal Tanıtım Filmi Çekimi",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const STEPS = [
  {
    title: "Markayı dinlemek",
    body: "İşinizi, kime sattığınızı ve filmin nerede kullanılacağını konuşarak başlıyoruz. Web sitesinde açılış videosu olacak film ile fuar standında sessiz dönecek film aynı film değildir; bunu baştan netleştiriyoruz.",
  },
  {
    title: "Senaryo ve çekim planı",
    body: "Filmin akışını, hangi mekânlarda ne çekeceğimizi ve kimin konuşacağını yazıya döküyorum. Onaylanmadan sete çıkmıyoruz — çekim gününde tartışılacak bir şey kalmıyor.",
  },
  {
    title: "Çekim günü",
    body: "Mekânı okuyup ışığı ona göre kuruyorum. Kamera karşısına geçen kişi ekibinizden biriyse, oyunculuk geçmişim burada devreye giriyor: metni ezberletmek yerine kendi cümlesi gibi söyletiyorum. Ardından mekânın atmosferini toplayan detay çekimlerini yapıyorum.",
  },
  {
    title: "Kurgu, renk ve teslim",
    body: "Kurgu, renk düzeltme ve ses dengeleme bende. İlk kesimi izliyorsunuz, revizyonları alıyorum, sonra web ve sosyal medya için farklı en-boy oranlarında teslim ediyorum.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Film ne kadar uzun oluyor?",
    a: "Kapsamına göre genelde 1-3 dakika arasında. Filmin nerede kullanılacağı uzunluğu belirliyor: web sitesi açılışı için kısa, fuar veya sunum için daha uzun bir kurgu mantıklı oluyor.",
  },
  {
    q: "Süreç ne kadar sürüyor?",
    a: "Senaryo ve plan, çekim günü, kurgu ve revizyon dahil olmak üzere genelde 2-4 hafta. Kaç mekânda çekim yapacağımıza ve revizyon turlarına göre değişiyor.",
  },
  {
    q: "Drone çekimi dahil mi?",
    a: "Hayır, drone ayrı fiyatlandırılıyor. Lokasyon uygunsa ve gerçekten filme katkısı olacaksa öneriyorum; sırf görsel şov olsun diye eklemiyorum.",
  },
  {
    q: "Oyuncu veya seslendirme sağlıyor musunuz?",
    a: "Filmlerin çoğunda markanın kendi ekibi konuşuyor ve bu daha inandırıcı oluyor. Profesyonel oyuncu veya dış ses gerekiyorsa bütçeye ekleyerek ayrıca planlıyoruz.",
  },
  {
    q: "Ödeme ne zaman yapılıyor?",
    a: "Ödemeyi çekim gününün sonunda alıyorum. Kurgu ve teslim süreci bunun ardından işliyor.",
  },
];

export default function KurumsalTanitimFilmiPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kurumsal tanıtım filmi çekimi",
          serviceType: "Video prodüksiyon",
          description: OZET,
          url: "https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
        }}
      />

      <ServiceHero
        breadcrumb="Kurumsal Tanıtım Filmi"
        eyebrow="Yatay format · 16:9"
        title={[{ text: "Markanız" }, { text: "Tek Filmde", gold: true }]}
        intro={
          <>
            <p>
              Web sitenizde, fuar standınızda ve reklam kampanyanızda kullanacağınız kurumsal
              tanıtım filmi çekiyorum. Senaryodan renk düzeltmeye kadar tek elden.
            </p>
            <p>
              Kameraya sizin ekibiniz geçiyor — işini anlatan kişinin kendi sesi, dış sesle
              okunmuş metinden her zaman daha inandırıcı.
            </p>
          </>
        }
        video={{
          src: "/videos/portfolyo/petadress.mp4",
          poster: "/videos/portfolyo/petadress.jpg",
          title: "Pet Adress için çekilen tanıtım filmi",
          vertical: true,
        }}
        videoCaption="Pet Adress"
      />

      <ServiceSteps
        eyebrow="Proje akışı"
        heading="Nasıl İşliyor"
        steps={STEPS}
        note={
          <>
            Grafik tasarım, animasyon ve statik görsel işleri benim alanım değil. Filminizde
            ihtiyaç olursa güvendiğim isimlere yönlendirir, süreci sizin adınıza takip ederim.
          </>
        }
      />

      <ServiceFaq faqs={FAQS} />

      <OtherServices currentServiceId="kurumsal-tanitim-filmi" />

      <ServiceCta
        heading="Filminizi Konuşalım"
        text="15 dakikalık görüşmede işinizi dinliyorum, filmin nerede kullanılacağına göre kapsamı birlikte belirliyoruz."
      />
    </div>
  );
}
