"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import staticComparisonImg from "@/assets/ornekgorsel.webp";
import { Clock, ZapOff, TrendingDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { wpClient } from "@/lib/wp";
import { gql } from "graphql-request";
import { cleanWPContent, decodeHtmlEntities } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const fallbackData = {
  headerTitle: `Neden Telefonla Çekmek <span class="text-gradient-gold">Artık Yetmiyor?</span>`,
  headerDesc: "Sektörünüzde en iyi olabilirsiniz. Ancak sosyal medyadaki görsel algınız gerçek değerinizi yansıtmıyorsa, pazar sizi ucuz algılar ve fiyatınıza itiraz eder.",
  painPoints: [
    {
      id: 1,
      title: "1. Güven ve Statü Kaybı",
      desc: "Sıradan, düz ve amatörce çekilmiş içerikler yüzünden potansiyel müşteriniz gerçek değerinizi göremez, sizi sektörün sıradan bir oyuncusu olarak algılar ve hizmet bedelinize itiraz eder.",
      icon: "TrendingDown"
    },
    {
      id: 2,
      title: "2. Operasyonel Hantallık",
      desc: "İçerik fikirleri bulmak, ne konuşacağınıza karar vermek ve telefon karşısında aynı cümleyi onlarca kez tekrarlayıp saatlerinizi harcamak işinize odaklanmanızı engeller.",
      icon: "Clock"
    },
    {
      id: 3,
      title: "3. Algoritma ve Dağıtım Belirsizliği",
      desc: "Çektiğiniz videoların platformlarda neden izlenmediğini, algoritmanın dikkat süresi (retention) ve tıklama (CTR) metriklerini çözmeye çalışırken enerjinizi tüketirsiniz.",
      icon: "ZapOff"
    }
  ],
  blockquoteText: `"Hizmet bedeli oldukça yüksek, ama <br class="hidden md:block" />kendini ifade ediş biçimi çok <span class="text-primary font-bold not-italic underline underline-offset-8 decoration-primary/40">amatör</span> duruyor. Bu fiyata değer mi?"`,
  blockquoteAuthor: "- Sizi İzleyen Müşterinin İç Sesi"
};

const ProblemSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [data, setData] = useState(fallbackData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const query = gql`
            query GetProblemSection {
                page(id: "problem-section", idType: URI) {
                    title
                    content
                }
                posts(where: {categoryName: "problem"}, first: 3) {
                    nodes {
                        title
                        excerpt
                        content
                    }
                }
            }
        `;
        const response = await wpClient.request<{
          page?: { title?: string; content?: string };
          posts?: { nodes?: { title?: string; excerpt?: string; content?: string }[] }
        }>(query);

        let newHeaderTitle = fallbackData.headerTitle;
        let newHeaderDesc = fallbackData.headerDesc;
        let newPainPoints = fallbackData.painPoints;

        if (response?.page) {
          if (response.page.title) newHeaderTitle = decodeHtmlEntities(response.page.title);
          if (response.page.content) newHeaderDesc = cleanWPContent(response.page.content);
        }

        if ((response?.posts?.nodes?.length ?? 0) > 0) {
          newPainPoints = response!.posts!.nodes!.map((node, index: number) => {
            let iconStr = "Clock"; // Default
            if (node.excerpt) {
              const cleanExcerpt = node.excerpt.replace(/(<([^>]+)>)/gi, "").trim();
              if (cleanExcerpt) iconStr = cleanExcerpt;
            }
            return {
              id: index + 1,
              title: decodeHtmlEntities(node.title || ""),
              desc: cleanWPContent(node.content || ""),
              icon: iconStr
            };
          });
          // Reverse because WP posts order is latest first, we might want them in their natural order or default to map order
          newPainPoints = newPainPoints.reverse();
        }

        setData((prev) => ({
          ...prev,
          headerTitle: newHeaderTitle,
          headerDesc: newHeaderDesc,
          painPoints: newPainPoints,
        }));
      } catch (err) {
        console.log("Using static Problem data (WordPress API not reachable yet).");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProblemData();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(".problem-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );

      // Bento Cards Stagger
      gsap.fromTo(".bento-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6, ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".bento-grid", start: "top 92%", toggleActions: "play none none none" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-spacing bg-emerald-surface relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="problem-header text-center mb-16">
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-5xl font-black tracking-tight mb-4"
            dangerouslySetInnerHTML={{ __html: data.headerTitle }}
          />
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            {data.headerDesc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Visual Card (Left) */}
          <div className="bento-card lg:col-span-7 bg-card border border-border/50 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group">
            {/* Dark Red Warning Glow in Background using Radial Gradient instead of blur for Performance! */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(127, 29, 29, 0.1) 0%, transparent 50%)' }} />

            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground relative z-10">Algı Gerçektir</h3>
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 relative">
                {/* Labels overlay — only on desktop */}
                <div className="absolute top-4 left-4 right-4 justify-between z-10 pointer-events-none hidden md:flex">
                  <span className="bg-danger/95 text-white font-bold px-3 py-1.5 rounded-lg text-sm shadow-lg border border-danger/50">
                    ❌ Telefon (Amatör)
                  </span>
                  <span className="bg-[#10b981]/95 text-white font-bold px-3 py-1.5 rounded-lg text-sm shadow-lg border border-[#10b981]/50">
                    ✅ Sinematik
                  </span>
                </div>
                <Image
                  src={staticComparisonImg}
                  alt="Amatör ve Sinematik Çekim Karşılaştırması"
                  className="w-full h-auto object-cover aspect-video"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              {/* Labels below image — only on mobile */}
              <div className="flex justify-between mt-3 md:hidden">
                <span className="bg-danger/95 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-lg border border-danger/50">
                  ❌ Telefon (Amatör)
                </span>
                <span className="bg-[#10b981]/95 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-lg border border-[#10b981]/50">
                  ✅ Sinematik
                </span>
              </div>
              <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground/60 mt-4 font-bold">Gerçek Kalite Farkını İnceleyin</p>
            </div>
          </div>

          {/* Pain Points Stack (Right) */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-6">

            {data.painPoints.map((point) => (
              <div key={point.id} className="bento-card row-span-1 bg-card border border-border/50 hover:border-gold/30 hover:bg-muted/30 transition-all duration-500 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-[0.03] dark:opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 text-foreground">
                  {point.icon === "Clock" && <Clock className="w-32 h-32" />}
                  {point.icon === "TrendingDown" && <TrendingDown className="w-32 h-32" />}
                  {point.icon === "ZapOff" && <ZapOff className="w-32 h-32" />}
                </div>
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    {point.icon === "Clock" && <Clock className="w-5 h-5 text-red-500" />}
                    {point.icon === "TrendingDown" && <TrendingDown className="w-5 h-5 text-red-500" />}
                    {point.icon === "ZapOff" && <ZapOff className="w-5 h-5 text-red-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-foreground">{point.title}</h4>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed relative z-10">
                  {point.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Bottom Wide Box (Punchline) */}
          <div className="bento-card lg:col-span-12 bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-gold" />
            <blockquote className="max-w-4xl mx-auto text-center relative z-10">
              <p
                className="text-2xl md:text-3xl font-heading italic text-foreground/80 leading-relaxed font-bold"
                dangerouslySetInnerHTML={{ __html: data.blockquoteText }}
              />
              <footer className="mt-4 text-muted-foreground text-sm tracking-widest uppercase font-bold">{data.blockquoteAuthor}</footer>
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProblemSection;

