import Reveal from "@/components/Reveal";
import ImageComparison from "@/components/ImageComparison";
import ornekAmator from "@/assets/ornek-amator.jpg";
import ornekSinematik from "@/assets/ornek-sinematik.jpg";

export default function BeforeAfter() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
              Aradaki fark
            </p>
            <h2 className="text-display-2 text-foreground mb-6">Aynı Kişi. Aynı Gün.</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-prose">
              <p>
                Soldaki kare, çoğu markanın kendi telefonuyla çektiği türden bir görüntü. Sağdaki
                ise aynı kişinin, doğru ışık ve doğru lensle çekilmiş hali.
              </p>
              <p>
                Aradaki fark ekipman kadar hazırlık: mekânı okumak, ışığı yerleştirmek, karşımdaki
                kişiyi rahatlatmak. Potansiyel müşteriniz bu farkı saniyenin onda birinde görüyor —
                ve gördüğü şeye göre fiyatınızı değerlendiriyor.
              </p>
              <p className="text-foreground font-medium">Ortadaki çizgiyi kaydırın.</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-md mx-auto w-full">
              <ImageComparison
                before={ornekAmator}
                after={ornekSinematik}
                alt="Amatör telefon çekimi ile sinematik çekim karşılaştırması — kaydırarak farkı görün"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
