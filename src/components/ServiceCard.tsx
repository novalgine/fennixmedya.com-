import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

/**
 * Hizmet künyesi — ikon karosu yerine kod + başlık + somut künye satırı.
 * Renk sistemi: altın yalnız eylemde, kül grisi makine dilinde.
 */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col border-t border-border/50 pt-6 transition-colors hover:border-primary/50"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
          {service.code}
        </span>
        <span className="h-px flex-1 bg-border/40" />
      </div>

      <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase leading-tight text-foreground transition-colors group-hover:text-primary">
        {service.title}
      </h3>

      <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>

      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
        {service.meta.map((m) => (
          <span
            key={m}
            className="rounded border border-ash/25 px-2.5 py-1 font-mono text-[11px] text-ash"
          >
            {m}
          </span>
        ))}
      </div>

      <span className="mt-auto flex items-center pt-8 text-sm font-medium text-primary transition-transform group-hover:translate-x-1.5">
        İncele <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
