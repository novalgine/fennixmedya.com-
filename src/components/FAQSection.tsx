"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
    {
        question: "Çekimlerim için stüdyo veya kamera kiralamama gerek var mı?",
        answer: "Hayır. Sony FX30, Tamron 17-70mm lens, DJI RS4 gimbal, tripod ve Rode Wireless GO II mikrofonlarımla sizin mekânınıza geliyorum. Ortamın doğal ışığını en verimli kullanacak şekilde çalışırım.",
    },
    {
        question: "Süreç nasıl işliyor ve ne kadar vaktimi alacak?",
        answer: "Metinler önceden hazırlanır, sete \"bugün ne çeksek\" diye gitmeyiz. Birlikte belirlediğimiz gün — genelde öğleden sonra — ekipmanımla gelirim. Bir çekim gününde hedefim 4 Reels; günün akışına göre 3-5 arasında değişir. Aylık 8 videoyu iki sete çıkarak tamamlarız. Akşam eve dönünce kurguya başlarım.",
    },
    {
        question: "Videolarda ne konuşacağımı benim mi düşünmem gerekiyor?",
        answer: "Hayır. Markanızı tanıyıp metinleri ben yazarım. Ama siz kendi sektörünüzü benden iyi bildiğiniz için isterseniz siz yazarsınız, ya da ana konularınızdan yola çıkıp birlikte kurgularız. Üçü de olur.",
    },
    {
        question: "Sosyal medya hesaplarımın yönetimini ve paylaşımları da siz mi yapıyorsunuz?",
        answer: "İsterseniz evet — sosyal medya yönetimi ve Meta reklam yönetimi ayrı kalemler olarak pakete eklenebiliyor. Sadece video üretimi istiyorsanız da aylık paket tek başına çalışır; içerikleri yayınlamak size kalır.",
    },
    {
        question: "Çekilen videoları ya beğenmezsem? Revizyon hakkım var mı?",
        answer: "Teslim ettiğim içeriğin içinize sinmesi benim kırmızı çizgim. Kurgu, ritim, renk, altyazı gibi post-prodüksiyon aşamalarında revizyon hakkınız var. Videoları ay sonunu bekletmeden bittikçe teslim ettiğim için geri bildirimi erken alır, sonraki videolarda uygularım.",
    },
    {
        question: "Sadece video düzenleme (kurgu) hizmeti veriyor musunuz? Videoyu ben çekip yollasam?",
        answer: "Hayır. Farkım sadece kurgu değil, sette olan şey: kamera önünde nasıl durduğunuz, nasıl konuştuğunuz. Telefonla çekilmiş bir görüntüyü ne kadar iyi kurgularsam kurgulayayım o fark kapanmıyor. Bu yüzden uçtan uca çalışıyorum.",
    },
    {
        question: "Hangi sektördeki markaları kabul ediyorsunuz?",
        answer: "Klinikler, doktorlar, koçlar, danışmanlar, tiyatrolar, butik ve kurumsal markalar ana çalışma alanım. Kaliteyi koruyabilmek için ayda sınırlı sayıda marka alıyorum. Kimlerle çalışmadığımı da sayfada açıkça yazdım — okumanızı öneririm.",
    }
];

const FAQSection = () => {

    return (
        <section className="section-spacing bg-surface relative z-10 w-full">
            {/* FAQ Schema for SEO/GEO */}
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

            <div className="container-page relative z-10"><div className="max-w-4xl mx-auto">
                <Reveal>
                    <SectionHeading
                        eyebrow="Merak Edilenler"
                        title="Sıkça Sorulan Sorular"
                        sub="Aklınıza takılan soruların cevaplarını burada bulabilirsiniz. Farklı bir sorunuz varsa bana yazın."
                    />
                </Reveal>

                <Reveal delay={120} className="card-surface p-6 md:p-10 shadow-2xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border/40 bg-card rounded-xl px-6 data-[state=open]:border-gold/40 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/5 transition-all duration-300"
                                >
                                    <AccordionTrigger className="font-heading font-bold text-lg md:text-xl text-left hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                    </Accordion>
                </Reveal>
            </div></div>
        </section>
    );
};

export default FAQSection;
