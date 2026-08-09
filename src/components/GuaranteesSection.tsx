"use client";
import { ShieldCheck, Clock, RefreshCw, Unlock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const guarantees = [
  {
    icon: Unlock,
    title: "Sıfır Risk İade Garantisi",
    desc: "Eğer onay sürecindeki ilk taslak videomuz sizi tatmin etmezse, hiçbir koşul sunmadan ücret iadesi yapıyoruz. Vaktinizi almadan ayrılıyoruz.",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "hover:border-gold/40",
  },
  {
    icon: ShieldCheck,
    title: "Hollywood Standartlarında Görsel Kalite",
    desc: "Tüm içerikleriniz sinema standartlarında aydınlatma, renk yönetimi ve kristal netliğinde ses tasarımı ile teslim edilir. Görsel algı standartlarımızın altında kalan her çekim ücretsiz tekrarlanır.",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "hover:border-emerald-400/40",
  },
  {
    icon: RefreshCw,
    title: "Revize Hakkı",
    desc: "Aramızdaki ritmi yakalamak için; ilk videonun tarzında ve kurgusunda tam içinize sinene kadar revize yapıyoruz. Sonraki içeriklerimiz bu kalite çizgisini koruyarak üretilir.",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "hover:border-gold/40",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    desc: "Çekim gününden sonraki 7 iş günü içinde teslimat garantisi. Gecikme durumunda bir sonraki ay %10 indirim.",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "hover:border-emerald-400/40",
  },
];

const GuaranteesSection = () => {

  return (
    <section className="section-spacing bg-background relative z-10 w-full">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Garantiler"
            title="Risksiz İş Birliği"
            sub="Kalitemize güveniyoruz, siz rahat edin."
          />
        </Reveal>

        <div className="space-y-5">
          {guarantees.map((g, i) => (
            <Reveal key={i} delay={i * 80}>
            <div
              className={`guarantee-row flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 card-surface p-6 md:p-8 ${g.accentBorder} transition-all duration-500 group hover:bg-card`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${g.accentBg} flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                <g.icon className={`w-7 h-7 ${g.accent}`} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground shrink-0 md:w-56">
                {g.title}
              </h3>

              {/* Divider - desktop only */}
              <div className="hidden md:block w-px h-12 bg-border/50 shrink-0" />

              {/* Description */}
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed font-medium flex-1">
                {g.desc}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
