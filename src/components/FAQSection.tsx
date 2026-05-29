"use client";
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { wpClient } from "@/lib/wp";
import { gql } from "graphql-request";
import { cleanWPContent, decodeHtmlEntities } from "@/lib/utils";
import { CAPACITY_CONFIG } from "@/config/capacity";
import JsonLd from "@/components/JsonLd";

const fallbackFaqs = [
    {
        question: "Çekimlerim için stüdyo veya kamera kiralamama gerek var mı?",
        answer: "Kesinlikle hayır. Biz kendi sinematik Cinema Line kameralarımız, ses ekipmanlarımız ve gimbal sistemlerimizle şirketinize veya dilediğiniz lokasyona geliyoruz.",
    },
    {
        question: "Süreç nasıl işliyor ve ne kadar vaktimi alacak?",
        answer: "Size yazdığımız ilk 4 metni onayladığınız andan itibaren çekim günü belirlemek için sizlerle iletişime geçeriz. Ortak belirlediğimiz gün ekipmanlarımızla mekanınıza geliriz. 4 videonun çekimi maksimum 2-3 saatte tamamlanır (çekimlerin içimize ve size sinmesi çok önemli). Çekim bittikten sonra ilk videoları kurgulamak üzere oradan ayrılırız. Bütün süreciniz bu kadar zahmetsizdir.",
    },
    {
        question: "Videolarda ne konuşacağımı benim mi düşünmem gerekiyor?",
        answer: "Hayır, tüm yükü omuzlarınızdan alıyoruz. Hedef kitlenizin acı noktalarını ve sektörünüzdeki trendleri analiz ederek videolarınızın tüm konseptlerini ve akıcı metinlerini biz yazıyoruz. Size sadece onaylamak ve kamera karşısında kendi uzmanlığınızı konuşturmak kalıyor.",
    },
    {
        question: "Sosyal medya hesaplarımın yönetimini ve paylaşımları da siz mi yapıyorsunuz?",
        answer: "Hayır. Biz standart bir 'sosyal medya ajansı' değiliz; biz premium bir içerik stüdyosuyuz. Sayfanızda yorumlara cevap vermek veya hikaye (story) paylaşmak yerine, tüm odağımızı ve enerjimizi sizin markanıza 'Otorite' kazandıracak o sinematik videoları üretmeye harcıyoruz. Biz stratejiyi ve başyapıtı teslim ederiz, yayınlaması size kalır.",
    },
    {
        question: "Çekilen videoları ya beğenmezsem? Revizyon hakkım var mı?",
        answer: "Teslim ettiğimiz içeriklerin içinize sinmesi bizim kırmızı çizgimiz. İlk teslimatta videoları izleyip geri bildirimde bulunabilirsiniz. Kurgu, ritim, renk veya altyazı gibi post-prodüksiyon süreçlerinde revizyon hakkınız her zaman mevcuttur.",
    },
    {
        question: "Sadece video düzenleme (kurgu) hizmeti veriyor musunuz? Videoyu ben çekip yollasam?",
        answer: "Maalesef hayır. Bizim en büyük farkımız 'Sinematik Prodüksiyon' kalitemiz ve setteki profesyonelliğimizdir. Telefonunuzla evde veya ofiste çekeceğiniz bir görüntüyü ne kadar iyi kurgularsak kurgulayalım, müşterinize vaat ettiğimiz o 'Zirve' algısına ulaşılamaz. Kalitemizi bölmüyor, sadece uçtan uca anahtar teslim hizmet veriyoruz.",
    },
    {
        question: "Hangi sektördeki markaları kabul ediyorsunuz?",
        answer: `Aylık kontenjanımız, kalite standartlarımızı koruyabilmek için ${CAPACITY_CONFIG.TOTAL_SLOTS} marka ile sınırlıdır. Kendi alanında değer üreten, ancak bunu dijital dünyadaki potansiyel müşterilerine henüz %100 profesyonel bir şekilde yansıtamayan tüm uzmanlarla (Danışmanlar, Sağlık Profesyonelleri, Ticari İşletme Sahipleri vb.) çalışıyoruz.`,
    }
];

const FAQSection = () => {
    const { ref, isVisible } = useScrollFadeIn(0.1);
    const [faqs, setFaqs] = useState(fallbackFaqs);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                // Fetch posts from WP category "faq"
                const query = gql`
                    query GetFaqs {
                        posts(where: { categoryName: "faq" }, first: 20) {
                            nodes {
                                title
                                content
                            }
                        }
                    }
                `;
                const data = await wpClient.request<{
                    posts?: { nodes?: { title?: string; content?: string }[] }
                }>(query);

                if (data?.posts?.nodes && data.posts.nodes.length > 0) {
                    const formattedFaqs = data.posts.nodes.map((node) => ({
                        question: decodeHtmlEntities(node.title || ""),
                        answer: cleanWPContent(node.content || "")
                    }));
                    setFaqs(formattedFaqs);
                }
            } catch (err) {
                console.log("Using static FAQs (WordPress API not reachable yet).");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    return (
        <section className="section-spacing bg-background relative z-10 w-full" ref={ref}>
            {/* Dynamic FAQ Schema for SEO/GEO */}
            {!isLoading && (
                <JsonLd
                    data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }}
                />
            )}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className="text-center mb-16 transition-all duration-700 ease-out"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)"
                    }}
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                        Sıkça Sorulan <span className="text-gradient-gold">Sorular</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                        Farklı bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin.
                    </p>
                </div>

                <div
                    className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-10 shadow-2xl transition-all duration-700 ease-out delay-150"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)"
                    }}
                >
                    {isLoading ? (
                        <div className="w-full space-y-4 animate-pulse">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-16 bg-muted/50 rounded-xl w-full"></div>
                            ))}
                        </div>
                    ) : (
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border/40 bg-card rounded-xl px-6 data-[state=open]:border-gold/40 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/5 transition-all duration-300"
                                >
                                    <AccordionTrigger className="font-heading font-bold text-lg md:text-xl text-left hover:text-primary transition-colors py-5 [&[data-state=open]]:text-gradient-gold">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
