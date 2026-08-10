import Reveal from "@/components/Reveal";

export interface Step {
  title: string;
  body: string;
}

interface ServiceStepsProps {
  eyebrow: string;
  heading: string;
  steps: Step[];
  /** Bölümün altında dürüstlük notu — neyin dahil olmadığı */
  note?: React.ReactNode;
}

export default function ServiceSteps({ eyebrow, heading, steps, note }: ServiceStepsProps) {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            {eyebrow}
          </p>
          <h2 className="text-display-2 text-foreground mb-10">{heading}</h2>
        </Reveal>

        <div className="max-w-4xl">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <div className="grid md:grid-cols-[minmax(90px,140px)_1fr] gap-3 md:gap-8 border-t border-border/40 py-8 md:py-10 items-start">
                <span
                  className="text-display-num text-foreground/[0.13] select-none leading-none"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-prose">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {note && (
          <Reveal delay={60}>
            <p className="mt-10 max-w-2xl text-muted-foreground leading-relaxed">{note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
