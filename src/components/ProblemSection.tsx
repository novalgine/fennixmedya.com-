"use client";
import ornekAmator from "@/assets/ornek-amator.png";
import ornekSinematik from "@/assets/ornek-sinematik.png";
import ImageComparison from "@/components/ImageComparison";
import { Clock, ZapOff, TrendingDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const content = {
  headerDesc: "Sektörünüzde en iyi olabilirsiniz. Ancak sosyal medyadaki görsel algınız gerçek değerinizi yansıtmıyorsa, pazar sizi ucuz algılar ve fiyatınıza itiraz eder.",
  painPoints: [
    {
      id: 1,
      title: "1. Güven ve Statü Kaybı",
      desc: "Sıradan, düz ve amatörce çekilmiş içerikler yüzünden potansiyel müşteriniz gerçek değerinizi göremez, sizi sektörün sıradan bir oyuncusu olarak algılar ve hizmet bedelinize itiraz eder.",
      icon: "TrendingDown"
    },
    {
      id: 2,
      title: "2. Operasyonel Hantallık",
      desc: "İçerik fikirleri bulmak, ne konuşacağınıza karar vermek ve telefon karşısında aynı cümleyi onlarca kez tekrarlayıp saatlerinizi harcamak işinize odaklanmanızı engeller.",
      icon: "Clock"
    },
    {
      id: 3,
      title: "3. Algoritma ve Dağıtım Belirsizliği",
      desc: "Çektiğiniz videoların platformlarda neden izlenmediğini, algoritmanın dikkat süresi (retention) ve tıklama (CTR) metriklerini çözmeye çalışırken enerjinizi tüketirsiniz.",
      icon: "ZapOff"
    }
  ],
  blockquoteText: `"Hizmet bedeli oldukça yüksek, ama <br class="hidden md:block" />kendini ifade ediş biçimi çok <span class="text-primary font-bold not-italic underline underline-offset-8 decoration-primary/40">amatör</span> duruyor. Bu fiyata değer mi?"`,
  blockquoteAuthor: "- Sizi İzleyen Müşterinin İç Sesi"
};

const ProblemSection = () => {
  const data = content;

  return (
    <section className="section-spacing bg-surface relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Algı Gerçektir"
            title="Neden Telefonla Çekmek Artık Yetmiyor?"
            animateTitle
            sub={data.headerDesc}
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Visual Card (Left) */}
          <Reveal className="lg:col-span-7 flex"><div className="bento-card flex-1 card-surface p-6 md:p-8 flex flex-col relative overflow-hidden group">
            {/* Dark Red Warning Glow in Background using Radial Gradient instead of blur for Performance! */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(127, 29, 29, 0.1) 0%, transparent 50%)' }} />

            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground relative z-10">Farkı Kendiniz Görün</h3>
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <ImageComparison
                before={ornekAmator}
                after={ornekSinematik}
                alt="Amatör telefon çekimi ile sinematik çekim karşılaştırması — kaydırarak farkı görün"
              />
              <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground/60 mt-4 font-bold">Kaydırın — Farkı Kendiniz Görün</p>
            </div>
          </div></Reveal>

          {/* Pain Points Stack (Right) */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-6">

            {data.painPoints.map((point, i) => (
              <Reveal key={point.id} delay={i * 80} className="row-span-1 flex"><div className="bento-card flex-1 bg-card border border-border/50 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all duration-500 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-[0.03] dark:opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 text-foreground group-hover:text-emerald-500">
                  {point.icon === "Clock" && <Clock className="w-32 h-32" />}
                  {point.icon === "TrendingDown" && <TrendingDown className="w-32 h-32" />}
                  {point.icon === "ZapOff" && <ZapOff className="w-32 h-32" />}
                </div>
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    {point.icon === "Clock" && <Clock className="w-5 h-5 text-red-500" />}
                    {point.icon === "TrendingDown" && <TrendingDown className="w-5 h-5 text-red-500" />}
                    {point.icon === "ZapOff" && <ZapOff className="w-5 h-5 text-red-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-foreground">{point.title}</h4>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed relative z-10">
                  {point.desc}
                </p>
              </div></Reveal>
            ))}

          </div>

          {/* Bottom Wide Box (Punchline) */}
          <Reveal className="lg:col-span-12"><div className="bento-card card-surface p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500/80" />
            <blockquote className="max-w-4xl mx-auto text-center relative z-10">
              <p
                className="text-2xl md:text-3xl font-heading italic text-foreground/80 leading-relaxed font-bold"
                dangerouslySetInnerHTML={{ __html: data.blockquoteText }}
              />
              <footer className="mt-4 text-muted-foreground text-sm tracking-widest uppercase font-bold">{data.blockquoteAuthor}</footer>
            </blockquote>
          </div></Reveal>

        </div>

      </div>
    </section>
  );
};

export default ProblemSection;

