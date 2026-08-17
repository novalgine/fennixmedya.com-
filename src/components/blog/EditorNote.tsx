/**
 * Blog yazılarının vurgu kutusu — kurgu masasındaki yönetmen notu.
 * Tek spec: card-surface yüzeyi + mono "KURGU NOTU" etiketi. Sol renk şeridi ve
 * gradyan yok; vurguyu etiket taşır (SectionHeading'in eyebrow ilkesiyle aynı).
 */
export default function EditorNote({
  label = "Kurgu Notu",
  title,
  children,
}: {
  /** Mono etiket — varsayılan "Kurgu Notu", gerekirse "Set Notu" vb. */
  label?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="card-surface not-prose p-6 md:p-7 mt-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
        {label}
      </p>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <div className="text-muted-foreground text-base leading-relaxed [&>p]:m-0 [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  );
}
