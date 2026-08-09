import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

interface Crumb {
  name: string;
  /** Son öğede (aktif sayfa) href verilmez */
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Ana Sayfa", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            ...(c.href && {
              item: `https://fennixmedya.com${c.href === "/" ? "" : c.href}`,
            }),
          })),
        }}
      />
      <nav
        aria-label="breadcrumb"
        className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
      >
        {all.map((c, i) => (
          <span key={i} className="flex items-center gap-2 min-w-0">
            {i > 0 && <ChevronRight className="w-4 h-4 shrink-0" aria-hidden />}
            {c.href ? (
              <Link href={c.href} className="hover:text-primary transition-colors whitespace-nowrap">
                {c.name}
              </Link>
            ) : (
              <span className="truncate" aria-current="page">
                {c.name}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
