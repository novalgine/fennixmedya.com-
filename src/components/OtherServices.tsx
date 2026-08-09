"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";
import { services } from "@/data/services";

interface OtherServicesProps {
  currentServiceId: string;
}

export default function OtherServices({ currentServiceId }: OtherServicesProps) {
  const filteredServices = services.filter((s) => s.id !== currentServiceId);

  return (
    <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Diğer <span className="text-gradient-gold">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyacınıza uygun diğer video prodüksiyon çözümlerimizi inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <MagneticWrapper key={service.id} strength={0.05}>
              <Link 
                href={service.href}
                className={`group block h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${service.border}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-7 h-7 text-foreground/80 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                  İncele <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </Link>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
