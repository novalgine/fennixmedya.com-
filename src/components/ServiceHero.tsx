import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import WizardCta from "@/components/WizardCta";
import LazyHeroVideo from "@/components/LazyHeroVideo";

interface ServiceHeroProps {
  breadcrumb: string;
  eyebrow: string;
  /** Poster tipinde başlık satırları; altın gösterilecek satır { gold: true } ile işaretlenir */
  title: { text: string; gold?: boolean }[];
  intro: React.ReactNode;
  video: { src: string; poster: string; title: string; vertical?: boolean };
  /** Örnek videonun künyesi — hangi iş olduğu yazılır, jenerik "örnek video" denmez */
  videoCaption: string;
  children?: React.ReactNode;
}

export default function ServiceHero({
  breadcrumb,
  eyebrow,
  title,
  intro,
  video,
  videoCaption,
  children,
}: ServiceHeroProps) {
  return (
    <section className="container-page pt-8 pb-16 md:pb-20">
      <Breadcrumbs items={[{ name: "Hizmetler", href: "/hizmetler" }, { name: breadcrumb }]} />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center mt-8">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-4">
            {eyebrow}
          </p>
          <h1 className="text-poster mb-8">
            {title.map((line) => (
              <span
                key={line.text}
                className={`block ${line.gold ? "text-gradient-gold" : "text-foreground"}`}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <div className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-8 space-y-4">
            {intro}
          </div>
          <WizardCta />
          {children}
        </Reveal>

        <Reveal delay={80}>
          <figure className={video.vertical === false ? "" : "max-w-[300px] mx-auto lg:max-w-none"}>
            <div
              className={`relative w-full overflow-hidden border border-white/10 bg-black ${
                video.vertical === false
                  ? "aspect-video rounded-xl"
                  : "aspect-[9/16] rounded-[2.5rem] max-w-[300px] mx-auto"
              }`}
            >
              <LazyHeroVideo src={video.src} poster={video.poster} title={video.title} />
            </div>
            <figcaption className="mt-3 flex items-center gap-3 max-w-[300px] mx-auto lg:max-w-none">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                Teslim edilen iş
              </span>
              <span className="h-px flex-1 bg-border/50" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash/60">
                {videoCaption}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
