import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { packages, pricingNotes } from "@/data/pricing";

/**
 * Hizmet sayfasında tek paketin fiyatı — rakam data/pricing.ts'ten gelir,
 * ana sayfadaki fiyat bölümüyle ayrışamaz.
 */
export default function ServicePrice({
  packageId,
  heading,
  sub,
}: {
  packageId: string;
  heading: string;
  sub: React.ReactNode;
}) {
  const pkg = packages.find((p) => p.id === packageId);
  if (!pkg) return null;

  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <SectionHeading eyebrow="Fiyat" title={heading} sub={sub} align="left" />
        <div className="card-surface p-6 md:p-8 max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
            {pkg.name}
          </p>
          <p className="text-display-num text-foreground">
            {pkg.price}
            {pkg.unit && (
              <span className="ml-2 text-base font-body font-normal text-muted-foreground">
                {pkg.unit}
              </span>
            )}
          </p>
          <ul className="mt-6 space-y-2.5">
            {pkg.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border/40 space-y-1.5 text-sm text-muted-foreground">
            {pricingNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
        <p className="mt-6 text-muted-foreground">
          Sosyal medya ve reklam yönetimini de üstlenmemi isterseniz{" "}
          <Link href="/#fiyat" className="text-primary hover:underline">
            diğer paketlere bakabilirsiniz
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
