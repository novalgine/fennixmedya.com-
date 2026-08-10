import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WizardCta from "@/components/WizardCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const OZET =
  "Semih Hasanoğlu — Radyo-TV-Sinema mezunu, dört yıl oyunculuk ve yönetmenlik yaptı, şimdi İstanbul'da markalar için video çekiyor. Senaryodan teslimata kadar her işi tek başına yürütüyor.";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: OZET,
  alternates: { canonical: "https://fennixmedya.com/hakkimizda" },
  openGraph: {
    type: "profile",
    url: "https://fennixmedya.com/hakkimizda",
    title: "Hakkımda — Semih Hasanoğlu",
    description: OZET,
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

const GEAR = ["Sony FX30", "Tamron 17-70mm", "DJI RS4 Gimbal", "Tripod", "Rode Wireless GO II"];

export default function HakkimdaPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Semih Hasanoğlu",
          jobTitle: "Yönetmen ve video prodüktörü",
          description: OZET,
          image: "https://fennixmedya.com/foto/semih-portre.jpg",
          worksFor: { "@type": "Organization", name: "Fennix Medya" },
          url: "https://fennixmedya.com/hakkimizda",
          alumniOf: { "@type": "CollegeOrUniversity", name: "Radyo, Televizyon ve Sinema" },
          knowsAbout: ["Video prodüksiyon", "Yönetmenlik", "Oyunculuk", "Yaratıcı drama", "Kurgu"],
          address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
        }}
      />

      {/* Açılış */}
      <section className="container-page pt-8 pb-16 md:pb-24">
        <Breadcrumbs items={[{ name: "Hakkımda" }]} />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center mt-8">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-4">
              Kim çekiyor
            </p>
            <h1 className="text-poster mb-8">
              <span className="block text-foreground">Oyuncuydum.</span>
              <span className="block text-gradient-gold">Şimdi</span>
              <span className="block text-foreground">Kameradayım.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Ben Semih Hasanoğlu. İstanbul&apos;da markalar için video çekiyorum — analizden
              senaryoya, çekimden kurguya kadar hepsini kendim yapıyorum. Bir ajansla değil, işi
              yapan kişiyle çalışıyorsunuz.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/foto/semih-portre.jpg"
                  alt="Semih Hasanoğlu, İstanbul'da gün batımında Boğaz manzarası önünde"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-[62%_38%]"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                  Semih Hasanoğlu
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

      {/* Nereden geliyorum */}
      <section className="section-spacing bg-surface">
        <div className="container-page">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
              Nereden geliyorum
            </p>
            <h2 className="text-display-2 text-foreground mb-8">Önce Sahne, Sonra Kamera</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 max-w-5xl">
            <Reveal>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Radyo-TV-Sinema mezunuyum. Mezun olduktan sonra dört yıl boyunca oyunculuk ve
                  yönetmenlik yaptım — kameranın hem önünde hem arkasında durdum.
                </p>
                <p>
                  Hâlâ Semaver Kumpanya&apos;da konservatuara hazırlanan çocuklara gönüllü eğitim
                  veriyorum. Sertifikalı yaratıcı drama liderliği yapıyorum.
                </p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p className="text-foreground font-medium">
                  Bu geçmiş, bu işte teknik bilgiden daha çok işime yarıyor.
                </p>
                <p>
                  Çünkü video çekiminde asıl zor kısım kamera ayarı değil. Karşınızdaki kişinin
                  kamera görünce donması. Ses tonunun değişmesi, ezberlediği cümleyi okuması,
                  kendisi gibi görünmemesi. Ben tam olarak bunun eğitimini aldım.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sette ne oluyor */}
      <section className="section-spacing bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
                Sette ne oluyor
              </p>
              <h2 className="text-display-2 text-foreground mb-6">
                &ldquo;Ben Kamera Karşısında Olamam&rdquo;
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-prose">
                <p>
                  Çalıştığım insanların çoğu bu cümleyle başlıyor. İki saat sonra kendi kendine
                  konuşuyor, kameranın orada olduğunu unutuyor.
                </p>
                <p>
                  Aradaki fark, benim işimin nerede başladığı: donduğunuz yerde devreye giriyorum.
                  Kendi ses tonunuzu ve jestlerinizi bulana kadar birlikte çalışıyoruz. Setlerim
                  yüksek enerjili ve keyifli geçiyor — çünkü iyi görüntü, rahat insandan çıkar.
                </p>
                <p>
                  Konuşmalar bittiğinde mekânın atmosferini toplayan detay çekimlerini yapıyorum.
                  Akşam eve döndüğümde kurgu başlıyor; videoları ay sonunu bekletmeden, bittikçe
                  sırayla teslim ediyorum.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-surface p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">
                  Yapmadığım İşler
                </h3>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Grafik tasarım ve statik görsel.</strong>{" "}
                    Benim alanım değil, o yüzden kendim yapmıyorum. İhtiyacınız olursa güvendiğim
                    isimlere yönlendirir, süreci sizin adınıza takip ederim.
                  </p>
                  <p>
                    <strong className="text-foreground">Bir ayda sonuç sözü.</strong> Sosyal medyada
                    kalıcı sonuç düzenli üretimle birkaç ay içinde geliyor. Veremeyeceğim sözü baştan
                    vermiyorum.
                  </p>
                </div>
                <p className="mt-8 pt-6 border-t border-border/40 text-muted-foreground leading-relaxed">
                  Kimlerle iyi anlaştığımı ve fiyatların ne olduğunu{" "}
                  <Link href="/#fiyat" className="text-primary underline-offset-4 hover:underline">
                    ana sayfada açıkça
                  </Link>{" "}
                  yazdım.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash mr-1">
                Sete getirdiklerim
              </span>
              {GEAR.map((g) => (
                <span
                  key={g}
                  className="font-mono text-[11px] px-2.5 py-1 rounded border border-ash/25 text-ash"
                >
                  {g}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kapanış */}
      <section className="section-spacing bg-surface border-t border-border/40">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-display-2 text-foreground mb-4">Tanışalım</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              15 dakikalık görüşmede markanızı dinliyorum, neyin işe yarayacağını konuşuyoruz.
              Bağlayıcı değil.
            </p>
            <WizardCta />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
