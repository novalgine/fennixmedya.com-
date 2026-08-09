"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import { CAPACITY_CONFIG } from "@/config/capacity";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";

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
    const faqs = fallbackFaqs;

    return (
        <section className="section-spacing bg-background relative z-10 w-full">
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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <SectionHeading
                        eyebrow="Merak Edilenler"
                        title="Sıkça Sorulan Sorular"
                        sub="Aklınıza takılan soruların cevaplarını burada bulabilirsiniz. Farklı bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin."
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
            </div>
        </section>
    );
};

export default FAQSection;
