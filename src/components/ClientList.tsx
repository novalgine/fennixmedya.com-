import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { clientGroups, clientCount } from "@/data/clients";

export default function ClientList() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Son 8 ay"
            title={`Birebir Çalıştığım ${clientCount} Marka`}
            sub="Sayı yazmak kolay. Onun yerine hepsini isimle yazıyorum."
            align="left"
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {clientGroups.map((group, i) => (
            <Reveal key={group.sector} delay={i * 60}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 pb-3 mb-4 border-b border-border/40">
                {group.sector}
              </p>
              <ul className="space-y-4">
                {group.clients.map((c) => (
                  <li key={c.name}>
                    <p className="font-heading font-bold text-lg uppercase text-foreground leading-tight">
                      {c.name}
                    </p>
                    {c.note && (
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{c.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
