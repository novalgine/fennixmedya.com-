import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Fennix Medya Gizlilik Politikası ve veri güvenliği şartları.",
  alternates: { canonical: "https://fennixmedya.com/gizlilik-politikasi" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/gizlilik-politikasi",
    title: "Gizlilik Politikası",
    description: "Fennix Medya Gizlilik Politikası ve veri güvenliği şartları.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-background pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-3xl md:text-5xl font-black mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
          <p>
            Fennix Medya olarak, web sitemizi ziyaret eden ve hizmetlerimizden yararlanan tüm 
            kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem vermekteyiz. 
            İşbu Gizlilik Politikası, web sitemizi (fennixmedya.com) kullanımınız sırasında elde edilen 
            bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h2>1. Toplanan Bilgiler</h2>
          <p>
            Hizmetlerimizle ilgili bilgi almak, strateji görüşmesi talep etmek veya içeriklerimizi 
            indirmek amacıyla formlarımızı doldurduğunuzda; adınız, soyadınız, e-posta adresiniz, 
            telefon numaranız ve şirket bilgileriniz gibi kişisel verilerinizi toplamaktayız. 
            Ayrıca site performansını ölçmek ve kullanıcı deneyimini iyileştirmek için anonim 
            kullanım verileri de toplanabilmektedir.
          </p>

          <h2>2. Bilgilerin Kullanımı</h2>
          <p>
            Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
          </p>
          <ul>
            <li>Taleplerinize yanıt vermek ve randevularınızı oluşturmak,</li>
            <li>İhtiyaçlarınıza uygun video prodüksiyon çözümleri sunmak,</li>
            <li>Sistem ve web sitesi performansını analiz etmek ve iyileştirmek,</li>
            <li>Onayınız dahilinde size özel teklifler ve bültenler göndermek.</li>
          </ul>

          <h2>3. Bilgi Güvenliği</h2>
          <p>
            Kişisel verilerinizi yetkisiz erişim, kullanım, değiştirme veya ifşa edilmeye karşı korumak 
            amacıyla uygun teknik ve idari güvenlik önlemleri almaktayız. Verileriniz, güvenli sunucularda 
            saklanmaktadır.
          </p>

          <h2>4. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz, başka web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından 
            Fennix Medya sorumlu tutulamaz. Diğer sitelere geçerken onların gizlilik politikalarını 
            okumanızı tavsiye ederiz.
          </p>

          <h2>5. Değişiklikler</h2>
          <p>
            Fennix Medya, işbu Gizlilik Politikası'nı zaman zaman güncelleyebilir. Önemli değişiklikler 
            olması durumunda web sitemiz üzerinden duyuru yapılacaktır.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Son Güncelleme Tarihi: Mayıs 2026
          </p>
        </div>
      </div>
    </div>
  );
}
