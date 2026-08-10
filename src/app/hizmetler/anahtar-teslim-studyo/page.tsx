import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyHeroVideo from "@/components/LazyHeroVideo";
import ServiceSteps from "@/components/ServiceSteps";
import ServiceFaq, { type Faq } from "@/components/ServiceFaq";
import OtherServices from "@/components/OtherServices";
import StudioWizardCta from "@/components/StudioWizardCta";
import PdfDownloadCta from "@/components/PdfDownloadCta";

const OZET =
  "Ev veya ofisinize kişisel çekim stüdyosu kurulumu: mekân analizi, size özel ekipman listesi, fiziksel kurulum, ışık kalibrasyonu ve kamera önü provası. İstanbul.";

export const metadata: Metadata = {
  title: "Anahtar Teslim Stüdyo Kurulumu",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo",
    title: "Anahtar Teslim Stüdyo Kurulumu",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const STEPS = [
  {
    title: "Mekân analizi",
    body: "Evinize veya ofisinize gelip alanı geziyorum: derinlik, doğal ışığın gün içindeki yönü ve odanın akustiği. Bunlara bakarak kameranın hangi köşeye kurulacağını ve arka planda ne göreceğimizi belirliyoruz.",
  },
  {
    title: "Size özel ekipman listesi",
    body: "Bütçenize ve hedeflediğiniz kaliteye göre bir satın alma listesi çıkarıyorum — kamera, lens, mikrofon, ışık ve askı sistemleri. Ekipmanı kendi adınıza siz alıyorsunuz; listede ne varsa neden orada olduğunu tek tek anlatıyorum.",
  },
  {
    title: "Kurulum ve kalibrasyon",
    body: "Ekipmanlar geldiğinde mekâna gelip sistemi sıfırdan kuruyorum. Işıkları yüz hatlarınıza göre ayarlıyor, kamera ve ses ayarlarını yapıp optimum noktada kilitliyorum. Tek bir iş gününde sistem çekime hazır oluyor.",
  },
  {
    title: "Prova ve ilk kayıt",
    body: "Sistemi tek tuşla nasıl çalıştıracağınızı gösteriyorum. Sonra kamera karşısındaki duruşunuz ve ses kullanımınız üzerine prova yapıyoruz — ilk kaydınızı ben yönetiyorum, yalnız bırakmıyorum.",
  },
];

const SARTLAR = [
  {
    baslik: "Ekipman standardı",
    metin:
      "Belirlediğimiz standardın altındaki ucuz ekipmanla kurulum yapmıyorum. Sistem kurulduktan sonra görüntünün kalitesinden ben sorumlu olacağım; bunu baştan garanti edemeyeceğim malzemeyle işe başlamıyorum.",
  },
  {
    baslik: "Sabit sistem",
    metin:
      "Kurulum ve kalibrasyon bir kez yapılır, optimum ayarlarda kilitlenir. Mekân değiştirirseniz veya sistemin baştan kurulması gerekirse bu yeni bir hizmet olarak fiyatlandırılır.",
  },
  {
    baslik: "Kurgu ayrı",
    metin:
      "Bu paket sistemin kurulması ve çekime hazır hale gelmesini kapsıyor. Çektiğiniz videoların kurgulanmasını da isterseniz, aylık düzenli bir çalışma olarak ayrıca konuşuyoruz.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Hangi ekipmanları öneriyorsunuz?",
    a: "Bütçenize ve çekim amacınıza göre değişiyor. Genelde aynasız bir gövde, uygun bir zoom lens, LED panel ışıklar, yaka veya shotgun mikrofon ve sağlam bir tripod/askı sistemi öneriyorum. Listeyi mekân analizinden sonra çıkarıyorum — mekânı görmeden ekipman önermek doğru olmuyor.",
  },
  {
    q: "Ekipman maliyeti dahil mi?",
    a: "Hayır, ekipman size ait. Size en uygun fiyat/performans oranındaki listeyi ve satın alma bağlantılarını veriyorum, ekipmanı kendi adınıza siz alıyorsunuz. Böylece hem faturası sizde kalıyor hem de aradan komisyon geçmiyor.",
  },
  {
    q: "Kurulum ne kadar sürüyor?",
    a: "Mekân analizi 1-2 saat, fiziksel kurulum ve kalibrasyon ekipman sayısına göre 4-6 saat sürüyor. Genelde tek bir iş gününde sistem çekime hazır oluyor.",
  },
  {
    q: "Farklı bir mekâna taşınırsam ne oluyor?",
    a: "Kurulum bir kez yapılıp sabit kalıyor. Mekân değişikliği veya sistemin baştan kurulması gerektiğinde bu yeni bir hizmet bedeli olarak fiyatlandırılıyor.",
  },
  {
    q: "Çekimlerimin kurgusunu da yapar mısınız?",
    a: "Evet, ama bu paketin dışında. Kurgu süreci aylık düzenli bir çalışma kapsamında ayrıca fiyatlandırılıyor; ihtiyacınıza göre teklif çıkarabilirim.",
  },
];

export default function AnahtarTeslimStudyoPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Anahtar teslim stüdyo kurulumu",
          serviceType: "Stüdyo kurulumu",
          description: OZET,
          url: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
        }}
      />

      {/* Açılış */}
      <section className="container-page pt-8 pb-16 md:pb-20">
        <Breadcrumbs
          items={[{ name: "Hizmetler", href: "/hizmetler" }, { name: "Anahtar Teslim Stüdyo" }]}
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center mt-8">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-4">
              Tek seferlik kurulum
            </p>
            <h1 className="text-poster mb-8">
              <span className="block text-foreground">Otur.</span>
              <span className="block text-gradient-gold">Işığı Aç.</span>
              <span className="block text-foreground">Kaydet.</span>
            </h1>
            <div className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-8 space-y-4">
              <p>
                Kamera karşısına geçmemenizin asıl sebebi çoğu zaman prodüksiyonun kendisi: her
                çekimden önce ışık kurmak, açı aramak, mikrofon denemek.
              </p>
              <p>
                Kendi içeriğinizi kendiniz çekmek istiyorsanız, mekânınıza bunu bir kere kuruyorum.
                Sonrasında yapmanız gereken tek şey sandalyeye oturup kayıt tuşuna basmak.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <StudioWizardCta text="Ücretsiz Mekân Analizi Talep Et" />
              <PdfDownloadCta />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <figure className="max-w-[300px] mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[9/16] max-w-[300px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-black">
                <LazyHeroVideo
                  src="/videos/portfolyo/studyo.mp4"
                  poster="/videos/portfolyo/studyo.jpg"
                  title="Kurulumu yapılan kişisel stüdyodan görüntü"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3 max-w-[300px] mx-auto lg:max-w-none">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                  Kurulan stüdyo
                </span>
                <span className="h-px flex-1 bg-border/50" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash/60">
                  İstanbul
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ServiceSteps eyebrow="Hizmet kapsamı" heading="Nasıl İşliyor" steps={STEPS} />

      {/* Şartlar */}
      <section className="section-spacing bg-background">
        <div className="container-page">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
              Açık konuşalım
            </p>
            <h2 className="text-display-2 text-foreground mb-4">Şartlar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Baştan net olmayı tercih ediyorum — bu üç madde, sonradan sürpriz çıkmasın diye
              burada yazıyor.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {SARTLAR.map((s, i) => (
              <Reveal key={s.baslik} delay={i * 60}>
                <div className="border-t border-border/50 pt-6">
                  <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">
                    {s.baslik}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.metin}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rehber */}
      <section className="section-spacing bg-surface">
        <div className="container-page">
          <Reveal>
            <div className="card-surface p-8 md:p-12 max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash mb-4">
                Ücretsiz rehber · PDF
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-foreground mb-4">
                Kendiniz Kurmak İsterseniz
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
                Ekipman seçimi, ışık düzeni, ses kurulumu ve kamera ayarlarını adım adım anlattığım
                rehberi indirin. Benimle çalışmadan da kurabilirsiniz — içindeki her şey aynı.
              </p>
              <PdfDownloadCta text="Rehberi İndir" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceFaq faqs={FAQS} />

      <OtherServices currentServiceId="anahtar-teslim-studyo" />

      {/* Kapanış */}
      <section className="section-spacing bg-surface border-t border-border/40">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-display-2 text-foreground mb-4">Mekânınıza Bakalım</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Mekân analizi ücretsiz. Alanı gezip ne kurulabileceğini söylüyorum; devam etmek
              zorunda değilsiniz.
            </p>
            <StudioWizardCta text="Ücretsiz Mekân Analizi Talep Et" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
