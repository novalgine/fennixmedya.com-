/**
 * Gerçek müşteri markalarının kayan şeridi — CSS keyframe marquee.
 * Liste iki kez render edilir (ikincisi aria-hidden), -%50 translate ile
 * kesintisiz döngü. Hover'da durur; reduced-motion'da statik satıra düşer.
 */
const CLIENTS = [
  "Boogold",
  "Vaveyla Home",
  "Mukaddes Gün",
  "Melis Ulaş",
  "Ayzıt Umay",
  "Afife",
  "Vet House",
  "Esranur Umurbeyli",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16"
    >
      {CLIENTS.map((name) => (
        <li
          key={name}
          className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest text-foreground/35 whitespace-nowrap"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function ClientMarquee() {
  return (
    <section
      aria-label="Birlikte çalıştığımız markalar"
      className="py-8 bg-background border-b border-border/30 overflow-hidden"
    >
      <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
        Güvenen Markalar
      </p>
      <div className="marquee-mask">
        <div className="marquee-track motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
