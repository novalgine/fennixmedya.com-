import Reveal from "@/components/Reveal";
import PhotoWall from "@/components/PhotoWall";

/**
 * Kontakt föy sırası — yeni kareler (set-26…32, Eylül 2026) eskilerin arasına
 * serpiştirildi. Dosya adları sabit kalır; sıra yalnızca burada değişir.
 */
const PHOTOS = [
  "set-01",
  "set-02",
  "set-03",
  "set-26",
  "set-04",
  "set-05",
  "set-06",
  "set-07",
  "set-27",
  "set-08",
  "set-09",
  "set-10",
  "set-28",
  "set-11",
  "set-12",
  "set-13",
  "set-14",
  "set-29",
  "set-15",
  "set-16",
  "set-17",
  "set-30",
  "set-18",
  "set-19",
  "set-20",
  "set-21",
  "set-31",
  "set-22",
  "set-23",
  "set-24",
  "set-32",
  "set-25",
];

export default function SetWall() {
  return (
    <section id="set" className="section-spacing bg-background overflow-hidden">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Kamera arkası
          </p>
          <h2 className="text-display-2 text-foreground mb-4">Setten Kareler</h2>
        </Reveal>
      </div>

      <Reveal delay={80} className="mt-10">
        <PhotoWall photos={PHOTOS} />
      </Reveal>
    </section>
  );
}
