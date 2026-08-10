import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

interface OtherServicesProps {
  currentServiceId: string;
}

export default function OtherServices({ currentServiceId }: OtherServicesProps) {
  const digerleri = services.filter((s) => s.id !== currentServiceId);

  return (
    <section className="section-spacing bg-surface border-t border-border/40">
      <div className="container-page">
        <p className="font-heading font-semibold text-sm uppercase tracking-[0.25em] text-primary mb-3">
          Diğer hizmetler
        </p>
        <h2 className="text-display-2 text-foreground mb-12">Başka Neler Yapıyorum</h2>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8 items-stretch">
          {digerleri.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
