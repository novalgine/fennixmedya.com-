import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PortfolioVideoCard from "@/components/PortfolioVideoCard";
import { portfolioData } from "@/data/portfolio";

/**
 * Hizmet sayfasında teslim edilmiş işler — iddia yerine kanıt.
 * Videolar PortfolioVideoCard üzerinden gelir (preload yok, src tıklamada atanır),
 * bu yüzden sayfa ağırlığına yalnızca poster kareleri eklenir.
 */
export default function ServiceWorks({
  ids,
  eyebrow,
  heading,
  sub,
}: {
  /** portfolio.ts'teki id'ler — sıra korunur */
  ids: string[];
  eyebrow: string;
  heading: string;
  sub: React.ReactNode;
}) {
  const works = ids
    .map((id) => portfolioData.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="section-spacing bg-background">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={heading} sub={sub} align="left" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-start">
          {works.map((project) => (
            <PortfolioVideoCard
              key={project.id}
              project={project}
              isVertical={project.format === "Dikey"}
            />
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Diğer işler için{" "}
          <Link href="/portfolyo" className="text-primary hover:underline">
            portfolyoya bakabilirsiniz
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
