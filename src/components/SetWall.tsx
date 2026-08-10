import Reveal from "@/components/Reveal";
import PhotoWall from "@/components/PhotoWall";

const PHOTO_COUNT = 25;

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
        <PhotoWall count={PHOTO_COUNT} />
      </Reveal>
    </section>
  );
}
