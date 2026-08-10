import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";

export interface Faq {
  q: string;
  a: string;
}

export default function ServiceFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="section-spacing bg-background">
      <div className="container-page">
        <Reveal>
          <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Sık sorulanlar
          </p>
          <h2 className="text-display-2 text-foreground mb-10">Merak Edilenler</h2>
        </Reveal>

        <div className="max-w-4xl">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <div className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-2 md:gap-10 border-t border-border/40 py-7">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase leading-tight text-foreground">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-prose">{faq.a}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
