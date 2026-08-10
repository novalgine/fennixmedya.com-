import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WizardCta from "@/components/WizardCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const OZET =
  "Semih Hasanoğlu — üniversitede sinema okudu, işi tiyatroda öğrendi. Dört yıl sahnede oyunculuk ve yönetmenlik yaptıktan sonra İstanbul'da markalar için video çekmeye başladı. Fikirden metne, çekimden kurguya kadar sürecin tamamında.";

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
          image: "https://fennixmedya.com/foto/semih-portre-4x5.jpg",
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
              <span className="block text-foreground">Önce İnsanı</span>
              <span className="block text-gradient-gold">Rahatlatırım.</span>
              <span className="block text-foreground">Sonra Çekerim.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Ben Semih Hasanoğlu. Üniversitede sinema okudum, ama işi asıl tiyatroda öğrendim.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/foto/semih-portre-4x5.jpg"
                  alt="Semih Hasanoğlu, İstanbul'da gün batımında Boğaz manzarası önünde"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 520px"
                  quality={90}
                  className="object-cover"
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

      {/* Tiyatro */}
      <section className="section-spacing bg-surface">
        <div className="container-page">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
              Nereden geliyorum
            </p>
            <h2 className="text-display-2 text-foreground mb-8">Dört Yıl Sahnedeydim</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 max-w-5xl">
            <Reveal>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  İlk üç yıl oyunculuk, son yıl yönetmenlik yaptım. Orada bir insanın neden
                  inandırıcı olmadığını görmeyi ve onu nasıl inandırıcı hâle getireceğimi öğrendim.
                </p>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p className="text-foreground font-medium">
                  Yaptığım iş o günden beri çok değişmedi: karşımdaki insanın ne demek istediğini
                  bulmak ve onu söyleyebileceği hâle getirmek.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bugün */}
      <section className="section-spacing bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
                Bugün
              </p>
              <h2 className="text-display-2 text-foreground mb-6">
                &ldquo;Güzel Oldu Mu&rdquo; Değil, &ldquo;İnandım Mı&rdquo;
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-prose">
                <p>
                  Metni yazıyor, çekimi yapıyor ve kurguyu kendim tamamlıyorum. Ama kameranın
                  arkasında dururken hâlâ yönetmen gibi düşünüyorum. Bir görüntüye bakarken sorum
                  &ldquo;güzel oldu mu&rdquo; değil, &ldquo;inandım mı&rdquo;.
                </p>
                <p>
                  Sette en zor iş çoğu zaman çekim yapmak değil. Kameranın karşısında ne
                  söyleyeceğini bilemeyen, doğal davranamayan ya da bir anda kendini kaybeden
                  insanı çözmek. İşin en sevdiğim tarafı da bu.
                </p>
                <p>
                  Hâlâ tiyatrolarda oyuncu adaylarına gönüllü ders veriyorum; Semaver
                  Kumpanya&apos;da konservatuara hazırlanan çocuklarla çalışıyorum. Sertifikalı bir
                  yaratıcı drama lideriyim. Çünkü benim için kamera, ışık ve kurgu kadar insan da
                  üretimin bir parçası.
                </p>
                <p>
                  Bugün markalar, girişimler ve bireysel üreticiler için video çekiyorum. Fikirden
                  metne, çekimden kurguya kadar sürecin tamamında varım.
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

      {/* Merkezdeki soru */}
      <section className="section-spacing bg-surface border-y border-border/40">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash mb-6">
              Yaptığım işin merkezinde hâlâ aynı soru var
            </p>
            <blockquote className="text-display-2 text-foreground max-w-4xl text-balance">
              Söylemek istediğimiz şeyi gerçekten karşı tarafa geçirebildik mi?
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Kapanış */}
      <section className="section-spacing bg-background">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-display-2 text-foreground mb-4">Tanışalım</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              15 dakikalık görüşmede markanızı dinliyorum, neyin işe yarayacağını konuşuyoruz.
              Ücret almıyorum, sonrasında devam etmek zorunda değilsiniz.
            </p>
            <WizardCta />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
