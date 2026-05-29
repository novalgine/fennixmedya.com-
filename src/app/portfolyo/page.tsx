import type { Metadata } from "next";
import WizardCta from "@/components/WizardCta";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolyo — Teslim Edilen İşler",
  description:
    "Fennix Medya'nın teslim ettiği profesyonel video prodüksiyon projeleri. Kurumsal tanıtım filmleri, sosyal medya videoları ve YouTube içerikleri.",
  alternates: { canonical: "https://fennixmedya.com/portfolyo" },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Portfolyo
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
            Teslim Edilen <span className="text-gradient-gold">İşler</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Farklı sektörlerden markalar için ürettiğimiz profesyonel video projelerinden bir seçki.
          </p>
        </div>

        {/* CSS Masonry / Grid for mixed aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {portfolioData.map((project, i) => {
            const isVertical = project.format === "Dikey";
            return (
              <div
                key={i}
                className={`group bg-card/60 backdrop-blur-sm border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl flex flex-col ${isVertical ? 'md:row-span-2' : 'md:col-span-2 lg:col-span-2'}`}
              >
                <div className={`relative bg-black flex-1 ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <video
                    src={project.videoSrc}
                    title={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={project.thumbnailSrc}
                  />
                </div>
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-bold uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs font-medium text-muted-foreground">{project.format}</span>
                  </div>
                  <h3 className="font-heading text-xl font-black text-foreground">{project.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-border/40">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
          Sıradaki proje <span className="text-gradient-gold">sizinki</span> olsun.
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">15 dakikalık ücretsiz görüşmede projenizi birlikte planlayalım.</p>
        <WizardCta text="Ücretsiz Strateji Görüşmesi Al" />
      </section>
    </div>
  );
}

