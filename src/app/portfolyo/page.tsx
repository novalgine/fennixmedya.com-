import type { Metadata } from "next";
import WizardCta from "@/components/WizardCta";
import { portfolioData } from "@/data/portfolio";
import PortfolioVideoCard from "@/components/PortfolioVideoCard";

export const metadata: Metadata = {
  title: "Portfolyo: Video Prodüksiyon İşlerimiz",
  description:
    "Sekiz sektörden markalar için çektiğim video işlerinden bir seçki: kurumsal tanıtım filmleri, dikey sosyal medya videoları ve YouTube içerikleri.",
  alternates: { canonical: "https://fennixmedya.com/portfolyo" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/portfolyo",
    title: "Portfolyo: Video Prodüksiyon İşlerimiz",
    description: "Sekiz sektörden markalar için çektiğim video işlerinden bir seçki: kurumsal tanıtım filmleri, dikey sosyal medya videoları ve YouTube içerikleri.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
      <section className="container-page py-16 md:py-24">
        <div className="mb-14">
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-4">
            Portfolyo
          </p>
          <h1 className="text-poster mb-6">
            <span className="block text-foreground">Teslim</span>
            <span className="block text-gradient-gold">Edilen İşler</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Sekiz farklı sektörden markalar için çektiğim işlerden bir seçki. Hepsinin metnini
            birlikte kurduk, hepsini ben çekip ben kurguladım.
          </p>
        </div>

        {/* CSS Masonry / Grid for mixed aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {portfolioData.map((project, i) => {
            const isVertical = project.format === "Dikey";
            return (
              <PortfolioVideoCard key={i} project={project} isVertical={isVertical} />
            );
          })}
        </div>
      </section>

      <section className="section-spacing bg-surface border-t border-border/40">
        <div className="container-page text-center">
          <h2 className="text-display-2 text-foreground mb-4">Sıradaki İş Sizinki Olsun</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            15 dakikalık görüşmede markanızı dinliyorum, neyin işe yarayacağını konuşuyoruz.
          </p>
          <WizardCta />
        </div>
      </section>
    </div>
  );
}

