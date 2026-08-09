import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { MapPin, ClipboardList, Wrench, Clapperboard, ShieldCheck, Lock, Scissors, ChevronDown } from "lucide-react";
import StudioWizardCta from "@/components/StudioWizardCta";
import PdfDownloadCta from "@/components/PdfDownloadCta";
import OtherServices from "@/components/OtherServices";
import LazyHeroVideo from "@/components/LazyHeroVideo";

export const metadata: Metadata = {
  title: "Anahtar Teslim Stüdyo Kurulumu",
  description:
    "Ofisinizde veya evinizde, tek tuşla sinematik yayın yapabileceğiniz kişisel içerik üssünüzü kuruyoruz. Akustik analiz, ışık kalibrasyonu ve kamera önü performansı dahildir.",
  alternates: { canonical: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo",
    title: "Anahtar Teslim Stüdyo Kurulumu",
    description: "Ofisinizde veya evinizde, tek tuşla sinematik yayın yapabileceğiniz kişisel içerik üssünüzü kuruyoruz. Akustik analiz, ışık kalibrasyonu ve kamera önü performansı dahildir.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const steps = [
  {
    icon: MapPin,
    num: "01",
    title: "Mekan Analizi ve Görsel Planlama",
    desc: "Mevcut alanınızı (ev veya ofis) ziyaret ederek derinlik, doğal ışık ve akustik açısından en verimli köşeyi belirliyoruz. Marka kimliğinize uygun arka plan ve renk paleti tasarımını planlıyoruz.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Kişiselleştirilmiş Envanter Çıkarma",
    desc: "Bütçenize ve hedeflenen kaliteye uygun olarak tamamen size özel bir ekipman satın alma listesi oluşturuyoruz. Kamera, lens, mikrofon, ışık ve pratik tripod/askı sistemleri dahil.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Fiziksel Kurulum ve Kalibrasyon",
    desc: "Ekipmanlar ulaştığında mekanınıza gelerek tüm sistemi sıfırdan kuruyoruz. Işıkları yüz hatlarınıza göre sinematik standartta ayarlıyor, kamera ve lens kalibrasyonunu yapıyoruz.",
  },
  {
    icon: Clapperboard,
    num: "04",
    title: "Kamera Önü Koçluğu ve İlk Kayıt",
    desc: "Sistemi nasıl tek tuşla çalıştıracağınızı gösteriyor, kamera karşısındaki duruşunuz ve ses kullanımınız üzerine prova yaparak ilk profesyonel videonuzun kaydını bizzat yönetiyoruz.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Ekipman Standardı",
    desc: "Sinematik görüntünün elde edilmesi için belirlenen standartların altındaki ucuz veya amatör ekipmanlarla kurulum yapılmaz.",
  },
  {
    icon: Lock,
    title: "Sabit Sistem",
    desc: "Kurulum ve kalibrasyon bir kez yapılır ve optimum ayarlarda kilitlenir. Mekan değiştirme veya baştan kurulum, yeni bir hizmet bedeline tabidir.",
  },
  {
    icon: Scissors,
    title: "Kurgu Hizmeti",
    desc: "Bu paket sadece sistemin kurulması ve çekime hazır hale getirilmesi sürecini kapsar. Post-prodüksiyon ayrıca fiyatlandırılır.",
  },
];

const faqs = [
  { q: "Hangi ekipmanları öneriyorsunuz?", a: "Bütçenize ve çekim amacınıza göre kişiselleştirilmiş bir ekipman listesi oluşturuyoruz. Genellikle mirrorless kameralar, sinema lensleri, LED panel ışıklar, yaka ve shotgun mikrofonlar ile profesyonel tripod/askı sistemleri öneriyoruz." },
  { q: "Ekipman maliyeti dahil mi?", a: "Hayır. Ekipman maliyetleri müşteriye aittir. Biz size en uygun fiyat/performans oranına sahip ekipman listesini ve doğrudan satın alma linklerini teslim ediyoruz. Ekipmanı kendi adınıza satın alırsınız." },
  { q: "Kurulum ne kadar sürer?", a: "Mekan analizi yaklaşık 1-2 saat, fiziksel kurulum ve kalibrasyon ise ekipman sayısına bağlı olarak 4-6 saat sürer. Genellikle tek bir iş günü içerisinde sisteminiz çekime hazır hale gelir." },
  { q: "Farklı bir mekana taşınırsam ne olur?", a: "Kurulum bir kez yapılır ve sabit kalır. Mekan değişikliği veya sistemin baştan kurulması gerektiğinde, bu yeni bir hizmet bedeli olarak fiyatlandırılır." },
  { q: "Kurgu hizmeti de alabilir miyim?", a: "Evet. Çekimlerinizin kurgulanması (post-prodüksiyon) süreci, aylık düzenli bir işbirliği (Retainer) kapsamında ayrıca fiyatlandırılır. Bu konuda size özel bir teklif hazırlayabiliriz." },
];

export default function AnahtarTeslimStudyoPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Anahtar Teslim Stüdyo Kurulumu",
          serviceType: "Video Prodüksiyon",
          description: "Ofis veya ev için tek tuşla sinematik yayın yapılabilen kişisel stüdyo kurulumu; akustik analiz, ışık kalibrasyonu ve ekipman seçimi dahil.",
          url: "https://fennixmedya.com/hizmetler/anahtar-teslim-studyo",
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": "https://fennixmedya.com/#organization" },
        }}
      />
      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Yeni Hizmet — Stüdyo Entegrasyonu
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Evinize veya Ofisinize{" "}
              <span className="text-gradient-gold">Profesyonel Stüdyo</span>{" "}
              Kuruyoruz
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Kamera karşısına geçmemenizin asıl sebebi prodüksiyon sürecidir. Her çekimden önce
              ışık ayarlamak, açı bulmak ve mikrofon test etmek yerine —{" "}
              <strong className="text-foreground">sandalyenize oturun, ışıkları açın ve kayıt tuşuna basın.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StudioWizardCta text="Ücretsiz Mekan Analizi Talep Et" />
              <PdfDownloadCta />
            </div>
          </div>

          <div className="relative w-full aspect-[9/16] md:aspect-[4/5] flex items-center justify-center group rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-black rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <LazyHeroVideo
              src="/videos/portfolyo/studyo.mp4"
              poster="/videos/portfolyo/studyo.jpg"
              title="Stüdyo Kurulumu Video Örneği"
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Süreç</span>
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight mb-4">
            Hizmet Kapsamı: <span className="text-gradient-gold">Nasıl İşliyor?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            4 adımda sisteminiz kurulur ve çekime hazır hale gelir.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const StepIcon = step.icon;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-background border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 group-hover:border-primary/80 transition-all duration-500 z-20">
                    <span className="font-heading text-lg font-black text-primary/80 group-hover:text-primary transition-colors">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-20 text-left" : "md:pl-20 text-left"}`}>
                    <div className={`bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 w-full max-w-lg mx-auto ${isEven ? "md:mr-0" : "md:ml-0"} -mt-2 md:mt-0`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                          <StepIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground leading-tight">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Çalışma Prensipleri */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-4">
            Çalışma <span className="text-gradient-gold">Prensipleri</span> ve Şartlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ortaya çıkan işin belirli bir kalite standardının altında düşmemesi için bazı net kurallarımız bulunmaktadır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => {
            const PIcon = p.icon;
            return (
              <div key={i} className="bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/60 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <PIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Lead Magnet CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-card to-background border border-primary/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Ücretsiz Rehber</span>
            <h2 className="font-heading text-2xl md:text-4xl font-black mb-4">
              Kendi Stüdyonuzu Kurmak mı İstiyorsunuz?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Ekipman seçimi, ışık düzeni, ses kurulumu ve kamera ayarlarını adım adım anlatan
              <strong className="text-foreground"> &quot;Sıfırdan Profesyonel Stüdyo Kurma Rehberi&quot;</strong> ni ücretsiz indirin.
            </p>
            <PdfDownloadCta text="Ücretsiz Rehberi İndir" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-4">
            Sıkça Sorulan <span className="text-gradient-gold">Sorular</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-heading font-bold text-foreground pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed -mt-2">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="anahtar-teslim-studyo" />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-card border border-white/5 p-8 md:p-12 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
            Markanızı Amatör Çekimlerden <span className="text-gradient-gold">Kurtarın</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Sektörünüzde tartışmasız bir görsel otorite inşa etmeye hazırsanız, süreci başlatmak için randevu alın.
          </p>
          <StudioWizardCta text="Ücretsiz Mekan Analizi Talep Et" />
        </div>
      </section>
    </div>
  );
}
