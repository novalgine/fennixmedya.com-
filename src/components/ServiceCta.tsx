import Reveal from "@/components/Reveal";
import WizardCta from "@/components/WizardCta";

export default function ServiceCta({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="section-spacing bg-surface border-t border-border/40">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="text-display-2 text-foreground mb-4">{heading}</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{text}</p>
          <WizardCta />
        </Reveal>
      </div>
    </section>
  );
}
