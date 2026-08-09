"use client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    day: "Adım 1",
    title: "Strateji ve İçerik Mimarisi",
    htmlContent: "<p>Sektörünüzün ve ideal müşteri kitlenizin psikolojisini analiz ederek içerik ağını ve kanca (hook) senaryolarını biz tasarlarız. Çekimden önce her sahne hazırdır.</p>",
    items: [],
  },
  {
    day: "Adım 2",
    title: "Zaman Efektif Çekim Günü",
    htmlContent: "<p>Mekanınızda veya stüdyomuzda, zamanınızı çalmadan (ayda sadece 1 gün, 6 saat) tüm sinematik çekimlerinizi yönetmen eşliğinde tamamlarız.</p>",
    items: [],
  },
  {
    day: "Adım 3",
    title: "Algoritma ve Post-Prodüksiyon Dağıtımı",
    htmlContent: "<p>Algoritma uyumlu, dikkat yönetimi odaklı kurgu ve sinematik renk derecelendirmesi yapılmış 30 günlük içerik ağınızı teslim ederiz.</p>",
    items: [],
  },
];

const ProcessSection = () => {

  return (
    <section className="section-spacing bg-surface relative z-10">
      <div className="container-page">
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Sahne 03 — Süreç"
            title="Ayda Sadece 6 Saatinizi Ayırın"
            animateTitle
            sub="30 Günlük İçeriğiniz Hazır Olsun"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="grid md:grid-cols-[minmax(110px,170px)_1fr] gap-4 md:gap-8 border-t border-border/40 py-10 md:py-12 items-start">
                <span className="text-display-num text-foreground/[0.14] select-none" aria-hidden>
                  0{i + 1}
                </span>
                <div>
                  <span className="block text-[11px] font-heading font-semibold text-primary/80 uppercase tracking-[0.25em] mb-2">{step.day}</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground leading-tight mb-4">{step.title}</h3>
                  <div
                    className="text-muted-foreground text-base leading-relaxed max-w-prose"
                    dangerouslySetInnerHTML={{ __html: step.htmlContent }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Bottom summary */}
        <div className="mt-12 text-center">
          <p className="text-primary font-bold text-lg md:text-xl">
            3 adım · 30 gün · Anahtar teslim içerik sistemi
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
