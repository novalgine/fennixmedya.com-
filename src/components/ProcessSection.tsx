"use client";
import { useEffect, useRef, useState } from "react";
import { Calendar, Video, Scissors, Package } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { wpClient } from "@/lib/wp";
import { gql } from "graphql-request";
import { cleanWPContent, decodeHtmlEntities } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const fallbackSteps = [
  {
    day: "Adım 1",
    icon: Calendar,
    title: "Strateji ve İçerik Mimarisi",
    htmlContent: "<p>Sektörünüzün ve ideal müşteri kitlenizin psikolojisini analiz ederek içerik ağını ve kanca (hook) senaryolarını biz tasarlarız. Çekimden önce her sahne hazırdır.</p>",
    items: [],
  },
  {
    day: "Adım 2",
    icon: Video,
    title: "Zaman Efektif Çekim Günü",
    htmlContent: "<p>Mekanınızda veya stüdyomuzda, zamanınızı çalmadan (ayda sadece 1 gün, 6 saat) tüm sinematik çekimlerinizi yönetmen eşliğinde tamamlarız.</p>",
    items: [],
  },
  {
    day: "Adım 3",
    icon: Package,
    title: "Algoritma ve Post-Prodüksiyon Dağıtımı",
    htmlContent: "<p>Algoritma uyumlu, dikkat yönetimi odaklı kurgu ve sinematik renk derecelendirmesi yapılmış 30 günlük içerik ağınızı teslim ederiz.</p>",
    items: [],
  },
];

const iconsList = [Calendar, Video, Package];

const ProcessSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [steps, setSteps] = useState(fallbackSteps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProcessData = async () => {
      try {
        const query = gql`
            query GetProcessSection {
                posts(where: {categoryName: "process"}, first: 5, orderby: {field: DATE, order: ASC}) {
                    nodes {
                        title
                        excerpt
                        content
                    }
                }
            }
        `;
        const response = await wpClient.request<{
          posts?: { nodes?: { title?: string; excerpt?: string; content?: string }[] }
        }>(query);

        if ((response?.posts?.nodes?.length ?? 0) > 0) {
          const newSteps = response!.posts!.nodes!.map((node, index: number) => {
            return {
              day: cleanWPContent(node.excerpt || ""),
              icon: iconsList[index % iconsList.length],
              title: decodeHtmlEntities(node.title || ""),
              htmlContent: decodeHtmlEntities(node.content || ""),
              items: [] // we will render htmlContent directly now
            };
          });
          setSteps(newSteps);
        }
      } catch (err) {
        console.log("Using static Process data (WordPress API not reachable yet).");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProcessData();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".process-header",
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.4, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );

      // Stagger card animations
      const cards = gsap.utils.toArray(".process-card") as HTMLElement[];
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 15 },
          {
            opacity: 1, y: 0,
            duration: 0.3, ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: { trigger: card, start: "top 95%", toggleActions: "play none none none" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-spacing bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="process-header text-left md:text-center mb-16 w-full">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Ayda Sadece <span className="text-gradient-gold">6 Saatinizi</span> Ayırın
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            30 Günlük İçeriğiniz Hazır Olsun
          </p>
        </div>

        {/* Vertical Split / Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pt-6">
          {/* Central Glowing Line (Desktop) & Left Line (Mobile) */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2 rounded-full transform-gpu"></div>

          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, i) => {
              // isEven -> 0. sol tarafı temsil eder, 1. sağ tarafı (Desktop'ta zig-zag)
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`process-card will-change-transform relative flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Node / Checkpoint */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-14 h-14 rounded-full bg-background border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 group-hover:border-primary/80 group-hover:shadow-[0_0_20px_rgba(232,106,31,0.5)] transition-all duration-500 z-20">
                    <span className="font-heading text-lg font-black text-primary/80 group-hover:text-primary transition-colors">0{i + 1}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-20 text-left" : "md:pl-20 text-left"}`}>
                    <div className={`bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 w-full max-w-lg mx-auto ${isEven ? "md:mr-0" : "md:ml-0"} -mt-2 md:mt-0`}>
                      {/* Icon + Day */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-[11px] font-black text-primary/80 uppercase tracking-widest">{step.day}</span>
                          <h3 className="font-heading text-xl font-bold text-foreground leading-tight mt-0.5">{step.title}</h3>
                        </div>
                      </div>

                      {/* Items List */}
                      {step.htmlContent ? (
                        <div
                          className="space-y-2 text-muted-foreground text-sm font-medium leading-relaxed wp-content-list"
                          dangerouslySetInnerHTML={{ __html: step.htmlContent }}
                        />
                      ) : (
                        <ul className="space-y-2.5">
                          {step.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-muted-foreground text-sm font-medium leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                              <span className="text-left">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-12 text-center">
          <p className="text-primary font-bold text-lg md:text-xl">
            5 adım · 30 gün · Anahtar teslim içerik sistemi
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
