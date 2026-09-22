"use client";
import { useState } from "react";
import { useUrlParam } from "@/lib/useUrlParam";
import PortfolioVideoCard from "@/components/PortfolioVideoCard";
import { portfolioData, SECTOR_LABELS, type PortfolioSector } from "@/data/portfolio";

type Filter = PortfolioSector | "tumu";
const ORDER: Filter[] = ["tumu", "klinik", "butik", "kafe", "tiyatro", "spor", "diger"];

/**
 * Portfolyo ızgarası + sektör filtresi. Seçim adres çubuğuna yazılır (?sektor=klinik)
 * ki paylaşılabilsin; ilk yüklemede oradan okunur. Sunucu HTML'i her zaman tüm işleri
 * içerir — arama motoru hepsini görür.
 */
export default function PortfolioGrid() {
  const q = useUrlParam("sektor") as Filter | null;
  const [override, setOverride] = useState<Filter | null>(null);
  const filter: Filter = override ?? (q && ORDER.includes(q) ? q : "tumu");

  const choose = (f: Filter) => {
    setOverride(f);
    const url = new URL(window.location.href);
    if (f === "tumu") url.searchParams.delete("sektor");
    else url.searchParams.set("sektor", f);
    window.history.replaceState(null, "", url);
  };

  const items = filter === "tumu" ? portfolioData : portfolioData.filter((p) => p.sector === filter);
  const count = (f: Filter) => (f === "tumu" ? portfolioData.length : portfolioData.filter((p) => p.sector === f).length);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Sektöre göre filtrele">
        {ORDER.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => choose(f)}
            aria-pressed={filter === f}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {f === "tumu" ? "Tümü" : SECTOR_LABELS[f]}
            <span className="ml-1.5 font-mono text-[10px] opacity-70">{count(f)}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start" aria-live="polite">
        {items.map((project) => (
          <PortfolioVideoCard key={project.id} project={project} isVertical={project.format === "Dikey"} />
        ))}
      </div>
    </>
  );
}
