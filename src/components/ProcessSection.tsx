"use client";
import { Calendar, Video, Package } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    day: "Adım 1",
    icon: Calendar,
    title: "Strateji ve İçerik Mimarisi",
    htmlContent: "<p>Sektörünüzün ve ideal müşteri kitlenizin psikolojisini analiz ederek içerik ağını ve kanca (hook) senaryolarını biz tasarlarız. Çekimden önce her sahne hazırdır.</p>",
    items: [],
  },
  {
    day: "Adım 2",
    icon: Video,
    title: "Zaman Efektif Çekim Günü",
    htmlContent: "<p>Mekanınızda veya stüdyomuzda, zamanınızı çalmadan (ayda sadece 1 gün, 6 saat) tüm sinematik çekimlerinizi yönetmen eşliğinde tamamlarız.</p>",
    items: [],
  },
  {
    day: "Adım 3",
    icon: Package,
    title: "Algoritma ve Post-Prodüksiyon Dağıtımı",
    htmlContent: "<p>Algoritma uyumlu, dikkat yönetimi odaklı kurgu ve sinematik renk derecelendirmesi yapılmış 30 günlük içerik ağınızı teslim ederiz.</p>",
    items: [],
  },
];

const ProcessSection = () => {

  return (
    <section className="section-spacing bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Süreç"
            title="Ayda Sadece 6 Saatinizi Ayırın"
            animateTitle
            sub="30 Günlük İçeriğiniz Hazır Olsun"
          />
        </Reveal>

        {/* Vertical Split / Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pt-6">
          {/* Central Glowing Line (Desktop) & Left Line (Mobile) */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2 rounded-full transform-gpu"></div>

          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, i) => {
              // isEven -> 0. sol tarafı temsil eder, 1. sağ tarafı (Desktop'ta zig-zag)
              const isEven = i % 2 === 0;

              return (
                <Reveal key={i} delay={i * 80}>
                <div
                  className={`process-card relative flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Node / Checkpoint */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-background border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 group-hover:border-primary/80 transition-all duration-500 z-20">
                    <span className="font-heading text-lg font-bold text-primary/80 group-hover:text-primary transition-colors">0{i + 1}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-20 text-left" : "md:pl-20 text-left"}`}>
                    <div className={`card-surface p-6 lg:p-8 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 w-full max-w-lg mx-auto ${isEven ? "md:mr-0" : "md:ml-0"} -mt-2 md:mt-0`}>
                      {/* Icon + Day */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-primary/80 uppercase tracking-widest">{step.day}</span>
                          <h3 className="font-heading text-xl font-bold text-foreground leading-tight mt-0.5">{step.title}</h3>
                        </div>
                      </div>

                      {/* Items List */}
                      {step.htmlContent ? (
                        <div
                          className="space-y-2 text-muted-foreground text-sm font-medium leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: step.htmlContent }}
                        />
                      ) : (
                        <ul className="space-y-2.5">
                          {step.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-muted-foreground text-sm font-medium leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                              <span className="text-left">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
                </Reveal>
              );
            })}
          </div>
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
